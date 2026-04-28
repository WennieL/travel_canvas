import React, { useState, useEffect, useRef } from 'react';
import { TravelItem, LangType, DaySchedule, ScheduleItem, Plan, Creator } from '../../types';
import { TRANSLATIONS } from '../../data/translations';
import { SAMPLE_CREATORS } from '../../data';
import {
    Share2,
    Heart,
    Plus,
    MapPin,
    Star,
    Check,
    Clock,
    DollarSign,
    Utensils,
    Navigation,
    Info,
    ChevronLeft,
    Lightbulb,
    Sparkles,
    Zap,
    User,
    Lock,
    Camera
} from 'lucide-react';
import { clsx } from 'clsx';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { EngagementSocialBlock } from '../Common/EngagementSocialBlock';
import { PlanSelectorDrawer } from '../Common/PlanSelectorDrawer';
import { ReviewJournalDrawer } from '../Common/ReviewJournalDrawer';
import { ExpertStoryGrid } from './ExpertStoryGrid';

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
    showToastMessage?: (msg: string, type: 'success' | 'error' | 'info' | 'warning') => void;
    onClose: () => void;
    lang: LangType;
    preferredAuthorId?: string | null;
    sidebarMode?: 'list' | 'map';
    hideHeader?: boolean;
    onCreatorClick?: (creatorId: string) => void;
    plans?: any[];
    onAddItemToPlan?: (item: TravelItem, planId: string) => void;
    onCreateNewPlan?: () => void;
    isExternalPlanSelectorOpen?: boolean;
    onOpenPlanSelector?: () => void;
    disableInternalScroll?: boolean;
    isScrolled?: boolean;
    savedSpots?: TravelItem[];
    handleToggleFavoriteSpot?: (item: TravelItem) => void;
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
    onCreatorClick,
    plans = [],
    onAddItemToPlan,
    onCreateNewPlan,
    isExternalPlanSelectorOpen,
    onOpenPlanSelector,
    disableInternalScroll = false,
    isScrolled: externalIsScrolled,
    savedSpots = [],
    handleToggleFavoriteSpot
}) => {
    const [isPlanSelectorOpen, setIsPlanSelectorOpen] = useState(false);
    const [isReviewDrawerOpen, setIsReviewDrawerOpen] = useState(false);
    const [isAddedToPlan, setIsAddedToPlan] = useState(false);
    const [internalIsScrolled, setInternalIsScrolled] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const isScrolled = externalIsScrolled !== undefined ? externalIsScrolled : internalIsScrolled;
    const creator = SAMPLE_CREATORS.find(c => c.id === (item as any).authorId) || SAMPLE_CREATORS[1];
    const title = lang === 'zh' ? item.title : ((item as any).titleEn || item.title);
    const imgUrl = (item as any).coverImage || item.image;
    const position: [number, number] = [item.lat || 25.0330, item.lng || 121.5654];
    const themeColor = (item as any).themeColor || '#8E9E82';

    const isFavorited = savedSpots.some(s => s.id === item.id);

    useEffect(() => {
        if (isExternalPlanSelectorOpen !== undefined) {
            setIsPlanSelectorOpen(isExternalPlanSelectorOpen);
        }
    }, [isExternalPlanSelectorOpen]);

    const handleOpenPlanSelector = () => {
        if (onOpenPlanSelector) {
            onOpenPlanSelector();
        } else {
            setIsPlanSelectorOpen(true);
        }
    };

    const openGoogleMaps = () => {
        const query = encodeURIComponent(`${item.title} ${item.address || ''}`);
        window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
    };

    useEffect(() => {
        if (disableInternalScroll) return;
        const handleScroll = () => {
            if (scrollRef.current) {
                setInternalIsScrolled(scrollRef.current.scrollTop > 100);
            }
        };
        const el = scrollRef.current;
        if (el) {
            el.addEventListener('scroll', handleScroll, { passive: true });
            return () => el.removeEventListener('scroll', handleScroll);
        }
    }, [item, disableInternalScroll]);

    return (
        <div className={`flex flex-col ${disableInternalScroll ? 'min-h-full h-auto' : 'h-full'} bg-[#F7FBF0] relative font-sans overflow-x-hidden ${disableInternalScroll ? '' : 'overflow-hidden'}`}>
            <div
                ref={scrollRef}
                className={`flex-1 no-scrollbar ${disableInternalScroll ? '' : 'overflow-y-auto'}`}
            >
                {/* 1. Hero Section */}
                <div className="relative w-full h-[38vh] md:h-[42vh] shrink-0 bg-gray-100 overflow-hidden">
                    {!hideHeader && (
                        <button
                            onClick={onClose}
                            className="absolute top-6 left-6 w-10 h-10 bg-black/30 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white z-50 hover:bg-black/40 transition-all"
                        >
                            <ChevronLeft size={24} />
                        </button>
                    )}
                    <img
                        src={imgUrl}
                        className="w-full h-full object-cover"
                        alt={title}
                    />

                    <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-8 pb-7">
                        {/* [NEW] Michelin Badge */}
                        {item.michelinRating && (
                            <div className="flex items-center gap-2 mb-3">
                                <div className="px-3 py-1.5 bg-[#E60012] text-white text-[10px] font-black tracking-[0.1em] uppercase rounded flex items-center gap-1.5 shadow-lg">
                                    <span className="text-[14px]">
                                        {item.michelinRating === 'bib-gourmand' ? '😋' : '⭐'}
                                    </span>
                                    {lang === 'zh' ? '米其林指南' : 'MICHELIN GUIDE'}
                                    {item.michelinRating.includes('star') && ` ${item.michelinRating.split('-')[0].toUpperCase()}`}
                                </div>
                                {item.michelinYears && item.michelinYears.length > 0 && (
                                    <div className="px-3 py-1.5 bg-white/20 backdrop-blur-md text-white text-[10px] font-black tracking-[0.1em] uppercase rounded border border-white/20">
                                        {Math.max(...item.michelinYears)}
                                    </div>
                                )}
                            </div>
                        )}

                        <h1 className="text-[30px] md:text-[36px] font-serif font-bold text-white leading-tight tracking-[0.02em] max-w-[95%] mb-2 drop-shadow-md">
                            {title}
                        </h1>

                        <div className="flex items-center gap-4 text-white/60 text-[11px] font-bold tracking-[0.15em] uppercase">
                            <div className="flex items-center gap-1.5 text-amber-400">
                                <Star size={12} fill="currentColor" />
                                <span>{item.rating || 4.8}</span>
                            </div>
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            <span>{item.region || 'Melbourne'}</span>
                        </div>
                    </div>
                </div>

                <div className="px-6 pt-10 pb-32 relative z-20">
                    <div className="space-y-14">
                        {/* 3a. Smart Stats Strip */}
                        <div
                            className="bg-white/40 backdrop-blur-sm rounded-[32px] p-1 border border-white/60 shadow-sm overflow-hidden"
                            style={{ borderColor: (item as any).themeColor ? `${(item as any).themeColor}20` : undefined }}
                        >
                            <div className="grid grid-cols-4 divide-x divide-tc-primary/5">
                                {[
                                    {
                                        label: lang === 'zh' ? '預計花費' : 'COST',
                                        value: (item as any).priceRange || (lang === 'zh' ? (item.price === 0 ? '免費' : `約 $${item.price || 30}`) : (item.price === 0 ? 'FREE' : `$${item.price || 30}`)),
                                        icon: <DollarSign size={13} />,
                                        iconBg: (item as any).themeColor ? `${(item as any).themeColor}15` : '#fff3e8'
                                    },
                                    {
                                        label: lang === 'zh' ? '建議時長' : 'DURATION',
                                        value: item.duration || '2.5 hr',
                                        icon: <Clock size={13} />,
                                        iconBg: (item as any).themeColor ? `${(item as any).themeColor}15` : '#eef5e3'
                                    },
                                    {
                                        label: (item as any).prepLabel || (lang === 'zh' ? '最近捷運' : 'TRANSPORT'),
                                        value: (item as any).prepValue || (item.region || 'TAIPEI').toUpperCase(),
                                        icon: (item as any).prepType === 'transport' ? <Navigation size={13} /> :
                                            (item as any).prepType === 'booking' ? <Clock size={13} /> :
                                                (item as any).prepType === 'requirement' ? <Zap size={13} /> :
                                                    <MapPin size={13} />,
                                        iconBg: (item as any).themeColor ? `${(item as any).themeColor}15` : '#edf0f9'
                                    },
                                    {
                                        label: lang === 'zh' ? '分類類型' : 'CATEGORY',
                                        value: (item.type || 'ATTRACTION').toUpperCase(),
                                        icon: <Sparkles size={13} />,
                                        iconBg: (item as any).themeColor ? `${(item as any).themeColor}15` : '#fdf0ef'
                                    },
                                ].map((card, i) => (
                                    <div key={i} className="flex flex-col items-center gap-1 p-3 transition-colors group">
                                        <div
                                            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 mb-1"
                                            style={{ backgroundColor: card.iconBg, color: themeColor }}
                                        >
                                            {card.icon}
                                        </div>
                                        <div className="flex flex-col items-center min-w-0">
                                            <span className="text-[11px] font-black leading-tight text-center truncate w-full" style={{ color: themeColor }}>
                                                {card.value}
                                            </span>
                                            <span className="text-[8px] font-black text-[#8E9285] uppercase tracking-widest mt-0.5 opacity-60 text-center">
                                                {card.label}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>



                        {/* 3b. Fluid Narrative Area */}
                        <div className="flex flex-col gap-14">
                            {/* Creator Header */}
                            <div className="flex items-center justify-between px-1">
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-11 h-11 rounded-full overflow-hidden border-2"
                                        style={{ borderColor: (item as any).themeColor ? `${(item as any).themeColor}30` : '#E8EDE4' }}
                                    >
                                        <img src={creator.avatar} className="w-full h-full object-cover" alt={creator.name} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[16px] font-black text-[#181D17]">
                                            {lang === 'zh' ? creator.name : (creator.nameEn || creator.name)}
                                        </span>
                                        <span className="text-[11px] font-bold text-[#8E9285] uppercase tracking-widest mt-0.5">
                                            {lang === 'zh' ? (creator as any).role || TRANSLATIONS[lang].travelExpert : ((creator as any).roleEn || TRANSLATIONS[lang].travelExpert)}
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="px-3 py-1 transparent border rounded-full text-[10px] font-black tracking-widest uppercase"
                                    style={{ borderColor: (item as any).themeColor || '#8E9E82', color: (item as any).themeColor || '#8E9E82' }}
                                >
                                    {TRANSLATIONS[lang].insiderPick}
                                </div>
                            </div>

                            {/* Layer 1: Narrative Header (達人語錄) */}
                            <div
                                className="relative py-2 px-1 flex flex-col gap-6"
                                style={{ borderLeft: `6px solid ${(item as any).themeColor || '#8E9E82'}`, paddingLeft: '32px' }}
                            >
                                <h3 className="text-[28px] md:text-[32px] leading-[1.3] font-serif font-black text-[#181D17] tracking-tight">
                                    {lang === 'zh' ? (item as any).teaser || item.title : (item as any).teaserEn || item.titleEn || item.title}
                                </h3>

                                {/* [NEW] insiderTip.teaser — 承諾句，直接告訴使用者「這個時間來對了」 */}
                                {(item as any).insiderTip?.teaser && (
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                                        <p className="text-[14px] font-bold text-[#181D17]/60 leading-snug italic">
                                            {lang === 'zh'
                                                ? (item as any).insiderTip.teaser
                                                : ((item as any).insiderTip.teaserEn || (item as any).insiderTip.teaser)}
                                        </p>
                                    </div>
                                )}

                                <div className="w-16 h-[1px] bg-black/10" />

                                {/* description — 降權為輔助資訊 */}
                                <p className="text-[13px] leading-[1.8] text-[#181D17]/50 font-medium whitespace-pre-wrap">
                                    {lang === 'zh' ? item.description : (item.descriptionEn || item.description)}
                                </p>

                                {(item.expertNote || item.expertNoteEn) && (
                                    <div className="mt-2 p-6 rounded-[24px] border relative overflow-hidden"
                                        style={{ backgroundColor: `${themeColor}08`, borderColor: `${themeColor}30` }}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm" style={{ backgroundColor: themeColor }}>
                                                <User size={14} />
                                            </div>
                                            <h4 className="text-[12px] font-black tracking-widest uppercase" style={{ color: themeColor }}>
                                                {lang === 'zh' ? '達人評鑑' : 'EXPERT VIEW'}
                                            </h4>
                                        </div>
                                        <p className="text-[16px] md:text-[17px] font-bold text-[#181D17] leading-[1.8] opacity-90">
                                            {lang === 'zh' ? item.expertNote : (item.expertNoteEn || item.expertNote)}
                                        </p>
                                    </div>
                                )}

                                {(item.proTip || item.proTipEn) && (
                                    <div className="mt-2 p-6 rounded-[24px] relative overflow-hidden shadow-sm border border-[#FDE68A]" style={{ backgroundColor: '#FFFBEB' }}>
                                        <div className="flex items-center gap-3 mb-4 relative z-10">
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-amber-500 text-white shadow-sm">
                                                <Lightbulb size={14} />
                                            </div>
                                            <h4 className="text-[12px] font-black tracking-[0.15em] uppercase text-amber-600">
                                                {lang === 'zh' ? '實戰密技' : 'PRO TIP'}
                                            </h4>
                                        </div>
                                        
                                        {item.isLocked && !(item as any)._unlocked ? (
                                            <div className="flex flex-col items-start gap-4">
                                                <p className="text-[15px] md:text-[16px] font-bold text-amber-800/60 leading-[1.8] blur-[4px] select-none px-1">
                                                    {lang === 'zh' ? '這是一段高度機密的生存法則，包含了最佳抵達時間、點餐秘密與避坑指南。唯有解鎖完整劇本才能一窺究竟...' : 'This is a highly classified survival guide, including the best time to arrive, ordering secrets, and how to avoid tourist traps. Unlock the full script to find out...'}
                                                </p>
                                                <div className="absolute inset-0 bg-white/20 backdrop-blur-[3px] flex mt-10 items-center justify-center z-20">
                                                    <div className="bg-white px-7 py-3.5 rounded-full border border-amber-200 shadow-[0_8px_20px_rgba(245,158,11,0.15)] flex items-center gap-3 relative cursor-pointer hover:scale-105 active:scale-95 transition-all" onClick={(e) => { e.stopPropagation(); showToastMessage?.(lang === 'zh' ? '👉 請在上方點擊「套用此行程」以解鎖所有隱藏密技！' : 'Apply template to unlock all secrets!', 'info'); }}>
                                                        <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                                                            <Lock size={12} className="text-amber-600" />
                                                        </div>
                                                        <span className="text-[14px] font-black text-amber-700 tracking-wide">{lang === 'zh' ? '解鎖完整劇本以查看' : 'Unlock Script to View'}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <p className="text-[15px] md:text-[16px] font-bold text-amber-800 leading-[1.8] pl-1">
                                                {lang === 'zh' ? (item as any).proTip : ((item as any).proTipEn || (item as any).proTip)}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* [MOVED UP] Expert Tip / insiderTip.full — 核心安心保證，放在 Stories 之前 */}
                            {(item as any).insiderTip?.full?.story && (
                                <div
                                    className="rounded-[32px] p-8 relative overflow-hidden border-2 shadow-sm"
                                    style={{ 
                                        backgroundColor: '#FFF3EB',
                                        borderColor: '#F5D3BB'
                                    }}
                                >
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#E67E22' }} />
                                            <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#E67E22]">
                                                {lang === 'zh' ? '達人提醒' : 'EXPERT TIP'}
                                            </span>
                                        </div>
                                        <p className="text-[15px] md:text-[16px] leading-[1.8] font-bold text-[#b86818] pl-1">
                                            {lang === 'zh' ? (item as any).insiderTip.full.story : (item as any).insiderTip.full.storyEn}
                                        </p>

                                        {(item as any).insiderTip?.full?.bestTime && (
                                            <div className="flex items-center gap-4 text-[12px] font-bold pt-6 mt-6 border-t border-[#F5D3BB]" style={{ color: '#E67E22' }}>
                                                <span className="text-[16px]">⏰</span>
                                                <span className="leading-relaxed">
                                                    <strong className="font-black">{lang === 'zh' ? '最佳時機：' : 'BEST TIME: '}</strong>
                                                    {(item as any).insiderTip.full.bestTime}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}



                            {/* Layer 2: Interactive Grid (Expert Stories - Accordions) */}
                            <div className="flex flex-col gap-6">
                                <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-tc-primary/40 flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-tc-primary/20"></span>
                                    {TRANSLATIONS[lang].expertStoriesTitle || (lang === 'zh' ? '在地達人撇步' : 'Expert Stories')}
                                </h4>

                                {(() => {
                                    const stories = [...((item as any).expertStories || [])];
                                    if ((item as any).photographyTips) {
                                        stories.push({
                                            id: 'photography-tip',
                                            label: lang === 'zh' ? '構圖建議' : 'Photo Guide',
                                            labelEn: 'Photo Guide',
                                            summary: lang === 'zh' ? '達人攝影取景攻略' : 'Expert Photography Hack',
                                            summaryEn: 'Expert Photography Hack',
                                            story: (item as any).photographyTips.zh,
                                            storyEn: (item as any).photographyTips.en
                                        });
                                    }
                                    if ((item as any).kidFriendlyTip) {
                                        stories.push({
                                            id: 'kid-friendly',
                                            label: lang === 'zh' ? '兒童點餐指南' : 'Kid\'s Food Guide',
                                            labelEn: 'Kid\'s Food Guide',
                                            summary: lang === 'zh' ? '親子友善用餐攻略' : 'Family-Friendly Dining',
                                            summaryEn: 'Family-Friendly Dining',
                                            story: (item as any).kidFriendlyTip,
                                            storyEn: (item as any).kidFriendlyTipEn || (item as any).kidFriendlyTip
                                        });
                                    }
                                    return stories.length > 0 ? (
                                        <ExpertStoryGrid 
                                            stories={stories} 
                                            lang={lang} 
                                            themeColor={themeColor}
                                        />
                                    ) : (
                                        <div
                                            className="p-6 rounded-[24px] border border-tc-primary/5 shadow-sm relative overflow-hidden"
                                            style={{ backgroundColor: `${themeColor}05` }}
                                        >
                                            <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: themeColor }}></div>
                                            <p className="text-[14px] leading-[1.8] text-[#181D17]/70 font-medium italic">
                                                {TRANSLATIONS[lang].noExpertStories || 'No expert stories available yet.'}
                                            </p>
                                        </div>
                                    );
                                })()}
                            </div>
                            <div className="mt-6">
                                <h4
                                    className="text-[20px] font-heading font-black text-[#181D17] mb-6 px-1 flex items-center gap-3"
                                    style={{ color: (item as any).themeColor || '#181D17' }}
                                >
                                    <MapPin size={20} />
                                    {lang === 'zh' ? '地理位置' : 'Location Info'}
                                </h4>

                                <div className="bg-white rounded-[32px] p-2 border border-tc-primary/10 overflow-hidden shadow-sm mb-6 relative z-10 flex flex-col">
                                    <div className="h-[260px] w-full rounded-[28px] overflow-hidden">
                                        <MapContainer center={position} zoom={15} className="h-full w-full">
                                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                            <Marker position={position} icon={L.icon({ iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', iconSize: [30, 30] })} />
                                        </MapContainer>
                                    </div>

                                    <div className="p-4 px-5 flex items-center justify-between">
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                            <p className="text-gray-400 text-[9px] font-black uppercase tracking-widest leading-none mb-1">
                                                {lang === 'zh' ? '詳細地址' : 'ADDRESS'}
                                            </p>
                                            <p className="text-[13px] font-bold text-[#181D17] truncate">
                                                {lang === 'zh' ? item.address : ((item as any).addressEn || item.address)}
                                            </p>
                                        </div>
                                        <button
                                            onClick={openGoogleMaps}
                                            className="ml-4 flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-black transition-all hover:scale-105 active:scale-95 shrink-0"
                                            style={{ backgroundColor: (item as any).themeColor ? `${(item as any).themeColor}15` : '#F7FBF0', color: (item as any).themeColor || '#8E9E82' }}
                                        >
                                            <Navigation size={14} />
                                            {lang === 'zh' ? '導航' : 'NAV'}
                                        </button>
                                    </div>

                                    {/* 🚕 Driver Card — always Chinese, bilingual label */}
                                    {(item as any).driverNote && (
                                        <div className="mx-2 mb-2 rounded-[22px] bg-[#1A1A1A] p-4 flex flex-col gap-2">
                                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">
                                                {lang === 'zh'
                                                    ? '🚕 請將此畫面出示給司機'
                                                    : '🚕 Show this screen to your taxi driver'}
                                            </p>
                                            <p className="text-[18px] font-black text-white leading-snug tracking-wide">
                                                {(item as any).driverNote}
                                            </p>
                                            <button
                                                onClick={() => {
                                                    navigator.clipboard.writeText((item as any).driverNote || '');
                                                    showToastMessage?.(lang === 'zh' ? '地址已複製！' : 'Address copied!', 'success');
                                                }}
                                                className="self-start mt-1 px-3 py-1 rounded-full bg-white/10 text-white/60 text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-colors"
                                            >
                                                {lang === 'zh' ? '複製地址' : 'Copy'}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Engagement Social Block */}
                    <div className="mt-12">
                        <EngagementSocialBlock
                            author={creator || null}
                            primaryActionLabel={isAddedToPlan ? (lang === 'zh' ? '已加入！' : 'ADDED!') : (lang === 'zh' ? '加入計畫' : 'ADD TO PLAN')}
                            onPrimaryAction={handleOpenPlanSelector}
                            onCreatorClick={onCreatorClick}
                            onCommentClick={() => setIsReviewDrawerOpen(true)}
                            commentCount={(item as any).reviews?.length || 0}
                            isFavorited={isFavorited}
                            onFavoriteClick={() => handleToggleFavoriteSpot?.(item as TravelItem)}
                            lang={lang}
                            variant="spot"
                            isApplied={isAddedToPlan}
                        />
                    </div>
                </div>
            </div>

            {/* Plan Selector Drawer */}
            {onOpenPlanSelector === undefined && (
                <PlanSelectorDrawer
                    isOpen={isPlanSelectorOpen}
                    onClose={() => setIsPlanSelectorOpen(false)}
                    plans={plans}
                    onSelectPlan={(planId) => {
                        onAddItemToPlan?.(item as TravelItem, planId);
                        setIsPlanSelectorOpen(false);
                        setIsAddedToPlan(true);
                        setTimeout(() => setIsAddedToPlan(false), 3000);
                    }}
                    onCreatePlan={() => {
                        setIsPlanSelectorOpen(false);
                        onCreateNewPlan?.();
                    }}
                    lang={lang}
                />
            )}

            {/* Review Journal Drawer */}
            <ReviewJournalDrawer
                isOpen={isReviewDrawerOpen}
                onClose={() => setIsReviewDrawerOpen(false)}
                reviews={(item as any).reviews || []}
                lang={lang}
                spotTitle={title}
            />
        </div>
    );
};
