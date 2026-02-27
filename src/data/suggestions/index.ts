import { TOKYO_SUGGESTIONS } from './tokyo';
import { OSAKA_SUGGESTIONS } from './osaka';
import { KYOTO_SUGGESTIONS } from './kyoto';
import { MELBOURNE_SUGGESTIONS } from './melbourne';
import { ALL_REGIONAL_ASSETS } from '../assets';
import { TravelItem, TimeSlot } from '../../types';

// ── Static suggestions (hand-curated, slot-based) ────────
const STATIC_SUGGESTIONS: Record<string, any> = {
    tokyo: TOKYO_SUGGESTIONS,
    osaka: OSAKA_SUGGESTIONS,
    kyoto: KYOTO_SUGGESTIONS,
    melbourne: MELBOURNE_SUGGESTIONS,
};

// ── Dynamic: auto-generate suggestions from SAMPLE_ASSETS for any region
//    that doesn't have hand-curated suggestions ───────────────────────────

function buildSuggestionsFromAssets(assets: TravelItem[]): Record<string, TravelItem[]> {
    // Group items by type into time slots — ensure every slot has content
    const slotMap: Record<TimeSlot, TravelItem[]> = {
        morning: [],
        afternoon: [],
        evening: [],
        night: [],
        accommodation: [],
    };

    for (const item of assets) {
        if (item.type === 'hotel') {
            slotMap.accommodation.push(item);
        } else if (item.type === 'food') {
            // Food works for any time of day
            slotMap.morning.push(item);
            slotMap.afternoon.push(item);
            slotMap.evening.push(item);
        } else if (item.type === 'nature') {
            slotMap.morning.push(item);
            slotMap.afternoon.push(item);
        } else {
            // attractions, shopping, custom — available across all active slots
            slotMap.morning.push(item);
            slotMap.afternoon.push(item);
            slotMap.evening.push(item);
            slotMap.night.push(item);
        }
    }

    return slotMap;
}

// Discover all unique region IDs from the asset pool
const regionIds = [...new Set(ALL_REGIONAL_ASSETS.map(a => a.region).filter(Boolean))] as string[];

// Build the final merged map: static + auto-generated
export const ALL_SUGGESTIONS: Record<string, any> = { ...STATIC_SUGGESTIONS };

for (const regionId of regionIds) {
    if (!ALL_SUGGESTIONS[regionId]) {
        const regionAssets = ALL_REGIONAL_ASSETS.filter(a => a.region === regionId);
        if (regionAssets.length > 0) {
            ALL_SUGGESTIONS[regionId] = buildSuggestionsFromAssets(regionAssets);
        }
    }
}

export { TOKYO_SUGGESTIONS, OSAKA_SUGGESTIONS, KYOTO_SUGGESTIONS, MELBOURNE_SUGGESTIONS };
