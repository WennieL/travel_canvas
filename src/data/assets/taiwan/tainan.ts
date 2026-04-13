import { TravelItem } from '../../../types';

export const TAINAN_ASSETS: TravelItem[] = [
    {
        id: 'tn-a1',
        title: '神農街',
        titleEn: 'Shennong Street',
        type: 'attraction',
        duration: '1.5小時',
        image: '🏮',
        coverImage: 'https://images.unsplash.com/photo-1621848296279-7751546e9acc?auto=format&fit=crop&q=80&w=800',
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
        themeColor: '#b86818',
        expertStories: [
            {
                id: 'must-do',
                label: '必做推薦',
                labelEn: 'Must Do',
                summary: '深夜散步看紅燈籠',
                summaryEn: 'Night Walk with Lanterns',
                story: '夜晚的神農街才是真正的魔法時刻。紅燈籠亮起來後，整條街會呈現出一種迷幻的古都氛圍，非常適合慢步。',
                storyEn: 'Shennong St. at night is magical. Once red lanterns glow, the street transformed into a psychedelic ancient vibe, perfect for a slow stroll.'
            },
            {
                id: 'artisan',
                label: '職人風景',
                labelEn: 'Artisan View',
                summary: '觀察老屋修復細節',
                summaryEn: 'Old House Restoration',
                story: '這裡的每一棟建築都是歷史。仔細看那些門窗的雕刻與老式的鐵窗花，那是台南工匠代代相傳的工藝結晶。',
                storyEn: 'Every building here is history. Look closely at the window carvings and vintage iron grilles - crystals of Tainan craftsmanship passed down for generations.'
            },
            {
                id: 'trap',
                label: '交通誤區',
                labelEn: 'Traffic Trap',
                summary: '不要嘗試開車進來',
                summaryEn: 'Don\'t Try to Drive In',
                story: '神農街非常窄且人潮眾多。絕對不要嘗試開車或騎車進入。建議將車停在海安路地下停車場再步行進來。',
                storyEn: 'The street is extremely narrow and crowded. Never try to drive in. Park at the Haian underground lot and walk.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '巷弄深處的無招牌酒吧',
                summaryEn: 'No-Sign Bar in Alleys',
                story: '神農街的中段與後段藏著幾間沒有招牌的小酒吧。推開沉重的老木門，裡面可能是另一個平行時空。',
                storyEn: 'Middle and end sections hide tiny unsigned bars. Push open a heavy wooden door to find a parallel universe.'
            }
        ],
        insiderTip: {
            teaser: '夜晚的神農街才是真正的魔法時刻',
            teaserEn: 'The real magic happens at night',
            full: {
                story: '白天是觀光客拍照的老街，但晚上 7 點以後才是真正的台南味。紅燈籠亮起來，文創小店變成小酒吧，在地人會出來散步。巷弄深處有一間沒招牌的老屋酒吧，只有在地人知道。',
                storyEn: 'By day it\'s a tourist street, but after 7 PM the real Tainan vibe emerges. Red lanterns glow, boutiques turn into bars, and locals come out for a stroll. There\'s an unsigned old house bar deep in the alleys.',
                exactLocation: '從海安路轉入神農街',
                exactLocationEn: 'Turn into Shennong St. from Haian Rd.',
                mustTry: '找到巷底的隱藏酒吧（門口有一盞紅燈）',
                mustTryEn: 'Find the hidden bar at the end of the alley (marked by a single red light)',
                avoid: '中午太熱不適合逛',
                avoidEn: 'Too hot to visit around noon',
                bestTime: '19:00-21:00',
                bestTimeEn: '19:00-21:00'
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
        coverImage: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=800',
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
        themeColor: '#4A7C59',
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃推薦',
                labelEn: 'Must Eat',
                summary: '當日限定特色口味',
                summaryEn: 'Daily Special Flavor',
                story: '蜷尾家的靈魂在於變換。每天提供的口味都不同，結合了在地茶葉與農產品，每一次來都是驚喜。',
                storyEn: 'Ninao\'s soul is in its variety. Flavors change daily, blending local teas and produce. Every visit is a surprise.'
            },
            {
                id: 'artisan',
                label: '職人精神',
                labelEn: 'Artisanship',
                summary: '世界銀牌的研發細節',
                summaryEn: 'Award-winning R&D',
                story: '創辦人李豫致力於將台灣食材融入義式冰淇淋。每一球冰淇淋的質地都極度細膩，是世界級的工藝水準。',
                storyEn: 'Founder Yu Lee integrates Taiwanese ingredients into gelato. Each scoop\'s texture is extremely refined, representing world-class craftsmanship.'
            },
            {
                id: 'trap',
                label: '排隊誤區',
                labelEn: 'Waiting Trap',
                summary: '週末先拿號碼牌再去逛街',
                summaryEn: 'Get Number First on Weekends',
                story: '假日人潮可能要等 30-60 分鐘。建議先抽號碼牌，去隔壁逛逛文創店，快到號時再回來。',
                storyEn: 'Weekend waits can be 30-60 mins. Get your number first, shop around the nearby boutiques, and return when your turn nears.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '問店員「隱藏版」口味',
                summaryEn: 'Ask for the "Secret" Flavor',
                story: '有時候櫃檯後面會藏著當天還沒掛上去的神秘口味。大膽地問一下親切的店員，或許有驚喜。',
                storyEn: 'Sometimes secret flavors not yet on the board are hiding. Ask the friendly staff; you might get a surprise.'
            }
        ],
        insiderTip: {
            teaser: '🏆 世界銀牌冰淇淋的隱藏吃法',
            teaserEn: '🏆 Secret ways to enjoy world-medal gelato',
            full: {
                story: '得獎口味「爆米香荔枝蜜紅茶」用的是阿里山蜜香紅茶 + 台灣荔枝蜂蜜 + 屏東爆米香。但在地人的秘密是：不要只點招牌，問店員「今天的隱藏口味是什麼」，每天都不一樣，而且限量。',
                storyEn: 'The award-winning flavor uses Alishan honey black tea + Taiwanese lychee honey. But locals ask for the "hidden flavor of the day" - limited and different daily.',
                exactLocation: '正興街92號，認明排隊人龍',
                exactLocationEn: 'No. 92, Zhengxing St. (Look for the queue)',
                mustTry: '當日限定口味 + 經典茶味冰淇淋',
                mustTryEn: 'Daily special + classic tea flavors',
                avoid: '假日排隊 30 分鐘起，建議平日下午 2 點去',
                avoidEn: '30+ min queue on weekends; try 2 PM on weekdays',
                bestTime: '平日 14:00',
                bestTimeEn: '14:00 weekdays'
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
        coverImage: 'https://images.unsplash.com/photo-1563245332-69214647efdc?auto=format&fit=crop&q=80&w=800',
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
        themeColor: '#CD6155',
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃推薦',
                labelEn: 'Must Eat',
                summary: '現煎熱騰騰的水煎包',
                summaryEn: 'Sizzling Pan-fried Buns',
                story: '底部煎得金黃酥脆，咬開後滿滿的鮮甜高麗菜與豬肉餡，那是裕農路午後最誘人的香氣。',
                storyEn: 'Golden crispy bottoms with a burst of sweet cabbage and pork filling - the most tempting aroma on Yunong Rd. every afternoon.'
            },
            {
                id: 'artisan',
                label: '職人風景',
                labelEn: 'Artisan View',
                summary: '觀察大鐵鍋的冒煙瞬間',
                summaryEn: 'The Sizzling Pot Steam',
                story: '看著老闆掀開厚重的鐵蓋，大雨般的水蒸氣夾雜著焦香味散開，那是等待過程中最療癒的一幕。',
                storyEn: 'Watching the owner lift the heavy iron lid as steam and toasted aroma burst out is the most therapeutic moment of the wait.'
            },
            {
                id: 'trap',
                label: '採買誤區',
                labelEn: 'Buying Trap',
                summary: '太晚來真的會買不到',
                summaryEn: 'Will Sell Out if Late',
                story: '雖然標榜賣到晚上七點，但通常下午五點左右就會掃攤。建議四點前抵達比較保險。',
                storyEn: 'They claim to sell until 7 PM, but usually cleared out by 5 PM. Arrive before 4 PM to be safe.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '辣醬是一定要加的魂',
                summaryEn: 'The Spicy Sauce Soul',
                story: '這家的辣醬帶點甜與鹹，不會太嗆，能把蔬菜的鮮味提昇到另一個境界。一定要請老闆加一點！',
                storyEn: 'The house sauce is sweet and salty with a mild kick, elevating the veggie sweetness to another level. Ask for it!'
            }
        ],
        insiderTip: {
            teaser: '一天只賣 5 小時，買不到就沒了',
            teaserEn: 'Only 5 hours a day. Sold out = gone.',
            full: {
                story: '下午 2 點才開始賣，通常 5 點就賣完了。皮酥底脆，肉餡鮮甜多汁。在地人會一次買 10 個以上帶回家。記得要加辣醬，是老闆自己調的。',
                storyEn: 'Sales start at 2 PM and usually sell out by 5 PM. Crispy bottom, juicy filling. Locals often buy 10+ at a time. Be sure to add the signature house-made spicy sauce.',
                exactLocation: '裕農路上，認明排隊人龍',
                exactLocationEn: 'On Yunong Rd (Look for the queue)',
                mustTry: '水煎包 + 自製辣醬',
                mustTryEn: 'Pan-fried buns + house-made spicy sauce',
                avoid: '太早去還沒開、太晚去沒得買',
                avoidEn: 'Don\'t go too early (not open) or too late (sold out)',
                bestTime: '14:30',
                bestTimeEn: '14:30'
            }
        }
    },
    {
        id: 'tn-f3',
        title: '六千牛肉湯',
        titleEn: 'Six Thousand Beef Soup',
        type: 'food',
        duration: '45分',
        image: '🥣',
        coverImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800',
        description: '台南清晨最迷人的氣味，凌晨三點就有人排隊的傳奇牛肉湯。',
        descriptionEn: 'Tainan\'s most charming morning scent. A legendary beef soup with queues starting at 3 AM.',
        price: 150,
        address: '台南市中西區海安路一段63號',
        rating: 4.6,
        lat: 22.9897,
        lng: 120.1982,
        region: 'tainan',
        authorId: 'c-tw2',
        openingHours: '05:00-賣完為止（週二至週四公休）',
        tags: ['早餐', '必吃', '台南靈魂'],
        themeColor: '#8B4513',
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃推薦',
                labelEn: 'Must Eat',
                summary: '第一鍋最鮮甜的肉汁',
                summaryEn: 'The Sweetest First Pot',
                story: '為了喝到那傳說中第一口最濃郁的牛肉精華，許多人不惜在凌晨三點就來排隊。那份鮮甜是台南人的早晨信仰。',
                storyEn: 'Many line up at 3 AM just for the legendary first pot of rich beef essence. That sweetness is a Tainan morning belief.'
            },
            {
                id: 'artisan',
                label: '職人風景',
                labelEn: 'Artisan View',
                summary: '觀察粉嫩溫體牛的瞬間',
                summaryEn: 'Fresh Pink Beef View',
                story: '看著老闆動作俐落地將滾燙高湯淋在現切的溫體牛上，肉片瞬間變成粉紅色，這是最療癒的職人畫面。',
                storyEn: 'Watch the owner deftly pour boiling broth over fresh local beef, turning slices pink instantly - the most therapeutic artisan scene.'
            },
            {
                id: 'trap',
                label: '排隊誤區',
                labelEn: 'Waiting Trap',
                summary: '不要太晚來（七點前）',
                summaryEn: 'Don\'t Be Late (Before 7 AM)',
                story: '六千以快速售罄聞名。週末早上七點以後才來，往往只能看到「已售完」的牌子。',
                storyEn: 'Six Thousand sells out fast. Arriving after 7 AM on weekends usually means seeing the "Sold Out" sign.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '搭配白飯淋點肉汁',
                summaryEn: 'Rice with a Dash of Gravy',
                story: '內行吃法是點一碗白飯，將牛肉湯淋一點點在白米上。飯粒吸飽肉香，比單喝湯更有飽足感。',
                storyEn: 'Pros order a bowl of white rice and drizzle a bit of beef broth on it. The rice absorbs the aroma, more satisfying than soup alone.'
            }
        ],
        insiderTip: {
            teaser: '第一鍋湯頭才是精華中的精華',
            teaserEn: 'The first pot of soup is the absolute essence',
            full: {
                story: '雖然清晨五點才開賣，但內行人會在三點就來拿號碼牌。那是為了喝到「第一鍋」最鮮甜、最濃郁的肉汁。牛肉只用溫體牛，熱湯淋下去的瞬間肉質呈現粉紅色，那是台南人的極致早餐。',
                storyEn: 'Though sales start at 5 AM, pros get their numbers at 3 AM just for the "first pot" - the sweetest, most concentrated broth. Only fresh local beef is used, turning pink the moment the hot broth is poured.',
                exactLocation: '海安路一段，府前路交叉口附近',
                exactLocationEn: 'On Haian Rd Sec 1, near Fuqian Rd intersection',
                mustTry: '招牌牛肉湯（第一鍋）',
                mustTryEn: 'Signature Beef Soup (First Pot)',
                avoid: '週末早上 7 點以後才來，通常已經賣完了',
                avoidEn: 'Showing up after 7 AM on weekends (usually sold out)',
                bestTime: '04:30 拿號碼牌',
                bestTimeEn: '04:30 for queue number'
            }
        }
    },
    {
        id: 'tn-f4',
        title: '台南金素粽',
        titleEn: 'Tainan Golden Vegetarian Zongzi',
        type: 'food',
        duration: '30分',
        image: '🍙',
        coverImage: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800',
        description: '台南在地人激推的素食早餐，充滿花生香與Q彈口感。',
        descriptionEn: 'Locally recommended vegetarian breakfast, full of peanut aroma and chewy texture.',
        price: 45,
        address: '台南市中西區',
        rating: 4.7,
        lat: 22.9912,
        lng: 120.1990,
        region: 'tainan',
        authorId: 'c-tw2',
        openingHours: '06:00-11:00',
        tags: ['素食友善', '在地早餐'],
        themeColor: '#D4AC0D',
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃推薦',
                labelEn: 'Must Eat',
                summary: '花生粽配熱味噌湯',
                summaryEn: 'Peanut Zongzi & Miso Soup',
                story: '台南人吃粽子一定要撒滿滿的花生粉。金素粽的糯米Q彈，每一口都吃得到飽滿的花生，再配一碗熱湯就是完美早晨。',
                storyEn: 'Tainan locals love zongzi with plenty of peanut powder. The sticky rice is chewy and packed with whole peanuts - perfect with a bowl of hot soup.'
            },
            {
                id: 'artisan',
                label: '傳統美學',
                labelEn: 'Traditional Aesthetic',
                summary: '竹葉包裹的幾何藝術',
                summaryEn: 'Geometric Art in Leaves',
                story: '觀察阿姨們俐落包粽子的手勢。竹葉交疊出的完美四角錐形狀，是這份在地美味的靈魂載體。',
                storyEn: 'Watch the ladies deftly fold the bamboo leaves. The perfect tetrahedral shape is the soul carrier of this local delicacy.'
            },
            {
                id: 'trap',
                label: '時間提醒',
                labelEn: 'Timing Reminder',
                summary: '週末早上九點人潮高峰',
                summaryEn: '9 AM Peak on Weekends',
                story: '這是許多在地人每週必吃的早餐。週末九點左右排隊人潮較多，想要悠閒吃建議八點前抵達。',
                storyEn: 'A weekend staple for many locals. Queues peak around 9 AM; arrive before 8 AM for a relaxed breakfast.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '淋上獨門鹹甜醬油膏',
                summaryEn: 'Drizzle the Secret Sauce',
                story: '台南的醬油膏帶點甜、但不膩。金素粽的醬汁比例絕佳，能讓素食的層次豐富起來，不吃素的人也會愛上。',
                storyEn: 'Tainan soy paste is sweet but not cloying. The secret sauce ratio here makes the vegetarian flavors pop - even non-vegetarians will love it.'
            }
        ],
        insiderTip: {
            teaser: '台南素食者的隱藏口袋名單',
            teaserEn: 'A hidden gem for vegetarians in Tainan',
            full: {
                story: '誰說台南早餐只有牛肉湯？這間素粽是許多台南人的心頭好。滿滿的花生與醬油膏，配上一碗味噌湯，是台南最溫暖的素食開場。',
                storyEn: 'Who says Tainan breakfast is only beef soup? This veg zongzi is a local favorite. Packed with peanuts and savory sauce, paired with miso soup, it\'s the warmest vegetarian start.',
                exactLocation: '中西區傳統市場週邊',
                exactLocationEn: 'Around West Central District markets',
                mustTry: '花生素粽 + 味噌湯',
                mustTryEn: 'Peanut Vegetarian Zongzi + Miso Soup',
                avoid: '午餐時間才來，通常已收攤',
                avoidEn: 'Coming at lunch time (usually closed by then)',
                bestTime: '08:00',
                bestTimeEn: '08:00'
            }
        }
    },
    {
        id: 'tn-f5',
        title: '國華街美食聚落',
        titleEn: 'Guohua St Food Hub',
        type: 'food',
        duration: '2小時',
        image: '🍲',
        coverImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800',
        description: '台南美食的一級戰區，集結了碗粿、蚵嗲、春捲等經典台南味。',
        descriptionEn: 'The frontline of Tainan cuisine, gathering classic bowls of rice cakes, oyster cakes, and spring rolls.',
        price: 200,
        address: '台南市中西區國華街',
        rating: 4.8,
        lat: 22.9930,
        lng: 120.1980,
        region: 'tainan',
        authorId: 'c-tw2',
        openingHours: '10:00-18:00',
        tags: ['美食街', '必訪', '台南味'],
        themeColor: '#D35400',
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃清單',
                labelEn: 'Must Eat List',
                summary: '碗粿、春捲、割包三冠王',
                summaryEn: 'The "Big Three" Trio',
                story: '富盛號碗粿、金得春捲、阿松割包就在旁邊。建議三人分食，每一家都點一份，才能一次攻破。',
                storyEn: 'Fusheng Rice Cakes, Jinde Spring Rolls, and Asong Gua-bao are neighbors. Share one of each with friends to conquer it all.'
            },
            {
                id: 'artisan',
                label: '在地風景',
                labelEn: 'Local View',
                summary: '永樂市場的市井喧囂',
                summaryEn: 'Yongle Market Bustle',
                story: '坐在街邊跟著在地人一起吃早餐，聽著機車穿梭與攤商叫賣，那是台南最具生命力的時刻。',
                storyEn: 'Sit curbside eat breakfast with locals, hearing scooters pass and vendors shout - the most vibrant side of Tainan.'
            },
            {
                id: 'trap',
                label: '交通誤區',
                labelEn: 'Traffic Trap',
                summary: '開車進來會卡住 10 分鐘',
                summaryEn: '10-min Deadlock if Driving',
                story: '國華街非常窄，路邊還停滿機車。一旦開車進來，你會發現進退兩難。請務必停在周邊公立停車場。',
                storyEn: 'Guohua St. is narrow and packed with scooters. Driving in leads to a deadlock. Use public parking nearby.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '二樓市場內的攝影視角',
                summaryEn: '2F Market Photo Angle',
                story: '有些老市場建築可以上到二樓。從高處俯瞰國華街的人潮與色彩，是攝影師眼中的秘境。',
                storyEn: 'Some market buildings have 2F access. Looking down on the colors and crowds of Guohua St. is a photographer\'s secret.'
            }
        ],
        insiderTip: {
            teaser: '一條路吃遍台南百年的精華',
            teaserEn: 'Taste a century of Tainan on one street',
            full: {
                story: '富盛號碗粿、金得春捲、阿松割包...這些名字就是台南美食的保證。建議兩到三人一組，每樣點一份共享，才能在一個中午攻略最多的台南味。',
                storyEn: 'Fusheng Rice Cakes, Jinde Spring Rolls, Asong Gua-bao... these names are the guarantee of Tainan food. Travel in groups of 2-3 and share each dish to conquer the most flavors in one lunch.',
                exactLocation: '國華街三段與民族路交叉口',
                exactLocationEn: 'Intersection of Guohua St Sec 3 and Minzu Rd',
                mustTry: '富盛號碗粿 + 金得春捲',
                mustTryEn: 'Fusheng Rice Cakes + Jinde Spring Rolls',
                avoid: '千萬別開車進來，絕對會卡住',
                avoidEn: 'Never try to drive in; you will get stuck',
                bestTime: '11:00 (避開正午人潮)',
                bestTimeEn: '11:00 (Avoid peak lunch rush)'
            }
        }
    },
    {
        id: 'tn-exp1',
        title: '傳統椪餅手作體驗',
        titleEn: 'Traditional Pong-bing DIY',
        type: 'experiential',
        duration: '1小時',
        image: '🫓',
        coverImage: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800',
        description: '親手製作台南傳統「香餅」，體驗府城流傳百年的坐月子點心文化。',
        descriptionEn: 'Hand-make traditional Tainan "Fragrant Cakes" and experience the century-old postpartum snack culture.',
        price: 350,
        address: '台南市中西區',
        rating: 4.9,
        lat: 22.9950,
        lng: 120.2000,
        region: 'tainan',
        authorId: 'c-tw2',
        openingHours: '10:00-17:00 (需預約)',
        tags: ['手作', '文化體驗', '台南限定'],
        themeColor: '#AF601A',
        expertStories: [
            {
                id: 'must-do',
                label: '體驗核心',
                labelEn: 'Core Experience',
                summary: '親手揉捏黑糖麵團',
                summaryEn: 'Kneading Brown Sugar Dough',
                story: '椪餅的核心在層次感。在老師帶領下學會掌握力道，讓麵皮與香氣十足的黑糖完美結合。',
                storyEn: 'The core of Pong-bing is layering. Under the master’s guidance, learn the pressure needed to blend dough and aromatic brown sugar.'
            },
            {
                id: 'artisan',
                label: '文化風景',
                labelEn: 'Cultural View',
                summary: '觀察椪餅澎起的魔法',
                summaryEn: 'The Magic of Puffing Up',
                story: '看著烤箱裡的麵團慢慢吹氣變成一個球體，那是過程中最高興、最驚喜的一刻，也是台南孩子共同的回憶。',
                storyEn: 'Watching the dough slowly puff up into a sphere in the oven is the most joyful, surprising moment - a shared memory for Tainan kids.'
            },
            {
                id: 'trap',
                label: '預約誤區',
                labelEn: 'Booking Trap',
                summary: '至少提前三天預約',
                summaryEn: 'Book at Least 3 Days Prior',
                story: '椪餅手作需要準備新鮮材料。如果臨時興起前往，通常因名額有限或材料不足而落空，請務必先打電話。',
                storyEn: 'Handmaking Pong-bing requires fresh materials. Walk-ins usually fail due to limited spots; always call ahead.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '學會麻油煎蛋吃法',
                summaryEn: 'Learning Sesame Egg Method',
                story: '體驗完後，老師會教你傳統的「麻油椪餅煎蛋」。這是在台南府城流傳百年的「月內人（坐月子）」補品吃法。',
                storyEn: 'After crafting, the teacher will show you "Sesame Fried Egg Pong-bing" - a century-old traditional postpartum supplement in Tainan.'
            }
        ],
        insiderTip: {
            teaser: '傳說中台南人的「平民燕窩」',
            teaserEn: 'The "commoner\'s bird\'s nest" of Tainan',
            full: {
                story: '椪餅內層抹著黑糖粉，加熱後會膨脹成圓球。以前台南婦女坐月子時，會把椪餅中間挖洞打入雞蛋，用麻油煎來補身體。透過手作，你可以感受到麵皮與黑糖在指尖的溫度。',
                storyEn: 'Pong-bing is coated with brown sugar inside and puffs into a sphere when heated. In the past, Tainan women would crack an egg inside and fry it with sesame oil for postpartum recovery. Feel the warmth of dough and sugar through your hands.',
                exactLocation: '孔廟或神農街附近的文創工坊',
                exactLocationEn: 'Creative workshops near Confucius Temple or Shennong St',
                mustTry: '親手戳破餅皮打蛋的瞬間',
                mustTryEn: 'The moment of cracking the egg into the pastry',
                avoid: '沒預約的話通常無法體驗',
                avoidEn: 'Usually no walk-ins available without booking',
                bestTime: '15:00',
                bestTimeEn: '15:00'
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
        coverImage: 'https://images.unsplash.com/photo-1596402184320-417d7178b2cd?auto=format&fit=crop&q=80&w=800',
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
        themeColor: '#283747',
        expertStories: [
            {
                id: 'must-do',
                label: '入住推薦',
                labelEn: 'Stay Perk',
                summary: '頂樓泳池望向老城',
                summaryEn: 'Rooftop Pool City View',
                story: '煙波台南館的頂樓景色非常開闊。在泳池邊放鬆看著古都的城市天際線，是旅途中最有質感的放空時刻。',
                storyEn: 'The rooftop at Lakeshore Tainan offers wide views. Relax by the pool watching the ancient city skyline for a refined getaway moment.'
            },
            {
                id: 'artisan',
                label: '建築風景',
                labelEn: 'Artisan View',
                summary: '現代工藝結合老靈魂',
                summaryEn: 'Modern Craft Meets Old Soul',
                story: '飯店大廳與客房設計巧妙融入了台南的磨石子與鐵窗花符號。這是一場現代精品與在地文化的優雅對話。',
                storyEn: 'Lobby and room designs subtly blend Tainan\'s terrazo and iron grille symbols - an elegant dialogue between modern luxury and local culture.'
            },
            {
                id: 'trap',
                label: '停車誤區',
                labelEn: 'Parking Trap',
                summary: '地下停車場週末較擁擠',
                summaryEn: 'Basement Parking Crowded on Weekends',
                story: '飯店位於市中心熱區，週末房客較多。如果您預計下午三點準時進房，建議稍微提早一點抵達以確保車位。',
                storyEn: 'Located in a central hotspot, the hotel fills up on weekends. If checking in at 3 PM, arrive slightly early to secure a parking spot.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '隔壁就是司法博物館',
                summaryEn: 'Judicial Museum Next Door',
                story: '飯店隔壁就是由舊法院改建的司法博物館。那座精美的巴洛克建築是攝影愛好者的天堂，而且免費入場。',
                storyEn: 'Next door is the Judicial Museum, converted from an old court. The stunning Baroque architecture is a photo haven and free to enter.'
            }
        ],
        insiderTip: {
            teaser: '走路就能到國華街和神農街',
            teaserEn: 'Walking distance to Guohua St. and Shennong St.',
            full: {
                story: '位置極佳，步行就能到台南最精華的美食區。房間設計融入台南老宅元素，早餐自助吧有在地美食。建議住高樓層可以看到台南老城區夜景。',
                storyEn: 'Prime location within walking distance of Tainan\'s best eats. Room designs incorporate local heritage elements. The breakfast buffet features Tainan specialties. Higher floors offer great old-city night views.',
                exactLocation: '中西區市中心',
                exactLocationEn: 'West Central District center',
                mustTry: '早餐自助吧的台南在地小吃',
                mustTryEn: 'The Tainan specialties at the breakfast buffet',
                avoid: '假日價格較高',
                avoidEn: 'Prices are significantly higher on weekends',
                bestTime: '入住後散步到神農街看夜景',
                bestTimeEn: 'A night walk to Shennong St after check-in'
            }
        }
    },
];
