import React, { useState, useRef, useEffect } from 'react';
import { Plus, X, ChevronLeft, ChevronRight, Check, Map as MapIcon, Calendar, Minus, Trash2 } from 'lucide-react';
import { Plan, ViewMode, LangType } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface DayTabsProps {
    activePlan: Plan;
    currentDay: number;
    setCurrentDay: (day: number) => void;
    handleAddDay: () => void;
    handleDeleteDay: (day: number, e: React.MouseEvent) => void;
    getShortDate: (dayNum: number) => string;
    t: any;
    dayTabsContainerRef?: React.RefObject<HTMLDivElement | null>;
    mobileDayTabsRef?: React.RefObject<HTMLDivElement | null>;
    viewMode?: ViewMode;
    setViewMode?: (mode: ViewMode) => void;
    lang?: LangType;
}

const DayTabs: React.FC<DayTabsProps> = ({
    activePlan, currentDay, setCurrentDay,
    handleAddDay, handleDeleteDay, getShortDate, t,
    dayTabsContainerRef: desktopScrollRef, mobileDayTabsRef,
    viewMode, setViewMode, lang = 'zh'
}) => {
    const [isDeleteDrawerOpen, setIsDeleteDrawerOpen] = useState(false);

    // Scroll handling for desktop
    const scroll = (direction: 'left' | 'right') => {
        if (desktopScrollRef?.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            desktopScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Auto-scroll to current day
    useEffect(() => {
        if (desktopScrollRef?.current) {
            const container = desktopScrollRef.current;
            const activeButton = container.querySelector(`[data-day="${currentDay}"]`);
            if (activeButton) {
                const containerRect = container.getBoundingClientRect();
                const buttonRect = activeButton.getBoundingClientRect();

                // If button is outside container view, scroll it into view
                if (buttonRect.left < containerRect.left || buttonRect.right > containerRect.right) {
                    activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            }
        }
    }, [currentDay, activePlan.totalDays, desktopScrollRef]);

    return (
        <>
            {/* Mobile Day Selector - Sticky Minimalist */}
            <div className="lg:hidden sticky top-14 z-20 bg-premium-paper/95 backdrop-blur-md py-1 border-b border-gray-100 max-w-[100vw] overflow-hidden">
                <div className="flex items-center pl-4 pr-3">
                    <div ref={mobileDayTabsRef} className="flex-1 flex gap-6 overflow-x-auto scrollbar-hide items-center min-w-0 pr-2 relative">
                        {/* Overview Tab */}
                        <button
                            onClick={() => setViewMode?.('overview')}
                            className={`flex-shrink-0 py-3 text-sm font-black transition-all whitespace-nowrap relative ${viewMode === 'overview'
                                ? 'text-teal-700'
                                : 'text-gray-400'
                                }`}
                        >
                            <span>{lang === 'zh' ? '總覽' : 'Overview'}</span>
                            {viewMode === 'overview' && (
                                <motion.div 
                                    layoutId="mobileTabUnderline"
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-teal-600 rounded-t-full"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>

                        {Array.from({ length: activePlan.totalDays }).map((_, i) => {
                            const isDayActive = currentDay === i + 1 && viewMode !== 'overview' && viewMode !== 'checklist' && viewMode !== 'budget' && viewMode !== 'flights' && viewMode !== 'hotels' && viewMode !== 'files';
                            return (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setCurrentDay(i + 1);
                                        if (viewMode !== 'canvas' && viewMode !== 'map') setViewMode?.('canvas');
                                    }}
                                    className={`flex-shrink-0 py-3 text-sm font-black transition-all whitespace-nowrap relative ${isDayActive
                                        ? 'text-teal-700'
                                        : 'text-gray-400'
                                        }`}
                                >
                                    <span>{lang === 'zh' ? '第 ' : 'Day '}{i + 1}{lang === 'zh' ? ' 天' : ''}</span>
                                    {isDayActive && (
                                        <motion.div 
                                            layoutId="mobileTabUnderline"
                                            className="absolute bottom-0 left-0 right-0 h-1 bg-teal-600 rounded-t-full"
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Fixed Management Group on Mobile Right */}
                    <div className="flex items-center gap-1.5 pl-3 py-1 bg-premium-paper relative z-10 border-l border-gray-50/50 shadow-[-10px_0_15px_-5px_rgba(255,255,255,0.9)]">
                            <button 
                            onClick={handleAddDay} 
                            className="w-7 h-7 rounded-full bg-slate-50 text-slate-500 border border-slate-100 flex items-center justify-center active:scale-90 transition-transform shadow-sm"
                            title={t.addDay || "Add Day"}
                            >
                            <Plus size={14} />
                            </button>
                            {activePlan.totalDays > 1 && (
                            <button 
                                onClick={() => setIsDeleteDrawerOpen(true)} 
                                className="w-7 h-7 rounded-full bg-slate-50 text-slate-400 border border-slate-100 flex items-center justify-center active:scale-90 transition-transform shadow-sm"
                                title={t.deleteDay || "Delete Day"}
                            >
                                <Minus size={14} />
                            </button>
                            )}
                    </div>
                </div>
            </div>

            {/* Desktop Day Tabs Bar - Balanced Minimalist */}
            <div className="hidden lg:flex h-16 bg-white border-b border-gray-50 items-center justify-center z-30 relative group/nav">
                <div className="w-full max-w-5xl px-8 relative flex items-center h-full">
                    {/* Left Scroll Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 z-10 p-1.5 rounded-full bg-white/80 border border-gray-100 shadow-sm text-gray-400 hover:text-teal-600 hover:bg-white transition-all opacity-0 group-hover/nav:opacity-100 -translate-x-1"
                    >
                        <ChevronLeft size={16} />
                    </button>
 
                    {/* Scrollable Container */}
                    <div
                        ref={desktopScrollRef}
                        className="flex-1 flex items-center gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-2 h-full"
                    >
                        {/* Overview Tab */}
                        <button
                            onClick={() => setViewMode?.('overview')}
                            className={`flex-shrink-0 flex items-center justify-center h-full px-2 transition-all relative group/tab ${viewMode === 'overview' ? 'text-teal-700' : 'text-gray-400 hover:text-teal-600'}`}
                        >
                            <span className="font-black text-sm">{lang === 'zh' ? '總覽' : 'Overview'}</span>
                            {viewMode === 'overview' && (
                                <motion.div 
                                    layoutId="desktopTabUnderline"
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-teal-600 rounded-t-full"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
 
                        {Array.from({ length: activePlan.totalDays }).map((_, i) => {
                            const dayNum = i + 1;
                            const isDayActive = currentDay === dayNum && viewMode !== 'overview' && viewMode !== 'checklist' && viewMode !== 'budget' && viewMode !== 'flights' && viewMode !== 'hotels' && viewMode !== 'files';
                            return (
                                <button
                                    key={dayNum}
                                    data-day={dayNum}
                                    onClick={() => {
                                        setCurrentDay(dayNum);
                                        if (viewMode !== 'canvas' && viewMode !== 'map') setViewMode?.('canvas');
                                    }}
                                    className={`flex-shrink-0 flex items-center justify-center h-full px-2 transition-all relative group/tab ${isDayActive ? 'text-teal-700' : 'text-gray-400 hover:text-teal-600'}`}
                                >
                                    <div className="flex flex-col items-center">
                                        <span className="font-black text-sm">{t.day} {dayNum}</span>
                                        <span className="text-[9px] font-bold opacity-60">
                                            {getShortDate(dayNum)}
                                        </span>
                                    </div>
                                    {isDayActive && (
                                        <motion.div 
                                            layoutId="desktopTabUnderline"
                                            className="absolute bottom-0 left-0 right-0 h-1 bg-teal-600 rounded-t-full"
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
 
                        {/* Plus/Minus Management - Grouped at the END */}
                        <div className="flex items-center gap-1.5 pl-4 ml-auto border-l border-gray-100 my-4 h-8">
                             <button
                                 onClick={handleAddDay}
                                 className="w-7 h-7 rounded-full bg-slate-50 text-slate-500 border border-slate-100 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-100 flex items-center justify-center transition-all"
                                 title={t.addDay || "Add Day"}
                             >
                                 <Plus size={14} />
                             </button>
                             {activePlan.totalDays > 1 && (
                                <button
                                    onClick={() => setIsDeleteDrawerOpen(true)}
                                    className="w-7 h-7 rounded-full bg-slate-50 text-slate-400 border border-slate-100 hover:bg-red-50 hover:text-red-500 hover:border-red-100 flex items-center justify-center transition-all"
                                    title={t.deleteDay || "Delete Day"}
                                >
                                    <Minus size={14} />
                                </button>
                             )}
                        </div>
                    </div>
 
                    {/* Right Scroll Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 z-10 p-1.5 rounded-full bg-white/80 border border-gray-100 shadow-sm text-gray-400 hover:text-teal-600 hover:bg-white transition-all opacity-0 group-hover/nav:opacity-100 translate-x-1"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            {/* Delete Day Selector Drawer */}
            <AnimatePresence>
                {isDeleteDrawerOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsDeleteDrawerOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[5000]"
                        />

                        {/* Drawer content */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed bottom-0 left-0 right-0 max-h-[70vh] bg-white rounded-t-[32px] z-[5001] flex flex-col overflow-hidden pb-[calc(20px+env(safe-area-inset-bottom))]"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-black text-gray-900">{lang === 'zh' ? '選擇要刪除的天數' : 'Delete Day'}</h3>
                                    <button 
                                        onClick={() => setIsDeleteDrawerOpen(false)}
                                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                                <p className="text-sm text-gray-400 font-bold mb-6">
                                    {lang === 'zh' ? '請從下方清單選擇要移除的天數，一旦刪除將無法復原。' : 'Select a day to remove. This action cannot be undone.'}
                                </p>
                                
                                <div className="space-y-3 overflow-y-auto max-h-[45vh] pr-1 no-scrollbar">
                                    {Array.from({ length: activePlan.totalDays }).map((_, i) => {
                                        const dayNum = i + 1;
                                        return (
                                            <div 
                                                key={dayNum}
                                                className="group flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-red-200 hover:bg-red-50/30 transition-all cursor-default"
                                            >
                                                <div className="flex flex-col">
                                                    <span className="font-black text-gray-900">{lang === 'zh' ? '第 ' : 'Day '}{dayNum}{lang === 'zh' ? ' 天' : ''}</span>
                                                    <span className="text-xs font-bold text-gray-400">{getShortDate(dayNum)}</span>
                                                </div>
                                                <button 
                                                    onClick={(e) => {
                                                        handleDeleteDay(dayNum, e as any);
                                                        // We close the drawer so the user can see the confirm modal clearly
                                                        setIsDeleteDrawerOpen(false);
                                                    }}
                                                    className="w-10 h-10 rounded-xl bg-white text-gray-400 hover:text-red-500 hover:bg-white shadow-sm flex items-center justify-center border border-gray-200 transition-all active:scale-95"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default DayTabs;
