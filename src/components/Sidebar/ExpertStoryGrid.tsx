import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExpertStory, LangType, ExpertStoryCategory } from '../../types';
import { TRANSLATIONS } from '../../data/translations';
import * as LucideIcons from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

interface ExpertStoryGridProps {
    stories: ExpertStory[];
    lang: LangType;
    themeColor?: string;
}

const CATEGORY_ICONS: Record<ExpertStoryCategory, string> = {
    'must-do': 'CheckCircle2',
    'must-eat': 'UtensilsCrossed',
    'trap': 'AlertTriangle',
    'hidden': 'Lightbulb'
};

const CATEGORY_COLORS: Record<ExpertStoryCategory, string> = {
    'must-do': '#527d22',
    'must-eat': '#b86818',
    'trap': '#b83838',
    'hidden': '#354e96'
};

const CATEGORY_BG_COLORS: Record<ExpertStoryCategory, string> = {
    'must-do': '#eef5e3',
    'must-eat': '#fff3e8',
    'trap': '#fdf0ef',
    'hidden': '#edf0f9'
};

export const ExpertStoryGrid: React.FC<ExpertStoryGridProps> = ({ stories, lang, themeColor }) => {
    const [expandedId, setExpandedId] = useState<ExpertStoryCategory | null>(null);

    const toggleExpand = (id: ExpertStoryCategory) => {
        setExpandedId(expandedId === id ? null : id);
    };

    if (!stories || stories.length === 0) return null;

    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
                {stories.map((story) => {
                    const isExpanded = expandedId === story.id;
                    const IconComponent = (LucideIcons as any)[story.icon || CATEGORY_ICONS[story.id]] || LucideIcons.Info;
                    const accentColor = CATEGORY_COLORS[story.id];
                    const bgColor = CATEGORY_BG_COLORS[story.id];

                    return (
                        <div
                            key={story.id}
                            className={clsx(
                                "flex flex-col rounded-[20px] overflow-hidden cursor-pointer transition-all duration-300 border",
                                isExpanded ? "col-span-2 shadow-lg scale-[1.02]" : "shadow-sm hover:shadow-md",
                                isExpanded ? "border-black/5" : "border-transparent"
                            )}
                            style={{ backgroundColor: bgColor }}
                            onClick={() => toggleExpand(story.id)}
                        >
                            <div className="p-4 flex flex-col h-full justify-between">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-2">
                                        <div 
                                            className="w-8 h-8 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: 'rgba(255,255,255,0.5)', color: accentColor }}
                                        >
                                            <IconComponent size={16} />
                                        </div>
                                        <span 
                                            className="text-[10px] font-black tracking-widest uppercase"
                                            style={{ color: accentColor }}
                                        >
                                            {(() => {
                                                const t = TRANSLATIONS[lang];
                                                const categoryKey = story.id === 'must-do' ? 'category_mustDo' : 
                                                                    story.id === 'must-eat' ? 'category_mustEat' : 
                                                                    story.id === 'trap' ? 'category_trap' : 'category_hidden';
                                                return lang === 'zh' ? (story.label || t[categoryKey]) : (story.labelEn || t[categoryKey]);
                                            })()}
                                        </span>
                                    </div>
                                    <ChevronDown 
                                        size={14} 
                                        className={clsx(
                                            "transition-transform duration-300 opacity-30",
                                            isExpanded && "rotate-180"
                                        )} 
                                    />
                                </div>

                                <div className="mt-3">
                                    <p className="text-[13px] font-black text-[#181D17] leading-snug">
                                        {lang === 'zh' ? story.summary : (story.summaryEn || story.summary)}
                                    </p>
                                </div>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-4 pt-4 border-t border-black/5">
                                                <p className="text-[14px] leading-[1.7] text-[#181D17]/80 font-bold">
                                                    {lang === 'zh' ? story.story : (story.storyEn || story.story)}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            <div className="text-center mt-2">
                <span className="text-[10px] font-black text-[#C4C8BE] tracking-[0.15em] uppercase opacity-60">
                    {TRANSLATIONS[lang].clickToExpandStories}
                </span>
            </div>
        </div>
    );
};
