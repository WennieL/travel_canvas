import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, MessageSquare, Quote } from 'lucide-react';
import { Review, LangType } from '../../types';

interface ReviewJournalDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    reviews: Review[];
    lang?: LangType;
    spotTitle?: string;
}

export const ReviewJournalDrawer: React.FC<ReviewJournalDrawerProps> = ({
    isOpen,
    onClose,
    reviews,
    lang = 'zh',
    spotTitle
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed bottom-0 inset-x-0 bg-white rounded-t-[40px] z-[1001] shadow-2xl max-h-[85vh] flex flex-col overflow-hidden border-t border-emerald-900/5"
                    >
                        {/* Drag Handle Container */}
                        <div className="pt-3 pb-1 flex justify-center shrink-0">
                            <div className="w-12 h-1.5 bg-gray-200 rounded-full" />
                        </div>

                        {/* Header */}
                        <div className="px-8 py-5 border-b border-[#E8EDE4] flex items-center justify-between shrink-0">
                            <div className="flex flex-col">
                                <h3 className="text-[20px] font-heading font-black text-[#181D17] leading-tight">
                                    {lang === 'zh' ? '旅人誌' : 'Traveler Journal'}
                                </h3>
                                <div className="text-[11px] font-black text-tc-primary/60 uppercase tracking-[0.15em] mt-1">
                                    {spotTitle || 'REVIEWS'}
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-[#F7FBF0] flex items-center justify-center text-[#8E9285] hover:text-[#181D17] hover:bg-emerald-100 transition-all active:scale-90"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto px-8 pt-8 pb-32 no-scrollbar">
                            {reviews && reviews.length > 0 ? (
                                <div className="space-y-10">
                                    {reviews.map((review, index) => (
                                        <motion.div 
                                            key={review.id} 
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="relative"
                                        >
                                            <div className="flex gap-5">
                                                {/* Avatar */}
                                                <div className="w-14 h-14 rounded-full overflow-hidden bg-emerald-50 border-2 border-[#E8EDE4] shadow-sm shrink-0">
                                                    {review.avatar && review.avatar.startsWith('http') ? (
                                                        <img src={review.avatar} alt={review.author} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-2xl">
                                                            {review.avatar || '👤'}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="flex-1 space-y-3">
                                                    <div className="flex items-center justify-between">
                                                        <div className="font-black text-[16px] text-[#181D17]">
                                                            {lang === 'zh' ? (review.authorEn || review.author) : (review.authorEn || review.author)}
                                                        </div>
                                                        <div className="text-[11px] font-bold text-[#8E9285]">
                                                            {review.date || 'March 2024'}
                                                        </div>
                                                    </div>

                                                    {/* Rating */}
                                                    <div className="flex gap-1">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star 
                                                                key={i} 
                                                                size={14} 
                                                                fill={i < (review.rating || 5) ? "#FBBF24" : "none"} 
                                                                className={i < (review.rating || 5) ? "text-amber-400" : "text-gray-200"} 
                                                            />
                                                        ))}
                                                    </div>

                                                    {/* Review Text */}
                                                    <div className="relative group">
                                                        <Quote size={28} className="absolute -left-6 -top-2 text-tc-primary/5 -rotate-12 transition-transform group-hover:scale-125" />
                                                        <p className="text-[15.5px] leading-[1.8] text-[#4A5548] font-medium italic relative z-10">
                                                            "{lang === 'zh' ? review.text : (review.textEn || review.text)}"
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Divider */}
                                            {index < reviews.length - 1 && (
                                                <div className="h-[1px] w-full bg-[#E8EDE4]/60 mt-10" />
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="py-20 flex flex-col items-center text-center opacity-40">
                                    <div className="w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center text-tc-primary mb-6">
                                        <MessageSquare size={48} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-[18px] font-black text-[#181D17] mb-2 uppercase tracking-widest">
                                        {lang === 'zh' ? '尚無旅人誌' : 'No Journals Yet'}
                                    </h4>
                                    <p className="text-[14px] text-[#8E9285] font-medium max-w-[200px] leading-relaxed">
                                        {lang === 'zh' ? '你是第一個造訪這裡的探險家嗎？留下你的第一則故事吧。' : 'Be the first explorer to share your story of this place.'}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Footer / Safe Area Spacer - Increased to clear Bottom Tab Bar */}
                        <div className="h-[100px] bg-white shrink-0 border-t border-[#E8EDE4]/40" />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
