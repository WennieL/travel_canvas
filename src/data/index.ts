// Data Layer - 統一導出
// 所有資料模組從這裡統一導出，方便其他檔案引用

export { TRANSLATIONS } from './translations';
export { ALL_REGIONAL_ASSETS as SAMPLE_ASSETS, TOKYO_ASSETS, OSAKA_ASSETS, KYOTO_ASSETS, MELBOURNE_ASSETS, TAIPEI_ASSETS, TAINAN_ASSETS, HUALIEN_ASSETS, TAICHUNG_ASSETS } from './assets';
export { ALL_SUGGESTIONS } from './suggestions';
export { SAMPLE_CREATORS } from './creators';
export { TEMPLATES } from './templates';
export { REGIONS, getRegion, getGradient, getRegionEmoji, getRegionName, getRegionCurrency, getRegionExchangeRate, getRegionsByCountry } from './regions';
export {
    REGION_DEFAULT_CHECKLISTS,
    TOKYO_DEMO_PLAN,
    CATEGORY_FILTERS,
    REGION_FILTERS,
    COUNTRY_FILTERS,
    CITY_FILTERS,
    POPULAR_TAGS
} from './demo-plan';

