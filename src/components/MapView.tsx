import React, { useEffect, useMemo, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ScheduleItem, TimeSlot, LangType } from '../types';
import { List, Map as MapIcon, Navigation, ExternalLink, X, Maximize2, Minimize2 } from 'lucide-react';
import { SAMPLE_ASSETS, MELBOURNE_ASSETS } from '../data';
import { useMapEvents } from 'react-leaflet';

interface MapViewProps {
    schedule: any; // Using any temporarily to avoid strict type issues with DaySchedule vs FullSchedule, will refine
    lang: LangType;
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

// Helper to manage map camera and selection effects
const MapController: React.FC<{ selectedItem: ScheduleItem | null }> = ({ selectedItem }) => {
    const map = useMap();
    const lastSelectedId = useRef<string | null>(null);

    useEffect(() => {
        if (selectedItem && selectedItem.lat && selectedItem.lng) {
            // Only fly if it's a new selection to avoid loop or jitter
            if (selectedItem.instanceId !== lastSelectedId.current) {
                lastSelectedId.current = selectedItem.instanceId || null;
                map.flyTo([selectedItem.lat, selectedItem.lng], 16, {
                    duration: 1.5,
                    easeLinearity: 0.25
                });
            }
        } else if (!selectedItem) {
            lastSelectedId.current = null;
        }
    }, [selectedItem, map]);

    return null;
};

const MapView: React.FC<MapViewProps> = ({ schedule, lang, t, onItemClick, isEmbedded = false, onClose }) => {
    const [showList, setShowList] = useState(!isEmbedded); // Default hidden if embedded
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedItem, setSelectedItem] = useState<ScheduleItem | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isLandscape, setIsLandscape] = useState(false);

    const listRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

    useEffect(() => {
        const checkDevice = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setIsMobile(width < 1024);
            setIsLandscape(width > height && width < 1024);
        };
        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    // Collect valid points
    const points = useMemo(() => {
        const slots = ['morning', 'afternoon', 'evening', 'night', 'accommodation'];
        const list: { item: ScheduleItem; slot: string; lat: number; lng: number, index: number }[] = [];

        let globalIndex = 0; // Global sequential numbering (1, 2, 3... n)
        slots.forEach(slot => {
            if (schedule[slot]) {
                schedule[slot].forEach((item: ScheduleItem) => {
                    let lat = item.lat;
                    let lng = item.lng;

                    if (!lat || !lng) {
                        const allAssets = [...SAMPLE_ASSETS, ...MELBOURNE_ASSETS];
                        const found = allAssets.find(asset => asset.title === item.title || asset.id === item.id || asset.titleEn === item.title);
                        if (found && found.lat && found.lng) {
                            lat = found.lat;
                            lng = found.lng;
                        }
                    }

                    if (lat && lng) {
                        list.push({ item, slot, lat, lng, index: globalIndex });
                        globalIndex++;
                    } else {
                        globalIndex++;
                    }
                });
            }
        });
        return list;
    }, [schedule]);

    const getSlotColor = (slot: string) => {
        switch (slot) {
            case 'morning': return 'bg-orange-500 border-orange-600';
            case 'afternoon': return 'bg-blue-500 border-blue-600';
            case 'evening': return 'bg-purple-500 border-purple-600';
            case 'night': return 'bg-indigo-900 border-indigo-950';
            case 'accommodation': return 'bg-indigo-600 border-indigo-700';
            default: return 'bg-gray-500 border-gray-600';
        }
    };

    const createIcon = (item: ScheduleItem, slot: string, index: number, isHovered: boolean, isSelected: boolean) => {
        const colorClass = getSlotColor(slot);
        const isActive = isHovered || isSelected;
        const displayTitle = lang === 'en' ? (item.titleEn || item.title) : item.title;

        const html = `
            <div class="relative flex flex-col items-center justify-center transition-all duration-300 ${isActive ? 'z-[1000] scale-125' : 'z-10'}">
                <!-- Tooltip Bubble -->
                <div class="absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/90 backdrop-blur-sm text-white text-[10px] font-bold rounded-lg shadow-xl whitespace-nowrap pointer-events-none transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}">
                    ${displayTitle}
                    <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45"></div>
                </div>
                
                <!-- Pulse Effect -->
                ${isSelected ? `
                    <div class="absolute w-12 h-12 bg-teal-400/30 rounded-full animate-ping"></div>
                    <div class="absolute w-10 h-10 border-2 border-teal-500/50 rounded-full animate-pulse"></div>
                ` : ''}

                <div class="${colorClass} w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-lg bg-opacity-90 backdrop-blur-sm relative">
                    ${item.image || '📍'}
                    ${isSelected ? '<div class="absolute -inset-1 rounded-full border-2 border-yellow-400"></div>' : ''}
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

    const handleItemSelection = (item: ScheduleItem, idx?: number) => {
        setSelectedItem(item);
        if (idx !== undefined) setHoveredIndex(idx);

        // Sync scroll to list
        const element = itemRefs.current[item.instanceId || ''];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        if (isEmbedded) {
            onItemClick?.(item);
        }
    };

    return (
        <div className={`bg-gray-100 rounded-3xl relative overflow-hidden border border-gray-200 shadow-inner flex ${isMobile && !isFullScreen ? (isLandscape ? 'flex-row h-[85svh]' : 'flex-col-reverse h-[85svh]') : 'flex-row h-full min-h-[500px]'}`}>

            {/* Sidebar List (Desktop or Mobile Split-View) */}
            {((!isMobile && !isEmbedded && showList) || (isMobile && !isFullScreen && !isEmbedded)) && points.length > 0 && (
                <div className={`${isMobile ? (isLandscape ? 'w-1/2 h-full' : 'w-full flex-1') : 'w-56'} bg-white border-r border-gray-200 flex flex-col z-[400] overflow-hidden shrink-0 shadow-lg`}>
                    <div className="p-3 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                            <List size={14} /> {t.schedule}{t.attraction}
                        </span>
                        <span className="text-[10px] text-gray-400">{points.length} {lang === 'en' ? 'Spots' : '個地點'}</span>
                    </div>
                    <div className="flex-1 overflow-y-auto no-scrollbar" ref={listRef}>
                        <div className={`${isMobile ? 'p-2 space-y-2' : ''}`}>
                            {points.map((p, idx) => (
                                <div
                                    key={idx}
                                    ref={(el) => { itemRefs.current[p.item.instanceId || ''] = el; }}
                                    className={`${isMobile ? 'bg-white p-3 rounded-xl shadow-sm border-2 flex items-start gap-3 active:scale-95 transition-all' : `px-3 py-2 flex items-start gap-3 cursor-pointer transition-colors border-l-4 ${hoveredIndex === idx ? 'bg-teal-50 border-teal-500' : 'border-transparent hover:bg-gray-50'} ${selectedItem?.instanceId === p.item.instanceId ? 'bg-teal-50 border-teal-500' : ''}`}`}
                                    style={isMobile && selectedItem?.instanceId === p.item.instanceId ? { borderColor: '#14b8a6' } : { borderColor: '#f3f4f6' }}
                                    onMouseEnter={() => !isMobile && setHoveredIndex(idx)}
                                    onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                                    onClick={() => handleItemSelection(p.item, idx)}
                                >
                                    <div className={`${isMobile ? 'w-6 h-6' : 'w-5 h-5 mt-0.5'} rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 shadow-sm ${getSlotColor(p.slot).split(' ')[0]}`}>
                                        {p.index + 1}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className={`${isMobile ? 'text-sm' : 'text-xs'} font-bold text-gray-800 truncate leading-tight`}>
                                            {lang === 'en' ? (p.item.titleEn || p.item.title) : p.item.title}
                                        </h4>
                                        <div className="text-[10px] text-gray-500 truncate">{p.item.address || p.item.startTime || (lang === 'en' ? 'No address' : '無地址')}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Map Area */}
            <div className={`relative z-0 ${isMobile && !isFullScreen ? (isLandscape ? 'w-1/2 h-full' : 'h-[60svh] w-full') : 'flex-1'}`}>
                <MapContainer center={[35.6762, 139.6503]} zoom={13} style={{ height: '100%', width: '100%' }} zoomControl={false}>
                    <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    {/* Auto Center on Load */}
                    {!selectedItem && <MapUpdater points={points} />}

                    {/* Camera and Selection Controller */}
                    <MapController selectedItem={selectedItem} />

                    <MapEvents onMapClick={() => setSelectedItem(null)} />
                    {points.length > 1 && <Polyline positions={points.map(p => [p.lat, p.lng])} pathOptions={{ color: '#0d9488', weight: 4, opacity: 0.6, dashArray: '10, 10' }} />}
                    {points.map((p, idx) => (
                        <Marker
                            key={idx}
                            position={[p.lat, p.lng]}
                            icon={createIcon(p.item, p.slot, p.index, hoveredIndex === idx, selectedItem?.instanceId === p.item.instanceId)}
                            eventHandlers={{
                                mouseover: () => !isMobile && setHoveredIndex(idx),
                                mouseout: () => !isMobile && setHoveredIndex(null),
                                click: (e) => {
                                    L.DomEvent.stopPropagation(e as any);
                                    handleItemSelection(p.item, idx);
                                }
                            }}
                        />
                    ))}
                </MapContainer>

                {/* Desktop Toggle overlay */}
                {!isEmbedded && !isMobile && (
                    <button
                        onClick={() => setShowList(!showList)}
                        className={`absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-medium shadow-md z-[500] flex items-center gap-2 transition-colors hover:bg-white ${showList ? 'text-teal-600' : 'text-gray-500'}`}
                    >
                        <List size={14} />
                        {showList ? (t.hideList || '隱藏列表') : (t.showList || '顯示列表')}
                    </button>
                )}

                {/* Mobile Fullscreen Toggle */}
                {isMobile && !isEmbedded && (
                    <button
                        onClick={() => setIsFullScreen(!isFullScreen)}
                        className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full shadow-xl z-[500] flex items-center justify-center text-teal-600 active:scale-90 transition-all border border-teal-100"
                    >
                        {isFullScreen ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
                    </button>
                )}

                {/* Mobile Close Button (FAB) */}
                {isMobile && onClose && (
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow-lg z-[1100] flex items-center justify-center text-gray-700 active:scale-95 transition-all"
                    >
                        <X size={20} />
                    </button>
                )}

                {points.length === 0 && (
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-[500] flex items-center justify-center">
                        <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-sm mx-4">
                            <MapIcon size={32} className="text-gray-400 mx-auto mb-4" />
                            <h3 className="font-bold text-gray-800 mb-2">{t.noSpotsOnMap || '地圖上沒有行程點'}</h3>
                            <p className="text-sm text-gray-500">{t.dragFromSidebarToMap || '請從側邊欄拖曳景點到行程中。'}</p>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                .leaflet-popup-content-wrapper { @apply rounded-xl shadow-xl border border-gray-100 p-0 overflow-hidden; } 
                .leaflet-popup-content { @apply m-0; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
};

export default MapView;
