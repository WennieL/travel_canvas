import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExpertStory, LangType, ExpertStoryCategory } from '../../types';
import { CheckCircle2, UtensilsCrossed, AlertTriangle, Lightbulb, ChevronDown, Zap } from 'lucide-react';
import { clsx } from 'clsx';

interface ExpertStoryTabsProps {
    stories: ExpertStory[];
    lang: LangType;
}

const CATEGORY_ICONS: Record<ExpertStoryCategory, React.ReactNode> = {
    'must-do': <CheckCircle2 size={18} />,
    'must-eat': <UtensilsCrossed size={18} />,
    'trap': <AlertTriangle size={18} />,
    'hidden': <Lightbulb size={18} />
};

const CATEGORY_COLORS: Record<ExpertStoryCategory, string> = {
    'must-do': 'text-green-600 bg-green-50 border-green-100',
    'must-eat': 'text-orange-600 bg-orange-50 border-orange-100',
    'trap': 'text-amber-600 bg-amber-50 border-amber-100',
    'hidden': 'text-indigo-600 bg-indigo-50 border-indigo-100'
};

export const ExpertStoryTabs: React.FC<ExpertStoryTabsProps> = ({ stories, lang }) => {
    const [activeId, setActiveId] = useState<ExpertStoryCategory | null>(stories[0]?.id || null);
    
    if (!stories || stories.length === 0) return null;

    return (
        <div className="flex flex-col">
            {stories.map((story) => {
                const isActive = activeId === story.id;
                // Since this component doesn't have access to the item, 
                // it uses the predefined category colors but we could pass the themeColor down if needed.
                const colors = CATEGORY_COLORS[story.id];
                
                return (
                    <div 
                        key={story.id} 
                        className="border-b border-tc-primary/5 last:border-0"
                    >
                        <button
                            onClick={() => setActiveId(isActive ? null : story.id)}
                            className="w-full flex items-center justify-between py-7 text-left outline-none group"
                        >
                            <div className="flex items-center gap-5">
                                <div className={clsx(
                                    "w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-sm",
                                    isActive ? colors : "bg-white text-gray-400"
                                )}>
                                    {CATEGORY_ICONS[story.id]}
                                </div>
                                <div>
                                    <div className={clsx(
                                        "text-[12px] font-black uppercase tracking-widest mb-1",
                                        isActive ? "text-tc-primary" : "text-[#8E9285]"
                                    )}>
                                        {lang === 'zh' ? story.label : (story.labelEn || story.label)}
                                    </div>
                                    <div className={clsx(
                                        "text-[16px] font-black transition-colors",
                                        isActive ? "text-[#181D17]" : "text-[#181D17]/60"
                                    )}>
                                        {lang === 'zh' ? story.summary : (story.summaryEn || story.summary)}
                                    </div>
                                </div>
                            </div>
                            <div className={clsx(
                                "w-7 h-7 rounded-full flex items-center justify-center border transition-all",
                                isActive ? "border-tc-primary text-tc-primary bg-tc-primary/5" : "border-gray-200 text-gray-300"
                            )}>
                                <ChevronDown 
                                    size={16} 
                                    className={clsx(
                                        "transition-transform duration-500",
                                        isActive && "rotate-180"
                                    )} 
                                />
                            </div>
                        </button>

                        <AnimatePresence>
                            {isActive && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                >
                                    <div className="pl-16 pb-8">
                                        <p className="text-[16px] leading-[1.8] text-[#4A5548] font-bold opacity-80">
                                            {lang === 'zh' ? story.story : (story.storyEn || story.story)}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}

            {/* Hint text - Minimalist */}
            <div className="flex items-center gap-3 text-[#C4C8BE] text-[11px] font-black tracking-[0.2em] uppercase mt-8 opacity-60">
                <div className="w-6 h-[1px] bg-current" />
                {lang === 'zh' ? '點閱完整達人故事' : 'Tap to read more'}
            </div>
        </div>
    );
};
