import React from 'react';
import { X, MoveRight } from 'lucide-react';
import {
    ExportModal,
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
} from './Modals';
import { MobileLibrary } from './MobileLibrary';
import { MobilePreview } from './MobilePreview';
import { CreatorProfile } from './CreatorProfile';
import { Plan, LangType, Template, TimeSlot, ScheduleItem, ItemType, TransportMode, Region, TravelItem, ViewMode } from '../types';

interface AppModalsProps {
    // Shared
    lang: LangType;
    t: any;
    showToastMessage: (msg: string) => void;

    // View State (Required for Mobile Library)
    activeTab: 'assets' | 'templates';
    setActiveTab: (tab: 'assets' | 'templates') => void;
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
    onCreateBlank: (region?: Region) => void;
    onExpertMode: () => void;
    handleDeletePlan: (id: string, e: React.MouseEvent) => void;

    // Custom Item
    showCustomItemModal: boolean;
    setShowCustomItemModal: (show: boolean) => void;
    handleCreateCustomItem: (data: any) => void;
    addToSlotTarget?: TimeSlot | null;

    // Export Modal
    showExportModal: boolean;
    setShowExportModal: (show: boolean) => void;
    activePlan: Plan;
    currentDay: number;
    generateExportText: () => string;
    setPlans: (plans: Plan[]) => void;
    setActivePlanIdDirect: (id: string) => void;
    setCustomAssets: (assets: any) => void;
    setBudgetLimit: (limit: number) => void;
    setSubscribedCreators: (creators: string[]) => void;
    customAssets: any;
    budgetLimit: number;
    subscribedCreators: string[];

    // Share Modal
    showShareModal: boolean;
    setShowShareModal: (show: boolean) => void;
    onOpenMobilePreview: () => void;

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
    executeMoveItem: (day: number) => void;

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

    // Start Picker
    showStartPicker: boolean;
    setShowStartPicker: (show: boolean) => void;

    // Item Detail Modal
    selectedItem: ScheduleItem | null;
    setSelectedItem: (item: ScheduleItem | null) => void;
    onUpdateScheduleItem?: (instanceId: string, updates: Partial<ScheduleItem>) => void;
}

const AppModals: React.FC<AppModalsProps> = (props) => {
    const {
        lang, t, showToastMessage,
        activeTab, setActiveTab,
        showPlanManager, setShowPlanManager, plans, activePlanId, setActivePlanId,
        onTriggerPicker, onCreateBlank, onExpertMode,
        handleDeletePlan, activeRegion,
        showCustomItemModal, setShowCustomItemModal, handleCreateCustomItem,
        showExportModal, setShowExportModal, activePlan, currentDay, generateExportText,
        setPlans, setActivePlanIdDirect, setCustomAssets, setBudgetLimit, setSubscribedCreators,
        customAssets, budgetLimit, subscribedCreators,
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
        isSidebarOpen, setIsSidebarOpen,
        setViewMode,
        selectedItem, setSelectedItem
    } = props;

    return (
        <>
            <StartPickerModal
                isOpen={showStartPicker}
                onClose={() => setShowStartPicker(false)}
                lang={lang}
                onChooseBlank={() => {
                    onCreateBlank(activeRegion);
                    setShowStartPicker(false);
                }}
                onChooseTemplate={onExpertMode}
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

            <ExportModal
                isOpen={showExportModal}
                onClose={() => setShowExportModal(false)}
                plan={activePlan}
                currentDay={currentDay}
                t={t}
                showToast={showToastMessage}
                generateExportText={generateExportText}
                plans={plans}
                activePlanId={activePlanId}
                customAssets={customAssets}
                budgetLimit={budgetLimit}
                subscribedCreators={subscribedCreators}
                onImportBackup={(data) => {
                    setPlans(data.plans);
                    if (data.activePlanId) setActivePlanIdDirect(data.activePlanId);
                    if (data.customAssets) setCustomAssets(data.customAssets);
                    if (data.budgetLimit) setBudgetLimit(data.budgetLimit);
                    if (data.subscribedCreators) setSubscribedCreators(data.subscribedCreators);
                }}
            />

            <ShareHubModal
                isOpen={showShareModal}
                onClose={() => setShowShareModal(false)}
                plan={activePlan}
                t={t}
                showToast={showToastMessage}
                onOpenMobilePreview={onOpenMobilePreview}
                onOpenExportText={() => {
                    setShowExportModal(true);
                }}
            />

            <DateModal
                isOpen={showDateModal}
                onClose={() => setShowDateModal(false)}
                initialStartDate={tempStartDate}
                initialEndDate={tempEndDate}
                onConfirm={onDateConfirm}
                t={t}
            />

            <CreatorProfile
                isOpen={!!selectedCreatorId && !!activeCreator}
                onClose={() => setSelectedCreatorId(null)}
                creator={activeCreator}
                templates={creatorTemplates}
                isSubscribed={isSubscribed}
                onToggleSubscribe={() => selectedCreatorId && toggleSubscription(selectedCreatorId)}
                onExploreTemplate={(tpl: Template) => {
                    applyTemplate(tpl);
                    setSelectedCreatorId(null);
                }}
                lang={lang}
            />

            <MoveToDayModal
                isOpen={showMoveModal}
                onClose={() => setShowMoveModal(false)}
                totalDays={activePlan.totalDays}
                currentDay={currentDay}
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
                    onPreviewTemplate={(tpl) => {
                        setPreviewTemplate(tpl);
                        setShowMobileLibrary(false);
                    }}
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
        </>
    );
};

export default AppModals;
