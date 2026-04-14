import { ChecklistItem, Plan, ItemType, Region } from '../types';

// 預設清單 (通用)
export const DEFAULT_CHECKLIST: Record<string, ChecklistItem[]> = {
    zh: [
        { id: 'c1', text: '確認護照效期 (至少6個月)', checked: false },
        { id: 'c2', text: '購買旅遊保險', checked: false },
        { id: 'c3', text: '預訂網卡 / Wi-Fi 機', checked: false },
        { id: 'c4', text: '確認機票與住宿憑證', checked: false },
    ],
    en: [
        { id: 'c1', text: 'Check passport validity (at least 6 months)', checked: false },
        { id: 'c2', text: 'Buy travel insurance', checked: false },
        { id: 'c3', text: 'Book eSIM / Wi-Fi machine', checked: false },
        { id: 'c4', text: 'Confirm flight & hotel vouchers', checked: false },
    ]
};

// 地區專屬預設清單
export const REGION_DEFAULT_CHECKLISTS: Record<Region, Record<string, ChecklistItem[]>> = {
    // ── Taiwan Regions ──
    taipei: {
        zh: [
            ...DEFAULT_CHECKLIST.zh,
            { id: 'tp_1', text: '辦好悠遊卡（捷運/公車/超商都能用）', checked: false },
            { id: 'tp_2', text: '下載「台北捷運 Go」APP', checked: false },
            { id: 'tp_3', text: '準備雨具（台北常下雨）', checked: false },
        ],
        en: [
            ...DEFAULT_CHECKLIST.en,
            { id: 'tp_1', text: 'Get an EasyCard (MRT/Bus/convenience stores)', checked: false },
            { id: 'tp_2', text: 'Download "Taipei Metro Go" app', checked: false },
            { id: 'tp_3', text: 'Pack rain gear (Taipei rains often)', checked: false },
        ]
    },
    tainan: {
        zh: [
            ...DEFAULT_CHECKLIST.zh,
            { id: 'tn_1', text: '租機車或規劃包車（台南必備）', checked: false },
            { id: 'tn_2', text: '查好各小吃店營業時間（很多限時營業）', checked: false },
            { id: 'tn_3', text: '準備防曬用品（台南很熱）', checked: false },
        ],
        en: [
            ...DEFAULT_CHECKLIST.en,
            { id: 'tn_1', text: 'Rent a scooter or book a car (essential in Tainan)', checked: false },
            { id: 'tn_2', text: 'Check street food opening hours (many have limited hours)', checked: false },
            { id: 'tn_3', text: 'Pack sunscreen (Tainan is very hot)', checked: false },
        ]
    },
    taichung: {
        zh: [
            ...DEFAULT_CHECKLIST.zh,
            { id: 'tc_1', text: '下載「台中公車」APP（搭公車 10 公里免費）', checked: false },
            { id: 'tc_2', text: '台中咖啡廳通常中午才開，不要太早去', checked: false },
            { id: 'tc_3', text: 'MINIMAL 冰淇淋需提前 2 週預約', checked: false },
        ],
        en: [
            ...DEFAULT_CHECKLIST.en,
            { id: 'tc_1', text: 'Download "Taichung Bus" app (first 10km free)', checked: false },
            { id: 'tc_2', text: 'Taichung cafés usually open at noon, don\'t go too early', checked: false },
            { id: 'tc_3', text: 'MINIMAL ice cream requires 2-week advance booking', checked: false },
        ]
    },
    hualien: {
        zh: [
            ...DEFAULT_CHECKLIST.zh,
            { id: 'hl_1', text: '預訂火車票（台鐵經常售罄）', checked: false },
            { id: 'hl_2', text: '安排自駕或包車（大眾交通不方便）', checked: false },
            { id: 'hl_3', text: '太魯閣需申請入山證（部分步道）', checked: false },
        ],
        en: [
            ...DEFAULT_CHECKLIST.en,
            { id: 'hl_1', text: 'Book train tickets early (TRA sells out fast)', checked: false },
            { id: 'hl_2', text: 'Arrange car rental or charter (limited public transit)', checked: false },
            { id: 'hl_3', text: 'Some Taroko trails need mountain entry permits', checked: false },
        ]
    },
    kaohsiung: {
        zh: [
            ...DEFAULT_CHECKLIST.zh,
            { id: 'kh_1', text: '辦好一卡通或悠遊卡（輕軌必備）', checked: false },
            { id: 'kh_2', text: '下載「高雄 iBus」APP', checked: false },
            { id: 'kh_3', text: '準備墨鏡與遮陽帽（南台灣陽光強烈）', checked: false },
        ],
        en: [
            ...DEFAULT_CHECKLIST.en,
            { id: 'kh_1', text: 'Get an iPass or EasyCard (Essential for Light Rail)', checked: false },
            { id: 'kh_2', text: 'Download "Kaohsiung iBus" app', checked: false },
            { id: 'kh_3', text: 'Pack sunglasses and hat (Strong sun in Southern Taiwan)', checked: false },
        ]
    },
    chiayi: {
        zh: [
            ...DEFAULT_CHECKLIST.zh,
            { id: 'cy_1', text: '預訂阿里山小火車票（祝山線必備）', checked: false },
            { id: 'cy_2', text: '準備保暖衣物（阿里山清晨極冷）', checked: false },
            { id: 'cy_3', text: '確認嘉義市區火雞肉飯營業時間', checked: false },
        ],
        en: [
            ...DEFAULT_CHECKLIST.en,
            { id: 'cy_1', text: 'Book Alishan Forest Railway tickets (Zhushan line)', checked: false },
            { id: 'cy_2', text: 'Pack warm clothes (Alishan is cold at dawn)', checked: false },
            { id: 'cy_3', text: 'Check turkey rice opening hours in Chiayi city', checked: false },
        ]
    },
    nantou: {
        zh: [
            ...DEFAULT_CHECKLIST.zh,
            { id: 'nt_1', text: '預訂日月潭遊湖船票或租借單車', checked: false },
            { id: 'nt_2', text: '確認清境農場綿羊秀時間', checked: false },
            { id: 'nt_3', text: '準備暈車藥（南投山路蜿蜒）', checked: false },
        ],
        en: [
            ...DEFAULT_CHECKLIST.en,
            { id: 'nt_1', text: 'Book Sun Moon Lake boat tickets or rent a bike', checked: false },
            { id: 'nt_2', text: 'Check Cingjing Farm sheep show schedule', checked: false },
            { id: 'nt_3', text: 'Pack motion sickness medicine (winding mountain roads)', checked: false },
        ]
    },
    all: { zh: DEFAULT_CHECKLIST.zh, en: DEFAULT_CHECKLIST.en }
};

// ── Removed international past plans ───────────────────────────

// 台北 Demo 計畫
export const TAIPEI_DEMO_PLAN: Plan = {
    id: 'taipei-demo',
    name: '台北慢活 4 日遊',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 3 * 86400000).toISOString().split('T')[0],
    totalDays: 4,
    checklist: [
        { id: 'c1', text: '確認護照效期 (至少6個月)', textEn: 'Check passport validity (at least 6 months)', checked: true },
        { id: 'c2', text: '辦好悠遊卡', textEn: 'Get an EasyCard', checked: true },
        { id: 'c3', text: '下載台北捷運 Go APP', textEn: 'Download Taipei Metro Go app', checked: false },
        { id: 'c4', text: '預訂 101 觀景台門票', textEn: 'Book Taipei 101 tickets', checked: true },
        { id: 'c5', text: '準備雨具', textEn: 'Pack rain gear', checked: false }
    ],
    createdAt: Date.now(),
    region: 'taipei',
    schedule: {
        'Day 1': {
            morning: [],
            afternoon: [],
            evening: [],
            night: [],
            accommodation: []
        }
    }
};

// [RESTORED FOR STABILITY] Fallback demo plans
export const TOKYO_DEMO_PLAN = TAIPEI_DEMO_PLAN;
export const MELBOURNE_PAST_PLAN = {
    ...TAIPEI_DEMO_PLAN,
    id: 'tainan-past',
    name: '台南美食地圖 (Past)',
    startDate: '2023-05-10',
    endDate: '2023-05-12',
    region: 'tainan'
};


// 分類過濾器
export const CATEGORY_FILTERS: { id: 'all' | ItemType; label: string; labelEn: string; icon: string; color: string }[] = [
    { id: 'all', label: '全部', labelEn: 'All', icon: '🎨', color: 'bg-orange-500' },
    { id: 'attraction', label: 'attraction', labelEn: 'Attractions', icon: '📍', color: 'bg-blue-500' },
    { id: 'food', label: 'food', labelEn: 'Food', icon: '🍰', color: 'bg-pink-500' },
    { id: 'hotel', label: 'hotel', labelEn: 'Hotel', icon: '🏨', color: 'bg-purple-500' },
    { id: 'vibe', label: 'vibe', labelEn: 'Vibes', icon: '🍃', color: 'bg-emerald-500' },
    { id: 'transport', label: 'transport', labelEn: 'Transport', icon: '🚆', color: 'bg-teal-500' },
    { id: 'shopping', label: 'shopping', labelEn: 'Shopping', icon: '🛍️', color: 'bg-yellow-500' },
    { id: 'nature', label: 'nature', labelEn: 'Nature', icon: '🌲', color: 'bg-green-500' },
    { id: 'custom', label: 'custom', labelEn: 'Custom', icon: '✨', color: 'bg-indigo-500' },
];

// 地區過濾器 - 兩層結構：國家 → 城市
export const CITY_FILTERS: Record<string, { id: Region; label: string; labelEn: string; icon: string }[]> = {
    taiwan: [
        { id: 'taipei', label: '台北', labelEn: 'Taipei', icon: '🏙️' },
        { id: 'tainan', label: '台南', labelEn: 'Tainan', icon: '🏮' },
        { id: 'taichung', label: '台中', labelEn: 'Taichung', icon: '☕' },
        { id: 'hualien', label: '花蓮', labelEn: 'Hualien', icon: '🌊' },
        { id: 'kaohsiung', label: '高雄', labelEn: 'Kaohsiung', icon: '🏗️' },
        { id: 'chiayi', label: '嘉義', labelEn: 'Chiayi', icon: '🌲' },
        { id: 'nantou', label: '南投', labelEn: 'Nantou', icon: '🏞️' },
    ],
};

// [RESTORED FOR STABILITY] Country to City grouping
export const COUNTRY_FILTERS = [
    { id: 'taiwan', label: '台灣', labelEn: 'Taiwan', icon: '🇹🇼' }
];


// Legacy support - keep REGION_FILTERS for backwards compatibility
export const REGION_FILTERS: { id: Region; label: string; labelEn: string; icon: string }[] = [
    { id: 'all', label: '全部', labelEn: 'All', icon: '🌏' },
    { id: 'taipei', label: '台北', labelEn: 'Taipei', icon: '🏙️' },
    { id: 'tainan', label: '台南', labelEn: 'Tainan', icon: '🏮' },
    { id: 'taichung', label: '台中', labelEn: 'Taichung', icon: '☕' },
    { id: 'hualien', label: '花蓮', labelEn: 'Hualien', icon: '🌊' },
    { id: 'kaohsiung', label: '高雄', labelEn: 'Kaohsiung', icon: '🏙️' },
    { id: 'chiayi', label: '嘉義', labelEn: 'Chiayi', icon: '🌲' },
    { id: 'nantou', label: '南投', labelEn: 'Nantou', icon: '🏞️' },
];

// 熱門標籤
export const POPULAR_TAGS: { id: string; label: string; labelEn: string; icon: string }[] = [
    { id: '必去', label: '必去', labelEn: 'Must-visit', icon: '⭐' },
    { id: '美食', label: '美食', labelEn: 'Food', icon: '🍜' },
    { id: '親子', label: '親子', labelEn: 'Family', icon: '👨‍👩‍👧' },
    { id: '夜景', label: '夜景', labelEn: 'Night View', icon: '🌃' },
    { id: '免費', label: '免費', labelEn: 'Free', icon: '🆓' },
    { id: '打卡', label: '打卡', labelEn: 'Insta-worthy', icon: '📸' },
];
