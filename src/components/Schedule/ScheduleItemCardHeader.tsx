import React from 'react';
import { Lock, Star } from 'lucide-react';
import { ScheduleItem, Region, LangType } from '../../types';
import { getFallbackImage } from '../../utils';

interface ScheduleItemCardHeaderProps {
    item: ScheduleItem;
    lang: string;
    t: any;
    planRegion?: Region;
}

export const ScheduleItemCardHeader: React.FC<ScheduleItemCardHeaderProps> = ({
    item, lang, t, planRegion
}) => {
    const isLocked = item.isLocked;
    
    // Localization Logic
    const displayTitleRaw = isLocked
        ? (lang === 'en' && item.marketingTitleEn ? item.marketingTitleEn : item.marketingTitle)
        : (lang === 'en' && item.titleEn ? item.titleEn : item.title);

    const displayTitle = displayTitleRaw || (isLocked ? t.secretLocation : item.title);

    // Image Logic: Priority for coverImage (URL) over icon/emoji
    const hasImage = !!item.coverImage;
    const thumbnailSource = item.coverImage || item.image || getFallbackImage(item.type);

    return (
        <div className="flex items-start gap-3.5 min-w-0 flex-1">
            {/* 1. Micro-Thumbnail (60x60 range) */}
            <div className={`relative flex-shrink-0 bg-[#F1F3EE] flex items-center justify-center rounded-xl overflow-hidden w-[54px] h-[54px] lg:w-[60px] lg:h-[60px] border border-[#E8EDE4]`}>
                {hasImage ? (
                    <img 
                        src={item.coverImage} 
                        alt={displayTitle}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className="text-2xl pb-1">{thumbnailSource}</div>
                )}
                
                {isLocked && (
                    <div className="absolute inset-0 bg-white/40 flex items-center justify-center backdrop-blur-[1px]">
                        <Lock size={12} className="text-[#8E9285]" />
                    </div>
                )}
            </div>

            {/* 2. Metadata & Title */}
            <div className="flex-1 min-w-0 pt-0.5">
                {/* Category & Rating Row */}
                <div className="flex items-center gap-2.5 mb-1">
                    <span className="text-[10px] font-black text-tc-primary uppercase tracking-widest opacity-80">
                        {t[item.type] || item.type}
                    </span>
                    {item.rating && (
                        <div className="flex items-center gap-1 text-[10px] font-bold text-amber-500">
                            <Star size={9} fill="currentColor" />
                            <span>{item.rating}</span>
                        </div>
                    )}
                </div>

                {/* Title Row */}
                <div className="flex items-center gap-2 overflow-hidden min-w-0">
                    <h4 className={`text-[16px] font-black leading-tight truncate font-plus-jakarta ${isLocked ? 'text-[#8E9285] italic font-medium' : 'text-[#181D17]'}`}>
                        {displayTitle}
                    </h4>

                    {/* Cross-Region Badge */}
                    {item.region && planRegion && item.region !== 'all' && planRegion !== 'all' && item.region !== planRegion && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#F1F3EE] text-[#8E9285] font-black tracking-widest uppercase border border-[#E8EDE4] flex-shrink-0 scale-90 origin-left">
                            {t[item.region] || item.region}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};
