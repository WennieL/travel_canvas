import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Tag } from 'lucide-react';
import { LangType } from '../../types';
import { POPULAR_TAGS } from '../../data';

interface TagCarouselProps {
    activeTag: string | null;
    setActiveTag: (tag: string | null) => void;
    lang: LangType;
}

export const TagCarousel: React.FC<TagCarouselProps> = ({
    activeTag, setActiveTag, lang
}) => {
    const tagScrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        if (tagScrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = tagScrollRef.current;
            setCanScrollLeft(scrollLeft > 5);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
        }
    };

    const handleScroll = (direction: 'left' | 'right') => {
        if (tagScrollRef.current) {
            const amount = direction === 'left' ? -150 : 150;
            tagScrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const timer = setTimeout(checkScroll, 100);
        window.addEventListener('resize', checkScroll);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    return (
        <div className="relative">
            <div className="flex items-center gap-1 mb-1">
                <Tag size={12} className="text-gray-400" />
                <span className="text-[10px] text-gray-400 font-medium">標籤篩選</span>
                {activeTag && (
                    <button
                        onClick={() => setActiveTag(null)}
                        className="ml-auto flex items-center gap-0.5 text-[10px] text-teal-600 hover:text-teal-700"
                    >
                        <X size={10} />
                        清除
                    </button>
                )}
            </div>
            <div className="relative group/carousel">
                {canScrollLeft && (
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10 flex items-center">
                        <button
                            onClick={() => handleScroll('left')}
                            className="pointer-events-auto p-1 text-purple-600 hover:text-purple-800 transition-all"
                        >
                            <ChevronLeft size={14} strokeWidth={3} />
                        </button>
                    </div>
                )}
                <div
                    ref={tagScrollRef}
                    onScroll={checkScroll}
                    className="flex gap-1.5 flex-nowrap overflow-x-auto scrollbar-hide pb-0.5"
                >
                    {POPULAR_TAGS.map(tag => (
                        <button
                            key={tag.id}
                            onClick={() => setActiveTag(activeTag === tag.id ? null : tag.id)}
                            className={`flex-shrink-0 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium transition-all ${activeTag === tag.id
                                ? 'bg-purple-600 text-white shadow-sm'
                                : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
                                }`}
                        >
                            <span>{tag.icon}</span>
                            <span>#{lang === 'en' && tag.labelEn ? tag.labelEn : tag.label}</span>
                        </button>
                    ))}
                </div>
                {canScrollRight && (
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 flex items-center justify-end">
                        <button
                            onClick={() => handleScroll('right')}
                            className="pointer-events-auto p-1 text-purple-600 hover:text-purple-800 transition-all"
                        >
                            <ChevronRight size={14} strokeWidth={3} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
