import React, { useState } from 'react';
import { Star, Clock, MapPin, Calendar, Sparkles, Check, ChevronRight, Info, Quote, Lightbulb, Sun, Navigation, User, DollarSign, Bed, Moon, Home, Lock, Ticket, Briefcase, ArrowRight } from 'lucide-react';
import { Template, LangType, TemplateStat, CulturalInsight, TemplateItem } from '../../types';
import { SAMPLE_CREATORS, SAMPLE_ASSETS, CULTURAL_WONDERS } from '../../data';
import { EngagementSocialBlock } from '../Common/EngagementSocialBlock';
import { motion, AnimatePresence } from 'framer-motion';
import { TemplateUnlockModal } from '../Modals';
import { useUI } from '../../contexts/UIContext';
import { useApp } from '../../contexts/AppContext';

// --- NEW COMPONENT: Auto-Linkify text ---
const LinkifyText: React.FC<{ text: string }> = ({ text }) => {
    if (!text) return null;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return (
        <>
            {parts.map((part, i) => 
                urlRegex.test(part) ? (
                    <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-bg-primary underline break-all hover:opacity-80" onClick={(e) => e.stopPropagation()}>
                        {part}
                    </a>
                ) : part
            )}
        </>
    );
};

// --- NEW COMPONENT: Timeline Insight Whisper ---
const TimelineInsightWhisper: React.FC<{ insight: CulturalInsight, lang: LangType, onClick: () => void }> = ({ insight, lang, onClick }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={onClick}
            className="my-3 ml-12 mr-2 p-3 bg-[#F3E8FF]/40 rounded-xl border border-[#5B4D7D]/10 flex items-center justify-between group cursor-pointer hover:bg-[#F3E8FF]/60 transition-all active:scale-[0.98]"
        >
            <div className="flex items-center gap-3 overflow-hidden">
                <span className="text-xl shrink-0">{insight.emoji}</span>
                <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-black text-[#5B4D7D]/40 uppercase tracking-widest">
                        {lang === 'zh' ? '在地奇景' : 'LOCAL WONDER'}
                    </span>
                    <h4 className="text-[14px] font-bold text-[#1A1A1A] truncate">
                        {lang === 'zh' ? insight.title : (insight.titleEn || insight.title)}
                    </h4>
                </div>
            </div>
            
            <div className="shrink-0 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <span className="text-[11px] font-black text-[#5B4D7D]">
                    {lang === 'zh' ? '查看故事' : 'VIEW STORY'}
                </span>
                <ChevronRight size={14} className="text-[#5B4D7D]" />
            </div>
        </motion.div>
    );
};


// --- NEW COMPONENT: Timeline Item Card (Standard Item Card) ---
const TimelineItemCard: React.FC<{ 
    item: any, 
    idx: number, 
    lang: LangType, 
    isPurchased: boolean, 
    onSpotClick?: (spot: any) => void 
}> = ({ item, idx, lang, isPurchased, onSpotClick }) => {
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                // We allow clicking into locked items now to show the monetization hook in SpotDetailsPanel
                onSpotClick?.({ ...item, id: item.id || `spot-${idx}`, _unlocked: isPurchased, images: item.images || [`https://images.unsplash.com/photo-${1500000000000 + (item.title?.length || 0) * 1234567}?auto=format&fit=crop&w=800&q=80`] });
            }}
            className={`flex-1 flex items-center gap-3 bg-white border border-[#E8EDE4] rounded-2xl p-3 shadow-[0_1px_6px_rgba(0,0,0,0.05)] transition-all duration-200 ${
                item.isLocked && !isPurchased 
                    ? 'cursor-default opacity-80' 
                    : 'hover:shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:border-[#C8D5C0] active:border-[#4A7C59] active:shadow-[0_2px_8px_rgba(0,0,0,0.12)] active:scale-[0.99] cursor-pointer'
            }`}
        >
            {/* Visual Thumbnail */}
            <div className="w-[68px] h-[68px] rounded-xl bg-[#F7FBF0] overflow-hidden shrink-0">
                <img
                    src={item.coverImage || (item.image?.startsWith('http') ? item.image : `https://images.unsplash.com/photo-${[
                        '1527633051730-adb4729c1b85',
                        '1470252649358-96f3c802bca8',
                        '1467269204594-9661b134dd2b',
                        '1514362545857-3bc16c4c7d1b',
                        '1533107862482-0e6974b068c7'
                    ][idx % 5]}?auto=format&fit=crop&w=300&q=80`)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    alt={item.title}
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80';
                    }}
                />
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5 overflow-hidden">
                    <span className="text-[10px] font-black text-bg-primary uppercase tracking-widest shrink-0">{item.type || 'SPOT'}</span>
                    {item.timeLabel && (
                        <span className="text-[9px] font-black bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-md uppercase tracking-tight shrink-0">
                            {item.timeLabel}
                        </span>
                    )}
                    {item.rating && <div className="flex items-center gap-0.5 text-[10px] font-bold text-amber-500 shrink-0"><Star size={9} fill="currentColor" /><span>{item.rating}</span></div>}
                </div>
                <h5 className="text-[15px] font-black text-[#181D17] leading-tight flex items-center gap-1">
                    <span className={`line-clamp-1 transition-all ${item.isLocked && !isPurchased ? 'blur-[3px] opacity-70 select-none' : ''}`}>
                        {item.isLocked && !isPurchased 
                            ? (lang === 'zh' ? (item.marketingTitle || '🔒 神祕地點') : (item.marketingTitleEn || '🔒 Secret Location'))
                            : (lang === 'zh' ? item.title : (item.titleEn || item.title))}
                    </span>
                    {!isPurchased && item.isLocked && (
                        <Lock size={12} className="text-amber-500 shrink-0" />
                    )}
                    <ChevronRight size={14} className="shrink-0 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-bg-primary ml-auto" />
                </h5>
                {(!item.expertNote && !item.expertNoteEn && (item.description || item.descriptionEn)) && (
                    <p className={`text-[11.5px] text-[#4A5548] mt-2 line-clamp-2 leading-[1.6] opacity-60 transition-all ${item.isLocked && !isPurchased ? 'blur-[2px] opacity-30 select-none' : ''}`}>
                        {item.isLocked && !isPurchased
                            ? (lang === 'zh' ? '這是一個付費解鎖後才能查看的獨家在地推薦。' : 'This is an exclusive local recommendation available after unlocking.')
                            : (lang === 'zh' ? item.description : (item.descriptionEn || item.description))}
                    </p>
                )}
                {(item.expertNote || item.expertNoteEn) && (
                    <div className={`mt-3 flex items-start gap-2.5 transition-all ${item.isLocked && !isPurchased ? 'blur-[2px] opacity-50 select-none' : ''}`}>
                        <div className="mt-0.5 shrink-0">
                            <div className="w-[22px] h-[22px] rounded-full bg-[#FFF8EE] flex items-center justify-center">
                                <Quote size={10} className="text-[#F19B38] fill-current" />
                            </div>
                        </div>
                        <div className="flex-1 pt-0.5">
                            <p className="text-[12px] font-medium text-[#4A5548] leading-[1.6]">
                                <span className="font-black text-[#F19B38] mr-1.5 align-baseline">
                                    {lang === 'zh' ? '達人說' : 'Pro Tip'}
                                </span>
                                {item.isLocked && !isPurchased
                                    ? (lang === 'zh' ? '解鎖以查看達人點評...' : 'Unlock to view expert insight...')
                                    : <LinkifyText text={lang === 'zh' ? item.expertNote : (item.expertNoteEn || item.expertNote)} />}
                            </p>
                        </div>
                    </div>
                )}
                {(item.transitNote || item.transitNoteEn) && (
                    <div className={`mt-2 flex items-center justify-start transition-all ${item.isLocked && !isPurchased ? 'blur-[2px] opacity-50 select-none' : ''}`}>
                        <div className="inline-flex items-start gap-1.5 px-2.5 py-1.5 bg-[#EEF4ED] rounded-lg border border-[#D5E3D0] text-[11.5px] font-bold text-[#3B6649]">
                            <svg className="w-3.5 h-3.5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                            <span className="leading-snug">
                            {lang === 'zh' ? item.transitNote : (item.transitNoteEn || item.transitNote)}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- NEW COMPONENT: Timeline Hotel Card (Collapsible) ---
const TimelineHotelCard: React.FC<{ item: any, lang: LangType }> = ({ item, lang }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
        <div className="my-4 ml-12 mr-2">
            <motion.div 
                layout
                onClick={() => setIsExpanded(!isExpanded)}
                className={`overflow-hidden border transition-all duration-300 cursor-pointer ${
                    isExpanded 
                    ? 'rounded-[24px] bg-white border-[#C8D5C0] shadow-[0_8px_30px_rgba(0,0,0,0.08)]' 
                    : 'rounded-2xl bg-[#F7FBF0]/60 border-[#E8EDE4] hover:bg-[#F7FBF0] hover:border-[#C8D5C0]'
                }`}
            >
                {/* Header / Collapsed View */}
                <div className="p-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${isExpanded ? 'bg-bg-primary text-white' : 'bg-white text-[#8E9285]'}`}>
                            <Bed size={18} />
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-[10px] font-black text-[#8E9285] uppercase tracking-widest leading-none mb-1">
                                {lang === 'zh' ? '建議住宿' : 'STAYING AT'}
                            </span>
                            <h4 className={`text-[15px] font-black truncate transition-colors ${isExpanded ? 'text-bg-primary' : 'text-[#181D17]'}`}>
                                {lang === 'zh' ? item.title : (item.titleEn || item.title)}
                            </h4>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-2 shrink-0">
                         {!isExpanded && item.rating && (
                            <div className="flex items-center gap-0.5 text-[11px] font-black text-amber-500 bg-white px-2 py-0.5 rounded-full border border-[#E8EDE4]">
                                <Star size={10} fill="currentColor" />
                                <span>{item.rating}</span>
                            </div>
                        )}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-[#E8EDE4] bg-white text-[#8E9285] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                            <ChevronRight size={16} className="rotate-90" />
                        </div>
                    </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-4 pb-4"
                        >
                            {item.coverImage && (
                                <div className="w-full h-40 rounded-2xl overflow-hidden mb-4 bg-gray-100">
                                    <img src={item.coverImage} className="w-full h-full object-cover" alt={item.title} />
                                </div>
                            )}
                            
                            <div className="space-y-3">
                                <p className="text-[13px] leading-relaxed text-[#4A5548] opacity-80">
                                    {lang === 'zh' ? item.description : (item.descriptionEn || item.description)}
                                </p>
                                
                                {item.insiderTip && (
                                    <div className="p-3 bg-[#FFF9E6] rounded-xl border border-[#FFEBB3]/30">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Lightbulb size={14} className="text-amber-600" />
                                            <span className="text-[11px] font-black text-amber-700 uppercase tracking-widest">
                                                {lang === 'zh' ? '住宿小撇步' : 'STAY TIP'}
                                            </span>
                                        </div>
                                        <p className="text-[12px] font-bold text-[#6B5A2E]">
                                            {lang === 'zh' ? item.insiderTip.teaser : (item.insiderTip.teaserEn || item.insiderTip.teaser)}
                                        </p>
                                    </div>
                                )}

                                <div className="flex items-center gap-2 pt-2">
                                    <div 
                                        className="flex-1 px-4 py-2.5 bg-bg-primary text-white rounded-xl text-center text-[12px] font-black uppercase tracking-widest hover:opacity-90 transition-opacity"
                                    >
                                        {lang === 'zh' ? '查看飯店詳情' : 'VIEW HOTEL DETAILS'}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

interface TemplateDetailsPanelProps {
    template: Template;
    lang: LangType;
    onApply: (tpl: Template) => void;
    onCreatorClick?: (creatorId: string) => void;
    onSpotClick?: (spot: any) => void;
    savedTemplates?: Template[];
    handleToggleFavoriteTemplate?: (tpl: Template) => void;
    // [Phase UX] Sync with header action
    isExternalPurchaseModalOpen?: boolean;
    onOpenPurchaseModal?: () => void;
    onClosePurchaseModal?: () => void;
    isPurchased?: boolean;
}

// Helper to render icon by name
const IconComponent = ({ name, size = 18 }: { name?: string, size?: number }) => {
    switch (name) {
        case 'Star': return <Star size={size} />;
        case 'Clock': return <Clock size={size} />;
        case 'MapPin': return <MapPin size={size} />;
        case 'Calendar': return <Calendar size={size} />;
        case 'Sparkles': return <Sparkles size={size} />;
        case 'DollarSign': return <DollarSign size={size} />;
        case 'Ticket': return <Ticket size={size} />;
        case 'Briefcase': return <Briefcase size={size} />;
        case 'Sun': return <Sun size={size} />;
        default: return <MapPin size={size} />;
    }
};

export const TemplateDetailsPanel: React.FC<TemplateDetailsPanelProps> = ({
    template,
    lang,
    onApply,
    onCreatorClick,
    onSpotClick,
    savedTemplates = [],
    handleToggleFavoriteTemplate,
    onOpenPurchaseModal,
    onClosePurchaseModal,
    isExternalPurchaseModalOpen = false,
    isPurchased = true
}) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedInsight, setSelectedInsight] = useState<CulturalInsight | null>(null);
    
    // [Phase UX] Use external state if available, otherwise fallback
    const [internalShowPurchaseModal, setInternalShowPurchaseModal] = useState(false);
    const showPurchaseModal = onOpenPurchaseModal ? isExternalPurchaseModalOpen : internalShowPurchaseModal;
    const setShowPurchaseModal = (val: boolean) => {
        if (onOpenPurchaseModal) {
            val ? onOpenPurchaseModal() : onClosePurchaseModal?.();
        } else {
            setInternalShowPurchaseModal(val);
        }
    };
    
    const { lang: appLang, showToastMessage } = useApp();
    
    const resolvedCreator = SAMPLE_CREATORS.find(c => c.id === template.authorId);
    
    // Virtual Creator Fallback (No Hardcode!)
    const creator = resolvedCreator || {
        id: template.authorId,
        name: template.author,
        nameEn: template.authorEn || template.author,
        avatar: `https://i.pravatar.cc/100?u=${template.authorId}`,
        description: template.targetAudience?.description || 'Recommend the most authentic experiences.',
        descriptionEn: template.targetAudience?.descriptionEn || template.targetAudience?.description || 'Recommend the most authentic experiences.'
    };

    const isFavorited = savedTemplates.some(t => t.id === template.id);

    // Day logic
    const totalDays = template.duration || 1;
    const tabs = [
        { id: 'overview', label: lang === 'zh' ? '總覽' : 'Overview' },
        ...([...Array(totalDays)].map((_, i) => ({
            id: `day-${i + 1}`,
            label: lang === 'zh' ? `第 ${i + 1} 天` : `Day ${i + 1}`
        })))
    ];

    const handleTabClick = (id: string) => {
        setActiveTab(id);
    };

    // Data for Overview
    const displayQuote = lang === 'zh'
        ? (template.coverStory?.quote || creator?.description || '推薦最道地的旅行體驗。')
        : (template.coverStory?.quoteEn || template.coverStory?.quote || creator?.descriptionEn || creator?.description || 'Recommending the most authentic travel experiences.');

    const t = {
        knowBeforeYouGo: lang === 'zh' ? '出發前必看' : 'Know Before You Go',
        authorsNote: lang === 'zh' ? '達人悄悄話' : "Author's Note",
        tripHighlights: lang === 'zh' ? '行程亮點' : 'Trip Highlights',
        applyTemplate: lang === 'zh' ? '套用此行程' : 'USE THIS TEMPLATE',
        bestTime: lang === 'zh' ? '最佳時節' : 'Best Time',
        gettingAround: lang === 'zh' ? '交通建議' : 'Getting Around',
        expertAdvice: lang === 'zh' ? '在地撇步' : 'Expert Advice',
        follow: lang === 'zh' ? '追蹤' : 'FOLLOW',
        applied: lang === 'zh' ? '已套用' : 'applied',
        sharePost: lang === 'zh' ? '立即套用行程' : 'USE THIS TEMPLATE',
        likes: lang === 'zh' ? '收藏' : 'likes',
    };

    const displayBadges = lang === 'zh' ? template.badges : (template.badgesEn || template.badges);
    const displaySubLocations = lang === 'zh' ? template.subLocations : (template.subLocationsEn || template.subLocations);


    return (
        <>
        <div className="flex flex-col bg-[#F7FBF0] pb-20 font-sans overflow-x-hidden">
            {/* 1. Hero Section (PREMIUM EDITORIAL STYLE) */}
            <div className="relative w-full h-[40vh] md:h-[45vh] shrink-0 bg-gray-100 overflow-hidden">
                <img
                    src={template.coverImage}
                    className="w-full h-full object-cover"
                    alt={template.name}
                />

                {/* Navigation Overlay */}
                <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-center z-30">
                    {/* Placeholder for back button if needed */}
                </div>

                {/* Bottom Content Area */}
                <div className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-8 pb-7">
                    {/* Badges Overlay */}
                    {displayBadges && displayBadges.length > 0 && (
                        <div className="flex gap-2 mb-4">
                            {displayBadges.map((badge: string, idx: number) => (
                                <span key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[9px] font-black text-white uppercase tracking-widest whitespace-nowrap">
                                    {badge}
                                </span>
                            ))}
                        </div>
                    )}

                    <h1 className="text-[30px] md:text-[38px] font-heading font-bold text-white leading-tight tracking-[0.02em] max-w-[95%] mb-2 drop-shadow-md">
                        {lang === 'zh' ? template.name : (template.nameEn || template.name)}
                    </h1>

                    <div className="flex items-center gap-4 text-white/60 text-[11px] font-bold tracking-[0.15em] uppercase">
                        <div className="flex items-center gap-1.5 text-amber-400">
                            <Star size={12} fill="currentColor" />
                            <span>{template.rating || 4.8}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span>
                            {displaySubLocations && displaySubLocations.length > 0 
                                ? displaySubLocations.join(' · ') 
                                : (template.region || 'Taipei').toUpperCase()}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        
                        {/* Dynamic Version & Last Updated Badge */}
                        {template.lastUpdated ? (
                            <span className="flex items-center gap-1.5 bg-[#4A7C59] text-white px-2 py-0.5 rounded-[4px] font-bold tracking-[0.1em] drop-shadow-sm">
                                {template.lastUpdated} {lang === 'zh' ? '更新' : 'Updated'} 
                                <span className="font-medium opacity-80 border-l border-white/30 pl-1.5 ml-0.5 text-[10px]">
                                    2024/05/10 {lang === 'zh' ? '發佈' : 'Published'}
                                </span>
                            </span>
                        ) : (
                            <span>2024/05/10 {lang === 'zh' ? '發佈' : 'Published'}</span>
                        )}
                    </div>
                </div>
            </div>

            {/* 2. Sticky Tab Bar */}
            <div className="sticky top-0 z-[100] bg-white border-b border-[#E8EDE4] shadow-sm">
                <div className="flex overflow-x-auto no-scrollbar px-6 gap-10 py-5">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => handleTabClick(tab.id)}
                            className={`text-sm font-black whitespace-nowrap relative transition-colors ${activeTab === tab.id ? 'text-bg-primary' : 'text-[#8E9285]'}`}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <div className="absolute -bottom-[21px] left-0 right-0 h-1 bg-bg-primary rounded-t-full" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* 3. Dynamic Content Area */}
            <div className="px-6 py-10 relative z-20">
                {activeTab === 'overview' ? (
                    <div className="space-y-12">
                        {/* 3a. [NEW] Value Anchor - The Trust Switch */}
                        {template.valueAnchor && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-[#1A2D1F] p-8 rounded-[38px] shadow-[0_20px_50px_rgba(26,45,31,0.15)] relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4A7C59]/20 to-transparent rounded-full -mr-16 -mt-16 blur-2xl" />
                                
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                                        <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.25em]">
                                            {lang === 'zh' ? '零決策行程體驗' : 'DECISION-FREE EXPERIENCE'}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-[20px] md:text-[24px] font-heading font-black text-white leading-tight mb-4">
                                        {lang === 'zh' ? '你不需要計畫，' : "You don't plan the trip."}
                                        <span className="block text-white/60">
                                            {lang === 'zh' ? '只需跟隨。' : 'You just follow it.'}
                                        </span>
                                    </h3>
                                    
                                    <p className="text-[15px] leading-[1.7] text-white/80 font-medium bg-white/5 p-4 rounded-2xl border border-white/10">
                                        {lang === 'zh' ? template.valueAnchor : (template.valueAnchorEn || template.valueAnchor)}
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {/* 3b. Smart Stats Strip (Horizontal Editorial Style) */}
                        <div className="bg-white/40 backdrop-blur-sm rounded-[32px] p-1 border border-white/60 shadow-sm overflow-hidden">
                            <div className="grid grid-cols-4 divide-x divide-tc-primary/5">
                                {(template.customStats || [
                                    { 
                                        label: lang === 'zh' ? '天數' : 'DAYS', 
                                        value: `${template.duration} ${lang === 'zh' ? '天' : 'D'}`, 
                                        icon: 'Calendar',
                                        color: '#eef5e3'
                                    },
                                    { 
                                        label: lang === 'zh' ? '景點' : 'SPOTS', 
                                        value: String(template.highlights?.spots || 12), 
                                        icon: 'MapPin',
                                        color: '#fef7e6'
                                    },
                                    { 
                                        label: lang === 'zh' ? '評分' : 'RATING', 
                                        value: String(template.rating || 4.9), 
                                        icon: 'Star',
                                        color: '#fff3e8'
                                    },
                                    { 
                                        label: lang === 'zh' ? '熱度' : 'COPIED', 
                                        value: String(template.copiedCount || template.highlights?.usageCount || 100), 
                                        icon: 'Sparkles',
                                        color: '#f3e8ff'
                                    },
                                ]).map((stat, i) => (
                                    <div key={i} className="flex flex-col items-center py-4 px-1">
                                        <div 
                                            className="w-7 h-7 rounded-full flex items-center justify-center mb-2.5 text-bg-primary shadow-sm"
                                            style={{ backgroundColor: stat.color }}
                                        >
                                            <IconComponent name={stat.icon} size={13} />
                                        </div>
                                        <div className="text-[14px] font-black text-[#181D17] leading-none mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis max-w-full px-1">
                                            {lang === 'zh' ? stat.value : (stat.valueEn || stat.value)}
                                        </div>
                                        <div className="text-[8px] font-black text-[#8E9285] uppercase tracking-widest mb-0.5">
                                            {lang === 'zh' ? stat.label : (stat.labelEn || stat.label)}
                                        </div>
                                        {stat.subLabel && (
                                            <div className="text-[7px] font-bold text-[#A5A99E] uppercase tracking-tighter opacity-80">
                                                {lang === 'zh' ? stat.subLabel : (stat.subLabelEn || stat.subLabel)}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3a. Value Proposition Strip (PREMIUM) */}
                        <div className="flex justify-between gap-3 mb-10">
                            {[
                                { zh: '零決策排程', en: '⚡ ZERO DECISION', desc: 'zh: 全程手動排雷 / en: Fully optimized' },
                                { zh: '親子認證', en: '🛡️ KIDS VERIFIED', desc: 'zh: 孩子笑容保證 / en: Family-approved' },
                                { zh: '物流配套', en: '📦 LOGISTICS PRO', desc: 'zh: 含寄存與預約 / en: Booking & pickup' }
                            ].map((val, idx) => (
                                <div key={idx} className="flex-1 bg-[#F1F3EE]/50 border border-bg-primary/5 rounded-2xl p-3 text-center">
                                    <div className="text-[10px] font-black text-bg-primary tracking-widest mb-1">
                                        {lang === 'zh' ? val.zh : val.en}
                                    </div>
                                    <div className="text-[8px] font-bold text-[#8E9285] uppercase opacity-70">
                                        {lang === 'zh' ? val.desc.split(' / ')[0].replace('zh: ', '') : val.desc.split(' / ')[1].replace('en: ', '')}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 3b. Creator & Fluid Narrative Block */}
                        <div className="space-y-8">
                            {/* Creator Identity */}
                            <div className="flex items-center justify-between px-2">
                                <div 
                                    className="flex items-center gap-4 cursor-pointer group/creator"
                                    onClick={() => onCreatorClick?.(creator.id)}
                                >
                                    <img
                                        src={creator?.avatar || `https://i.pravatar.cc/100?u=${template.authorId}`}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xl group-hover/creator:scale-105 transition-transform"
                                        alt="creator"
                                    />
                                    <div>
                                        <div className="text-[17px] font-black text-[#181D17] leading-none mb-1 group-hover/creator:text-bg-primary transition-colors">
                                            {lang === 'zh' ? (creator?.name || template.author) : (creator?.nameEn || creator?.name || template.authorEn || template.author)}
                                        </div>
                                        <div className="text-[11px] font-bold text-[#8E9285]">{lang === 'zh' ? '旅遊達人' : 'Travel Expert'}</div>
                                    </div>
                                </div>
                                <div className="px-3 py-1.5 rounded-full border border-bg-primary/30 text-bg-primary text-[10px] font-black uppercase tracking-widest">
                                    {lang === 'zh' ? '達人規劃' : 'Expert Pick'}
                                </div>
                            </div>

                            {/* Narrative Content */}
                            <div className="border-l-4 border-bg-primary/40 pl-6 py-2">
                                <h2 className="text-[22px] md:text-[24px] font-heading font-black text-[#181D17] leading-tight mb-4">
                                    {displayQuote.replace(/"/g, '')}
                                </h2>
                                <p className="text-[15.5px] leading-[1.8] text-[#4A5548] font-medium">
                                    {lang === 'zh' ? template.coverStory?.description : (template.coverStory?.descriptionEn || template.coverStory?.description)}
                                </p>
                            </div>
                        </div>

                        {/* 3c. [NEW] EXPERT PREPARATION GUIDE (TEASER) */}
                        {template.preparationGuide && template.preparationGuide.length > 0 && (
                            <div className="bg-[#E9F3E4] rounded-[32px] p-8 border border-[#B5C9A4]/30 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                    <Sparkles size={80} className="text-[#4A7C59]" />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-8 h-8 rounded-full bg-[#4A7C59] flex items-center justify-center text-white">
                                            <Sparkles size={16} />
                                        </div>
                                        <h4 className="text-[20px] font-heading font-black text-[#1A2D1F]">
                                            {lang === 'zh' ? '達人行前預習' : "Expert's Prep Guide"}
                                        </h4>
                                    </div>
                                    <div className="space-y-6">
                                        {template.preparationGuide.map((guide, idx) => (
                                            <div key={idx} className="flex gap-5">
                                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#4A7C59] shrink-0 shadow-sm">
                                                    <IconComponent name={guide.icon} size={20} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-[11px] font-black text-[#6B7C6E] uppercase tracking-widest mb-1.5">
                                                        {lang === 'zh' ? guide.title : (guide.titleEn || guide.title)}
                                                    </div>
                                                    <p className="text-[15px] font-semibold text-[#1A2D1F] leading-relaxed">
                                                        {lang === 'zh' ? guide.text : (guide.textEn || guide.text)}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 3d. Know Before You Go (DYNAMIC EDITORIAL SECTION) */}
                        {template.faq && template.faq.length > 0 && (
                            <div>
                                <h4 className="text-[20px] font-heading font-black text-[#181D17] mb-6">{t.knowBeforeYouGo}</h4>
                                <div className="space-y-4">
                                    {template.faq.map((item, i) => {
                                        const title = lang === 'zh' ? item.title : (item.titleEn || item.title);
                                        const text = lang === 'zh' ? item.text : (item.textEn || item.text);
                                        
                                        // Dynamic Icon Logic
                                        let Icon = <Lightbulb size={20} />;
                                        if (title.includes('交通') || title.includes('Transport')) Icon = <Navigation size={20} />;
                                        if (title.includes('時節') || title.includes('Time')) Icon = <Sun size={20} />;
                                        if (title.includes('激步') || title.includes('Timing') || title.includes('Moment')) Icon = <Sparkles size={20} className="text-amber-500" />;

                                        return (
                                            <div key={i} className="bg-[#F1F3EE] p-6 rounded-[28px] flex gap-5">
                                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-bg-primary shrink-0 shadow-sm">
                                                    {Icon}
                                                </div>
                                                <div>
                                                    <div className="text-[11px] font-black text-[#8E9285] uppercase tracking-[0.15em] mb-1">{title}</div>
                                                    <p className="text-[15px] font-semibold text-[#181D17] leading-relaxed">{text}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* [INFO] Survival Guide tip — static, no click required */}
                        <div className="flex items-start gap-3 px-2 py-1">
                            <span className="text-[14px] mt-0.5">💡</span>
                            <p className="text-[12px] font-semibold text-[#8E9285] leading-relaxed">
                                {lang === 'zh'
                                    ? '更多在地生存法則（交通、禮儀、網路）可在首頁 Discover 的「台灣生存指南」中找到。'
                                    : 'More local survival tips (transport, etiquette, connectivity) are in the "Taiwan Survival Guide" on the Discover tab.'}
                            </p>
                        </div>

                        {/* 3d. Author's Note */}
                        {template.authorStory && (
                            <div className="bg-bg-primary/5 rounded-[40px] p-8 border border-bg-primary/10">
                                <div className="flex items-center gap-3 mb-6">
                                    <User size={18} className="text-bg-primary" />
                                    <h4 className="text-[18px] font-black text-bg-primary">{t.authorsNote}</h4>
                                </div>
                                <p className="text-[15px] leading-[1.8] text-[#4A5548] font-medium italic">
                                    "{lang === 'zh' ? template.authorStory.zh : (template.authorStory.en || template.authorStory.zh)}"
                                </p>
                            </div>
                        )}

                        {/* 3e. Visual Trip Highlights (POLISHED) */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Sparkles size={22} className="text-amber-500 fill-amber-500/20" />
                                <h4 className="text-[20px] font-heading font-black text-[#181D17]">{t.tripHighlights}</h4>
                            </div>
                            <div className="flex overflow-x-auto no-scrollbar gap-5 -mx-6 px-6 pb-4">
                                {(() => {
                                    const allSpots: any[] = [];
                                    const schedule = template.schedule as any;
                                    Object.values(schedule || {}).forEach((day: any) => {
                                        [...(day.morning || []), ...(day.afternoon || []), ...(day.evening || [])].forEach(spot => {
                                            const img = spot.coverImage || spot.imageUrl;
                                            if (img && !allSpots.find(s => s.id === spot.id)) {
                                                allSpots.push({ ...spot, displayImage: img });
                                            }
                                        });
                                    });

                                    const displaySpots = allSpots.length > 0 ? allSpots.slice(0, 5) : [{
                                        id: 'fallback',
                                        title: template.name,
                                        displayImage: template.coverImage,
                                        rating: template.rating || 4.9
                                    }];

                                    return displaySpots.map((spot, i) => (
                                        <div key={i} className="flex flex-col gap-4 shrink-0">
                                            {/* Square Image container */}
                                            <div className="relative w-[40vw] aspect-square md:w-48 rounded-[28px] overflow-hidden group shadow-lg">
                                                <img src={spot.displayImage} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={spot.title} />
                                                <div className="absolute top-4 inset-x-4 flex justify-between items-start">
                                                    <div className="bg-[#0D631B] text-white px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-md border border-white/20">
                                                        <span className="text-[9px] font-black leading-none uppercase tracking-tighter">TOP</span>
                                                        <span className="text-[10px] font-black leading-none">{String(i + 1).padStart(2, '0')}</span>
                                                    </div>
                                                    <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 hover:bg-white hover:text-red-500 transition-all">
                                                        <Star size={14} className={i % 2 === 0 ? "fill-white text-white" : ""} />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Info Below Image - width constrained to match image */}
                                            <div className="px-1 w-[40vw] md:w-48 overflow-hidden">
                                                <h5 
                                                    className="text-[16px] font-black text-[#181D17] leading-tight mb-1.5 whitespace-normal break-words"
                                                    style={{ 
                                                        display: '-webkit-box',
                                                        WebkitLineClamp: 2,
                                                        WebkitBoxOrient: 'vertical',
                                                        overflow: 'hidden',
                                                        minHeight: '2.5em'
                                                    }}
                                                >
                                                    {lang === 'zh' ? spot.title : (spot.titleEn || spot.title)}
                                                </h5>
                                                <div className="flex items-center gap-1.5 opacity-70">
                                                    <div className="flex items-center gap-1 text-[11px] font-bold text-amber-600">
                                                        <Star size={11} fill="currentColor" />
                                                        <span>{spot.rating || 4.8}</span>
                                                    </div>
                                                    <span className="text-[11px] font-bold text-[#8E9285] uppercase tracking-wider">• 92.4K LIKES</span>
                                                </div>
                                            </div>
                                        </div>
                                    ));
                                })()}
                            </div>
                        </div>

                        <EngagementSocialBlock
                            author={creator || null}
                            primaryActionLabel={!isPurchased ? (lang === 'zh' ? `解鎖完整行程 ($0.99)` : `UNLOCK FULL ITINERARY ($0.99)`) : t.applyTemplate}
                            onPrimaryAction={() => {
                                if (!isPurchased) {
                                    setShowPurchaseModal(true);
                                } else {
                                    onApply(template);
                                }
                            }}
                            onCreatorClick={onCreatorClick}
                            isFavorited={isFavorited}
                            onFavoriteClick={() => handleToggleFavoriteTemplate?.(template)}
                            lang={lang}
                            variant="template"
                        />
                    </div>
                ) : (
                    /* 4. Day View */
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                         {(() => {
                            const dayNum = parseInt(activeTab.split('-')[1]);
                            const dayKey = `Day ${dayNum}`;
                            const dayData = (template.schedule as any)?.[dayKey];
                            if (!dayData) return <div className="text-center py-20 text-[#8E9285]">No data for this day.</div>;

                            return (
                                <div className="relative">
                                    {/* Centered Day Title */}
                                    <div className="mb-4 text-center">
                                        <h2 className="text-[22px] font-black text-[#181D17] leading-snug">{lang === 'zh' ? dayData.theme : (dayData.themeEn || dayData.theme)} {dayData.themeEmoji}</h2>
                                    </div>

                                    {/* [NEW] Zero-Decision Context Bar - Humanized */}
                                    {dayData.contextBar && (
                                        <div className="flex items-center justify-center gap-3 mb-6">
                                            <div className="px-2.5 py-1 bg-[#F5F8F5] border border-[#E0E9DE] rounded-full flex items-center shadow-sm">
                                                <span className="text-[10px] font-black text-[#5B7C64] tracking-tight">
                                                    {lang === 'zh' ? dayData.contextBar.weather : (dayData.contextBar.weatherEn || dayData.contextBar.weather)}
                                                </span>
                                            </div>
                                            <div className="px-2.5 py-1 bg-[#F5F8F5] border border-[#E0E9DE] rounded-full flex items-center shadow-sm">
                                                <span className="text-[10px] font-black text-[#5B7C64] tracking-tight">
                                                    {lang === 'zh' ? dayData.contextBar.optimization : (dayData.contextBar.optimizationEn || dayData.contextBar.optimization)}
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Deprecated: Daily Tips moving to Trust Card or Expert Notes */}
                                    {/* dayData.dailyTips && dayData.dailyTips.length > 0 && ... */}

                                    {/* Timeline + Items */}
                                    <div className="space-y-0">
                                        {/* [NEW] Expert Mind / Warm Note */}
                                        {dayData.trustCard && (
                                            <div className="relative mb-8 mt-2 mx-4">
                                                <div className="bg-[#FFFAF2] rounded-2xl p-4 shadow-sm border border-[#F2E8D5] flex gap-4 ring-4 ring-[#FFFDF9]/80">
                                                    <div className="w-10 h-10 rounded-full bg-[#F2EDE4] flex items-center justify-center text-xl shrink-0 shadow-inner">
                                                        {dayData.trustCard.icon}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-[13px] font-black text-[#6B5A40] mb-0.5 flex items-center gap-2">
                                                            {lang === 'zh' ? dayData.trustCard.title : (dayData.trustCard.titleEn || dayData.trustCard.title)}
                                                        </h4>
                                                        <p className="text-[12.5px] font-medium text-[#7D6B50] leading-relaxed italic opacity-90">
                                                            「{lang === 'zh' ? dayData.trustCard.text : (dayData.trustCard.textEn || dayData.trustCard.text)}」
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {[...(dayData.morning || []), ...(dayData.afternoon || []), ...(dayData.evening || []), ...(dayData.night || [])].map((rawItem, idx, arr) => {
                                            // 1. Detection of Insight vs Spot
                                            if (rawItem.itemType === 'insight') {
                                                const wonder = CULTURAL_WONDERS.find(w => w.id === (rawItem as any).insightId);
                                                if (!wonder) return null;
                                                return <TimelineInsightWhisper key={idx} insight={wonder} lang={lang} onClick={() => setSelectedInsight(wonder)} />;
                                            }

                                            const asset = SAMPLE_ASSETS.find(a => a.id === rawItem.id);
                                            let item = asset ? { ...asset, ...rawItem } : rawItem;


                                            
                                            return (
                                                <div key={idx} className="relative group flex items-start gap-3 pb-8">
                                                    {/* LEFT COLUMN: Timeline (dot + line + time badge) */}
                                                    <div className="flex flex-col items-center shrink-0 w-16 pt-1">
                                                        {/* Vertical line segment ABOVE dot */}
                                                        {idx > 0 && (
                                                            <div className="w-0.5 h-4 bg-[#E8EDE4] -mb-0.5" />
                                                        )}
                                                        {idx === 0 && <div className="h-4" />}
    
                                                        {/* Time badge (replaces floating dot) */}
                                                        <div className="relative z-10 px-2 py-0.5 bg-white border border-[#E8EDE4] rounded-full text-[11px] font-black text-[#6B7C6E] shadow-sm group-hover:border-bg-primary group-hover:text-bg-primary transition-all whitespace-nowrap">
                                                            {item.startTime || item.timeLabel || '09:00'}
                                                        </div>

                                                    {/* Vertical line segment BELOW dot */}
                                                    {idx < arr.length - 1 && (
                                                        <div className="w-0.5 flex-1 min-h-[24px] bg-[#E8EDE4] -mt-0.5" />
                                                    )}
                                                </div>

                                                {/* RIGHT COLUMN: Standard Item */}
                                                <TimelineItemCard 
                                                    item={item} 
                                                    idx={idx} 
                                                    lang={lang} 
                                                    isPurchased={isPurchased} 
                                                    onSpotClick={onSpotClick} 
                                                />
                                            </div>
                                        );
                                    })}
                                    
                                    {/* 3. Accommodations section at the end of the day */}
                                    {dayData.accommodation && dayData.accommodation.length > 0 && (
                                        <div className="mt-2 pt-2 border-t border-dashed border-[#E8EDE4]">
                                            {dayData.accommodation.map((item: TemplateItem, hIdx: number) => {
                                                // Resolve asset if ID matches a sample asset
                                                const asset = SAMPLE_ASSETS.find(a => a.id === item.id);
                                                const hotel = asset ? { ...asset, ...item } : item;
                                                return <TimelineHotelCard key={`hotel-${hIdx}`} item={hotel} lang={lang} />;
                                            })}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-8 mb-8">
                                    <p className="text-center text-[10px] text-[#8E9285] font-black uppercase tracking-widest mt-6 opacity-40">End of Day {dayNum}</p>
                                </div>

                                <EngagementSocialBlock
                                    author={creator || null}
                                    primaryActionLabel={!isPurchased ? (lang === 'zh' ? `解鎖完整行程 ($0.99)` : `UNLOCK FULL ITINERARY ($0.99)`) : t.applyTemplate}
                                    onPrimaryAction={() => {
                                        if (!isPurchased) {
                                            setShowPurchaseModal(true);
                                        } else {
                                            onApply(template);
                                        }
                                    }}
                                    onCreatorClick={onCreatorClick}
                                    lang={lang}
                                    variant="template"
                                />
                            </div>
                            );
                        })()}
                    </div>
                )}
            </div>
            <div className="h-4 shrink-0" />
        </div>

        {/* Insight Detail Drawer */}
        {selectedInsight && (
            <div className="fixed inset-0 z-[200] flex items-end justify-center px-4 pb-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
                <div 
                    className="fixed inset-0" 
                    onClick={() => setSelectedInsight(null)} 
                />
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    className="relative w-full max-w-lg bg-white rounded-t-[40px] shadow-2xl overflow-hidden pb-12"
                >
                    {/* Drag Handle */}
                    <div className="flex justify-center p-4">
                        <div className="w-12 h-1 bg-black/10 rounded-full" />
                    </div>

                    {/* Use the standalone card component for the full narrative */}
                    <div className="px-6 py-2">
                         <div 
                            className="rounded-[32px] p-8 flex flex-col relative overflow-hidden shadow-sm border border-black/5"
                            style={{ backgroundColor: selectedInsight.backgroundColor || '#F3E8FF' }}
                        >
                            {/* Region Pill */}
                            <div className="absolute top-6 left-6 flex items-center gap-2">
                                <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-black/5 shadow-sm">
                                    <span className="text-[10px] font-black tracking-widest text-[#5B4D7D] uppercase">
                                        {selectedInsight.regionCode} x {lang === 'zh' ? (selectedInsight.regionName === 'Taiwan' ? '台灣' : selectedInsight.regionName) : selectedInsight.regionName}
                                    </span>
                                </div>
                            </div>

                            {/* Type Label */}
                            <div className="mt-8 mb-4">
                                <span className="text-[11px] font-bold text-black/40 uppercase tracking-[0.2em]">
                                    {lang === 'zh' ? selectedInsight.category : (selectedInsight.categoryEn || selectedInsight.category)}
                                </span>
                            </div>

                            {/* Title & Emoji */}
                            <div className="flex items-start justify-between mb-6">
                                <h3 className="text-[24px] font-black text-[#1A1A1A] leading-tight flex-1">
                                    {lang === 'zh' ? selectedInsight.title : (selectedInsight.titleEn || selectedInsight.title)}
                                </h3>
                                <span className="text-4xl filter drop-shadow-md ml-4">{selectedInsight.emoji}</span>
                            </div>

                            {/* Narrative Content */}
                            <div className="flex-1 mb-8">
                                <p className="text-[16px] leading-[1.7] text-[#333333] font-medium opacity-90">
                                    {lang === 'zh' ? selectedInsight.content : (selectedInsight.contentEn || selectedInsight.content)}
                                </p>
                            </div>

                            {/* Foreigner Reaction Box */}
                            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-5 border border-white/40">
                                <p className="text-[14px] leading-relaxed text-[#5B4D7D] font-bold italic">
                                    {lang === 'zh' ? selectedInsight.foreignerReaction : (selectedInsight.foreignerReactionEn || selectedInsight.foreignerReaction)}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        )}
        {/* Purchase modal now handled by parent App.tsx for header/content sync */}
        </>
    );
};
