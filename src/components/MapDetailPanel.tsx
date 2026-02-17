import React from 'react';
import { X, MapPin, Clock, Star, ExternalLink, Navigation } from 'lucide-react';
import { TravelItem, ScheduleItem } from '../types';
import { getCategoryLabel } from '../utils';

interface MapDetailPanelProps {
    item: TravelItem | ScheduleItem | null;
    onClose: () => void;
    t: any;
    lang: string;
}

const MapDetailPanel: React.FC<MapDetailPanelProps> = ({ item, onClose, t, lang }) => {
    // If no item is selected, render nothing (or handle animation state externally)
    // Here we handle the panel content. The parent should handle the presence/animation
    if (!item) return null;

    const isScheduleItem = (item as ScheduleItem).instanceId !== undefined;

    // Helper to get localized string
    const getLocal = (en?: string, zh?: string) => lang === 'en' && en ? en : zh;

    // Resolve display properties
    const title = getLocal((item as any).titleEn, item.title);
    const description = getLocal((item as any).descriptionEn, item.description);
    const address = getLocal((item as any).addressEn, item.address);
    const openingHours = (item as any).openingHours;
    const price = item.price;
    const rating = (item as any).rating;

    // Insider Tips
    const insiderTipData = (item as any).insiderTip;
    const insiderTipEnData = (item as any).insiderTipEn;

    // Extract text content from InsiderTip object or string
    const getTipText = (tip: any) => {
        if (!tip) return null;
        if (typeof tip === 'string') return tip;
        return tip.text || tip.teaser || (tip.full ? tip.full.story : null);
    };

    const insiderTip = getLocal(getTipText(insiderTipEnData), getTipText(insiderTipData));

    // Extract other fields if available in the object
    const getExtraField = (field: string, enField: string) => {
        const obj = insiderTipData;
        const objEn = insiderTipEnData;

        const val = obj && typeof obj === 'object' && obj.full ? obj.full[field] : (item as any)[field];
        const valEn = objEn && typeof objEn === 'object' && objEn.full ? objEn.full[enField || field] : (item as any)[enField || field];

        return getLocal(valEn, val);
    };

    const mustTry = getExtraField('mustTry', 'mustTryEn');
    const avoid = getExtraField('avoid', 'avoidEn');
    const exactLocation = getExtraField('exactLocation', 'exactLocationEn');

    // Image fallback
    const imageSrc = item.image; // Assuming item.image is a valid URL or emoji. If emoji, we might need a fallback cover.
    const isEmoji = imageSrc && (imageSrc.startsWith('http') === false && imageSrc.length < 5); // Rough check

    return (
        <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto custom-scrollbar relative">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-sm"
            >
                <X size={20} />
            </button>

            {/* Cover Image */}
            <div className="h-48 w-full bg-gray-100 relative shrink-0">
                {imageSrc && !isEmoji ? (
                    <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-teal-50 text-6xl">
                        {isEmoji ? imageSrc : '🗺️'}
                    </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-12">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-500 text-white uppercase tracking-wider">
                            {getCategoryLabel(item.type, t)}
                        </span>
                        {item.region && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-white uppercase tracking-wider">
                                {item.region}
                            </span>
                        )}
                    </div>
                    <h2 className="text-xl font-bold text-white leading-tight shadow-sm">{title}</h2>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-5 space-y-6">

                {/* Actions */}
                <div className="flex gap-2">
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(title + " " + (address || ""))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm shadow-sm"
                    >
                        <Navigation size={16} />
                        {t.openGoogleMaps || "Open Maps"}
                    </a>
                    {/* Add to Plan Button (Placeholder - logic depends on context) */}
                    {/* <button className="flex-1 ...">Add to Plan</button> */}
                </div>

                {/* Description */}
                {description && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {description}
                    </p>
                )}

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 gap-3">
                    {price !== undefined && (
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                            <div className="text-xs text-gray-400 mb-1">{t.price || "Price"}</div>
                            <div className="font-semibold text-gray-800">
                                {price === 0 ? (t.freeLabel || 'Free') : `¥${price.toLocaleString()}`}
                            </div>
                        </div>
                    )}
                    <div className="bg-amber-50 p-2 rounded-lg border border-amber-100 flex-1">
                        <div className="text-xs text-gray-400 mb-1">{t.rating || "Rating"}</div>
                        <div className="font-bold text-amber-600 flex items-center gap-1">
                            {rating || '4.5'} <Star size={12} className="fill-amber-400 text-amber-400" />
                        </div>
                    </div>
                    {item.duration && (
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                            <div className="text-xs text-gray-400 mb-1">{t.duration || "Duration"}</div>
                            <div className="font-semibold text-gray-800 flex items-center gap-1">
                                <Clock size={14} className="text-gray-400" /> {item.duration}
                            </div>
                        </div>
                    )}
                </div>

                {/* Address */}
                {address && (
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <MapPin className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                        <div>
                            <div className="text-xs text-gray-400 mb-1">{t.address || "Address"}</div>
                            <div className="text-sm text-gray-700 break-words">{address}</div>
                            {exactLocation && (
                                <div className="mt-1 text-xs text-blue-600 font-medium">
                                    💡 {exactLocation}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Insider Section */}
                {(insiderTip || mustTry || avoid) && (
                    <div className="rounded-xl border-l-4 border-amber-400 bg-amber-50 p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-3 text-amber-700 font-bold text-sm uppercase tracking-wider">
                            <Star className="w-4 h-4 fill-amber-700" />
                            {t.insiderTip || "Insider Tip"}
                        </div>
                        <div className="space-y-3 text-sm">
                            {insiderTip && (
                                <p className="text-gray-800 leading-relaxed">
                                    {insiderTip}
                                </p>
                            )}
                            {mustTry && (
                                <div className="flex gap-2">
                                    <span className="text-green-600 font-bold shrink-0">👍 {t.mustTry || "Must Try"}:</span>
                                    <span className="text-gray-700">{mustTry}</span>
                                </div>
                            )}
                            {avoid && (
                                <div className="flex gap-2">
                                    <span className="text-red-500 font-bold shrink-0">⚠️ {t.avoidLabel || "Avoid"}:</span>
                                    <span className="text-gray-700">{avoid}</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Bottom Padding for visual breathing room */}
                <div className="h-12"></div>
            </div>
        </div>
    );
};

export default MapDetailPanel;
