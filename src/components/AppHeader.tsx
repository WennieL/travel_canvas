import React, { useState } from 'react';
import { Map as MapIcon, Share2, Check, Calendar, Pencil, Wallet } from 'lucide-react';
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
    isShrunk
}) => {
    const MAX_NAME_LENGTH = 25;

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

    return (
        <>
            {/* ===== MOBILE HEADER — Journey Cover ===== */}
            <div className="lg:hidden sticky top-0 z-30">
                <div className={`relative w-full overflow-hidden transition-all duration-500`} style={{ height: isShrunk ? '64px' : '180px' }}>
                    <img
                        src={coverBg}
                        alt="cover"
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).src = '/images/covers/fallback.png'; }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/75 pointer-events-none" />

                    {/* Overlaid content */}
                    <div className={`absolute inset-0 flex flex-col transition-all duration-500 ${isShrunk ? 'justify-center px-4 py-2' : 'justify-center px-4 pt-2 pb-3'}`}>

                        {/* Plan name */}
                        {isEditingName ? (
                            <input
                                ref={nameInputRef}
                                type="text"
                                value={editingName}
                                onChange={(e) => {
                                    if (e.target.value.length <= MAX_NAME_LENGTH) {
                                        setEditingName(e.target.value);
                                    } else {
                                        showToastMessage(t.nameLimitReached?.replace('{max}', MAX_NAME_LENGTH.toString()) || `Max ${MAX_NAME_LENGTH} chars`, 'warning');
                                    }
                                }}
                                onBlur={saveName}
                                onKeyDown={handleNameKeyDown}
                                autoFocus
                                className="font-black text-white text-lg leading-tight bg-white/20 border border-white/40 rounded px-1.5 py-0.5 focus:outline-none w-full backdrop-blur-sm mb-1"
                            />
                        ) : (
                            <h1
                                onClick={startEditingName}
                                className="group font-black text-white text-lg leading-tight truncate flex items-center gap-1.5 cursor-pointer mb-1"
                            >
                                {activePlan.name}
                                <Pencil size={11} className="opacity-0 group-hover:opacity-60 transition-opacity flex-shrink-0" />
                            </h1>
                        )}

                        {/* Chips row - Hide when shrunk on mobile to save space */}
                        <div className={`flex items-center gap-1.5 flex-wrap mb-3 transition-opacity duration-300 ${isShrunk ? 'opacity-0 h-0 overflow-hidden mb-0' : 'opacity-100'}`}>
                            <span
                                onClick={(e) => { e.stopPropagation(); openDatePicker(); }}
                                className="flex items-center gap-1 text-[10px] font-bold text-white/90 bg-white/15 backdrop-blur-sm rounded-full px-2 py-0.5 border border-white/20 cursor-pointer"
                            >
                                <Calendar size={9} />
                                {activePlan.startDate} → {activePlan.endDate}
                            </span>
                            <span className="flex items-center gap-1 text-[10px] font-bold text-white/90 bg-white/15 backdrop-blur-sm rounded-full px-2 py-0.5 border border-white/20">
                                {activePlan.totalDays}{lang === 'zh' ? ' 天' : 'D'}
                            </span>
                            {(activePlan.destination || activePlan.region) && (
                                <span className="flex items-center gap-1 text-[10px] font-bold text-white/90 bg-white/15 backdrop-blur-sm rounded-full px-2 py-0.5 border border-white/20">
                                    📍 {activePlan.destination || getRegionName(activePlan.region || '', lang)}
                                </span>
                            )}
                        </div>

                        {/* Divider */}
                        <div className={`w-full border-t border-white/25 my-2 transition-all ${isShrunk ? 'opacity-0 h-0 my-0' : 'opacity-100'}`} />

                        {/* Mobile action toolbar - Hide when shrunk to Maximize schedule visibility */}
                        <div className={`flex items-center gap-2 transition-all duration-300 ${isShrunk ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                            <button
                                onClick={() => setViewMode(viewMode === 'map' ? 'canvas' : 'map')}
                                className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md border transition-all ${viewMode === 'map'
                                    ? 'bg-teal-500/70 border-teal-400/60 text-white'
                                    : 'bg-white/10 border-white/25 text-white hover:bg-white/20'
                                    }`}
                                title={lang === 'zh' ? '地圖' : 'Map'}
                            >
                                <MapIcon size={14} />
                            </button>
                            <button
                                onClick={() => setShowShareModal(true)}
                                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 border border-white/25 text-white hover:bg-white/20 backdrop-blur-md transition-all"
                                title={lang === 'zh' ? '分享' : 'Share'}
                            >
                                <Share2 size={14} />
                            </button>
                            <button
                                onClick={() => setViewMode(viewMode === 'budget' ? 'canvas' : 'budget')}
                                className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md border transition-all ${getBudgetBtnClass()}`}
                                title={lang === 'zh' ? '預算' : 'Budget'}
                            >
                                <Wallet size={14} />
                            </button>

                            {/* Auto-save indicator */}
                            <span className="ml-auto flex items-center gap-1 text-[9px] text-emerald-300/80 font-medium">
                                <Check size={8} />
                                {lang === 'zh' ? '已儲存' : 'Saved'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== DESKTOP HEADER — Journey Cover ===== */}
            <div className="hidden lg:block sticky top-0 z-40 transition-all duration-500">
                <div className={`relative w-full overflow-hidden transition-all duration-500 ${isShrunk ? 'h-24 shadow-md' : 'h-80'}`}>
                    <img
                        src={coverBg}
                        alt="cover"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        onError={(e) => { (e.target as HTMLImageElement).src = '/images/covers/fallback.png'; }}
                    />
                    {/* Gradient: left-heavy + strong bottom for toolbar readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10 pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                    <div className={`absolute inset-0 flex flex-col justify-center px-8 transition-all duration-500 ${isShrunk ? 'py-2' : ''}`}>

                        {/* Plan name */}
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
                                className={`font-black text-white leading-tight bg-white/15 border border-white/40 rounded px-2 py-0.5 focus:outline-none w-96 backdrop-blur-sm pointer-events-auto transition-all ${isShrunk ? 'text-xl' : 'text-4xl'}`}
                            />
                        ) : (
                            <div className={`group flex items-center gap-3 cursor-pointer pointer-events-auto transition-all ${isShrunk ? 'mb-0' : 'mb-3'}`} onClick={startEditingName}>
                                <h1 className={`font-black text-white leading-tight drop-shadow-md transition-all ${isShrunk ? 'text-2xl' : 'text-5xl'}`}>
                                    {activePlan.name}
                                </h1>
                                <Pencil size={isShrunk ? 14 : 18} className="text-white/50 opacity-0 group-hover:opacity-100 transition-all" />
                            </div>
                        )}

                        {/* Chips & Actions Row - Combine or Hide when shrunk */}
                        <div className={`flex items-center gap-4 transition-all duration-500 ${isShrunk ? 'opacity-0 h-0 overflow-hidden mt-0' : 'mt-2'}`}>
                            {/* Chips */}
                            <div className="flex items-center gap-2.5 flex-wrap pointer-events-auto">
                                <span
                                    onClick={(e) => { e.stopPropagation(); openDatePicker(); }}
                                    className="flex items-center gap-1.5 text-sm font-bold text-white/90 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/20 cursor-pointer hover:bg-white/25 transition-all"
                                >
                                    <Calendar size={12} />
                                    {activePlan.startDate} → {activePlan.endDate}
                                </span>
                                <span className="flex items-center gap-1 text-sm font-bold text-white/90 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/20">
                                    {activePlan.totalDays}{lang === 'zh' ? ' 天' : ' Days'}
                                </span>
                            </div>

                            {/* Divider */}
                            <div className="h-4 border-l border-white/25" />

                            {/* Desktop action toolbar — Map (split view) + Share only */}
                            <div className="flex items-center gap-2 pointer-events-auto">
                                <button
                                    onClick={() => {
                                        setShowContextMap(!showContextMap);
                                        if (viewMode === 'map') setViewMode('canvas');
                                    }}
                                    className={`flex items-center gap-2 px-4 h-9 rounded-full text-sm font-bold backdrop-blur-md border transition-all ${showContextMap
                                        ? 'bg-teal-500/70 border-teal-400/60 text-white'
                                        : 'bg-white/10 border-white/30 text-white hover:bg-white/20'
                                        }`}
                                    title={showContextMap ? t.hideMap : t.showMap}
                                >
                                    <MapIcon size={15} />
                                    <span>{t.mapBtn || (lang === 'zh' ? '地圖' : 'Map')}</span>
                                </button>
                                <button
                                    onClick={() => setShowShareModal(true)}
                                    className="flex items-center gap-2 px-4 h-9 rounded-full text-sm font-bold bg-white/10 border border-white/30 text-white hover:bg-white/20 backdrop-blur-md transition-all"
                                    title={t.share || 'Share'}
                                >
                                    <Share2 size={15} />
                                    <span>{t.shareBtn || (lang === 'zh' ? '分享' : 'Share')}</span>
                                </button>

                                {/* Auto-save indicator */}
                                <span className="ml-3 flex items-center gap-1 text-xs text-emerald-300/80 font-medium">
                                    <Check size={10} />
                                    {lang === 'zh' ? '已儲存' : 'Saved'}
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
