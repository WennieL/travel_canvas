import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { LangType, ItemType } from '../../types';
import { CATEGORY_FILTERS } from '../../data';

interface CategoryCarouselProps {
    activeCategory: 'all' | ItemType;
    setActiveCategory: (cat: 'all' | ItemType) => void;
    lang: LangType;
    t: any;
}

export const CategoryCarousel: React.FC<CategoryCarouselProps> = ({
    activeCategory, setActiveCategory, lang, t
}) => {
    const catScrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const checkScroll = () => {
        if (catScrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = catScrollRef.current;
            setCanScrollLeft(scrollLeft > 5);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
        }
    };

    useEffect(() => {
        const timer = setTimeout(checkScroll, 100);
        window.addEventListener('resize', checkScroll);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', checkScroll);
        };
    }, [showMore]);

    const handleScroll = (direction: 'left' | 'right') => {
        if (catScrollRef.current) {
            const amount = direction === 'left' ? -150 : 150;
            catScrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative group/carousel">
            {canScrollLeft && (
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10 flex items-start pt-[14px]">
                    <button
                        onClick={() => handleScroll('left')}
                        className="pointer-events-auto p-1 text-gray-800 hover:text-teal-600 transition-all scale-125"
                    >
                        <ChevronLeft size={18} strokeWidth={3} />
                    </button>
                </div>
            )}
            <div
                ref={catScrollRef}
                onScroll={checkScroll}
                className="flex gap-4 overflow-x-auto pt-2 pb-2 scrollbar-hide px-3 items-start"
            >
                {(showMore ? CATEGORY_FILTERS : CATEGORY_FILTERS.slice(0, 5)).map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className="flex flex-col items-center gap-2.5 min-w-[56px] transition-all group/cat"
                    >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-sm transition-all ${cat.color} ${activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-teal-500 scale-110 shadow-md' : 'opacity-90 group-hover/cat:scale-105 group-hover/cat:opacity-100'}`}>
                            {cat.icon}
                        </div>
                        <span className={`text-[10px] font-bold text-center leading-tight transition-colors ${activeCategory === cat.id ? 'text-teal-600' : 'text-gray-500 shadow-sm'}`}>
                            {lang === 'en' ? cat.labelEn : (t[cat.label] || cat.label)}
                        </span>
                    </button>
                ))}

                {!showMore && CATEGORY_FILTERS.length > 5 && (
                    <button
                        onClick={() => setShowMore(true)}
                        className="flex flex-col items-center gap-2.5 min-w-[56px] transition-all group/cat"
                    >
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-sm transition-all bg-gray-100 text-gray-400 group-hover/cat:bg-gray-200 group-hover/cat:text-gray-600">
                            <MoreHorizontal size={20} />
                        </div>
                        <span className="text-[10px] font-bold text-center leading-tight text-gray-500">
                            {lang === 'en' ? 'More' : '更多'}
                        </span>
                    </button>
                )}
            </div>
            {canScrollRight && (
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10 flex items-start pt-[14px] justify-end">
                    <button
                        onClick={() => handleScroll('right')}
                        className="pointer-events-auto p-1 text-gray-800 hover:text-teal-600 transition-all scale-125"
                    >
                        <ChevronRight size={18} strokeWidth={3} />
                    </button>
                </div>
            )}
        </div>
    );
};
