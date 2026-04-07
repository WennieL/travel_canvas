import { TravelItem } from '../../types';

export const TAINAN_ASSETS: TravelItem[] = [
    {
        id: 'tn-a1',
        title: '神農街',
        titleEn: 'Shennong Street',
        type: 'attraction',
        duration: '1.5小時',
        image: '🏮',
        description: '古色古香的文創老街，每個角落都充滿故事。',
        descriptionEn: 'Vintage creative street with stories in every corner.',
        price: 0,
        address: '台南市中西區神農街',
        rating: 4.7,
        lat: 22.9983,
        lng: 120.1968,
        region: 'tainan',
        authorId: 'c-tw2',
        openingHours: '24H',
        tags: ['文青', '老街'],
        insiderTip: {
            teaser: '夜晚的神農街才是真正的魔法時刻',
            teaserEn: 'The real magic happens at night',
            full: {
                story: '白天是觀光客拍照的老街，但晚上 7 點以後才是真正的台南味。紅燈籠亮起來，文創小店變成小酒吧，在地人會出來散步。巷弄深處有一間沒招牌的老屋酒吧，只有在地人知道。',
                storyEn: 'By day it\'s a tourist street, but after 7 PM the real Tainan vibe emerges. Red lanterns glow, boutiques turn into bars, and locals come out for a stroll. There\'s an unsigned old house bar deep in the alleys.',
                exactLocation: '從海安路轉入神農街',
                exactLocationEn: 'Turn into Shennong St. from Haian Rd.',
                mustTry: '找到巷底的隱藏酒吧（門口有一盞紅燈）',
                mustTryEn: 'Find the hidden bar at the end of the alley (marked by a single red light)',
                avoid: '中午太熱不適合逛',
                avoidEn: 'Too hot to visit around noon',
                bestTime: '19:00-21:00',
                bestTimeEn: '19:00-21:00'
            }
        }
    },
    {
        id: 'tn-f1',
        title: '蜷尾家',
        titleEn: 'Ninao Gelato',
        type: 'food',
        duration: '30分',
        image: '🍦',
        description: '2015世界義式冰淇淋大賽銀牌🥈，首位華人得獎，台南正興街本店。',
        descriptionEn: 'Silver medalist at 2015 Gelato World Tour. First Chinese winner. Flagship on Zhengxing St.',
        price: 90,
        address: '台南市中西區正興街92號',
        rating: 4.8,
        lat: 22.9919,
        lng: 120.1961,
        region: 'tainan',
        authorId: 'c-tw2',
        openingHours: '12:00-18:00',
        tags: ['冰淇淋', '🏆國際得獎'],
        insiderTip: {
            teaser: '🏆 世界銀牌冰淇淋的隱藏吃法',
            teaserEn: '🏆 Secret ways to enjoy world-medal gelato',
            full: {
                story: '得獎口味「爆米香荔枝蜜紅茶」用的是阿里山蜜香紅茶 + 台灣荔枝蜂蜜 + 屏東爆米香。但在地人的秘密是：不要只點招牌，問店員「今天的隱藏口味是什麼」，每天都不一樣，而且限量。',
                storyEn: 'The award-winning flavor uses Alishan honey black tea + Taiwanese lychee honey. But locals ask for the "hidden flavor of the day" - limited and different daily.',
                exactLocation: '正興街92號，認明排隊人龍',
                exactLocationEn: 'No. 92, Zhengxing St. (Look for the queue)',
                mustTry: '當日限定口味 + 經典茶味冰淇淋',
                mustTryEn: 'Daily special + classic tea flavors',
                avoid: '假日排隊 30 分鐘起，建議平日下午 2 點去',
                avoidEn: '30+ min queue on weekends; try 2 PM on weekdays',
                bestTime: '平日 14:00',
                bestTimeEn: '14:00 weekdays'
            }
        }
    },
    {
        id: 'tn-f2',
        title: '裕農水煎包',
        titleEn: 'Yunong Pan-fried Buns',
        type: 'food',
        duration: '20分',
        image: '🥟',
        description: '一天只賣5小時的現煎水煎包，在地人真心推薦。',
        descriptionEn: 'Pan-fried buns sold only 5 hours/day. Truly local recommended.',
        price: 35,
        address: '台南市東區裕農路',
        rating: 4.6,
        lat: 22.9887,
        lng: 120.2200,
        region: 'tainan',
        authorId: 'c-tw2',
        openingHours: '14:00-19:00（賣完為止）',
        tags: ['小吃', '限時'],
        insiderTip: {
            teaser: '一天只賣 5 小時，買不到就沒了',
            teaserEn: 'Only 5 hours a day. Sold out = gone.',
            full: {
                story: '下午 2 點才開始賣，通常 5 點就賣完了。皮酥底脆，肉餡鮮甜多汁。在地人會一次買 10 個以上帶回家。記得要加辣醬，是老闆自己調的。',
                storyEn: 'Sales start at 2 PM and usually sell out by 5 PM. Crispy bottom, juicy filling. Locals often buy 10+ at a time. Be sure to add the signature house-made spicy sauce.',
                exactLocation: '裕農路上，認明排隊人龍',
                exactLocationEn: 'On Yunong Rd (Look for the queue)',
                mustTry: '水煎包 + 自製辣醬',
                mustTryEn: 'Pan-fried buns + house-made spicy sauce',
                avoid: '太早去還沒開、太晚去沒得買',
                avoidEn: 'Don\'t go too early (not open) or too late (sold out)',
                bestTime: '14:30',
                bestTimeEn: '14:30'
            }
        }
    },
    // === HOTEL ===
    {
        id: 'tn-h1',
        title: '煙波大飯店台南館',
        titleEn: 'Lakeshore Hotel Tainan',
        type: 'hotel' as const,
        duration: '0',
        image: '🏨',
        description: '中西區核心地段設計飯店，步行可達國華街與神農街。',
        descriptionEn: 'Design hotel in Tainan core area, walking distance to Guohua St. and Shennong St.',
        price: 2800,
        address: '台南市中西區',
        rating: 4.6,
        lat: 22.9933,
        lng: 120.2010,
        region: 'tainan',
        authorId: 'c-tw2',
        tags: ['住宿', '設計旅店'],
        insiderTip: {
            teaser: '走路就能到國華街和神農街',
            teaserEn: 'Walking distance to Guohua St. and Shennong St.',
            full: {
                story: '位置極佳，步行就能到台南最精華的美食區。房間設計融入台南老宅元素，早餐自助吧有在地美食。建議住高樓層可以看到台南老城區夜景。',
                storyEn: 'Prime location within walking distance of Tainan\'s best eats. Room designs incorporate local heritage elements. The breakfast buffet features Tainan specialties. Higher floors offer great old-city night views.',
                exactLocation: '中西區市中心',
                exactLocationEn: 'West Central District center',
                mustTry: '早餐自助吧的台南在地小吃',
                mustTryEn: 'The Tainan specialties at the breakfast buffet',
                avoid: '假日價格較高',
                avoidEn: 'Prices are significantly higher on weekends',
                bestTime: '入住後散步到神農街看夜景',
                bestTimeEn: 'A night walk to Shennong St after check-in'
            }
        }
    },
];
