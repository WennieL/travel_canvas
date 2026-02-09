import React from 'react';
import {
    Camera,
    Utensils,
    Bed,
    PenTool,
    MapPin,
    Footprints,
    Train,
    Car
} from 'lucide-react';
import { ItemType, TimeSlot, TravelItem, TransportMode, FullSchedule } from './types';

// --- Helper Functions ---

export const getCategoryLabel = (type: ItemType, t: any) => {
    switch (type) {
        case 'attraction': return t.attraction || 'Attraction';
        case 'food': return t.food || 'Food';
        case 'hotel': return t.hotel || 'Hotel';
        case 'custom': return t.custom || 'Custom';
        default: return t.other || 'Other';
    }
};


export const getItemIcon = (type: ItemType) => {
    switch (type) {
        case 'attraction': return <Camera size={14} className="text-blue-500" />;
        case 'food': return <Utensils size={14} className="text-orange-500" />;
        case 'hotel': return <Bed size={14} className="text-indigo-500" />;
        case 'custom': return <PenTool size={14} className="text-purple-500" />;
        default: return <MapPin size={14} className="text-gray-500" />;
    }
};

export const getFallbackImage = (type: ItemType) => {
    switch (type) {
        case 'attraction': return '📍';
        case 'food': return '🍴';
        case 'hotel': return '🛏️';
        case 'custom': return '✏️';
        default: return '📍';
    }
};

export const getSlotLabel = (slot: TimeSlot, t: any) => {
    switch (slot) {
        case 'morning': return t.morning;
        case 'afternoon': return t.afternoon;
        case 'evening': return t.evening;
        case 'night': return t.night;
        case 'accommodation': return t.accommodation;
    }
};

export const createEmptySchedule = (days: number): FullSchedule => {
    const schedule: FullSchedule = {};
    for (let i = 1; i <= days; i++) {
        schedule[`Day ${i}`] = { morning: [], afternoon: [], evening: [], night: [], accommodation: [] };
    }
    return schedule;
};

export const calculateTravelTime = (item1: TravelItem, item2: TravelItem, mode: TransportMode = 'car') => {
    if (!item1.x || !item1.y || !item2.x || !item2.y) return 30;
    const dist = Math.sqrt(Math.pow(item2.x - item1.x, 2) + Math.pow(item2.y - item1.y, 2));
    switch (mode) {
        case 'walk': return Math.round(dist * 4);
        case 'public': return Math.round(dist * 1.5 + 15);
        case 'car': default: return Math.round(dist * 1.2 + 5);
    }
};

export const getTransportIcon = (mode: TransportMode) => {
    switch (mode) {
        case 'walk': return <Footprints size={12} />;
        case 'public': return <Train size={12} />;
        case 'car': default: return <Car size={12} />;
    }
};

export const getTransportLabel = (mode: TransportMode, t: any) => {
    switch (mode) {
        case 'walk': return t.walk;
        case 'public': return t.public;
        case 'car': default: return t.car;
    }
};

export const parseDuration = (durationStr?: string): number => {
    if (!durationStr) return 60;
    let total = 0;
    // Extract hours
    const hourMatch = durationStr.match(/(\d+(\.\d+)?)小時|(\d+(\.\d+)?)hr/);
    if (hourMatch) total += parseFloat(hourMatch[1] || hourMatch[3]) * 60;
    // Extract minutes
    const minMatch = durationStr.match(/(\d+)分|(\d+)min/);
    if (minMatch) total += parseInt(minMatch[1] || minMatch[2]);

    return total === 0 ? 60 : total; // Default 1 hour if parse fails or 0
};

export const addMinutes = (timeStr: string, minutes: number): string => {
    if (!timeStr) return '';
    const [h, m] = timeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(h, m + minutes, 0, 0);
    return date.toTimeString().slice(0, 5);
};

// --- Transport Suggestion Functions ---

/**
 * Calculate distance between two points using Haversine formula
 * @returns distance in kilometers
 */
export const calculateDistance = (lat1?: number, lng1?: number, lat2?: number, lng2?: number): number => {
    if (!lat1 || !lng1 || !lat2 || !lng2) return 0;

    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
};

/**
 * Suggest transport mode and estimated time based on distance
 */
export const getTransportSuggestion = (
    item1: { lat?: number; lng?: number },
    item2: { lat?: number; lng?: number }
): { mode: TransportMode; time: number; distance: number; label: string; labelEn: string } => {
    const distance = calculateDistance(item1.lat, item1.lng, item2.lat, item2.lng);

    if (distance < 0.5) {
        // Less than 500m -> Walk
        const time = Math.round(distance / 0.08); // ~80m/min walking
        return {
            mode: 'walk',
            time: Math.max(time, 5),
            distance,
            label: `步行 ${Math.max(time, 5)} 分鐘`,
            labelEn: `Walk ${Math.max(time, 5)} min`
        };
    } else if (distance < 2) {
        // 500m - 2km -> Walk or Public
        const walkTime = Math.round(distance / 0.08);
        const publicTime = Math.round(distance / 0.5 + 5); // 5 min waiting/transfer
        return {
            mode: walkTime < 20 ? 'walk' : 'public',
            time: walkTime < 20 ? walkTime : publicTime,
            distance,
            label: walkTime < 20 ? `步行 ${walkTime} 分鐘` : `搭地鐵 ${publicTime} 分鐘`,
            labelEn: walkTime < 20 ? `Walk ${walkTime} min` : `Subway ${publicTime} min`
        };
    } else if (distance < 10) {
        // 2km - 10km -> Public transit
        const time = Math.round(distance / 0.5 + 10); // avg 30km/h + 10 min buffer
        return {
            mode: 'public',
            time,
            distance,
            label: `搭地鐵 ${time} 分鐘`,
            labelEn: `Subway ${time} min`
        };
    } else {
        // > 10km -> Public transit (longer)
        const time = Math.round(distance / 0.6 + 15);
        return {
            mode: 'public',
            time,
            distance,
            label: `搭電車 ${time} 分鐘`,
            labelEn: `Train ${time} min`
        };
    }
};

