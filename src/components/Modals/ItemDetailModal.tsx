import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { X, MapPin, Clock, Star, Tag, MousePointerClick, Navigation } from 'lucide-react';
import { ScheduleItem, TravelItem } from '../../types';
import L from 'leaflet';

// Fix leaflet icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface ItemDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: ScheduleItem | TravelItem | null;
    t: any;
    lang?: 'zh' | 'en';
}

const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ isOpen, onClose, item, t, lang = 'zh' }) => {
    if (!isOpen || !item) return null;

    const hasCoordinates = item.lat && item.lng;
    const position: [number, number] = hasCoordinates ? [item.lat!, item.lng!] : [35.6762, 139.6503]; // Default Tokyo

    const handleNavigate = () => {
        const query = hasCoordinates ? `${item.lat},${item.lng}` : (item.address || item.title);
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
    };

    return (
        <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white z-10">
                    <div className="flex items-center gap-3">
                        <div className="text-3xl bg-gray-50 w-12 h-12 flex items-center justify-center rounded-xl">
                            {item.image || '📍'}
                        </div>
                        <div>
                            <h2 className="font-bold text-xl text-gray-800 flex items-center gap-2">
                                {lang === 'en' && (item as any).titleEn ? (item as any).titleEn : item.title}
                            </h2>
                            <p className="text-sm text-gray-400 capitalize flex items-center gap-1">
                                {item.type} {item.region && `• ${item.region}`}
                            </p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Body - Scrollable */}
                <div className="overflow-y-auto p-0 scrollbar-hide flex-1">
                    {/* Map Section */}
                    <div className="h-64 w-full bg-gray-100 relative">
                        {hasCoordinates ? (
                            <MapContainer
                                center={position}
                                zoom={15}
                                style={{ height: '100%', width: '100%' }}
                                scrollWheelZoom={false} // Prevent scrolling map when scrolling modal
                            >
                                <TileLayer
                                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                                />
                                <Marker position={position}>
                                    <Popup>{item.title}</Popup>
                                </Marker>
                            </MapContainer>
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-2">
                                <MapPin size={40} className="opacity-20" />
                                <p>No exact coordinates available</p>
                            </div>
                        )}

                        {/* Navigate FAB */}
                        <button
                            onClick={handleNavigate}
                            className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 font-medium transition-transform hover:scale-105 z-[1000]"
                        >
                            <Navigation size={16} />
                            {t.openMap || "Google Maps"}
                        </button>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-6">
                        {/* Description */}
                        <div>
                            <h3 className="font-bold text-gray-800 mb-2 text-sm uppercase tracking-wide opacity-70">
                                {lang === 'zh' ? '描述' : 'Description'}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {lang === 'en' && (item as any).descriptionEn ? (item as any).descriptionEn : (item.description || (lang === 'zh' ? '暫無描述' : 'No description available.'))}
                            </p>
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {item.price !== undefined && (
                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                    <div className="text-xs text-gray-400 mb-1">Price</div>
                                    <div className="font-bold text-gray-800">¥{item.price.toLocaleString()}</div>
                                </div>
                            )}
                            {item.duration && (
                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                    <div className="text-xs text-gray-400 mb-1 flex items-center gap-1"><Clock size={10} /> Duration</div>
                                    <div className="font-bold text-gray-800">{item.duration}</div>
                                </div>
                            )}
                            {item.rating && (
                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                    <div className="text-xs text-gray-400 mb-1 flex items-center gap-1"><Star size={10} /> Rating</div>
                                    <div className="font-bold text-gray-800 flex items-center gap-1">
                                        {item.rating} <Star size={12} className="text-yellow-400 fill-yellow-400" />
                                    </div>
                                </div>
                            )}
                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                <div className="text-xs text-gray-400 mb-1">Items</div>
                                <div className="font-bold text-gray-800">{(item as any).tags?.length || 0} Tags</div>
                            </div>
                        </div>

                        {/* Details List */}
                        <div className="space-y-3 pt-2">
                            {item.address && (
                                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                                    <div>
                                        <div className="font-medium text-gray-900">Address</div>
                                        <div className="text-gray-500 text-sm">{item.address}</div>
                                    </div>
                                </div>
                            )}
                            {item.tips && (
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50/50 border border-yellow-100">
                                    <div className="text-xl">💡</div>
                                    <div>
                                        <div className="font-bold text-yellow-800 text-sm">Pro Tip</div>
                                        <div className="text-yellow-700 text-sm">{item.tips}</div>
                                    </div>
                                </div>
                            )}

                            {/* Insider Tip Section - Premium Content */}
                            {item.insiderTip && (
                                <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Star size={16} className="text-amber-500" fill="currentColor" />
                                        <span className="font-bold text-amber-800 tracking-wide">INSIDER TIP</span>
                                    </div>

                                    {/* Teaser / Summary */}
                                    <p className="text-amber-900 leading-relaxed mb-4">
                                        {lang === 'en' && item.insiderTip.teaserEn ? item.insiderTip.teaserEn : (item.insiderTip.teaser || item.insiderTip.text)}
                                    </p>

                                    {/* Full Details (if available) */}
                                    {item.insiderTip.full && (
                                        <div className="space-y-3 pt-3 border-t border-amber-200">
                                            {/* Story */}
                                            {(item.insiderTip.full.story || item.insiderTip.full.storyEn) && (
                                                <div className="text-amber-800 text-sm leading-relaxed italic">
                                                    "{lang === 'en' && item.insiderTip.full.storyEn ? item.insiderTip.full.storyEn : item.insiderTip.full.story}"
                                                </div>
                                            )}

                                            {/* Details Grid */}
                                            <div className="grid gap-2 text-sm">
                                                {(item.insiderTip.full.exactLocation || item.insiderTip.full.exactLocationEn) && (
                                                    <div className="flex items-start gap-2">
                                                        <span className="text-base">📍</span>
                                                        <div>
                                                            <div className="font-medium text-amber-900">{lang === 'zh' ? '精確位置' : 'Exact Location'}</div>
                                                            <div className="text-amber-700">{lang === 'en' && item.insiderTip.full.exactLocationEn ? item.insiderTip.full.exactLocationEn : item.insiderTip.full.exactLocation}</div>
                                                        </div>
                                                    </div>
                                                )}
                                                {(item.insiderTip.full.mustTry || item.insiderTip.full.mustTryEn) && (
                                                    <div className="flex items-start gap-2">
                                                        <span className="text-base">🎯</span>
                                                        <div>
                                                            <div className="font-medium text-amber-900">{lang === 'zh' ? '必點推薦' : 'Must Try'}</div>
                                                            <div className="text-amber-700">{lang === 'en' && item.insiderTip.full.mustTryEn ? item.insiderTip.full.mustTryEn : item.insiderTip.full.mustTry}</div>
                                                        </div>
                                                    </div>
                                                )}
                                                {item.insiderTip.full.bestTime && (
                                                    <div className="flex items-start gap-2">
                                                        <span className="text-base">⏰</span>
                                                        <div>
                                                            <div className="font-medium text-amber-900">{lang === 'zh' ? '最佳時段' : 'Best Time'}</div>
                                                            <div className="text-amber-700">{item.insiderTip.full.bestTime}</div>
                                                        </div>
                                                    </div>
                                                )}
                                                {(item.insiderTip.full.avoid || item.insiderTip.full.avoidEn) && (
                                                    <div className="flex items-start gap-2">
                                                        <span className="text-base">⚠️</span>
                                                        <div>
                                                            <div className="font-medium text-red-700">{lang === 'zh' ? '避坑提醒' : 'Avoid'}</div>
                                                            <div className="text-red-600">{lang === 'en' && item.insiderTip.full.avoidEn ? item.insiderTip.full.avoidEn : item.insiderTip.full.avoid}</div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailModal;
