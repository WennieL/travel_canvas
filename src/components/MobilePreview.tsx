import React, { useState } from 'react';
import { X, MapPin, Clock, DollarSign, ChevronLeft, ChevronRight, Navigation } from 'lucide-react';
import { Plan, TimeSlot } from '../types';
import { getItemIcon, getFallbackImage } from '../utils';
import { TRANSLATIONS } from '../data/index';
import type { LangType } from '../types';

interface MobilePreviewProps {
    plan: Plan;
    onClose: () => void;
    lang: LangType;
}

const SLOT_LABELS: Record<LangType, Record<TimeSlot, string>> = {
    zh: { morning: '🌅 早上', afternoon: '☀️ 下午', evening: '🌆 傍晚', night: '🌙 夜間', accommodation: '🏨 住宿' },
    en: { morning: '🌅 Morning', afternoon: '☀️ Afternoon', evening: '🌆 Evening', night: '🌙 Night', accommodation: '🏨 Accommodation' }
};

export const MobilePreview: React.FC<MobilePreviewProps> = ({ plan, onClose, lang }) => {
    const [currentDay, setCurrentDay] = useState(1);
    const t = TRANSLATIONS[lang];
    const slotLabels = SLOT_LABELS[lang];

    const daySchedule = plan.schedule[`Day ${currentDay}`];
    const slots: TimeSlot[] = ['morning', 'afternoon', 'evening', 'night'];

    const getDateForDay = (dayNum: number) => {
        const start = new Date(plan.startDate);
        start.setDate(start.getDate() + dayNum - 1);
        return start.toLocaleDateString(lang === 'zh' ? 'zh-TW' : 'en-US', { month: 'short', day: 'numeric', weekday: 'short' });
    };

    return (
        <div className="fixed inset-0 z-[100] bg-black">
            {/* Phone Frame Simulation */}
            <div className="absolute inset-0 md:inset-8 md:max-w-[375px] md:max-h-[812px] md:mx-auto md:rounded-[3rem] md:border-[14px] md:border-gray-800 md:shadow-2xl overflow-hidden bg-white flex flex-col">
                {/* Status Bar (Simulated) */}
                <div className="h-6 bg-gray-900 flex items-center justify-between px-6 text-white text-[10px] font-medium md:rounded-t-[2rem]">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                        <div className="flex gap-0.5">
                            <div className="w-1 h-2 bg-white rounded-sm"></div>
                            <div className="w-1 h-2.5 bg-white rounded-sm"></div>
                            <div className="w-1 h-3 bg-white rounded-sm"></div>
                            <div className="w-1 h-3.5 bg-white rounded-sm"></div>
                        </div>
                        <span className="ml-1">100%</span>
                    </div>
                </div>

                {/* Header */}
                <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white p-4 pb-6">
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <h1 className="text-lg font-bold leading-tight">{plan.name}</h1>
                            <p className="text-teal-100 text-xs mt-1">📅 {plan.startDate} ~ {plan.endDate}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                            <X size={16} />
                        </button>
                    </div>

                    {/* Day Selector */}
                    <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-2xl p-2">
                        <button
                            onClick={() => setCurrentDay(prev => Math.max(1, prev - 1))}
                            disabled={currentDay === 1}
                            className="p-2 rounded-xl hover:bg-white/20 disabled:opacity-30 transition-all"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <div className="text-center">
                            <div className="text-lg font-bold">{t.day} {currentDay}</div>
                            <div className="text-[10px] text-teal-100">{getDateForDay(currentDay)}</div>
                        </div>
                        <button
                            onClick={() => setCurrentDay(prev => Math.min(plan.totalDays, prev + 1))}
                            disabled={currentDay === plan.totalDays}
                            className="p-2 rounded-xl hover:bg-white/20 disabled:opacity-30 transition-all"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto bg-gray-50 pb-20">
                    {slots.map(slot => {
                        const items = daySchedule?.[slot] || [];
                        if (items.length === 0) return null;

                        return (
                            <div key={slot} className="p-4">
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                                    {slotLabels[slot]}
                                </div>
                                <div className="space-y-3">
                                    {items.map((item, idx) => (
                                        <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                            {/* Item Image/Icon */}
                                            <div className="h-20 bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center text-4xl relative">
                                                {item.image || getFallbackImage(item.type)}
                                                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px] font-bold text-teal-700">
                                                    {getItemIcon(item.type)} {item.type}
                                                </div>
                                            </div>

                                            {/* Item Details */}
                                            <div className="p-3">
                                                <h3 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h3>

                                                <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-2">
                                                    {item.startTime && (
                                                        <span className="flex items-center gap-1">
                                                            <Clock size={10} />
                                                            {item.startTime}
                                                        </span>
                                                    )}
                                                    {item.price && (
                                                        <span className="flex items-center gap-1">
                                                            <DollarSign size={10} />
                                                            ¥{item.price.toLocaleString()}
                                                        </span>
                                                    )}
                                                </div>

                                                {item.address && (
                                                    <div className="flex items-start gap-1.5 text-[11px] text-gray-500 mb-2">
                                                        <MapPin size={12} className="flex-shrink-0 mt-0.5" />
                                                        <span className="line-clamp-1">{item.address}</span>
                                                    </div>
                                                )}

                                                {/* Open in Maps Button */}
                                                <button className="w-full mt-2 py-2 bg-teal-50 text-teal-600 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-teal-100 transition-colors">
                                                    <Navigation size={12} />
                                                    {t.openInMaps || '在地圖中查看'}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    {/* Empty State */}
                    {slots.every(slot => (daySchedule?.[slot] || []).length === 0) && (
                        <div className="flex flex-col items-center justify-center h-full text-gray-400 p-8">
                            <div className="text-4xl mb-3">📭</div>
                            <p className="text-sm font-medium">{t.noItems || '這天還沒有安排'}</p>
                        </div>
                    )}
                </div>

                {/* Footer Branding */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-3 px-4">
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                        <div className="w-5 h-5 bg-teal-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-[10px] font-bold">T</span>
                        </div>
                        <span className="text-[11px] font-medium">Created with TravelCanvas</span>
                    </div>
                </div>
            </div>

            {/* Desktop: Close button outside frame */}
            <button
                onClick={onClose}
                className="hidden md:flex absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full items-center justify-center text-white transition-all"
            >
                <X size={24} />
            </button>

            {/* Desktop: Preview label */}
            <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
                📱 {t.mobilePreview || '手機版預覽'} — {t.pressEscToClose || '按 ESC 關閉'}
            </div>
        </div>
    );
};
