import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LangType, SurvivalGuide, SurvivalTopic } from '../../types';
import * as LucideIcons from 'lucide-react';
import { X, ArrowRight, Info } from 'lucide-react';

interface SurvivalKitProps {
    guide?: SurvivalGuide;       // Legacy single-guide mode
    guides?: SurvivalGuide[];    // New multi-guide (Compass) mode
    lang: LangType;
    title?: string;
    subtitle?: string;
    titleEn?: string;
    subtitleEn?: string;
}

export const SurvivalKit: React.FC<SurvivalKitProps> = ({ 
    guide, 
    guides, 
    lang,
    title,
    subtitle,
    titleEn,
    subtitleEn
}) => {
    const [selectedTopic, setSelectedTopic] = useState<SurvivalTopic | null>(null);
    const [activeRegionFilter, setActiveRegionFilter] = useState<string>('all');

    // 1. Determine which topics to show
    const allTopics = guides 
        ? guides.flatMap(g => g.topics) 
        : (guide?.topics || []);

    const filteredTopics = activeRegionFilter === 'all'
        ? allTopics
        : allTopics.filter(t => {
            // Find which guide this topic belongs to
            const parentGuide = guides?.find(g => g.topics.some(topic => topic.id === t.id));
            return parentGuide?.regionId === activeRegionFilter;
        });

    // 2. Dynamic Filters based on data
    const filterOptions = guides ? [
        { id: 'all', label: lang === 'zh' ? '全部' : 'ALL' },
        ...guides.map(g => ({
            id: g.regionId,
            label: g.regionId === 'taiwan' 
                ? (lang === 'zh' ? '全台通用' : 'ESSENTIALS')
                : (lang === 'zh' ? g.regionId.toUpperCase() : g.regionId.toUpperCase())
        }))
    ] : [];

    return (
        <section className="mt-8 mb-12">
            <div className="flex flex-col gap-6 px-6 mb-8">
                {/* Header Section */}
                {(title || subtitle) && (
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
                )}

                {/* Filter Pills (Only in Multi-guide mode) */}
                {guides && guides.length > 0 && (
                    <div className="flex gap-2.5 overflow-x-auto no-scrollbar py-1">
                        {filterOptions.map(opt => (
                            <button
                                key={opt.id}
                                onClick={() => setActiveRegionFilter(opt.id)}
                                className={`flex-shrink-0 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                                    activeRegionFilter === opt.id
                                        ? 'bg-teal-600 text-white shadow-md'
                                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                }`}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex overflow-x-auto scrollbar-hide gap-5 px-6 pb-4">
                <AnimatePresence mode="popLayout">
                    {filteredTopics.map((topic) => {
                        const IconComponent = (LucideIcons as any)[topic.icon] || LucideIcons.Info;
                        
                        return (
                            <motion.button
                                key={topic.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedTopic(topic)}
                                className="flex-shrink-0 w-72 h-44 relative rounded-[2rem] overflow-hidden group shadow-lg border border-gray-100 bg-gray-50"
                            >
                                <img 
                                    src={topic.imageUrl || 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=800'} 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    alt={topic.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                                
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-7 h-7 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                                            <IconComponent size={14} />
                                        </div>
                                        <span className="text-[9px] font-black text-white/70 uppercase tracking-widest leading-none">
                                            {topic.category.toUpperCase()}
                                        </span>
                                    </div>
                                    <h4 className="text-white font-black text-lg leading-tight mb-1">
                                        {lang === 'zh' ? topic.title : topic.titleEn}
                                    </h4>
                                    <p className="text-white/60 text-[11px] font-bold line-clamp-1">
                                        {lang === 'zh' ? topic.teaser : topic.teaserEn}
                                    </p>
                                </div>
                            </motion.button>
                        );
                    })}
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
        </section>
    );
};
