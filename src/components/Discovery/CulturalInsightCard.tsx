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
            className="flex-shrink-0 w-[85vw] md:w-[380px] rounded-[32px] flex flex-col relative overflow-hidden shadow-xl border border-white/10 group h-[480px]"
            style={{ 
                backgroundColor: insight.backgroundColor || '#F3E8FF',
                backgroundImage: insight.coverImage ? `url(${insight.coverImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Dark/Gradient Overlay for better readability */}
            {insight.coverImage && (
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60 z-0" />
            )}

            {/* Content Container with Glassmorphism if has image */}
            <div className={`relative z-10 flex flex-col h-full p-8 ${insight.coverImage ? 'backdrop-blur-[2px] bg-black/10' : ''}`}>
                
                {/* Region Pill */}
                <div className="flex items-center gap-2 mb-2">
                    <div className={`px-3 py-1 rounded-full border shadow-sm ${insight.coverImage ? 'bg-black/40 backdrop-blur-md border-white/20' : 'bg-white/80 border-black/5'}`}>
                        <span className={`text-[10px] font-black tracking-widest uppercase ${insight.coverImage ? 'text-amber-400' : 'text-[#5B4D7D]'}`}>
                            {insight.regionCode} x {lang === 'zh' ? (insight.regionName === 'Taiwan' ? '台灣' : insight.regionName) : insight.regionName}
                        </span>
                    </div>
                </div>

                {/* Type Label */}
                <div className="mb-4">
                    <span className={`text-[11px] font-bold uppercase tracking-[0.2em] ${insight.coverImage ? 'text-white/70' : 'text-black/40'}`}>
                        {lang === 'zh' ? insight.category : (insight.categoryEn || insight.category)}
                    </span>
                </div>

                {/* Title & Emoji */}
                <div className="flex items-start justify-between mb-4">
                    <h3 className={`text-[24px] font-black leading-tight flex-1 ${insight.coverImage ? 'text-white drop-shadow-lg' : 'text-[#1A1A1A]'}`}>
                        {lang === 'zh' ? insight.title : (insight.titleEn || insight.title)}
                    </h3>
                    <span className="text-4xl filter drop-shadow-md ml-4 group-hover:scale-125 transition-transform duration-500">{insight.emoji}</span>
                </div>

                {/* Narrative Content */}
                <div className="flex-1">
                    <p className={`text-[15px] leading-[1.7] font-medium ${insight.coverImage ? 'text-white/90 drop-shadow-md' : 'text-[#333333] opacity-90'}`}>
                        {lang === 'zh' ? insight.content : (insight.contentEn || insight.content)}
                    </p>
                </div>

                {/* Foreigner Reaction Box - Sticky at bottom */}
                <div className={`${insight.coverImage ? 'bg-white/15 backdrop-blur-xl border-white/20' : 'bg-white/50 border-white/40'} border rounded-2xl p-5 mt-4 transition-transform group-hover:translate-y-[-4px]`}>
                    <p className={`text-[14px] leading-relaxed font-bold italic ${insight.coverImage ? 'text-amber-200' : 'text-[#5B4D7D]'}`}>
                        {lang === 'zh' ? insight.foreignerReaction : (insight.foreignerReactionEn || insight.foreignerReaction)}
                    </p>
                </div>
            </div>

            {/* Subtle decorative element */}
            {!insight.coverImage && (
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            )}
        </motion.div>
    );
};
