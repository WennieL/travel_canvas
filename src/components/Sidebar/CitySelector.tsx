import React, { useState } from 'react';
import { MapPin, X, Check } from 'lucide-react';
import { Region, LangType } from '../../types';
import { CITY_FILTERS } from '../../data';

interface CitySelectorProps {
    activeRegion: Region;
    setActiveRegion: (region: Region) => void;
    t: any;
    lang: LangType;
}

export const CitySelector: React.FC<CitySelectorProps> = ({
    activeRegion,
    setActiveRegion,
    t,
    lang
}) => {
    const [showCitySelector, setShowCitySelector] = useState(false);

    return (
        <div className="px-5 pt-2 pb-2 border-b border-gray-50 bg-gray-50/30">
            <div className="relative">
                <button
                    onClick={() => setShowCitySelector(!showCitySelector)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${showCitySelector ? 'bg-teal-600 text-white shadow-lg' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'}`}
                >
                    <div className="flex items-center gap-2">
                        <MapPin size={14} className={showCitySelector ? 'text-white' : 'text-teal-500'} />
                        <span className="whitespace-nowrap">
                            {(() => {
                                const city = CITY_FILTERS?.japan?.find(c => c.id === activeRegion) || CITY_FILTERS?.australia?.find(c => c.id === activeRegion);
                                if (!city) return t.allCities || (lang === 'zh' ? '所有城市' : 'All Cities');
                                return lang === 'en' ? city.labelEn : city.label;
                            })()}
                        </span>
                    </div>
                    <span className={`text-[10px] ml-1 transition-transform ${showCitySelector ? 'rotate-180' : ''}`}>▼</span>
                </button>

                {showCitySelector && (
                    <>
                        <div className="fixed inset-0 z-[100]" onClick={() => setShowCitySelector(false)} />
                        <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-[110] animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                            <div className="flex items-center justify-between px-2 py-2 mb-1 border-b border-gray-50">
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t.selectCity || (lang === 'zh' ? '選擇搜索地區' : 'Select Region')}</div>
                                <button onClick={() => setShowCitySelector(false)} className="text-gray-400 hover:text-gray-600"><X size={14} /></button>
                            </div>
                            <div className="max-h-72 overflow-y-auto pr-1 custom-scrollbar">
                                <div className="text-[10px] font-bold text-gray-400 px-2 py-2 uppercase tracking-wider opacity-60 flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-gray-300" /> Japan
                                </div>
                                {CITY_FILTERS?.japan?.map(city => (
                                    <button
                                        key={city.id}
                                        onClick={() => {
                                            setActiveRegion(city.id);
                                            setShowCitySelector(false);
                                        }}
                                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-2 mb-1 transition-all ${activeRegion === city.id ? 'bg-teal-50 text-teal-600' : 'hover:bg-gray-50 text-gray-700'}`}
                                    >
                                        <span className="text-lg">{city.icon}</span>
                                        <div className="flex flex-col">
                                            <span className="font-bold">{lang === 'zh' ? city.label : city.labelEn}</span>
                                            <span className="text-[9px] text-gray-400 font-normal uppercase tracking-tight">{city.id}</span>
                                        </div>
                                        {activeRegion === city.id && <Check size={14} className="ml-auto" />}
                                    </button>
                                ))}
                                <div className="h-px bg-gray-100 my-2 mx-2"></div>
                                <div className="text-[10px] font-bold text-gray-400 px-2 py-2 uppercase tracking-wider opacity-60 flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-gray-300" /> Australia
                                </div>
                                {CITY_FILTERS?.australia?.map(city => (
                                    <button
                                        key={city.id}
                                        onClick={() => {
                                            setActiveRegion(city.id);
                                            setShowCitySelector(false);
                                        }}
                                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-2 mb-1 transition-all ${activeRegion === city.id ? 'bg-teal-50 text-teal-600' : 'hover:bg-gray-50 text-gray-700'}`}
                                    >
                                        <span className="text-lg">{city.icon}</span>
                                        <div className="flex flex-col">
                                            <span className="font-bold">{lang === 'zh' ? city.label : city.labelEn}</span>
                                            <span className="text-[9px] text-gray-400 font-normal uppercase tracking-tight">{city.id}</span>
                                        </div>
                                        {activeRegion === city.id && <Check size={14} className="ml-auto" />}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
