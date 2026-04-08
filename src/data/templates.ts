/**
 * Travel Templates Data
 * Last Refresh: 2026-04-07 (Taipei Visual Enrichment Complete)
 */
import { Template } from '../types';
import { TOKYO_ASSETS, OSAKA_ASSETS, KYOTO_ASSETS, MELBOURNE_ASSETS } from './assets';
import { TAIPEI_ASSETS, TAINAN_ASSETS, HUALIEN_ASSETS, TAICHUNG_ASSETS } from './assets/taiwan';
import { CULTURAL_WONDERS } from './assets/taiwan/wonders';

// 達人模板 - Curated for MVP Launch
export const TEMPLATES: Template[] = [
    // ===== MELBOURNE TEMPLATES (Featured Core) =====
    {
        id: 'mel-classic-3d',
        name: '墨爾本初體驗 3 天 (經典旗艦版)',
        nameEn: 'Melbourne First Experience 3-Day (Classic)',
        title: '不只是市區：穿梭市場、巷弄與大自然',
        titleEn: 'Beyond the CBD: Markets, Laneways & Nature',
        author: 'Melbourne Local',
        authorEn: 'Melbourne Local',
        authorId: 'c-mel',
        region: 'melbourne',
        tags: ['經典', '初心者', '必看'],
        tagsEn: ['Classic', 'Beginner', 'Must-See'],
        duration: 3,
        rating: 4.9,
        price: 0,
        tier: 'official',
        copiedCount: 1540,
        coverImage: '/images/covers/melbourne.png',
        highlights: { days: 3, spots: 12, tips: 8, rating: 4.9, usageCount: 1540 },
        coverStory: {
            quote: '墨爾本的靈魂，藏在清晨市場的叫賣聲與小巷的咖啡香裡。',
            quoteEn: 'Melbourne\'s soul is hidden in the market calls and the aroma of laneway coffee.',
            description: '這不是觀光客的打卡地圖，而是一系列關於墨爾本日常與驚喜的私密導覽。'
        },
        travelStyle: ['經典', '深度'],
        targetAudience: {
            personas: ['第一次來墨爾本的小白', '情侶'],
            personasEn: ['First-timer', 'Couples'],
            description: '這份路線是為了讓你「徹底愛上墨爾本」而設計的。不只有必去的景點，更有在地人的私房時間表。',
            paceLevel: 'moderate'
        },
        authorStory: {
            zh: '我在墨爾本住了 6 年，這是我帶每個第一次來的朋友必走的行程。從清晨的市場起司，到夜晚聖基爾達的小企鵝，每一站都是我在這座城市的日常片段。',
            en: 'I\'ve lived in Melbourne for 6 years. This is the exact itinerary I take every first-time visitor on. From morning market treats to the penguins at St Kilda beach, these are my favorite city moments.'
        },
        faq: [
            {
                title: '什麼時候看小企鵝最好？',
                titleEn: 'When is best for penguins?',
                text: '小企鵝只在「日落後」歸巢。夏季（12-2月）數量最多且日落較晚（約 8:30PM），冬季則較早（約 5:30PM）。請務必依日落時間提早 1 小時卡位。',
                textEn: 'Penguins only appear after sunset. Summer (Dec-Feb) has the most but late sunsets (8:30PM). Winter is earlier (5:30PM). Arrive 1 hour before sunset.'
            },
            {
                title: '墨爾本天氣真的「一天四季」嗎？',
                titleEn: 'Is the weather "4 seasons in 1 day"?',
                text: '是的。就算是夏天，太陽下山後也會驟降 10 度。強烈建議隨身攜帶輕便防風外套與折疊傘。',
                textEn: 'Yes. Even in summer, temps drop 10°C after sunset. Always carry a light jacket and folding umbrella.'
            },
            {
                title: '需要租車嗎？',
                titleEn: 'Do I need a car?',
                text: '這份 3 天行程完全不需要。CBD 內有免費電車區，郊區景點搭乘公車或火車非常方便。',
                textEn: 'Not for this 3-day trip. The CBD has a Free Tram Zone, and suburban spots are easy to reach by train/bus.'
            }
        ],
        dayPreviews: [
            { day: 1, summary: 'Patricia Coffee → Degraves St → Hosier Lane → Fed Square' },
            { day: 2, summary: 'Queen Vic Market → Market Lane → Melbourne Museum → 400 Gradi' },
            { day: 3, summary: 'Royal Botanic Gardens → St Kilda Beach → Penguins' }
        ],
        schedule: {
            'Day 1': {
                theme: '巷弄探險 & 咖啡靈魂',
                themeEn: 'Laneway Exploration & Coffee Soul',
                themeEmoji: '🚶',
                morning: [
                    { ...MELBOURNE_ASSETS[0], instanceId: 'mel-cl-1', startTime: '08:30', arrivalTransport: 'public' },
                    { ...MELBOURNE_ASSETS[3], instanceId: 'mel-cl-2', startTime: '10:00', arrivalTransport: 'walk' }
                ],
                afternoon: [
                    { ...MELBOURNE_ASSETS[2], instanceId: 'mel-cl-3', startTime: '13:30', arrivalTransport: 'walk' },
                    { ...MELBOURNE_ASSETS.find(a => a.id === 'mel-26')!, instanceId: 'mel-cl-fed', startTime: '15:30', arrivalTransport: 'walk' }
                ],
                evening: [
                    { ...MELBOURNE_ASSETS[4], instanceId: 'mel-cl-4', startTime: '19:00', arrivalTransport: 'public' }
                ],
                night: [],
                accommodation: []
            },
            'Day 2': {
                theme: '在地生活 & 視覺饗宴',
                themeEn: 'Local Life & Visual Feast',
                themeEmoji: '🧀',
                morning: [
                    { ...MELBOURNE_ASSETS[12], instanceId: 'mel-cl-5', startTime: '09:00', arrivalTransport: 'public' },
                    { ...MELBOURNE_ASSETS[17], instanceId: 'mel-cl-6', startTime: '11:00', arrivalTransport: 'walk' }
                ],
                afternoon: [
                    { ...MELBOURNE_ASSETS[14], instanceId: 'mel-cl-7', startTime: '14:00', arrivalTransport: 'public' }
                ],
                evening: [
                    { ...MELBOURNE_ASSETS[18], instanceId: 'mel-cl-8', startTime: '18:30', arrivalTransport: 'public' }
                ],
                night: [],
                accommodation: []
            },
            'Day 3': {
                theme: '森林漫步 & 海邊企鵝',
                themeEn: 'Forest Walk & Coastal Penguins',
                themeEmoji: '🐧',
                morning: [
                    { ...MELBOURNE_ASSETS.find(a => a.id === 'mel-27')!, instanceId: 'mel-cl-rbg', startTime: '10:00', arrivalTransport: 'public' }
                ],
                afternoon: [
                    { ...MELBOURNE_ASSETS.find(a => a.id === 'mel-28')!, instanceId: 'mel-cl-stk', startTime: '15:00', arrivalTransport: 'public' }
                ],
                evening: [
                    { ...MELBOURNE_ASSETS[20], instanceId: 'mel-cl-9', startTime: '19:30', arrivalTransport: 'walk' }
                ],
                night: [],
                accommodation: []
            }
        }
    },
    {
        id: 'mel-family-2d',
        name: '不崩潰的墨爾本親子 2 天',
        nameEn: 'No-Stress Melbourne Family 2-Day',
        title: '大人放鬆、小孩放電的完美平衡',
        titleEn: 'Relax for Parents, Fun for Kids',
        author: 'Melbourne Family Guru',
        authorEn: 'Melbourne Family Guru',
        authorId: 'c-mel-family',
        region: 'melbourne',
        tags: ['親子', '公園', '熱門'],
        tagsEn: ['Family', 'Playground', 'Popular'],
        duration: 2,
        rating: 4.8,
        price: 0.99,
        tier: 'official',
        copiedCount: 890,
        coverImage: '/images/covers/melbourne.png',
        highlights: { days: 2, spots: 6, tips: 5, rating: 4.8, usageCount: 890 },
        coverStory: {
            quote: '帶小孩出國不一定是戰爭，選對地方，大人也能擁有優雅的早安咖啡。',
            quoteEn: 'Traveling with kids doesn\'t have to be a battle. Pick the right spot, and you can still have your morning peace.',
            description: '專為親子旅遊設計，考量到推車、廁所與寬廣草地的完美平衡路線。'
        },
        travelStyle: ['親子', '公園'],
        targetAudience: {
            personas: ['帶幼兒的父母', '三代同堂'],
            personasEn: ['Parents with Toddlers', 'Multi-generational'],
            description: '這不是趕路行程，是為了保住父母理智線設計的。景點之間大都有草地與咖啡，讓大人能喘氣。',
            paceLevel: 'slow'
        },
        authorStory: {
            zh: '身為兩個小孩的爸爸，我深知在墨爾本帶小孩最怕的就是「排隊」跟「找沒廁所的地方」。這份名單是我親自測試過交通最順、設施最全的親子聖地。',
            en: 'As a father of two, I know the biggest fears are long queues and lack of toilets. I\'ve personally tested every spot here for accessibility and child-friendliness.'
        },
        faq: [
            {
                title: '蒸汽火車 (Puffing Billy) 需要預約嗎？',
                titleEn: 'Do I need a book Puffing Billy?',
                text: '強烈建議提前 2 週預訂。旺季現場絕對買不到票。若沒訂到票，行程會直接泡湯。',
                textEn: 'Highly recommend booking 2 weeks in advance. Peak season walk-ins are impossible.'
            },
            {
                title: '大眾設施對推車友善嗎？',
                titleEn: 'Is it stroller-friendly?',
                text: '非常友善。幾乎所有火車站、電車（低底盤車次）都有無障礙電梯。',
                textEn: 'Very. Almost all trains and low-floor trams have elevator access.'
            },
            {
                title: '需要為小孩準備防曬嗎？',
                titleEn: 'Do I need sun protection?',
                text: '絕對要。澳洲紫外線極強，即便陰天也可能曬傷。記得：Slip, Slop, Slap!',
                textEn: 'Absolutely. UV is extreme here. Remember: Slip, Slop, Slap!'
            }
        ],
        dayPreviews: [
            { day: 1, summary: 'Puffing Billy (Train) → Grants on Sherbrooke (Parrots)' },
            { day: 2, summary: 'Melbourne Museum → Nature Play → St Kilda Penguins' }
        ],
        schedule: {
            'Day 1': {
                theme: '森林小火車 & 鳥類親近',
                themeEn: 'Forest Train & Bird Encounter',
                themeEmoji: '🚂',
                morning: [
                    { ...MELBOURNE_ASSETS[10], instanceId: 'mel-fa-1', startTime: '10:30', arrivalTransport: 'public' }
                ],
                afternoon: [
                    { ...MELBOURNE_ASSETS[19], instanceId: 'mel-fa-2', startTime: '14:00', arrivalTransport: 'car' }
                ],
                evening: [],
                night: [],
                accommodation: []
            },
            'Day 2': {
                theme: '恐龍世界 & 水壩遊樂場',
                themeEn: 'Dino World & Water Playground',
                themeEmoji: '🦖',
                morning: [
                    { ...MELBOURNE_ASSETS[14], instanceId: 'mel-fa-3', startTime: '10:00', arrivalTransport: 'public' }
                ],
                afternoon: [
                    { ...MELBOURNE_ASSETS[16], instanceId: 'mel-fa-4', startTime: '15:00', arrivalTransport: 'public' }
                ],
                evening: [
                    { ...MELBOURNE_ASSETS[20], instanceId: 'mel-fa-5', startTime: '19:30', arrivalTransport: 'public' }
                ],
                night: [],
                accommodation: []
            }
        }
    },
    {
        id: 'mel-coffee-nerd-1d',
        name: '墨爾本咖啡控 1 天 (巷弄老饕版)',
        nameEn: 'Melbourne Coffee Nerd 1-Day (Insider)',
        title: '不只是喝拿鐵：走入咖啡烘焙與職人精神',
        titleEn: 'Beyond Lattes: Roasting & Craftsmanship',
        author: 'Melbourne Local',
        authorEn: 'Melbourne Local',
        authorId: 'c-mel',
        region: 'melbourne',
        tags: ['咖啡', '深度', '私藏'],
        tagsEn: ['Coffee', 'Deep Dive', 'Hidden Gem'],
        duration: 1,
        rating: 4.9,
        price: 0.99,
        tier: 'official',
        copiedCount: 420,
        coverImage: '/images/covers/melbourne.png',
        highlights: { days: 1, spots: 5, tips: 6, rating: 4.9, usageCount: 420 },
        coverStory: {
            quote: '在墨爾本，咖啡不只是飲品，而是一場關於風味與溫度的朝聖。',
            quoteEn: 'In Melbourne, coffee is not just a drink; it\'s a pilgrimage of flavor and temperature.',
            description: '拜訪那些連吧台手下班後都會去朝聖的職人咖啡店。'
        },
        travelStyle: ['咖啡', '慢活'],
        targetAudience: {
            personas: ['咖啡師', '早午餐愛好者', '文青'],
            personasEn: ['Baristas', 'Brunch Lovers', 'Hipsters'],
            description: '這份清單專為對咖啡有極致追求的人設計。不走大型觀光店，只拜訪墨爾本目前最尖端的烘焙坊。',
            paceLevel: 'moderate'
        },
        authorStory: {
            zh: '我曾經在墨爾本精品咖啡店工作過。這份行程避開了網美店，帶你拜訪那些吧台手下班後會聚集的地點。',
            en: 'I worked in Melb specialty coffee. This itinerary skips traps and takes you to spots where local baristas actually head after shifts.'
        },
        faq: [
            {
                title: '咖啡店幾點關門？',
                titleEn: 'When do cafes close?',
                text: '這點很重要！多數精品咖啡店 3:00 PM - 4:00 PM 就會收攤。請務必在 2:30 PM 前完成最後一站。',
                textEn: 'Crucial! Most specialty cafes close by 3-4 PM. Reach your last stop by 2:30 PM.'
            },
            {
                title: '什麼時候是去咖啡店最好的時段？',
                titleEn: 'When is the best time?',
                text: '早上 10-11 點。剛度過 8 點上班潮，吧台手比較有空跟你分享豆子資訊。',
                textEn: '10-11 AM. The morning rush has faded; baristas have more time to chat.'
            }
        ],
        dayPreviews: [
            { day: 1, summary: 'Patricia (Standing) → Brother Baba Budan → Lune → Duke St' }
        ],
        schedule: {
            'Day 1': {
                theme: '咖啡烘焙巡禮',
                themeEn: 'Coffee Roastery Tour',
                themeEmoji: '☕',
                morning: [
                    { ...MELBOURNE_ASSETS[0], instanceId: 'mel-co-1', startTime: '08:00', arrivalTransport: 'public' },
                    { ...MELBOURNE_ASSETS[1], instanceId: 'mel-co-2', startTime: '09:30', arrivalTransport: 'walk' }
                ],
                afternoon: [
                    { ...MELBOURNE_ASSETS[13], instanceId: 'mel-co-3', startTime: '11:30', arrivalTransport: 'public' },
                    { ...MELBOURNE_ASSETS[8], instanceId: 'mel-co-4', startTime: '14:00', arrivalTransport: 'public' },
                    { ...MELBOURNE_ASSETS[21], instanceId: 'mel-co-5', startTime: '15:30', arrivalTransport: 'public' }
                ],
                evening: [],
                night: [],
                accommodation: []
            }
        }
    },
    // ===== JAPAN TEMPLATES =====
    {
        id: 't1',
        isHidden: true,
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
        authorStory: {
            zh: '我是旅居東京 10 年的台灣設計師。這份行程不是觀光客路線，而是我每天生活的東京 — 清晨在淺草寺散步、下午在代官山的咖啡店工作、傍晚在隅田川看夕陽。希望你也能感受到這座城市安靜而溫柔的一面。',
            en: 'I\'m a Taiwanese designer who\'s lived in Tokyo for 10 years. This isn\'t a tourist route — it\'s the Tokyo I live in every day. Morning walks at Sensoji, afternoon coffee in Daikanyama, sunset by Sumida River. I hope you\'ll feel the quiet, gentle side of this city too.'
        },
        travelStyle: ['文青', '深度'],
        targetAudience: {
            personas: ['初心者', '文青', '攝影師'],
            personasEn: ['First-Timer', 'Culture Lover', 'Photographer'],
            description: '適合第一次去東京、想避開觀光客路線的深度旅行者',
            paceLevel: 'moderate'
        },
        travelTips: [
            { tip: '購買 Suica 卡，搭地鐵比計程車方便很多', tipEn: 'Get a Suica card, subway is much more convenient than taxis' },
            { tip: '便利商店的食物品質超乎想像，不要小看它', tipEn: 'Convenience store food quality is incredible, don\'t underestimate it' },
            { tip: '記得帶零錢，很多自動販賣機不收大鈔', tipEn: 'Bring small change, many vending machines don\'t accept large bills' }
        ],
        duration: 4,
        rating: 4.8,
        price: 0.99,
        tier: 'official',
        copiedCount: 1205,
        highlights: { days: 4, spots: 10, tips: 6, rating: 4.8, usageCount: 1205 },
        dayPreviews: [
            { day: 1, summary: '淺草寺 → 晴空塔 → 澀谷 → TeamLab → Shibuya Sky' },
            { day: 2, summary: '築地市場 → 銀座 → 六本木' },
            { day: 3, summary: '新宿御苑 → 原宿 → 表參道' },
            { day: 4, summary: '秋葉原 → 上野公園 → 阿美橫町' }
        ],
        schedule: {
            'Day 1': {
                theme: '下町散步 & 昭和風情',
                themeEn: 'Downtown Walk & Showa Vibes',
                themeEmoji: '⛩️',
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
        isHidden: true,
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
        authorStory: {
            zh: '我是東京美食評論家，在這座城市吃了 8 年。這份行程不是 Google 推薦的觀光名店，而是我透過無數次試吃、被拒絕、再回訪後精選的絕佳名単 — 從築地的魚市場到深夜居酒屋。',
            en: 'I\'m a Tokyo food critic who\'s been eating in this city for 8 years. This isn\'t a Google-recommended tourist list — it\'s curated from countless tastings, rejections, and revisits. From Tsukiji fish markets to late-night izakayas.'
        },
        travelStyle: ['美食', '吃貨'],
        targetAudience: {
            personas: ['吃貨', '美食探險家'],
            personasEn: ['Foodie', 'Food Adventurer'],
            description: '適合想用一天吃遍東京精華的美食狂人',
            paceLevel: 'fast'
        },
        travelTips: [
            { tip: '築地市場要早上 6 點前到，太晚人太多', tipEn: 'Arrive at Tsukiji before 6 AM, too crowded later' },
            { tip: '午餐的燒肉套餐比晚餐便宜很多', tipEn: 'Lunch yakiniku sets are much cheaper than dinner' }
        ],
        duration: 1,
        rating: 4.6,
        tier: 'creator',
        copiedCount: 856,
        highlights: { days: 1, spots: 6, tips: 4, rating: 4.6, usageCount: 856 },
        dayPreviews: [
            { day: 1, summary: '築地市場 → 淺草 → 燒肉 → 表參道 → 一蘭拉麵 → 黃金街' }
        ],
        schedule: {
            'Day 1': {
                theme: '從早吃到晚的美食馬拉松',
                themeEn: 'Dawn-to-Dusk Food Marathon',
                themeEmoji: '🍜',
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
                    { ...TOKYO_ASSETS[14], instanceId: 't2-2', startTime: '13:00', arrivalTransport: 'public' },
                    { ...TOKYO_ASSETS.find(a => a.id === 'a-secret-3')!, instanceId: 't2-3', startTime: '14:30', arrivalTransport: 'walk' }
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
                    { ...TOKYO_ASSETS.find(a => a.id === 'a-secret-4')!, instanceId: 't2-5', startTime: '21:00', arrivalTransport: 'public' }
                ],
                accommodation: []
            }
        }
    },
    {
        id: 't5',
        isHidden: true,
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
        authorStory: {
            zh: '我在京都住了 3 年，每天騎腳踏車穿梭在古寺與町家之間。這份路線只會帶你去「觀光客看不到」的京都 — 清晨無人的竹林、隱藏在巷子裡的抹茶私房、只有在地人知道的賭楓秘境。',
            en: 'I lived in Kyoto for 3 years, cycling between ancient temples and machiya houses every day. This route takes you to the Kyoto that tourists never see — an empty bamboo grove at dawn, hidden matcha spots in the alleys, and secret autumn foliage spots only locals know.'
        },
        travelStyle: ['慢活', '禪意'],
        targetAudience: {
            personas: ['慢活族', '禪意旅人'],
            personasEn: ['Slow Traveler', 'Zen Seeker'],
            description: '適合想遠離人潮、在千年古都中找到內心平靜的旅人',
            paceLevel: 'slow'
        },
        travelTips: [
            { tip: '清晨的竹林沒什麼人，6 點出發最好', tipEn: 'Bamboo grove is empty at dawn, leave at 6 AM' },
            { tip: '京都巴士一日券非常划算，到處都能到', tipEn: 'Kyoto bus day pass is great value, goes everywhere' },
            { tip: '穿和服走在石板路上要小心，建議穿平底鞋', tipEn: 'Be careful walking on stone paths in kimono, flat shoes recommended' }
        ],
        duration: 3,
        rating: 4.8,
        tier: 'creator',
        copiedCount: 567,
        price: 0.99,
        originalPrice: 4.99,
        isLocked: true,
        highlights: { days: 3, spots: 6, tips: 6, rating: 4.8, usageCount: 567 },
        dayPreviews: [
            { day: 1, summary: '金閣寺 → 嵐山竹林 → 清水寺 → 中村藤吉抹茶' },
            { day: 2, summary: '伏見稻荷 → 祇園 → 花見小路' },
            { day: 3, summary: '哲學之道 → 銀閣寺 → 村上春樹爵士吧' }
        ],
        schedule: {
            'Day 1': {
                theme: '金閣 & 竹林秘境',
                themeEn: 'Golden Temple & Bamboo Secrets',
                themeEmoji: '🎋',
                morning: [
                    {
                        ...KYOTO_ASSETS[0], // 金閣寺
                        instanceId: 't5-1',
                        startTime: '09:00',
                        arrivalTransport: 'public'
                    },
                    {
                        ...KYOTO_ASSETS[6], // 岡崎神社 (兔子神社)
                        instanceId: 't5-1-secret',
                        startTime: '10:30',
                        arrivalTransport: 'public'
                    },
                    {
                        ...KYOTO_ASSETS[3], // 嵐山竹林
                        instanceId: 't5-1b',
                        startTime: '11:45',
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
        isHidden: true,
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
        authorStory: {
            zh: '我是土生土長的大阪人，在道頓堀附近長大。每次朋友來大阪我都會帶他們走這條路線 — 面店、串炸、居酒屋，都是在地人的口袋名張，而不是觀光客排隊名店。',
            en: 'I\'m a born-and-raised Osaka local who grew up near Dotonbori. Whenever friends visit, I take them on this exact route — ramen shops, kushikatsu, izakayas — all local favorites, not the tourist-queue spots.'
        },
        travelStyle: ['歡樂', '美食'],
        targetAudience: {
            personas: ['親子', '吃貨', '樂園控'],
            personasEn: ['Family', 'Foodie', 'Theme Park Fan'],
            description: '適合想要同時享受美食和遊樂園的歡樂旅人',
            paceLevel: 'fast'
        },
        travelTips: [
            { tip: 'USJ 快速通關券建議提前線上購買', tipEn: 'Buy USJ Express Pass online in advance' },
            { tip: '道頓堀的章魚燒排隊很長，推薦去旁邊巷子的在地店', tipEn: 'Skip the long takoyaki lines on Dotonbori, try local shops in side alleys' }
        ],
        duration: 2,
        rating: 4.7,
        tier: 'official',
        copiedCount: 432,
        price: 0.99,
        isLocked: false,
        highlights: { days: 2, spots: 6, tips: 4, rating: 4.7, usageCount: 432 },
        dayPreviews: [
            { day: 1, summary: '環球影城 → 道頓堀 → 大阪城 → 千房大阪燒' },
            { day: 2, summary: '黑門市場 → 通天閣 → 新世界串炸' }
        ],
        schedule: {
            'Day 1': {
                theme: '環球影城 & 道頓堀美食',
                themeEn: 'Universal Studios & Dotonbori Eats',
                themeEmoji: '🎢',
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
                        ...OSAKA_ASSETS[12], // 難波八阪神社
                        instanceId: 'osaka-secret-1',
                        startTime: '13:30',
                        arrivalTransport: 'car'
                    },
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
    // ── 台北慢活老街日 ── 
    {
        id: 'tw-taipei-oldstreet-day',
        name: '台北慢活老街日',
        nameEn: 'Taipei Slow Living Old Street',
        title: '在大稻埕與萬華，遇見台北的舊時光',
        titleEn: 'Old Souls of Taipei: From Dadaocheng to Wanhua',
        coverImage: '/images/covers/taipei-old-street.png',
        author: '台北文青散步',
        authorEn: 'Taipei Culture Walk',
        authorId: 'c-tw1',
        region: 'taipei',
        tags: ['老街', '美食', '台北日常'],
        tagsEn: ['Old Street', 'Food', 'Taipei Life'],
        travelStyle: ['慢活', '文化'],
        targetAudience: {
            personas: ['慢活族', '文化愛好者', '老屋迷'],
            personasEn: ['Slow Traveler', 'Culture Lover', 'Old House Fan'],
            description: '適合想深度感受台北歷史底蘊，不趕時間、喜歡在街頭觀察日常的旅人',
            paceLevel: 'slow'
        },
        vibes: [
            { tag: '#迪化街私藏', color: 'bg-amber-100 text-amber-800' },
            { tag: '#艋舺風情', color: 'bg-red-100 text-red-800' },
            { tag: '#達人帶路', color: 'bg-teal-50 text-teal-700' }
        ],
        coverStory: {
            quote: '台北最迷人的景致，是即便繁華落盡，街角依然飄散著藥材與古早味的香氣。',
            quoteEn: 'Taipei\'s most charming sights reside in corners where the scent of herbs and vintage flavors remain.',
            description: '這不是一般觀光客的走馬看花，而是穿越時空的台北日常。我們從大稻埕的清晨開始，一路漫步到萬華的燈火闌珊。',
            descriptionEn: 'This isn\'t a typical tourist walkthrough; it\'s a journey through Taipei\'s daily life across time. We start from the early morning in Dadaocheng and wander all the way to the dim lights of Wanhua.',
            authorLabel: '台北在地文化推廣者推薦',
            authorLabelEn: 'Recommended by Taipei Local Culture Advocate'
        },
        authorStory: {
            zh: '我在台北長大，特別著迷於那些被時間遺忘的角落。這份行程是我無數次穿梭在萬華和大稻埕後，精選出最能代表「台北老靈魂」的地點。',
            en: 'Grown up in Taipei, I\'m obsessed with corners forgotten by time. This itinerary is my "Soul of Taipei" collection, curated from endless walks in Wanhua and Dadaocheng.'
        },
        faq: [
            {
                title: '迪化街幾點去最好？',
                titleEn: 'When to visit Dihua St.',
                text: '建議早上 11:00 左右抵達。那時中藥行與乾貨店剛全開，街道能量最飽滿，但又不至於像下午那樣擁擠。',
                textEn: 'Aim for 11:00 AM. Shops are fully open, and the energy is peak but not yet overcrowded.'
            },
            {
                title: '萬華夜市這麼多，推薦哪一個？',
                titleEn: 'Which Wanhua market?',
                text: '雖然廣州街夜市很大，但我個人更推薦「華西街夜市」。除了經典美食，那裡的復古氛圍與建築結構是全台北最獨特的。',
                textEn: 'Go for Huaxi St. Night Market. Beyond food, its retro architecture and unique atmosphere are unmatched in Taipei.'
            }
        ],
        duration: 1,
        rating: 4.9,
        tier: 'creator',
        copiedCount: 425,
        price: 0,
        highlights: { days: 1, spots: 8, tips: 6, rating: 4.9, usageCount: 425 },
        dayPreviews: [
            { day: 1, summary: '阜杭豆漿 → 迪化街散步 → 龍山寺祈福 → 華西街夜市' }
        ],
        schedule: {
            'Day 1': {
                theme: '台北老魂與巷弄美食',
                themeEn: 'Taipei Soul & Alley Eats',
                themeEmoji: '🏮',
                morning: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-f1')!, instanceId: 'tp-day-1', startTime: '08:30', arrivalTransport: 'public' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a1')!, instanceId: 'tp-day-2', startTime: '10:30', arrivalTransport: 'walk' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a2')!, instanceId: 'tp-day-3', startTime: '11:30', arrivalTransport: 'walk' },
                ],
                afternoon: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-f2')!, instanceId: 'tp-day-4', startTime: '13:30', arrivalTransport: 'public' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-f3')!, instanceId: 'tp-day-5', startTime: '15:30', arrivalTransport: 'public' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a3')!, instanceId: 'tp-day-6', startTime: '17:00', arrivalTransport: 'walk' },
                ],
                evening: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a4')!, instanceId: 'tp-day-7', startTime: '18:30', arrivalTransport: 'walk' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-f4')!, instanceId: 'tp-day-8', startTime: '20:00', arrivalTransport: 'walk' },
                ],
                night: [],
                accommodation: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-h1')!, instanceId: 'tp-h-1' }
                ]
            }
        }
    },
    // ── 台北山景與城市日 ──
    {
        id: 'tw-taipei-mountain-city-day',
        name: '台北山景城景日',
        nameEn: 'Taipei Mountain & City Views',
        title: '由高到低，從日出到星辰的台北全景',
        titleEn: 'From Sunrise to Starlight: The Vertical Soul of Taipei',
        coverImage: '/images/covers/taipei-mountain.png',
        author: '台北山系生活家',
        authorEn: 'Taipei Mountain Guide',
        authorId: 'c-tw-mountain',
        region: 'taipei',
        tags: ['🚶 一日遊', '🏃 健行', '⭐ 米其林推薦'],
        tagsEn: ['One Day', 'Hiking', 'Michelin'],
        travelStyle: ['經典', '健身'],
        targetAudience: {
            personas: ['體力充沛旅人', '攝影控', '在地生活家'],
            personasEn: ['Active Travelers', 'Photo Nerds', 'Local Enthusiasts'],
            description: '這份行程的邏輯是由高到低，再由舊到新——早上在山頂俯瞰這座城市，中午走進公園感受台北人的日常。',
            paceLevel: 'moderate'
        },
        vibes: [
            { tag: '#象山日出', color: 'bg-green-100 text-green-800' },
            { tag: '#101全景', color: 'bg-blue-100 text-blue-800' },
            { tag: '#達人帶路', color: 'bg-teal-50 text-teal-700' }
        ],
        coverStory: {
            quote: '「台北101不是目的地，是你流汗之後的獎勵。」',
            quoteEn: '"Taipei 101 is not the destination; it\'s the reward for your sweat."',
            description: '這份行程的邏輯是由高到低，再由舊到新——早上在山頂俯瞰這座城市，中午走進公園感受台北人的日常，下午穿越眷村走進現代信義區，晚上在米其林餐廳收尾。',
            descriptionEn: 'This itinerary flows from top to bottom, old to new—gaze upon the city from a mountain peak in the morning, experience local life in the park at noon, traverse historical villages into modern Xinyi in the afternoon, and conclude with a Michelin-starred dinner.',
            authorLabel: '台北山系生活家推薦',
            authorLabelEn: 'Recommended by Taipei Mountain Guide'
        },
        authorStory: {
            zh: '每週跑遍台北大小步道，專門找那些觀光客不知道、本地人才去的登山路線。對我來說，這座城市最美的角度永遠是在努力向上爬之後看到的那個瞬間。',
            en: 'Every week I run across various trails in Taipei, looking for those known only to locals. To me, the most beautiful angle of this city is always the moment after a hard climb.'
        },
        faq: [
            {
                title: '象山步道會不會很難？',
                titleEn: 'Is Elephant Mountain hard?',
                text: '雖然階梯不少，但慢慢走大約 20 分鐘就能到達第一個景觀台。建議清晨出發，避開最熱的太陽。',
                textEn: 'Lots of stairs, but you can reach the first platform in 20 mins. Start early to avoid the heat.'
            }
        ],
        duration: 1,
        rating: 4.9,
        tier: 'creator',
        copiedCount: 520,
        price: 0,
        highlights: { days: 1, spots: 5, tips: 4, rating: 4.9, usageCount: 520 },
        dayPreviews: [
            { day: 1, summary: '象山步道日出 → 鼎泰豐早午餐 → 四四南村 → 101 觀景台 → 饒河街夜市' }
        ],
        schedule: {
            'Day 1': {
                theme: '山城交錯的台北高度',
                themeEn: 'Mountain & City Altitudes',
                themeEmoji: '🌇',
                morning: [
                    { 
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a5')!, 
                        instanceId: 'tm-1', 
                        itemType: 'spot',
                        startTime: '05:30', 
                        arrivalTransport: 'public' 
                    },
                    { 
                        id: 'insight-1',
                        itemType: 'insight',
                        insightId: 'tw-morning-exercise',
                        startTime: '06:30'
                    },
                    { 
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-f5')!, 
                        instanceId: 'tm-2', 
                        itemType: 'spot',
                        startTime: '10:00', 
                        arrivalTransport: 'public' 
                    }
                ],
                afternoon: [
                    { 
                        id: 'insight-2',
                        itemType: 'insight',
                        insightId: 'tw-queue-culture',
                        startTime: '11:00'
                    },
                    { 
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a6')!, 
                        instanceId: 'tm-3', 
                        itemType: 'spot',
                        startTime: '12:00', 
                        arrivalTransport: 'public' 
                    },
                    { 
                        id: 'insight-3',
                        itemType: 'insight',
                        insightId: 'tw-park-karaoke',
                        startTime: '13:00'
                    },
                    { 
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a7')!, 
                        instanceId: 'tm-4', 
                        itemType: 'spot',
                        startTime: '14:30', 
                        arrivalTransport: 'walk' 
                    }
                ],
                evening: [
                    { 
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a8')!, 
                        instanceId: 'tm-5', 
                        itemType: 'spot',
                        startTime: '16:30', 
                        arrivalTransport: 'walk' 
                    },
                    { 
                        id: 'insight-4',
                        itemType: 'insight',
                        insightId: 'tw-dept-anniversary',
                        startTime: '18:00'
                    },
                    { 
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a9')!, 
                        instanceId: 'tm-6', 
                        itemType: 'spot',
                        startTime: '21:00', 
                        arrivalTransport: 'public' 
                    }
                ],
                night: [],
                accommodation: []
            }
        }
    },
    // ── 台北經典必訪：文化地標一日遊 ──
    {
        id: 'tpl-t-classic',
        name: '台北經典必訪：文化地標一日遊',
        nameEn: 'Classic Essential Taipei: Landmark Tour',
        title: '第一次來台北？這是一份縮時攝影般的精華清單',
        titleEn: 'First time in Taipei? A time-lapse of the city\'s best.',
        author: 'TravelCanvas 編輯部',
        authorEn: 'TravelCanvas Editors',
        authorId: 'c0',
        region: 'taipei',
        tags: ['🥇 必訪地標', '🍜 在地美食', '🏛️ 文化瑰寶'],
        tagsEn: ['Must-Visit', 'Local Food', 'Cultural'],
        duration: 1,
        rating: 4.9,
        price: 0,
        tier: 'official',
        copiedCount: 3450,
        coverImage: 'file:///C:/Users/jecxu/.gemini/antigravity/brain/ee581ff1-0d9b-40e4-aa7c-32f892d07f63/taipei_classic_heritage_cover_1775620859378.png',
        highlights: { days: 1, spots: 7, tips: 5, rating: 4.9, usageCount: 3450 },
        vibes: [
            { tag: '#初音台北', color: 'bg-teal-100 text-teal-800' },
            { tag: '#歷史厚度', color: 'bg-amber-100 text-amber-800' },
            { tag: '#美學建築', color: 'bg-sky-100 text-sky-800' }
        ],
        coverStory: {
            quote: '「如果你只有一天的時間看台北，就要看它最靈魂的幾個面貌。」',
            quoteEn: '"If you only have one day, see the parts that hold Taipei\'s soul."',
            description: '從世界級的國寶收藏，到宮殿式的建築傳奇，最後在 101 的高空俯瞰這座城市的燈火。這是一份專為「台北初學者」準備的極致劇本。',
            descriptionEn: 'From world-class treasures to palace-style architectural legends, ending with a 101 skyline view. The ultimate script for Taipei beginners.',
            authorLabel: '官方認證經典路線',
            authorLabelEn: 'Official Classic Route'
        },
        authorStory: {
            zh: '我們彙整了數千位旅人的回饋，篩選出台北最不容錯過的七個瞬間。這份行程不只是景點的堆砌，我們更在其中加入了「在地人才知道」的觀賞視角與時間建議。',
            en: 'We aggregated feedback from thousands of travelers to distill the seven must-see moments of Taipei. This is not just a list of spots; it\'s a curated guide with local "insider" timing and perspectives.'
        },
        faq: [
            {
                title: '悠遊卡在哪裡買？',
                titleEn: 'Where to buy EasyCard?',
                text: '捷運站（悠遊卡售卡/加值機）或是任何一家 7-11/全家便利商店都能買到，可以用於捷運、公車、部分小黃與小吃店。',
                textEn: 'MRT stations or Any convenience store (7-11/FamilyMart). Use it for MRT, bus, and some shops.'
            },
            {
                title: '機場到市區最快的方法？',
                titleEn: 'Fastest way from Airport?',
                text: '搭乘桃園機場捷運 (Airport MRT)，紫色的是直達車，只要 35 分鐘就能抵達台北車站。',
                textEn: 'Take the Airport MRT Express (Purple train); it reaches Taipei Main Station in 35 minutes.'
            }
        ],
        travelTips: [
            { tip: '捷運車廂內「禁止飲食」（水與口香糖也不行）', tipEn: 'No eating or drinking in MRT (Water/Gum included)' },
            { tip: '搭乘電扶梯時，通常習慣「靠右站立」', tipEn: 'Wait on the right when using escalators' },
            { tip: '大部分店家不主動提供免費提袋，建議自備', tipEn: 'Bring your own shopping bag; most stores charge small fee' }
        ],
        dayPreviews: [
            { day: 1, summary: '真芳早餐 → 故宮博物院 → 永康牛肉麵 → 圓山大飯店 → 中正紀念堂 → 台北 101 → 士林夜市' }
        ],
        schedule: {
            'Day 1': {
                theme: '台北縮影：從古至今的精華巡禮',
                themeEn: 'Taipei in Mini: Heritage to Modernity',
                themeEmoji: '🌇',
                morning: [
                    { 
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-f7')!, 
                        instanceId: 'cl-1', 
                        itemType: 'spot',
                        startTime: '08:00', 
                        arrivalTransport: 'public' 
                    },
                    { 
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a10')!, 
                        instanceId: 'cl-2', 
                        itemType: 'spot',
                        startTime: '09:30', 
                        arrivalTransport: 'public' 
                    }
                ],
                afternoon: [
                    { 
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-f8')!, 
                        instanceId: 'cl-3', 
                        itemType: 'spot',
                        startTime: '12:30', 
                        arrivalTransport: 'public' 
                    },
                    { 
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a12')!, 
                        instanceId: 'cl-4', 
                        itemType: 'spot',
                        startTime: '14:30', 
                        arrivalTransport: 'public' 
                    },
                    { 
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a11')!, 
                        instanceId: 'cl-5', 
                        itemType: 'spot',
                        startTime: '16:00', 
                        arrivalTransport: 'public' 
                    },
                    { 
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a8')!, 
                        instanceId: 'cl-6', 
                        itemType: 'spot',
                        startTime: '17:30', 
                        arrivalTransport: 'public' 
                    }
                ],
                evening: [
                    { 
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a13')!, 
                        instanceId: 'cl-7', 
                        itemType: 'spot',
                        startTime: '19:30', 
                        arrivalTransport: 'public' 
                    }
                ],
                night: [],
                accommodation: []
            }
        }
    },
    // ── 台北深夜生存指南 ──
    {
        id: 'tw-taipei-night-survival',
        name: '台北深夜生存指南',
        nameEn: 'Taipei Late Night Survival Guide',
        title: '從最後一班捷運到清晨豆漿：台北最迷幻的深夜視角',
        titleEn: 'From Last Train to Dawn Soy Milk: Taipei\'s Midnight Pulse',
        coverImage: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=800',
        author: '台北深夜攝影師',
        authorEn: 'Taipei Night Photographer',
        authorId: 'c-tw-night',
        region: 'taipei',
        tags: ['🌙 深夜限定', '🔥 入口即化', '💎 隱藏酒吧'],
        tagsEn: ['Late Night', 'Foodie', 'Speakeasy'],
        travelStyle: ['微醺', '攝影', '老派'],
        tier: 'creator',
        price: 0.99,
        isLocked: true,
        vibes: [
            { tag: '#霓虹台北', color: 'bg-indigo-100 text-indigo-800' },
            { tag: '#生存指南', color: 'bg-amber-100 text-amber-800' },
            { tag: '#微醺夜行', color: 'bg-purple-100 text-purple-800' }
        ],
        coverStory: {
            quote: '「當捷運收班，才是這座城市靈魂跑出來玩的時候。」',
            quoteEn: '"When the MRT stops, that\'s when the city\'s soul comes out to play."',
            description: '這份清單不適合早睡的人。我們從寧夏夜市的老味道開始，穿過侯孝賢鏡頭下的藍色隧道，最後在清晨五點的豆漿店裡，看著城市的運轉重新啟動。',
            descriptionEn: 'Not for early birds. We start with Ningxia\'s heritage flavors, traverse Hou Hsiao-hsien\'s cinematic blue tunnel, and end at a 5 AM soy milk stall, watching the city reboot.',
            authorLabel: '深夜行程專家推薦',
            authorLabelEn: 'Recommended by Nightlife Expert'
        },
        authorStory: {
            zh: '我在台北拍了十年的深夜街頭。這座城市在凌晨兩點展現出的那種極度安全與迷幻的交織，是我在世界各地其他城市都找不到的。這份清單不只是行程，更是一場與台北靈魂的私密對話。',
            en: 'Been shooting Taipei streets at night for 10 years. The mix of total safety and psychedelic vibe at 2 AM is unique to this city. This is more than a list; it\'s a private talk with Taipei\'s soul.'
        },
        faq: [
            {
                title: '深夜交通怎麼解決？',
                titleEn: 'Midnight Transport?',
                text: '捷運雖然收班了，但台北的計程車與多元計程車非常普及且安全。建議在 APP 上叫車，價格透明且有紀錄。',
                textEn: 'MRT closes, but taxis and ride-sharing are everywhere and safe. Use apps for transparency.'
            }
        ],
        duration: 1,
        rating: 5.0,
        copiedCount: 42,
        highlights: { days: 1, spots: 6, tips: 5, rating: 5.0, usageCount: 42 },
        dayPreviews: [
            { day: 1, summary: '寧夏夜市 → 中山陸橋 → 誠品南西 → 菱玖洋服 → 林東芳牛肉麵 → 永和豆漿' }
        ],
        schedule: {
            'Day 1': {
                theme: '台北深夜生存哲學',
                themeEn: 'Taipei Midnight Philosophy',
                themeEmoji: '🌃',
                morning: [],
                afternoon: [],
                evening: [
                    { 
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-n6')!, 
                        instanceId: 'ns-1', 
                        itemType: 'spot',
                        startTime: '20:30', 
                        arrivalTransport: 'public' 
                    }
                ],
                night: [
                    { 
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-n1')!, 
                        instanceId: 'ns-2', 
                        itemType: 'spot',
                        startTime: '22:30', 
                        arrivalTransport: 'public',
                        isLocked: true 
                    },
                    { 
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-n4')!, 
                        instanceId: 'ns-3', 
                        itemType: 'spot',
                        startTime: '23:30', 
                        arrivalTransport: 'walk' 
                    },
                    { 
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-n3')!, 
                        instanceId: 'ns-4', 
                        itemType: 'spot',
                        startTime: '01:00', 
                        arrivalTransport: 'public',
                        isLocked: true 
                    },
                    { 
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-n2')!, 
                        instanceId: 'ns-5', 
                        itemType: 'spot',
                        startTime: '03:00', 
                        arrivalTransport: 'public' 
                    },
                    { 
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-n5')!, 
                        instanceId: 'ns-6', 
                        itemType: 'spot',
                        startTime: '05:00', 
                        arrivalTransport: 'public',
                        isLocked: true 
                    }
                ],
                accommodation: []
            }
        }
    }
];
