import React from 'react';
import { X, Download, FileText, Image as ImageIcon, Share2, HardDrive, Copy, Link as LinkIcon, MoveRight, Upload } from 'lucide-react';
import * as htmlToImage from 'html-to-image';
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
} from './Modals';
import { MobileLibrary } from './MobileLibrary';
import { MobilePreview } from './MobilePreview';
import { CreatorProfile } from './CreatorProfile';
import { Plan, LangType, Template, TimeSlot, ScheduleItem, ItemType, TransportMode, Region, TravelItem } from '../types';

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

    // Handlers
    handleDragStart: (e: React.DragEvent, item: TravelItem, source: 'sidebar' | 'canvas') => void;
    handleTapToAdd: (item: TravelItem) => void;

    // Plan Manager
    showPlanManager: boolean;
    setShowPlanManager: (show: boolean) => void;
    plans: Plan[];
    activePlanId: string;
    setActivePlanId: (id: string) => void;
    handleCreatePlan: () => void;
    handleDeletePlan: (id: string, e: React.MouseEvent) => void;

    // Custom Item
    showCustomItemModal: boolean;
    setShowCustomItemModal: (show: boolean) => void;
    handleCreateCustomItem: (data: any) => void;

    // Export Modal
    showExportModal: boolean;
    setShowExportModal: (show: boolean) => void;
    exportTab: 'text' | 'image' | 'share' | 'backup';
    setExportTab: (tab: any) => void;
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

    // Item Detail Modal
    selectedItem: ScheduleItem | null;
    setSelectedItem: (item: ScheduleItem | null) => void;
}

const AppModals: React.FC<AppModalsProps> = (props) => {
    const {
        lang, t, showToastMessage,
        showPlanManager, setShowPlanManager, plans, activePlanId, setActivePlanId, handleCreatePlan, handleDeletePlan,
        showCustomItemModal, setShowCustomItemModal, handleCreateCustomItem,
        showExportModal, setShowExportModal, exportTab, setExportTab, activePlan, currentDay, generateExportText,
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
        selectedItem, setSelectedItem
    } = props;

    return (
        <>
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
                onCreatePlan={handleCreatePlan}
                onDeletePlan={handleDeletePlan}
                t={t}
            />

            <CustomItemModal
                isOpen={showCustomItemModal}
                onClose={() => setShowCustomItemModal(false)}
                onCreateItem={handleCreateCustomItem}
                t={t}
            />

            {showExportModal && (
                <div className="fixed inset-0 bg-black/50 z-[1000] flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setShowExportModal(false)}>
                    <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between p-4 border-b border-gray-100">
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <Download size={18} className="text-teal-600" />
                                {t.export}
                            </h3>
                            <button onClick={() => setShowExportModal(false)} className="p-1 hover:bg-gray-100 rounded-full">
                                <X size={20} className="text-gray-400" />
                            </button>
                        </div>

                        <div className="flex border-b border-gray-100">
                            {(['text', 'image', 'share', 'backup'] as const).map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setExportTab(tab)}
                                    className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-medium border-b-2 transition-all ${exportTab === tab
                                        ? 'border-teal-600 text-teal-600 bg-teal-50/50'
                                        : 'border-transparent text-gray-400 hover:text-gray-600'
                                        }`}
                                >
                                    {tab === 'text' && <FileText size={14} />}
                                    {tab === 'image' && <ImageIcon size={14} />}
                                    {tab === 'share' && <Share2 size={14} />}
                                    {tab === 'backup' && <HardDrive size={14} />}
                                    {t[`export${tab.charAt(0).toUpperCase() + tab.slice(1)}`] || tab}
                                </button>
                            ))}
                        </div>

                        <div className="p-5">
                            {exportTab === 'text' && (
                                <div className="space-y-4">
                                    <textarea
                                        className="w-full h-48 border border-gray-200 rounded-lg p-3 text-xs font-mono bg-gray-50 resize-none focus:outline-none focus:border-teal-500"
                                        readOnly
                                        value={generateExportText()}
                                    />
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(generateExportText());
                                            showToastMessage(t.copied || 'Copied!');
                                        }}
                                        className="w-full py-2.5 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Copy size={16} />
                                        {t.copy}
                                    </button>
                                </div>
                            )}

                            {exportTab === 'image' && (
                                <div className="space-y-4">
                                    <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                                        <ImageIcon size={48} className="mx-auto text-gray-300 mb-3" />
                                        <p className="text-sm text-gray-500 mb-1">{t.downloadImage || '下載行程圖片'}</p>
                                        <p className="text-xs text-gray-400">{activePlan.name} - Day {currentDay}</p>
                                    </div>
                                    <button
                                        onClick={async () => {
                                            const node = document.querySelector('.schedule-content') as HTMLElement;
                                            if (node) {
                                                try {
                                                    const dataUrl = await htmlToImage.toPng(node, {
                                                        backgroundColor: '#ffffff',
                                                        pixelRatio: 2
                                                    });
                                                    const link = document.createElement('a');
                                                    link.download = `${activePlan.name}-Day${currentDay}.png`;
                                                    link.href = dataUrl;
                                                    link.click();
                                                    showToastMessage('✅ ' + (t.downloadImage || '圖片已下載!'));
                                                } catch (error) {
                                                    console.error('Export image failed:', error);
                                                    alert('Export failed');
                                                }
                                            }
                                        }}
                                        className="w-full py-2.5 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Download size={16} />
                                        {t.downloadImage || '下載圖片'}
                                    </button>
                                </div>
                            )}

                            {exportTab === 'share' && (
                                <div className="space-y-4">
                                    <p className="text-sm text-gray-500">{t.copyLink}</p>
                                    <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-xl border border-gray-200">
                                        <LinkIcon size={16} className="text-gray-400 flex-shrink-0" />
                                        <input
                                            type="text"
                                            readOnly
                                            value={`https://travelcanvas.app/share/${activePlan.id}`}
                                            className="bg-transparent flex-1 text-sm text-gray-600 focus:outline-none truncate"
                                        />
                                    </div>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(`https://travelcanvas.app/share/${activePlan.id}`);
                                            showToastMessage(t.copied || 'Copied!');
                                        }}
                                        className="w-full py-2.5 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Copy size={16} />
                                        {t.shareLink || '複製連結'}
                                    </button>
                                </div>
                            )}

                            {exportTab === 'backup' && (
                                <div className="space-y-4">
                                    <div className="p-4 bg-teal-50 rounded-xl border border-teal-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Download size={16} className="text-teal-600" />
                                            <span className="font-medium text-teal-800">{t.downloadBackup || '下載備份檔'}</span>
                                        </div>
                                        <p className="text-xs text-teal-600 mb-3">{t.backupDesc || '下載 JSON 檔案，可在其他電腦或瀏覽器還原您的行程。'}</p>
                                        <button
                                            onClick={() => {
                                                const backupData = {
                                                    version: '1.0',
                                                    exportedAt: new Date().toISOString(),
                                                    plans: plans,
                                                    activePlanId: activePlanId,
                                                    customAssets: customAssets,
                                                    budgetLimit: budgetLimit,
                                                    subscribedCreators: subscribedCreators
                                                };
                                                const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
                                                const url = URL.createObjectURL(blob);
                                                const link = document.createElement('a');
                                                link.href = url;
                                                link.download = `TravelCanvas-backup-${new Date().toISOString().split('T')[0]}.json`;
                                                link.click();
                                                URL.revokeObjectURL(url);
                                                showToastMessage('✅ ' + (t.downloadBackup || '備份檔已下載!'));
                                            }}
                                            className="w-full py-2.5 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <Download size={16} />
                                            {t.downloadBackup || '下載備份檔'}
                                        </button>
                                    </div>

                                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Upload size={16} className="text-gray-600" />
                                            <span className="font-medium text-gray-800">{t.importBackup || '匯入備份'}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mb-3">{t.backupImportDesc || '選擇之前下載的 JSON 備份檔來還原資料。'}</p>
                                        <label className="w-full py-2.5 bg-white border-2 border-dashed border-gray-300 text-gray-600 rounded-lg font-medium hover:border-teal-500 hover:text-teal-600 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                                            <Upload size={16} />
                                            {t.importBackup || '選擇檔案'}
                                            <input
                                                type="file"
                                                accept=".json"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        const reader = new FileReader();
                                                        reader.onload = (event) => {
                                                            try {
                                                                const data = JSON.parse(event.target?.result as string);
                                                                if (data.plans && Array.isArray(data.plans)) {
                                                                    setPlans(data.plans);
                                                                    if (data.activePlanId) setActivePlanIdDirect(data.activePlanId);
                                                                    if (data.customAssets) setCustomAssets(data.customAssets);
                                                                    if (data.budgetLimit) setBudgetLimit(data.budgetLimit);
                                                                    if (data.subscribedCreators) setSubscribedCreators(data.subscribedCreators);
                                                                    showToastMessage('✅ ' + (t.importSuccess || '匯入成功！'));
                                                                    setShowExportModal(false);
                                                                }
                                                            } catch (err) {
                                                                alert(t.importError || '匯入失敗');
                                                            }
                                                        };
                                                        reader.readAsText(file);
                                                    }
                                                }}
                                            />
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <ShareHubModal
                isOpen={showShareModal}
                onClose={() => setShowShareModal(false)}
                plan={activePlan}
                t={t}
                showToast={showToastMessage}
                onOpenMobilePreview={onOpenMobilePreview}
                onOpenExportText={() => {
                    setExportTab('text');
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

            {showMoveModal && moveTarget && (
                <div className="fixed inset-0 bg-black/50 z-[1000] flex items-center justify-center p-4" onClick={() => setShowMoveModal(false)}>
                    <div className="bg-white rounded-2xl w-full max-w-sm shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
                        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                            <h3 className="font-bold text-gray-800 flex items-center gap-2">
                                <MoveRight size={18} className="text-blue-500" />
                                {t.moveToDay || "Move to Day"}
                            </h3>
                            <button onClick={() => setShowMoveModal(false)} className="p-1 hover:bg-gray-200 rounded-full text-gray-400"><X size={20} /></button>
                        </div>
                        <div className="p-4 grid grid-cols-2 gap-2 max-h-[60vh] overflow-y-auto">
                            {Array.from({ length: activePlan.totalDays }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => executeMoveItem(i + 1)}
                                    className={`p-3 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition-all ${currentDay === i + 1
                                        ? 'bg-blue-50 border-blue-200 text-blue-600'
                                        : 'bg-white border-gray-100 text-gray-600 hover:border-blue-300 hover:shadow-sm'
                                        }`}
                                >
                                    {t.day} {i + 1}
                                    {currentDay === i + 1 && <span className="text-[10px] bg-blue-100 text-blue-600 px-1.5 rounded">{t.current || "Current"}</span>}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

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
                    setShowCustomItemModal={setShowCustomItemModal}
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
        </>
    );
};

export default AppModals;
