import React, { useState } from 'react';
import { Plus, X, ChevronDown, Check } from 'lucide-react';
import { Plan } from '../types';

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
}

const DayTabs: React.FC<DayTabsProps> = ({
    activePlan, currentDay, setCurrentDay,
    handleAddDay, handleDeleteDay, getShortDate, t,
    dayTabsContainerRef, mobileDayTabsRef
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const VISIBLE_LIMIT = 5;
    const hasOverflow = activePlan.totalDays > VISIBLE_LIMIT;

    const visibleDays = Array.from({ length: Math.min(activePlan.totalDays, VISIBLE_LIMIT) }).map((_, i) => i + 1);
    const overflowDays = hasOverflow ? Array.from({ length: activePlan.totalDays - VISIBLE_LIMIT }).map((_, i) => i + VISIBLE_LIMIT + 1) : [];

    return (
        <>
            {/* Mobile Day Selector - Sticky Horizontal Scroll */}
            <div className="lg:hidden sticky top-14 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-2 max-w-[100vw] overflow-hidden">
                <div ref={mobileDayTabsRef} className="flex px-4 gap-2 overflow-x-auto scrollbar-hide items-center">
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

            {/* Desktop Day Tabs Bar */}
            <div className="hidden lg:flex h-12 bg-white/80 backdrop-blur-sm border-b border-gray-100 items-center px-6 gap-3 z-30 relative">
                <div ref={dayTabsContainerRef} className="flex-1 flex items-center gap-2 overflow-visible">
                    {/* Render Visible Tabs (1-5) */}
                    {visibleDays.map(dayNum => (
                        <button
                            key={dayNum}
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
                    ))}

                    {/* Render Overflow Dropdown (6+) */}
                    {hasOverflow && (
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className={`flex items-center gap-2 px-4 py-1.5 rounded-full border transition-all justify-center group ${currentDay > VISIBLE_LIMIT ? 'bg-teal-600 border-teal-600 text-white shadow-sm' : 'bg-white border-gray-200 text-gray-500 hover:border-teal-300 hover:text-teal-600'}`}
                            >
                                <span className="font-bold text-sm">
                                    {currentDay > VISIBLE_LIMIT ? `${t.day} ${currentDay}` : (t.more || "More...")}
                                </span>
                                {currentDay <= VISIBLE_LIMIT && <span className="text-[10px] text-gray-400 opacity-80 hidden lg:inline">({overflowDays.length})</span>}
                                <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isDropdownOpen && (
                                <>
                                    {/* Backdrop to close */}
                                    <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>

                                    {/* Dropdown Menu */}
                                    <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-100 shadow-xl rounded-xl p-1 z-50 max-h-[60vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
                                        <div className="px-3 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-50 mb-1">
                                            {t.moreDays || "More Days"}
                                        </div>
                                        {overflowDays.map(dayNum => (
                                            <div
                                                key={dayNum}
                                                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${currentDay === dayNum ? 'bg-teal-50 text-teal-700' : 'hover:bg-gray-50 text-gray-600'}`}
                                                onClick={() => {
                                                    setCurrentDay(dayNum);
                                                    setIsDropdownOpen(false);
                                                }}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className={`font-bold text-sm w-fit ${currentDay === dayNum ? 'text-teal-600' : 'text-gray-500'}`}>
                                                        {t.day} {dayNum}
                                                    </span>
                                                    <span className="text-xs text-gray-400">
                                                        ({getShortDate(dayNum)})
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    {currentDay === dayNum && <Check size={14} className="text-teal-500" />}
                                                    <div
                                                        onClick={(e) => handleDeleteDay(dayNum, e)}
                                                        className="p-1 rounded-full text-gray-300 hover:bg-red-50 hover:text-red-500 transition-colors"
                                                        title={t.deleteDay || "Delete Day"}
                                                    >
                                                        <X size={12} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    <button onClick={handleAddDay} className="w-8 h-8 rounded-full border border-dashed border-gray-300 text-gray-400 hover:border-teal-500 hover:text-teal-600 flex items-center justify-center transition-all ml-1">
                        <Plus size={16} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default DayTabs;
