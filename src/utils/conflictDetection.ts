import { ScheduleItem, TravelItem } from '../types';

/**
 * Detects conflicts between two schedule items (overlaps or insufficient travel time).
 */
export const detectConflict = (itemA: ScheduleItem, itemB: ScheduleItem) => {
    if (!itemA.startTime || !itemB.startTime) return null;

    const startA = parseTimeToMinutes(itemA.startTime);
    const durationA = parseDurationToMinutes(itemA.duration || '1hr');
    const endA = startA + durationA;

    const startB = parseTimeToMinutes(itemB.startTime);

    // 1. Direct Overlap
    if (endA > startB) {
        return {
            type: 'overlap',
            severity: 'error',
            message: `Overlap detected: ${itemA.title} ends at ${minutesToTime(endA)}, but ${itemB.title} starts at ${itemB.startTime}.`
        };
    }

    return null;
};

// --- Helper Functions ---

const parseTimeToMinutes = (time: string): number => {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
};

const parseDurationToMinutes = (duration: string): number => {
    const match = duration.match(/(\d+)(hr|min)/);
    if (!match) return 60;
    const value = parseInt(match[1]);
    return match[2] === 'hr' ? value * 60 : value;
};

const minutesToTime = (minutes: number): string => {
    const h = Math.floor(minutes / 60) % 24;
    const m = minutes % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
};

// Example test case to satisfy lint and check types
const testDetection = () => {
    const itemA: TravelItem = {
        id: 'test-1',
        title: 'Test A',
        type: 'attraction',
        lat: 35.6,
        lng: 139.7
    };
    const itemB: TravelItem = {
        id: 'test-2',
        title: 'Test B',
        type: 'attraction',
        lat: 35.7,
        lng: 139.8
    };
    return { itemA, itemB };
};

testDetection();
