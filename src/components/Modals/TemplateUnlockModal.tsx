import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Lock, Sparkles, ShieldCheck, CreditCard } from 'lucide-react';
import { Template, LangType } from '../../types';

interface TemplateUnlockModalProps {
    isOpen: boolean;
    onClose: () => void;
    template: Template;
    lang: LangType;
    onConfirm: () => void;
    creator?: any;
}

export const TemplateUnlockModal: React.FC<TemplateUnlockModalProps> = ({
    isOpen,
    onClose,
    template,
    lang,
    onConfirm,
    creator
}) => {
    if (!isOpen) return null;

    const t = {
        title: lang === 'zh' ? '解鎖完整行程指南' : 'Unlock Full Itinerary Guide',
        subtitle: lang === 'zh' ? '獲取旗艦級在地旅遊體驗' : 'Get the flagship local travel experience',
        benefits: [
            {
                zh: '100% 揭露所有隱藏神祕地點',
                en: '100% Reveal all hidden secret spots'
            },
            {
                zh: '獲取創作者專屬避雷提示',
                en: 'Access creator-exclusive trap alerts'
            },
            {
                zh: '完整 24 格專家筆記與攝影教學',
                en: 'Full 24-grid expert notes & photo tips'
            },
            {
                zh: '離線地圖與永久保存權限',
                en: 'Offline maps & permanent access'
            }
        ],
        priceTitle: lang === 'zh' ? '限定優惠價格' : 'Limited Offer Price',
        confirmBtn: lang === 'zh' ? '確認購買 ($0.99)' : 'Confirm Purchase ($0.99)',
        disclaimer: lang === 'zh' ? '✨ Beta 期間支持我們持續創作在地優質內容' : '✨ Supporting quality local content during Beta'
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[6000] flex items-center justify-center p-4 sm:p-6">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-md"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-lg bg-white rounded-[32px] overflow-hidden shadow-2xl"
                >
                    {/* Header Image / Pattern Area */}
                    <div className="relative h-48 bg-[#1A1A1A] overflow-hidden">
                        {template.coverImage ? (
                            <img 
                                src={template.coverImage} 
                                className="w-full h-full object-cover opacity-60 scale-110 blur-[2px]" 
                                alt="cover"
                            />
                        ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-emerald-900 opacity-50" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                        
                        {/* Status Badge */}
                        <div className="absolute top-6 left-6 flex items-center gap-2">
                            <div className="px-3 py-1 bg-amber-400 text-amber-950 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                                <Sparkles size={10} />
                                Premium Flagship
                            </div>
                        </div>

                        {/* Close Button */}
                        <button 
                            onClick={onClose}
                            className="absolute top-6 right-6 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center text-white transition-all active:scale-95"
                        >
                            <X size={20} />
                        </button>

                        {/* Title Overlay */}
                        <div className="absolute bottom-4 left-8 right-8 text-center pt-8">
                            <h2 className="text-[28px] font-black text-[#181D17] leading-tight">
                                {lang === 'zh' ? template.title : (template.titleEn || template.title)}
                            </h2>
                            <p className="text-[14px] font-bold text-[#8E9285] mt-1">
                                {t.subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="px-8 pb-10 pt-12 space-y-8">
                        {/* Benefits List */}
                        <div className="space-y-4">
                            {t.benefits.map((benefit, idx) => (
                                <motion.div 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * idx }}
                                    key={idx} 
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <Check size={14} className="text-emerald-600" strokeWidth={3} />
                                    </div>
                                    <span className="text-[15px] font-bold text-[#4A5548]">
                                        {lang === 'zh' ? benefit.zh : benefit.en}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pricing Block */}
                        <div className="bg-[#F7FBF0] rounded-3xl p-6 border border-[#E8EDE4] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-full -mr-16 -mt-16 blur-2xl transition-opacity group-hover:opacity-100 opacity-60" />
                            
                            <div className="relative z-10 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-black text-[#8E9285] uppercase tracking-widest mb-1">
                                        {t.priceTitle}
                                    </span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-[36px] font-black text-[#181D17] leading-none">$0.99</span>
                                        <span className="text-[14px] font-bold text-[#8E9285] line-through decoration-[2px]">$4.99</span>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col items-end">
                                    <div className="flex items-center gap-2 text-emerald-600 mb-1">
                                        <ShieldCheck size={16} />
                                        <span className="text-[12px] font-black uppercase tracking-tight">Safe Checkout</span>
                                    </div>
                                    <span className="text-[10px] text-[#8E9285] font-bold">Secure Stripe Payment</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-4">
                            <button
                                onClick={onConfirm}
                                className="w-full bg-[#00A699] hover:bg-[#008F83] text-white h-[64px] rounded-2xl font-black text-[18px] flex items-center justify-center gap-3.5 shadow-[0_12px_35px_rgba(0,166,153,0.3)] active:scale-[0.98] transition-all"
                            >
                                <CreditCard size={20} />
                                {t.confirmBtn}
                            </button>
                            <p className="text-center text-[11px] font-bold text-emerald-600 opacity-70">
                                {t.disclaimer}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
