import React, { useState } from 'react';
import { Map as MapIcon, Share2, Check, Calendar, Pencil, Wallet, ChevronLeft } from 'lucide-react';
import { LangType, Plan, Region, ViewMode } from '../types';
import { CITY_FILTERS } from '../data/index';
import { getRegionName } from '../data/regions';
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
    planRegion?: string;
    isShrunk?: boolean;
    showPlanManager?: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = ({
    lang, t, toggleLang, activePlan,
    isEditingName, editingName, setEditingName, startEditingName, saveName, handleNameKeyDown, nameInputRef,
    openDatePicker, showCitySelector, setShowCitySelector, activeRegion, setActiveRegion, updateActivePlan,
    setShowLanding, setShowPlanManager, setShowSubmitModal, setShowShareModal, handleGateCheck,
    isSidebarOpen, budgetLimit, setBudgetLimit, calculateTotalBudget, calculateCategoryBreakdown,
    showContextMap, setShowContextMap, toolbar,
    viewMode, setViewMode,
    showToastMessage,
    planRegion,
    isShrunk,
    showPlanManager
}) => {
    const MAX_NAME_LENGTH = 25;

    // Plan Manager Branding (Emerald Canopy Spec)
    if (showPlanManager) {
        return (
            <div className="sticky top-0 z-[100] w-full bg-[#F7FBF0] h-16 flex items-center justify-center border-b border-[#E8EDE4]">
                <h1 className="font-heading text-[20px] font-extrabold text-[#0D631B] tracking-[-0.05em]">
                    Travel Canvas
                </h1>
            </div>
        );
    }

    // Budget status for color indicator
    const budgetSpent = calculateTotalBudget();
    const budgetPercentage = budgetLimit > 0 ? Math.min((budgetSpent / budgetLimit) * 100, 100) : 0;
    const isOverBudget = budgetSpent > budgetLimit && budgetLimit > 0;
    const getBudgetBtnClass = () => {
        if (isOverBudget || budgetPercentage >= 90) return 'bg-red-500/70 border-red-400/60 text-white';
        if (budgetPercentage >= 70) return 'bg-yellow-500/70 border-yellow-400/60 text-white';
        if (viewMode === 'budget') return 'bg-emerald-500/70 border-emerald-400/60 text-white';
        return 'bg-white/10 border-white/25 text-white hover:bg-white/20';
    };

    // Cover image priority: regional cover > fallback
    const regionCoverMap: Record<string, string> = {
        tokyo: '/images/covers/tokyo.png',
        kyoto: '/images/covers/kyoto.png',
        osaka: '/images/covers/osaka.png',
        melbourne: '/images/covers/melbourne.png',
        taipei: '/images/covers/taipei.png',
        tainan: '/images/covers/tainan.png',
        hualien: '/images/covers/hualien.png',
        taichung: '/images/covers/taichung.png',
    };
    const coverBg =
        (activePlan.region ? regionCoverMap[activePlan.region] : null) ||
        '/images/covers/fallback.png';

    // MINIMALIST HEADER (Canvas/Map View - Productivity Mode)
    if (viewMode === 'canvas' || viewMode === 'map') {
        const headerTitle = activePlan.name || (lang === 'zh' ? '無標題行程' : 'Untitled Trip');
        
        return (
            <div className={`sticky top-0 z-[100] w-full bg-white/95 backdrop-blur-xl h-16 flex items-center justify-between px-6 border-b border-gray-100 shadow-sm transition-all duration-300`}>
                {/* Left: Back Button */}
                <button 
                   onClick={() => setShowPlanManager(true)}
                   className="flex items-center gap-1.5 p-2 -ml-2 text-gray-500 hover:text-emerald-700 transition-colors group"
                >
                    <div className="p-1.5 bg-gray-50 rounded-full group-hover:bg-emerald-50">
                        <ChevronLeft size={20} />
                    </div>
                    <span className="text-sm font-bold hidden sm:inline">{lang === 'zh' ? '返回列表' : 'Back'}</span>
                </button>

                {/* Center: Trip Name & Date (Compact) */}
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <h1 className="font-black text-gray-800 text-base leading-tight truncate max-w-[120px] sm:max-w-xs">{headerTitle}</h1>
                    <div className="flex items-center gap-2 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                        <span>{activePlan.startDate}</span>
                        <span>•</span>
                        <span>{activePlan.totalDays}D</span>
                    </div>
                </div>

                {/* Right: Quick Tools (No Publish) */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setShowShareModal(true)}
                        className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all"
                        title={lang === 'zh' ? '分享' : 'Share'}
                    >
                        <Share2 size={18} />
                    </button>
                    {/* Auto-save indicator */}
                    <div className="hidden sm:flex items-center gap-1 text-[9px] text-emerald-500/60 font-bold uppercase tracking-tighter">
                        <Check size={10} />
                        {lang === 'zh' ? '儲存中' : 'Saved'}
                    </div>
                </div>
            </div>
        );
    }

    // JOURNEY COVER HEADER (Overview View - Emotional Dashboard)
    return (
        <>
            {/* ===== MOBILE HEADER — Journey Cover ===== */}
            <div className="lg:hidden sticky top-0 z-30">
                <div className={`relative w-full overflow-hidden transition-all duration-500 h-[180px]`}>
                    <img
                        src={coverBg}
                        alt="cover"
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).src = '/images/covers/fallback.png'; }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/75 pointer-events-none" />

                    {/* Overlaid content */}
                    <div className={`absolute inset-0 flex flex-col justify-between px-6 pt-5 pb-6`}>
                        {/* Top Bar: Back & Share */}
                        <div className="flex justify-between items-start">
                            <button 
                                onClick={() => setShowPlanManager(true)}
                                className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white border border-white/10 active:scale-95 transition-all"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            <button 
                                onClick={() => setShowShareModal(true)}
                                className="bg-white/15 backdrop-blur-xl hover:bg-white/25 text-white w-10 h-10 rounded-full border border-white/20 shadow-2xl active:scale-[0.98] transition-all flex items-center justify-center"
                                title={t.shareHub}
                            >
                                <Share2 size={16} className="text-emerald-400" />
                            </button>
                        </div>

                        {/* Bottom Content: Title & Chips */}
                        <div className="mt-auto">
                            {/* Plan name */}
                            <h1 className="font-black text-white text-3xl leading-tight truncate drop-shadow-2xl mb-2">
                                {activePlan.name}
                            </h1>

                            {/* Chips row */}
                            <div className={`flex items-center gap-1.5 flex-wrap`}>
                                <span className="flex items-center gap-1 text-[10px] font-bold text-white/90 bg-white/15 backdrop-blur-md rounded-full px-2.5 py-1 border border-white/20 shadow-sm">
                                    <Calendar size={9} />
                                    {activePlan.startDate} → {activePlan.endDate}
                                </span>
                                <span className="flex items-center gap-1 text-[10px] font-bold text-white/90 bg-white/15 backdrop-blur-md rounded-full px-2.5 py-1 border border-white/20 shadow-sm">
                                    {activePlan.totalDays}{lang === 'zh' ? ' 天' : 'D'}
                                </span>
                                {(activePlan.destination || activePlan.region) && (
                                    <span className="flex items-center gap-1 text-[10px] font-bold text-white/90 bg-white/15 backdrop-blur-md rounded-full px-2.5 py-1 border border-white/20 shadow-sm">
                                        📍 {activePlan.destination || getRegionName(activePlan.region || '', lang)}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== DESKTOP HEADER — Journey Cover ===== */}
            <div className="hidden lg:block sticky top-0 z-40">
                <div className={`relative w-full overflow-hidden transition-all duration-500 h-80`}>
                    <img
                        src={coverBg}
                        alt="cover"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        onError={(e) => { (e.target as HTMLImageElement).src = '/images/covers/fallback.png'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10 pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                    <div className="absolute inset-0 flex flex-col justify-between px-12 py-10">
                        {/* Top Bar: Back & Share */}
                        <div className="flex justify-between items-start">
                            <button 
                                onClick={() => setShowPlanManager(true)}
                                className="flex items-center gap-2 text-white/70 hover:text-white transition-all bg-black/20 hover:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 group active:scale-95"
                            >
                                <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                <span className="text-xs font-black uppercase tracking-widest">{lang === 'zh' ? '返回行程列表' : 'View All Trips'}</span>
                            </button>

                            <button 
                                onClick={() => setShowShareModal(true)}
                                className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white px-8 h-12 rounded-full text-xs font-black border border-white/20 shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-3 tracking-widest uppercase"
                            >
                                <Share2 size={18} className="text-emerald-400" />
                                {t.shareHub || '分享與匯出'}
                            </button>
                        </div>

                        {/* Bottom Content: Title & Chips */}
                        <div className="mt-auto">
                            <h1 className="font-black text-white text-6xl leading-tight drop-shadow-2xl mb-6 max-w-3xl">
                                {activePlan.name}
                            </h1>

                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-2.5 text-base font-bold text-white/90 bg-white/10 backdrop-blur-md rounded-full px-6 py-2.5 border border-white/20 shadow-2xl">
                                    <Calendar size={16} />
                                    {activePlan.startDate} → {activePlan.endDate}
                                </span>
                                <span className="flex items-center gap-2 text-base font-bold text-white/90 bg-white/10 backdrop-blur-md rounded-full px-6 py-2.5 border border-white/20 shadow-2xl">
                                    {activePlan.totalDays}{lang === 'zh' ? ' 天' : ' Days'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppHeader;
