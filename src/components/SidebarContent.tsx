import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Search, Map } from 'lucide-react';
import { ItemType, TravelItem, Region, LangType, Plan, ChecklistItem, TimeSlot, ScheduleItem } from '../types';
import BudgetView from './BudgetView';
import ChecklistView from './ChecklistView';
import { SAMPLE_ASSETS, CITY_FILTERS } from '../data';
import { getFallbackImage } from '../utils';
import { useConfirm } from '../hooks';

// Modular Sub-components
import { AssetItemCard } from './Sidebar/AssetItemCard';
import { CategoryCarousel } from './Sidebar/CategoryCarousel';
import { RegionCarousel } from './Sidebar/RegionCarousel';
import { TagCarousel } from './Sidebar/TagCarousel';
import { PlanListView } from './Sidebar/PlanListView';
import { CitySelector } from './Sidebar/CitySelector';
import { DesktopTooltip } from './Sidebar/DesktopTooltip';
import { MobilePreviewPane } from './Sidebar/MobilePreviewPane';
import { AssetLibrary } from './Sidebar/AssetLibrary';
import { DiscoverySidekick } from './Sidebar/DiscoverySidekick';

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
            <CitySelector
                activeRegion={activeRegion}
                setActiveRegion={setActiveRegion}
                t={t}
                lang={lang}
            />


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
                        {/* Layer 3: Main Content Area (Hidden if in Map mode) */}
                        {sidebarMode === 'list' ? (
                            <AssetLibrary
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                                activeTag={activeTag}
                                setActiveTag={setActiveTag}
                                filteredAssets={filteredAssets}
                                t={t}
                                lang={lang}
                                isSlim={isSlim}
                                setShowCustomItemModal={setShowCustomItemModal}
                                isMobile={isMobile}
                                setMobilePreviewItem={setMobilePreviewItem}
                                handleDragStart={handleDragStart}
                                setTooltipPos={setTooltipPos}
                                setHoveredItem={setHoveredItem}
                            />
                        ) : (
                            <DiscoverySidekick
                                selectedItem={selectedItem || null}
                                discoveryCreatorId={discoveryCreatorId || null}
                                activeRegion={activeRegion}
                                lang={lang}
                                t={t}
                                isMobile={isMobile}
                                setMobilePreviewItem={setMobilePreviewItem}
                                onSelectItem={onSelectItem}
                                onExitDiscovery={onExitDiscovery}
                                handleModeChange={handleModeChange}
                                handleDragStart={handleDragStart}
                                filteredAssets={filteredAssets}
                            />
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
            <MobilePreviewPane
                item={mobilePreviewItem}
                onClose={() => setMobilePreviewItem(null)}
                onTapToAdd={handleTapToAdd}
                lang={lang}
                t={t}
            />

            {/* Desktop Hover Tooltip */}
            <DesktopTooltip
                hoveredItem={hoveredItem}
                tooltipPos={tooltipPos}
                lang={lang}
            />
        </div >
    );
};

export default SidebarContent;

