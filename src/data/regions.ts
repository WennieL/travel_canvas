import { RegionConfig } from '../types';

/**
 * Centralised Region configuration.
 * Adding a new city = adding ONE entry here. No switch/case anywhere.
 */
export const REGIONS: RegionConfig[] = [
    // ── Asia › Japan ──────────────────────────────────────
    {
        id: 'tokyo',
        name: '東京',
        nameEn: 'Tokyo',
        emoji: '🗼',
        continent: 'asia',
        country: 'japan',
        gradient: 'from-indigo-500 via-purple-500 to-pink-500',
        heroEmoji: '🗼',
        currency: 'JPY',
        exchangeRate: 0.21, // 1 JPY ≈ 0.21 TWD
    },
    {
        id: 'osaka',
        name: '大阪',
        nameEn: 'Osaka',
        emoji: '🏯',
        continent: 'asia',
        country: 'japan',
        gradient: 'from-orange-500 via-red-500 to-pink-500',
        heroEmoji: '🏯',
        currency: 'JPY',
        exchangeRate: 0.21,
    },
    {
        id: 'kyoto',
        name: '京都',
        nameEn: 'Kyoto',
        emoji: '⛩️',
        continent: 'asia',
        country: 'japan',
        gradient: 'from-emerald-600 via-teal-500 to-cyan-500',
        heroEmoji: '⛩️',
        currency: 'JPY',
        exchangeRate: 0.21,
    },

    // ── Asia › Taiwan ─────────────────────────────────────
    {
        id: 'taipei',
        name: '台北',
        nameEn: 'Taipei',
        emoji: '🇹🇼',
        continent: 'asia',
        country: 'taiwan',
        gradient: 'from-teal-500 to-emerald-500',
        heroEmoji: '🏙️',
        currency: 'TWD',
        exchangeRate: 1,
    },
    {
        id: 'tainan',
        name: '台南',
        nameEn: 'Tainan',
        emoji: '🏛️',
        continent: 'asia',
        country: 'taiwan',
        gradient: 'from-amber-500 via-orange-400 to-yellow-400',
        heroEmoji: '🏛️',
        currency: 'TWD',
        exchangeRate: 1,
    },
    {
        id: 'taichung',
        name: '台中',
        nameEn: 'Taichung',
        emoji: '☕',
        continent: 'asia',
        country: 'taiwan',
        gradient: 'from-rose-400 via-fuchsia-500 to-indigo-500',
        heroEmoji: '☕',
        currency: 'TWD',
        exchangeRate: 1,
    },
    {
        id: 'hualien',
        name: '花蓮',
        nameEn: 'Hualien',
        emoji: '🌊',
        continent: 'asia',
        country: 'taiwan',
        gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
        heroEmoji: '🌊',
        currency: 'TWD',
        exchangeRate: 1,
    },

    // ── Oceania › Australia ────────────────────────────────
    {
        id: 'melbourne',
        name: '墨爾本',
        nameEn: 'Melbourne',
        emoji: '☕',
        continent: 'oceania',
        country: 'australia',
        gradient: 'from-amber-500 via-orange-500 to-red-500',
        heroEmoji: '☕',
        currency: 'AUD',
        exchangeRate: 20.5, // 1 AUD ≈ 20.5 TWD
    },
];

// ── Helper functions (replace all switch/case statements) ──

/** Find a region config by ID */
export const getRegion = (id: string): RegionConfig | undefined =>
    REGIONS.find(r => r.id === id);

/** Get gradient classes for a region, with fallback */
export const getGradient = (id: string): string =>
    getRegion(id)?.gradient || 'from-gray-400 to-slate-500';

/** Get emoji for a region, with fallback */
export const getRegionEmoji = (id: string): string =>
    getRegion(id)?.emoji || '🌏';

/** Get region display name (respects language) */
export const getRegionName = (id: string, lang: 'zh' | 'en' = 'zh'): string => {
    const region = getRegion(id);
    if (!region) return id;
    return lang === 'en' ? region.nameEn : region.name;
};

/** Get currency for a region */
export const getRegionCurrency = (id: string): string =>
    getRegion(id)?.currency || 'TWD';

/** Get currency symbol for a region */
export const getCurrencySymbol = (regionId?: string): string => {
    if (!regionId) return '¥'; // Default fallback
    const currency = getRegionCurrency(regionId);
    switch (currency) {
        case 'AUD': return '$';
        case 'JPY': return '¥';
        case 'TWD': return 'NT$';
        case 'USD': return '$';
        default: return '$';
    }
};

/** Get exchange rate for a region */
export const getRegionExchangeRate = (id: string): number =>
    getRegion(id)?.exchangeRate || 1;

/** Filter regions by country */
export const getRegionsByCountry = (country: string): RegionConfig[] =>
    REGIONS.filter(r => r.country === country);

/** Filter regions by continent */
export const getRegionsByContinent = (continent: string): RegionConfig[] =>
    REGIONS.filter(r => r.continent === continent);

/** Get all unique countries */
export const getCountries = (): string[] =>
    [...new Set(REGIONS.map(r => r.country))];
