import React from 'react';
import { Lock } from 'lucide-react';
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

    return (
        <div className="flex items-center gap-3 min-w-0 flex-1">
            {/* Image / Icon Thumbnail */}
            <div className={`relative flex-shrink-0 bg-gray-50 flex items-center justify-center rounded-md overflow-hidden w-10 h-10 text-2xl`}>
                {isLocked && (
                    <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                        <Lock size={12} className="text-gray-400" />
                    </div>
                )}
                {item.image || getFallbackImage(item.type)}
            </div>

            {/* Title & Region Badge */}
            <div className="flex-1 min-w-0 mr-2">
                <div className="flex items-center gap-2 overflow-hidden mr-2 min-w-0">
                    <h4 className={`font-bold text-sm truncate ${isLocked ? 'text-gray-600 italic' : 'text-gray-700'}`}>
                        {displayTitle}
                    </h4>

                    {/* Cross-Region Badge (e.g. "Melbourne" badge in a "Sydney" plan) */}
                    {item.region && planRegion && item.region !== 'all' && planRegion !== 'all' && item.region !== planRegion && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 font-bold tracking-wider uppercase border border-gray-200 flex-shrink-0">
                            {t[item.region] || item.region}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};
