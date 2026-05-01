export type ItemType = 'attraction' | 'food' | 'hotel' | 'transport' | 'shopping' | 'nature' | 'custom' | 'vibe' | 'experiential';
export type TransportMode = 'car' | 'walk' | 'public' | 'taxi' | 'bike' | 'ship' | 'ferry';
export type LangType = 'zh' | 'en';
export type TimeSlot = 'morning' | 'afternoon' | 'evening' | 'night' | 'accommodation' | 'unsorted';
export type ViewMode = 'overview' | 'canvas' | 'map' | 'checklist' | 'budget' | 'discovery' | 'favorites' | 'projects' | 'flights' | 'hotels' | 'files'; // Supports split view and mobile map
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


// [NEW] Expert Story Structure for the Interactive Grid
export type ExpertStoryCategory = 'must-do' | 'must-eat' | 'trap' | 'hidden' | 'artisan';

// [NEW] Structured facility tags — render as Pill Badges in ScheduleItemCard
export type FacilityTag =
    | 'stroller'        // 🚼 推車友善
    | 'restroom'        // 🚽 廁所
    | 'restroom-1f'     // 🚽 廁所 1F
    | 'elevator'        // 🛗 電梯
    | 'easycard'        // 💳 悠遊卡
    | 'cash-only'       // 💵 現金
    | 'booking'         // 📅 需預約
    | 'closed-mon'      // ⛔ 週一休館
    | 'crowd-warning'   // ⏰ 18:30 前入場
    | 'rain-ok'         // 🌧️ 雨天可去
    | 'kid-friendly'    // 👶 親子友善
    | 'hiking-boots'    // 🥾 登山鞋
    | 'weather-check'   // 🌡️ 注意天氣
    | 'free-entry'      // 🆓 免費
    | 'cobblestone'     // ⚠️ 石板路，推車不便
    | 'high-energy'     // ⚡️ 耗費體力
    | 'nap-friendly'    // 💤 適合午休
    | 'kid-menu'        // 🍽️ 兒童菜單
    | 'luggage-storage' // 🧳 行李寄放
    | 'stairs'          // 🧗 階梯多
    | 'water-fountain'  // 💧 飲水機
    | 'youbike'         // 🚲 YouBike
    | 'sun-exposure'    // ☀️ 注意防曬
    | 'windy'           // 💨 注意強風
    | 'slippery'        // ⚠️ 步道濕滑
    | 'hot-spring'      // ♨️ 溫泉
    | 'early-start'     // 🌅 需早起
    | 'gloves-needed'   // 🧤 需手套
    | 'no-restroom'     // 🚫 無廁所
    | 'cafe'            // ☕ 咖啡館
    | 'food'            // 🍜 美食
    | 'bus-schedule'    // 🚌 注意班次
    | 'massage'         // 💆 按摩
    | 'mrt'             // 🚇 捷運
    | 'air-conditioned'; // ❄️ 冷氣開放

export interface ExpertStory {
    id: ExpertStoryCategory;
    icon?: string;       // Lucide icon name or Emoji
    label: string;      // short label e.g. "Must Do"
    labelEn?: string;   
    summary: string;    // 1-sentence teaser
    summaryEn?: string;
    story: string;      // 3-5 sentence full narrative
    storyEn?: string;
    url?: string;        // [NEW] Clickable action URL
    urlLabel?: string;   // [NEW] Clickable action Label (e.g. "Book Tickets")
    color?: string;     // custom accent color
}

// [NEW] Survival Guide Structure (Boutique Magazine Style)
export interface SurvivalTopic {
    id: string;
    icon: string;       // Lucide icon name
    title: string;
    titleEn: string;
    teaser: string;
    teaserEn: string;
    content: string;    // Full markdown content or structured text
    contentEn: string;
    category: 'transport' | 'finance' | 'connectivity' | 'culture';
    imageUrl?: string;  // Magazine-style visual
}

export interface SurvivalGuide {
    regionId: string;
    topics: SurvivalTopic[];
}

export type MichelinRating = '3-star' | '2-star' | '1-star' | 'bib-gourmand' | 'selected';

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
    addressEn?: string; // English Address
    rating?: number;
    michelinRating?: MichelinRating; // [NEW] Michelin Guide rating
    michelinYears?: number[];        // [NEW] Years of recommendation (e.g. [2022, 2023, 2024, 2025])
    isVegetarianFriendly?: boolean;
    dietaryOptions?: ('vegetarian' | 'vegan' | 'gluten-free' | 'halal')[];
    x?: number; // relative x (0-100) for demo map
    y?: number; // relative y (0-100) for demo map
    lat?: number; // Real latitude
    lng?: number; // Real longitude
    funFact?: string;
    openingHours?: string;
    tags?: string[];
    region?: Region;
    category?: string; // [NEW] Sub-category for filtering (e.g., 'food', 'lifestyle')
    origin?: string;       // 出發地 (for transport items)
    destination?: string;  // 目的地 (for transport items)

    // [NEW] Premium Content Strategy Fields
    tier?: 'standard' | 'premium';
    bookingUrl?: string;     // Outbound link for ticket/reservation
    marketingTitle?: string; // e.g. "Hidden Jazz Bar" (Shown when locked)
    marketingTitleEn?: string;
    marketingImage?: string; // Vibe photo (Shown when locked)
    isLocked?: boolean;     // If true, hide address/real title
    isCustom?: boolean;     // [NEW] Flag to identify user-created items
    expertNote?: string;
    expertNoteEn?: string;
    proTip?: string;
    proTipEn?: string;
    
    // [NEW] 兒童點餐與生存指南
    kidFriendlyTip?: string;
    kidFriendlyTipEn?: string;
    
    // [PHASE 36] Consolidated Recommendation Architecture
    recommendations?: Recommendation[];
    
    // [PHASE 37] Interactive Story Grid
    expertStories?: ExpertStory[];
    teaser?: string;       // Expert quote/teaser for the card header
    teaserEn?: string;
    
    // [PHASE 40] Dynamic Narrative Styles
    themeColor?: string;   // e.g. "#8E9E82"
    prepType?: 'transport' | 'booking' | 'requirement' | 'none';
    prepValue?: string;    // e.g. "大橋頭站"
    prepLabel?: string;    // e.g. "最近捷運"
    priceRange?: string;   // e.g. "$500 - $800"

    // Legacy support (will be migrated to recommendations)
    authorId?: string;
    author?: string;
    insiderTip?: InsiderTip;
    coverImage?: string;
    reviews?: Review[];

    // [NEW] Expert Photography Insights
    isPhotographySpot?: boolean;
    photographyTips?: { zh: string; en: string };
}

// [NEW] Recommendation entity - represents a creator's perspective on a landmark
export interface Recommendation {
    id: string; // authorId
    author: string;
    authorNameEn?: string;
    avatar?: string;
    
    // Perspective-specific content
    pricing?: number;
    description?: string;
    descriptionEn?: string;
    tips?: string;
    duration?: string;
    coverImage?: string;
    insiderTip?: InsiderTip;
    expertStories?: ExpertStory[]; // Each recommendation can have its own stories
    tags?: string[];
    tier?: 'standard' | 'premium';
    isLocked?: boolean;
    reviews?: Review[];
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
        bestTimeEn?: string;
        externalLinks?: {
            official?: string;
            booking?: string;
        };
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
    timeLabel?: string;
    notes?: string;
    arrivalTransport?: TransportMode;
    
    // [PHASE 36] The specific recommendation selected for this schedule item
    selectedRecommendationId?: string;
    activeRecommendation?: Recommendation;

    // [NEW] Expert specific insights and human navigation
    expertNote?: string;
    expertNoteEn?: string;
    proTip?: string;
    proTipEn?: string;
    kidFriendlyTip?: string;
    kidFriendlyTipEn?: string;
    
    // [NEW] Transit specific instructions
    transitNote?: string;
    transitNoteEn?: string;

    // Legacy fields for compatibility
    insiderTip?: InsiderTip;
    lockedTeaser?: {
        image?: string;
        description: string;
    };
    day?: number; // [NEW] Optional day context for move operations
    
    // [NEW] Expert Photography Insights
    isPhotographySpot?: boolean;
    photographyTips?: { zh: string; en: string };

    // [NEW] Structured Facility Tags — renders as Pill Badges above expertNote
    facilityTags?: FacilityTag[];

    // [NEW] Driver Card — always Chinese; shown in detail page near the map
    driverNote?: string;

    // Deprecated in favor of Single-Path Output:
    // options?: ScheduleItem[];
    // isAlternative?: boolean;
}

export interface Review {
    id: string;
    author: string;
    authorEn?: string;
    avatar: string;
    rating: number;
    text: string;
    textEn?: string;
    date?: string;
}

export interface ChecklistItem {
    id: string;
    text: string;
    textEn?: string;
    checked: boolean;
}

export interface TemplateItem {
    id?: string; // References TravelItem.id for type 'spot'
    itemType?: 'spot' | 'insight';
    type?: string; 
    category?: string;
    description?: string;
    descriptionEn?: string;
    insightId?: string; // References CulturalInsight.id for type 'insight'
    instanceId?: string; // Support for legacy/existing templates that define it
    timeLabel?: string;
    startTime?: string;
    notes?: string;
    arrivalTransport?: TransportMode;
    insiderTip?: InsiderTip; // Added for legacy templates
    isLocked?: boolean;     // Added for legacy templates

    // [NEW] Expert specific insights and human navigation
    expertNote?: string;
    expertNoteEn?: string;
    proTip?: string;
    proTipEn?: string;
    kidFriendlyTip?: string;
    kidFriendlyTipEn?: string;
    
    // [NEW] Transit specific instructions
    transitNote?: string;
    transitNoteEn?: string;

    // Support for custom items in templates
    title?: string;
    titleEn?: string;
    duration?: string;

    // [NEW] Expert Photography Insights
    isPhotographySpot?: boolean;
    photographyTips?: { zh: string; en: string };

    // [NEW] Structured Facility Tags — renders as Pill Badges above expertNote
    facilityTags?: FacilityTag[];

    // [NEW] Added for rich custom items
    expertStories?: ExpertStory[];
    coverImage?: string;
    image?: string;

    // [NEW] Driver Card
    driverNote?: string;

    // Deprecated in favor of Single-Path Output:
    // options?: TemplateItem[];
    // isAlternative?: boolean;
}

export interface TemplateDaySchedule {
    morning: TemplateItem[];
    afternoon: TemplateItem[];
    evening: TemplateItem[];
    night: TemplateItem[];
    accommodation: TemplateItem[];
    theme?: string;
    themeEn?: string;
    themeEmoji?: string;
    energyLevel?: 'low' | 'moderate' | 'high' | 'intense';
    restReminder?: string;
    restReminderEn?: string;
    swapSuggestion?: string;
    swapSuggestionEn?: string;
    dailyTips?: Array<{
        icon: string;
        title: string;
        titleEn?: string;
        text: string;
        textEn?: string;
    }>;
    contextBar?: {
        weather?: string;
        weatherEn?: string;
        optimization?: string;
        optimizationEn?: string;
    };
    trustCard?: {
        icon: string;
        title: string;
        titleEn?: string;
        text: string;
        textEn?: string;
    };
}

export interface TemplateFullSchedule {
    [key: string]: TemplateDaySchedule;
}

export interface DaySchedule {
    morning: ScheduleItem[];
    afternoon: ScheduleItem[];
    evening: ScheduleItem[];
    night: ScheduleItem[];
    accommodation: ScheduleItem[];
    unsorted?: ScheduleItem[];
    theme?: string;               // "咖啡廳 & 文青小店"
    themeEn?: string;             // "Cafés & Indie Shops"
    themeEmoji?: string;          // "☕"
    swapSuggestion?: string;      // "咖啡廳可替換為獨立書店"
    swapSuggestionEn?: string;
    dailyTips?: Array<{
        icon: string;
        title: string;
        titleEn?: string;
        text: string;
        textEn?: string;
    }>;
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
    
    // [NEW] Expert editorial content snapshot
    authorNote?: { zh: string; en: string; };
    preparationGuide?: Array<{ title: string; titleEn?: string; text: string; textEn?: string; icon?: string; }>;
    faq?: Array<{ title: string; titleEn?: string; text: string; textEn?: string; }>;
    valueAnchor?: string;
    valueAnchorEn?: string;
    authorName?: string;
    authorAvatar?: string;
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
    role?: string;     // e.g. "Adventure Archivist"
    roleEn?: string;
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
    isHidden?: boolean; // Hides template from public discovery
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
        descriptionEn?: string;
        authorLabel?: string;
        authorLabelEn?: string;
    };
    duration: number;
    rating?: number;
    tier?: 'official' | 'creator' | 'community'; // Template tier level
    copiedCount?: number; // Number of times this template was copied/applied
    schedule: TemplateDaySchedule | TemplateFullSchedule;
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
        summaryEn?: string;
    }>;
    hiddenCount?: number;  // Number of hidden/locked items
    
    // [NEW] Versioning & Maintenance
    version?: string;       // e.g. "2026.1 春季限定版"
    versionEn?: string;     // e.g. "2026.1 Spring Ed."
    lastUpdated?: string;   // e.g. "2026-04-18"

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
    // [NEW] Author Story — personal narrative from template creator
    authorStory?: {
        zh: string;
        en: string;
    };
    // [NEW] Expert-led Pre-trip Guidance (Magazine-style Teasers)
    preparationGuide?: Array<{
        title: string;
        titleEn?: string;
        text: string;
        textEn?: string;
        icon?: string; // Lucide icon name or emoji
    }>;
    // [PHASE 1] FAQ — "Know Before You Go" critical info
    faq?: Array<{
        title: string;
        titleEn?: string;
        text: string;
        textEn?: string;
    }>;

    // [NEW] Advanced Editorial Fields (Fig. 3 & 7 style)
    badges?: string[];        // e.g. ['一日遊', '含米其林推薦']
    badgesEn?: string[];
    subLocations?: string[];  // e.g. ['迪化街', '大稻埕']
    subLocationsEn?: string[];
    valueAnchor?: string;     // [NEW] High-conversion value proposition
    valueAnchorEn?: string;
    customStats?: TemplateStat[]; // 4 items for the premium horizontal bar (Fig. 7)
    valueProps?: Array<{
        zh: string;
        en: string;
        descZh: string;
        descEn: string;
    }>;
    culturalInsights?: CulturalInsight[]; // [PHASE 2] Cultural Flashcards for food/etiquette guides
}

// [NEW] Interface for custom template statistics (Fig. 7)
export interface TemplateStat {
    icon?: string;          // Lucide icon name or Emoji
    value: string;         // e.g. "全天" or "$800-1,500"
    valueEn?: string;      
    label: string;         // e.g. "行程時長" or "預估花費"
    labelEn?: string;
    subLabel?: string;     // e.g. "07:00-23:00" or "起點捷運"
    subLabelEn?: string;
    color?: string;        // custom icon background color
}

// [NEW] Cultural Insight structure for "Cultural Flashcards" (文化閃卡)
export interface CulturalInsight {
    id: string;
    regionId: string;      // 'taipei', 'taichung'
    regionCode: string;    // 'TW'
    regionName: string;    // 'Taipei', 'Taichung'
    category: string;      // '台灣限定奇景' | '台灣最著名奇景'
    categoryEn?: string;
    title: string;
    titleEn?: string;
    emoji: string;
    content: string;
    contentEn?: string;
    foreignerReaction: string;
    foreignerReactionEn?: string;
    backgroundColor?: string;
    coverImage?: string;
}

