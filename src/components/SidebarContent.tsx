import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Search, Plus, Clock, Star, MapPin, Tag, X, Lock } from 'lucide-react';
import { ItemType, TravelItem, DaySchedule, Region, Template } from '../types';
import { SAMPLE_ASSETS, TEMPLATES, CATEGORY_FILTERS, REGION_FILTERS, COUNTRY_FILTERS, CITY_FILTERS, POPULAR_TAGS, SAMPLE_CREATORS } from '../data/index';
import { getFallbackImage } from '../utils';
import { useConfirm } from '../hooks';

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
    lang?: string;
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

            {/* Region Filter - Two Level: Country → City */}
            <div className={`px-4 py-2 border-b border-gray-100 transition-colors ${highlight ? 'bg-teal-50/50' : 'bg-gray-50/50'}`}>
                {activeCountry === 'all' ? (
                    /* Level 1: Country Selection */
                    <div className="flex gap-1 flex-nowrap overflow-x-auto scrollbar-hide">
                        {COUNTRY_FILTERS.map(country => (
                            <button
                                key={country.id}
                                onClick={() => {
                                    if (country.id === 'all') {
                                        setActiveRegion('all');
                                    } else {
                                        setActiveCountry(country.id);
                                        // Auto-select first city of the country
                                        const cities = CITY_FILTERS[country.id];
                                        if (cities && cities.length > 0) {
                                            setActiveRegion(cities[0].id);
                                        }
                                    }
                                }}
                                className={`flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${activeRegion === 'all' && country.id === 'all'
                                    ? 'bg-teal-600 text-white shadow-sm'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-300'
                                    }`}
                            >
                                <span>{country.icon}</span>
                                <span>{lang === 'en' && country.labelEn ? country.labelEn : country.label}</span>
                            </button>
                        ))}
                    </div>
                ) : (
                    /* Level 2: City Selection (within selected country) */
                    <div className="flex gap-1 flex-nowrap overflow-x-auto scrollbar-hide">
                        {/* Back Button */}
                        <button
                            onClick={() => {
                                setActiveCountry('all');
                                setActiveRegion('all');
                            }}
                            className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all"
                        >
                            <span>←</span>
                            <span>{COUNTRY_FILTERS.find(c => c.id === activeCountry)?.[lang === 'en' ? 'labelEn' : 'label']}</span>
                        </button>

                        {/* City Buttons */}
                        {CITY_FILTERS[activeCountry]?.map(city => (
                            <button
                                key={city.id}
                                onClick={() => setActiveRegion(city.id)}
                                className={`flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${activeRegion === city.id
                                    ? 'bg-teal-600 text-white shadow-sm'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-300'
                                    }`}
                            >
                                <span>{city.icon}</span>
                                <span>{lang === 'en' && city.labelEn ? city.labelEn : city.label}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 scrollbar-thin scrollbar-thumb-gray-200">
                {activeTab === 'assets' && (
                    <div className="space-y-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                            <input type="text" placeholder={t.searchPlaceholder} className="w-full pl-9 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-1 focus:ring-teal-500 transition-all" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                        </div>
                        <button onClick={() => setShowCustomItemModal(true)} className="w-full py-2 border border-dashed border-teal-200 text-teal-600 rounded-lg text-sm font-medium hover:bg-teal-50 transition-all flex items-center justify-center gap-1"><Plus size={14} /> {t.createCustom}</button>
                        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                            {CATEGORY_FILTERS.map(cat => (
                                <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${activeCategory === cat.id ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-gray-600 border-gray-100 hover:bg-gray-50'}`}>{t[cat.label] || cat.label}</button>
                            ))}
                        </div>
                        {/* Tag Pills */}
                        <div className="relative">
                            <div className="flex items-center gap-1 mb-1">
                                <Tag size={12} className="text-gray-400" />
                                <span className="text-[10px] text-gray-400 font-medium">標籤篩選</span>
                                {activeTag && (
                                    <button
                                        onClick={() => setActiveTag(null)}
                                        className="ml-auto flex items-center gap-0.5 text-[10px] text-teal-600 hover:text-teal-700"
                                    >
                                        <X size={10} />
                                        清除
                                    </button>
                                )}
                            </div>
                            <div className="flex gap-1.5 flex-wrap">
                                {POPULAR_TAGS.map(tag => (
                                    <button
                                        key={tag.id}
                                        onClick={() => setActiveTag(activeTag === tag.id ? null : tag.id)}
                                        className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium transition-all ${activeTag === tag.id
                                            ? 'bg-purple-600 text-white shadow-sm'
                                            : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
                                            }`}
                                    >
                                        <span>{tag.icon}</span>
                                        <span>#{lang === 'en' && tag.labelEn ? tag.labelEn : tag.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {filteredAssets.map((item) => {
                                const isPremium = item.tier === 'premium';
                                const isLocked = item.isLocked;

                                // Determine display title: Marketing Title if locked, else real title
                                const displayTitleRaw = isLocked
                                    ? (lang === 'en' && item.marketingTitleEn ? item.marketingTitleEn : item.marketingTitle)
                                    : (lang === 'en' && item.titleEn ? item.titleEn : item.title);
                                const title = displayTitleRaw || item.title; // Fallback

                                const description = (lang === 'en' && item.descriptionEn) ? item.descriptionEn : item.description;

                                return (
                                    <div
                                        key={item.id}
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, item, 'sidebar')}
                                        onClick={() => {
                                            if (window.innerWidth < 1024) {
                                                setMobilePreviewItem(item);
                                            }
                                        }}
                                        onMouseEnter={(e) => {
                                            if (window.innerWidth >= 1024) {
                                                const rect = e.currentTarget.getBoundingClientRect();
                                                setTooltipPos({
                                                    x: rect.left + rect.width / 2,
                                                    y: rect.top - 8
                                                });
                                                setHoveredItem(item);
                                            }
                                        }}
                                        onMouseLeave={() => setHoveredItem(null)}
                                        className={`group border rounded-lg p-2 cursor-grab active:cursor-grabbing transition-all flex flex-col gap-1.5 relative hover:shadow-md
                                            ${isPremium
                                                ? 'bg-gradient-to-br from-amber-50/80 to-purple-50/80 border-amber-200 hover:border-amber-400'
                                                : 'bg-white border-gray-100 hover:border-teal-400'
                                            }
                                        `}
                                    >
                                        {/* Premium Badge */}
                                        {isPremium && (
                                            <div className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-amber-400 to-amber-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm z-10 flex items-center gap-0.5">
                                                <span>💎</span>
                                                <span>Secret</span>
                                            </div>
                                        )}

                                        <div className="relative text-2xl h-12 flex items-center justify-center rounded w-full overflow-hidden">
                                            {/* Image Background for Premium */}
                                            {isPremium && item.marketingImage ? (
                                                <div
                                                    className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-110 transition-transform duration-500"
                                                    style={{ backgroundImage: `url(${item.marketingImage})` }}
                                                />
                                            ) : (
                                                <div className={`absolute inset-0 ${isPremium ? 'bg-amber-100/50' : 'bg-gray-50'}`} />
                                            )}

                                            {/* Icon/Emoji */}
                                            <span className="relative z-10 drop-shadow-md filter">{item.image || getFallbackImage(item.type)}</span>

                                            {/* Lock Overlay */}
                                            {isLocked && (
                                                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                                                    <Lock size={12} className="text-white drop-shadow-md opacity-60" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h4 className={`font-bold text-xs truncate ${isPremium ? 'text-amber-900' : 'text-gray-700'}`} title={title}>
                                                {title}
                                            </h4>
                                            <div className="flex items-center justify-between mt-0.5">
                                                <span className="text-[10px] text-gray-400">{item.duration}</span>
                                                {isLocked ? (
                                                    <span className="text-[10px] font-bold text-amber-600 flex items-center gap-0.5">
                                                        <Lock size={8} /> Unlock
                                                    </span>
                                                ) : (
                                                    <span className="text-[10px] font-bold text-teal-600">¥{item.price?.toLocaleString()}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            {filteredAssets.length === 0 && (
                                <div className="col-span-2 text-center text-gray-400 text-sm py-8">
                                    {t.searchPlaceholder}...
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {activeTab === 'templates' && (
                    <div className="space-y-3">
                        <div className="flex items-center justify-between px-1 mb-2">
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

                        {filteredTemplates.map(template => {
                            const creator = SAMPLE_CREATORS.find(c => c.id === template.authorId);

                            // Bilingual logic
                            const tName = (lang === 'en' && template.nameEn) ? template.nameEn : template.name;
                            const tAuthor = (lang === 'en')
                                ? (creator?.nameEn || template.authorEn || creator?.name || template.author)
                                : (creator?.name || template.author);
                            const tTags = (lang === 'en' && template.tagsEn) ? template.tagsEn : template.tags;

                            return (
                                <div
                                    key={template.id}
                                    className="p-3 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow bg-white relative group cursor-pointer hover:border-teal-200"
                                    onClick={() => onPreviewTemplate?.(template)}
                                >
                                    <div className="flex justify-between items-start mb-1 gap-2">
                                        <h3 className="font-bold text-gray-800 text-sm flex-1 leading-tight">
                                            {tName}
                                        </h3>
                                        {/* Tier Badge & Price Badges */}
                                        <div className="flex flex-col items-end gap-1">
                                            {/* Price/Status Badges */}
                                            {template.price ? (
                                                <div className="flex items-center gap-1">
                                                    {/* Removed redundant top-right price */}
                                                    {template.originalPrice && (
                                                        <span className="bg-yellow-400 text-yellow-900 text-[9px] px-1.5 py-0.5 rounded font-bold whitespace-nowrap transform -rotate-2">
                                                            {Math.round((1 - template.price / template.originalPrice) * 100)}% OFF
                                                        </span>
                                                    )}
                                                </div>
                                            ) : (
                                                <span className="bg-gray-100 text-gray-500 text-[10px] px-1.5 py-0.5 rounded font-bold whitespace-nowrap border border-gray-200">
                                                    FREE
                                                </span>
                                            )}

                                            {/* Tier Info (Simplified) */}
                                            {template.tier && (
                                                <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium whitespace-nowrap shrink-0 ${template.tier === 'official' ? 'text-amber-700 bg-amber-50' :
                                                    template.tier === 'creator' ? 'text-teal-700 bg-teal-50' : 'text-gray-500 bg-gray-50'
                                                    }`}>
                                                    {template.tier === 'official' && '🏆 Official'}
                                                    {template.tier === 'creator' && '⭐ Creator'}
                                                    {template.tier === 'community' && '👤 Community'}
                                                </span>
                                            )}

                                            {/* Small Early Bird Tag */}
                                            {template.price && template.originalPrice && template.price < template.originalPrice && (
                                                <span className="text-[9px] bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded font-bold whitespace-nowrap border border-rose-200 animate-pulse">
                                                    🔥 Early Bird
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Metrics: CopiedCount + Rating */}
                                    <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-2">
                                        {template.copiedCount && template.copiedCount > 0 && (
                                            <span className="flex items-center gap-0.5">
                                                🔗 <span className="font-medium">{template.copiedCount.toLocaleString()}</span> {lang === 'en' ? 'applied' : '已套用'}
                                            </span>
                                        )}
                                        {template.rating && (
                                            <span className="flex items-center gap-0.5 text-yellow-600">
                                                <Star size={10} fill="currentColor" />
                                                <span className="font-medium">{template.rating}</span>
                                            </span>
                                        )}
                                    </div>

                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onCreatorClick(template.authorId);
                                        }}
                                        className="flex items-center gap-2 text-xs text-gray-500 mb-2 p-1 -ml-1 rounded hover:bg-gray-50 cursor-pointer transition-colors w-max max-w-full"
                                        title="View Creator Profile"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] overflow-hidden shrink-0 border border-gray-100">
                                            {creator?.avatar || '👤'}
                                        </div>
                                        <span className="truncate font-medium text-gray-600 group-hover:text-teal-600 transition-colors">
                                            {tAuthor}
                                        </span>
                                        {subscribedCreators.includes(template.authorId) && (
                                            <span className="ml-1 text-[10px] text-teal-600 bg-teal-50 px-1 py-0.5 rounded-full flex items-center">
                                                ✓
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {tTags && tTags.map(tag => (
                                            <span key={tag} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                        <span className="text-[10px] text-gray-400 px-1 py-0.5 ml-auto">
                                            {template.duration} {t.day}
                                        </span>
                                    </div>

                                    {template.isLocked && !template.purchased ? (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                // Beta: 直接解鎖，不需付費
                                                template.purchased = true;
                                                template.isLocked = false;
                                                confirm({
                                                    title: lang === 'zh' ? '解鎖成功' : 'Unlocked Success',
                                                    message: lang === 'zh' ? "🎁 Beta 免費解鎖成功！" : "🎁 Beta Unlocked successfully!",
                                                    type: 'success',
                                                    confirmText: lang === 'zh' ? '太棒了' : 'Awesome'
                                                });
                                                applyTemplate({ name: template.name, duration: template.duration, schedule: template.schedule, region: template.region });
                                            }}
                                            className="w-full py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs rounded hover:from-amber-600 hover:to-orange-600 transition-colors font-bold flex items-center justify-center gap-1"
                                        >
                                            🎁 Beta 免費解鎖
                                        </button>
                                    ) : (
                                        <button onClick={(e) => {
                                            e.stopPropagation();
                                            applyTemplate({ name: template.name, duration: template.duration, schedule: template.schedule, region: template.region });
                                        }} className="w-full py-1.5 bg-gray-50 text-teal-600 text-xs rounded hover:bg-teal-50 transition-colors font-medium">
                                            {t.apply || 'Apply'}
                                        </button>
                                    )}
                                </div>
                            )
                        })}
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

