import React, { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ScheduleItem, TimeSlot } from '../types';
import { List, Map as MapIcon, Navigation, ExternalLink } from 'lucide-react';
import { SAMPLE_ASSETS, MELBOURNE_ASSETS } from '../data';

interface MapViewProps {
    schedule: any; // Using any temporarily to avoid strict type issues with DaySchedule vs FullSchedule, will refine
    t: any;
    onItemClick?: (item: ScheduleItem) => void;
}

// Helper to center map on points
const MapUpdater: React.FC<{ points: { lat: number; lng: number }[] }> = ({ points }) => {
    const map = useMap();

    useEffect(() => {
        if (points.length > 0) {
            const validPoints = points.filter(p => !isNaN(p.lat) && !isNaN(p.lng)).map(p => [p.lat, p.lng] as [number, number]);
            if (validPoints.length > 0) {
                const bounds = L.latLngBounds(validPoints);
                map.fitBounds(bounds, { padding: [50, 50], maxZoom: 16 });
            }
        }
    }, [points, map]);

    return null;
};

const MapView: React.FC<MapViewProps> = ({ schedule, t, onItemClick }) => {
    const [showList, setShowList] = useState(true);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Collect valid points
    const points = useMemo(() => {
        const slots = ['morning', 'afternoon', 'evening', 'night', 'accommodation'];
        const list: { item: ScheduleItem; slot: string; lat: number; lng: number, index: number }[] = [];

        let globalIndex = 0;
        slots.forEach(slot => {
            if (schedule[slot]) {
                schedule[slot].forEach((item: ScheduleItem) => {
                    // Try to find coordinates if missing
                    let lat = item.lat;
                    let lng = item.lng;

                    if (!lat || !lng) {
                        // Lookup in known assets
                        const allAssets = [...SAMPLE_ASSETS, ...MELBOURNE_ASSETS];
                        const found = allAssets.find(asset => asset.title === item.title || asset.id === item.id);
                        if (found && found.lat && found.lng) {
                            lat = found.lat;
                            lng = found.lng;
                        }
                    }

                    if (lat && lng) {
                        list.push({ item, slot, lat, lng, index: globalIndex });
                    }
                    globalIndex++;
                });
            }
        });
        return list;
    }, [schedule]);

    const getSlotColor = (slot: string) => {
        switch (slot) {
            case 'morning': return 'bg-amber-500 border-amber-600';
            case 'afternoon': return 'bg-teal-500 border-teal-600';
            case 'evening': return 'bg-purple-500 border-purple-600';
            case 'night': return 'bg-indigo-600 border-indigo-700';
            case 'accommodation': return 'bg-rose-500 border-rose-600';
            default: return 'bg-gray-500 border-gray-600';
        }
    };

    const createIcon = (emoji: string, slot: string, index: number, isHovered: boolean) => {
        const colorClass = getSlotColor(slot);
        // We inject CSS directly for simplistic marker styling in DivIcon
        const html = `
            <div class="relative flex flex-col items-center justify-center transition-transform ${isHovered ? 'z-50 scale-125' : ''}">
                <div class="${colorClass} w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-lg bg-opacity-90 backdrop-blur-sm">
                    ${emoji || '📍'}
                </div>
                <div class="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center text-[10px] font-bold border border-gray-200 shadow-sm">
                    ${index + 1}
                </div>
            </div>
        `;
        return L.divIcon({
            html,
            className: 'bg-transparent',
            iconSize: [32, 32],
            iconAnchor: [16, 16],
            popupAnchor: [0, -20]
        });
    };

    return (
        <div className="bg-gray-100 rounded-3xl h-full min-h-[500px] relative overflow-hidden border border-gray-200 shadow-inner flex">

            {/* Sidebar List */}
            {showList && points.length > 0 && (
                <div className="w-56 bg-white border-r border-gray-200 flex flex-col z-[400] overflow-hidden shrink-0 shadow-lg">
                    <div className="p-3 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                            <List size={14} /> 行程景點
                        </span>
                        <span className="text-[10px] text-gray-400">{points.length} 個地點</span>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {points.map((p, idx) => (
                            <div
                                key={idx}
                                className={`px-3 py-2 flex items-start gap-3 cursor-pointer transition-colors border-l-4 ${hoveredIndex === idx ? 'bg-teal-50 border-teal-500' : 'border-transparent hover:bg-gray-50'
                                    }`}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => onItemClick?.(p.item)}
                            >
                                <div className={`w-5 h-5 mt-0.5 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 shadow-sm ${getSlotColor(p.slot).split(' ')[0]}`}>
                                    {idx + 1}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h4 className="text-xs font-bold text-gray-800 truncate leading-tight mb-0.5">{p.item.title}</h4>
                                    <div className="flex items-center gap-1 text-[10px] text-gray-500">
                                        <span className="truncate">{p.item.address || '無地址'}</span>
                                    </div>
                                    {p.item.startTime && (
                                        <div className="mt-1 inline-block px-1.5 py-0.5 bg-gray-100 rounded text-[10px] font-medium text-gray-600">
                                            {p.item.startTime}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Map Area */}
            <div className="flex-1 relative z-0">
                <MapContainer
                    center={[35.6762, 139.6503]}
                    zoom={13}
                    style={{ height: '100%', width: '100%' }}
                    zoomControl={false} // We can add custom control or just use scroll
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* Auto Center */}
                    <MapUpdater points={points} />

                    {/* Route Line Service */}
                    {points.length > 1 && (
                        <Polyline
                            positions={points.map(p => [p.lat, p.lng])}
                            pathOptions={{ color: '#0d9488', weight: 4, opacity: 0.6, dashArray: '10, 10' }}
                        />
                    )}

                    {/* Markers */}
                    {points.map((p, idx) => (
                        <Marker
                            key={idx}
                            position={[p.lat, p.lng]}
                            icon={createIcon(p.item.image || '', p.slot, idx, hoveredIndex === idx)}
                            eventHandlers={{
                                mouseover: () => setHoveredIndex(idx),
                                mouseout: () => setHoveredIndex(null),
                                click: () => onItemClick?.(p.item)
                            }}
                        >
                            <Popup className="custom-popup" offset={[0, -10]}>
                                <div className="p-1 min-w-[150px]">
                                    <div className="font-bold text-sm mb-1 flex items-center gap-1">
                                        {p.item.image} {p.item.title}
                                    </div>
                                    <div className="text-xs text-gray-500 mb-2">{p.item.description}</div>
                                    {p.item.tips && (
                                        <div className="text-[10px] bg-yellow-50 text-yellow-700 p-1.5 rounded border border-yellow-100 flex gap-1">
                                            <span>💡</span> {p.item.tips}
                                        </div>
                                    )}
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>

                {/* Overlays */}
                <button
                    onClick={() => setShowList(!showList)}
                    className={`absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-medium shadow-md z-[500] flex items-center gap-2 transition-colors hover:bg-white ${showList ? 'text-teal-600' : 'text-gray-500'}`}
                >
                    <List size={14} />
                    {showList ? '隱藏列表' : '顯示列表'}
                </button>

                {points.length === 0 && (
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-[500] flex items-center justify-center">
                        <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-sm mx-4">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapIcon size={32} className="text-gray-400" />
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">地圖上沒有行程點</h3>
                            <p className="text-sm text-gray-500">請從左側側邊欄拖曳景點到行程中，地圖將會自動顯示位置。</p>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                .leaflet-popup-content-wrapper {
                    @apply rounded-xl shadow-xl border border-gray-100 p-0 overflow-hidden;
                }
                .leaflet-popup-content {
                    @apply m-0;
                }
            `}</style>
        </div>
    );
};

export default MapView;
