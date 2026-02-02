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
        title: '在地人帶你喝咖啡、逛巷弄',
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
            description: '跟著在地人的腳步，從站著喝咖啡的儀式感開始，穿越塗鴉巷弄，最後在隱藏酒吧結束完美的一天。',
            authorLabel: '墨爾本在地人私房推薦'
        },
        duration: 1,
        rating: 4.9,
        tier: 'official',
        copiedCount: 0,
        price: 0.99,
        isLocked: false, // Beta 免費
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
            description: '從書架後的禁酒時期酒吧，到冷藏庫門後的熱帶天堂。這不是普通的酒吧巡禮，而是一場城市尋寶。',
            authorLabel: '夜生活達人精選路線'
        },
        duration: 1,
        rating: 4.8,
        tier: 'creator',
        copiedCount: 0,
        price: 0.99,
        originalPrice: 4.99,
        isLocked: true, // Premium 模板 (Beta 免費解鎖)
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
            description: '從下町的昭和喫茶店，到隱藏在表參道巷弄的設計師聚落。這不是觀光客的打卡行程，而是一場與東京老靈魂的對話。',
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
                    ...SAMPLE_ASSETS[0],
                    instanceId: 't1-1',
                    startTime: '07:00',
                    arrivalTransport: 'public',
                    insiderTip: {
                        teaser: '早起鳥的秘密風景',
                        teaserEn: 'Early bird secret view',
                        full: {
                            story: '在此時段抵達，仲見世通的鐵捲門彩繪還沒拉上去，是只有早鳥才能看見的浮世繪卷。',
                            storyEn: 'Arrive at this time and you\'ll see the painted shutters of Nakamise-dori before they roll up - a ukiyo-e scene only early birds witness.',
                            bestTime: '07:00-08:00'
                        },
                        highlight: true
                    }
                }
            ],
            afternoon: [
                { ...SAMPLE_ASSETS[2], instanceId: 't1-2', startTime: '13:30', arrivalTransport: 'walk' },
                { ...SAMPLE_ASSETS[4], instanceId: 't1-3', startTime: '16:00', arrivalTransport: 'walk' }
            ],
            evening: [
                {
                    ...SAMPLE_ASSETS[6],
                    instanceId: 't1-4',
                    startTime: '18:30',
                    arrivalTransport: 'walk',
                    insiderTip: {
                        teaser: '隱藏版調味料',
                        teaserEn: 'Secret seasoning',
                        full: {
                            story: '這間分店有隱藏版的「特製醋」，記得跟店員要，加入後湯頭層次完全不同。',
                            storyEn: 'Ask the staff for the secret \"special vinegar\" - it completely transforms the broth.',
                            mustTry: '特製醋 (免費)'
                        }
                    }
                }
            ],
            night: [],
            accommodation: [{ ...SAMPLE_ASSETS[9], instanceId: 't1-5', startTime: '21:00', arrivalTransport: 'public' }]
        }
    },
    {
        id: 't2',
        name: '東京美食吃貨之旅',
        nameEn: 'Tokyo Foodie Tour',
        author: '愛吃鬼安安',
        authorEn: 'Foodie Anan',
        authorId: 'c1',
        region: 'tokyo',
        tags: ['美食', '吃貨'],
        tagsEn: ['Foodie', 'Eat'],
        duration: 1,
        rating: 4.6,
        tier: 'creator',
        copiedCount: 856,
        schedule: {
            morning: [{ ...SAMPLE_ASSETS[7], instanceId: 't2-0', startTime: '08:00', arrivalTransport: 'public' }],
            afternoon: [{ ...SAMPLE_ASSETS[8], instanceId: 't2-1', startTime: '12:00', arrivalTransport: 'walk' }],
            evening: [{ ...SAMPLE_ASSETS[6], instanceId: 't2-2', startTime: '18:00', arrivalTransport: 'public' }],
            night: [],
            accommodation: []
        }
    },
    {
        id: 't5',
        name: '京都古都靜心之旅 3 日',
        nameEn: 'Kyoto Ancient Capital 3-Day Retreat',
        author: '京都慢活',
        authorEn: 'Kyoto Slow Life',
        authorId: 'c4',
        region: 'kyoto',
        tags: ['古蹟', '文化', '慢活', 'Premium'],
        tagsEn: ['Historic', 'Culture', 'Premium'],
        duration: 3,
        rating: 4.8,
        tier: 'creator',
        copiedCount: 567,
        price: 0.99,
        originalPrice: 4.99,
        isLocked: true,
        schedule: {
            morning: [{ ...SAMPLE_ASSETS[22], instanceId: 't5-1', startTime: '09:00', arrivalTransport: 'public' }],
            afternoon: [{ ...SAMPLE_ASSETS[23], instanceId: 't5-2', startTime: '13:00', arrivalTransport: 'public' }],
            evening: [{ ...SAMPLE_ASSETS[26], instanceId: 't5-3', startTime: '17:00', arrivalTransport: 'walk' }],
            night: [],
            accommodation: []
        }
    }
];

