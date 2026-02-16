import { ChecklistItem, Plan, ItemType, Region } from '../types';

// 預設清單 (通用)
export const DEFAULT_CHECKLIST: Record<string, ChecklistItem[]> = {
    zh: [
        { id: 'c1', text: '確認護照效期 (至少6個月)', checked: false },
        { id: 'c2', text: '購買旅遊保險', checked: false },
        { id: 'c3', text: '預訂網卡 / Wi-Fi 機', checked: false },
        { id: 'c4', text: '確認機票與住宿憑證', checked: false },
    ],
    en: [
        { id: 'c1', text: 'Check passport validity (at least 6 months)', checked: false },
        { id: 'c2', text: 'Buy travel insurance', checked: false },
        { id: 'c3', text: 'Book eSIM / Wi-Fi machine', checked: false },
        { id: 'c4', text: 'Confirm flight & hotel vouchers', checked: false },
    ]
};

// 地區專屬預設清單
export const REGION_DEFAULT_CHECKLISTS: Record<Region, Record<string, ChecklistItem[]>> = {
    tokyo: {
        zh: [
            ...DEFAULT_CHECKLIST.zh,
            { id: 'tokyo_1', text: '辦理 Suica / Pasmo 卡', checked: false },
            { id: 'tokyo_2', text: '購買東京景點套票 (如 Disney)', checked: false },
            { id: 'tokyo_3', text: '下載 Visit Japan Web 並填寫申報', checked: false },
            { id: 'tokyo_4', text: '兌換日圓現金', checked: false },
        ],
        en: [
            ...DEFAULT_CHECKLIST.en,
            { id: 'tokyo_1', text: 'Get Suica / Pasmo card', checked: false },
            { id: 'tokyo_2', text: 'Buy Tokyo attraction tickets (e.g. Disney)', checked: false },
            { id: 'tokyo_3', text: 'Complete Visit Japan Web declaration', checked: false },
            { id: 'tokyo_4', text: 'Exchange JPY cash', checked: false },
        ]
    },
    osaka: {
        zh: [
            ...DEFAULT_CHECKLIST.zh,
            { id: 'osaka_1', text: '購買大阪周遊卡 (Osaka Amazing Pass)', checked: false },
            { id: 'osaka_2', text: '預訂環球影城 (USJ) 門票 & 快速通關', checked: false },
            { id: 'osaka_3', text: '下載 Visit Japan Web 並填寫申報', checked: false },
            { id: 'osaka_4', text: '兌換日圓現金', checked: false },
        ],
        en: [
            ...DEFAULT_CHECKLIST.en,
            { id: 'osaka_1', text: 'Buy Osaka Amazing Pass', checked: false },
            { id: 'osaka_2', text: 'Book USJ tickets & Express Pass', checked: false },
            { id: 'osaka_3', text: 'Complete Visit Japan Web declaration', checked: false },
            { id: 'osaka_4', text: 'Exchange JPY cash', checked: false },
        ]
    },
    kyoto: {
        zh: [
            ...DEFAULT_CHECKLIST.zh,
            { id: 'kyoto_1', text: '購買關西地區鐵路周遊券', checked: false },
            { id: 'kyoto_2', text: '查詢京都巴士一日券/IC卡儲值', checked: false },
            { id: 'kyoto_3', text: '預訂知名和服體驗', checked: false },
            { id: 'kyoto_4', text: '下載 Visit Japan Web 並填寫申報', checked: false },
            { id: 'kyoto_5', text: '兌換日圓現金', checked: false },
        ],
        en: [
            ...DEFAULT_CHECKLIST.en,
            { id: 'kyoto_1', text: 'Buy Kansai Area Railway Pass', checked: false },
            { id: 'kyoto_2', text: 'Check Kyoto Bus Pass / IC card', checked: false },
            { id: 'kyoto_3', text: 'Book Kimono experience', checked: false },
            { id: 'kyoto_4', text: 'Complete Visit Japan Web declaration', checked: false },
            { id: 'kyoto_5', text: 'Exchange JPY cash', checked: false },
        ]
    },
    melbourne: {
        zh: [
            ...DEFAULT_CHECKLIST.zh,
            { id: 'mel_1', text: '申請澳洲電子簽證 (ETA)', checked: false },
            { id: 'mel_2', text: '註冊我的公車卡 (Myki)', checked: false },
            { id: 'mel_3', text: '購買八公分轉接頭 (澳洲規格)', checked: false },
            { id: 'mel_4', text: '兌換澳幣 (AUD)', checked: false },
        ],
        en: [
            ...DEFAULT_CHECKLIST.en,
            { id: 'mel_1', text: 'Apply for Australian ETA (Visa)', checked: false },
            { id: 'mel_2', text: 'Get Myki Card (Public Transport)', checked: false },
            { id: 'mel_3', text: 'Buy AU Power Adapter', checked: false },
            { id: 'mel_4', text: 'Exchange AUD cash', checked: false },
        ]
    },
    all: { zh: DEFAULT_CHECKLIST.zh, en: DEFAULT_CHECKLIST.en }
};

// 東京 Demo 計畫
export const TOKYO_DEMO_PLAN: Plan = {
    id: 'tokyo-demo',
    name: '東京初心者 4 日遊',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 3 * 86400000).toISOString().split('T')[0],
    totalDays: 4,
    checklist: [
        { id: 'c1', text: '確認護照效期 (至少6個月)', checked: false },
        { id: 'c2', text: '購買東京迪士尼門票', checked: true },
        { id: 'c3', text: '辦理 Suica/Pasmo 卡', checked: false },
        { id: 'c4', text: '預訂 eSIM / Pocket WiFi', checked: true },
        { id: 'c5', text: '確認機票與住宿', checked: true }
    ],
    createdAt: Date.now(),
    region: 'tokyo',
    schedule: {
        'Day 1': {
            morning: [
                { id: 't1', instanceId: 'i1', title: '抵達成田/羽田機場', titleEn: 'Arrival at Narita/Haneda', type: 'transport', startTime: '10:00', duration: '1.5hr', price: 3000, description: '搭乘 Skyliner 或 NEX 前往市中心。', descriptionEn: 'Take Skyliner or NEX to city center.', lat: 35.7719, lng: 140.3907, region: 'tokyo' }
            ],
            afternoon: [
                { id: 't2', instanceId: 'i2', title: '飯店入住', titleEn: 'Hotel Check-in', type: 'hotel', startTime: '14:00', duration: '1hr', price: 0, description: '放行李、稍作休息。', descriptionEn: 'Drop luggage and freshen up.', address: 'Shibuya Stream Excel Hotel', lat: 35.6569, lng: 139.7029, region: 'tokyo' },
                {
                    id: 't3',
                    instanceId: 'i3',
                    title: '澀谷十字路口',
                    titleEn: 'Shibuya Crossing',
                    type: 'attraction',
                    startTime: '15:30',
                    duration: '1hr',
                    price: 0,
                    image: '🚶',
                    description: '世界最繁忙的十字路口。',
                    descriptionEn: 'The world\'s busiest and most famous pedestrian crossing.',
                    lat: 35.6595, lng: 139.7005,
                    arrivalTransport: 'walk',
                    region: 'tokyo',
                    tags: ['必去'],
                    insiderTip: {
                        teaser: '最佳高空拍攝位',
                        teaserEn: 'Best aerial photo spot',
                        full: {
                            story: 'MAGNET 頂樓觀景台比星巴克更高更廣，而且通常比較不擁擠。可以用高層角度俯覽整個十字路口的震撼。',
                            storyEn: 'The MAGNET rooftop deck is higher and wider than Starbucks, and usually less crowded. Get a stunning aerial view of the entire crossing.',
                            exactLocation: 'MAGNET by SHIBUYA109 頂樓',
                            exactLocationEn: 'MAGNET by SHIBUYA109 rooftop',
                            mustTry: '錄一段縮時攝影',
                            mustTryEn: 'Record a time-lapse video',
                            avoid: '不要在十字路口中央長時間逗留',
                            avoidEn: 'Don\'t linger in the middle of the crossing',
                            bestTime: '17:00-18:30'
                        }
                    }
                },
                { id: 't4', instanceId: 'i4', title: '忠犬八公像', titleEn: 'Hachiko Statue', type: 'attraction', startTime: '16:45', duration: '30m', price: 0, image: '🐕', description: '澀谷最有名的地標，忠犬八公的銅像。', descriptionEn: 'Meeting point for locals. The loyal dog statue.', lat: 35.6590, lng: 139.7004, arrivalTransport: 'walk', region: 'tokyo' }
            ],
            evening: [
                { id: 't5', instanceId: 'i5', title: '澀谷美食街', titleEn: 'Shibuya Food Street', type: 'food', startTime: '18:00', duration: '1.5hr', price: 3000, image: '🍜', description: '一蘭拉麵或在地居酒屋，隨你選！', descriptionEn: 'Try Ichiran Ramen or local Izakaya.', tips: 'Avoid rush hour after 6pm if you hate crowds.', lat: 35.6603, lng: 139.6994, arrivalTransport: 'walk', region: 'tokyo' }
            ],
            night: [
                { id: 't6', instanceId: 'i6', title: '驚安殿堂 唐吉訶德', titleEn: 'Mega Don Quijote', type: 'attraction', startTime: '20:00', duration: '1hr', price: 5000, image: '🛍️', description: '免稅購物天堂，24 小時營業！', descriptionEn: 'Tax-free shopping paradise.', funFact: 'Open 24 hours!', lat: 35.6598, lng: 139.6976, arrivalTransport: 'walk', region: 'tokyo' }
            ],
            accommodation: [
                { id: 't7', instanceId: 'i7', title: '澀谷 Stream Excel 飯店', titleEn: 'Shibuya Stream Excel Hotel', type: 'hotel', startTime: '22:00', duration: 'Overnight', price: 25000, image: '🏨', description: '直通車站，交通超便利。', descriptionEn: 'Directly connected to the station.', lat: 35.6569, lng: 139.7029, region: 'tokyo' }
            ]
        },
        'Day 2': {
            morning: [
                {
                    id: 'd2-1',
                    instanceId: 'i2-1',
                    title: '淺草寺',
                    titleEn: 'Senso-ji Temple',
                    type: 'attraction',
                    startTime: '09:00',
                    duration: '2hr',
                    price: 0,
                    image: '⛩️',
                    description: '東京最古老的寺廟，雷門必拍！',
                    descriptionEn: 'Tokyo\'s oldest temple. Iconic Kaminarimon gate.',
                    lat: 35.7147, lng: 139.7967,
                    arrivalTransport: 'public',
                    region: 'tokyo',
                    tags: ['必去'],
                    insiderTip: {
                        teaser: '早起鳥的秘密風景',
                        teaserEn: 'Early bird secret view',
                        full: {
                            story: '清晨 7 點前抵達，仲見世通的鐵捲門彩繪還沒拉上去，是只有早鳥才能看見的浮世繪卷。',
                            storyEn: 'Arrive before 7 AM and you\'ll see the painted shutters of Nakamise-dori before they roll up — a ukiyo-e scene only early birds witness.',
                            exactLocation: '雷門後方仲見世通',
                            exactLocationEn: 'Nakamise-dori, behind Kaminarimon Gate',
                            mustTry: '現烤人形燒',
                            mustTryEn: 'Freshly baked ningyo-yaki',
                            avoid: '避開中午人潮最高峰',
                            avoidEn: 'Avoid the noon peak crowds',
                            bestTime: '07:00 以前'
                        }
                    }
                }
            ],
            afternoon: [
                { id: 'd2-2', instanceId: 'i2-2', title: '仲見世商店街', titleEn: 'Nakamise Shopping Street', type: 'food', startTime: '11:30', duration: '1.5hr', price: 2000, image: '🍡', description: '街邊美食天堂！必吃菠蘿麵包。', descriptionEn: 'Street food heaven. Try the melon pan.', lat: 35.7125, lng: 139.7966, arrivalTransport: 'walk', region: 'tokyo' },
                { id: 'd2-3', instanceId: 'i2-3', title: '隅田公園', titleEn: 'Sumida Park', type: 'attraction', startTime: '13:30', duration: '1hr', price: 0, image: '🌳', description: '眺望東京晴空塔的絕佳地點。', descriptionEn: 'Great view of Tokyo Skytree.', lat: 35.7131, lng: 139.8005, arrivalTransport: 'walk', region: 'tokyo' },
                {
                    id: 'd2-4',
                    instanceId: 'i2-4',
                    title: '東京晴空塔',
                    titleEn: 'Tokyo Skytree',
                    type: 'attraction',
                    startTime: '15:00',
                    duration: '2hr',
                    price: 3500,
                    image: '🗼',
                    description: '日本最高塔，壯麗的都市景觀。',
                    descriptionEn: 'Tallest tower in Japan. Stunning views.',
                    lat: 35.7100, lng: 139.8107,
                    arrivalTransport: 'public',
                    region: 'tokyo',
                    tags: ['地標'],
                    insiderTip: {
                        teaser: '預約購票省時攻略',
                        teaserEn: 'Skip-the-line ticket tips',
                        full: {
                            story: '假日排隊可能超過 1 小時，建議提前在網上購買指定時段的門券，直接掃碼進場。',
                            storyEn: 'Weekend queues can exceed 1 hour. Buy time-slot tickets online in advance and scan to enter directly.',
                            exactLocation: '東京晴空塔 4F 入口',
                            exactLocationEn: 'Tokyo Skytree 4F Entrance',
                            mustTry: '450F 的天望迴廊',
                            mustTryEn: 'The Tembo Galleria on 450F',
                            avoid: '週末下午',
                            avoidEn: 'Weekend afternoons',
                            bestTime: '平日傍晚'
                        }
                    }
                }
            ],
            evening: [
                { id: 'd2-5', instanceId: 'i2-5', title: '月島文字燒晚餐', titleEn: 'Monjayaki Dinner', type: 'food', startTime: '18:00', duration: '1.5hr', price: 2500, image: '🥘', description: '東京特色美食！在月島品嘗正宗文字燒。', descriptionEn: 'Tokyo specialty pancake.', address: 'Tsukishima', lat: 35.6646, lng: 139.7810, arrivalTransport: 'public', region: 'tokyo' }
            ],
            night: [],
            accommodation: [
                { id: 't7', instanceId: 'i7-2', title: '澀谷 Stream Excel 飯店', titleEn: 'Shibuya Stream Excel Hotel', type: 'hotel', startTime: '22:00', duration: 'Overnight', price: 25000, image: '🏨', description: '直通車站，交通超便利。', descriptionEn: 'Directly connected to the station.', lat: 35.6569, lng: 139.7029, region: 'tokyo' }
            ]
        },
        'Day 3': {
            morning: [
                {
                    id: 'd3-1',
                    instanceId: 'i3-1',
                    title: '築地場外市場',
                    titleEn: 'Tsukiji Outer Market',
                    type: 'food',
                    startTime: '08:00',
                    duration: '2hr',
                    price: 4000,
                    image: '🍣',
                    description: '新鮮海鮮早餐天堂！',
                    descriptionEn: 'Fresh seafood breakfast.',
                    lat: 35.6654, lng: 139.7706,
                    arrivalTransport: 'public',
                    region: 'tokyo',
                    tags: ['海鮮'],
                    insiderTip: {
                        teaser: '內行人的玉子燒推薦',
                        teaserEn: 'Insider tamagoyaki recommendation',
                        full: {
                            story: '丸武玉子燒是必點，現場現做的最軟嫩。如果要吃壽司，找巷子裡的小店。',
                            storyEn: 'Marutake tamagoyaki is a must-try — freshly made on the spot, incredibly fluffy. For sushi, explore the smaller shops in the alleys.',
                            exactLocation: '築地場外市場',
                            exactLocationEn: 'Tsukiji Outer Market',
                            mustTry: '丸武玉子燒',
                            mustTryEn: 'Marutake Tamagoyaki',
                            avoid: '太晚去很多名店會賣完',
                            avoidEn: 'Going too late — popular shops sell out early',
                            bestTime: '07:30 以前'
                        }
                    }
                }
            ],
            afternoon: [
                {
                    id: 'd3-2',
                    instanceId: 'i3-2',
                    title: 'TeamLab Planets 數位藝術館',
                    titleEn: 'TeamLab Planets',
                    type: 'attraction',
                    startTime: '11:00',
                    duration: '2hr',
                    price: 3800,
                    image: '✨',
                    description: '沉浸式數位藝術美術館，赤腳體驗。',
                    descriptionEn: 'Immersive digital art museum. You walk barefoot.',
                    lat: 35.6465, lng: 139.7877,
                    arrivalTransport: 'public',
                    region: 'tokyo',
                    tags: ['藝術'],
                    insiderTip: {
                        teaser: '著裝與拍攝攻略',
                        teaserEn: 'Dress code & photo tips',
                        full: {
                            story: '館內有水深及膝的區域，建議穿著容易捲起褲管的褲子。地板常有鏡面，穿裙子者館內提供免費租借的短褲。',
                            storyEn: 'Some areas have knee-deep water. Wear easy-to-roll-up pants. Floors are mirrored, so skirt-wearers can borrow free shorts inside.',
                            exactLocation: '豐洲 (Toyosu)',
                            exactLocationEn: 'Toyosu area',
                            mustTry: '與水的互動區域',
                            mustTryEn: 'The interactive water zone',
                            avoid: '穿長裙或不方便捲褲管的衣服',
                            avoidEn: 'Wearing long skirts or pants that can\'t be rolled up',
                            bestTime: '提早預約時段'
                        }
                    }
                },
                {
                    id: 'd3-3',
                    instanceId: 'i3-3',
                    title: '台場鋼彈基地',
                    titleEn: 'Odaiba Gundam Base',
                    type: 'attraction',
                    startTime: '14:00',
                    duration: '2hr',
                    price: 0,
                    image: '🤖',
                    description: '1:1 實物大鋼彈，定時變形秀。',
                    descriptionEn: 'Giant Unicorn Gundam statue transforms at specific times.',
                    lat: 35.6243, lng: 139.7754,
                    arrivalTransport: 'public',
                    region: 'tokyo',
                    tags: ['動漫'],
                    insiderTip: {
                        teaser: '變形秀時間表',
                        teaserEn: 'Transformation show schedule',
                        full: {
                            story: '每天定時會有變形秀，配合燈光與音樂，絕對是鋼彈迷不可錯過的盛事。',
                            storyEn: 'Daily scheduled transformation shows with lights and music — an absolute must for Gundam fans.',
                            exactLocation: 'Diver City Tokyo Plaza',
                            exactLocationEn: 'Diver City Tokyo Plaza',
                            mustTry: '在特定場次看變身',
                            mustTryEn: 'Watch the transformation during scheduled shows',
                            avoid: '戶外夏天可能很曬',
                            avoidEn: 'It can be very hot outdoors in summer',
                            bestTime: '晚上場次最有氣氛'
                        }
                    }
                }
            ],
            evening: [
                { id: 'd3-4', instanceId: 'i3-4', title: '彩虹大橋夜景', titleEn: 'Rainbow Bridge View', type: 'attraction', startTime: '17:30', duration: '1hr', price: 0, image: '🌉', description: '東京灣浪漫夜景，必拍！', descriptionEn: 'Romantic night view of Tokyo Bay.', lat: 35.6340, lng: 139.7637, arrivalTransport: 'walk', region: 'tokyo' }
            ],
            night: [],
            accommodation: [
                { id: 't7', instanceId: 'i7-3', title: '澀谷 Stream Excel 飯店', titleEn: 'Shibuya Stream Excel Hotel', type: 'hotel', startTime: '22:00', duration: 'Overnight', price: 25000, image: '🏨', description: '直通車站，交通超便利。', descriptionEn: 'Directly connected to the station.', lat: 35.6569, lng: 139.7029, region: 'tokyo' }
            ]
        },
        'Day 4': {
            morning: [
                {
                    id: 'd4-1',
                    instanceId: 'i4-1',
                    title: '明治神宮',
                    titleEn: 'Meiji Jingu Shrine',
                    type: 'attraction',
                    startTime: '09:00',
                    duration: '1.5hr',
                    price: 0,
                    image: '🌲',
                    description: '都市中的森林綠洲，祭祀明治天皇。',
                    descriptionEn: 'Peaceful forest oasis in the city.',
                    lat: 35.6763, lng: 139.6993,
                    arrivalTransport: 'public',
                    region: 'tokyo',
                    tags: ['神社', '森林'],
                    insiderTip: {
                        teaser: '正確參拜方式 + 隱藏版清酒牆',
                        teaserEn: 'Proper worship etiquette + hidden sake wall',
                        full: {
                            story: '進入鳥居前記得微微鞠躬，走在參道兩側（中間是給神走的）。本殿旁有一面「奉納酒」牆，非常好拍。',
                            storyEn: 'Bow slightly before entering the torii gate. Walk on the sides of the path (the center is for the gods). Near the main hall, there\'s a stunning sake barrel wall — great for photos.',
                            exactLocation: '參道走到底左轉',
                            exactLocationEn: 'Turn left at the end of the main path',
                            mustTry: '購買「開運木鈴」',
                            mustTryEn: 'Buy a wooden bell charm ("Kaiun Kisuzu")',
                            avoid: '不可在神社內大聲喧嘩',
                            avoidEn: 'No loud talking inside the shrine',
                            bestTime: '08:00-09:00'
                        }
                    }
                }
            ],
            afternoon: [
                { id: 'd4-2', instanceId: 'i4-2', title: '原宿竹下通', titleEn: 'Harajuku Takeshita St.', type: 'attraction', startTime: '11:00', duration: '2hr', price: 2000, image: '🎀', description: '可愛時尚與甜點天堂！', descriptionEn: 'Kawaii fashion and crepes.', lat: 35.6716, lng: 139.7030, arrivalTransport: 'walk', region: 'tokyo' },
                { id: 'd4-3', instanceId: 'i4-3', title: '表參道逛街', titleEn: 'Omotesando Shopping', type: 'attraction', startTime: '13:30', duration: '2hr', price: 0, image: '👜', description: '名牌精品與建築巡禮。', descriptionEn: 'Luxury brands and cool architecture.', lat: 35.6654, lng: 139.7109, arrivalTransport: 'walk', region: 'tokyo' }
            ],
            evening: [
                { id: 'd4-4', instanceId: 'i4-4', title: '回程航班', titleEn: 'Return Flight', type: 'transport', startTime: '17:00', duration: '2hr', price: 2000, image: '✈️', description: '前往成田/羽田機場。', descriptionEn: 'Heading to Narita/Haneda airport.', lat: 35.5522, lng: 139.7799, arrivalTransport: 'public', region: 'tokyo' }
            ],
            night: [],
            accommodation: []
        }
    }
};

// 分類過濾器
export const CATEGORY_FILTERS: { id: 'all' | ItemType; label: string; labelEn: string; icon: string; color: string }[] = [
    { id: 'all', label: '全部', labelEn: 'All', icon: '🎨', color: 'bg-orange-500' },
    { id: 'attraction', label: 'attraction', labelEn: 'Attractions', icon: '📍', color: 'bg-blue-500' },
    { id: 'food', label: 'food', labelEn: 'Food', icon: '🍰', color: 'bg-pink-500' },
    { id: 'hotel', label: 'hotel', labelEn: 'Hotel', icon: '🏨', color: 'bg-purple-500' },
    { id: 'transport', label: 'transport', labelEn: 'Transport', icon: '🚆', color: 'bg-teal-500' },
    { id: 'shopping', label: 'shopping', labelEn: 'Shopping', icon: '🛍️', color: 'bg-yellow-500' },
    { id: 'nature', label: 'nature', labelEn: 'Nature', icon: '🌲', color: 'bg-green-500' },
    { id: 'custom', label: 'custom', labelEn: 'Custom', icon: '✨', color: 'bg-indigo-500' },
];

// 地區過濾器 - 兩層結構：國家 → 城市
export const COUNTRY_FILTERS = [
    { id: 'all', label: '全部', labelEn: 'All', icon: '🌏' },
    { id: 'japan', label: '日本', labelEn: 'Japan', icon: '🇯🇵' },
    { id: 'australia', label: '澳洲', labelEn: 'Australia', icon: '🇦🇺' },
];

export const CITY_FILTERS: Record<string, { id: Region; label: string; labelEn: string; icon: string }[]> = {
    japan: [
        { id: 'tokyo', label: '東京', labelEn: 'Tokyo', icon: '🗼' },
        { id: 'osaka', label: '大阪', labelEn: 'Osaka', icon: '🏯' },
        { id: 'kyoto', label: '京都', labelEn: 'Kyoto', icon: '⛩️' },
    ],
    australia: [
        { id: 'melbourne', label: '墨爾本', labelEn: 'Melbourne', icon: '☕' },
    ],
};

// Legacy support - keep REGION_FILTERS for backwards compatibility
export const REGION_FILTERS: { id: Region; label: string; labelEn: string; icon: string }[] = [
    { id: 'all', label: '全部', labelEn: 'All', icon: '🌏' },
    { id: 'tokyo', label: '東京', labelEn: 'Tokyo', icon: '🗼' },
    { id: 'osaka', label: '大阪', labelEn: 'Osaka', icon: '🏯' },
    { id: 'kyoto', label: '京都', labelEn: 'Kyoto', icon: '⛩️' },
    { id: 'melbourne', label: '墨爾本', labelEn: 'Melbourne', icon: '☕' },
];

// 熱門標籤
export const POPULAR_TAGS: { id: string; label: string; labelEn: string; icon: string }[] = [
    { id: '必去', label: '必去', labelEn: 'Must-visit', icon: '⭐' },
    { id: '美食', label: '美食', labelEn: 'Food', icon: '🍜' },
    { id: '親子', label: '親子', labelEn: 'Family', icon: '👨‍👩‍👧' },
    { id: '夜景', label: '夜景', labelEn: 'Night View', icon: '🌃' },
    { id: '免費', label: '免費', labelEn: 'Free', icon: '🆓' },
    { id: '打卡', label: '打卡', labelEn: 'Insta-worthy', icon: '📸' },
    { id: '動漫', label: '動漫', labelEn: 'Anime', icon: '🎌' },
];
