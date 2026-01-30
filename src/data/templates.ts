import { Template } from '../types';
import { SAMPLE_ASSETS } from './sample-assets';

// 達人模板
export const TEMPLATES: Template[] = [
    {
        id: 't1',
        name: '東京經典初心者 4 日遊',
        nameEn: 'Tokyo Classic Beginner 4-Day Trip',
        // [NEW] Marketing Title
        title: '穿越昭和時代：東京 4 日文青散策',
        author: 'TravelCanvas 編輯部',
        authorEn: 'TravelCanvas Editors',
        authorId: 'c0',
        region: 'tokyo',
        tags: ['初心者', '經典路線'],
        tagsEn: ['Beginner', 'Classic'],
        // [NEW] Visual Vibe Tags
        vibes: [
            { tag: '#昭和懷舊', color: 'bg-amber-100 text-amber-800' },
            { tag: '#攝影聖地', color: 'bg-stone-100 text-stone-600' },
            { tag: '#深度散步', color: 'bg-teal-50 text-teal-700' }
        ],
        // [NEW] Narrative Header
        coverStory: {
            quote: "如果厭倦了新宿的擁擠，這條路線帶你找回東京呼吸的節奏。",
            description: "從下町的昭和喫茶店，到隱藏在表參道巷弄的設計師聚落。這不是觀光客的打卡行程，而是一場與東京老靈魂的對話。",
            authorLabel: "東京在地 10 年設計師推薦"
        },
        duration: 4,
        rating: 4.8,
        price: 0.99,
        tier: 'official',
        copiedCount: 1205,
        schedule: {
            morning: [
                {
                    ...SAMPLE_ASSETS[0], // Asakusa Temple
                    instanceId: 't1-1',
                    startTime: '07:00', // Changed from 09:00
                    arrivalTransport: 'public',
                    // [NEW] Insider Whisper
                    insiderTip: {
                        text: "在此時段抵達，仲見世通的鐵捲門彩繪還沒拉上去，是只有早鳥才能看見的浮世繪卷。",
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
                    ...SAMPLE_ASSETS[6], // Ichiran
                    instanceId: 't1-4',
                    startTime: '18:30',
                    arrivalTransport: 'walk',
                    insiderTip: {
                        text: "這間分店有隱藏版的『特製醋』，記得跟店員要，加入後湯頭層次完全不同。",
                        highlight: false
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
        id: 't3',
        name: '大阪道頓堀美食攻略',
        nameEn: 'Osaka Dotonbori Food Guide',
        author: '大阪吃透透',
        authorEn: 'Osaka Insider',
        authorId: 'c2',
        region: 'osaka',
        tags: ['美食', '道頓堀'],
        tagsEn: ['Foodie', 'Dotonbori'],
        duration: 1,
        rating: 4.7,
        tier: 'creator',
        copiedCount: 723,
        schedule: {
            morning: [],
            afternoon: [{ ...SAMPLE_ASSETS[15], instanceId: 't3-1', startTime: '12:00', arrivalTransport: 'public' }, { ...SAMPLE_ASSETS[17], instanceId: 't3-2', startTime: '14:00', arrivalTransport: 'walk' }],
            evening: [{ ...SAMPLE_ASSETS[18], instanceId: 't3-3', startTime: '18:00', arrivalTransport: 'walk' }, { ...SAMPLE_ASSETS[19], instanceId: 't3-4', startTime: '19:30', arrivalTransport: 'walk' }],
            night: [],
            accommodation: [{ ...SAMPLE_ASSETS[21], instanceId: 't3-5', startTime: '21:00', arrivalTransport: 'walk' }]
        }
    },
    {
        id: 't4',
        name: '大阪環球影城攻略',
        nameEn: 'Universal Studios Japan Guide',
        author: 'USJ達人',
        authorEn: 'USJ Master',
        authorId: 'c3',
        region: 'osaka',
        tags: ['樂園', 'USJ'],
        tagsEn: ['Theme Park', 'USJ'],
        duration: 1,
        rating: 4.9,
        tier: 'official',
        copiedCount: 2341,
        schedule: {
            morning: [{ ...SAMPLE_ASSETS[16], instanceId: 't4-1', startTime: '09:00', arrivalTransport: 'public' }],
            afternoon: [],
            evening: [],
            night: [],
            accommodation: [{ ...SAMPLE_ASSETS[20], instanceId: 't4-2', startTime: '21:00', arrivalTransport: 'public' }]
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
