import React, { useState } from 'react';
import { Search, MapPin, Star, Heart, Zap, Sparkles, ChevronRight, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Template, LangType, Region, TravelItem } from '../../types';
import { REGION_FILTERS, COUNTRY_FILTERS, TEMPLATES, MELBOURNE_ASSETS, SAMPLE_CREATORS } from '../../data';

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
    const [showAllTopSpots, setShowAllTopSpots] = useState(false);
    const [showAllTemplates, setShowAllTemplates] = useState(false);
    const [likedSpots, setLikedSpots] = useState<Set<string>>(new Set());

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

    // Top Spots for the "Canvas Top Picks" ranking
    const topSpots = [
        MELBOURNE_ASSETS.find(a => a.id === 'mel-25')!, // Maria's Pasta
        MELBOURNE_ASSETS.find(a => a.id === 'mel-5')!,  // Eau de Vie
        MELBOURNE_ASSETS.find(a => a.id === 'mel-23')!, // Flagstaff Garden
        MELBOURNE_ASSETS.find(a => a.id === 'mel-1')!,  // Patricia Coffee
        MELBOURNE_ASSETS.find(a => a.id === 'mel-7')!,  // Jungle Boy
    ].filter(Boolean);

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
            {/* Header Section */}
            <div className="pt-8 px-6">
                {/* Brand Logo */}
                <div className="flex items-center gap-2 mb-10">
                    <Leaf className="text-tc-primary w-5 h-5 fill-tc-primary" />
                    <span className="font-heading font-black text-gray-900 text-lg tracking-tight">Travel Canvas</span>
                </div>

                <div className="flex justify-center mb-2">
                    <span className="text-[10px] font-black text-tc-primary tracking-[0.2em] uppercase">
                        Discovery
                    </span>
                </div>
                <h1 className="text-[32px] md:text-5xl font-heading font-black text-gray-900 leading-[1.1] text-center tracking-tight">
                    {lang === 'zh' ? '下一站，你想去哪？' : 'Where will you\ntravel next?'}
                </h1>

                {/* Sticky Search Bar */}
                <div className="sticky top-4 z-40 mt-8 max-w-[360px] mx-auto">
                    <div className="flex items-center bg-white rounded-[24px] shadow-[0_8px_30px_rgba(46,125,50,0.06)] p-2 pl-4 transition-all focus-within:ring-2 ring-tc-primary/20 hover:shadow-[0_12px_40px_rgba(46,125,50,0.1)]">
                        <Search className="text-gray-400 w-5 h-5 flex-shrink-0" />
                        <input
                            type="text"
                            placeholder={t.searchDiscoveryPlaceholder || "Search spots, cities..."}
                            className="flex-1 bg-transparent border-none focus:ring-0 text-[15px] py-1.5 px-3 text-gray-700 placeholder:text-gray-400 font-medium outline-none min-w-0"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="bg-tc-primary text-white px-7 py-2.5 rounded-[20px] text-sm font-bold shadow-sm hover:bg-green-800 transition-colors flex-shrink-0">
                            {t.searchGo || "Go"}
                        </button>
                    </div>
                </div>

                {/* City Shortcuts (Avatars) */}
                <div className="flex gap-4 overflow-x-auto no-scrollbar mt-10 pb-4 justify-between md:justify-center md:gap-8">
                    {filteredCities.map((city) => (
                        <button
                            key={city.id}
                            onClick={() => onSelectCity(city.id)}
                            className="flex-shrink-0 flex flex-col items-center gap-2.5 group snap-start"
                        >
                            <div className="w-[72px] h-[72px] md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-transparent group-focus-within:border-tc-primary group-active:border-tc-primary transition-all shadow-md group-hover:shadow-lg relative">
                                <img
                                    src={cityImages[city.id] || "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=400"}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    alt={city.label}
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                            </div>
                            <span className="text-[10px] md:text-xs font-black text-tc-neutral uppercase tracking-widest group-hover:text-tc-primary transition-colors">
                                {city.labelEn}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {!isSelectionOnly && (
                <>
                    {/* Canvas Top Picks */}
                    <div className="mt-8 px-5">
                        <div className="flex items-center justify-between mb-5 px-1">
                            <div className="flex items-center gap-2">
                                <Sparkles className="text-amber-400 w-6 h-6 fill-amber-400" />
                                <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900 tracking-tight">
                                    Canvas Top Picks
                                </h2>
                            </div>
                            <button
                                onClick={() => setShowAllTopSpots(!showAllTopSpots)}
                                className="flex items-center gap-1 text-[10px] font-black text-[#A0AFA0] hover:text-tc-primary transition-colors uppercase tracking-[0.25em] mb-2"
                            >
                                EXPLORE MORE
                                <ChevronRight size={16} className="mt-0.5 text-tc-primary" />
                            </button>
                        </div>

                        <div className={showAllTopSpots
                            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4 animate-in fade-in duration-300"
                            : "flex gap-5 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory"
                        }>
                            {topSpots.map((spot, idx) => (
                                <button
                                    key={spot.id}
                                    onClick={() => onSelectItem(spot, 'discovery')}
                                    className={`text-left group flex-col snap-center ${showAllTopSpots ? 'w-full' : 'w-[142px] md:w-[189.33px] flex-shrink-0'}`}
                                >
                                    <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-[0_20px_40px_rgba(46,125,50,0.12)] transition-all duration-500 group-hover:-translate-y-1 border border-gray-200/30">
                                        <img
                                            src={spot.coverImage || (spot.image?.startsWith('http') ? spot.image : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800")}
                                            alt={spot.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {/* Glassy TOP Badge */}
                                        <div className="absolute top-5 left-5 z-20">
                                            <div className="px-2.5 py-1 bg-amber-400 rounded-xl shadow-lg border border-white/20 flex flex-col items-center">
                                                <span className="text-[8px] font-black leading-tight text-black uppercase tracking-tighter opacity-80">TOP</span>
                                                <span className="text-lg font-black text-black leading-none -mt-0.5">{String(idx + 1).padStart(2, '0')}</span>
                                            </div>
                                        </div>

                                        {/* Minimalist Heart Icon */}
                                        <button
                                            onClick={(e) => toggleLike(spot.id, e)}
                                            className="absolute top-5 right-6 z-20 transition-all hover:scale-110 active:scale-95 group/heart"
                                        >
                                            <Heart
                                                size={22}
                                                className={`transition-colors duration-300 ${likedSpots.has(spot.id) ? 'fill-tc-primary text-tc-primary' : 'fill-white text-white'}`}
                                            />
                                        </button>
                                    </div>

                                    <div className="mt-5 px-3">
                                        <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400 mb-2 tracking-wide">
                                            <div className="flex items-center gap-1">
                                                <Heart size={12} className={`transition-colors ${likedSpots.has(spot.id) ? 'fill-tc-primary text-tc-primary' : 'fill-tc-primary text-tc-primary opacity-60'}`} />
                                                <span className="text-slate-500">{23 + idx}.{(idx * 7) % 9}K</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Star size={12} className="fill-amber-400 text-amber-400" />
                                                <span className="text-slate-500">4.{9 - idx}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-[28px] font-heading font-black text-gray-900 line-clamp-2 leading-[1.0] group-hover:text-tc-primary transition-colors tracking-tighter">
                                            {(lang === 'zh' ? spot.marketingTitle || spot.title : spot.marketingTitleEn || spot.titleEn) || spot.title}
                                        </h3>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Curated For You (Templates) */}
                    <div className="mt-8 px-5 pb-8">
                        <div className="flex items-center justify-between mb-4 px-1">
                            <div className="flex items-center gap-2">
                                <Zap className="text-tc-primary w-4 h-4 fill-tc-primary" />
                                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-tc-neutral">
                                    CURATED FOR YOU
                                </h3>
                            </div>
                            <button
                                onClick={() => setShowAllTemplates(!showAllTemplates)}
                                className="text-[10px] font-bold text-tc-primary hover:underline transition-colors uppercase tracking-wider"
                            >
                                VIEW ALL
                            </button>
                        </div>

                        {/* Filter Pills */}
                        <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar px-1">
                            {filters.map(f => (
                                <button
                                    key={f.id}
                                    onClick={() => setActiveFilter(f.id)}
                                    className={`flex-shrink-0 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all border border-transparent ${activeFilter === f.id
                                        ? 'bg-tc-primary text-white shadow-md'
                                        : 'bg-white text-tc-neutral shadow-sm hover:border-gray-200'
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
                                    className={`text-left group snap-center ${showAllTemplates ? 'w-full' : 'flex-shrink-0 w-[280px] md:w-[320px]'}`}
                                >
                                    <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden shadow-sm border border-gray-100/50 group-hover:shadow-[0_12px_40px_rgba(46,125,50,0.15)] transition-all group-hover:-translate-y-1">
                                        <img
                                            src={tpl.coverImage}
                                            alt={lang === 'zh' ? tpl.name : tpl.nameEn}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        {/* Gradient Scrim */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                                        <div className="absolute bottom-6 left-6 right-6 z-10">
                                            <div className="flex items-center gap-1.5 text-[10px] text-white/90 font-bold mb-1.5 uppercase tracking-widest leading-none drop-shadow-md">
                                                <MapPin size={12} className="text-tc-tertiary" /> {tpl.region}
                                            </div>
                                            <h4 className="text-[22px] font-heading font-black text-white leading-[1.2] line-clamp-2 drop-shadow-lg">
                                                {lang === 'zh' ? tpl.name : tpl.nameEn}
                                            </h4>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CityPicker;
