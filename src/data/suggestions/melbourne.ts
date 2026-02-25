export const MELBOURNE_SUGGESTIONS = {
    morning: [
        {
            id: 'qf-m1',
            title: 'Patricia Coffee',
            titleEn: 'Patricia Coffee Brewers',
            type: 'food',
            duration: '45min',
            price: 7,
            region: 'melbourne',
            description: '墨爾本最具代表性的站立式咖啡店。',
            descriptionEn: 'Iconic standing-room-only coffee bar.',
            lat: -37.8136,
            lng: 144.9631,
            rating: 4.8,
            tags: ['咖啡', '必訪'],
            insiderTip: {
                teaser: '體驗在地站立咖啡文化',
                full: {
                    story: '這裡是墨爾本人心中第一名的咖啡店，沒有座位。大家都在巷弄中站著聊天。記得跟 Barista 聊聊天，他們非常友善。',
                    exactLocation: 'Little Bourke St 轉接處的小巷',
                    mustTry: 'White Coffee + 巧克力曲奇餅',
                    avoid: '週末沒開，請安排在平日',
                    bestTime: '08:00-09:30'
                }
            }
        },
        {
            id: 'qf-m2',
            title: '維多利亞市場',
            titleEn: 'Queen Vic Market',
            type: 'attraction',
            duration: '2小時',
            price: 0,
            region: 'melbourne',
            description: '南半球最大的露天市場。',
            descriptionEn: 'The largest open-air market in the Southern Hemisphere.',
            lat: -37.8067,
            lng: 144.9567,
            rating: 4.4,
            tags: ['市場', '美食'],
            insiderTip: {
                teaser: '熱果醬甜甜圈的傳說',
                full: {
                    story: '一定要找市場外圍那台紅色餐車「American Doughnut Kitchen」，他們賣了幾十年的熱果醬甜甜圈是所有墨爾本人的兒時回憶。',
                    exactLocation: '市場周邊的紅色快餐車',
                    mustTry: 'Hot Jam Doughnuts',
                    avoid: '週一與週三市場不開門',
                    bestTime: '10:00 前'
                }
            }
        }
    ],
    afternoon: [
        {
            id: 'qf-m3',
            title: 'Hosier Lane 塗鴉巷',
            titleEn: 'Hosier Lane',
            type: 'attraction',
            duration: '45min',
            price: 0,
            region: 'melbourne',
            description: '世界級的街頭藝術畫廊。',
            descriptionEn: 'World-famous street art laneway.',
            lat: -37.8168,
            lng: 144.9691,
            rating: 4.6,
            tags: ['街頭藝術', '拍照'],
            insiderTip: {
                teaser: '巷尾的隱藏視角',
                full: {
                    story: '除了主巷子，記得往旁邊的 AC/DC Lane 走，那邊的塗鴉更大規模且更少人。如果幸運，你還能看到藝術家現場作畫。',
                    exactLocation: 'Hosier Lane 底部轉角處',
                    mustTry: '錄一段縮時攝影看變化的速度',
                    avoid: '地上可能有油漆或雜物，走路要小心',
                    bestTime: '15:00-16:00 陽光灑入時'
                }
            }
        },
        {
            id: 'qf-m4',
            title: '州立圖書館',
            titleEn: 'State Library Victoria',
            type: 'attraction',
            duration: '1小時',
            price: 0,
            region: 'melbourne',
            description: '擁有絕美放射狀圓頂的圖書館。',
            descriptionEn: 'The beautiful heritage library with its iconic dome.',
            lat: -37.8105,
            lng: 144.9642,
            rating: 4.8,
            tags: ['必去', '建築'],
            insiderTip: {
                teaser: '高空俯瞰放射狀座位',
                full: {
                    story: '直接搭電梯到 6 樓的觀景區，那裡可以拍到壯麗的 La Trobe Reading Room 全景。室內非常安靜，請記得保持禮貌。',
                    exactLocation: '圖書館 6 樓觀景台',
                    mustTry: '在草皮上坐著看熙來攘往的人群',
                    avoid: '不要在大圓頂下大聲講話',
                    bestTime: '14:00'
                }
            }
        }
    ],
    evening: [
        {
            id: 'qf-m5',
            title: '亞拉河畔步道',
            titleEn: 'Yarra River Walk',
            type: 'attraction',
            duration: '1.5小時',
            price: 0,
            region: 'melbourne',
            description: '漫步河畔享受城市天際線。',
            descriptionEn: 'Stroll along the river and enjoy the city skyline.',
            lat: -37.8200,
            lng: 144.9650,
            rating: 4.7,
            tags: ['散步', '夜景'],
            insiderTip: {
                teaser: 'Southbank 的火花秀',
                full: {
                    story: '每到整點，Crown Casino 前的火柱會噴火。這是在河畔散步最驚喜的時刻。',
                    exactLocation: 'Crown Casino 正前方的水邊',
                    mustTry: '整點的火噴表演',
                    avoid: '晚風大，記得帶件薄外套',
                    bestTime: '19:00-20:00'
                }
            }
        }
    ],
    night: [
        {
            id: 'qf-m6',
            title: 'Eau de Vie',
            titleEn: 'Eau de Vie Speakeasy',
            type: 'food',
            duration: '1.5小時',
            price: 25,
            region: 'melbourne',
            description: '書架後的 1920 年代禁酒時期風格隱藏酒吧。',
            descriptionEn: '1920s speakeasy hidden behind a bookshelf.',
            lat: -37.8181,
            lng: 144.9687,
            tags: ['酒吧', '隱密'],
            insiderTip: {
                teaser: '書架後的 1920 年代禁酒時期酒吧',
                full: {
                    story: '這間隱藏酒吧入口是一扇沒有標示的門，進去後會看到一個假書架 — 推開它就是酒吧。真正的秘密是：書架後面還有另一個房間，叫 Whisky Room，只有熟客才知道。',
                    exactLocation: 'Malthouse Lane，找有門鈴的無標示黑門',
                    mustTry: '問 bartender "本週的 hidden menu"',
                    avoid: '週五晚上 8 點後要排隊',
                    bestTime: '21:00-22:30'
                }
            }
        },
        {
            id: 'qf-m7',
            title: 'Berlin Bar',
            titleEn: 'Berlin Bar',
            type: 'food',
            duration: '1.5小時',
            price: 22,
            region: 'melbourne',
            description: '東西柏林主題酒吧，需要按門鈴才能進入。',
            descriptionEn: 'East vs West Berlin themed bar, ring the doorbell to enter.',
            lat: -37.8115,
            lng: 144.9631,
            tags: ['酒吧', '文化'],
            insiderTip: {
                teaser: '東西柏林主題酒吧',
                full: {
                    story: '找到發光的熊標誌就對了。按門鈴後會有人來開門，進去後你會被帶到「東柏林」或「西柏林」— 兩邊氛圍完全不同。',
                    exactLocation: 'Corrs Lane，找發光的熊招牌',
                    mustTry: '跟工作人員說你想體驗「另一邊」',
                    avoid: '別太早到，10 點以後氣氛最好',
                    bestTime: '22:00-00:00'
                }
            }
        }
    ],
    accommodation: [
        {
            id: 'qf-m8',
            title: 'W Melbourne',
            titleEn: 'W Melbourne',
            type: 'hotel',
            duration: '0',
            price: 28000,
            region: 'melbourne',
            description: '充滿設計感的五星級飯店。',
            descriptionEn: 'The most stylish 5-star hotel in the CBD.',
            lat: -37.8175,
            lng: 144.9610,
            tags: ['豪華', '設計'],
            insiderTip: {
                teaser: '黃金梯隊的設計套房',
                full: {
                    story: '飯店內部的塗鴉裝飾非常有特色。14 樓的室內泳池（WET）擁有黃金天花板，絕對是網美必拍地點。',
                    exactLocation: '14 樓 WET 泳池',
                    mustTry: '頂樓酒吧的特調調酒',
                    avoid: '低樓層可能會有街道噪音',
                    bestTime: '15:00 辦理入住'
                }
            }
        }
    ]
};
