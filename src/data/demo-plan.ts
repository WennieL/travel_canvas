import { ChecklistItem, Plan, ItemType, Region } from '../types';

// 預設清單
export const DEFAULT_CHECKLIST: ChecklistItem[] = [
    { id: 'c1', text: '確認護照效期 (至少6個月)', checked: false },
    { id: 'c2', text: '購買旅遊保險', checked: false },
    { id: 'c3', text: '預訂網卡 / Wi-Fi 機', checked: false },
    { id: 'c4', text: '兌換外幣 (日圓)', checked: false },
    { id: 'c5', text: '確認機票與住宿憑證', checked: false },
];

// 東京 Demo 計畫
export const TOKYO_DEMO_PLAN: Plan = {
    id: 'tokyo-demo',
    name: '東京初心者 4 日遊',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 3 * 86400000).toISOString().split('T')[0],
    totalDays: 4,
    checklist: [
        { id: 'c1', text: '確認護照效期 (至少6個月)', checked: false },
        { id: 'c2', text: '購買東京迪士尼門票', checked: true },
        { id: 'c3', text: '辦理 Suica/Pasmo 卡', checked: false },
        { id: 'c4', text: '預訂 eSIM / Pocket WiFi', checked: true },
        { id: 'c5', text: '確認機票與住宿', checked: true }
    ],
    createdAt: Date.now(),
    schedule: {
        'Day 1': {
            morning: [
                { id: 't1', instanceId: 'i1', title: 'Arrival at Narita/Haneda', type: 'transport', startTime: '10:00', duration: '1.5hr', price: 3000, description: 'Take Skyliner or NEX to city center.', lat: 35.7719, lng: 140.3907 }
            ],
            afternoon: [
                { id: 't2', instanceId: 'i2', title: 'Hotel Check-in', type: 'hotel', startTime: '14:00', duration: '1hr', price: 0, description: 'Drop luggage and freshen up.', address: 'Shibuya Stream Excel Hotel', lat: 35.6569, lng: 139.7029 },
                { id: 't3', instanceId: 'i3', title: 'Shibuya Crossing', type: 'attraction', startTime: '15:30', duration: '1hr', price: 0, image: '🚶', description: 'The world famous scramble crossing. Best view from Magnet by Shibuya 109.', tips: 'Go to the 2nd floor of Starbucks for a time-lapse video.', lat: 35.6595, lng: 139.7005, arrivalTransport: 'walk' },
                { id: 't4', instanceId: 'i4', title: 'Hachiko Statue', type: 'attraction', startTime: '16:45', duration: '30m', price: 0, image: '🐕', description: 'Meeting point for locals. The loyal dog statue.', lat: 35.6590, lng: 139.7004, arrivalTransport: 'walk' }
            ],
            evening: [
                { id: 't5', instanceId: 'i5', title: 'Shibuya Food Street', type: 'food', startTime: '18:00', duration: '1.5hr', price: 3000, image: '🍜', description: 'Try Ichiran Ramen or local Izakaya.', tips: 'Avoid rush hour after 6pm if you hate crowds.', lat: 35.6603, lng: 139.6994, arrivalTransport: 'walk' }
            ],
            night: [
                { id: 't6', instanceId: 'i6', title: 'Mega Don Quijote', type: 'attraction', startTime: '20:00', duration: '1hr', price: 5000, image: '🛍️', description: 'Tax-free shopping paradise.', funFact: 'Open 24 hours!', lat: 35.6598, lng: 139.6976, arrivalTransport: 'walk' }
            ],
            accommodation: [
                { id: 't7', instanceId: 'i7', title: 'Shibuya Stream Excel Hotel', type: 'hotel', startTime: '22:00', duration: 'Overnight', price: 25000, image: '🏨', description: 'Directly connected to the station.', lat: 35.6569, lng: 139.7029 }
            ]
        },
        'Day 2': {
            morning: [
                { id: 'd2-1', instanceId: 'i2-1', title: 'Senso-ji Temple', type: 'attraction', startTime: '09:00', duration: '2hr', price: 0, image: '⛩️', description: 'Oldest temple in Tokyo. Iconic Kaminarimon gate.', address: 'Asakusa', tips: 'Get your Omikuji (fortune) here!', lat: 35.7147, lng: 139.7967, arrivalTransport: 'public' }
            ],
            afternoon: [
                { id: 'd2-2', instanceId: 'i2-2', title: 'Nakamise Shopping Street', type: 'food', startTime: '11:30', duration: '1.5hr', price: 2000, image: '🍡', description: 'Street food heaven. Try the melon pan.', lat: 35.7125, lng: 139.7966, arrivalTransport: 'walk' },
                { id: 'd2-3', instanceId: 'i2-3', title: 'Sumida Park', type: 'attraction', startTime: '13:30', duration: '1hr', price: 0, image: '🌳', description: 'Great view of Tokyo Skytree.', lat: 35.7131, lng: 139.8005, arrivalTransport: 'walk' },
                { id: 'd2-4', instanceId: 'i2-4', title: 'Tokyo Skytree', type: 'attraction', startTime: '15:00', duration: '2hr', price: 3500, image: '🗼', description: 'Tallest tower in Japan. Stunning views.', tips: 'Book tickets online to skip the line.', lat: 35.7100, lng: 139.8107, arrivalTransport: 'public' }
            ],
            evening: [
                { id: 'd2-5', instanceId: 'i2-5', title: 'Monjayaki Dinner', type: 'food', startTime: '18:00', duration: '1.5hr', price: 2500, image: '🥘', description: 'Tokyo specialty pancake.', address: 'Tsukishima', lat: 35.6646, lng: 139.7810, arrivalTransport: 'public' }
            ],
            night: [],
            accommodation: [
                { id: 't7', instanceId: 'i7-2', title: 'Shibuya Stream Excel Hotel', type: 'hotel', startTime: '22:00', duration: 'Overnight', price: 25000, image: '🏨', description: 'Directly connected to the station.', lat: 35.6569, lng: 139.7029 }
            ]
        },
        'Day 3': {
            morning: [
                { id: 'd3-1', instanceId: 'i3-1', title: 'Tsukiji Outer Market', type: 'food', startTime: '08:00', duration: '2hr', price: 4000, image: '🍣', description: 'Fresh seafood breakfast.', tips: 'Must try: Tamagoyaki (Egg roll).', lat: 35.6654, lng: 139.7706, arrivalTransport: 'public' }
            ],
            afternoon: [
                { id: 'd3-2', instanceId: 'i3-2', title: 'TeamLab Planets', type: 'attraction', startTime: '11:00', duration: '2hr', price: 3800, image: '✨', description: 'Immersive digital art museum. You walk barefoot.', address: 'Toyosu', tips: 'Wear shorts that roll up easily.', lat: 35.6465, lng: 139.7877, arrivalTransport: 'public' },
                { id: 'd3-3', instanceId: 'i3-3', title: 'Odaiba Gundam Base', type: 'attraction', startTime: '14:00', duration: '2hr', price: 0, image: '🤖', description: 'Giant Unicorn Gundam statue transforms at specific times.', lat: 35.6243, lng: 139.7754, arrivalTransport: 'public' }
            ],
            evening: [
                { id: 'd3-4', instanceId: 'i3-4', title: 'Rainbow Bridge View', type: 'attraction', startTime: '17:30', duration: '1hr', price: 0, image: '🌉', description: 'Romantic night view of Tokyo Bay.', lat: 35.6340, lng: 139.7637, arrivalTransport: 'walk' }
            ],
            night: [],
            accommodation: [
                { id: 't7', instanceId: 'i7-3', title: 'Shibuya Stream Excel Hotel', type: 'hotel', startTime: '22:00', duration: 'Overnight', price: 25000, image: '🏨', description: 'Directly connected to the station.', lat: 35.6569, lng: 139.7029 }
            ]
        },
        'Day 4': {
            morning: [
                { id: 'd4-1', instanceId: 'i4-1', title: 'Meiji Jingu Shrine', type: 'attraction', startTime: '09:00', duration: '1.5hr', price: 0, image: '🌲', description: 'Peaceful forest in the city.', lat: 35.6763, lng: 139.6993, arrivalTransport: 'public' }
            ],
            afternoon: [
                { id: 'd4-2', instanceId: 'i4-2', title: 'Harajuku Takeshita St.', type: 'attraction', startTime: '11:00', duration: '2hr', price: 2000, image: '🎀', description: 'Kawaii fashion and crepes.', lat: 35.6716, lng: 139.7030, arrivalTransport: 'walk' },
                { id: 'd4-3', instanceId: 'i4-3', title: 'Omotesando Shopping', type: 'attraction', startTime: '13:30', duration: '2hr', price: 0, image: '👜', description: 'Luxury brands and cool architecture.', lat: 35.6654, lng: 139.7109, arrivalTransport: 'walk' }
            ],
            evening: [
                { id: 'd4-4', instanceId: 'i4-4', title: 'Return Flight', type: 'transport', startTime: '17:00', duration: '2hr', price: 2000, image: '✈️', description: 'Heading to Narita/Haneda airport.', lat: 35.5522, lng: 139.7799, arrivalTransport: 'public' }
            ],
            night: [],
            accommodation: []
        }
    }
};

// 分類過濾器
export const CATEGORY_FILTERS: { id: 'all' | ItemType; label: string }[] = [
    { id: 'all', label: 'all' },
    { id: 'attraction', label: 'attraction' },
    { id: 'food', label: 'food' },
    { id: 'hotel', label: 'hotel' },
    { id: 'custom', label: 'custom' },
];

// 地區過濾器 - 兩層結構：國家 → 城市
export const COUNTRY_FILTERS = [
    { id: 'all', label: '全部', labelEn: 'All', icon: '🌏' },
    { id: 'japan', label: '日本', labelEn: 'Japan', icon: '🇯🇵' },
    { id: 'australia', label: '澳洲', labelEn: 'Australia', icon: '🇦🇺' },
];

export const CITY_FILTERS: Record<string, { id: Region; label: string; labelEn: string; icon: string }[]> = {
    japan: [
        { id: 'tokyo', label: '東京', labelEn: 'Tokyo', icon: '🗼' },
        { id: 'osaka', label: '大阪', labelEn: 'Osaka', icon: '🏯' },
        { id: 'kyoto', label: '京都', labelEn: 'Kyoto', icon: '⛩️' },
    ],
    australia: [
        { id: 'melbourne', label: '墨爾本', labelEn: 'Melbourne', icon: '☕' },
    ],
};

// Legacy support - keep REGION_FILTERS for backwards compatibility
export const REGION_FILTERS: { id: Region; label: string; labelEn: string; icon: string }[] = [
    { id: 'all', label: '全部', labelEn: 'All', icon: '🌏' },
    { id: 'tokyo', label: '東京', labelEn: 'Tokyo', icon: '🗼' },
    { id: 'osaka', label: '大阪', labelEn: 'Osaka', icon: '🏯' },
    { id: 'kyoto', label: '京都', labelEn: 'Kyoto', icon: '⛩️' },
    { id: 'melbourne', label: '墨爾本', labelEn: 'Melbourne', icon: '☕' },
];

// 熱門標籤
export const POPULAR_TAGS: { id: string; label: string; labelEn: string; icon: string }[] = [
    { id: '必去', label: '必去', labelEn: 'Must-visit', icon: '⭐' },
    { id: '美食', label: '美食', labelEn: 'Food', icon: '🍜' },
    { id: '親子', label: '親子', labelEn: 'Family', icon: '👨‍👩‍👧' },
    { id: '夜景', label: '夜景', labelEn: 'Night View', icon: '🌃' },
    { id: '免費', label: '免費', labelEn: 'Free', icon: '🆓' },
    { id: '打卡', label: '打卡', labelEn: 'Insta-worthy', icon: '📸' },
    { id: '動漫', label: '動漫', labelEn: 'Anime', icon: '🎌' },
];
