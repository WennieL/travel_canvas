import { TravelItem } from '../../types';

// ── Taipei 台北 ──────────────────────────────────────────

export const TAIPEI_ASSETS: TravelItem[] = [
    {
        id: 'tw-a5',
        title: '台北101',
        titleEn: 'Taipei 101',
        type: 'attraction',
        duration: '2小時',
        image: '🏙️',
        description: '台北地標，雲端觀景台俯瞰全城。',
        descriptionEn: 'Taipei skyscraper landmarks with city views from the clouds.',
        price: 600,
        address: '台北市信義區信義路五段7號',
        rating: 4.8,
        lat: 25.0339,
        lng: 121.5644,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '11:00-21:00',
        tags: ['地標', '夜景'],
        insiderTip: {
            teaser: '地標觀景台的秘密咖啡廳',
            teaserEn: 'The Landmark Observatory\'s Secret Cafe',
            full: {
                story: '雖然大家都去觀景台，但我更推薦預約 35 樓的星巴克，用一杯咖啡的錢就能享受差不多高度的台北美景。',
                storyEn: 'While everyone goes to the observatory, I recommend booking the Starbucks on the 35th floor.',
                exactLocation: '台北101辦公大樓35樓',
                mustTry: '預約窗邊座位喝拿鐵',
                avoid: '週末一定要提前一週預約',
                bestTime: '16:30 銜接日落'
            }
        }
    },
    {
        id: 'tw-a5-v2',
        title: '台北101',
        titleEn: 'Taipei 101',
        type: 'attraction',
        duration: '1.5小時',
        image: '🏙️',
        description: '攝影師心中的 101 最美取景點，不一定要登頂。',
        descriptionEn: 'The most beautiful photo spots for 101 without going up.',
        price: 0,
        address: '台北市信義區信義路五段7號',
        rating: 4.9,
        lat: 25.0339,
        lng: 121.5644,
        region: 'taipei',
        authorId: 'c6',
        openingHours: '24H',
        tags: ['攝影', '秘境'],
        insiderTip: {
            teaser: '不是在 101 內，而是拍 101 的絕佳座標',
            teaserEn: 'Not in 101, but the perfect spot to capture it.',
            full: {
                story: '我最喜歡從四四南村看 101，老眷村建築與現代摩天大樓的強烈對比極具美感。',
                storyEn: 'I love viewing 101 from 44 South Village. The contrast between old and modern is stunning.',
                exactLocation: '四四南村草原區',
                mustTry: '拍下眷村瓦片與 101 的合照',
                avoid: '假日會有市集，人非常多',
                bestTime: '17:00 暖黃光影最舒服'
            }
        }
    },
    // === ATTRACTIONS ===
    {
        id: 'tw-a1',
        title: '臺灣文學基地',
        titleEn: 'Taiwan Literature Base',
        type: 'attraction',
        duration: '1小時',
        image: '🏛️',
        description: '隱身忠孝東路旁的日式宿舍群，比華山更安靜，彷彿瞬間穿越到京都。',
        descriptionEn: 'Hidden Japanese-era dormitories near Zhongxiao E. Rd. Quieter than Huashan, feels like stepping into Kyoto.',
        price: 0,
        address: '台北市中正區齊東街53巷',
        rating: 4.7,
        lat: 25.0415,
        lng: 121.5305,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '10:00-18:00 (週一休)',
        tags: ['文青', '秘境'],
        insiderTip: {
            teaser: '忠孝東路旁卻像京都的秘密空間',
            teaserEn: 'A Kyoto-like secret space right off Zhongxiao E. Rd.',
            full: {
                story: '從忠孝東路轉進齊東街，3 分鐘內就能從車水馬龍進入一整排修復的日式木造宿舍。不定期有文學展覽和朗讀會，院子裡的老樹下還有免費書架可以借閱。',
                storyEn: 'Turn from Zhongxiao E. Rd. into Qidong St., and in 3 minutes you\'ll enter a row of restored Japanese wooden dormitories.',
                exactLocation: '齊東街53巷，從忠孝新生站5號出口步行5分鐘',
                mustTry: '坐在院子裡老樹下的長椅讀書',
                avoid: '週一公休，不要白跑一趟',
                bestTime: '14:00-16:00 午後光影最美'
            }
        }
    },
    {
        id: 'tw-a2',
        title: '心中山線形公園',
        titleEn: 'Xinzhongshan Linear Park',
        type: 'attraction',
        duration: '1.5小時',
        image: '🌿',
        description: '中山站到雙連站之間的地下隧道變身文青新基地，週末有在地市集。',
        descriptionEn: 'Linear park between Zhongshan and Shuanglian MRT stations, with weekend markets and indie shops.',
        price: 0,
        address: '台北市中山區中山北路二段48巷',
        rating: 4.6,
        lat: 25.0571,
        lng: 121.5225,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '24H',
        tags: ['文青', '市集'],
        insiderTip: {
            teaser: '捷運站之間的秘密花園',
            teaserEn: 'A secret garden between MRT stations',
            full: {
                story: '這不只是公園，兩旁的巷弄裡躲著無數間獨立書店和自家烘焙咖啡廳。週末下午會有在地創作者擺攤的市集。沿著步道走到底，會發現一個被植物包圍的小座位區，很適合發呆放空。',
                exactLocation: '中山站1號出口出來往右走就到',
                mustTry: '逛完公園鑽進赤峰街的「浮光書店」喝杯咖啡',
                avoid: '下雨天市集會取消',
                bestTime: '週六日 14:00-17:00 有市集'
            }
        }
    },
    {
        id: 'tw-a3',
        title: '寶藏巖國際藝術村',
        titleEn: 'Treasure Hill Artist Village',
        type: 'attraction',
        duration: '2小時',
        image: '🎨',
        description: '公館旁的迷你版山城九份，遺世獨立的藝術聚落，90% 遊客不知道。',
        descriptionEn: 'Mini hillside village near Gongguan, a hidden artist community unknown to 90% of tourists.',
        price: 0,
        address: '台北市中正區汀州路三段230巷14弄2號',
        rating: 4.8,
        lat: 25.0102,
        lng: 121.5333,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '11:00-18:00 (週一休)',
        tags: ['藝術', '秘境'],
        insiderTip: {
            teaser: '台北最不商業化的藝術聚落',
            teaserEn: 'Taipei\'s least commercialized art community',
            full: {
                story: '這裡原本是眷村，後來變成國際藝術家的駐村基地。沿著蜿蜒的小路往上爬，每個轉角都有不同的裝置藝術。頂端有一個可以俯瞰新店溪的平台，黃昏時超美。',
                exactLocation: '從公館站1號出口過河堤，步行10分鐘',
                mustTry: '找到藏在最高處的「尖蚪咖啡」，在河景露台喝一杯',
                avoid: '不要穿高跟鞋，路很陡',
                bestTime: '16:00-17:30 黃昏時分'
            }
        }
    },
    // === FOOD ===
    {
        id: 'tw-f1',
        title: '鼎元豆漿',
        titleEn: 'Ding Yuan Soy Milk',
        type: 'food',
        duration: '40分',
        image: '🥟',
        description: '60年老字號豆漿店，小籠包和鹹豆漿是老台北人的回憶。',
        descriptionEn: '60-year-old soy milk shop. Xiaolongbao and savory soy milk are old Taipei memories.',
        price: 120,
        address: '台北市中正區金華街30-1號',
        rating: 4.7,
        lat: 25.0307,
        lng: 121.5268,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '04:00-11:30',
        tags: ['早餐', '老字號'],
        insiderTip: {
            teaser: '日本遊客最愛的隱藏版早餐店',
            teaserEn: 'The hidden breakfast spot loved by Japanese tourists',
            full: {
                story: '這家店在日本美食節目被介紹過，但台灣人知道的反而不多。小籠包皮薄餡多，是台北最被低估的小籠包。必點「鹹豆漿」加辣油，配燒餅油條是正統吃法。',
                exactLocation: '金華街和永康街交叉口附近',
                mustTry: '鹹豆漿 + 燒餅夾油條 + 小籠包',
                avoid: '10 點以後去小籠包容易賣完',
                bestTime: '06:00-08:00'
            }
        }
    },
    {
        id: 'tw-f2',
        title: '足米飯糰',
        titleEn: 'Zumi Rice Ball',
        type: 'food',
        duration: '20分',
        image: '🍙',
        description: '萬華隱藏版飯糰店，沒有招牌，剝皮辣椒飯糰只有在地人才懂得點。',
        descriptionEn: 'Hidden rice ball shop in Wanhua. No signboard. The chili pepper rice ball is a local secret.',
        price: 60,
        address: '台北市萬華區',
        rating: 4.8,
        lat: 25.0356,
        lng: 121.4992,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '06:00-12:00（賣完為止）',
        tags: ['早餐', '秘密'],
        insiderTip: {
            teaser: '沒招牌、靠口耳相傳的飯糰秘店',
            teaserEn: 'No sign, word-of-mouth only rice ball secret shop',
            full: {
                story: '純靠口耳相傳的巷弄飯糰店。「剝皮辣椒飯糰」辣甜交織，配上油條和肉鬆，口感層次超豐富。老闆很友善但不太會英文，建議用手指比菜單。每天限量，中午前必到。',
                exactLocation: '萬華區（解鎖完整地址）',
                mustTry: '剝皮辣椒飯糰 NT$60',
                avoid: '太晚去就只剩基本款',
                bestTime: '07:00-09:00'
            }
        }
    },
    // === COFFEE ===
    {
        id: 'tw-c1',
        title: '以賽亞咖啡廳',
        titleEn: 'Isaiah Coffee',
        type: 'food',
        duration: '1.5小時',
        image: '☕',
        description: '大稻埕迪化街獨棟復古咖啡廳，在百年老建築裡喝手沖。',
        descriptionEn: 'Standalone retro café on Dihua St. in Dadaocheng. Hand-drip coffee in a century-old building.',
        price: 180,
        address: '台北市大同區迪化街一段',
        rating: 4.6,
        lat: 25.0560,
        lng: 121.5098,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '10:00-18:00',
        tags: ['咖啡', '老建築'],
        insiderTip: {
            teaser: '大稻埕最新的百年老宅咖啡秘境',
            teaserEn: 'The newest century-old house café in Dadaocheng',
            full: {
                story: '新開幕的獨棟老宅咖啡廳，三層樓每層風格不同。頂樓有露台可以遠眺淡水河。推薦坐二樓靠窗位，午後陽光灑進來配上手沖單品，是最完美的大稻埕下午。',
                exactLocation: '迪化街一段，霞海城隍廟附近',
                mustTry: '單品手沖 + 台式鳳梨酥',
                avoid: '週末人多，建議平日去',
                bestTime: '14:00-16:00'
            }
        }
    },
    // === HOTEL ===
    {
        id: 'tw-h1',
        title: '町·記憶旅店',
        titleEn: 'Cho Memory Hotel',
        type: 'hotel' as const,
        duration: '0',
        image: '🏨',
        description: '西門町巷弄中的文青設計旅店，走路 3 分鐘到西門捷運站。',
        descriptionEn: 'Boutique design hotel in Ximending alleys, 3-min walk to MRT.',
        price: 2200,
        address: '台北市萬華區西門町',
        rating: 4.5,
        lat: 25.0425,
        lng: 121.5081,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['住宿', '設計旅店'],
        insiderTip: {
            teaser: '西門町最有設計感的平價旅店',
            teaserEn: 'Most stylish budget hotel in Ximending',
            full: {
                story: '日式簡約風設計，每層樓以不同台灣意象為主題。頂樓有小露台可以看西門町夜景。櫃檯提供免費在地小食地圖。',
                exactLocation: '西門站 6 號出口步行 3 分鐘',
                mustTry: '頂樓露台看西門町霓虹夜景',
                avoid: '假日建議提早訂房',
                bestTime: '入住後到頂樓看夜景'
            }
        }
    },
    {
        id: 'ta2',
        title: '士林夜市',
        titleEn: 'Shilin Night Market',
        type: 'food',
        duration: '2小時',
        image: '🍢',
        description: '台北規模最大、最知名的夜市。',
        price: 300,
        address: '台北市士林區基河路101號',
        rating: 4.4,
        lat: 25.0885,
        lng: 121.5234,
        tags: ['夜市', '必去'],
        region: 'taipei',
        authorId: 'c2',
        insiderTip: {
            teaser: '避開人潮，內行人才去的地道美食區',
            teaserEn: 'Skip the crowds, go where locals eat',
            full: {
                story: '不要只在基河路上的觀光區買東西！往「大東路」和「慈諴宮」方向走，那裡的店才是士林在地人會吃的。尤其是廟口的麵線和甜不辣。',
                exactLocation: '慈諴宮前的小攤販區域',
                mustTry: '炸鮮奶、阿輝麵線、豪大大雞排',
                avoid: '不要買現切水果攤，價格通常標示不清',
                bestTime: '17:30 剛開門時人最少'
            }
        }
    },
    {
        id: 'ta-secret-1',
        title: '竹村居酒屋巷弄',
        titleEn: 'Takemura Izakaya Alley',
        type: 'attraction',
        duration: '0.5小時',
        image: '📸',
        description: '看見台北 101 的最美角度，台劇《我可能不會愛你》取景地，充滿生活感的日式風味巷弄。',
        descriptionEn: 'The most beautiful view of Taipei 101, featured in famous dramas.',
        price: 0,
        address: '台北市信義區松仁路253巷1弄2號',
        rating: 4.9,
        lat: 25.0253,
        lng: 121.5684,
        tags: ['網美', '攝影', '偶像劇'],
        region: 'taipei',
        authorId: 'c-tw1',
        insiderTip: {
            teaser: '101 的隱藏版絕佳機位！就像活在日劇裡',
            teaserEn: 'Hidden 101 photo spot! Feel like a J-drama',
            full: {
                story: '這裡就是李大仁跟程又青喝酒的地方。站在居酒屋前的巷子，可以拍到遠處的台北 101 矗立在兩排矮房中間，視覺對比非常強烈。是 IG 上拍 101 最推薦的私藏機位。',
                exactLocation: '竹村居酒屋門口的電線桿旁',
                mustTry: '在這裡拍一張 101 合照，晚上燈光更有氛圍',
                avoid: '這裡是狹窄巷弄，拍照時要注意路過的機車，不要影響居酒屋做生意',
                bestTime: '18:00 藍調時刻，101 剛亮燈時'
            }
        }
    },
    {
        id: 'ta-secret-2',
        title: '赤峰街',
        titleEn: 'Chifeng Street',
        type: 'attraction',
        duration: '2小時',
        image: '🚲',
        description: '從打鐵街蛻變為文新聚落，藏在舊式公寓裡的選物店、咖啡廳與工作室。',
        descriptionEn: 'Former ironmonger street turned creative hub with chic boutiques and cafés.',
        price: 0,
        address: '台北市大同區赤峰街',
        rating: 4.7,
        lat: 25.0538,
        lng: 121.5203,
        tags: ['老宅', '選物', '慢活'],
        region: 'taipei',
        authorId: 'c-tw1',
        insiderTip: {
            teaser: '打鐵街的蛻變：台北最有趣的巷弄漫遊',
            teaserEn: 'Iron street transformation: Taipei\'s coolest walk',
            full: {
                story: '赤峰街以前是賣五金打鐵的，現在則藏了超多厲害的選物店。「心中山」公園蓋好後，這一區變得超好逛。我推薦去「小器梅酒屋」或是找找看藏在二樓的獨立書店。',
                exactLocation: '捷運中山站與雙連站之間的巷弄',
                mustTry: '在巷弄弄裡找一家看起來很有感覺的咖啡廳',
                avoid: '不要只逛主街，橫向的小巷子更有驚喜',
                bestTime: '14:00 後各店鋪陸續營業'
            }
        }
    },
];

// ── Tainan 台南 ──────────────────────────────────────────

export const TAINAN_ASSETS: TravelItem[] = [
    {
        id: 'tn-a1',
        title: '神農街',
        titleEn: 'Shennong Street',
        type: 'attraction',
        duration: '1.5小時',
        image: '🏮',
        description: '古色古香的文創老街，每個角落都充滿故事。',
        descriptionEn: 'Vintage creative street with stories in every corner.',
        price: 0,
        address: '台南市中西區神農街',
        rating: 4.7,
        lat: 22.9983,
        lng: 120.1968,
        region: 'tainan',
        authorId: 'c-tw2',
        openingHours: '24H',
        tags: ['文青', '老街'],
        insiderTip: {
            teaser: '夜晚的神農街才是真正的魔法時刻',
            teaserEn: 'The real magic happens at night',
            full: {
                story: '白天是觀光客拍照的老街，但晚上 7 點以後才是真正的台南味。紅燈籠亮起來，文創小店變成小酒吧，在地人會出來散步。巷弄深處有一間沒招牌的老屋酒吧，只有在地人知道。',
                exactLocation: '從海安路轉入神農街',
                mustTry: '找到巷底的隱藏酒吧（門口有一盞紅燈）',
                avoid: '中午太熱不適合逛',
                bestTime: '19:00-21:00'
            }
        }
    },
    {
        id: 'tn-f1',
        title: '蜷尾家',
        titleEn: 'Ninao Gelato',
        type: 'food',
        duration: '30分',
        image: '🍦',
        description: '2015世界義式冰淇淋大賽銀牌🥈，首位華人得獎，台南正興街本店。',
        descriptionEn: 'Silver medalist at 2015 Gelato World Tour. First Chinese winner. Flagship on Zhengxing St.',
        price: 90,
        address: '台南市中西區正興街92號',
        rating: 4.8,
        lat: 22.9919,
        lng: 120.1961,
        region: 'tainan',
        authorId: 'c-tw2',
        openingHours: '12:00-18:00',
        tags: ['冰淇淋', '🏆國際得獎'],
        insiderTip: {
            teaser: '🏆 世界銀牌冰淇淋的隱藏吃法',
            teaserEn: '🏆 Secret ways to enjoy world-medal gelato',
            full: {
                story: '得獎口味「爆米香荔枝蜜紅茶」用的是阿里山蜜香紅茶 + 台灣荔枝蜂蜜 + 屏東爆米香。但在地人的秘密是：不要只點招牌，問店員「今天的隱藏口味是什麼」，每天都不一樣，而且限量。',
                storyEn: 'The award-winning flavor uses Alishan honey black tea + Taiwanese lychee honey. But locals ask for the "hidden flavor of the day" - limited and different daily.',
                exactLocation: '正興街92號，認明排隊人龍',
                mustTry: '當日限定口味 + 經典茶味冰淇淋',
                avoid: '假日排隊 30 分鐘起，建議平日下午 2 點去',
                bestTime: '平日 14:00'
            }
        }
    },
    {
        id: 'tn-f2',
        title: '裕農水煎包',
        titleEn: 'Yunong Pan-fried Buns',
        type: 'food',
        duration: '20分',
        image: '🥟',
        description: '一天只賣5小時的現煎水煎包，在地人真心推薦。',
        descriptionEn: 'Pan-fried buns sold only 5 hours/day. Truly local recommended.',
        price: 35,
        address: '台南市東區裕農路',
        rating: 4.6,
        lat: 22.9887,
        lng: 120.2200,
        region: 'tainan',
        authorId: 'c-tw2',
        openingHours: '14:00-19:00（賣完為止）',
        tags: ['小吃', '限時'],
        insiderTip: {
            teaser: '一天只賣 5 小時，買不到就沒了',
            teaserEn: 'Only 5 hours a day. Sold out = gone.',
            full: {
                story: '下午 2 點才開始賣，通常 5 點就賣完了。皮酥底脆，肉餡鮮甜多汁。在地人會一次買 10 個以上帶回家。記得要加辣醬，是老闆自己調的。',
                exactLocation: '裕農路上，認明排隊人龍',
                mustTry: '水煎包 + 自製辣醬',
                avoid: '太早去還沒開、太晚去沒得買',
                bestTime: '14:30'
            }
        }
    },
    // === HOTEL ===
    {
        id: 'tn-h1',
        title: '煙波大飯店台南館',
        titleEn: 'Lakeshore Hotel Tainan',
        type: 'hotel' as const,
        duration: '0',
        image: '🏨',
        description: '中西區核心地段設計飯店，步行可達國華街與神農街。',
        descriptionEn: 'Design hotel in Tainan core area, walking distance to Guohua St. and Shennong St.',
        price: 2800,
        address: '台南市中西區',
        rating: 4.6,
        lat: 22.9933,
        lng: 120.2010,
        region: 'tainan',
        authorId: 'c-tw2',
        tags: ['住宿', '設計旅店'],
        insiderTip: {
            teaser: '走路就能到國華街和神農街',
            teaserEn: 'Walking distance to Guohua St. and Shennong St.',
            full: {
                story: '位置極佳，步行就能到台南最精華的美食區。房間設計融入台南老宅元素，早餐自助吧有在地美食。建議住高樓層可以看到台南老城區夜景。',
                exactLocation: '中西區市中心',
                mustTry: '早餐自助吧的台南在地小吃',
                avoid: '假日價格較高',
                bestTime: '入住後散步到神農街看夜景'
            }
        }
    },
];

// ── Hualien 花蓮 ────────────────────────────────────────

export const HUALIEN_ASSETS: TravelItem[] = [
    {
        id: 'tw-h1',
        title: '吉利潭',
        titleEn: 'Jili Lake',
        type: 'attraction',
        duration: '2小時',
        image: '💧',
        description: '光復鄉的隱世珍珠，平靜如鏡的湖面與拱橋，是縱谷裡最洗滌心靈的角落。',
        descriptionEn: 'A hidden pearl in Guangfu, Jili Lake offers serene waters and a picturesque bridge in the valley.',
        price: 0,
        address: '花蓮縣光復鄉',
        rating: 4.8,
        lat: 23.6705,
        lng: 121.4111,
        region: 'hualien',
        authorId: 'c-tw4',
        openingHours: '24H',
        tags: ['自然', '洗滌心靈'],
        insiderTip: {
            teaser: '縱谷最美的鏡面湖泊',
            teaserEn: 'The most beautiful mirror lake in the valley.',
            full: {
                story: '這裡曾經是儲木池，現在是當地的秘密公園。午後的雲霧壓低在山巒間，湖面的倒影會讓你忘記時間。建議沿著環潭步道走一圈。',
                storyEn: 'Formerly a log pond, now a secret park. The mirror reflection here is breathtaking.',
                exactLocation: '光復糖廠往南走5分鐘車程',
                mustTry: '在拱橋前等夕陽倒影',
                avoid: '小黑蚊很多，請做足防護',
                bestTime: '15:30 - 17:00'
            }
        }
    },
    {
        id: 'tw-h1-ext',
        title: '吉利潭',
        titleEn: 'Jili Lake',
        type: 'attraction',
        duration: '1小時',
        image: '💧',
        description: '文青必訪的靜謐之境，攝影構圖極佳。',
        descriptionEn: 'A tranquil spot for culture lovers, perfect for architectural photography.',
        price: 0,
        address: '花蓮縣光復鄉',
        rating: 4.7,
        lat: 23.6705,
        lng: 121.4111,
        region: 'hualien',
        authorId: 'c-tw1',
        openingHours: '24H',
        tags: ['文青', '攝影'],
        insiderTip: {
            teaser: '中式拱橋與自然山景的絕佳構圖',
            teaserEn: 'Perfect composition of Chinese bridge and mountains.',
            full: {
                story: '從台北下來，這裡的安靜程度讓人驚艷。紅瓦拱橋與後方的深綠山色，非常有經典電影的畫面感。',
                storyEn: 'The silence here is stunning. The red bridge with dark green mountains feels like a movie scene.',
                exactLocation: '光復鄉吉利路',
                mustTry: '帶本喜歡的書，在木棧道上坐一會',
                avoid: '中午太曬，遮蔽物較少',
                bestTime: '08:00 晨霧尚未散去時'
            }
        }
    },
    {
        id: 'tw-h1-v3',
        title: '吉利潭',
        titleEn: 'Jili Lake',
        type: 'attraction',
        duration: '1.5小時',
        image: '💧',
        description: '食客眼中的吉利潭，周邊隱藏的在地小吃才是重點。',
        descriptionEn: 'Foodie\'s view of Jili Lake - the local snacks around it are the real stars.',
        rating: 4.6,
        price: 0,
        address: '花蓮縣光復鄉',
        lat: 23.6705,
        lng: 121.4111,
        region: 'hualien',
        authorId: 'c-tw6',
        openingHours: '09:00-17:00',
        tags: ['美食', '在地'],
        insiderTip: {
            teaser: '逛完潭水必買的在地美味',
            teaserEn: 'Must-buy local snacks after the walk.',
            full: {
                story: '來吉利潭除了看風景，一定要順道回家附近的「光復糖廠」吃支冰淇淋，或是找找附近只有在地人才知道的炸雞攤。',
                storyEn: 'After Jili Lake, visit Guangfu Sugar Factory for ice cream or find local fried chicken stalls.',
                exactLocation: '光復鄉中山路二段',
                mustTry: '糖廠紅豆冰棒',
                avoid: '太晚來攤販都收光了',
                bestTime: '15:30 點心時間'
            }
        }
    },
    {
        id: 'hl-a2',
        title: '四八高地',
        titleEn: 'Siba Heights',
        type: 'attraction',
        duration: '1小時',
        image: '🏔️',
        description: '七星潭旁海拔48公尺的制高點，月牙灣全景 + 戰備坑道探險。',
        descriptionEn: 'Hilltop next to Qixingtan. Panoramic crescent bay views + military tunnel adventure.',
        price: 0,
        address: '花蓮縣花蓮市海岸路',
        rating: 4.7,
        lat: 24.0351,
        lng: 121.6224,
        region: 'hualien',
        authorId: 'c-tw4',
        openingHours: '全天',
        tags: ['景觀', '秘境'],
        insiderTip: {
            teaser: '比七星潭更高、更美、更少人的觀景點',
            teaserEn: 'Higher, more beautiful, and less crowded than Qixingtan',
            full: {
                story: '大家都擠在七星潭海灘上，但往上走 10 分鐘就到四八高地，可以把整個月牙灣盡收眼底。附近還有曾經的軍事戰備坑道可以探險（免費），裡面有冷戰時期的遺跡。',
                exactLocation: '七星潭往花蓮機場方向，路邊有小路上去',
                mustTry: '在制高點拍月牙灣全景照',
                avoid: '風大記得帶外套',
                bestTime: '日出時分最壯觀'
            }
        }
    },
    {
        id: 'hl-c1',
        title: '海碉堡',
        titleEn: 'Hai Diaobao Café',
        type: 'food',
        duration: '1.5小時',
        image: '☕',
        description: '出海口的隱密咖啡基地，壯麗海景 + 復古原木風。',
        descriptionEn: 'Hidden café at a river mouth. Stunning sea views + retro wood interior.',
        price: 200,
        address: '花蓮市',
        rating: 4.7,
        lat: 23.9800,
        lng: 121.6100,
        region: 'hualien',
        authorId: 'c-tw4',
        openingHours: '10:00-18:00',
        tags: ['咖啡', '海景'],
        insiderTip: {
            teaser: '出海口的隱密咖啡秘密基地',
            teaserEn: 'A secret café base at the river mouth',
            full: {
                story: '白牆配原木色的溫暖基調，露天座位能邊吹海風邊看花蓮市景。非常隱密，連導航都不一定找得到，要沿著堤防走才會發現入口。',
                exactLocation: '花蓮出海口附近，沿堤防步行',
                mustTry: '坐露天座位點一杯手沖',
                avoid: '下雨天露天區關閉',
                bestTime: '下午 15:00-17:00'
            }
        }
    },
    // === HOTEL ===
    {
        id: 'hl-h1',
        title: '煙波花蓮太魯閣',
        titleEn: 'Lakeshore Hotel Taroko',
        type: 'hotel' as const,
        duration: '0',
        image: '🏨',
        description: '太魯閣入口處的度假飯店，無邊際泳池望向中央山脈。',
        descriptionEn: 'Resort hotel at Taroko entrance, infinity pool facing Central Mountain Range.',
        price: 4500,
        address: '花蓮縣秀林鄉',
        rating: 4.7,
        lat: 24.1560,
        lng: 121.6210,
        region: 'hualien',
        authorId: 'c-tw4',
        tags: ['住宿', '度假'],
        insiderTip: {
            teaser: '花蓮最美無邊際泳池飯店',
            teaserEn: 'Most beautiful infinity pool hotel in Hualien',
            full: {
                story: '泳池直接面向中央山脈，日出時的景色令人屏息。房間寬敞，每間都有陽台。建議傍晚到頂樓酒吧看夕陽。',
                exactLocation: '太魯閣國家公園入口處',
                mustTry: '頂樓酒吧看夕陽 + 無邊際泳池',
                avoid: '旺季需提前一個月訂房',
                bestTime: '清晨泳池看日出'
            }
        }
    },
];

// ── Taichung 台中 ────────────────────────────────────────

export const TAICHUNG_ASSETS: TravelItem[] = [
    // === FOOD (Michelin & Hidden Gems) ===
    {
        id: 'tc-f1',
        title: 'MINIMAL',
        titleEn: 'MINIMAL Ice Cream',
        type: 'food',
        duration: '2小時',
        image: '⭐',
        description: '2024米其林一星⭐ 全球首間米其林星級冰淇淋餐廳！七道冰品 tasting menu。',
        descriptionEn: '2024 Michelin 1-star ⭐ World\'s first Michelin-starred ice cream restaurant! 7-course ice cream tasting menu.',
        price: 1800,
        address: '台中市西區',
        rating: 4.9,
        lat: 24.1427,
        lng: 120.6651,
        region: 'taichung',
        authorId: 'c-tw3',
        openingHours: '需預約',
        tags: ['🌟米其林', '冰淇淋', '國際得獎'],
        insiderTip: {
            teaser: '🌟 全球唯一米其林星級冰淇淋，需提前2週預約',
            teaserEn: '🌟 World\'s only Michelin-starred ice cream, book 2 weeks ahead',
            full: {
                story: '2023 年入選必比登，2024 年直接跳升米其林一星，震驚全球美食界。主廚將冰淇淋當料理主角，用七道冰品闡述當季主題。每一道都是藝術品。坐吧台位可以近距離看主廚現場製作，是最佳座位。',
                storyEn: 'From Bib Gourmand 2023 to 1 Michelin star 2024, shocking the food world. 7-course ice cream tasting with seasonal themes.',
                exactLocation: '台中西區（需預約，確認後提供地址）',
                mustTry: '吧台座位 + 七道套餐 NT$1,800',
                avoid: '不要臨時去，100% 預約制',
                bestTime: '提前 2 週線上預約'
            }
        }
    },
    {
        id: 'tc-f2',
        title: '裡小樓',
        titleEn: 'Li Xiao Lou',
        type: 'food',
        duration: '1.5小時',
        image: '🏆',
        description: '2024米其林必比登推薦！藏在逢甲無尾巷底的台菜小館。',
        descriptionEn: '2024 Michelin Bib Gourmand! Hidden Taiwanese cuisine at the end of a dead-end alley near Feng Chia.',
        price: 500,
        address: '台中市西屯區逢甲附近',
        rating: 4.7,
        lat: 24.1790,
        lng: 120.6454,
        region: 'taichung',
        authorId: 'c-tw3',
        openingHours: '11:30-14:00, 17:30-21:00',
        tags: ['🌟米其林', '台菜'],
        insiderTip: {
            teaser: '逢甲無尾巷底的米其林秘密台菜',
            teaserEn: 'Michelin-secret Taiwanese cuisine at the end of a Feng Chia dead-end alley',
            full: {
                story: '走到巷子最底端，以為沒路了才會看到的台菜小館。不要看菜單點，直接跟老闆說「今天有什麼推薦的」才是內行吃法。每天的食材不同，老闆會根據當天市場的狀況調整菜色。',
                exactLocation: '逢甲附近某無尾巷底端',
                mustTry: '跟老闆說「看今天有什麼」',
                avoid: '不要假日去，排隊很長',
                bestTime: '平日 11:30 開門就到'
            }
        }
    },
    {
        id: 'tc-f3',
        title: '繡球麵店',
        titleEn: 'Xiuqiu Noodle Shop',
        type: 'food',
        duration: '1小時',
        image: '🍜',
        description: '勤美巷弄內一週只開3天的眷村麵店，充滿早期眷村麵店的懷舊氛圍。',
        descriptionEn: 'Vintage military village noodle shop open only 3 days/week near CMP Block.',
        price: 150,
        address: '台中市西區勤美商圈巷內',
        rating: 4.5,
        lat: 24.1470,
        lng: 120.6636,
        region: 'taichung',
        authorId: 'c-tw3',
        openingHours: '週三、五、日 11:00-14:00',
        tags: ['麵食', '限時營業'],
        insiderTip: {
            teaser: '一週只開 3 天的眷村秘密麵店',
            teaserEn: 'Military village noodle shop open only 3 days a week',
            full: {
                story: '老闆堅持一週只做三天，其他時間去市場挑菜和準備。麵條是手工現做，牛肉湯頭要熬 8 小時。坐在充滿舊時光的店裡吃麵，彷彿回到 1970 年代的台灣。',
                exactLocation: '勤美誠品商圈巷弄內',
                mustTry: '手工牛肉麵 + 滷味拼盤',
                avoid: '只有週三、五、日才開！',
                bestTime: '11:00 開門就進去'
            }
        }
    },
    // === COFFEE / OLD HOUSES ===
    {
        id: 'tc-c1',
        title: '5春',
        titleEn: '5Chun Coffee',
        type: 'food',
        duration: '1.5小時',
        image: '☕',
        description: '國美館附近自家烘焙咖啡廳，武陵農場蘋果做的乳酪蛋糕。',
        descriptionEn: 'Self-roasted café near National Museum. Cheesecake made with Wuling Farm apples.',
        price: 200,
        address: '台中市西區國美館附近',
        rating: 4.7,
        lat: 24.1402,
        lng: 120.6628,
        region: 'taichung',
        authorId: 'c-tw3',
        openingHours: '12:00-18:00',
        tags: ['咖啡', '甜點'],
        insiderTip: {
            teaser: '用武陵農場蘋果做蛋糕的咖啡職人',
            teaserEn: 'A coffee artisan who makes cake with Wuling Farm apples',
            full: {
                story: '老闆自己烘焙咖啡豆，會根據你的喜好推薦不同的單品。招牌「蘋果乳酪蛋糕」用的是武陵農場直送的蘋果，口感輕盈不甜膩。店內只有幾張桌子，非常私密。',
                exactLocation: '國美館附近巷弄內',
                mustTry: '單品手沖 + 蘋果乳酪蛋糕',
                avoid: '座位很少，可能要等',
                bestTime: '平日 13:00-15:00'
            }
        }
    },
    {
        id: 'tc-c2',
        title: '如常。所在',
        titleEn: 'As Usual Place',
        type: 'food',
        duration: '1.5小時',
        image: '🏡',
        description: '五權火車站附近日式老宅咖啡廳，推開門像走入時光凝結的復古年代。',
        descriptionEn: 'Japanese-style old house café near Wuquan Station. Step through the door and time freezes.',
        price: 180,
        address: '台中市南區五權車站附近',
        rating: 4.6,
        lat: 24.1330,
        lng: 120.6670,
        region: 'taichung',
        authorId: 'c-tw3',
        openingHours: '10:00-18:00 (週一休)',
        tags: ['老宅', '咖啡'],
        insiderTip: {
            teaser: '藏在大馬路旁的時光膠囊',
            teaserEn: 'A time capsule hidden off a busy road',
            full: {
                story: '明明在喧囂大街上，推開木門卻像穿越到另一個時空。日式木質調空間溫暖寧靜，後方有陽光灑落的紅磚牆庭院。點一杯手沖坐在庭院裡，可以待一整個下午。',
                exactLocation: '五權火車站步行 5 分鐘',
                mustTry: '坐庭院座位 + 手沖咖啡',
                avoid: '週一公休',
                bestTime: '14:00-16:00 午後光影'
            }
        }
    },
    {
        id: 'tc-c3',
        title: '柯亞 Keya Jam',
        titleEn: 'Keya Jam',
        type: 'food',
        duration: '30分',
        image: '🍯',
        description: '2024英國世界柑橘果醬大賽8金🥇！用台灣在地水果做出世界金獎果醬。',
        descriptionEn: '2024 World Marmalade Awards 8 Golds 🥇! World-champion jam from Taiwan local fruits.',
        price: 350,
        address: '台中市',
        rating: 4.9,
        lat: 24.1500,
        lng: 120.6700,
        region: 'taichung',
        authorId: 'c-tw3',
        openingHours: '11:00-17:00',
        tags: ['🏆國際得獎', '伴手禮'],
        insiderTip: {
            teaser: '🏆 世界果醬大賽 8 金的台灣之光',
            teaserEn: '🏆 Taiwan\'s pride: 8 golds at World Marmalade Awards',
            full: {
                story: '被譽為「果醬女王」的柯亞，用茂谷柑、蜜柑等台灣在地水果做出征服英國評審的果醬。小罐裝非常適合當伴手禮。不只是甜的，有些口味配鹹食（起司、麵包）更好吃。',
                storyEn: 'Known as the "Jam Queen", Keya uses Taiwanese fruits to create jams that impressed British judges. Small jars make great souvenirs.',
                exactLocation: '台中市（可線上訂購）',
                mustTry: '「蜜柑友達」+ 原味吐司',
                avoid: '不是每天都有現場販售，建議先查詢',
                bestTime: '搭配早餐的吐司一起享用'
            }
        }
    },
    // === NATURE ===
    {
        id: 'tc-a1',
        title: '電火圳生態步道',
        titleEn: 'Dianhuozhen Eco Trail',
        type: 'nature',
        duration: '2.5小時',
        image: '🌲',
        description: '石岡隱藏版森林步道，沿八寶圳延伸5公里，平坦易走。',
        descriptionEn: 'Hidden forest trail in Shigang. 5km along Babao Canal. Flat and easy walk.',
        price: 0,
        address: '台中市石岡區',
        rating: 4.6,
        lat: 24.2820,
        lng: 120.7850,
        region: 'taichung',
        authorId: 'c-tw3',
        openingHours: '全天',
        tags: ['步道', '秘境'],
        insiderTip: {
            teaser: '台中在地人私藏的森林秘境步道',
            teaserEn: 'A secret forest trail kept by Taichung locals',
            full: {
                story: '沿著日治時期建造的八寶圳延伸，全程平坦（非常適合帶小孩或長輩）。兩側樹木茂密，夏天走完全不曬。沿途有豐富的生態，運氣好可以看到翠鳥。終點有在地阿嬤賣的手工粉圓冰。',
                exactLocation: '石岡區萬仙街入口',
                mustTry: '終點的手工粉圓冰',
                avoid: '雨天步道濕滑',
                bestTime: '清晨或傍晚'
            }
        }
    },
    // === HOTEL ===
    {
        id: 'tc-h1',
        title: '植光花園酒店',
        titleEn: 'SOF Hotel',
        type: 'hotel' as const,
        duration: '0',
        image: '🏨',
        description: '台中火車站旁廢墟改造的設計酒店，清水模 × 綠植的工業風美學。',
        descriptionEn: 'Ruin-renovated design hotel near Taichung Station. Industrial chic with concrete × plants.',
        price: 2600,
        address: '台中市中區',
        rating: 4.6,
        lat: 24.1370,
        lng: 120.6870,
        region: 'taichung',
        authorId: 'c-tw3',
        tags: ['住宿', '設計旅店', '老建築'],
        insiderTip: {
            teaser: '廢墟重生的台中最潮設計旅店',
            teaserEn: 'Taichung\'s trendiest hotel, reborn from ruins',
            full: {
                story: '原本是一棟即將拆除的老建築，被設計師改造成充滿植物的工業風酒店。大廳挑高三層，陽光從天井灑下來。每間房間風格不同，推薦「森林房」。',
                exactLocation: '台中火車站步行 5 分鐘',
                mustTry: '在大廳的植物叢林裡喝一杯咖啡',
                avoid: '隔音普通，怕吵的選高樓層',
                bestTime: '下午 check-in 後到大廳拍照'
            }
        }
    },
];

// ── Combined Export ──────────────────────────────────────

export const TAIWAN_ASSETS: TravelItem[] = [
    ...TAIPEI_ASSETS,
    ...TAINAN_ASSETS,
    ...HUALIEN_ASSETS,
    ...TAICHUNG_ASSETS,
];
