import React, { useState } from 'react';
import { Star, Clock, MapPin, Calendar, Sparkles, Check, ChevronRight, Info, Lightbulb, Sun, Navigation, User } from 'lucide-react';
import { Template, LangType } from '../../types';
import { SAMPLE_CREATORS } from '../../data';
import { EngagementSocialBlock } from '../Common/EngagementSocialBlock';

interface TemplateDetailsPanelProps {
    template: Template;
    lang: LangType;
    onApply: (tpl: Template) => void;
    onCreatorClick?: (creatorId: string) => void;
    onSpotClick?: (spot: any) => void;
}

export const TemplateDetailsPanel: React.FC<TemplateDetailsPanelProps> = ({
    template,
    lang,
    onApply,
    onCreatorClick,
    onSpotClick
}) => {
    const [activeTab, setActiveTab] = useState('overview');
    const creator = SAMPLE_CREATORS.find(c => c.id === template.authorId);

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


    return (
        <div className="flex flex-col bg-[#F7FBF0] pb-20 font-sans overflow-x-hidden">
            {/* 1. Hero Section (REFINED PROPORTIONS) */}
            <div className="relative w-full h-[36vh] md:aspect-video shrink-0 bg-gray-100 overflow-hidden">
                <img
                    src={template.coverImage}
                    className="w-full h-full object-cover"
                    alt={template.name}
                />

                {/* 1a. Navigation Overlay (Isolated) */}
                <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-center z-30">
                    {/* Placeholder for Back button if handled separately, or just transparent bar */}
                </div>

                {/* 1b. Bottom Area (Social & Content) */}
                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end p-8 pb-7">

                    {/* Creator Identity (REFINED WEIGHT & SPACING) */}
                    <button
                        onClick={() => onCreatorClick?.(template.authorId)}
                        className="flex items-center gap-3 mb-1.5 px-1 group active:opacity-70 transition-all"
                    >
                        <img
                            src={creator?.avatar || `https://i.pravatar.cc/100?u=${template.authorId}`}
                            className="w-8 h-8 rounded-full object-cover border-2 border-white/40 shadow-xl"
                            alt="creator"
                        />
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[15px] text-white/95 font-semibold tracking-[0.1em] drop-shadow-md">
                                {lang === 'zh' ? (creator?.name || template.author) : (creator?.nameEn || creator?.name || template.authorEn || template.author)}
                            </span>
                        </div>
                    </button>

                    <h1 className="text-[20px] md:text-[32px] font-heading font-semibold text-white leading-tight tracking-[0.05em] max-w-[95%] mb-2.5 drop-shadow-md">
                        {lang === 'zh' ? template.name : (template.nameEn || template.name)}
                    </h1>

                    <div className="flex items-center gap-4 text-white/50 text-[11px] font-bold tracking-[0.2em] uppercase">
                        <span>2024/05/10 {lang === 'zh' ? '發佈' : 'Published'}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span>{template.copiedCount || '1.2K'} {lang === 'zh' ? '人都在用' : 'people using'}</span>
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
                        {/* 3a. Editorial Quote (SIMPLIFIED for vertical flow) */}
                        <div className="relative pl-6 py-2">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400/30 rounded-full" />
                            <p className="text-[18px] md:text-[20px] text-[#181D17] leading-[1.7] font-bold italic tracking-tight">
                                "{displayQuote}"
                            </p>
                        </div>

                        {/* 3b. Stats Grid */}
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { label: lang === 'zh' ? '天數' : 'DAYS', value: `${template.duration} ${lang === 'zh' ? '天' : 'D'}`, icon: <Calendar size={18} /> },
                                { label: lang === 'zh' ? '景點' : 'SPOTS', value: template.highlights?.spots || 12, icon: <MapPin size={18} /> },
                                { label: lang === 'zh' ? '評分' : 'RATING', value: template.rating || 4.9, icon: <Star size={18} /> },
                                { label: lang === 'zh' ? '熱度' : 'COPIED', value: template.copiedCount || 100, icon: <Sparkles size={18} /> },
                            ].map((card, i) => (
                                <div key={i} className="bg-white p-5 rounded-[24px] border border-[#E8EDE4]/60 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-bg-primary/5 flex items-center justify-center text-bg-primary shrink-0">{card.icon}</div>
                                    <div>
                                        <div className="text-[9px] font-black text-[#8E9285] uppercase tracking-wider">{card.label}</div>
                                        <div className="text-[16px] font-black text-[#181D17]">{card.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 3c. Know Before You Go */}
                        <div>
                            <h4 className="text-[20px] font-heading font-black text-[#181D17] mb-6">{t.knowBeforeYouGo}</h4>
                            <div className="space-y-4">
                                {[
                                    { title: t.bestTime, text: lang === 'zh' ? template.faq?.[0]?.text : template.faq?.[0]?.textEn, icon: <Sun size={20} /> },
                                    { title: t.gettingAround, text: lang === 'zh' ? template.faq?.[2]?.text : template.faq?.[2]?.textEn, icon: <Navigation size={20} /> },
                                    { title: t.expertAdvice, text: lang === 'zh' ? template.faq?.[1]?.text : template.faq?.[1]?.textEn, icon: <Lightbulb size={20} /> },
                                ].filter(card => card.text).map((card, i) => (
                                    <div key={i} className="bg-[#F1F3EE] p-6 rounded-[28px] flex gap-5">
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-bg-primary shrink-0 shadow-sm">{card.icon}</div>
                                        <div>
                                            <div className="text-[11px] font-black text-[#8E9285] uppercase tracking-[0.15em] mb-1">{card.title}</div>
                                            <p className="text-[15px] font-semibold text-[#181D17] leading-relaxed">{card.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
                                                    <div className="bg-amber-400 text-black px-2 py-1 rounded-lg flex flex-col items-center shadow-lg">
                                                        <Star size={10} fill="currentColor" />
                                                        <span className="text-[8px] font-black leading-none mt-0.5">TOP</span>
                                                    </div>
                                                    <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 hover:bg-white hover:text-red-500 transition-all">
                                                        <Star size={14} className={i % 2 === 0 ? "fill-white text-white" : ""} />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Info Below Image */}
                                            <div className="px-1">
                                                <h5 className="text-[16px] font-black text-[#181D17] leading-tight line-clamp-1 mb-1.5">
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
                            primaryActionLabel={t.applyTemplate}
                            onPrimaryAction={() => onApply(template)}
                            onCreatorClick={onCreatorClick}
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
                                    <div className="mb-8 text-center">
                                        <h2 className="text-[22px] font-black text-[#181D17] leading-snug">{lang === 'zh' ? dayData.theme : (dayData.themeEn || dayData.theme)} {dayData.themeEmoji}</h2>
                                    </div>

                                    {/* Timeline + Items */}
                                    <div className="space-y-0">
                                        {[...(dayData.morning || []), ...(dayData.afternoon || []), ...(dayData.evening || [])].map((item, idx, arr) => (
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
                                                        {item.startTime || '09:00'}
                                                    </div>

                                                    {/* Vertical line segment BELOW dot */}
                                                    {idx < arr.length - 1 && (
                                                        <div className="w-0.5 flex-1 min-h-[24px] bg-[#E8EDE4] -mt-0.5" />
                                                    )}
                                                </div>

                                                {/* RIGHT COLUMN: Clickable Card */}
                                                <div
                                                    onClick={() => onSpotClick?.({ ...item, id: item.id || `spot-${idx}`, images: item.images || [`https://images.unsplash.com/photo-${1500000000000 + (item.title?.length || 0) * 1234567}?auto=format&fit=crop&w=800&q=80`] })}
                                                    className="flex-1 flex items-center gap-3 bg-white border border-[#E8EDE4] rounded-2xl p-3 shadow-[0_1px_6px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:border-[#C8D5C0] active:border-[#4A7C59] active:shadow-[0_2px_8px_rgba(0,0,0,0.12)] active:scale-[0.99] cursor-pointer transition-all duration-200"
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
                                                        <div className="flex items-center gap-2 mb-0.5">
                                                            <span className="text-[10px] font-black text-bg-primary uppercase tracking-widest">{item.type}</span>
                                                            {item.rating && <div className="flex items-center gap-0.5 text-[10px] font-bold text-amber-500"><Star size={9} fill="currentColor" /><span>{item.rating}</span></div>}
                                                        </div>
                                                        <h5 className="text-[15px] font-black text-[#181D17] leading-snug flex items-center gap-1">
                                                            <span className="line-clamp-1">{lang === 'zh' ? item.title : (item.titleEn || item.title)}</span>
                                                            <ChevronRight size={12} className="shrink-0 opacity-30 group-hover:opacity-70 group-hover:translate-x-0.5 transition-all text-[#8E9285]" />
                                                        </h5>
                                                        {(item.description || item.descriptionEn) && (
                                                            <p className="text-[11.5px] text-[#4A5548] mt-2 line-clamp-2 leading-[1.6] opacity-60">
                                                                {lang === 'zh' ? item.description : (item.descriptionEn || item.description)}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 mb-8">
                                        <p className="text-center text-[10px] text-[#8E9285] font-black uppercase tracking-widest mt-6 opacity-40">End of Day {dayNum}</p>
                                    </div>

                                    <EngagementSocialBlock
                                        author={creator || null}
                                        primaryActionLabel={t.applyTemplate}
                                        onPrimaryAction={() => onApply(template)}
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
    );
};
