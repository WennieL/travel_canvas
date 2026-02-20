import React from 'react';
import { X, MoveRight } from 'lucide-react';
import {
    ShareHubModal,
    DateModal,
    PlanManagerModal,
    CustomItemModal,
    SubmitModal,
    TemplatePreviewModal,
    UnlockModal,
    ItemDetailModal,
    StartPickerModal,
    MoveToDayModal,
    CreatorProfileModal,
    TemplateStoryPreview,
    CheckInWizardModal,
} from './Modals';
import { MobileLibrary } from './MobileLibrary';
import { MobilePreview } from './MobilePreview';
import { Plan, LangType, Template, TimeSlot, ScheduleItem, ItemType, TransportMode, Region, TravelItem, ViewMode, ChecklistItem } from '../types';

interface AppModalsProps {
    // Shared
    lang: LangType;
    t: any;
    showToastMessage: (msg: string) => void;

    // View State (Required for Mobile Library)
    activeTab: 'assets' | 'templates' | 'budget' | 'checklist' | 'projects';
    setActiveTab: (tab: 'assets' | 'templates' | 'budget' | 'checklist' | 'projects') => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    activeCategory: 'all' | ItemType;
    setActiveCategory: (category: 'all' | ItemType) => void;
    activeRegion: Region;
    setActiveRegion: (region: Region) => void;
    isSidebarOpen: boolean;
    setIsSidebarOpen: (open: boolean) => void;
    setViewMode: (mode: ViewMode) => void;

    // Handlers
    handleDragStart: (e: React.DragEvent, item: TravelItem, source: 'sidebar' | 'canvas') => void;
    handleTapToAdd: (item: TravelItem) => void;

    // Plan Manager
    showPlanManager: boolean;
    setShowPlanManager: (show: boolean) => void;
    plans: Plan[];
    activePlanId: string;
    setActivePlanId: (id: string) => void;
    onTriggerPicker: () => void;
    onExpertMode: () => void;
    handleDeletePlan: (id: string, e: React.MouseEvent) => void;

    // Custom Item
    showCustomItemModal: boolean;
    setShowCustomItemModal: (show: boolean) => void;
    handleCreateCustomItem: (data: any) => void;
    addToSlotTarget?: TimeSlot | null;

    // Share Modal
    showShareModal: boolean;
    setShowShareModal: (show: boolean) => void;
    onOpenMobilePreview: () => void;
    activePlan: Plan;
    currentDay: number;

    // Date Modal
    showDateModal: boolean;
    setShowDateModal: (show: boolean) => void;
    tempStartDate: string;
    tempEndDate: string;
    onDateConfirm: (start: string, end: string) => void;

    // Creator Profile
    selectedCreatorId: string | null;
    setSelectedCreatorId: (id: string | null) => void;
    activeCreator: any;
    creatorTemplates: Template[];
    isSubscribed: boolean;
    toggleSubscription: (id: string) => void;
    applyTemplate: (template: any) => void;

    // Move Item Modal
    showMoveModal: boolean;
    setShowMoveModal: (show: boolean) => void;
    moveTarget: { slot: TimeSlot, index: number } | null;
    executeMoveItem: (day: number, slot: TimeSlot) => void;

    // Submit Modal
    showSubmitModal: boolean;
    setShowSubmitModal: (show: boolean) => void;

    // Mobile Preview
    showMobilePreview: boolean;
    setShowMobilePreview: (show: boolean) => void;

    // Mobile Library
    showMobileLibrary: boolean;
    setShowMobileLibrary: (show: boolean) => void;

    // Template Preview
    previewTemplate: Template | null;
    setPreviewTemplate: (tpl: Template | null) => void;

    // Unlock Modal
    unlockTarget: ScheduleItem | null;
    setUnlockTarget: (item: ScheduleItem | null) => void;
    batchUnlockCount: number;
    setBatchUnlockCount: (count: number) => void;
    confirmUnlock: () => void;

    // Start Picker / Check-in
    showStartPicker: boolean;
    setShowStartPicker: (show: boolean) => void;
    showCheckIn: boolean;
    setShowCheckIn: (show: boolean) => void;
    handleCreatePlan: (data: any) => void;

    // Story Preview
    showStoryPreview: boolean;
    setShowStoryPreview: (show: boolean) => void;

    // Item Detail Modal
    selectedItem: ScheduleItem | null;
    setSelectedItem: (item: ScheduleItem | null) => void;
    onUpdateScheduleItem?: (instanceId: string, updates: Partial<ScheduleItem>) => void;

    // Additional state for children
    setPlans: (plans: Plan[]) => void;
    setCustomAssets: React.Dispatch<React.SetStateAction<TravelItem[]>>;
    customAssets: TravelItem[];
    subscribedCreators: string[];
    onCreatorClick: (id: string) => void;
    onPreviewTemplate: (tpl: Template) => void;

    // Tools props for Sidebar/MobileLibrary
    budgetLimit: number;
    setBudgetLimit: (limit: number) => void;
    calculateTotalBudget: () => number;
    calculateCategoryBreakdown: () => any;
    onUpdateChecklist: (checklist: ChecklistItem[]) => void;
    currency?: string;
    exchangeRate?: number;
    onSetSettings?: (currency: string, rate: number) => void;

    // Phase 12 Refinement: Handoff State
    pendingWizardData: any;
    setPendingWizardData: (data: any) => void;
}

const AppModals: React.FC<AppModalsProps> = (props) => {
    const {
        lang, t, showToastMessage,
        activeTab, setActiveTab,
        showPlanManager, setShowPlanManager, plans, activePlanId, setActivePlanId,
        onTriggerPicker, onExpertMode,
        handleDeletePlan, activeRegion, setActiveRegion,
        showCustomItemModal, setShowCustomItemModal, handleCreateCustomItem,
        activePlan, currentDay,
        setPlans, setCustomAssets,
        customAssets, subscribedCreators,
        showShareModal, setShowShareModal, onOpenMobilePreview,
        showDateModal, setShowDateModal, tempStartDate, tempEndDate, onDateConfirm,
        selectedCreatorId, setSelectedCreatorId, activeCreator, creatorTemplates, isSubscribed, toggleSubscription, applyTemplate,
        showMoveModal, setShowMoveModal, moveTarget, executeMoveItem,
        showSubmitModal, setShowSubmitModal,
        showMobilePreview, setShowMobilePreview,
        showMobileLibrary, setShowMobileLibrary,
        previewTemplate, setPreviewTemplate,
        unlockTarget, setUnlockTarget, batchUnlockCount, setBatchUnlockCount, confirmUnlock,
        showStartPicker, setShowStartPicker,
        showCheckIn, setShowCheckIn,
        handleCreatePlan,
        setIsSidebarOpen, setViewMode,
        selectedItem, setSelectedItem,
        showStoryPreview, setShowStoryPreview,
        budgetLimit, setBudgetLimit, calculateTotalBudget, calculateCategoryBreakdown,
        onUpdateChecklist, currency, exchangeRate, onSetSettings,
        onCreatorClick, onPreviewTemplate,
        pendingWizardData, setPendingWizardData
    } = props;

    return (
        <>
            <StartPickerModal
                isOpen={showStartPicker}
                onClose={() => {
                    setShowStartPicker(false);
                    setPendingWizardData(null); // Clear context on close
                }}
                lang={lang}
                t={t}
                onChooseBlank={() => {
                    if (pendingWizardData) {
                        handleCreatePlan(pendingWizardData);
                        setActiveRegion(pendingWizardData.destination);
                        setShowStartPicker(false);
                        setPendingWizardData(null);
                        setViewMode('canvas');
                    } else {
                        // Fallback if no wizard data (should not happen in new flow)
                        setShowCheckIn(true);
                        setShowStartPicker(false);
                    }
                }}
                onChooseTemplate={() => {
                    if (pendingWizardData) {
                        // Enter Discovery view but filtered by region
                        setActiveRegion(pendingWizardData.destination);
                        setViewMode('discovery');
                        setActiveTab('templates');
                        setShowStartPicker(false);
                        // We keep pendingWizardData until applyTemplate is called
                    } else {
                        onExpertMode();
                    }
                }}
                pendingData={pendingWizardData}
            />
            <CheckInWizardModal
                isOpen={showCheckIn}
                onClose={() => setShowCheckIn(false)}
                onComplete={(data) => {
                    setPendingWizardData(data);
                    setShowCheckIn(false);
                    setShowStartPicker(true);
                }}
                lang={lang}
                t={t}
            />
            <ItemDetailModal
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                item={selectedItem}
                t={t}
                lang={lang}
            />

            <PlanManagerModal
                isOpen={showPlanManager}
                onClose={() => setShowPlanManager(false)}
                plans={plans}
                activePlanId={activePlanId}
                onSelectPlan={setActivePlanId}
                onCreatePlan={onTriggerPicker}
                onDeletePlan={handleDeletePlan}
                t={t}
            />

            <CustomItemModal
                isOpen={props.showCustomItemModal}
                onClose={() => props.setShowCustomItemModal(false)}
                onCreateItem={props.handleCreateCustomItem}
                t={props.t}
                initialType={
                    props.addToSlotTarget === 'accommodation' ? 'hotel' :
                        props.addToSlotTarget === 'morning' || props.addToSlotTarget === 'afternoon' ? 'attraction' :
                            props.addToSlotTarget === 'evening' ? 'food' : 'custom'
                }
                currentRegion={props.activeRegion}
            />



            <ShareHubModal
                isOpen={showShareModal}
                onClose={() => setShowShareModal(false)}
                plan={activePlan}
                t={t}
                showToast={showToastMessage}
                onOpenMobilePreview={onOpenMobilePreview}
                onOpenSubmitModal={() => setShowSubmitModal(true)}
                lang={lang}
                currentDay={currentDay}
            />

            <DateModal
                isOpen={showDateModal}
                onClose={() => setShowDateModal(false)}
                initialStartDate={tempStartDate}
                initialEndDate={tempEndDate}
                onConfirm={onDateConfirm}
                t={t}
            />

            <CreatorProfileModal
                isOpen={!!selectedCreatorId && !!activeCreator}
                onClose={() => setSelectedCreatorId(null)}
                creator={activeCreator}
                isSubscribed={isSubscribed}
                onToggleSubscribe={toggleSubscription}
                onPreviewTemplate={(tpl: Template) => {
                    setPreviewTemplate(tpl);
                    setSelectedCreatorId(null);
                }}
                lang={lang}
                t={t}
            />

            <MoveToDayModal
                isOpen={showMoveModal}
                onClose={() => setShowMoveModal(false)}
                totalDays={activePlan.totalDays}
                currentDay={currentDay}
                currentSlot={moveTarget?.slot || 'morning'}
                onExecute={executeMoveItem}
                t={t}
            />

            <SubmitModal
                isOpen={showSubmitModal}
                onClose={() => setShowSubmitModal(false)}
                plan={activePlan}
                onSubmit={() => {
                    showToastMessage('🎉 已提交審核！我們會在 24 小時內回覆您');
                }}
                t={t}
            />

            {showMobilePreview && (
                <MobilePreview
                    plan={activePlan}
                    onClose={() => setShowMobilePreview(false)}
                    lang={lang}
                />
            )}

            {showMobileLibrary && (
                <MobileLibrary
                    onClose={() => setShowMobileLibrary(false)}
                    activeTab={props.activeTab}
                    setActiveTab={props.setActiveTab}
                    searchQuery={props.searchQuery}
                    setSearchQuery={props.setSearchQuery}
                    activeCategory={props.activeCategory}
                    setActiveCategory={props.setActiveCategory}
                    activeRegion={props.activeRegion}
                    setActiveRegion={props.setActiveRegion}
                    setShowCustomItemModal={(show) => {
                        setShowCustomItemModal(show);
                        if (show) setShowMobileLibrary(false);
                    }}
                    handleDragStart={props.handleDragStart}
                    handleTapToAdd={(item) => {
                        props.handleTapToAdd(item);
                        // Optional: close library after adding? User didn't specify, but often useful.
                        // For now keep it open to allow multiple adds, or user can close it.
                    }}
                    applyTemplate={applyTemplate}
                    t={t}
                    lang={lang}
                    customAssets={customAssets}
                    subscribedCreators={subscribedCreators}
                    onCreatorClick={(id) => {
                        setSelectedCreatorId(id);
                        setShowMobileLibrary(false);
                    }}
                    onPreviewTemplate={onPreviewTemplate}
                    activePlan={activePlan}
                    budgetLimit={budgetLimit}
                    setBudgetLimit={setBudgetLimit}
                    calculateTotalBudget={calculateTotalBudget}
                    calculateCategoryBreakdown={calculateCategoryBreakdown}
                    onUpdateChecklist={onUpdateChecklist}
                    plans={plans}
                    onSelectPlan={setActivePlanId}
                    handleCreatePlan={onTriggerPicker}
                    handleDeletePlan={handleDeletePlan}
                    showToastMessage={showToastMessage}
                    currency={currency}
                    exchangeRate={exchangeRate}
                    onSetSettings={onSetSettings}
                />
            )}

            {previewTemplate && (
                <TemplatePreviewModal
                    isOpen={!!previewTemplate}
                    onClose={() => setPreviewTemplate(null)}
                    template={previewTemplate}
                    onApply={(tpl) => {
                        applyTemplate(tpl);
                        setPreviewTemplate(null);
                    }}
                    onUnlock={(tpl) => {
                        const schedule = tpl.schedule as any;
                        const firstDayKey = Object.keys(schedule)[0];
                        const firstDay = schedule[firstDayKey];
                        const firstItem = firstDay?.morning?.[0] || null;

                        setUnlockTarget(firstItem);
                        setBatchUnlockCount(1);
                    }}
                    onViewCreator={(authorId) => {
                        setPreviewTemplate(null);
                        setSelectedCreatorId(authorId);
                    }}
                    t={t}
                    lang={lang}
                />
            )}

            {unlockTarget && (
                <UnlockModal
                    isOpen={!!unlockTarget}
                    onClose={() => {
                        setUnlockTarget(null);
                        setBatchUnlockCount(0);
                    }}
                    item={unlockTarget}
                    mode={batchUnlockCount > 0 ? 'batch' : 'single'}
                    count={batchUnlockCount}
                    onUnlock={confirmUnlock}
                    t={t}
                />
            )}

            {props.selectedItem && (
                <ItemDetailModal
                    isOpen={!!props.selectedItem}
                    onClose={() => props.setSelectedItem(null)}
                    item={props.selectedItem}
                    t={props.t}
                    lang={props.lang}
                    onUpdateScheduleItem={props.onUpdateScheduleItem}
                    onUpdateCustomAsset={(id, updates) => {
                        props.setCustomAssets((prev: TravelItem[]) => prev.map((asset: TravelItem) =>
                            asset.id === id ? { ...asset, ...updates } : asset
                        ));
                    }}
                />
            )}

            <TemplateStoryPreview
                isOpen={showStoryPreview}
                onClose={() => setShowStoryPreview(false)}
                template={previewTemplate}
                onApply={(tpl) => {
                    applyTemplate(tpl);
                    setShowStoryPreview(false);
                }}
                onSubscribe={toggleSubscription}
                isSubscribed={isSubscribed}
                lang={lang}
            />
        </>
    );
};

export default AppModals;
