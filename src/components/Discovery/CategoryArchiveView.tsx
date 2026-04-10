import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { LangType, TravelItem, CulturalInsight } from '../../types';
import { CulturalInsightCard } from './CulturalInsightCard';

interface CategoryArchiveViewProps {
    title: string;
    type: 'gifts' | 'wonders' | 'spots' | 'templates';
    items: any[];
    lang: LangType;
    onClose: () => void;
    onSelectItem?: (item: any) => void;
}

export const CategoryArchiveView: React.FC<CategoryArchiveViewProps> = ({ 
    title, 
    type, 
    items, 
    lang, 
    onClose, 
    onSelectItem 
}) => {
    // Unique categories for filtering (specifically for gifts and spots)
    const [activeFilter, setActiveFilter] = useState<string>('all');
    
    // Extract unique categories depending on the item type
    const filters = React.useMemo(() => {
        if (type === 'gifts' || type === 'spots') {
            const rawCategories = items.map(item => item.category || item.type).filter(Boolean);
            return Array.from(new Set(rawCategories));
        }
        if (type === 'wonders') {
            const rawRegions = items.map(item => item.regionId).filter(Boolean);
            return Array.from(new Set(rawRegions));
        }
        return [];
    }, [items, type]);

    const displayItems = activeFilter === 'all' 
        ? items 
        : items.filter(item => {
            if (type === 'wonders') return item.regionId === activeFilter;
            return (item.category || item.type) === activeFilter;
        });

    // Map common item categories to user-friendly labels
    const getFilterLabel = (cat: string) => {
        const exactMatches: Record<string, string> = {
            'food': lang === 'zh' ? '食品' : 'Food',
            'drink': lang === 'zh' ? '飲品' : 'Drink',
            'lifestyle': lang === 'zh' ? '生活類' : 'Lifestyle',
            'attraction': lang === 'zh' ? '景點' : 'Attraction',
            'restaurant': lang === 'zh' ? '餐廳' : 'Restaurant',
            'cafe': lang === 'zh' ? '咖啡' : 'Cafe',
            'taiwan': lang === 'zh' ? '全台灣' : 'All Taiwan',
            'taipei': lang === 'zh' ? '台北' : 'Taipei',
            'taichung': lang === 'zh' ? '台中' : 'Taichung',
            'tainan': lang === 'zh' ? '台南' : 'Tainan',
            'kaohsiung': lang === 'zh' ? '高雄' : 'Kaohsiung',
        };
        return exactMatches[cat] || cat.toUpperCase();
    };

    return (
        <AnimatePresence>
            <motion.div
                key="archive-view"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                className="fixed inset-0 z-[100] bg-tc-bg flex flex-col pt-safe overflow-hidden"
            >
                {/* Sticky Header */}
                <div className="flex-shrink-0 h-16 flex items-center justify-between px-4 bg-white/90 backdrop-blur-md border-b border-gray-100 z-10 sticky top-0 shadow-sm">
                    <button 
                        onClick={onClose} 
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
                        aria-label="Close Archive"
                    >
                        <X size={20} className="text-gray-900" />
                    </button>
                    <h2 className="text-[15px] font-black tracking-widest text-tc-text-main absolute left-1/2 -translate-x-1/2 uppercase text-center w-[60%] truncate">
                        {title}
                    </h2>
                    <div className="w-10"></div> {/* Spacer for pure centering */}
                </div>

                {/* Sub-filtering */}
                {filters.length > 0 && (
                    <div className="flex-shrink-0 bg-white border-b border-gray-100 px-6 py-4">
                        <div className="flex gap-2 overflow-x-auto no-scrollbar">
                            <button
                                onClick={() => setActiveFilter('all')}
                                className={`flex-shrink-0 px-5 py-2 rounded-full text-[12px] font-black tracking-widest transition-all uppercase ${
                                    activeFilter === 'all'
                                        ? 'bg-gray-900 text-white shadow-md'
                                        : 'bg-gray-50 text-tc-text-sec/80 hover:bg-gray-100 border border-gray-200'
                                }`}
                            >
                                {lang === 'zh' ? '全部' : 'ALL'}
                            </button>
                            {filters.map(filter => (
                                <button
                                    key={filter as string}
                                    onClick={() => setActiveFilter(filter as string)}
                                    className={`flex-shrink-0 px-5 py-2 rounded-full text-[12px] font-black tracking-widest transition-all uppercase ${
                                        activeFilter === filter
                                            ? 'bg-gray-900 text-white shadow-md'
                                            : 'bg-gray-50 text-tc-text-sec/80 hover:bg-gray-100 border border-gray-200'
                                    }`}
                                >
                                    {getFilterLabel(filter as string)}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Scrollable List Container */}
                <div className="flex-1 overflow-y-auto px-6 py-8 pb-32 overscroll-y-contain">
                    <AnimatePresence mode='popLayout'>
                        {/* 1. Gifts Grid Renderer */}
                        {type === 'gifts' && (
                            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
                                {displayItems.map((gift: TravelItem) => (
                                    <motion.button
                                        key={gift.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        onClick={() => onSelectItem && onSelectItem(gift)}
                                        className="text-left group flex flex-col w-full"
                                    >
                                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-50 shadow-sm border border-gray-100 group-hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-1">
                                            <img
                                                src={gift.coverImage || "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800"}
                                                alt={gift.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="mt-4 px-1">
                                            <h4 className="text-[14px] md:text-[15px] font-bold text-tc-text-main line-clamp-1 group-hover:text-tc-primary transition-colors">
                                                {lang === 'zh' ? gift.title : gift.titleEn}
                                            </h4>
                                            <p className="text-[12px] font-medium text-tc-text-sec/60 mt-1 line-clamp-2 leading-relaxed">
                                                {lang === 'zh' ? gift.marketingTitle : gift.marketingTitleEn}
                                            </p>
                                        </div>
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}

                        {/* 2. Wonders Grid Renderer */}
                        {type === 'wonders' && (
                            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {displayItems.map((wonder: CulturalInsight) => (
                                    <motion.button 
                                        key={wonder.id} 
                                        layout 
                                        onClick={() => onSelectItem && onSelectItem(wonder)}
                                        className="relative aspect-square rounded-[32px] overflow-hidden group shadow-sm border border-gray-100 p-5 flex flex-col justify-between transition-all hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] hover:-translate-y-1"
                                        style={{ background: wonder.backgroundColor || '#F3E8FF' }}
                                    >
                                        <div className="flex justify-end w-full">
                                            <span className="text-4xl filter drop-shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">{wonder.emoji}</span>
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-[15px] font-black leading-tight text-gray-900 tracking-tight line-clamp-2 group-hover:text-tc-primary transition-colors">
                                                {lang === 'zh' ? wonder.title : (wonder.titleEn || wonder.title)}
                                            </h4>
                                        </div>
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}

                        {/* 3. Spots Grid Renderer */}
                        {type === 'spots' && (
                            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {displayItems.map((spot: TravelItem, idx: number) => (
                                    <motion.button
                                        key={`${spot.id}-${idx}`}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        onClick={() => onSelectItem && onSelectItem(spot)}
                                        className="text-left group flex flex-col gap-3 w-full"
                                    >
                                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-tc-border/20 group-hover:shadow-[0_10px_30px_rgba(13,99,27,0.12)] transition-all group-hover:-translate-y-1">
                                            <img
                                                src={spot.coverImage || "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800"}
                                                alt={spot.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="px-1 mt-1">
                                            <div className="flex items-center gap-1 text-[10px] text-tc-primary font-black mb-1.5 uppercase tracking-[0.2em] leading-none">
                                                {spot.category || spot.type}
                                            </div>
                                            <h4 className="text-[17px] font-bold text-gray-900 leading-tight mb-2 group-hover:text-tc-primary transition-colors line-clamp-1">
                                                {lang === 'zh' ? spot.title : spot.titleEn}
                                            </h4>
                                        </div>
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}

                        {/* 4. Templates Grid Renderer */}
                        {type === 'templates' && (
                            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {displayItems.map((tpl: any) => (
                                    <motion.button
                                        key={tpl.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        onClick={() => onSelectItem && onSelectItem(tpl)}
                                        className="text-left group flex flex-col gap-3 w-full"
                                    >
                                        <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-sm border border-tc-border/20 group-hover:shadow-[0_10px_30px_rgba(13,99,27,0.08)] transition-all group-hover:-translate-y-1">
                                            <img
                                                src={tpl.coverImage}
                                                alt={lang === 'zh' ? tpl.name : tpl.nameEn}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="px-1 mt-1">
                                            <div className="flex items-center gap-1 text-[10px] text-tc-text/50 font-black mb-1 uppercase tracking-wider leading-none">
                                                ★ {tpl.region}
                                            </div>
                                            <h4 className="text-[15px] font-black tracking-tight text-gray-900 line-clamp-1 group-hover:text-tc-primary transition-colors">
                                                {lang === 'zh' ? tpl.name : tpl.nameEn}
                                            </h4>
                                        </div>
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}
                        
                        {/* Empty States Fallback */}
                        {displayItems.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-20 opacity-50">
                                <span className="text-4xl mb-4">🏜️</span>
                                <p className="text-tc-text-sec font-bold tracking-widest text-sm">NOTHING FOUND</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
