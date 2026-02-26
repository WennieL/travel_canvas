export type ItemType = 'attraction' | 'food' | 'hotel' | 'transport' | 'shopping' | 'nature' | 'custom';
export type TransportMode = 'car' | 'walk' | 'public';
export type LangType = 'zh' | 'en';
export type TimeSlot = 'morning' | 'afternoon' | 'evening' | 'night' | 'accommodation';
export type ViewMode = 'canvas' | 'map' | 'checklist' | 'budget' | 'discovery' | 'favorites' | 'projects'; // Supports split view and mobile map
export type Region = string; // Data-driven, managed by REGIONS config in regions.ts
export type ConfirmType = 'info' | 'warning' | 'error' | 'success';

export interface ConfirmOptions {
    title?: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    type?: ConfirmType;
}

// [NEW] Data-driven Region config — replaces hardcoded switch/case
export interface RegionConfig {
    id: string;           // 'taipei', 'tokyo'
    name: string;         // '台北'
    nameEn: string;       // 'Taipei'
    emoji: string;        // '🇹🇼' or '🗼'
    continent: string;    // 'asia' (for future grouping)
    country: string;      // 'taiwan' (for future grouping)
    gradient: string;     // Tailwind gradient classes
    heroEmoji?: string;   // Large icon for region page fallback
    coverImage?: string;  // Region page banner image URL
    currency?: string;    // 'TWD', 'JPY', 'AUD'
    exchangeRate?: number; // Relative exchange rate
}


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

    // [NEW] Premium Content Strategy Fields
    tier?: 'standard' | 'premium';
    marketingTitle?: string; // e.g. "Hidden Jazz Bar" (Shown when locked)
    marketingTitleEn?: string;
    marketingImage?: string; // Vibe photo (Shown when locked)
    isLocked?: boolean;     // If true, hide address/real title
    isCustom?: boolean;     // [NEW] Flag to identify user-created items
    insiderTip?: InsiderTip;

    // [PHASE 19] Creator Discovery Fields
    authorId?: string;
    author?: string;
    coverImage?: string;
}

// [NEW] Enhanced Insider Tip Structure
export interface InsiderTip {
    // Free preview
    teaser: string;
    teaserEn?: string;

    // Premium content (unlocked)
    full?: {
        story: string;           // Full narrative
        storyEn?: string;
        photos?: string[];       // Exclusive photos
        exactLocation?: string;  // Precise location tip
        exactLocationEn?: string;
        mustTry?: string;        // Must order/buy
        mustTryEn?: string;
        avoid?: string;          // Pitfalls to avoid
        avoidEn?: string;
        bestTime?: string;       // Best time to visit
        reservation?: string;    // Booking link
    };

    // Legacy fields for compatibility
    text?: string;
    textEn?: string;
    isLocked?: boolean;
    highlight?: boolean;
}

export interface ScheduleItem extends TravelItem {
    instanceId: string;
    startTime?: string;
    notes?: string;
    arrivalTransport?: TransportMode;
    // Override insiderTip to allow instance-specific tips (uses same InsiderTip interface)
    insiderTip?: InsiderTip;
    lockedTeaser?: {
        image?: string;
        description: string;
    };
    day?: number; // [NEW] Optional day context for move operations
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
    // [NEW] Themed day enhancements
    theme?: string;               // "咖啡廳 & 文青小店"
    themeEn?: string;             // "Cafés & Indie Shops"
    themeEmoji?: string;          // "☕"
    swapSuggestion?: string;      // "咖啡廳可替換為獨立書店"
    swapSuggestionEn?: string;
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
    region?: Region; // Track the city/region of the plan
    origin?: string; // Departure city (e.g., 'TAIPEI')
    destination?: string; // Arrival city (e.g., 'TOKYO')
    targetCurrency?: string; // e.g. 'TWD'
    exchangeRate?: number;   // e.g. 0.21 (1 JPY = 0.21 TWD)
    createdAt: number;
    // [NEW] Template metadata — preserved when applying a template
    templateId?: string;
    travelStyle?: string[];  // e.g. ['慢活', '文青'] or ['michelin']
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
    tagsEn?: string[];
}

export interface Template {
    id: string;
    name: string;
    nameEn?: string;
    // Marketing Title ("The Tokyo You Missed")
    title?: string;
    titleEn?: string;
    author: string;
    authorEn?: string;
    authorId: string; // Link to Creator
    region: Region;
    tags: string[];
    tagsEn?: string[];
    // Visual Vibe Tags
    vibes?: Array<{
        tag: string;
        color: string; // Tailwind class or hex
    }>;
    // Narrative Header
    coverStory?: {
        quote: string;
        quoteEn?: string;
        description: string;
        authorLabel?: string;
    };
    duration: number;
    rating?: number;
    tier?: 'official' | 'creator' | 'community'; // Template tier level
    copiedCount?: number; // Number of times this template was copied/applied
    schedule: DaySchedule | FullSchedule;
    price?: number;        // Unlock price in USD
    originalPrice?: number; // Original price for anchor effect
    isLocked?: boolean;    // If true, requires purchase/unlock
    purchased?: boolean;   // Local state to track if user unlocked it

    // Phase 1 UX Upgrade Fields
    coverImage?: string;   // Hero image URL
    highlights?: {
        days: number;
        spots: number;
        tips: number;
        rating: number;
        usageCount?: number; // "來自 256 次套用"
    };
    whatYouGet?: string[]; // Bullet list of value props
    dayPreviews?: Array<{  // Condensed day preview
        day: number;
        summary: string;   // "淺草寺 → 晴空塔 → 隅田川夜景"
    }>;
    hiddenCount?: number;  // Number of hidden/locked items

    // [NEW] Location × Style architecture fields
    travelStyle?: string[];  // e.g. ['慢活', '文青', 'michelin']
    targetAudience?: {
        personas: string[];       // ['慢活族', '文青', '咖啡控']
        personasEn?: string[];    // ['Slow Traveler', 'Culture Lover']
        description?: string;     // Free-text description
        descriptionEn?: string;
        paceLevel?: 'slow' | 'moderate' | 'fast';
    };
    travelTips?: Array<{
        tip: string;
        tipEn?: string;
    }>;
}
