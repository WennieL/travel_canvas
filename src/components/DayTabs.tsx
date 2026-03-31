import React, { useState, useRef, useEffect } from 'react';
import { Plus, X, ChevronLeft, ChevronRight, Check, Map as MapIcon, Calendar, Minus } from 'lucide-react';
import { Plan, ViewMode, LangType } from '../types';
import { motion } from 'framer-motion';

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
                                onClick={(e) => handleDeleteDay(currentDay, e as any)} 
                                className="w-7 h-7 rounded-full bg-slate-50 text-slate-400 border border-slate-100 flex items-center justify-center active:scale-90 transition-transform shadow-sm"
                                title={t.deleteDay || "Delete Current Day"}
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
                                    onClick={(e) => handleDeleteDay(currentDay, e as any)}
                                    className="w-7 h-7 rounded-full bg-slate-50 text-slate-400 border border-slate-100 hover:bg-red-50 hover:text-red-500 hover:border-red-100 flex items-center justify-center transition-all"
                                    title={t.deleteDay || "Delete Current Day"}
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
        </>
    );
};

export default DayTabs;
