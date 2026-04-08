import React from 'react';
import { CulturalInsight, LangType } from '../../types';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface CulturalInsightCardProps {
    insight: CulturalInsight;
    lang: LangType;
    isCompact?: boolean;
    isFullBleed?: boolean;
    onClick?: () => void;
}

export const CulturalInsightCard: React.FC<CulturalInsightCardProps> = ({ insight, lang, isCompact = false, isFullBleed = false, onClick }) => {
    // Determine gradient base
    const baseColor = insight.backgroundColor || '#F3E8FF';
    
    return (
        <motion.div 
            whileHover={!isFullBleed ? { y: -5, transition: { duration: 0.2 } } : undefined}
            onClick={onClick}
            className={`flex-shrink-0 rounded-[40px] flex flex-col relative overflow-hidden group transition-all duration-300 ${onClick ? 'cursor-pointer active:scale-95' : ''} ${isFullBleed ? 'w-full h-auto !bg-transparent !shadow-none !border-none !rounded-none' : isCompact ? 'w-[260px] h-[200px] shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-gray-100/30' : 'w-[85vw] md:w-[380px] h-[520px] shadow-[0_40px_80px_rgba(0,0,0,0.18)]'}`}
            style={{ 
                background: isFullBleed ? 'transparent' : (isCompact 
                    ? baseColor 
                    : `linear-gradient(135deg, ${baseColor} 0%, ${baseColor} 100%)`),
            }}
        >

            <div className={`relative z-10 flex flex-col h-full ${isFullBleed ? 'px-0 py-4' : (isCompact ? 'p-6' : 'p-7 md:p-9')}`}>
                
                <div className="flex items-center gap-2 mb-3">
                    <div className="px-3 py-1.5 rounded-full shadow-sm bg-white/80">
                        <span className="text-[9px] font-black tracking-[0.2em] uppercase text-[#8B5CF6]">
                            {insight.regionCode} x {lang === 'zh' ? (insight.regionName === 'Taiwan' ? '台灣' : insight.regionName) : insight.regionName}
                        </span>
                    </div>
                </div>


                <div className={`flex items-start justify-between ${isFullBleed ? 'mb-12' : (isCompact ? 'mb-0' : 'mb-6')}`}>
                    <h3 className={`${isFullBleed ? 'text-[36px] md:text-[42px]' : isCompact ? (lang === 'en' ? 'text-[18px]' : 'text-[20px]') : 'text-[28px]'} font-black leading-[1.1] flex-1 tracking-tight ${!isFullBleed ? 'line-clamp-2' : ''} text-[#1F1F1F]`}>
                        {lang === 'zh' ? insight.title : (insight.titleEn || insight.title)}
                    </h3>
                    {!isCompact && (
                        <span className={`${isFullBleed ? 'text-7xl' : 'text-5xl'} filter drop-shadow-lg ml-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}>{insight.emoji}</span>
                    )}
                </div>

                {/* Narrative Content - Hide if compact */}
                {!isCompact && (
                    <div className={isFullBleed ? 'mb-12' : 'flex-1'}>
                        <p className={`${isFullBleed ? 'text-[18px] md:text-[20px]' : 'text-[16px]'} leading-[1.8] font-medium tracking-tight text-[#4A4A4A]`}>
                            {lang === 'zh' ? insight.content : (insight.contentEn || insight.content)}
                        </p>
                    </div>
                )}

                {/* Editorial Quote Block (Foreigner Reaction) - Hide if compact */}
                {!isCompact && (
                    <div className={`relative mt-6 px-7 py-8 rounded-[32px] overflow-hidden transition-all duration-500 group-hover:translate-y-[-4px] group-hover:shadow-lg bg-white/60 shadow-sm ${isFullBleed ? 'max-w-2xl' : ''}`}>
                        {/* Stylized Quote Icon */}
                        <Quote 
                            size={40} 
                            strokeWidth={3}
                            className={`absolute -top-1 -left-1 opacity-[0.08] text-black`} 
                        />
                        
                        <div className="relative z-10">
                            <span className={`block text-[11px] font-black uppercase tracking-widest mb-3 text-[#8B5CF6]`}>
                                {lang === 'zh' ? '• 旅客驚訝地說' : '• A traveler said in surprise'}
                            </span>
                            <p className={`text-[15px] leading-relaxed font-bold italic tracking-tight text-[#2D3748]`}>
                                "{lang === 'zh' ? insight.foreignerReaction : (insight.foreignerReactionEn || insight.foreignerReaction)}"
                            </p>
                        </div>
                    </div>
                )}

                {/* Compact Mode Emoji & Indicator */}
                {isCompact && (
                    <div className="mt-auto flex items-end justify-between">
                        <span className="text-4xl filter drop-shadow-md group-hover:scale-110 transition-transform duration-500">{insight.emoji}</span>
                    </div>
                )}
            </div>

            {/* Subtle decorative element */}
            {!isFullBleed && <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/20 rounded-full blur-3xl pointer-events-none" />}
        </motion.div>
    );
};
