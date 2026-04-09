import React, { useState } from 'react';
import { Search, MapPin, Star, Heart, Zap, Sparkles, ChevronRight, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Template, LangType, Region, TravelItem, CulturalInsight } from '../../types';
import { REGION_FILTERS, COUNTRY_FILTERS, TEMPLATES, MELBOURNE_ASSETS, SAMPLE_CREATORS, CULTURAL_WONDERS } from '../../data';
import { CulturalInsightCard } from './CulturalInsightCard';

interface CityPickerProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    onSelectCity: (region: Region) => void;
    onPreviewTemplate: (template: Template) => void;
    onSelectItem: (item: TravelItem, source?: 'map' | 'sidebar' | 'canvas' | 'discovery' | null) => void;
    lang: LangType;
    t: Record<string, string>;
    isSelectionOnly?: boolean;
}

import { ALL_SURVIVAL_GUIDES } from '../../data/guides/compass';
import { SurvivalKit } from './SurvivalKit';
import { TAIWAN_TOP_PICKS, resolvePicks } from '../../data/assets/taiwan/picks';
import { getRegionName } from '../../data/regions';

export const CityPicker: React.FC<CityPickerProps> = ({
    searchQuery,
    setSearchQuery,
    onSelectCity,
    onPreviewTemplate,
    onSelectItem,
    lang,
    t,
    isSelectionOnly = false
}) => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [activePicksFilter, setActivePicksFilter] = useState<string>('taiwan');
    const [showAllTopSpots, setShowAllTopSpots] = useState(false);
    const [showAllTemplates, setShowAllTemplates] = useState(false);
    const [likedSpots, setLikedSpots] = useState<Set<string>>(new Set());
    const [selectedInsight, setSelectedInsight] = useState<CulturalInsight | null>(null);

    const toggleLike = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setLikedSpots(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const filteredCities = REGION_FILTERS.filter(city =>
        city.id !== 'all' && (lang === 'zh' ? city.label : city.labelEn).toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredCountries = COUNTRY_FILTERS.filter(country =>
        (lang === 'zh' ? country.label : country.labelEn).toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filters = [
        { id: 'all', label: lang === 'zh' ? '所有行程' : 'ALL PLANS' },
        { id: '1day', label: lang === 'zh' ? '一日遊' : '1 DAY' },
        { id: 'short', label: lang === 'zh' ? '2-3天' : '2-3 DAYS' },
        { id: 'long', label: lang === 'zh' ? '深度遊' : 'IN-DEPTH' },
        { id: 'budget', label: lang === 'zh' ? '小資族' : 'BUDGET' },
        { id: 'premium', label: lang === 'zh' ? '奢華' : 'PREMIUM' },
    ];

    // Dynamic Top Picks Resolution
    const topSpots = resolvePicks(activePicksFilter);

    // Dynamic Filter Pills for Top Picks ranking
    const picksRegions = Object.keys(TAIWAN_TOP_PICKS).map(key => ({
        id: key,
        label: key === 'taiwan' 
            ? (lang === 'zh' ? '全台灣' : 'TAIWAN')
            : (lang === 'zh' ? getRegionName(key as Region, lang) : key.toUpperCase())
    }));

    // City Avatar Fallbacks
    const cityImages: Record<string, string> = {
        taipei: 'https://images.unsplash.com/photo-1598935898639-81586f7d2129?auto=format&fit=crop&q=80&w=400',
        tainan: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&q=80&w=400',
        taichung: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&q=80&w=400',
        hualien: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=400',
        tokyo: 'https://images.unsplash.com/photo-1540959733332-e9ab42be6125?auto=format&fit=crop&q=80&w=400',
        osaka: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&q=80&w=400',
        kyoto: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=400',
        melbourne: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&q=80&w=400',
    };

    return (
        <div className="min-h-full bg-tc-bg pb-24">
            {/* Top App Bar (Emerald Canopy Spec: 64px height, 24px px) */}
            <div className="h-16 px-6 flex items-center justify-between sticky top-0 bg-tc-bg/80 backdrop-blur-md z-50">
                <div className="flex items-center gap-2">
                    <Leaf className="text-tc-primary w-5 h-5 fill-tc-primary" />
                    <span className="font-heading font-bold text-tc-primary text-xl tracking-[-0.05em]">Travel Canvas</span>
                </div>
            </div>

            <div className="pt-8 px-6">
                <div className="flex justify-center mb-3">
                    <span className="text-[11px] font-semibold text-tc-primary tracking-[0.2em] uppercase">
                        Discovery
                    </span>
                </div>
                <h1 className="text-[32px] md:text-5xl font-heading font-bold text-tc-text-main leading-tight text-center tracking-[-0.02em] max-w-sm mx-auto">
                    {lang === 'zh' ? '下一站，你想去哪？' : 'Where will you travel next?'}
                </h1>

                {/* Sticky Search Bar (White Canopy Refined: bg-gray-50 base) */}
                <div className="mt-10 max-w-[400px] mx-auto relative px-1">
                    <div className="h-[56px] flex items-center bg-gray-50 rounded-2xl shadow-sm border border-gray-100 p-1.5 pl-5 transition-all focus-within:ring-2 ring-tc-primary/5 focus-within:bg-white">
                        <Search className="text-tc-text-sec/60 w-5 h-5 flex-shrink-0" />
                        <input
                            type="text"
                            placeholder={t.searchDiscoveryPlaceholder || "Search spots, cities..."}
                            className="flex-1 bg-transparent border-none focus:ring-0 text-[15px] py-1.5 px-3 text-tc-text-main placeholder:text-tc-text-sec/40 font-medium outline-none min-w-0"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="bg-tc-primary text-white h-full px-8 rounded-xl text-sm font-bold shadow-sm hover:opacity-90 transition-all flex-shrink-0">
                            {t.searchGo || "Go"}
                        </button>
                    </div>
                </div>

                {/* City Shortcuts (Emerald Canopy Spec: 64px, 10px Bold text) */}
                <div className="flex gap-4 overflow-x-auto no-scrollbar mt-12 pb-4 justify-between md:justify-center md:gap-10">
                    {filteredCities.map((city) => (
                        <button
                            key={city.id}
                            onClick={() => onSelectCity(city.id)}
                            className="flex-shrink-0 flex flex-col items-center gap-3 group snap-start"
                        >
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent group-focus-within:border-tc-primary group-active:border-tc-primary transition-all shadow-sm group-hover:shadow-md relative bg-gray-50">
                                <img
                                    src={cityImages[city.id] || "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=400"}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    alt={city.label}
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                            </div>
                            <span className="text-[10px] font-bold text-tc-text-sec uppercase tracking-wider group-hover:text-tc-primary transition-colors">
                                {city.labelEn}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {!isSelectionOnly && (
                <>
                    {/* [NEW] Taiwan Compass Dynamic Section */}
                    <div className="mt-8">
                        <SurvivalKit 
                            guides={ALL_SURVIVAL_GUIDES} 
                            lang={lang} 
                            title="TAIWAN COMPASS"
                            titleEn="TAIWAN COMPASS"
                            subtitle="台灣指南針：全台必備生存錦囊"
                            subtitleEn="The Essential Taiwan Survival Guide"
                        />
                    </div>

                    {/* Canvas Top Picks Section */}
                    <div className="mt-12 px-6">
                        <div className="flex flex-col gap-6 mb-8">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-600">
                                        Editor's Choice
                                    </h3>
                                    <p className="text-[20px] font-serif font-black text-gray-900 leading-tight">
                                        {lang === 'zh' ? '萬中選一的台灣味' : 'Handpicked Taiwan Gems'}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowAllTopSpots(!showAllTopSpots)}
                                    className="flex items-center gap-1 text-[11px] font-black text-tc-text-sec uppercase tracking-widest"
                                >
                                    {showAllTopSpots ? 'LESS' : 'MORE'}
                                </button>
                            </div>

                            {/* Top Picks Region Filter Bar */}
                            <div className="flex gap-2.5 overflow-x-auto no-scrollbar py-1">
                                {picksRegions.map(opt => (
                                    <button
                                        key={opt.id}
                                        onClick={() => setActivePicksFilter(opt.id)}
                                        className={`flex-shrink-0 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                                            activePicksFilter === opt.id
                                                ? 'bg-gray-900 text-white shadow-md'
                                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                        }`}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={showAllTopSpots
                            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4 animate-in fade-in duration-300"
                            : "flex gap-5 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory"
                        }>
                            {topSpots.map((spot, idx) => (
                                <button
                                    key={spot.id}
                                    onClick={() => onSelectItem(spot, 'discovery')}
                                    className={`text-left group flex flex-col snap-center ${showAllTopSpots ? 'w-full' : 'w-[142px] md:w-[189.33px] flex-shrink-0'}`}
                                >
                                    <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden bg-gray-50 shadow-sm group-hover:shadow-[0_15px_45px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-1.5 border border-gray-100/50">
                                        <img
                                            src={spot.coverImage || (spot.image?.startsWith('http') ? spot.image : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800")}
                                            alt={spot.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {/* TOP Badge (Refined: Image 2 Style - Green Pill) */}
                                        <div className="absolute top-4 left-4 z-20">
                                            <div className="px-3 py-1 bg-[#0D631B] rounded-full shadow-lg border border-white/20">
                                                <span className="text-[10px] font-black text-white uppercase tracking-tighter">TOP {idx + 1}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 px-3">
                                        <div className="flex items-center gap-3 text-[10px] font-black text-tc-text-sec/60 mb-2 tracking-widest uppercase">
                                            <div className="flex items-center gap-1.5">
                                                <Heart size={10} className={`transition-colors ${likedSpots.has(spot.id) ? 'fill-tc-primary text-tc-primary' : 'text-tc-primary/40'}`} />
                                                <span>{23 + idx}.{(idx * 7) % 9}K</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Star size={10} className="fill-amber-400 text-amber-400" />
                                                <span>4.{9 - idx}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-[16px] font-bold text-tc-text-main line-clamp-2 leading-[1.2] group-hover:text-tc-primary transition-colors tracking-tight">
                                            {(lang === 'zh' ? spot.marketingTitle || spot.title : spot.marketingTitleEn || spot.titleEn) || spot.title}
                                        </h3>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Curated For You (Templates) */}
                    <div className="mt-10 px-5 pb-8">
                        <div className="flex items-center justify-between mb-6 px-1 border-b border-gray-100 pb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-tc-primary/5 flex items-center justify-center">
                                    <Zap className="text-tc-primary w-4 h-4 fill-tc-primary" />
                                </div>
                                <h3 className="text-lg font-black tracking-tight text-tc-text-main">
                                    {lang === 'zh' ? '精選模板' : 'Curated For You'}
                                </h3>
                            </div>
                            <button
                                onClick={() => setShowAllTemplates(!showAllTemplates)}
                                className="text-[11px] font-black text-tc-primary hover:text-tc-primary/70 transition-colors uppercase tracking-widest"
                            >
                                ALL
                            </button>
                        </div>

                        {/* Filter Pills (White Canopy Spec: bg-gray-50 for unselected) */}
                        <div className="flex gap-2.5 mb-8 overflow-x-auto no-scrollbar px-1">
                            {filters.map(f => (
                                <button
                                    key={f.id}
                                    onClick={() => setActiveFilter(f.id)}
                                    className={`flex-shrink-0 px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all border ${activeFilter === f.id
                                        ? 'bg-tc-primary text-white shadow-lg border-tc-primary'
                                        : 'bg-gray-50 text-tc-neutral/70 border-gray-100 hover:border-gray-200 shadow-sm'
                                        }`}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>

                        {/* Template Cards Horizontal Walkway */}
                        <div className={showAllTemplates
                            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4 animate-in fade-in duration-300"
                            : "flex gap-5 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory"
                        }>
                            {(() => {
                                // Apply filter
                                let filtered = TEMPLATES;
                                if (activeFilter === '1day') filtered = TEMPLATES.filter(tpl => tpl.duration === 1);
                                else if (activeFilter === 'short') filtered = TEMPLATES.filter(tpl => tpl.duration >= 2 && tpl.duration <= 3);
                                else if (activeFilter === 'long') filtered = TEMPLATES.filter(tpl => tpl.duration >= 4);
                                else if (activeFilter === 'budget') filtered = TEMPLATES.filter(tpl => !tpl.isLocked || tpl.tier !== 'official');
                                else if (activeFilter === 'premium') filtered = TEMPLATES.filter(tpl => tpl.tier === 'official' || tpl.isLocked);

                                if (showAllTemplates) return filtered;

                                // Show diverse for short list
                                return filtered.filter((tpl, index) => index % 2 === 0).slice(0, 5); // Just some subset
                            })().map(tpl => (
                                <button
                                    key={tpl.id}
                                    onClick={() => onPreviewTemplate(tpl)}
                                    className={`text-left group snap-center flex flex-col gap-3 ${showAllTemplates ? 'w-full' : 'flex-shrink-0 w-[240px] md:w-[280px]'}`}
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-sm border border-tc-border/20 group-hover:shadow-[0_10px_30px_rgba(13,99,27,0.08)] transition-all group-hover:-translate-y-1">
                                        <img
                                            src={tpl.coverImage}
                                            alt={lang === 'zh' ? tpl.name : tpl.nameEn}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Text Content Below */}
                                    <div className="px-1">
                                        <div className="flex items-center gap-1 text-[10px] text-tc-text/50 font-black mb-1 uppercase tracking-wider leading-none">
                                            <MapPin size={10} className="text-tc-tertiary" /> {tpl.region}
                                        </div>
                                        <h4 className="text-[15px] font-heading text-tc-text-main leading-[1.1] line-clamp-2 group-hover:text-tc-primary transition-colors tracking-tight">
                                            {lang === 'zh' ? tpl.name : tpl.nameEn}
                                        </h4>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* [NEW] Global Cultural Flashcards (文化閃卡) - Bottom of Page Version */}
                    <div className="mt-12 px-5 pb-12 overflow-hidden">
                        <div className="flex items-center justify-between mb-8 px-1">
                            <div className="flex items-center gap-2">
                                <Sparkles className="text-tc-primary w-5 h-5" />
                                <h2 className="text-xl font-black text-tc-text-main tracking-tight uppercase">
                                    {lang === 'zh' ? '在地奇景' : 'Local Wonders'}
                                </h2>
                            </div>
                        </div>

                        <div className="flex gap-4 overflow-x-auto no-scrollbar px-1 pb-6 snap-x snap-mandatory">
                            {CULTURAL_WONDERS.map((wonder: CulturalInsight) => (
                                <div key={wonder.id} className="snap-center">
                                    <CulturalInsightCard
                                        insight={wonder}
                                        lang={lang}
                                        isCompact={true}
                                        onClick={() => setSelectedInsight(wonder)}
                                    />
                                </div>
                            ))}
                            <div className="min-w-[40px] h-full shrink-0" />
                        </div>
                    </div>
                </>
            )}

            {/* Cultural Insight Detail Drawer (iOS Safe Area Refined) */}
            <AnimatePresence>
                {selectedInsight && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedInsight(null)}
                            className="fixed inset-0 bg-black/60 z-[200] backdrop-blur-sm"
                        />
                        {/* Drawer Content */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-x-0 bottom-0 z-[201] rounded-t-[40px] shadow-2xl max-h-[85vh] overflow-hidden flex flex-col transition-colors duration-500"
                            style={{ backgroundColor: selectedInsight.backgroundColor || '#F3E8FF' }}
                        >
                            {/* Drawer Handle */}
                            <div className="flex justify-center p-4 cursor-grab active:cursor-grabbing" onClick={() => setSelectedInsight(null)}>
                                <div className="w-12 h-1.5 bg-black/10 rounded-full" />
                            </div>

                            <div className="overflow-y-auto px-8 md:px-12 pb-16 flex-1 no-scrollbar">
                                {/* Immersive Full Bleed Card */}
                                <div className="max-w-3xl mx-auto pt-4 pb-8">
                                    <CulturalInsightCard
                                        insight={selectedInsight}
                                        lang={lang}
                                        isCompact={false}
                                        isFullBleed={true}
                                    />

                                    {/* Additional Spacer for IOS Safe Area Indicator */}
                                    <div className="h-[env(safe-area-inset-bottom,40px)] w-full mt-4" />
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CityPicker;
