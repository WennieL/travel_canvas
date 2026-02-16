import { Template } from '../types';
import { SAMPLE_ASSETS } from './sample-assets';
import { MELBOURNE_ASSETS } from './melbourne-assets';

// 達人模板 - Curated for MVP Launch
export const TEMPLATES: Template[] = [
    // ===== MELBOURNE TEMPLATES (Featured) =====
    {
        id: 'mel-coffee',
        name: '墨爾本咖啡 & 巷弄文化 1 日',
        nameEn: 'Melbourne Coffee & Laneways 1-Day',
        title: '在地人帶你喝咖啡、遍巷弄',
        titleEn: 'A Local\'s Guide to Coffee & Laneways',
        coverImage: '/images/covers/melbourne.png',
        author: 'Melbourne Local',
        authorEn: 'Melbourne Local',
        authorId: 'c-mel',
        region: 'melbourne',
        tags: ['咖啡', '巷弄', '文化', '必訪'],
        tagsEn: ['Coffee', 'Laneways', 'Culture', 'Must-Visit'],
        vibes: [
            { tag: '#咖啡文化', color: 'bg-amber-100 text-amber-800' },
            { tag: '#街頭藝術', color: 'bg-purple-100 text-purple-800' },
            { tag: '#隱藏景點', color: 'bg-teal-50 text-teal-700' }
        ],
        coverStory: {
            quote: '墨爾本的咖啡不只是飲料，是一種生活方式。',
            quoteEn: 'In Melbourne, coffee isn\'t just a drink - it\'s a way of life.',
            description: '跟著在地人的腳步，從站著喝咖啡的儀式感開始，穿越塗鴉巷弄，最後在隱藏酒吧結束完美的一天。',
            authorLabel: '墨爾本在地人私房推薦'
        },
        duration: 1,
        rating: 4.9,
        tier: 'official',
        copiedCount: 0,
        price: 0.99,
        isLocked: false,
        schedule: {
            morning: [
                { ...MELBOURNE_ASSETS[0], instanceId: 'mel-c-1', startTime: '08:00', arrivalTransport: 'public' },
                { ...MELBOURNE_ASSETS[1], instanceId: 'mel-c-2', startTime: '09:30', arrivalTransport: 'walk' }
            ],
            afternoon: [
                { ...MELBOURNE_ASSETS[2], instanceId: 'mel-c-3', startTime: '11:00', arrivalTransport: 'walk' },
                { ...MELBOURNE_ASSETS[3], instanceId: 'mel-c-4', startTime: '12:30', arrivalTransport: 'walk' }
            ],
            evening: [
                { ...MELBOURNE_ASSETS[4], instanceId: 'mel-c-5', startTime: '19:00', arrivalTransport: 'public' }
            ],
            night: [],
            accommodation: []
        }
    },
    {
        id: 'mel-bars',
        name: '墨爾本隱藏酒吧巡禮',
        nameEn: 'Melbourne Hidden Bars Tour',
        title: '穿過書架、冷藏庫，探索墨爾本地下酒吧',
        titleEn: 'Behind Bookshelves & Freezers: Melbourne\'s Secret Bars',
        coverImage: '/images/covers/melbourne.png',
        author: 'Melbourne Local',
        authorEn: 'Melbourne Local',
        authorId: 'c-mel',
        region: 'melbourne',
        tags: ['酒吧', '隱藏景點', '夜生活', 'Premium'],
        tagsEn: ['Bars', 'Hidden Gems', 'Nightlife', 'Premium'],
        vibes: [
            { tag: '#禁酒時期', color: 'bg-stone-100 text-stone-800' },
            { tag: '#秘密入口', color: 'bg-rose-100 text-rose-800' },
            { tag: '#調酒藝術', color: 'bg-amber-50 text-amber-700' }
        ],
        coverStory: {
            quote: '墨爾本最好的酒吧，都藏在你找不到的地方。',
            quoteEn: 'Melbourne\'s best bars are hidden where you\'d never look.',
            description: '從書架後的禁酒時期酒吧，到冷藏庫門後的熱帶天堂。這不是普通的酒吧巡禮，而是一場城市尋寶。',
            authorLabel: '夜生活達人精選路線'
        },
        duration: 1,
        rating: 4.8,
        tier: 'creator',
        copiedCount: 0,
        price: 0.99,
        originalPrice: 4.99,
        isLocked: true,
        schedule: {
            morning: [],
            afternoon: [],
            evening: [
                { ...MELBOURNE_ASSETS[4], instanceId: 'mel-b-1', startTime: '19:00', arrivalTransport: 'public' },
                { ...MELBOURNE_ASSETS[5], instanceId: 'mel-b-2', startTime: '21:00', arrivalTransport: 'walk' }
            ],
            night: [
                { ...MELBOURNE_ASSETS[6], instanceId: 'mel-b-3', startTime: '23:00', arrivalTransport: 'public' }
            ],
            accommodation: []
        }
    },
    // ===== JAPAN TEMPLATES =====
    {
        id: 't1',
        name: '東京經典初心者 4 日遊',
        nameEn: 'Tokyo Classic Beginner 4-Day Trip',
        title: '穿越昭和時代：東京 4 日文青散策',
        titleEn: 'Through Showa Era: 4-Day Tokyo Cultural Walk',
        coverImage: '/images/covers/tokyo.png',
        author: 'TravelCanvas 編輯部',
        authorEn: 'TravelCanvas Editors',
        authorId: 'c0',
        region: 'tokyo',
        tags: ['初心者', '經典路線'],
        tagsEn: ['Beginner', 'Classic'],
        vibes: [
            { tag: '#昭和懷舊', color: 'bg-amber-100 text-amber-800' },
            { tag: '#攝影聖地', color: 'bg-stone-100 text-stone-600' },
            { tag: '#深度散步', color: 'bg-teal-50 text-teal-700' }
        ],
        coverStory: {
            quote: '如果厭倦了新宿的擁擠，這條路線帶你找回東京呼吸的節奏。',
            quoteEn: 'Tired of Shinjuku crowds? This route helps you find Tokyo\'s true rhythm.',
            description: '從下町的昭和喛茶店，到隱藏在表參道巷弄的設計師聚落。這不是觀光客的打卡行程，而是一場與東京老靈魂的對話。',
            authorLabel: '東京在地 10 年設計師推薦'
        },
        duration: 4,
        rating: 4.8,
        price: 0.99,
        tier: 'official',
        copiedCount: 1205,
        schedule: {
            morning: [
                {
                    ...SAMPLE_ASSETS[0], // 淺草寺
                    instanceId: 't1-1',
                    startTime: '07:00',
                    arrivalTransport: 'public',
                    insiderTip: {
                        teaser: '早起鳥的秘密風景',
                        teaserEn: 'Early bird secret view',
                        full: {
                            story: '在此時段抵達，仲見世通的鐵捲門彩繪還沒拉上去，是只有早鳥才能看見的浮世繪卷。',
                            storyEn: 'Arrive at this time and you\'ll see the painted shutters of Nakamise-dori.',
                            bestTime: '07:00-08:00',
                            exactLocation: '從雷門進去左手邊第三家店前',
                            mustTry: '拍攝鐵捲門上的浮世繪圖案',
                            avoid: '不要等到9點後，商店開門就看不到了'
                        }
                    }
                },
                {
                    ...SAMPLE_ASSETS[1], // 東京晴空塔
                    instanceId: 't1-1b',
                    startTime: '09:30',
                    arrivalTransport: 'walk'
                }
            ],
            afternoon: [
                {
                    ...SAMPLE_ASSETS[2], // 澀谷十字路口
                    instanceId: 't1-2',
                    startTime: '13:30',
                    arrivalTransport: 'public'
                },
                {
                    ...SAMPLE_ASSETS[3], // TeamLab Planets
                    instanceId: 't1-3',
                    startTime: '15:30',
                    arrivalTransport: 'public',
                    price: 3800
                },
                {
                    ...SAMPLE_ASSETS[4], // 明治神宮
                    instanceId: 't1-4',
                    startTime: '17:30',
                    arrivalTransport: 'public'
                }
            ],
            evening: [
                {
                    ...SAMPLE_ASSETS[6], // 一蘭拉麵
                    instanceId: 't1-5',
                    startTime: '19:00',
                    arrivalTransport: 'walk'
                }
            ],
            night: [
                {
                    ...SAMPLE_ASSETS[16], // Shibuya Sky Garden (Premium)
                    instanceId: 't1-6',
                    startTime: '21:00',
                    arrivalTransport: 'walk',
                    isLocked: true
                }
            ],
            accommodation: [
                { ...SAMPLE_ASSETS[9], instanceId: 't1-h1', startTime: '23:00', arrivalTransport: 'public' }
            ]
        }
    },
    {
        id: 't2',
        name: '東京美食吃貨之旅',
        nameEn: 'Tokyo Foodie Tour',
        title: '從築地到六本木：東京胃袋征服計畫',
        titleEn: 'From Tsukiji to Roppongi: Conquering Tokyo\'s Food Scene',
        coverImage: '/images/covers/tokyo.png',
        author: '愛吃鬼安安',
        authorEn: 'Foodie Anan',
        authorId: 'c1',
        region: 'tokyo',
        tags: ['美食', '吃貨', '必吃'],
        tagsEn: ['Foodie', 'Eat', 'Must-Try'],
        vibes: [
            { tag: '#海鮮控', color: 'bg-blue-100 text-blue-800' },
            { tag: '#燒肉天堂', color: 'bg-red-100 text-red-800' },
            { tag: '#深夜食堂', color: 'bg-amber-50 text-amber-700' }
        ],
        coverStory: {
            quote: '在東京，胃永遠不夠大，時間永遠不夠長。',
            quoteEn: 'In Tokyo, your stomach is never big enough, and time is never long enough.',
            description: '這不是普通的美食清單。從凌晨5點的築地市場，到深夜的黃金街居酒屋，帶你吃遍在地人的口袋名單。',
            authorLabel: '東京美食評論家推薦'
        },
        duration: 1,
        rating: 4.6,
        tier: 'creator',
        copiedCount: 856,
        schedule: {
            morning: [
                {
                    ...SAMPLE_ASSETS[7], // 築地場外市場
                    instanceId: 't2-1',
                    startTime: '06:00',
                    arrivalTransport: 'public'
                },
                {
                    ...SAMPLE_ASSETS[0], // 淺草寺（消化散步）
                    instanceId: 't2-1b',
                    startTime: '08:30',
                    arrivalTransport: 'public'
                }
            ],
            afternoon: [
                {
                    ...SAMPLE_ASSETS[8], // 敘敘苑燒肉
                    instanceId: 't2-2',
                    startTime: '11:30',
                    arrivalTransport: 'public',
                    insiderTip: {
                        teaser: '午餐套餐是最划算的吃法',
                        full: {
                            story: '午餐的「特選和牛套餐」¥3,800 就能吃到晚餐要 ¥15,000 以上的 A5 和牛。11:30 開門前 15 分鐘排隊，通常可以順利入場。',
                            exactLocation: '六本木店視野最好',
                            bestTime: '平日 11:15 開始排隊',
                            mustTry: '特選ハラミ + 特製醬油ダレ'
                        }
                    }
                },
                {
                    id: 'custom-cafe',
                    title: '表參道下午茶散步',
                    titleEn: 'Omotesando Cafe Hopping',
                    type: 'attraction',
                    duration: '2小時',
                    image: '☕',
                    description: '消化一下燒肉，在表參道逛逛設計師小店',
                    price: 0,
                    region: 'tokyo',
                    instanceId: 't2-3',
                    startTime: '14:30',
                    arrivalTransport: 'walk'
                }
            ],
            evening: [
                {
                    ...SAMPLE_ASSETS[6], // 一蘭拉麵
                    instanceId: 't2-4',
                    startTime: '18:00',
                    arrivalTransport: 'public'
                }
            ],
            night: [
                {
                    id: 'golden-gai',
                    title: '新宿黃金街',
                    titleEn: 'Shinjuku Golden Gai',
                    type: 'attraction',
                    duration: '2小時',
                    image: '🍺',
                    description: '超過 200 間迷你酒吧的復古巷弄',
                    price: 3000,
                    region: 'tokyo',
                    instanceId: 't2-5',
                    startTime: '21:00',
                    arrivalTransport: 'public'
                }
            ],
            accommodation: []
        }
    },
    {
        id: 't5',
        name: '京都古都靜心之旅 3 日',
        nameEn: 'Kyoto Ancient Capital 3-Day Retreat',
        title: '避開人潮的京都秘境探訪',
        titleEn: 'Escape the Crowds: Kyoto\'s Hidden Sanctuaries',
        coverImage: '/images/covers/kyoto.png',
        author: '京都慢活',
        authorEn: 'Kyoto Slow Life',
        authorId: 'c4',
        region: 'kyoto',
        tags: ['古蹟', '文化', '慢活', 'Premium'],
        tagsEn: ['Historic', 'Culture', 'Slow Travel', 'Premium'],
        vibes: [
            { tag: '#千年古都', color: 'bg-amber-100 text-amber-800' },
            { tag: '#禪意生活', color: 'bg-stone-100 text-stone-600' },
            { tag: '#抹茶文化', color: 'bg-green-100 text-green-800' }
        ],
        coverStory: {
            quote: '京都最美的風景，都藏在觀光客看不到的地方。',
            quoteEn: 'Kyoto\'s most beautiful scenery is hidden where tourists never look.',
            description: '清晨無人的竹林小徑、隱藏在町家裡的茶室、只有在地人知道的賞楓秘境。這是一趟讓心慢下來的旅程。',
            authorLabel: '京都在住者私房路線'
        },
        duration: 3,
        rating: 4.8,
        tier: 'creator',
        copiedCount: 567,
        price: 0.99,
        originalPrice: 4.99,
        isLocked: true,
        schedule: {
            morning: [
                {
                    ...SAMPLE_ASSETS[22], // 金閣寺
                    instanceId: 't5-1',
                    startTime: '09:00',
                    arrivalTransport: 'public'
                },
                {
                    ...SAMPLE_ASSETS[25], // 嵐山竹林
                    instanceId: 't5-1b',
                    startTime: '11:00',
                    arrivalTransport: 'public'
                }
            ],
            afternoon: [
                {
                    ...SAMPLE_ASSETS[23], // 清水寺
                    instanceId: 't5-2',
                    startTime: '13:00',
                    arrivalTransport: 'public'
                },
                {
                    ...SAMPLE_ASSETS[26], // 中村藤吉
                    instanceId: 't5-2b',
                    startTime: '15:30',
                    arrivalTransport: 'public'
                }
            ],
            evening: [
                {
                    ...SAMPLE_ASSETS[24], // 伏見稻荷
                    instanceId: 't5-3',
                    startTime: '17:00',
                    arrivalTransport: 'public'
                }
            ],
            night: [
                {
                    ...SAMPLE_ASSETS[27], // 村上春樹爵士吧
                    instanceId: 't5-4',
                    startTime: '20:00',
                    arrivalTransport: 'public',
                    isLocked: true
                }
            ],
            accommodation: []
        }
    },
    // ===== OSAKA TEMPLATE (NEW) =====
    {
        id: 'osaka-classic',
        name: '大阪 2 日玩樂攻略',
        nameEn: 'Osaka 2-Day Fun Guide',
        title: '吃倒在大阪：美食與樂園完美攻略',
        titleEn: 'Eat Till You Drop: The Ultimate Osaka Food & Fun Guide',
        coverImage: '/images/covers/osaka.png',
        author: 'Osaka Fun Guide',
        authorEn: 'Osaka Fun Guide',
        authorId: 'c-osaka',
        region: 'osaka',
        tags: ['美食', '樂園', '夜生活'],
        tagsEn: ['Food', 'Theme Park', 'Nightlife'],
        vibes: [
            { tag: '#吃倒大阪', color: 'bg-orange-100 text-orange-800' },
            { tag: '#環球影城', color: 'bg-blue-100 text-blue-800' },
            { tag: '#道頓堀', color: 'bg-red-100 text-red-800' }
        ],
        coverStory: {
            quote: '大阪人說：京都人穿到破，大阪人吃到倒。',
            quoteEn: 'They say: Kyoto spends on clothes, Osaka spends on food!',
            description: '從 USJ 的瘋狂冒險，到道頓堀的美食轟炸。這是一跟讓你笑著來、撐著走的大阪之旅。',
            authorLabel: '大阪在地人私房推薦'
        },
        duration: 2,
        rating: 4.7,
        tier: 'official',
        copiedCount: 432,
        price: 0.99,
        isLocked: false,
        schedule: {
            morning: [
                {
                    ...SAMPLE_ASSETS[17], // 環球影城
                    instanceId: 'osaka-1',
                    startTime: '08:00',
                    arrivalTransport: 'public'
                }
            ],
            afternoon: [
                {
                    ...SAMPLE_ASSETS[15], // 道頓堀
                    instanceId: 'osaka-2',
                    startTime: '15:00',
                    arrivalTransport: 'public'
                },
                {
                    ...SAMPLE_ASSETS[14], // 大阪城
                    instanceId: 'osaka-3',
                    startTime: '17:00',
                    arrivalTransport: 'public'
                }
            ],
            evening: [
                {
                    ...SAMPLE_ASSETS[21], // 千房大阪燒
                    instanceId: 'osaka-4',
                    startTime: '19:00',
                    arrivalTransport: 'public',
                    insiderTip: {
                        teaser: '自己煎才是大阪流',
                        full: {
                            story: '點「豪華海鮮版」，自己在鐵板上煎。不會煎沒關係，店員會教你。最後撒上大量的柴魚片 and 美乃滋，這才是正宗大阪味。',
                            mustTry: '海鮮デラックス + 焼きそば'
                        }
                    }
                }
            ],
            night: [
                {
                    ...SAMPLE_ASSETS[18], // Premium 爵士觀光船
                    instanceId: 'osaka-5',
                    startTime: '21:00',
                    arrivalTransport: 'walk',
                    isLocked: true
                }
            ],
            accommodation: [
                { ...SAMPLE_ASSETS[19], instanceId: 'osaka-h1', startTime: '23:00', arrivalTransport: 'public' }
            ]
        }
    }
];
