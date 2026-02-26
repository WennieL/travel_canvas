import { Creator } from '../types';

// 創作者資料
export const SAMPLE_CREATORS: Creator[] = [
    {
        id: 'c0',
        name: 'TravelCanvas 編輯部',
        nameEn: 'TravelCanvas Editors',
        avatar: '🎨',
        description: '官方精選行程，適合第一次旅遊的朋友。',
        descriptionEn: 'Official curated plans, perfect for beginners.',
        followers: 12050,
        tags: ['官方', '經典'],
        tagsEn: ['Official', 'Classic'],
        blogUrl: 'https://travelcanvas.com/blog'
    },
    {
        id: 'c1',
        name: '愛吃鬼安安',
        nameEn: 'Foodie Anan',
        avatar: '😋',
        description: '吃遍東京大街小巷，只推薦真的好吃的店！',
        descriptionEn: 'Eats through Tokyo, only recommending the best!',
        followers: 5300,
        tags: ['美食', '甜點'],
        tagsEn: ['Food', 'Desserts'],
        blogUrl: 'https://anan-foodie.com'
    },
    {
        id: 'c2',
        name: '大阪吃透透',
        nameEn: 'Osaka Insider',
        avatar: '🐙',
        description: '大阪在地人帶路，告訴你哪裡有最道地的章魚燒。',
        descriptionEn: 'Local guide showing you the best Takoyaki places.',
        followers: 3200,
        tags: ['大阪', '在地'],
        tagsEn: ['Osaka', 'Local'],
        blogUrl: 'https://osaka-life.jp'
    },
    {
        id: 'c3',
        name: 'USJ達人',
        nameEn: 'USJ Master',
        avatar: '🎢',
        description: '環球影城年票持有者，教你如何快速通關不排隊。',
        descriptionEn: 'Annual pass holder, teaching you how to skip lines.',
        followers: 8900,
        tags: ['樂園', '攻略'],
        tagsEn: ['Theme Park', 'Tips'],
        blogUrl: 'https://usj-expert.net'
    },
    {
        id: 'c4',
        name: '京都慢活',
        nameEn: 'Kyoto Slow Life',
        avatar: '🍵',
        description: '專注於京都的古寺、茶道與寧靜時刻。',
        descriptionEn: 'Focusing on ancient temples, tea ceremonies, and silence.',
        followers: 4500,
        tags: ['京都', '文化'],
        tagsEn: ['Kyoto', 'Culture'],
        blogUrl: 'https://kyoto-slowlife.com'
    },
    {
        id: 'c5',
        name: '親子旅遊爸',
        nameEn: 'Family Trip Dad',
        avatar: '👨‍👦',
        description: '帶著兩個孩子玩遍日本，推薦最適合家庭的行程。',
        descriptionEn: 'Exploring Japan with two kids. Recommendation for families.',
        followers: 7200,
        tags: ['親子', '家庭'],
        tagsEn: ['Family', 'Kids'],
        blogUrl: 'https://family-trip-japan.com'
    },
    {
        id: 'c6',
        name: '攝影師阿寬',
        nameEn: 'Photographer Kuan',
        avatar: '📸',
        description: '用鏡頭捕捉日本之美，帶你拍出人生美照。',
        descriptionEn: 'Capturing the beauty of Japan through the lens.',
        followers: 15000,
        tags: ['攝影', '打卡'],
        tagsEn: ['Photography', 'Spots'],
        blogUrl: 'https://kuan-photo.com'
    },
    {
        id: 'c-mel',
        name: 'Melbourne Local',
        nameEn: 'Melbourne Local',
        avatar: '☕',
        description: '住在墨爾本 5 年的咖啡狂熱者，帶你探索巷弄裡的隱藏寶藏。',
        descriptionEn: 'A coffee enthusiast living in Melbourne for 5 years. Exploring hidden gems in laneways.',
        followers: 8200,
        tags: ['墨爾本', '咖啡', '酒吧'],
        tagsEn: ['Melbourne', 'Coffee', 'Bars'],
        blogUrl: 'https://melbourne-local.com'
    },
    {
        id: 'c-osaka',
        name: '大阪玩樂王',
        nameEn: 'Osaka Fun Guide',
        avatar: '🐙',
        description: '土生土長的大阪人，教你怎麼玩最道地！',
        descriptionEn: 'Born and raised in Osaka. Here to show you the local way!',
        followers: 6400,
        tags: ['大阪', '美食', '樂園'],
        tagsEn: ['Osaka', 'Food', 'Theme Park'],
        blogUrl: 'https://osaka-fun.jp'
    },
    // ── Taiwan Creators ──
    {
        id: 'c-tw1',
        name: '台北文青散步',
        nameEn: 'Taipei Culture Walk',
        avatar: '🌿',
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
        avatar: '👵',
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
        avatar: '☕',
        description: '住在逢甲附近的老宅控，專門挖掘台中巷弄裡的咖啡廳和米其林隱藏美食。',
        descriptionEn: 'Old house enthusiast near Feng Chia. Digging up hidden cafés and Michelin gems in Taichung alleys.',
        followers: 5200,
        tags: ['台中', '老宅', '米其林'],
        tagsEn: ['Taichung', 'Old Houses', 'Michelin'],
        blogUrl: 'https://taichung-alley.tw'
    }
];
