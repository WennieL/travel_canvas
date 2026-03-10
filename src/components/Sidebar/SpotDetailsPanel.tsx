import React, { useState, useEffect } from 'react';
import { TravelItem, ScheduleItem, Creator, LangType } from '../../types';
import { SAMPLE_CREATORS } from '../../data';
import { ChevronLeft, Share2, MoreHorizontal, Heart, Plus, MapPin, Star, UserPlus, Check } from 'lucide-react';

interface SpotDetailsPanelProps {
    item: TravelItem | ScheduleItem;
    allRecommendations?: TravelItem[];
    subscribedCreators: string[];
    onToggleSubscribe: (creatorId: string) => void;
    onAddItem: (item: TravelItem) => void;
    onClose: () => void;
    lang: LangType;
    preferredAuthorId?: string | null;
    sidebarMode?: 'list' | 'map';
}

export const SpotDetailsPanel: React.FC<SpotDetailsPanelProps> = ({
    item,
    allRecommendations = [],
    subscribedCreators,
    onToggleSubscribe,
    onAddItem,
    onClose,
    lang,
    preferredAuthorId,
    sidebarMode
}) => {
    // State for the focused recommendation (if multiple experts exist)
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Initial setup: If there are recommendations, find the first followed one or default to the first
    useEffect(() => {
        if (allRecommendations.length > 0) {
            // Priority 1: Preferred Author (e.g. Creator whose plan we are viewing)
            if (preferredAuthorId) {
                const prefIdx = allRecommendations.findIndex(r => r.authorId === preferredAuthorId);
                if (prefIdx !== -1) {
                    setActiveIndex(prefIdx);
                    return;
                }
            }

            // Priority 2: Followed Author
            const followedIdx = allRecommendations.findIndex(r => r.authorId && subscribedCreators.includes(r.authorId));
            if (followedIdx !== -1) {
                setActiveIndex(followedIdx);
            } else {
                setActiveIndex(0);
            }
        }
    }, [allRecommendations, subscribedCreators, preferredAuthorId]);

    const handleSwitchAuthor = (idx: number) => {
        if (idx === activeIndex) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveIndex(idx);
            setIsAnimating(false);
        }, 300);
    };

    const activeRec = allRecommendations.length > 0 ? allRecommendations[activeIndex] : (item as TravelItem);
    const author = SAMPLE_CREATORS.find(c => c.id === activeRec.authorId);
    const isSubscribed = author ? subscribedCreators.includes(author.id) : false;

    // Translation helpers
    const t = {
        spotDetails: lang === 'zh' ? '景點詳情' : 'Spot Details',
        insiderTips: lang === 'zh' ? '達人私藏' : 'Insider Tips',
        readFull: lang === 'zh' ? '閱讀完整故事' : 'Read Full Story',
        addToPlan: lang === 'zh' ? '加入行程' : 'Add to Plan',
        saveSpot: lang === 'zh' ? '儲存景點' : 'Save Spot',
        recommendedBy: lang === 'zh' ? '推薦達人' : 'Recommended By',
        follow: lang === 'zh' ? '關注' : 'Follow',
        following: lang === 'zh' ? '已關注' : 'Following',
    };

    const displayName = lang === 'zh' ? activeRec.title : ((activeRec as any).titleEn || activeRec.title);
    const displayAddress = lang === 'zh' ? activeRec.address : ((activeRec as any).addressEn || activeRec.address);

    return (
        <div className="flex flex-col h-full bg-white animate-in slide-in-from-right duration-300 relative overflow-hidden">
            {/* Immersive Header Toolbar */}
            <div className="sticky top-0 z-50 px-5 py-4 bg-white/80 backdrop-blur-xl border-b border-gray-100 flex items-center justify-between">
                {sidebarMode !== 'map' ? (
                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 text-slate-900 hover:text-teal-600 transition-all py-1.5 px-3 -ml-3 rounded-xl hover:bg-slate-50 group"
                    >
                        <ChevronLeft size={22} strokeWidth={2.5} className="group-hover:-translate-x-0.5 transition-transform" />
                        <span className="text-xs font-black uppercase tracking-[0.15em]">{t.spotDetails}</span>
                    </button>
                ) : (
                    <div className="flex items-center gap-2 text-slate-900 py-1.5 rounded-xl">
                        <MapPin size={20} className="text-teal-500" />
                        <span className="text-xs font-black uppercase tracking-[0.15em]">{t.spotDetails}</span>
                    </div>
                )}
                <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-teal-50 hover:text-teal-600 transition-all border border-slate-100 active:scale-90">
                        <Share2 size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-teal-50 hover:text-teal-600 transition-all border border-slate-100 active:scale-90">
                        <MoreHorizontal size={18} />
                    </button>
                </div>
            </div>

            {/* Scrollable Content Section */}
            <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth pb-32">
                {/* 1. FOCUS CREATOR CARD (Top-aligned dark pill design - Image 3) */}
                {allRecommendations.length > 0 && (
                    <div className="px-5 pt-6 pb-2">
                        <div className="flex items-center justify-between p-4 bg-slate-900 rounded-[2rem] shadow-xl border border-slate-800">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full ring-2 ring-teal-500/30 overflow-hidden border-2 border-slate-800 shadow-inner">
                                    <img
                                        src={author?.avatar || `https://i.pravatar.cc/100?u=${activeRec.authorId}`}
                                        className="w-full h-full object-cover"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest leading-none mb-1">
                                        {t.recommendedBy}
                                    </span>
                                    <span className="text-sm font-black text-white leading-tight">
                                        {author?.name || 'Expert'}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => author && onToggleSubscribe(author.id)}
                                className={`px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2 ${isSubscribed
                                    ? 'bg-slate-800 text-teal-400 border border-slate-700'
                                    : 'bg-teal-500 text-white shadow-lg shadow-teal-500/20 hover:bg-teal-400'
                                    }`}
                            >
                                {isSubscribed ? <><Check size={12} strokeWidth={3} /> {t.following}</> : <><Plus size={12} strokeWidth={3} /> {t.follow}</>}
                            </button>
                        </div>
                    </div>
                )}

                {/* 2. SPOT INFO (MIDDLE TITLE & RATING) */}
                <div className="px-6 py-6 pb-4">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-0.5 bg-gray-900 text-white text-[9px] font-black rounded uppercase tracking-wider">
                            {activeRec.type || 'Attraction'}
                        </span>
                        <div className="flex items-center gap-0.5 text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                            <Star size={10} fill="currentColor" />
                            <span className="text-[10px] font-black">4.8</span>
                        </div>
                    </div>

                    <h2 className="text-2xl font-black tracking-tight text-slate-800 mb-2 leading-tight">
                        {displayName}
                    </h2>

                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold mb-4">
                        <MapPin size={14} className="text-teal-500" />
                        <span className="leading-relaxed">{displayAddress || 'Tokyo, Japan'}</span>
                    </div>
                </div>

                {/* 3. MAIN SPOT IMAGE */}
                <div className="px-5 mb-6">
                    <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-xl shadow-slate-200 border border-gray-100">
                        <div className={`w-full h-full transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
                            <img
                                src={activeRec.coverImage || `https://source.unsplash.com/800x600/?${encodeURIComponent(activeRec.title || 'travel')}`}
                                className="w-full h-full object-cover"
                                alt={displayName}
                            />
                        </div>
                    </div>
                </div>

                {/* Optional Badges/Tags */}
                <div className="flex flex-wrap gap-1.5 mb-8 px-5">
                    {['#PhotoSpot', '#HiddenGem', '#LocalFavorite', '#MustTry'].map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-50 text-slate-400 text-[9px] font-black rounded-lg border border-slate-100/50 uppercase tracking-wider hover:bg-teal-50 hover:text-teal-600 transition-colors cursor-default">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* 4. INSIDER TIPS SECTION */}
                <div className="px-6 py-8 bg-gradient-to-b from-white to-slate-50/50 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-6 bg-teal-500 rounded-full" />
                            <h3 className="text-lg font-black text-slate-900 tracking-tight">{t.insiderTips}</h3>
                        </div>
                        {allRecommendations.length > 1 && (
                            <div className="flex gap-1.5 bg-slate-100/50 p-1.5 rounded-2xl border border-slate-100">
                                {allRecommendations.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSwitchAuthor(idx)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-teal-500 w-6 shadow-[0_0_10px_rgba(20,184,166,0.3)]' : 'bg-slate-300 hover:bg-slate-400'}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {allRecommendations.length > 0 ? (
                        <div className={`transition-all duration-300 transform ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                            <div className="p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50/50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                                <div className="relative z-10 flex flex-col gap-5">
                                    <div className="text-3xl">💡</div>
                                    <div className="flex flex-col gap-3">
                                        <h4 className="text-lg font-black text-slate-900 leading-tight">
                                            {lang === 'zh' ? (activeRec as any).insiderTip?.teaser : ((activeRec as any).insiderTip?.teaserEn || (activeRec as any).insiderTip?.teaser)}
                                        </h4>
                                        <div className="w-10 h-1 bg-teal-500/20 rounded-full" />
                                        <p className="text-sm text-slate-600 leading-relaxed font-medium italic">
                                            "{lang === 'zh' ? (activeRec as any).insiderTip?.full?.story : ((activeRec as any).insiderTip?.full?.storyEn || (activeRec as any).insiderTip?.full?.story)}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* [PHASE 25] NO RECOMMENDATION STATE */
                        <div className="bg-slate-50 rounded-[2.5rem] p-10 flex flex-col items-center text-center border-2 border-dashed border-slate-200">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-sm mb-6 animate-bounce">
                                ✨
                            </div>
                            <h4 className="text-lg font-black text-slate-900 mb-3">
                                {lang === 'zh' ? '這區還沒人帶路' : 'Secret Domain Detected'}
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed italic mb-8 max-w-[240px]">
                                {lang === 'zh' ? '這區域還沒有達人推薦...你要當第一個分享私房景點的人嗎？' : "No experts have recommended this area yet... want to be the first to share your hidden gems?"}
                            </p>
                            <button className="px-8 py-4 bg-slate-900 text-white text-[10px] font-black rounded-2xl uppercase tracking-[0.2em] shadow-xl hover:bg-teal-600 transition-all active:scale-95">
                                {lang === 'zh' ? '我也要成為達人' : 'Become an Expert'}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Sticky Actions Bar (Always Visible at bottom - Image 4) */}
            <div className="absolute bottom-0 left-0 right-0 p-6 pt-4 bg-white/90 backdrop-blur-2xl flex gap-4 z-50">
                <button
                    onClick={() => onAddItem(activeRec)}
                    className="flex-1 h-14 bg-slate-900 text-white rounded-[1.25rem] text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-black active:scale-[0.98] transition-all shadow-xl shadow-slate-900/20 group"
                >
                    <Plus size={20} strokeWidth={3} className="group-hover:rotate-90 transition-transform duration-300" />
                    {t.addToPlan}
                </button>
                <button className="w-14 h-14 flex items-center justify-center text-slate-400 rounded-[1.25rem] border border-slate-200 hover:border-pink-200 hover:text-pink-500 hover:bg-pink-50 transition-all active:scale-[0.95] bg-white shadow-sm">
                    <Heart size={20} />
                </button>
            </div>
        </div>
    );
};
