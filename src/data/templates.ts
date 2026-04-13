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
        coverImage: 'https://images.unsplash.com/photo-1656746792552-c1eda28136d3?auto=format&fit=crop&q=80&w=800',
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
