import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LangType, Region } from '../../types';
import { COUNTRY_FILTERS, CITY_FILTERS } from '../../data';

interface RegionCarouselProps {
    activeCountry: string;
    setActiveCountry: (country: string) => void;
    activeRegion: Region;
    setActiveRegion: (region: Region) => void;
    lang: LangType;
}

export const RegionCarousel: React.FC<RegionCarouselProps> = ({
    activeCountry, setActiveCountry, activeRegion, setActiveRegion, lang
}) => {
    const countryScrollRef = useRef<HTMLDivElement>(null);
    const cityScrollRef = useRef<HTMLDivElement>(null);

    const [canScrollLeftCountry, setCanScrollLeftCountry] = useState(false);
    const [canScrollRightCountry, setCanScrollRightCountry] = useState(false);
    const [canScrollLeftCity, setCanScrollLeftCity] = useState(false);
    const [canScrollRightCity, setCanScrollRightCity] = useState(false);

    const checkScroll = (ref: React.RefObject<HTMLDivElement | null>, setLeft: (b: boolean) => void, setRight: (b: boolean) => void) => {
        if (ref.current) {
            const { scrollLeft, scrollWidth, clientWidth } = ref.current;
            setLeft(scrollLeft > 5);
            setRight(scrollLeft + clientWidth < scrollWidth - 5);
        }
    };

    const handleScroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
        if (ref.current) {
            const amount = direction === 'left' ? -150 : 150;
            ref.current.scrollBy({ left: amount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const check = () => {
            checkScroll(countryScrollRef, setCanScrollLeftCountry, setCanScrollRightCountry);
            checkScroll(cityScrollRef, setCanScrollLeftCity, setCanScrollRightCity);
        };
        const timer = setTimeout(check, 100);
        window.addEventListener('resize', check);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', check);
        };
    }, [activeCountry]);

    return (
        <div className="px-4 py-2 border-b border-gray-100 bg-gray-50/50">
            {activeCountry === 'all' ? (
                <div className="relative group/carousel">
                    {canScrollLeftCountry && (
                        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent pointer-events-none z-10 flex items-center">
                            <button
                                onClick={() => handleScroll(countryScrollRef, 'left')}
                                className="pointer-events-auto p-1 text-gray-600 hover:text-teal-600 transition-all"
                            >
                                <ChevronLeft size={16} strokeWidth={2.5} />
                            </button>
                        </div>
                    )}
                    <div
                        ref={countryScrollRef}
                        onScroll={() => checkScroll(countryScrollRef, setCanScrollLeftCountry, setCanScrollRightCountry)}
                        className="flex gap-1 flex-nowrap overflow-x-auto scrollbar-hide px-2"
                    >
                        {COUNTRY_FILTERS.map(country => (
                            <button
                                key={country.id}
                                onClick={() => {
                                    if (country.id === 'all') {
                                        setActiveRegion('all');
                                    } else {
                                        setActiveCountry(country.id);
                                        const cities = CITY_FILTERS[country.id];
                                        if (cities && cities.length > 0) setActiveRegion(cities[0].id);
                                    }
                                }}
                                className={`flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${activeRegion === 'all' && country.id === 'all'
                                    ? 'bg-teal-600 text-white'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-300'
                                    }`}
                            >
                                <span>{country.icon}</span>
                                <span>{lang === 'en' && country.labelEn ? country.labelEn : country.label}</span>
                            </button>
                        ))}
                    </div>
                    {canScrollRightCountry && (
                        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 flex items-center justify-end">
                            <button
                                onClick={() => handleScroll(countryScrollRef, 'right')}
                                className="pointer-events-auto p-1 text-gray-600 hover:text-teal-600 transition-all"
                            >
                                <ChevronRight size={16} strokeWidth={2.5} />
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="relative group/carousel">
                    {canScrollLeftCity && (
                        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent pointer-events-none z-10 flex items-center">
                            <button
                                onClick={() => handleScroll(cityScrollRef, 'left')}
                                className="pointer-events-auto p-1 text-gray-600 hover:text-teal-600 transition-all"
                            >
                                <ChevronLeft size={16} strokeWidth={2.5} />
                            </button>
                        </div>
                    )}
                    <div
                        ref={cityScrollRef}
                        onScroll={() => checkScroll(cityScrollRef, setCanScrollLeftCity, setCanScrollRightCity)}
                        className="flex gap-1 flex-nowrap overflow-x-auto scrollbar-hide px-2"
                    >
                        <button
                            onClick={() => { setActiveCountry('all'); setActiveRegion('all'); }}
                            className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-200 text-gray-700 hover:bg-gray-300"
                        >
                            <span>←</span>
                            <span>{COUNTRY_FILTERS.find(c => c.id === activeCountry)?.[lang === 'en' ? 'labelEn' : 'label']}</span>
                        </button>

                        {CITY_FILTERS[activeCountry]?.map(city => (
                            <button
                                key={city.id}
                                onClick={() => setActiveRegion(city.id as Region)}
                                className={`flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${activeRegion === city.id
                                    ? 'bg-teal-600 text-white'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-300'
                                    }`}
                            >
                                <span>{city.icon}</span>
                                <span>{lang === 'en' && city.labelEn ? city.labelEn : city.label}</span>
                            </button>
                        ))}
                    </div>
                    {canScrollRightCity && (
                        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 flex items-center justify-end">
                            <button
                                onClick={() => handleScroll(cityScrollRef, 'right')}
                                className="pointer-events-auto p-1 text-gray-600 hover:text-teal-600 transition-all"
                            >
                                <ChevronRight size={16} strokeWidth={2.5} />
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
