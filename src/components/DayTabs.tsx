import React, { useState, useRef, useEffect } from 'react';
import { Plus, X, ChevronLeft, ChevronRight, Check, Map as MapIcon, Calendar } from 'lucide-react';
import { Plan, ViewMode, LangType } from '../types';

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
            {/* Mobile Day Selector - Sticky */}
            <div className="lg:hidden sticky top-14 z-20 bg-transparent py-2 max-w-[100vw] overflow-hidden">
                <div className="flex items-center pl-4 pr-3 gap-3">
                    <div ref={mobileDayTabsRef} className="flex-1 flex gap-2 overflow-x-auto scrollbar-hide items-center min-w-0">
                        {Array.from({ length: activePlan.totalDays }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentDay(i + 1)}
                                className={`flex-shrink-0 pl-4 pr-2 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${currentDay === i + 1
                                    ? 'bg-teal-600 text-white shadow-sm'
                                    : 'bg-gray-50 text-gray-500 border border-gray-100'
                                    }`}
                            >
                                <span>{t.day} {i + 1}</span>
                                {activePlan.totalDays > 1 && (
                                    <div
                                        onClick={(e) => handleDeleteDay(i + 1, e)}
                                        className={`p-1 rounded-full ${currentDay === i + 1 ? 'bg-teal-500/50 hover:bg-teal-500 text-teal-50' : 'bg-gray-200/50 hover:bg-gray-200 text-gray-400'}`}
                                    >
                                        <X size={10} />
                                    </div>
                                )}
                            </button>
                        ))}
                        <button onClick={handleAddDay} className="flex-shrink-0 w-8 h-8 rounded-full border border-dashed border-gray-300 text-gray-400 flex items-center justify-center">
                            <Plus size={14} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Day Tabs Bar */}
            <div className="hidden lg:flex h-12 bg-transparent items-center justify-center z-30 relative pt-3 group/nav">
                <div className="w-full max-w-5xl px-8 relative flex items-center">
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
                        className="flex-1 flex items-center gap-2 overflow-x-auto scrollbar-hide scroll-smooth px-2"
                    >
                        {Array.from({ length: activePlan.totalDays }).map((_, i) => {
                            const dayNum = i + 1;
                            return (
                                <button
                                    key={dayNum}
                                    data-day={dayNum}
                                    onClick={() => setCurrentDay(dayNum)}
                                    className={`flex-shrink-0 flex items-center gap-2 px-4 py-1.5 rounded-full border transition-all min-w-[80px] justify-center group ${currentDay === dayNum ? 'bg-teal-600 border-teal-600 text-white shadow-sm' : 'bg-white border-gray-200 text-gray-500 hover:border-teal-300 hover:text-teal-600'}`}
                                >
                                    <span className="font-bold text-sm">{t.day} {dayNum}</span>
                                    <span className={`text-[10px] opacity-80 ${currentDay === dayNum ? 'text-teal-100' : 'text-gray-400'}`}>
                                        ({getShortDate(dayNum)})
                                    </span>
                                    {activePlan.totalDays > 1 && (
                                        <div
                                            onClick={(e) => handleDeleteDay(dayNum, e)}
                                            className={`ml-1 p-0.5 rounded-full transition-all ${currentDay === dayNum ? 'hover:bg-white/20' : 'opacity-0 group-hover:opacity-100 hover:bg-red-500 hover:text-white'}`}
                                            title={t.deleteDay || "Delete Day"}
                                        >
                                            <X size={10} />
                                        </div>
                                    )}
                                </button>
                            );
                        })}

                        {/* Plus Button - Inside Scroll for Desktop */}
                        <button
                            onClick={handleAddDay}
                            className="flex-shrink-0 w-8 h-8 rounded-full border border-dashed border-gray-300 text-gray-400 hover:border-teal-500 hover:text-teal-600 flex items-center justify-center transition-all ml-1"
                            title={t.addDay || "Add Day"}
                        >
                            <Plus size={16} />
                        </button>
                    </div>

                    {/* Right Scroll Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 z-10 p-1.5 rounded-full bg-white/80 border border-gray-100 shadow-sm text-gray-400 hover:text-teal-600 hover:bg-white transition-all opacity-0 group-hover/nav:opacity-100 translate-x-1"
                    >
                        <ChevronRight size={16} />
                    </button>

                    {/* Edge Gradients for Desktop Scroll */}
                    <div className="absolute left-8 top-0 bottom-0 w-8 bg-gradient-to-r from-white/40 to-transparent pointer-events-none z-0"></div>
                    <div className="absolute right-8 top-0 bottom-0 w-8 bg-gradient-to-l from-white/40 to-transparent pointer-events-none z-0"></div>
                </div>
            </div>
        </>
    );
};

export default DayTabs;
