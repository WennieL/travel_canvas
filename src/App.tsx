import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Plus, X, Search, Map as MapIcon, Calendar, Download, Share2, Package, Layout, CheckSquare, Settings, ExternalLink, Globe, Menu, ChevronLeft, ChevronRight, Filter, Grid, List, Info, AlertTriangle, CheckCircle, Smartphone, Monitor, Zap, Wallet, ListChecks, MapPin, Navigation, History, Star, HelpCircle, ArrowRight, Eye, Wand2, Sparkles, Smile, MessageSquare, PlusCircle } from 'lucide-react';
import * as htmlToImage from 'html-to-image';

import {
    TRANSLATIONS,
    TEMPLATES,
    SAMPLE_CREATORS,
    REGION_DEFAULT_CHECKLISTS,
} from './data/index';
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
import MapView from './components/MapView';
import SidebarContent from './components/SidebarContent';
import DropZone from './components/DropZone';
import ChecklistView from './components/ChecklistView';
import BudgetView from './components/BudgetView';
import ScheduleList from './components/ScheduleList';
import DiscoveryView from './components/DiscoveryView';
import { Toast } from './components/Toast';
import { usePlans, useBudget, useUIState, useConfirm, useItinerary, useAppActions } from './hooks';

// New Modular Components
import AppHeader from './components/AppHeader';
import DayTabs from './components/DayTabs';
import AppToolbar from './components/AppToolbar';
import AppModals from './components/AppModals';
import MobileNav from './components/MobileNav';
import CanvasView from './components/CanvasView';
import DesktopSidebar from './components/DesktopSidebar';
import FavoritesView from './components/FavoritesView';
import { ALL_SUGGESTIONS } from './data/suggestions';

export function App() {
    const [lang, setLang] = useState<LangType>('zh');
    const [isInitialized, setIsInitialized] = useState(false);
    const [isCreatingNewPlan, setIsCreatingNewPlan] = useState(false);

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
        selectedCreatorId, setSelectedCreatorId,
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
            localStorage.setItem('app_lang', lang);
            localStorage.setItem('sidebarWidth', sidebarWidth.toString());
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

    const [showContextMap, setShowContextMap] = useState(false);



    // Context Map Scroll Handler
    const handleMapItemClick = (item: any) => {
        const el = document.getElementById(`item-${item.instanceId}`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Animation for highlight
            el.classList.add('ring-2', 'ring-teal-500', 'ring-offset-2', 'bg-teal-50');
            setTimeout(() => {
                el.classList.remove('ring-2', 'ring-teal-500', 'ring-offset-2', 'bg-teal-50');
            }, 2000);
        }
    };

    // Derived State

    // Removed local activeRegion derived state to avoid confusion with ui.activeRegion
    const activeCreator = SAMPLE_CREATORS.find(c => c.id === selectedCreatorId) || null;
    const creatorTemplates = activeCreator ? TEMPLATES.filter(tpl => tpl.authorId === activeCreator.id) : [];
    const [subscribedCreators, setSubscribedCreators] = useState<string[]>([]);
    const [customAssets, setCustomAssets] = useState<TravelItem[]>([]);
    const [showFavorites, setShowFavorites] = useState(false);

    const handleToggleSubscribe = useCallback((creatorId: string) => {
        setSubscribedCreators(prev => {
            const isSubscribed = prev.includes(creatorId);
            const next = isSubscribed ? prev.filter(id => id !== creatorId) : [...prev, creatorId];
            showToastMessage(
                isSubscribed
                    ? (lang === 'zh' ? '已取消關注' : 'Unsubscribed')
                    : (lang === 'zh' ? '已關注達人！' : 'Subscribed to Creator!'),
                'success'
            );
            return next;
        });
    }, [lang, showToastMessage]);

    const toggleLang = () => setLang(prev => prev === 'en' ? 'zh' : 'en');

    const handleExploreCreatorMap = (authorId: string, authorName: string) => {
        ui.setDiscoveryCreatorId(authorId);
        // [PHASE 22 FIX] Always switch to map view for map exploration
        setViewMode('map');
        // Ensure sidebar is in map mode to show sidekick view
        ui.setSidebarMode('map');

        // On mobile, force switch to map view for better immersion
        if (window.innerWidth < 1024) {
            setViewMode('map');
        }
        showToastMessage(lang === 'zh' ? `正在探索 ${authorName} 的私房景點 🗺️` : `Exploring ${authorName}'s hidden spots 🗺️`);
    };

    const handleSidebarModeChange = (mode: 'list' | 'map') => {
        ui.setSidebarMode(mode);
        if (mode === 'map') {
            // [PHASE 22.4 FIX] Mobile Optimization: Use full-screen map for mobile, split-view for desktop
            if (isMobile) {
                setViewMode('map');
                setShowContextMap(false);
                ui.setShowMobileLibrary(false); // [PHASE 22.4 FIX] Close drawer to reveal map behind
            } else {
                setViewMode('canvas');
                setShowContextMap(true);
            }

            // Activate aggregate discovery layer by setting a global keyword
            if (!ui.discoveryCreatorId) {
                ui.setDiscoveryCreatorId('all'); // 'all' triggers the multi-creator aggregation
            }

            // Ensure sidebar stays open on desktop for the sidekick experience
            if (!isMobile) setIsSidebarOpen(true);
        } else {
            // Restore to main itinerary view (Timeline)
            setShowContextMap(false);
            // Clear discovery context when returning to list mode
            ui.setDiscoveryCreatorId(null);
        }
    };

    // Handlers
    const startEditingName = () => {
        setEditingName(activePlan?.name || '');
        setIsEditingName(true);
        setTimeout(() => { if (nameInputRef.current) nameInputRef.current.focus(); }, 50);
    };

    const saveName = () => {
        if (editingName.trim()) {
            updateActivePlan({ name: editingName.trim() });
        }
        setIsEditingName(false);
    };

    const handleNameKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') saveName();
        if (e.key === 'Escape') setIsEditingName(false);
    };

    const openDatePicker = () => setShowDateModal(true);

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
        handleUnlockConfirm, executeMoveItem
    } = actions;

    const handleNavigate = (view: ViewMode) => {
        if (isMobile) setIsSidebarOpen(false); // Only auto-close sidebar on mobile
        setShowFavorites(view === 'favorites');
        setShowPlanManager(view === 'projects');
        ui.setShowStartPicker(false); // [FIX] Ensure picker closes on nav

        // [PHASE 17] Reset creation state when navigating away from creation flow
        if (view !== 'discovery') {
            setIsCreatingNewPlan(false);
            setPendingWizardData(null);
            ui.setDiscoveryCreatorId(null); // Reset discovery mode when leaving main discovery flow
        }

        setViewMode(view);
    };

    const handleSelectPlan = (id: string) => {
        setActivePlanId(id);
        setShowPlanManager(false);
        // Switch to canvas view if in discovery or other non-itinerary views
        if (viewMode === 'discovery' || viewMode === 'projects' || viewMode === 'favorites') {
            setViewMode('canvas');
        }
        // Force sidebar open/projects tab if user selection happened in the sidebar
        if (isMobile) {
            ui.setShowMobileLibrary(false);
        } else {
            ui.setActiveTab('projects');
            ui.setIsSidebarOpen(true);
        }
    };


    const confirmUnlock = () => handleUnlockConfirm(unlockTarget, batchUnlockCount, setUnlockTarget, setBatchUnlockCount);

    const handleGateCheck = (action: () => void) => {
        let lockedCount = 0;
        let firstLockedItem: ScheduleItem | null = null;
        Object.values(activePlan.schedule).forEach(day => {
            Object.values(day).forEach(slotItems => {
                slotItems.forEach((item: ScheduleItem) => {
                    if (item.isLocked) {
                        lockedCount++;
                        if (!firstLockedItem) firstLockedItem = item;
                    }
                });
            });
        });

        if (lockedCount > 0 && firstLockedItem) {
            setBatchUnlockCount(lockedCount);
            setUnlockTarget(firstLockedItem);
        } else {
            action();
        }
    };

    const generateExportText = () => {
        let text = `✈️ ${activePlan.name}\n`;
        text += `💰 Budget: JP¥${calculateTotalBudget().toLocaleString()}\n\n`;
        // ... (truncated for brevity, real implementation would loop through days)
        return text;
    };

    if (showLanding) return <LandingPage onStart={(templateId?: string) => {
        if (templateId) {
            setShowLanding(false);
            const template = TEMPLATES.find(t => t.id === templateId);
            if (template) setTimeout(() => applyTemplate(template, true), 100);
        } else {
            // Logic for "Start" button on Landing Page
            // If they have no plans, show picker. If they have plans, just go to canvas.
            setShowLanding(false);
            if (plans.length === 1 && plans[0].id === 'tokyo-demo' && plans[0].schedule['Day 1'].morning.length === 0) {
                // [PHASE 12] Jump straight to Wizard for 2-step flow
                ui.setShowCheckIn(true);
            }
        }
    }} lang={lang} toggleLang={toggleLang} />;

    if (!activePlan) return <div className="h-screen w-screen flex items-center justify-center text-gray-500">Loading...</div>;

    const currentDaySchedule = activePlan.schedule[`Day ${currentDay}`] || { morning: [], afternoon: [], evening: [], night: [], accommodation: [] };

    return (
        <div className="flex flex-col md:flex-row h-[100dvh] bg-[#fafafa] text-slate-800 font-sans overflow-x-hidden max-w-[100vw]">
            {/* [NEW] Desktop Icon Sidebar (Canva Style) */}
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
                    {/* [NEW] Collapse Handle (Canva Style) */}
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
                        updateActivePlan={updateActivePlan} setShowLanding={setShowLanding} setShowPlanManager={setShowPlanManager}
                        setShowSubmitModal={setShowSubmitModal} setShowShareModal={setShowShareModal} handleGateCheck={handleGateCheck}
                        isSidebarOpen={isSidebarOpen} budgetLimit={budgetLimit} setBudgetLimit={setBudgetLimit}
                        calculateTotalBudget={calculateTotalBudget} calculateCategoryBreakdown={calculateCategoryBreakdown}
                        showContextMap={showContextMap} setShowContextMap={setShowContextMap} // Pass context map state
                        viewMode={viewMode} setViewMode={setViewMode}
                        showToastMessage={showToastMessage}
                    />
                )}

                {/* [NEW] Quick Fill Logic */}
                {(() => {
                    // This function is defined inside the render block scope to access state/props easily
                    // ideally it should be outside, but for now we follow existing structure or use a ref/effect if needed.
                    // Actually, let's define it before the return or inside the main component body.
                    // Wait, I can't define it here effectively if I want to use it in the map below.
                    // Let's insert it before the return statement.
                    return null;
                })()}

                {viewMode !== 'discovery' && viewMode !== 'budget' && viewMode !== 'checklist' && !showFavorites && (
                    <DayTabs
                        activePlan={activePlan} currentDay={currentDay} setCurrentDay={setCurrentDay}
                        handleAddDay={handleAddDay} handleDeleteDay={onDeleteDay}
                        getShortDate={getShortDate} t={t}
                        dayTabsContainerRef={dayTabsContainerRef} mobileDayTabsRef={mobileDayTabsRef}
                        viewMode={viewMode} setViewMode={setViewMode} lang={lang}
                    />
                )}

                {/* Favorites View (Mobile) */}
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
                    {/* View Switcher Content */}
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
                executeMoveItem={(day: number, targetSlot: TimeSlot) => {
                    if (ui.moveTarget) {
                        const { slot: sourceSlot, index } = ui.moveTarget;
                        const sourceDayKey = `Day ${currentDay}`;
                        const targetDayKey = `Day ${day}`;

                        // 1. Create a deep clone of the current schedule to perform all operations atomically
                        const newSchedule = { ...activePlan.schedule };

                        // 2. Extract and Remove from source
                        if (!newSchedule[sourceDayKey] || !newSchedule[sourceDayKey][sourceSlot as keyof DaySchedule]) return;

                        // Clone the source day and slot array
                        newSchedule[sourceDayKey] = { ...newSchedule[sourceDayKey] };
                        newSchedule[sourceDayKey][sourceSlot as keyof DaySchedule] = [...newSchedule[sourceDayKey][sourceSlot as keyof DaySchedule]];

                        const item = newSchedule[sourceDayKey][sourceSlot as keyof DaySchedule].splice(index, 1)[0];

                        if (!item) return;

                        // 3. Prepare target day
                        if (!newSchedule[targetDayKey]) {
                            newSchedule[targetDayKey] = { morning: [], afternoon: [], evening: [], night: [], accommodation: [] };
                        } else {
                            newSchedule[targetDayKey] = { ...newSchedule[targetDayKey] };
                        }

                        // 4. Add to target slot
                        const targetSlotKey = (targetSlot || sourceSlot) as keyof DaySchedule;
                        newSchedule[targetDayKey][targetSlotKey] = [...(newSchedule[targetDayKey][targetSlotKey] || [])];

                        // Update the item's day property and push to target
                        (newSchedule[targetDayKey][targetSlotKey] as ScheduleItem[]).push({
                            ...item,
                            day,
                            startTime: (sourceSlot !== targetSlotKey) ? '' : item.startTime // Reset time if slot changes
                        });

                        // 5. Update state ONCE
                        updateActivePlan({ schedule: newSchedule });

                        showToastMessage(
                            lang === 'zh'
                                ? `已將「${item.title}」移動至第 ${day} 天 ${t[targetSlotKey] || targetSlotKey}`
                                : `Moved "${item.title}" to Day ${day} ${t[targetSlotKey] || targetSlotKey}`
                        );
                    }
                    setShowMoveModal(false);
                }}

                // Submit & Feedback
                showSubmitModal={showSubmitModal} setShowSubmitModal={setShowSubmitModal}

                // Mobile States
                showMobilePreview={showMobilePreview} setShowMobilePreview={setShowMobilePreview}

                // Template & Unlock
                previewTemplate={previewTemplate} setPreviewTemplate={setPreviewTemplate}
                unlockTarget={unlockTarget} setUnlockTarget={setUnlockTarget}
                batchUnlockCount={batchUnlockCount} setBatchUnlockCount={setBatchUnlockCount}
                confirmUnlock={confirmUnlock}

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

            {toast.show && <Toast message={toast.message} type={toast.type} duration={toast.duration} onClose={() => setToast({ show: false, message: '' })} />}
        </div >
    );
}

export default App;
