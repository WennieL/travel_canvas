import React, { useState } from 'react';
import { X, Share2, Globe, FileText, Copy, Map as MapIcon, Check, MoveRight, ClipboardCopy, QrCode, Smartphone } from 'lucide-react';
import { Plan, LangType } from '../../types';
import { generateTextItinerary, downloadPdf } from '../../utils/textExport';
import { motion, AnimatePresence } from 'framer-motion';

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
    const [activeTab, setActiveTab] = useState<'share' | 'publish'>('share');
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

    const textPreview = showTextPreview ? generateTextItinerary(plan, lang as LangType) : '';

    return (
        <div className="fixed inset-0 bg-black/40 z-[1000] flex items-center justify-center p-4 backdrop-blur-sm print:hidden" onClick={onClose}>
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="bg-white rounded-[2.5rem] w-full max-w-lg shadow-2xl overflow-hidden border border-gray-100 flex flex-col" 
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Section */}
                <div className="pt-8 px-8 pb-4 flex justify-between items-start">
                    <div>
                        <h3 className="text-2xl font-black text-gray-900 leading-tight">
                            {t.shareHub || '分享與匯出'}
                        </h3>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.1em] mt-1">
                            {plan.name}
                        </p>
                    </div>
                    <button onClick={onClose} className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 bg-gray-50 rounded-full transition-all active:scale-90">
                        <X size={20} />
                    </button>
                </div>

                {/* Tab Switcher */}
                <div className="px-8 pb-4">
                    <div className="flex bg-gray-50 p-1 rounded-2xl border border-gray-100">
                        <button 
                            onClick={() => setActiveTab('share')}
                            className={`flex-1 py-2 text-xs font-black rounded-xl transition-all ${activeTab === 'share' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            {lang === 'zh' ? '分享與下載' : 'Share & Download'}
                        </button>
                        <button 
                            onClick={() => setActiveTab('publish')}
                            className={`flex-1 py-2 text-xs font-black rounded-xl transition-all ${activeTab === 'publish' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            {t.publishToCommunity || '發佈到社群'}
                        </button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-8 pb-8 scrollbar-hide">
                    <AnimatePresence mode="wait">
                        {activeTab === 'share' ? (
                            <motion.div 
                                key="share"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="space-y-6"
                            >
                                {/* Quick Primary Actions */}
                                <div className="grid grid-cols-2 gap-4 pt-2">
                                    <button
                                        onClick={handleCopyLink}
                                        className="group relative h-28 bg-emerald-600 rounded-[2rem] overflow-hidden shadow-lg shadow-emerald-200 transition-all hover:scale-[1.02] active:scale-95"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                                        <div className="relative flex flex-col items-center justify-center h-full text-white p-4">
                                            <div className="p-3 bg-white/20 rounded-2xl mb-2 group-hover:scale-110 transition-transform">
                                                <Copy size={22} />
                                            </div>
                                            <span className="text-[11px] font-black tracking-widest uppercase">{t.copyLinkTitle || '複製連結'}</span>
                                        </div>
                                    </button>

                                    <button
                                        onClick={handleDownloadPdf}
                                        className="group relative h-28 bg-gray-900 rounded-[2rem] overflow-hidden shadow-lg shadow-gray-200 transition-all hover:scale-[1.02] active:scale-95"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                                        <div className="relative flex flex-col items-center justify-center h-full text-white p-4">
                                            <div className="p-3 bg-white/10 rounded-2xl mb-2 group-hover:scale-110 transition-transform">
                                                <FileText size={22} />
                                            </div>
                                            <span className="text-[11px] font-black tracking-widest uppercase">{lang === 'zh' ? '下載 PDF' : 'Download PDF'}</span>
                                        </div>
                                    </button>
                                </div>

                                {/* Secondary Actions Grid */}
                                <div className="grid grid-cols-3 gap-3">
                                    <button 
                                        onClick={handleCopyText}
                                        className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-all group"
                                    >
                                        <div className="text-gray-400 group-hover:text-emerald-600 transition-colors">
                                            {textCopied ? <Check size={18} /> : <ClipboardCopy size={18} />}
                                        </div>
                                        <span className="text-[10px] font-bold text-gray-500 whitespace-nowrap">{lang === 'zh' ? '文字行程' : 'Copy Text'}</span>
                                    </button>

                                    <button 
                                        onClick={() => { onClose(); setTimeout(onOpenMobilePreview, 100); }}
                                        className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-all group"
                                    >
                                        <div className="text-gray-400 group-hover:text-emerald-600 transition-colors">
                                            <Smartphone size={18} />
                                        </div>
                                        <span className="text-[10px] font-bold text-gray-500 whitespace-nowrap">{t.mobilePreview || '手機預覽'}</span>
                                    </button>

                                    <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-2xl border border-gray-100 group">
                                        <QrCode size={18} className="text-gray-400 mb-2" />
                                        <span className="text-[10px] font-bold text-gray-500 whitespace-nowrap">QR Code</span>
                                    </div>
                                </div>

                                {/* Offline Reminder */}
                                <div className="p-5 bg-amber-50 rounded-3xl border border-amber-100/50 flex gap-4 items-start">
                                    <div className="text-xl shrink-0 mt-0.5">🎒</div>
                                    <div>
                                        <p className="text-[11px] text-amber-900 font-bold leading-relaxed">
                                            {lang === 'zh'
                                                ? '💡 提示：複製文字行程直接貼到 Line 群組分享，或下載 PDF 存手機相簿，沒網路也能看！'
                                                : '💡 Tip: Copy the text itinerary to share on LINE/WhatsApp, or save the PDF for offline access!'}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="publish"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="space-y-6 pt-2"
                            >
                                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl shadow-emerald-900/20">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                        <Globe size={100} className="translate-x-10 -translate-y-10" />
                                    </div>
                                    
                                    <h4 className="text-xl font-black mb-3 relative z-10 leading-tight">
                                        {t.publishToCommunity || '想要讓更多人看見嗎？'}
                                    </h4>
                                    <p className="text-sm text-emerald-50/80 font-medium relative z-10 mb-8 leading-relaxed max-w-[240px]">
                                        {lang === 'zh' 
                                            ? '將您的精心規劃發佈到社群，幫助其他旅行者，還能獲得專業認證！' 
                                            : 'Share your travel expertise. Inspire others and earn the verified expert badge!'}
                                    </p>

                                    <button 
                                        onClick={() => { onClose(); onOpenSubmitModal(); }}
                                        className="bg-white text-emerald-700 px-8 py-3.5 rounded-full text-xs font-black shadow-[0_10px_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 w-fit"
                                    >
                                        {t.publishNow || '立即發佈'}
                                        <MoveRight size={16} />
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-5 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col gap-2">
                                        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-emerald-600 shadow-sm">
                                            <Share2 size={14} />
                                        </div>
                                        <div>
                                            <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{lang === 'zh' ? '即時發佈' : 'Instant'}</h5>
                                            <p className="text-[11px] font-bold text-gray-700">{lang === 'zh' ? '獲得專屬連結' : 'Unique URL'}</p>
                                        </div>
                                    </div>
                                    <div className="p-5 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col gap-2">
                                        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-emerald-600 shadow-sm">
                                            <Check size={14} />
                                        </div>
                                        <div>
                                            <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{lang === 'zh' ? '專家認證' : 'Verified'}</h5>
                                            <p className="text-[11px] font-bold text-gray-700">{lang === 'zh' ? '達人認證徽章' : 'Expert badge'}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Footer Tip */}
                <div className="p-4 bg-gray-50/50 text-center border-t border-gray-50/50">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                        ✨ {t.shareTip || 'Tip: Share this link to your friends!'}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
