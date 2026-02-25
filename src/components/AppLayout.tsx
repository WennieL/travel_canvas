import React from 'react';
import { ChevronLeft } from 'lucide-react';

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

    // Itinerary
    handleDragStart: (e: React.DragEvent, item: TravelItem, source: 'sidebar' | 'canvas', slot?: TimeSlot, index?: number) => void;
    handleDrop: (e: React.DragEvent, slot: any, index?: number) => void;
    handleRemoveItem: (slot: any, index: number) => void;
    handleUpdateItem: (slot: any, index: number, updates: Partial<ScheduleItem>) => void;
    handleTapToAdd: (item: any) => void;
    handleQuickFill: (slot: any) => void;
    handleUpdateScheduleItemByInstanceId: (instanceId: string, updates: Partial<ScheduleItem>) => void;

    // Actions
    applyTemplate: (template: Template, skipConfirm?: boolean) => void;
    onDeleteDay: (day: number, e?: React.MouseEvent) => void;
    handleUnlockConfirm: (unlockTarget: ScheduleItem | null, batchUnlockCount: number, setUnlockTarget: any, setBatchUnlockCount: any) => void;
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
    executeCreateBlankPlan: (data: any) => void;
    enterExpertCreationMode: () => void;
    setIsCreatingNewPlan: (val: boolean) => void;

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
        // Handlers
        showContextMap, setShowContextMap,
        selectedCreatorId, setSelectedCreatorId,
        subscribedCreators, customAssets, setCustomAssets,
        showFavorites, setShowFavorites,
        activeCreator, creatorTemplates,
        handleMapItemClick, handleToggleSubscribe, toggleLang,
        handleExploreCreatorMap, handleSidebarModeChange,
        startEditingName, saveName, handleNameKeyDown, openDatePicker,
        handleNavigate, handleSelectPlan,
        // Itinerary
        handleDragStart, handleDrop, handleRemoveItem, handleUpdateItem,
        handleTapToAdd, handleQuickFill, handleUpdateScheduleItemByInstanceId,
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

    const currentDaySchedule = activePlan.schedule[`Day ${currentDay}`] || { morning: [], afternoon: [], evening: [], night: [], accommodation: [] };

    return (
        <div className="flex flex-col md:flex-row h-[100dvh] bg-[#fafafa] text-slate-800 font-sans overflow-x-hidden max-w-[100vw]">
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
                                onSelectItem={(item: any) => ui.setSelectedItem(item)}
                                selectedItem={ui.selectedItem}
                                discoveryCreatorId={ui.discoveryCreatorId}
                            />
                        </div>
                    )}
                </div>
            )}

            {/* Main Area */}
            <div className="flex-1 flex flex-col min-w-0 bg-premium-paper relative overflow-x-hidden">
                {viewMode !== 'discovery' && !showFavorites && (
                    <AppHeader
                        lang={lang} t={t} toggleLang={toggleLang} activePlan={activePlan}
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
                        showToastMessage={showToastMessage}
                    />
                )}

                {viewMode !== 'discovery' && viewMode !== 'budget' && viewMode !== 'checklist' && !showFavorites && (
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
                            onCreatorClick={ui.setSelectedCreatorId}
                            onSetShowCustomItemModal={setShowCustomItemModal}
                            onNavigateToExplore={() => { setShowFavorites(false); setViewMode('discovery'); }}
                        />
                    </div>
                )}

                {/* Canvas Area */}
                {!showFavorites && <div className="flex-1 overflow-y-auto overflow-x-hidden bg-transparent p-4 pb-24 lg:px-8 lg:pb-8 lg:pt-4 no-scrollbar">
                    {viewMode === 'map' ? (
                        <div className="h-full">
                            <MapView
                                schedule={activePlan.schedule[`Day ${currentDay}`] || { morning: [], afternoon: [], evening: [], night: [], accommodation: [] }}
                                lang={lang}
                                t={t}
                                onItemClick={ui.setSelectedItem}
                                onClose={() => setViewMode('canvas')}
                                discoveryCreatorId={discoveryCreatorId}
                                onAddItem={(item) => handleTapToAdd(item)}
                                currentDay={currentDay}
                                addToSlotTarget={addToSlotTarget}
                                onExitDiscovery={() => ui.setDiscoveryCreatorId(null)}
                                activeRegion={activePlan.region}
                            />
                        </div>
                    ) : viewMode === 'discovery' ? (
                        <div className="h-full">
                            <DiscoveryView
                                onPreviewTemplate={setPreviewTemplate}
                                onStoryPreview={(tpl) => {
                                    setPreviewTemplate(tpl);
                                    ui.setShowStoryPreview(true);
                                }}
                                onCreatorClick={setSelectedCreatorId}
                                onExploreCreatorMap={handleExploreCreatorMap}
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
                    ) : viewMode === 'checklist' ? (
                        <div className="h-full pb-20 lg:pb-0">
                            <ChecklistView
                                activePlan={activePlan}
                                lang={lang}
                                t={t}
                                showToastMessage={showToastMessage}
                                onUpdateChecklist={updateChecklist}
                            />
                        </div>
                    ) : viewMode === 'budget' ? (
                        <div className="h-full pb-20 lg:pb-0">
                            <BudgetView
                                spent={calculateTotalBudget()}
                                limit={budgetLimit}
                                breakdown={calculateCategoryBreakdown()}
                                currency={budgetSettings.currency}
                                exchangeRate={budgetSettings.exchangeRate}
                                onSetLimit={setBudgetLimit}
                                onSetSettings={updateBudgetSettings}
                                t={t}
                            />
                        </div>
                    ) : (
                        <CanvasView
                            showContextMap={showContextMap}
                            currentDaySchedule={currentDaySchedule}
                            activePlan={activePlan}
                            lang={lang}
                            t={t}
                            isSidebarOpen={isSidebarOpen}
                            handleDrop={handleDrop}
                            handleRemoveItem={handleRemoveItem}
                            handleUpdateItem={handleUpdateItem}
                            handleDragStart={handleDragStart}
                            handleQuickFill={handleQuickFill}
                            handleMapItemClick={handleMapItemClick}
                            setAddToSlotTarget={setAddToSlotTarget}
                            setShowMoveModal={setShowMoveModal}
                            setMoveTarget={ui.setMoveTarget}
                            setShowMobileLibrary={ui.setShowMobileLibrary}
                            setSidebarHighlight={ui.setSidebarHighlight}
                            setIsSidebarOpen={ui.setIsSidebarOpen}
                            setUnlockTarget={setUnlockTarget}
                            setSelectedItem={ui.setSelectedItem}
                            setActiveTab={setActiveTab}
                            discoveryCreatorId={discoveryCreatorId}
                            currentDay={currentDay}
                            addToSlotTarget={addToSlotTarget}
                            onExitDiscovery={() => ui.setDiscoveryCreatorId(null)}
                            onAddItem={handleTapToAdd}
                            setSidebarMode={ui.setSidebarMode}
                        />
                    )}
                </div>}
            </div>

            <AppModals
                // Shared & Language
                lang={lang} t={t} showToastMessage={showToastMessage}

                // View State & Sidebar
                activeTab={activeTab} setActiveTab={setActiveTab}
                searchQuery={searchQuery} setSearchQuery={setSearchQuery}
                activeCategory={activeCategory} setActiveCategory={setActiveCategory}
                activeRegion={ui.activeRegion} setActiveRegion={setActiveRegion}
                isSidebarOpen={isSidebarOpen} setIsSidebarOpen={ui.setIsSidebarOpen}
                setViewMode={setViewMode}

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
                confirmUnlock={() => handleUnlockConfirm(unlockTarget, batchUnlockCount, setUnlockTarget, setBatchUnlockCount)}

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
                    setSelectedCreatorId(id);
                    ui.setShowStoryPreview(false);
                    setPreviewTemplate(null);
                }}
                onPreviewTemplate={(tpl: Template) => setPreviewTemplate(tpl)}
            />

            {/* Mobile Bottom Tab Navigation */}
            <MobileNav
                viewMode={viewMode}
                setViewMode={handleNavigate}
                showPlanManager={showPlanManager}
                setShowPlanManager={(show) => {
                    if (show) setShowFavorites(false);
                    setShowPlanManager(show);
                }}
                showFavorites={showFavorites}
                setShowFavorites={(show) => {
                    if (show) setShowPlanManager(false);
                    setShowFavorites(show);
                }}
                hasActivePlan={!!activePlan}
                onNewPlan={() => ui.setShowStartPicker(true)}
                onShowBudget={() => {
                    handleNavigate('budget');
                }}
                onSetLang={toggleLang}
                lang={lang}
                t={t}
            />

            {toast.show && <Toast message={toast.message} type={toast.type as any} duration={toast.duration} onClose={() => setToast({ show: false, message: '' })} />}
        </div>
    );
};

export default AppLayout;
