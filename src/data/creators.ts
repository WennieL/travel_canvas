import { Creator } from '../types';

// 創作者資料
export const SAMPLE_CREATORS: Creator[] = [
    {
        id: 'c0',
        name: 'TravelCanvas 編輯部',
        nameEn: 'TravelCanvas Editors',
        avatar: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=100&q=80',
        description: '官方精選行程，適合第一次旅遊的朋友。',
        descriptionEn: 'Official curated plans, perfect for beginners.',
        followers: 12050,
        tags: ['官方', '經典'],
        tagsEn: ['Official', 'Classic'],
        blogUrl: 'https://travelcanvas.com/blog'
    },
    // ── Taiwan Creators ──
    {
        id: 'c-tw1',
        name: '台北文青散步',
        nameEn: 'Taipei Culture Walk',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
        description: '用走路的速度感受台北，專門探索巷弄裡的老宅咖啡和秘密景點。',
        descriptionEn: 'Exploring Taipei at walking pace. Old houses, hidden cafés, and secret spots in alleyways.',
        followers: 6800,
        tags: ['台北', '文青', '咖啡'],
        tagsEn: ['Taipei', 'Culture', 'Coffee'],
        blogUrl: 'https://taipei-walk.tw'
    },
    {
        id: 'c-tw2',
        name: '台南吃貨阿嬤',
        nameEn: 'Tainan Foodie Grandma',
        avatar: 'https://images.unsplash.com/photo-1551376347-075b0121a65b?auto=format&fit=crop&w=100&q=80',
        description: '在台南住了 60 年的阿嬤，帶你吃最道地的在地人美食。',
        descriptionEn: 'A grandma who lived in Tainan for 60 years. Authentic local food only.',
        followers: 4500,
        tags: ['台南', '小吃', '在地'],
        tagsEn: ['Tainan', 'Street Food', 'Local'],
        blogUrl: 'https://tainan-grandma.tw'
    },
    {
        id: 'c-tw3',
        name: '台中巷弄探索家',
        nameEn: 'Taichung Alley Explorer',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80',
        description: '住在逢甲附近的老宅控，專門挖掘台中巷弄裡的咖啡廳和米其林隱藏美食。',
        descriptionEn: 'Old house enthusiast near Feng Chia. Digging up hidden cafés and Michelin gems in Taichung alleys.',
        followers: 5200,
        tags: ['台中', '老宅', '米其林'],
        tagsEn: ['Taichung', 'Old Houses', 'Michelin'],
        blogUrl: 'https://taichung-alley.tw'
    },
    {
        id: 'c-tw4',
        name: '花蓮山海嚮導',
        nameEn: 'Hualien Mountain & Sea Guide',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80',
        description: '在這裡土生土長，帶你發現花蓮最原始的山海之美。',
        descriptionEn: 'Born and raised here. Let me show you the raw beauty of Hualien\'s mountains and sea.',
        followers: 4200,
        tags: ['花蓮', '秘境', '自然'],
        tagsEn: ['Hualien', 'Secret', 'Nature'],
        blogUrl: 'https://hualien-guide.tw'
    },
    {
        id: 'c-tw5',
        name: '台北夜貓子',
        nameEn: 'Taipei Night Owl',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80',
        description: '專門尋找台北深夜的驚喜，從酒吧、宵夜到凌晨的藝文空間。',
        descriptionEn: 'Exploring Taipei at night. Bars, late-night snacks, and midnight art spaces.',
        followers: 3500,
        tags: ['台北', '夜生活', '酒吧'],
        tagsEn: ['Taipei', 'Nightlife', 'Bars'],
        blogUrl: 'https://taipei-night.tw'
    },
    {
        id: 'c-tw6',
        name: '花蓮文青食客',
        nameEn: 'Hualien Foodie',
        avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=100&q=80',
        description: '不打卡網美店，只帶妳去花蓮在地人才知道的道地老店與創意料理。',
        descriptionEn: 'No IG traps. Only authentic local eateries and creative labs in Hualien.',
        followers: 2800,
        tags: ['花蓮', '美食', '老店'],
        tagsEn: ['Hualien', 'Food', 'Old House'],
        blogUrl: 'https://hualien-foodie.com'
    },
    {
        id: 'c-tw-mountain',
        name: '台北山系生活家',
        nameEn: 'Taipei Mountain Guide',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
        description: '從高處看台北是我的日常，帶你走遍陽明山、象山等絕美景觀點。',
        descriptionEn: 'Viewing Taipei from above is my routine. Let me lead you through Yangmingshan, Xiangshan, and other stunning viewpoints.',
        followers: 8600,
        tags: ['台北', '健行', '景觀'],
        tagsEn: ['Taipei', 'Hiking', 'Views'],
        blogUrl: 'https://taipei-mountain.tw',
        role: '登山嚮導',
        roleEn: 'MOUNTAIN GUIDE'
    },
    {
        id: 'c-tw-night',
        name: '台北深夜攝影師',
        nameEn: 'Taipei Night Photographer',
        avatar: 'https://images.unsplash.com/photo-1514516348920-f5d949fe9a6e?auto=format&fit=crop&w=100&q=80',
        description: '專門捕捉台北凌晨兩點的迷幻與寂靜。對他來說，這座城市在捷運收班後才真正開始呼吸。',
        descriptionEn: 'Capturing the psychedelic silence of Taipei at 2 AM. To him, the city starts breathing once the MRT closes.',
        followers: 18600,
        tags: ['攝影', '深夜', '微醺'],
        tagsEn: ['Photography', 'Midnight', 'Vibe'],
        blogUrl: 'https://taipei-night-photo.tw',
        role: '城市夜行者',
        roleEn: 'URBAN NIGHT WALKER'
    }
];
