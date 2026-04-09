import React, { useState, useMemo } from 'react';
import { ChevronLeft, Sparkles, Compass, Star, Users } from 'lucide-react';
import { Template, LangType, Region } from '../../types';
import { TEMPLATES, CITY_FILTERS } from '../../data';
import { TAIPEI_SURVIVAL } from '../../data/guides';
import { SurvivalKit } from './SurvivalKit';

interface CityHubProps {
    regionId: Region;
    onBack: () => void;
    onPreviewTemplate: (tpl: Template) => void;
    onStoryPreview: (tpl: Template) => void;
    onCreatorClick: (creatorId: string) => void;
    onSelectItem: (item: any, source: 'map' | 'sidebar' | 'canvas' | 'discovery' | null) => void;
    lang: LangType;
    t: any;
}

const STYLE_TAGS = [
    { id: 'all', zh: '全部', en: 'All' },
    { id: '美食', zh: '美食', en: 'Food' },
    { id: '文青', zh: '文青', en: 'Culture' },
    { id: '慢活', zh: '慢活', en: 'Slow Life' },
    { id: '咖啡', zh: '咖啡', en: 'Coffee' },
    { id: '夜生活', zh: '夜生活', en: 'Nightlife' },
    { id: '深度', zh: '深度', en: 'In-depth' },
];

const CityHub: React.FC<CityHubProps> = ({
    regionId,
    onBack,
    onPreviewTemplate,
    onStoryPreview,
    onCreatorClick,
    onSelectItem,
    lang,
    t
}) => {
    const [selectedStyle, setSelectedStyle] = useState('all');

    // Data-driven: collect all cities from all countries
    const allCities = Object.keys(CITY_FILTERS).flatMap(countryId => CITY_FILTERS[countryId] || []);

    const city = allCities.find(c => c.id === regionId);
    if (!city) return null;

    const filteredTemplates = useMemo(() => {
        let templates = TEMPLATES.filter(tpl => tpl.region === regionId);
        if (selectedStyle !== 'all') {
            templates = templates.filter(tpl =>
                tpl.travelStyle?.includes(selectedStyle) ||
                tpl.tags.includes(selectedStyle)
            );
        }
        return templates;
    }, [regionId, selectedStyle]);

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

            {/* Hero / Banner - Editor's Choice Magazine Style */}
            <div className="px-5 mt-6 mb-8">
                <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden bg-gray-900 shadow-2xl group border-4 border-white">
                    <img
                        src={{
                            tokyo: 'https://images.unsplash.com/photo-1540959733332-e9ab42be6125?q=80&w=2094&auto=format&fit=crop',
                            melbourne: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?q=80&w=2071&auto=format&fit=crop',
                            osaka: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=2000&auto=format&fit=crop',
                            kyoto: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop',
                            taipei: 'https://images.unsplash.com/photo-1598935898639-81586f7d2129?auto=format&fit=crop&q=80&w=2000',
                        }[regionId as string] || 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop'}
                        className="w-full h-full object-cover opacity-70 transition-transform duration-[12s] group-hover:scale-110 ease-out"
                        alt={city?.label || 'City'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* Editor's Choice Overlay */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <div className="mb-4 flex items-center gap-2">
                            <span className="px-3 py-1 bg-amber-400 text-black rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                                {lang === 'zh' ? '達人首選' : "Editor's Choice"}
                            </span>
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                                {regionId === 'melbourne' ? (lang === 'zh' ? '巷弄咖啡專題' : 'Laneway Coffee Special') : (lang === 'zh' ? '新潮之旅' : 'Modern Vibe')}
                            </span>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl leading-none">
                            {regionId === 'melbourne'
                                ? (lang === 'zh' ? '隱藏在巷弄中的\n墨爾本靈魂' : 'Hidden Souls of\nMelbourne Laneways')
                                : (lang === 'zh' ? `${city.label} 深度探索` : `${city.labelEn} Deep Dive`)}
                        </h3>
                    </div>
                </div>
            </div>

            {/* Survival Guide - For Taipei only for now */}
            {regionId === 'taipei' && (
                <SurvivalKit 
                    guide={TAIPEI_SURVIVAL} 
                    lang={lang} 
                    title="TAIPEI INSIDER GUIDE"
                    titleEn="TAIPEI INSIDER GUIDE"
                    subtitle="台北內行指南"
                    subtitleEn="Taipei Expert Nuances"
                />
            )}

            {/* Style Filters */}
            <div className="px-6 mb-10 overflow-x-auto scrollbar-hide">
                <div className="flex items-center gap-3">
                    {STYLE_TAGS.map(tag => (
                        <button
                            key={tag.id}
                            onClick={() => setSelectedStyle(tag.id)}
                            className={`px-5 py-2.5 rounded-2xl text-xs font-black transition-all duration-300 whitespace-nowrap border-2 ${selectedStyle === tag.id
                                ? 'bg-black border-black text-white shadow-xl scale-105'
                                : 'bg-gray-50 border-gray-100 text-gray-500 hover:border-gray-200'
                                }`}
                        >
                            {lang === 'zh' ? tag.zh : tag.en}
                        </button>
                    ))}
                </div>
            </div>



            {/* Template Grid */}
            <div className="px-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <Compass size={18} className="text-teal-600" />
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                            {selectedStyle === 'all'
                                ? (t.featuredPlans || (lang === 'zh' ? '精選計畫' : 'Featured Plans'))
                                : (lang === 'zh' ? `${selectedStyle}風格推薦` : `${selectedStyle} Style Recommended`)
                            }
                        </h3>
                    </div>
                </div>

                {filteredTemplates.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredTemplates.map(tpl => (
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
                                                <Star size={12} fill="currentColor" /> {tpl.rating || '4.8'}
                                            </span>
                                            <div className="w-[1px] h-3 bg-gray-200" />
                                            <span className="text-[11px] text-gray-800 font-black tracking-tight">
                                                {tpl.duration} {t.daysUnit}
                                            </span>
                                        </div>

                                        {/* Social Proof Badge */}
                                        <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow-lg">
                                            <span className="text-[9px] font-black text-white uppercase tracking-wider">
                                                {lang === 'zh'
                                                    ? `${tpl.copiedCount || 100 + tpl.id.length * 7}+ 次套用`
                                                    : `${tpl.copiedCount || 100 + tpl.id.length * 7}+ Used`}
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
                ) : (
                    <div className="py-20 flex flex-col items-center justify-center text-gray-400 bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-100 italic">
                        <Compass size={48} className="mb-4 opacity-20" />
                        <p>{lang === 'zh' ? '目前沒有符合此風格的模板，試試其他風格吧！' : 'No templates match this style yet. Try another!'}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CityHub;
