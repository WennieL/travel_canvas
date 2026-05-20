import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Star, Heart, Zap, Sparkles, ChevronRight, Leaf, Loader2, Compass, ArrowRight, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Template, LangType, Region, TravelItem, CulturalInsight } from '../../types';
import { REGION_FILTERS, TEMPLATES, SAMPLE_CREATORS, CULTURAL_WONDERS, SAMPLE_ASSETS } from '../../data';
import { CulturalInsightCard } from './CulturalInsightCard';
import { GlobeLoader } from './GlobeLoader';

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
import { CategoryArchiveView } from './CategoryArchiveView';
import { TAIWAN_TOP_PICKS, resolvePicks } from '../../data/assets/taiwan/picks';
import { TAIWAN_GIFTS } from '../../data/assets/taiwan/gifts';
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
    const [activeGiftCategory, setActiveGiftCategory] = useState<string>('all'); // [NEW] Gift Annex category filter
    const [activeArchive, setActiveArchive] = useState<{ title: string, type: 'gifts' | 'wonders' | 'spots' | 'templates', items: any[] } | null>(null);
    const [showAllTopSpots, setShowAllTopSpots] = useState(false);
    const [showAllTemplates, setShowAllTemplates] = useState(false);
    const [likedSpots, setLikedSpots] = useState<Set<string>>(new Set());
    const [selectedInsight, setSelectedInsight] = useState<CulturalInsight | null>(null);

    const [isSearching, setIsSearching] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showOnboardingTip, setShowOnboardingTip] = useState(false);
    const templatesSectionRef = useRef<HTMLDivElement>(null);

    const [transitionLoading, setTransitionLoading] = useState(false);
    const [loadingText, setLoadingText] = useState('');

    const triggerTransition = (text: string, callback: () => void) => {
        setLoadingText(text);
        setTransitionLoading(true);
        setTimeout(() => {
            setTransitionLoading(false);
            callback();
        }, 1500);
    };

    // Onboarding tip visibility check
    useEffect(() => {
        const guideDone = localStorage.getItem('tc_interactive_guide_done');
        if (!guideDone) {
            setShowOnboardingTip(true);
        }
    }, []);

    // Search simulation loader
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setIsSearching(false);
            setShowDropdown(false);
            return;
        }
        setIsSearching(true);
        setShowDropdown(true);
        const timer = setTimeout(() => {
            setIsSearching(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    const lowercaseQuery = searchQuery.toLowerCase().trim();
    
    const matchedCities = REGION_FILTERS.filter(city =>
        city.id !== 'all' && (
            (lang === 'zh' ? city.label : city.labelEn).toLowerCase().includes(lowercaseQuery) ||
            city.id.toLowerCase().includes(lowercaseQuery)
        )
    );

    const matchedTemplates = TEMPLATES.filter(tpl =>
        !tpl.isHidden && (
            (lang === 'zh' ? tpl.name : tpl.nameEn || tpl.name).toLowerCase().includes(lowercaseQuery) ||
            tpl.region.toLowerCase().includes(lowercaseQuery)
        )
    ).slice(0, 5);

    const matchedSpots = SAMPLE_ASSETS.filter(spot =>
        (
            (lang === 'zh' ? spot.title : spot.titleEn || spot.title).toLowerCase().includes(lowercaseQuery) ||
            (spot.description && spot.description.toLowerCase().includes(lowercaseQuery)) ||
            (spot.descriptionEn && spot.descriptionEn.toLowerCase().includes(lowercaseQuery)) ||
            (spot.region && spot.region.toLowerCase().includes(lowercaseQuery))
        )
    ).slice(0, 5);

    const hasResults = matchedCities.length > 0 || matchedTemplates.length > 0 || matchedSpots.length > 0;

    const handleSelectCityFromSearch = (cityId: string) => {
        const cityLabel = REGION_FILTERS.find(c => c.id === cityId)?.label || cityId;
        triggerTransition(
            lang === 'zh' ? `正在規劃前往 ${cityLabel} 的精彩旅程...` : `Preparing your journey to ${cityId}...`,
            () => {
                if (isSelectionOnly) {
                    onSelectCity(cityId as Region);
                } else {
                    setActivePicksFilter(cityId);
                    setTimeout(() => {
                        templatesSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
            }
        );
        setSearchQuery('');
        setShowDropdown(false);
    };

    const handleSelectTemplateFromSearch = (tpl: Template) => {
        const tplName = lang === 'zh' ? tpl.name : tpl.nameEn || tpl.name;
        triggerTransition(
            lang === 'zh' ? `正在加載行程「${tplName}」...` : `Opening plan "${tplName}"...`,
            () => {
                onPreviewTemplate(tpl);
            }
        );
        setSearchQuery('');
        setShowDropdown(false);
    };

    const handleSelectSpotFromSearch = (spot: TravelItem) => {
        const spotTitle = lang === 'zh' ? spot.title : spot.titleEn || spot.title;
        triggerTransition(
            lang === 'zh' ? `正在定位景點「${spotTitle}」...` : `Locating spot "${spotTitle}"...`,
            () => {
                onSelectItem(spot, 'discovery');
            }
        );
        setSearchQuery('');
        setShowDropdown(false);
    };

    const handleSearchSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        
        const firstCity = matchedCities[0];
        if (firstCity) {
            triggerTransition(
                lang === 'zh' ? `正在探索 ${firstCity.label} 精選行程...` : `Exploring plans in ${firstCity.labelEn}...`,
                () => {
                    setActivePicksFilter(firstCity.id);
                    setTimeout(() => {
                        templatesSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
            );
        } else {
            templatesSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setShowDropdown(false);
    };

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

    const filters = [
        { id: 'all', label: lang === 'zh' ? '所有行程' : 'ALL PLANS' },
        { id: '1day', label: lang === 'zh' ? '一日遊' : '1 DAY' },
        { id: 'short', label: lang === 'zh' ? '2-3天' : '2-3 DAYS' },
        { id: 'long', label: lang === 'zh' ? '深度遊' : 'IN-DEPTH' },
        { id: 'budget', label: lang === 'zh' ? '小資族' : 'BUDGET' },
        { id: 'premium', label: lang === 'zh' ? '奢華' : 'PREMIUM' },
    ];

    // Dynamic Top Picks & Gifts Resolution
    const topSpots = resolvePicks(activePicksFilter, SAMPLE_ASSETS);
    const regionGifts = TAIWAN_GIFTS.filter((gift: TravelItem) =>
        activePicksFilter === 'taiwan' || gift.region === activePicksFilter
    );

    // Dynamic Filter Pills for Top Picks ranking
    const picksRegions = Object.keys(TAIWAN_TOP_PICKS).map(key => ({
        id: key,
        label: key === 'taiwan'
            ? (lang === 'zh' ? '全台灣' : 'TAIWAN')
            : (lang === 'zh' ? getRegionName(key as Region, lang) : key.toUpperCase())
    }));

    // City Avatar Fallbacks
    const cityImages: Record<string, string> = {
        taipei: 'https://images.unsplash.com/photo-1583321500900-82807e458f3c?auto=format&fit=crop&q=80&w=400',
        tainan: 'https://images.unsplash.com/photo-1621848296279-7751546e9acc?auto=format&fit=crop&q=80&w=400',
        taichung: 'https://images.unsplash.com/photo-1705312222607-3891bce8923a?auto=format&fit=crop&q=80&w=400',
        hualien: 'https://images.unsplash.com/photo-1656746792552-c1eda28136d3?auto=format&fit=crop&q=80&w=400',
        kaohsiung: 'https://images.unsplash.com/photo-1647685101882-6bd1835e3263?auto=format&fit=crop&q=80&w=400',
        chiayi: 'https://images.unsplash.com/photo-1675990275056-8012982fb446?auto=format&fit=crop&q=80&w=400',
        nantou: 'https://images.unsplash.com/photo-1719340198760-434a1763b3ac?auto=format&fit=crop&q=80&w=400',
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

                {/* MVP Validation Notice Banner */}
                <div className="mt-8 max-w-md mx-auto px-1">
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/60 rounded-2xl p-4 flex items-start gap-3 shadow-sm">
                        <div className="bg-amber-400 p-1.5 rounded-full mt-0.5 shadow-sm">
                            <Sparkles size={14} className="text-white" />
                        </div>
                        <div>
                            <h4 className="text-[13px] font-black text-amber-900 mb-1 tracking-tight">
                                {lang === 'zh' ? '🚀 MVP 概念驗證測試中' : '🚀 MVP Validation Phase'}
                            </h4>
                            <p className="text-[11px] text-amber-800/80 leading-relaxed font-bold">
                                {lang === 'zh' 
                                    ? '我們正在驗證「零決策行程」的設計！目前團隊全心專注於打造完美的「台北」體驗。點擊下方「Taipei」，體驗為你準備的 3 套旗艦版攻略。'
                                    : 'We are validating the "Zero-Decision" experience! Currently focusing exclusively on Taipei. Click "Taipei" below to explore our 3 flagship guides.'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sticky Search Bar (White Canopy Refined: bg-gray-50 base) */}
                <div className="mt-10 max-w-[400px] mx-auto relative px-1">
                    {/* Onboarding Tooltip */}
                    <AnimatePresence>
                        {showOnboardingTip && (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 15 }}
                                className="absolute bottom-[70px] left-1/2 transform -translate-x-1/2 w-[320px] bg-white border border-tc-primary/20 rounded-2xl p-4 shadow-xl z-[60] flex flex-col gap-3"
                            >
                                {/* Speech Bubble Arrow */}
                                <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-tc-primary/10 rotate-45" />
                                
                                <div className="flex gap-2.5 items-start">
                                    <div className="bg-tc-primary/10 p-2 rounded-xl text-tc-primary flex-shrink-0">
                                        <Sparkles size={16} />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <h4 className="text-[13px] font-bold text-tc-text-main mb-1">
                                            {lang === 'zh' ? '💡 新手探索指引' : '💡 Onboarding Guide'}
                                        </h4>
                                        <p className="text-[11px] text-tc-text-sec leading-relaxed font-medium">
                                            {lang === 'zh'
                                                ? '直接輸入目的地（例如：台北）進行搜尋，或點選下方的「Taipei」直接瀏覽專家推薦的一系列旗艦行程！'
                                                : 'Enter a destination (e.g. Taipei) to search, or click "Taipei" below to explore our expert-led flagship itineraries!'}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex justify-end border-t border-gray-100 pt-2.5">
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowOnboardingTip(false);
                                            localStorage.setItem('tc_interactive_guide_done', 'true');
                                        }}
                                        className="px-4 py-1.5 bg-tc-primary hover:bg-tc-primary/95 text-white text-[10px] font-bold rounded-lg transition-all shadow-sm"
                                    >
                                        {lang === 'zh' ? '我知道了' : 'Got it'}
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <form onSubmit={handleSearchSubmit} className="h-[56px] flex items-center bg-gray-50 rounded-2xl shadow-sm border border-gray-100 p-1.5 pl-5 transition-all focus-within:ring-2 ring-tc-primary/5 focus-within:bg-white relative z-50">
                        {isSearching ? (
                            <Loader2 className="text-tc-primary w-5 h-5 animate-spin flex-shrink-0" />
                        ) : (
                            <Search className="text-tc-text-sec/60 w-5 h-5 flex-shrink-0" />
                        )}
                        <input
                            type="text"
                            placeholder={t.searchDiscoveryPlaceholder || "Search spots, cities..."}
                            className="flex-1 bg-transparent border-none focus:ring-0 text-[15px] py-1.5 px-3 text-tc-text-main placeholder:text-tc-text-sec/40 font-medium outline-none min-w-0"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => {
                                if (searchQuery.trim() !== '') {
                                    setShowDropdown(true);
                                }
                            }}
                        />
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowOnboardingTip(prev => !prev);
                            }}
                            className="p-2 text-tc-text-sec/40 hover:text-tc-primary transition-colors flex-shrink-0 mr-1.5"
                            title={lang === 'zh' ? '顯示探索指引' : 'Show onboarding guide'}
                        >
                            <HelpCircle size={18} />
                        </button>
                        <button type="submit" className="bg-tc-primary text-white h-full px-8 rounded-xl text-sm font-bold shadow-sm hover:opacity-90 transition-all flex-shrink-0">
                            {t.searchGo || "Go"}
                        </button>
                    </form>

                    {/* Search Results Dropdown */}
                    <AnimatePresence>
                        {showDropdown && searchQuery.trim() !== '' && (
                            <>
                                {/* Click outside handler */}
                                <div className="fixed inset-0 z-40" onClick={() => setShowDropdown(false)} />
                                
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl border border-gray-200/80 rounded-2xl shadow-2xl z-50 p-4 max-h-[350px] overflow-y-auto flex flex-col gap-4 scrollbar-hide"
                                >
                                    {isSearching ? (
                                        <div className="py-8 flex flex-col items-center justify-center gap-2 text-tc-text-sec/60 text-xs font-semibold">
                                            <Loader2 size={24} className="text-tc-primary animate-spin" />
                                            <span>{lang === 'zh' ? '正在搜尋中...' : 'Searching...'}</span>
                                        </div>
                                    ) : !hasResults ? (
                                        <div className="py-8 text-center text-tc-text-sec/60 text-xs font-medium">
                                            {lang === 'zh' ? `🔍 找不到與「${searchQuery}」相關的結果` : `🔍 No results found for "${searchQuery}"`}
                                        </div>
                                    ) : (
                                        <>
                                            {/* Matching Cities */}
                                            {matchedCities.length > 0 && (
                                                <div className="flex flex-col gap-1.5">
                                                    <span className="text-[10px] font-bold text-tc-text-sec/50 tracking-wider uppercase pl-1">
                                                        {lang === 'zh' ? '城市/地區' : 'CITIES'}
                                                    </span>
                                                    <div className="flex flex-col gap-1 text-left">
                                                        {matchedCities.map(city => (
                                                            <button
                                                                key={city.id}
                                                                type="button"
                                                                onClick={() => handleSelectCityFromSearch(city.id)}
                                                                className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-tc-primary/5 transition-all text-left text-xs font-bold text-tc-text-main group"
                                                            >
                                                                <div className="flex items-center gap-2">
                                                                    <div className="w-7 h-7 rounded-full bg-tc-primary/10 flex items-center justify-center text-tc-primary">
                                                                        <MapPin size={14} />
                                                                    </div>
                                                                    <span>{lang === 'zh' ? city.label : city.labelEn}</span>
                                                                </div>
                                                                <ArrowRight size={14} className="text-tc-text-sec/20 group-hover:text-tc-primary transition-colors opacity-0 group-hover:opacity-100" />
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Matching Templates */}
                                            {matchedTemplates.length > 0 && (
                                                <div className="flex flex-col gap-1.5">
                                                    <span className="text-[10px] font-bold text-tc-text-sec/50 tracking-wider uppercase pl-1">
                                                        {lang === 'zh' ? '精選行程' : 'ITINERARIES'}
                                                    </span>
                                                    <div className="flex flex-col gap-1 text-left">
                                                        {matchedTemplates.map(tpl => (
                                                            <button
                                                                key={tpl.id}
                                                                type="button"
                                                                onClick={() => handleSelectTemplateFromSearch(tpl)}
                                                                className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-tc-primary/5 transition-all text-left text-xs font-bold text-tc-text-main group"
                                                            >
                                                                <div className="flex items-center gap-2">
                                                                    <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                                                        <Compass size={14} />
                                                                    </div>
                                                                    <div className="flex flex-col">
                                                                        <span className="line-clamp-1">{lang === 'zh' ? tpl.name : tpl.nameEn || tpl.name}</span>
                                                                        <span className="text-[9px] text-tc-text-sec/60 font-medium">{tpl.duration} {lang === 'zh' ? '天' : 'Days'} • {tpl.region}</span>
                                                                    </div>
                                                                </div>
                                                                <ArrowRight size={14} className="text-tc-text-sec/20 group-hover:text-tc-primary transition-colors opacity-0 group-hover:opacity-100" />
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Matching Spots */}
                                            {matchedSpots.length > 0 && (
                                                <div className="flex flex-col gap-1.5">
                                                    <span className="text-[10px] font-bold text-tc-text-sec/50 tracking-wider uppercase pl-1">
                                                        {lang === 'zh' ? '精選景點' : 'SPOTS'}
                                                    </span>
                                                    <div className="flex flex-col gap-1 text-left">
                                                        {matchedSpots.map(spot => (
                                                            <button
                                                                key={spot.id}
                                                                type="button"
                                                                onClick={() => handleSelectSpotFromSearch(spot)}
                                                                className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-tc-primary/5 transition-all text-left text-xs font-bold text-tc-text-main group"
                                                            >
                                                                <div className="flex items-center gap-2">
                                                                    <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                                                                        <MapPin size={14} />
                                                                    </div>
                                                                    <div className="flex flex-col text-left">
                                                                        <span className="line-clamp-1">{lang === 'zh' ? spot.title : spot.titleEn || spot.title}</span>
                                                                        <span className="text-[9px] text-tc-text-sec/60 font-medium">{lang === 'zh' ? spot.address : spot.addressEn || spot.address}</span>
                                                                    </div>
                                                                </div>
                                                                <ArrowRight size={14} className="text-tc-text-sec/20 group-hover:text-tc-primary transition-colors opacity-0 group-hover:opacity-100" />
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>

                {/* City Shortcuts acts as Global Filter */}
                <div className="flex gap-4 overflow-x-auto no-scrollbar mt-12 pb-4 justify-between md:justify-center md:gap-10">
                    <button
                        onClick={() => {
                            triggerTransition(
                                lang === 'zh' ? '正在為您拼貼全台灣精彩行程...' : 'Assembling flagship itineraries for Taiwan...',
                                () => {
                                    if (isSelectionOnly) {
                                        onSelectCity('taiwan' as Region);
                                    } else {
                                        setActivePicksFilter('taiwan');
                                        setTimeout(() => {
                                            templatesSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }, 100);
                                    }
                                }
                            );
                        }}
                        className={`flex-shrink-0 flex flex-col items-center gap-3 group snap-start`}
                    >
                        <div className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-all shadow-sm relative bg-gray-50 ${activePicksFilter === 'taiwan' ? 'border-tc-primary shadow-md' : 'border-transparent group-hover:border-tc-primary/40'}`}>
                            <div className="w-full h-full flex items-center justify-center bg-gray-100/50">
                                <Sparkles size={24} className={activePicksFilter === 'taiwan' ? 'text-tc-primary' : 'text-tc-text-sec/40 group-hover:text-tc-primary/60 transition-colors'} />
                            </div>
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors ${activePicksFilter === 'taiwan' ? 'text-tc-primary' : 'text-tc-text-sec group-hover:text-tc-primary/80'}`}>
                            {lang === 'zh' ? '全台探索' : 'ALL TAIWAN'}
                        </span>
                    </button>
                    {filteredCities.map((city) => (
                        <button
                            key={city.id}
                            onClick={() => {
                                triggerTransition(
                                    lang === 'zh' ? `正在拼貼 ${city.label} 行程圖景...` : `Assembling ${city.labelEn} itineraries...`,
                                    () => {
                                        if (isSelectionOnly) {
                                            onSelectCity(city.id as Region);
                                        } else {
                                            setActivePicksFilter(city.id);
                                            setTimeout(() => {
                                                templatesSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }, 100);
                                        }
                                    }
                                );
                            }}
                            className="flex-shrink-0 flex flex-col items-center gap-3 group snap-start"
                        >
                            <div className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-all shadow-sm relative bg-gray-50 ${activePicksFilter === city.id ? 'border-tc-primary shadow-md' : 'border-transparent group-hover:border-tc-primary/40'}`}>

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

            {/* Main Content Separator (demarcates navigation from content) */}
            <div ref={templatesSectionRef} className="h-px bg-gray-100 mx-10 mt-16 opacity-60" />

            {!isSelectionOnly && (
                <>
                    {/* 1. Curated For You (Templates) - PRIMARY CORE */}
                    <div className="mt-12 px-5 pb-8">
                        <div className="flex items-center justify-between mb-6 px-1">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-tc-primary/5 flex items-center justify-center">
                                    <Zap className="text-tc-primary w-4 h-4 fill-tc-primary" />
                                </div>
                                <h3 className="text-lg font-black tracking-tight text-tc-text-main">
                                    {lang === 'zh' ? `精選${activePicksFilter === 'taiwan' ? '' : getRegionName(activePicksFilter, 'zh')}行程` : `Curated For You in ${getRegionName(activePicksFilter, 'en')}`}
                                </h3>
                            </div>
                            <button
                                onClick={() => {
                                    let filtered = TEMPLATES.filter(tpl => (activePicksFilter === 'taiwan' || tpl.region === activePicksFilter) && !tpl.isHidden);
                                    if (activeFilter === '1day') filtered = filtered.filter(tpl => tpl.duration === 1);
                                    else if (activeFilter === 'short') filtered = filtered.filter(tpl => tpl.duration >= 2 && tpl.duration <= 3);
                                    else if (activeFilter === 'long') filtered = filtered.filter(tpl => tpl.duration >= 4);
                                    else if (activeFilter === 'budget') filtered = filtered.filter(tpl => !tpl.isLocked || tpl.tier !== 'official');
                                    else if (activeFilter === 'premium') filtered = filtered.filter(tpl => tpl.tier === 'official' || tpl.isLocked);

                                    setActiveArchive({
                                        title: lang === 'zh' ? `精選${activePicksFilter === 'taiwan' ? '' : getRegionName(activePicksFilter, 'zh')}行程` : `Curated For You in ${getRegionName(activePicksFilter, 'en')}`,
                                        type: 'templates',
                                        items: filtered
                                    });
                                }}
                                className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-200/50 hover:bg-gray-200 transition-colors"
                            >
                                <ChevronRight size={18} className="text-gray-900" />
                            </button>
                        </div>

                        {/* Filter Pills */}
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
                        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory min-h-[100px]">
                            {(() => {
                                let filtered = TEMPLATES.filter(tpl => (activePicksFilter === 'taiwan' || tpl.region === activePicksFilter) && !tpl.isHidden);
                                if (activeFilter === '1day') filtered = filtered.filter(tpl => tpl.duration === 1);
                                else if (activeFilter === 'short') filtered = filtered.filter(tpl => tpl.duration >= 2 && tpl.duration <= 3);
                                else if (activeFilter === 'long') filtered = filtered.filter(tpl => tpl.duration >= 4);
                                else if (activeFilter === 'budget') filtered = filtered.filter(tpl => !tpl.isLocked || tpl.tier !== 'official');
                                else if (activeFilter === 'premium') filtered = filtered.filter(tpl => tpl.tier === 'official' || tpl.isLocked);

                                const results = filtered.slice(0, 8);
                                
                                if (results.length === 0) {
                                    return (
                                        <div className="w-full py-12 flex flex-col items-center justify-center bg-gray-50/50 rounded-[32px] border-2 border-dashed border-gray-100/80 mx-1">
                                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-4">
                                                <Sparkles className="text-amber-400 w-6 h-6" />
                                            </div>
                                            <p className="text-[13px] font-black text-gray-400 uppercase tracking-[0.2em]">
                                                {lang === 'zh' ? '敬請期待 靈感正在醞釀中' : 'Coming Soon'}
                                            </p>
                                        </div>
                                    );
                                }

                                return results.map(tpl => (
                                    <button
                                        key={tpl.id}
                                        onClick={() => onPreviewTemplate(tpl)}
                                        className="text-left group snap-center flex flex-col gap-3 flex-shrink-0 w-[240px] md:w-[280px]"
                                    >
                                        <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-sm border border-tc-border/20 group-hover:shadow-[0_10px_30px_rgba(13,99,27,0.08)] transition-all group-hover:-translate-y-1">
                                            <img
                                                src={tpl.coverImage}
                                                alt={lang === 'zh' ? tpl.name : tpl.nameEn}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>

                                        <div className="px-1">
                                            <div className="flex items-center gap-1 text-[10px] text-tc-text/50 font-black mb-1 uppercase tracking-wider leading-none">
                                                <MapPin size={10} className="text-tc-tertiary" /> {tpl.region}
                                            </div>
                                            <h4 className="text-[15px] font-heading text-tc-text-main leading-[1.1] line-clamp-2 group-hover:text-tc-primary transition-colors tracking-tight">
                                                {lang === 'zh' ? tpl.name : tpl.nameEn}
                                            </h4>
                                        </div>
                                    </button>
                                ));
                            })()}
                        </div>
                    </div>

                    {/* Separator */}
                    <div className="h-px bg-gray-100 mx-10 mt-16 opacity-60" />

                    {/* 2. Editor's Choice (Top Picks) - SECONDARY CORE */}
                    <div className="mt-12 px-6">
                        <div className="flex flex-col gap-6 mb-8">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-600">
                                        Editor's Choice
                                    </h3>
                                    <p className="text-[20px] font-serif font-black text-gray-900 leading-tight">
                                        {lang === 'zh' ? `萬中選一的${activePicksFilter === 'taiwan' ? '台灣' : getRegionName(activePicksFilter, 'zh')}味` : `Handpicked ${getRegionName(activePicksFilter, 'en')} Gems`}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setActiveArchive({
                                        title: lang === 'zh' ? `萬中選一的${activePicksFilter === 'taiwan' ? '台灣' : getRegionName(activePicksFilter, 'zh')}味` : `Handpicked ${getRegionName(activePicksFilter, 'en')} Gems`,
                                        type: 'spots',
                                        items: topSpots
                                    })}
                                    className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-200/50 hover:bg-gray-200 transition-colors"
                                >
                                    <ChevronRight size={18} className="text-gray-900" />
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory">
                            {topSpots.map((spot: TravelItem, idx: number) => (
                                <button
                                    key={`${spot.id}-${idx}`}
                                    onClick={() => onSelectItem(spot, 'discovery')}
                                    className={`text-left group flex flex-col snap-center ${showAllTopSpots ? 'w-full' : 'w-[142px] md:w-[189.33px] flex-shrink-0'}`}
                                >
                                    <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden bg-gray-50 shadow-sm group-hover:shadow-[0_15px_45px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-1.5 border border-gray-100/50">
                                        <img
                                            src={spot.coverImage || (spot.image?.startsWith('http') ? spot.image : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800")}
                                            alt={spot.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
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

                    {/* Separator */}
                    <div className="h-px bg-gray-100 mx-10 mt-16 opacity-60" />

                    {/* 3. Taiwan Compass (Survival Guide) - SUPPORTING INFO */}
                    <div className="mt-12">
                        <SurvivalKit
                            guides={ALL_SURVIVAL_GUIDES}
                            lang={lang}
                            title={activePicksFilter === 'taiwan' ? "TAIWAN COMPASS" : `${getRegionName(activePicksFilter, 'en').toUpperCase()} COMPASS`}
                            titleEn={activePicksFilter === 'taiwan' ? "TAIWAN COMPASS" : `${getRegionName(activePicksFilter, 'en').toUpperCase()} COMPASS`}
                            subtitle={lang === 'zh' ? `${activePicksFilter === 'taiwan' ? '台灣' : getRegionName(activePicksFilter, 'zh')}指南針：必備生存錦囊` : `The Essential ${getRegionName(activePicksFilter, 'en')} Survival Guide`}
                            subtitleEn={`The Essential ${getRegionName(activePicksFilter, 'en')} Survival Guide`}
                            activeRegionFilter={activePicksFilter}
                        />
                    </div>

                    {/* 4. [CONSOLIDATED] Local Finds: Gift Annex & Cultural Wonders */}
                    <div className="mt-24 bg-gray-50/50 py-16 border-t border-b border-gray-100">
                        <div className="px-6 mb-12">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-tc-primary mb-2">
                                Explorer's Annex
                            </h2>
                            <p className="text-[24px] font-serif font-black text-gray-900 leading-tight mb-2">
                                {lang === 'zh' ? '在地的靈感角落' : 'Local Inspiration Corner'}
                            </p>
                            <p className="text-[14px] text-tc-text-sec/60 max-w-xs">
                                {lang === 'zh' ? '探索那些讓旅程更完整的文化奇景與必帶伴手禮。' : 'Discover the wonders and souvenirs that complete your journey.'}
                            </p>
                        </div>

                        {/* Gift Annex Sub-section */}
                        <div className="px-6 mb-16">
                            <div className="flex items-center justify-between mb-8">
                                <h4 className="text-[13px] font-black uppercase tracking-widest text-gray-900 border-l-4 border-tc-primary pl-3">
                                    {lang === 'zh' ? '伴手禮圖鑑' : 'The Gift Annex'}
                                </h4>
                                <button
                                    onClick={() => setActiveArchive({ title: t.theGiftAnnex || "品味台灣：旅人伴手禮圖鑑", type: 'gifts', items: regionGifts })}
                                    className="text-[11px] font-bold text-tc-primary flex items-center gap-1 hover:underline"
                                >
                                    {lang === 'zh' ? '查看更多' : 'View All'} <ChevronRight size={14} />
                                </button>
                            </div>

                            {(() => {
                                const uniqueGiftCategories = Array.from(new Set(regionGifts.map((g: TravelItem) => g.category).filter(Boolean)));
                                const giftCategoryMapping: Record<string, { zh: string, en: string, icon: string }> = {
                                    'food': { zh: '食品', en: 'Food', icon: '🍪' },
                                    'drink': { zh: '飲品', en: 'Drink', icon: '🍵' },
                                    'lifestyle': { zh: '生活類', en: 'Lifestyle', icon: '🛍️' }
                                };

                                const displayGifts = activeGiftCategory === 'all'
                                    ? regionGifts
                                    : regionGifts.filter((g: TravelItem) => g.category === activeGiftCategory);

                                return (
                                    <>
                                        {uniqueGiftCategories.length > 0 && (
                                            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-6">
                                                <button
                                                    onClick={() => setActiveGiftCategory('all')}
                                                    className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest transition-all ${activeGiftCategory === 'all' ? 'bg-gray-900 text-white' : 'bg-white text-tc-text-sec/60 border border-gray-100'}`}
                                                >
                                                    {lang === 'zh' ? '全部' : 'ALL'}
                                                </button>
                                                {uniqueGiftCategories.map(cat => {
                                                    const meta = giftCategoryMapping[cat as string] || { zh: cat, en: cat, icon: '📌' };
                                                    return (
                                                        <button
                                                            key={cat as string}
                                                            onClick={() => setActiveGiftCategory(cat as string)}
                                                            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest transition-all uppercase flex items-center gap-1.5 ${activeGiftCategory === cat ? 'bg-gray-900 text-white' : 'bg-white text-tc-text-sec/60 border border-gray-100'}`}
                                                        >
                                                            <span className="text-[10px]">{meta.icon}</span>
                                                            {lang === 'zh' ? meta.zh : meta.en}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        )}

                                        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory">
                                            <AnimatePresence mode="popLayout">
                                                {displayGifts.map((gift: TravelItem) => (
                                                    <motion.button
                                                        key={gift.id}
                                                        layout
                                                        onClick={() => onSelectItem(gift, 'discovery')}
                                                        className="text-left group flex flex-col snap-center w-[130px] md:w-[150px] flex-shrink-0"
                                                    >
                                                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-500 group-hover:-translate-y-1">
                                                            <img
                                                                src={gift.coverImage || "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800"}
                                                                alt={gift.title}
                                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                            />
                                                        </div>
                                                        <div className="mt-3 px-1">
                                                            <h4 className="text-[13px] font-bold text-tc-text-main line-clamp-1">
                                                                {lang === 'zh' ? gift.title : gift.titleEn}
                                                            </h4>
                                                        </div>
                                                    </motion.button>
                                                ))}
                                            </AnimatePresence>
                                        </div>
                                    </>
                                );
                            })()}
                        </div>

                        {/* Wonders Sub-section */}
                        <div className="px-6">
                            <div className="flex items-center justify-between mb-8">
                                <h4 className="text-[13px] font-black uppercase tracking-widest text-gray-900 border-l-4 border-tc-primary pl-3">
                                    {lang === 'zh' ? '文化奇景閃卡' : 'Cultural Wonders'}
                                </h4>
                                <button
                                    onClick={() => setActiveArchive({
                                        title: lang === 'zh' ? `${activePicksFilter === 'taiwan' ? '' : getRegionName(activePicksFilter, 'zh')}在地奇景` : `Local Wonders in ${getRegionName(activePicksFilter, 'en')}`,
                                        type: 'wonders',
                                        items: CULTURAL_WONDERS.filter(w => activePicksFilter === 'taiwan' || w.regionId === activePicksFilter || w.regionId === 'taiwan')
                                    })}
                                    className="text-[11px] font-bold text-tc-primary flex items-center gap-1 hover:underline"
                                >
                                    {lang === 'zh' ? '查看更多' : 'View All'} <ChevronRight size={14} />
                                </button>
                            </div>

                            <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4">
                                {CULTURAL_WONDERS.filter(w => activePicksFilter === 'taiwan' || w.regionId === activePicksFilter || w.regionId === 'taiwan').map((wonder: CulturalInsight) => (
                                    <div key={wonder.id} className="snap-center flex-shrink-0">
                                        <CulturalInsightCard
                                            insight={wonder}
                                            lang={lang}
                                            isCompact={true}
                                            onClick={() => setSelectedInsight(wonder)}
                                        />
                                    </div>
                                ))}
                            </div>
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

            {/* Drill-down Category Archive View */}
            <AnimatePresence>
                {activeArchive && (
                    <CategoryArchiveView
                        title={activeArchive.title}
                        type={activeArchive.type}
                        items={activeArchive.items}
                        lang={lang}
                        onClose={() => setActiveArchive(null)}
                        onSelectItem={(item) => {
                            if (activeArchive.type === 'wonders') {
                                setSelectedInsight(item as CulturalInsight);
                            } else if (activeArchive.type === 'templates') {
                                onPreviewTemplate(item as Template);
                            } else {
                                onSelectItem(item as TravelItem, 'discovery');
                            }
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Globe Loading Overlay */}
            <AnimatePresence>
                {transitionLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] pointer-events-auto"
                    >
                        <GlobeLoader text={loadingText} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CityPicker;
