import { TravelItem } from '../../types';

export const KYOTO_ASSETS: TravelItem[] = [
    {
        id: 'ka1',
        title: '金閣寺',
        titleEn: 'Kinkaku-ji',
        marketingTitle: '金碧輝煌的夢幻攝影位',
        marketingTitleEn: 'The Golden Pavilion Reflection',
        type: 'attraction',
        duration: '1小時',
        image: '🕌',
        description: '金碧輝煌的世界遺產，正式名稱為鹿苑寺。',
        price: 500,
        address: '京都市北區金閣寺町1',
        rating: 4.8,
        lat: 35.0393,
        lng: 135.7292,
        openingHours: '09:00-17:00',
        tags: ['古蹟', '必去'],
        region: 'kyoto',
        insiderTip: {
            teaser: '倒影拍攝的黃金時刻',
            teaserEn: 'The golden pavilion reflections',
            full: {
                story: '開門後前 30 分鐘是拍攝金閣寺倒影最好的時機，水面平靜如鏡。站在「鏡湖池」的東北角（靠近出口那側），可以同時拍到金閣寺和它的完整倒影。冬天下雪時來，雪頂金閣是一絕。',
                storyEn: 'The first 30 minutes after opening is the best time for reflections. Stand at the northeast corner of Mirror Pond (closed to the exit) to capture the perfect symmetry. It is absolutely stunning with snow on top in winter.',
                exactLocation: '鏡湖池東北角的大石頭旁',
                exactLocationEn: 'Northeast corner of Kyoko-chi (Mirror Pond), next to the large rock',
                mustTry: '買「金箔御守」，是金閣寺限定',
                mustTryEn: 'Get the "Gold Leaf Omamori" (limited edition)',
                avoid: '11:00-15:00 團客最多，盡量避開',
                avoidEn: 'Avoid 11:00 - 15:00 as it is peak time for large tour groups',
                bestTime: '09:00 開門，08:45 排隊',
                bestTimeEn: 'Arrive at 08:45 before the 09:00 opening'
            }
        }
    },
    {
        id: 'ka2',
        title: '清水寺',
        titleEn: 'Kiyomizu-dera',
        type: 'attraction',
        duration: '2小時',
        image: '🏯',
        description: '著名的清水舞台由139根巨柱支撐，不使用一根釘子。',
        price: 400,
        address: '京都市東山區清水1丁目294',
        rating: 4.9,
        lat: 34.9949,
        lng: 135.7850,
        openingHours: '06:00-18:00',
        tags: ['古蹟', '網美'],
        region: 'kyoto',
        authorId: 'c4',
        insiderTip: {
            teaser: '繞過人潮的秘密路線',
            teaserEn: 'A hidden escape from crowds',
            full: {
                story: '不要從正門進去！從「茶碗坂」上去，人潮只有正面的 1/3。音羽瀑布有三道水流：左邊是「學業」、中間是「戀愛」、右邊是「長壽」。選一道喝就好，貪心喝三道反而不靈驗。',
                storyEn: "Don't enter via the main gate! Walk up Chawan-zaka; it is 1/3 less crowded. At Otowa Waterfall, there are 3 streams: Wisdom (left), Love (middle), and Longevity (right). Choose ONLY one; drinking from all 3 is considered greedy and brings bad luck.",
                exactLocation: '從五条坂往南走 200 公尺，轉進茶碗坂',
                exactLocationEn: 'Walk South from Gojo-zaka for 200m, then turn into Chawan-zaka',
                mustTry: '在音羽瀑布選「戀愛」那道水喝',
                mustTryEn: 'Drink from the Love stream at Otowa Waterfall',
                avoid: '不要在清水坂買紀念品，價格最貴',
                avoidEn: "Don't buy souvenirs at Kiyomizu-zaka; it is the most expensive spot",
                bestTime: '06:00 開門時最空曠',
                bestTimeEn: '06:00 right at opening for the quietest atmosphere'
            }
        }
    },
    {
        id: 'ka2-v2',
        title: '清水寺',
        titleEn: 'Kiyomizu-dera',
        type: 'attraction',
        duration: '1.5小時',
        image: '🏯',
        description: '攝影師鏡頭下的清水舞台，捕捉最經典的角度。',
        descriptionEn: 'The iconic Kiyomizu Stage through a photographer\'s lens.',
        price: 400,
        address: '京都市東山區清水1丁目294',
        rating: 4.8,
        lat: 34.9949,
        lng: 135.7850,
        region: 'kyoto',
        authorId: 'c6',
        openingHours: '06:00-18:00',
        tags: ['古蹟', '攝影'],
        insiderTip: {
            teaser: '拍下清水舞台與京都全景的座標',
            teaserEn: 'The Spot for Kiyomizu Stage & Kyoto Skyline',
            full: {
                story: '與其在舞台上人擠人，我更推薦走到對面的「子安塔」。從那裡往回拍，可以同時拍到整個木造舞台、與後方京都市區的強烈對照，這才是清水寺最震撼的角度。',
                storyEn: 'Instead of standing on the stage, go to Koyasu Pagoda across the way. Looking back, you capture the entire wooden stage against the Kyoto skyline.',
                exactLocation: '清水寺境內最南端的「子安塔」前廣場',
                exactLocationEn: 'Plaza in front of Koyasu Pagoda, southernmost point of Kiyomizu-dera',
                mustTry: '使用廣角鏡頭拍下舞台全景',
                mustTryEn: 'Use a wide-angle lens for the full stage panorama',
                avoid: '舞台區雖然開放腳架，但尖峰時刻會影響動線，建議手持拍照',
                avoidEn: 'Tripods are allowed but discouraged during peak hours to avoid blocking paths; hand-held shooting is recommended',
                bestTime: '15:30 - 16:30 順光拍攝最美',
                bestTimeEn: '15:30 - 16:30 for the best front-lit glow'
            }
        }
    },
    {
        id: 'ka3',
        title: '伏見稻荷大社',
        titleEn: 'Fushimi Inari Taisha',
        type: 'attraction',
        duration: '2-3小時',
        image: '⛩️',
        description: '千本鳥居綿延4公里上山，祈求生意興隆的聖地。',
        price: 0,
        address: '京都市伏見區深草藪之內町68',
        rating: 4.9,
        lat: 34.9671,
        lng: 135.7726,
        openingHours: '24H',
        tags: ['必去', '攝影'],
        region: 'kyoto',
        insiderTip: {
            teaser: '傍晚登山的魔幻體驗',
            teaserEn: 'A magical sunset hike through torii',
            full: {
                story: '大多數人早上來，但傍晚 17:00 後遊客都下山了。往山頂走，你會獨佔整條千本鳥居。日落時分，陽光穿過鳥居的縫隙，美到不真實。上山路程約 2 小時，記得帶水和好走的鞋。',
                exactLocation: '四ツ辻展望台（山腰處）是最佳觀景點',
                mustTry: '在四ツ辻吃「いなり寿司」（狐狸壽司）',
                avoid: '不要穿高跟鞋，石階路很滑',
                bestTime: '17:00-19:00 夕陽時分'
            }
        }
    },
    {
        id: 'ka4',
        title: '嵐山竹林',
        titleEn: 'Arashiyama Bamboo Grove',
        type: 'attraction',
        duration: '1.5小時',
        image: '🎋',
        description: '高聳竹林形成天然隧道，風吹時沙沙作響。',
        price: 0,
        address: '京都市右京區嵯峨天龍寺',
        rating: 4.7,
        lat: 35.0094,
        lng: 135.6667,
        openingHours: '24H',
        tags: ['自然', '攝影'],
        region: 'kyoto',
        insiderTip: {
            teaser: '空無一人的竹林拍攝秘訣',
            teaserEn: 'Secrets to an empty bamboo grove',
            full: {
                story: '早上 7 點前抵達是拍到無人竹林的唯一方法。從京都車站搭第一班嵐電，6:30 就能到。往野宮神社方向走，那條小路比主道更清幽更好拍。順便繞去「常寂光寺」，楓葉季節美爆。',
                exactLocation: '野宮神社往北走的小徑最清幽',
                mustTry: '在渡月橋拍一張經典照',
                avoid: '10:00 後會開始有團客',
                bestTime: '06:00-07:00'
            }
        }
    },
    {
        id: 'ka-secret-1',
        title: '岡崎神社',
        titleEn: 'Okazaki Shrine',
        type: 'attraction',
        duration: '1小時',
        image: '🐰',
        description: '京都超人氣「兔子神社」，滿山滿谷的兔子御守與雕像，求姻緣與求子的聖地。',
        descriptionEn: 'The famous "Rabbit Shrine" of Kyoto, filled with cute rabbit statues and charms.',
        price: 0,
        address: '京都市左京區岡崎東天王町51',
        rating: 4.8,
        lat: 35.017778,
        lng: 135.789167,
        openingHours: '09:00-17:00',
        tags: ['網美', '秘境', '超萌'],
        region: 'kyoto',
        insiderTip: {
            teaser: '滿山滿谷的兔子！IG 爆紅的求子聖地',
            teaserEn: 'Statues of rabbits everywhere! IG viral fertility shrine',
            full: {
                story: '這裡又被稱為兔子神社，因為兔子多產所以是求子、安產跟求姻緣的神社。IG 上最紅的就是整排紅通通的兔子御守牆，買一個御守記得要在這排隊放上去拍照。',
                exactLocation: '本殿正面右側的兔子御守牆',
                mustTry: '買一個兔子御守 (¥500)，許願後放在御守牆上',
                avoid: '不要大聲喧嘩，這附近還是住宅區',
                bestTime: '10:00 晨光灑在兔子雕像上最可愛'
            }
        }
    },
    {
        id: 'ka-secret-2',
        title: '祇園白川筋',
        titleEn: 'Gion Shirakawa Lane',
        marketingTitle: '京都最美街道，避開祇園人潮',
        marketingTitleEn: 'The Most Beautiful Street in Kyoto',
        type: 'attraction',
        duration: '1.5小時',
        image: '🏮',
        description: '被稱為「京都最美街道」，石板路、垂柳、與古老町家，比起主街更有江戶風情。',
        descriptionEn: 'Arguably Kyoto\'s most beautiful street with weeping willows and old machiyas.',
        price: 0,
        address: '京都市東山區元吉町',
        rating: 4.9,
        lat: 35.0055,
        lng: 135.7731,
        openingHours: '24H',
        tags: ['慢活', '私藏', '江戶風'],
        region: 'kyoto',
        insiderTip: {
            teaser: '京都最美街道，避開祇園人潮的秘境',
            teaserEn: 'The most beautiful street, escaping Gion crowds',
            full: {
                story: '比起花見小路，我更喜歡這裡。這裡有巽橋、石板路還有伸向河面的垂柳。下雨的夜晚，石板路反射著紅燈籠的光芒，那個氛圍真的會起雞皮疙瘩。',
                exactLocation: '巽橋 (Tatsumi Bridge) 周邊',
                mustTry: '在辰巳大明神前雙手合十祈求平安',
                avoid: '不要對著藝妓拍照（這裡是禁止攝影區域的邊界，需注意告示）',
                bestTime: '18:30 燈籠剛亮起時'
            }
        }
    },
    {
        id: 'kf1',
        title: '預約制：茶之文化體驗',
        titleEn: 'Private Tea Ceremony',
        type: 'food',
        duration: '1.5小時',
        image: '🍵',
        description: '在超過百年的町家老屋裡，由專業茶道老師帶領的深度抹茶體驗。',
        descriptionEn: 'Deep matcha experience in a 100-year-old Machiya led by a tea master.',
        price: 3500,
        address: '京都市内 (預約後提供)',
        rating: 5.0,
        lat: 35.0116,
        lng: 135.7681,
        tags: ['文化', '深體驗'],
        region: 'kyoto',
        tier: 'premium',
        isLocked: true,
        insiderTip: {
            teaser: 'Threads 上私藏的預約制茶席',
            teaserEn: 'Private tea session trended on Threads',
            full: {
                story: '這不是一般給觀光客看的表演，而是真正的茶道交流。老師會教你如何攪拌抹茶，以及不同和菓子的正確吃法。一定要穿襪子，這是對老宅的基本禮儀。',
                exactLocation: '捷運京都市役所前站 步行 10 分鐘',
                mustTry: '親手刷出一碗細膩泡沫的抹茶',
                avoid: '不要戴戒指或手鍊，會刮傷昂貴的茶具',
                bestTime: '14:00'
            }
        }
    },
    {
        id: 'kf2',
        title: '中村藤吉本店',
        titleEn: 'Nakamura Tokichi',
        type: 'food',
        duration: '1.5小時',
        image: '🍵',
        description: '創業於1854年的宇治抹茶老舖，必吃抹茶聖代。',
        price: 1500,
        address: '京都府宇治市宇治壱番10',
        rating: 4.8,
        lat: 34.8892,
        lng: 135.8016,
        openingHours: '10:00-17:30',
        tags: ['美食', '甜點'],
        region: 'kyoto',
        insiderTip: {
            teaser: '避開排隊的聰明方法',
            teaserEn: 'How to avoid the long queues',
            full: {
                story: '不要去本店！宇治站旁的「平等院店」同樣品質但人少一半。必點「生茶ゼリイ」（生茶凍），這是本店沒有的限定品。抹茶濃度選「濃茶」，才能吃到真正的宇治抹茶味。',
                exactLocation: '平等院表參道店（宇治站歩行 3 分）',
                mustTry: '生茶ゼリイ（生茶凍）¥1,000',
                avoid: '不要點「抹茶霜淇淋」，其他店也有',
                bestTime: '10:00 開店或 15:30 後'
            }
        }
    },
    {
        id: 'p3',
        title: 'Murakami Haruki\'s Jazz Bar',
        titleEn: 'Secret Jazz Cafe',
        marketingTitle: '村上春樹也愛的爵士吧 (私藏)',
        type: 'food',
        duration: '2小時',
        image: '🥃',
        description: '這不是一般觀光客會來的地方。這裡賣的是「孤獨」與「黑膠唱片」的味道。',
        address: '京都市役所附近 (解鎖查看)',
        rating: 5.0,
        lat: 35.0116,
        lng: 135.7681,
        tags: ['放鬆', '文青', '私藏'],
        region: 'kyoto',
        tier: 'premium',
        isLocked: true,
        insiderTip: {
            teaser: '村上春樹寫作時常來的爵士吧',
            teaserEn: 'The jazz bar where Haruki Murakami writes',
            full: {
                story: '進店請保持安靜。老闆不喜歡人拍照，但如果你點一杯「挪威的森林」特調，他會跟你聊整晚。店內全是黑膠唱片，可以請老闆放你想聽的專輯。',
                exactLocation: '解鎖後查看完整地址',
                mustTry: '「挪威的森林」特調威士忌',
                avoid: '解鎖後查看',
                bestTime: '20:00 後氣氛最棒'
            }
        }
    }
];
