import React from 'react';
import { X, Clock, MapPin, Star, Lock, CheckCircle2, User, Sparkles, ArrowRight, ChevronRight } from 'lucide-react';
import { Template, ScheduleItem } from '../../types';

interface TemplatePreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    template: Template | null;
    onApply: (template: Template) => void;
    onUnlock: (template: Template) => void;
    onViewCreator?: (authorId: string) => void; // Navigate to creator profile
    t: any;
    lang?: 'zh' | 'en';
}

export const TemplatePreviewModal: React.FC<TemplatePreviewModalProps> = ({
    isOpen,
    onClose,
    template,
    onApply,
    onUnlock,
    onViewCreator,
    t,
    lang = 'zh'
}) => {
    if (!isOpen || !template) return null;

    const isLocked = template.isLocked && !template.purchased;

    // Unified way to get all items regardless of schedule structure
    const allItems: ScheduleItem[] = ('morning' in template.schedule)
        ? Object.values(template.schedule as DaySchedule).flat()
        : Object.values(template.schedule as FullSchedule).flatMap(day => Object.values(day).flat());

    // Calculate highlights from template data if not provided
    const highlights = template.highlights || {
        days: template.duration,
        spots: allItems.length,
        tips: allItems.filter(item => item.insiderTip).length,
        rating: template.rating || 4.8,
        usageCount: template.copiedCount || 256
    };

    // Generate day previews from schedule if not provided
    const firstDay = ('morning' in template.schedule)
        ? (template.schedule as DaySchedule)
        : (template.schedule as FullSchedule)['Day 1'] || Object.values(template.schedule as FullSchedule)[0];

    const dayPreviews = template.dayPreviews || [
        { day: 1, summary: firstDay?.morning?.slice(0, 3).map((i: ScheduleItem) => i.title).join(' → ') || '行程安排中...' },
    ];

    // Default whatYouGet
    const whatYouGet = template.whatYouGet || (lang === 'zh' ? [
        `完整 ${template.duration} 天行程安排`,
        `${highlights.tips} 個在地人私藏秘訣`,
        '精確地點、地圖座標、最佳時段',
        '避坑指南 (熱門時段/地雷餐廳)',
    ] : [
        `Complete ${template.duration}-day itinerary`,
        `${highlights.tips} insider tips from locals`,
        'Exact locations, map coordinates, best times',
        'Avoid crowds & tourist traps guide',
    ]);

    // Count hidden items
    const hiddenCount = template.hiddenCount ||
        Object.values(template.schedule).flat().filter((item: ScheduleItem) => item.isLocked).length || 2;

    // City-based gradient for cover placeholder
    const getCoverGradient = (region: string) => {
        switch (region) {
            case 'tokyo': return 'from-indigo-500 via-purple-500 to-pink-500';
            case 'kyoto': return 'from-emerald-500 via-teal-500 to-cyan-500';
            case 'osaka': return 'from-orange-500 via-red-500 to-pink-500';
            case 'melbourne': return 'from-amber-500 via-yellow-500 to-lime-500';
            default: return 'from-teal-500 via-emerald-500 to-green-500';
        }
    };

    return (
        <div className="fixed inset-0 z-[1000] flex justify-center items-end md:items-center pointer-events-none">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm pointer-events-auto transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="bg-white w-full max-w-[480px] h-[90vh] md:h-[85vh] md:max-h-[800px] md:rounded-3xl rounded-t-3xl shadow-2xl pointer-events-auto flex flex-col relative overflow-hidden animate-in slide-in-from-bottom-4 duration-300">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                >
                    <X size={18} className="text-gray-600" />
                </button>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto overscroll-contain">

                    {/* ===== 1. COVER IMAGE SECTION ===== */}
                    <div className="relative">
                        {template.coverImage ? (
                            <img
                                src={template.coverImage}
                                alt={template.name}
                                className="w-full h-48 md:h-56 object-cover"
                            />
                        ) : (
                            <div className={`w-full h-48 md:h-56 bg-gradient-to-br ${getCoverGradient(template.region)} flex items-center justify-center`}>
                                <div className="text-white/30 text-6xl">
                                    {template.region === 'tokyo' ? '🗼' :
                                        template.region === 'kyoto' ? '⛩️' :
                                            template.region === 'osaka' ? '🏯' :
                                                template.region === 'melbourne' ? '☕' : '🌏'}
                                </div>
                            </div>
                        )}
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    </div>

                    {/* ===== 2. TITLE & HIGHLIGHTS ===== */}
                    <div className="px-5 -mt-8 relative z-10">
                        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-3">
                            {lang === 'en'
                                ? (template.titleEn || template.nameEn || template.title || template.name)
                                : (template.title || template.name)}
                        </h1>

                        {/* Highlights Bar */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 mb-4">
                            <span className="flex items-center gap-1">
                                <span className="text-base">📅️</span>
                                <span className="font-medium">{highlights.days} {lang === 'zh' ? '天' : 'days'}</span>
                            </span>
                            <span className="text-gray-300">|</span>
                            <span className="flex items-center gap-1">
                                <span className="text-base">📍</span>
                                <span className="font-medium">{highlights.spots} {lang === 'zh' ? '景點' : 'spots'}</span>
                            </span>
                            <span className="text-gray-300">|</span>
                            <span className="flex items-center gap-1">
                                <span className="text-base">💡</span>
                                <span className="font-medium">{highlights.tips} Tips</span>
                            </span>
                            <span className="text-gray-300">|</span>
                            <span className="flex items-center gap-1">
                                <Star size={12} className="text-amber-400 fill-amber-400" />
                                <span className="font-medium">{highlights.rating}</span>
                                {highlights.usageCount && (
                                    <span className="text-gray-400">({highlights.usageCount} {lang === 'zh' ? '次套用' : 'uses'})</span>
                                )}
                            </span>
                        </div>
                    </div>

                    {/* ===== 3. CREATOR CARD ===== */}
                    <div className="px-5 mb-5">
                        <div
                            className={`bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-4 border border-gray-100 ${onViewCreator ? 'cursor-pointer hover:border-teal-200 transition-colors' : ''}`}
                            onClick={() => onViewCreator && onViewCreator(template.authorId)}
                        >
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-teal-200/50">
                                    <User size={20} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-gray-800">
                                            {lang === 'en' && template.authorEn ? template.authorEn : template.author}
                                        </span>
                                        <span className="text-xs text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full font-medium">
                                            {lang === 'zh'
                                                ? (template.region === 'tokyo' ? '東京達人' :
                                                    template.region === 'kyoto' ? '京都達人' :
                                                        template.region === 'osaka' ? '大阪達人' :
                                                            template.region === 'melbourne' ? '墨爾本達人' : '旅遊達人')
                                                : (template.region === 'tokyo' ? 'Tokyo Expert' :
                                                    template.region === 'kyoto' ? 'Kyoto Expert' :
                                                        template.region === 'osaka' ? 'Osaka Expert' :
                                                            template.region === 'melbourne' ? 'Melbourne Local' : 'Travel Expert')}
                                        </span>
                                    </div>
                                    {template.coverStory?.quote && (
                                        <p className="text-sm text-gray-600 italic leading-relaxed">
                                            "{lang === 'en' && template.coverStory?.quoteEn
                                                ? template.coverStory.quoteEn
                                                : template.coverStory.quote}"
                                        </p>
                                    )}
                                    {/* View More Link */}
                                    {onViewCreator && (
                                        <button
                                            className="mt-2 text-xs text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1 group"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onViewCreator(template.authorId);
                                            }}
                                        >
                                            {lang === 'zh' ? '查看更多模板' : 'View more templates'}
                                            <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ===== 4. WHAT YOU'LL GET ===== */}
                    <div className="px-5 mb-5">
                        <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <Sparkles size={14} className="text-amber-500" />
                            {lang === 'zh' ? '這個模板讓你獲得' : 'What You\'ll Get'}
                        </h3>
                        <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-4 space-y-2">
                            {whatYouGet.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 size={16} className="text-amber-500 mt-0.5 shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ===== 5. DAY PREVIEW ===== */}
                    <div className="px-5 mb-5">
                        <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <MapPin size={14} className="text-teal-500" />
                            {lang === 'zh' ? '行程預覽' : 'Itinerary Preview'}
                        </h3>
                        <div className="space-y-2">
                            {/* Show first day from actual schedule */}
                            <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-slate-800 text-white text-[10px] font-black px-2 py-0.5 rounded">
                                        DAY 1
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 flex items-center flex-wrap gap-1">
                                    {[...template.schedule.morning, ...template.schedule.afternoon]
                                        .slice(0, 4)
                                        .map((item: ScheduleItem, idx, arr) => (
                                            <React.Fragment key={idx}>
                                                <span className="font-medium text-gray-800">{item.title}</span>
                                                {idx < arr.length - 1 && (
                                                    <ArrowRight size={12} className="text-gray-300" />
                                                )}
                                            </React.Fragment>
                                        ))
                                    }
                                </p>
                            </div>

                            {/* Blurred preview for remaining days */}
                            {template.duration > 1 && (
                                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 relative overflow-hidden">
                                    <div className="blur-[6px]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="bg-slate-800 text-white text-[10px] font-black px-2 py-0.5 rounded">
                                                DAY 2-{template.duration}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            {lang === 'zh' ? '更多精彩行程等你探索...' : 'More exciting stops to explore...'}
                                        </p>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-xs font-medium text-gray-500 bg-white/90 px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                                            {lang === 'zh' ? '套用後查看完整行程' : 'Apply to see full itinerary'}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ===== 6. HIDDEN CONTENT TEASER ===== */}
                    {hiddenCount > 0 && (
                        <div className="px-5 mb-6">
                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-4 relative overflow-hidden">
                                <div className="flex items-center gap-3">
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-white/60 backdrop-blur-[6px]" />
                                        <Lock size={20} className="text-purple-500 relative z-10" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-bold text-purple-800 mb-1">
                                            🔒 {lang === 'zh' ? `含 ${hiddenCount} 個隱藏秘密景點` : `Includes ${hiddenCount} hidden gems`}
                                        </div>
                                        <p className="text-xs text-purple-600">
                                            {lang === 'zh'
                                                ? 'Beta 期間免費解鎖，錯過不再！'
                                                : 'Unlock for free during Beta!'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Bottom Padding for Sticky Footer */}
                    <div className="h-24" />
                </div>

                {/* ===== 7. STICKY CTA FOOTER ===== */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
                    <div className="flex gap-3">
                        {/* Primary CTA */}
                        <button
                            onClick={() => onApply(template)}
                            className="flex-1 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-teal-200/50 hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            <CheckCircle2 size={18} />
                            {lang === 'zh' ? '一鍵套用' : 'Apply Now'}
                        </button>

                        {/* Secondary CTA - Show only if has locked content */}
                        {isLocked && (
                            <button
                                onClick={() => onUnlock(template)}
                                className="px-4 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-amber-200/50 hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                <Lock size={16} />
                                {lang === 'zh' ? '解鎖' : 'Unlock'}
                            </button>
                        )}
                    </div>

                    {/* Beta Badge */}
                    <p className="text-center text-[10px] text-gray-400 mt-2">
                        🎁 {lang === 'zh' ? 'Beta 期間所有內容免費解鎖' : 'All content unlocked free during Beta'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TemplatePreviewModal;
