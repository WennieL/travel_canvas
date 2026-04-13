import { TravelItem } from '../../../types';

export const HUALIEN_ASSETS: TravelItem[] = [
    {
        id: 'tw-h1',
        title: '吉利潭',
        titleEn: 'Jili Lake',
        type: 'attraction',
        duration: '2小時',
        image: '💧',
        coverImage: 'https://images.unsplash.com/photo-1656746792552-c1eda28136d3?auto=format&fit=crop&q=80&w=800',
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
        themeColor: '#008080',
        expertStories: [
            {
                id: 'must-do',
                label: '必逛推薦',
                labelEn: 'Must Visit',
                summary: '環潭步道的倒影視角',
                summaryEn: 'Mirror Reflection Walk',
                story: '吉利潭的湖泊非常平靜。沿著步道走到對面，可以拍到拱橋與後方山脈完美的倒影，是縱谷最美的鏡面視角。',
                storyEn: 'Jili Lake is incredibly calm. Walk to the opposite side to capture the perfect reflection of the bridge and mountains - the best mirror view in the valley.'
            },
            {
                id: 'artisan',
                label: '在地風景',
                labelEn: 'Local View',
                summary: '與山稜線交融的雲霧',
                summaryEn: 'Mist Merging with Ridges',
                story: '光復鄉的下午常有山嵐。看著雲霧壓在中央山脈的稜線上，那是帶有詩意的職人視角。',
                storyEn: 'Afternoons in Guangfu often have mountain mist. Watching the clouds press against the Central Range ridges is a poetic view.'
            },
            {
                id: 'trap',
                label: '小蟲誤區',
                labelEn: 'Insect Trap',
                summary: '防小黑蚊不可或缺',
                summaryEn: 'Midge Protection Required',
                story: '花蓮山區的小黑蚊（台灣蛺蠓）非常強悍。一定要噴含 DEET 的防蚊液，否則五分鐘內就會滿腿包。',
                storyEn: 'Hualien midges are fierce. Use DEET repellent, or your legs will be covered in itchy bumps within 5 minutes.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '附近的糖廠懷舊冰淇淋',
                summaryEn: 'Retro Sugar Factory Ice Cream',
                story: '逛完吉利潭，內行人會順道去光復糖廠買支紅豆冰。在日式宿舍群下吃冰，是花蓮最對味的慢活組合。',
                storyEn: 'After Jili Lake, pros head to Guangfu Sugar Factory for red bean ice. Eating ice among Japanese dorms is Hualien\'s best slow-living combo.'
            }
        ],
        insiderTip: {
            teaser: '縱谷最美的鏡面湖泊',
            teaserEn: 'The most beautiful mirror lake in the valley.',
            full: {
                story: '這裡曾經是儲木池，現在是當地的秘密公園。午後的雲霧壓低在山巒間，湖面的倒影會讓你忘記時間。建議沿著環潭步道走一圈。',
                storyEn: 'Formerly a log pond, now a secret park. The mirror reflection here is breathtaking as mist clings to the mountains. A walk around the lake is highly recommended.',
                exactLocation: '光復糖廠往南走5分鐘車程',
                exactLocationEn: '5-min drive south from Guangfu Sugar Factory',
                mustTry: '在拱橋前等夕陽倒影',
                mustTryEn: 'Waiting for the sunset reflection by the bridge',
                avoid: '小黑蚊很多，請做足防護',
                avoidEn: 'Beware of midges; use strong insect repellent',
                bestTime: '15:30 - 17:00',
                bestTimeEn: '15:30 - 17:00'
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
        coverImage: 'https://images.unsplash.com/photo-1656746792552-c1eda28136d3?auto=format&fit=crop&q=80&w=800',
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
        themeColor: '#16A085',
        expertStories: [
            {
                id: 'must-do',
                label: '必看推薦',
                labelEn: 'Must See',
                summary: '拱橋與倒影的幾何對稱',
                summaryEn: 'Symmetry of Bridge & Reflection',
                story: '文青版吉利潭最迷人的就是那座中式拱橋。在光影交錯的時刻，湖面上的倒影與實景構成完美的對稱圓，是構圖愛好者的天堂。',
                storyEn: 'The most charming part of the "indie" Jili Lake is the Chinese bridge. When light and shadow hit, the reflection forms a perfect circle with the bridge - a composition lover\'s dream.'
            },
            {
                id: 'artisan',
                label: '美學風景',
                labelEn: 'Artisan View',
                summary: '觀察湖畔老樹的姿態',
                summaryEn: 'Ancient Lakeside Trees',
                story: '湖邊有幾棵蒼勁的老樹，枝椏低垂至水面。這些天然的線條為畫面增添了許多故事感與東方美學的韻味。',
                storyEn: 'The lakeside is dotted with gnarled old trees, their branches brushing the water. These natural lines add narrative depth and Eastern aesthetic charm to your shots.'
            },
            {
                id: 'trap',
                label: '防曬提示',
                labelEn: 'Sun Protection',
                summary: '空曠處紫外線極強',
                summaryEn: 'Intense UV in Open Areas',
                story: '這裡為了保留視野開闊，遮陰處並不多。拍攝時請務必做好防曬，以免在沉浸美境的同時不自覺被曬傷。',
                storyEn: 'To keep the views open, there\'s little shade. Always use sun protection while shooting; the UV is fierce even if it feels cool.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '清晨限定的薄霧質感',
                summaryEn: 'Morning Mist Texture',
                story: '早起的人有福了。如果是清晨八點前抵達，湖面常有一層薄薄的水氣，那種空靈神祕的質感是後期修圖做不出來的。',
                storyEn: 'Early birds are rewarded. Arrive before 8 AM for the natural morning mist - an ethereal, mysterious texture that no photo editing can replicate.'
            }
        ],
        insiderTip: {
            teaser: '中式拱橋與自然山景的絕佳構圖',
            teaserEn: 'Perfect composition of Chinese bridge and mountains.',
            full: {
                story: '從台北下來，這裡的安靜程度讓人驚艷。紅瓦拱橋與後方的深綠山色，非常有經典電影的畫面感。',
                storyEn: 'The silence here is stunning, a world away from Taipei. The red bridge with dark green mountains feels like a scene from a classic movie.',
                exactLocation: '光復鄉吉利路',
                exactLocationEn: 'Jili Rd, Guangfu Township',
                mustTry: '帶本喜歡的書，在木棧道上坐一會',
                mustTryEn: 'Bring a book and sit on the wooden boardwalk for a while',
                avoid: '中午太曬，遮蔽物較少',
                avoidEn: 'Avoid noon; there\'s little shade',
                bestTime: '08:00 晨霧尚未散去時',
                bestTimeEn: '08:00 when the morning mist still lingers'
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
        coverImage: 'https://images.unsplash.com/photo-1656746792552-c1eda28136d3?auto=format&fit=crop&q=80&w=800',
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
        themeColor: '#E67E22',
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃推薦',
                labelEn: 'Must Eat',
                summary: '光復糖廠紅豆鮮乳冰',
                summaryEn: 'Red Bean Milk Ice Cream',
                story: '美食版的主角其實是吉利潭外的「光復糖廠」。那一球綿密的紅豆配上濃郁鮮乳冰，是縱谷公路上最經典的甜點記憶。',
                storyEn: 'The real food star is the nearby "Guangfu Sugar Factory." A scoop of mesh red beans on rich milk ice cream is the classic valley highway treat.'
            },
            {
                id: 'artisan',
                label: '職人風景',
                labelEn: 'Artisan View',
                summary: '觀察糖廠老煙囪的歷史感',
                summaryEn: 'Historical Sugar Chimney',
                story: '吃冰時別忘了抬頭看。巨大的紅磚煙囪紀錄了台灣製糖業的輝煌，那種工業與生活交織的氛圍非常獨特。',
                storyEn: 'Don\'t forget to look up while eating. The giant brick chimney records the glory of Taiwan\'s sugar industry - a unique blend of industry and life.'
            },
            {
                id: 'trap',
                label: '時間預警',
                labelEn: 'Timing Warning',
                summary: '熱門冰品傍晚可能缺貨',
                summaryEn: 'Popular Flavors Sell Out',
                story: '如果週末太晚來，最受歡迎的冰淇淋口味可能會售罄。建議下午三點左右抵達，還能趕上現炸的在地小點心。',
                storyEn: 'On weekends, top ice cream flavors sell out fast. Aim for 3 PM - you might also catch some fresh local snacks.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '老街上的隱藏版炸雞攤',
                summaryEn: 'Secret Old Street Fried Chicken',
                story: '除了糖廠，光復老街上偶爾出沒的流動炸雞攤是當地人的宵夜首選。皮脆肉多汁，絕對值得你多繞一段路。',
                storyEn: 'Beyond the factory, the mobile fried chicken stalls on Guangfu Old Street are the local midnight favorite. Juicy and crispy - worth the detour.'
            }
        ],
        insiderTip: {
            teaser: '逛完潭水必買的在地美味',
            teaserEn: 'Must-buy local snacks after the walk.',
            full: {
                story: '來吉利潭除了看風景，一定要順道回家附近的「光復糖廠」吃支冰淇淋，或是找找附近只有在地人才知道的炸雞攤。',
                storyEn: 'Besides the lake views, visit the nearby "Guangfu Sugar Factory" for ice cream or hunt for the local secret fried chicken stalls.',
                exactLocation: '光復鄉中山路二段',
                exactLocationEn: 'Sec. 2, Zhongshan Rd, Guangfu Township',
                mustTry: '糖廠紅豆冰棒',
                mustTryEn: 'Red bean ice pops at the Sugar Factory',
                avoid: '太晚來攤販都收光了',
                avoidEn: 'Arriving too late—vendors close early',
                bestTime: '15:30 點心時間',
                bestTimeEn: '15:30 snack time'
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
        coverImage: 'https://images.unsplash.com/photo-1571242352227-21397b203c62?auto=format&fit=crop&q=80&w=800',
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
        themeColor: '#2C3E50',
        expertStories: [
            {
                id: 'must-do',
                label: '必看推薦',
                labelEn: 'Must See',
                summary: '月牙灣的最美完美弧線',
                summaryEn: 'Perfect Crescent Arc',
                story: '從四八高地俯瞰，七星潭的弧線看起來像一牙明月。這是在海灘平面感受不到的地理震憾感。',
                storyEn: 'From Siba Heights, Qixingtan\'s curve looks like a crescent moon. This geographic impact is lost when standing on the beach itself.'
            },
            {
                id: 'artisan',
                label: '探險風景',
                labelEn: 'Adventure View',
                summary: '日治時期的戰備坑道',
                summaryEn: 'Colonial Era Tunnels',
                story: '高地下方藏著神秘的坑道入口。走進窄小的地下空間，感受戰時的壓抑與現代和平的對比，是歷史愛好者的天堂。',
                storyEn: 'A secret tunnel entrance hides below. Enter the narrow underground to feel the contrast between wartime tension and modern peace - a history buff\'s haven.'
            },
            {
                id: 'trap',
                label: '強風提醒',
                labelEn: 'Windy Reminder',
                summary: '帽子與手機要拿穩',
                summaryEn: 'Hold Your Hat & Phone',
                story: '這裡的強勁海風常讓人猝不及防。拍照時一定要拿穩手機，且不建議戴寬邊遮陽帽，以免飛走。',
                storyEn: 'Sudden sea breezes can catch you off-guard. Grip your phone tight when photographing, and skip the wide hats - they will fly away.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '草地上的觀星秘境',
                summaryEn: 'Secret Stargazing Lawn',
                story: '夜晚的四八高地光害極少。躺在草地上看著銀河與遠處的海浪聲，那是比白天的打卡點更迷人的體驗。',
                storyEn: 'Night at Siba Heights has minimal light pollution. Lying on the grass with the Milky Way and distant waves is even more magical than daytime photos.'
            }
        ],
        insiderTip: {
            teaser: '比七星潭更高、更美、更少人的觀景點',
            teaserEn: 'Higher, more beautiful, and less crowded than Qixingtan',
            full: {
                story: '大家都擠在七星潭海灘上，但往上走 10 分鐘就到四八高地，可以把整個月牙灣盡收眼底。附近還有曾經的軍事戰備坑道可以探險（免費），裡面有冷戰時期的遺跡。',
                storyEn: 'While everyone crowds the beach, a 10-min walk to Siba Heights offers a panoramic view of the crescent bay. Nearby Cold War era military tunnels are also open for free exploration.',
                exactLocation: '七星潭往花蓮機場方向，路邊有小路上去',
                exactLocationEn: 'Path uphill from Qixingtan towards Hualien Airport',
                mustTry: '在制高點拍月牙灣全景照',
                mustTryEn: 'Take a panoramic shot of the crescent bay from the peak',
                avoid: '風大記得帶外套',
                avoidEn: 'Bring a jacket; it gets very windy',
                bestTime: '日出時分最壯觀',
                bestTimeEn: 'Sunrise for the most magnificent view'
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
        coverImage: 'https://images.unsplash.com/photo-1544787210-2213d44ad53e?auto=format&fit=crop&q=80&w=800',
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
        themeColor: '#17202A',
        expertStories: [
            {
                id: 'must-eat',
                label: '必喝推薦',
                labelEn: 'Must Drink',
                summary: '手沖精品咖啡 + 海風',
                summaryEn: 'Hand Drip + Sea Breeze',
                story: '這裡的環境太適合手沖。看著咖啡師專業的注水動作，配上遠處起伏的太平洋海浪聲，這杯咖啡會變得特別甘醇。',
                storyEn: 'The environment here is perfect for hand-drip. Watching the barista\'s pour against the rhythmic Pacific waves makes the coffee taste extra smooth.'
            },
            {
                id: 'artisan',
                label: '空間美學',
                labelEn: 'Artisan View',
                summary: '軍事碉堡改建的粗獷美',
                summaryEn: 'Rugged Bunker Conversion',
                story: '海碉堡保留了部分硬質的混凝土牆角，卻搭配了溫柔的原木家具。這種「鋼中帶柔」的衝突美感是其魅力所在。',
                storyEn: 'Hai Diaobao keeps some raw concrete corners but pairs them with soft wood furniture. This "iron in velvet" contrast is its core charm.'
            },
            {
                id: 'trap',
                label: '位置誤區',
                labelEn: 'Location Trap',
                summary: '入口處極度隱蔽不易找',
                summaryEn: 'Extremely Hidden Entrance',
                story: '這真的是花蓮的秘密基地。路口沒有大型看板，需沿著河堤走一段路才能看到入口，建議步行時放慢腳步觀察。',
                storyEn: 'A true Hualien secret. No big signs; you must walk along the river bank to find it. Walk slowly and keep your eyes peeled.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '傍晚看花蓮港燈火點起',
                summaryEn: 'Watching Harbor Lights Glimmer',
                story: '大多數人下午就離開，但傍晚留在窗邊，能看到花蓮港的燈火一盞盞亮起，那是港都特有的、帶點憂鬱感的浪漫。',
                storyEn: 'Most leave by late afternoon, but staying by the window for dusk reveals the harbor lights flickering on - a romantic, slightly moody harbor vibe.'
            }
        ],
        insiderTip: {
            teaser: '出海口的隱密咖啡秘密基地',
            teaserEn: 'A secret café base at the river mouth',
            full: {
                story: '白牆配原木色的溫暖基調，露天座位能邊吹海風邊看花蓮市景。非常隱密，連導航都不一定找得到，要沿著堤防走才會發現入口。',
                storyEn: 'Warm tones with white walls and raw wood. The outdoor seating offers sea breezes and Hualien city views. It\'s so hidden that GPS often fails; follow the embankment to find the entrance.',
                exactLocation: '花蓮出海口附近，沿堤防步行',
                exactLocationEn: 'River mouth area, walk along the embankment',
                mustTry: '坐露天座位點一杯手沖',
                mustTryEn: 'Order a hand-drip coffee and sit outdoors',
                avoid: '下雨天露天區關閉',
                avoidEn: 'Outdoor area closes on rainy days',
                bestTime: '下午 15:00-17:00',
                bestTimeEn: '15:00 - 17:00'
            }
        }
    },
    {
        id: 'hl-a4',
        title: '太魯閣燕子口',
        titleEn: 'Taroko Swallow Grotto',
        type: 'attraction',
        duration: '1.5小時',
        image: '🏞️',
        coverImage: 'https://images.unsplash.com/photo-1542662565-7e4b66bae529?auto=format&fit=crop&q=80&w=800',
        description: '太魯閣最震撼的峽谷奇觀，親身感受立霧溪切穿大理石巨岩的神工。',
        descriptionEn: 'The most stunning canyon in Taroko, where the Liwu River carves through massive marble cliffs.',
        price: 0,
        address: '花蓮縣秀林鄉太魯閣國家公園',
        rating: 4.9,
        lat: 24.1700,
        lng: 121.5700,
        region: 'hualien',
        authorId: 'c-tw4',
        openingHours: '全天 (受氣候影響)',
        tags: ['自然', '震撼', '必吃必玩'],
        themeColor: '#7F8C8D',
        expertStories: [
            {
                id: 'must-do',
                label: '必看推薦',
                labelEn: 'Must See',
                summary: '立霧溪切割大理石的壺穴',
                summaryEn: 'Potholes Carved in Marble',
                story: '仔細看峽谷對面的岩壁。幾千年的沖刷讓大理石形成了如蜂巢般的洞穴，那是時間在岩石上留下的刻痕。',
                storyEn: 'Look at the opposite cliffs. Millennia of erosion have formed honeycomb-like potholes in the marble - time\'s marks on stones.'
            },
            {
                id: 'artisan',
                label: '職人精神',
                labelEn: 'Artisanship',
                summary: '人工鑿出的艱難隧道',
                summaryEn: 'Hand-Carved Tunnel Feats',
                story: '你腳下的步道是當年中部橫貫公路的舊路。這些手工穿過堅硬大理石的痕跡，展現了人類意志與自然的博弈。',
                storyEn: 'You\'re walking the old Central Cross-Island Highway path. These marks of manual carving through hard marble show human will versus nature.'
            },
            {
                id: 'trap',
                label: '安全誤區',
                labelEn: 'Safety Trap',
                summary: '不戴安全帽會有落石風險',
                summaryEn: 'Helmet-less Falling Rock Risk',
                story: '峽谷地質不穩定。在燕子口步道務必至前方的租借點「免費租借」安全帽，不要為了拍照漂亮而忽視安全。',
                storyEn: 'The canyon geology is unstable. Always get a free rental helmet before entering; don\'t trade safety for a better photo.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '隱藏在巨石間的「印地安人」',
                summaryEn: 'The "Indian Chief" Rock',
                story: '在溪谷下游某個角度看過去，有一顆巨石長得就像帶著羽冠的印地安酋長側面，這是在地人的找驚喜遊戲。',
                storyEn: 'From a specific angle downstream, a massive rock looks like a feathered Indian Chief in profile - a local game of "find the surprise".'
            }
        ],
        insiderTip: {
            teaser: '抬頭看壺穴，低頭聽溪流',
            teaserEn: 'Look up at potholes, listen to the river below',
            full: {
                story: '燕子口的大理石岩壁上有許多圓形的洞穴，那是立霧溪長期沖刷形成的「壺穴」。早年常有燕子在此築巢，因而得名。走在人工鑿出的步道上，你會感覺到人類在自然面前的渺小。',
                storyEn: 'The marble walls at Swallow Grotto are dotted with potholes formed by the Liwu River. Swallows used to nest here, giving it its name. Walking through the hand-carved tunnels, you\'ll feel tiny compared to nature\'s power.',
                exactLocation: '太魯閣國家公園內，需換乘交通工具或步行',
                exactLocationEn: 'Inside Taroko NP; requires transport or walking',
                mustTry: '戴上租借的安全帽，感受峽谷微風',
                mustTryEn: 'Wear a rental helmet and feel the canyon breeze',
                avoid: '大雨或地震後兩週內請不要造訪',
                avoidEn: 'Avoid for 2 weeks after heavy rain or earthquakes',
                bestTime: '10:00 (光影射入峽谷時)',
                bestTimeEn: '10:00 (When light reaches the canyon floor)'
            }
        }
    },
    {
        id: 'hl-f2',
        title: '花蓮淨心素食',
        titleEn: 'Hualien Pure Veg',
        type: 'food',
        duration: '1小時',
        image: '🥬',
        coverImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
        description: '在地人鍾愛的蔬食老店，用花蓮產的有機時蔬做出的溫暖家常味。',
        descriptionEn: 'A local favorite vegetarian spot using organic vegetables from Hualien for warm home-style meals.',
        price: 250,
        address: '花蓮市',
        rating: 4.6,
        lat: 23.9850,
        lng: 121.6050,
        region: 'hualien',
        authorId: 'c-tw4',
        openingHours: '11:00-14:00, 17:00-20:00',
        tags: ['素食友善', '有機食材', '在地'],
        themeColor: '#1D8348',
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃推薦',
                labelEn: 'Must Eat',
                summary: '花蓮在地有機什錦湯麵',
                summaryEn: 'Local Organic Veggie Soup',
                story: '這碗麵喝得出花蓮土地的甘甜。沒有過多化學調味，只有大骨（素式）熬製出的鮮味與現採時蔬的脆度。',
                storyEn: 'This soup tastes of Hualien\'s sweet soil. No MSG, just the natural umami and the crispness of fresh-picked local vegetables.'
            },
            {
                id: 'artisan',
                label: '職人精神',
                labelEn: 'Artisanship',
                summary: '老闆對契作農園的堅持',
                summaryEn: 'Commitment to Contract Farms',
                story: '老闆親自跑遍縱谷各處契作農場，只為了確保上桌的每一片菜葉都是純淨無毒。這份堅持，吃一口就能感受到。',
                storyEn: 'The owner personally visits valley farms to ensure every leaf on your plate is clean and non-toxic. You can taste the dedication in every bite.'
            },
            {
                id: 'trap',
                label: '用餐提醒',
                labelEn: 'Dining Note',
                summary: '下午有休息時段避免空跑',
                summaryEn: 'Avoid the Afternoon Break',
                story: '雖然是在地美食，但店家遵循老派作息，下午兩點至五點是休息時間。請務必規劃好行程，以免向隅。',
                storyEn: 'A local gem following traditional hours: long break from 2 PM to 5 PM. Plan your ride carefully to avoid missing out.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '搭配特製的手工辣椒醬',
                summaryEn: 'Pair with House Handmade Chili',
                story: '如果你喜歡重口味，一定要請老闆給你一點特製辣椒醬。那種帶著發酵豆香的辣度，能瞬間提升整碗麵的層次。',
                storyEn: 'If you like it hot, ask for the house chili sauce. Its fermented bean aroma elevates the entire bowl of noodles instantly.'
            }
        ],
        insiderTip: {
            teaser: '吃出手耕蔬菜的純淨甜味',
            teaserEn: 'Taste the pure sweetness of hand-grown veggies',
            full: {
                story: '這裡用的蔬菜許多是老闆自己跟在地小農契作的，非常新鮮。沒有過多加工素料，吃的是植物本身的味道。對於在旅途中想要「清理腸胃」的人來說是絕佳選擇。',
                storyEn: 'Much of the produce is sourced directly from local small farmers. Very fresh, with minimal processing - just the natural taste of plants. Perfect for a mid-trip detox.',
                exactLocation: '花蓮市中心靜巷',
                exactLocationEn: 'Quiet alley in Hualien city center',
                mustTry: '當季時蔬什錦套餐',
                mustTryEn: 'Seasonal assorted vegetable set',
                avoid: '週末用餐期常客滿，建議準時抵達',
                avoidEn: 'Often full on weekends; arrive on time',
                bestTime: '11:30',
                bestTimeEn: '11:30'
            }
        }
    },
    {
        id: 'hl-f3',
        title: '吉卡樹岸部落廚房',
        titleEn: 'Cikasuan Tribal Kitchen',
        type: 'food',
        duration: '1.5小時',
        image: '🥓',
        coverImage: 'https://images.unsplash.com/photo-1563245332-69214647efdc?auto=format&fit=crop&q=80&w=800',
        description: '深入部落體驗正宗原民料理，鹹肉、小米粽、現採野蔬的大地盛宴。',
        descriptionEn: 'Dive into authentic indigenous cuisine. A feast of salted pork, abai (millet zongzi), and wild veggies.',
        price: 600,
        address: '花蓮縣吉安鄉',
        rating: 4.8,
        lat: 23.9500,
        lng: 121.5800,
        region: 'hualien',
        authorId: 'c-tw4',
        openingHours: '11:30-14:30, 17:30-20:30 (需預約)',
        tags: ['原民料理', '私房菜', '文化體驗'],
        themeColor: '#922B21',
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃推薦',
                labelEn: 'Must Eat',
                summary: '相思木燻製鹹豬肉',
                summaryEn: 'Acacia Smoked Salted Pork',
                story: '絕非市售鹹豬肉可比。用古法醃漬數日，再以相思木低溫慢燻，肉質帶有淡淡的木頭焦香，口感紮實而不油膩。',
                storyEn: 'Nothing like supermarket pork. Cured for days, then slow-smoked with acacia wood for a faint woody aroma and firm, non-greasy texture.'
            },
            {
                id: 'artisan',
                label: '在地風景',
                labelEn: 'Local View',
                summary: '部落長老的野菜日常',
                summaryEn: 'Elder\'s Daily Wild Veg',
                story: '看著主廚阿公阿嬤在後院現摘那些你叫不出名字的野菜。這不僅是一餐，更是一堂關於台灣原住民共生智慧的課程。',
                storyEn: 'Watch the grandparents pick unnamed wild greens from the backyard. This isn\'t just a meal; it\'s a lesson in indigenous co-existence wisdom.'
            },
            {
                id: 'trap',
                label: '預約誤區',
                labelEn: 'Booking Trap',
                summary: '至少提前三天電話預約',
                summaryEn: 'Call at Least 3 Days Ahead',
                story: '部落廚房食材隨季節更替，且需依人數採買。如果沒預約就直接衝過去，他們可能連白飯都沒準備，請務必先聯絡。',
                storyEn: 'Tribal ingredients shift by season and are bought by guest count. Walkins will likely find nothing ready, so always call ahead.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '體驗「手抓小米粽」的樂趣',
                summaryEn: 'Hand-eating Millet Zongzi',
                story: '內行吃法是洗手後直接用手抓食小米粽（Abai）。手心的溫度能帶出小米最純粹的香甜，這是與大地最直接的連結。',
                storyEn: 'The pro way is to hand-eat the Abai (millet zongzi) after washing. Palm warmth releases the purest millet sweetness - a direct link to the earth.'
            }
        ],
        insiderTip: {
            teaser: '這不是餐廳，是阿美族的家',
            teaserEn: 'Not a restaurant, but an Amis home',
            full: {
                story: '主廚是部落長老，堅持用傳統工序製作料理。那道鹹豬肉是用獨門工法醃製，再用相思木煙燻。坐在半露天的竹棚下，聽長老講部落故事，這才叫旅行。',
                storyEn: 'The head chef is a tribal elder, adhering to traditional methods. The salted pork is cured with secret techniques and smoked with acacia wood. Sitting under a bamboo roof, listening to tribal stories - this is travel.',
                exactLocation: '吉安鄉靠近山邊的部落內',
                exactLocationEn: 'Indigenous village near the mountains in Ji\'an',
                mustTry: '鹹豬肉 + 小米酒 (微量)',
                mustTryEn: 'Salted Pork + Millet Wine (small dose)',
                avoid: '蚊蟲較多，建議穿長褲',
                avoidEn: 'Plenty of bugs; wear long pants',
                bestTime: '18:00 (吹山風看星空)',
                bestTimeEn: '18:00 (Mountain breeze & stars)'
            }
        }
    },
    {
        id: 'hl-exp1',
        title: '泰雅手工織布與部落導覽',
        titleEn: 'Atayal Weaving & Tribal Tour',
        type: 'experiential',
        duration: '3小時',
        image: '🧶',
        coverImage: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800',
        description: '走進花蓮泰雅族部落，由長輩親自指導手作織布，感受指尖上的傳承。',
        descriptionEn: 'Visit an Atayal village in Hualien. Learn weaving from elders and feel the heritage through your fingertips.',
        price: 1200,
        address: '花蓮縣',
        rating: 4.9,
        lat: 24.1500,
        lng: 121.6000,
        region: 'hualien',
        authorId: 'c-tw4',
        openingHours: '需預約',
        tags: ['手作', '部落文化', '深度旅遊'],
        themeColor: '#7B241C',
        expertStories: [
            {
                id: 'must-do',
                label: '體驗核心',
                labelEn: 'Core Experience',
                summary: '在經緯之間穿梭家族故事',
                summaryEn: 'Weaving Family Stories',
                story: '織布在泰雅族中是神聖的。在部落奶奶的指導下，親自操作沉重的地機或座機，感受那一條條紅線如何交織成土地的記憶。',
                storyEn: 'Weaving is sacred for the Atayal. Under GMA\'s guidance, operate the heavy loom and feel how red threads interlace into memories of the land.'
            },
            {
                id: 'artisan',
                label: '文化風景',
                labelEn: 'Cultural View',
                summary: '觀察織布上的幾何密碼',
                summaryEn: 'Geometric Codes on Fabric',
                story: '不同家族、不同地區的泰雅織文都有其特徵。細看那些菱角，傳說中那是「祖靈之眼」，代表了先祖的守護與看顧。',
                storyEn: 'Atayal patterns vary by family and region. Look closely at the diamonds - legendary "Ancestral Eyes" representing the protection of ancestors.'
            },
            {
                id: 'trap',
                label: '耐心挑戰',
                labelEn: 'Patience Challenge',
                summary: '這是極耗體力與耐心的過程',
                summaryEn: 'Highly Physical & Patient Task',
                story: '織布不是裝裝樣子，一小塊布可能就需要耗費數小時。如果你只是追求快速打卡，這個深度文化體驗可能不適合你。',
                storyEn: 'This isn\'t just for show; a small piece takes hours. If you’re only after a quick social media post, this deep culture task might not be for you.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '聽長輩口述部落遷徙史',
                summaryEn: 'Oral History of Tribal Migration',
                story: '織布時別忘了跟長輩多聊天。很多故事是書上沒有的，口述的遷徙史才是最有溫度的花蓮深度記憶。',
                storyEn: 'While weaving, chat with the elders. Many unrecorded stories of migration are shared this way - the warmest Hualien memories.'
            }
        ],
        insiderTip: {
            teaser: '織出屬於你的泰雅織紋',
            teaserEn: 'Weave your own Atayal pattern',
            full: {
                story: '泰雅族的圖案都有其意義，通常跟祖靈或土地有關。在長輩的帶領下，你會學會如何拉線、交織。這不只是一件工藝品，是一段與古老靈魂的對話。',
                storyEn: 'Atayal patterns carry meanings related to ancestors or the land. Under the guidance of elders, you\'ll learn to pull and interweave threads. This is not just a craft, but a dialogue with ancient souls.',
                exactLocation: '秀林鄉或萬榮鄉特定部落工作室',
                exactLocationEn: 'Specific tribal workshops in Xiulin or Wanrong',
                mustTry: '親手操作古老的織布機',
                mustTryEn: 'Operate the ancient loom yourself',
                avoid: '不預約直接前往通常會落空',
                avoidEn: 'Direct walk-ins usually find the workshop closed',
                bestTime: '10:00 (光線足夠利於織布)',
                bestTimeEn: '10:00 (Plenty of natural light for weaving)'
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
        coverImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
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
        themeColor: '#2C3E50',
        expertStories: [
            {
                id: 'must-do',
                label: '入住推薦',
                labelEn: 'Stay Perk',
                summary: '無邊際泳池看中央山脈日出',
                summaryEn: 'Sunrise over Range at Infinity Pool',
                story: '這是煙波太魯閣最壯麗的時刻。人浮在無邊際池中，看著金質陽光灑在中央山脈的深綠山嵐上，美得極不真實。',
                storyEn: 'The most magnificent moment at Lakeshore Taroko. Floating in the pool, seeing golden light hit the deep green mists of the Central Range is surreal.'
            },
            {
                id: 'artisan',
                label: '建築風景',
                labelEn: 'Architectural View',
                summary: '如海浪般的建築弧形線條',
                summaryEn: 'Wave-like Architectural Curves',
                story: '飯店外觀與陽台設計巧妙模擬了太平洋的波浪。那種流動感讓這座巨型建築優雅地融入了曼波海灘的自然美景中。',
                storyEn: 'Exterior and balcony designs mimic Pacific waves. This fluid sense allows the massive structure to blend elegantly into the Mambo Beach landscape.'
            },
            {
                id: 'trap',
                label: '訂餐誤區',
                labelEn: 'Dining Trap',
                summary: '周邊生活機能較弱',
                summaryEn: 'Weak Surrounding Amenities',
                story: '飯店位於新城鄉靜謐處，離市中心有一段路。如果不想晚餐跑大老遠，建議預約館內的精緻中式或西式餐廳。',
                storyEn: 'Located in a quiet part of Xincheng, far from downtown. If you don\'t want to drive far for dinner, reserve an on-site restaurant.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '步行即達的曼波沙灘秘境',
                summaryEn: 'Mambo Beach Secret Path',
                story: '飯店後方有一條通往「曼波沙灘」的小徑。比起熱鬧的七星潭，這裡更安靜，特別適合在清晨或傍晚散步沈思。',
                storyEn: 'Behind the hotel is a path to the secret "Mambo Beach." Quiet and perfect for dawn or dusk reflection, away from Qixingtan crowds.'
            }
        ],
        insiderTip: {
            teaser: '花蓮最美無邊際泳池飯店',
            teaserEn: 'Most beautiful infinity pool hotel in Hualien',
            full: {
                story: '泳池直接面向中央山脈，日出時的景色令人屏息。房間寬敞，每間都有陽台。建議傍晚到頂樓酒吧看夕陽。',
                storyEn: 'The pool faces the Central Mountain Range directly, with breathtaking sunrise views. Spacious rooms with private balconies. The rooftop bar is perfect for sunset drinks.',
                exactLocation: '太魯閣國家公園入口處',
                exactLocationEn: 'Entrance to Taroko National Park',
                mustTry: '頂樓酒吧看夕陽 + 無邊際泳池',
                mustTryEn: 'Rooftop bar at sunset + infinity pool',
                avoid: '旺季需提前一個月訂房',
                avoidEn: 'Book 1 month ahead during peak seasons',
                bestTime: '清晨泳池看日出',
                bestTimeEn: 'Sunrise at the pool'
            }
        }
    },
];
