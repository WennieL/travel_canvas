import React from 'react';
import { Globe, Compass, Star, ChevronRight, Sparkles } from 'lucide-react';
import { Template, LangType, Region } from '../types';
import { TEMPLATES, CITY_FILTERS } from '../data';

interface DiscoveryViewProps {
    onPreviewTemplate: (tpl: Template) => void;
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
    setActiveTab,
    activeRegion,
    setActiveRegion,
    showToastMessage,
    toggleLang,
    lang,
    t
}) => {
    // Group templates by region
    const japanRegions: Region[] = ['tokyo', 'kyoto', 'osaka'];
    const australiaRegions: Region[] = ['melbourne'];

    // region mapping for top filters
    const regionFilters = [
        { label: lang === 'zh' ? '🌸 日本' : '🌸 Japan', id: 'tokyo' as Region },
        { label: lang === 'zh' ? '🦘 澳洲' : '🦘 Australia', id: 'melbourne' as Region },
    ];

    const renderRegionSection = (regionId: Region) => {
        const city = CITY_FILTERS.japan.find(c => c.id === regionId) || CITY_FILTERS.australia.find(c => c.id === regionId);
        if (!city) return null;

        const regionTemplates = TEMPLATES.filter(tpl => tpl.region === regionId);
        if (regionTemplates.length === 0) return null;

        return (
            <div key={regionId} className="mb-8">
                <div className="flex items-center justify-between px-6 mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-xl">{city.icon}</span>
                        <h3 className="text-lg font-black text-gray-900 leading-tight">
                            {lang === 'zh' ? city.label : city.labelEn}
                        </h3>
                    </div>
                    <button
                        onClick={() => {
                            setActiveRegion(regionId);
                            setActiveTab('templates');
                        }}
                        className="text-xs font-bold text-teal-600 flex items-center gap-0.5 hover:underline"
                    >
                        {lang === 'zh' ? '查看更多' : 'View All'} <ChevronRight size={14} />
                    </button>
                </div>

                <div className="flex overflow-x-auto pb-4 px-6 gap-4 no-scrollbar">
                    {regionTemplates.map(tpl => (
                        <button
                            key={tpl.id}
                            onClick={() => onPreviewTemplate(tpl)}
                            className="flex-shrink-0 w-[240px] text-left group"
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-gray-100 shadow-sm border border-gray-100">
                                {tpl.coverImage ? (
                                    <img src={tpl.coverImage} alt={tpl.name} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                                        <Compass size={40} />
                                    </div>
                                )}
                                <div className="absolute top-3 left-3 flex gap-1.5">
                                    {tpl.tier === 'official' && (
                                        <span className="bg-gray-900/80 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border border-white/20">
                                            Official
                                        </span>
                                    )}
                                    {tpl.isLocked && (
                                        <span className="bg-amber-500/90 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border border-white/20 flex items-center gap-0.5">
                                            <Sparkles size={8} /> Premium
                                        </span>
                                    )}
                                </div>
                            </div>
                            <h4 className="font-bold text-gray-800 text-sm mb-1 line-clamp-1 group-hover:text-teal-600 transition-colors">
                                {lang === 'zh' ? tpl.name : tpl.nameEn}
                            </h4>
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-0.5 text-amber-500 font-bold text-[10px]">
                                    <Star size={10} fill="currentColor" /> {tpl.rating || '4.9'}
                                </span>
                                <span className="text-[10px] text-gray-400 font-medium">
                                    {tpl.duration} {lang === 'zh' ? '天行程' : 'Days'}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    const contentRef = React.useRef<HTMLDivElement>(null);

    const scrollToContent = () => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="flex-1 bg-white overflow-y-auto no-scrollbar pb-24">
            {/* Hero Header */}
            <div className="pt-8 pb-6 px-6 bg-gradient-to-b from-gray-50 to-white">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest bg-teal-50 px-2 py-0.5 rounded-full">Explore</span>
                    <button
                        onClick={toggleLang}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-1.5 text-gray-500 hover:text-teal-600"
                        title={lang === 'zh' ? '切換語言' : 'Switch Language'}
                    >
                        <span className="text-[10px] font-bold">{lang === 'zh' ? 'EN' : '中'}</span>
                        <Globe size={18} />
                    </button>
                </div>
                <h2 className="text-2xl font-black text-gray-900 leading-tight mb-2">
                    {lang === 'zh' ? '尋找下次旅行的靈感' : 'Find Inspiration for Next Trip'}
                </h2>
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                    {regionFilters.map(filter => {
                        const isActive = activeRegion === filter.id;
                        return (
                            <button
                                key={filter.label}
                                onClick={() => setActiveRegion(filter.id)}
                                className={`flex-shrink-0 px-4 py-1.5 rounded-full border text-xs font-bold transition-all shadow-sm ${isActive
                                    ? 'bg-teal-600 border-teal-600 text-white'
                                    : 'bg-white border-gray-100 text-gray-600 hover:border-teal-500 hover:text-teal-600'
                                    }`}
                            >
                                {filter.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Main Content Sections */}
            <div className="mt-4" ref={contentRef}>
                {/* Featured Section */}
                <div className="px-6 mb-8">
                    <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden bg-gray-900 group shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop"
                            className="w-full h-full object-cover opacity-60 transition-transform group-hover:scale-105 duration-[2s]"
                            alt="Kyoto"
                        />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <span className="text-[10px] font-black text-teal-300 uppercase tracking-[0.2em] mb-2">Editor's Pick</span>
                            <h3 className="text-2xl font-black text-white leading-tight mb-2">
                                {lang === 'zh' ? '京都：與古都的一期一會' : 'Kyoto: A Moment in Time'}
                            </h3>
                            <p className="text-white/80 text-xs font-medium max-w-[240px] leading-relaxed mb-4">
                                {lang === 'zh' ? '深入隱藏巷弄，探索被時光遺忘的茶屋。' : 'Deep dive into hidden alleys and explore teahouses forgotten by time.'}
                            </p>
                            <button
                                onClick={scrollToContent}
                                className="self-start px-6 py-2.5 bg-white text-gray-900 text-xs font-black rounded-full hover:bg-teal-50 transition-colors shadow-lg active:scale-95 transition-all"
                            >
                                {lang === 'zh' ? '立即探索' : 'Explore Now'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Japan Sections */}
                {japanRegions.filter(r => activeRegion === 'tokyo' || activeRegion === 'kyoto' || activeRegion === r).map(region => renderRegionSection(region))}

                {/* Australia Sections */}
                {australiaRegions.filter(r => activeRegion === 'melbourne' || activeRegion === r).map(region => renderRegionSection(region))}
            </div>

            {/* Bottom Slogan */}
            <div className="mt-8 px-10 py-12 text-center bg-gray-50 rounded-t-[3rem]">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100 text-teal-500">
                    <Compass size={24} />
                </div>
                <h4 className="text-lg font-black text-gray-800 mb-2">
                    {lang === 'zh' ? '讓達人為您帶路' : 'Let Experts Lead the Way'}
                </h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                    {lang === 'zh' ? '我們相信，完美的旅行始於最在地的小插曲。' : 'We believe the perfect trip starts with the most local episodes.'}
                </p>
            </div>
        </div>
    );
};

export default DiscoveryView;
