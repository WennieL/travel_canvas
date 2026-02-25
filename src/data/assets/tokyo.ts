import { TravelItem } from '../../types';

export const TOKYO_ASSETS: TravelItem[] = [
    {
        id: 'a1',
        title: '淺草寺',
        titleEn: 'Senso-ji Temple',
        type: 'attraction',
        duration: '2小時',
        image: '⛩️',
        description: '東京最古老的寺院，雷門是必拍景點。',
        descriptionEn: 'Tokyo\'s oldest temple, famous for the Kaminarimon gate.',
        price: 0,
        address: '東京都台東區淺草2-3-1',
        rating: 4.8,
        lat: 35.7147,
        lng: 139.7967,
        region: 'tokyo',
        authorId: 'c1',
        funFact: '建於西元628年',
        openingHours: '06:00-17:00',
        tags: ['必去'],
        insiderTip: {
            teaser: '早起鳥的秘密風景',
            teaserEn: 'Early bird secret view',
            full: {
                story: '清晨 7 點前抵達，仲見世通的鐵捲門彩繪還沒拉上去，是只有早鳥才能看見的浮世繪卷。店家會在繪有江戶時代街景的鐵門上作畫，每間店都不同。另外，這時候可以獨佔雷門前的拍照位置，不用人擠人。',
                storyEn: 'Arrive before 7 AM and you\'ll see the painted shutters of Nakamise-dori before they roll up - a ukiyo-e scene only early birds witness.',
                exactLocation: '從雷門進去左手邊第三家店前，鐵捲門彩繪最精緻',
                mustTry: '仲見世通上的「仲見世 杵屋」的現烤人形燒',
                avoid: '不要在雷門附近買人力車行程，價格灌水嚴重',
                bestTime: '06:00-07:30'
            }
        }
    },
    {
        id: 'a2',
        title: '東京晴空塔',
        titleEn: 'Tokyo Skytree',
        type: 'attraction',
        duration: '2小時',
        image: '🗼',
        description: '日本第一高塔，360度俯瞰東京。',
        descriptionEn: 'Japan\'s tallest tower with 360-degree views.',
        price: 3500,
        address: '東京都墨田區押上1-1-2',
        rating: 4.8,
        lat: 35.7100,
        lng: 139.8107,
        region: 'tokyo',
        authorId: 'c1',
        funFact: '高度634公尺，取諧音「武藏」',
        openingHours: '10:00-21:00',
        tags: ['地標'],
        insiderTip: {
            teaser: '省錢又省時的登塔秘訣',
            teaserEn: 'Save time and money tips',
            full: {
                story: '網路預約比現場買便宜 ¥500，還可以跳過排隊。選擇 Tembo Deck (350m) 就夠了，450m 的 Tembo Galleria 多付 ¥1,000 但視野差不多。隱藏版拍照點：4F 的天望甲板有一小塊玻璃地板區，可以拍到腳下的城市街景。',
                exactLocation: '天望甲板 4F 東北角的玻璃地板區',
                mustTry: '在 340F 的 Skytree Cafe 點「天空軟霜淇淋」，拍照打卡必備',
                avoid: '週末下午 13:00-16:00 人潮最多，要排 1 小時以上',
                bestTime: '10:00-11:00 或 17:00-18:00'
            }
        }
    },
    {
        id: 'a3',
        title: '澀谷十字路口',
        titleEn: 'Shibuya Crossing',
        type: 'attraction',
        duration: '30分',
        image: '🚶',
        description: '世界最繁忙的行人穿越道。',
        descriptionEn: 'The world\'s busiest pedestrian crossing.',
        price: 0,
        address: '東京都澀谷區道玄坂2',
        rating: 4.5,
        lat: 35.6595,
        lng: 139.7005,
        region: 'tokyo',
        authorId: 'c6',
        funFact: '一次最多3000人同時過馬路',
        openingHours: '24H',
        tags: ['必去'],
        insiderTip: {
            teaser: '拍攝十字路口的最佳秘密機位',
            teaserEn: 'Secret photo spots for the crossing',
            full: {
                story: '忘掉星巴克二樓吧！Mag\'s Park 頂樓觀景台人少、角度更高、而且免費。從澀谷站西口出來，找到 MAGNET by SHIBUYA109 大樓，搭電梯直達頂樓。另一個隱藏機位是 L\'Occitane Cafe，靠窗座位可以一邊喝咖啡一邊拍攝。',
                exactLocation: 'MAGNET by SHIBUYA109 頂樓「Mag\'s Park」',
                mustTry: '錄一段 15 秒的縮時攝影，記得帶手機腳架',
                avoid: '不要在十字路口中間停下來拍照，會被撞到！',
                bestTime: '17:00-18:30 黃昏時刻'
            }
        }
    },
    {
        id: 'a4',
        title: 'TeamLab Planets',
        titleEn: 'TeamLab Planets',
        type: 'attraction',
        duration: '2小時',
        image: '✨',
        description: '沉浸式數位藝術體驗，需赤腳入場。',
        descriptionEn: 'Immersive digital art experience. Barefoot entry required.',
        price: 3800,
        address: '東京都江東區豐洲6-1-16',
        rating: 4.9,
        lat: 35.6465,
        lng: 139.7877,
        funFact: '會弄濕到膝蓋！要涉水走過藝術裝置',
        openingHours: '10:00-21:00',
        tags: ['網美'],
        region: 'tokyo',
        insiderTip: {
            teaser: '穿著建議與省時必看攻略',
            teaserEn: 'What to wear and time-saving tips',
            full: {
                story: '穿短褲或容易捲到膝蓋以上的褲子，有些區域水深到小腿。不要穿白色衣服，燈光會穿透。館內有免費寄物櫃，只帶手機就好。手機防水袋很有用！「無限水晶宇宙」是最熱門區域，建議先衝這裡。',
                exactLocation: '入場後右轉直走，「無限水晶宇宙」在最深處',
                mustTry: '在「錦鯉與人共舞的水面」區域站著不動，看錦鯉圍繞你游泳',
                avoid: '不要帶大包包 and 相機，寄物櫃很小放不下',
                bestTime: '16:00-18:00'
            }
        }
    },
    {
        id: 'a5',
        title: '明治神宮',
        titleEn: 'Meiji Jingu Shrine',
        type: 'attraction',
        duration: '1.5小時',
        image: '🌲',
        description: '都市中的森林綠洲，祭祀明治天皇。',
        descriptionEn: 'A forest oasis in the city, dedicated to Emperor Meiji.',
        price: 0,
        address: '東京都澀谷區代代木神園町1-1',
        rating: 4.6,
        lat: 35.6763,
        lng: 139.6993,
        funFact: '佔地70公頃，種植了超過10萬棵樹',
        openingHours: '日出-日落',
        tags: ['神社'],
        region: 'tokyo',
        insiderTip: {
            teaser: '正確參拜方式 + 隱藏版清酒牆',
            teaserEn: 'Proper worship etiquette + hidden sake wall',
            full: {
                story: '進入鳥居前記得微微鞠躬，走在參道兩側（中間是給神走的）。本殿旁有一面「奉納酒」牆，是各地酒造捐贈的清酒桶，超好拍。另一側有「奉納葡萄酒」牆，很少人知道。御守推薦買「開運木鈴」，是神宮限定款。',
                exactLocation: '參道走到底左轉，酒桶牆就在那裡',
                mustTry: '購買「夫婦楠」御守，據說可以招來好姻緣',
                avoid: '不要在神社內大聲喧嘩或講電話',
                bestTime: '08:00-09:00'
            }
        }
    },
    {
        id: 'a6',
        title: '台場鋼彈',
        titleEn: 'Odaiba Gundam',
        type: 'attraction',
        duration: '1小時',
        image: '🤖',
        description: '1:1實物大獨角獸鋼彈，會變形！',
        descriptionEn: 'Life-size Unicorn Gundam statue that transforms!',
        price: 0,
        address: '東京都江東區台場1-7-1',
        rating: 4.4,
        lat: 35.6243,
        lng: 139.7754,
        funFact: '高19.7公尺，變形時會播放動畫主題曲',
        openingHours: '24H（燈光秀：19:30/20:30/21:30）',
        tags: ['動漫'],
        region: 'tokyo',
        insiderTip: {
            teaser: '變形時間表 + 最佳拍攝角度',
            teaserEn: 'Transformation schedule + best photo spots',
            full: {
                story: '獨角獸鋼彈每天三場變形秀（19:30、20:30、21:30），會從 Unicorn Mode 變成 Destroy Mode，角和盔甲會展開發光！最佳拍攝位置是正前方的台階區，提前 10 分鐘卡位。旁邊的 Diver City 商場 7F 有「THE GUNDAM BASE TOKYO」，鋼彈迷必逛。',
                exactLocation: 'Diver City Tokyo Plaza 正前方台階區',
                mustTry: '進入 Diver City 2F 的鋼彈咖啡廳，有限定拉花',
                avoid: '週末晚上人太多，建議平日去',
                bestTime: '20:30'
            }
        }
    },
    {
        id: 'f1',
        title: '一蘭拉麵 澀谷',
        titleEn: 'Ichiran Ramen Shibuya',
        type: 'food',
        duration: '1小時',
        image: '🍜',
        description: '天然豚骨拉麵專賣店。',
        descriptionEn: 'Famous tonkotsu ramen specialty store.',
        price: 980,
        address: '東京都澀谷區神南1-22-7',
        rating: 4.3,
        lat: 35.6603,
        lng: 139.6994,
        funFact: '味集中座位設計，讓你專注享受拉麵',
        openingHours: '24H',
        tags: ['拉麵'],
        region: 'tokyo',
        insiderTip: {
            teaser: '隱藏版調味料 + 內行人吃法',
            teaserEn: 'Secret seasoning + local tips',
            full: {
                story: '客製化單子上，麵的硬度選「超硬」（超カタ）才是內行人吃法。吃到一半記得按桌上的服務鈴，跟店員要「特製辣椒粉」，這是菜單上沒有的隱藏版調味料。最後把碗喝光，碗底有「この一滴が最高の喜びです」（這最後一滴就是最高的幸福）。',
                exactLocation: '澀谷店位於 Center 街附近，認明紅色招牌',
                mustTry: '加點「替玉」（追加麵）和「半熟煮蛋」',
                avoid: '如果不吃辣，秘傳醬汁選「無」',
                bestTime: '02:00-04:00 不用排隊'
            }
        }
    },
    {
        id: 'f2',
        title: '築地場外市場',
        titleEn: 'Tsukiji Outer Market',
        type: 'food',
        duration: '2小時',
        image: '🍣',
        description: '新鮮海鮮早餐天堂！',
        descriptionEn: 'Fresh seafood breakfast paradise!',
        price: 4000,
        address: '東京都中央區築地4-16-2',
        rating: 4.7,
        lat: 35.6654,
        lng: 139.7706,
        funFact: '雖然場內市場搬去豐洲，場外市場仍照常營業',
        openingHours: '05:00-14:00',
        tags: ['海鮮'],
        region: 'tokyo',
        insiderTip: {
            teaser: '避開排隊名店的聰明吃法',
            teaserEn: 'Skip the long queues smart tips',
            full: {
                story: '不要排「壽司大」和「大和壽司」，動輒 2-3 小時。往市場深處走，找「鮨文」這間小店，老闆娘現切當天最新鮮的魚，價格只有名店一半。必吃：「玉子燒」要去「丸武」（綠色招牌），現煎的最軟嫩。',
                exactLocation: '場外市場 4 號街深處，藍色布簾「鮨文」',
                mustTry: '厚切鮪魚生魚片 + 玉子燒 + 草莓大福的組合',
                avoid: '不要點英文菜單上的「Tourist Set」，價格偏貴',
                bestTime: '06:00-07:30'
            }
        }
    },
    {
        id: 'f3',
        title: '敘敘苑燒肉',
        titleEn: 'Jojoen Yakiniku',
        type: 'food',
        duration: '1.5小時',
        image: '🥩',
        description: '高級和牛燒肉餐廳。',
        descriptionEn: 'High-end Wagyu BBQ restaurant.',
        price: 8000,
        address: '東京都六本木等多處分店',
        rating: 4.6,
        lat: 35.6598,
        lng: 139.6983,
        funFact: 'A5和牛入口即化，是日本燒肉的代表品牌',
        openingHours: '11:00-23:00',
        tags: ['燒肉'],
        region: 'tokyo',
        insiderTip: {
            teaser: '午餐套餐是最划算的吃法',
            teaserEn: 'Lunch set is the best value',
            full: {
                story: '午餐的「特選和牛套餐」¥3,800 就能吃到晚餐要 ¥15,000 以上的 A5 和牛。六本木店有露天座位，景觀最好。記得點「特選ハラミ」（橫隔膜），這是行家私藏的部位。店員會幫你烤，不用擔心烤壞。',
                exactLocation: '六本木店：港区六本木6-1-20',
                mustTry: '特選ハラミ + 特製醬油ダレ',
                avoid: '不要點「霜降り」，太肥吃不了多少',
                bestTime: '11:15 開始排隊'
            }
        }
    },
    {
        id: 'p1',
        title: 'Shibuya Sky Garden (Secret)',
        titleEn: 'Shibuya Sky Garden',
        marketingTitle: '澀谷 3 樓的空中花園 (私藏)',
        marketingTitleEn: 'Secret Sky Garden above Shibuya',
        type: 'attraction',
        duration: '1小時',
        image: '🤫',
        description: '遠離十字路口的人潮，這裡是拍攝澀谷全景的最佳秘密基地。',
        price: 0,
        address: '澀谷區某處 (解鎖查看)',
        rating: 4.9,
        lat: 35.6595,
        lng: 139.7005,
        tags: ['私藏', '攝影', '安靜'],
        region: 'tokyo',
        tier: 'premium',
        isLocked: true,
        authorId: 'c-mel',
        author: 'Wennie',
        coverImage: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=800',
        insiderTip: {
            teaser: '99% 觀光客不知道的拍照秘境',
            teaserEn: 'Secret photo spot unknown to 99% tourists',
            full: {
                story: '從 109 百貨旁的小巷進去，搭乘透明電梯直達 3 樓。這裡完全沒有觀光客，只有當地情侶。可以用高角度俯拍整個十字路口，背景還有 109 大樓的霓虹燈。',
                exactLocation: '解鎖後查看完整地址',
                mustTry: '用長焦鏡頭拍攝縮時攝影',
                avoid: '解鎖後查看',
                bestTime: '傍晚日落時分'
            }
        }
    },
    {
        id: 'h1',
        title: '澀谷Stream Excel',
        titleEn: 'Shibuya Stream Excel',
        type: 'hotel',
        duration: '過夜',
        image: '🏨',
        description: '澀谷車站直結，交通超方便。',
        price: 25000,
        address: '東京都澀谷區澀谷3-21-3',
        rating: 4.6,
        lat: 35.6569,
        lng: 139.7029,
        tags: ['推薦'],
        region: 'tokyo',
        insiderTip: {
            teaser: '選對房型看澀谷十字路口夜景',
            full: {
                story: '訂房時指定「高層部屋・スクランブル交差点側」（高樓層十字路口側），可以從房間直接看到澀谷十字路口的人潮。早餐在 4F 的餐廳，推薦坐窗邊。',
                exactLocation: '澀谷站直結，不用出室外',
                mustTry: '1F 的 TORAYA CAFE 有限定紅豆甜點',
                avoid: '不要訂低樓層，看不到景觀',
                bestTime: '提前一個月訂房'
            }
        }
    },
    {
        id: 'h2',
        title: '新宿格拉斯麗酒店',
        titleEn: 'Hotel Gracery Shinjuku',
        type: 'hotel',
        duration: '過夜',
        image: '🦖',
        description: '樓頂有巨型哥吉拉！',
        price: 18000,
        address: '東京都新宿區歌舞伎町1-19-1',
        rating: 4.4,
        lat: 35.6946,
        lng: 139.7032,
        tags: ['特色'],
        region: 'tokyo',
        insiderTip: {
            teaser: '哥吉拉主題房 + 每小時吼叫表演',
            full: {
                story: '每小時整點（12:00-20:00）哥吉拉會吼叫，嘴巴還會冒煙！8F 露台可以近距離拍攝。有「哥吉拉主題房」，房內有大爪子裝飾，粉絲必訂。',
                exactLocation: '8F 露台「Godzilla Terrace」',
                mustTry: '在 Cafe Terrace BonjuR 點「哥吉拉咖哩飯」',
                avoid: '不要訂哥吉拉對面的房間，太近看不到全貌',
                bestTime: '20:00'
            }
        }
    },
    {
        id: 'h3',
        title: '淺草THE GATE',
        titleEn: 'The Gate Hotel Asakusa',
        type: 'hotel',
        duration: '過夜',
        image: '🛏️',
        description: '淺草寺旁現代設計旅館。',
        price: 15000,
        address: '東京都台東區雷門2-16-11',
        rating: 4.5,
        lat: 35.7108,
        lng: 139.7962,
        tags: ['位置'],
        region: 'tokyo',
        insiderTip: {
            teaser: '頂樓露台是拍晴空塔的最佳位置',
            full: {
                story: '13F 頂樓露台 24 小時開放，是拍攝晴空塔和淺草寺夜景的絕佳位置。早餐在 13F，窗外就是雷門，超震撼。附近「Pelican」麵包店的吐司是東京前三名，值得早起排隊。',
                exactLocation: '13F Sky Lounge Terrace',
                mustTry: '早餐的法式吐司',
                avoid: '不要在頂樓大聲喧嘩，其他房客會抗議',
                bestTime: '日落時分'
            }
        }
    }
];
