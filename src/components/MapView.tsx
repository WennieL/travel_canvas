import React, { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ScheduleItem, TimeSlot } from '../types';
import { List, Map as MapIcon, Navigation, ExternalLink, X } from 'lucide-react';
import { SAMPLE_ASSETS, MELBOURNE_ASSETS } from '../data';

interface MapViewProps {
    schedule: any; // Using any temporarily to avoid strict type issues with DaySchedule vs FullSchedule, will refine
    t: any;
    onItemClick?: (item: ScheduleItem) => void;
    isEmbedded?: boolean; // Scheme B: Split view
    onClose?: () => void; // [NEW] Close handler for Mobile Full Screen
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

// Helper to handle map clicks
const MapEvents: React.FC<{ onMapClick: () => void }> = ({ onMapClick }) => {
    useMapEvents({
        click: () => onMapClick(),
    });
    return null;
};

import MapDetailPanel from './MapDetailPanel';
import { useMapEvents } from 'react-leaflet';
import BottomSheet from './BottomSheet'; // [NEW] Import BottomSheet

const MapView: React.FC<MapViewProps> = ({ schedule, t, onItemClick, isEmbedded = false, onClose }) => {
    const [showList, setShowList] = useState(!isEmbedded); // Default hidden if embedded
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedItem, setSelectedItem] = useState<ScheduleItem | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Collect valid points
    const points = useMemo(() => {
        const slots = ['morning', 'afternoon', 'evening', 'night', 'accommodation'];
        const list: { item: ScheduleItem; slot: string; lat: number; lng: number, index: number }[] = [];

        let globalIndex = 0; // Global sequential numbering (1, 2, 3... n)
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
                        list.push({ item, slot, lat, lng, index: globalIndex }); // Use globalIndex
                        globalIndex++;
                    } else {
                        console.warn('[MapView] Item missing coordinates:', item.title, item.id, 'lat:', item.lat, 'lng:', item.lng);
                        globalIndex++; // Still increment even if no coords, to keep count accurate
                    }
                });
            }
        });
        return list;
    }, [schedule]);

    const getSlotColor = (slot: string) => {
        switch (slot) {
            case 'morning': return 'bg-orange-500 border-orange-600'; // Match DropZone.morning
            case 'afternoon': return 'bg-blue-500 border-blue-600'; // Match DropZone.afternoon
            case 'evening': return 'bg-purple-500 border-purple-600'; // Match DropZone.evening
            case 'night': return 'bg-indigo-900 border-indigo-950'; // Match DropZone.night (dark indigo)
            case 'accommodation': return 'bg-indigo-600 border-indigo-700'; // Match DropZone.accommodation
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

            {/* Sidebar List (Desktop Only, Hidden in Embedded) */}
            {!isMobile && !isEmbedded && showList && points.length > 0 && (
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
                                    } ${selectedItem?.instanceId === p.item.instanceId ? 'bg-teal-50 border-teal-500' : ''}`}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => setSelectedItem(p.item)}
                            >
                                <div className={`w-5 h-5 mt-0.5 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 shadow-sm ${getSlotColor(p.slot).split(' ')[0]}`}>
                                    {p.index + 1}
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

                    {/* Click Outside Handler */}
                    <MapEvents onMapClick={() => setSelectedItem(null)} />

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
                            icon={createIcon(p.item.image || '', p.slot, p.index, hoveredIndex === idx)}
                            eventHandlers={{
                                mouseover: () => setHoveredIndex(idx),
                                mouseout: () => setHoveredIndex(null),
                                click: (e) => {
                                    L.DomEvent.stopPropagation(e as any); // Stop click from hitting map background
                                    if (isEmbedded) {
                                        onItemClick?.(p.item); // Scroll to item
                                    } else {
                                        setSelectedItem(p.item); // Open internal detail
                                    }
                                }
                            }}
                        >
                            {!isEmbedded && (
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
                            )}
                        </Marker>
                    ))}
                </MapContainer>

                {/* Overlays */}
                {/* Overlays (Hidden in Embedded) */}
                {!isEmbedded && (
                    <button
                        onClick={() => setShowList(!showList)}
                        className={`absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-medium shadow-md z-[500] flex items-center gap-2 transition-colors hover:bg-white ${showList ? 'text-teal-600' : 'text-gray-500'}`}
                    >
                        <List size={14} />
                        {showList ? '隱藏列表' : '顯示列表'}
                    </button>
                )}

                {/* Mobile Close Button (FAB) */}
                {isMobile && onClose && (
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg z-[1100] flex items-center justify-center text-gray-700 hover:text-red-500 active:scale-95 transition-all"
                    >
                        <X size={20} />
                    </button>
                )}

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

                {/* Desktop Detail Panel (Hidden in Embedded/Mobile) */}
                {!isMobile && !isEmbedded && (
                    <div
                        className={`absolute top-4 bottom-4 right-4 w-96 bg-white shadow-2xl rounded-2xl z-[1000] overflow-hidden transition-transform duration-300 transform ${selectedItem ? 'translate-x-0' : 'translate-x-[110%]'}`}
                    >
                        <MapDetailPanel
                            item={selectedItem}
                            onClose={() => setSelectedItem(null)}
                            t={t}
                            lang="zh" // Should pass lang prop, assuming zh for now or need to lift from props
                        />
                    </div>
                )}

                {/* Mobile Bottom Sheet */}
                {isMobile && !isEmbedded && (
                    <BottomSheet
                        isOpen={true} // Always "open" but manages its own snap state
                        snapPoints={[0.15, 0.5, 0.9]}
                        initialSnap={selectedItem ? 1 : 0} // Expand slightly if item selected
                        header={
                            <div className="text-center">
                                {selectedItem ? (
                                    <h3 className="text-sm font-bold text-gray-800">{selectedItem.title}</h3>
                                ) : (
                                    <div className="text-xs font-medium text-gray-500 flex items-center gap-1">
                                        <List size={12} /> {points.length} 個地點
                                    </div>
                                )}
                            </div>
                        }
                    >
                        {selectedItem ? (
                            <div className="pb-20">
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="mb-4 text-xs text-gray-500 flex items-center gap-1 hover:text-gray-800"
                                >
                                    ← 返回列表
                                </button>
                                <MapDetailPanel
                                    item={selectedItem}
                                    onClose={() => setSelectedItem(null)}
                                    t={t}
                                    lang="zh"
                                />
                            </div>
                        ) : (
                            <div className="space-y-2 pb-20">
                                {points.map((p, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3 active:scale-95 transition-transform"
                                        onClick={() => setSelectedItem(p.item)}
                                    >
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm ${getSlotColor(p.slot).split(' ')[0]}`}>
                                            {p.index + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-gray-800">{p.item.title}</h4>
                                            <div className="text-xs text-gray-500 line-clamp-1">{p.item.address || p.item.startTime || 'No details'}</div>
                                        </div>
                                        <div className="ml-auto">
                                            {/* Action button if needed */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </BottomSheet>
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
        </div >
    );
};

export default MapView;
