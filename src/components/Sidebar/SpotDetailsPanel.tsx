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
            {/* Header Toolbar - Lightweight & Floats on Scroll */}
            <div className="sticky top-0 z-50 px-5 py-3 bg-white/60 backdrop-blur-2xl flex items-center justify-between border-b border-slate-100/50">
                {sidebarMode !== 'map' ? (
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 shadow-sm border border-slate-100 hover:bg-white transition-all active:scale-90"
                    >
                        <ChevronLeft size={20} strokeWidth={3} />
                    </button>
                ) : (
                    <div className="flex items-center gap-2 text-slate-900 bg-slate-50/50 px-4 py-2 rounded-full border border-slate-100">
                        <MapPin size={16} className="text-teal-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest">{t.spotDetails}</span>
                    </div>
                )}
                <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-white shadow-sm border border-slate-100 active:scale-90">
                        <Share2 size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-white shadow-sm border border-slate-100 active:scale-90">
                        <MoreHorizontal size={18} />
                    </button>
                </div>
            </div>

            {/* Scrollable Content Section */}
            <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth pb-32">
                {/* 1. HERO VISUAL (IG-STYLE TOP FOCUS) */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <div className={`w-full h-full transition-all duration-700 ease-out ${isAnimating ? 'opacity-0 scale-110 blur-xl' : 'opacity-100 scale-100 blur-0'}`}>
                        <img
                            src={activeRec.coverImage || `https://source.unsplash.com/800x800/?${encodeURIComponent(activeRec.title || 'travel')}`}
                            className="w-full h-full object-cover"
                            alt={displayName}
                            onError={(e) => {
                                (e.target as any).src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800';
                            }}
                        />
                        {/* Gradient Overlay for Text Readability if needed */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                </div>

                {/* 2. CREATOR BAR (LIGHTWEIGHT IG HEADER) */}
                {(allRecommendations.length > 0 || activeRec.authorId) && (
                    <div className="px-6 -mt-8 relative z-10">
                        <div className="glass-card p-3 px-5 rounded-[2.5rem] shadow-2xl flex items-center justify-between border-white/50">
                            <div className="flex items-center gap-3">
                                <div className="relative group">
                                    {/* Animated Ring for "Story" feel */}
                                    <div className="absolute -inset-1 bg-instagram-gradient rounded-full animate-rainbow-slow opacity-75 blur-[2px]" />
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white bg-slate-100 shadow-inner">
                                        <img
                                            src={author?.avatar || `https://i.pravatar.cc/100?u=${activeRec.authorId || 'official'}`}
                                            className="w-full h-full object-cover"
                                            alt="avatar"
                                            onError={(e) => {
                                                (e.target as any).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(author?.name || activeRec.author || 'O')}&background=random`;
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">
                                        {t.recommendedBy}
                                    </span>
                                    <span className="text-sm font-black text-slate-900 leading-tight">
                                        {lang === 'en' && author?.nameEn ? author.nameEn : (author?.name || activeRec.author || (lang === 'zh' ? '官方指南' : 'Official Guide'))}
                                    </span>
                                </div>
                            </div>
                            {author && (
                                <button
                                    onClick={() => author && onToggleSubscribe(author.id)}
                                    className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all active:scale-95 flex items-center gap-1.5 ${isSubscribed
                                        ? 'bg-slate-100 text-slate-500'
                                        : 'bg-teal-500 text-white shadow-lg shadow-teal-500/20'
                                        }`}
                                >
                                    {isSubscribed ? <Check size={12} strokeWidth={3} /> : <Plus size={12} strokeWidth={3} />}
                                    {isSubscribed ? t.following : t.follow}
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {/* 3. SPOT INFO PANEL */}
                <div className="px-6 pt-10 pb-6">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-2.5 py-1 bg-teal-50 text-teal-600 text-[10px] font-black rounded-lg border border-teal-100 uppercase tracking-widest">
                            {activeRec.type || 'Attraction'}
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 font-black text-xs">
                            <Star size={12} fill="currentColor" />
                            <span>{{ rating: activeRec.rating || 4.8 }.rating}</span>
                        </div>
                    </div>

                    <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-2 leading-tight">
                        {displayName}
                    </h2>

                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold">
                        <MapPin size={14} className="text-slate-300" />
                        <span className="leading-relaxed opacity-75">{displayAddress}</span>
                    </div>
                </div>

                {/* 4. INSIDER TIPS (GLASSMORPHISM STYLE) */}
                {((activeRec as any).insiderTip || (activeRec as any).tips) && (
                    <div className="px-5 mb-8">
                        <div className="glass-card p-8 pt-10 rounded-[2.5rem] relative overflow-hidden group border-white/40 shadow-xl shadow-slate-100">
                            {/* Background Decor */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-200/10 rounded-full blur-3xl -mr-16 -mt-16" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-200/10 rounded-full blur-3xl -ml-16 -mb-16" />

                            <div className="relative z-10 flex flex-col gap-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-teal-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
                                            <Star size={20} strokeWidth={2.5} />
                                        </div>
                                        <h3 className="text-xl font-black text-slate-900 tracking-tight">{t.insiderTips}</h3>
                                    </div>
                                    {allRecommendations.length > 1 && (
                                        <div className="flex gap-2">
                                            {allRecommendations.map((rec, idx) => {
                                                const recAuthor = SAMPLE_CREATORS.find(c => c.id === rec.authorId);
                                                return (
                                                    <button
                                                        key={idx}
                                                        onClick={() => handleSwitchAuthor(idx)}
                                                        className={`relative w-9 h-9 rounded-full transition-all duration-300 p-0.5 ${activeIndex === idx ? 'bg-instagram-gradient scale-110 shadow-lg' : 'bg-slate-200 scale-90 opacity-60 hover:opacity-100'}`}
                                                    >
                                                        <div className="w-full h-full rounded-full border-2 border-white overflow-hidden bg-white">
                                                            <img
                                                                src={recAuthor?.avatar || `https://i.pravatar.cc/100?u=${rec.authorId}`}
                                                                className="w-full h-full object-cover"
                                                                alt="avatar"
                                                                onError={(e) => {
                                                                    (e.target as any).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(recAuthor?.name || 'X')}&background=random`;
                                                                }}
                                                            />
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>

                                <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                                    {((activeRec as any).insiderTip?.teaser || (activeRec as any).insiderTip?.teaserEn) && (
                                        <h4 className="text-lg font-black text-slate-900 leading-snug mb-4 text-gradient-teal">
                                            {lang === 'zh' ? (activeRec as any).insiderTip?.teaser : ((activeRec as any).insiderTip?.teaserEn || (activeRec as any).insiderTip?.teaser)}
                                        </h4>
                                    )}
                                    <div className="w-8 h-1 bg-slate-200 rounded-full mb-6" />
                                    <p className="text-sm text-slate-600 leading-relaxed font-medium italic relative">
                                        <span className="text-3xl text-slate-200 absolute -top-4 -left-2 opacity-50 font-serif">"</span>
                                        {lang === 'zh'
                                            ? ((activeRec as any).insiderTip?.full?.story || activeRec.tips || activeRec.description)
                                            : ((activeRec as any).insiderTip?.full?.storyEn || (activeRec as any).insiderTip?.full?.story || activeRec.tips || activeRec.descriptionEn || activeRec.description)
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }

                {/* Tags Section */}
                <div className="flex flex-wrap gap-2 px-6 mb-12">
                    {['#MustVisit', '#PhotoGenic', '#LocalStyle'].map((tag, i) => (
                        <span key={i} className="px-4 py-2 bg-slate-50 text-slate-400 text-[10px] font-black rounded-xl border border-slate-100 uppercase tracking-widest">
                            {tag}
                        </span>
                    ))}
                </div>
            </div >

            {/* Sticky Actions Bar - Floating Glass Pill */}
            < div className="absolute bottom-6 left-6 right-6 flex gap-3 z-50" >
                <button
                    onClick={() => onAddItem(activeRec)}
                    className="flex-1 h-16 bg-slate-900 text-white rounded-[2rem] text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-slate-900/40 active:scale-95 transition-all"
                >
                    <Plus size={20} strokeWidth={3} />
                    {t.addToPlan}
                </button>
                <button className="w-16 h-16 flex items-center justify-center text-slate-400 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:text-pink-500 hover:border-pink-100 transition-all active:scale-90 group">
                    <Heart size={22} className="group-hover:fill-pink-500 transition-colors" />
                </button>
            </div >
        </div >
    );
};
