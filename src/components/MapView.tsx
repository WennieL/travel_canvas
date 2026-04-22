import React, { useEffect, useMemo, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ScheduleItem, TimeSlot, LangType, TravelItem } from '../types';
import { List, Map as MapIcon, Navigation, ExternalLink, X, Maximize2, Minimize2, PlusCircle, Star, Filter, ChevronRight, Check, Eye, EyeOff } from 'lucide-react';
import { SAMPLE_ASSETS, SAMPLE_CREATORS } from '../data';
import { useMapEvents } from 'react-leaflet';

interface MapViewProps {
    schedule: any; // Using any temporarily to avoid strict type issues with DaySchedule vs FullSchedule, will refine
    lang: LangType;
    t: any;
    onItemClick?: (item: ScheduleItem) => void;
    onAddItem?: (item: TravelItem) => void;
    isEmbedded?: boolean; // Scheme B: Split view
    onClose?: () => void; // [NEW] Close handler for Mobile Full Screen
    discoveryCreatorId?: string | null;
    currentDay?: number;
    addToSlotTarget?: TimeSlot | null;
    onExitDiscovery?: () => void;
    activeRegion?: string;
    subscribedCreators?: string[]; // [NEW] For social proof highlighting
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

const MapView: React.FC<MapViewProps> = ({
    schedule, lang, t, onItemClick, onAddItem,
    isEmbedded = false, onClose, discoveryCreatorId,
    currentDay, addToSlotTarget, onExitDiscovery,
    activeRegion = 'all',
    subscribedCreators = []
}) => {
    const [showList, setShowList] = useState(!isEmbedded); // Default hidden if embedded
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedItem, setSelectedItem] = useState<ScheduleItem | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isLandscape, setIsLandscape] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [showScheduled, setShowScheduled] = useState(false); // Default true for Discovery Focus (hide scheduled items)
    const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

    const listRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

    // Filter Tags Definition
    const FILTER_TAGS = [
        { id: 'all', labelKey: 'filter_all', icon: '🌟' },
        { id: 'food', labelKey: 'filter_food', icon: '🍔' },
        { id: 'attraction', labelKey: 'filter_attraction', icon: '📸' },
        { id: 'shopping', labelKey: 'filter_shopping', icon: '🛍️' },
        { id: 'nature', labelKey: 'nature', icon: '🌲' },
        { id: 'artisan', labelKey: 'filter_artisan', icon: '🎨' },
        { id: 'saved', labelKey: 'filter_saved', icon: '❤️' },
    ];

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
        const list: { item: ScheduleItem; slot: string; lat: number; lng: number, index: number, isDiscovery?: boolean }[] = [];

        let globalIndex = 0; // Global sequential numbering (1, 2, 3... n)
        slots.forEach(slot => {
            if (schedule[slot]) {
                schedule[slot].forEach((item: ScheduleItem) => {
                    let lat = item.lat;
                    let lng = item.lng;

                    if (!lat || !lng) {
                        const found = SAMPLE_ASSETS.find(asset => asset.title === item.title || asset.id === item.id || asset.titleEn === item.title);
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

        // [PHASE 22.3] Multi-Creator Aggregate Discovery Layer (Region-Aware)
        if (discoveryCreatorId) {
            // Show points from ALL creators in this region (SAMPLE_ASSETS = ALL_REGIONAL_ASSETS)
            let discoveryAssets = SAMPLE_ASSETS.filter(asset =>
                asset.authorId &&
                (activeRegion === 'all' || asset.region === activeRegion) &&
                !list.some(p => p.item.id === asset.id || p.item.title === asset.title)
            );

            // Apply Category Filtering
            if (selectedCategory !== 'all') {
                if (selectedCategory === 'saved') {
                    // TODO: Connect to actual savedSpots state if available
                    // For now, filter by a mock property or just omit if no saved items
                    discoveryAssets = discoveryAssets.filter(a => (a as any).isSaved);
                } else {
                    discoveryAssets = discoveryAssets.filter(asset => asset.type === selectedCategory);
                }
            }

            // [NEW] Group by Location (Lat/Lng) to handle multi-author spots
            const groupedNearby: Record<string, TravelItem[]> = {};
            discoveryAssets.forEach(asset => {
                const key = `${asset.lat?.toFixed(4)},${asset.lng?.toFixed(4)}`;
                if (!groupedNearby[key]) groupedNearby[key] = [];
                groupedNearby[key].push(asset);
            });

            Object.entries(groupedNearby).forEach(([key, assets]) => {
                const primary = assets[0];
                if (primary.lat && primary.lng) {
                    const mergedRecommendations = assets.flatMap(a => a.recommendations || []);
                    
                    list.push({
                        item: {
                            ...primary,
                            instanceId: `discovery-group-${primary.id}`,
                            recommendations: mergedRecommendations.length > 0 ? mergedRecommendations : (primary.recommendations || []),
                            authorId: primary.authorId
                        } as any,
                        slot: 'discovery',
                        lat: primary.lat,
                        lng: primary.lng,
                        index: -1,
                        isDiscovery: true
                    });
                }
            });
        }

        // Only show discovery items if "showScheduled" is false
        if (discoveryCreatorId && !showScheduled) {
            return list.filter(p => p.isDiscovery);
        }

        return list;
    }, [schedule, discoveryCreatorId, activeRegion, selectedCategory, showScheduled]);

    const getSlotColor = (slot: string, index: number) => {
        if (slot === 'discovery') return 'bg-amber-400 border-amber-500 ring-amber-400/30';
        if (index >= 0) return 'bg-teal-500 border-white ring-teal-500/20'; // Brand color for scheduled items
        return 'bg-gray-300 border-white ring-gray-300/10'; // Faded for background/unscheduled
    };

    const createIcon = (item: ScheduleItem, slot: string, index: number, isHovered: boolean, isSelected: boolean, isDiscovery?: boolean) => {
        const isActive = isHovered || isSelected;
        const displayTitle = lang === 'en' ? (item.titleEn || item.title) : item.title;

        // [IG STYLE] Expert Picks: Circular Thumbnail + Avatar Group + Label
        if (isDiscovery) {
            const recommendations = (item as TravelItem).recommendations || [];
            const authors = recommendations.length > 0 
                ? recommendations.map(r => r.id) 
                : [item.authorId || ''];
            const hasFollowed = authors.some((id: string) => subscribedCreators.includes(id));

            const html = `
                <div class="relative flex flex-col items-center transition-all duration-300 ${isActive ? 'z-[1000] scale-125' : 'z-50'}">
                    <!-- Main Thumbnail -->
                    <div class="group relative w-12 h-12 p-0.5 rounded-full ${hasFollowed ? 'bg-teal-500 shadow-teal-500/30' : 'bg-white shadow-black/10'} shadow-xl animate-in zoom-in duration-500">
                        <div class="w-full h-full rounded-full border-2 border-white overflow-hidden bg-slate-50">
                            ${item.coverImage ? `
                                <img src="${item.coverImage}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            ` : `
                                <div class="w-full h-full flex items-center justify-center text-xl bg-amber-50">${item.image || '📍'}</div>
                            `}
                        </div>
                        
                        <!-- Mini Creator Avatar Overlay -->
                        <div class="absolute -bottom-1 -right-1 flex">
                            <div class="w-5 h-5 rounded-full border-2 border-white shadow-md overflow-hidden bg-white">
                                <img src="${SAMPLE_CREATORS.find(c => c.id === authors[0])?.avatar || `https://i.pravatar.cc/100?u=${authors[0]}`}" class="w-full h-full object-cover" />
                            </div>
                        </div>

                        <!-- [NEW] Camera Icon Badge -->
                        ${item.isPhotographySpot ? `
                            <div class="absolute -top-1 -left-1 w-6 h-6 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center shadow-lg animate-bounce duration-[2000ms]">
                                <span class="text-[10px]">📸</span>
                            </div>
                        ` : ''}
                    </div>

                    <!-- IG-Style Label -->
                    <div class="mt-1.5 px-2 py-0.5 bg-white/95 backdrop-blur-sm rounded-md shadow-md border border-slate-100 max-w-[80px]">
                        <p class="text-[9px] font-black text-slate-800 truncate text-center">${displayTitle}</p>
                    </div>
                </div>
            `;
            return L.divIcon({ html, className: 'bg-transparent', iconSize: [80, 80], iconAnchor: [40, 24] });
        }

        // [HIERARCHY] Scheduled (Teal) vs. Others (Grey)
        const isScheduled = index >= 0;
        const colorClass = getSlotColor(slot, index);

        const html = `
            <div class="relative flex flex-col items-center justify-center transition-all duration-300 ${isActive ? 'z-[1000] scale-125' : 'z-10'}">
                <!-- Tooltip Bubble -->
                <div class="absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/90 backdrop-blur-sm text-white text-[10px] font-bold rounded-lg shadow-xl whitespace-nowrap pointer-events-none transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}">
                    ${displayTitle}
                    <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45"></div>
                </div>
                
                <!-- Pulse Effect for Selected -->
                ${isSelected ? `
                    <div class="absolute w-12 h-12 bg-teal-400/30 rounded-full animate-ping"></div>
                ` : ''}

                <!-- Pin Dot -->
                <div class="${colorClass} ${isScheduled ? 'w-8 h-8' : 'w-4 h-4'} rounded-full border-2 border-white shadow-lg flex items-center justify-center text-lg bg-opacity-100 relative">
                    ${isScheduled ? (item.image || '📍') : ''}
                    ${isSelected ? '<div class="absolute -inset-2 rounded-full border-2 border-teal-400 bg-teal-400/10"></div>' : ''}
                </div>
                
                ${isScheduled ? `
                    <div class="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center text-[10px] font-black border-2 border-teal-500 shadow-sm text-teal-600">
                        ${index + 1}
                    </div>
                ` : ''}

                <!-- [NEW] Camera Icon Badge for Scheduled Items -->
                ${item.isPhotographySpot ? `
                    <div class="absolute -top-1.5 -left-1.5 w-6 h-6 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center shadow-lg z-[1001] animate-bounce duration-[3000ms]">
                        <span class="text-[10px]">📸</span>
                    </div>
                ` : ''}
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

        // Sync scroll to list (classic mode only)
        const element = itemRefs.current[item.instanceId || ''];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // [DISCOVERY MODE] Pin tap only shows the Peak Card — do NOT open SpotDetailPage.
        // SpotDetailPage is triggered only when user explicitly taps the Peak Card body.
        if (discoveryCreatorId) {
            return;
        }

        if (onItemClick) {
            onItemClick(item);
        }
    };

    return (
        <div className={`bg-gray-100 rounded-3xl relative overflow-hidden border border-gray-200 shadow-inner flex ${isMobile && !isFullScreen ? (isLandscape ? 'flex-row-reverse h-[85svh]' : 'flex-col-reverse h-[85svh]') : 'flex-row h-full min-h-[500px]'}`}>

            {/* Sidebar List (Classic Mode Only) */}
            {!discoveryCreatorId && ((!isMobile && !isEmbedded && showList) || (isMobile && !isFullScreen && !isEmbedded)) && points.length > 0 && (
                <div className={`${isMobile ? (isLandscape ? 'w-1/2 h-full border-l' : 'w-full flex-1 border-r') : 'w-56 border-r'} bg-white border-gray-200 flex flex-col z-[400] overflow-hidden shrink-0 shadow-lg`}>
                    <div className="p-3 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                            <List size={14} /> {t.schedule}{t.attraction}
                        </span>
                        <span className="text-[10px] text-gray-400">{points.length} {t.spotsLabel}</span>
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
                                    <div className={`${isMobile ? 'w-6 h-6' : 'w-5 h-5 mt-0.5'} rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 shadow-sm ${getSlotColor(p.slot, p.index).split(' ')[0]}`}>
                                        {p.index + 1}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className={`${isMobile ? 'text-sm' : 'text-xs'} font-bold text-gray-800 truncate leading-tight`}>
                                            {lang === 'en' ? (p.item.titleEn || p.item.title) : p.item.title}
                                        </h4>
                                        <div className="text-[10px] text-gray-500 truncate">{(lang === 'en' && (p.item as any).addressEn) ? (p.item as any).addressEn : (p.item.address || p.item.startTime || t.noAddress)}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Map Area */}
            <div className={`relative z-0 ${isMobile && !isFullScreen ? (isLandscape ? 'w-1/2 h-full' : 'flex-1 w-full') : 'flex-1'}`}>
                <MapContainer center={[35.6762, 139.6503]} zoom={13} style={{ height: '100%', width: '100%' }} zoomControl={false}>
                    <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    {/* Auto Center on Load */}
                    {!selectedItem && <MapUpdater points={points} />}

                    {/* Camera and Selection Controller */}
                    <MapController selectedItem={selectedItem} />

                    <MapEvents onMapClick={() => setSelectedItem(null)} />
                    {points.length > 1 && (
                        <Polyline
                            positions={points.filter(p => !p.isDiscovery).map(p => [p.lat, p.lng])}
                            pathOptions={{ color: '#0d9488', weight: 4, opacity: 0.6, dashArray: '10, 10' }}
                        />
                    )}
                    {points.map((p, idx) => (
                        <Marker
                            key={idx}
                            position={[p.lat, p.lng]}
                            icon={createIcon(p.item, p.slot, p.index, hoveredIndex === idx, selectedItem?.instanceId === p.item.instanceId, p.isDiscovery)}
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

                {/* [NEW] Filter Pills Overlay */}
                {discoveryCreatorId && (
                    <div className="absolute top-4 left-4 right-4 z-[600] pointer-events-none">
                        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pointer-events-auto">
                            {FILTER_TAGS.map(tag => (
                                <button
                                    key={tag.id}
                                    onClick={() => setSelectedCategory(tag.id)}
                                    className={`px-4 py-2 rounded-full text-[10px] font-black whitespace-nowrap transition-all flex items-center gap-1.5 shadow-lg border-2 ${selectedCategory === tag.id
                                        ? 'bg-gray-900 border-gray-900 text-white scale-105'
                                        : 'bg-white/90 backdrop-blur-md border-white/50 text-gray-600 hover:bg-white'
                                        }`}
                                >
                                    <span>{tag.icon}</span>
                                    {t[tag.labelKey] || tag.id}
                                </button>
                            ))}
                            <div className="w-[1px] h-6 bg-gray-300 mx-1 shrink-0" />
                            <button
                                onClick={() => setShowScheduled(!showScheduled)}
                                className={`px-4 py-2 rounded-full text-[10px] font-black whitespace-nowrap transition-all flex items-center gap-1.5 shadow-lg border-2 ${showScheduled
                                    ? 'bg-teal-500 border-teal-500 text-white'
                                    : 'bg-white/90 backdrop-blur-md border-white/50 text-gray-600 hover:bg-white'
                                    }`}
                            >
                                {showScheduled ? <Eye size={12} /> : <EyeOff size={12} />}
                                {lang === 'en' ? 'Scheduled' : '已排程'}
                            </button>
                        </div>
                    </div>
                )}

                {/* [PEAK CARD] Compact Google Maps-style Bottom Sheet */}
                {discoveryCreatorId && selectedItem && (() => {
                    const spot = selectedItem as any;
                    const title = lang === 'zh' ? selectedItem.title : (spot.titleEn || selectedItem.title);
                    const address = spot.addressEn || selectedItem.address || (lang === 'zh' ? '附近景點' : 'Nearby');
                    const rating = spot.rating || '4.8';
                    const type = selectedItem.type || 'attraction';
                    const typeLabel: Record<string, string> = {
                        food: lang === 'zh' ? '🍜 美食' : '🍜 Food',
                        attraction: lang === 'zh' ? '📸 景點' : '📸 Attraction',
                        shopping: lang === 'zh' ? '🛍️ 購物' : '🛍️ Shopping',
                        nature: lang === 'zh' ? '🌲 自然' : '🌲 Nature',
                        artisan: lang === 'zh' ? '🎨 職人' : '🎨 Artisan',
                        hotel: lang === 'zh' ? '🏨 住宿' : '🏨 Hotel',
                    };
                    const typePill = typeLabel[type] || (lang === 'zh' ? '📍 景點' : '📍 Spot');

                    return (
                        <div className="absolute bottom-24 left-3 right-3 z-[500]"
                            style={{ animation: 'peakCardIn 0.28s cubic-bezier(0.34,1.56,0.64,1) both' }}>
                            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

                                {/* ── Main Row: Thumbnail + Info + Close ── */}
                                <div
                                    className="flex items-center gap-3 px-3 pt-3 pb-2.5 cursor-pointer"
                                    onClick={() => onItemClick?.(selectedItem)}
                                >
                                    {/* Small square thumbnail */}
                                    <div className="shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-slate-100 relative">
                                        {spot.coverImage ? (
                                            <img src={spot.coverImage} className="w-full h-full object-cover" alt={title} />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-2xl bg-gradient-to-br from-teal-50 to-slate-100">
                                                {selectedItem.image || '📍'}
                                            </div>
                                        )}
                                        {/* Creator avatar badge */}
                                        {spot.authorId && (
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white overflow-hidden shadow-sm bg-white">
                                                <img src={SAMPLE_CREATORS.find(c => c.id === spot.authorId)?.avatar || `https://i.pravatar.cc/100?u=${spot.authorId}`} className="w-full h-full object-cover" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Text info */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-black text-gray-900 text-[15px] leading-tight truncate">{title}</h3>
                                        <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                                            <span className="px-1.5 py-0.5 rounded-full bg-teal-50 text-teal-700 text-[10px] font-bold border border-teal-100 leading-none">
                                                {typePill}
                                            </span>
                                            {spot.isPhotographySpot && (
                                                <span className="px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-black border border-amber-200 leading-none flex items-center gap-1 animate-pulse">
                                                    📸 {lang === 'zh' ? '達人機位' : 'Expert Spot'}
                                                </span>
                                            )}
                                            <span className="flex items-center gap-0.5 text-amber-500 text-[11px] font-bold">
                                                <Star size={9} fill="currentColor" /> {rating}
                                            </span>
                                            <span className="text-gray-300 text-[10px]">·</span>
                                            <span className="text-gray-400 text-[11px] truncate flex-1">{address}</span>
                                        </div>
                                    </div>

                                    {/* Close (X) button */}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setSelectedItem(null); }}
                                        className="shrink-0 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors ml-1"
                                    >
                                        <X size={13} />
                                    </button>
                                </div>

                                {/* ── Action Bar ── */}
                                <div className="flex items-center gap-2 px-3 pb-3">
                                    <button
                                        onClick={() => onItemClick?.(selectedItem)}
                                        className="flex-1 h-8 rounded-xl border border-gray-200 bg-white text-gray-600 text-[11px] font-bold flex items-center justify-center gap-1.5 hover:border-teal-300 hover:text-teal-700 transition-colors"
                                    >
                                        <ExternalLink size={12} />
                                        {lang === 'zh' ? '查看詳情' : 'Details'}
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onAddItem?.(selectedItem as TravelItem);
                                            setSelectedItem(null);
                                        }}
                                        className="flex-[1.6] h-8 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-[11px] font-black flex items-center justify-center gap-1.5 shadow-md shadow-teal-500/20 active:scale-95 transition-all"
                                    >
                                        <PlusCircle size={13} />
                                        {lang === 'zh' ? '加入行程' : 'Add to Plan'}
                                    </button>
                                </div>
                            </div>

                            <style>{`
                                @keyframes peakCardIn {
                                    from { opacity: 0; transform: translateY(16px) scale(0.97); }
                                    to   { opacity: 1; transform: translateY(0) scale(1); }
                                }
                            `}</style>
                        </div>
                    );
                })()}



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
                        onClick={() => {
                            if (points.length === 0 && discoveryCreatorId) {
                                // Prevent users from accidentally exiting the map when they just wanted to dismiss the empty state
                                setSelectedCategory('all');
                                setShowScheduled(false);
                            } else {
                                onClose();
                            }
                        }}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow-lg z-[1100] flex items-center justify-center text-gray-700 active:scale-95 transition-all"
                    >
                        <X size={20} />
                    </button>
                )}

                {points.length === 0 && (
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-[500] flex items-center justify-center pointer-events-auto">
                        {discoveryCreatorId ? (
                            <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-sm mx-4 border border-gray-100 relative">
                                {/* Only show close button here if requested, but normally mobile X is below */}
                                <Filter size={32} className="text-gray-400 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-800 mb-2">{lang === 'en' ? 'No Spots Found' : '沒有符合的景點'}</h3>
                                <p className="text-sm text-gray-500 mb-5">{lang === 'en' ? 'Try changing the category or showing your scheduled spots.' : '試著切換「全部」或解除隱藏已排程的景點'}</p>
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedCategory('all');
                                        setShowScheduled(false);
                                    }}
                                    className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl shadow-md transition-colors w-full"
                                >
                                    {lang === 'en' ? 'Clear Filters' : '清除篩選並顯示全部'}
                                </button>
                            </div>
                        ) : (
                            <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-sm mx-4">
                                <MapIcon size={32} className="text-gray-400 mx-auto mb-4" />
                                <h3 className="font-bold text-gray-800 mb-2">{t.noSpotsOnMap}</h3>
                                <p className="text-sm text-gray-500">{t.dragFromSidebarToMap}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Desktop Toggle overlay */}
            {!isEmbedded && !isMobile && (
                <div className="absolute top-4 left-4 z-[500] flex flex-col gap-2">
                    <button
                        onClick={() => setShowList(!showList)}
                        className={`bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-medium shadow-md flex items-center gap-2 transition-colors hover:bg-white ${showList ? 'text-teal-600' : 'text-gray-500'}`}
                    >
                        <List size={14} />
                        {showList ? t.hideList : t.showList}
                    </button>
                </div>
            )}

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
