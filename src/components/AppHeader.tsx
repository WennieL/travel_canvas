import React from 'react';
import { Map as MapIcon, Globe, FolderOpen, Upload, Share2, X, Check } from 'lucide-react';
import { LangType, Plan, Region } from '../types';
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
    toolbar?: React.ReactNode;
}

const AppHeader: React.FC<AppHeaderProps> = ({
    lang, t, toggleLang, activePlan,
    isEditingName, editingName, setEditingName, startEditingName, saveName, handleNameKeyDown, nameInputRef,
    openDatePicker, showCitySelector, setShowCitySelector, activeRegion, setActiveRegion, updateActivePlan,
    setShowLanding, setShowPlanManager, setShowSubmitModal, setShowShareModal, handleGateCheck,
    isSidebarOpen, budgetLimit, setBudgetLimit, calculateTotalBudget, calculateCategoryBreakdown, toolbar
}) => {
    return (
        <>
            {/* Mobile Header */}
            <div className="md:hidden h-14 bg-white/90 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-4 sticky top-0 z-30">
                <div className="flex flex-col mr-2 min-w-0">
                    {isEditingName ? (
                        <input
                            ref={nameInputRef}
                            type="text"
                            value={editingName}
                            onChange={(e) => setEditingName(e.target.value)}
                            onBlur={saveName}
                            onKeyDown={handleNameKeyDown}
                            autoFocus
                            className="font-bold text-teal-700 text-sm leading-tight bg-gray-50 border border-teal-400 rounded px-1 py-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                        />
                    ) : (
                        <div className="flex items-center gap-2">
                            <h1 onClick={startEditingName} className="font-bold text-teal-700 flex items-center gap-1.5 truncate text-sm leading-tight cursor-pointer active:opacity-70 transition-opacity">
                                <MapIcon className="w-3.5 h-3.5 flex-shrink-0" /> {activePlan.name}
                            </h1>
                            {/* Mobile City Selector */}
                            <div className="relative">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowCitySelector(!showCitySelector);
                                    }}
                                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold transition-all whitespace-nowrap ${showCitySelector ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-500'}`}
                                >
                                    <span>📍</span>
                                    <span className="max-w-[60px] truncate">
                                        {(() => {
                                            const city = CITY_FILTERS?.japan?.find(c => c.id === activeRegion) || CITY_FILTERS?.australia?.find(c => c.id === activeRegion);
                                            if (!city) return lang === 'en' ? 'All' : '全部';
                                            return lang === 'en' ? city.labelEn : city.label;
                                        })()}
                                    </span>
                                    <span className={`text-[8px] ml-0.5 transition-transform ${showCitySelector ? 'rotate-180' : ''}`}>▼</span>
                                </button>

                                {showCitySelector && (
                                    <>
                                        <div className="fixed inset-0 z-40" onClick={() => setShowCitySelector(false)} />
                                        <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                            <div className="max-h-60 overflow-y-auto">
                                                <div className="text-[9px] font-bold text-gray-400 px-2 py-1 uppercase tracking-wider opacity-60">Japan</div>
                                                {CITY_FILTERS?.japan?.map(city => (
                                                    <button
                                                        key={city.id}
                                                        onClick={() => {
                                                            setActiveRegion(city.id);
                                                            updateActivePlan({ region: city.id });
                                                            setShowCitySelector(false);
                                                        }}
                                                        className={`w-full text-left px-2 py-1.5 rounded-lg text-[11px] font-medium flex items-center gap-2 mb-0.5 whitespace-nowrap ${activeRegion === city.id ? 'bg-teal-50 text-teal-600' : 'hover:bg-gray-50 text-gray-700'}`}
                                                    >
                                                        <span>{city.icon}</span> {lang === 'zh' ? city.label : city.labelEn}
                                                    </button>
                                                ))}
                                                <div className="h-px bg-gray-100 my-1"></div>
                                                <div className="text-[9px] font-bold text-gray-400 px-2 py-1 uppercase tracking-wider opacity-60">Australia</div>
                                                {CITY_FILTERS?.australia?.map(city => (
                                                    <button
                                                        key={city.id}
                                                        onClick={() => {
                                                            setActiveRegion(city.id);
                                                            updateActivePlan({ region: city.id });
                                                            setShowCitySelector(false);
                                                        }}
                                                        className={`w-full text-left px-2 py-1.5 rounded-lg text-[11px] font-medium flex items-center gap-2 mb-0.5 whitespace-nowrap ${activeRegion === city.id ? 'bg-teal-50 text-teal-600' : 'hover:bg-gray-50 text-gray-700'}`}
                                                    >
                                                        <span>{city.icon}</span> {lang === 'zh' ? city.label : city.labelEn}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                    <span onClick={(e) => { e.stopPropagation(); openDatePicker(); }} className="text-[10px] text-gray-400 truncate leading-tight mt-0.5 active:text-teal-600 transition-colors">{activePlan.startDate} ~ {activePlan.endDate}</span>
                </div>
                <div className="flex gap-0.5 flex-shrink-0 items-center">
                    <button onClick={toggleLang} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors font-bold text-xs"><Globe size={18} /></button>
                    <button onClick={() => setShowSubmitModal(true)} className="mx-1 w-8 h-8 flex items-center justify-center bg-teal-500 text-white rounded-full shadow-sm hover:bg-teal-600 hover:scale-105 transition-all"><Upload size={14} /></button>
                    <button onClick={() => setShowShareModal(true)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"><Share2 size={18} /></button>
                </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:flex h-14 bg-white border-b border-gray-100 items-center justify-between px-6 shadow-[0_2px_10px_-5px_rgba(0,0,0,0.05)] z-40 relative">
                {/* Trip Name Display - Editable */}
                <div className={`flex flex-col justify-center flex-shrink-0 ${!isSidebarOpen ? 'lg:ml-10' : ''}`}>
                    {isEditingName ? (
                        <input
                            ref={nameInputRef}
                            type="text"
                            value={editingName}
                            onChange={(e) => setEditingName(e.target.value)}
                            onBlur={saveName}
                            onKeyDown={handleNameKeyDown}
                            className="font-bold text-lg text-gray-800 max-w-[280px] leading-tight bg-gray-50 border border-teal-400 rounded px-2 py-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    ) : (
                        <h1
                            onClick={startEditingName}
                            className="font-bold text-lg text-gray-800 truncate max-w-[280px] leading-tight cursor-pointer hover:text-teal-600 hover:underline underline-offset-2 decoration-dotted transition-colors group"
                            title={t.editTitleHint}
                        >
                            {activePlan.name}
                            <span className="ml-1 text-gray-300 group-hover:text-teal-400 text-sm">✏️</span>
                        </h1>
                    )}
                    <span
                        onClick={openDatePicker}
                        className="text-[10px] text-gray-400 font-medium tracking-wide cursor-pointer hover:text-teal-600 hover:underline underline-offset-2 decoration-dotted transition-colors"
                        title={t.editDateHint}
                    >
                        📅 {activePlan.startDate} ~ {activePlan.endDate}
                    </span>
                </div>

                {/* City Selector */}
                <div className="relative ml-4 z-20">
                    <button
                        onClick={() => setShowCitySelector(!showCitySelector)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${showCitySelector ? 'bg-teal-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                    >
                        <span>📍</span>
                        <span className="whitespace-nowrap">
                            {(() => {
                                const city = CITY_FILTERS?.japan?.find(c => c.id === activeRegion) || CITY_FILTERS?.australia?.find(c => c.id === activeRegion);
                                if (!city) return lang === 'en' ? 'All Cities' : '所有城市';
                                return lang === 'en' ? city.labelEn : city.label;
                            })()}
                        </span>
                        <span className={`text-[10px] ml-0.5 transition-transform ${showCitySelector ? 'rotate-180' : ''}`}>▼</span>
                    </button>

                    {showCitySelector && (
                        <>
                            <div className="fixed inset-0 z-40" onClick={() => setShowCitySelector(false)} />
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                <div className="flex items-center justify-between px-2 py-1 mb-1">
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{lang === 'zh' ? '選擇城市' : 'Select City'}</div>
                                    <button onClick={() => setShowCitySelector(false)} className="text-gray-400 hover:text-gray-600"><X size={12} /></button>
                                </div>
                                <div className="max-h-64 overflow-y-auto">
                                    <div className="text-[10px] font-bold text-gray-400 px-2 py-1 uppercase tracking-wider opacity-60">Japan</div>
                                    {CITY_FILTERS?.japan?.map(city => (
                                        <button
                                            key={city.id}
                                            onClick={() => {
                                                setActiveRegion(city.id);
                                                updateActivePlan({ region: city.id });
                                                setShowCitySelector(false);
                                            }}
                                            className={`w-full text-left px-2 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 mb-0.5 transition-colors ${activeRegion === city.id ? 'bg-teal-50 text-teal-600' : 'hover:bg-gray-50 text-gray-700'}`}
                                        >
                                            <span className="text-sm">{city.icon}</span> {lang === 'zh' ? city.label : city.labelEn}
                                            {activeRegion === city.id && <Check size={12} className="ml-auto" />}
                                        </button>
                                    ))}
                                    <div className="h-px bg-gray-100 my-1 mx-2"></div>
                                    <div className="text-[10px] font-bold text-gray-400 px-2 py-1 uppercase tracking-wider opacity-60">Australia</div>
                                    {CITY_FILTERS?.australia?.map(city => (
                                        <button
                                            key={city.id}
                                            onClick={() => {
                                                setActiveRegion(city.id);
                                                updateActivePlan({ region: city.id });
                                                setShowCitySelector(false);
                                            }}
                                            className={`w-full text-left px-2 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 mb-0.5 transition-colors ${activeRegion === city.id ? 'bg-teal-50 text-teal-600' : 'hover:bg-gray-50 text-gray-700'}`}
                                        >
                                            <span className="text-sm">{city.icon}</span> {lang === 'zh' ? city.label : city.labelEn}
                                            {activeRegion === city.id && <Check size={12} className="ml-auto" />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <div className="flex items-center gap-2">

                    <div className="hidden lg:flex items-center">
                        <div className="h-6 w-[1px] bg-gray-200 mx-1"></div>
                        {/* View Switcher/Zoom Toolbar */}
                        {toolbar}
                    </div>

                    <div className="h-6 w-[1px] bg-gray-200 mx-1"></div>

                    {/* Global Actions */}
                    <button onClick={toggleLang} className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-teal-600 hover:bg-gray-100 rounded-full transition-colors font-bold text-xs"><Globe size={18} /></button>
                    <button
                        onClick={() => handleGateCheck(() => setShowSubmitModal(true))}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full text-xs font-bold hover:shadow-md hover:scale-105 transition-all"
                        title="將您的行程分享給社群"
                    >
                        <Upload size={14} />
                        <span className="hidden lg:inline">提交審核</span>
                    </button>
                    <button onClick={() => handleGateCheck(() => setShowShareModal(true))} className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-teal-600 hover:bg-gray-100 rounded-full transition-colors" title={t.shareHub || '分享'}><Share2 size={18} /></button>
                </div>
            </div>
        </>
    );
};

export default AppHeader;
