import React, { useState } from 'react';
import { ChevronLeft, Triangle, Hotel, FileText, Map as MapIcon, List as ListIcon, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import {
    Plan, ViewMode, Template, TravelItem, ItemType, Region, TimeSlot,
    DaySchedule, ScheduleItem, ChecklistItem
} from '../types';

import MapView from './MapView';
import SidebarContent from './SidebarContent';
import ChecklistView from './ChecklistView';
import BudgetView from './BudgetView';
import DiscoveryView from './DiscoveryView';
import { Toast } from './Toast';
import AppHeader from './AppHeader';
import DayTabs from './DayTabs';
import AppModals from './AppModals';
import MobileNav from './MobileNav';
import CanvasView from './CanvasView';
import DesktopSidebar from './DesktopSidebar';
import FavoritesView from './FavoritesView';
import ItineraryHub from './ItineraryHub';
import OverviewView from './OverviewView';
import { ImmersivePage } from './Common/ImmersivePage';
import { MobileDiscoveryDrawer } from './Mobile/MobileDiscoveryDrawer';
import { SAMPLE_ASSETS } from '../data';
import FloatingActions from './layout/FloatingActions';

// This is the props interface - it accepts all the values that App.tsx passes down
export interface AppLayoutProps {
    // Core
    lang: 'zh' | 'en';
    t: any;
    activePlan: Plan;
    plans: Plan[];
    activePlanId: string;
    currentDay: number;
    setCurrentDay: (day: number) => void;
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    isMobile: boolean;

    // UI State
    ui: any;
    isFullscreen: boolean;
    isSidebarOpen: boolean;
    setIsSidebarOpen: (val: boolean) => void;
    sidebarWidth: number;
    isEditingName: boolean;
    editingName: string;
    setEditingName: (val: string) => void;
    showPlanManager: boolean;
    setShowPlanManager: (val: boolean) => void;
    showDateModal: boolean;
    setShowDateModal: (val: boolean) => void;
    showShareModal: boolean;
    setShowShareModal: (val: boolean) => void;
    showCustomItemModal: boolean;
    setShowCustomItemModal: (val: boolean) => void;
    showSubmitModal: boolean;
    setShowSubmitModal: (val: boolean) => void;
    showCitySelector: boolean;
    setShowCitySelector: (val: boolean) => void;
    showMobileLibrary: boolean;
    showMobilePreview: boolean;
    setShowMobilePreview: (val: boolean) => void;
    showMoveModal: boolean;
    setShowMoveModal: (val: boolean) => void;
    activeTab: 'checklist' | 'budget' | 'projects' | 'assets' | 'templates';
    setActiveTab: React.Dispatch<React.SetStateAction<'checklist' | 'budget' | 'projects' | 'assets' | 'templates'>>;
    activeCategory: ItemType | 'all';
    setActiveCategory: React.Dispatch<React.SetStateAction<ItemType | 'all'>>;
    searchQuery: string;
    setSearchQuery: (q: string) => void;
    previewTemplate: Template | null;
    setPreviewTemplate: (tpl: Template | null) => void;
    unlockTarget: ScheduleItem | null;
    setUnlockTarget: (item: ScheduleItem | null) => void;
    batchUnlockCount: number;
    setBatchUnlockCount: (count: number) => void;
    activeRegion: Region;
    setActiveRegion: React.Dispatch<React.SetStateAction<Region>>;
    addToSlotTarget: any;
    setAddToSlotTarget: (target: any) => void;
    discoveryCreatorId: string | null;
    sidebarMode: 'map' | 'list';
    setSidebarMode: React.Dispatch<React.SetStateAction<'map' | 'list'>>;
    selectionSource: 'map' | 'sidebar' | 'canvas' | null;
    setSelectionSource: (source: 'map' | 'sidebar' | 'canvas' | null) => void;
    
    // Handlers from useAppHandlers
    showContextMap: boolean;
    setShowContextMap: (val: boolean) => void;
    selectedCreatorId: string | null;
    setSelectedCreatorId: (id: string | null) => void;
    subscribedCreators: string[];
    customAssets: TravelItem[];
    setCustomAssets: React.Dispatch<React.SetStateAction<TravelItem[]>>;
    showFavorites: boolean;
    setShowFavorites: (val: boolean) => void;
    savedSpots: TravelItem[];
    savedTemplates: Template[];
    activeCreator: any;
    creatorTemplates: Template[];
    handleMapItemClick: (item: any) => void;
    handleToggleSubscribe: (creatorId: string) => void;
    toggleLang: () => void;
    handleExploreCreatorMap: (authorId: string, authorName: string) => void;
    handleSidebarModeChange: (mode: 'list' | 'map') => void;
    startEditingName: () => void;
    saveName: () => void;
    handleNameKeyDown: (e: React.KeyboardEvent) => void;
    openDatePicker: () => void;
    handleNavigate: (view: ViewMode) => void;
    handleSelectPlan: (id: string) => void;
    handleToggleFavoriteSpot: (item: TravelItem) => void;
    handleToggleFavoriteTemplate: (tpl: Template) => void;

    // Itinerary
    handleDragStart: (e: React.DragEvent, item: TravelItem, source: 'sidebar' | 'canvas', slot?: TimeSlot, index?: number) => void;
    handleDrop: (e: React.DragEvent, slot: any, index?: number) => void;
    handleRemoveItem: (slot: any, index: number) => void;
    handleUpdateItem: (slot: any, index: number, updates: Partial<ScheduleItem>) => void;
    handleTapToAdd: (item: any) => void;
    handleUpdateScheduleItemByInstanceId: (instanceId: string, updates: Partial<ScheduleItem>) => void;

    // Actions
    applyTemplate: (template: Template, skipConfirm?: boolean) => void;
    onDeleteDay: (day: number, e?: React.MouseEvent) => void;
    handleUnlockConfirm: () => void;
    executeMoveItem: (targetDay: number, targetSlot?: any) => void;
    handleGateCheck: (action: () => void, setUnlockTarget: any, setBatchUnlockCount: any) => void;

    // Plans
    setPlans: (plans: Plan[]) => void;
    updateActivePlan: (data: Partial<Plan>) => void;
    updateChecklist: (checklist: ChecklistItem[]) => void;
    handleAddDay: () => void;
    _handleDeletePlan: (id: string, e: React.MouseEvent) => void;
    getShortDate: (dayNum: number) => string;
    handleTriggerStartPicker: () => void;
    executeCreateBlankPlan: (data: { origin: string, destination: Region, startDate: string, endDate: string, totalDays: number, name?: string }) => void;
    enterExpertCreationMode: () => void;
    setIsCreatingNewPlan: (val: boolean) => void;
    handleRepeatAccommodation: () => void;

    // Budget
    budgetLimit: number;
    setBudgetLimit: (val: number) => void;
    calculateTotalBudget: () => number;
    calculateCategoryBreakdown: () => any;
    budgetSettings: { currency: string; exchangeRate: number };
    updateBudgetSettings: (currency: string, exchangeRate: number) => void;

    // Toast
    toast: { show: boolean; message: string; type?: 'success' | 'warning' | 'error' | 'info'; duration?: number };
    setToast: React.Dispatch<React.SetStateAction<{ show: boolean; message: string; type?: 'success' | 'warning' | 'error' | 'info'; duration?: number }>>;
    showToastMessage: (msg: string, type?: any) => void;

    // Refs
    nameInputRef: React.RefObject<HTMLInputElement | null>;
    dayTabsContainerRef: React.RefObject<HTMLDivElement | null>;
    mobileDayTabsRef: React.RefObject<HTMLDivElement | null>;

    // Wizard
    pendingWizardData: any;
    setPendingWizardData: (data: any) => void;
}

const AppLayout: React.FC<AppLayoutProps> = (props) => {
    const {
        lang, t, activePlan, plans, activePlanId, currentDay, setCurrentDay,
        viewMode, setViewMode, isMobile, ui,
        isFullscreen, isSidebarOpen, setIsSidebarOpen, sidebarWidth,
        isEditingName, editingName, setEditingName,
        showPlanManager, setShowPlanManager,
        showDateModal, setShowDateModal,
        showShareModal, setShowShareModal,
        showCustomItemModal, setShowCustomItemModal,
        showSubmitModal, setShowSubmitModal,
        showCitySelector, setShowCitySelector,
        showMobileLibrary, showMobilePreview, setShowMobilePreview,
        showMoveModal, setShowMoveModal,
        activeTab, setActiveTab, activeCategory, setActiveCategory,
        searchQuery, setSearchQuery,
        previewTemplate, setPreviewTemplate,
        unlockTarget, setUnlockTarget, batchUnlockCount, setBatchUnlockCount,
        activeRegion, setActiveRegion,
        addToSlotTarget, setAddToSlotTarget,
        discoveryCreatorId, sidebarMode, setSidebarMode,
        selectionSource, setSelectionSource,
        // Handlers
        showContextMap, setShowContextMap,
        selectedCreatorId, setSelectedCreatorId,
        subscribedCreators, customAssets, setCustomAssets,
        showFavorites, setShowFavorites,
        savedSpots, savedTemplates,
        activeCreator, creatorTemplates,
        handleMapItemClick, handleToggleSubscribe, toggleLang,
        handleExploreCreatorMap, handleSidebarModeChange,
        startEditingName, saveName, handleNameKeyDown, openDatePicker,
        handleNavigate, handleSelectPlan,
        handleToggleFavoriteSpot, handleToggleFavoriteTemplate,
        // Itinerary
        handleDragStart, handleDrop, handleRemoveItem, handleUpdateItem,
        handleTapToAdd, handleRepeatAccommodation, handleUpdateScheduleItemByInstanceId,
        // Actions
        applyTemplate, onDeleteDay,
        handleUnlockConfirm, executeMoveItem, handleGateCheck,
        // Plans
        setPlans, updateActivePlan, updateChecklist, handleAddDay,
        _handleDeletePlan, getShortDate,
        handleTriggerStartPicker, executeCreateBlankPlan, enterExpertCreationMode,
        // Budget
        budgetLimit, setBudgetLimit, calculateTotalBudget, calculateCategoryBreakdown,
        budgetSettings, updateBudgetSettings,
        // Toast
        toast, setToast, showToastMessage,
        // Refs
        nameInputRef, dayTabsContainerRef, mobileDayTabsRef,
        // Wizard
        pendingWizardData, setPendingWizardData,
    } = props;

    const [isHeaderShrunk, setIsHeaderShrunk] = React.useState(false);
    const [discoveryResetKey, setDiscoveryResetKey] = useState(0);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const scrollTop = e.currentTarget.scrollTop;
        if (scrollTop > 80 && !isHeaderShrunk) {
            setIsHeaderShrunk(true);
        } else if (scrollTop <= 80 && isHeaderShrunk) {
            setIsHeaderShrunk(false);
        }
    };

    const currentDaySchedule = activePlan.schedule[`Day ${currentDay}`] || { morning: [], afternoon: [], evening: [], night: [], accommodation: [] };
    const isDayEmpty = (['morning', 'afternoon', 'evening', 'night'] as TimeSlot[]).every(s => (currentDaySchedule[s] || []).length === 0) 
        && (currentDaySchedule.accommodation || []).length === 0;

    // PAGE SWIPE LOGIC
    const handlePageSwipe = (direction: 'left' | 'right') => {
        if (viewMode !== 'overview' && viewMode !== 'canvas') return; // Only swipe on these modes
        
        if (direction === 'left') { // Next Page
            if (viewMode === 'overview') {
                setCurrentDay(1);
                setViewMode('canvas');
            } else if (currentDay < activePlan.totalDays) {
                setCurrentDay(currentDay + 1);
            }
        } else { // Previous Page
            if (viewMode === 'canvas') {
                if (currentDay === 1) {
                    setViewMode('overview');
                } else {
                    setCurrentDay(currentDay - 1);
                }
            }
        }
    };


    const handleSelectItem = (item: ItemType | TravelItem | any | null, source?: 'map' | 'sidebar' | 'canvas' | 'discovery' | null) => {
        ui.setSelectedItem(item as any);
        ui.setSelectionSource(source);

        // [PHASE B] If a spot is selected, trigger the full-page view
        if (item && item.id) {
            ui.setActiveSpotId(item.id);
            return; // Intercept here to prevent sidebar/drawer behavior if preferred
        }

        // [PHASE 40] Navigation logic refinement
        // 1. If source is sidebar/map, ALWAYS sync.
        // 2. If source is canvas, ONLY sync if we are already in Map Guide mode (to provide info complement).
        const shouldSyncSidebar = item && (source !== 'canvas' || sidebarMode === 'map');

        if (shouldSyncSidebar) {
            // 1. Force sidebar to Assets tab (where DiscoverySidekick lives)
            ui.setActiveTab('assets');

            // 2. Ensure Detail/Map mode is active (this renders DiscoverySidekick -> SpotDetailsPanel)
            ui.setSidebarMode('map');

            // 3. Ensure sidebar is open on desktop
            if (!isMobile) {
                setIsSidebarOpen(true);
                ui.setIsSidebarPinned(true);
            }

            // 4. Sync Discovery Creator Context if available
            if (item?.authorId) {
                ui.setDiscoveryCreatorId(item.authorId);
            }
        }
    };

    return (
        <div className={`flex flex-col md:flex-row h-[100dvh] ${viewMode === 'discovery' ? 'bg-tc-bg' : 'bg-[#fafafa]'} text-slate-800 font-sans overflow-x-hidden max-w-[100vw]`}>
            {/* Desktop Icon Sidebar (Canva Style) */}
            {!isFullscreen && (
                <DesktopSidebar
                    activePlan={activePlan}
                    activeView={isSidebarOpen ? activeTab : (showFavorites ? 'favorites' : (showPlanManager ? 'projects' : viewMode))}
                    onNavigate={(view) => handleNavigate(view as any)}
                    onNewPlan={() => ui.setShowStartPicker(true)}
                    onShowPlanManager={() => {
                        setShowFavorites(false);
                        setShowPlanManager(true);
                        setIsSidebarOpen(false);
                        ui.setShowStartPicker(false);
                    }}
                    onSetLang={toggleLang}
                    lang={lang}
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                    isSidebarPinned={ui.isSidebarPinned}
                    setIsSidebarPinned={ui.setIsSidebarPinned}
                    setActiveTab={setActiveTab}
                />
            )}

            {/* Sidebar Content (Assets/Templates) */}
            {!isFullscreen && (
                <div
                    className={`hidden lg:flex flex-col bg-white/90 backdrop-blur-md relative z-20 transition-all duration-300 overflow-visible group/sidebar border-r border-white/40
                        ${isSidebarOpen && viewMode !== 'discovery' ? 'opacity-100' : 'w-0 opacity-0 pointer-events-none'}`}
                    style={{
                        width: isSidebarOpen && viewMode !== 'discovery' ? sidebarWidth : 0,
                    }}
                >
                    {/* Collapse Handle */}
                    {isSidebarOpen && viewMode !== 'discovery' && (
                        <button
                            onClick={() => {
                                setIsSidebarOpen(false);
                                ui.setIsSidebarPinned(false);
                            }}
                            className="absolute -right-5 top-1/2 -translate-y-1/2 w-6 h-12 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center text-gray-400 hover:text-teal-600 hover:scale-110 transition-all z-30"
                        >
                            <ChevronLeft size={16} />
                        </button>
                    )}

                    {isSidebarOpen && viewMode !== 'discovery' && (
                        <div className="flex flex-col h-full w-full" style={{ width: sidebarWidth }}>
                            <SidebarContent
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                                activeRegion={ui.activeRegion}
                                setActiveRegion={setActiveRegion}
                                setShowCustomItemModal={setShowCustomItemModal}
                                handleDragStart={handleDragStart}
                                handleTapToAdd={handleTapToAdd}
                                applyTemplate={applyTemplate} t={t} lang={lang}
                                customAssets={customAssets}
                                highlight={ui.sidebarHighlight}
                                activeTab={ui.activeTab}
                                setActiveTab={ui.setActiveTab}
                                activePlan={activePlan}
                                plans={plans}
                                onSelectPlan={handleSelectPlan}
                                handleCreatePlan={() => handleTriggerStartPicker()}
                                handleDeletePlan={_handleDeletePlan}
                                budgetLimit={budgetLimit}
                                setBudgetLimit={setBudgetLimit}
                                calculateTotalBudget={calculateTotalBudget}
                                calculateCategoryBreakdown={calculateCategoryBreakdown}
                                onUpdateChecklist={(checklist: ChecklistItem[]) => updateActivePlan({ checklist })}
                                showToastMessage={showToastMessage}
                                currency={budgetSettings.currency}
                                exchangeRate={budgetSettings.exchangeRate}
                                onSetSettings={updateBudgetSettings}
                                addToSlotTarget={addToSlotTarget}
                                currentDay={currentDay}
                                onExitDiscovery={() => ui.setDiscoveryCreatorId(null)}
                                setShowMobileLibrary={ui.setShowMobileLibrary}
                                onExploreCreatorMap={handleExploreCreatorMap}
                                onModeChange={handleSidebarModeChange}
                                sidebarMode={sidebarMode}
                                setSidebarMode={setSidebarMode}
                                onSelectItem={(item: any) => handleSelectItem(item, 'sidebar')}
                                selectedItem={ui.selectedItem}
                                discoveryCreatorId={ui.discoveryCreatorId}
                                subscribedCreators={subscribedCreators}
                                onToggleSubscribe={handleToggleSubscribe}
                                onUpdateItem={handleUpdateItem}
                                savedSpots={savedSpots}
                                handleToggleFavoriteSpot={handleToggleFavoriteSpot}
                            />
                        </div>
                    )}
                </div>
            )}

            {/* Main Area */}
            <div className={`flex-1 flex flex-col min-w-0 ${viewMode === 'discovery' || showPlanManager ? 'bg-tc-bg' : 'bg-premium-paper'} relative overflow-x-hidden`}>
                {(viewMode !== 'discovery' || showPlanManager) && !showFavorites && (
                    <AppHeader
                        toggleLang={toggleLang} activePlan={activePlan}
                        isEditingName={isEditingName} editingName={editingName} setEditingName={setEditingName}
                        startEditingName={startEditingName} saveName={saveName} handleNameKeyDown={handleNameKeyDown}
                        nameInputRef={nameInputRef} openDatePicker={openDatePicker}
                        showCitySelector={showCitySelector} setShowCitySelector={setShowCitySelector}
                        activeRegion={ui.activeRegion} setActiveRegion={ui.setActiveRegion}
                        updateActivePlan={updateActivePlan} setShowLanding={ui.setShowLanding} setShowPlanManager={setShowPlanManager}
                        setShowSubmitModal={setShowSubmitModal} setShowShareModal={setShowShareModal} handleGateCheck={(action) => handleGateCheck(action, setUnlockTarget, setBatchUnlockCount)}
                        isSidebarOpen={isSidebarOpen} budgetLimit={budgetLimit} setBudgetLimit={setBudgetLimit}
                        calculateTotalBudget={calculateTotalBudget} calculateCategoryBreakdown={calculateCategoryBreakdown}
                        showContextMap={showContextMap} setShowContextMap={setShowContextMap}
                        viewMode={viewMode} setViewMode={setViewMode}
                        planRegion={activePlan.region}
                        isShrunk={isHeaderShrunk}
                        showPlanManager={showPlanManager}
                    />
                )}

                {viewMode !== 'discovery' && viewMode !== 'budget' && viewMode !== 'checklist' && !showFavorites && !showPlanManager && (
                    <DayTabs
                        activePlan={activePlan} currentDay={currentDay} setCurrentDay={setCurrentDay}
                        handleAddDay={handleAddDay} handleDeleteDay={onDeleteDay}
                        getShortDate={getShortDate} t={t}
                        dayTabsContainerRef={dayTabsContainerRef} mobileDayTabsRef={mobileDayTabsRef}
                        viewMode={viewMode} setViewMode={setViewMode} lang={lang}
                    />
                )}

                {/* Favorites View */}
                {showFavorites && (
                    <div className="flex-1 overflow-y-auto overflow-x-hidden bg-white pb-20">
                        <FavoritesView
                            lang={lang}
                            t={t}
                            customAssets={customAssets}
                            subscribedCreators={subscribedCreators}
                            savedTemplates={savedTemplates}
                            savedSpots={savedSpots}
                            onCreatorClick={ui.setSelectedCreatorId}
                            onSpotClick={(spot) => {
                                ui.setActiveSpotId(spot.id);
                                ui.setSelectedItem(spot);
                                ui.setSelectionSource('sidebar');
                            }}
                            onTemplateClick={(tpl) => {
                                ui.setActiveTemplateId(tpl.id);
                            }}
                            handleToggleFavoriteSpot={handleToggleFavoriteSpot}
                            handleToggleFavoriteTemplate={handleToggleFavoriteTemplate}
                            handleToggleSubscribe={handleToggleSubscribe}
                            onSetShowCustomItemModal={setShowCustomItemModal}
                            onNavigateToExplore={() => { setShowFavorites(false); setViewMode('discovery'); }}
                        />
                    </div>
                )}

                {/* Itinerary Hub View */}
                {showPlanManager && !showFavorites && (
                    <div className="flex-1 overflow-y-auto overflow-x-hidden bg-[#F7FBF0] pb-20">
                        <ItineraryHub
                            plans={plans}
                            activePlanId={activePlan.id}
                            onSelectPlan={(id) => {
                                handleSelectPlan(id);
                                setShowPlanManager(false);
                            }}
                            onCreatePlan={() => {
                                // Trigger Start Picker / Check In Wizard
                                setShowPlanManager(false);
                                ui.setShowStartPicker(false);
                                ui.setShowCheckIn(true);
                            }}
                            onDeletePlan={_handleDeletePlan}
                            lang={lang}
                            t={t}
                        />
                    </div>
                )}

                {/* Canvas Area with Swipe & Transitions */}
                {!showFavorites && !showPlanManager && (
                    <div className="flex-1 relative overflow-hidden flex flex-col">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${activePlan.id}-${viewMode}-${currentDay}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.15}
                                onDragEnd={(_, info) => {
                                    const swipeThreshold = 50;
                                    if (info.offset.x < -swipeThreshold) {
                                        handlePageSwipe('left');
                                    } else if (info.offset.x > swipeThreshold) {
                                        handlePageSwipe('right');
                                    }
                                }}
                                onScroll={handleScroll}
                                className={`flex-1 overflow-y-auto overflow-x-hidden bg-transparent ${viewMode === 'discovery' ? 'p-0 pb-0' : (viewMode === 'overview' || viewMode === 'budget' || viewMode === 'checklist' || viewMode === 'flights' || viewMode === 'hotels' || viewMode === 'files' ? 'p-0' : (isDayEmpty && viewMode === 'canvas' ? 'p-0 h-full overflow-hidden' : 'p-4 pb-20 lg:px-8 lg:pb-8 lg:pt-4'))} no-scrollbar h-full`}
                            >
                                {(viewMode === 'overview' || viewMode === 'budget' || viewMode === 'checklist' || viewMode === 'flights' || viewMode === 'hotels' || viewMode === 'files') ? (
                                    <OverviewView 
                                        activePlan={activePlan}
                                        lang={lang}
                                        t={t}
                                        setViewMode={setViewMode}
                                        calculateTotalBudget={calculateTotalBudget}
                                        budgetLimit={budgetLimit}
                                        calculateCategoryBreakdown={calculateCategoryBreakdown}
                                        updateActivePlan={updateActivePlan}
                                    />
                                ) : viewMode === 'map' ? (
                                    <div className="h-full">
                                        <MapView
                                            schedule={activePlan.schedule[`Day ${currentDay}`] || { morning: [], afternoon: [], evening: [], night: [], accommodation: [] }}
                                            lang={lang}
                                            t={t}
                                            onItemClick={(item) => handleSelectItem(item, 'map')}
                                            onClose={() => setViewMode('canvas')}
                                            discoveryCreatorId={discoveryCreatorId}
                                            onAddItem={(item) => handleTapToAdd(item)}
                                            currentDay={currentDay}
                                            addToSlotTarget={addToSlotTarget}
                                            onExitDiscovery={() => ui.setDiscoveryCreatorId(null)}
                                            activeRegion={activePlan.region}
                                            subscribedCreators={subscribedCreators}
                                        />
                                    </div>
                                ) : viewMode === 'discovery' ? (
                                    <div className="h-full">
                                        <DiscoveryView
                                            key={discoveryResetKey}
                                            onPreviewTemplate={(tpl) => ui.setActiveTemplateId(tpl.id)}
                                            onStoryPreview={(tpl) => {
                                                setPreviewTemplate(tpl);
                                                ui.setShowStoryPreview(true);
                                            }}
                                            onCreatorClick={setSelectedCreatorId}
                                            onExploreCreatorMap={handleExploreCreatorMap}
                                            onSelectItem={handleSelectItem}
                                            setActiveTab={setActiveTab}
                                            activeRegion={activeRegion}
                                            setActiveRegion={setActiveRegion}
                                            showToastMessage={showToastMessage}
                                            toggleLang={toggleLang}
                                            lang={lang}
                                            t={t}
                                            pendingWizardData={pendingWizardData}
                                            setPendingWizardData={setPendingWizardData}
                                        />
                                    </div>
                                ) : (
                                    <CanvasView
                                        showContextMap={showContextMap}
                                        currentDaySchedule={currentDaySchedule}
                                        activePlan={activePlan}
                                        isSidebarOpen={isSidebarOpen}
                                        handleDrop={handleDrop}
                                        handleRemoveItem={handleRemoveItem}
                                        handleUpdateItem={handleUpdateItem}
                                        handleDragStart={handleDragStart}
                                        handleMapItemClick={handleMapItemClick}
                                        setAddToSlotTarget={setAddToSlotTarget}
                                        setShowMoveModal={setShowMoveModal}
                                        setMoveTarget={ui.setMoveTarget}
                                        setShowMobileLibrary={ui.setShowMobileLibrary}
                                        setSidebarHighlight={ui.setSidebarHighlight}
                                        setUnlockTarget={setUnlockTarget}
                                        setSelectedItem={ui.setSelectedItem}
                                        setIsSidebarOpen={setIsSidebarOpen}
                                        setActiveTab={setActiveTab}
                                        discoveryCreatorId={discoveryCreatorId}
                                        currentDay={currentDay}
                                        addToSlotTarget={addToSlotTarget}
                                        onExitDiscovery={() => ui.setDiscoveryCreatorId(null)}
                                        onAddItem={(item) => handleTapToAdd(item)}
                                        onRepeatAccommodation={handleRepeatAccommodation}
                                        setSidebarMode={ui.setSidebarMode}
                                        onSelectItem={handleSelectItem}
                                        setActiveCategory={ui.setActiveCategory}
                                    />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                )}
            </div>


            <AppModals
                // Shared & Language
                lang={lang} t={t} showToastMessage={showToastMessage}
                setSelectionSource={setSelectionSource}

                // View State & Sidebar
                activeTab={activeTab} setActiveTab={setActiveTab}
                searchQuery={searchQuery} setSearchQuery={setSearchQuery}
                activeCategory={activeCategory} setActiveCategory={setActiveCategory}
                activeRegion={ui.activeRegion} setActiveRegion={setActiveRegion}
                isSidebarOpen={isSidebarOpen} setIsSidebarOpen={ui.setIsSidebarOpen}
                setViewMode={setViewMode}
                viewMode={viewMode}
                selectionSource={selectionSource}

                // Handlers & Library
                handleDragStart={handleDragStart} handleTapToAdd={handleTapToAdd}
                showMobileLibrary={showMobileLibrary} setShowMobileLibrary={ui.setShowMobileLibrary}
                addToSlotTarget={addToSlotTarget}
                currentDay={currentDay}
                onExitDiscovery={() => ui.setDiscoveryCreatorId(null)}
                onExploreCreatorMap={handleExploreCreatorMap}
                onModeChange={handleSidebarModeChange}
                sidebarMode={sidebarMode}
                setSidebarMode={setSidebarMode}

                // Plan Management
                showPlanManager={showPlanManager} setShowPlanManager={setShowPlanManager}
                plans={plans} activePlanId={activePlanId} setActivePlanId={handleSelectPlan}
                onTriggerPicker={handleTriggerStartPicker}
                onExpertMode={enterExpertCreationMode}
                handleDeletePlan={_handleDeletePlan}
                setPlans={setPlans}
                executeCreateBlankPlan={props.executeCreateBlankPlan}

                // Custom Items
                showCustomItemModal={showCustomItemModal} setShowCustomItemModal={setShowCustomItemModal}
                handleCreateCustomItem={(data: any) => {
                    const newItem = { ...data, id: `custom-${Date.now()}`, isCustom: true };
                    setCustomAssets(prev => [newItem, ...prev]);
                    handleTapToAdd(newItem);
                    setShowCustomItemModal(false);
                }}
                customAssets={customAssets} setCustomAssets={setCustomAssets}

                // Share & Export
                showShareModal={showShareModal} setShowShareModal={setShowShareModal}
                onOpenMobilePreview={() => setShowMobilePreview(true)}
                activePlan={activePlan}

                // Dates
                showDateModal={showDateModal} setShowDateModal={setShowDateModal}
                tempStartDate={activePlan.startDate} tempEndDate={activePlan.endDate}
                onDateConfirm={(start, end) => {
                    const diff = Math.ceil(Math.abs(new Date(end).getTime() - new Date(start).getTime()) / (1000 * 60 * 60 * 24)) + 1;
                    updateActivePlan({ startDate: start, endDate: end, totalDays: diff });
                    setShowDateModal(false);
                }}

                // Creator & Subscription
                selectedCreatorId={selectedCreatorId} setSelectedCreatorId={setSelectedCreatorId}
                activeCreator={activeCreator} creatorTemplates={creatorTemplates}
                isSubscribed={!!selectedCreatorId && subscribedCreators.includes(selectedCreatorId)}
                toggleSubscription={handleToggleSubscribe}
                subscribedCreators={subscribedCreators}
                applyTemplate={applyTemplate}

                // Move Item
                showMoveModal={showMoveModal} setShowMoveModal={setShowMoveModal}
                moveTarget={ui.moveTarget}
                executeMoveItem={executeMoveItem}

                // Submit & Feedback
                showSubmitModal={showSubmitModal} setShowSubmitModal={setShowSubmitModal}

                // Mobile States
                showMobilePreview={showMobilePreview} setShowMobilePreview={setShowMobilePreview}

                // Template & Unlock
                previewTemplate={previewTemplate} setPreviewTemplate={setPreviewTemplate}
                unlockTarget={unlockTarget} setUnlockTarget={setUnlockTarget}
                batchUnlockCount={batchUnlockCount} setBatchUnlockCount={setBatchUnlockCount}
                confirmUnlock={handleUnlockConfirm}

                // Initialization & Misc
                showStoryPreview={ui.showStoryPreview} setShowStoryPreview={ui.setShowStoryPreview}

                // Initialization & Misc
                showStartPicker={ui.showStartPicker} setShowStartPicker={ui.setShowStartPicker}
                showCheckIn={ui.showCheckIn} setShowCheckIn={ui.setShowCheckIn}
                handleCreatePlan={executeCreateBlankPlan}
                selectedItem={ui.selectedItem} setSelectedItem={ui.setSelectedItem}
                onUpdateScheduleItem={handleUpdateScheduleItemByInstanceId}
                pendingWizardData={pendingWizardData}
                setPendingWizardData={setPendingWizardData}
                savedSpots={savedSpots}
                savedTemplates={savedTemplates}
                handleToggleFavoriteSpot={handleToggleFavoriteSpot}
                handleToggleFavoriteTemplate={handleToggleFavoriteTemplate}

                // Tools data
                budgetLimit={budgetLimit}
                setBudgetLimit={setBudgetLimit}
                calculateTotalBudget={calculateTotalBudget}
                calculateCategoryBreakdown={calculateCategoryBreakdown}
                onUpdateChecklist={(checklist: ChecklistItem[]) => updateActivePlan({ checklist })}
                currency={budgetSettings.currency}
                exchangeRate={budgetSettings.exchangeRate}
                onSetSettings={updateBudgetSettings}
                onCreatorClick={(id: string) => {
                    ui.setActiveCreatorId(id);
                }}
                onPreviewTemplate={(tpl: Template) => {
                    ui.setActiveTemplateId(tpl.id);
                }}
            />

            {/* Mobile Bottom Tab Navigation */}
            <MobileNav
                viewMode={viewMode}
                setViewMode={(mode) => {
                    // Clear search search result and details when switching major tabs
                    // Optimization: Clear selection and details even if clicking the SAME tab to allow "close by tab" behavior
                    ui.setActiveSpotId(null);
                    ui.setActiveTemplateId(null);
                    ui.setActiveCreatorId(null);
                    ui.setSelectedItem(null);
                    ui.setSelectionSource(null);
                    ui.setSearchQuery('');

                    // Reset DiscoveryView state every time user taps the Discover tab
                    if (mode === 'discovery') {
                        setDiscoveryResetKey(k => k + 1);
                        // Also clear pendingWizardData so useEffect in DiscoveryView
                        // doesn't immediately re-set discoveryCity back to the template destination
                        setPendingWizardData(undefined);
                    }
                    handleNavigate(mode);
                }}
                showPlanManager={showPlanManager}
                setShowPlanManager={(show) => {
                    if (show) {
                        setShowFavorites(false);
                        ui.setActiveSpotId(null);
                        ui.setActiveTemplateId(null);
                        ui.setActiveCreatorId(null);
                        ui.setSelectedItem(null);
                        ui.setSelectionSource(null);
                    }
                    setShowPlanManager(show);
                }}
                showFavorites={showFavorites}
                setShowFavorites={(show) => {
                    if (show) {
                        setShowPlanManager(false);
                        ui.setActiveSpotId(null);
                        ui.setActiveTemplateId(null);
                        ui.setActiveCreatorId(null);
                        ui.setSelectedItem(null);
                        ui.setSelectionSource(null);
                    }
                    setShowFavorites(show);
                }}
                hasActivePlan={!!activePlan}
                onNewPlan={() => ui.setShowStartPicker(true)}
                onShowBudget={() => {
                    handleNavigate('budget');
                }}
                onSetLang={toggleLang}
            />

            {/* GLOBAL FAB GROUP — extracted to FloatingActions component */}
            <FloatingActions
                viewMode={viewMode}
                setViewMode={setViewMode}
                isMobile={isMobile}
                isDayEmpty={isDayEmpty}
                showStartPicker={ui.showStartPicker}
                showCheckIn={ui.showCheckIn}
                onOpenMobileLibrary={() => ui.setShowMobileLibrary(true)}
                onOpenSidebar={() => setIsSidebarOpen(true)}
                lang={lang}
            />

            {toast.show && <Toast message={toast.message} type={toast.type as any} duration={toast.duration} onClose={() => setToast({ show: false, message: '' })} />}
            <MobileDiscoveryDrawer
                isOpen={isMobile && !!ui.selectedItem && !ui.activeSpotId && ui.selectionSource !== 'canvas'}
                onClose={() => handleSelectItem(null, null)}
                item={ui.selectedItem}
                subscribedCreators={subscribedCreators}
                onToggleSubscribe={handleToggleSubscribe}
                onAddItem={handleTapToAdd}
                onUpdateItem={handleUpdateItem}
                showToastMessage={showToastMessage}
                lang={lang}
                preferredAuthorId={discoveryCreatorId}
                onCreatorClick={ui.setActiveCreatorId}
            />

            {/* IMMERSIVE TOOL OVERLAYS (Book-page style) */}
            <AnimatePresence>
                {viewMode === 'checklist' && (
                    <ImmersivePage
                        isOpen={true}
                        onClose={() => setViewMode('overview')}
                        title={lang === 'zh' ? '行李清單' : 'Packing List'}
                        historyId="checklist"
                        lang={lang}
                    >
                        <div className="max-w-2xl mx-auto px-6 py-10 pb-32">
                            <ChecklistView
                                activePlan={activePlan}
                                lang={lang}
                                t={t}
                                showToastMessage={showToastMessage}
                                onUpdateChecklist={updateChecklist}
                            />
                        </div>
                    </ImmersivePage>
                )}
                {viewMode === 'budget' && (
                    <ImmersivePage
                        isOpen={true}
                        onClose={() => setViewMode('overview')}
                        title={lang === 'zh' ? '預算估計' : 'Budget'}
                        historyId="budget"
                        lang={lang}
                    >
                        <div className="max-w-3xl mx-auto px-6 py-10 pb-32">
                            <BudgetView
                                spent={calculateTotalBudget()}
                                limit={budgetLimit}
                                breakdown={calculateCategoryBreakdown()}
                                currency={budgetSettings.currency}
                                exchangeRate={budgetSettings.exchangeRate}
                                onSetLimit={setBudgetLimit}
                                onSetSettings={updateBudgetSettings}
                                t={t}
                                planRegion={activePlan.region}
                            />
                        </div>
                    </ImmersivePage>
                )}
                {/* NEW IMMERSIVE PAGES FOR TOOLS */}
                {viewMode === 'flights' && (
                    <ImmersivePage
                        isOpen={true}
                        onClose={() => setViewMode('overview')}
                        title={lang === 'zh' ? '機票資訊' : 'Flight Info'}
                        historyId="flights"
                        lang={lang}
                    >
                        <div className="max-w-2xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-gray-400">
                             <div className="p-8 bg-gray-50 rounded-full mb-6">
                                <Triangle size={48} className="transform rotate-180" />
                             </div>
                             <p className="text-sm font-bold uppercase tracking-widest">{lang === 'zh' ? '暫無機票記錄' : 'No flight records'}</p>
                             <button className="mt-8 px-8 py-3 bg-emerald-600 text-white rounded-full text-xs font-black shadow-lg">
                                {lang === 'zh' ? '新增機票' : 'Add Flight'}
                             </button>
                        </div>
                    </ImmersivePage>
                )}
                {viewMode === 'hotels' && (
                    <ImmersivePage
                        isOpen={true}
                        onClose={() => setViewMode('overview')}
                        title={lang === 'zh' ? '住宿管理' : 'Accommodation'}
                        historyId="hotels"
                        lang={lang}
                    >
                        <div className="max-w-2xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-gray-400">
                             <div className="p-8 bg-gray-50 rounded-full mb-6 text-gray-300">
                                <Hotel size={48} />
                             </div>
                             <p className="text-sm font-bold uppercase tracking-widest">{lang === 'zh' ? '尚未連結住宿' : 'No hotels booked'}</p>
                        </div>
                    </ImmersivePage>
                )}
                {viewMode === 'files' && (
                    <ImmersivePage
                        isOpen={true}
                        onClose={() => setViewMode('overview')}
                        title={lang === 'zh' ? '電子票券與檔案' : 'Document Vault'}
                        historyId="files"
                        lang={lang}
                    >
                        <div className="max-w-2xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-gray-400">
                             <div className="p-8 bg-gray-50 rounded-full mb-6 text-gray-300">
                                <FileText size={48} />
                             </div>
                             <p className="text-sm font-bold uppercase tracking-widest">{lang === 'zh' ? '檔案庫為空' : 'Vault is empty'}</p>
                        </div>
                    </ImmersivePage>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AppLayout;
