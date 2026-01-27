import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { X, MapPin, Clock, Star, Tag, MousePointerClick, Navigation } from 'lucide-react';
import { ScheduleItem, TravelItem } from '../types';
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
}

const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ isOpen, onClose, item, t }) => {
    if (!isOpen || !item) return null;

    const hasCoordinates = item.lat && item.lng;
    const position: [number, number] = hasCoordinates ? [item.lat!, item.lng!] : [35.6762, 139.6503]; // Default Tokyo

    const handleNavigate = () => {
        const query = hasCoordinates ? `${item.lat},${item.lng}` : (item.address || item.title);
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
    };

    return (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white z-10">
                    <div className="flex items-center gap-3">
                        <div className="text-3xl bg-gray-50 w-12 h-12 flex items-center justify-center rounded-xl">
                            {item.image || '📍'}
                        </div>
                        <div>
                            <h2 className="font-bold text-xl text-gray-800 flex items-center gap-2">
                                {item.title || (item as any).titleEn}
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
                            <h3 className="font-bold text-gray-800 mb-2 text-sm uppercase tracking-wide opacity-70">Description</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {item.description || "No description available."}
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailModal;
