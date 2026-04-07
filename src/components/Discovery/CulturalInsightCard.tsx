import React from 'react';
import { CulturalInsight, LangType } from '../../types';
import { motion } from 'framer-motion';

interface CulturalInsightCardProps {
    insight: CulturalInsight;
    lang: LangType;
}

export const CulturalInsightCard: React.FC<CulturalInsightCardProps> = ({ insight, lang }) => {
    return (
        <motion.div 
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="flex-shrink-0 w-[85vw] md:w-[380px] rounded-[32px] p-8 flex flex-col relative overflow-hidden shadow-sm border border-black/5"
            style={{ backgroundColor: insight.backgroundColor || '#F3E8FF' }}
        >
            {/* Region Pill */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
                <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-black/5 shadow-sm">
                    <span className="text-[10px] font-black tracking-widest text-[#5B4D7D] uppercase">
                        {insight.regionCode} x {lang === 'zh' ? (insight.regionName === 'Taiwan' ? '台灣' : insight.regionName) : insight.regionName}
                    </span>
                </div>
            </div>

            {/* Type Label */}
            <div className="mt-8 mb-4">
                <span className="text-[11px] font-bold text-black/40 uppercase tracking-[0.2em]">
                    {lang === 'zh' ? insight.category : (insight.categoryEn || insight.category)}
                </span>
            </div>

            {/* Title & Emoji */}
            <div className="flex items-start justify-between mb-6">
                <h3 className="text-[24px] font-black text-[#1A1A1A] leading-tight flex-1">
                    {lang === 'zh' ? insight.title : (insight.titleEn || insight.title)}
                </h3>
                <span className="text-4xl filter drop-shadow-md ml-4">{insight.emoji}</span>
            </div>

            {/* Narrative Content */}
            <div className="flex-1 mb-8">
                <p className="text-[16px] leading-[1.7] text-[#333333] font-medium opacity-90">
                    {lang === 'zh' ? insight.content : (insight.contentEn || insight.content)}
                </p>
            </div>

            {/* Foreigner Reaction Box */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-5 border border-white/40">
                <p className="text-[14px] leading-relaxed text-[#5B4D7D] font-bold italic">
                    {lang === 'zh' ? insight.foreignerReaction : (insight.foreignerReactionEn || insight.foreignerReaction)}
                </p>
            </div>

            {/* Subtle decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        </motion.div>
    );
};
