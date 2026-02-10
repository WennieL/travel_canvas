import React from 'react';
import { Plus, X } from 'lucide-react';
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
    return (
        <>
            {/* Mobile Day Selector - Sticky Horizontal Scroll */}
            <div className="md:hidden sticky top-14 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-2 max-w-[100vw] overflow-hidden">
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
            <div className="hidden md:flex h-12 bg-white/80 backdrop-blur-sm border-b border-gray-100 items-center px-6 gap-3">
                <div ref={dayTabsContainerRef} className="flex-1 flex items-center gap-2 overflow-x-auto scrollbar-hide">
                    {Array.from({ length: activePlan.totalDays }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentDay(i + 1)}
                            className={`flex-shrink-0 flex items-center gap-2 px-4 py-1.5 rounded-full border transition-all min-w-[80px] justify-center group ${currentDay === i + 1 ? 'bg-teal-600 border-teal-600 text-white shadow-sm' : 'bg-white border-gray-200 text-gray-500 hover:border-teal-300 hover:text-teal-600'}`}
                        >
                            <span className="font-bold text-sm">{t.day} {i + 1}</span>
                            <span className={`text-[10px] opacity-80 ${currentDay === i + 1 ? 'text-teal-100' : 'text-gray-400'}`}>
                                ({getShortDate(i + 1)})
                            </span>
                            {activePlan.totalDays > 1 && (
                                <div
                                    onClick={(e) => handleDeleteDay(i + 1, e)}
                                    className={`ml-1 p-0.5 rounded-full transition-all ${currentDay === i + 1 ? 'hover:bg-white/20' : 'opacity-0 group-hover:opacity-100 hover:bg-red-500 hover:text-white'}`}
                                    title={t.deleteDay || "Delete Day"}
                                >
                                    <X size={10} />
                                </div>
                            )}
                        </button>
                    ))}
                    <button onClick={handleAddDay} className="w-8 h-8 rounded-full border border-dashed border-gray-300 text-gray-400 hover:border-teal-500 hover:text-teal-600 flex items-center justify-center transition-all">
                        <Plus size={16} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default DayTabs;
