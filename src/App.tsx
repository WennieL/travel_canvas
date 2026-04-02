import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';

import {
    TRANSLATIONS,
    SAMPLE_ASSETS,
    TEMPLATES,
    SAMPLE_CREATORS,
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
import { SpotDetailPage } from './components/Discovery/SpotDetailPage';
import { ImmersivePage } from './components/Common/ImmersivePage';
import { TemplateDetailsPanel } from './components/Discovery/TemplateDetailsPanel';
import { CreatorProfilePanel } from './components/Discovery/CreatorProfilePanel';
import { Toast } from './components/Toast';
import { usePlans, useBudget, useUIState, useConfirm, useItinerary, useAppActions, useAppHandlers } from './hooks';
import { useIsMobile } from './hooks/useIsMobile';

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
    const isMobile = useIsMobile();

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

    const executeCreateBlankPlan = (data: { origin: string, destination: Region, startDate: string, endDate: string, totalDays: number, name?: string }) => {
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

    // [FIX] Listen for localStorage quota exceeded event from usePlans
    useEffect(() => {
        const handleStorageQuota = () => {
            showToastMessage(
                lang === 'zh'
                    ? '⚠️ 儲存空間不足！請匯出備份後清除舊行程。'
                    : '⚠️ Storage full! Please export a backup and delete old plans.',
                'warning',
                6000
            );
        };
        window.addEventListener('storage-quota-exceeded', handleStorageQuota);
        return () => window.removeEventListener('storage-quota-exceeded', handleStorageQuota);
    }, [lang, showToastMessage]);


    const {
        handleDragStart,
        handleDrop,
        handleRemoveItem,
        handleUpdateItem,
        handleUpdateScheduleItemByInstanceId,
        handleTapToAdd
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
            // [FIX] Clear discovery creator context when switching regions/plans
            ui.setDiscoveryCreatorId(null);
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
        savedSpots, savedTemplates,
        activeCreator, creatorTemplates,
        handleMapItemClick, handleToggleSubscribe, 
        handleToggleFavoriteSpot, handleToggleFavoriteTemplate,
        toggleLang,
        handleExploreCreatorMap, handleSidebarModeChange,
        startEditingName, saveName, handleNameKeyDown, openDatePicker,
        handleNavigate, handleSelectPlan, generateExportText,
    } = handlers;

    const handleAddItemToPlan = (item: TravelItem, planId: string) => {
        if (planId === activePlanId) {
            handleTapToAdd(item);
        } else {
            const planToUpdate = plans.find(p => p.id === planId);
            if (!planToUpdate) return;
            
            const newPlans = [...plans];
            const planIndex = newPlans.findIndex(p => p.id === planId);
            const schedule = { ...planToUpdate.schedule };
            const firstDay = Object.keys(schedule)[0] || 'Day 1';
            
            if (!schedule[firstDay]) {
                schedule[firstDay] = { morning: [], afternoon: [], evening: [], night: [], accommodation: [] };
            }
            
            const targetSlot = item.type === 'hotel' ? 'accommodation' : 'unsorted';
            schedule[firstDay] = { 
                ...schedule[firstDay],
                [targetSlot]: [
                    ...(schedule[firstDay][targetSlot] || []),
                    {
                        ...item,
                        instanceId: Math.random().toString(36).substr(2, 9),
                        startTime: '',
                        arrivalTransport: 'car'
                    }
                ]
            };
            
            newPlans[planIndex] = { ...planToUpdate, schedule };
            setPlans(newPlans);
            
            const itemName = (lang === 'en' && item.titleEn) ? item.titleEn : item.title;
            showToastMessage(
                lang === 'zh' 
                    ? `✅ 「${itemName}」已加入計畫：${planToUpdate.name}` 
                    : `✅ "${itemName}" added to plan: ${planToUpdate.name}`, 
                'success'
            );
        }
    };

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
            selectionSource={ui.selectionSource} setSelectionSource={ui.setSelectionSource}
            // Handlers
            showContextMap={showContextMap} setShowContextMap={setShowContextMap}
            selectedCreatorId={selectedCreatorId} setSelectedCreatorId={setSelectedCreatorId}
            subscribedCreators={subscribedCreators}
            customAssets={customAssets} setCustomAssets={setCustomAssets}
            showFavorites={showFavorites} setShowFavorites={setShowFavorites}
            savedSpots={savedSpots} savedTemplates={savedTemplates}
            activeCreator={activeCreator} creatorTemplates={creatorTemplates}
            handleMapItemClick={handleMapItemClick} handleToggleSubscribe={handleToggleSubscribe}
            handleToggleFavoriteSpot={handleToggleFavoriteSpot}
            handleToggleFavoriteTemplate={handleToggleFavoriteTemplate}
            toggleLang={toggleLang}
            handleExploreCreatorMap={handleExploreCreatorMap}
            handleSidebarModeChange={handleSidebarModeChange}
            startEditingName={startEditingName} saveName={saveName}
            handleNameKeyDown={handleNameKeyDown} openDatePicker={openDatePicker}
            handleNavigate={handleNavigate} handleSelectPlan={handleSelectPlan}
            // Itinerary
            handleDragStart={handleDragStart} handleDrop={handleDrop}
            handleRemoveItem={handleRemoveItem} handleUpdateItem={handleUpdateItem}
            handleTapToAdd={handleTapToAdd}
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
        
        {/* Immersive Detail Pages (Phase C: Unified) */}
        {ui.activeTemplateId && (
            <ImmersivePage
                isOpen={!!ui.activeTemplateId}
                onClose={() => {
                    ui.setActiveTemplateId(null);
                    // If we were in the middle of creating a trip, reopen the settings modal
                    if (pendingWizardData) {
                        ui.setShowCheckIn(true);
                    }
                }}
                title={lang === 'zh' ? '行程預覽' : 'Template Preview'}
                historyId={`tpl-${ui.activeTemplateId}`}
                transparentHeader
                hideTitle
                {...(() => {
                    const tpl = TEMPLATES.find(t => t.id === ui.activeTemplateId);
                    const creator = SAMPLE_CREATORS.find(c => c.id === tpl?.authorId);
                    return {
                        creator,
                        onFollow: handleToggleSubscribe,
                        isFollowed: creator ? subscribedCreators.includes(creator.id) : false,
                        lang
                    };
                })()}
            >
                {(() => {
                    const tpl = TEMPLATES.find(t => t.id === ui.activeTemplateId);
                    if (!tpl) return null;
                    return (
                        <TemplateDetailsPanel
                            template={tpl}
                            lang={lang}
                            onApply={(selectedTpl) => {
                                applyTemplate(selectedTpl);
                                ui.setActiveTemplateId(null);
                            }}
                            onCreatorClick={ui.setActiveCreatorId}
                            onSpotClick={(spot) => {
                                ui.setActiveSpotId(spot.id);
                                ui.setSelectedItem(spot);
                            }}
                            savedTemplates={savedTemplates}
                            handleToggleFavoriteTemplate={handleToggleFavoriteTemplate}
                        />
                    );
                })()}
            </ImmersivePage>
        )}

        {/* SpotDetailPage renders AFTER template panel to ensure z-order stacking */}
        {ui.activeSpotId && (
            <SpotDetailPage
                spotId={ui.activeSpotId}
                lang={lang}
                onClose={() => {
                    ui.setActiveSpotId(null);
                    ui.setSelectedItem(null);
                }}
                onAddItem={handleTapToAdd}
                subscribedCreators={subscribedCreators}
                onToggleSubscribe={handleToggleSubscribe}
                onCreatorClick={ui.setActiveCreatorId}
                fallbackItem={ui.selectedItem as TravelItem}
                plans={plans}
                onAddItemToPlan={handleAddItemToPlan}
                onCreateNewPlan={() => {
                    ui.setShowCheckIn(true);
                    setIsCreatingNewPlan(true);
                }}
                savedSpots={savedSpots}
                handleToggleFavoriteSpot={handleToggleFavoriteSpot}
            />
        )}

        {ui.activeCreatorId && (
            <ImmersivePage
                isOpen={!!ui.activeCreatorId}
                onClose={() => ui.setActiveCreatorId(null)}
                title={lang === 'zh' ? '達人專頁' : 'Creator Profile'}
                historyId={`creator-${ui.activeCreatorId}`}
            >
                {(() => {
                    const creator = SAMPLE_CREATORS.find(c => c.id === ui.activeCreatorId);
                    if (!creator) return null;
                    return (
                        <CreatorProfilePanel
                            creator={creator}
                            lang={lang}
                            onFollow={handleToggleSubscribe}
                            isFollowed={subscribedCreators.includes(creator.id)}
                            onTemplateClick={(tpl) => {
                                ui.setActiveTemplateId(tpl.id);
                            }}
                            onSpotClick={(spot) => {
                                ui.setActiveSpotId(spot.id);
                            }}
                        />
                    );
                })()}
            </ImmersivePage>
        )}
    </>);
}

export default App;
