/**
 * Travel Templates Data
 * Last Refresh: 2026-04-07 (Taipei Visual Enrichment Complete)
 */
import { Template } from '../types';
import { TOKYO_ASSETS, OSAKA_ASSETS, KYOTO_ASSETS, MELBOURNE_ASSETS } from './assets';
import { TAIPEI_ASSETS, TAINAN_ASSETS, HUALIEN_ASSETS, TAICHUNG_ASSETS, KAOHSIUNG_ASSETS, CHIAYI_ASSETS, NANTOU_ASSETS } from './assets/taiwan';
import { CULTURAL_WONDERS } from './assets/taiwan/wonders';

// 達人模板 - Curated for MVP Launch
export const TEMPLATES: Template[] = [
    // ===== MELBOURNE TEMPLATES (Featured Core) =====
    {
        id: 'mel-classic-3d',
        isHidden: true,
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
        isHidden: true,
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
        isHidden: true,
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
        coverImage: 'https://images.unsplash.com/photo-1596402184320-417d7178b2cd?auto=format&fit=crop&q=80&w=1200',
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
    },
    // ===== TAICHUNG TEMPLATES (New Curated) =====
    {
        id: 'tc-quirky-1d',
        name: '台中奇趣潮流選 (1日深度)',
        nameEn: 'Quirky & Hip Taichung (1-Day)',
        title: '不只是打卡：在台中發掘日常裡的驚喜奇觀',
        titleEn: 'Beyond the Gram: Discovering Urban Wonders',
        author: '台中巷弄探索家',
        authorEn: 'Taichung Alley Explorer',
        authorId: 'c-tw3',
        region: 'taichung',
        tags: ['奇趣', '潮流', '美食'],
        tagsEn: ['Quirky', 'Hip', 'Food'],
        duration: 1,
        rating: 4.9,
        price: 0,
        tier: 'creator',
        copiedCount: 850,
        coverStory: {
            quote: '「台中最美的地方，往往藏在那些讓人意想不到的轉角。」',
            quoteEn: '"The beauty of Taichung lies in the most unexpected corners."',
            description: '這份路線專為喜歡新鮮感的你設計。我們不走傳統景點，而是去拍會跑步的恐龍、去百貨公司參觀各國主題廁所，最後在米其林星級冰淇淋中結束完美的一天。'
        },
        travelStyle: ['時尚', '奇趣', '美食'],
        authorStory: {
            zh: '我在台中住了十年，最喜歡帶朋友去看那些「只有台中才有的創意」。這份行程是我壓箱寶的私房名單，保證讓你的相機快門停不下來。',
            en: 'Living in Taichung for 10 years, I love showing friends the unique creativity here. This itinerary is my private "hidden gem" list, guaranteed to keep your camera busy.'
        },
        faq: [
            {
                title: '哪層樓的廁所最厲害？',
                titleEn: 'Which toilet is best?',
                text: '中友百貨的 C 棟絕對是首選！7 樓的可口可樂 and 6 樓的秘密花園是必拍重點。',
                textEn: 'Building C at Chungyo! 7F Coca-Cola and 6F Secret Garden are the highlights.'
            },
            {
                title: '恐龍什麼時候會動？',
                titleEn: 'When do dinos move?',
                text: '科博館內的機械暴龍每 15 分鐘會有一場吼叫表演，建議進館後先看場次。',
                textEn: 'The T-Rex inside roars every 15 mins. Check the schedule upon entry.'
            },
            {
                title: 'MINIMAL 沒預約吃得到嗎？',
                titleEn: 'Minimal without booking?',
                text: '非常困難！2024 拿到米其林一星後爆紅，務必兩週前在線上預約，否則只能在外帶區碰運氣。',
                textEn: 'Very hard after the Michelin win. Book online 2 weeks ahead or try the take-out window.'
            },
            {
                title: '一中街必吃三寶是哪些？',
                titleEn: 'Yizhong Top 3?',
                text: '一中大雞排、豐仁冰、半月燒。這三樣是台中學生時代的集體回憶。',
                textEn: 'Fried Chicken, Fengren Ice, and Half-Moon Pancake. The local student staples.'
            }
        ],
        dayPreviews: [
            { day: 1, summary: '第二市場早餐 → 科博館恐龍 → 中友百貨主題廁所 → MINIMAL 冰淇淋 → 一中夜市' }
        ],
        schedule: {
            'Day 1': {
                morning: [
                    { 
                        ...TAICHUNG_ASSETS.find(a => a.id === 'tc-f8')!, 
                        instanceId: 'tc-q1', 
                        startTime: '08:30', 
                        timeLabel: '早餐 Breakfast',
                        arrivalTransport: 'public' 
                    },
                    { 
                        ...TAICHUNG_ASSETS.find(a => a.id === 'tc-a2')!, 
                        instanceId: 'tc-q2', 
                        startTime: '10:00', 
                        arrivalTransport: 'walk' 
                    }
                ],
                afternoon: [
                    { 
                        ...TAICHUNG_ASSETS.find(a => a.id === 'tc-f3')!, 
                        instanceId: 'tc-q3', 
                        startTime: '12:30', 
                        timeLabel: '午餐 Lunch',
                        arrivalTransport: 'public' 
                    },
                    { 
                        ...TAICHUNG_ASSETS.find(a => a.id === 'tc-a3')!, 
                        instanceId: 'tc-q4', 
                        startTime: '14:30', 
                        arrivalTransport: 'walk' 
                    },
                    { 
                        ...TAICHUNG_ASSETS.find(a => a.id === 'tc-f1')!, 
                        instanceId: 'tc-q5', 
                        startTime: '16:00', 
                        arrivalTransport: 'public' 
                    }
                ],
                evening: [
                    { 
                        ...TAICHUNG_ASSETS.find(a => a.id === 'tc-f4')!, 
                        instanceId: 'tc-q6', 
                        startTime: '18:30', 
                        timeLabel: '晚餐 Dinner',
                        arrivalTransport: 'public' 
                    }
                ],
                night: [],
                accommodation: []
            }
        }
    },
    {
        id: 'tc-heritage-1d',
        name: '經典手作與文化體驗 (1日)',
        nameEn: 'Hands-on Heritage Taichung (1-Day)',
        title: '感官台中：親手搖珍奶、捏太陽餅的文化之旅',
        titleEn: 'Crafting Memories: Boba, Sun Cakes & Architecture',
        author: 'TravelCanvas 編輯部',
        authorEn: 'TravelCanvas Editors',
        authorId: 'c0',
        region: 'taichung',
        tags: ['文化', '手作', '體驗'],
        tagsEn: ['Culture', 'Craft', 'DIY'],
        duration: 1,
        rating: 4.8,
        price: 0,
        tier: 'official',
        authorStory: {
            zh: '為了讓外國旅客能更深度的認識台中，編輯部特別走訪了發源地，並將最值得花時間停留的手作課程串連起來。這是一個關於台中驕傲的體驗套餐。',
            en: 'To help travelers go deeper, our team visited the original birthplaces of local specialties and curated the best hands-on sessions into one proud Taichung package.'
        },
        faq: [
            {
                title: '珍奶 DIY 真的好玩嗎？',
                titleEn: 'Is Boba DIY fun?',
                text: '非常有成就感！在大理石桌面上學習黃金比例，還能拿到官方結業證書，是很有紀念價值的體驗。',
                textEn: 'Very satisfying! You learn the golden ratio and receive an official certificate. Great souvenir.'
            },
            {
                title: '太陽餅可以帶回國嗎？',
                titleEn: 'Bring cakes back?',
                text: '手作太陽餅不含防腐劑，通常保存期為 7-14 天，建議在行程結束前幾天再帶。',
                textEn: 'No preservatives; stays fresh for 7-14 days. Buy it towards the end of your trip.'
            }
        ],
        schedule: {
            'Day 1': {
                morning: [
                    { 
                        ...TAICHUNG_ASSETS.find(a => a.id === 'tc-f5')!, 
                        instanceId: 'tc-h1', 
                        startTime: '09:30', 
                        arrivalTransport: 'public' 
                    },
                    { 
                        ...TAICHUNG_ASSETS.find(a => a.id === 'tc-a4')!, 
                        instanceId: 'tc-h2', 
                        startTime: '11:30', 
                        arrivalTransport: 'walk' 
                    }
                ],
                afternoon: [
                    { 
                        ...TAICHUNG_ASSETS.find(a => a.id === 'tc-f6')!, 
                        instanceId: 'tc-h3', 
                        startTime: '13:00', 
                        timeLabel: '午餐 Lunch',
                        arrivalTransport: 'public' 
                    },
                    { 
                        ...TAICHUNG_ASSETS.find(a => a.id === 'tc-a5')!, 
                        instanceId: 'tc-h4', 
                        startTime: '14:30', 
                        arrivalTransport: 'public' 
                    },
                    { 
                        ...TAICHUNG_ASSETS.find(a => a.id === 'tc-a6')!, 
                        instanceId: 'tc-h5', 
                        startTime: '16:30', 
                        arrivalTransport: 'public' 
                    }
                ],
                evening: [
                    { 
                        ...TAICHUNG_ASSETS.find(a => a.id === 'tc-f7')!, 
                        instanceId: 'tc-h6', 
                        startTime: '18:30', 
                        timeLabel: '晚餐 Dinner',
                        arrivalTransport: 'walk' 
                    }
                ],
                night: [],
                accommodation: []
            }
        }
    },
    {
        id: 'tn-curated-1',
        name: '古都的味覺與時光之旅',
        nameEn: 'Ancient Flavor & Time Trail',
        title: '台南：穿梭五個世紀的味蕾旅行',
        titleEn: 'Tainan: A Culinary Journey Through 5 Centuries',
        author: '阿松',
        authorEn: 'Song',
        authorId: 'c-tw2',
        region: 'tainan',
        tags: ['文化', '美食', '古都'],
        tagsEn: ['Culture', 'Food', 'Ancient City'],
        duration: 1,
        rating: 4.9,
        price: 0,
        tier: 'creator',
        authorStory: {
            zh: '台南是台灣的起點，這裡的空氣中都帶著甜味。這份規劃不僅是帶你吃，更是帶你走進那些被時間遺忘的老街與手作工坊。我們不趕路，只感受時光。',
            en: 'Tainan is where Taiwan began, where the air itself feels sweet. This plan isn\'t just about eating; it\'s about stepping into forgotten alleys and craft workshops. We don\'t rush; we just feel the time.'
        },
        faq: [
            { title: '牛肉湯真的要那麼早排隊嗎？', text: '六千牛肉湯的第一鍋（約五點）最鮮甜，建議四點半拿號碼牌。不想排太久的話，其實國華街周邊也有很多不用排隊的好選擇。' },
            { title: '傳統椪餅可以直接吃嗎？', text: '可以直接吃，但台南人的道地吃法是「麻油煎蛋」，加熱後讓蛋香跟黑糖融合，非常補身。' },
            { title: '國華街適合開車去嗎？', text: '絕對不建議！國華街非常窄且人潮眾多。建議住宿選在中西區，步行或租賃機車是最棒的方式。' }
        ],
        dayPreviews: [
            { day: 1, summary: '阿堂鹹粥 → 六千牛肉湯 → 國華街 → 神農街' }
        ],
        schedule: {
            'Day 1': {
                morning: [
                    { 
                        ...TAINAN_ASSETS.find((a: any) => a.id === 'tn-f3')!,
                        instanceId: 'tn-c1-h1',
                        startTime: '05:00',
                        timeLabel: '清晨 Dawn', 
                        arrivalTransport: 'public' 
                    },
                    { 
                        ...TAINAN_ASSETS.find((a: any) => a.id === 'tn-f4')!,
                        instanceId: 'tn-c1-h2',
                        startTime: '08:30',
                        timeLabel: '早餐 Breakfast', 
                        arrivalTransport: 'walk' 
                    }
                ],
                afternoon: [
                    { 
                        ...TAINAN_ASSETS.find((a: any) => a.id === 'tn-f5')!,
                        instanceId: 'tn-c1-h3',
                        startTime: '11:30',
                        timeLabel: '午餐 Lunch', 
                        arrivalTransport: 'walk' 
                    },
                    { 
                        ...TAINAN_ASSETS.find((a: any) => a.id === 'tn-exp1')!,
                        instanceId: 'tn-c1-h4',
                        startTime: '14:00',
                        timeLabel: '下午 Afternoon', 
                        arrivalTransport: 'walk' 
                    },
                    { 
                        ...TAINAN_ASSETS.find((a: any) => a.id === 'tn-f1')!,
                        instanceId: 'tn-c1-h5',
                        startTime: '16:00',
                        arrivalTransport: 'walk' 
                    }
                ],
                evening: [
                    { 
                        ...TAINAN_ASSETS.find((a: any) => a.id === 'tn-a1')!,
                        instanceId: 'tn-c1-h6',
                        startTime: '19:00',
                        timeLabel: '夜間 Night', 
                        arrivalTransport: 'walk' 
                    }
                ],
                night: [],
                accommodation: [
                    { ...TAINAN_ASSETS.find((a: any) => a.id === 'tn-h1')!, instanceId: 'tn-c1-acc' }
                ]
            }
        }
    },
    {
        id: 'kh-curated-1',
        name: '港都的新舊美學：從碼頭到老街',
        nameEn: 'Kaohsiung Harbor Aesthetics',
        title: '高雄：海港汽笛下的極簡美學',
        titleEn: 'Kaohsiung: Minimalism Under the Harbor Whistle',
        author: 'Antigravity',
        authorEn: 'Antigravity',
        authorId: 'c-tw1',
        region: 'kaohsiung',
        tags: ['設計', '藝術', '海港'],
        tagsEn: ['Design', 'Art', 'Harbor'],
        duration: 1,
        rating: 4.8,
        price: 0,
        tier: 'creator',
        authorStory: {
            zh: '高雄是一座正在劇烈變化的城市。從鋼鐵重工業轉型為文創藝術之都。這份行程帶你從最具傳奇色彩的早餐店出發，一路延伸到藝術家群聚的港邊倉庫。',
            en: 'Kaohsiung is a city in rapid transformation. From heavy industry to a creative hub. This itinerary starts from a legendary breakfast shop and moves to the artist-populated harbor warehouses.'
        },
        faq: [
            { title: '駁二那麼大，該從哪裡逛起？', text: '如果喜歡精緻小店，請直攻「大義區」；如果想看大型藝術裝置與草皮，請去「蓬萊區」。' },
            { title: '手作課程需要提前預約嗎？', text: '強烈建議提前預約，特別是駁二大義區的熱門工作坊，假日通常一位難求。' }
        ],
        dayPreviews: [
            { day: 1, summary: '老江紅茶 → 駁二藝術特區 → 木工體驗 → 愛河之心 → 岡山羊肉' }
        ],
        schedule: {
            'Day 1': {
                morning: [
                    { 
                        ...KAOHSIUNG_ASSETS.find((a: any) => a.id === 'kh-f1')!,
                        instanceId: 'kh-c1-h1',
                        startTime: '09:00',
                        timeLabel: '早餐 Breakfast', 
                        arrivalTransport: 'public' 
                    }
                ],
                afternoon: [
                    { 
                        ...KAOHSIUNG_ASSETS.find((a: any) => a.id === 'kh-a1')!,
                        instanceId: 'kh-c1-h2',
                        startTime: '11:00',
                        timeLabel: '上午 Morning', 
                        arrivalTransport: 'public' 
                    },
                    { 
                        ...KAOHSIUNG_ASSETS.find((a: any) => a.id === 'kh-exp1')!,
                        instanceId: 'kh-c1-h3',
                        startTime: '14:00',
                        timeLabel: '下午 Afternoon', 
                        arrivalTransport: 'walk' 
                    },
                    { 
                        ...KAOHSIUNG_ASSETS.find((a: any) => a.id === 'kh-a2')!,
                        instanceId: 'kh-c1-h4',
                        startTime: '16:30',
                        timeLabel: '傍晚 Evening', 
                        arrivalTransport: 'public' 
                    }
                ],
                evening: [
                    { 
                        ...KAOHSIUNG_ASSETS.find((a: any) => a.id === 'kh-f2')!,
                        instanceId: 'kh-c1-h5',
                        startTime: '19:00',
                        timeLabel: '晚餐 Dinner', 
                        arrivalTransport: 'car' 
                    },
                    { 
                        ...KAOHSIUNG_ASSETS.find((a: any) => a.id === 'kh-f3')!,
                        instanceId: 'kh-c1-h6',
                        startTime: '19:00',
                        arrivalTransport: 'public' 
                    }
                ],
                night: [],
                accommodation: [
                    { ...KAOHSIUNG_ASSETS.find((a: any) => a.id === 'kh-h1')!, instanceId: 'kh-c1-acc' }
                ]
            }
        }
    },
    {
        id: 'cy-curated-1',
        name: '雲巔之上的茶香與森林鐵道',
        nameEn: 'Alishan: Clouds & Tea Railway',
        title: '阿里山：隱沒在海拔兩千公尺的森之呼吸',
        titleEn: 'Alishan: Forest Breath at 2000 Meters',
        author: 'Antigravity',
        authorEn: 'Antigravity',
        authorId: 'c-tw1',
        region: 'chiayi',
        tags: ['自然', '日出', '森林'],
        tagsEn: ['Nature', 'Sunrise', 'Forest'],
        duration: 2,
        rating: 4.9,
        price: 0,
        tier: 'creator',
        authorStory: {
            zh: '阿里山不僅是日出，更是一種在高海拔與自然對話的修煉。我們從嘉義市區的火雞肉飯出發，緩緩爬升進入雲霧之鄉。',
            en: 'Alishan is more than just a sunrise; it\'s a practice of dialogue with nature. We start from turkey rice in the city and slowly climb into the land of mists.'
        },
        faq: [
            { title: '日出火車票一定要前一天預購嗎？', text: '強烈建議！祝山線火車每天名額有限，通常在日出前半小時發車，務必確認當日的日出公告時間。' },
            { title: '冬天去阿里山會很冷嗎？', text: '山上與山下溫差極大（可達10度以上），即使是夏天，清晨觀日也會感到寒意，建議洋蔥式穿法。' }
        ],
        dayPreviews: [
            { day: 1, summary: '嘉義火雞肉飯 → 阿里山林鐵 → 石棹揉茶 → 神木區' },
            { day: 2, summary: '祝山觀日出 → 雲海攝影 → 奮起湖老街' }
        ],
        schedule: {
            'Day 1': {
                morning: [
                    { 
                        ...CHIAYI_ASSETS.find((a: any) => a.id === 'cy-f1')!,
                        instanceId: 'cy-c1-h1',
                        startTime: '10:00',
                        timeLabel: '上午 Morning', 
                        arrivalTransport: 'car' 
                    }
                ],
                afternoon: [
                    { 
                        ...CHIAYI_ASSETS.find((a: any) => a.id === 'cy-a2')!,
                        instanceId: 'cy-c1-h2',
                        startTime: '13:00',
                        timeLabel: '午餐 Lunch', 
                        arrivalTransport: 'public' 
                    },
                    { 
                        ...CHIAYI_ASSETS.find((a: any) => a.id === 'cy-exp1')!,
                        instanceId: 'cy-c1-h3',
                        startTime: '15:30',
                        timeLabel: '下午 Afternoon', 
                        arrivalTransport: 'car' 
                    }
                ],
                evening: [
                    { 
                        ...CHIAYI_ASSETS.find((a: any) => a.id === 'cy-f2')!,
                        instanceId: 'cy-c1-h4',
                        startTime: '18:00',
                        timeLabel: '晚餐 Dinner', 
                        arrivalTransport: 'walk' 
                    }
                ],
                night: [],
                accommodation: [
                    { ...CHIAYI_ASSETS.find((a: any) => a.id === 'cy-h1')!, instanceId: 'cy-c1-acc' }
                ]
            },
            'Day 2': {
                morning: [
                    { 
                        ...CHIAYI_ASSETS.find((a: any) => a.id === 'cy-a1')!,
                        instanceId: 'cy-c1-h5',
                        startTime: '05:00',
                        timeLabel: '日出 Sunrise', 
                        arrivalTransport: 'public' 
                    }
                ],
                afternoon: [], evening: [], night: [], accommodation: []
            }
        }
    },
    {
        id: 'nt-curated-1',
        name: '漫步湖光山色：邵族文化與紅茶香',
        nameEn: 'Sun Moon Lake: Serenity & Culture',
        title: '日月潭：世界最美自行車道上的慢活',
        titleEn: 'Sun Moon Lake: Slow Life on World\'s Best Cycling Path',
        author: 'Antigravity',
        authorEn: 'Antigravity',
        authorId: 'c-tw1',
        region: 'nantou',
        tags: ['悠閒', '風景', '文化'],
        tagsEn: ['Leisure', 'Scenery', 'Culture'],
        duration: 1,
        rating: 4.7,
        price: 0,
        tier: 'creator',
        authorStory: {
            zh: '日月潭的清晨，湖面上的薄霧像層面紗。這份行程避開了吵雜的團客區，帶你踏上最美的車道，聞著紅玉紅茶的焦糖香氣前行。',
            en: 'Sun Moon Lake mornings are veiled in mist. This plan avoids tourist crowds, leading you to the world\'s best cycling path and the aroma of Ruby Black Tea.'
        },
        faq: [
            { title: '單車環湖一圈要多久？', text: '環湖步道全長約 30 公里。本行程建議「水社」到「向山」的精華段，單程約 20 分鐘，輕鬆寫意。' },
            { title: '遊湖船票可以現場買嗎？', text: '可以。每個碼頭都有售票處。建議買全票一日券，可以無限次往返各碼頭。' }
        ],
        dayPreviews: [
            { day: 1, summary: '水社碼頭 → 邵族風味餐 → 向山單車道 → 纜車體驗' }
        ],
        schedule: {
            'Day 1': {
                morning: [
                    { 
                        ...NANTOU_ASSETS.find((a: any) => a.id === 'nt-a1')!,
                        instanceId: 'nt-c1-h1',
                        startTime: '09:00',
                        timeLabel: '上午 Morning', 
                        arrivalTransport: 'public' 
                    }
                ],
                afternoon: [
                    { 
                        ...NANTOU_ASSETS.find((a: any) => a.id === 'nt-f1')!,
                        instanceId: 'nt-c1-h2',
                        startTime: '11:30',
                        timeLabel: '午餐 Lunch', 
                        arrivalTransport: 'walk' 
                    },
                    { 
                        ...NANTOU_ASSETS.find((a: any) => a.id === 'nt-f2')!,
                        instanceId: 'nt-c1-h3',
                        startTime: '11:45',
                        timeLabel: '午間輕食 Light Lunch', 
                        arrivalTransport: 'walk' 
                    },
                    { 
                         ...NANTOU_ASSETS.find((a: any) => a.id === 'nt-exp1')!,
                        instanceId: 'nt-c1-h4',
                        startTime: '14:00',
                        timeLabel: '下午 Afternoon', 
                        arrivalTransport: 'public' 
                    },
                    { 
                        ...NANTOU_ASSETS.find((a: any) => a.id === 'nt-a2')!,
                        instanceId: 'nt-c1-h5',
                        startTime: '16:00',
                        timeLabel: '傍晚 Evening', 
                        arrivalTransport: 'car' 
                    }
                ],
                evening: [], night: [],
                accommodation: [
                    { ...NANTOU_ASSETS.find((a: any) => a.id === 'nt-h1')!, instanceId: 'nt-c1-acc' }
                ]
            }
        }
    },
    {
        id: 'hl-curated-1',
        name: '大地的力量：太魯閣與原民織紋',
        nameEn: 'Hualien: Canyon & Indigenous Heritage',
        title: '花蓮：在太平洋與大理石岩壁間的深度共鳴',
        titleEn: 'Hualien: Deep Resonance Between Pacific & Marble Cliffs',
        author: '子瑄',
        authorEn: 'Zi Xuan',
        authorId: 'c-tw4',
        region: 'hualien',
        tags: ['自然', '震撼', '文化'],
        tagsEn: ['Nature', 'Stunning', 'Culture'],
        duration: 2,
        rating: 4.9,
        price: 0,
        tier: 'creator',
        authorStory: {
            zh: '花蓮的美是狂野且溫柔的。我們深入太魯閣的裂縫，聽溪水切開巨石的聲音；我們走進部落，在長輩的帶領下感受織紋背後的土地記憶。',
            en: 'Hualien is wild yet gentle. We deep-dive into Taroko canyons and visit indigenous tribes to learn history through weaving patterns.'
        },
        faq: [
            { title: '太魯閣燕子口需要帶安全帽嗎？', text: '需要。現場有免費借用站，入內參觀請務必配戴，以防落石風險。' },
            { title: '部落廚房可以當天直接去嗎？', text: '不行。部落私房菜通常需要提前 3-7 天預約備料。' }
        ],
        dayPreviews: [
            { day: 1, summary: '太魯閣燕子口 → 部落風味餐 → 織紋體驗 → 七星潭' },
            { day: 2, summary: '松園別館 → 四八高地 → 炸彈蔥油餅' }
        ],
        schedule: {
            'Day 1': {
                morning: [
                    { 
                        ...HUALIEN_ASSETS.find((a: any) => a.id === 'hl-a4')!,
                        instanceId: 'hl-c1-h1',
                        startTime: '09:00',
                        timeLabel: '上午 Morning', 
                        arrivalTransport: 'car' 
                    }
                ],
                afternoon: [
                    { 
                        ...HUALIEN_ASSETS.find((a: any) => a.id === 'hl-f3')!,
                        instanceId: 'hl-c1-h2',
                        startTime: '12:00',
                        timeLabel: '午餐 Lunch', 
                        arrivalTransport: 'car' 
                    },
                    { 
                        ...HUALIEN_ASSETS.find((a: any) => a.id === 'hl-exp1')!,
                        instanceId: 'hl-c1-h3',
                        startTime: '14:30',
                        timeLabel: '下午 Afternoon', 
                        arrivalTransport: 'walk' 
                    }
                ],
                evening: [
                    { 
                        ...HUALIEN_ASSETS.find((a: any) => a.id === 'hl-f2')!,
                        instanceId: 'hl-c1-h4',
                        startTime: '18:00',
                        timeLabel: '晚餐 Dinner', 
                        arrivalTransport: 'walk' 
                    }
                ],
                night: [],
                accommodation: [
                    { ...HUALIEN_ASSETS.find((a: any) => a.id === 'hl-h1')!, instanceId: 'hl-c1-acc' }
                ]
            },
            'Day 2': {
                morning: [
                    { 
                         ...HUALIEN_ASSETS.find((a: any) => a.id === 'hl-a2')!,
                         instanceId: 'hl-c1-h5',
                         startTime: '10:00',
                         timeLabel: '上午 Morning', 
                         arrivalTransport: 'public' 
                    }
                ],
                afternoon: [], evening: [], night: [], accommodation: []
            }
        }
    }
];
