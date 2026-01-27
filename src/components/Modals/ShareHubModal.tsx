import React from 'react';
import { X, Share2, Globe, FileText, Copy, Link as LinkIcon, Map as MapIcon } from 'lucide-react';
import { Plan } from '../../types';

interface ShareHubModalProps {
    isOpen: boolean;
    onClose: () => void;
    plan: Plan;
    t: Record<string, string>;
    showToast: (msg: string) => void;
    onOpenMobilePreview: () => void;
    onOpenExportText: () => void;
}

export const ShareHubModal: React.FC<ShareHubModalProps> = ({
    isOpen,
    onClose,
    plan,
    t,
    showToast,
    onOpenMobilePreview,
    onOpenExportText
}) => {
    if (!isOpen) return null;

    const shareUrl = `https://travelcanvas.app/share/${plan.id}`;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareUrl);
        showToast(t.copied || '已複製到剪貼簿！');
    };

    return (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4 backdrop-blur-md">
            <div className="bg-white rounded-[2rem] w-full max-w-md shadow-2xl overflow-hidden border border-gray-100">
                {/* Modal Header */}
                <div className="p-6 pb-4 flex justify-between items-center bg-gradient-to-r from-teal-50 to-emerald-50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-teal-100">
                            <Share2 size={20} />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-gray-900 leading-tight">{t.shareHub || '分享中心'}</h3>
                            <p className="text-[11px] text-teal-600 font-bold uppercase tracking-widest">{plan.name}</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 bg-white shadow-sm border border-gray-100 rounded-full transition-all active:scale-90">
                        <X size={18} />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    {/* QR Code Section */}
                    <div className="flex flex-col items-center justify-center py-6 bg-gray-50 rounded-[1.5rem] border border-dashed border-gray-200 group transition-colors hover:border-teal-300">
                        <div className="w-32 h-32 bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center relative mb-3 group-hover:scale-105 transition-transform duration-500">
                            {/* Simulated QR Code Pattern */}
                            <div className="grid grid-cols-7 gap-[2px] w-full h-full p-2">
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
                                <div className="w-8 h-8 bg-white rounded-lg shadow-md border border-gray-50 flex items-center justify-center text-teal-600">
                                    <MapIcon size={18} />
                                </div>
                            </div>
                        </div>
                        <p className="text-xs font-bold text-gray-400 group-hover:text-teal-600 transition-colors uppercase tracking-widest">
                            {t.scanToPreview || '掃描即可查看行程'}
                        </p>
                    </div>

                    {/* Link Section */}
                    <div className="space-y-3">
                        <label className="text-[11px] font-black text-gray-400 uppercase tracking-wider ml-1">{t.shareLink || '專屬分享連結'}</label>
                        <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-2xl border border-gray-100 focus-within:border-teal-400 transition-colors">
                            <div className="pl-3 py-2 text-gray-400">
                                <LinkIcon size={16} />
                            </div>
                            <input
                                type="text"
                                readOnly
                                value={shareUrl}
                                className="bg-transparent flex-1 text-sm text-gray-600 font-medium focus:outline-none truncate"
                            />
                            <button
                                onClick={handleCopyLink}
                                className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl border border-teal-500 shadow-md shadow-teal-100 transition-all active:scale-95 flex items-center gap-2"
                            >
                                <Copy size={14} />
                                {t.copy || '複製'}
                            </button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={() => {
                                onClose();
                                setTimeout(onOpenMobilePreview, 100);
                            }}
                            className="w-full py-3.5 bg-gray-900 hover:bg-black text-white rounded-2xl font-bold text-sm shadow-xl shadow-gray-200 transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            <Globe size={16} className="text-teal-400" />
                            {t.mobilePreview || '手機版預覽'}
                        </button>
                        <button
                            onClick={() => {
                                onClose();
                                onOpenExportText(); // This maps to ExportModal in App.tsx actually?
                            }}
                            className="w-full py-3.5 bg-white hover:bg-gray-50 text-gray-600 border border-gray-200 rounded-2xl font-bold text-sm shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            <FileText size={16} />
                            {t.exportText || '匯出 PDF/文字'}
                        </button>
                    </div>
                </div>

                {/* Footer Tip */}
                <div className="p-4 bg-gray-50 text-center border-t border-gray-100">
                    <p className="text-[10px] text-gray-400 font-medium">✨ {t.shareTip || '小撇步：把連結傳到 Line 群組，朋友都能看到精美行程！'}</p>
                </div>
            </div>
        </div>
    );
};
