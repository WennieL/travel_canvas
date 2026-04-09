import { SurvivalGuide } from '../../types';
import { TAIPEI_SURVIVAL } from './taipei';
import { TAIWAN_SURVIVAL } from './taiwan';

// [NEW] Taichung Placeholder Guide
export const TAICHUNG_SURVIVAL: SurvivalGuide = {
    regionId: 'taichung',
    topics: [
        {
            id: 'taichung-bus',
            icon: 'Bus',
            category: 'transport',
            title: '台中公車：10 公里免費',
            titleEn: 'Taichung Bus: 10km Free',
            teaser: '中部最強交通福利',
            teaserEn: 'Best local transit deal',
            content: '台中捷運目前只有一條綠線，公車是移動主力。持綁定的電子票證（悠遊卡等）搭乘台中公車，享有前 10 公里免費的優惠。這也是為什麼台中人移動幾乎不花交通費的原因。',
            contentEn: 'While Taichung has one MRT line, buses are the mainstay. With a registered card, the first 10km are free. It\'s the primary reason locals rarely pay for city transit.',
            imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800'
        }
    ]
};

// [NEW] Tainan Placeholder Guide
export const TAINAN_SURVIVAL: SurvivalGuide = {
    regionId: 'tainan',
    topics: [
        {
            id: 'tainan-food-times',
            icon: 'Clock',
            category: 'culture',
            title: '台南：早起才有牛肉湯',
            titleEn: 'Tainan: Early Beef Soup',
            teaser: '台南人的早餐時間',
            teaserEn: 'Morning ritual of locals',
            content: '台南是美食之都，但很多名店凌晨 4-5 點就開門，賣完即收。如果你想喝到最鮮甜的現宰牛肉湯，建議早點起床。另外，台南的口味偏甜，這是當地的特色，請做好味覺心理準備。',
            contentEn: 'Many iconic Tainan spots open at 4-5 AM and close once sold out. Wake up early for the freshest beef soup. Also, be prepared: Tainan cuisine is famously sweeter than the rest of Taiwan.',
            imageUrl: 'https://images.unsplash.com/photo-1582875501176-ef930e147730?auto=format&fit=crop&q=80&w=800'
        }
    ]
};

export const ALL_SURVIVAL_GUIDES: SurvivalGuide[] = [
    TAIWAN_SURVIVAL,
    TAIPEI_SURVIVAL,
    TAICHUNG_SURVIVAL,
    TAINAN_SURVIVAL
];
