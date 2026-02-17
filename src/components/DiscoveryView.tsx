import React, { useState, useRef, useEffect } from 'react';
import { Globe, Compass, Star, ChevronLeft, ChevronRight, Sparkles, Search, MapPin, History } from 'lucide-react';
import { Template, LangType, Region } from '../types';
import { TEMPLATES, CITY_FILTERS } from '../data';

interface DiscoveryViewProps {
    onPreviewTemplate: (tpl: Template) => void;
    onStoryPreview: (tpl: Template) => void;
    onCreatorClick: (creatorId: string) => void;
    setActiveTab: (tab: 'assets' | 'templates') => void;
    activeRegion: Region;
    setActiveRegion: (region: Region) => void;
    showToastMessage: (msg: string, type: any) => void;
    toggleLang: () => void;
    lang: LangType;
    t: any;
}

const DiscoveryView: React.FC<DiscoveryViewProps> = ({
    onPreviewTemplate,
    onStoryPreview,
    onCreatorClick,
    setActiveTab,
    activeRegion,
    setActiveRegion,
    showToastMessage,
    toggleLang,
    lang,
    t
}) => {
    // Current view state: null = Picker, Region = Hub
    const [discoveryCity, setDiscoveryCity] = useState<Region | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const allCities = [
        ...CITY_FILTERS.japan,
        ...CITY_FILTERS.australia
    ];

    // Mock recent plans
    const recentPlans = [
        { id: 'recent-1', name: lang === 'zh' ? '東京 5 日遊' : 'Tokyo 5 Days', region: 'tokyo', date: '2026-02-14' },
        { id: 'recent-2', name: lang === 'zh' ? '墨爾本咖啡之旅' : 'Melbourne Coffee', region: 'melbourne', date: '2026-02-10' },
    ];

    const handleCitySelect = (region: Region) => {
        setDiscoveryCity(region);
        setActiveRegion(region); // Sync with app state
    };

    const renderCityPicker = () => {
        return (
            <div className="min-h-full bg-white">
                {/* Hero Section - Canva Style */}
                <div className="relative pt-16 pb-12 px-6 overflow-hidden">
                    {/* Background Soft Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-amber-50 opacity-70" />
                    <div className="absolute top-[-10%] right-[-10%] w-[40%] aspect-square bg-teal-200/20 blur-[100px] rounded-full" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[40%] aspect-square bg-amber-200/20 blur-[100px] rounded-full" />

                    <div className="relative max-w-2xl mx-auto text-center">
                        <div className="flex justify-center mb-4">
                            <span className="px-3 py-1 bg-white/80 backdrop-blur-md border border-teal-100 rounded-full text-[10px] font-black text-teal-600 uppercase tracking-widest shadow-sm">
                                Discovery
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">
                            {lang === 'zh' ? '你要去哪裡？' : 'Where will you travel next?'}
                        </h1>

                        {/* Search Bar */}
                        <div className="relative group max-w-lg mx-auto mb-4">
                            <div className="absolute inset-0 bg-teal-500/10 blur-xl group-focus-within:bg-teal-500/20 transition-all rounded-full" />
                            <div className="relative flex items-center bg-white rounded-2xl shadow-xl border border-white p-1 pr-2 transition-all group-focus-within:ring-2 ring-teal-500/20">
                                <div className="pl-4 pr-2">
                                    <Search className="text-gray-400 w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    placeholder={lang === 'zh' ? '搜尋景點、城市或是達人...' : 'Search spots, cities or creators...'}
                                    className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-3 text-gray-700"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button className="bg-teal-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-teal-700 transition-colors">
                                    {lang === 'zh' ? '搜尋' : 'Go'}
                                </button>
                            </div>
                        </div>

                        {/* Action Pills */}
                        <div className="flex justify-center gap-2 overflow-x-auto scrollbar-hide pb-10 px-4">
                            {['#拉麵特輯', '#免費景點', '#東京必去', '#親子行程'].map(tag => (
                                <button key={tag} className="flex-shrink-0 px-3 py-1 bg-white/50 border border-gray-100 rounded-full text-[10px] font-bold text-gray-500 hover:bg-teal-50 hover:text-teal-600 transition-colors shadow-sm">
                                    {lang === 'zh' ? tag : tag.replace('#', '# ')}
                                </button>
                            ))}
                        </div>

                        {/* City Bubbles - Circular Icons - Refined for Canva Look */}
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12 px-2">
                            {allCities.map(city => (
                                <button
                                    key={city.id}
                                    onClick={() => handleCitySelect(city.id)}
                                    className="flex flex-col items-center group relative"
                                >
                                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-4 border-white flex items-center justify-center text-4xl md:text-5xl group-hover:scale-110 group-active:scale-95 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden relative z-10">
                                        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="relative z-10">{city.icon}</span>
                                    </div>
                                    <span className="mt-4 text-xs md:text-sm font-black text-gray-700 tracking-wide uppercase group-hover:text-teal-600 transition-colors">
                                        {lang === 'zh' ? city.label : city.labelEn}
                                    </span>
                                    {/* Subtle ring animation on hover */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-teal-100 scale-100 opacity-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recommended Plans - Horizontal Scroll */}
                <div className="px-6 py-6 overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Compass size={16} className="text-teal-500" />
                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">{lang === 'zh' ? '為你準備的熱門靈感' : 'Recommended for You'}</h3>
                        </div>
                        <button className="text-[10px] font-bold text-teal-600 hover:underline">
                            {lang === 'zh' ? '看全部' : 'View All'}
                        </button>
                    </div>
                    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-1">
                        {TEMPLATES.slice(0, 4).map(tpl => (
                            <button
                                key={tpl.id}
                                onClick={() => onPreviewTemplate(tpl)}
                                className="flex-shrink-0 w-[240px] text-left group"
                            >
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-2 bg-gray-100 shadow-sm border border-gray-100">
                                    {tpl.coverImage && <img src={tpl.coverImage} alt={tpl.name} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" />}
                                    <div className="absolute top-2 left-2">
                                        <span className="bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold text-gray-600 shadow-sm border border-white/50">
                                            {tpl.duration} {lang === 'zh' ? '天' : 'Days'}
                                        </span>
                                    </div>
                                    <div className="absolute top-2 right-2">
                                        <span className="bg-amber-500/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                                            <Star size={8} fill="currentColor" /> {tpl.rating || '4.5'}
                                        </span>
                                    </div>
                                </div>
                                <h4 className="font-bold text-gray-800 text-xs truncate group-hover:text-teal-600 transition-colors">
                                    {lang === 'zh' ? tpl.name : tpl.nameEn}
                                </h4>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Section - Large Card */}
                <div className="px-6 py-8 md:px-12">
                    <div className="flex items-center gap-2 mb-4 text-gray-400">
                        <Sparkles size={16} className="text-amber-500" />
                        <h3 className="text-xs font-black uppercase tracking-widest">{lang === 'zh' ? '本月推薦目的地' : 'Featured This Month'}</h3>
                    </div>
                    <button
                        onClick={() => handleCitySelect('tokyo')}
                        className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden bg-gray-900 group shadow-2xl border-4 border-white"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop"
                            className="w-full h-full object-cover opacity-70 transition-transform duration-[5s] group-hover:scale-105"
                            alt="Kyoto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-center items-start text-left">
                            <span className="text-[10px] font-black text-amber-400 uppercase tracking-[0.2em] mb-2 bg-amber-400/10 px-2 py-0.5 rounded backdrop-blur-sm">Editor's Pick</span>
                            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">
                                {lang === 'zh' ? '京都：與古都的一期一會' : 'Kyoto: A Moment in Time'}
                            </h3>
                            <div className="flex items-center gap-3 text-white/80 text-xs font-bold">
                                <span>15+ Templates</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                                <span>High Quality</span>
                            </div>
                        </div>
                        <div className="absolute right-8 bottom-8 w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-lg transform group-hover:translate-x-2 transition-transform">
                            <ChevronRight size={24} />
                        </div>
                    </button>
                </div>

                {/* Recents Section */}
                <div className="px-6 py-8 max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 mb-6 text-gray-400">
                        <History size={16} />
                        <h3 className="text-xs font-black uppercase tracking-widest">{lang === 'zh' ? '最近編輯' : 'Recently edited'}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {recentPlans.map(plan => (
                            <button
                                key={plan.id}
                                className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-md transition-all text-left border border-transparent hover:border-gray-100 group"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                    {plan.region === 'tokyo' ? '🗼' : '☕'}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold text-gray-800">{plan.name}</h4>
                                    <p className="text-[10px] text-gray-400 mt-0.5">{plan.date}</p>
                                </div>
                                <ChevronRight className="text-gray-300 w-4 h-4" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA / Slogan */}
                <div className="mt-8 px-10 py-16 text-center bg-gray-50/50">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100 text-teal-500">
                        <Compass size={24} />
                    </div>
                    <h4 className="text-lg font-black text-gray-800 mb-2">
                        {lang === 'zh' ? '讓達人為您帶路' : 'Let Experts Lead the Way'}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed max-w-xs mx-auto">
                        {lang === 'zh' ? '我們相信，完美的旅行始於最在地的小插曲。' : 'We believe the perfect trip starts with the most local episodes.'}
                    </p>
                </div>
            </div>
        );
    };

    const renderCityHub = (regionId: Region) => {
        const city = allCities.find(c => c.id === regionId);
        if (!city) return null;

        const regionTemplates = TEMPLATES.filter(tpl => tpl.region === regionId);

        return (
            <div className="min-h-full bg-white pb-24">
                {/* Hub Header */}
                <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100 px-4 py-3 flex items-center gap-3">
                    <button
                        onClick={() => setDiscoveryCity(null)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <div className="flex-1">
                        <h2 className="font-black text-gray-900 leading-tight">
                            {lang === 'zh' ? city.label : city.labelEn}
                        </h2>
                    </div>
                    <button onClick={toggleLang} className="p-2 text-xs font-bold text-gray-400">
                        {lang === 'zh' ? 'EN' : '中'}
                    </button>
                </div>

                {/* Hero / Banner - Immersive Premium Look */}
                <div className="px-5 mt-6 mb-10">
                    <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden bg-gray-900 shadow-2xl group border-4 border-white">
                        <img
                            src={regionId === 'tokyo'
                                ? "https://images.unsplash.com/photo-1540959733332-e9ab42be6125?q=80&w=2094&auto=format&fit=crop"
                                : regionId === 'melbourne'
                                    ? "https://images.unsplash.com/photo-1514395462725-fb4566210144?q=80&w=2071&auto=format&fit=crop"
                                    : "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop"
                            }
                            className="w-full h-full object-cover opacity-80 transition-transform duration-[12s] group-hover:scale-110 ease-out"
                            alt={city.label}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="mb-4">
                                <span className="px-3 py-1 bg-teal-500/20 backdrop-blur-md border border-teal-400/30 rounded-full text-[10px] font-black text-teal-300 uppercase tracking-widest shadow-lg">
                                    Featured Destination
                                </span>
                            </div>
                            <h3 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl">{lang === 'zh' ? `${city.label} 探索` : `${city.labelEn} Hub`}</h3>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-lg transition-transform hover:translate-y-[-2px] hover:z-10">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="avatar" />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-white font-black uppercase tracking-[0.15em]">+24 Expert Templates</span>
                                    <span className="text-[10px] text-white/60 font-medium">Curated by local travel enthusiasts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* IG Stories Style placeholder - Refined */}
                <div className="px-6 mb-12">
                    <div className="flex items-center gap-2 mb-6 text-gray-400">
                        <Sparkles size={16} className="text-amber-500 animate-pulse" />
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{lang === 'zh' ? '本月推薦達人' : 'Featured Experts'}</h3>
                    </div>
                    <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-2 px-1">
                        {[
                            { tag: '美食家', tagEn: 'Foodie', icon: '🍜', img: 32 },
                            { tag: '攝影師', tagEn: 'Visuals', icon: '📸', img: 45 },
                            { tag: '古著派', tagEn: 'Vintage', icon: '👘', img: 12 },
                            { tag: '建築控', tagEn: 'Arch-fan', icon: '🏛️', img: 28 },
                            { tag: '親子遊', tagEn: 'Family', icon: '🎡', img: 19 },
                            { tag: '背包客', tagEn: 'Backpack', icon: '🎒', img: 54 }
                        ].map((item, idx) => (
                            <button
                                key={item.tag}
                                className="flex flex-col items-center flex-shrink-0 group"
                                onClick={() => onStoryPreview(TEMPLATES[idx % TEMPLATES.length])}
                            >
                                <div className="relative mb-3">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-teal-500 to-indigo-600 group-hover:rotate-[360deg] transition-all duration-700">
                                        <div className="w-full h-full rounded-full border-2 border-white overflow-hidden bg-gray-100 flex items-center justify-center relative">
                                            <img src={`https://i.pravatar.cc/100?img=${item.img}`} alt={item.tag} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-white rounded-full shadow-md border border-gray-50 flex items-center justify-center text-sm transform group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                </div>
                                <span className="text-[10px] font-black text-gray-700 tracking-wide uppercase">{lang === 'zh' ? item.tag : item.tagEn}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Template Grid - Refined Canva Aesthetic */}
                < div className="px-6" >
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <Compass size={18} className="text-teal-600" />
                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{lang === 'zh' ? '精選計畫' : 'Featured Plans'}</h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {regionTemplates.map(tpl => (
                            <div key={tpl.id} className="text-left group">
                                {/* Card Image - Clickable for Preview */}
                                <button
                                    onClick={() => onPreviewTemplate(tpl)}
                                    className="w-full relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-5 bg-gray-100 shadow-xl border-4 border-white transition-all duration-500 group-hover:shadow-2xl group-hover:translate-y-[-4px] focus:outline-none"
                                >
                                    {tpl.coverImage ? (
                                        <img src={tpl.coverImage} alt={tpl.name} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gradient-to-br from-gray-50 to-gray-200">
                                            <Compass size={48} className="opacity-20 translate-y-2 group-hover:rotate-12 transition-transform" />
                                        </div>
                                    )}
                                    <div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
                                        {tpl.tier === 'official' && (
                                            <span className="bg-gray-900/90 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
                                                Official
                                            </span>
                                        )}
                                        {tpl.isLocked && (
                                            <span className="bg-amber-500/95 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow-lg">
                                                <Sparkles size={10} /> Premium
                                            </span>
                                        )}
                                    </div>
                                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between pointer-events-none z-10">
                                        <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-2xl border border-white/40 flex items-center gap-3 transition-transform group-hover:scale-105">
                                            <span className="flex items-center gap-1 text-amber-500 font-black text-[11px]">
                                                <Star size={12} fill="currentColor" /> {tpl.rating || '4.5'}
                                            </span>
                                            <div className="w-[1px] h-3 bg-gray-200" />
                                            <span className="text-[11px] text-gray-800 font-black tracking-tight">
                                                {tpl.duration} {lang === 'zh' ? '天' : 'Days'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-teal-600/0 group-hover:bg-teal-600/10 transition-colors duration-500" />
                                </button>

                                {/* Title - Also clickable for preview */}
                                <div className="px-4">
                                    <button
                                        onClick={() => onPreviewTemplate(tpl)}
                                        className="w-full text-left focus:outline-none mb-2"
                                    >
                                        <h4 className="font-black text-gray-900 text-xl md:text-2xl line-clamp-1 group-hover:text-teal-600 transition-colors leading-tight">
                                            {lang === 'zh' ? tpl.name : tpl.nameEn}
                                        </h4>
                                    </button>

                                    {/* Creator Info - Clickable for Creator Profile */}
                                    <button
                                        onClick={() => onCreatorClick(tpl.authorId)}
                                        className="flex items-center gap-2.5 hover:opacity-70 transition-opacity focus:outline-none"
                                    >
                                        <div className="w-5 h-5 rounded-full border border-gray-100 overflow-hidden shadow-sm">
                                            <img src={`https://i.pravatar.cc/100?img=${tpl.id.length % 70}`} alt="author" className="w-full h-full object-cover" />
                                        </div>
                                        <span className="text-[10px] md:text-[11px] font-black text-gray-400 uppercase tracking-widest hover:text-teal-600 transition-colors">
                                            {lang === 'zh' ? (tpl.author || '查看達人') : (tpl.authorEn || tpl.author || 'View Creator')}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            </div >
        );
    };

    return (
        <div className="flex-1 bg-white overflow-y-auto scrollbar-hide">
            {discoveryCity ? renderCityHub(discoveryCity) : renderCityPicker()}
        </div>
    );
};

export default DiscoveryView;
