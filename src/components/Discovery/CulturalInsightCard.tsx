import React from 'react';
import { CulturalInsight, LangType } from '../../types';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface CulturalInsightCardProps {
    insight: CulturalInsight;
    lang: LangType;
    isCompact?: boolean;
    onClick?: () => void;
}

export const CulturalInsightCard: React.FC<CulturalInsightCardProps> = ({ insight, lang, isCompact = false, onClick }) => {
    // Determine gradient base
    const baseColor = insight.backgroundColor || '#F3E8FF';
    
    return (
        <motion.div 
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            onClick={onClick}
            className={`flex-shrink-0 rounded-[40px] flex flex-col relative overflow-hidden group transition-all duration-300 ${onClick ? 'cursor-pointer active:scale-95' : ''} ${isCompact ? 'w-[260px] h-[200px] shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-gray-100/30' : 'w-[85vw] md:w-[380px] h-[520px] shadow-[0_40px_80px_rgba(0,0,0,0.18)]'}`}
            style={{ 
                background: isCompact 
                    ? baseColor 
                    : `linear-gradient(135deg, ${baseColor} 0%, ${baseColor}dd 100%)`,
                backgroundImage: (insight.coverImage && !isCompact) ? `url(${insight.coverImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Dark/Gradient Overlay for better readability */}
            {insight.coverImage && !isCompact && (
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70 z-0" />
            )}

            {/* Content Container */}
            <div className={`relative z-10 flex flex-col h-full p-7 md:p-9 ${(insight.coverImage && !isCompact) ? 'backdrop-blur-[3px] bg-black/15' : ''}`}>
                
                {/* Region Pill */}
                <div className="flex items-center gap-2 mb-3">
                    <div className={`px-3 py-1.5 rounded-full shadow-sm ${(insight.coverImage && !isCompact) ? 'bg-black/40 backdrop-blur-md border border-white/10' : 'bg-white/80'}`}>
                        <span className={`text-[9px] font-black tracking-[0.2em] uppercase ${(insight.coverImage && !isCompact) ? 'text-amber-400' : 'text-[#8B5CF6]'}`}>
                            {insight.regionCode} x {lang === 'zh' ? (insight.regionName === 'Taiwan' ? '台灣' : insight.regionName) : insight.regionName}
                        </span>
                    </div>
                </div>

                {/* Type Label */}
                <div className={isCompact ? 'mb-2' : 'mb-5'}>
                    <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${(insight.coverImage && !isCompact) ? 'text-white/60' : 'text-black/30'}`}>
                        {lang === 'zh' ? insight.category : (insight.categoryEn || insight.category)}
                    </span>
                </div>

                {/* Title & Emoji */}
                <div className={`flex items-start justify-between ${isCompact ? 'mb-0' : 'mb-6'}`}>
                    <h3 className={`${isCompact ? 'text-[20px]' : 'text-[28px]'} font-black leading-[1.15] flex-1 tracking-tight ${(insight.coverImage && !isCompact) ? 'text-white drop-shadow-xl' : 'text-[#1F1F1F]'}`}>
                        {lang === 'zh' ? insight.title : (insight.titleEn || insight.title)}
                    </h3>
                    {!isCompact && (
                        <span className="text-5xl filter drop-shadow-lg ml-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">{insight.emoji}</span>
                    )}
                </div>

                {/* Narrative Content - Hide if compact */}
                {!isCompact && (
                    <div className="flex-1">
                        <p className={`text-[16px] leading-[1.9] font-medium tracking-tight ${insight.coverImage ? 'text-white/95 drop-shadow-md' : 'text-[#4A4A4A]'}`}>
                            {lang === 'zh' ? insight.content : (insight.contentEn || insight.content)}
                        </p>
                    </div>
                )}

                {/* Editorial Quote Block (Foreigner Reaction) - Hide if compact */}
                {!isCompact && (
                    <div className={`relative mt-6 px-6 py-6 rounded-[28px] overflow-hidden transition-all duration-500 group-hover:translate-y-[-4px] group-hover:shadow-lg ${insight.coverImage ? 'bg-white/10 backdrop-blur-2xl' : 'bg-white/60 shadow-sm'}`}>
                        {/* Stylized Quote Icon */}
                        <Quote 
                            size={40} 
                            strokeWidth={3}
                            className={`absolute -top-1 -left-1 opacity-[0.08] ${insight.coverImage ? 'text-white' : 'text-black'}`} 
                        />
                        
                        <div className="relative z-10">
                            <span className={`block text-[11px] font-black uppercase tracking-widest mb-3 ${insight.coverImage ? 'text-amber-300' : 'text-[#8B5CF6]'}`}>
                                {lang === 'zh' ? '• 旅客驚訝地說' : '• A traveler said in surprise'}
                            </span>
                            <p className={`text-[15px] leading-relaxed font-bold italic tracking-tight ${insight.coverImage ? 'text-white' : 'text-[#2D3748]'}`}>
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
            {!insight.coverImage && (
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/20 rounded-full blur-3xl pointer-events-none" />
            )}
        </motion.div>
    );
};
