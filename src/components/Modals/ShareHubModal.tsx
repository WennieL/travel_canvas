import React, { useState } from 'react';
import { X, Share2, Globe, FileText, Copy, Map as MapIcon, Check, MoveRight, ClipboardCopy, HardDrive, Upload as UploadIcon } from 'lucide-react';
import { useConfirm } from '../../hooks';
import { Plan, LangType } from '../../types';
import { generateTextItinerary, downloadPdf } from '../../utils/textExport';

interface ShareHubModalProps {
    isOpen: boolean;
    onClose: () => void;
    plan: Plan;
    t: Record<string, string>;
    showToast: (msg: string) => void;
    onOpenMobilePreview: () => void;
    onOpenSubmitModal: () => void;
    lang: string;
    currentDay: number;
}

export const ShareHubModal: React.FC<ShareHubModalProps> = ({
    isOpen,
    onClose,
    plan,
    t,
    showToast,
    onOpenMobilePreview,
    onOpenSubmitModal,
    lang,
    currentDay
}) => {
    const { confirm } = useConfirm();
    const [textCopied, setTextCopied] = useState(false);
    const [showTextPreview, setShowTextPreview] = useState(false);

    if (!isOpen) return null;

    const shareUrl = `https://travelcanvas.app/share/${plan.id}`;

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
        } catch {
            const textarea = document.createElement('textarea');
            textarea.value = shareUrl;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }
        showToast(t.copied || '已複製到剪貼簿！');
    };

    const handleDownloadPdf = () => {
        downloadPdf(plan, lang as LangType);
        showToast(lang === 'zh' ? '📄 PDF 頁面已開啟，請選擇「儲存為 PDF」' : '📄 PDF page opened. Choose "Save as PDF"');
    };

    // ── Text Export ──
    const handleCopyText = async () => {
        const text = generateTextItinerary(plan, lang as LangType);
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }
        setTextCopied(true);
        showToast(lang === 'zh' ? '📋 行程已複製！直接貼到 Line 分享吧' : '📋 Itinerary copied! Paste it anywhere');
        setTimeout(() => setTextCopied(false), 3000);
    };

    // ── JSON Backup ──
    const handleDownloadBackup = () => {
        const allPlans = localStorage.getItem('travel_plans');
        if (!allPlans) return;
        const blob = new Blob([allPlans], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `TravelCanvas_backup_${new Date().toISOString().slice(0, 10)}.json`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
        showToast(lang === 'zh' ? '💾 備份檔已下載！' : '💾 Backup downloaded!');
    };

    const handleImportBackup = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = async (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (!file) return;
            try {
                const text = await file.text();
                const plans = JSON.parse(text);
                if (Array.isArray(plans) && plans.length > 0 && plans[0].id && plans[0].schedule) {
                    localStorage.setItem('travel_plans', JSON.stringify(plans));
                    showToast(lang === 'zh' ? '✅ 匯入成功！重新整理頁面中...' : '✅ Import successful! Refreshing...');
                    setTimeout(() => window.location.reload(), 1500);
                } else {
                    showToast(lang === 'zh' ? '❌ 檔案格式不正確' : '❌ Invalid file format');
                }
            } catch {
                showToast(lang === 'zh' ? '❌ 匯入失敗，請確認檔案格式' : '❌ Import failed. Check file format.');
            }
        };
        input.click();
    };

    const textPreview = showTextPreview ? generateTextItinerary(plan, lang as LangType) : '';

    return (
        <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center p-4 backdrop-blur-md print:hidden" onClick={onClose}>
            <div className="bg-white rounded-[2.5rem] w-full max-w-lg shadow-2xl overflow-hidden border border-gray-100 animate-in zoom-in duration-300" onClick={(e) => e.stopPropagation()}>
                {/* Modal Header - Celebratory */}
                <div className="p-8 pb-6 flex justify-between items-center bg-gradient-to-br from-teal-50 via-emerald-50 to-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                        <Share2 size={120} className="rotate-12" />
                    </div>
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="w-14 h-14 bg-teal-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-teal-200 animate-bounce">
                            <Check size={28} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-gray-900 leading-tight">{t.savedSuccess || 'Saved Successfully!'}</h3>
                            <p className="text-sm text-teal-600 font-bold uppercase tracking-widest">{plan.name}</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 bg-white/50 backdrop-blur-sm shadow-sm border border-white rounded-full transition-all active:scale-90 relative z-10">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-8 space-y-6 max-h-[75vh] overflow-y-auto scrollbar-hide">
                    {/* ── Primary Row: 3 Action Cards ── */}
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={handleCopyText}
                            className={`py-4 rounded-2xl font-bold text-sm shadow-sm transition-all hover:scale-[1.03] active:scale-95 flex flex-col items-center justify-center gap-2 border ${textCopied
                                ? 'bg-emerald-50 border-emerald-200 text-emerald-600'
                                : 'bg-gray-900 border-gray-900 text-white hover:bg-black'
                                }`}
                        >
                            {textCopied ? <Check size={20} /> : <ClipboardCopy size={20} className="text-teal-400" />}
                            <span>{textCopied ? (lang === 'zh' ? '已複製！' : 'Copied!') : (lang === 'zh' ? '複製文字' : 'Copy Text')}</span>
                        </button>
                        <button
                            onClick={handleDownloadPdf}
                            className="py-4 bg-white hover:bg-teal-50 text-teal-700 border-2 border-teal-200 rounded-2xl font-bold text-sm shadow-sm transition-all hover:scale-[1.03] active:scale-95 flex flex-col items-center justify-center gap-2"
                        >
                            <FileText size={20} className="text-teal-500" />
                            <span>{lang === 'zh' ? '下載 PDF' : 'PDF'}</span>
                        </button>
                    </div>

                    {/* ── Text Preview Toggle ── */}
                    <button
                        onClick={() => setShowTextPreview(!showTextPreview)}
                        className="w-full text-xs text-teal-600 font-bold hover:underline text-center"
                    >
                        {showTextPreview
                            ? (lang === 'zh' ? '▲ 隱藏預覽' : '▲ Hide Preview')
                            : (lang === 'zh' ? '▼ 預覽文字行程' : '▼ Preview Text')
                        }
                    </button>
                    {showTextPreview && (
                        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 max-h-60 overflow-y-auto">
                            <pre className="text-[11px] text-gray-600 whitespace-pre-wrap font-mono leading-relaxed">{textPreview}</pre>
                        </div>
                    )}

                    {/* ── Offline Tip ── */}
                    <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3 items-start">
                        <span className="text-xl">🎒</span>
                        <p className="text-[11px] text-amber-800 font-medium leading-relaxed">
                            {lang === 'zh'
                                ? '💡 提示：複製文字行程直接貼到 Line 群組分享，或下載圖片存手機，飛機上也能看！'
                                : '💡 Tip: Copy the text itinerary to share on LINE/WhatsApp, or save the image for offline access!'}
                        </p>
                    </div>

                    {/* ── Share Link & QR ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* QR Code Section */}
                        <div className="flex flex-col items-center justify-center p-5 bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-100 group transition-all hover:border-teal-200">
                            <div className="w-28 h-28 bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center relative mb-3 group-hover:scale-105 transition-transform">
                                <div className="grid grid-cols-7 gap-[2px] w-full h-full p-2 opacity-80">
                                    {Array.from({ length: 49 }).map((_, i) => {
                                        const isCorner = (i < 3 || (i >= 4 && i < 7)) || (i >= 7 && i < 10) || (i >= 14 && i < 21) ||
                                            (i >= 42 && i < 45) || (i >= 35 && i < 38) || (i >= 28 && i < 31);
                                        const isRandom = Math.random() > 0.5;
                                        return (
                                            <div key={i} className={`rounded-[1px] ${isCorner ? 'bg-gray-800' : isRandom ? 'bg-gray-800' : 'bg-white'}`}></div>
                                        );
                                    })}
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-8 h-8 bg-white rounded-xl shadow-md border border-gray-50 flex items-center justify-center text-teal-600">
                                        <MapIcon size={20} />
                                    </div>
                                </div>
                            </div>
                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                                {t.scanToPreview || 'Scan to view'}
                            </p>
                        </div>

                        {/* Link & Preview */}
                        <div className="flex flex-col justify-between py-1">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider ml-1">{t.shareLinkTitle || 'Share Link'}</label>
                                <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 text-xs text-gray-400 font-mono truncate">
                                    {shareUrl}
                                </div>
                                <button
                                    onClick={handleCopyLink}
                                    className="w-full py-2.5 bg-white hover:bg-gray-50 text-teal-600 border-2 border-teal-600 rounded-2xl font-black text-xs transition-all active:scale-95 flex items-center justify-center gap-2"
                                >
                                    <Copy size={14} />
                                    {t.copy || 'Copy Link'}
                                </button>
                            </div>

                            <button
                                onClick={() => {
                                    onClose();
                                    setTimeout(onOpenMobilePreview, 100);
                                }}
                                className="w-full py-2.5 bg-gray-900 hover:bg-black text-white rounded-2xl font-bold text-xs shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 mt-3"
                            >
                                <Globe size={14} className="text-teal-400" />
                                {t.mobilePreview || 'Mobile Preview'}
                            </button>
                        </div>
                    </div>

                    {/* ── Backup & Restore ── */}
                    <div className="pt-4 border-t border-gray-100">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider ml-1 mb-3 block">
                            {t.exportBackup || 'Backup'}
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={handleDownloadBackup}
                                className="py-3 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-2xl font-bold text-xs transition-all active:scale-95 flex items-center justify-center gap-2 border border-gray-200"
                            >
                                <HardDrive size={14} />
                                {t.downloadBackup || (lang === 'zh' ? '下載備份' : 'Download')}
                            </button>
                            <button
                                onClick={handleImportBackup}
                                className="py-3 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-2xl font-bold text-xs transition-all active:scale-95 flex items-center justify-center gap-2 border border-gray-200"
                            >
                                <UploadIcon size={14} />
                                {t.importBackup || (lang === 'zh' ? '匯入備份' : 'Import')}
                            </button>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-2 text-center">
                            {t.backupDesc || (lang === 'zh' ? '下載 JSON 檔案，可在其他電腦或瀏覽器還原行程' : 'Download a JSON backup to restore on any device')}
                        </p>
                    </div>

                    {/* ── Publish to Community ── */}
                    <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-3xl border border-gray-100 group cursor-pointer hover:border-teal-200 transition-all"
                            onClick={() => {
                                onClose();
                                onOpenSubmitModal();
                            }}>
                            <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-teal-500 shadow-sm border border-gray-50 group-hover:scale-110 transition-transform">
                                    <Globe size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-sm font-black text-gray-900">{t.publishToCommunity || "Want to inspire others?"}</h4>
                                    <p className="text-[10px] text-gray-400 font-medium">{t.publishAction || "Publish to Community"}</p>
                                </div>
                            </div>
                            <MoveRight className="text-gray-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" size={18} />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 bg-gray-50 text-center border-t border-gray-100">
                    <p className="text-[10px] text-gray-400 font-medium">✨ {t.shareTip || 'Tip: Share this link to your friends!'}</p>
                </div>
            </div>
        </div>
    );
};
