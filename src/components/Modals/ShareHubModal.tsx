import React from 'react';
import { X, Share2, Globe, FileText, Copy, Map as MapIcon, Download, Check, MoveRight } from 'lucide-react';
import * as htmlToImage from 'html-to-image';
import { useConfirm } from '../../hooks';
import { Plan } from '../../types';

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

    if (!isOpen) return null;

    const shareUrl = `https://travelcanvas.app/share/${plan.id}`;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareUrl);
        showToast(t.copied || '已複製到剪貼簿！');
    };

    const handlePrint = () => {
        window.print();
        showToast('🖨️ ' + (t.printStarted || '準備列印...'));
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

                <div className="p-8 space-y-8 max-h-[75vh] overflow-y-auto scrollbar-hide">
                    {/* Primary Actions: Integrated Buttons */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <button
                                onClick={handlePrint}
                                className="py-5 bg-gray-900 hover:bg-black text-white rounded-3xl font-black text-base shadow-xl shadow-gray-200 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 group"
                            >
                                <FileText size={20} className="text-teal-400 group-hover:scale-110 transition-transform" />
                                {lang === 'zh' ? 'PDF / 列印' : 'PDF / Print'}
                            </button>
                            <button
                                onClick={handleDownloadImage}
                                className="py-5 bg-white hover:bg-teal-50 text-teal-600 border-2 border-teal-600 rounded-3xl font-black text-base shadow-sm transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 group"
                            >
                                <MapIcon size={20} className="group-hover:scale-110 transition-transform" />
                                {t.downloadImage || '下載圖片'}
                            </button>
                        </div>

                        {/* Offline Tip Alert */}
                        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3 items-start animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
                            <span className="text-xl">🎒</span>
                            <p className="text-[11px] text-amber-800 font-medium leading-relaxed">
                                {t.offlineTip || "💡 Pro Tip: Download as PDF or Image for offline access on planes or subways!"}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* QR Code Section */}
                        <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-100 group transition-all hover:border-teal-200 hover:bg-teal-50/10">
                            <div className="w-32 h-32 bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center relative mb-3 group-hover:scale-110 transition-transform duration-500">
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
                                    <div className="w-10 h-10 bg-white rounded-xl shadow-md border border-gray-50 flex items-center justify-center text-teal-600">
                                        <MapIcon size={24} />
                                    </div>
                                </div>
                            </div>
                            <p className="text-[10px] font-black text-gray-400 group-hover:text-teal-600 transition-colors uppercase tracking-widest">
                                {t.scanToPreview || 'Scan to view'}
                            </p>
                        </div>

                        {/* Link & Mobile Preview */}
                        <div className="flex flex-col justify-between py-2">
                            <div className="space-y-3">
                                <label className="text-[11px] font-black text-gray-400 uppercase tracking-wider ml-1">{t.shareLinkTitle || 'Share Link'}</label>
                                <div className="flex flex-col gap-2">
                                    <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 text-xs text-gray-400 font-mono truncate">
                                        {shareUrl}
                                    </div>
                                    <button
                                        onClick={handleCopyLink}
                                        className="w-full py-3 bg-white hover:bg-gray-50 text-teal-600 border-2 border-teal-600 rounded-2xl font-black text-xs transition-all active:scale-95 flex items-center justify-center gap-2"
                                    >
                                        <Copy size={14} />
                                        {t.copy || 'Copy Link'}
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    onClose();
                                    setTimeout(onOpenMobilePreview, 100);
                                }}
                                className="w-full py-3 bg-gray-900 hover:bg-black text-white rounded-2xl font-bold text-xs shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 mt-4"
                            >
                                <Globe size={14} className="text-teal-400" />
                                {t.mobilePreview || 'Mobile Preview'}
                            </button>
                        </div>
                    </div>

                    {/* Secondary Action: Publish to Community */}
                    <div className="pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-white rounded-3xl border border-gray-100 group cursor-pointer hover:border-teal-200 transition-all"
                            onClick={() => {
                                onClose();
                                onOpenSubmitModal();
                            }}>
                            <div className="flex gap-4 items-center">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-500 shadow-sm border border-gray-50 group-hover:scale-110 transition-transform">
                                    <Globe size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-sm font-black text-gray-900">{t.publishToCommunity || "Want to inspire others?"}</h4>
                                    <p className="text-[11px] text-gray-400 font-medium">{t.publishAction || "Publish to Community"}</p>
                                </div>
                            </div>
                            <MoveRight className="text-gray-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" size={20} />
                        </div>
                    </div>
                </div>

                {/* Footer Tip */}
                <div className="p-5 bg-gray-50 text-center border-t border-gray-100">
                    <p className="text-[10px] text-gray-400 font-medium">✨ {t.shareTip || 'Tip: Share this link to your friends!'}</p>
                </div>
            </div>
        </div>
    );
};
