import React, { useState } from 'react';
import { Map as MapIcon, Globe, FolderOpen, Upload, Share2, X, Check, Calendar, Pencil, Plane, ListChecks } from 'lucide-react';
import { LangType, Plan, Region, ViewMode } from '../types';
import { CITY_FILTERS } from '../data/index';
import { BudgetWidget } from './BudgetWidget';

interface AppHeaderProps {
    lang: LangType;
    t: any;
    toggleLang: () => void;
    activePlan: Plan;
    isEditingName: boolean;
    editingName: string;
    setEditingName: (name: string) => void;
    startEditingName: () => void;
    saveName: () => void;
    handleNameKeyDown: (e: React.KeyboardEvent) => void;
    nameInputRef: React.RefObject<HTMLInputElement | null>;
    openDatePicker: () => void;
    showCitySelector: boolean;
    setShowCitySelector: (show: boolean) => void;
    activeRegion: Region;
    setActiveRegion: (region: Region) => void;
    updateActivePlan: (updates: Partial<Plan>) => void;
    setShowLanding: (show: boolean) => void;
    setShowPlanManager: (show: boolean) => void;
    setShowSubmitModal: (show: boolean) => void;
    setShowShareModal: (show: boolean) => void;
    handleGateCheck: (action: () => void) => void;
    isSidebarOpen: boolean;
    budgetLimit: number;
    setBudgetLimit: (limit: number) => void;
    calculateTotalBudget: () => number;
    calculateCategoryBreakdown: () => any;
    showContextMap: boolean;
    setShowContextMap: (show: boolean) => void;
    toolbar?: React.ReactNode;
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    showToastMessage: (message: string, type?: 'success' | 'warning' | 'error' | 'info', duration?: number) => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({
    lang, t, toggleLang, activePlan,
    isEditingName, editingName, setEditingName, startEditingName, saveName, handleNameKeyDown, nameInputRef,
    openDatePicker, showCitySelector, setShowCitySelector, activeRegion, setActiveRegion, updateActivePlan,
    setShowLanding, setShowPlanManager, setShowSubmitModal, setShowShareModal, handleGateCheck,
    isSidebarOpen, budgetLimit, setBudgetLimit, calculateTotalBudget, calculateCategoryBreakdown,
    showContextMap, setShowContextMap, toolbar,
    viewMode, setViewMode,
    showToastMessage
}) => {
    const MAX_NAME_LENGTH = 25;
    return (
        <>
            {/* Mobile Header - Boarding Pass Style (Phase 8 Upgrade) */}
            <div className="md:hidden h-16 bg-white sticky top-0 z-30 px-3 py-2 border-b border-gray-100 flex items-center justify-between">
                <div className="flex flex-1 items-center gap-3 min-w-0">
                    {/* Ticket Stub Visual flair */}
                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0 border border-teal-100 shadow-sm relative overflow-hidden">
                        <MapIcon className="w-5 h-5 text-teal-600" />
                        <div className="absolute top-0 right-0 w-2 h-2 bg-teal-500 rounded-full -mr-1 -mt-1" />
                    </div>

                    <div className="flex flex-col min-w-0">
                        {isEditingName ? (
                            <input
                                ref={nameInputRef}
                                type="text"
                                value={editingName}
                                onChange={(e) => {
                                    if (e.target.value.length <= MAX_NAME_LENGTH) {
                                        setEditingName(e.target.value);
                                    } else {
                                        showToastMessage(lang === 'zh' ? `項目名稱不能超過 ${MAX_NAME_LENGTH} 個字喔！` : `Name cannot exceed ${MAX_NAME_LENGTH} characters!`, 'warning');
                                    }
                                }}
                                onBlur={saveName}
                                onKeyDown={handleNameKeyDown}
                                autoFocus
                                className="font-bold text-gray-900 text-sm leading-tight bg-gray-50 border border-teal-400 rounded px-1 py-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                            />
                        ) : (
                            <h1 onClick={startEditingName} className="font-black text-gray-900 truncate text-sm leading-tight flex items-center gap-1.5 group">
                                {activePlan.name}
                                <Pencil size={10} className="text-gray-400 opacity-60 group-hover:text-teal-500 transition-colors" />
                            </h1>
                        )}
                        <span onClick={(e) => { e.stopPropagation(); openDatePicker(); }} className="text-[10px] text-gray-400 font-bold truncate mt-0.5 uppercase tracking-wide flex items-center gap-1">
                            <Calendar size={10} className="text-teal-500/70" />
                            {activePlan.startDate} ~ {activePlan.endDate} ({activePlan.totalDays}D)
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setShowShareModal(true)}
                        className="w-9 h-9 flex items-center justify-center bg-gray-50 text-gray-500 rounded-full active:scale-95 transition-all border border-gray-100"
                    >
                        <Upload size={16} />
                    </button>

                    {/* Compact Budget (Always visible on mobile header now) */}
                    <div className="scale-90 origin-right">
                        <BudgetWidget
                            spent={calculateTotalBudget()}
                            limit={budgetLimit}
                            breakdown={calculateCategoryBreakdown()}
                            onSetLimit={setBudgetLimit}
                            t={t}
                            compact={true}
                        />
                    </div>
                </div>
            </div>

            {/* Desktop Header - Boarding Pass Style (Phase 11: Classic Aviation) */}
            <div className="hidden md:flex flex-col h-36 bg-gray-50/10 items-center justify-start py-4 px-6 z-40 relative">
                <div className="w-full max-w-5xl h-28 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50 flex items-center overflow-hidden active:shadow-md transition-all relative">

                    {/* World Map Background (Subtle) */}
                    <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none flex items-center justify-center overflow-hidden">
                        <svg viewBox="0 0 1000 500" className="w-[120%] h-auto text-teal-900 fill-current">
                            <path d="M150,100 Q200,50 250,100 T350,150 T450,100 T550,150 T650,100 T750,150 T850,100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                            <circle cx="150" cy="100" r="5" />
                            <circle cx="850" cy="100" r="5" />
                            <text x="150" y="90" fontSize="12" fontWeight="bold">TPE</text>
                            <text x="850" y="90" fontSize="12" fontWeight="bold">TYO</text>
                        </svg>
                    </div>

                    {/* Ticket Stub Area (Left) - Trip Name & Barcode */}
                    <div className="flex-1 h-full flex items-center border-r border-dashed border-gray-200 relative z-10 bg-white/80 backdrop-blur-[2px]">
                        {/* Cutout notches */}
                        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-gray-50 rounded-full border border-gray-100 shadow-inner z-20" />
                        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-gray-50 rounded-full border border-gray-100 shadow-inner z-20" />

                        <div className="flex-1 pl-16 pr-8 relative group">
                            {/* Vertical Barcode */}
                            <div className="absolute left-6 top-0.5 bottom-0.5 w-4 opacity-50">
                                <div className="w-full h-full bg-[repeating-linear-gradient(to_bottom,transparent,transparent_2px,#000_2px,#000_4px)]" />
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="text-[9px] font-black text-teal-600 uppercase tracking-[0.2em] bg-teal-50 px-1.5 py-0.5 rounded border border-teal-100">Boarding Pass</span>
                                </div>

                                {isEditingName ? (
                                    <input
                                        ref={nameInputRef}
                                        type="text"
                                        value={editingName}
                                        onChange={(e) => {
                                            if (e.target.value.length <= MAX_NAME_LENGTH) {
                                                setEditingName(e.target.value);
                                            } else {
                                                showToastMessage(lang === 'zh' ? `項目名稱不能超過 ${MAX_NAME_LENGTH} 個字喔！` : `Name cannot exceed ${MAX_NAME_LENGTH} characters!`, 'warning');
                                            }
                                        }}
                                        onBlur={saveName}
                                        onKeyDown={handleNameKeyDown}
                                        className="font-black text-2xl text-gray-900 leading-tight bg-gray-50 border border-teal-400 rounded px-2 py-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                                    />
                                ) : (
                                    <div className="flex flex-col">
                                        <h1
                                            onClick={startEditingName}
                                            className="font-black text-2xl text-gray-900 truncate leading-tight cursor-pointer hover:text-teal-600 transition-colors flex items-center gap-2"
                                        >
                                            {activePlan.name}
                                            <Pencil size={14} className="opacity-0 group-hover:opacity-100 text-gray-400 transition-all hover:text-teal-500" />
                                        </h1>
                                        <span
                                            onClick={(e) => { e.stopPropagation(); openDatePicker(); }}
                                            className="text-xs text-gray-400 font-bold uppercase tracking-[0.1em] mt-1.5 cursor-pointer hover:text-teal-500 transition-colors flex items-center gap-1.5"
                                        >
                                            <Calendar size={12} className="text-teal-500/70" />
                                            {activePlan.startDate} ~ {activePlan.endDate} ({activePlan.totalDays}D)
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Main Ticket Area - City Info (Secondary) */}
                    <div className="h-full px-16 flex items-center justify-center z-10">
                        {/* Origin ✈ Destination Branding */}
                        <div className="flex items-center gap-8 w-full justify-center">
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">From</span>
                                <span className="font-bold text-lg text-gray-700 tracking-tight uppercase">{activePlan.origin || 'TAIPEI'}</span>
                            </div>

                            <div className="flex flex-col items-center justify-center px-4 h-full text-teal-500/80">
                                <Plane size={24} fill="currentColor" className="rotate-45" />
                            </div>

                            <div className="flex flex-col items-center">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">To</span>
                                <span className="font-bold text-lg text-gray-700 tracking-tight uppercase">{activePlan.destination || 'TOKYO'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Stub Area (Right) - Share button back inside */}
                    <div className="h-full flex items-center border-l border-dashed border-gray-200 pl-8 pr-6 relative bg-gray-50/30 z-10">
                        {/* Cutout notches */}
                        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-gray-50 rounded-full border border-gray-100 shadow-inner" />
                        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-gray-50 rounded-full border border-gray-100 shadow-inner" />

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => handleGateCheck(() => setShowShareModal(true))}
                                className="flex items-center gap-2 px-6 py-3 border border-gray-200 bg-white text-gray-500 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all shadow-sm active:scale-95 whitespace-nowrap"
                            >
                                <Upload size={14} />
                                <span>{t.share || "Share Plan"}</span>
                            </button>

                            {/* Ticket Edge Detail */}
                            <div className="flex flex-col gap-1.5 ml-2 opacity-30">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="w-1 h-3 bg-teal-600/20 rounded-full" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppHeader;
