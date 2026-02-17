import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, CheckCircle2, UserPlus, Star, MapPin, Clock } from 'lucide-react';
import { Template, ScheduleItem, LangType, DaySchedule, FullSchedule } from '../../types';

interface TemplateStoryPreviewProps {
    isOpen: boolean;
    onClose: () => void;
    template: Template | null;
    onApply: (template: Template) => void;
    onSubscribe: (creatorId: string) => void;
    isSubscribed: boolean;
    lang?: LangType;
}

export const TemplateStoryPreview: React.FC<TemplateStoryPreviewProps> = ({
    isOpen,
    onClose,
    template,
    onApply,
    onSubscribe,
    isSubscribed,
    lang = 'zh'
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef<any>(null);

    // Flatten schedule into "Story Pages" (First item of each day + highlights)
    const storyPages = React.useMemo(() => {
        if (!template) return [];

        const pages: any[] = [];
        const schedule = template.schedule;

        // Page 0: Cover
        pages.push({
            type: 'cover',
            title: template.title || template.name,
            titleEn: template.titleEn || template.nameEn,
            image: template.coverImage,
            author: template.author,
            authorEn: template.authorEn,
            avatar: '🎨' // Placeholder
        });

        // Loop through days
        for (let i = 1; i <= template.duration; i++) {
            const dayKey = `Day ${i}`;
            const dayData = ('morning' in schedule) ? (schedule as DaySchedule) : (schedule as FullSchedule)[dayKey];

            if (dayData) {
                const highlightItem = dayData.morning?.[0] || dayData.afternoon?.[0];
                if (highlightItem) {
                    pages.push({
                        type: 'day',
                        day: i,
                        title: highlightItem.title,
                        titleEn: highlightItem.titleEn,
                        image: highlightItem.image || highlightItem.marketingImage,
                        description: highlightItem.description || highlightItem.marketingTitle,
                        descriptionEn: highlightItem.descriptionEn || highlightItem.marketingTitleEn,
                        icon: highlightItem.image || '📍'
                    });
                }
            }
        }

        // Final Page: CTA
        pages.push({
            type: 'cta',
            title: lang === 'zh' ? '準備好出發了嗎？' : 'Ready to go?',
            description: lang === 'zh' ? '套用此模板開始規劃你的專屬旅程' : 'Apply this template and start your journey'
        });

        return pages;
    }, [template, lang]);

    useEffect(() => {
        if (!isOpen) {
            setCurrentIndex(0);
            return;
        }

        if (!isPaused) {
            timerRef.current = window.setInterval(() => {
                nextPage();
            }, 5000);
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isOpen, currentIndex, isPaused]);

    const nextPage = () => {
        if (currentIndex < storyPages.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            onClose();
        }
    };

    const prevPage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    if (!isOpen || !template) return null;

    const currentPage = storyPages[currentIndex];

    return (
        <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black">
            {/* Story Container */}
            <div className="relative w-full h-[100dvh] max-w-lg overflow-hidden bg-slate-900 shadow-2xl">

                {/* Progress Indicators */}
                <div className="absolute top-4 left-4 right-4 z-50 flex gap-1">
                    {storyPages.map((_, idx) => (
                        <div key={idx} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-white"
                                initial={{ width: 0 }}
                                animate={{
                                    width: idx < currentIndex ? '100%' : idx === currentIndex ? '100%' : '0%'
                                }}
                                transition={{
                                    duration: idx === currentIndex ? 5 : 0,
                                    ease: "linear"
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Header Info */}
                <div className="absolute top-8 left-4 right-4 z-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-xl border border-white/30">
                            {currentPage.avatar || '🗺️'}
                        </div>
                        <div>
                            <div className="text-white text-xs font-black drop-shadow-md">
                                {lang === 'zh' ? template.author : template.authorEn || template.author}
                            </div>
                            <div className="text-white/60 text-[10px] uppercase tracking-tighter">
                                {currentPage.type === 'cover' ? 'Featured Itinerary' : `Day ${currentPage.day} Preview`}
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-all border border-white/10"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Main Content Area (Tap Areas) */}
                <div className="absolute inset-0 z-40 flex">
                    <div className="w-1/3 h-full cursor-pointer" onClick={prevPage} />
                    <div className="w-1/3 h-full" onMouseDown={() => setIsPaused(true)} onMouseUp={() => setIsPaused(false)} onTouchStart={() => setIsPaused(true)} onTouchEnd={() => setIsPaused(false)} />
                    <div className="w-1/3 h-full cursor-pointer" onClick={nextPage} />
                </div>

                {/* Page Content Rendering */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className="absolute inset-0 z-30 flex flex-col items-center justify-center p-8"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Background Image / Gradient */}
                        <div className="absolute inset-0 z-10">
                            {currentPage.image ? (
                                <img src={currentPage.image} className="w-full h-full object-cover opacity-60" alt="" />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-black" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                        </div>

                        {/* Text Overlay */}
                        <div className="relative z-20 text-center w-full mt-auto mb-20 pointer-events-none">
                            {currentPage.type === 'day' && (
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="inline-block bg-teal-500 text-white text-[10px] font-black px-3 py-1 rounded-full mb-4 shadow-lg shadow-teal-500/30"
                                >
                                    DAY {currentPage.day}
                                </motion.div>
                            )}

                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 drop-shadow-2xl"
                            >
                                {lang === 'zh' ? currentPage.title : currentPage.titleEn || currentPage.title}
                            </motion.h2>

                            {currentPage.description && (
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-white/80 text-lg font-medium drop-shadow-md line-clamp-3"
                                >
                                    {lang === 'zh' ? currentPage.description : currentPage.descriptionEn || currentPage.description}
                                </motion.p>
                            )}
                        </div>

                        {/* CTA Footer */}
                        {currentPage.type === 'cta' && (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="relative z-20 w-full space-y-4"
                            >
                                <button
                                    onClick={() => onApply(template)}
                                    className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-lg shadow-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3 pointer-events-auto"
                                >
                                    <CheckCircle2 size={24} className="text-teal-600" />
                                    {lang === 'zh' ? '立即套用行程' : 'Apply Itinerary'}
                                </button>
                                <button
                                    onClick={() => onSubscribe(template.authorId)}
                                    className="w-full py-4 bg-teal-600/20 backdrop-blur-md border border-white/20 text-white rounded-2xl font-black text-lg hover:bg-teal-600/30 transition-all flex items-center justify-center gap-3 pointer-events-auto"
                                >
                                    {isSubscribed ? <CheckCircle2 size={24} /> : <UserPlus size={24} />}
                                    {isSubscribed ? (lang === 'zh' ? '已關注達人' : 'Subscribed') : (lang === 'zh' ? '關注這位達人' : 'Follow Creator')}
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Footer Navigation Hints */}
                <div className="absolute bottom-10 left-0 right-0 z-50 flex items-center justify-center gap-4 text-white/40 text-[10px] font-black uppercase tracking-widest pointer-events-none">
                    <div className="flex items-center gap-1">
                        <ChevronLeft size={12} /> Tap Left (Back)
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                        Tap Right (Next) <ChevronRight size={12} />
                    </div>
                </div>
            </div>
        </div>
    );
};
