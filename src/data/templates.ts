/**
 * Travel Templates Data
 * Last Refresh: 2026-04-07 (Taipei Visual Enrichment Complete)
 */
import { Template } from '../types';
import { TAIPEI_ASSETS, TAINAN_ASSETS, HUALIEN_ASSETS, TAICHUNG_ASSETS, KAOHSIUNG_ASSETS, CHIAYI_ASSETS, NANTOU_ASSETS } from './assets/taiwan';
import { CULTURAL_WONDERS } from './assets/taiwan/wonders';

// 達人模板 - Curated for MVP Launch
export const TEMPLATES: Template[] = [
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
        isHidden: true,
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
        isHidden: true,
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
        isHidden: true,
        tags: ['🥇 必訪地標', '🍜 在地美食', '🏛️ 文化瑰寶'],
        tagsEn: ['Must-Visit', 'Local Food', 'Cultural'],
        duration: 1,
        rating: 4.9,
        price: 0,
        tier: 'official',
        copiedCount: 3450,
        coverImage: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=1200',
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
                        ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a-grandhotel')!,
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
        isHidden: true,
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
        isHidden: true,
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
        isHidden: true,
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
                        ...TAICHUNG_ASSETS.find(a => a.id === 'tc-f10')!,
                        instanceId: 'tc-h-b1',
                        startTime: '08:30',
                        timeLabel: '早餐 Breakfast',
                        arrivalTransport: 'public'
                    },
                    {
                        ...TAICHUNG_ASSETS.find(a => a.id === 'tc-a4')!,
                        instanceId: 'tc-h-m1',
                        startTime: '10:00',
                        arrivalTransport: 'public'
                    }
                ],
                afternoon: [
                    {
                        ...TAICHUNG_ASSETS.find(a => a.id === 'tc-f5')!,
                        instanceId: 'tc-h-l1',
                        startTime: '12:30',
                        timeLabel: '午餐 Lunch',
                        arrivalTransport: 'public'
                    },
                    {
                        ...TAICHUNG_ASSETS.find(a => a.id === 'tc-a7')!,
                        instanceId: 'tc-h-a1',
                        startTime: '14:30',
                        arrivalTransport: 'walk'
                    },
                    {
                        ...TAICHUNG_ASSETS.find(a => a.id === 'tc-a5')!,
                        instanceId: 'tc-h-a2',
                        startTime: '16:30',
                        arrivalTransport: 'public'
                    }
                ],
                evening: [
                    {
                        ...TAICHUNG_ASSETS.find(a => a.id === 'tc-a6')!,
                        instanceId: 'tc-h-e1',
                        startTime: '18:00',
                        arrivalTransport: 'public'
                    },
                    {
                        ...TAICHUNG_ASSETS.find(a => a.id === 'tc-f7')!,
                        instanceId: 'tc-h-e2',
                        startTime: '19:30',
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
        isHidden: true,
        tags: ['文化', '美食', '古都'],
        tagsEn: ['Culture', 'Food', 'Ancient City'],
        duration: 1,
        rating: 4.9,
        price: 0,
        tier: 'creator',
        coverImage: 'https://images.unsplash.com/photo-1621848296279-7751546e9acc?auto=format&fit=crop&q=80&w=800',
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
        isHidden: true,
        tags: ['設計', '藝術', '海港'],
        tagsEn: ['Design', 'Art', 'Harbor'],
        duration: 1,
        rating: 4.8,
        price: 0,
        tier: 'creator',
        coverImage: 'https://images.unsplash.com/photo-1647685101882-6bd1835e3263?auto=format&fit=crop&q=80&w=800',
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
        isHidden: true,
        tags: ['自然', '日出', '森林'],
        tagsEn: ['Nature', 'Sunrise', 'Forest'],
        duration: 2,
        rating: 4.9,
        price: 0,
        tier: 'creator',
        coverImage: 'https://images.unsplash.com/photo-1675990275056-8012982fb446?auto=format&fit=crop&q=80&w=800',
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
        isHidden: true,
        tags: ['悠閒', '風景', '文化'],
        tagsEn: ['Leisure', 'Scenery', 'Culture'],
        duration: 1,
        rating: 4.7,
        price: 0,
        tier: 'creator',
        coverImage: 'https://images.unsplash.com/photo-1719340198760-434a1763b3ac?auto=format&fit=crop&q=80&w=800',
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
        id: 'circuit-tp-family',
        name: '台北親子旗艦：無痛育兒與都會探索 6D/5N',
        nameEn: 'Taipei Family Flagship 6D5N',
        title: '台北親子旗艦：6D/5N 無痛育兒與都會探索',
        titleEn: 'Taipei Family Flagship: 6D5N Stress-Free City Exploration',
        author: 'Family Escape Lab',
        authorEn: 'Family Escape Lab',
        authorId: 'c-tw-family',
        region: 'taipei',
        tags: ['親子旗艦', '零決策', '教育與科技'],
        tagsEn: ['Family Flagship', 'Zero-Decision', 'Edu-Tech'],
        duration: 6,
        rating: 5.0,
        price: 0,
        tier: 'official',
        lastUpdated: '2026/04/20',
        coverImage: 'https://plus.unsplash.com/premium_photo-1682094139633-b06316cee50f?q=80&w=1740&?auto=format&fit=crop&q=80&w=1200',
        highlights: { days: 6, spots: 20, tips: 16, rating: 5.0, usageCount: 4200 },
        vibes: [
            { tag: '#親子奇蹟', color: 'bg-pink-100 text-pink-800' },
            { tag: '#零決策攻略', color: 'bg-amber-100 text-amber-800' },
            { tag: '#黑科技體驗', color: 'bg-blue-100 text-blue-800' }
        ],
        valueProps: [
            { zh: '零決策排程', en: '⚡ ZERO DECISION', descZh: '全程手動排雷', descEn: 'Fully optimized' },
            { zh: '親子認證', en: '🛡️ KIDS VERIFIED', descZh: '孩子笑容保證', descEn: 'Family-approved' },
            { zh: '物流配套', en: '📦 LOGISTICS PRO', descZh: '含寄存與預約', descEn: 'Booking & pickup' }
        ],
        coverStory: {
            quote: '「帶小孩出國不是挑戰，而是與他們一起重新看世界的機會。」',
            quoteEn: '"Traveling with kids isn\'t a challenge, but a chance to see the world again through their eyes."',
            description: '【2026/04/20 更新 | 2024/05/10 發佈】這是為 5-16 歲孩子量身打造的台北終極劇本。從清晨的恐龍探險到深夜的潮流西門町，我們精確計算了體力、交通與「小睡窗口」，讓父母能在享受旅行的同時，看著孩子在科技與自然中發光。',
            descriptionEn: '[Updated 2026/04/20 | Published 2024/05/10] The ultimate Taipei script for kids aged 5-16. From dinosaur adventures to Ximending, we\'ve precisely calculated energy levels and "nap windows." Enjoy Taipei while watching your kids shine through tech and nature.',
            authorLabel: 'TravelCanvas 官方旗艦推薦',
            authorLabelEn: 'TravelCanvas Official Flagship Recommendation'
        },
        authorStory: {
            zh: '身為兩位孩子的父親，我深知帶娃旅行的痛點。這份 96 小時的旗艦行程，是我在台北實測無數次後的黃金動線。我們為您精選了最適合家庭的景點與動線。',
            en: 'As a father of two, I know the pain points of family travel. This 96-hour itinerary is the gold standard after countless tests, curated to ensure the best family experience.'
        },
        preparationGuide: [
            {
                title: '現金依然是關鍵',
                titleEn: 'Cash is Queen',
                text: '雖然百貨公司可刷卡，但行程中的「夜市」與「在地老店」幾乎只收現金。建議隨身準備 NT$2000-3000 現金。',
                textEn: 'While malls take cards, "night markets" and "local gems" in this script are cash-only. Keep NT$2000-3000 on hand.',
                icon: 'Banknote'
            },
            {
                title: '悠遊卡：您的交通金鑰',
                titleEn: 'EasyCard: Your Transit Key',
                text: '捷運、公車甚至部分景點門票都能感應付費。省去排隊買票的時間，對帶著小孩的家庭至關重要。',
                textEn: 'Use it for MRT, buses, and even some attraction entries. Skipping the ticket lines is a lifesaver for families.',
                icon: 'CreditCard'
            },
            {
                title: '事前預訂：北海岸包車',
                titleEn: 'Pre-book: Chartered Car',
                text: 'Day 5 的野柳與十分行程跨度極大。為了避免小孩崩潰與現場叫不到車的窘境，強烈建議在出發前就打開 Klook 或 KKday 預訂「台北 8 小時包車」。',
                textEn: 'Day 5 covers a huge distance. To avoid meltdowns and taxi shortages, pre-book an "8-Hour Taipei Chartered Car" via Klook or KKday before your trip.',
                icon: 'Car'
            }
        ],
        faq: [
            { title: '捷運還是計程車？', titleEn: 'MRT or Taxi?', text: '台北捷運推車友善度極高，但我建議早晚尖峰時段（08:00 / 18:00）果斷換成計程車/Uber，這對維持小孩情緒至關重要。', textEn: 'Taipei MRT is very stroller-friendly, but I recommend taking a taxi/Uber during peak hours (08:00 / 18:00) to keep the kids comfortable.' },
            { title: '需要買聯票嗎？', titleEn: 'Need Combo Tickets?', text: '直接刷悠遊卡進場最快。動物園、貓纜、土銀展示館都能感應進場，免去排隊領票的崩潰感。', textEn: 'Just use EasyCard/TPASS for entry. Zoo, Gondola, and museums all support it—skip the ticket lines and avoid meltdowns.' },
            { title: '行李寄放建議', titleEn: 'Luggage Storage', text: '若住宿地點還無法 check in，建議將行李寄放在北車置物櫃（機捷 A1 站或北車地下街出口都有大型櫃位），這對開啟輕鬆的第一天至關重要。', textEn: 'If you can\'t check in yet, luggage lockers at Taipei Station or Airport MRT A1 terminal are highly recommended for a stress-free start.' },
            { title: '數位工具建議', titleEn: 'Digital Survival Kit', text: '建議下載 Uber、Grab 或 55688 App 進行叫車。地圖建議使用 Google Maps，並下載台北離線地圖。捷運與交通動態可使用 Bus+。', textEn: 'Download Uber or 55688 for taxis. Use Google Maps with offline maps downloaded. For real-time transit, Bus+ is the local favorite.' }
        ],
        dayPreviews: [
            {
                day: 1,
                summary: '台北站前恐龍探險 → 鼎泰豐午餐 → 101 高空視野 → 信義區潮流',
                summaryEn: 'Dinosaur discovery at Taipei Station → Din Tai Fung → Taipei 101 Heights → Xinyi Trends'
            },
            {
                day: 2,
                summary: '紅樹林生態教室 → 淡水老街阿給 → 八里渡輪單車 → 漁人碼頭日落 → 士林夜市',
                summaryEn: 'Mangrove Eco-Class → Tamsui Agei → Bali Ferry & Cycling → Fisherman\'s Wharf Sunset → Shilin Night Market'
            },
            {
                day: 3,
                summary: '動物園全下坡體力不支攻略 → 貓空水晶車廂日落 → 彩虹橋 → 饒河夜市',
                summaryEn: 'Zoo Downhill Hack → Maokong Crystal Cabin Sunset → Rainbow Bridge → Raohe Night Market'
            },
            {
                day: 4,
                summary: '北門名店早午餐 → 鐵道博物館 → 復古食堂午餐 → 三創生活園區 → 西門町潮流散步',
                summaryEn: 'Beimen Brunch → Railway Museum → Vintage Canteen Lunch → Syntrend Tech → Ximending Walk'
            },
            {
                day: 5,
                summary: '野柳魔岩地質探索 → 十分老街天燈祈福',
                summaryEn: 'Yehliu Geopark Exploration → Shifen Old St. Lanterns'
            },
            {
                day: 6,
                summary: '北投溫泉地熱谷 → 溫泉博物館 → 悠哉賦歸',
                summaryEn: 'Beitou Thermal Valley → Hot Spring Museum → Relaxed Departure'
            }
        ],
        schedule: {
            'Day 1': {
                theme: '【啟航】歷史巨獸與城市高度',
                themeEn: '【Launch】Historic Giants & Urban Heights',
                energyLevel: 'moderate',
                restReminder: '達人溫馨提醒：下午前往 101 前步行較多，建議先在商場買個果汁讓孩子稍微休息。',
                restReminderEn: '☕️ Expert tip: Grab a juice before walking to Taipei 101 to let the kids recharge.',
                morning: [
                    {
                        id: 'luggage-first',
                        title: '先寄行李再出發',
                        titleEn: '⚠️ Drop Luggage First!',
                        itemType: 'spot',
                        startTime: '09:00',
                        arrivalTransport: 'public',
                        expertNote: '🧳 行李提示：若飯店尚未開放 Check-in，請先至台北車站地下街 Z4 出口的置物櫃寄放行李。帶著大包小包去恐龍博物館是一場噩夢。',
                        expertNoteEn: '🧳 Do this FIRST: If your hotel is not ready, store bags at Taipei Main Station lockers (Underground Mall, Exit Z4). Dragging suitcases to a dinosaur museum with kids = disaster.'
                    },
                    {
                        ...TAIPEI_ASSETS.find((a: any) => a.id === 'tw-t-fam-dino')!,
                        instanceId: 'f1-1',
                        startTime: '10:00',
                        arrivalTransport: 'public',
                        facilityTags: ['easycard', 'stroller', 'restroom-1f'],
                        expertNote: '🚇 交通：搭乘「捷運藍線」或「紅線」至台北車站，步行 5 分鐘。建議直接刷悠遊卡進場。',
                        expertNoteEn: '🚇 Transit: Take BLUE or RED line to Taipei Main Station, 5-min walk. Use EasyCard for entry.',
                        driverNote: '100台北市中正區襄陽路25號',
                    }
                ],
                afternoon: [
                    {
                        ...TAIPEI_ASSETS.find((a: any) => a.id === 'tw-t-f5')!,
                        instanceId: 'f1-2',
                        startTime: '12:30',
                        timeLabel: '名店午餐 Lunch',
                        arrivalTransport: 'public',
                        facilityTags: ['kid-menu'],
                        expertNote: '即便在 101 也要早點取號！店員對小孩極其友善。💡 達人提示：點擊景點卡片查看「即時排隊進度」。',
                        expertNoteEn: 'Grab a number early! The staff is kid-friendly. 💡 Expert Tip: Click the card to check "Real-time Queue Status".',
                        kidFriendlyTip: '推薦點「清燉牛肉麵（不辣）」與「原味小籠包」，店內備有兒童餐具及安全剪刀。',
                        kidFriendlyTipEn: 'We recommend "Clear Broth Beef Noodle (Non-spicy)" and "Classic Soup Dumplings". Child utensils/scissors available.'
                    },
                    {
                        ...TAIPEI_ASSETS.find((a: any) => a.id === 'tw-t-a8')!,
                        instanceId: 'f1-3',
                        startTime: '15:00',
                        arrivalTransport: 'public',
                        facilityTags: ['stroller', 'elevator', 'restroom', 'booking'],
                        expertNote: '🚇 交通：從台北車站搭乘「捷運紅線」直達【台北 101/世貿站】。89 樓有雲朵拍照點。☕ 家長充電：這層的 %Arabica 咖啡。',
                        expertNoteEn: '🚇 Transit: Take RED line directly to [Taipei 101 Station]. Cloud photo spots on 89F. ☕ Parent Recharge: %Arabica on this floor.',
                        driverNote: '110台北市信義區信義路五段7號',
                    }
                ],
                evening: [
                    {
                        id: 'custom-ximy-walk',
                        title: '信義香堤大道散步',
                        titleEn: 'Xinyi Xiangti Avenue Walk',
                        itemType: 'spot',
                        startTime: '18:30',
                        arrivalTransport: 'walk',
                        expertNote: '信義區晚上充滿了水準極高的街頭藝人。找張長椅坐下看表演，這是台北最現代、最 chill 的親子時光。',
                        expertNoteEn: 'Xinyi at night is full of top-tier street performers. Find a bench and enjoy the show; it\'s Taipei\'s most modern and chill family time.'
                    }
                ],
                night: [], accommodation: []
            },
            'Day 2': {
                theme: '【生態】淡水河畔的河岸日記',
                themeEn: '【Ecology】Riverside Journal of Tamsui',
                energyLevel: 'high',
                restReminder: '達人溫馨提醒：八里騎車較耗體力且容易曬傷，建議下午三點左右到附近特色咖啡廳躲太陽兼補充水分。',
                restReminderEn: '☕️ Expert tip: Bali cycling can be draining under the sun. Grab a cafe break around 3 PM to rehydrate.',
                morning: [
                    {
                        ...TAIPEI_ASSETS.find((a: any) => a.id === 'tw-t-fam-mangrove')!,
                        instanceId: 'f2-1',
                        startTime: '10:00',
                        arrivalTransport: 'public',
                        facilityTags: ['stroller', 'restroom', 'free-entry'],
                        expertNote: '🚇 交通：搭乘「捷運紅線」一路向北直達【紅樹林站】。2 號出口出站即達。這裡是全台唯一能近距離看水筆仔的地方，記得找螃蟹！',
                        expertNoteEn: '🚇 Transit: Take RED line all the way north to [Mangrove Station]. Exit 2 is right there. Look for crabs!'
                    }
                ],
                afternoon: [
                    {
                        ...TAIPEI_ASSETS.find((a: any) => a.id === 'tw-t-f-agei')!,
                        instanceId: 'f2-2',
                        startTime: '12:30',
                        timeLabel: '在地食育 Food',
                        arrivalTransport: 'public',
                        facilityTags: ['kid-menu'],
                        expertNote: '真理街的三間阿給都不錯。教孩子如何切開豆腐讓冬粉吸湯，這是一場餐桌上的動手實驗。',
                        expertNoteEn: 'The three Agei shops on Zhenli Street are all good. Teach kids to cut open the tofu to soak the soup—it\'s a table-top experiment.',
                        kidFriendlyTip: '阿給的醬汁通常帶微辣，記得點餐時請老闆「醬汁分開裝」，並多點一碗清淡的魚丸湯給小孩。',
                        kidFriendlyTipEn: 'Agei sauce can be spicy. Ask to put the sauce on the side, and order a mild fishball soup for the kids.'
                    },
                    {
                        ...TAIPEI_ASSETS.find((a: any) => a.id === 'tw-t-fam-bali')!,
                        instanceId: 'f2-3',
                        startTime: '14:30',
                        arrivalTransport: 'public',
                        facilityTags: ['cobblestone', 'restroom', 'rain-ok'],
                        expertNote: '渡輪上可以吹海風。八里租車請選「電動親子車」。🌧️ 雨天備案：若雨勢過大，可改往信義區室內百貨或三創園區。',
                        expertNoteEn: 'Ferry breeze is magical. Choose electric bikes. 🌧️ Rain Pivot: If pouring, head to Xinyi malls or Syntrend.'
                    }
                ],
                evening: [
                    {
                        ...TAIPEI_ASSETS.find((a: any) => a.id === 'tw-t-a13')!,
                        instanceId: 'f2-4',
                        startTime: '18:30',
                        arrivalTransport: 'public',
                        facilityTags: ['crowd-warning'],
                        expertNote: '建議鎖定「陽明戲院」周邊的小吃，避免漫無目的亂逛。',
                        expertNoteEn: 'Target snacks around Yangming Cinema — do NOT wander aimlessly.'
                    }
                ],
                night: [], accommodation: []
            },
            'Day 3': {
                theme: '【野性】森林呼吸與山影星辰',
                themeEn: '【Wild】Forest Breaths & Mountain Shadows',
                energyLevel: 'intense',
                restReminder: '達人溫馨提醒：動物園佔地廣，逛完後務必在搭乘貓纜前，讓孩子吃點點心，避免低血糖引發情緒失控。',
                restReminderEn: '☕️ Expert tip: The Zoo is massive. Have some snacks before taking the Gondola to avoid low-blood-sugar meltdowns.',
                morning: [
                    {
                        ...TAIPEI_ASSETS.find((a: any) => a.id === 'tw-t-fam-zoo')!,
                        instanceId: 'f3-1',
                        startTime: '09:30',
                        arrivalTransport: 'public',
                        facilityTags: ['stroller', 'restroom', 'kid-friendly'],
                        expertNote: '🚇 交通：搭乘「捷運棕線（文湖線）」終點站【動物園站】。🚸 生存密技：搭接駁車上山！🌧️ 雨天備案：可改往士林科教館 (NTSEC)。',
                        expertNoteEn: '🚇 Transit: Take BROWN line to the terminal [Taipei Zoo Station]. 🚸 Hack: Take the shuttle up! 🌧️ Rain Pivot: Switch Zoo to NTSEC Science Museum.',
                        driverNote: '116台北市文山區新光路二段30號',
                    }
                ],
                afternoon: [
                    {
                        ...TAIPEI_ASSETS.find((a: any) => a.id === 'tw-t-fam-mao')!,
                        instanceId: 'f3-2',
                        startTime: '14:30',
                        arrivalTransport: 'public',
                        expertNote: '一定要試試鐵觀音霜淇淋。🍵 家長回血：貓空茶屋是絕佳的小睡窗口。',
                        expertNoteEn: 'Try the Tieguanyin soft serve. 🍵 Parent Recharge: Maokong tea houses are the perfect nap-window spots.'
                    },
                    {
                        id: 'nap-window-3',
                        title: '小睡續命窗口',
                        titleEn: 'Nap Window',
                        itemType: 'spot',
                        startTime: '16:30',
                        arrivalTransport: 'taxi',
                        expertNote: '🚕 計程車約 25 分鐘前往饒河。這是小孩補充體力的黃金關鍵，家長也能在安靜的車內歇口氣。',
                        expertNoteEn: '🚕 Taxi takes ~25 mins to Raohe. This is critical for kids to recharge; parents can rest in the quiet car too.'
                    }
                ],
                evening: [
                    {
                        ...TAIPEI_ASSETS.find((a: any) => a.id === 'tw-t-a9')!,
                        instanceId: 'f3-3',
                        startTime: '18:30',
                        arrivalTransport: 'walk',
                        facilityTags: ['crowd-warning', 'kid-menu'],
                        expertNote: '饒河夜市胡椒餅排隊很長，先買好再帶孩子去旁邊的「彩虹橋」河濱坐著吃，涼爽又安靜。',
                        expertNoteEn: 'Pepper bun lines get very long. Buy first, then take the kids to Rainbow Bridge riverside to eat in the breeze — cool, quiet, perfect.',
                        kidFriendlyTip: '除了胡椒餅，夜市內的「明太子玉子燒」和「地瓜球」是絕佳的安全牌小吃。',
                        kidFriendlyTipEn: 'Besides pepper buns, the Tamagoyaki and Sweet Potato Balls are great safe choices for kids.'
                    }
                ],
                night: [], accommodation: []
            },
            'Day 4': {
                theme: '【未來】黑科技與潮流夜臺北',
                themeEn: '【Future】High-Tech & Night Taipei Trends',
                energyLevel: 'high',
                restReminder: '達人溫馨提醒：三創園區樓層多，建議中間安排 30 分鐘讓小孩在 11 樓咖啡廳安靜休息。',
                restReminderEn: '☕️ Expert tip: Syntrend has many floors. Take a 30-min break at the 11F cafe so kids don\'t burn out.',
                morning: [
                    {
                        ...TAIPEI_ASSETS.find((a: any) => a.id === 'tw-t-fam-brunch-beimen')!,
                        instanceId: 'f4-1',
                        startTime: '09:30',
                        arrivalTransport: 'public',
                        expertNote: '北門旁的人氣名店。大份量拼盤非常適合全家分食，在開啟博物館行程前先把能量補滿。',
                        expertNoteEn: 'Popular spot near Beimen. The large platters are great for family sharing; recharge fully before the museum tour.'
                    },
                    {
                        ...TAIPEI_ASSETS.find((a: any) => a.id === 'tw-t-fam-ntrm')!,
                        instanceId: 'f4-2',
                        startTime: '11:00',
                        arrivalTransport: 'walk',
                        facilityTags: ['closed-mon', 'kid-friendly'],
                        expertNote: '🚇 交通：從台北車站北門出口步行 5 分鐘。園區內的「蒸汽夢工廠」互動區是小孩最愛。',
                        expertNoteEn: '🚇 Transit: 5-min walk from Taipei Main Station Beimen exit. The Steam Dream Factory inside is a kid favorite.',
                        driverNote: '100台北市中正區延平南路2號',
                    }
                ],
                afternoon: [
                    {
                        id: 'museum-lunch',
                        title: '博物館復古食堂午餐',
                        titleEn: 'Museum Vintage Canteen Lunch',
                        itemType: 'spot',
                        startTime: '13:00',
                        arrivalTransport: 'walk',
                        facilityTags: ['kid-menu'],
                        expertNote: '園區內設有復古風格的食堂，提供簡單定食。在古蹟中用餐氛圍極佳，或是步行至三創 B2 的美食街也有極多選擇。',
                        expertNoteEn: 'The vintage canteen inside provides set meals with great vibes. Or walk to Syntrend B2 food court for more choices.',
                        kidFriendlyTip: '食堂有提供不辣的「鐵路排骨便當」，適合學齡孩童。',
                        kidFriendlyTipEn: 'The canteen offers a non-spicy "Railway Pork Chop Bento" perfect for kids.'
                    },
                    {
                        ...TAIPEI_ASSETS.find((a: any) => a.id === 'tw-t-fam-syntrend')!,
                        instanceId: 'f4-3',
                        startTime: '14:30',
                        arrivalTransport: 'public',
                        facilityTags: ['stroller', 'elevator', 'restroom', 'kid-friendly'],
                        expertNote: '達人攻略：大門 Wiwi 公仔旁有直達 B2 捷徑。☕ 家長回血：11F 咖啡空間是整棟最靜謐的休息區。',
                        expertNoteEn: 'Expert Hack: Shortcut to B2 near the Wiwi statue. ☕ Parent Recharge: 11F Coffee space is the quietest spot in the building.'
                    }
                ],
                evening: [
                    {
                        ...TAIPEI_ASSETS.find((a: any) => a.id === 'tw-t-fam-ximending')!,
                        instanceId: 'f4-4',
                        startTime: '17:30',
                        arrivalTransport: 'public',
                        expertNote: '完美句點。',
                        expertNoteEn: 'The perfect finale.',
                        driverNote: '108台北市萬華區漢中街與成都路口 (西門彩虹地標)',
                    }
                ],
                night: [], accommodation: []
            },
            'Day 5': {
                theme: '【奇幻】野柳魔岩與天燈願望',
                themeEn: '【Magic】Yehliu Rocks & Lantern Wishes',
                energyLevel: 'intense',
                restReminder: '達人溫馨提醒：這天地形起伏大，若孩子需要午睡，建議直接包車，讓孩子在車上補眠。',
                restReminderEn: '☕️ Expert tip: High physical demand today. A chartered car is highly recommended for kids to nap.',
                morning: [
                    { id: 'f5-depart', title: '飯店專車接送', titleEn: 'Hotel Pickup', itemType: 'spot', type: 'experiential', duration: '1小時', image: '🏨', description: '與預訂的包車司機會合。不需要急著趕捷運，讓全家人在飯店悠哉吃完早餐再出發。', descriptionEn: 'Meet your chartered driver at the hotel. No need to rush for trains; enjoy a relaxed breakfast.', coverImage: 'https://images.unsplash.com/photo-1542314831-c6a4d14293e5?q=80&w=1740&auto=format&fit=crop', startTime: '09:00', arrivalTransport: 'car', facilityTags: ['stroller'], expertNote: '🚐 專車指令：請約早上 09:00 從飯店出發。車程約 1 小時，可以在車上跟司機確認今天的動線與冷氣溫度。', expertNoteEn: '🚐 Car Command: Schedule pickup for 09:00. Use the 1-hour drive to confirm the route and AC temperature with the driver.', expertStories: [{id: 'must-do', label: '【會合細節】', summary: '大廳無縫接軌', story: '建議提前 10 分鐘把推車、水壺等裝備準備好。司機通常會在大廳門口等候，直接把推車收好放進後車廂，開始美好的一天。'}] },
                    {
                        ...TAIPEI_ASSETS.find((a: any) => a.id === 'tw-t-a14')!,
                        instanceId: 'f5-1',
                        startTime: '10:00',
                        arrivalTransport: 'walk',
                        facilityTags: ['cobblestone', 'weather-check'],
                        expertNote: '抵達野柳！推車只能走在主步道，若要近距離觀察奇岩，強烈建議準備「嬰兒揹巾」，或將推車暫存於遊客中心。',
                        expertNoteEn: 'Arrive at Yehliu! Strollers only work on the main path. Use a baby carrier to get close to the rocks.',
                        kidFriendlyTip: '園區內無遮蔽物，務必為孩子準備充足的水與防曬帽。',
                        kidFriendlyTipEn: 'No shade in the park. Bring plenty of water and a sun hat for the kids.'
                    }
                ],
                afternoon: [
                    { id: 'f5-transit', title: '黃金午睡專車', titleEn: 'Golden Nap Ride', itemType: 'spot', type: 'experiential', duration: '1小時', image: '💤', description: '從野柳到十分的跨區移動。這段 1 小時的山線車程，是小孩回復體力的黃金時間。', descriptionEn: 'Moving from Yehliu to Shifen. This 1-hour mountain drive is the golden time for kids to recover energy.', coverImage: 'https://images.unsplash.com/photo-1549315617-64cc124b8d76?q=80&w=1740&auto=format&fit=crop', startTime: '13:00', arrivalTransport: 'car', facilityTags: ['nap-friendly'], expertNote: '🚐 動線銜接：中午在野柳周邊吃完海鮮後，約 13:00 上車。上車前請確保小孩已經上過廁所，然後讓他們安穩睡到十分。', expertNoteEn: '🚐 Route: After lunch, board at 13:00. Make sure kids use the restroom before boarding, then let them sleep until Shifen.', expertStories: [{id: 'hidden', label: '【午休戰略】', summary: '車上充電時光', story: '這是一段非常關鍵的車程。父母也可以趁這 1 小時在冷氣車內閉目養神，抵達十分時全家都能精神飽滿地放天燈。'}] },
                    {
                        ...TAIPEI_ASSETS.find((a: any) => a.id === 'tw-t-a15')!,
                        instanceId: 'f5-2',
                        startTime: '14:00',
                        arrivalTransport: 'walk',
                        facilityTags: ['restroom', 'kid-friendly', 'kid-menu'],
                        expertNote: '抵達十分！這時孩子剛睡醒，正是情緒最穩定的時候。十分老街平坦好走，非常適合推車。',
                        expertNoteEn: 'Arrive at Shifen! Kids are freshly awake and in a good mood. The old street is flat and stroller-friendly.',
                        kidFriendlyTip: '十分老街的「無刺黑豬肉香腸」與「花生捲冰淇淋」是孩子絕對會愛上的安全小吃。',
                        kidFriendlyTipEn: 'Boneless black pork sausages and peanut ice cream rolls in Shifen are 100% kid-approved.'
                    },
                    { id: 'f5-return', title: '傍晚專車歸途', titleEn: 'Private Car Return', itemType: 'spot', type: 'experiential', duration: '1.5小時', image: '🚐', description: '經歷了一整天的北海岸與山城探索，孩子通常會在這個時間點斷電。這段長達一個多小時的車程，是全家最好的補眠時光。', descriptionEn: 'After a full day of exploration, kids will likely crash. This 1.5-hour ride is the perfect nap time for the whole family.', coverImage: 'https://images.unsplash.com/photo-1549315617-64cc124b8d76?q=80&w=1740&auto=format&fit=crop', startTime: '16:30', arrivalTransport: 'car', expertNote: '🚐 歸途策略：此時包車剛好快用滿 8 小時。請讓小孩先在十分上好廁所，上車後直接睡覺，一路開回市區的晚餐地點。', expertNoteEn: '🚐 Return Strategy: The 8-hour charter is almost up. Have kids use the restroom in Shifen, then sleep all the way back to the dinner spot in Taipei.', expertStories: [{id: 'must-do', label: '【補眠戰略】', summary: '車上黃金小睡', story: '請在十分老街讓小孩上好廁所，上車後直接讓他們睡覺。這段路程千萬別去擠客運轉火車，那是帶小孩出遊的最大災難。'}, {id: 'trap', label: '【下車地點】', summary: '直接停在餐廳門口', story: '建議跟司機溝通不要回飯店，直接將車子開到今晚預計用餐的信義區百貨（如微風南山）門口，讓小孩睡到最後一刻再無縫接軌吃晚餐。'}] }
                ],
                evening: [
                    { id: 'f5-dinner', title: '百貨親子友善晚餐', titleEn: 'Mall Family Dinner', itemType: 'spot', type: 'food', duration: '2小時', image: '🍽️', description: '野柳十分行程結束後，最棒的晚餐選擇就是信義區的百貨商場。這裡有寬敞的走道、極度乾淨的親子廁所，以及無數適合小孩的餐廳。', descriptionEn: 'The best dinner option after a tiring day is a mall in the Xinyi District. Spacious walkways, clean family restrooms, and endless kid-friendly options.', coverImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1740&auto=format&fit=crop', startTime: '18:00', arrivalTransport: 'walk', facilityTags: ['stroller', 'elevator', 'kid-menu', 'restroom-1f'], expertNote: '🍲 晚餐攻略：微風南山、A11 或是 101 的美食街。這裡不用在街頭風吹日曬，推車進出也極為方便。', expertNoteEn: '🍲 Dinner Strategy: Food courts in Breeze Nanshan or A11. No weather issues and extremely stroller friendly.', expertStories: [{id: 'must-eat', label: '【餐廳推薦】', summary: '一風堂或勝博殿', story: '推薦吃日式拉麵或炸豬排。這些連鎖餐廳對兒童極度友善，通常會主動提供兒童椅、安全餐具，甚至會送畫紙讓小孩打發時間。'}, {id: 'hidden', label: '【推車停放】', summary: '百貨空間優勢', story: '在夜市推嬰兒車是種折磨，但在信義區百貨，每個餐廳都有專門的推車停放區，廁所也配有尿布台，是父母真正的避風港。'}] }
                ], night: [], accommodation: []
            },
            'Day 6': {
                theme: '【湯煙】火山谷地與悠哉賦歸',
                themeEn: '【Steam】Volcanic Valley & Relaxed Departure',
                energyLevel: 'low',
                restReminder: '達人溫馨提醒：班機起飛當天的行程，應以「交通單純、步行極少、隨時可撤退」的溫泉小鎮為主。',
                restReminderEn: '☕️ Expert tip: The departure day should feature minimal walking and simple transit. Beitou is perfect for this.',
                morning: [
                    { id: 'f6-depart', title: '飯店退房與寄放行李', titleEn: 'Checkout & Luggage Drop', itemType: 'spot', type: 'experiential', duration: '1小時', image: '🏨', description: '吃完飯店最後一頓早餐後辦理退房。將大件行李寄放在櫃台，只帶輕便的隨身包包前往北投。', descriptionEn: 'Enjoy your final hotel breakfast, check out, and leave heavy luggage at the front desk. Travel light to Beitou.', coverImage: 'https://images.unsplash.com/photo-1542314831-c6a4d14293e5?q=80&w=1740&auto=format&fit=crop', startTime: '09:00', arrivalTransport: 'walk', facilityTags: ['stroller', 'luggage-storage'], expertNote: '🧳 零決策指令：帶小孩千萬不要拖著大行李去北投！把行李寄在飯店，或是寄放在台北車站的置物櫃，這對保持愉快心情至關重要。', expertNoteEn: '🧳 Zero-Decision: Never drag luggage to Beitou! Leave it at the hotel or Taipei Station lockers.', expertStories: [{id: 'must-do', label: '【輕裝戰略】', summary: '只帶一個後背包', story: '北投地形多斜坡，今天請務必輕裝上陣。後背包裡只需要裝水壺、薄外套與小孩的一套備用衣物即可。推車可以帶，但請確保它是輕便型的。'}] },
                    {
                        ...TAIPEI_ASSETS.find((a: any) => a.id === 'tw-t-a17')!,
                        instanceId: 'f6-1',
                        startTime: '10:00',
                        arrivalTransport: 'public',
                        facilityTags: ['nap-friendly', 'stroller', 'kid-friendly', 'kid-menu'],
                        expertNote: '🚇 交通：搭乘「捷運紅線」往北至【新北投站】。地熱谷的魔法煙霧對小孩來說非常迷人。圖書館前的草皮非常適合跑跳。',
                        expertNoteEn: '🚇 Transit: Take RED line north to [Xinbeitou Station]. Thermal Valley\'s magical mist is fascinating for kids. The grass area by the library is great for running.',
                        kidFriendlyTip: '北投市場附近的「溫泉拉麵」是不辣且孩子喜歡的口味。',
                        kidFriendlyTipEn: 'Hot spring ramen near Beitou Market is non-spicy and very kid-friendly.'
                    },
                    { id: 'f6-museum', title: '北投溫泉博物館', titleEn: 'Hot Spring Museum', itemType: 'spot', type: 'attraction', duration: '1小時', image: '🏛️', description: '這棟美麗的日式建築曾經是東亞最大的溫泉公共浴場。入內需要脫鞋，廣大的榻榻米大廳非常適合小孩子坐著休息。', descriptionEn: 'Once East Asia\'s largest public bathhouse, this beautiful Japanese building requires shoes off. The large tatami hall is great for kids to rest.', coverImage: 'https://images.unsplash.com/photo-1596706927509-5a8b79f649bf?q=80&w=1740&auto=format&fit=crop', startTime: '11:15', arrivalTransport: 'walk', facilityTags: ['free-entry', 'kid-friendly', 'stroller'], expertNote: '🏛️ 達人提示：博物館是「免費參觀」的！但請記得穿襪子（或帶一雙備用襪），因為日式古蹟規定必須穿襪才能踩踏木地板。', expertNoteEn: '🏛️ Expert Tip: Entry is FREE! But remember to wear socks as they are required on the historic wooden floors.', expertStories: [{id: 'hidden', label: '【榻榻米大廳】', summary: '最美的休息站', story: '博物館二樓有一個超大的榻榻米休息區。當你逛完地熱谷流了一身汗後，坐在這裡吹著微風，看著窗外的綠樹，絕對是北投最享受的時刻。'}, {id: 'trap', label: '【推車寄放】', summary: '館外有專屬雨遮', story: '古蹟內部不開放推車進入，但在入口處有專門且有人看管的推車寄放區，非常安全方便。'}] }
                ],
                afternoon: [
                    { id: 'f6-lunch', title: '北投滿來溫泉拉麵', titleEn: 'Man Lai Ramen', itemType: 'spot', type: 'food', duration: '1.5小時', image: '🍜', description: '看完地熱谷後，沿著斜坡走下來即可抵達。濃郁的湯頭與台式改良的溫泉拉麵，是北投最具代表性的美食之一。', descriptionEn: 'A short walk down from Thermal Valley. The rich broth and Taiwanese-style hot spring ramen make it a Beitou signature.', coverImage: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=1740&auto=format&fit=crop', startTime: '12:30', arrivalTransport: 'walk', facilityTags: ['kid-menu'], expertNote: '🍜 達人推薦：招牌的白湯叉燒拉麵，湯頭溫和不會過鹹，非常適合小孩。', expertNoteEn: '🍜 Expert Pick: The signature white broth chashu ramen is mild and not too salty—perfect for kids.', expertStories: [{id: 'must-do', label: '【送單遊戲】', summary: '沿鋼索滑便當盒', story: '這家店有一個特色：點餐時可以讓小孩把點菜單放在一個小盒子裡，沿著鋼索滑進廚房！小孩超級愛這個環節。'}, {id: 'must-eat', label: '【必點小菜】', summary: '溫泉蛋與豆腐', story: '除了拉麵，一定要點他們招牌的「溫泉蛋」與「炸豆腐」，是補充優質蛋白質的絕佳選擇。'}] },
                    { id: 'f6-luggage', title: '返回市區提取行李', titleEn: 'Luggage Retrieval', itemType: 'spot', type: 'shopping', duration: '1小時', image: '🧳', description: '搭乘捷運紅線返回市區飯店或台北車站提取行李。準備迎接這趟美好旅程的終點。', descriptionEn: 'Take the Red Line back to your hotel or Taipei Station to grab your luggage. Getting ready for departure.', coverImage: 'https://images.unsplash.com/photo-1555529733-0e670560f8e1?q=80&w=1740&auto=format&fit=crop', startTime: '14:30', arrivalTransport: 'public', facilityTags: ['elevator'], expertNote: '🚆 交通攻略：從「新北投站」搭紅線直達市區。此時是下午離峰時段，捷運通常有座位，讓小孩在車上休息。', expertNoteEn: '🚆 Transit: Red Line direct to the city. It\'s off-peak, so you\'ll likely get seats for the kids to rest.', expertStories: [{id: 'must-do', label: '【最後補給】', summary: '便利商店買零食', story: '在拿行李前，強烈建議去便利商店買一些小孩喜歡的餅乾、果汁，甚至是在地口味的軟糖。帶上飛機可以作為安撫神物！'}] }
                ],
                evening: [
                    { id: 'f6-airport', title: '機場捷運直達機場', titleEn: 'Airport MRT Express', itemType: 'spot', type: 'experiential', duration: '1.5小時', image: '✈️', description: '從台北車站 (A1) 搭乘機場捷運直達桃園機場。寬敞的車廂與平穩的行駛，為這趟親子旅程畫下完美的句點。', descriptionEn: 'Take the Airport MRT Express from A1 to Taoyuan Airport. The spacious and smooth ride is the perfect end to your family trip.', coverImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1740&auto=format&fit=crop', startTime: '16:00', arrivalTransport: 'public', facilityTags: ['stroller', 'elevator', 'restroom'], expertNote: '🧳 零決策指令：抵達台北車站後，循紫色的「桃園機場捷運」指標走。請務必搭乘紫色的「直達車(Express)」，只要 35 分鐘就能到機場。', expertNoteEn: '🧳 Zero-Decision: Follow purple signs to Airport MRT. Make sure to board the Purple "Express" train—only 35 mins to the airport.', expertStories: [{id: 'hidden', label: '【預辦登機】', summary: 'A1 站直接掛行李', story: '如果您搭乘長榮、華航或星宇，可以在 A1 站直接辦理報到與行李託運！雙手空空帶小孩坐車去機場，簡直是天堂級的體驗。'}, {id: 'must-do', label: '【圓滿賦歸】', summary: '帶著回憶回家', story: '這 6 天 5 夜的城市探索、山城冒險與溫泉療癒，將成為孩子成長過程中極為珍貴的台灣記憶。祝您旅途平安！'}] }
                ], night: [], accommodation: []
            }
        }
    },
    // ── 台北全攻略：首訪旗艦版 6D/5N ──
    {
        id: 'circuit-tp-classic-6d',
        name: '台北全攻略：首訪旗艦版 6D/5N',
        nameEn: 'Classic Essential Taipei: First-Timer\'s 6D/5N',
        title: '台北旗艦：第一次來就上手的達人攝影指南',
        titleEn: 'Taipei Flagship: The Ultimate First-Timer\'s Photo Guide',
        author: 'Taipei Travel Guru',
        authorEn: 'Taipei Travel Guru',
        authorId: 'c-tw1',
        region: 'taipei',
        tags: ['首訪必看', '攝影地標', '零決策'],
        tagsEn: ['First-Timer', 'Photo Landmarks', 'Zero-Decision'],
        duration: 6,
        valueAnchor: '這是一份為「住在台北車站或西門町」的家庭量身打造的極簡行程。我們假設您從市中心出發，利用捷運紅藍線與少量計程車，換取最高的親子旅遊體力值。',
        valueAnchorEn: 'Tailored for families staying near Taipei Main Station or Ximen. We use the Red/Blue MRT lines and strategic taxis to maximize your family energy levels.',
        rating: 5.0,
        price: 0,
        tier: 'official',
        lastUpdated: '2026/04/22',
        coverImage: 'https://plus.unsplash.com/premium_photo-1661951189203-12decb9d7f8e?q=80&w=1740&?auto=format&fit=crop&q=80&w=1200',
        highlights: { days: 6, spots: 22, tips: 15, rating: 5.0, usageCount: 1580 },
        vibes: [
            { tag: '#經典必訪', color: 'bg-amber-100 text-amber-800' },
            { tag: '#攝影大片', color: 'bg-purple-100 text-purple-800' },
            { tag: '#海港氛圍', color: 'bg-blue-100 text-blue-800' }
        ],
        valueProps: [
            { zh: '第一次就不踩雷', en: '🏆 NO-TRAP FIRST TRIP', descZh: '全程精選不走冤枉路', descEn: 'Zero wasted steps guaranteed' },
            { zh: '第一次就玩透台北', en: '🚇 MASTER TAIPEI', descZh: '捷運與關鍵 Uber 動線', descEn: 'Optimized MRT + Uber route' },
            { zh: '第一次就拍出大片', en: '📸 PRO PHOTO GUIDE', descZh: '解鎖攝影師私藏機位', descEn: 'Unlock hidden master spots' }
        ],
        coverStory: {
            quote: '「台北的美不在於單一的地標，而在於山、海與城市僅在咫尺之間。」',
            quoteEn: '"Taipei\'s beauty isn\'t in a single landmark, but in how mountains, ocean, and city are all within reach."',
            description: '【2026/04/22 更新 | 官方旗艦版】這是為第一次造訪台北的旅人設計的終極劇本。💡 達人雨天提示：隨身帶傘，小雨中的九份與陽明山更有仙境感。🍜 靈魂美食攻略：直衝 50 嵐點「1 號（微糖微冰）」體驗極致珍奶；宵夜必點「鹽酥雞+炸甜不辣+九層塔」。這份行程不僅管你的交通，更要教你像台北人一樣生活。',
            descriptionEn: '[Updated 2026/04/22 | Official Flagship] The ultimate script for first-time visitors. 💡 Pro Tip: Keep an umbrella; rainy Jiufen is a misty wonderland. 🍜 Soul Food Bible: Order 50 Lan "Number 1" (30% Sugar) for the best boba; midnight snacks must include "Fried Chicken + Tempura + Basil." We don\'t just plan your route—we teach you how to live like a local.',
            authorLabel: 'TravelCanvas 官方旗艦推薦',
            authorLabelEn: 'TravelCanvas Official Flagship Recommendation'
        },
        authorStory: {
            zh: '這是我為第一次來台北的朋友設計的行程。台北不僅有 101，還有充滿煙火氣的廟口、神祕的山城九份，以及全球罕見的城市溫泉。這份行程會帶你看到最完整的台北。',
            en: 'Designed for friends visiting Taipei for the first time. Beyond 101, there\'s the vibrant Miaokou, the mystical Jiufen, and unique urban hot springs. This is the complete Taipei experience.'
        },
        preparationGuide: [
            {
                title: '悠遊卡 (EasyCard) 是靈魂',
                titleEn: 'EasyCard is Key',
                text: '除了交通，便利商店、部分景點門票都能感應付費。建議抵達機場或北車後立即購買並儲值 NT$1000。',
                textEn: 'Use it for transport, convenience stores, and entry fees. Buy and top up NT$1000 at the airport or station immediately.',
                icon: 'CreditCard'
            },
            {
                title: '下載 Uber 與 Bus+ App',
                titleEn: 'Uber & Bus+ Apps',
                text: '本行程部分路段建議搭乘 Uber 以節省體力，Bus+ 則能精準預測客運抵達時間，對去九份、野柳非常重要。',
                textEn: 'We recommend Uber for certain legs to save energy. Bus+ is essential for real-time bus tracking to Jiufen and Yehliu.',
                icon: 'Smartphone'
            },
            {
                title: '雨具是必備的優雅',
                titleEn: 'Umbrella is Essential',
                text: '台北北海岸（九份、野柳）氣候多變，請隨身攜帶堅固摺疊傘。若遇雨，二子坪或九份茶館的「朦朧霧氣」也是極美的備案。',
                textEn: 'Weather in Jiufen and Yehliu is unpredictable. Keep a sturdy umbrella handy. In rain, the "misty vibes" of Teahouses or Erziping offer a unique charm.',
                icon: 'CloudRain'
            },
            {
                title: '現金仍是夜市之王',
                titleEn: 'Cash for Markets',
                text: '雖然悠遊卡發達，但九份老街、基隆廟口與多數小吃攤「僅收現金」。建議隨身準備 NT$2,000-3,000 零錢。',
                textEn: 'EasyCard is common, but most stalls in Jiufen and Keelung are "Cash Only." Keep NT$2,000-3,000 in cash for street food.',
                icon: 'Banknote'
            },
            {
                title: '這是一場雙腳的旅行',
                titleEn: 'Comfortable Shoes',
                text: '即便我們優化了 Uber 動線，九份階梯與地質公園仍需大量步行。請穿上最舒適的運動鞋，不要穿新鞋。',
                textEn: 'Even with Uber, Jiufen and Yehliu require walking. Wear your most comfortable sneakers—avoid brand new shoes.',
                icon: 'Footprints'
            },
            {
                title: '行李解放計畫',
                titleEn: 'Luggage Liberation',
                text: 'Day 1 抵達可先存飯店或北車置物櫃。Day 6 強烈推薦在「機捷 A1 站」預辦登機或寄放，實現空手逛街。',
                textEn: 'Day 1: Drop at hotel or use station lockers. Day 6: Highly recommend In-town Check-in at Airport MRT (A1) to shop hands-free.',
                icon: 'Briefcase'
            },
            {
                title: '珍奶與宵夜攻略',
                titleEn: 'Boba & Midnight Snacks',
                text: '直衝 50 嵐點「1 號（微糖微冰）」；宵夜必點「鹽酥雞+炸甜不辣+九層塔」。這是在地人的靈魂標配。',
                textEn: 'Order 50 Lan "Number 1" (30% sugar); for supper, "Fried Chicken + Tempura + Basil" is the local soul combo.',
                icon: 'Utensils'
            }
        ],
        faq: [
            { title: '九份、野柳一定要包車嗎？', titleEn: 'Need a car for Jiufen?', text: '不需要！本行程特別優化了「客運 + 關鍵段 Uber」方案，讓您省下高額包車費，同時享受點對點的便利。', textEn: 'No! This script optimizes "Bus + Critical Uber legs," saving you high charter fees while maintaining point-to-point convenience.' },
            { title: '攝影點好找嗎？', titleEn: 'Finding photo spots?', text: '行程中標註了「相機圖示」的景點都有達人攝影建議。點擊卡片，我們會告訴您具體的巷弄機位與推薦拍攝時間。', textEn: 'Spots with a "Camera" icon include expert photography tips. Click the card for exact alley locations and best shooting times.' }
        ],
        culturalInsights: [
            {
                id: 'boba-bible',
                regionId: 'taipei',
                regionCode: 'TW',
                regionName: 'Taipei',
                category: '手搖飲點餐聖經',
                categoryEn: 'Boba Tea Bible',
                title: '50 嵐的黃金密碼',
                titleEn: 'The 50 Lan Code',
                emoji: '🧋',
                content: '直衝 50 嵐必點「1 號」（四季春+珍波椰）。這是珍珠、波霸、椰果的終極三重奏。黃金比例是「微糖微冰」。',
                contentEn: 'Order "Number 1" at 50 Lan (Four Seasons Tea with boba, pearls, and coconut jelly). The golden ratio is "Light Sugar, Light Ice."',
                foreignerReaction: '「咬到嘴痠但停不下來的快樂，這就是台灣的魔力。」',
                foreignerReactionEn: '"My jaw is tired but I can\'t stop. This is pure Taiwanese magic."',
                backgroundColor: 'bg-yellow-50'
            },
            {
                id: 'chicken-guide',
                regionId: 'taipei',
                regionCode: 'TW',
                regionName: 'Taipei',
                category: '深夜靈魂攻略',
                categoryEn: 'Midnight Soul Guide',
                title: '鹽酥雞必點圖鑑',
                titleEn: 'Fried Chicken Checklist',
                emoji: '🍗',
                content: '除了雞肉，必點「炸甜不辣」（像餅乾般脆）、「豬血糕」與「雞皮」。靈魂配料是蒜片與九層塔。',
                contentEn: 'Beyond chicken, order "Fried Tempura" (crispy like chips), "Pig Blood Cake," and "Chicken Skin." Garlic and Basil are non-negotiable.',
                foreignerReaction: '「這是我這輩子吃過最好吃的炸雞，為什麼還有九層塔！」',
                foreignerReactionEn: '"Best fried chicken ever. The fried basil is a total game changer!"',
                backgroundColor: 'bg-orange-50'
            },
            {
                id: 'cvs-gems',
                regionId: 'taipei',
                regionCode: 'TW',
                regionName: 'Taipei',
                category: '全天候補給站',
                categoryEn: '24/7 Supply Hub',
                title: '超商不只是商店',
                titleEn: 'Convenience Store Gems',
                emoji: '🏪',
                content: '試試「茶葉蛋」與「冰地瓜」。這是台灣人補充蛋白質的最強方案，也是隨時都能找到的溫暖。',
                contentEn: 'Try "Tea Eggs" and "Chilled Sweet Potatoes." It\'s the local secret for high-protein, healthy snacks anytime.',
                foreignerReaction: '「原來便利商店可以這麼有生命力，隨時都能吃到熱騰騰的健康食物。」',
                foreignerReactionEn: '"The fact that I can get hot, healthy food at 3 AM is incredible."',
                backgroundColor: 'bg-green-50'
            }
        ],
        dayPreviews: [
            { day: 1, summary: '大稻埕老時光 → 永樂市場午餐 → 101 攝影機位 → 象山夕陽與夜景', summaryEn: 'Dadaocheng Soul → Yongle Noodle → 101 Photo Spot → Elephant Mt. Sunset' },
            { day: 2, summary: '故宮瑰寶 → 圓山大飯店 → 中正紀念堂 → 士林夜市美食', summaryEn: 'Palace Museum → Grand Hotel → Memorial Hall → Shilin Night Market' },
            { day: 3, summary: '北投溫泉博物館 → 地熱谷仙境漫步 → 漁人碼頭夕陽 → 饒河夜市', summaryEn: 'Beitou Hot Spring → Thermal Valley → Tamsui Sunset → Raohe Night Market' },
            { day: 4, summary: '悠閒慢活 → 九份老街 → 金瓜石黃金博物館 → 報時山夕陽', summaryEn: 'Slow Morning → Jiufen Old Street → Gold Museum → Baoshi Mt. Sunset' },
            { day: 5, summary: '野柳女王頭 → 基隆和平島 (天然泳池) → 正濱漁港彩色屋 → 基隆廟口夜市', summaryEn: 'Yehliu Queen\'s Head → Heping Island Pool → Zhengbin Color Houses → Keelung Market' },
            { day: 6, summary: '陽明山二子坪最美步道 → 台北車站伴手禮清單 → 機場接駁', summaryEn: 'Erziping Forest Trail → Taipei Station Gifts → Departure' }
        ],
        schedule: {
            'Day 1': {
                theme: '【初見】老靈魂與城市天際線',
                themeEn: '【First Glimpse】Old Souls & City Skylines',
                themeEmoji: '🌇',
                morning: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-f-zhenfang')!, instanceId: 'c6-1-1', startTime: '08:30', arrivalTransport: 'public', facilityTags: ['food', 'mrt'], expertNote: '💳 零決策：捷運大橋頭站。🧳 貼心提醒：若剛下飛機，請先將行李放至飯店或台北車站，大稻埕老店多不便拖行。', expertNoteEn: '💳 Zero-Decision: MRT Daqiaotou. 🧳 Luggage: Drop bags at hotel/station first; Dadaocheng shops are not luggage-friendly.' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a1')!, instanceId: 'c6-1-2', startTime: '10:00', arrivalTransport: 'walk', facilityTags: ['cobblestone', 'stroller'], expertNote: '💡 攝影提示：迪化街紅磚立面在 11 點光線最立體。順道拜訪霞海城隍廟，體驗最道地的月老文化。', expertNoteEn: '💡 Photo Tip: Dihua St facades look best in 11 AM light. Visit Xiahai Temple for local matchmaking culture.' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a-kuobook')!, instanceId: 'c6-1-kuo', startTime: '11:30', arrivalTransport: 'walk', facilityTags: ['stairs', 'cafe'], expertNote: '📸 達人機位：二樓天井俯拍角度。這棟老宅是迪化街保存最完整的商業遺產。', expertNoteEn: '📸 Expert Spot: 2F courtyard overlook. This historic house is a well-preserved piece of Taipei history.' }
                ],
                afternoon: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-f2')!, instanceId: 'c6-1-3', startTime: '12:30', arrivalTransport: 'walk', facilityTags: ['food', 'restroom'], expertNote: '🍜 永樂市場 2 樓。💡 腳力保存：剛逛完老街，請在此處坐下休息至少 15 分鐘，喝杯青草茶再出發。', expertNoteEn: '🍜 Yongle Market 2F. 💡 Stamina: Take at least a 15-minute rest here; grab a herbal tea to recharge.' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a-yongkang')!, instanceId: 'c6-1-yk', startTime: '14:30', arrivalTransport: 'taxi', facilityTags: ['food', 'crowd-warning'], expertNote: '🚕 關鍵段落：建議從大稻埕直接搭 Uber 前往永康街（約 15 分鐘），避開捷運轉乘耗損體力。', expertNoteEn: '🚕 Critical Leg: Take an Uber from Dadaocheng to Yongkang St (~15m) to avoid tiring MRT transfers.' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a-101-alley')!, instanceId: 'c6-1-4', startTime: '16:30', arrivalTransport: 'public', facilityTags: ['sun-exposure'], expertNote: '📸 達人機位：站在巷口使用 3x 焦段，能拍到 101 壓在老房子上方的震撼感。', expertNoteEn: '📸 Expert Spot: Use 3x zoom at the alley entrance to frame 101 over old houses.' }
                ],
                evening: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a7')!, instanceId: 'c6-1-5', startTime: '17:30', arrivalTransport: 'walk', facilityTags: ['stroller', 'nap-friendly'], expertNote: '📸 攝影機位：眷村斜坡。💡 達人提示：這裡不用爬坡就能拍到 101 與老眷村的對比，是首訪台北最省力的「大片產地」。', expertNoteEn: '📸 Photo Spot: Village slopes. 💡 Expert Tip: No climbing needed for the iconic 101 vs. historic cabin shot—the easiest high-value photo op.' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-f-fengsheng')!, instanceId: 'c6-1-din', startTime: '19:30', arrivalTransport: 'public', facilityTags: ['food', 'kid-menu'], expertNote: '從「台北 101/世貿站」搭捷運紅線直達「東門站」。🍴 必吃：白斬雞。慶祝第一晚的豐盛台菜。', expertNoteEn: 'Red Line MRT from Taipei 101 to Dongmen. 🍴 Must-eat: Poached chicken. A warm Taiwanese celebratory dinner.' }
                ],
                night: [],
                accommodation: [
                    {
                        id: 'rec-hotel-taipei',
                        itemType: 'spot',
                        type: 'hotel',
                        title: '推薦住宿：台北車站 / 西門町',
                        titleEn: 'Recommended Stay: Taipei Station / Ximen',
                        expertNote: '🧳 零決策提示：本行程以捷運藍、紅線為主。強烈建議下榻於「台北車站」或「西門町」，可讓您在六天內省下超過 3 小時的轉乘體力。',
                        expertNoteEn: '🧳 Zero-Decision Tip: This guide uses Red/Blue lines. Stay near Taipei Main Station or Ximending to save 3+ hours of transfer fatigue over 6 days.',
                        instanceId: 'c6-1-acc'
                    }
                ]
            },
            'Day 2': {
                theme: '【瑰寶】皇室美學與夜市文化',
                themeEn: '【Treasure】Imperial Aesthetics & Night Markets',
                themeEmoji: '🏯',
                morning: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a-npm')!, instanceId: 'c6-2-1', startTime: '09:00', arrivalTransport: 'public', facilityTags: ['elevator', 'stroller', 'kid-friendly'], expertNote: '🚍 交通建議：搭乘捷運紅線至「士林站」，從 1 號出口轉乘「紅 30 號公車」。💡 零決策提示：建議提早線上預約門票，避開團客隊伍。', expertNoteEn: '🚍 Transit: MRT Red Line to Shilin Station, Exit 1, then transfer to "Red 30 Bus". 💡 Zero-Decision: Book tickets online to skip the tour groups.' }
                ],
                afternoon: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-f-silks')!, instanceId: 'c6-2-lunch', startTime: '12:00', arrivalTransport: 'walk', facilityTags: ['food', 'kid-menu'], expertNote: '🍴 必吃：翠玉白菜港點。就在故宮建築群內，省去跨區覓食的煩惱。', expertNoteEn: '🍴 Must-eat: Jadeite Cabbage dim sum. Located right within the museum complex—no need to travel for lunch.' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a-grandhotel')!, instanceId: 'c6-2-grand', startTime: '14:30', arrivalTransport: 'taxi', facilityTags: ['booking', 'stairs'], expertNote: '🚕 建議叫 Uber。💡 零決策提示：密道導覽需提前 14 天網上預約，建議選 14:30 場次。', expertNoteEn: '🚕 Uber suggested. 💡 Zero-Decision: Book tunnel tour 14 days ahead; 14:30 slot recommended.' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a-cks')!, instanceId: 'c6-2-2', startTime: '16:30', arrivalTransport: 'public', facilityTags: ['stroller', 'restroom', 'sun-exposure'], expertNote: '搭捷運紅線直達。💡 必看亮點：整點的儀隊交接儀式。', expertNoteEn: 'Direct via MRT Red Line. 💡 Must-see: Hourly guard change ceremony.' }
                ],
                evening: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-f-shilin')!, instanceId: 'c6-2-night', startTime: '18:30', arrivalTransport: 'public', facilityTags: ['crowd-warning', 'cash-only', 'food'], expertNote: '搭捷運紅線回「劍潭站」。💡 避雷提示：不要在水果攤買切好的水果。', expertNoteEn: 'Back to MRT Jiantan (Red Line). 💡 Pro Tip: Avoid pre-cut fruit stalls.' }
                ],
                night: [],
                accommodation: [
                    {
                        id: 'rec-hotel-taipei-cont',
                        itemType: 'spot',
                        type: 'hotel',
                        title: '續住同一飯店',
                        titleEn: 'Stay at same hotel',
                        expertNote: '🧳 零決策提示：台北交通極度發達，以放射狀玩法最省力，強烈建議 5 個晚上都住同一間飯店，免去每天打包行李的痛苦。',
                        expertNoteEn: '🧳 Zero-Decision Tip: Taipei\'s transit is highly connected. Stay at the same hotel for all 5 nights to avoid the nightmare of daily packing.',
                        instanceId: 'c6-cont-acc'
                    }
                ]
            },
            'Day 3': {
                theme: '【療癒】蒸汽溫泉與河畔日落',
                themeEn: '【Healing】Hot Springs & Riverside Sunset',
                themeEmoji: '♨️',
                morning: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-f1')!, instanceId: 'c6-3-b', startTime: '07:30', arrivalTransport: 'public', expertNote: '💳 零決策提示：捷運善導寺站 5 號出口。💡 達人指令：請在 06:30 ~ 07:00 之間抵達以避開兩小時的人潮。記得準備「現金」，這裡不收悠遊卡。', expertNoteEn: '💳 Zero-Decision: MRT Shandao Temple Exit 5. 💡 Expert Command: Arrive between 06:30-07:00 to avoid the 2hr queue. Cash only.' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a-beitou')!, instanceId: 'c6-3-1', startTime: '10:30', arrivalTransport: 'public', expertNote: '搭捷運至新北投站。💡 零決策路線：從圖書館走到地熱谷，感受百年和洋建築的靜謐。這段路微上坡，請慢行。', expertNoteEn: 'MRT to Xinbeitou. 💡 Zero-Decision: Walk from Library to Thermal Valley. Uphill slope, walk slowly.' }
                ],
                afternoon: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-f-beitou-mkt')!, instanceId: 'c6-3-lunch', startTime: '12:30', arrivalTransport: 'walk', expertNote: '🍴 達人推薦：矮仔財滷肉飯。💡 避坑提示：避開 12 點高峰，下午兩點前會收攤。', expertNoteEn: '🍴 Rec: A-Zai-Cai Pork Rice. 💡 Pro Tip: Avoid the 12 PM peak; closes by 2 PM.' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a-tamsui')!, instanceId: 'c6-3-2', startTime: '15:00', arrivalTransport: 'public', expertNote: '捷運紅線直達淡水。💡 達人路線：先逛重建街（戀愛巷），然後前往渡船頭。', expertNoteEn: 'MRT Red Line to Tamsui. 💡 Expert Route: Explore Reconstruction St first, then head to Ferry Pier.' },
                    {
                        id: 'tamsui-ferry',
                        title: '淡水河藍色公路渡輪',
                        titleEn: 'Tamsui Blue Highway Ferry',
                        itemType: 'spot',
                        type: 'experiential',
                        duration: '30分鐘',
                        image: '🛳️',
                        description: '連接淡水老街與漁人碼頭的水上公路。搭乘渡輪不僅能避開陸路塞車，還能從水上回望淡水城鎮與遠方的觀音山，是欣賞淡水夕陽的最美視角。',
                        descriptionEn: 'The water route connecting Tamsui Old Street to Fisherman\'s Wharf. Avoid traffic and enjoy the best sunset views of Guanyin Mountain from the river.',
                        coverImage: 'https://images.unsplash.com/photo-1574585145946-77884ea8d4ee?q=80&w=1740&auto=format&fit=crop',
                        startTime: '17:00',
                        arrivalTransport: 'ship',
                        expertNote: '🛳️ 達人指令：從渡船頭搭船前往漁人碼頭。這能節省 15 分鐘公車顛簸，並在船上捕捉最美的淡水夕陽倒影。',
                        expertNoteEn: '🛳️ Expert Command: Take the ferry to Fisherman\'s Wharf. Saves 15m of bus ride and offers the best sunset views from the water.',
                        expertStories: [
                            { id: 'must-do', label: '【水上夕陽】', labelEn: 'Sunset View', summary: '絕佳的攝影角度', summaryEn: 'Best Photo Angle', story: '傍晚搭船是淡水最浪漫的體驗。建議提早去排隊搶戶外座位，船尾激起的浪花與金色的夕陽倒影絕對是明信片等級的畫面。', storyEn: 'Taking the ferry at dusk is highly romantic. Sit outside to capture the golden sunset reflecting on the wake of the boat.' },
                            { id: 'trap', label: '【購票防雷】', labelEn: 'Ticket Trap', summary: '請直接刷悠遊卡', summaryEn: 'Use EasyCard', story: '千萬不要傻傻去排隊買實體票！可以直接走到閘門「嗶」悠遊卡上船，能為你省下大量的排隊時間。', storyEn: 'Do NOT queue for physical tickets! Just tap your EasyCard at the gate to board immediately and save tons of time.' }
                        ]
                    }
                ],
                evening: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-f-raohe')!, instanceId: 'c6-3-3', startTime: '19:00', arrivalTransport: 'public', expertNote: '🚍 交通決策：搭捷運至「中山站」轉綠線直達「松山站」。🍴 必吃米其林：福州世祖胡椒餅、陳董藥燉排骨。買完後去旁邊「彩虹橋」坐著吃。', expertNoteEn: '🚍 Transit Decision: MRT to Zhongshan then Green Line to Songshan. 🍴 Michelin Must-eats: Fuzhou Pepper Bun, Chen Dong Herbal Ribs. Eat at Rainbow Bridge nearby.' }
                ],
                night: [],
                accommodation: [
                    {
                        id: 'rec-hotel-taipei-cont',
                        itemType: 'spot',
                        type: 'hotel',
                        title: '續住同一飯店',
                        titleEn: 'Stay at same hotel',
                        expertNote: '🧳 零決策提示：台北交通極度發達，以放射狀玩法最省力，強烈建議 5 個晚上都住同一間飯店，免去每天打包行李的痛苦。',
                        expertNoteEn: '🧳 Zero-Decision Tip: Taipei\'s transit is highly connected. Stay at the same hotel for all 5 nights to avoid the nightmare of daily packing.',
                        instanceId: 'c6-cont-acc'
                    }
                ]
            },
            'Day 4': {
                theme: '【金脈】深度的山城與海景',
                themeEn: '【Golden】Deep Mountain & Coastal Views',
                themeEmoji: '⛰️',
                morning: [
                    { id: 'taipei-rest', title: '台北早晨：準備出發', titleEn: 'Taipei Morning: Getting Ready', itemType: 'spot', startTime: '09:30', arrivalTransport: 'walk', expertNote: '🚌 交通指南：今天我們搭乘 965 快速公車。不論您住哪，建議前往「捷運西門站」或「捷運北門站」搭乘最為方便。💡 班次頻繁，約 15-30 分鐘一班，建議 10:00 前上車。', expertNoteEn: '🚌 Transit Guide: We\'re taking Bus 965 today. Head to "MRT Ximen" or "MRT Beimen" station—these are the best hubs regardless of where you stay. 💡 Buses run every 15-30 mins; aim to board by 10 AM.' }
                ],
                afternoon: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a16')!, instanceId: 'c6-4-1', startTime: '11:30', arrivalTransport: 'public', expertNote: '🚌 交通建議：從西門或捷運北門站搭乘 965 快速公車直達九份老街 (車程約 70-90 分)。💡 避人潮攻略：中午抵達能避開傍晚的極致人潮。', expertNoteEn: '🚌 Transit: Take Bus 965 from Ximen or Beimen MRT directly to Jiufen (approx. 70-90 mins). 💡 Strategy: Arriving by noon beats the massive evening crowds.' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a23')!, instanceId: 'c6-4-2', startTime: '14:00', arrivalTransport: 'public', expertNote: '💰 礦徑時光：從九份老街站牌 (7-11 旁) 搭乘往金瓜石方向公車 (788, 825, 856, 965 均可)，僅需 5-10 分鐘。觸摸 220 公斤純金磚是必做儀式。', expertNoteEn: '💰 Mining History: Take any bus toward Jinguashi (788, 825, 856, 965) from the Jiufen Old St stop (next to 7-11); it\'s only 5-10 mins. Touching the 220kg gold bar is a must.' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a42')!, instanceId: 'c6-4-3', startTime: '15:30', arrivalTransport: 'walk', expertNote: '🏞️ 絕美攝影：步行 10 分鐘即可抵達報時山。這裡能拍到陰陽海與「六坑斜坡索道」紅磚廢墟的末日美感，視角極其開闊。', expertNoteEn: '🏞️ Panoramic Views: A 10-min walk to Baoshi Mountain for the Yinyang Sea and the "Six-Pit Railway" ruins for that iconic doomsday aesthetic.' }
                ],
                evening: [
                    { id: 'jiufen-return', title: '山城歸途：快速直達', titleEn: 'Jiufen Return Logistics', itemType: 'spot', startTime: '17:30', arrivalTransport: 'public', expertNote: '🚌 歸途指引：推薦搭乘 965 公車直達「捷運西門站」。💡 班次指引：若想在車上補眠，這是最佳時機，預計 19:00 抵達台北。', expertNoteEn: '🚌 Return: Take Bus 965 directly to "MRT Ximen Station." 💡 Pro Tip: This 90-min ride is the perfect time for a nap before dinner.' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-fam-ximending')!, instanceId: 'c6-4-4', startTime: '19:30', arrivalTransport: 'walk', expertNote: '🍲 暖心晚餐：推薦前往「萬年大樓」B1 尋找老字號牛肉麵與排骨飯，或到峨眉街品嚐「阿宗麵線」（站著吃也是一種在地體驗）。💡 達人提示：回飯店前可以順便去「老天祿」買點滷味當宵夜。西門町的夜晚越晚越熱鬧，即便只是散步感受都會活力也很棒。', expertNoteEn: '🍲 Hearty Dinner: Head to Wannien Building B1 for classic beef noodles and pork chop rice, or grab Ah-Zhong Flour Rice Noodles on Emey St. 💡 Pro Tip: Stop by Lao Tian Lu for their famous braised snacks to enjoy back at the hotel. Ximending at night is vibrant and perfect for a slow post-dinner stroll.' }
                ],
                night: [],
                accommodation: [
                    {
                        id: 'rec-hotel-taipei-cont',
                        itemType: 'spot',
                        type: 'hotel',
                        title: '續住同一飯店',
                        titleEn: 'Stay at same hotel',
                        expertNote: '🧳 零決策提示：台北交通極度發達，以放射狀玩法最省力，強烈建議 5 個晚上都住同一間飯店，免去每天打包行李的痛苦。',
                        expertNoteEn: '🧳 Zero-Decision Tip: Taipei\'s transit is highly connected. Stay at the same hotel for all 5 nights to avoid the nightmare of daily packing.',
                        instanceId: 'c6-cont-acc'
                    }
                ]
            },
            'Day 5': {
                theme: '【海味】地質奇觀與彩色威尼斯',
                themeEn: '【Seaside】Geo-Wonders & Colorful Harbor',
                themeEmoji: '🌊',
                morning: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a14')!, instanceId: 'c6-5-1', startTime: '09:00', arrivalTransport: 'public', expertNote: '🚍 交通攻略：在「市府轉運站」搭乘國光客運 1815 直達。💡 達人指令：務必 09:30 前抵達野柳，避開正午酷暑與觀光大團。', expertNoteEn: '🚍 Transit: Take Bus 1815 from Taipei City Hall Bus Station. 💡 Pro Tip: Arrive by 09:30 AM to beat the mid-day heat and large tour groups.' }
                ],
                afternoon: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a18')!, instanceId: 'c6-5-2', startTime: '12:30', arrivalTransport: 'taxi', expertNote: '🚕 關鍵段落：建議從野柳搭 Uber 直達和平島（約 25 分鐘，約 $350-$450）。這段路若搭公車需轉乘且耗時 1.5 小時，這筆投資絕對值得。', expertNoteEn: '🚕 Critical Link: Take an Uber from Yehliu to Heping Island (~25 mins, $350-$450 TWD). Saves 1 hour of transit time compared to buses.' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a19')!, instanceId: 'c6-5-3', startTime: '15:30', arrivalTransport: 'public', expertNote: '🎨 視覺饗宴：除了彩色屋，旁邊步行 3 分鐘的「阿根納造船廠遺構」是廢墟攝影聖地。💡 建議：坐在港邊咖啡廳二樓，享受基隆港的寧靜。', expertNoteEn: '🎨 Visual Feast: Don\'t miss the Agenna Shipyard Ruins (3-min walk) next to the colored houses for epic photos. 💡 Enjoy a coffee by the harbor.' }
                ],
                evening: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-f10')!, instanceId: 'c6-5-4', startTime: '17:30', arrivalTransport: 'public', expertNote: '🍜 廟口攻略：直衝 58 號營養三明治（先領號碼牌）與 43-1 號一口吃香腸。💡 達人指引：這裡的 21 號魯肉飯也是在地老饕的最愛。', expertNoteEn: '🍜 Market Strategy: Head straight to Stall 58 (get a ticket first) and Stall 43-1 for sausages. 💡 Local Tip: Stall 21 for the best braised pork rice.' },
                    { id: 'keelung-return', title: '基隆歸途：快速公車', titleEn: 'Keelung Return Logistics', itemType: 'spot', startTime: '19:30', arrivalTransport: 'public', expertNote: '🚌 歸途建議：搭乘 2088 公車直達「市府轉運站」。下車後可近距離拍 101 夜景。💡 達人提示：今天海風吹久了較疲累，強烈推薦到附近的「指舞春秋 (Dancing Fingers)」按個腳底，這間性價比極高且環境舒適，是緩解五天疲勞的良藥。', expertNoteEn: '🚌 Return: Bus 2088 back to City Hall. Snap a quick photo of Taipei 101. 💡 Pro Tip: Today was windy; a session at "Dancing Fingers" (high value & comfy) nearby will work wonders for your tired feet.' }
                ],
                night: [],
                accommodation: [
                    {
                        id: 'rec-hotel-taipei-cont',
                        itemType: 'spot',
                        type: 'hotel',
                        title: '續住同一飯店',
                        titleEn: 'Stay at same hotel',
                        expertNote: '🧳 零決策提示：台北交通極度發達，以放射狀玩法最省力，強烈建議 5 個晚上都住同一間飯店，免去每天打包行李的痛苦。',
                        expertNoteEn: '🧳 Zero-Decision Tip: Taipei\'s transit is highly connected. Stay at the same hotel for all 5 nights to avoid the nightmare of daily packing.',
                        instanceId: 'c6-cont-acc'
                    }
                ]
            },
            'Day 6': {
                theme: '【舒心】森林收心與最終採買',
                themeEn: '【Relax】Forest Retreat & Final Shopping',
                themeEmoji: '🌲',
                morning: [
                    { id: 'luggage-drop', title: '雙手解放：北車預辦登機', titleEn: 'Luggage-Free Morning', itemType: 'spot', type: 'experiential', duration: '1小時', image: '🧳', description: '最後一天不想拖著行李逛街？只要搭乘長榮、華航或星宇，就可以在機捷 A1 站直接辦理託運。', descriptionEn: 'Check in your luggage at Airport MRT A1 station and enjoy your last day hands-free.', coverImage: 'https://images.unsplash.com/photo-1542314831-c6a4d14293e5?q=80&w=1740&auto=format&fit=crop', startTime: '08:30', arrivalTransport: 'public', facilityTags: ['luggage-storage', 'elevator'], expertNote: '🧳 零決策指令：辦理退房後直奔「機捷台北車站 (A1)」。華航/長榮旅客可辦理預辦登機託運行李，其餘旅客可使用 A1 站置物櫃。', expertNoteEn: '🧳 Zero-Decision: Check out and head to Airport MRT (A1). Use In-town Check-in or lockers to free your hands.', expertStories: [{id: 'must-do', label: '【早餐建議】', summary: '車上快速解決', story: '在飯店門口買個台式蛋餅或 7-11 飯糰帶在車上吃，可以為最後一天的行程省下寶貴的 30 分鐘。'}] },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a20')!, instanceId: 'c6-6-1', startTime: '09:30', arrivalTransport: 'taxi', expertNote: '🚕 交通攻略：從台北車站直接搭 Uber 上山（約 50 分鐘）。💡 達人提示：最後一天的體力非常珍貴，二子坪是全台最平緩的步道，即便推著行李箱也能走，但我們已經空手了，這將是一場完美的森林浴。', expertNoteEn: '🚕 Transit: Uber from Taipei Station (~50m). 💡 Pro Tip: Erziping is a barrier-free trail—pure relaxation. Since your hands are free, just enjoy the mountain breeze.' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a-milkfall')!, instanceId: 'c6-6-milk', startTime: '11:30', arrivalTransport: 'walk', expertNote: '🥛 陽明山隱藏版：水質富含硫磺而呈乳白色。📸 攝影提示：就在路邊石牆後，2 分鐘即可拍到美照。', expertNoteEn: '🥛 Hidden Gem: Milky white water due to sulfur. 📸 Photo Tip: Right behind the roadside wall, 2m walk for a great shot.' }
                ],
                afternoon: [
                    { id: 'breeze-lunch', title: '微風北車：最後的美食祭', titleEn: 'Breeze Taipei Station Lunch', itemType: 'spot', type: 'shopping', duration: '2小時', image: '🍱', description: '台北車站不只是交通樞紐，其二樓的「微風廣場」匯集了全台最精華的美食與伴手禮。這裡是您離開台灣前進行「最後掃貨」的黃金戰場。', descriptionEn: 'Taipei Main Station is a food and souvenir paradise. The 2nd floor "Breeze Plaza" is your golden battlefield for final shopping before leaving.', coverImage: 'https://images.unsplash.com/photo-1542601004-98cce711bb8d?q=80&w=1740&auto=format&fit=crop', startTime: '13:30', arrivalTransport: 'taxi', expertNote: '🍲 午餐攻略：搭 Uber 下山直達「微風台北車站 2F」。推薦試試「牛肉麵街」或是「排骨便當」。💡 採買清單：樓下就是伴手禮區，佳德鳳梨酥、快車肉乾等經典品牌一應俱全。', expertNoteEn: '🍲 Lunch: Uber down to Breeze Taipei Station 2F. Try the award-winning Beef Noodles or a classic Railway Bento. 💡 Shopping: Souvenirs like Chia Te and Kuai Che are all right here downstairs.', expertStories: [
                        { id: 'must-eat', label: '【鐵路便當】', labelEn: 'Railway Bento', summary: '台鐵排骨便當', summaryEn: 'Classic Pork Chop', story: '來到台北車站，一定要吃一個台鐵的「八角排骨便當」。這不僅是食物，更是台灣人搭火車的集體記憶。', storyEn: 'When at Taipei Station, you must try the classic "Railway Pork Chop Bento". It\'s a collective memory of Taiwanese train travel.' },
                        { id: 'must-do', label: '【伴手禮掃貨】', labelEn: 'Souvenir Run', summary: '鳳梨酥與牛軋糖', summaryEn: 'Pineapple Cakes', story: '一樓大廳與地下街有幾乎所有名牌伴手禮（如佳德、微熱山丘、糖村）。請在這裡把剩下的台幣變成好吃的食物帶回家！', storyEn: 'The 1F hall has all top-tier souvenir brands (Chia Te, SunnyHills, Sugar & Spice). Turn your leftover NTD into delicious gifts!' }
                    ] }
                ],
                evening: [
                    { id: 'ningxia-last', title: '最後一搏：寧夏夜市', titleEn: 'Last Call: Ningxia Night Market', itemType: 'spot', type: 'food', duration: '1.5小時', image: '🏮', description: '號稱台北「美食密度最高」的夜市，也是在地老饕的最愛。整條街幾乎沒有地雷，是體驗台灣道地小吃的最終聖地。', descriptionEn: 'Known as the highest density of good food in Taipei. Almost every stall is a hit. The ultimate holy land for local street food.', coverImage: 'https://images.unsplash.com/photo-1565011707577-ee879bd292ee?q=80&w=1740&auto=format&fit=crop', startTime: '17:30', arrivalTransport: 'walk', expertNote: '🏮 彈性方案：如果您的航班在 22:00 之後，強烈建議去北車附近的「寧夏夜市」吃最後一餐。💡 必吃：圓環邊蚵仔煎、劉芋仔蛋黃芋餅。這裡是台北公認美食密度最高、最道地的夜市。', expertNoteEn: '🏮 Late Flight Option: If your flight is after 22:00, hit Ningxia Night Market (near Taipei Station) for your final Taiwanese feast. 💡 Must-eats: Oyster Omelet, Taro Balls. The local favorite.', expertStories: [
                        { id: 'must-eat', label: '【米其林推薦】', labelEn: 'Michelin Pick', summary: '劉芋仔蛋黃芋餅', summaryEn: 'Taro Balls', story: '永遠都在排隊的劉芋仔！外皮酥脆的芋泥包裹著鹹蛋黃與肉鬆，甜鹹交織的口感保證讓你驚豔。', storyEn: 'Always a long queue for Liu Yu Zi! Crispy taro paste wrapped around salted egg yolk and pork floss. A perfect sweet and savory combo.' },
                        { id: 'must-eat', label: '【在地經典】', labelEn: 'Local Classic', summary: '圓環邊蚵仔煎', summaryEn: 'Oyster Omelet', story: '寧夏夜市的蚵仔煎非常有名，特色是邊緣煎得焦脆。配上一碗熱騰騰的豬肝湯，這就是完美的台式夜市體驗。', storyEn: 'Famous for its crispy edges. Pair it with a hot bowl of pork liver soup for the quintessential Taiwanese night market experience.' }
                    ] }
                ],
                night: [
                    { id: 'airport-transfer', title: '機場銜接：機捷直達', titleEn: 'Airport Transfer', itemType: 'spot', type: 'experiential', duration: '1小時', image: '✈️', description: '從台北車站 (A1) 搭乘機場捷運直達桃園機場，為這趟美好的旅程畫下句點。', descriptionEn: 'Take the Airport MRT Express from A1 to Taoyuan Airport to conclude your beautiful journey.', coverImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1740&auto=format&fit=crop', startTime: '19:30', arrivalTransport: 'public', facilityTags: ['easycard', 'elevator'], expertNote: '🚄 最後段：搭乘「機場捷運直達車」前往機場。機捷末班車約 23:00。', expertNoteEn: '🚄 Final Leg: Airport MRT Express to terminals. Last train is around 23:00.', expertStories: [{id: 'trap', label: '【時間控管】', summary: '提前 3.5 小時離開', story: '台北市區到機場搭機捷約需 35-40 分鐘。請根據您的登機時間，至少往前推 3.5 小時離開市區，以免遇到突發狀況。祝您平安歸國！'}] }
                ],
                accommodation: [
                    {
                        id: 'checkout-taipei',
                        itemType: 'spot',
                        type: 'hotel',
                        title: '退房手續',
                        titleEn: 'Check Out',
                        expertNote: '🧳 零決策提示：記得確認護照、貴重物品。我們已經安排好早上的「市區預辦登機」讓你空手跑行程。',
                        expertNoteEn: '🧳 Zero-Decision Tip: Double check your passport and valuables. We have planned the In-town Check-in so you can travel hands-free today.',
                        instanceId: 'c6-checkout'
                    }
                ]
            }
        }
    },
    {
        id: 'tw-t-outdoor-flagship',
        name: '台北山海極限：戶外愛好者專屬 6D/5N',
        nameEn: 'Taipei Outdoor Adventure: 6D/5N Flagship',
        title: '用腳步閱讀雙北：山海、單車與秘境攝影',
        titleEn: 'Mountain, Sea & Pedal: The Ultimate Outdoor Script',
        author: 'TravelCanvas 官方戶外團隊',
        authorEn: 'TravelCanvas Outdoor Team',
        authorId: 'c-tw1',
        region: 'taipei',
        tags: ['戶外冒險', '攝影', '體力週期管理'],
        tagsEn: ['Outdoor', 'Photography', 'Energy Managed'],
        duration: 6,
        rating: 5.0,
        price: 0,
        tier: 'official',
        lastUpdated: '2026/04/24',
        coverImage: 'https://images.unsplash.com/photo-1663475424372-4abf28c404a1?q=80&w=774&?auto=format&fit=crop&q=80&w=1200',
        highlights: { days: 6, spots: 18, tips: 12, rating: 5.0, usageCount: 420 },
        vibes: [
            { tag: '#汗水美學', color: 'bg-green-100 text-green-800' },
            { tag: '#巔峰大片', color: 'bg-blue-100 text-blue-800' },
            { tag: '#運動恢復', color: 'bg-indigo-100 text-indigo-800' }
        ],
        coverStory: {
            quote: '「真正的台北，藏在捷運到不了的山脊與浪花中。」',
            quoteEn: '"The real Taipei hides in the ridges and waves where the MRT can\'t reach."',
            description: '【2026/04/24 全新推出】這是一份為「不爬山不舒服」的旅人設計的深度腳本。我們導入專業的「體力週期管理」，平衡長距離單車、稜線攀爬與溫泉恢復。💡 專家提醒：戶外行程受天氣影響大，出發前請務必檢查氣象預報，並準備好充足防曬與雨具。這不只是一場旅行，這是一場與自然的深度對話。',
            descriptionEn: '[New Launch 2026/04/24] Designed for outdoor lovers. We\'ve integrated "Energy Periodization"—balancing high-intensity days with recovery. 💡 Expert Reminder: Outdoor activities are weather-dependent. Please check forecasts and prepare sun protection and rain gear. This is a deep dialogue with nature.'
        },
        preparationGuide: [
            { title: '專業戶外裝備', titleEn: 'Outdoor Gear', text: '請準備抓地力強的登山鞋或運動鞋。本行程包含岩層攀爬與濕滑步道。', textEn: 'Bring high-grip hiking shoes. Includes rock scrambling and slippery trails.', icon: 'Footprints' },
            { title: '體力預算分配', titleEn: 'Energy Budget', text: 'Day 2, Day 4 與 Day 5 (若選越嶺) 是體力高峰，前一晚請務必充足睡眠。', textEn: 'Day 2, 4 & 5 (if hiking ridge) are high intensity. Ensure good sleep.', icon: 'Battery' },
            { title: '防曬、水分與雨具', titleEn: 'Sun, Water & Rain', text: '稜線遮蔽少且天氣多變。請攜帶 1.5L 水壺、防曬乳與輕便雨衣。', textEn: 'Exposed ridges and volatile weather. Carry 1.5L water, sunscreen & rain gear.', icon: 'Droplets' },
            { title: '數位工具與單車', titleEn: 'Digital & Cycling', text: '建議事先下載 YouBike 2.0 App 並綁定信用卡。避免在大稻埕碼頭當場註冊卡關。', textEn: 'Register YouBike 2.0 App with a credit card in advance to avoid delay at the docks.', icon: 'Smartphone' }
        ],
        culturalInsights: [
            {
                id: 'hiking-etiquette',
                regionId: 'taipei',
                regionCode: 'TW',
                regionName: 'Taipei',
                category: '山系生活指南',
                categoryEn: 'Mountain Etiquette',
                title: '「山友」的親切密語',
                titleEn: 'The Hiker\'s Code',
                emoji: '👋',
                content: '在台北步道遇到人，一聲「你好」或「加油」是標準問候。下山者通常會讓上山者先行，展現山上的禮儀。',
                contentEn: 'A simple "Hello" (Nee-How) is the norm on Taipei trails. Descending hikers usually yield to those climbing up.',
                foreignerReaction: '「台灣的山友是我見過最熱情的人，總是在我快不行時說加油。」',
                foreignerReactionEn: '"Taiwanese hikers are so friendly—they always cheer me on when I look exhausted."',
                backgroundColor: 'bg-green-50'
            }
        ],
        dayPreviews: [
            { day: 1, summary: '抵達台北 → 象山夕陽暖身 → 慶祝晚餐', summaryEn: 'Arrival → Elephant Mt Sunset → Celebration' },
            { day: 2, summary: '全天河濱單車挑戰：大稻埕 ➔ 淡水 (20km)', summaryEn: 'Full Day Cycle: Dadaocheng to Tamsui' },
            { day: 3, summary: '軍艦岩奇岩攻頂 → 北投溫泉恢復浴', summaryEn: 'Jun-Jian-Yan Hike → Beitou Hot Spring Recovery' },
            { day: 4, summary: '瑞芳巔峰冒險：茶壺山 ➔ 猴硐貓村 ➔ 九份', summaryEn: 'Ruifang Peak: Teapot Mt → Houtong → Jiufen' },
            { day: 5, summary: '銀河洞仙境攝影 → 貓空品茶看風景', summaryEn: 'Yin-He-Dong Waterfall → Maokong Tea Time' },
            { day: 6, summary: '市區最終採買 → 帶著肌肉回憶歸國', summaryEn: 'Final Shopping → Departure' }
        ],
        schedule: {
            'Day 1': {
                theme: '【啟動】城市天際線的熱身',
                themeEn: '【Ignition】Skyline Warm-up',
                themeEmoji: '🌇',
                morning: [{ id: 'hotel-checkin', title: '飯店進駐與裝備盤點', titleEn: 'Hotel Check-in & Gear Check', itemType: 'spot', startTime: '14:00', arrivalTransport: 'taxi', facilityTags: ['luggage-storage'], expertNote: '💡 戰略建議：強烈建議選擇「捷運紅線」沿線飯店（如中山、雙連、台北車站）。紅線串聯了象山、北投與淡水，是戶外玩家的黃金生命線。', expertNoteEn: '💡 Strategy: Stay along the Red Line (Zhongshan, Taipei Main). It connects Xiangshan, Beitou, and Tamsui—the golden lifeline for outdoor lovers.' }],
                afternoon: [{ ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a5')!, instanceId: 'od-1-1', startTime: '16:00', arrivalTransport: 'public', facilityTags: ['stairs', 'water-fountain', 'weather-check'], expertNote: '攀爬難度：(Medium 🟡) 第一天的熱身：象山。雖然只是爬階梯，但陡度極高能迅速喚醒心肺。💡 達人機位：不要停在六巨石，繼續往上走到「攝影平台」，那裡人少且能拍到完美的 101 懸日。', expertNoteEn: 'Difficulty: (Medium 🟡) Steep stairs to wake up your cardio. 💡 Photo Spot: Don\'t stop at the Six Giant Rocks. Go higher to the Photography Platform for a perfect 101 sunset with fewer crowds.' }],
                evening: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-f-raohe')!, instanceId: 'od-1-2', startTime: '18:30', arrivalTransport: 'public', facilityTags: ['crowd-warning'], expertNote: '🍲 慶祝第一晚與蛋白質補充。建議來碗「陳董藥燉排骨」，為明天的 20 公里單車大遠征儲備能量。', expertNoteEn: 'Protein reload! Try the Chen Dong Herbal Ribs to fuel up for tomorrow\'s 20km cycling epic.' },
                    { id: 'return-h1', title: '返回飯店休息', titleEn: 'Return to Hotel', itemType: 'spot', startTime: '20:30', arrivalTransport: 'public', expertNote: '🚄 交通：從松山站搭乘捷運綠線轉乘回飯店。今晚請確實拉筋，準備迎接明天的腿部考驗。', expertNoteEn: 'Transport: Green Line back to hotel. Stretch well tonight; tomorrow is a major leg day.' }
                ],
                night: [], accommodation: []
            },
            'Day 2': {
                theme: '【破風】淡水河濱 20 公里大遠征',
                themeEn: '【Drafting】20km Riverside Epic',
                themeEmoji: '🚲',
                morning: [
                    { id: 'start-d2', title: '前往大稻埕碼頭', titleEn: 'To Dadaocheng Dock', itemType: 'spot', startTime: '08:30', arrivalTransport: 'public', expertNote: '🚄 交通：搭乘捷運綠線至「北門站」或橘線至「大橋頭站」，步行即可抵達水門。', expertNoteEn: 'Transport: Green Line to Beimen or Orange Line to Daqiaotou. Walk to the floodgate.' },
                    { id: 'cycling-start', title: 'YouBike 戰駒租借 (High 🔴)', titleEn: 'YouBike Rental (High 🔴)', itemType: 'spot', type: 'nature', duration: '1小時', image: '🚲', description: '大稻埕碼頭不只是看夕陽的地方，這裡也是台北河濱自行車道的完美起點。從這裡出發，沿著淡水河一路向北，準備展開 20 公里的長征。', descriptionEn: 'The perfect starting point for the Taipei riverside cycling network. From here, you will head north along the Tamsui River for a 20km epic ride.', coverImage: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=1740&auto=format&fit=crop', startTime: '09:00', arrivalTransport: 'walk', facilityTags: ['youbike', 'water-fountain', 'sun-exposure'], expertNote: '🚲 達人防雷：務必租借 YouBike 2.0E (電動輔助車) 若你對體力沒把握！出發前請「按壓輪胎確認胎壓、調整坐墊至髖骨高度」。這是一場持久戰。', expertNoteEn: '🚲 Trap: Rent an electric YouBike 2.0E if unsure about your stamina! Check tire pressure and adjust saddle height to your hip bone before departing.', expertStories: [
                        { id: 'must-do', label: '【單車挑選】', labelEn: 'Bike Selection', summary: '強推 YouBike 2.0E', summaryEn: 'Get the 2.0E', story: '強烈建議租借橘色的 YouBike 2.0E（電輔車）。因為回程若遇到逆風，電輔車會救你一命。記得先下載 App 並綁定好信用卡。', storyEn: 'Highly recommend renting the orange YouBike 2.0E (electric assist). It will save your life if you hit headwinds. Download the app and bind your card in advance.' },
                        { id: 'trap', label: '【裝備檢查】', labelEn: 'Gear Check', summary: '胎壓與坐墊高度', summaryEn: 'Tire & Saddle Check', story: '出發前務必：1. 雙手按壓輪胎確認胎壓。2. 將坐墊調整到與髖骨齊高，保護膝蓋。3. 裝滿水壺！河濱沿路補水站不多，錯過會熱衰竭。', storyEn: 'Before leaving: 1. Press tires to check pressure. 2. Adjust saddle to hip height to protect your knees. 3. Fill your water bottle! Pit stops are rare.' }
                    ] }
                ],
                afternoon: [{ id: 'cycling-tamsui', title: '關渡➔淡水 破風挑戰', titleEn: 'Guandu to Tamsui Sprint', itemType: 'spot', type: 'nature', duration: '3小時', image: '🚴', description: '從大稻埕到淡水，這條被譽為「金色水岸」的自行車道，沿途會經過紅樹林保護區、關渡大橋，是一條結合都會天際線與濕地生態的完美路線。', descriptionEn: 'The "Golden Waterfront" bikeway takes you past mangrove reserves and the iconic Guandu Bridge. A perfect mix of city skyline and wetland ecology.', coverImage: 'https://images.unsplash.com/photo-1541625602330-2277a4c4618c?q=80&w=1740&auto=format&fit=crop', startTime: '13:00', arrivalTransport: 'bike', facilityTags: ['sun-exposure', 'windy'], expertNote: '🚴 20km 挑戰：沿著金色水岸，過了關渡大橋後海風會變大。若遇到逆風請切換低檔位踩踏，保持迴轉速。', expertNoteEn: '20km Challenge: Headwinds increase after Guandu Bridge. Shift to a lower gear and maintain your cadence.', expertStories: [
                    { id: 'must-do', label: '【關渡大橋】', labelEn: 'Guandu Pitstop', summary: '中途拉筋與補水', summaryEn: 'Stretch & Hydrate', story: '騎到關渡大橋（巨大的紅色拱橋）時，代表行程已經過半！請務必在這裡下車拉筋，並在旁邊的宮廟或休息區補充水分，別逞強一口氣騎完。', storyEn: 'When you reach the massive red Guandu Bridge, you are halfway there! Get off, stretch your legs, and rehydrate at the nearby rest area. Don\'t push through without a break.' },
                    { id: 'trap', label: '【逆風陷阱】', labelEn: 'Headwind Trap', summary: '出海口的海風', summaryEn: 'Coastal Winds', story: '過了關渡後，因為靠近出海口，下午非常容易遇到強勁的逆風（海風吹向陸地）。請切換到較輕的齒比，維持迴轉速，不要硬踩，否則大腿很容易抽筋。', storyEn: 'Past Guandu, you will likely hit strong headwinds coming from the coast. Shift to a lighter gear and spin faster rather than pushing hard to avoid cramps.' }
                ] }],
                evening: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a-tamsui')!, instanceId: 'od-2-1', startTime: '17:30', arrivalTransport: 'bike', expertNote: '🌅 獎勵：在淡水河畔將 YouBike 歸還。看著夕陽，買一份阿給與魚丸湯，這是對雙腿最好的慰勞。', expertNoteEn: 'Return your YouBike at Tamsui. Grab an Agei and fishball soup while watching the sunset—the ultimate reward.' },
                    { id: 'return-h2', title: '搭捷運直達市區', titleEn: 'Red Line Back to City', itemType: 'spot', startTime: '20:00', arrivalTransport: 'public', facilityTags: ['restroom', 'nap-friendly'], expertNote: '🚄 交通：從捷運「淡水站」搭乘紅線可直達市區（約 45-50 分鐘），強烈建議在車上小睡恢復。', expertNoteEn: 'Transport: Red Line direct to the city (45-50 mins). Highly recommend a power nap on the train.' }
                ],
                night: [], accommodation: []
            },
            'Day 3': {
                theme: '【恢復】白色岩脈與溫泉洗禮',
                themeEn: '【Restoration】White Rocks & Springs',
                themeEmoji: '🛁',
                morning: [
                    { id: 'start-d3', title: '出發前往北投山區', titleEn: 'Head to Beitou Hills', itemType: 'spot', startTime: '09:00', arrivalTransport: 'public', expertNote: '🚄 交通：搭乘捷運紅線直達「唭哩岸站」，準備開始今天的動態恢復。', expertNoteEn: 'Transport: Red Line to Qilian Station for active recovery.' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a-jjy')!, instanceId: 'od-3-1', startTime: '10:00', arrivalTransport: 'public', facilityTags: ['sun-exposure', 'slippery'], expertNote: '攀爬難度：(Low 🟢) 軍艦岩。💡 達人提示：白色的雪木砂岩在有沙土時極為濕滑，請穿著抓地力強的鞋子。登頂後可拍出猶如懸崖邊的大片。', expertNoteEn: 'Difficulty: (Low 🟢) Jun-Jian-Yan. 💡 Expert Tip: The white sandstone is extremely slippery when dusty. Wear grippy shoes. Epic cliff-like photos at the top.' }
                ],
                afternoon: [{ ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a17')!, instanceId: 'od-3-2', startTime: '14:00', arrivalTransport: 'walk', facilityTags: ['hot-spring', 'restroom'], expertNote: '♨️ 核心環節：北投溫泉。這是明天攻克茶壺山的關鍵。建議採用「冷熱交替浴」加速乳酸代謝。', expertNoteEn: 'Core Step: Beitou Hot Spring. Use contrast therapy (hot/cold alternating) to flush out lactic acid before tomorrow\'s major hike.' }],
                evening: [
                    { id: 'beitou-food', title: '北投市場在地美食', titleEn: 'Beitou Market Eats', itemType: 'spot', type: 'food', duration: '1.5小時', image: '🍲', description: '北投人的廚房！雖然早上的傳統市場最為出名，但到了傍晚，市場外圍的新市街與清江路會搖身一變，成為在地人覓食的熱鬧夜市。', descriptionEn: 'The kitchen of Beitou! While famous for its morning market, the surrounding streets transform into a bustling local night market in the evening.', coverImage: 'https://images.unsplash.com/photo-1583417646014-411311ba0341?q=80&w=1740&auto=format&fit=crop', startTime: '18:00', arrivalTransport: 'walk', facilityTags: ['food', 'crowd-warning', 'cash-only'], expertNote: '🍲 泡完溫泉的最佳補給站！晚上市場內部已關閉，請直接攻略外圍的夜市小吃。', expertNoteEn: 'Best refuel spot after hot springs. The inner market is closed, so focus on the vibrant street stalls outside.', expertStories: [
                        { id: 'trap', label: '【時間陷阱】', labelEn: 'Time Trap', summary: '名店晚間沒開', summaryEn: 'Famous Stalls Closed', story: '大防雷！很多人晚上想吃鼎鼎大名的「矮仔財滷肉飯」，但市場內部攤位下午兩點就收攤了！晚上來請直接鎖定外圍街道。', storyEn: 'Big trap! The famous Ai-Zai-Cai braised pork rice inside the market closes at 2 PM. In the evening, eat at the street stalls outside.' },
                        { id: 'must-eat', label: '【必喝神水】', labelEn: 'Must Drink', summary: '高記茶莊無憂茶', summaryEn: 'Gao Ji Tea', story: '在地人手一杯！點一杯招牌的「無憂茶」（烏龍茶混綠茶），用極為傳統的袋裝插吸管。泡完溫泉後喝下一大口，瞬間回魂！', storyEn: 'A local favorite! Order the signature "Wuyou Tea" (Oolong + Green tea) in a traditional plastic bag. The ultimate refreshment after a hot spring.' },
                        { id: 'must-eat', label: '【在地晚餐】', labelEn: 'Local Dinner', summary: '排骨酥與甜不辣', summaryEn: 'Ribs & Tempura', story: '晚上推薦吃外圍的「簡記排骨酥麵」或是「陳家甜不辣」。剛泡完湯身體需要熱量，這些都是能迅速補充碳水的好選擇。', storyEn: 'For dinner, try Jian-Ji Rib Noodles or Chen Family Tempura. They are perfect for replenishing carbs after your hot spring soak.' },
                        { id: 'must-do', label: '【完美收尾】', labelEn: 'Sweet Ending', summary: '陳家剉冰', summaryEn: 'Chen Family Ice', story: '吃完正餐後，走到陳家剉冰點一碗滿滿配料的黑糖剉冰。讓被溫泉加熱的身體徹底降溫，為明天的極限攀登做好肌肉準備。', storyEn: 'Finish with a bowl of brown sugar shaved ice. It cools down your body temperature completely, prepping your muscles for tomorrow\'s extreme hike.' }
                    ] },
                    { id: 'return-h3', title: '早早返回飯店', titleEn: 'Early Return', itemType: 'spot', startTime: '20:00', arrivalTransport: 'public', expertNote: '🚄 交通：搭乘捷運紅線返回。今晚請務必早睡，明天是整趟行程的體力大魔王。', expertNoteEn: 'Transport: Red Line back. Go to bed early tonight—tomorrow is the final boss of physical exertion.' }
                ],
                night: [], accommodation: []
            },
            'Day 4': {
                theme: '【山城】從稜線巔峰到貓村療癒',
                themeEn: '【Mountain City】Ridge to Cat Haven',
                themeEmoji: '🏔️',
                morning: [
                    { id: 'start-d4', title: '清晨前往瑞芳', titleEn: 'Early to Ruifang', itemType: 'spot', startTime: '07:30', arrivalTransport: 'public', facilityTags: ['early-start'], expertNote: '🚄 交通戰略：務必提早出發避開山區午後雷陣雨。在台北車站搭乘台鐵至「瑞芳站」，轉乘客運上金瓜石。', expertNoteEn: 'Transport Strategy: Start early to avoid afternoon mountain thunderstorms. TRA to Ruifang, then bus to Jinguashi.' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a-teapot')!, instanceId: 'od-4-1', startTime: '09:00', arrivalTransport: 'public', facilityTags: ['gloves-needed', 'weather-check', 'no-restroom'], expertNote: '攀爬難度：(High 🔴 - 終極挑戰) 茶壺山。💡 防雷陷阱：登頂最後一段需抓繩攀岩，【絕對必須】準備防滑手套！若遇雨天請直接放棄，岩石極滑會發生危險。', expertNoteEn: 'Difficulty: (High 🔴 - Ultimate Challenge) Teapot Mt. 💡 TRAP: The final ascent requires rope scrambling. You MUST bring grip gloves. DO NOT attempt if raining.' }
                ],
                afternoon: [{ ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a-houtong')!, instanceId: 'od-4-2', startTime: '13:30', arrivalTransport: 'taxi', facilityTags: ['restroom', 'cafe'], expertNote: '🐈 (Low 🟢) 運動後心理恢復：猴硐貓村。💡 物流提示：從金瓜石下山前往猴硐，強烈建議直接叫 Uber/計程車，保留體力與時間。', expertNoteEn: '🐈 (Low 🟢) Mental Recovery: Cat Village. 💡 Logistics: Take an Uber from Jinguashi to Houtong to save time and legs.' }, { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a16')!, instanceId: 'od-4-3', startTime: '16:00', arrivalTransport: 'public', facilityTags: ['stairs', 'food'], expertNote: '🏮 九份黃昏。拖著疲憊的雙腿在茶館坐下，喝杯熱茶，俯瞰剛才征服的山頭，這是戶外人的極致浪漫。', expertNoteEn: 'Jiufen sunset. Sit in a teahouse with sore legs, sipping hot tea while overlooking the peaks you just conquered. Pure romance.' }],
                evening: [
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-f10')!, instanceId: 'od-4-4', startTime: '19:00', arrivalTransport: 'public', facilityTags: ['crowd-warning'], expertNote: '🍜 基隆廟口夜市。極限運動了一天，營養三明治與海鮮是最好的卡路里補充。', expertNoteEn: 'Keelung Night Market. Nutritious sandwiches and seafood are the best calorie refills after extreme sports.' },
                    { id: 'return-h4', title: '搭客運無腦回台北', titleEn: 'Direct Bus to Taipei', itemType: 'spot', startTime: '21:00', arrivalTransport: 'public', facilityTags: ['nap-friendly'], expertNote: '🚌 歸途指引：不要去擠火車！直接在基隆搭乘 2088 客運，保證有座位，上車直接睡到市府轉運站。', expertNoteEn: 'Return Guide: Don\'t squeeze onto the train. Take Bus 2088 from Keelung for a guaranteed seat and sleep all the way to Taipei.' }
                ],
                night: [], accommodation: []
            },
            'Day 5': {
                theme: '【幻境】銀河瀑布與貓空茶語',
                themeEn: '【Fantasy】Silver Waterfall & Tea',
                themeEmoji: '🍵',
                morning: [
                    { id: 'start-d5', title: '前往銀河洞', titleEn: 'Head to Yinhedong', itemType: 'spot', startTime: '08:30', arrivalTransport: 'public', facilityTags: ['bus-schedule', 'weather-check'], expertNote: '🚌 交通防雷：搭乘捷運綠線至「新店站」，轉乘「綠12」公車。注意！綠12 班次極少（約一小時一班），請務必提前用 Bus+ 查好時刻表，錯過會崩潰。', expertNoteEn: '🚌 Transit Trap: Green Line to Xindian, then Bus G12. WARNING: G12 runs rarely (1/hr). Check the schedule in advance or you will be stranded.' },
                    { ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-a-yhd')!, instanceId: 'od-5-1', startTime: '10:00', arrivalTransport: 'public', facilityTags: ['slippery', 'stairs'], expertNote: '攀爬難度：(Medium 🟡) 攝影控聖地。瀑布步道常年潮濕生苔。💡【硬核支線】：裝備與體力充足者，可不走回頭路，直接沿「銀河洞越嶺步道」向上穿越森林抵達貓空（約 1.5-2 小時）。', expertNoteEn: 'Difficulty: (Medium 🟡) Photographer\'s Holy Land. Steps are mossy and wet. 💡【Hardcore Side Quest】: Don\'t turn back. Hike the ridge trail directly up through the jungle to Maokong (1.5-2 hrs).' }
                ],
                afternoon: [{ ...TAIPEI_ASSETS.find(a => a.id === 'tw-t-fam-mao')!, instanceId: 'od-5-2', title: '貓空茶園與纜車下山', titleEn: 'Maokong Tea & Gondola', startTime: '14:00', arrivalTransport: 'walk', facilityTags: ['cafe', 'restroom'], expertNote: '🍵 慢活：若完成越嶺挑戰，你的衣服應該全濕了。找間有冷氣的茶館換件乾衣服，喝杯鐵觀音。下山時搭乘貓空纜車水晶車廂，享受完美的上帝視角。', expertNoteEn: 'If you completed the ridge hike, you are drenched. Find a teahouse, change into a dry shirt, and sip Tieguanyin. Take the Crystal Gondola down for god-mode views.', expertStories: [{ id: 'must-eat', label: '【山林茶香】', labelEn: 'Tea Tasting', summary: '鐵觀音與茶香小點', summaryEn: 'Tieguanyin & Snacks', story: '貓空以鐵觀音聞名。越嶺之後，隨意找間能眺望市區的茶坊，點一壺熱茶配上茶香霜淇淋，是恢復體力的最佳方式。', storyEn: 'Famous for Tieguanyin tea. Find a teahouse with a city view, order a pot of hot tea and tea-flavored soft serve to recover your energy.' }] }],
                evening: [
                    { id: 'gongguan-dinner', title: '公館商圈學生美食', titleEn: 'Gongguan Student Eats', itemType: 'spot', type: 'food', duration: '2小時', image: '🍲', description: '緊鄰台灣大學的公館商圈，充滿了年輕活力與平價的高CP值美食。從黑糖珍珠鮮奶到東南亞異國料理，這裡是台北最有「學生時代回憶」的美食聖地。', descriptionEn: 'Located next to National Taiwan University, Gongguan is buzzing with youthful energy and high-CP (cost-performance) food. The ultimate spot for bubble tea and local bites.', coverImage: 'https://images.unsplash.com/photo-1552688468-d87e6f7a58f2?q=80&w=1740&auto=format&fit=crop', startTime: '18:30', arrivalTransport: 'public', facilityTags: ['food', 'crowd-warning'], expertNote: '🍲 下山後直達公館。推薦黑糖珍珠鮮奶與各式平價巷弄美食，用年輕人的活力結束這天的行程。', expertNoteEn: 'Head straight to Gongguan. Bubble tea and affordable student eats to end the day with youthful energy.', expertStories: [{ id: 'must-do', label: '【卡路里炸彈】', labelEn: 'Calorie Bomb', summary: '黑糖珍珠鮮奶與刈包', summaryEn: 'Bubble Tea & Pork Belly Bun', story: '剛消耗完大量體力，推薦直接去買一杯「陳三鼎」或類似的黑糖珍珠鮮奶，再配上對面的「藍家割包」，這是公館最經典的罪惡組合！', storyEn: 'After a hard hike, grab a brown sugar pearl milk and pair it with a pork belly bun (Gua Bao) from Lan Jia. The classic guilty pleasure combo!' }] },
                    { id: 'return-h5', title: '返回飯店', titleEn: 'Return to Hotel', itemType: 'spot', startTime: '20:30', arrivalTransport: 'public', facilityTags: ['massage'], expertNote: '🚄 交通：搭乘捷運綠線輕鬆返回飯店。這是最後一晚的台北，可以去按個腳底按摩。', expertNoteEn: 'Transport: Green Line back. It\'s your last night—treat yourself to a foot massage.' }
                ],
                night: [], accommodation: []
            },
            'Day 6': {
                theme: '【收心】帶著肌肉記憶平安歸家',
                themeEn: '【Conclusion】Muscle Memories',
                themeEmoji: '✈️',
                morning: [{ id: 'final-shopping', title: '台北市區最終補給', titleEn: 'Final Resupply', itemType: 'spot', type: 'shopping', duration: '2小時', image: '🎁', description: '即將離開台灣前的最後採買時光。不管是補充未來去其他國家所需的戶外裝備，還是帶幾盒微熱山丘鳳梨酥回國，這裡都能一次解決。', descriptionEn: 'Your final shopping time before leaving Taiwan. Grab some high-quality local outdoor gear or souvenir pineapple cakes to take home.', coverImage: 'https://images.unsplash.com/photo-1555529733-0e670560f8e1?q=80&w=1740&auto=format&fit=crop', startTime: '10:00', arrivalTransport: 'public', facilityTags: ['luggage-storage'], expertNote: '🎁 裝備與伴手禮：去戶外用品店補充消耗品，或買些台灣茶葉回去。💡 提醒：若登山鞋沾滿泥土，建議去便利商店買濕紙巾稍微清理，以免機場安檢困擾。', expertNoteEn: 'Gear and gifts. 💡 Tip: If your hiking boots are muddy, wipe them down before heading to the airport to avoid security hassles.', expertStories: [
                    { id: 'must-do', label: '【裝備補給】', labelEn: 'Gear Shop', summary: '高CP值台灣排汗衫', summaryEn: 'Local Base Layers', story: '台北車站周邊（如中山北路一段）有許多老字號的高品質戶外用品店（如百岳、登山友）。可以在這裡買到便宜又耐穿的「台灣製」排汗衫與羊毛襪。', storyEn: 'The area around Taipei Main Station has many high-quality, old-school outdoor gear shops. It\'s a great place to buy cheap but durable "Made in Taiwan" base layers.' },
                    { id: 'trap', label: '【海關防雷】', labelEn: 'Customs Trap', summary: '清理沾滿泥土的鞋', summaryEn: 'Clean Muddy Boots', story: '如果前幾天去茶壺山或銀河洞讓登山鞋沾滿了泥土，請務必去便利商店買包濕紙巾清理鞋底。許多國家（如澳洲、紐西蘭）的海關對帶有泥土的鞋子檢查極為嚴格！', storyEn: 'If your hiking boots are muddy from Teapot Mt or Yin-He-Dong, buy wet wipes and clean the soles. Many countries (like Aus/NZ) have strict customs checks for soil on footwear!' }
                ] }],
                afternoon: [{ id: 'departure', title: '前往機場', titleEn: 'To Airport', itemType: 'spot', startTime: '14:00', arrivalTransport: 'public', facilityTags: ['mrt'], expertNote: '🚄 搭乘機捷。這 6 天的山、海、單車與汗水，將成為你大腿裡最深刻的台灣記憶。平安歸國！', expertNoteEn: 'Airport MRT. The mountains, seas, bikes, and sweat of these 6 days will be your deepest Taiwanese memories. Safe travels!' }],
                evening: [], night: [], accommodation: []
            }
        }
    }
];
