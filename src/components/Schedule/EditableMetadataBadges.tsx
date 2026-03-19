import React from 'react';
import { Clock, Lock, Pencil } from 'lucide-react';
import { ScheduleItem, Region, LangType } from '../../types';
import { getCurrencySymbol } from '../../data/regions';

interface EditableMetadataBadgesProps {
    item: ScheduleItem;
    index: number;
    lang: string;
    t: any;
    planRegion?: Region;
    onUpdateItem: (index: number, updates: Partial<ScheduleItem>) => void;
    onUnlockItem: (item: ScheduleItem) => void;
    
    // UI State passed from parent or managed here?
    // Let's pass the state IDs down to keep the card as the single source of truth for "which field is editing"
    editingDurationId: string | null;
    setEditingDurationId: (id: string | null) => void;
    editingPriceId: string | null;
    setEditingPriceId: (id: string | null) => void;
    
    customDurationHr: string;
    setCustomDurationHr: (v: string) => void;
    customDurationMin: string;
    setCustomDurationMin: (v: string) => void;
}

export const EditableMetadataBadges: React.FC<EditableMetadataBadgesProps> = ({
    item, index, lang, t, planRegion, onUpdateItem, onUnlockItem,
    editingDurationId, setEditingDurationId,
    editingPriceId, setEditingPriceId,
    customDurationHr, setCustomDurationHr,
    customDurationMin, setCustomDurationMin
}) => {
    const isLocked = item.isLocked;

    return (
        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            {/* --- Duration Badge --- */}
            {editingDurationId === item.instanceId ? (
                <div
                    className="flex flex-col gap-1.5 bg-white border border-teal-300 rounded-lg px-2 py-1.5 shadow-lg z-30 animate-in fade-in zoom-in-95 duration-150"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center gap-1 flex-wrap">
                        {['30m', '1hr', '1.5hr', '2hr', '3hr'].map((preset) => (
                            <button
                                key={preset}
                                onClick={() => {
                                    onUpdateItem(index, { duration: preset === '30m' ? '30分' : preset });
                                    setEditingDurationId(null);
                                }}
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full border transition-all hover:scale-105 active:scale-95 ${item.duration === preset || item.duration === (preset === '30m' ? '30分' : preset)
                                    ? 'bg-teal-600 text-white border-teal-600'
                                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-teal-400 hover:text-teal-600'
                                    }`}
                            >
                                {preset}
                            </button>
                        ))}
                        <button
                            onClick={() => {
                                onUpdateItem(index, { duration: lang === 'zh' ? '半天' : 'Half day' });
                                setEditingDurationId(null);
                            }}
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full border transition-all hover:scale-105 active:scale-95 ${item.duration === '半天' || item.duration === 'Half day'
                                ? 'bg-teal-600 text-white border-teal-600'
                                : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-teal-400 hover:text-teal-600'
                                }`}
                        >
                            {t.halfDay}
                        </button>
                    </div>
                    <div className="flex items-center gap-1 border-t border-gray-100 pt-1">
                        <span className="text-[9px] text-gray-400 font-bold">{t.customDuration}:</span>
                        <input
                            type="number"
                            min="0"
                            max="24"
                            placeholder="0"
                            value={customDurationHr}
                            onChange={(e) => setCustomDurationHr(e.target.value)}
                            className="w-8 text-[10px] text-center font-medium text-gray-700 border border-gray-200 rounded px-0.5 py-0.5 focus:border-teal-400 outline-none bg-transparent"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <span className="text-[9px] text-gray-400">h</span>
                        <input
                            type="number"
                            min="0"
                            max="59"
                            placeholder="0"
                            value={customDurationMin}
                            onChange={(e) => setCustomDurationMin(e.target.value)}
                            className="w-8 text-[10px] text-center font-medium text-gray-700 border border-gray-200 rounded px-0.5 py-0.5 focus:border-teal-400 outline-none bg-transparent"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <span className="text-[9px] text-gray-400">m</span>
                        <button
                            onClick={() => {
                                const hr = parseInt(customDurationHr) || 0;
                                const min = parseInt(customDurationMin) || 0;
                                if (hr === 0 && min === 0) { setEditingDurationId(null); return; }
                                const parts: string[] = [];
                                if (hr > 0) parts.push(`${hr}hr`);
                                if (min > 0) parts.push(`${min}min`);
                                onUpdateItem(index, { duration: parts.join('') });
                                setCustomDurationHr('');
                                setCustomDurationMin('');
                                setEditingDurationId(null);
                            }}
                            className="text-[9px] font-bold text-white bg-teal-600 hover:bg-teal-700 px-2 py-0.5 rounded transition-all active:scale-95"
                        >
                            OK
                        </button>
                    </div>
                </div>
            ) : (
                <div
                    onClick={(e) => { e.stopPropagation(); setEditingDurationId(item.instanceId); }}
                    title={t.setDuration}
                    className="group/dur flex items-center gap-1 text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200 cursor-pointer hover:border-teal-300 hover:text-teal-600 hover:bg-teal-50 transition-all"
                >
                    <Clock size={10} className="group-hover/dur:hidden" />
                    <Pencil size={10} className="hidden group-hover/dur:block text-teal-500" />
                    {lang === 'en' && item.duration ? item.duration.replace('小時', 'h').replace('分鐘', 'm').replace(/分$/, 'm') : (item.duration || t.flexible)}
                </div>
            )}

            {/* --- Price Badge --- */}
            {(isLocked || (item.price !== undefined && item.price > 0) || editingPriceId === item.instanceId) && (
                isLocked ? (
                    <button
                        onClick={(e) => { e.stopPropagation(); onUnlockItem?.(item); }}
                        className="text-[10px] font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm flex items-center gap-1"
                    >
                        <Lock size={8} /> {t.unlockLabel}
                    </button>
                ) : (
                    editingPriceId === item.instanceId ? (
                        <div className="flex items-center gap-1 bg-white border border-teal-300 rounded px-1 py-0.5 shadow-sm">
                            <span className="text-[10px] text-gray-400">{getCurrencySymbol(item.region || planRegion)}</span>
                            <input
                                type="number"
                                autoFocus
                                className="w-12 text-[10px] font-medium text-gray-700 p-0 border-none focus:ring-0 outline-none bg-transparent appearance-none"
                                placeholder="0"
                                value={item.price || ''}
                                onChange={(e) => {
                                    const val = parseInt(e.target.value);
                                    onUpdateItem(index, { price: isNaN(val) ? 0 : val });
                                }}
                                onBlur={() => setEditingPriceId(null)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') setEditingPriceId(null);
                                }}
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    ) : (
                        <span
                            onClick={(e) => { e.stopPropagation(); setEditingPriceId(item.instanceId); }}
                            title={t.setBudget}
                            className="text-[10px] font-medium text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded whitespace-nowrap border border-gray-200 cursor-pointer hover:border-teal-300 hover:text-teal-600 transition-colors"
                        >
                            {getCurrencySymbol(item.region || planRegion)}{item.price?.toLocaleString()}
                        </span>
                    )
                )
            )}
        </div>
    );
};
