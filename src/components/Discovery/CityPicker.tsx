import React from 'react';
import { Search, Compass, MapPin } from 'lucide-react';
import { Template, LangType, Region } from '../../types';
import { CITY_FILTERS, COUNTRY_FILTERS, TEMPLATES } from '../../data';

interface CityPickerProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    onSelectCity: (region: Region) => void;
    onPreviewTemplate: (tpl: Template) => void;
    lang: LangType;
    t: any;
}

const CityPicker: React.FC<CityPickerProps> = ({
    searchQuery,
    setSearchQuery,
    onSelectCity,
    onPreviewTemplate,
    lang,
    t
}) => {
    // Data-driven: collect all cities from all countries
    const allCities = Object.keys(CITY_FILTERS).flatMap(countryId => CITY_FILTERS[countryId] || []);

    const filteredCities = allCities.filter(city => {
        const query = searchQuery.toLowerCase();
        return (
            city.label.toLowerCase().includes(query) ||
            city.labelEn.toLowerCase().includes(query) ||
            city.id.toLowerCase().includes(query)
        );
    });

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
                        {t.discoveryTitle}
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
                                placeholder={t.searchDiscoveryPlaceholder}
                                className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-3 text-gray-700"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="bg-teal-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-teal-700 transition-colors">
                                {t.searchGo}
                            </button>
                        </div>
                    </div>

                    {/* Action Pills */}
                    <div className="flex justify-center gap-2 overflow-x-auto scrollbar-hide pb-10 px-4">
                        {(lang === 'zh'
                            ? ['#台北老宅', '#台中米其林', '#拉麵特輯', '#免費景點', '#東京必去', '#夜市攻略']
                            : ['#Taipei Alleys', '#Taichung Michelin', '#Ramen Guide', '#Free Spots', '#Tokyo Musts', '#Night Markets']
                        ).map(tag => (
                            <button key={tag} className="flex-shrink-0 px-3 py-1 bg-white/50 border border-gray-100 rounded-full text-[10px] font-bold text-gray-500 hover:bg-teal-50 hover:text-teal-600 transition-colors shadow-sm">
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* City Bubbles */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 px-2">
                        {filteredCities.map(city => (
                            <button
                                key={city.id}
                                onClick={() => onSelectCity(city.id)}
                                className="flex flex-col items-center group relative"
                            >
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-4 border-white flex items-center justify-center text-4xl md:text-5xl group-hover:scale-110 group-active:scale-95 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden relative z-10">
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="relative z-10">{city.icon}</span>
                                </div>
                                <span className="mt-4 text-xs md:text-sm font-black text-gray-700 tracking-wide uppercase group-hover:text-teal-600 transition-colors">
                                    {lang === 'zh' ? city.label : city.labelEn}
                                </span>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-teal-100 scale-100 opacity-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recommended Plans */}
            <div className="px-6 py-6 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Compass size={16} className="text-teal-500" />
                        <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">{t.popularInspiration}</h3>
                    </div>
                    <button className="text-[10px] font-bold text-teal-600 hover:underline">
                        {t.viewAll}
                    </button>
                </div>
                <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-1">
                    {(() => {
                        // Pick diverse templates: 1 from each region, then fill to 6
                        const seen = new Set<string>();
                        const diverse: Template[] = [];
                        for (const tpl of TEMPLATES) {
                            if (!seen.has(tpl.region)) {
                                seen.add(tpl.region);
                                diverse.push(tpl);
                            }
                        }
                        // Fill remaining slots if under 6
                        for (const tpl of TEMPLATES) {
                            if (diverse.length >= 6) break;
                            if (!diverse.includes(tpl)) diverse.push(tpl);
                        }
                        return diverse.slice(0, 6);
                    })().map(tpl => (
                        <button
                            key={tpl.id}
                            onClick={() => onPreviewTemplate(tpl)}
                            className="flex-shrink-0 w-64 text-left group"
                        >
                            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-3 shadow-lg">
                                <img
                                    src={tpl.coverImage}
                                    alt={lang === 'zh' ? tpl.name : tpl.nameEn}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-3 left-3 right-3">
                                    <div className="flex items-center gap-2 text-[10px] text-white/80 font-bold mb-1 uppercase tracking-wider">
                                        <MapPin size={10} /> {tpl.region}
                                    </div>
                                    <h4 className="text-sm font-bold text-white line-clamp-1">
                                        {lang === 'zh' ? tpl.name : tpl.nameEn}
                                    </h4>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default CityPicker;
