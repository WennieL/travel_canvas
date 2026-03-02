import React, { useState, useEffect, useRef, useCallback } from 'react';

import {
    TRANSLATIONS,
    SAMPLE_ASSETS,
    TEMPLATES,
    TOKYO_DEMO_PLAN
} from './data';
import {
    LangType,
    ItemType,
    TransportMode,
    TimeSlot,
    ScheduleItem,
    FullSchedule,
    Plan,
    ViewMode,
    TravelItem,
    Region,
    Template,
    DaySchedule,
    ChecklistItem
} from './types';
import {
    getSlotLabel,
    getFallbackImage
} from './utils';

import LandingPage from './components/LandingPage';
import WelcomeSlides from './components/WelcomeSlides';
import { Toast } from './components/Toast';
import { usePlans, useBudget, useUIState, useConfirm, useItinerary, useAppActions, useAppHandlers } from './hooks';

// Layout Component
import AppLayout from './components/AppLayout';


export function App() {
    const [lang, setLang] = useState<LangType>('zh');
    const [isInitialized, setIsInitialized] = useState(false);
    const [isCreatingNewPlan, setIsCreatingNewPlan] = useState(false);
    const [showOnboarding, setShowOnboarding] = useState(false);

    // UI State Management Hook
    const ui = useUIState();
    const { confirm } = useConfirm();
    const {
        showLanding, setShowLanding,
        viewMode, setViewMode,
        isFullscreen, setIsFullscreen,
        isSidebarOpen, setIsSidebarOpen,
        sidebarWidth, setSidebarWidth,
        sidebarHighlight, setSidebarHighlight,
        isEditingName, setIsEditingName,
        editingName, setEditingName,
        showPlanManager, setShowPlanManager,
        showDateModal, setShowDateModal,
        showExportModal, setShowExportModal,
        showShareModal, setShowShareModal,
        showCustomItemModal, setShowCustomItemModal,
        showSubmitModal, setShowSubmitModal,
        showCitySelector, setShowCitySelector,
        showMobileLibrary, setShowMobileLibrary,
        showMobilePreview, setShowMobilePreview,
        showMoveModal, setShowMoveModal,
        activeTab, setActiveTab,
        activeCategory, setActiveCategory,
        searchQuery, setSearchQuery,
        previewTemplate, setPreviewTemplate,
        unlockTarget, setUnlockTarget,
        batchUnlockCount, setBatchUnlockCount,
        moveTarget, setMoveTarget,
        activeRegion, setActiveRegion,
        addToSlotTarget, setAddToSlotTarget,
        discoveryCreatorId, setDiscoveryCreatorId,
        sidebarMode, setSidebarMode
    } = ui;

    const t = TRANSLATIONS[lang];

    // Business Logic Hooks
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

    const [pendingWizardData, setPendingWizardData] = useState<any>(null);

    const {
        plans, activePlanId, activePlan, currentDay,
        setPlans, setActivePlanId, setCurrentDay,
        updateActivePlan, updateChecklist, handleCreatePlan: _handleCreatePlan,
        handleDeletePlan: _handleDeletePlan, handleAddDay, handleDeleteDay: _handleDeleteDay, getDisplayDate, getShortDate
    } = usePlans(isInitialized, TRANSLATIONS[lang], lang);

    const handleTriggerStartPicker = () => {
        // [PHASE 12 REFINEMENT转为3步流] 
        // 内部触发一律先走 Wizard
        setIsCreatingNewPlan(true); // [PHASE 17 FIX] Ensure we mark as "Creating" when starting wizard
        ui.setShowCheckIn(true);
    };

    const executeCreateBlankPlan = (data: { origin: string, destination: Region, startDate: string, endDate: string, totalDays: number }) => {
        _handleCreatePlan(data);
        setIsCreatingNewPlan(false);

        // [PHASE 17 FIX] Ensure sidebar shows the plan list immediately after creation
        ui.setActiveTab('projects');
        ui.setIsSidebarOpen(true);
        ui.setIsSidebarPinned(true);

        showToastMessage(lang === 'zh' ? '祝您旅途愉快！✈️' : 'Have a great trip! ✈️');
    };

    const enterExpertCreationMode = () => {
        setIsCreatingNewPlan(true);
        setViewMode('discovery');
        setActiveTab('templates');
        ui.setShowStartPicker(false);
        showToastMessage(lang === 'zh' ? '請從靈感牆中挑選一個您喜歡的行程 ✨' : 'Please pick a template you like from the inspiration wall ✨');
    };

    const {
        budgetLimit, setBudgetLimit, calculateTotalBudget, calculateCategoryBreakdown,
        budgetSettings, updateBudgetSettings
    } = useBudget(activePlan, TRANSLATIONS[lang]);

    const [toast, setToast] = useState<{ show: boolean, message: string, type?: 'success' | 'warning' | 'error' | 'info', duration?: number }>({ show: false, message: '' });
    const showToastMessage = useCallback((message: string, type: 'success' | 'warning' | 'error' | 'info' = 'success', duration: number = 2000) => {
        setToast({ show: true, message, type, duration });
    }, []);

    // Itinerary Management Hook
    const {
        handleDragStart,
        handleDrop,
        handleRemoveItem,
        handleUpdateItem,
        handleUpdateScheduleItemByInstanceId,
        handleTapToAdd,
        handleQuickFill
    } = useItinerary(
        activePlan,
        currentDay,
        TRANSLATIONS[lang],
        lang,
        updateActivePlan,
        showToastMessage,
        ui,
        addToSlotTarget,
        setAddToSlotTarget
    );

    // Refs
    const scheduleRef = useRef<HTMLDivElement>(null);
    const nameInputRef = useRef<HTMLInputElement>(null);
    const dayTabsContainerRef = useRef<HTMLDivElement>(null);
    const mobileDayTabsRef = useRef<HTMLDivElement>(null);

    // Initialization & Persistence
    useEffect(() => {
        const savedLang = localStorage.getItem('app_lang');
        if (savedLang) setLang(savedLang as LangType);
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            try {
                localStorage.setItem('app_lang', lang);
                localStorage.setItem('sidebarWidth', sidebarWidth.toString());
            } catch (e) {
                console.warn('Failed to save settings to localStorage:', e);
            }
        }
    }, [lang, sidebarWidth, isInitialized]);

    useEffect(() => {
        if (activePlan?.region && activePlan.region !== 'all') {
            ui.setActiveRegion(activePlan.region);
        }
    }, [activePlan?.id, activePlan?.region]);

    // [FIX] Force "Assets" tab when mobile library or specific adding actions are triggered
    useEffect(() => {
        if (showMobileLibrary) {
            setActiveTab('assets');
        }
    }, [showMobileLibrary, setActiveTab]);

    // App Handlers Hook
    const handlers = useAppHandlers({
        lang, setLang, activePlan, updateActivePlan, activePlanId, setActivePlanId,
        plans, viewMode, setViewMode, setIsCreatingNewPlan, setPendingWizardData,
        showToastMessage, ui, isMobile,
        nameInputRef, isEditingName, setIsEditingName, editingName, setEditingName,
        setShowPlanManager, setShowDateModal, isSidebarOpen, setIsSidebarOpen,
        calculateTotalBudget
    });

    const {
        showContextMap, setShowContextMap,
        selectedCreatorId, setSelectedCreatorId,
        subscribedCreators, customAssets, setCustomAssets,
        showFavorites, setShowFavorites,
        activeCreator, creatorTemplates,
        handleMapItemClick, handleToggleSubscribe, toggleLang,
        handleExploreCreatorMap, handleSidebarModeChange,
        startEditingName, saveName, handleNameKeyDown, openDatePicker,
        handleNavigate, handleSelectPlan, generateExportText,
    } = handlers;

    // Simplified Actions via Hook
    const actions = useAppActions({
        plans, setPlans, activePlan, updateActivePlan, activePlanId, setActivePlanId,
        currentDay, setCurrentDay, lang, t, confirm, showToastMessage,
        isCreatingNewPlan, setIsCreatingNewPlan, ui, setCustomAssets,
        _handleDeleteDay: (day: number, e?: React.MouseEvent) => _handleDeleteDay(day, e),
        _handleDeletePlan: (id: string, e: React.MouseEvent) => _handleDeletePlan(id, e),
        pendingWizardData, setPendingWizardData
    });

    const {
        applyTemplate, handleCreateCustomItem, onDeleteDay, onDeletePlan,
        handleUnlockConfirm, executeMoveItem, handleGateCheck
    } = actions;

    if (showLanding) return <LandingPage onStart={(templateId?: string) => {
        if (templateId) {
            setShowLanding(false);
            const template = TEMPLATES.find(t => t.id === templateId);
            if (template) setTimeout(() => applyTemplate(template), 100);
        } else {
            setShowLanding(false);
            // Show onboarding for first-time users
            if (!localStorage.getItem('tc_onboarding_done')) {
                setShowOnboarding(true);
            } else if (plans.length === 1 && plans[0].id === 'tokyo-demo' && plans[0].schedule['Day 1'].morning.length === 0) {
                ui.setShowCheckIn(true);
            }
        }
    }} lang={lang} toggleLang={toggleLang} />;

    if (!activePlan) return <div className="h-screen w-screen flex items-center justify-center text-gray-500">Loading...</div>;

    // Welcome Slides overlay (renders on top of app)
    const welcomeOverlay = showOnboarding ? (
        <WelcomeSlides
            lang={lang}
            onComplete={() => {
                setShowOnboarding(false);
                // After onboarding, show wizard if new user
                if (plans.length === 1 && plans[0].id === 'tokyo-demo' && plans[0].schedule['Day 1'].morning.length === 0) {
                    ui.setShowCheckIn(true);
                }
            }}
        />
    ) : null;

    return (<>
        <AppLayout
            lang={lang} t={t} activePlan={activePlan} plans={plans} activePlanId={activePlanId}
            currentDay={currentDay} setCurrentDay={setCurrentDay}
            viewMode={viewMode} setViewMode={setViewMode} isMobile={isMobile}
            ui={ui}
            isFullscreen={isFullscreen} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}
            sidebarWidth={sidebarWidth}
            isEditingName={isEditingName} editingName={editingName} setEditingName={setEditingName}
            showPlanManager={showPlanManager} setShowPlanManager={setShowPlanManager}
            showDateModal={showDateModal} setShowDateModal={setShowDateModal}
            showShareModal={showShareModal} setShowShareModal={setShowShareModal}
            showCustomItemModal={showCustomItemModal} setShowCustomItemModal={setShowCustomItemModal}
            showSubmitModal={showSubmitModal} setShowSubmitModal={setShowSubmitModal}
            showCitySelector={showCitySelector} setShowCitySelector={setShowCitySelector}
            showMobileLibrary={showMobileLibrary}
            showMobilePreview={showMobilePreview} setShowMobilePreview={setShowMobilePreview}
            showMoveModal={showMoveModal} setShowMoveModal={setShowMoveModal}
            activeTab={activeTab} setActiveTab={setActiveTab}
            activeCategory={activeCategory} setActiveCategory={setActiveCategory}
            searchQuery={searchQuery} setSearchQuery={setSearchQuery}
            previewTemplate={previewTemplate} setPreviewTemplate={setPreviewTemplate}
            unlockTarget={unlockTarget} setUnlockTarget={setUnlockTarget}
            batchUnlockCount={batchUnlockCount} setBatchUnlockCount={setBatchUnlockCount}
            activeRegion={activeRegion} setActiveRegion={setActiveRegion}
            addToSlotTarget={addToSlotTarget} setAddToSlotTarget={setAddToSlotTarget}
            discoveryCreatorId={discoveryCreatorId}
            sidebarMode={sidebarMode} setSidebarMode={setSidebarMode}
            // Handlers
            showContextMap={showContextMap} setShowContextMap={setShowContextMap}
            selectedCreatorId={selectedCreatorId} setSelectedCreatorId={setSelectedCreatorId}
            subscribedCreators={subscribedCreators}
            customAssets={customAssets} setCustomAssets={setCustomAssets}
            showFavorites={showFavorites} setShowFavorites={setShowFavorites}
            activeCreator={activeCreator} creatorTemplates={creatorTemplates}
            handleMapItemClick={handleMapItemClick} handleToggleSubscribe={handleToggleSubscribe}
            toggleLang={toggleLang}
            handleExploreCreatorMap={handleExploreCreatorMap}
            handleSidebarModeChange={handleSidebarModeChange}
            startEditingName={startEditingName} saveName={saveName}
            handleNameKeyDown={handleNameKeyDown} openDatePicker={openDatePicker}
            handleNavigate={handleNavigate} handleSelectPlan={handleSelectPlan}
            // Itinerary
            handleDragStart={handleDragStart} handleDrop={handleDrop}
            handleRemoveItem={handleRemoveItem} handleUpdateItem={handleUpdateItem}
            handleTapToAdd={handleTapToAdd} handleQuickFill={handleQuickFill}
            handleUpdateScheduleItemByInstanceId={handleUpdateScheduleItemByInstanceId}
            // Actions
            applyTemplate={applyTemplate} onDeleteDay={onDeleteDay}
            handleUnlockConfirm={handleUnlockConfirm} executeMoveItem={executeMoveItem}
            handleGateCheck={handleGateCheck}
            // Plans
            setPlans={setPlans} updateActivePlan={updateActivePlan}
            updateChecklist={updateChecklist} handleAddDay={handleAddDay}
            _handleDeletePlan={onDeletePlan} getShortDate={getShortDate}
            handleTriggerStartPicker={handleTriggerStartPicker}
            executeCreateBlankPlan={executeCreateBlankPlan}
            enterExpertCreationMode={enterExpertCreationMode}
            setIsCreatingNewPlan={setIsCreatingNewPlan}
            // Budget
            budgetLimit={budgetLimit} setBudgetLimit={setBudgetLimit}
            calculateTotalBudget={calculateTotalBudget}
            calculateCategoryBreakdown={calculateCategoryBreakdown}
            budgetSettings={budgetSettings} updateBudgetSettings={updateBudgetSettings}
            // Toast
            toast={toast} setToast={setToast} showToastMessage={showToastMessage}
            // Refs
            nameInputRef={nameInputRef}
            dayTabsContainerRef={dayTabsContainerRef}
            mobileDayTabsRef={mobileDayTabsRef}
            // Wizard
            pendingWizardData={pendingWizardData} setPendingWizardData={setPendingWizardData}
        />
        {welcomeOverlay}
    </>);
}

export default App;
