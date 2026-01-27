import { Template } from '../types';
import { SAMPLE_ASSETS } from './sample-assets';

// 達人模板
export const TEMPLATES: Template[] = [
    {
        id: 't1',
        name: '東京經典初心者 4 日遊',
        nameEn: 'Tokyo Classic Beginner 4-Day Trip',
        author: 'TravelCanvas 編輯部',
        authorEn: 'TravelCanvas Editors',
        authorId: 'c0',
        region: 'tokyo',
        tags: ['初心者', '經典路線'],
        tagsEn: ['Beginner', 'Classic'],
        duration: 4,
        rating: 4.8,
        tier: 'official',
        copiedCount: 1205,
        schedule: {
            morning: [{ ...SAMPLE_ASSETS[0], instanceId: 't1-1', startTime: '09:00', arrivalTransport: 'public' }],
            afternoon: [{ ...SAMPLE_ASSETS[2], instanceId: 't1-2', startTime: '13:30', arrivalTransport: 'walk' }, { ...SAMPLE_ASSETS[4], instanceId: 't1-3', startTime: '16:00', arrivalTransport: 'walk' }],
            evening: [{ ...SAMPLE_ASSETS[6], instanceId: 't1-4', startTime: '18:30', arrivalTransport: 'walk' }],
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
        tags: ['古蹟', '文化', '慢活'],
        tagsEn: ['Historic', 'Culture', 'Slow Life'],
        duration: 3,
        rating: 4.8,
        tier: 'creator',
        copiedCount: 567,
        schedule: {
            morning: [{ ...SAMPLE_ASSETS[22], instanceId: 't5-1', startTime: '09:00', arrivalTransport: 'public' }],
            afternoon: [{ ...SAMPLE_ASSETS[23], instanceId: 't5-2', startTime: '13:00', arrivalTransport: 'public' }],
            evening: [{ ...SAMPLE_ASSETS[26], instanceId: 't5-3', startTime: '17:00', arrivalTransport: 'walk' }],
            night: [],
            accommodation: []
        }
    },
    {
        id: 't6',
        name: '東京親子放電 5 日遊',
        nameEn: 'Tokyo Family Fun 5-Day Trip',
        author: '親子旅遊爸',
        authorEn: 'Family Trip Dad',
        authorId: 'c5',
        region: 'tokyo',
        tags: ['親子', '樂園'],
        tagsEn: ['Family', 'Theme Park'],
        duration: 5,
        rating: 4.9,
        tier: 'official',
        copiedCount: 1892,
        schedule: {
            morning: [{ ...SAMPLE_ASSETS[3], instanceId: 't6-1', startTime: '10:00', arrivalTransport: 'public' }],
            afternoon: [{ ...SAMPLE_ASSETS[5], instanceId: 't6-2', startTime: '14:00', arrivalTransport: 'public' }],
            evening: [],
            night: [],
            accommodation: []
        }
    },
    {
        id: 't7',
        name: '京都絕美攝影點一日遊',
        nameEn: 'Kyoto Photogenic One Day Trip',
        author: '攝影師阿寬',
        authorEn: 'Photographer Kuan',
        authorId: 'c6',
        region: 'kyoto',
        tags: ['攝影', '網美'],
        tagsEn: ['Photography', 'Insta-worthy'],
        duration: 1,
        rating: 4.7,
        tier: 'creator',
        copiedCount: 445,
        schedule: {
            morning: [{ ...SAMPLE_ASSETS[24], instanceId: 't7-1', startTime: '06:00', arrivalTransport: 'public' }],
            afternoon: [{ ...SAMPLE_ASSETS[25], instanceId: 't7-2', startTime: '15:00', arrivalTransport: 'public' }],
            evening: [],
            night: [],
            accommodation: []
        }
    },
    // Community Templates (User Submissions)
    {
        id: 't8',
        name: '我的東京省錢攻略 3 日',
        nameEn: 'My Budget Tokyo 3-Day Trip',
        author: '小資女孩Amy',
        authorEn: 'Budget Girl Amy',
        authorId: 'c0',
        region: 'tokyo',
        tags: ['省錢', '背包客'],
        tagsEn: ['Budget', 'Backpacker'],
        duration: 3,
        rating: 4.3,
        tier: 'community',
        copiedCount: 45,
        schedule: {
            morning: [{ ...SAMPLE_ASSETS[0], instanceId: 't8-1', startTime: '10:00', arrivalTransport: 'walk' }],
            afternoon: [{ ...SAMPLE_ASSETS[1], instanceId: 't8-2', startTime: '14:00', arrivalTransport: 'public' }],
            evening: [],
            night: [],
            accommodation: []
        }
    },
    {
        id: 't9',
        name: '大阪追星一日行程',
        nameEn: 'Osaka Fan Meeting Day Trip',
        author: '追星族小明',
        authorEn: 'Fan Boy Ming',
        authorId: 'c1',
        region: 'osaka',
        tags: ['追星', '偶像'],
        tagsEn: ['Fan', 'Idol'],
        duration: 1,
        rating: 4.1,
        tier: 'community',
        copiedCount: 23,
        schedule: {
            morning: [{ ...SAMPLE_ASSETS[15], instanceId: 't9-1', startTime: '09:00', arrivalTransport: 'public' }],
            afternoon: [],
            evening: [{ ...SAMPLE_ASSETS[18], instanceId: 't9-2', startTime: '18:00', arrivalTransport: 'walk' }],
            night: [],
            accommodation: []
        }
    },
    {
        id: 't10',
        name: '京都和服體驗半日遊',
        nameEn: 'Kyoto Kimono Half-Day Experience',
        author: '和服愛好者',
        authorEn: 'Kimono Lover',
        authorId: 'c4',
        region: 'kyoto',
        tags: ['和服', '體驗'],
        tagsEn: ['Kimono', 'Experience'],
        duration: 1,
        rating: 4.5,
        tier: 'community',
        copiedCount: 67,
        schedule: {
            morning: [],
            afternoon: [{ ...SAMPLE_ASSETS[22], instanceId: 't10-1', startTime: '13:00', arrivalTransport: 'public' }],
            evening: [{ ...SAMPLE_ASSETS[26], instanceId: 't10-2', startTime: '17:00', arrivalTransport: 'walk' }],
            night: [],
            accommodation: []
        }
    }
];
