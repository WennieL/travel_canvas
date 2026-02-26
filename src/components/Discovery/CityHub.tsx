import React from 'react';
import { ChevronLeft, Sparkles, Compass, Star } from 'lucide-react';
import { Template, LangType, Region } from '../../types';
import { TEMPLATES, CITY_FILTERS } from '../../data';

interface CityHubProps {
    regionId: Region;
    onBack: () => void;
    onPreviewTemplate: (tpl: Template) => void;
    onStoryPreview: (tpl: Template) => void;
    onCreatorClick: (creatorId: string) => void;
    lang: LangType;
    t: any;
}

const CityHub: React.FC<CityHubProps> = ({
    regionId,
    onBack,
    onPreviewTemplate,
    onStoryPreview,
    onCreatorClick,
    lang,
    t
}) => {
    // Data-driven: collect all cities from all countries
    const allCities = Object.keys(CITY_FILTERS).flatMap(countryId => CITY_FILTERS[countryId] || []);

    const city = allCities.find(c => c.id === regionId);
    if (!city) return null;

    const regionTemplates = TEMPLATES.filter(tpl => tpl.region === regionId);

    return (
        <div className="min-h-full bg-white pb-24">
            {/* Hub Header */}
            <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100 px-4 py-3 flex items-center gap-3">
                <button
                    onClick={onBack}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <ChevronLeft size={20} />
                </button>
                <div className="flex-1">
                    <h2 className="font-black text-gray-900 leading-tight">
                        {lang === 'zh' ? city.label : city.labelEn}
                    </h2>
                </div>
            </div>

            {/* Hero / Banner - Immersive Premium Look */}
            <div className="px-5 mt-6 mb-10">
                <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden bg-gray-900 shadow-2xl group border-4 border-white">
                    <img
                        src={{
                            tokyo: 'https://images.unsplash.com/photo-1540959733332-e9ab42be6125?q=80&w=2094&auto=format&fit=crop',
                            melbourne: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?q=80&w=2071&auto=format&fit=crop',
                            osaka: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=2000&auto=format&fit=crop',
                            kyoto: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop',
                            taipei: 'https://images.unsplash.com/photo-1470004914212-05527e49370b?q=80&w=2000&auto=format&fit=crop',
                            tainan: 'https://images.unsplash.com/photo-1604662407468-ba1a07cd5ce7?q=80&w=2000&auto=format&fit=crop',
                            taichung: 'https://images.unsplash.com/photo-1540959733332-e9ab42be6125?q=80&w=2094&auto=format&fit=crop',
                            hualien: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop',
                        }[regionId as string] || 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop'}
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

            {/* IG Stories Style placeholder */}
            <div className="px-6 mb-12">
                <div className="flex items-center gap-2 mb-6 text-gray-400">
                    <Sparkles size={16} className="text-amber-500 animate-pulse" />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{t.featuredExperts}</h3>
                </div>
                <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-2 px-1">
                    {[
                        { tag: '美食家', tagEn: 'Foodie', icon: '🍜', img: 32 },
                        { tag: '攝影師', tagEn: 'Visuals', icon: '📸', img: 45 },
                        { tag: '古著派', tagEn: 'Vintage', icon: '👘', img: 12 },
                        { tag: '建築控', tagEn: 'Arch-fan', icon: '🏛️', img: 28 },
                        { tag: '親子遊', tagEn: 'Family', icon: '🎡', img: 19 },
                        { tag: '背包客', tagEn: 'Backpack', icon: '🎒', img: 54 }
                    ].map((item, idx) => {
                        const templateForStory = regionTemplates[idx % regionTemplates.length] || TEMPLATES[0];
                        return (
                            <button
                                key={item.tag}
                                className="flex flex-col items-center flex-shrink-0 group"
                                onClick={() => onStoryPreview(templateForStory)}
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
                        );
                    })}
                </div>
            </div>

            {/* Template Grid */}
            <div className="px-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <Compass size={18} className="text-teal-600" />
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{t.featuredPlans || (lang === 'zh' ? '精選計畫' : 'Featured Plans')}</h3>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {regionTemplates.map(tpl => (
                        <div key={tpl.id} className="text-left group">
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
                                            {tpl.duration} {t.daysUnit}
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-teal-600/0 group-hover:bg-teal-600/10 transition-colors duration-500" />
                            </button>

                            <div className="px-4">
                                <button
                                    onClick={() => onPreviewTemplate(tpl)}
                                    className="w-full text-left focus:outline-none mb-2"
                                >
                                    <h4 className="font-black text-gray-900 text-xl md:text-2xl line-clamp-1 group-hover:text-teal-600 transition-colors leading-tight">
                                        {lang === 'zh' ? tpl.name : tpl.nameEn}
                                    </h4>
                                </button>

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
            </div>
        </div>
    );
};

export default CityHub;
