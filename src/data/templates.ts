import { Template } from '../types';
import { TOKYO_ASSETS, OSAKA_ASSETS, KYOTO_ASSETS, MELBOURNE_ASSETS } from './assets';
import { TAIPEI_ASSETS, TAINAN_ASSETS, HUALIEN_ASSETS, TAICHUNG_ASSETS } from './assets/taiwan';

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
            'Day 1': {
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
            'Day 1': {
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
            'Day 1': {
                morning: [
                    {
                        ...TOKYO_ASSETS[0], // 淺草寺
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
                        ...TOKYO_ASSETS[1], // 東京晴空塔
                        instanceId: 't1-1b',
                        startTime: '09:30',
                        arrivalTransport: 'walk'
                    }
                ],
                afternoon: [
                    {
                        ...TOKYO_ASSETS[2], // 澀谷十字路口
                        instanceId: 't1-2',
                        startTime: '13:30',
                        arrivalTransport: 'public'
                    },
                    {
                        ...TOKYO_ASSETS[3], // TeamLab Planets
                        instanceId: 't1-3',
                        startTime: '15:30',
                        arrivalTransport: 'public',
                        price: 3800
                    },
                    {
                        ...TOKYO_ASSETS[4], // 明治神宮
                        instanceId: 't1-4',
                        startTime: '17:30',
                        arrivalTransport: 'public'
                    }
                ],
                evening: [
                    {
                        ...TOKYO_ASSETS[6], // 一蘭拉麵
                        instanceId: 't1-5',
                        startTime: '19:00',
                        arrivalTransport: 'walk'
                    }
                ],
                night: [
                    {
                        ...TOKYO_ASSETS[16], // Shibuya Sky Garden (Premium)
                        instanceId: 't1-6',
                        startTime: '21:00',
                        arrivalTransport: 'walk',
                        isLocked: true
                    }
                ],
                accommodation: [
                    { ...TOKYO_ASSETS[9], instanceId: 't1-h1', startTime: '23:00', arrivalTransport: 'public' }
                ]
            }
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
            { tag: '#深夜食堂', color: 'bg-amber-50 text-teal-700' }
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
            'Day 1': {
                morning: [
                    {
                        ...TOKYO_ASSETS[7], // 築地市場
                        instanceId: 't2-1',
                        startTime: '06:00',
                        arrivalTransport: 'public'
                    },
                    {
                        ...TOKYO_ASSETS[0], // 淺草寺
                        instanceId: 't2-1b',
                        startTime: '08:30',
                        arrivalTransport: 'public'
                    }
                ],
                afternoon: [
                    {
                        ...TOKYO_ASSETS[8], // 燒肉
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
                        ...TOKYO_ASSETS[6], // 一蘭拉麵
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
            'Day 1': {
                morning: [
                    {
                        ...KYOTO_ASSETS[0], // 金閣寺
                        instanceId: 't5-1',
                        startTime: '09:00',
                        arrivalTransport: 'public'
                    },
                    {
                        ...KYOTO_ASSETS[3], // 嵐山竹林
                        instanceId: 't5-1b',
                        startTime: '11:00',
                        arrivalTransport: 'public'
                    }
                ],
                afternoon: [
                    {
                        ...KYOTO_ASSETS[1], // 清水寺
                        instanceId: 't5-2',
                        startTime: '13:00',
                        arrivalTransport: 'public'
                    },
                    {
                        ...KYOTO_ASSETS[4], // 中村藤吉
                        instanceId: 't5-2b',
                        startTime: '15:30',
                        arrivalTransport: 'public'
                    }
                ],
                evening: [
                    {
                        ...KYOTO_ASSETS[2], // 伏見稻荷
                        instanceId: 't5-3',
                        startTime: '17:00',
                        arrivalTransport: 'public'
                    }
                ],
                night: [
                    {
                        ...KYOTO_ASSETS[5], // 村上春樹爵士吧
                        instanceId: 't5-4',
                        startTime: '20:00',
                        arrivalTransport: 'public',
                        isLocked: true
                    }
                ],
                accommodation: []
            }
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
            'Day 1': {
                morning: [
                    {
                        ...OSAKA_ASSETS[3], // 環球影城
                        instanceId: 'osaka-1',
                        startTime: '08:00',
                        arrivalTransport: 'public'
                    }
                ],
                afternoon: [
                    {
                        ...OSAKA_ASSETS[2], // 道頓堀
                        instanceId: 'osaka-2',
                        startTime: '15:00',
                        arrivalTransport: 'public'
                    },
                    {
                        ...OSAKA_ASSETS[1], // 大阪城
                        instanceId: 'osaka-3',
                        startTime: '17:00',
                        arrivalTransport: 'public'
                    }
                ],
                evening: [
                    {
                        ...OSAKA_ASSETS[7], // 千房大阪燒
                        instanceId: 'osaka-4',
                        startTime: '19:00',
                        arrivalTransport: 'public'
                    }
                ],
                night: [
                    {
                        ...OSAKA_ASSETS[4], // 爵士觀光船 (Premium)
                        instanceId: 'osaka-5',
                        startTime: '21:00',
                        arrivalTransport: 'walk',
                        isLocked: true
                    }
                ],
                accommodation: [
                    { ...OSAKA_ASSETS[8], instanceId: 'osaka-h1', startTime: '23:00', arrivalTransport: 'public' }
                ]
            }
        }
    },
    // ===== TAIWAN TEMPLATES =====
    // ── 台北慢活散策 3 日 ── 
    {
        id: 'tw-taipei-slow',
        name: '台北慢活散策 3 日',
        nameEn: 'Taipei Slow Travel 3-Day',
        title: '用走路的速度，感受台北的呼吸',
        titleEn: 'Feel Taipei at Walking Pace',
        author: '台北文青散步',
        authorEn: 'Taipei Culture Walk',
        authorId: 'c-tw1',
        region: 'taipei',
        tags: ['慢活', '文青', '咖啡'],
        tagsEn: ['Slow Travel', 'Culture', 'Coffee'],
        travelStyle: ['慢活', '文青'],
        targetAudience: {
            personas: ['慢活族', '文青', '咖啡控'],
            personasEn: ['Slow Traveler', 'Culture Lover', 'Coffee Nerd'],
            description: '適合想遠離觀光客路線、用自己的節奏探索台北巷弄的人',
            descriptionEn: 'For those who want to escape tourist routes and explore Taipei alleys at their own pace.',
            paceLevel: 'slow'
        },
        vibes: [
            { tag: '#巷弄探索', color: 'bg-teal-100 text-teal-800' },
            { tag: '#老宅咖啡', color: 'bg-amber-100 text-amber-800' },
            { tag: '#秘境美術館', color: 'bg-purple-100 text-purple-800' }
        ],
        coverStory: {
            quote: '台北最美的風景，都藏在觀光客懶得走的巷弄裡。',
            quoteEn: 'Taipei\'s most beautiful scenery hides in alleys tourists are too lazy to walk.',
            description: '從文學基地的日式宿舍群開始，穿過赤峰街的獨立書店，在寶藏巖的山城藝術村發呆。',
            authorLabel: '台北在地文青推薦'
        },
        travelTips: [
            { tip: '台北捷運非常方便，但巷弄探索建議用走的', tipEn: 'MRT is convenient, but walk to discover alleys' },
            { tip: '每間咖啡廳都有自己的個性，不要只去連鎖店', tipEn: 'Each caf\u00e9 has its own personality, skip chains' },
            { tip: '帶折疊傘，台北的天氣隨時會變', tipEn: 'Carry a folding umbrella, Taipei weather is unpredictable' }
        ],
        duration: 3,
        rating: 4.8,
        tier: 'creator',
        copiedCount: 324,
        price: 0.99,
        highlights: { days: 3, spots: 9, tips: 6, rating: 4.8, usageCount: 324 },
        dayPreviews: [
            { day: 1, summary: '文學基地 → 赤峰街 → 大稻埕咖啡廳' },
            { day: 2, summary: '心中山線形公園 → 鼎元豆漿 → 寶藏巖' },
            { day: 3, summary: '九份 → 金瓜石 → 足米飯糰' }
        ],
        schedule: {
            'Day 1': {
                theme: '文學散步 & 老宅咖啡',
                themeEn: 'Literature Walk & Old House Coffee',
                themeEmoji: '📚',
                morning: [
                    { ...TAIPEI_ASSETS[0], instanceId: 'tw1-1', startTime: '09:00', arrivalTransport: 'public' },
                ],
                afternoon: [
                    { ...TAIPEI_ASSETS[1], instanceId: 'tw1-2', startTime: '13:00', arrivalTransport: 'walk' },
                    { ...TAIPEI_ASSETS[5], instanceId: 'tw1-3', startTime: '15:00', arrivalTransport: 'walk' },
                ],
                evening: [
                    { ...TAIPEI_ASSETS[3], instanceId: 'tw1-4', startTime: '18:00', arrivalTransport: 'public' },
                ],
                night: [],
                accommodation: []
            },
            'Day 2': {
                theme: '巷弄探索 & 藝術村',
                themeEn: 'Alley Exploration & Artist Village',
                themeEmoji: '🎨',
                morning: [
                    { ...TAIPEI_ASSETS[4], instanceId: 'tw1-5', startTime: '07:00', arrivalTransport: 'walk' },
                ],
                afternoon: [
                    { ...TAIPEI_ASSETS[2], instanceId: 'tw1-6', startTime: '14:00', arrivalTransport: 'public' },
                ],
                evening: [],
                night: [],
                accommodation: []
            }
        }
    },
    // ── 台南美食散步 2 日 ──
    {
        id: 'tw-tainan-food',
        name: '台南美食散步 2 日',
        nameEn: 'Tainan Food Walk 2-Day',
        title: '跟著阿孆的口袋名單，吃遍台南',
        titleEn: 'Follow Grandma\'s Secret Food List Through Tainan',
        author: '台南吃貨阿孆',
        authorEn: 'Tainan Foodie Grandma',
        authorId: 'c-tw2',
        region: 'tainan',
        tags: ['美食', '小吃', '在地'],
        tagsEn: ['Food', 'Street Food', 'Local'],
        travelStyle: ['美食', '在地'],
        targetAudience: {
            personas: ['吃貨', '美食探險家'],
            personasEn: ['Foodie', 'Food Adventurer'],
            description: '適合想用胃感受台南的旅人，每頓都有驚喜',
            paceLevel: 'moderate'
        },
        vibes: [
            { tag: '#小吃天堂', color: 'bg-orange-100 text-orange-800' },
            { tag: '#🏆世界得獎', color: 'bg-yellow-100 text-yellow-800' },
            { tag: '#在地人帶路', color: 'bg-teal-50 text-teal-700' }
        ],
        coverStory: {
            quote: '台南人不是在吃，就是在去吃的路上。',
            quoteEn: 'Tainan people are either eating, or on their way to eat.',
            description: '從早上 6 點的虔肉米糕開始，到神農街的隱藏酒吧結束。中間穿插世界得獎冰淇淋。',
            authorLabel: '台南 60 年在地人推薦'
        },
        travelTips: [
            { tip: '台南小吃通常下午才開，早上去市場吃', tipEn: 'Most street food opens in afternoon, eat at markets in the morning' },
            { tip: '蛋山派吃完不妨走過去神農街散步', tipEn: 'After eating, walk to Shennong St. to digest' }
        ],
        duration: 2,
        rating: 4.7,
        tier: 'creator',
        copiedCount: 215,
        highlights: { days: 2, spots: 6, tips: 4, rating: 4.7, usageCount: 215 },
        dayPreviews: [
            { day: 1, summary: '神農街 → 蚷尾家冰淇淋🏆 → 虔農水煎包' },
            { day: 2, summary: '孔廟商圈早餐 → 黃金海岸線 → 花園夜市' }
        ],
        schedule: {
            'Day 1': {
                theme: '老街散步 & 世界得獎冰淇淋',
                themeEn: 'Old Streets & World-Medal Gelato',
                themeEmoji: '🏮',
                morning: [],
                afternoon: [
                    { ...TAINAN_ASSETS[0], instanceId: 'tn1-1', startTime: '13:00', arrivalTransport: 'walk' },
                    { ...TAINAN_ASSETS[1], instanceId: 'tn1-2', startTime: '14:30', arrivalTransport: 'walk' },
                ],
                evening: [
                    { ...TAINAN_ASSETS[2], instanceId: 'tn1-3', startTime: '17:00', arrivalTransport: 'public' },
                ],
                night: [],
                accommodation: []
            }
        }
    },
    // ── 花蓮療癒 3 日 ──
    {
        id: 'tw-hualien-nature',
        name: '花蓮療癒自然 3 日',
        nameEn: 'Hualien Nature Healing 3-Day',
        title: '山海之間，找回呼吸的節奏',
        titleEn: 'Between Mountains & Sea, Find Your Rhythm',
        author: '台北文青散步',
        authorEn: 'Taipei Culture Walk',
        authorId: 'c-tw1',
        region: 'hualien',
        tags: ['自然', '療癒', '秘境'],
        tagsEn: ['Nature', 'Healing', 'Secret Spots'],
        travelStyle: ['療癒', '自然'],
        targetAudience: {
            personas: ['自然控', '放空族'],
            personasEn: ['Nature Lover', 'Recharger'],
            description: '適合想遠離城市喇叭、在山海之間重新充電的人',
            paceLevel: 'slow'
        },
        vibes: [
            { tag: '#山海秘境', color: 'bg-cyan-100 text-cyan-800' },
            { tag: '#原住民文化', color: 'bg-amber-100 text-amber-800' },
            { tag: '#海景咖啡', color: 'bg-blue-100 text-blue-800' }
        ],
        coverStory: {
            quote: '花蓮的美，是那種讓你忘記時間的安靜。',
            quoteEn: 'Hualien\'s beauty is the kind of silence that makes you forget time.',
            description: '從吉利潭的絕美倒影，到四八高地的月牙灣全景，再到出海口的隱密咖啡基地。',
            authorLabel: '花蓮在地探索者推薦'
        },
        travelTips: [
            { tip: '花蓮必須自駕或包車，大眾交通不方便', tipEn: 'Driving or chartering a car is essential in Hualien' },
            { tip: '太魯閣往天祥方向下午較沒人', tipEn: 'Taroko towards Tianxiang is less crowded in the afternoon' }
        ],
        duration: 3,
        rating: 4.9,
        tier: 'official',
        copiedCount: 189,
        highlights: { days: 3, spots: 6, tips: 4, rating: 4.9, usageCount: 189 },
        dayPreviews: [
            { day: 1, summary: '吉利潭 → 光復糖廰 → 説給燒烤' },
            { day: 2, summary: '四八高地 → 七星潭 → 海碑堡咖啡' },
            { day: 3, summary: '太魯閣 → 清水斷崖 → 東大門夜市' }
        ],
        schedule: {
            'Day 1': {
                theme: '秘境湖泊 & 原住民文化',
                themeEn: 'Secret Lakes & Indigenous Culture',
                themeEmoji: '🌊',
                morning: [
                    { ...HUALIEN_ASSETS[0], instanceId: 'hl1-1', startTime: '08:00', arrivalTransport: 'car' },
                ],
                afternoon: [],
                evening: [],
                night: [],
                accommodation: []
            },
            'Day 2': {
                theme: '海岸制高點 & 海景咖啡',
                themeEn: 'Coastal Heights & Ocean Coffee',
                themeEmoji: '☕',
                morning: [
                    { ...HUALIEN_ASSETS[1], instanceId: 'hl1-2', startTime: '05:30', arrivalTransport: 'car' },
                ],
                afternoon: [
                    { ...HUALIEN_ASSETS[2], instanceId: 'hl1-3', startTime: '15:00', arrivalTransport: 'car' },
                ],
                evening: [],
                night: [],
                accommodation: []
            }
        }
    },
    // ── 台中老宅咖啡 & 巷弄探索 3 日 ──
    {
        id: 'tw-taichung-oldhouse',
        name: '台中老宅咖啡 & 巷弄探索 3 日',
        nameEn: 'Taichung Old House Caf\u00e9 & Alley Tour 3-Day',
        title: '推開木門，走進台中的時光膠囊',
        titleEn: 'Push Open the Wooden Door, Step Into Taichung\'s Time Capsule',
        author: '台中巷弄探索家',
        authorEn: 'Taichung Alley Explorer',
        authorId: 'c-tw3',
        region: 'taichung',
        tags: ['老宅', '咖啡', '文青'],
        tagsEn: ['Old House', 'Coffee', 'Culture'],
        travelStyle: ['慢活', '文青', '咖啡'],
        targetAudience: {
            personas: ['咖啡控', '老宅控', '文青'],
            personasEn: ['Coffee Nerd', 'Old House Lover', 'Culture Enthusiast'],
            description: '適合喜歡在老房子裡喝咖啡、拍照、發呆的人',
            paceLevel: 'slow'
        },
        vibes: [
            { tag: '#日式老宅', color: 'bg-amber-100 text-amber-800' },
            { tag: '#自家烘焙', color: 'bg-stone-100 text-stone-800' },
            { tag: '#時光膠囊', color: 'bg-rose-100 text-rose-800' }
        ],
        coverStory: {
            quote: '台中最迷人的，是那些推開門才知道存在的地方。',
            quoteEn: 'Taichung\'s charm lies in places you only discover when you push open the door.',
            description: '從勤美商圈的眾小樓開始，穿過國美館旁的自家烘焙咖啡廳，最後在五權車站旁的日式老宅裡發呆一個下午。',
            authorLabel: '台中在地老宅控推薦'
        },
        travelTips: [
            { tip: '台中咖啡廳通常中午才開，不要太早去', tipEn: 'Taichung caf\u00e9s usually open at noon, don\'t go too early' },
            { tip: '勤美商圈和國美館附近的巷弄密度最高', tipEn: 'Highest caf\u00e9 density around CMP Block and NTMoFA' },
            { tip: '帶相機，每間老宅都值得拍半小時', tipEn: 'Bring a camera, each old house is worth 30 min of shooting' }
        ],
        duration: 3,
        rating: 4.8,
        tier: 'creator',
        copiedCount: 156,
        price: 0.99,
        highlights: { days: 3, spots: 9, tips: 6, rating: 4.8, usageCount: 156 },
        dayPreviews: [
            { day: 1, summary: '裡小樓 → 5春咖啡 → 勤美術館' },
            { day: 2, summary: '如常。所在 → 柯亞果醬🏆 → 審計新村' },
            { day: 3, summary: '電火圳步道 → 石岡老街 → 高美濕地' }
        ],
        schedule: {
            'Day 1': {
                theme: '巷弄美食 & 自家烘焙咖啡',
                themeEn: 'Alley Food & Self-Roasted Coffee',
                themeEmoji: '☕',
                morning: [],
                afternoon: [
                    { ...TAICHUNG_ASSETS[1], instanceId: 'tc1-1', startTime: '11:30', arrivalTransport: 'car' },
                    { ...TAICHUNG_ASSETS[3], instanceId: 'tc1-2', startTime: '14:00', arrivalTransport: 'walk' },
                ],
                evening: [
                    { ...TAICHUNG_ASSETS[2], instanceId: 'tc1-3', startTime: '17:30', arrivalTransport: 'walk' },
                ],
                night: [],
                accommodation: []
            },
            'Day 2': {
                theme: '老宅探索 & 世界金獎果醬',
                themeEn: 'Old House Tour & World-Gold Jam',
                themeEmoji: '🏡',
                morning: [],
                afternoon: [
                    { ...TAICHUNG_ASSETS[4], instanceId: 'tc1-4', startTime: '10:00', arrivalTransport: 'car' },
                    { ...TAICHUNG_ASSETS[5], instanceId: 'tc1-5', startTime: '14:00', arrivalTransport: 'car' },
                ],
                evening: [],
                night: [],
                accommodation: []
            },
            'Day 3': {
                theme: '森林步道 & 小鎮散步',
                themeEn: 'Forest Trail & Small Town Walk',
                themeEmoji: '🌲',
                morning: [
                    { ...TAICHUNG_ASSETS[6], instanceId: 'tc1-6', startTime: '07:00', arrivalTransport: 'car' },
                ],
                afternoon: [],
                evening: [],
                night: [],
                accommodation: []
            }
        }
    },
    // ── 🌟 台中米其林巷弄美食 2 日 (米其林系列) ──
    {
        id: 'tw-taichung-michelin',
        name: '🌟 台中米其林巷弄美食 2 日',
        nameEn: '🌟 Taichung Michelin Alley Food 2-Day',
        title: '從全球唯一米其林冰淇淋開始，吃遍台中巷弄',
        titleEn: 'Start from the World\'s Only Michelin Ice Cream, Eat Through Taichung Alleys',
        author: '台中巷弄探索家',
        authorEn: 'Taichung Alley Explorer',
        authorId: 'c-tw3',
        region: 'taichung',
        tags: ['🌟米其林', '美食', '巷弄'],
        tagsEn: ['🌟 Michelin', 'Food', 'Alleys'],
        travelStyle: ['michelin', '美食'],
        targetAudience: {
            personas: ['美食探險家', '米其林控'],
            personasEn: ['Food Adventurer', 'Michelin Enthusiast'],
            description: '適合想收集米其林星級餐廳、熊大推薦美食的講究吃貨',
            descriptionEn: 'For foodies who collect Michelin stars and Bib Gourmand gems.',
            paceLevel: 'moderate'
        },
        vibes: [
            { tag: '#米其林一星', color: 'bg-yellow-100 text-yellow-800' },
            { tag: '#必比登推介', color: 'bg-red-100 text-red-800' },
            { tag: '#全球唯一', color: 'bg-indigo-100 text-indigo-800' }
        ],
        coverStory: {
            quote: '台中的米其林不在高樓裡，在你找不到的巷子裡。',
            quoteEn: 'Taichung\'s Michelin isn\'t in skyscrapers — it\'s in alleys you can\'t find.',
            description: '全球唯一米其林星級冰淇淋 MINIMAL，藏在巷子裡的必比登台菜，週只開三天的眷村麵。餐與餐之間穿插咖啡廳和藝術館。',
            authorLabel: '台中米其林探索者'
        },
        travelTips: [
            { tip: 'MINIMAL 需提前 2 週線上預約，100% 預約制', tipEn: 'MINIMAL requires online booking 2 weeks ahead, 100% reservation only' },
            { tip: '繡球麵店只有週三/五/日開，要注意日期', tipEn: 'Xiuqiu Noodle Shop only opens Wed/Fri/Sun, check your dates' },
            { tip: '裡小樓不要看菜單，跟老闆說「今天有什麼」', tipEn: 'At Li Xiao Lou, don\'t read the menu, ask the boss \'what\'s good today\'' }
        ],
        duration: 2,
        rating: 4.9,
        tier: 'creator',
        copiedCount: 89,
        price: 0.99,
        originalPrice: 4.99,
        isLocked: true,
        hiddenCount: 3,
        highlights: { days: 2, spots: 8, tips: 6, rating: 4.9, usageCount: 89 },
        dayPreviews: [
            { day: 1, summary: '裡小樓🏆 → 5春咖啡 → MINIMAL⚭ → 勤美線形公園' },
            { day: 2, summary: '縡球麵店 → 如常。所在 → 柯亞果醬🏆 → 審計新村' }
        ],
        schedule: {
            'Day 1': {
                theme: '必比登台菜 + 米其林一星冰淇淋',
                themeEn: 'Bib Gourmand Taiwanese + Michelin 1-Star Ice Cream',
                themeEmoji: '⭐',
                swapSuggestion: 'MINIMAL 預約不到的話，可改去「春丸」經典日式冰淇淋',
                swapSuggestionEn: 'If MINIMAL is fully booked, try "Haru Maru" classic Japanese gelato instead',
                morning: [
                    { ...TAICHUNG_ASSETS[1], instanceId: 'tcm-1', startTime: '11:30', arrivalTransport: 'car' },
                ],
                afternoon: [
                    { ...TAICHUNG_ASSETS[3], instanceId: 'tcm-2', startTime: '14:00', arrivalTransport: 'walk' },
                    {
                        ...TAICHUNG_ASSETS[0], instanceId: 'tcm-3', startTime: '16:00', arrivalTransport: 'car',
                        insiderTip: {
                            teaser: '🌟 全球唯一米其林星級冰淇淋，需提前 2 週預約',
                            teaserEn: '🌟 World\'s only Michelin-starred ice cream, book 2 weeks ahead',
                            full: {
                                story: '2023 年必比登，2024 年直接跳升米其林一星。七道冰品 tasting menu 每一道都是藝術品。吧台座位可以近距離看主廚現場製作。',
                                exactLocation: '台中西區（確認預約後提供地址）',
                                mustTry: '吧台座位 + 七道套餐 NT$1,800',
                                avoid: '不要臨時去，100% 預約制',
                                bestTime: '提前 2 週線上預約'
                            }
                        }
                    },
                ],
                evening: [],
                night: [],
                accommodation: []
            },
            'Day 2': {
                theme: '眷村美食 + 老宅咖啡 + 世界金獎果醬',
                themeEn: 'Military Village Food + Old House Caf\u00e9 + World-Gold Jam',
                themeEmoji: '🏆',
                swapSuggestion: '繡球麵店只有週三/五/日，其他天可改去「上海未名」牵牛花麵',
                swapSuggestionEn: 'Xiuqiu only open Wed/Fri/Sun. On other days, try "Shanghai Unnamed" beef noodles',
                morning: [
                    { ...TAICHUNG_ASSETS[2], instanceId: 'tcm-4', startTime: '11:00', arrivalTransport: 'car' },
                ],
                afternoon: [
                    { ...TAICHUNG_ASSETS[4], instanceId: 'tcm-5', startTime: '13:30', arrivalTransport: 'car' },
                    { ...TAICHUNG_ASSETS[5], instanceId: 'tcm-6', startTime: '15:30', arrivalTransport: 'car' },
                ],
                evening: [],
                night: [],
                accommodation: []
            }
        }
    },
    // ── 台北夜市文青 2 日 ──
    {
        id: 'tw-taipei-night',
        name: '台北夜市文青 2 日',
        nameEn: 'Taipei Night Markets & Culture 2-Day',
        title: '白天文青、晚上夜市，台北的雙面魅力',
        titleEn: 'Culture by Day, Night Markets by Night: Taipei\'s Dual Charm',
        author: '台北文青散步',
        authorEn: 'Taipei Culture Walk',
        authorId: 'c-tw1',
        region: 'taipei',
        tags: ['夜市', '文青', '在地'],
        tagsEn: ['Night Market', 'Culture', 'Local'],
        travelStyle: ['文青', '在地'],
        targetAudience: {
            personas: ['夜貓族', '文青'],
            personasEn: ['Night Owl', 'Culture Lover'],
            description: '適合悄晚以後才有精神、喜歡夜市能量的人',
            paceLevel: 'moderate'
        },
        vibes: [
            { tag: '#夜市攻略', color: 'bg-orange-100 text-orange-800' },
            { tag: '#文創市集', color: 'bg-purple-100 text-purple-800' },
            { tag: '#在地味', color: 'bg-teal-50 text-teal-700' }
        ],
        coverStory: {
            quote: '台北的夜晚，才是真正的開始。',
            quoteEn: 'In Taipei, the real magic begins after dark.',
            description: '白天在文創園區探索獨立書店和咖啡廳，晚上到夜市感受在地人的能量。',
            authorLabel: '台北夜貓族推薦'
        },
        duration: 2,
        rating: 4.6,
        tier: 'official',
        copiedCount: 287,
        highlights: { days: 2, spots: 8, tips: 4, rating: 4.6, usageCount: 287 },
        dayPreviews: [
            { day: 1, summary: '心中山公園 → 赤峰街 → 寧夏夜市' },
            { day: 2, summary: '大稻埕 → 学庞作工 → 饒河夜市' }
        ],
        schedule: {
            'Day 1': {
                theme: '文創園區 & 夜市探險',
                themeEn: 'Creative Park & Night Market Adventure',
                themeEmoji: '🌙',
                morning: [],
                afternoon: [
                    { ...TAIPEI_ASSETS[1], instanceId: 'twn-1', startTime: '14:00', arrivalTransport: 'public' },
                ],
                evening: [
                    { ...TAIPEI_ASSETS[3], instanceId: 'twn-2', startTime: '18:00', arrivalTransport: 'public' },
                ],
                night: [],
                accommodation: []
            }
        }
    }
];
