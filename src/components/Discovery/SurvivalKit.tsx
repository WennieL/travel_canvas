import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LangType, SurvivalGuide, SurvivalTopic } from '../../types';
import * as LucideIcons from 'lucide-react';
import { X, ArrowRight, Info } from 'lucide-react';

interface SurvivalKitProps {
    guide?: SurvivalGuide;       // Legacy single-guide mode
    guides?: SurvivalGuide[];
    lang: LangType;
    title?: string;
    subtitle?: string;
    titleEn?: string;
    subtitleEn?: string;
    activeRegionFilter?: string; // [NEW] External control
}

export const SurvivalKit: React.FC<SurvivalKitProps> = ({ 
    guide,
    guides,
    lang,
    title,
    subtitle,
    titleEn,
    subtitleEn,
    activeRegionFilter = 'all'
}) => {
    const [selectedTopic, setSelectedTopic] = useState<SurvivalTopic | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>('all'); // [NEW] Sub-category filter
    const [showAllTopics, setShowAllTopics] = useState(false); // [NEW] Full screen archive state

    // 1. Determine which topics to show for the region
    const allTopics = guides 
        ? guides.flatMap(g => g.topics) 
        : (guide?.topics || []);

    const regionTopics = activeRegionFilter === 'all' || activeRegionFilter === 'taiwan'
        ? allTopics
        : allTopics.filter(t => {
            const parentGuide = guides?.find(g => g.topics.some(topic => topic.id === t.id));
            if (!parentGuide) return false;
            return parentGuide.regionId === activeRegionFilter || parentGuide.regionId === 'taiwan';
        });

    if (regionTopics.length === 0) return null;

    // 2. Extract unique categories dynamically and format them
    const uniqueCategories = Array.from(new Set(regionTopics.map(t => t.category)));
    const categoryMapping: Record<string, { zh: string, en: string, icon: string }> = {
        'transport': { zh: '交通', en: 'Transport', icon: '🚌' },
        'culture': { zh: '文化', en: 'Culture', icon: '🏮' },
        'money': { zh: '花費', en: 'Money', icon: '💰' },
        'food': { zh: '美食', en: 'Food', icon: '🍜' },
        'safety': { zh: '安全', en: 'Safety', icon: '🛡️' },
        'tips': { zh: '生活', en: 'Life Tips', icon: '💡' }
    };

    // 3. Apply final category filter
    const displayTopics = activeCategory === 'all' 
        ? regionTopics 
        : regionTopics.filter(t => t.category === activeCategory);

    return (
        <section className="mt-8 mb-12">
            <div className="flex flex-col gap-6 px-6 mb-4">
                {/* Header Section */}
                {(title || subtitle) && (
                    <div className="flex items-end justify-between">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-600">
                                {lang === 'zh' ? title : titleEn}
                            </h3>
                            {subtitle && (
                                <p className="text-[20px] font-serif font-black text-gray-900 leading-tight">
                                    {lang === 'zh' ? subtitle : subtitleEn}
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Dynamic Category Tabs */}
            {uniqueCategories.length > 0 && (
                <div className="flex gap-2 overflow-x-auto no-scrollbar px-6 pb-6">
                    <button
                        onClick={() => setActiveCategory('all')}
                        className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest transition-all ${
                            activeCategory === 'all'
                                ? 'bg-gray-900 text-white shadow-sm'
                                : 'bg-gray-50 text-tc-text-sec/60 hover:bg-gray-100'
                        }`}
                    >
                        {lang === 'zh' ? '全部' : 'ALL'}
                    </button>
                    {uniqueCategories.map(cat => {
                        const meta = categoryMapping[cat] || { zh: cat, en: cat.toUpperCase(), icon: '📌' };
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest transition-all uppercase flex items-center gap-1.5 ${
                                    activeCategory === cat
                                        ? 'bg-gray-900 text-white shadow-sm'
                                        : 'bg-gray-50 text-tc-text-sec/60 hover:bg-gray-100'
                                }`}
                            >
                                <span className="text-[10px]">{meta.icon}</span>
                                {lang === 'zh' ? meta.zh : meta.en}
                            </button>
                        );
                    })}
                </div>
            )}

            <div className="grid grid-rows-2 grid-flow-col auto-cols-[76px] md:auto-cols-[80px] gap-y-6 gap-x-4 overflow-x-auto no-scrollbar px-6 pb-6 snap-x snap-mandatory">
                <AnimatePresence mode="popLayout">
                    {displayTopics.slice(0, 7).map((topic, index) => {
                        const IconComponent = (LucideIcons as any)[topic.icon] || LucideIcons.Info;
                        
                        return (
                            <motion.button
                                key={`${topic.id}-${index}`}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedTopic(topic)}
                                className="flex flex-col items-center gap-2 group snap-center w-full"
                            >
                                <div className="w-[60px] h-[60px] bg-white rounded-full flex shrink-0 items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 group-hover:border-tc-primary/30 group-hover:shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-all overflow-hidden relative">
                                    <IconComponent size={24} className="text-tc-primary group-hover:scale-110 transition-transform" />
                                    <div className="absolute inset-0 bg-tc-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="text-center w-full px-1">
                                    <h4 className="text-[11px] font-black leading-tight text-tc-text-main group-hover:text-tc-primary transition-colors line-clamp-1">
                                        {lang === 'zh' ? topic.title : topic.titleEn}
                                    </h4>
                                </div>
                            </motion.button>
                        );
                    })}
                    
                    {displayTopics.length > 7 && (
                        <motion.button
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowAllTopics(true)}
                            className="flex flex-col items-center gap-2 group snap-center w-full"
                        >
                            <div className="w-[60px] h-[60px] bg-gray-50 rounded-full flex shrink-0 items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 group-hover:border-tc-primary/30 group-hover:bg-gray-100 transition-all overflow-hidden relative">
                                <ArrowRight size={24} className="text-gray-900 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <div className="text-center w-full px-1">
                                <h4 className="text-[11px] font-black leading-tight text-tc-text-sec transition-colors line-clamp-1 uppercase uppercase tracking-wider">
                                    {lang === 'zh' ? '查看更多' : 'More'}
                                </h4>
                            </div>
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            {/* Detailed Modal */}
            <AnimatePresence>
                {selectedTopic && (
                    <div className="fixed inset-0 z-[3999] flex items-end md:items-center justify-center p-0 md:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedTopic(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            className="relative w-full max-w-xl bg-white rounded-t-[3rem] md:rounded-[3rem] overflow-hidden flex flex-col max-h-[90vh] shadow-2xl"
                        >
                            {/* Drawer Handle / Grabber */}
                            <div className="flex justify-center p-4 cursor-grab active:cursor-grabbing" onClick={() => setSelectedTopic(null)}>
                                <div className="w-12 h-1.5 bg-black/10 rounded-full" />
                            </div>
                            <div className="relative h-64 shrink-0">
                                <img 
                                    src={selectedTopic.imageUrl} 
                                    className="w-full h-full object-cover"
                                    alt={selectedTopic.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                                <button
                                    onClick={() => setSelectedTopic(null)}
                                    className="absolute top-6 right-6 w-10 h-10 bg-black/30 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white z-10 hover:bg-black/40 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                                
                                <div className="absolute bottom-6 left-8 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-tc-primary text-white rounded-2xl flex items-center justify-center shadow-lg">
                                        {(() => {
                                            const Icon = (LucideIcons as any)[selectedTopic.icon] || Info;
                                            return <Icon size={20} />;
                                        })()}
                                    </div>
                                    <h3 className="text-3xl font-black text-gray-900 leading-tight">
                                        {lang === 'zh' ? selectedTopic.title : selectedTopic.titleEn}
                                    </h3>
                                </div>
                            </div>

                            <div className="p-10 pt-4 pb-32 overflow-y-auto no-scrollbar">
                                <div className="mb-10 flex items-center gap-3">
                                    <span className="text-[11px] font-black text-teal-600 uppercase tracking-[0.2em]">
                                        Insider Survival Tips
                                    </span>
                                    <div className="h-[1px] flex-1 bg-gray-100" />
                                </div>
                                <p className="text-[17px] leading-[2] text-gray-800 font-bold whitespace-pre-wrap">
                                    {lang === 'zh' ? selectedTopic.content : selectedTopic.contentEn}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Full Screen Category Archive (Uber Eats Style) */}
            <AnimatePresence>
                {showAllTopics && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                        className="fixed inset-0 z-[2000] bg-tc-bg flex flex-col pt-safe overflow-hidden"
                    >
                        {/* Sticky Header */}
                        <div className="flex-shrink-0 h-16 flex items-center justify-between px-4 bg-white/90 backdrop-blur-md border-b border-gray-100 z-10 sticky top-0 shadow-sm">
                            <button 
                                onClick={() => setShowAllTopics(false)} 
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                                <X size={20} className="text-gray-900" />
                            </button>
                            <h2 className="text-[15px] font-black tracking-widest text-tc-text-main absolute left-1/2 -translate-x-1/2 uppercase text-center w-[60%] truncate">
                                {lang === 'zh' ? title : titleEn}
                            </h2>
                            <div className="w-10"></div>
                        </div>

                        {/* Scrollable Grid */}
                        <div className="flex-1 overflow-y-auto px-6 py-8 pb-32">
                            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-8">
                                {displayTopics.map((topic, index) => {
                                    const IconComponent = (LucideIcons as any)[topic.icon] || LucideIcons.Info;
                                    return (
                                        <motion.button
                                            key={`${topic.id}-archive-${index}`}
                                            layout
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setSelectedTopic(topic)}
                                            className="flex flex-col items-center gap-2 group w-full"
                                        >
                                            <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-white rounded-full flex shrink-0 items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 group-hover:border-tc-primary/30 group-hover:shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-all overflow-hidden relative">
                                                <IconComponent size={24} className="text-tc-primary group-hover:scale-110 transition-transform" />
                                                <div className="absolute inset-0 bg-tc-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <div className="text-center w-full px-1">
                                                <h4 className="text-[11px] font-black leading-tight text-tc-text-main group-hover:text-tc-primary transition-colors line-clamp-2">
                                                    {lang === 'zh' ? topic.title : topic.titleEn}
                                                </h4>
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
