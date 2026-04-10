import { TravelItem } from '../../../types';

export const TAIWAN_GIFTS: TravelItem[] = [
    {
        id: 'gift-tp-1',
        title: '佳德鳳梨酥',
        titleEn: 'Chia Te Pineapple Cakes',
        marketingTitle: '台北最難排隊的經典',
        marketingTitleEn: 'The Hardest-to-Get Taipei Classic',
        type: 'shopping',
        category: 'food', // [NEW] Category
        image: '🍍',
        coverImage: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800',
        description: '創立於1975年，是台北最具代表性的傳統伴手禮，以其皮薄餡多、不黏牙的道地口味聞名。',
        descriptionEn: 'Founded in 1975, it\'s Taipei\'s most iconic traditional gift, famous for its thin crust and rich, non-sticky filling.',
        address: '台北市松山區南京東路五段88號',
        rating: 4.8,
        region: 'taipei',
        tags: ['經典', '排隊名店', '老字號'],
        insiderTip: {
            teaser: '不要只買原味，蔓越莓口味才是隱藏版王者',
            teaserEn: 'Don\'t just get the original; Cranberry is the hidden king',
            full: {
                story: '佳德的人潮從早到晚都沒斷過。雖然鳳梨酥是經典，但其實他們的「蔓越莓鳳梨酥」曾在伴手禮大賽奪冠，酸甜的層次感更高。',
                storyEn: 'Crowds at Chia Te never stop. While the original is classic, the Cranberry version actually won several awards and offers a more complex flavor profile.',
                exactLocation: '南京東路五段，建議搭捷運到南京三民站',
                exactLocationEn: 'Nanjing E. Rd Sec 5, near Nanjing Sanmin Station',
                mustTry: '蔓越莓鳳梨酥',
                mustTryEn: 'Cranberry Pineapple Cake',
                avoid: '避免週末下午去，人潮會多到排到大馬路上',
                avoidEn: 'Avoid weekend afternoons; queues can spill onto the main road',
                bestTime: '08:00 (剛開門)',
                bestTimeEn: '08:00 (Opening time)'
            }
        }
    },
    {
        id: 'gift-tp-2',
        title: '微熱山丘',
        titleEn: 'SunnyHills',
        marketingTitle: '來自南投的陽光饋贈',
        marketingTitleEn: 'A Sun-Kissed Gift from Nantou',
        type: 'shopping',
        category: 'food', // [NEW] Category
        image: '☀️',
        coverImage: 'https://images.unsplash.com/photo-1582294154867-279c096472f1?auto=format&fit=crop&q=80&w=800',
        description: '堅持使用南投土鳳梨，帶有獨特的酸度與纖維口感，是現代台灣精神的伴手禮代表。',
        descriptionEn: 'Uses authentic Nantou pineapples for a unique acidity and fibrous texture, representing modern Taiwan spirit.',
        address: '台北市民生東路五段36巷4弄1號',
        rating: 4.9,
        region: 'taipei',
        tags: ['土鳳梨', '極簡精品', '文青'],
        insiderTip: {
            teaser: '民生社區店提供「奉茶服務」，坐下來享受一塊餅',
            teaserEn: 'The Minsheng shop offers tea service with a free cake sample',
            full: {
                story: '微熱山丘不僅是鳳梨酥，更是一種慢活體驗。走進民生社區的庭園店面，服務人員會為你端上一杯熱茶與一塊完整的鳳梨酥試吃。',
                storyEn: 'SunnyHills is more than a gift; it\'s a slow-living experience. In the Minsheng garden shop, staff will serve you hot tea and a full cake sample.',
                exactLocation: '民生社區綠意盎然的小巷內',
                exactLocationEn: 'In a quiet, leafy alley of Minsheng Community',
                mustTry: '土鳳梨酥配烏龍茶',
                mustTryEn: 'Native Pineapple Cake with Oolong Tea',
                avoid: '如果怕酸的人，這款可能不適合你',
                avoidEn: 'If you dislike acidity, this might not be for you',
                bestTime: '15:00',
                bestTimeEn: '15:00'
            }
        }
    },
    {
        id: 'gift-tc-1',
        title: '太陽堂老店',
        titleEn: 'Traditional Sun Cakes',
        marketingTitle: '台中的靈魂甜點',
        marketingTitleEn: 'Taichung\'s Soul Dessert',
        type: 'shopping',
        category: 'food', // [NEW] Category
        image: '🥨',
        coverImage: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=800',
        description: '台中的太陽餅以麥芽糖為餡，多層次的外皮入口即化，是中部最著名的文化伴手禮。',
        descriptionEn: 'Taichung\'s sun cakes feature a maltose filling and melt-in-your-mouth pastry layers.',
        address: '台中市中區自由路二段25號',
        rating: 4.7,
        region: 'taichung',
        tags: ['台中限定', '傳統技藝', '經典回憶'],
        insiderTip: {
            teaser: '自由路是「太陽餅戰區」，認明藍色招牌的老店',
            teaserEn: 'Ziyou Road is a "Sun Cake War Zone"; look for the blue sign',
            full: {
                story: '在台中自由路上有數十間太陽餅店，但真正傳承古法的老店外皮特別酥脆。建議吃的時候先用手托著，以免酥皮掉滿地。',
                storyEn: 'Dozens of shops line Ziyou Rd, but the true keepers of the old method have exceptionally crispy crusts. Support carefully with your hand while eating!',
                exactLocation: '台中火車站附近自由路',
                exactLocationEn: 'Ziyou Rd near Taichung Station',
                mustTry: '原味麥芽太陽餅',
                mustTryEn: 'Original Maltose Sun Cake',
                avoid: '別買車站內隨處可見的廉價代工版',
                avoidEn: 'Don\'t buy the generic mass-produced versions in the station',
                bestTime: '11:00',
                bestTimeEn: '11:00'
            }
        }
    },
    {
        id: 'gift-tn-1',
        title: '合成帆布行',
        titleEn: 'Manual Canvas Bags',
        marketingTitle: '府城的溫潤手作',
        marketingTitleEn: 'Handmade Warmth from Tainan',
        type: 'shopping',
        category: 'lifestyle', // [NEW] Category
        image: '🎒',
        coverImage: 'https://images.unsplash.com/photo-1544816153-16ad4d74ff5c?auto=format&fit=crop&q=80&w=800',
        description: '台南半世紀以來守護的帆布工藝，堅持傳統裁縫與紮實質地，深受文青與職人喜愛。',
        descriptionEn: 'Preserving canvas craftsmanship for half a century, known for traditional tailoring and durable texture.',
        address: '台南市中西區中山路121號',
        rating: 4.9,
        region: 'tainan',
        tags: ['職人手作', '台南之光', '永續時尚'],
        insiderTip: {
            teaser: '基本款飲料提袋是最實用的在地紀念品',
            teaserEn: 'The basic cup holster is the most practical local souvenir',
            full: {
                story: '比起連鎖店，合成的帆布包多了一種人的溫度。這裡曾經是製作學生書包的老店，現在轉型做簡約包款。每個包包都是在店內現場裁縫完成。',
                storyEn: 'Unlike chain stores, Ho-Sheng bags feel warmer. Once a maker of school bags, it now creates minimalist designs. Every piece is sewn right in the shop.',
                exactLocation: '中山路靠近民生綠園',
                exactLocationEn: 'Zhongshan Rd near Minsheng Green Park',
                mustTry: '經典米色手提袋',
                mustTryEn: 'Classic Beige Tote Bag',
                avoid: '熱門款常缺貨，看到喜歡的就下手',
                avoidEn: 'Popular items sell out fast; buy it when you see it',
                bestTime: '14:00',
                bestTimeEn: '14:00'
            }
        }
    },
    {
        id: 'gift-tp-3',
        title: '林華泰茶行',
        titleEn: 'Lin Hua Tai Tea',
        marketingTitle: '百年傳承的台灣茶香',
        marketingTitleEn: 'Centenary Taiwanese Tea',
        type: 'shopping',
        category: 'drink', // [NEW] Category
        image: '🍵',
        coverImage: 'https://images.unsplash.com/photo-1576092762791-dd9e2220abd4?auto=format&fit=crop&q=80&w=800',
        description: '台北最古老的茶行之一，堅持採用最傳統的炭焙技術，提供頂級的高山烏龍與東方美人茶。',
        descriptionEn: 'One of the oldest tea shops in Taipei, preserving traditional charcoal roasting for top-tier Oolong and Oriental Beauty tea.',
        address: '台北市大同區重慶北路二段193號',
        rating: 4.9,
        region: 'taipei',
        tags: ['老字號', '頂級茶葉', '傳統文化']
    }
];
