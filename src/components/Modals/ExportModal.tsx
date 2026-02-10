import React, { useState } from 'react';
import { X, FileText, Image as ImageIcon, Share2, HardDrive, Download, Copy, Upload, Link as LinkIcon } from 'lucide-react';
import { useConfirm } from '../../hooks';
import * as htmlToImage from 'html-to-image';
import { Plan, TravelItem } from '../../types';

type ExportTab = 'text' | 'image' | 'share' | 'backup';

interface BackupData {
    version: string;
    exportedAt: string;
    plans: Plan[];
    activePlanId: string;
    customAssets: TravelItem[];
    budgetLimit: number;
    subscribedCreators: string[];
}

interface ExportModalProps {
    isOpen: boolean;
    onClose: () => void;
    plan: Plan;
    currentDay: number;
    t: Record<string, string>;
    showToast: (msg: string) => void;
    generateExportText: () => string;
    // Backup-related props
    plans: Plan[];
    activePlanId: string;
    customAssets: TravelItem[];
    budgetLimit: number;
    subscribedCreators: string[];
    onImportBackup: (data: BackupData) => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({
    isOpen,
    onClose,
    plan,
    currentDay,
    t,
    showToast,
    generateExportText,
    plans,
    activePlanId,
    customAssets,
    budgetLimit,
    subscribedCreators,
    onImportBackup
}) => {
    const [exportTab, setExportTab] = useState<ExportTab>('text');
    const { confirm } = useConfirm();

    if (!isOpen) return null;

    const handleDownloadBackup = () => {
        const backupData: BackupData = {
            version: '1.0',
            exportedAt: new Date().toISOString(),
            plans,
            activePlanId,
            customAssets,
            budgetLimit,
            subscribedCreators
        };
        const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `TravelCanvas-backup-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
        showToast('✅ ' + (t.downloadBackup || '備份檔已下載!'));
    };

    const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const data = JSON.parse(event.target?.result as string) as BackupData;
                    if (data.plans && Array.isArray(data.plans)) {
                        onImportBackup(data);
                        showToast('✅ ' + (t.importSuccess || '匯入成功！'));
                        onClose();
                    } else {
                        confirm({
                            title: t.importError || '匯入失敗',
                            message: t.importErrorHint || '匯入失敗，請確認檔案格式正確。',
                            type: 'error',
                            confirmText: t.ok || 'OK'
                        });
                    }
                } catch (err) {
                    confirm({
                        title: t.importError || '匯入失敗',
                        message: t.importErrorHint || '匯入失敗，請確認檔案格式正確。',
                        type: 'error',
                        confirmText: t.ok || 'OK'
                    });
                }
            };
            reader.readAsText(file);
        }
        e.target.value = '';
    };

    const handleDownloadImage = async () => {
        const node = document.querySelector('.schedule-content') as HTMLElement;
        if (node) {
            try {
                const dataUrl = await htmlToImage.toPng(node, {
                    backgroundColor: '#ffffff',
                    pixelRatio: 2
                });
                const link = document.createElement('a');
                link.download = `${plan.name}-Day${currentDay}.png`;
                link.href = dataUrl;
                link.click();
                showToast('✅ ' + (t.downloadImage || '圖片已下載!'));
            } catch (error) {
                console.error('Export image failed:', error);
                confirm({
                    title: 'Export Error',
                    message: 'Export failed. Please check console for details.',
                    type: 'error',
                    confirmText: 'OK'
                });
            }
        } else {
            confirm({
                title: 'Export Error',
                message: 'Unable to find schedule content',
                type: 'error',
                confirmText: 'OK'
            });
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                        <Download size={18} className="text-teal-600" />
                        {t.export}
                    </h3>
                    <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
                        <X size={20} className="text-gray-400" />
                    </button>
                </div>

                {/* Tabs */}
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

                {/* Content */}
                <div className="p-5">
                    {/* Text Tab */}
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
                                    showToast(t.copied || 'Copied!');
                                }}
                                className="w-full py-2.5 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <Copy size={16} />
                                {t.copy}
                            </button>
                        </div>
                    )}

                    {/* Image Tab */}
                    {exportTab === 'image' && (
                        <div className="space-y-4">
                            <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                                <ImageIcon size={48} className="mx-auto text-gray-300 mb-3" />
                                <p className="text-sm text-gray-500 mb-1">{t.downloadImage || '下載行程圖片'}</p>
                                <p className="text-xs text-gray-400">{plan.name} - Day {currentDay}</p>
                            </div>
                            <button
                                onClick={handleDownloadImage}
                                className="w-full py-2.5 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <Download size={16} />
                                {t.downloadImage || '下載圖片'}
                            </button>
                        </div>
                    )}

                    {/* Share Tab */}
                    {exportTab === 'share' && (
                        <div className="space-y-4">
                            <p className="text-sm text-gray-500">{t.copyLink}</p>
                            <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-xl border border-gray-200">
                                <LinkIcon size={16} className="text-gray-400 flex-shrink-0" />
                                <input
                                    type="text"
                                    readOnly
                                    value={`https://travelcanvas.app/share/${plan.id}`}
                                    className="bg-transparent flex-1 text-sm text-gray-600 focus:outline-none truncate"
                                />
                            </div>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(`https://travelcanvas.app/share/${plan.id}`);
                                    showToast(t.copied || 'Copied!');
                                }}
                                className="w-full py-2.5 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <Copy size={16} />
                                {t.shareLink || '複製連結'}
                            </button>
                        </div>
                    )}

                    {/* Backup Tab */}
                    {exportTab === 'backup' && (
                        <div className="space-y-4">
                            {/* Download Backup Section */}
                            <div className="p-4 bg-teal-50 rounded-xl border border-teal-100">
                                <div className="flex items-center gap-2 mb-2">
                                    <Download size={16} className="text-teal-600" />
                                    <span className="font-medium text-teal-800">{t.downloadBackup || '下載備份檔'}</span>
                                </div>
                                <p className="text-xs text-teal-600 mb-3">{t.backupDesc || '下載 JSON 檔案，可在其他電腦或瀏覽器還原您的行程。'}</p>
                                <button
                                    onClick={handleDownloadBackup}
                                    className="w-full py-2.5 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Download size={16} />
                                    {t.downloadBackup || '下載備份檔'}
                                </button>
                            </div>

                            {/* Import Backup Section */}
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
                                        onChange={handleImportFile}
                                    />
                                </label>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
