import { Template } from '../types';
import { TOKYO_ASSETS, OSAKA_ASSETS, KYOTO_ASSETS, MELBOURNE_ASSETS } from './assets';
import { TAIPEI_ASSETS, TAINAN_ASSETS, HUALIEN_ASSETS, TAICHUNG_ASSETS } from './assets/taiwan';

// é”äººæ¨¡æ¿ - Curated for MVP Launch
export const TEMPLATES: Template[] = [
    // ===== MELBOURNE TEMPLATES (Featured) =====
    {
        id: 'mel-coffee',
        isHidden: true,
        name: 'å¢¨çˆ¾æœ¬å’–å•¡ & å··å¼„æ–‡åŒ– 1 æ—¥',
        nameEn: 'Melbourne Coffee & Laneways 1-Day',
        title: 'åœ¨åœ°äººå¸¶ä½ å–å’–å•¡ã€éå··å¼„',
        titleEn: 'A Local\'s Guide to Coffee & Laneways',
        coverImage: '/images/covers/melbourne.png',
        author: 'Melbourne Local',
        authorEn: 'Melbourne Local',
        authorId: 'c-mel',
        region: 'melbourne',
        tags: ['å’–å•¡', 'å··å¼„', 'æ–‡åŒ–', 'å¿…è¨ª'],
        tagsEn: ['Coffee', 'Laneways', 'Culture', 'Must-Visit'],
        vibes: [
            { tag: '#å’–å•¡æ–‡åŒ–', color: 'bg-amber-100 text-amber-800' },
            { tag: '#è¡—é ­è—è¡“', color: 'bg-purple-100 text-purple-800' },
            { tag: '#éš±è—æ™¯é»ž', color: 'bg-teal-50 text-teal-700' }
        ],
        coverStory: {
            quote: 'å¢¨çˆ¾æœ¬çš„å’–å•¡ä¸åªæ˜¯é£²æ–™ï¼Œæ˜¯ä¸€ç¨®ç”Ÿæ´»æ–¹å¼ã€‚',
            quoteEn: 'In Melbourne, coffee isn\'t just a drink - it\'s a way of life.',
            description: 'è·Ÿè‘—åœ¨åœ°äººçš„è…³æ­¥ï¼Œå¾žç«™è‘—å–å’–å•¡çš„å„€å¼æ„Ÿé–‹å§‹ï¼Œç©¿è¶Šå¡—é´‰å··å¼„ï¼Œæœ€å¾Œåœ¨éš±è—é…’å§çµæŸå®Œç¾Žçš„ä¸€å¤©ã€‚',
            authorLabel: 'å¢¨çˆ¾æœ¬åœ¨åœ°äººç§æˆ¿æŽ¨è–¦'
        },
        authorStory: {
            zh: 'æˆ‘åœ¨å¢¨çˆ¾æœ¬ä½äº† 6 å¹´ï¼Œå¾žä¸€æ¯ Flat White é–‹å§‹æ„›ä¸Šé€™åº§åŸŽå¸‚ã€‚é€™ä»½è·¯ç·šæ˜¯æˆ‘æ¯æ¬¡æœ‹å‹ä¾†è¨ªæ™‚å¸¶ä»–å€‘èµ°çš„ç§æˆ¿è¡Œç¨‹ï¼Œå¾žç«™è‘—å–å’–å•¡çš„ Patricia åˆ°å¡—é´‰å··å¼„ï¼Œæ¯ä¸€ç«™éƒ½æ˜¯æˆ‘çš„æ—¥å¸¸ã€‚',
            en: 'I\'ve lived in Melbourne for 6 years. It all started with a Flat White. This route is the one I take every friend through â€” from standing-room-only Patricia to the graffiti laneways. Every stop is part of my daily life.'
        },
        travelStyle: ['å’–å•¡', 'æ–‡åŒ–'],
        targetAudience: {
            personas: ['å’–å•¡æŽ§', 'æ–‡é’'],
            personasEn: ['Coffee Nerd', 'Culture Lover'],
            description: 'é©åˆå–œæ­¡åœ¨åœ°å’–å•¡æ–‡åŒ–ã€è¡—é ­è—è¡“å’Œå··å¼„æŽ¢ç´¢çš„æ—…äºº',
            paceLevel: 'moderate'
        },
        travelTips: [
            { tip: 'å¢¨çˆ¾æœ¬å’–å•¡åº—é€šå¸¸ä¸æä¾›å¤–å¸¶æ¯ï¼Œè‡ªå‚™æ¯å­æ›´ç’°ä¿', tipEn: 'Melbourne cafÃ©s often don\'t offer takeaway cups, bring your own' },
            { tip: 'å··å¼„å¡—é´‰æœƒå®šæœŸæ›´æ›ï¼Œæ¯æ¬¡åŽ»éƒ½æœ‰æ–°é©šå–œ', tipEn: 'Laneway graffiti changes regularly, always something new' }
        ],
        duration: 1,
        rating: 4.9,
        tier: 'official',
        copiedCount: 284,
        price: 0.99,
        isLocked: false,
        highlights: { days: 1, spots: 5, tips: 4, rating: 4.9, usageCount: 284 },
        dayPreviews: [
            { day: 1, summary: 'Patricia Coffee â†’ Hosier Lane â†’ Queen Vic Market â†’ Bar Americano' }
        ],
        schedule: {
            'Day 1': {
                theme: '\u5496\u5561\u6587\u5316 & \u5df7\u5f04\u85dd\u8853',
                themeEn: 'Coffee Culture & Laneway Art',
                themeEmoji: '\u2615',
                morning: [
                    { ...MELBOURNE_ASSETS[0], instanceId: 'mel-c-1', startTime: '08:00', arrivalTransport: 'public' },
                    { ...MELBOURNE_ASSETS[1], instanceId: 'mel-c-2', startTime: '09:30', arrivalTransport: 'walk' },
                    { ...MELBOURNE_ASSETS[8], instanceId: 'mel-c-8', startTime: '10:30', arrivalTransport: 'public' },
                    { ...MELBOURNE_ASSETS[22], instanceId: 'mel-c-note', startTime: '11:45', arrivalTransport: 'walk' }
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
        isHidden: true,
        name: 'å¢¨çˆ¾æœ¬éš±è—é…’å§å·¡ç¦®',
        nameEn: 'Melbourne Hidden Bars Tour',
        title: 'ç©¿éŽæ›¸æž¶ã€å†·è—åº«ï¼ŒæŽ¢ç´¢å¢¨çˆ¾æœ¬åœ°ä¸‹é…’å§',
        titleEn: 'Behind Bookshelves & Freezers: Melbourne\'s Secret Bars',
        coverImage: '/images/covers/melbourne.png',
        author: 'Melbourne Local',
        authorEn: 'Melbourne Local',
        authorId: 'c-mel',
        region: 'melbourne',
        tags: ['é…’å§', 'éš±è—æ™¯é»ž', 'å¤œç”Ÿæ´»', 'Premium'],
        tagsEn: ['Bars', 'Hidden Gems', 'Nightlife', 'Premium'],
        vibes: [
            { tag: '#ç¦é…’æ™‚æœŸ', color: 'bg-stone-100 text-stone-800' },
            { tag: '#ç§˜å¯†å…¥å£', color: 'bg-rose-100 text-rose-800' },
            { tag: '#èª¿é…’è—è¡“', color: 'bg-amber-50 text-amber-700' }
        ],
        coverStory: {
            quote: 'å¢¨çˆ¾æœ¬æœ€å¥½çš„é…’å§ï¼Œéƒ½è—åœ¨ä½ æ‰¾ä¸åˆ°çš„åœ°æ–¹ã€‚',
            quoteEn: 'Melbourne\'s best bars are hidden where you\'d never look.',
            description: 'å¾žæ›¸æž¶å¾Œçš„ç¦é…’æ™‚æœŸé…’å§ï¼Œåˆ°å†·è—åº«é–€å¾Œçš„ç†±å¸¶å¤©å ‚ã€‚é€™ä¸æ˜¯æ™®é€šçš„é…’å§å·¡ç¦®ï¼Œè€Œæ˜¯ä¸€å ´åŸŽå¸‚å°‹å¯¶ã€‚',
            authorLabel: 'å¤œç”Ÿæ´»é”äººç²¾é¸è·¯ç·š'
        },
        authorStory: {
            zh: 'èº«ç‚ºèª¿é…’å¸« 4 å¹´ï¼Œæˆ‘è¦ªè‡ªæ‹œè¨ªéŽå¢¨çˆ¾æœ¬ 200+ é–“é…’å§ã€‚é€™æ¢è·¯ç·šç²¾é¸äº†æœ€é›£æ‰¾åˆ°å…¥å£ã€ä½†æœ€å€¼å¾—ä¸€è¨ªçš„ Speakeasyï¼Œæ¯ä¸€é–“éƒ½æœ‰ç¨ç‰¹çš„æ•…äº‹å’Œæ‹›ç‰Œèª¿é…’ã€‚',
            en: 'As a bartender for 4 years, I\'ve visited 200+ bars in Melbourne. This route features the hardest-to-find Speakeasies that are most worth visiting â€” each with its own story and signature cocktails.'
        },
        travelStyle: ['å¤œç”Ÿæ´»', 'æŽ¢éšª'],
        targetAudience: {
            personas: ['å¤œè²“æ—', 'èª¿é…’æ„›å¥½è€…'],
            personasEn: ['Night Owl', 'Cocktail Enthusiast'],
            description: 'é©åˆå–œæ­¡æŽ¢ç´¢éš±è—é…’å§ã€äº«å—ç²¾ç·»èª¿é…’çš„å¤œç”Ÿæ´»çŽ©å®¶',
            paceLevel: 'slow'
        },
        travelTips: [
            { tip: 'å¤§éƒ¨åˆ†éš±è—é…’å§ä¸æŽ¥å—é ç´„ï¼Œç›´æŽ¥åŽ»æŽ’éšŠ', tipEn: 'Most hidden bars don\'t take reservations, just queue up' },
            { tip: 'ç©¿è‘—ä¸è¦å¤ªä¼‘é–’ï¼Œéƒ¨åˆ†é…’å§æœ‰ dress code', tipEn: 'Don\'t dress too casually, some bars have dress codes' }
        ],
        duration: 1,
        rating: 4.8,
        tier: 'creator',
        copiedCount: 192,
        price: 0.99,
        originalPrice: 4.99,
        isLocked: true,
        highlights: { days: 1, spots: 3, tips: 4, rating: 4.8, usageCount: 192 },
        dayPreviews: [
            { day: 1, summary: 'Bar Americano â†’ Eau de Vie â†’ Robot Bar' }
        ],
        schedule: {
            'Day 1': {
                theme: 'ç¦é…’æ™‚æœŸé…’å§å·¡ç¦®',
                themeEn: 'Prohibition Era Bar Crawl',
                themeEmoji: 'ðŸ¥ƒ',
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
        name: 'æ±äº¬ç¶“å…¸åˆå¿ƒè€… 4 æ—¥éŠ',
        nameEn: 'Tokyo Classic Beginner 4-Day Trip',
        title: 'ç©¿è¶Šæ˜­å’Œæ™‚ä»£ï¼šæ±äº¬ 4 æ—¥æ–‡é’æ•£ç­–',
        titleEn: 'Through Showa Era: 4-Day Tokyo Cultural Walk',
        coverImage: '/images/covers/tokyo.png',
        author: 'TravelCanvas ç·¨è¼¯éƒ¨',
        authorEn: 'TravelCanvas Editors',
        authorId: 'c0',
        region: 'tokyo',
        tags: ['åˆå¿ƒè€…', 'ç¶“å…¸è·¯ç·š'],
        tagsEn: ['Beginner', 'Classic'],
        vibes: [
            { tag: '#æ˜­å’Œæ‡·èˆŠ', color: 'bg-amber-100 text-amber-800' },
            { tag: '#æ”å½±è–åœ°', color: 'bg-stone-100 text-stone-600' },
            { tag: '#æ·±åº¦æ•£æ­¥', color: 'bg-teal-50 text-teal-700' }
        ],
        coverStory: {
            quote: 'å¦‚æžœåŽ­å€¦äº†æ–°å®¿çš„æ“æ“ ï¼Œé€™æ¢è·¯ç·šå¸¶ä½ æ‰¾å›žæ±äº¬å‘¼å¸çš„ç¯€å¥ã€‚',
            quoteEn: 'Tired of Shinjuku crowds? This route helps you find Tokyo\'s true rhythm.',
            description: 'å¾žä¸‹ç”ºçš„æ˜­å’Œå–›èŒ¶åº—ï¼Œåˆ°éš±è—åœ¨è¡¨åƒé“å··å¼„çš„è¨­è¨ˆå¸«èšè½ã€‚é€™ä¸æ˜¯è§€å…‰å®¢çš„æ‰“å¡è¡Œç¨‹ï¼Œè€Œæ˜¯ä¸€å ´èˆ‡æ±äº¬è€éˆé­‚çš„å°è©±ã€‚',
            authorLabel: 'æ±äº¬åœ¨åœ° 10 å¹´è¨­è¨ˆå¸«æŽ¨è–¦'
        },
        authorStory: {
            zh: 'æˆ‘æ˜¯æ—…å±…æ±äº¬ 10 å¹´çš„å°ç£è¨­è¨ˆå¸«ã€‚é€™ä»½è¡Œç¨‹ä¸æ˜¯è§€å…‰å®¢è·¯ç·šï¼Œè€Œæ˜¯æˆ‘æ¯å¤©ç”Ÿæ´»çš„æ±äº¬ â€” æ¸…æ™¨åœ¨æ·ºè‰å¯ºæ•£æ­¥ã€ä¸‹åˆåœ¨ä»£å®˜å±±çš„å’–å•¡åº—å·¥ä½œã€å‚æ™šåœ¨éš…ç”°å·çœ‹å¤•é™½ã€‚å¸Œæœ›ä½ ä¹Ÿèƒ½æ„Ÿå—åˆ°é€™åº§åŸŽå¸‚å®‰éœè€Œæº«æŸ”çš„ä¸€é¢ã€‚',
            en: 'I\'m a Taiwanese designer who\'s lived in Tokyo for 10 years. This isn\'t a tourist route â€” it\'s the Tokyo I live in every day. Morning walks at Sensoji, afternoon coffee in Daikanyama, sunset by Sumida River. I hope you\'ll feel the quiet, gentle side of this city too.'
        },
        travelStyle: ['æ–‡é’', 'æ·±åº¦'],
        targetAudience: {
            personas: ['åˆå¿ƒè€…', 'æ–‡é’', 'æ”å½±å¸«'],
            personasEn: ['First-Timer', 'Culture Lover', 'Photographer'],
            description: 'é©åˆç¬¬ä¸€æ¬¡åŽ»æ±äº¬ã€æƒ³é¿é–‹è§€å…‰å®¢è·¯ç·šçš„æ·±åº¦æ—…è¡Œè€…',
            paceLevel: 'moderate'
        },
        travelTips: [
            { tip: 'è³¼è²· Suica å¡ï¼Œæ­åœ°éµæ¯”è¨ˆç¨‹è»Šæ–¹ä¾¿å¾ˆå¤š', tipEn: 'Get a Suica card, subway is much more convenient than taxis' },
            { tip: 'ä¾¿åˆ©å•†åº—çš„é£Ÿç‰©å“è³ªè¶…ä¹Žæƒ³åƒï¼Œä¸è¦å°çœ‹å®ƒ', tipEn: 'Convenience store food quality is incredible, don\'t underestimate it' },
            { tip: 'è¨˜å¾—å¸¶é›¶éŒ¢ï¼Œå¾ˆå¤šè‡ªå‹•è²©è³£æ©Ÿä¸æ”¶å¤§éˆ”', tipEn: 'Bring small change, many vending machines don\'t accept large bills' }
        ],
        duration: 4,
        rating: 4.8,
        price: 0.99,
        tier: 'official',
        copiedCount: 1205,
        highlights: { days: 4, spots: 10, tips: 6, rating: 4.8, usageCount: 1205 },
        dayPreviews: [
            { day: 1, summary: 'æ·ºè‰å¯º â†’ æ™´ç©ºå¡” â†’ æ¾€è°· â†’ TeamLab â†’ Shibuya Sky' },
            { day: 2, summary: 'ç¯‰åœ°å¸‚å ´ â†’ éŠ€åº§ â†’ å…­æœ¬æœ¨' },
            { day: 3, summary: 'æ–°å®¿å¾¡è‹‘ â†’ åŽŸå®¿ â†’ è¡¨åƒé“' },
            { day: 4, summary: 'ç§‹è‘‰åŽŸ â†’ ä¸Šé‡Žå…¬åœ’ â†’ é˜¿ç¾Žæ©«ç”º' }
        ],
        schedule: {
            'Day 1': {
                theme: 'ä¸‹ç”ºæ•£æ­¥ & æ˜­å’Œé¢¨æƒ…',
                themeEn: 'Downtown Walk & Showa Vibes',
                themeEmoji: 'â›©ï¸',
                morning: [
                    {
                        ...TOKYO_ASSETS[0], // æ·ºè‰å¯º
                        instanceId: 't1-1',
                        startTime: '07:00',
                        arrivalTransport: 'public',
                        insiderTip: {
                            teaser: 'æ—©èµ·é³¥çš„ç§˜å¯†é¢¨æ™¯',
                            teaserEn: 'Early bird secret view',
                            full: {
                                story: 'åœ¨æ­¤æ™‚æ®µæŠµé”ï¼Œä»²è¦‹ä¸–é€šçš„éµæ²é–€å½©ç¹ªé‚„æ²’æ‹‰ä¸ŠåŽ»ï¼Œæ˜¯åªæœ‰æ—©é³¥æ‰èƒ½çœ‹è¦‹çš„æµ®ä¸–ç¹ªå·ã€‚',
                                storyEn: 'Arrive at this time and you\'ll see the painted shutters of Nakamise-dori.',
                                bestTime: '07:00-08:00',
                                exactLocation: 'å¾žé›·é–€é€²åŽ»å·¦æ‰‹é‚Šç¬¬ä¸‰å®¶åº—å‰',
                                mustTry: 'æ‹æ”éµæ²é–€ä¸Šçš„æµ®ä¸–ç¹ªåœ–æ¡ˆ',
                                avoid: 'ä¸è¦ç­‰åˆ°9é»žå¾Œï¼Œå•†åº—é–‹é–€å°±çœ‹ä¸åˆ°äº†'
                            }
                        }
                    },
                    {
                        ...TOKYO_ASSETS[1], // æ±äº¬æ™´ç©ºå¡”
                        instanceId: 't1-1b',
                        startTime: '09:30',
                        arrivalTransport: 'walk'
                    }
                ],
                afternoon: [
                    {
                        ...TOKYO_ASSETS[2], // æ¾€è°·åå­—è·¯å£
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
                        ...TOKYO_ASSETS[4], // æ˜Žæ²»ç¥žå®®
                        instanceId: 't1-4',
                        startTime: '17:30',
                        arrivalTransport: 'public'
                    }
                ],
                evening: [
                    {
                        ...TOKYO_ASSETS[6], // ä¸€è˜­æ‹‰éºµ
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
        name: 'æ±äº¬ç¾Žé£Ÿåƒè²¨ä¹‹æ—…',
        nameEn: 'Tokyo Foodie Tour',
        title: 'å¾žç¯‰åœ°åˆ°å…­æœ¬æœ¨ï¼šæ±äº¬èƒƒè¢‹å¾æœè¨ˆç•«',
        titleEn: 'From Tsukiji to Roppongi: Conquering Tokyo\'s Food Scene',
        coverImage: '/images/covers/tokyo.png',
        author: 'æ„›åƒé¬¼å®‰å®‰',
        authorEn: 'Foodie Anan',
        authorId: 'c1',
        region: 'tokyo',
        tags: ['ç¾Žé£Ÿ', 'åƒè²¨', 'å¿…åƒ'],
        tagsEn: ['Foodie', 'Eat', 'Must-Try'],
        vibes: [
            { tag: '#æµ·é®®æŽ§', color: 'bg-blue-100 text-blue-800' },
            { tag: '#ç‡’è‚‰å¤©å ‚', color: 'bg-red-100 text-red-800' },
            { tag: '#æ·±å¤œé£Ÿå ‚', color: 'bg-amber-50 text-teal-700' }
        ],
        coverStory: {
            quote: 'åœ¨æ±äº¬ï¼Œèƒƒæ°¸é ä¸å¤ å¤§ï¼Œæ™‚é–“æ°¸é ä¸å¤ é•·ã€‚',
            quoteEn: 'In Tokyo, your stomach is never big enough, and time is never long enough.',
            description: 'é€™ä¸æ˜¯æ™®é€šçš„ç¾Žé£Ÿæ¸…å–®ã€‚å¾žå‡Œæ™¨5é»žçš„ç¯‰åœ°å¸‚å ´ï¼Œåˆ°æ·±å¤œçš„é»ƒé‡‘è¡—å±…é…’å±‹ï¼Œå¸¶ä½ åƒéåœ¨åœ°äººçš„å£è¢‹åå–®ã€‚',
            authorLabel: 'æ±äº¬ç¾Žé£Ÿè©•è«–å®¶æŽ¨è–¦'
        },
        authorStory: {
            zh: 'æˆ‘æ˜¯æ±äº¬ç¾Žé£Ÿè©•è«–å®¶ï¼Œåœ¨é€™åº§åŸŽå¸‚åƒäº† 8 å¹´ã€‚é€™ä»½è¡Œç¨‹ä¸æ˜¯ Google æŽ¨è–¦çš„è§€å…‰ååº—ï¼Œè€Œæ˜¯æˆ‘é€éŽç„¡æ•¸æ¬¡è©¦åƒã€è¢«æ‹’çµ•ã€å†å›žè¨ªå¾Œç²¾é¸çš„çµ•ä½³åå˜ â€” å¾žç¯‰åœ°çš„é­šå¸‚å ´åˆ°æ·±å¤œå±…é…’å±‹ã€‚',
            en: 'I\'m a Tokyo food critic who\'s been eating in this city for 8 years. This isn\'t a Google-recommended tourist list â€” it\'s curated from countless tastings, rejections, and revisits. From Tsukiji fish markets to late-night izakayas.'
        },
        travelStyle: ['ç¾Žé£Ÿ', 'åƒè²¨'],
        targetAudience: {
            personas: ['åƒè²¨', 'ç¾Žé£ŸæŽ¢éšªå®¶'],
            personasEn: ['Foodie', 'Food Adventurer'],
            description: 'é©åˆæƒ³ç”¨ä¸€å¤©åƒéæ±äº¬ç²¾è¯çš„ç¾Žé£Ÿç‹‚äºº',
            paceLevel: 'fast'
        },
        travelTips: [
            { tip: 'ç¯‰åœ°å¸‚å ´è¦æ—©ä¸Š 6 é»žå‰åˆ°ï¼Œå¤ªæ™šäººå¤ªå¤š', tipEn: 'Arrive at Tsukiji before 6 AM, too crowded later' },
            { tip: 'åˆé¤çš„ç‡’è‚‰å¥—é¤æ¯”æ™šé¤ä¾¿å®œå¾ˆå¤š', tipEn: 'Lunch yakiniku sets are much cheaper than dinner' }
        ],
        duration: 1,
        rating: 4.6,
        tier: 'creator',
        copiedCount: 856,
        highlights: { days: 1, spots: 6, tips: 4, rating: 4.6, usageCount: 856 },
        dayPreviews: [
            { day: 1, summary: 'ç¯‰åœ°å¸‚å ´ â†’ æ·ºè‰ â†’ ç‡’è‚‰ â†’ è¡¨åƒé“ â†’ ä¸€è˜­æ‹‰éºµ â†’ é»ƒé‡‘è¡—' }
        ],
        schedule: {
            'Day 1': {
                theme: 'å¾žæ—©åƒåˆ°æ™šçš„ç¾Žé£Ÿé¦¬æ‹‰æ¾',
                themeEn: 'Dawn-to-Dusk Food Marathon',
                themeEmoji: 'ðŸœ',
                morning: [
                    {
                        ...TOKYO_ASSETS[7], // ç¯‰åœ°å¸‚å ´
                        instanceId: 't2-1',
                        startTime: '06:00',
                        arrivalTransport: 'public'
                    },
                    {
                        ...TOKYO_ASSETS[0], // æ·ºè‰å¯º
                        instanceId: 't2-1b',
                        startTime: '08:30',
                        arrivalTransport: 'public'
                    }
                ],
                afternoon: [
                    {
                        ...TOKYO_ASSETS[8], // ç‡’è‚‰
                        instanceId: 't2-2',
                        startTime: '11:30',
                        arrivalTransport: 'public',
                        insiderTip: {
                            teaser: 'åˆé¤å¥—é¤æ˜¯æœ€åˆ’ç®—çš„åƒæ³•',
                            full: {
                                story: 'åˆé¤çš„ã€Œç‰¹é¸å’Œç‰›å¥—é¤ã€Â¥3,800 å°±èƒ½åƒåˆ°æ™šé¤è¦ Â¥15,000 ä»¥ä¸Šçš„ A5 å’Œç‰›ã€‚11:30 é–‹é–€å‰ 15 åˆ†é˜æŽ’éšŠï¼Œé€šå¸¸å¯ä»¥é †åˆ©å…¥å ´ã€‚',
                                exactLocation: 'å…­æœ¬æœ¨åº—è¦–é‡Žæœ€å¥½',
                                bestTime: 'å¹³æ—¥ 11:15 é–‹å§‹æŽ’éšŠ',
                                mustTry: 'ç‰¹é¸ãƒãƒ©ãƒŸ + ç‰¹è£½é†¬æ²¹ãƒ€ãƒ¬'
                            }
                        }
                    },
                    { ...TOKYO_ASSETS[14], instanceId: 't2-2', startTime: '13:00', arrivalTransport: 'public' },
                    {
                        id: 'custom-cafe',
                        title: 'è¡¨åƒé“ä¸‹åˆèŒ¶æ•£æ­¥',
                        titleEn: 'Omotesando Cafe Hopping',
                        type: 'attraction',
                        duration: '2å°æ™‚',
                        image: 'â˜•',
                        description: 'æ¶ˆåŒ–ä¸€ä¸‹ç‡’è‚‰ï¼Œåœ¨è¡¨åƒé“é€›é€›è¨­è¨ˆå¸«å°åº—',
                        price: 0,
                        region: 'tokyo',
                        instanceId: 't2-3',
                        startTime: '14:30',
                        arrivalTransport: 'walk',
                        insiderTip: {
                            teaser: 'è¡¨åƒé“å¾Œå··çš„éš±è—é¸ç‰©åº—ä¸²é€£',
                            teaserEn: 'Omotesando back alley boutique loop',
                            full: {
                                story: 'ä¸è¦åªèµ°è¡¨åƒé“çš„å¤§é¦¬é“ã€‚ç©¿é€²ã€ŒRALPH LAURENã€æ—é‚Šçš„å°å··ï¼Œé‚£è£¡è—è‘—è¶…å¤šç¨ç«‹å’–å•¡å»³ã€å¤è‘—åº—è·Ÿè¨­è¨ˆå¸«å·¥ä½œå®¤ã€‚æŽ¨è–¦åŽ»ã€ŒRATIO &Cã€æˆ–æ˜¯ã€ŒSHOZO COFFEE STOREã€ï¼Œæ°£æ°›è¶…å¥½ã€‚',
                                exactLocation: 'è¡¨åƒé“èˆ‡é’å±±é€šä¹‹é–“çš„å¾Œå··',
                                mustTry: 'åœ¨å··å¼„é–“æ‰¾ä¸€å®¶æœ‰éœ²å¤©åº§ä½çš„å’–å•¡å»³',
                                avoid: 'é€±æœ«ä¸‹åˆäººæ½®çˆ†å¤šï¼Œå»ºè­°å¹³æ—¥é€ è¨ª',
                                bestTime: '15:00'
                            }
                        }
                    }
                ],
                evening: [
                    {
                        ...TOKYO_ASSETS[6], // ä¸€è˜­æ‹‰éºµ
                        instanceId: 't2-4',
                        startTime: '18:00',
                        arrivalTransport: 'public'
                    }
                ],
                night: [
                    {
                        id: 'golden-gai',
                        title: 'æ–°å®¿é»ƒé‡‘è¡—',
                        titleEn: 'Shinjuku Golden Gai',
                        type: 'attraction',
                        duration: '2å°æ™‚',
                        image: 'ðŸ¥ƒ',
                        description: '200å¤šå®¶å°é…’å§æ“ åœ¨ä¸€èµ·ï¼Œå±•ç¾æœ€ç‹‚é‡Žçš„æ±äº¬ã€‚',
                        price: 3000,
                        region: 'tokyo',
                        instanceId: 't2-5',
                        startTime: '21:00',
                        arrivalTransport: 'public',
                        insiderTip: {
                            teaser: 'æ–°æ‰‹çš„é»ƒé‡‘è¡—ç”Ÿå­˜èˆ‡é»žé¤æŒ‡å—',
                            teaserEn: 'Survival & ordering guide for newborns',
                            full: {
                                story: 'é»ƒé‡‘è¡—ç”± 6 æ¢å°å··çµ„æˆã€‚æ‰¾é–€å£æœ‰æ¨™ç¤ºã€ŒNo Cover Chargeã€çš„åº—å¯ä»¥çœä¸‹ Â¥500-Â¥1,000 çš„å…¥å ´è²»ã€‚æŽ¨è–¦åŽ»ã€ŒDeath Match in Hellã€æˆ–æ˜¯ã€ŒAlbatrossã€ï¼Œå°å¤–åœ‹äººéžå¸¸å‹å–„ã€‚',
                                exactLocation: 'æ–°å®¿æ­Œèˆžä¼Žç”ºä¸€ä¸ç›®ï¼ŒèŠ±åœ’ç¥žç¤¾æ—',
                                mustTry: 'éš¨ä¾¿é»žä¸€æ¯ Highballï¼Œæ„Ÿå—æ˜­å’Œé¢¨æƒ…',
                                avoid: 'ä¸è¦åœ¨å¤§è¡—ä¸Šå¤§è²å–§å˜©ï¼Œä¹Ÿä¸è¦æ‹¿è‘—å¤§ç›¸æ©Ÿåˆ°è™•æ‹ï¼Œæœƒè¢«ç™½çœ¼',
                                bestTime: '21:00 å¾Œå„åœ‹é…’å®¢èšé›†æœ€ç†±é¬§'
                            }
                        }
                    }
                ],
                accommodation: []
            }
        }
    },
    {
        id: 't5',
        name: 'äº¬éƒ½å¤éƒ½éœå¿ƒä¹‹æ—… 3 æ—¥',
        nameEn: 'Kyoto Ancient Capital 3-Day Retreat',
        title: 'é¿é–‹äººæ½®çš„äº¬éƒ½ç§˜å¢ƒæŽ¢è¨ª',
        titleEn: 'Escape the Crowds: Kyoto\'s Hidden Sanctuaries',
        coverImage: '/images/covers/kyoto.png',
        author: 'äº¬éƒ½æ…¢æ´»',
        authorEn: 'Kyoto Slow Life',
        authorId: 'c4',
        region: 'kyoto',
        tags: ['å¤è¹Ÿ', 'æ–‡åŒ–', 'æ…¢æ´»', 'Premium'],
        tagsEn: ['Historic', 'Culture', 'Slow Travel', 'Premium'],
        vibes: [
            { tag: '#åƒå¹´å¤éƒ½', color: 'bg-amber-100 text-amber-800' },
            { tag: '#ç¦ªæ„ç”Ÿæ´»', color: 'bg-stone-100 text-stone-600' },
            { tag: '#æŠ¹èŒ¶æ–‡åŒ–', color: 'bg-green-100 text-green-800' }
        ],
        coverStory: {
            quote: 'äº¬éƒ½æœ€ç¾Žçš„é¢¨æ™¯ï¼Œéƒ½è—åœ¨è§€å…‰å®¢çœ‹ä¸åˆ°çš„åœ°æ–¹ã€‚',
            quoteEn: 'Kyoto\'s most beautiful scenery is hidden where tourists never look.',
            description: 'æ¸…æ™¨ç„¡äººçš„ç«¹æž—å°å¾‘ã€éš±è—åœ¨ç”ºå®¶è£¡çš„èŒ¶å®¤ã€åªæœ‰åœ¨åœ°äººçŸ¥é“çš„è³žæ¥“ç§˜å¢ƒã€‚é€™æ˜¯ä¸€è¶Ÿè®“å¿ƒæ…¢ä¸‹ä¾†çš„æ—…ç¨‹ã€‚',
            authorLabel: 'äº¬éƒ½åœ¨ä½è€…ç§æˆ¿è·¯ç·š'
        },
        authorStory: {
            zh: 'æˆ‘åœ¨äº¬éƒ½ä½äº† 3 å¹´ï¼Œæ¯å¤©é¨Žè…³è¸è»Šç©¿æ¢­åœ¨å¤å¯ºèˆ‡ç”ºå®¶ä¹‹é–“ã€‚é€™ä»½è·¯ç·šåªæœƒå¸¶ä½ åŽ»ã€Œè§€å…‰å®¢çœ‹ä¸åˆ°ã€çš„äº¬éƒ½ â€” æ¸…æ™¨ç„¡äººçš„ç«¹æž—ã€éš±è—åœ¨å··å­è£¡çš„æŠ¹èŒ¶ç§æˆ¿ã€åªæœ‰åœ¨åœ°äººçŸ¥é“çš„è³­æ¥“ç§˜å¢ƒã€‚',
            en: 'I lived in Kyoto for 3 years, cycling between ancient temples and machiya houses every day. This route takes you to the Kyoto that tourists never see â€” an empty bamboo grove at dawn, hidden matcha spots in the alleys, and secret autumn foliage spots only locals know.'
        },
        travelStyle: ['æ…¢æ´»', 'ç¦ªæ„'],
        targetAudience: {
            personas: ['æ…¢æ´»æ—', 'ç¦ªæ„æ—…äºº'],
            personasEn: ['Slow Traveler', 'Zen Seeker'],
            description: 'é©åˆæƒ³é é›¢äººæ½®ã€åœ¨åƒå¹´å¤éƒ½ä¸­æ‰¾åˆ°å…§å¿ƒå¹³éœçš„æ—…äºº',
            paceLevel: 'slow'
        },
        travelTips: [
            { tip: 'æ¸…æ™¨çš„ç«¹æž—æ²’ä»€éº¼äººï¼Œ6 é»žå‡ºç™¼æœ€å¥½', tipEn: 'Bamboo grove is empty at dawn, leave at 6 AM' },
            { tip: 'äº¬éƒ½å·´å£«ä¸€æ—¥åˆ¸éžå¸¸åˆ’ç®—ï¼Œåˆ°è™•éƒ½èƒ½åˆ°', tipEn: 'Kyoto bus day pass is great value, goes everywhere' },
            { tip: 'ç©¿å’Œæœèµ°åœ¨çŸ³æ¿è·¯ä¸Šè¦å°å¿ƒï¼Œå»ºè­°ç©¿å¹³åº•éž‹', tipEn: 'Be careful walking on stone paths in kimono, flat shoes recommended' }
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
            { day: 1, summary: 'é‡‘é–£å¯º â†’ åµå±±ç«¹æž— â†’ æ¸…æ°´å¯º â†’ ä¸­æ‘è—¤å‰æŠ¹èŒ¶' },
            { day: 2, summary: 'ä¼è¦‹ç¨»è· â†’ ç¥‡åœ’ â†’ èŠ±è¦‹å°è·¯' },
            { day: 3, summary: 'å“²å­¸ä¹‹é“ â†’ éŠ€é–£å¯º â†’ æ‘ä¸Šæ˜¥æ¨¹çˆµå£«å§' }
        ],
        schedule: {
            'Day 1': {
                theme: 'é‡‘é–£ & ç«¹æž—ç§˜å¢ƒ',
                themeEn: 'Golden Temple & Bamboo Secrets',
                themeEmoji: 'ðŸŽ‹',
                morning: [
                    {
                        ...KYOTO_ASSETS[0], // é‡‘é–£å¯º
                        instanceId: 't5-1',
                        startTime: '09:00',
                        arrivalTransport: 'public'
                    },
                    {
                        ...KYOTO_ASSETS[6], // å²¡å´Žç¥žç¤¾ (å…”å­ç¥žç¤¾)
                        instanceId: 't5-1-secret',
                        startTime: '10:30',
                        arrivalTransport: 'public'
                    },
                    {
                        ...KYOTO_ASSETS[3], // åµå±±ç«¹æž—
                        instanceId: 't5-1b',
                        startTime: '11:45',
                        arrivalTransport: 'public'
                    }
                ],
                afternoon: [
                    {
                        ...KYOTO_ASSETS[1], // æ¸…æ°´å¯º
                        instanceId: 't5-2',
                        startTime: '13:00',
                        arrivalTransport: 'public'
                    },
                    {
                        ...KYOTO_ASSETS[4], // ä¸­æ‘è—¤å‰
                        instanceId: 't5-2b',
                        startTime: '15:30',
                        arrivalTransport: 'public'
                    }
                ],
                evening: [
                    {
                        ...KYOTO_ASSETS[2], // ä¼è¦‹ç¨»è·
                        instanceId: 't5-3',
                        startTime: '17:00',
                        arrivalTransport: 'public'
                    }
                ],
                night: [
                    {
                        ...KYOTO_ASSETS[5], // æ‘ä¸Šæ˜¥æ¨¹çˆµå£«å§
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
        name: 'å¤§é˜ª 2 æ—¥çŽ©æ¨‚æ”»ç•¥',
        nameEn: 'Osaka 2-Day Fun Guide',
        title: 'åƒå€’åœ¨å¤§é˜ªï¼šç¾Žé£Ÿèˆ‡æ¨‚åœ’å®Œç¾Žæ”»ç•¥',
        titleEn: 'Eat Till You Drop: The Ultimate Osaka Food & Fun Guide',
        coverImage: '/images/covers/osaka.png',
        author: 'Osaka Fun Guide',
        authorEn: 'Osaka Fun Guide',
        authorId: 'c-osaka',
        region: 'osaka',
        tags: ['ç¾Žé£Ÿ', 'æ¨‚åœ’', 'å¤œç”Ÿæ´»'],
        tagsEn: ['Food', 'Theme Park', 'Nightlife'],
        vibes: [
            { tag: '#åƒå€’å¤§é˜ª', color: 'bg-orange-100 text-orange-800' },
            { tag: '#ç’°çƒå½±åŸŽ', color: 'bg-blue-100 text-blue-800' },
            { tag: '#é“é “å €', color: 'bg-red-100 text-red-800' }
        ],
        coverStory: {
            quote: 'å¤§é˜ªäººèªªï¼šäº¬éƒ½äººç©¿åˆ°ç ´ï¼Œå¤§é˜ªäººåƒåˆ°å€’ã€‚',
            quoteEn: 'They say: Kyoto spends on clothes, Osaka spends on food!',
            description: 'å¾ž USJ çš„ç˜‹ç‹‚å†’éšªï¼Œåˆ°é“é “å €çš„ç¾Žé£Ÿè½Ÿç‚¸ã€‚é€™æ˜¯ä¸€è·Ÿè®“ä½ ç¬‘è‘—ä¾†ã€æ’è‘—èµ°çš„å¤§é˜ªä¹‹æ—…ã€‚',
            authorLabel: 'å¤§é˜ªåœ¨åœ°äººç§æˆ¿æŽ¨è–¦'
        },
        authorStory: {
            zh: 'æˆ‘æ˜¯åœŸç”ŸåœŸé•·çš„å¤§é˜ªäººï¼Œåœ¨é“é “å €é™„è¿‘é•·å¤§ã€‚æ¯æ¬¡æœ‹å‹ä¾†å¤§é˜ªæˆ‘éƒ½æœƒå¸¶ä»–å€‘èµ°é€™æ¢è·¯ç·š â€” é¢åº—ã€ä¸²ç‚¸ã€å±…é…’å±‹ï¼Œéƒ½æ˜¯åœ¨åœ°äººçš„å£è¢‹åå¼µï¼Œè€Œä¸æ˜¯è§€å…‰å®¢æŽ’éšŠååº—ã€‚',
            en: 'I\'m a born-and-raised Osaka local who grew up near Dotonbori. Whenever friends visit, I take them on this exact route â€” ramen shops, kushikatsu, izakayas â€” all local favorites, not the tourist-queue spots.'
        },
        travelStyle: ['æ­¡æ¨‚', 'ç¾Žé£Ÿ'],
        targetAudience: {
            personas: ['è¦ªå­', 'åƒè²¨', 'æ¨‚åœ’æŽ§'],
            personasEn: ['Family', 'Foodie', 'Theme Park Fan'],
            description: 'é©åˆæƒ³è¦åŒæ™‚äº«å—ç¾Žé£Ÿå’ŒéŠæ¨‚åœ’çš„æ­¡æ¨‚æ—…äºº',
            paceLevel: 'fast'
        },
        travelTips: [
            { tip: 'USJ å¿«é€Ÿé€šé—œåˆ¸å»ºè­°æå‰ç·šä¸Šè³¼è²·', tipEn: 'Buy USJ Express Pass online in advance' },
            { tip: 'é“é “å €çš„ç« é­šç‡’æŽ’éšŠå¾ˆé•·ï¼ŒæŽ¨è–¦åŽ»æ—é‚Šå··å­çš„åœ¨åœ°åº—', tipEn: 'Skip the long takoyaki lines on Dotonbori, try local shops in side alleys' }
        ],
        duration: 2,
        rating: 4.7,
        tier: 'official',
        copiedCount: 432,
        price: 0.99,
        isLocked: false,
        highlights: { days: 2, spots: 6, tips: 4, rating: 4.7, usageCount: 432 },
        dayPreviews: [
            { day: 1, summary: 'ç’°çƒå½±åŸŽ â†’ é“é “å € â†’ å¤§é˜ªåŸŽ â†’ åƒæˆ¿å¤§é˜ªç‡’' },
            { day: 2, summary: 'é»‘é–€å¸‚å ´ â†’ é€šå¤©é–£ â†’ æ–°ä¸–ç•Œä¸²ç‚¸' }
        ],
        schedule: {
            'Day 1': {
                theme: 'ç’°çƒå½±åŸŽ & é“é “å €ç¾Žé£Ÿ',
                themeEn: 'Universal Studios & Dotonbori Eats',
                themeEmoji: 'ðŸŽ¢',
                morning: [
                    {
                        ...OSAKA_ASSETS[3], // ç’°çƒå½±åŸŽ
                        instanceId: 'osaka-1',
                        startTime: '08:00',
                        arrivalTransport: 'public'
                    }
                ],
                afternoon: [
                    {
                        ...OSAKA_ASSETS[12], // é›£æ³¢å…«é˜ªç¥žç¤¾
                        instanceId: 'osaka-secret-1',
                        startTime: '13:30',
                        arrivalTransport: 'car'
                    },
                    {
                        ...OSAKA_ASSETS[2], // é“é “å €
                        instanceId: 'osaka-2',
                        startTime: '15:00',
                        arrivalTransport: 'public'
                    },
                    {
                        ...OSAKA_ASSETS[1], // å¤§é˜ªåŸŽ
                        instanceId: 'osaka-3',
                        startTime: '17:00',
                        arrivalTransport: 'public'
                    }
                ],
                evening: [
                    {
                        ...OSAKA_ASSETS[7], // åƒæˆ¿å¤§é˜ªç‡’
                        instanceId: 'osaka-4',
                        startTime: '19:00',
                        arrivalTransport: 'public'
                    }
                ],
                night: [
                    {
                        ...OSAKA_ASSETS[4], // çˆµå£«è§€å…‰èˆ¹ (Premium)
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
    // â”€â”€ å°åŒ—æ…¢æ´»æ•£ç­– 3 æ—¥ â”€â”€ 
    {
        id: 'tw-taipei-slow',
        name: 'å°åŒ—æ…¢æ´»æ•£ç­– 3 æ—¥',
        nameEn: 'Taipei Slow Travel 3-Day',
        title: 'ç”¨èµ°è·¯çš„é€Ÿåº¦ï¼Œæ„Ÿå—å°åŒ—çš„å‘¼å¸',
        titleEn: 'Feel Taipei at Walking Pace',
        coverImage: 'https://images.unsplash.com/photo-1601534622119-e9b3aa7c7bdf?auto=format&fit=crop&q=80&w=1000',
        author: 'å°åŒ—æ–‡é’æ•£æ­¥',
        authorEn: 'Taipei Culture Walk',
        authorId: 'c-tw1',
        region: 'taipei',
        tags: ['æ…¢æ´»', 'æ–‡é’', 'å’–å•¡'],
        tagsEn: ['Slow Travel', 'Culture', 'Coffee'],
        travelStyle: ['æ…¢æ´»', 'æ–‡é’'],
        targetAudience: {
            personas: ['æ…¢æ´»æ—', 'æ–‡é’', 'å’–å•¡æŽ§'],
            personasEn: ['Slow Traveler', 'Culture Lover', 'Coffee Nerd'],
            description: 'é©åˆæƒ³é é›¢è§€å…‰å®¢è·¯ç·šã€ç”¨è‡ªå·±çš„ç¯€å¥æŽ¢ç´¢å°åŒ—å··å¼„çš„äºº',
            descriptionEn: 'For those who want to escape tourist routes and explore Taipei alleys at their own pace.',
            paceLevel: 'slow'
        },
        vibes: [
            { tag: '#å··å¼„æŽ¢ç´¢', color: 'bg-teal-100 text-teal-800' },
            { tag: '#è€å®…å’–å•¡', color: 'bg-amber-100 text-amber-800' },
            { tag: '#ç§˜å¢ƒç¾Žè¡“é¤¨', color: 'bg-purple-100 text-purple-800' }
        ],
        coverStory: {
            quote: 'å°åŒ—æœ€ç¾Žçš„é¢¨æ™¯ï¼Œéƒ½è—åœ¨è§€å…‰å®¢æ‡¶å¾—èµ°çš„å··å¼„è£¡ã€‚',
            quoteEn: 'Taipei\'s most beautiful scenery hides in alleys tourists are too lazy to walk.',
            description: 'å¾žæ–‡å­¸åŸºåœ°çš„æ—¥å¼å®¿èˆç¾¤é–‹å§‹ï¼Œç©¿éŽèµ¤å³°è¡—çš„ç¨ç«‹æ›¸åº—ï¼Œåœ¨å¯¶è—å·–çš„å±±åŸŽè—è¡“æ‘ç™¼å‘†ã€‚',
            authorLabel: 'å°åŒ—åœ¨åœ°æ–‡é’æŽ¨è–¦'
        },
        authorStory: {
            zh: 'æˆ‘æ˜¯åœ¨å°åŒ—é•·å¤§çš„æ–‡é’éƒ¨è½å®¢ï¼Œå°ˆé–€å¯«å··å¼„æŽ¢ç´¢èˆ‡ç¨ç«‹æ›¸åº—ã€‚é€™ä»½è·¯ç·šæ˜¯æˆ‘èŠ±äº† 5 å¹´èµ°éå°åŒ—å¤§è¡—å°å··å¾Œï¼Œç²¾é¸å‡ºæœ€èƒ½ä»£è¡¨ã€Œå°åŒ—æ–‡åŒ–éˆé­‚ã€çš„åœ°é»ž â€” æ¯ä¸€ç«™éƒ½æœ‰æˆ‘è‡ªå·±çš„æ•…äº‹ã€‚',
            en: 'I\'m a Taipei-born blogger who writes about alley exploration and indie bookstores. This route took 5 years of wandering every corner of Taipei to curate â€” each stop represents the cultural soul of this city and holds a personal story of mine.'
        },
        travelTips: [
            { tip: 'å°åŒ—æ·é‹éžå¸¸æ–¹ä¾¿ï¼Œä½†å··å¼„æŽ¢ç´¢å»ºè­°ç”¨èµ°çš„', tipEn: 'MRT is convenient, but walk to discover alleys' },
            { tip: 'æ¯é–“å’–å•¡å»³éƒ½æœ‰è‡ªå·±çš„å€‹æ€§ï¼Œä¸è¦åªåŽ»é€£éŽ–åº—', tipEn: 'Each caf\u00e9 has its own personality, skip chains' },
            { tip: 'å¸¶æŠ˜ç–Šå‚˜ï¼Œå°åŒ—çš„å¤©æ°£éš¨æ™‚æœƒè®Š', tipEn: 'Carry a folding umbrella, Taipei weather is unpredictable' }
        ],
        duration: 3,
        rating: 4.8,
        tier: 'creator',
        copiedCount: 324,
        price: 0.99,
        highlights: { days: 3, spots: 9, tips: 6, rating: 4.8, usageCount: 324 },
        dayPreviews: [
            { day: 1, summary: 'æ–‡å­¸åŸºåœ° â†’ èµ¤å³°è¡— â†’ å¤§ç¨»åŸ•å’–å•¡å»³' },
            { day: 2, summary: 'å¿ƒä¸­å±±ç·šå½¢å…¬åœ’ â†’ é¼Žå…ƒè±†æ¼¿ â†’ å¯¶è—å·–' },
            { day: 3, summary: 'ä¹ä»½ â†’ é‡‘ç“œçŸ³ â†’ è¶³ç±³é£¯ç³°' }
        ],
        schedule: {
            'Day 1': {
                theme: 'æ–‡å­¸æ•£æ­¥ & è€å®…å’–å•¡',
                themeEn: 'Literature Walk & Old House Coffee',
                themeEmoji: 'ðŸ“š',
                morning: [
                    { ...TAIPEI_ASSETS[0], instanceId: 'tw1-1', startTime: '09:00', arrivalTransport: 'public' },
                ],
                afternoon: [
                    { ...TAIPEI_ASSETS[1], instanceId: 'tw1-2', startTime: '13:00', arrivalTransport: 'walk' },
                    { ...TAIPEI_ASSETS[5], instanceId: 'tw1-3', startTime: '15:00', arrivalTransport: 'walk' },
                ],
                evening: [
                    { ...TAIPEI_ASSETS[6], instanceId: 'tw1-4-secret', startTime: '17:30', arrivalTransport: 'public' },
                    { ...TAIPEI_ASSETS[3], instanceId: 'tw1-4', startTime: '19:00', arrivalTransport: 'public' },
                ],
                night: [],
                accommodation: []
            },
            'Day 2': {
                theme: 'å··å¼„æŽ¢ç´¢ & è—è¡“æ‘',
                themeEn: 'Alley Exploration & Artist Village',
                themeEmoji: 'ðŸŽ¨',
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
    // â”€â”€ å°å—ç¾Žé£Ÿæ•£æ­¥ 2 æ—¥ â”€â”€
    {
        id: 'tw-tainan-food',
        name: 'å°å—ç¾Žé£Ÿæ•£æ­¥ 2 æ—¥',
        nameEn: 'Tainan Food Walk 2-Day',
        title: 'è·Ÿè‘—é˜¿å­†çš„å£è¢‹åå–®ï¼Œåƒéå°å—',
        titleEn: 'Follow Grandma\'s Secret Food List Through Tainan',
        coverImage: 'https://images.unsplash.com/photo-1633228491597-b39f823e0541?auto=format&fit=crop&q=80&w=1000',
        author: 'å°å—åƒè²¨é˜¿å­†',
        authorEn: 'Tainan Foodie Grandma',
        authorId: 'c-tw2',
        region: 'tainan',
        tags: ['ç¾Žé£Ÿ', 'å°åƒ', 'åœ¨åœ°'],
        tagsEn: ['Food', 'Street Food', 'Local'],
        travelStyle: ['ç¾Žé£Ÿ', 'åœ¨åœ°'],
        targetAudience: {
            personas: ['åƒè²¨', 'ç¾Žé£ŸæŽ¢éšªå®¶'],
            personasEn: ['Foodie', 'Food Adventurer'],
            description: 'é©åˆæƒ³ç”¨èƒƒæ„Ÿå—å°å—çš„æ—…äººï¼Œæ¯é “éƒ½æœ‰é©šå–œ',
            paceLevel: 'moderate'
        },
        vibes: [
            { tag: '#å°åƒå¤©å ‚', color: 'bg-orange-100 text-orange-800' },
            { tag: '#ðŸ†ä¸–ç•Œå¾—çŽ', color: 'bg-yellow-100 text-yellow-800' },
            { tag: '#åœ¨åœ°äººå¸¶è·¯', color: 'bg-teal-50 text-teal-700' }
        ],
        coverStory: {
            quote: 'å°å—äººä¸æ˜¯åœ¨åƒï¼Œå°±æ˜¯åœ¨åŽ»åƒçš„è·¯ä¸Šã€‚',
            quoteEn: 'Tainan people are either eating, or on their way to eat.',
            description: 'å¾žæ—©ä¸Š 6 é»žçš„è™”è‚‰ç±³ç³•é–‹å§‹ï¼Œåˆ°ç¥žè¾²è¡—çš„éš±è—é…’å§çµæŸã€‚ä¸­é–“ç©¿æ’ä¸–ç•Œå¾—çŽå†°æ·‡æ·‹ã€‚',
            authorLabel: 'å°å— 60 å¹´åœ¨åœ°äººæŽ¨è–¦'
        },
        authorStory: {
            zh: 'æˆ‘å®¶åœ¨å°å—ä½äº†ä¸‰ä»£ï¼Œé˜¿å¬¬å¾žå°å¸¶æˆ‘åƒçš„åº—ï¼Œå¾ˆå¤šéƒ½é–‹äº† 50 å¹´ä»¥ä¸Šã€‚é€™ä»½è¡Œç¨‹æ˜¯æˆ‘å°æ™‚å€™çš„å‘³é“ â€” æ—©ä¸ŠæŽ’éšŠçš„è™è‚‰é£¯ã€ä¸‹åˆçš„å¤æ—©å‘³ç´…èŒ¶ã€æ™šä¸Šç¥žè¾²è¡—çš„å®‰éœã€‚å¸Œæœ›ä½ ä¹Ÿèƒ½åƒåˆ°æˆ‘çš„ç«¥å¹´ã€‚',
            en: 'My family has lived in Tainan for three generations. The shops my grandma took me to as a kid have been open for 50+ years. This itinerary is my childhood flavor â€” morning queues for braised rice, afternoon vintage black tea, and peaceful evenings on Shennong Street.'
        },
        travelTips: [
            { tip: 'å°å—å°åƒé€šå¸¸ä¸‹åˆæ‰é–‹ï¼Œæ—©ä¸ŠåŽ»å¸‚å ´åƒ', tipEn: 'Most street food opens in afternoon, eat at markets in the morning' },
            { tip: 'è›‹å±±æ´¾åƒå®Œä¸å¦¨èµ°éŽåŽ»ç¥žè¾²è¡—æ•£æ­¥', tipEn: 'After eating, walk to Shennong St. to digest' }
        ],
        duration: 2,
        rating: 4.7,
        tier: 'creator',
        copiedCount: 215,
        highlights: { days: 2, spots: 6, tips: 4, rating: 4.7, usageCount: 215 },
        dayPreviews: [
            { day: 1, summary: 'ç¥žè¾²è¡— â†’ èš·å°¾å®¶å†°æ·‡æ·‹ðŸ† â†’ è™”è¾²æ°´ç…ŽåŒ…' },
            { day: 2, summary: 'å­”å»Ÿå•†åœˆæ—©é¤ â†’ é»ƒé‡‘æµ·å²¸ç·š â†’ èŠ±åœ’å¤œå¸‚' }
        ],
        schedule: {
            'Day 1': {
                theme: 'è€è¡—æ•£æ­¥ & ä¸–ç•Œå¾—çŽå†°æ·‡æ·‹',
                themeEn: 'Old Streets & World-Medal Gelato',
                themeEmoji: 'ðŸ®',
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
    // â”€â”€ èŠ±è“®ç™‚ç™’ 3 æ—¥ â”€â”€
    {
        id: 'tw-hualien-nature',
        name: 'èŠ±è“®ç™‚ç™’è‡ªç„¶ 3 æ—¥',
        nameEn: 'Hualien Nature Healing 3-Day',
        title: 'å±±æµ·ä¹‹é–“ï¼Œæ‰¾å›žå‘¼å¸çš„ç¯€å¥',
        titleEn: 'Between Mountains & Sea, Find Your Rhythm',
        coverImage: 'https://images.unsplash.com/photo-1592833905014-498499c6381c?auto=format&fit=crop&q=80&w=1000',
        author: 'å°åŒ—æ–‡é’æ•£æ­¥',
        authorEn: 'Taipei Culture Walk',
        authorId: 'c-tw1',
        region: 'hualien',
        tags: ['è‡ªç„¶', 'ç™‚ç™’', 'ç§˜å¢ƒ'],
        tagsEn: ['Nature', 'Healing', 'Secret Spots'],
        travelStyle: ['ç™‚ç™’', 'è‡ªç„¶'],
        targetAudience: {
            personas: ['è‡ªç„¶æŽ§', 'æ”¾ç©ºæ—'],
            personasEn: ['Nature Lover', 'Recharger'],
            description: 'é©åˆæƒ³é é›¢åŸŽå¸‚å–‡å­ã€åœ¨å±±æµ·ä¹‹é–“é‡æ–°å……é›»çš„äºº',
            paceLevel: 'slow'
        },
        vibes: [
            { tag: '#å±±æµ·ç§˜å¢ƒ', color: 'bg-cyan-100 text-cyan-800' },
            { tag: '#åŽŸä½æ°‘æ–‡åŒ–', color: 'bg-amber-100 text-amber-800' },
            { tag: '#æµ·æ™¯å’–å•¡', color: 'bg-blue-100 text-blue-800' }
        ],
        coverStory: {
            quote: 'èŠ±è“®çš„ç¾Žï¼Œæ˜¯é‚£ç¨®è®“ä½ å¿˜è¨˜æ™‚é–“çš„å®‰éœã€‚',
            quoteEn: 'Hualien\'s beauty is the kind of silence that makes you forget time.',
            description: 'å¾žå‰åˆ©æ½­çš„çµ•ç¾Žå€’å½±ï¼Œåˆ°å››å…«é«˜åœ°çš„æœˆç‰™ç£å…¨æ™¯ï¼Œå†åˆ°å‡ºæµ·å£çš„éš±å¯†å’–å•¡åŸºåœ°ã€‚',
            authorLabel: 'èŠ±è“®åœ¨åœ°æŽ¢ç´¢è€…æŽ¨è–¦'
        },
        authorStory: {
            zh: 'æˆ‘å¾žå°åŒ—æ¬åˆ°èŠ±è“®å·²ç¶“ 4 å¹´ï¼Œå¾žéƒ½å¸‚äººè®Šæˆå±±æµ·äººã€‚é€™ä»½è¡Œç¨‹æ˜¯æˆ‘æ¯å€‹é€±æœ«åœ¨èŠ±è“®æŽ¢ç´¢çš„ç²¾è¯ â€” ä¸åªæ˜¯å¤ªé­¯é–£ï¼Œè€Œæ˜¯ç•¶åœ°äººæ‰çŸ¥é“çš„ç§˜å¢ƒæµ·ç˜ã€å±±ä¸­å’–å•¡å»³å’Œéƒ¨è½æ–‡åŒ–é«”é©—ã€‚',
            en: 'I moved from Taipei to Hualien 4 years ago, transforming from a city person to a mountain-and-sea person. This route is the essence of my weekend explorations â€” not just Taroko, but secret beaches, mountain cafÃ©s, and indigenous cultural experiences that only locals know.'
        },
        travelTips: [
            { tip: 'èŠ±è“®å¿…é ˆè‡ªé§•æˆ–åŒ…è»Šï¼Œå¤§çœ¾äº¤é€šä¸æ–¹ä¾¿', tipEn: 'Driving or chartering a car is essential in Hualien' },
            { tip: 'å¤ªé­¯é–£å¾€å¤©ç¥¥æ–¹å‘ä¸‹åˆè¼ƒæ²’äºº', tipEn: 'Taroko towards Tianxiang is less crowded in the afternoon' }
        ],
        duration: 3,
        rating: 4.9,
        tier: 'official',
        copiedCount: 189,
        highlights: { days: 3, spots: 6, tips: 4, rating: 4.9, usageCount: 189 },
        dayPreviews: [
            { day: 1, summary: 'å‰åˆ©æ½­ â†’ å…‰å¾©ç³–å»° â†’ èª¬çµ¦ç‡’çƒ¤' },
            { day: 2, summary: 'å››å…«é«˜åœ° â†’ ä¸ƒæ˜Ÿæ½­ â†’ æµ·ç¢‘å ¡å’–å•¡' },
            { day: 3, summary: 'å¤ªé­¯é–£ â†’ æ¸…æ°´æ–·å´– â†’ æ±å¤§é–€å¤œå¸‚' }
        ],
        schedule: {
            'Day 1': {
                theme: 'ç§˜å¢ƒæ¹–æ³Š & åŽŸä½æ°‘æ–‡åŒ–',
                themeEn: 'Secret Lakes & Indigenous Culture',
                themeEmoji: 'ðŸŒŠ',
                morning: [
                    { ...HUALIEN_ASSETS[0], instanceId: 'hl1-1', startTime: '08:00', arrivalTransport: 'car' },
                ],
                afternoon: [],
                evening: [],
                night: [],
                accommodation: []
            },
            'Day 2': {
                theme: 'æµ·å²¸åˆ¶é«˜é»ž & æµ·æ™¯å’–å•¡',
                themeEn: 'Coastal Heights & Ocean Coffee',
                themeEmoji: 'â˜•',
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
    // â”€â”€ å°ä¸­è€å®…å’–å•¡ & å··å¼„æŽ¢ç´¢ 3 æ—¥ â”€â”€
    {
        id: 'tw-taichung-oldhouse',
        name: 'å°ä¸­è€å®…å’–å•¡ & å··å¼„æŽ¢ç´¢ 3 æ—¥',
        nameEn: 'Taichung Old House Caf\u00e9 & Alley Tour 3-Day',
        title: 'æŽ¨é–‹æœ¨é–€ï¼Œèµ°é€²å°ä¸­çš„æ™‚å…‰è† å›Š',
        titleEn: 'Push Open the Wooden Door, Step Into Taichung\'s Time Capsule',
        coverImage: 'https://images.unsplash.com/photo-1583654979589-aa7a6053a0d6?auto=format&fit=crop&q=80&w=1000',
        author: 'å°ä¸­å··å¼„æŽ¢ç´¢å®¶',
        authorEn: 'Taichung Alley Explorer',
        authorId: 'c-tw3',
        region: 'taichung',
        tags: ['è€å®…', 'å’–å•¡', 'æ–‡é’'],
        tagsEn: ['Old House', 'Coffee', 'Culture'],
        travelStyle: ['æ…¢æ´»', 'æ–‡é’', 'å’–å•¡'],
        targetAudience: {
            personas: ['å’–å•¡æŽ§', 'è€å®…æŽ§', 'æ–‡é’'],
            personasEn: ['Coffee Nerd', 'Old House Lover', 'Culture Enthusiast'],
            description: 'é©åˆå–œæ­¡åœ¨è€æˆ¿å­è£¡å–å’–å•¡ã€æ‹ç…§ã€ç™¼å‘†çš„äºº',
            paceLevel: 'slow'
        },
        vibes: [
            { tag: '#æ—¥å¼è€å®…', color: 'bg-amber-100 text-amber-800' },
            { tag: '#è‡ªå®¶çƒ˜ç„™', color: 'bg-stone-100 text-stone-800' },
            { tag: '#æ™‚å…‰è† å›Š', color: 'bg-rose-100 text-rose-800' }
        ],
        coverStory: {
            quote: 'å°ä¸­æœ€è¿·äººçš„ï¼Œæ˜¯é‚£äº›æŽ¨é–‹é–€æ‰çŸ¥é“å­˜åœ¨çš„åœ°æ–¹ã€‚',
            quoteEn: 'Taichung\'s charm lies in places you only discover when you push open the door.',
            description: 'å¾žå‹¤ç¾Žå•†åœˆçš„çœ¾å°æ¨“é–‹å§‹ï¼Œç©¿éŽåœ‹ç¾Žé¤¨æ—çš„è‡ªå®¶çƒ˜ç„™å’–å•¡å»³ï¼Œæœ€å¾Œåœ¨äº”æ¬Šè»Šç«™æ—çš„æ—¥å¼è€å®…è£¡ç™¼å‘†ä¸€å€‹ä¸‹åˆã€‚',
            authorLabel: 'å°ä¸­åœ¨åœ°è€å®…æŽ§æŽ¨è–¦'
        },
        authorStory: {
            zh: 'æˆ‘æ˜¯å°ä¸­åœŸç”ŸåœŸé•·çš„è€å®…æŽ§ï¼Œ5 å¹´ä¾†æŽ¢è¨ªäº† 100+ é–“å°ä¸­è€æˆ¿å­æ”¹å»ºçš„å’–å•¡å»³ã€‚é€™ä»½è·¯ç·šæ˜¯æˆ‘çš„ã€Œå°ä¸­è€å®…åœ°åœ–ã€ç²¾é¸ç‰ˆ â€” æŽ¨é–‹æ¯ä¸€æ‰‰é–€ï¼Œéƒ½æ˜¯ä¸€æ®µæ™‚å…‰æ—…è¡Œã€‚',
            en: 'I\'m a Taichung-born old house fanatic who\'s explored 100+ renovated heritage cafÃ©s over 5 years. This route is the curated edition of my "Taichung Old House Map" â€” behind every door is a journey through time.'
        },
        travelTips: [
            { tip: 'å°ä¸­å’–å•¡å»³é€šå¸¸ä¸­åˆæ‰é–‹ï¼Œä¸è¦å¤ªæ—©åŽ»', tipEn: 'Taichung caf\u00e9s usually open at noon, don\'t go too early' },
            { tip: 'å‹¤ç¾Žå•†åœˆå’Œåœ‹ç¾Žé¤¨é™„è¿‘çš„å··å¼„å¯†åº¦æœ€é«˜', tipEn: 'Highest caf\u00e9 density around CMP Block and NTMoFA' },
            { tip: 'å¸¶ç›¸æ©Ÿï¼Œæ¯é–“è€å®…éƒ½å€¼å¾—æ‹åŠå°æ™‚', tipEn: 'Bring a camera, each old house is worth 30 min of shooting' }
        ],
        duration: 3,
        rating: 4.8,
        tier: 'creator',
        copiedCount: 156,
        price: 0.99,
        highlights: { days: 3, spots: 9, tips: 6, rating: 4.8, usageCount: 156 },
        dayPreviews: [
            { day: 1, summary: 'è£¡å°æ¨“ â†’ 5æ˜¥å’–å•¡ â†’ å‹¤ç¾Žè¡“é¤¨' },
            { day: 2, summary: 'å¦‚å¸¸ã€‚æ‰€åœ¨ â†’ æŸ¯äºžæžœé†¬ðŸ† â†’ å¯©è¨ˆæ–°æ‘' },
            { day: 3, summary: 'é›»ç«åœ³æ­¥é“ â†’ çŸ³å²¡è€è¡— â†’ é«˜ç¾Žæ¿•åœ°' }
        ],
        schedule: {
            'Day 1': {
                theme: 'å··å¼„ç¾Žé£Ÿ & è‡ªå®¶çƒ˜ç„™å’–å•¡',
                themeEn: 'Alley Food & Self-Roasted Coffee',
                themeEmoji: 'â˜•',
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
                theme: 'è€å®…æŽ¢ç´¢ & ä¸–ç•Œé‡‘çŽæžœé†¬',
                themeEn: 'Old House Tour & World-Gold Jam',
                themeEmoji: 'ðŸ¡',
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
                theme: 'æ£®æž—æ­¥é“ & å°éŽ®æ•£æ­¥',
                themeEn: 'Forest Trail & Small Town Walk',
                themeEmoji: 'ðŸŒ²',
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
    // â”€â”€ ðŸŒŸ å°ä¸­ç±³å…¶æž—å··å¼„ç¾Žé£Ÿ 2 æ—¥ (ç±³å…¶æž—ç³»åˆ—) â”€â”€
    {
        id: 'tw-taichung-michelin',
        name: 'ðŸŒŸ å°ä¸­ç±³å…¶æž—å··å¼„ç¾Žé£Ÿ 2 æ—¥',
        nameEn: 'ðŸŒŸ Taichung Michelin Alley Food 2-Day',
        title: 'å¾žå…¨çƒå”¯ä¸€ç±³å…¶æž—å†°æ·‡æ·‹é–‹å§‹ï¼Œåƒéå°ä¸­å··å¼„',
        titleEn: 'Start from the World\'s Only Michelin Ice Cream, Eat Through Taichung Alleys',
        coverImage: 'https://images.unsplash.com/photo-1647685103344-d593814c00c3?auto=format&fit=crop&q=80&w=1000',
        author: 'å°ä¸­å··å¼„æŽ¢ç´¢å®¶',
        authorEn: 'Taichung Alley Explorer',
        authorId: 'c-tw3',
        region: 'taichung',
        tags: ['ðŸŒŸç±³å…¶æž—', 'ç¾Žé£Ÿ', 'å··å¼„'],
        tagsEn: ['ðŸŒŸ Michelin', 'Food', 'Alleys'],
        travelStyle: ['michelin', 'ç¾Žé£Ÿ'],
        targetAudience: {
            personas: ['ç¾Žé£ŸæŽ¢éšªå®¶', 'ç±³å…¶æž—æŽ§'],
            personasEn: ['Food Adventurer', 'Michelin Enthusiast'],
            description: 'é©åˆæƒ³æ”¶é›†ç±³å…¶æž—æ˜Ÿç´šé¤å»³ã€ç†Šå¤§æŽ¨è–¦ç¾Žé£Ÿçš„è¬›ç©¶åƒè²¨',
            descriptionEn: 'For foodies who collect Michelin stars and Bib Gourmand gems.',
            paceLevel: 'moderate'
        },
        vibes: [
            { tag: '#ç±³å…¶æž—ä¸€æ˜Ÿ', color: 'bg-yellow-100 text-yellow-800' },
            { tag: '#å¿…æ¯”ç™»æŽ¨ä»‹', color: 'bg-red-100 text-red-800' },
            { tag: '#å…¨çƒå”¯ä¸€', color: 'bg-indigo-100 text-indigo-800' }
        ],
        coverStory: {
            quote: 'å°ä¸­çš„ç±³å…¶æž—ä¸åœ¨é«˜æ¨“è£¡ï¼Œåœ¨ä½ æ‰¾ä¸åˆ°çš„å··å­è£¡ã€‚',
            quoteEn: 'Taichung\'s Michelin isn\'t in skyscrapers â€” it\'s in alleys you can\'t find.',
            description: 'å…¨çƒå”¯ä¸€ç±³å…¶æž—æ˜Ÿç´šå†°æ·‡æ·‹ MINIMALï¼Œè—åœ¨å··å­è£¡çš„å¿…æ¯”ç™»å°èœï¼Œé€±åªé–‹ä¸‰å¤©çš„çœ·æ‘éºµã€‚é¤èˆ‡é¤ä¹‹é–“ç©¿ç©¿å’–å•¡å»³å’Œè—è¡“é¤¨ã€‚',
            authorLabel: 'å°ä¸­ç±³å…¶æž—æŽ¢ç´¢è€…'
        },
        travelTips: [
            { tip: 'MINIMAL éœ€æå‰ 2 é€±ç·šä¸Šé ç´„ï¼Œ100% é ç´„åˆ¶', tipEn: 'MINIMAL requires online booking 2 weeks ahead, 100% reservation only' },
            { tip: 'ç¹¡çƒéºµåº—åªæœ‰é€±ä¸‰/äº”/æ—¥é–‹ï¼Œè¦æ³¨æ„æ—¥æœŸ', tipEn: 'Xiuqiu Noodle Shop only opens Wed/Fri/Sun, check your dates' },
            { tip: 'è£¡å°æ¨“ä¸è¦çœ‹èœå–®ï¼Œè·Ÿè€é—†èªªã€Œä»Šå¤©æœ‰ä»€éº¼ã€', tipEn: 'At Li Xiao Lou, don\'t read the menu, ask the boss \'what\'s good today\'' }
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
            { day: 1, summary: 'è£¡å°æ¨“ðŸ† â†’ 5æ˜¥å’–å•¡ â†’ MINIMALâš­ â†’ å‹¤ç¾Žç·šå½¢å…¬åœ’' },
            { day: 2, summary: 'ç¸¡çƒéºµåº— â†’ å¦‚å¸¸ã€‚æ‰€åœ¨ â†’ æŸ¯äºžæžœé†¬ðŸ† â†’ å¯©è¨ˆæ–°æ‘' }
        ],
        schedule: {
            'Day 1': {
                theme: 'å¿…æ¯”ç™»å°èœ + ç±³å…¶æž—ä¸€æ˜Ÿå†°æ·‡æ·‹',
                themeEn: 'Bib Gourmand Taiwanese + Michelin 1-Star Ice Cream',
                themeEmoji: 'â­',
                swapSuggestion: 'MINIMAL é ç´„ä¸åˆ°çš„è©±ï¼Œå¯æ”¹åŽ»ã€Œæ˜¥ä¸¸ã€ç¶“å…¸æ—¥å¼å†°æ·‡æ·‹',
                swapSuggestionEn: 'If MINIMAL is fully booked, try "Haru Maru" classic Japanese gelato instead',
                morning: [
                    { ...TAICHUNG_ASSETS[1], instanceId: 'tcm-1', startTime: '11:30', arrivalTransport: 'car' },
                ],
                afternoon: [
                    { ...TAICHUNG_ASSETS[3], instanceId: 'tcm-2', startTime: '14:00', arrivalTransport: 'walk' },
                    {
                        ...TAICHUNG_ASSETS[0], instanceId: 'tcm-3', startTime: '16:00', arrivalTransport: 'car',
                        insiderTip: {
                            teaser: 'ðŸŒŸ å…¨çƒå”¯ä¸€ç±³å…¶æž—æ˜Ÿç´šå†°æ·‡æ·‹ï¼Œéœ€æå‰ 2 é€±é ç´„',
                            teaserEn: 'ðŸŒŸ World\'s only Michelin-starred ice cream, book 2 weeks ahead',
                            full: {
                                story: '2023 å¹´å¿…æ¯”ç™»ï¼Œ2024 å¹´ç›´æŽ¥è·³å‡ç±³å…¶æž—ä¸€æ˜Ÿã€‚ä¸ƒé“å†°å“ tasting menu æ¯ä¸€é“éƒ½æ˜¯è—è¡“å“ã€‚å§å°åº§ä½å¯ä»¥è¿‘è·é›¢çœ‹ä¸»å»šç¾å ´è£½ä½œã€‚',
                                exactLocation: 'å°ä¸­è¥¿å€ï¼ˆç¢ºèªé ç´„å¾Œæä¾›åœ°å€ï¼‰',
                                mustTry: 'å§å°åº§ä½ + ä¸ƒé“å¥—é¤ NT$1,800',
                                avoid: 'ä¸è¦è‡¨æ™‚åŽ»ï¼Œ100% é ç´„åˆ¶',
                                bestTime: 'æå‰ 2 é€±ç·šä¸Šé ç´„'
                            }
                        }
                    },
                ],
                evening: [],
                night: [],
                accommodation: []
            },
            'Day 2': {
                theme: 'çœ·æ‘ç¾Žé£Ÿ + è€å®…å’–å•¡ + ä¸–ç•Œé‡‘çŽæžœé†¬',
                themeEn: 'Military Village Food + Old House Caf\u00e9 + World-Gold Jam',
                themeEmoji: 'ðŸ†',
                swapSuggestion: 'ç¹¡çƒéºµåº—åªæœ‰é€±ä¸‰/äº”/æ—¥ï¼Œå…¶ä»–å¤©å¯æ”¹åŽ»ã€Œä¸Šæµ·æœªåã€ç‰µç‰›èŠ±éºµ',
                swapSuggestionEn: 'Xiuqiu only open Wed/Fri/Sun. On other days, try "Shanghai Unnamed" beef noodles',
                morning: [
                    { ...TAICHUNG_ASSETS[2], instanceId: 'tcm-4', startTime: '11:00', arrivalTransport: 'car' },
                    { ...TAICHUNG_ASSETS[4], instanceId: 'tcm-5', startTime: '13:30', arrivalTransport: 'car' },
                    { ...TAICHUNG_ASSETS[5], instanceId: 'tcm-6', startTime: '15:30', arrivalTransport: 'car' },
                ],
                afternoon: [],
                evening: [],
                night: [],
                accommodation: []
            }
        }
    },
    // â”€â”€ å°åŒ—å¤œå¸‚æ–‡é’ 2 æ—¥ â”€â”€
    {
        id: 'tw-taipei-night',
        isHidden: true,
        name: 'å°åŒ—å¤œå¸‚æ–‡é’ 2 æ—¥',
        nameEn: 'Taipei Night Markets & Culture 2-Day',
        title: 'ç™½å¤©æ–‡é’ã€æ™šä¸Šå¤œå¸‚ï¼Œå°åŒ—çš„é›™é¢é­…åŠ›',
        titleEn: 'Culture by Day, Night Markets by Night: Taipei\'s Dual Charm',
        coverImage: 'https://images.unsplash.com/photo-1572715381359-002b1eabd56b?auto=format&fit=crop&q=80&w=1000',
        author: 'å°åŒ—æ–‡é’æ•£æ­¥',
        authorEn: 'Taipei Culture Walk',
        authorId: 'c-tw1',
        region: 'taipei',
        tags: ['å¤œå¸‚', 'æ–‡é’', 'åœ¨åœ°'],
        tagsEn: ['Night Market', 'Culture', 'Local'],
        travelStyle: ['æ–‡é’', 'åœ¨åœ°'],
        targetAudience: {
            personas: ['å¤œè²“æ—', 'æ–‡é’'],
            personasEn: ['Night Owl', 'Culture Lover'],
            description: 'é©åˆæ™šä»¥å¾Œæ‰æœ‰ç²¾ç¥žã€å–œæ­¡å¤œå¸‚èƒ½é‡çš„äºº',
            paceLevel: 'moderate'
        },
        vibes: [
            { tag: '#å¤œå¸‚æ”»ç•¥', color: 'bg-orange-100 text-orange-800' },
            { tag: '#æ–‡å‰µå¸‚é›†', color: 'bg-purple-100 text-purple-800' },
            { tag: '#åœ¨åœ°å‘³', color: 'bg-teal-50 text-teal-700' }
        ],
        coverStory: {
            quote: 'å°åŒ—çš„å¤œæ™šï¼Œæ‰æ˜¯çœŸæ­£çš„é–‹å§‹ã€‚',
            quoteEn: 'In Taipei, the real magic begins after dark.',
            description: 'ç™½å¤©åœ¨æ–‡å‰µåœ’å€æŽ¢ç´¢ç¨ç«‹æ›¸åº—å’Œå’–å•¡å»³ï¼Œæ™šä¸Šåˆ°å¤œå¸‚æ„Ÿå—åœ¨åœ°äººçš„èƒ½é‡ã€‚',
            authorLabel: 'å°åŒ—å¤œè²“æ—æŽ¨è–¦'
        },
        duration: 2,
        rating: 4.6,
        tier: 'official',
        copiedCount: 287,
        highlights: { days: 2, spots: 8, tips: 4, rating: 4.6, usageCount: 287 },
        dayPreviews: [
            { day: 1, summary: 'å¿ƒä¸­å±±å…¬åœ’ â†’ èµ¤å³°è¡— â†’ å¯§å¤å¤œå¸‚' },
            { day: 2, summary: 'å¤§ç¨»åŸ• â†’ å­¦åºžä½œå·¥ â†’ é¥’æ²³å¤œå¸‚' }
        ],
        schedule: {
            'Day 1': {
                theme: 'æ–‡å‰µåœ’å€ & å¤œå¸‚æŽ¢éšª',
                themeEn: 'Creative Park & Night Market Adventure',
                themeEmoji: 'ðŸŒ™',
                morning: [],
                afternoon: [
                    { ...TAIPEI_ASSETS[1], instanceId: 'twn-1', startTime: '14:00', arrivalTransport: 'public' },
                ],
                evening: [
                    { ...TAIPEI_ASSETS[3], instanceId: 'twn-2', startTime: '18:00', arrivalTransport: 'public' },
                ],
                night: [],
                accommodation: []
            },
            'Day 2': {
                theme: 'é›™é€£æ•£æ­¥ & 101 ç§˜å¢ƒ',
                themeEn: 'Shuanglian Walk & 101 Secret',
                themeEmoji: 'ðŸ—¼',
                morning: [],
                afternoon: [
                    { ...TAIPEI_ASSETS[7], instanceId: 'twn-3', startTime: '14:00', arrivalTransport: 'public' },
                ],
                evening: [
                    { ...TAIPEI_ASSETS[6], instanceId: 'twn-4', startTime: '17:30', arrivalTransport: 'public' },
                ],
                night: [],
                accommodation: []
            }
        }
    }
];


