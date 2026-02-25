import React from 'react';
import { createPortal } from 'react-dom';
import { TravelItem, LangType } from '../../types';
import { getFallbackImage } from '../../utils';

interface DesktopTooltipProps {
    hoveredItem: TravelItem | null;
    tooltipPos: { x: number; y: number };
    lang: LangType;
}

export const DesktopTooltip: React.FC<DesktopTooltipProps> = ({
    hoveredItem,
    tooltipPos,
    lang
}) => {
    if (!hoveredItem || typeof document === 'undefined') return null;

    return createPortal(
        <div
            className="fixed z-[9999] w-52 bg-teal-50 rounded-lg shadow-2xl border border-teal-200 p-3 pointer-events-none"
            style={{
                left: Math.max(120, tooltipPos.x), // Minimum 120px from left edge
                top: tooltipPos.y,
                transform: 'translate(-50%, -100%)'
            }}
        >
            {/* Arrow pointing down */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-teal-50"></div>

            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{hoveredItem.image || getFallbackImage(hoveredItem.type)}</span>
                <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-gray-800 text-sm leading-tight truncate">
                        {(lang === 'en' && hoveredItem.isLocked && hoveredItem.marketingTitleEn
                            ? hoveredItem.marketingTitleEn
                            : lang === 'en' && hoveredItem.titleEn
                                ? hoveredItem.titleEn
                                : hoveredItem.isLocked && hoveredItem.marketingTitle
                                    ? hoveredItem.marketingTitle
                                    : hoveredItem.title)}
                    </h5>
                </div>
            </div>

            {/* Key Info */}
            <div className="text-xs space-y-1">
                {hoveredItem.openingHours && (
                    <div className="flex items-center gap-1.5 text-gray-500">
                        <span>⏰</span>
                        <span>{hoveredItem.openingHours}</span>
                    </div>
                )}
                {hoveredItem.address && (
                    <div className="flex items-center gap-1.5 text-gray-400">
                        <span>📍</span>
                        {hoveredItem.isLocked ? (
                            <span className="italic opacity-60">Unlock to view address</span>
                        ) : (
                            <span className="truncate">{hoveredItem.address}</span>
                        )}
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
};
