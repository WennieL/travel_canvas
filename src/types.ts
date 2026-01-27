export type ItemType = 'attraction' | 'food' | 'hotel' | 'transport' | 'custom';
export type TransportMode = 'car' | 'walk' | 'public';
export type LangType = 'zh' | 'en';
export type TimeSlot = 'morning' | 'afternoon' | 'evening' | 'night' | 'accommodation';
export type ViewMode = 'canvas' | 'map' | 'checklist';
export type Region = 'tokyo' | 'osaka' | 'kyoto' | 'all';

export interface TravelItem {
    id: string;
    title: string;
    titleEn?: string; // English Title
    type: ItemType;
    duration?: string;
    image?: string;
    description?: string;
    descriptionEn?: string; // English Description
    price?: number;
    address?: string;
    rating?: number;
    tips?: string;
    x?: number; // relative x (0-100) for demo map
    y?: number; // relative y (0-100) for demo map
    lat?: number; // Real latitude
    lng?: number; // Real longitude
    funFact?: string;
    openingHours?: string;
    tags?: string[];
    region?: Region;
    origin?: string;       // 出發地 (for transport items)
    destination?: string;  // 目的地 (for transport items)
}

export interface ScheduleItem extends TravelItem {
    instanceId: string;
    startTime?: string;
    notes?: string;
    arrivalTransport?: TransportMode;
}

export interface ChecklistItem {
    id: string;
    text: string;
    checked: boolean;
}

export interface DaySchedule {
    morning: ScheduleItem[];
    afternoon: ScheduleItem[];
    evening: ScheduleItem[];
    night: ScheduleItem[];
    accommodation: ScheduleItem[];
}

export interface FullSchedule {
    [key: string]: DaySchedule;
}

export interface Plan {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    totalDays: number;
    schedule: FullSchedule;
    checklist: ChecklistItem[];
    targetCurrency?: string; // e.g. 'TWD'
    exchangeRate?: number;   // e.g. 0.21 (1 JPY = 0.21 TWD)
    createdAt: number;
}

export interface Creator {
    id: string;
    name: string;
    nameEn?: string;
    avatar: string; // URL or emoji-based placeholder
    description: string;
    descriptionEn?: string;
    followers: number;
    blogUrl?: string;
    tags: string[];
}

export interface Template {
    id: string;
    name: string;
    nameEn?: string;
    author: string;
    authorEn?: string;
    authorId: string; // Link to Creator
    region: Region;
    tags: string[];
    tagsEn?: string[];
    duration: number;
    rating?: number;
    tier?: 'official' | 'creator' | 'community'; // Template tier level
    copiedCount?: number; // Number of times this template was copied/applied
    schedule: DaySchedule;
}
