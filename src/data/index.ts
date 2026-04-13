// Data Layer - 統一導出
// 所有資料模組從這裡統一導出，方便其他檔案引用

export { TRANSLATIONS } from './translations';
export { ALL_REGIONAL_ASSETS as SAMPLE_ASSETS, TAIWAN_ASSETS, TAIPEI_ASSETS, TAINAN_ASSETS, HUALIEN_ASSETS, TAICHUNG_ASSETS, KAOHSIUNG_ASSETS, CHIAYI_ASSETS, NANTOU_ASSETS } from './assets';
export { ALL_SUGGESTIONS } from './suggestions';
export { SAMPLE_CREATORS } from './creators';
import { TEMPLATES as ALL_TEMPLATES } from './templates';
export const TEMPLATES = ALL_TEMPLATES.filter(t => !t.isHidden);
export { REGIONS, getRegion, getGradient, getRegionEmoji, getRegionName, getRegionCurrency, getRegionExchangeRate, getRegionsByCountry } from './regions';
export {
    REGION_DEFAULT_CHECKLISTS,
    TAIPEI_DEMO_PLAN,
    TOKYO_DEMO_PLAN,
    MELBOURNE_PAST_PLAN,
    CATEGORY_FILTERS,
    REGION_FILTERS,
    CITY_FILTERS,
    COUNTRY_FILTERS,
    POPULAR_TAGS
} from './demo-plan';
export { CULTURAL_WONDERS } from './assets/taiwan/wonders';
