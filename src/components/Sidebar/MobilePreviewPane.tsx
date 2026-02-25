import React from 'react';
import { TravelItem, LangType } from '../../types';
import { getFallbackImage } from '../../utils';

interface MobilePreviewPaneProps {
    item: TravelItem | null;
    onClose: () => void;
    onTapToAdd: (item: TravelItem) => void;
    lang: LangType;
    t: any;
}

export const MobilePreviewPane: React.FC<MobilePreviewPaneProps> = ({
    item,
    onClose,
    onTapToAdd,
    lang,
    t
}) => {
    if (!item) return null;

    return (
        <div className="lg:hidden fixed inset-0 z-[100]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Bottom Sheet */}
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl max-h-[70vh] overflow-y-auto animate-slide-up">
                {/* Handle */}
                <div className="sticky top-0 bg-white py-2 flex justify-center">
                    <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="px-5 pb-24">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="text-4xl bg-gray-50 w-16 h-16 flex items-center justify-center rounded-xl">
                            {item.image || getFallbackImage(item.type)}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-800 text-lg">
                                {(lang === 'en' && item.titleEn) ? item.titleEn : item.title}
                            </h3>
                        </div>
                    </div>

                    {/* Description */}
                    {item.description && (
                        <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                            {(lang === 'en' && item.descriptionEn) ? item.descriptionEn : item.description}
                        </p>
                    )}

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        {item.openingHours && (
                            <div className="bg-orange-50 p-3 rounded-lg">
                                <div className="text-orange-400 text-xs font-bold mb-1">{t.openingHours || '⏰ 營業時間'}</div>
                                <div className="text-orange-700 text-sm">{item.openingHours}</div>
                            </div>
                        )}
                        <div className="bg-blue-50 p-3 rounded-lg">
                            <div className="text-blue-400 text-xs font-bold mb-1">{t.recommendedStay || '⏱️ 建議停留'}</div>
                            <div className="text-blue-700 text-sm">{item.duration || '-'}</div>
                        </div>
                    </div>

                    {/* Address */}
                    {item.address && (
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                            <span>📍</span>
                            <span>{item.address}</span>
                        </div>
                    )}

                    {/* Tips */}
                    {item.tips && (
                        <div className="bg-purple-50 border-l-3 border-purple-400 p-3 rounded-r-lg mb-3">
                            <div className="text-purple-600 text-xs font-bold mb-1">{t.insiderTips || '💡 小撇步'}</div>
                            <div className="text-purple-700 text-sm">{item.tips}</div>
                        </div>
                    )}

                    {/* Fun Fact */}
                    {item.funFact && (
                        <div className="bg-yellow-50 border-l-3 border-yellow-400 p-3 rounded-r-lg mb-4">
                            <div className="text-yellow-600 text-xs font-bold mb-1">{t.funFactsBadge || '✨ 冷知識'}</div>
                            <div className="text-yellow-700 text-sm">{item.funFact}</div>
                        </div>
                    )}

                    {/* Action Button */}
                    <button
                        onClick={() => {
                            onTapToAdd(item);
                            onClose();
                        }}
                        className="w-full py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all"
                    >
                        {t.addToItinerary || (lang === 'zh' ? '加入行程' : 'Add to Itinerary')}
                    </button>
                </div>
            </div>
        </div>
    );
};
