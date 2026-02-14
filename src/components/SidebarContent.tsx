import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Search, Plus, Star, Tag, X, Lock } from 'lucide-react';
import { ItemType, TravelItem, DaySchedule, Region, Template, LangType } from '../types';
import { SAMPLE_ASSETS, TEMPLATES, CATEGORY_FILTERS, REGION_FILTERS, COUNTRY_FILTERS, CITY_FILTERS, POPULAR_TAGS, SAMPLE_CREATORS } from '../data/index';
import { getFallbackImage } from '../utils';
import { useConfirm } from '../hooks';

// Modular Sub-components
import { AssetItemCard } from './Sidebar/AssetItemCard';
import { TemplateItemCard } from './Sidebar/TemplateItemCard';
import { CategoryCarousel } from './Sidebar/CategoryCarousel';
import { RegionCarousel } from './Sidebar/RegionCarousel';
import { TagCarousel } from './Sidebar/TagCarousel';

interface SidebarContentProps {
    activeTab: 'assets' | 'templates';
    setActiveTab: (tab: 'assets' | 'templates') => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    activeCategory: 'all' | ItemType;
    setActiveCategory: (cat: 'all' | ItemType) => void;
    activeRegion: Region;
    setActiveRegion: (region: Region) => void;
    setShowCustomItemModal: (show: boolean) => void;
    handleDragStart: (e: React.DragEvent, item: TravelItem, source: 'sidebar' | 'canvas') => void;
    handleTapToAdd: (item: TravelItem) => void;
    applyTemplate: (template: any) => void | Promise<void>;
    t: any;
    lang?: LangType;
    customAssets?: TravelItem[];
    subscribedCreators: string[];
    onCreatorClick: (creatorId: string) => void;
    onPreviewTemplate?: (template: Template) => void;
    highlight?: boolean;
}

const SidebarContent: React.FC<SidebarContentProps> = ({
    activeTab, setActiveTab, searchQuery, setSearchQuery, activeCategory, setActiveCategory,
    activeRegion, setActiveRegion,
    setShowCustomItemModal, handleDragStart, handleTapToAdd, applyTemplate, t, lang = 'zh', customAssets = [],
    subscribedCreators = [], onCreatorClick, onPreviewTemplate, highlight
}) => {
    const { confirm } = useConfirm();
    // Local tag filter state
    const [activeTag, setActiveTag] = useState<string | null>(null);
    const [showSubscribedOnly, setShowSubscribedOnly] = useState(false);
    // Mobile preview bottom sheet state
    const [mobilePreviewItem, setMobilePreviewItem] = useState<TravelItem | null>(null);

    // Country-City hierarchy state
    const [activeCountry, setActiveCountry] = useState<string>('all');

    // [NEW] Sync internal activeCountry when external activeRegion changes (Context Awareness)
    React.useEffect(() => {
        if (activeRegion === 'all') {
            setActiveCountry('all');
            return;
        }

        // Find which country this city belongs to
        for (const countryId in CITY_FILTERS) {
            if (CITY_FILTERS[countryId].some(city => city.id === activeRegion)) {
                setActiveCountry(countryId);
                break;
            }
        }
    }, [activeRegion]);

    // Desktop hover tooltip state (Portal-based)
    const [hoveredItem, setHoveredItem] = useState<TravelItem | null>(null);
    const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    // Check if mobile/tablet (updated to match LG breakpoint)
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

    // Combine Sample Assets with Custom Assets
    const allAssets = [...SAMPLE_ASSETS, ...customAssets];

    // Filter assets by region, category, search query, and tag
    const filteredAssets = allAssets.filter(item => {
        const matchesRegion = activeRegion === 'all' || item.region === activeRegion;
        const matchesCategory = activeCategory === 'all' || item.type === activeCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
        const matchesTag = !activeTag || (item.tags && item.tags.includes(activeTag));
        return matchesRegion && matchesCategory && matchesSearch && matchesTag;
    });

    // Filter templates by region and subscription
    const filteredTemplates = TEMPLATES.filter(template => {
        const matchesRegion = activeRegion === 'all' || template.region === activeRegion;
        const matchesSub = !showSubscribedOnly || subscribedCreators.includes(template.authorId);
        return matchesRegion && matchesSub;
    });

    return (
        <div className={`flex flex-col h-full bg-white transition-all duration-300 ${highlight ? 'ring-4 ring-teal-400/50 shadow-[0_0_30px_rgba(45,212,191,0.3)] animate-[wiggle_0.5s_ease-in-out_infinite]' : ''}`}>
            <div className="flex border-b border-gray-100">
                <button onClick={() => setActiveTab('assets')} className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === 'assets' ? 'text-teal-600 border-b-2 border-teal-600 bg-teal-50' : 'text-gray-500 hover:bg-gray-50'}`}>{t.assets}</button>
                <button onClick={() => setActiveTab('templates')} className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === 'templates' ? 'text-teal-600 border-b-2 border-teal-600 bg-teal-50' : 'text-gray-500 hover:bg-gray-50'}`}>{t.templates}</button>
            </div>

            {/* Main Scrollable Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-200">
                {/* Layer 1: Region Selection (Scrolls with text) */}
                <RegionCarousel
                    activeCountry={activeCountry}
                    setActiveCountry={setActiveCountry}
                    activeRegion={activeRegion}
                    setActiveRegion={setActiveRegion}
                    lang={lang}
                />

                {/* Layer 2: Sticky Toolbar (Search + Categories + Tags) */}
                <div className="sticky top-0 z-[50] bg-white px-4 py-4 space-y-4 shadow-md border-b border-gray-100">
                    {activeTab === 'assets' && (
                        <>
                            <div className="relative">
                                <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder={t.searchPlaceholder}
                                    className="w-full pl-9 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-1 focus:ring-teal-500 transition-all"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <button
                                onClick={() => setShowCustomItemModal(true)}
                                className="w-full py-2 border border-dashed border-teal-200 text-teal-600 rounded-lg text-sm font-medium hover:bg-teal-50 transition-all flex items-center justify-center gap-1"
                            >
                                <Plus size={14} /> {t.createCustom}
                            </button>

                            <CategoryCarousel
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                                lang={lang}
                                t={t}
                            />

                            <TagCarousel
                                activeTag={activeTag}
                                setActiveTag={setActiveTag}
                                lang={lang}
                            />
                        </>
                    )}

                    {activeTab === 'templates' && (
                        <div className="flex items-center justify-between px-1">
                            <span className="text-xs text-gray-400">
                                {filteredTemplates.length} {t.templates}
                            </span>
                            <button
                                onClick={() => setShowSubscribedOnly(!showSubscribedOnly)}
                                className={`text-xs px-2 py-1 rounded transition-colors border ${showSubscribedOnly
                                    ? 'bg-teal-50 text-teal-600 border-teal-200 font-medium'
                                    : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
                                    }`}
                            >
                                {showSubscribedOnly ? '✓ 已關注' : '只看已關注'}
                            </button>
                        </div>
                    )}
                </div>

                {/* Layer 3: Main Content Area */}
                <div className="p-4 pt-2">
                    {activeTab === 'assets' && (
                        <div className="grid grid-cols-2 gap-2">
                            {filteredAssets.map((item) => (
                                <AssetItemCard
                                    key={item.id}
                                    item={item}
                                    lang={lang}
                                    isMobile={isMobile}
                                    onDragStart={(e) => handleDragStart(e, item, 'sidebar')}
                                    onClick={() => {
                                        if (isMobile) setMobilePreviewItem(item);
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isMobile) {
                                            const rect = e.currentTarget.getBoundingClientRect();
                                            setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top - 8 });
                                            setHoveredItem(item);
                                        }
                                    }}
                                    onMouseLeave={() => setHoveredItem(null)}
                                />
                            ))}
                            {filteredAssets.length === 0 && (
                                <div className="col-span-2 text-center text-gray-400 text-sm py-8">
                                    {t.searchPlaceholder}...
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'templates' && (
                        <div className="space-y-3">
                            {filteredTemplates.map(template => (
                                <TemplateItemCard
                                    key={template.id}
                                    template={template}
                                    creator={SAMPLE_CREATORS.find(c => c.id === template.authorId)}
                                    lang={lang}
                                    subscribedCreators={subscribedCreators}
                                    t={t}
                                    onPreview={() => onPreviewTemplate?.(template)}
                                    onCreatorClick={onCreatorClick}
                                    onApply={(tpl) => {
                                        if (tpl.isLocked && !tpl.purchased) {
                                            tpl.purchased = true;
                                            tpl.isLocked = false;
                                            confirm({
                                                title: lang === 'zh' ? '解鎖成功' : 'Unlocked Success',
                                                message: lang === 'zh' ? "🎁 Beta 免費解鎖成功！" : "🎁 Beta Unlocked successfully!",
                                                type: 'success',
                                                confirmText: lang === 'zh' ? '太棒了' : 'Awesome'
                                            });
                                        }
                                        applyTemplate({ name: tpl.name, duration: tpl.duration, schedule: tpl.schedule, region: tpl.region });
                                    }}
                                />
                            ))}
                            {filteredTemplates.length === 0 && (
                                <div className="text-center text-gray-400 text-sm py-8 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                                    <p className="mb-2">😕 找不到模板</p>
                                    <button onClick={() => setShowSubscribedOnly(false)} className="text-teal-600 hover:underline text-xs">
                                        {showSubscribedOnly ? '查看所有達人' : '嘗試其他篩選'}
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Preview Bottom Sheet */}
            {mobilePreviewItem && (
                <div className="lg:hidden fixed inset-0 z-[100]">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setMobilePreviewItem(null)}
                    />

                    {/* Bottom Sheet */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl max-h-[70vh] overflow-y-auto animate-slide-up">
                        {/* Handle */}
                        <div className="sticky top-0 bg-white py-2 flex justify-center">
                            <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
                        </div>

                        {/* Content */}
                        <div className="px-5 pb-24">
                            {/* Header */}
                            <div className="flex items-start gap-3 mb-4">
                                <div className="text-4xl bg-gray-50 w-16 h-16 flex items-center justify-center rounded-xl">
                                    {mobilePreviewItem.image || getFallbackImage(mobilePreviewItem.type)}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-800 text-lg">
                                        {(lang === 'en' && mobilePreviewItem.titleEn) ? mobilePreviewItem.titleEn : mobilePreviewItem.title}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        {mobilePreviewItem.rating && (
                                            <span className="text-yellow-500 text-sm">★ {mobilePreviewItem.rating}</span>
                                        )}
                                        <span className="text-teal-600 font-bold text-sm">
                                            {mobilePreviewItem.price === 0 ? (lang === 'en' ? 'Free' : '免費') : `¥${mobilePreviewItem.price?.toLocaleString()}`}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            {mobilePreviewItem.description && (
                                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                                    {(lang === 'en' && mobilePreviewItem.descriptionEn) ? mobilePreviewItem.descriptionEn : mobilePreviewItem.description}
                                </p>
                            )}

                            {/* Info Grid */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                {mobilePreviewItem.openingHours && (
                                    <div className="bg-orange-50 p-3 rounded-lg">
                                        <div className="text-orange-400 text-xs font-bold mb-1">⏰ 營業時間</div>
                                        <div className="text-orange-700 text-sm">{mobilePreviewItem.openingHours}</div>
                                    </div>
                                )}
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <div className="text-blue-400 text-xs font-bold mb-1">⏱️ 建議停留</div>
                                    <div className="text-blue-700 text-sm">{mobilePreviewItem.duration || '-'}</div>
                                </div>
                            </div>

                            {/* Address */}
                            {mobilePreviewItem.address && (
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                    <span>📍</span>
                                    <span>{mobilePreviewItem.address}</span>
                                </div>
                            )}

                            {/* Tips */}
                            {mobilePreviewItem.tips && (
                                <div className="bg-purple-50 border-l-3 border-purple-400 p-3 rounded-r-lg mb-3">
                                    <div className="text-purple-600 text-xs font-bold mb-1">💡 小撇步</div>
                                    <div className="text-purple-700 text-sm">{mobilePreviewItem.tips}</div>
                                </div>
                            )}

                            {/* Fun Fact */}
                            {mobilePreviewItem.funFact && (
                                <div className="bg-yellow-50 border-l-3 border-yellow-400 p-3 rounded-r-lg mb-4">
                                    <div className="text-yellow-600 text-xs font-bold mb-1">✨ 冷知識</div>
                                    <div className="text-yellow-700 text-sm">{mobilePreviewItem.funFact}</div>
                                </div>
                            )}

                            {/* Action Button */}
                            <button
                                onClick={() => {
                                    handleTapToAdd(mobilePreviewItem);
                                    setMobilePreviewItem(null);
                                }}
                                className="w-full py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all"
                            >
                                加入行程
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop Hover Tooltip - Portal (rendered at body level, above sidebar overflow) */}
            {hoveredItem && typeof document !== 'undefined' && createPortal(
                <div
                    className="fixed z-[9999] w-52 bg-teal-50 rounded-lg shadow-2xl border border-teal-200 p-3 pointer-events-none"
                    style={{
                        left: Math.max(120, tooltipPos.x), // Minimum 120px from left edge
                        top: tooltipPos.y,
                        transform: 'translate(-50%, -100%)'
                    }}
                >
                    {/* Arrow pointing down */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-teal-50"></div>

                    {/* Header */}
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{hoveredItem.image || getFallbackImage(hoveredItem.type)}</span>
                        <div className="flex-1 min-w-0">
                            <h5 className="font-bold text-gray-800 text-sm leading-tight truncate">
                                {(lang === 'en' && hoveredItem.isLocked && hoveredItem.marketingTitleEn
                                    ? hoveredItem.marketingTitleEn
                                    : lang === 'en' && hoveredItem.titleEn
                                        ? hoveredItem.titleEn
                                        : hoveredItem.isLocked && hoveredItem.marketingTitle
                                            ? hoveredItem.marketingTitle
                                            : hoveredItem.title)}
                            </h5>
                            {hoveredItem.rating && (
                                <span className="text-yellow-500 text-xs">★ {hoveredItem.rating}</span>
                            )}
                        </div>
                    </div>

                    {/* Key Info */}
                    <div className="text-xs space-y-1">
                        {hoveredItem.openingHours && (
                            <div className="flex items-center gap-1.5 text-gray-500">
                                <span>⏰</span>
                                <span>{hoveredItem.openingHours}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-1.5 text-teal-600 font-bold">
                            <span>💴</span>
                            <span>{hoveredItem.price === 0 ? (lang === 'en' ? 'Free' : '免費') : `¥${hoveredItem.price?.toLocaleString()}`}</span>
                        </div>
                        {hoveredItem.address && (
                            <div className="flex items-center gap-1.5 text-gray-400">
                                <span>📍</span>
                                {hoveredItem.isLocked ? (
                                    <span className="italic opacity-60">Unlock to view address</span>
                                ) : (
                                    <span className="truncate">{hoveredItem.address}</span>
                                )}
                            </div>
                        )}
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default SidebarContent;

