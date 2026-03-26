import React, { useState, useEffect } from 'react';
import { TravelItem, ScheduleItem, Creator, LangType } from '../../types';
import { SAMPLE_CREATORS } from '../../data';
import { ChevronLeft, Share2, Heart, Plus, MapPin, Star, Check, Clock, DollarSign, Utensils, Navigation, Info } from 'lucide-react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface SpotDetailsPanelProps {
    item: TravelItem | ScheduleItem;
    allRecommendations?: TravelItem[];
    subscribedCreators: string[];
    onToggleSubscribe: (creatorId: string) => void;
    onAddItem: (item: TravelItem) => void;
    onUpdateItem?: (slot: string, index: number, updates: Partial<ScheduleItem>) => void;
    showToastMessage?: (msg: string, type: 'success' | 'error') => void;
    onClose: () => void;
    lang: LangType;
    preferredAuthorId?: string | null;
    sidebarMode?: 'list' | 'map';
    hideHeader?: boolean;
    onCreatorClick?: (creatorId: string) => void;
}

export const SpotDetailsPanel: React.FC<SpotDetailsPanelProps> = ({
    item,
    subscribedCreators,
    onToggleSubscribe,
    onAddItem,
    onUpdateItem,
    showToastMessage,
    onClose,
    lang,
    preferredAuthorId,
    sidebarMode,
    hideHeader = false,
    onCreatorClick
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const recs = (item as TravelItem).recommendations || [];
        if (recs.length > 0) {
            const scheduleItem = item as ScheduleItem;
            if (scheduleItem.selectedRecommendationId) {
                const activeIdx = recs.findIndex(r => r.id === scheduleItem.selectedRecommendationId);
                if (activeIdx !== -1) { setActiveIndex(activeIdx); return; }
            }
            if (preferredAuthorId) {
                const prefIdx = recs.findIndex(r => r.id === preferredAuthorId);
                if (prefIdx !== -1) { setActiveIndex(prefIdx); return; }
            }
            const followedIdx = recs.findIndex(r => r.id && subscribedCreators.includes(r.id));
            setActiveIndex(followedIdx !== -1 ? followedIdx : 0);
        }
    }, [item, subscribedCreators, preferredAuthorId]);

    const handleSwitchAuthor = (idx: number) => {
        if (idx === activeIndex) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveIndex(idx);
            setIsAnimating(false);
        }, 300);
    };

    const recommendations = (item as TravelItem).recommendations || [];
    const activeRec = recommendations.length > 0 ? recommendations[activeIndex] : (item as any);
    const authorId = activeRec.id || activeRec.authorId;
    const author = SAMPLE_CREATORS.find(c => c.id === authorId);
    const isSubscribed = author ? subscribedCreators.includes(author.id) : false;

    const t = {
        cost: lang === 'zh' ? '花費' : 'COST',
        duration: lang === 'zh' ? '建議時長' : 'BEST DURATION',
        region: lang === 'zh' ? '地區' : 'REGION',
        category: lang === 'zh' ? '分類' : 'CATEGORY',
        insiderTips: lang === 'zh' ? '達人私藏' : 'Insider Tips',
        exactLocation: lang === 'zh' ? '精確位置' : 'EXACT LOCATION',
        mustTry: lang === 'zh' ? '必喝/必吃' : 'MUST TRY',
        bestTime: lang === 'zh' ? '建議時段' : 'BEST TIME',
        avoid: lang === 'zh' ? '避雷指南' : 'AVOID',
        moreExperts: lang === 'zh' ? '達人看點' : "What Travelers Say",
        addToPlan: lang === 'zh' ? '加到我的行程' : 'ADD TO MY ITINERARY',
        googleMaps: lang === 'zh' ? '地圖預覽' : 'GOOGLE MAPS',
    };

    const displayName = lang === 'zh' ? item.title : ((item as any).titleEn || item.title);
    const displayAddress = lang === 'zh' ? item.address : ((item as any).addressEn || item.address);
    const displayRegion = (item.region || 'Melbourne').toUpperCase();

    const position: [number, number] = item.lat && item.lng ? [item.lat, item.lng] : [-37.8136, 144.9631];

    return (
        <div className="flex flex-col h-full bg-[#F7FBF0] relative overflow-hidden font-sans">
            {/* 1. Transparent Floating Header - Minimalist (Just Close) */}
            {!hideHeader && (
                <div className="absolute top-0 left-0 right-0 z-[100] px-6 py-10 flex items-center justify-between pointer-events-none">
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-black/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-all pointer-events-auto"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    {/* Secondary actions moved to bottom utility bar */}
                </div>
            )}

            <div className="flex-1 overflow-y-auto no-scrollbar pb-40">
                {/* 2. Hero Section - Flush with Top */}
                <div className="relative w-full aspect-[4/5] md:aspect-video">
                    {/* Pull Handle Overlay for Mobile - only show in drawer mode */}
                    {!hideHeader && (
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/30 rounded-full z-[110]" />
                    )}
                    
                    <img
                        src={activeRec.coverImage || item.image || item.coverImage}
                        className="w-full h-full object-cover"
                        alt={displayName}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#000000cc] via-transparent to-transparent flex flex-col justify-end p-8 pb-14">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-2.5 py-0.5 bg-tc-primary text-white text-[10px] font-bold rounded-full uppercase">
                                {item.type || 'COFFEE'}
                            </span>
                            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-white/10 backdrop-blur-md rounded-full text-white font-bold text-xs border border-white/20">
                                <Star size={12} fill="#FBC02D" className="text-[#FBC02D]" />
                                <span>{item.rating || 4.9}</span>
                            </div>
                        </div>
                        <h1 className="text-[32px] font-heading font-black text-white leading-[1.1] tracking-tight max-w-[90%] mb-2">
                            {displayName}
                        </h1>
                        <p className="text-white/60 text-xs font-semibold tracking-wide">
                            {displayAddress}
                        </p>
                    </div>
                </div>

                {/* 3. Expert Voice Card - Redesigned to be Center-aligned */}
                <div className="px-6 -mt-10 relative z-10">
                    <div className="bg-white px-8 py-10 rounded-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-[#E8EDE4] flex flex-col items-center text-center">
                        <div className="relative mb-6">
                            <button 
                                onClick={() => author && onCreatorClick?.(author.id)}
                                className="group active:scale-95 transition-transform"
                            >
                                <img
                                    src={author?.avatar || `https://i.pravatar.cc/100?u=${authorId}`}
                                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg group-hover:border-tc-primary transition-colors"
                                    alt={author?.name}
                                />
                            </button>
                            <button
                                onClick={() => author && onToggleSubscribe(author.id)}
                                className={`absolute -right-1 bottom-1 w-7 h-7 rounded-full flex items-center justify-center text-white border-4 border-white transition-all ${isSubscribed ? 'bg-tc-primary scale-110' : 'bg-[#0D631B]'}`}
                            >
                                {isSubscribed ? <Check size={14} /> : <Plus size={14} />}
                            </button>
                        </div>
                        
                        <div className="mb-6 flex flex-col items-center">
                            <button 
                                onClick={() => author && onCreatorClick?.(author.id)}
                                className="hover:text-tc-primary transition-colors"
                            >
                                <h4 className="text-[18px] font-bold text-tc-primary leading-tight mb-0.5">
                                    {lang === 'zh' ? author?.name : (author?.nameEn || author?.name)}
                                </h4>
                            </button>
                            <span className="text-[10px] font-bold text-[#8E9285] uppercase tracking-[0.2em]">
                                {lang === 'zh' ? author?.role : (author?.roleEn || author?.role)}
                            </span>
                        </div>

                        <p className="text-[15px] leading-[1.8] text-[#44493F] italic font-medium max-w-[90%]">
                            "{lang === 'zh' ? activeRec.insiderTip?.teaser : (activeRec.insiderTip?.teaserEn || activeRec.insiderTip?.teaser)}"
                        </p>
                    </div>
                </div>

                {/* 4. Data Cards Grid - Icons on the Left */}
                <div className="grid grid-cols-2 gap-3 px-6 mt-10">
                    {[
                        { label: t.cost, value: `$${activeRec.pricing || item.price || 0}`, icon: <DollarSign size={20} /> },
                        { label: t.duration, value: activeRec.duration || item.duration || '45 min', icon: <Clock size={20} /> },
                        { label: t.region, value: displayRegion, icon: <MapPin size={20} /> },
                        { label: t.category, value: (item.type || 'Coffee').toUpperCase(), icon: <Utensils size={20} /> },
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-4 py-5 rounded-[20px] shadow-sm flex items-center gap-4 border border-[#E8EDE4]/50">
                            <div className="w-10 h-10 rounded-xl bg-tc-primary/5 flex items-center justify-center text-tc-primary flex-shrink-0">
                                {card.icon}
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-[9px] font-bold text-[#8E9285] uppercase tracking-wide truncate">{card.label}</span>
                                <span className="text-[15px] font-black text-[#181D17] truncate">{card.value}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 5. Insider Tips Section */}
                <div className="px-6 mt-12">
                    <h3 className="text-[20px] font-heading font-black text-[#181D17] mb-6 flex items-center gap-2">
                        {t.insiderTips}
                    </h3>
                    <div className="flex flex-col gap-4">
                        {[
                            { label: t.exactLocation, value: lang === 'zh' ? activeRec.insiderTip?.full?.exactLocation : (activeRec.insiderTip?.full?.exactLocationEn || activeRec.insiderTip?.full?.exactLocation), icon: <MapPin size={18} /> },
                            { label: t.mustTry, value: lang === 'zh' ? activeRec.insiderTip?.full?.mustTry : (activeRec.insiderTip?.full?.mustTryEn || activeRec.insiderTip?.full?.mustTry), icon: <Utensils size={18} /> },
                            { label: t.bestTime, value: lang === 'zh' ? activeRec.insiderTip?.full?.bestTime : (activeRec.insiderTip?.full?.bestTimeEn || activeRec.insiderTip?.full?.bestTime), icon: <Clock size={18} /> },
                            { label: t.avoid, value: lang === 'zh' ? activeRec.insiderTip?.full?.avoid : (activeRec.insiderTip?.full?.avoidEn || activeRec.insiderTip?.full?.avoid), icon: <Info size={18} /> },
                        ].filter(tip => tip.value).map((tip, i) => (
                            <div key={i} className="bg-[#F1F3EE] p-5 rounded-[18px] flex gap-5 items-start">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-tc-primary shadow-sm flex-shrink-0 border border-[#E8EDE4]/50">
                                    {tip.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="text-[11px] font-bold text-[#8E9285] uppercase tracking-wider mb-1">{tip.label}</div>
                                    <p className="text-[15px] font-semibold text-[#181D17] leading-snug">{tip.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 6. Map Preview */}
                <div className="px-6 mt-12">
                    <div className="h-56 w-full rounded-[28px] overflow-hidden border border-[#E8EDE4] relative shadow-inner">
                        <MapContainer
                            center={position}
                            zoom={15}
                            style={{ height: '100%', width: '100%' }}
                            scrollWheelZoom={false}
                            attributionControl={false}
                            zoomControl={false}
                        >
                            <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
                            <Marker position={position} />
                        </MapContainer>
                        <button 
                            onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${position[0]},${position[1]}`, '_blank')}
                            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#0D631B] text-white px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] shadow-xl flex items-center gap-2.5 z-[500] active:scale-95 transition-all"
                        >
                            <Navigation size={16} /> {t.googleMaps}
                        </button>
                    </div>
                </div>
            </div>

            {/* 8. Bottom Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-2xl border-t border-[#E8EDE4] p-6 pb-12 z-[200] flex items-center gap-8">
                <div className="flex items-center gap-8 text-[#181D17]">
                    <button className="flex flex-col items-center gap-1.5 hover:text-tc-primary transition-colors group">
                        <div className="w-10 h-10 rounded-full bg-[#F1F3EE] flex items-center justify-center group-active:scale-90 transition-transform">
                            <Share2 size={24} strokeWidth={1.5} />
                        </div>
                    </button>
                    <button className="flex flex-col items-center gap-1.5 hover:text-red-500 transition-colors group">
                        <div className="w-10 h-10 rounded-full bg-[#F1F3EE] flex items-center justify-center group-active:scale-90 transition-transform">
                            <Heart size={24} strokeWidth={1.5} />
                        </div>
                    </button>
                </div>

                <button
                    onClick={() => onAddItem(item as TravelItem)}
                    className="flex-1 h-[60px] bg-[#0D631B] text-white rounded-[12px] text-[16px] font-extra-bold flex items-center justify-center gap-3 shadow-lg shadow-[#0D631B]/20 active:scale-[0.98] transition-all"
                >
                    <Plus size={22} strokeWidth={2.5} />
                    {t.addToPlan}
                </button>
            </div>
        </div>
    );
};
