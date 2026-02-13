import React from 'react';
import { Lock } from 'lucide-react';
import { TravelItem, LangType } from '../../types';
import { getFallbackImage } from '../../utils';

interface AssetItemCardProps {
    item: TravelItem;
    lang: LangType;
    isMobile: boolean;
    onDragStart: (e: React.DragEvent) => void;
    onClick: () => void;
    onMouseEnter: (e: React.MouseEvent) => void;
    onMouseLeave: () => void;
}

export const AssetItemCard: React.FC<AssetItemCardProps> = ({
    item, lang, isMobile, onDragStart, onClick, onMouseEnter, onMouseLeave
}) => {
    const isPremium = item.tier === 'premium';
    const isLocked = item.isLocked;

    const displayTitleRaw = isLocked
        ? (lang === 'en' && item.marketingTitleEn ? item.marketingTitleEn : item.marketingTitle)
        : (lang === 'en' && item.titleEn ? item.titleEn : item.title);
    const title = displayTitleRaw || item.title;

    return (
        <div
            draggable={true}
            onDragStart={onDragStart}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`group border rounded-lg p-2 cursor-grab active:cursor-grabbing transition-all flex flex-col gap-1.5 relative hover:shadow-md touch-none select-none
                ${isPremium
                    ? 'bg-gradient-to-br from-amber-50/80 to-purple-50/80 border-amber-200 hover:border-amber-400'
                    : 'bg-white border-gray-100 hover:border-teal-400'
                }
            `}
        >
            {isPremium && (
                <div className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-amber-400 to-amber-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm z-10 flex items-center gap-0.5">
                    <span>💎</span>
                    <span>Secret</span>
                </div>
            )}

            <div className="relative text-2xl h-12 flex items-center justify-center rounded w-full overflow-hidden">
                {isPremium && item.marketingImage ? (
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url(${item.marketingImage})` }}
                    />
                ) : (
                    <div className={`absolute inset-0 ${isPremium ? 'bg-amber-100/50' : 'bg-gray-50'}`} />
                )}

                <span className="relative z-10 drop-shadow-md filter">{item.image || getFallbackImage(item.type)}</span>

                {isLocked && (
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <Lock size={12} className="text-white drop-shadow-md opacity-60" />
                    </div>
                )}
            </div>

            <div className="flex-1 min-w-0">
                <h4 className={`font-bold text-xs truncate ${isPremium ? 'text-amber-900' : 'text-gray-700'}`} title={title}>
                    {title}
                </h4>
                <div className="flex items-center justify-between mt-0.5">
                    <span className="text-[10px] text-gray-400">{item.duration}</span>
                    {isLocked ? (
                        <span className="text-[10px] font-bold text-amber-600 flex items-center gap-0.5">
                            <Lock size={8} /> Unlock
                        </span>
                    ) : (
                        <span className="text-[10px] font-bold text-teal-600">¥{item.price?.toLocaleString()}</span>
                    )}
                </div>
            </div>
        </div>
    );
};
