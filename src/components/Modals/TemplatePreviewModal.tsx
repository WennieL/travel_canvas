import React from 'react';
import { X, Clock, MapPin, Star, Lock, CheckCircle2, Navigation, Camera, Utensils } from 'lucide-react';
import { Template, ScheduleItem } from '../../types';

interface TemplatePreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    template: Template | null;
    onApply: (template: Template) => void;
    onUnlock: (template: Template) => void;
    t: any;
}

export const TemplatePreviewModal: React.FC<TemplatePreviewModalProps> = ({
    isOpen,
    onClose,
    template,
    onApply,
    onUnlock,
    t
}) => {
    if (!isOpen || !template) return null;

    const isLocked = template.isLocked && !template.purchased;

    // Helper to get icon for type
    const getItemIcon = (type: string) => {
        switch (type) {
            case 'food': return <Utensils size={16} className="text-orange-500" />;
            case 'attraction': return <Camera size={16} className="text-blue-500" />;
            case 'transport': return <Navigation size={16} className="text-teal-500" />;
            default: return <MapPin size={16} className="text-rose-500" />;
        }
    };

    const renderTimelineItem = (item: ScheduleItem, index: number, isLast: boolean, blur: boolean = false) => (
        <div key={index} className={`relative pl-8 ${blur ? 'blur-[5px]' : ''}`}>
            {/* Timeline Line */}
            {!isLast && (
                <div className="absolute left-[11px] top-8 bottom-[-24px] w-[2px] bg-gray-200"></div>
            )}

            {/* Timeline Dot */}
            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-teal-100 flex items-center justify-center shadow-sm z-10">
                <div className="w-2 h-2 rounded-full bg-teal-400"></div>
            </div>

            {/* Time */}
            <div className="absolute left-[-60px] top-1.5 text-xs font-medium text-gray-400 w-12 text-right">
                {item.startTime || (index === 0 ? '09:00 AM' : index === 1 ? '01:00 PM' : '06:00 PM')}
            </div>

            {/* Card */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-teal-200 transition-colors group">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-xl shrink-0 group-hover:bg-teal-50 transition-colors">
                        {item.image || getItemIcon(item.type)}
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-800 text-sm leading-tight mb-1">{item.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded">
                                <Clock size={10} /> {item.duration}
                            </span>
                            {(item.price || 0) > 0 && (
                                <span className="text-gray-400">¥{(item.price || 0).toLocaleString()}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderDaySection = (dayNum: number, title: string, items: any[], locked: boolean = false) => (
        <div className="relative pl-14 md:pl-0">
            {/* Day Header */}
            <div className="flex items-center gap-3 mb-6 relative">
                {/* Mobile: Day Badge is absolute left */}
                <div className="bg-slate-800 text-white text-[10px] font-black px-2 py-1 rounded tracking-wider shadow-lg shadow-slate-200 z-10">
                    DAY {dayNum}
                </div>
                <h3 className={`font-bold text-slate-400 text-sm tracking-wide ${locked ? 'blur-[4px]' : ''}`}>{title}</h3>

                {/* Horizontal Divider */}
                <div className="h-[1px] bg-gray-100 flex-1 ml-2"></div>
            </div>

            {/* Timeline Container */}
            <div className="space-y-6 relative md:ml-16 border-l-2 border-gray-100 md:border-l-0 md:pl-0 pl-6 border-l-transparent">

                {/* Vertical Line for Desktop - connecting items */}
                <div className="hidden md:block absolute left-[11px] top-2 bottom-0 w-[2px] bg-gray-100"></div>

                <div className="space-y-6">
                    {items.map((item, idx) => renderTimelineItem(item, idx, idx === items.length - 1, locked))}
                </div>

                {/* Lock Overlay */}
                {locked && (
                    <div className="absolute inset-x-0 -top-10 bottom-0 z-20 flex flex-col items-center justify-center pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white/90 backdrop-blur-[1px]"></div>
                        <div className="bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/50 text-center transform scale-100 pointer-events-auto max-w-[240px]">
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner">
                                <Lock size={24} />
                            </div>
                            <h4 className="font-bold text-gray-800 mb-1">Unlock Full Itinerary</h4>
                            <p className="text-xs text-slate-500 leading-relaxed mb-4">
                                Get full access to detailed scheduling, hidden gems, and pro tips for all {template.duration} days.
                            </p>
                            <button
                                onClick={() => onUnlock(template)}
                                className="w-full py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-teal-200/50"
                            >
                                Unlock for $0.99
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

    // Mock Data construction for preview
    const day1Items = [
        ...template.schedule.morning,
        ...template.schedule.afternoon
    ].slice(0, 4); // Limit to 4 items for layout

    const day2Items = [
        { title: 'Asakusa Temple', type: 'attraction', startTime: '09:00 AM', duration: '2hr', price: 0 },
        { title: 'Shibuya Crossing', type: 'attraction', startTime: '01:00 PM', duration: '30min', price: 0 },
        { title: 'Meiji Shrine', type: 'attraction', startTime: '02:00 PM', duration: '1.5hr', price: 0 },
        { title: 'Ichiran Ramen', type: 'food', startTime: '06:00 PM', duration: '1hr', price: 1500 },
    ];

    return (
        <div className="fixed inset-0 z-[70] flex justify-center items-center pointer-events-none">
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm pointer-events-auto transition-opacity duration-300"
                onClick={onClose}
            />

            <div className="bg-[#F8FAFC] w-full max-w-[480px] h-[85vh] md:h-[800px] md:max-h-[90vh] md:rounded-3xl shadow-2xl pointer-events-auto flex flex-col relative overflow-hidden animate-in zoom-in-95 duration-300 border border-white/20">
                {/* Header */}
                <div className="bg-white px-6 py-5 border-b border-gray-100 sticky top-0 z-30 flex items-start justify-between shadow-sm/50">
                    <div>
                        <h2 className="text-xl font-black text-slate-800 leading-tight mb-2">
                            {template.name}
                        </h2>
                        <div className="flex items-center gap-3">
                            <span className="bg-teal-50 text-teal-700 text-[10px] font-bold px-2.5 py-1 rounded-md border border-teal-100">
                                {template.duration} Days
                            </span>
                            <span className="flex items-center gap-1 text-[11px] font-bold text-amber-500 bg-amber-50 px-2 py-1 rounded-md border border-amber-100">
                                <Star size={10} fill="currentColor" /> {template.rating}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 -mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
                    <div className="space-y-12 pb-20">
                        {renderDaySection(1, 'Arrival & Exploration', day1Items)}

                        {template.duration > 1 && renderDaySection(2, 'City Tour & Hidden Gems', day2Items, isLocked)}

                        {template.duration > 2 && (
                            <div className="opacity-50 blur-[2px]">
                                {renderDaySection(3, 'Deep Dive Culture', day2Items.slice(0, 2), isLocked)}
                            </div>
                        )}
                    </div>
                </div>

                {/* Sticky Footer */}
                <div className="p-5 bg-white border-t border-gray-100 sticky bottom-0 z-30 shadow-[0_-5px_20px_-10px_rgba(0,0,0,0.1)]">
                    {isLocked ? (
                        <button
                            onClick={() => onUnlock(template)}
                            className="w-full py-4 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-teal-200/50 hover:shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            <div className="w-5 h-5 rounded-full border-2 border-white/30 flex items-center justify-center">
                                <CheckCircle2 size={12} className="text-white opacity-0 group-hover:opacity-100" />
                            </div>
                            Unlock for $0.99
                        </button>
                    ) : (
                        <button
                            onClick={() => onApply(template)}
                            className="w-full py-4 bg-gray-900 hover:bg-black text-white rounded-2xl font-bold text-sm shadow-xl hover:shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            <CheckCircle2 size={18} className="text-teal-400" />
                            Apply This Plan
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
