import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Search, Plus, X, Check, MapPin, Map, Package, Wallet, ListChecks } from 'lucide-react';
import { ItemType, TravelItem, Region, LangType, Plan, ChecklistItem, TimeSlot, ScheduleItem } from '../types';
import BudgetView from './BudgetView';
import ChecklistView from './ChecklistView';
import { SAMPLE_ASSETS, MELBOURNE_ASSETS, CATEGORY_FILTERS, CITY_FILTERS, SAMPLE_CREATORS } from '../data/index';
import { getFallbackImage } from '../utils';
import { useConfirm } from '../hooks';

// Modular Sub-components
import { AssetItemCard } from './Sidebar/AssetItemCard';
import { CategoryCarousel } from './Sidebar/CategoryCarousel';
import { RegionCarousel } from './Sidebar/RegionCarousel';
import { TagCarousel } from './Sidebar/TagCarousel';
import { PlanListView } from './Sidebar/PlanListView';

interface SidebarContentProps {
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
    highlight?: boolean;
    isSlim?: boolean; // [NEW] Flag to trigger Phase 1 simplified UI
    activeTab: 'assets' | 'templates' | 'budget' | 'checklist' | 'projects';
    setActiveTab: (tab: 'assets' | 'templates' | 'budget' | 'checklist' | 'projects') => void;
    activePlan: Plan;
    plans: Plan[];
    onSelectPlan: (id: string) => void;
    handleCreatePlan: (data?: any) => void;
    handleDeletePlan: (id: string, e: React.MouseEvent) => void;
    budgetLimit: number;
    setBudgetLimit: (limit: number) => void;
    calculateTotalBudget: () => number;
    calculateCategoryBreakdown: () => any;
    onUpdateChecklist: (checklist: ChecklistItem[]) => void;
    showToastMessage: (message: string, type: any) => void;
    currency?: string;
    exchangeRate?: number;
    onSetSettings?: (currency: string, rate: number) => void;

    // Phase 20 additions
    addToSlotTarget?: TimeSlot | null;
    currentDay?: number;
    onExitDiscovery?: () => void;
    discoveryCreatorId?: string | null;

    // Phase 21 additions
    setShowMobileLibrary?: (show: boolean) => void;
    onExploreCreatorMap?: (creatorId: string, name: string) => void;
    onModeChange?: (mode: 'list' | 'map') => void;
    sidebarMode?: 'list' | 'map';
    onSelectItem?: (item: TravelItem) => void;
    setSidebarMode?: (mode: 'list' | 'map') => void;
    selectedItem?: TravelItem | ScheduleItem | null;
}

export const SidebarContent: React.FC<SidebarContentProps> = ({
    searchQuery, setSearchQuery, activeCategory, setActiveCategory,
    activeRegion, setActiveRegion,
    setShowCustomItemModal, handleDragStart, handleTapToAdd, applyTemplate, t, lang = 'zh', customAssets = [],
    highlight, isSlim = false,
    activeTab, setActiveTab, activePlan, plans, onSelectPlan, handleCreatePlan, handleDeletePlan,
    budgetLimit, setBudgetLimit, calculateTotalBudget, calculateCategoryBreakdown,
    onUpdateChecklist, showToastMessage, currency = 'TWD', exchangeRate = 0.21, onSetSettings,
    addToSlotTarget, currentDay, onExitDiscovery, discoveryCreatorId,
    setShowMobileLibrary, onExploreCreatorMap, onModeChange,
    sidebarMode = 'list', setSidebarMode, onSelectItem,
    selectedItem
}) => {
    const { confirm } = useConfirm();

    // Internal handler to wrap the prop and ensure parent logic (App.tsx) runs
    const handleModeChange = (mode: 'list' | 'map') => {
        if (setSidebarMode) setSidebarMode(mode);
        if (onModeChange) onModeChange(mode);
    };

    // Local tag filter state
    const [activeTag, setActiveTag] = useState<string | null>(null);
    const [showCitySelector, setShowCitySelector] = useState(false);
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
        // [STRICT] Only show items matching the current city, unless 'All' is selected.
        // We also allow 'all' region items to show up everywhere (Universal assets).
        const matchesRegion = activeRegion === 'all' || item.region === activeRegion || item.region === 'all';

        // Custom balancing logic: 
        // 1. If 'custom' cat selected, show everything with isCustom: true OR from customAssets array
        const isCustomItem = item.isCustom || customAssets.some(ca => ca.id === item.id);

        const matchesCategory = activeCategory === 'all'
            ? true
            : activeCategory === 'custom'
                ? isCustomItem
                : item.type === activeCategory;

        const safeTitle = item.title || '';
        const safeSearch = searchQuery || '';
        const matchesSearch = safeTitle.toLowerCase().includes(safeSearch.toLowerCase()) ||
            (item.tags && item.tags.some(tag => tag && typeof tag === 'string' && tag.toLowerCase().includes(safeSearch.toLowerCase())));
        const matchesTag = !activeTag || (item.tags && item.tags.includes(activeTag));
        return matchesRegion && matchesCategory && matchesSearch && matchesTag;
    });

    return (
        <div className={`flex flex-col flex-1 min-h-0 bg-white transition-all duration-300 ${highlight ? 'ring-4 ring-teal-400/50 shadow-[0_0_30px_rgba(45,212,191,0.3)] animate-[wiggle_0.5s_ease-in-out_infinite]' : ''}`}>

            {/* City Selector Header (Added for Phase 8) */}
            <div className="px-5 pt-2 pb-2 border-b border-gray-50 bg-gray-50/30">
                <div className="relative">
                    <button
                        onClick={() => setShowCitySelector(!showCitySelector)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${showCitySelector ? 'bg-teal-600 text-white shadow-lg' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'}`}
                    >
                        <div className="flex items-center gap-2">
                            <MapPin size={14} className={showCitySelector ? 'text-white' : 'text-teal-500'} />
                            <span className="whitespace-nowrap">
                                {(() => {
                                    const city = CITY_FILTERS?.japan?.find(c => c.id === activeRegion) || CITY_FILTERS?.australia?.find(c => c.id === activeRegion);
                                    if (!city) return t.allCities || '所有城市';
                                    return lang === 'en' ? city.labelEn : city.label;
                                })()}
                            </span>
                        </div>
                        <span className={`text-[10px] ml-1 transition-transform ${showCitySelector ? 'rotate-180' : ''}`}>▼</span>
                    </button>

                    {showCitySelector && (
                        <>
                            <div className="fixed inset-0 z-[100]" onClick={() => setShowCitySelector(false)} />
                            <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-[110] animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                                <div className="flex items-center justify-between px-2 py-2 mb-1 border-b border-gray-50">
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t.selectCity || '選擇搜索地區'}</div>
                                    <button onClick={() => setShowCitySelector(false)} className="text-gray-400 hover:text-gray-600"><X size={14} /></button>
                                </div>
                                <div className="max-h-72 overflow-y-auto pr-1 custom-scrollbar">
                                    <div className="text-[10px] font-bold text-gray-400 px-2 py-2 uppercase tracking-wider opacity-60 flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-gray-300" /> Japan
                                    </div>
                                    {CITY_FILTERS?.japan?.map(city => (
                                        <button
                                            key={city.id}
                                            onClick={() => {
                                                setActiveRegion(city.id);
                                                setShowCitySelector(false);
                                            }}
                                            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-2 mb-1 transition-all ${activeRegion === city.id ? 'bg-teal-50 text-teal-600' : 'hover:bg-gray-50 text-gray-700'}`}
                                        >
                                            <span className="text-lg">{city.icon}</span>
                                            <div className="flex flex-col">
                                                <span className="font-bold">{lang === 'zh' ? city.label : city.labelEn}</span>
                                                <span className="text-[9px] text-gray-400 font-normal uppercase tracking-tight">{city.id}</span>
                                            </div>
                                            {activeRegion === city.id && <Check size={14} className="ml-auto" />}
                                        </button>
                                    ))}
                                    <div className="h-px bg-gray-100 my-2 mx-2"></div>
                                    <div className="text-[10px] font-bold text-gray-400 px-2 py-2 uppercase tracking-wider opacity-60 flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-gray-300" /> Australia
                                    </div>
                                    {CITY_FILTERS?.australia?.map(city => (
                                        <button
                                            key={city.id}
                                            onClick={() => {
                                                setActiveRegion(city.id);
                                                setShowCitySelector(false);
                                            }}
                                            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-2 mb-1 transition-all ${activeRegion === city.id ? 'bg-teal-50 text-teal-600' : 'hover:bg-gray-50 text-gray-700'}`}
                                        >
                                            <span className="text-lg">{city.icon}</span>
                                            <div className="flex flex-col">
                                                <span className="font-bold">{lang === 'zh' ? city.label : city.labelEn}</span>
                                                <span className="text-[9px] text-gray-400 font-normal uppercase tracking-tight">{city.id}</span>
                                            </div>
                                            {activeRegion === city.id && <Check size={14} className="ml-auto" />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>


            {/* [NEW] Phase 21: Segmented Control (Find vs Explore) */}
            {activeTab === 'assets' && (
                <div className="px-5 pt-2 pb-0 flex gap-1">
                    <button
                        onClick={() => handleModeChange('list')}
                        className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-bold transition-all ${sidebarMode === 'list'
                            ? 'bg-teal-50 text-teal-600 shadow-sm ring-1 ring-teal-200'
                            : 'bg-white text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        <Search size={14} />
                        {t.findSpots || (lang === 'zh' ? '找景點' : 'Find Spots')}
                    </button>
                    <button
                        onClick={() => handleModeChange('map')}
                        className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-bold transition-all ${sidebarMode === 'map'
                            ? 'bg-teal-50 text-teal-600 shadow-sm ring-1 ring-teal-200'
                            : 'bg-white text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        <Map size={14} />
                        {t.expertMap || (lang === 'zh' ? '地圖引導' : 'Expert Map')}
                    </button>
                </div>
            )}

            {/* Main Scrollable Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden overscroll-contain no-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
                {activeTab === 'assets' && (
                    <>
                        {/* Layer 2: Sticky Toolbar (Search + Categories + Tags) */}
                        <div className={`sticky top-0 z-[50] bg-white px-4 space-y-4 shadow-sm border-b border-gray-100 ${isSlim ? 'py-2' : 'py-4'}`}>
                            <div className="flex items-center gap-2">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                                    <input
                                        type="text"
                                        placeholder={t.searchPlaceholder}
                                        className="w-full pl-9 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-1 focus:ring-teal-500 transition-all h-9"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                {isSlim && (
                                    <button
                                        onClick={() => setShowCustomItemModal(true)}
                                        className="h-9 px-3 bg-white border border-dashed border-teal-200 text-teal-600 rounded-lg flex items-center justify-center hover:bg-teal-50"
                                        title={t.createCustom}
                                    >
                                        <Plus size={16} />
                                    </button>
                                )}
                            </div>
                            {!isSlim && (
                                <button
                                    onClick={() => setShowCustomItemModal(true)}
                                    className="w-full py-2 border border-dashed border-teal-200 text-teal-600 rounded-lg text-sm font-medium hover:bg-teal-50 transition-all flex items-center justify-center gap-1"
                                >
                                    <Plus size={14} /> {t.createCustom}
                                </button>
                            )}

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
                        </div>

                        {/* Layer 3: Main Content Area (Hidden if in Map mode) */}
                        {sidebarMode === 'list' ? (
                            <div className="p-4 pt-2 pb-12">
                                <div className="grid grid-cols-2 gap-2">
                                    {filteredAssets.map((item) => (
                                        <AssetItemCard
                                            key={item.id}
                                            item={item}
                                            lang={lang}
                                            t={t}
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
                            </div>
                        ) : (
                            /* Map Discovery Sidekick View (Phase 22 Extension) */
                            <div className="p-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {/* Creator Header Card (Dynamic) */}
                                {(() => {
                                    const creator = selectedItem?.authorId
                                        ? SAMPLE_CREATORS.find(c => c.id === selectedItem.authorId)
                                        : (discoveryCreatorId && discoveryCreatorId !== 'all'
                                            ? SAMPLE_CREATORS.find(c => c.id === discoveryCreatorId)
                                            : SAMPLE_CREATORS.find(c => c.id === 'c-mel')); // Default fallback

                                    return (
                                        <div className="px-5 py-6 bg-gradient-to-br from-teal-50 to-indigo-50 border-b border-teal-100 transition-all duration-500">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg p-1">
                                                    <div className="w-full h-full rounded-xl bg-teal-100 flex items-center justify-center text-2xl overflow-hidden">
                                                        {creator?.avatar ? (
                                                            <img src={creator.avatar} className="w-full h-full object-cover" alt="avatar" />
                                                        ) : (
                                                            '🕵️‍♀️'
                                                        )}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="font-black text-gray-800 text-lg">{creator?.name || 'Travel Expert'}</h3>
                                                    <p className="text-xs text-teal-600 font-bold uppercase tracking-wider">
                                                        {(creator as any)?.role || (lang === 'zh' ? '旅遊達人' : 'Expert')}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed italic mb-4">
                                                "{creator?.description || (lang === 'zh' ? '這些是我私心收藏的隱藏景點，希望妳也喜歡！' : 'These are my personal hidden gems. Hope you enjoy them!')}"
                                            </p>
                                        </div>
                                    );
                                })()}

                                {/* Curated List */}
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-4 px-1">
                                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">
                                            {selectedItem ? (lang === 'zh' ? '景點詳情' : 'Spot Details') : (lang === 'zh' ? '達人私藏清單' : 'Expert Picks')}
                                        </h4>
                                        <div className="px-2 py-0.5 bg-teal-100 text-teal-700 text-[10px] font-bold rounded-lg capitalize">
                                            {activeRegion !== 'all' ? activeRegion : 'Global'}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        {/* Show filtered assets or selection context (Region-Aware) */}
                                        {(discoveryCreatorId === 'all'
                                            ? ([...SAMPLE_ASSETS, ...MELBOURNE_ASSETS]
                                                .filter(a => a.authorId && (activeRegion === 'all' || a.region === activeRegion))
                                                .slice(0, 8))
                                            : filteredAssets.slice(0, 6)).map((item) => (
                                                <AssetItemCard
                                                    key={`discover-${item.id}`}
                                                    item={item}
                                                    lang={lang}
                                                    t={t}
                                                    isMobile={isMobile}
                                                    onDragStart={(e) => handleDragStart(e, item, 'sidebar')}
                                                    onClick={() => {
                                                        if (isMobile) setMobilePreviewItem(item);
                                                        onSelectItem?.(item);
                                                    }}
                                                    onMouseEnter={() => { }}
                                                    onMouseLeave={() => { }}
                                                />
                                            ))}
                                    </div>

                                    <button
                                        onClick={() => {
                                            if (onExitDiscovery) onExitDiscovery();
                                            handleModeChange('list');
                                        }}
                                        className="w-full mt-8 py-3 bg-white border-2 border-dashed border-gray-200 text-gray-400 rounded-2xl text-xs font-bold hover:border-teal-300 hover:text-teal-600 transition-all flex items-center justify-center gap-2"
                                    >
                                        {lang === 'zh' ? '退出地圖導覽' : 'Exit Map Discovery'}
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}

                {activeTab === 'budget' && (
                    <div className="p-5 overflow-x-hidden">
                        <BudgetView
                            spent={calculateTotalBudget()}
                            limit={budgetLimit}
                            breakdown={calculateCategoryBreakdown()}
                            currency={currency}
                            exchangeRate={exchangeRate}
                            onSetLimit={setBudgetLimit}
                            onSetSettings={onSetSettings || (() => { })}
                            t={t}
                            hideTitle={true}
                        />
                    </div>
                )}

                {activeTab === 'checklist' && (
                    <div className="p-5 overflow-x-hidden">
                        <ChecklistView
                            activePlan={activePlan}
                            t={t}
                            onUpdateChecklist={onUpdateChecklist}
                            lang={lang}
                            showToastMessage={showToastMessage}
                            hideTitle={true}
                        />
                    </div>
                )}

                {activeTab === 'projects' && (
                    <PlanListView
                        plans={plans}
                        activePlanId={activePlan.id}
                        onSelectPlan={onSelectPlan}
                        onCreatePlan={handleCreatePlan}
                        onDeletePlan={handleDeletePlan}
                        t={t}
                        lang={lang}
                    />
                )}
            </div >

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
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-4xl bg-gray-50 w-16 h-16 flex items-center justify-center rounded-xl">
                                    {mobilePreviewItem.image || getFallbackImage(mobilePreviewItem.type)}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-800 text-lg">
                                        {(lang === 'en' && mobilePreviewItem.titleEn) ? mobilePreviewItem.titleEn : mobilePreviewItem.title}
                                    </h3>
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
                                        <div className="text-orange-400 text-xs font-bold mb-1">{t.openingHours || '⏰ 營業時間'}</div>
                                        <div className="text-orange-700 text-sm">{mobilePreviewItem.openingHours}</div>
                                    </div>
                                )}
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <div className="text-blue-400 text-xs font-bold mb-1">{t.recommendedStay || '⏱️ 建議停留'}</div>
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
                                    <div className="text-purple-600 text-xs font-bold mb-1">{t.insiderTips || '💡 小撇步'}</div>
                                    <div className="text-purple-700 text-sm">{mobilePreviewItem.tips}</div>
                                </div>
                            )}

                            {/* Fun Fact */}
                            {mobilePreviewItem.funFact && (
                                <div className="bg-yellow-50 border-l-3 border-yellow-400 p-3 rounded-r-lg mb-4">
                                    <div className="text-yellow-600 text-xs font-bold mb-1">{t.funFactsBadge || '✨ 冷知識'}</div>
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
                                {t.addToItinerary || '加入行程'}
                            </button>
                        </div>
                    </div>
                </div>
            )
            }

            {/* Desktop Hover Tooltip - Portal (rendered at body level, above sidebar overflow) */}
            {
                hoveredItem && typeof document !== 'undefined' && createPortal(
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
                )
            }
        </div >
    );
};

export default SidebarContent;

