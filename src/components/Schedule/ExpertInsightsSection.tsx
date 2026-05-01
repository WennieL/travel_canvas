import React from 'react';
import { FacilityTag, ScheduleItem } from '../../types';

interface ExpertInsightsSectionProps {
    item: ScheduleItem;
    lang: string;
}

// ── Facility Badge Config ────────────────────────────────────────────────────
const FACILITY_CONFIG: Record<FacilityTag, { emoji: string; zh: string; en: string; color: string }> = {
    'stroller':       { emoji: '🚼', zh: '推車友善',    en: 'Stroller OK',     color: 'bg-blue-50 text-blue-700 border-blue-200' },
    'restroom':       { emoji: '🚽', zh: '廁所',        en: 'Restroom',        color: 'bg-teal-50 text-teal-700 border-teal-200' },
    'restroom-1f':    { emoji: '🚽', zh: '廁所 1F',     en: 'Restroom @ 1F',   color: 'bg-teal-50 text-teal-700 border-teal-200' },
    'elevator':       { emoji: '🛗', zh: '有電梯',      en: 'Elevator',        color: 'bg-slate-50 text-slate-700 border-slate-200' },
    'easycard':       { emoji: '💳', zh: '悠遊卡',      en: 'EasyCard OK',     color: 'bg-green-50 text-green-700 border-green-200' },
    'cash-only':      { emoji: '💵', zh: '現金',        en: 'Cash Only',       color: 'bg-orange-50 text-orange-700 border-orange-200' },
    'booking':        { emoji: '📅', zh: '建議預約',    en: 'Book Ahead',      color: 'bg-purple-50 text-purple-700 border-purple-200' },
    'closed-mon':     { emoji: '⛔', zh: '週一休館',    en: 'Closed Mon',      color: 'bg-red-50 text-red-700 border-red-200' },
    'crowd-warning':  { emoji: '⏰', zh: '避開人潮',    en: 'Avoid Crowds',    color: 'bg-amber-50 text-amber-700 border-amber-200' },
    'rain-ok':        { emoji: '🌧️', zh: '雨天可去',   en: 'Rain Friendly',   color: 'bg-sky-50 text-sky-700 border-sky-200' },
    'kid-friendly':   { emoji: '👶', zh: '親子友善',    en: 'Kid Friendly',    color: 'bg-pink-50 text-pink-700 border-pink-200' },
    'hiking-boots':   { emoji: '🥾', zh: '需登山鞋',   en: 'Hiking Boots',    color: 'bg-stone-50 text-stone-700 border-stone-200' },
    'weather-check':  { emoji: '🌡️', zh: '注意天氣',  en: 'Check Weather',   color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
    'free-entry':     { emoji: '🆓', zh: '免費入場',   en: 'Free Entry',      color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    'cobblestone':    { emoji: '⚠️', zh: '石板路',     en: 'Cobblestones',    color: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
    'high-energy':    { emoji: '⚡', zh: '高體力值',    en: 'High Energy',     color: 'bg-orange-50 text-orange-700 border-orange-200' },
    'nap-friendly':   { emoji: '💤', zh: '適合午休',    en: 'Nap Friendly',    color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
    'kid-menu':       { emoji: '🍱', zh: '兒童餐指南', en: "Kid's Menu",       color: 'bg-amber-50 text-amber-700 border-amber-200' },
    'luggage-storage':{ emoji: '🧳', zh: '行李寄放',    en: 'Luggage Storage', color: 'bg-zinc-50 text-zinc-700 border-zinc-200' },
    'stairs':         { emoji: '🧗', zh: '階梯多',      en: 'Many Stairs',     color: 'bg-stone-50 text-stone-700 border-stone-200' },
    'water-fountain': { emoji: '💧', zh: '飲水機',      en: 'Water Fountain',  color: 'bg-blue-50 text-blue-700 border-blue-200' },
    'youbike':        { emoji: '🚲', zh: 'YouBike',     en: 'YouBike',         color: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
    'sun-exposure':   { emoji: '☀️', zh: '注意防曬',    en: 'Sun Exposure',    color: 'bg-amber-50 text-amber-700 border-amber-200' },
    'windy':          { emoji: '💨', zh: '風大',        en: 'Windy',           color: 'bg-slate-50 text-slate-700 border-slate-200' },
    'slippery':       { emoji: '⚠️', zh: '地面濕滑',    en: 'Slippery',        color: 'bg-orange-50 text-orange-700 border-orange-200' },
    'hot-spring':     { emoji: '♨️', zh: '溫泉',        en: 'Hot Spring',      color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
    'early-start':    { emoji: '🌅', zh: '需早起',      en: 'Early Start',     color: 'bg-rose-50 text-rose-700 border-rose-200' },
    'gloves-needed':  { emoji: '🧤', zh: '需手套',      en: 'Gloves Needed',   color: 'bg-blue-50 text-blue-700 border-blue-200' },
    'no-restroom':    { emoji: '🚫', zh: '無廁所',      en: 'No Restroom',     color: 'bg-red-50 text-red-700 border-red-200' },
    'cafe':           { emoji: '☕', zh: '咖啡館',      en: 'Cafe',            color: 'bg-stone-50 text-stone-700 border-stone-200' },
    'food':           { emoji: '🍜', zh: '美食',        en: 'Food',            color: 'bg-orange-50 text-orange-700 border-orange-200' },
    'michelin':       { emoji: '🌟', zh: '米其林推薦',   en: 'Michelin',        color: 'bg-amber-50 text-amber-700 border-amber-200' },
    'bus-schedule':   { emoji: '🚌', zh: '注意班次',    en: 'Bus Schedule',    color: 'bg-blue-50 text-blue-700 border-blue-200' },
    'massage':        { emoji: '💆', zh: '按摩',        en: 'Massage',         color: 'bg-purple-50 text-purple-700 border-purple-200' },
    'mrt':            { emoji: '🚇', zh: '捷運',        en: 'MRT',             color: 'bg-sky-50 text-sky-700 border-sky-200' },
    'air-conditioned':{ emoji: '❄️', zh: '冷氣開放',    en: 'Air Conditioned', color: 'bg-blue-50 text-blue-700 border-blue-200' },
};

export const ExpertInsightsSection: React.FC<ExpertInsightsSectionProps> = ({ item, lang }) => {
    const isEn = lang === 'en';
    const expertNote = isEn ? item.expertNoteEn || item.expertNote : item.expertNote;
    const proTip = isEn ? item.proTipEn || item.proTip : item.proTip;
    const kidFriendlyTip = isEn ? item.kidFriendlyTipEn || item.kidFriendlyTip : item.kidFriendlyTip;
    const tags = item.facilityTags;

    if (!expertNote && !proTip && !kidFriendlyTip && (!tags || tags.length === 0)) return null;

    return (
        <div className="mt-3 space-y-2 animate-in fade-in slide-in-from-top-1 duration-300 select-text">

            {/* Facility Pill Badges - HIDDEN in compact schedule view to save space */}

            {/* ── Expert Note ─────────────────────────────────────── */}
            {expertNote && (
                <div className="pl-2 border-l-2 border-indigo-200">
                    <p className="text-[11.5px] leading-relaxed text-indigo-900/70 font-medium">
                        {expertNote}
                    </p>
                </div>
            )}

            {/* ── Pro Tip ─────────────────────────────────────────── */}
            {proTip && (
                <div className="relative overflow-hidden bg-amber-50/50 border-l-4 border-amber-300 rounded-lg p-3 shadow-sm">
                    <div className="flex gap-2">
                        <span className="text-lg flex-shrink-0" role="img" aria-label="lightbulb">💡</span>
                        <div className="flex-1">
                            <h4 className="text-[10px] font-bold uppercase tracking-wider text-amber-600 mb-0.5">
                                {isEn ? "Pro Tips / Human Nav" : "人肉導航祕技"}
                            </h4>
                            <p className="text-[11px] leading-relaxed text-amber-900/80 font-bold">
                                {proTip}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* ── Kid Friendly Tip (Hidden on card, moved to details) ── */}
        </div>
    );
};
