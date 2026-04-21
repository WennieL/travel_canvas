import { TravelItem } from '../../../types';

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
        addressEn: 'Taichung City',
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
                storyEn: 'From Bib Gourmand 2023 to 1 Michelin star in 2024, shocking the culinary world. The chef treats ice cream as the main course, with a 7-dish tasting menu explaining seasonal themes. Each dish is a work of art. The counter is the best seat to watch the chef work.',
                exactLocation: '台中西區（需預約，確認後提供地址）',
                exactLocationEn: 'West District, Taichung (Address provided after reservation)',
                mustTry: '吧台座位 + 七道套餐 NT$1,800',
                mustTryEn: 'Counter seating + 7-course set (NT$1,800)',
                avoid: '不要臨時去，100% 預約制',
                avoidEn: 'Don\'t walk in; strictly reservation only',
                bestTime: '提前 2 週線上預約',
                bestTimeEn: 'Book online 2 weeks in advance'
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
        addressEn: 'Taichung City',
        rating: 4.7,
        lat: 24.1790,
        lng: 120.6454,
        region: 'taichung',
        authorId: 'c-tw3',
        openingHours: '11:30-14:00, 17:30-21:00',
        tags: ['🌟米其林', '台菜'],
        tier: 'premium',
        insiderTip: {
            teaser: '不要看菜單！平日 11:20 排隊，專點隱藏版黑板菜',
            teaserEn: 'Ignore the menu! Queue at 11:20 AM and ask for the secret blackboard dishes.',
            full: {
                story: '走到逢甲無尾巷底端才會看到的米其林必比登台菜小館。最內行的吃法不是看那本紙本菜單，而是直接看老闆隨機手寫的推薦。',
                storyEn: 'A Michelin Bib Gourmand Taiwanese spot hidden at the end of a hidden dead-end alley near Feng Chia. The pro move isn\'t the paper menu, but the secret handwritten chalkboard specials.',
                exactLocation: '逢甲商圈外圍，走到一條看起來沒路的無尾巷底端。',
                exactLocationEn: 'Edge of Feng Chia market, at the end of a hidden dead-end alley.',
                mustTry: '直接問老闆：「今天市場有帶什麼隱藏版的漁獲或青菜？」',
                mustTryEn: 'Ask the boss: "Any off-menu fresh catches or seasonal greens from the market today?"',
                avoid: '⚠️ 假日絕對排到崩潰，而且不接受當天訂位。請務必在平日 11:20 (開門前 10 分鐘) 在門口等候第一輪入座。',
                avoidEn: 'Weekends are chaotic; no same-day bookings. Be there at 11:20 AM (10 mins before opening) on weekdays for the first round of seating.',
                bestTime: '11:20 (搶平日午餐第一輪)',
                bestTimeEn: '11:20 AM (for the first lunch round on weekdays)'
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
        addressEn: 'Taichung City',
        rating: 4.5,
        lat: 24.1470,
        lng: 120.6636,
        region: 'taichung',
        authorId: 'c-tw3',
        openingHours: '週三、五、日 11:00-14:00',
        tags: ['麵食', '限時營業'],
        tier: 'premium',
        insiderTip: {
            teaser: '沒開的日子比營業多！10:50 排隊搶菜單外的「冰花煎餃」',
            teaserEn: 'Closed more often than open! Queue at 10:50 AM for off-menu lattice dumplings.',
            full: {
                story: '老闆極度任性，一週只營業三天，其餘時間都在市場挑菜和熬那鍋要煮 8 小時的牛肉湯頭。坐在滿滿 1970 年代舊物的老宅裡吃麵，是極致的復古體驗。',
                storyEn: 'The eccentric owner opens only 3 days a week, spending the rest of the time sourcing ingredients and simmering the 8-hour beef broth. Dining in this 1970s antique-filled house is a peak retro experience.',
                exactLocation: '勤美誠品商圈的隱密靜巷內。',
                exactLocationEn: 'In a quiet hidden lane near CMP Park Lane.',
                mustTry: '除了招牌牛肉麵，內行人都知道要直接點菜單上沒寫的隱藏版「限量冰花煎餃」。',
                mustTryEn: 'Beyond the signature beef noodles, locals always order the off-menu limited "Lattice Dumplings."',
                avoid: '⚠️ 只有週三、五、日營業，錯過直接撲空。麵條賣完就拉下鐵門，千萬不要下午 1 點才去。',
                avoidEn: 'Only open Wed, Fri, Sun. They close as soon as noodles sell out, so don\'t arrive after 1 PM.',
                bestTime: '10:50 (開門前排隊，確保能點到限量餃子)',
                bestTimeEn: '10:50 AM (Queue before opening to secure the dumplings)'
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
        addressEn: 'Taichung City',
        rating: 4.7,
        lat: 24.1402,
        lng: 120.6628,
        region: 'taichung',
        authorId: 'c-tw3',
        openingHours: '12:00-18:00',
        tags: ['咖啡', '甜點'],
        tier: 'premium',
        insiderTip: {
            teaser: '無候位系統的老宅，平日 12 點來點「巫婆豆」配乳酪',
            teaserEn: 'No waitlist system. Come at 12PM weekdays, order the secret "Witch Blend" coffee.',
            full: {
                story: '隱身國美館旁小巷的究極職人店。老闆自己烘豆，店內只有幾張極度私密的桌子。招牌蛋糕是用武陵農場直送的特級蘋果做的。',
                storyEn: 'The ultimate artisan shop hidden in an alley near the museum. The owner roasts his own beans, and seating is extremely limited and intimate. The signature cake uses premium apples delivered directly from Wuling Farm.',
                exactLocation: '國美館附近巷弄內，外觀非常低調。',
                exactLocationEn: 'Alleys near NTMoFA; the exterior is very discreet.',
                mustTry: '熟客隱藏版點法：請老闆用帶有獨特花香的「巫婆配方豆 (Witch Blend)」做手沖，搭配蘋果乳酪蛋糕。',
                mustTryEn: 'Pro tip: Ask for a hand-drip using the floral "Witch Blend" beans, paired with the apple cheesecake.',
                avoid: '⚠️ 這裡沒有候位系統或登記表！週末客滿時你只能在門口乾等。絕對要避開週末下午。',
                avoidEn: 'No waitlist system! You\'ll just have to wait outside if it\'s full. Strictly avoid weekend afternoons.',
                bestTime: '12:00 (平日剛開門時，直接霸佔最舒服的角落)',
                bestTimeEn: '12:00 PM (Weekdays right at opening to snag the best corner)'
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
        addressEn: 'Taichung City',
        rating: 4.6,
        lat: 24.1330,
        lng: 120.6670,
        region: 'taichung',
        authorId: 'c-tw3',
        openingHours: '10:00-18:00 (週一休)',
        tags: ['老宅', '咖啡'],
        tier: 'premium',
        insiderTip: {
            teaser: '指定「後院紅磚牆」王座，入座請秒點隱藏版昭和布丁',
            teaserEn: 'Request the "Brick Wall" courtyard seat, and immediately order the secret Showa Pudding.',
            full: {
                story: '明明在喧囂大街上，推開木門卻像穿越到另一個時空。後方有一個陽光灑落的極美紅磚牆庭院。',
                storyEn: 'Despite being on a busy street, opening the wooden door feels like stepping into another dimension. There\'s a stunning sunlit brick-walled courtyard in the back.',
                exactLocation: '五權火車站步行 5 分鐘。',
                exactLocationEn: '5-min walk from Wuquan Railway Station.',
                mustTry: '入座第一件事：直接問老闆還有沒有菜單外的隱藏甜點「大人味昭和布丁」，通常下午 3 點前就會秒殺完售。',
                mustTryEn: 'First thing: Ask for the off-menu "Adult Showa Pudding." It usually sells out by 3 PM.',
                avoid: '⚠️ 週末庭院的位子絕對被網美佔滿。平日下午去，且務必要主動說「我想坐後院紅磚牆邊的位子」。',
                avoidEn: 'Weekends are packed with influencers. Go on a weekday and explicitly ask for the courtyard brick wall seating.',
                bestTime: '14:00 (平日午後，陽光斜射在紅磚牆上的角度最完美)',
                bestTimeEn: '14:00 (Weekdays when the sunlight hits the brick wall at the perfect angle)'
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
        addressEn: 'Taichung City',
        rating: 4.9,
        lat: 24.1500,
        lng: 120.6700,
        region: 'taichung',
        authorId: 'c-tw3',
        openingHours: '11:00-17:00',
        tags: ['🏆國際得獎', '伴手禮'],
        tier: 'premium',
        insiderTip: {
            teaser: '工作室營業時間極迷離！私訊預約帶走隱藏版果醬氣泡飲',
            teaserEn: 'Studio hours are erratic! DM to book and grab the secret jam sparkling drink.',
            full: {
                story: '被譽為「果醬女王」的柯亞，用茂谷柑、蜜柑等台灣在地水果做出征服英國評審、狂拿 8 面金牌的世界第一果醬。',
                storyEn: 'Known as the "Jam Queen," Keya uses local Murcott and Honey mandarins to conquer British judges, winning 8 golds for the world\'s best marmalade.',
                exactLocation: '台中市工作室（去之前務必線上確認營業狀況）。',
                exactLocationEn: 'Taichung Studio (Check business status online before visiting).',
                mustTry: '很多人只買果醬，但內行人會點一杯用冠軍果醬調製的隱藏版「果醬氣泡飲」外帶，沁涼解暑。',
                mustTryEn: 'Most just buy jam, but pros order the off-menu "Jam Sparkling Drink" made with championship marmalade.',
                avoid: '⚠️ 千萬不要沒確認就直接殺過去！實體工作室對外開放時間極度不固定，去之前一定要先私訊粉專確認。',
                avoidEn: 'Do NOT just drop by! The studio hours are highly irregular; message their social media first to confirm.',
                bestTime: '買完果醬後直接外帶氣泡飲',
                bestTimeEn: 'Grab the sparkling drink after buying your jams'
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
        addressEn: 'Taichung City',
        rating: 4.6,
        lat: 24.2820,
        lng: 120.7850,
        region: 'taichung',
        authorId: 'c-tw3',
        openingHours: '全天',
        tags: ['步道', '秘境'],
        tier: 'premium',
        insiderTip: {
            teaser: '大坑步道人擠人，這裡走 5 公里找無名阿嬤買隱藏粉粿冰',
            teaserEn: 'Avoid the crowded Dakeng trails. Walk 5km here and find the nameless grandma\'s secret jelly ice.',
            full: {
                story: '週末的大坑步道像菜市場一樣擠，而這條沿著日治時期八寶圳延伸的 5 公里步道才是真秘境。全程平坦且樹木極度茂密，夏天走完全不曬。',
                storyEn: 'While Dakeng trails feel like crowded markets on weekends, Boasting 5km along the Japanese-era Babao Canal, this trail is a true hidden gem. It\'s flat and densely shaded—perfect for summer walks.',
                exactLocation: '從石岡區萬仙街入口進去。',
                exactLocationEn: 'Enter from Wanxian St in Shigang District.',
                mustTry: '走到步道終點，如果運氣好會遇到一個沒有招牌的在地阿嬤，一定要跟她買一杯菜單上沒有的「純手工粉粿冰」。',
                mustTryEn: 'At the end of the trail, if you\'re lucky, find the nameless local grandma and buy her off-menu "Handmade Jelly Ice."',
                avoid: '⚠️ 森林生態極好，意味著小黑蚊極其兇猛！切記穿長褲並帶上當地最強效的防蚊液，否則會被咬成紅豆冰。',
                avoidEn: 'Beware of vicious midges! Wear long pants and bring the strongest repellent, or you\'ll be covered in bites.',
                bestTime: '07:00 (清晨的微光穿過森林最美，且不會熱)',
                bestTimeEn: '07:00 AM (Early light through the trees is magical and it\'s cool)'
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
        addressEn: 'Taichung City',
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
                storyEn: 'Originally a building slated for demolition, designers transformed it into a plant-filled industrial-chic hotel. The lobby boasts triple-height ceilings with light streaming from the skylights.',
                exactLocation: '台中火車站步行 5 分鐘',
                exactLocationEn: '5-min walk from Taichung Railway Station',
                mustTry: '在大廳的植物叢林裡喝一杯咖啡',
                mustTryEn: 'Have a coffee in the lobby\'s plant jungle',
                avoid: '隔音普通，怕吵的選高樓層',
                avoidEn: 'Soundproofing is average; light sleepers should book higher floors',
                bestTime: '下午 check-in 後到大廳拍照',
                bestTimeEn: 'After check-in for photos in the lobby'
            }
        }
    },
    // === NEW SPOTS FOR TEMPLATES ===
    {
        id: 'tc-f8',
        title: '第二市場阿嬤蘿蔔糕',
        titleEn: "Second Market A-Ma's Radish Cake",
        type: 'food',
        duration: '45分',
        image: '🍳',
        description: '台中人的靈魂早餐！傳承三代的味道，蘿蔔糕+糯米腸+蛋的「三樣」組合。',
        descriptionEn: 'The soul of Taichung breakfast! A 3rd-gen classic combo: Radish cake + sticky rice sausage + egg.',
        price: 65,
        address: '台中市第二市場',
        addressEn: 'Taichung City',
        rating: 4.4,
        lat: 24.1430,
        lng: 120.6780,
        region: 'taichung',
        authorId: 'c-tw3',
        openingHours: '06:30-18:00',
        tags: ['早餐', '在地', '銅板美食'],
        insiderTip: {
            teaser: '不要只點蘿蔔糕！內行人點「三樣」，配隔壁老賴紅茶',
            teaserEn: 'Don\'t just get the cake! Order the "Combo 3" with a tea from next door.',
            full: {
                story: '這是台中的早晨社交中心。排隊的人潮從沒斷過，但速度很快。看到阿嬤在鐵板上飛快地翻動食材，那是台中的節奏。',
                storyEn: "This is the social heart of morning Taichung. The line moves fast. Watching A-Ma's rhythmic flipping on the griddle is the heartbeat of this city.",
                exactLocation: '第二市場內（三民路入口旁）',
                exactLocationEn: 'Inside Second Market, near Sanmin Rd entrance',
                mustTry: '蘿蔔糕 + 糯米腸 + 蛋（俗稱三樣）',
                mustTryEn: 'Radish cake + Sticky rice sausage + Egg (The "Big Three")',
                avoid: '週末早上 9 點到 11 點人最多，建議更早或下午去',
                avoidEn: 'Avoid 9AM-11AM weekends. Go early morning or late afternoon.',
                bestTime: '07:30 (最道地的早餐時段)',
                bestTimeEn: '07:30 AM (Pure local breakfast vibe)'
            }
        }
    },
    {
        id: 'tc-a2',
        title: '科博館：恐龍紅綠燈',
        titleEn: 'NMNS: Dinosaur Crossing',
        type: 'attraction',
        duration: '1.5小時',
        image: '🦖',
        description: '全台唯一正在奔跑的小恐龍紅綠燈！附近還有亞洲最大的熱帶雨林室。',
        descriptionEn: 'The only dinosaur traffic light in Taiwan! Next to the largest rainforest dome in Asia.',
        price: 100,
        address: '台中市北區館前路',
        addressEn: 'Taichung City',
        rating: 4.8,
        lat: 24.1550,
        lng: 120.6650,
        region: 'taichung',
        authorId: 'c-tw3',
        tags: ['奇趣', '博物館', '打卡'],
        insiderTip: {
            teaser: '紅綠燈不只有小綠人，還有會跑步的小恐龍',
            teaserEn: 'The green man is a running dinosaur here!',
            full: {
                story: '科博館外的交通號誌藏著驚喜。這裡的小恐龍會隨著節奏奔跑。進館後必看生命科學廳的巨型機械恐龍，還會發出吼聲。',
                storyEn: 'The traffic signal hides a prehistoric surprise. Inside the museum, the animatronic dinosaurs are iconic and roar at visitors.',
                exactLocation: '館前路口與科博館內',
                exactLocationEn: 'Guanqian Rd intersection & inside the museum',
                mustTry: '在門口拍恐龍紅綠燈，進館看暴龍',
                mustTryEn: 'Photo with the dino light, then visit the T-Rex inside',
                avoid: '週一休館，別白跑一趟',
                avoidEn: 'Closed on Mondays.',
                bestTime: '平日早上，避開戶外教學團',
                bestTimeEn: 'Weekday mornings to avoid school groups'
            }
        }
    },
    {
        id: 'tc-a3',
        title: '中友百貨主題廁所',
        titleEn: 'Chungyo Themed Toilets',
        type: 'attraction',
        duration: '1小時',
        image: '🚽',
        description: '世界十大精彩廁所！每層樓都有不同主題：微醺可卡、海底世界、秘密花園。',
        descriptionEn: 'World top 10 incredible toilets! Each floor has a unique theme from underwater to coking.',
        price: 0,
        address: '台中市三民路',
        addressEn: 'Taichung City',
        rating: 4.5,
        lat: 24.1520,
        lng: 120.6860,
        region: 'taichung',
        authorId: 'c-tw3',
        tags: ['設計', '逛街', '奇趣'],
        insiderTip: {
            teaser: '百貨公司不是來逛街，是來參觀廁所的',
            teaserEn: 'You don\'t come for shopping; you come for the toilets!',
            full: {
                story: '中友百貨的廁所設計曾獲國際大獎。推薦 C 棟 7 樓的「可口可樂」主題與 6 樓的「秘密花園」。甚至還有在廁所裡喝下午茶的感覺。',
                storyEn: 'International award-winning designs. Floor 7C (Coca-Cola) and 6C (Secret Garden) are the highlights.',
                exactLocation: '中友百貨 A, B, C 各棟樓層',
                exactLocationEn: 'Across Buildings A, B, and C',
                mustTry: '逐層尋找你的最愛，推薦 C 棟',
                mustTryEn: 'Explore floor by floor, prioritize Building C',
                avoid: '有些主題是女廁限定，男生請注意標誌',
                avoidEn: 'Some star themes are ladies-only; watch the signs.',
                bestTime: '平日下午，逛累了進來吹冷氣',
                bestTimeEn: 'Weekday afternoons for a cool break'
            }
        }
    },
    {
        id: 'tc-f4',
        title: '一中街商圈',
        titleEn: 'Yizhong Street',
        type: 'food',
        duration: '2小時',
        image: '🍢',
        description: '台中學生的美食基地。雞排、滷味、豐仁冰，CP值最高的夜市首選。',
        descriptionEn: 'The student food base. Fried chicken, luwei, and Fengren ice. Best value night market.',
        price: 200,
        address: '台中市北區一中街',
        addressEn: 'Taichung City',
        rating: 4.6,
        lat: 24.1490,
        lng: 120.6850,
        region: 'taichung',
        authorId: 'c-tw3',
        tags: ['夜市', '美食', '在地'],
        insiderTip: {
            teaser: '連鎖店不要吃！必點天使雞排與豐仁冰',
            teaserEn: 'Skip the chains! Get the Angel Chicken and Fengren Ice.',
            full: {
                story: '比起逢甲，一中街更在地。這裡的食物份量大且便宜。如果你看到一長排隊伍，那就是目標。',
                storyEn: 'More local than Fengjia. Portions are large and cheap. If there\'s a line, it\'s worth it.',
                exactLocation: '台中科技大學對面整區',
                exactLocationEn: 'Area opposite Taichung University of Tech',
                mustTry: '豐仁冰 + 一中大雞排',
                mustTryEn: 'Fengren Ice + Yizhong Fried Chicken',
                avoid: '晚餐時段極度擁擠，包包揹前面',
                avoidEn: 'Extremely crowded at dinner; wear your bag in front.',
                bestTime: '17:00 (夜市剛開始運作時)',
                bestTimeEn: '17:00 (Right when it starts up)'
            }
        }
    },
    {
        id: 'tc-f5',
        title: '春水堂 四維創始店',
        titleEn: 'Chun Shui Tang Original Store',
        type: 'food',
        duration: '2小時',
        image: '🧋',
        description: '珍珠奶茶的發源地！在這裡親手學習如何調製一杯完美的冷飲茶。',
        descriptionEn: 'The birthplace of Boba! Learn to craft the perfect pearl milk tea in this historic shop.',
        price: 550,
        address: '台中市西區四維街',
        addressEn: 'Taichung City',
        rating: 4.7,
        lat: 24.1380,
        lng: 120.6750,
        region: 'taichung',
        authorId: 'c-tw3',
        tags: ['體驗', '珍奶', '經典'],
        expertStories: [
            {
                id: 'must-eat',
                label: '必點推薦',
                labelEn: 'Must Eat',
                summary: '珍珠奶茶 & 功夫麵',
                summaryEn: 'Pearl Milk Tea & Gongfu Noodles',
                story: '來創始店一定要點大杯珍奶！珍珠軟 Q 有勁，配上一碗古早味的功夫麵，是台中人記憶中最經典的午茶組合。',
                storyEn: 'A large Boba is a must at the original store! The pearls are perfectly chewy, and paired with classic Gongfu noodles, it\'s the most iconic Taichung tea time combo.'
            },
            {
                id: 'must-do',
                label: '核心體驗',
                labelEn: 'Must Do',
                summary: '參與珍奶手作課程',
                summaryEn: 'Boba Making Class',
                story: '親手搖出屬於自己的珍奶非常療癒，還能獲得一張「珍奶認證證書」，非常有成就感。',
                storyEn: 'Shaking your own pearl milk tea is therapeutic, and you even get a certificate—extremely rewarding.'
            },
            {
                id: 'trap',
                label: '避坑指南',
                labelEn: 'Avoid Trap',
                summary: '避免週末無預約前往',
                summaryEn: 'Avoid Weekend Walk-ins',
                story: '四維創始店名氣極大，週末現場排隊至少一小時起跳。體驗課程務必在 5 天前先在網路上預約。',
                storyEn: 'The Siwei original store is legendary; weekend lines take at least an hour. Book the DIY class online at least 5 days ahead.'
            },
            {
                id: 'hidden',
                label: '在地私藏',
                labelEn: 'Hidden Gem',
                summary: '古色古香的大理石桌',
                summaryEn: 'Vintage Marble Tables',
                story: '這家店保留了早年的大理石圓桌與中式窗櫺，下午時分陽光灑進來的自然光下拍照最有復古氛圍。',
                storyEn: 'The shop retains its early marble tables and Chinese-style windows. The natural light in the afternoon creates a perfect retro vibe for photos.'
            }
        ],
        insiderTip: {
            teaser: '不只是喝奶茶，還要拿證書的珍奶手作課',
            teaserEn: 'Not just drinking; earn a certificate in Boba-making.',
            full: {
                story: '走入像古蹟一樣的老店，在大理石桌面上學習茶與奶的黃金比例。搖晃雪克杯的感覺非常治癒。',
                storyEn: 'Enter the historic shop and learn the golden ratio of tea and milk on marble tables. Shaking the cup is therapeutic.',
                exactLocation: '中市四維街 30 號',
                exactLocationEn: 'No. 30, Siwei St',
                mustTry: '珍奶 DIY 體驗（需預約）',
                mustTryEn: 'Boba DIY Experience (Reservation req.)',
                avoid: '一定要提前 5 天線上預訂體驗，不然只能坐著喝',
                avoidEn: 'Book 5 days ahead, or you can only watch.',
                bestTime: '平日下午 2 點的體驗場次',
                bestTimeEn: '2 PM weekday sessions'
            }
        }
    },
    {
        id: 'tc-a4',
        title: '全台太陽餅博物館',
        titleEn: 'Taiwan Sun Cake Museum',
        type: 'attraction',
        duration: '1.5小時',
        image: '🥮',
        description: '日治時期紅磚老建築「全安堂」改造。除了看歷史，還能親手捏出太陽餅。',
        descriptionEn: 'Housed in a Japanese-era red brick building. Explore history and mold your own sun cakes.',
        price: 250,
        address: '台中市中區台灣大道',
        addressEn: 'Taichung City',
        rating: 4.4,
        lat: 24.1400,
        lng: 120.6830,
        region: 'taichung',
        authorId: 'c-tw3',
        tags: ['老建築', '手作', '伴手禮'],
        expertStories: [
            {
                id: 'must-do',
                label: '必玩推薦',
                labelEn: 'Must Do',
                summary: '親手捏製太陽餅',
                summaryEn: 'Hand-make Sun Cakes',
                story: '在這裡可以從揉麵团開始體驗製作太陽餅。現烤出來的餅皮最酥，麥芽糖內餡還會微微牽絲。',
                storyEn: 'Experience making sun cakes from scratch. The freshly baked crust is flaky, and the maltose filling is delightfully warm and gooey.'
            },
            {
                id: 'must-eat',
                label: '必吃經典',
                labelEn: 'Must Eat',
                summary: '現烤出爐的太陽餅',
                summaryEn: 'Fresh Baked Sun Cake',
                story: '別只買包裝好的，一定要當場試吃剛出爐、還帶著溫度的太陽餅，那種療癒感完全不一樣。',
                storyEn: 'Don\'t just buy the boxes; you must try the warm ones fresh from the oven. The comfort level is on another floor.'
            },
            {
                id: 'trap',
                label: '避坑指南',
                labelEn: 'Avoid Trap',
                summary: '手作力道要輕',
                summaryEn: 'Gentle on the Dough',
                story: '捏餅皮時力道不可太大，否則烘烤後餅皮會裂開。聽從現場師傅的建議，慢慢捲出層次感。',
                storyEn: 'Don\'t press too hard when molding the dough, or it will crack when baking. Follow the master\'s advice and roll thin layers gently.'
            },
            {
                id: 'hidden',
                label: '在地私藏',
                labelEn: 'Hidden Gem',
                summary: '二樓紅磚古蹟空間',
                summaryEn: '2F Red Brick Heritage',
                story: '全安堂老建築本身就是歷史。二樓的木造結構與紅磚牆保存非常完整，在這裡喝茶看歷史展覽非常愜意。',
                storyEn: 'The Chuan-An Hall building is history itself. The 2F wooden structure and red brick walls are perfectly preserved; it\'s very cozy for tea and history.'
            }
        ],
        insiderTip: {
            teaser: '在百年紅磚房裡捏餅，還能看九個太陽的奧秘',
            teaserEn: 'Bake in a 100-year-old house and learn the sun cake secrets.',
            full: {
                story: '全安堂老建築本身就是極美的展品。二樓是藝文空間，一樓則是充滿香氣的手作區。捏出的皮要夠酥，內餡要夠甜。',
                storyEn: 'The building is an exhibit itself. 1F is for baking, 2F is an art space. The key is the flaky crust.',
                exactLocation: '台中車站步行 10 分鐘',
                exactLocationEn: '10-min walk from Taichung Station',
                mustTry: '手作太陽餅 DIY',
                mustTryEn: 'Sun Cake DIY',
                avoid: '手作完需要烘烤時間，建議安排在行程中間',
                avoidEn: 'Baking takes time; plan to stay for at least an hour.',
                bestTime: '上午 10:30 (完成後剛好拿著餅去吃午餐)',
                bestTimeEn: '10:30 AM (Ready just in time for lunch)'
            }
        }
    },
    {
        id: 'tc-a5',
        title: '審計新村',
        titleEn: 'Shenji New Village',
        type: 'attraction',
        duration: '2小時',
        image: '🏘️',
        description: '公務員舊宿舍改建的文創聚落。隨處可見的創意小店、市集與特色甜點。',
        descriptionEn: 'Former govt dorms turned creative hub. Full of indie shops, markets, and unique desserts.',
        price: 0,
        address: '台中市西區民生路',
        addressEn: 'Taichung City',
        rating: 4.6,
        lat: 24.1450,
        lng: 120.6620,
        region: 'taichung',
        authorId: 'c-tw3',
        tags: ['文創', '市集', '文青'],
        expertStories: [
            {
                id: 'must-do',
                label: '必逛推薦',
                labelEn: 'Must Do',
                summary: '暮暮市集尋寶',
                summaryEn: 'Mumu Market Treasure Hunt',
                story: '週末才有的大規模市集，聚集了台中的首飾、皮件、插畫工作者。每攤都是對生活的精緻想像。',
                storyEn: 'A weekend market featuring jewelry, leather goods, and illustrations from local creators. Each stall reflects a unique lifestyle vision.'
            },
            {
                id: 'must-eat',
                label: '必吃點心',
                labelEn: 'Must Eat',
                summary: '旅禾泡芙',
                summaryEn: 'L’herbe Puffs',
                story: '門口那頂巨大的泡芙帽是地標。一定要買現灌奶油的泡芙，外皮酥脆、內餡冰涼香甜。',
                storyEn: 'The giant puff hat outside is a landmark. You must get the fresh-filled puffs with crispy shells and icy sweet cream.'
            },
            {
                id: 'trap',
                label: '避坑指南',
                labelEn: 'Avoid Trap',
                summary: '週末人湖爆滿',
                summaryEn: 'Weekend Crowds',
                story: '週末下午 2 點到 5 點是巔峰時段，想要好好拍照幾乎不可能。建議平日 11 點剛開門時來。',
                storyEn: '2-5 PM on weekends is peak time; photography is impossible. Visit at 11 AM on weekdays when it just opens.'
            },
            {
                id: 'hidden',
                label: '在地私藏',
                labelEn: 'Hidden Gem',
                summary: '二樓木造廊道',
                summaryEn: '2F Wooden Corridor',
                story: '走上老宅二樓的小樓梯，從高處俯看整片村落的屋頂與市集人潮，是這裡最美的拍照視角。',
                storyEn: 'Climb the tiny wooden stairs to the 2F. Looking down at the rooftops and the market crowds is the best photography perspective here.'
            }
        ],
        insiderTip: {
            teaser: '二樓平檯是最佳視角，必買旅禾泡芙',
            teaserEn: 'The 2F plateau is the best view. Get the L’herbe puffs!',
            full: {
                story: '在這些發黃的老牆間穿梭，你會發現驚喜。這裡的小店都是在地職人的心血。週末還會有「暮暮市集」。',
                storyEn: 'Wander between the vintage walls for surprises. Each shop is a local artisan\'s dream. Mumu Market happens on weekends.',
                exactLocation: '國美館附近',
                exactLocationEn: 'Near NTMoFA',
                mustTry: '旅禾泡芙家門口的戴泡芙帽打卡',
                mustTryEn: 'Photo with the puff hats at L’herbe',
                avoid: '週末下午人潮爆滿，拍照要排隊',
                avoidEn: 'Avoid weekend afternoons if you hate crowds.',
                bestTime: '平日下午 3 點 (夕陽灑在老房子上的光線最美)',
                bestTimeEn: '3 PM Weekdays (Perfect golden hour light)'
            }
        }
    },
    {
        id: 'tc-a6',
        title: '台中國際歌劇院',
        titleEn: 'National Taichung Theater',
        type: 'attraction',
        duration: '1小時',
        image: '🏟️',
        description: '建築大師伊東豊雄的作品。無樑無柱的「美聲涵洞」，世界建築奇蹟。',
        descriptionEn: 'Designed by Toyo Ito. A beam-less "Sound Cave" and a world architectural wonder.',
        price: 0,
        address: '台中市西屯區',
        addressEn: 'Taichung City',
        rating: 4.9,
        lat: 24.1620,
        lng: 120.6400,
        region: 'taichung',
        authorId: 'c-tw3',
        tags: ['建築', '藝術', '地標'],
        expertStories: [
            {
                id: 'must-do',
                label: '必探體驗',
                labelEn: 'Must Do',
                summary: '空中花園迷宮',
                summaryEn: 'Rooftop Sky Garden',
                story: '搭電梯直達頂樓，在雪白的「火山口」造型植栽間散步，感受建築大師伊東豊雄的弧形美學。',
                storyEn: 'Take the elevator to the roof and wander among the white "volcano" planters. Feel Toyo Ito\'s signature curved aesthetics.'
            },
            {
                id: 'must-eat',
                label: '必訪空間',
                labelEn: 'Must Visit',
                summary: 'VVG 食尚空間',
                summaryEn: 'VVG Lifestyle Space',
                story: '五樓的選物與餐飲空間同樣維持了曲牆設計，坐在洞穴般的空間裡喝咖啡是極致奢華的享受。',
                storyEn: 'The 5F lifestyle and café areas share the same curved walls. Sipping coffee in this cave-like space is ultimate luxury.'
            },
            {
                id: 'trap',
                label: '避坑指南',
                labelEn: 'Avoid Trap',
                summary: '室內冷氣強勁',
                summaryEn: 'Strong Indoor AC',
                story: '為了維持昂貴音響器材與樂器的恆溫，館內冷氣非常強。即便外面 35 度，進來一定要備薄外套。',
                storyEn: 'To protect expensive equipment, it\'s very cold inside. Even if it\'s 35°C outside, bring a light jacket.'
            },
            {
                id: 'hidden',
                label: '在地私藏',
                labelEn: 'Hidden Gem',
                summary: '曲牆間的小耳朵',
                summaryEn: 'Ears in the Walls',
                story: '尋找牆上的圓形通風孔，那被稱為「美聲涵洞」的小耳朵。在特定角落，你可以聽到不可思議的聲音反射。',
                storyEn: 'Find the round vents in the walls—the "Sound Caves." In specific corners, you can hear incredible acoustic reflections.'
            }
        ],
        insiderTip: {
            teaser: '要去頂樓的空中花園，聽聽「無牆」的迴聲',
            teaserEn: 'Visit the rooftop garden and listen to the wall-less echoes.',
            full: {
                story: '這不是普通的建築，而是一個巨大的呼吸器官。內部的曲牆沒有一處是直角。記得去 5 樓的 VVG 食尚空間坐坐。',
                storyEn: "It's a giant breathing organ with no straight angles. Visit the VVG space on 5F.",
                exactLocation: '七期重劃區中心',
                exactLocationEn: 'Heart of the 7th Redevelopment Zone',
                mustTry: '頂樓空中花園 + 5 樓 VVG 展覽',
                mustTryEn: 'Rooftop Garden + 5F VVG exhibits',
                avoid: '館內冷氣很強，記得帶薄外套',
                avoidEn: 'Strong AC inside; bring a light jacket.',
                bestTime: '18:00 (看建築點燈的最佳時刻)',
                bestTimeEn: '18:00 (When the building glows)'
            }
        }
    },
    {
        id: 'tc-f6',
        title: '老賴茶棧 總店',
        titleEn: 'Lao Lai Tea Shop',
        type: 'food',
        duration: '15分',
        image: '🥤',
        description: '第二市場排隊名店，傳統紅茶配豆香十足的豆香紅茶。',
        descriptionEn: 'The pride of Second Market. Authentic black tea and soy milk tea.',
        price: 35,
        address: '台中市第二市場',
        addressEn: 'Taichung City',
        rating: 4.5,
        lat: 24.1432,
        lng: 120.6782,
        region: 'taichung',
        authorId: 'c-tw3',
        openingHours: '07:30-18:00',
        tags: ['飲品', '在地'],
        expertStories: [
            {
                id: 'must-eat',
                label: '必喝推薦',
                labelEn: 'Must Drink',
                summary: '豆香紅茶 (大杯)',
                summaryEn: 'Soy Milk Black Tea (Large)',
                story: '招牌紅茶加入研磨豆漿，喝得到濃郁豆香。一定要加碎冰，那種喝一口透心涼的感覺，才是老賴的味道。',
                storyEn: 'Signature black tea mixed with ground soy milk. You must have the crushed ice—that brain-freeze coldness is the essence of Lao Lai.'
            },
            {
                id: 'must-do',
                label: '核心觀察',
                labelEn: 'Must Do',
                summary: '看大不鏽鋼桶舀茶',
                summaryEn: 'Watch the Ladle Craft',
                story: '看店員從不鏽鋼桶中快速舀茶、加入碎冰，節奏感十足。這是在第二市場生活超過四十年的老派日常。',
                storyEn: 'Watch staff scoop tea from stainless steel drums with crushed ice. It\'s a decades-old rhythmic routine in the Second Market.'
            },
            {
                id: 'trap',
                label: '避坑指南',
                labelEn: 'Avoid Trap',
                summary: '不要去冰微冰',
                summaryEn: 'Don\'t Skip the Ice',
                story: '老賴紅茶最重要的霛魂就是那層細碎的碎冰，去冰會讓甜度顯得太高，口感也會大打折扣。',
                storyEn: 'The soul of this drink is the layer of fine crushed ice. Going "no ice" makes it too sweet and less refreshing.'
            },
            {
                id: 'hidden',
                label: '在地私藏',
                labelEn: 'Hidden Gem',
                summary: '配阿嬤蘿蔔糕是標配',
                summaryEn: 'Pair with Radish Cake',
                story: '內行人的台中早餐吃法：先到隔壁王記點盤蘿蔔糕，再來老賴買杯紅茶。一鹹一甜、一熱一涼是最高境界。',
                storyEn: 'The pro Taichung breakfast move: get a plate of radish cakes next door, then grab this tea. Salty and sweet, hot and cold—perfection.'
            }
        ],
        insiderTip: {
            teaser: '傳說中的豆香紅茶，配阿嬤蘿蔔糕是標配',
            teaserEn: 'The legendary soy black tea, best with radish cake.',
            full: {
                story: '雖然全台都有分店，但唯獨第二市場這間總店的味道最對。大不鏽鋼桶裝著碎冰，用杓子舀進杯裡，那是老派台中的清涼。',
                storyEn: 'Despite many branches, the original stall in Second Market is unique. Served from large stainless steel drums with crushed ice.',
                exactLocation: '第二市場內（三民路入口左手邊）',
                exactLocationEn: 'Second Market, left at Sanmin Rd entrance.',
                mustTry: '豆香紅茶 (Soy Milk Black Tea)',
                mustTryEn: 'Soy Milk Black Tea',
                avoid: '不要微冰去冰，碎冰是老賴的靈魂',
                avoidEn: 'Don\'t ask for no ice; the crushed ice is the key.',
                bestTime: '08:00 (配早餐剛剛好)',
                bestTimeEn: '08:00 AM (Perfect with breakfast)'
            }
        }
    },
    {
        id: 'tc-f7',
        title: 'VVG Food Play',
        titleEn: 'VVG Food Play',
        type: 'food',
        duration: '2小時',
        image: '🍽️',
        description: '台中國際歌劇院內的絕美餐廳，將建築藝術融入法式料理與台式美學。',
        descriptionEn: 'Stunning restaurant inside Taichung Theater, blending architecture with gourmet dining.',
        price: 1200,
        address: '台中市西屯區惠來路二段101號5樓',
        addressEn: 'Taichung City',
        rating: 4.6,
        lat: 24.1625,
        lng: 120.6405,
        region: 'taichung',
        authorId: 'c-tw3',
        openingHours: '11:30-21:00',
        tags: ['正式午餐/晚餐', '景觀', '設計'],
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃推薦',
                labelEn: 'Must Eat',
                summary: '法式台魂晚宴',
                summaryEn: 'French-Taiwanese Dinner',
                story: '主廚用精緻的法式手法重新詮釋台中在地食材。每一道菜上桌都像是一件與建築呼應的藝術品。',
                storyEn: 'The chef reimagines local Taichung ingredients with refined French techniques. Each dish looks like a piece of architecture on a plate.'
            },
            {
                id: 'must-do',
                label: '核心體驗',
                labelEn: 'Must Do',
                summary: '窗邊景觀位賞七期',
                summaryEn: 'Window View of 7th Dist',
                story: '夕陽西下時分，落地窗外是台中最精華的七期豪宅區夜景。配上館內的流動曲牆，是全台中最浪漫的位子。',
                storyEn: 'At sunset, the view of the elite 7th District mansions is stunning. It\'s the most romantic spot in Taichung.'
            },
            {
                id: 'trap',
                label: '避坑指南',
                labelEn: 'Avoid Trap',
                summary: '晚餐務必預約',
                summaryEn: 'Dinner Booking Reqd',
                story: '因為在歌劇院內，散場觀眾會瞬間湧入。晚餐時段座位極難搶，建議至少提前二週在網路上訂位。',
                storyEn: 'Post-performance crowds flood in. Dinner seats are extremely hard to get; book online at least 2 weeks ahead.'
            },
            {
                id: 'hidden',
                label: '在地私藏',
                labelEn: 'Hidden Gem',
                summary: '圓弧孔洞空間攝影',
                summaryEn: 'Curved Space Photography',
                story: '餐廳最內側的孔洞設計最為壯觀。趁剛開門人少時請求服務生協助，可以拍到與大廳截然不同的光影。',
                storyEn: 'The innermost arch design is spectacular. Ask the staff for a quick photo right at opening for unique shadow play.'
            }
        ],
        insiderTip: {
            teaser: '在歌劇院呼吸孔洞裡用餐',
            teaserEn: 'Dine inside the theater\'s breathing caves.',
            full: {
                story: '位於伊東豊雄大作的 5 樓。空間充滿了歌劇院著名的圓弧曲面，陽光透過大型落地窗灑入，是台中最浪漫的法式台魂餐廳。',
                storyEn: 'Located on 5F of Toyo Ito\'s masterpiece. The space features the theater\'s iconic curves and floor-to-ceiling windows.',
                exactLocation: '歌劇院 5 樓',
                exactLocationEn: 'Theater Floor 5',
                mustTry: '窗邊景觀位 + 主廚精選套餐',
                mustTryEn: 'Window seat + Chef\'s Tasting Menu',
                avoid: '週末務必預約，窗邊位子極難搶',
                avoidEn: 'Reserve for weekends; window seats carry high demand.',
                bestTime: '18:00 (傍晚的光線最優雅)',
                bestTimeEn: '6 PM (Elegant evening light)'
            }
        }
    },
    {
        id: 'tc-f10',
        title: '天津苟不理湯包',
        titleEn: 'Gou-Bu-Li Juicy Buns',
        type: 'food',
        duration: '1小時',
        image: '🥟',
        description: '台中後站傳奇早餐！如饅頭般碩大的噴汁湯包，內餡紮實，咬下務必小心燙口。',
        descriptionEn: 'Legendary breakfast near Taichung Station! Massive, juicy dumplings as big as buns. Watch out for the hot broth!',
        price: 150,
        address: '台中市東區信義街63號',
        addressEn: 'Taichung City',
        rating: 4.6,
        lat: 24.1362,
        lng: 120.6895,
        region: 'taichung',
        authorId: 'c-tw3',
        openingHours: '05:30-11:30',
        tags: ['早餐', '在地', '銅板美食'],
        expertStories: [
            {
                id: 'must-eat',
                label: '必點推薦',
                labelEn: 'Must Eat',
                summary: '鮮肉湯包 & 蔥花蛋',
                summaryEn: 'Juicy Meat Bun & Scallion Egg',
                story: '這裡的湯包皮厚實 Q 彈，內餡是滿滿的豬肉溫體鮮甜味。配上一份現煎的蔥花蛋，是在地人最飽足的組合。',
                storyEn: 'The bun is thick and chewy with fresh pork filling. Paired with a scallion egg, it\'s the most satisfying local breakfast combo.'
            },
            {
                id: 'must-do',
                label: '在地體驗',
                labelEn: 'Must Do',
                summary: '享受飲料無限續杯',
                summaryEn: 'Unlimited Soft Drinks',
                story: '店內提供超霸氣的飲料自助吧，豆漿、紅茶、混漿隨你喝。這種台中式的海派與豪爽，只有在這裡才看得到。',
                storyEn: 'The shop offers a generous self-serve drink bar with soy milk and black tea. This hospitality is uniquely Taichung style.'
            },
            {
                id: 'trap',
                label: '避坑指南',
                labelEn: 'Avoid Trap',
                summary: '噴汁警告：小心衣服',
                summaryEn: 'Sploosh Juice Warning',
                story: '這款湯包的湯汁量極大，咬下第一口時絕對不要太用力。如果沒掌握好角度，湯汁會直接噴到對面或衣服上！',
                storyEn: 'The broth volume is massive; don\'t bite too hard on the first go! If misangled, the juice will spray onto you or your friends.'
            },
            {
                id: 'hidden',
                label: '在地私藏',
                labelEn: 'Hidden Gem',
                summary: '混漿 (豆漿加紅茶)',
                summaryEn: 'The Soy-Tea Mix',
                story: '不知道喝什麼？熟客都會自己調配 1:1 的「混漿」（豆漿加紅茶），口感柔順又有茶香，是解膩聖品。',
                storyEn: 'Undecided? Locals mix soy milk and black tea 1:1 for a smooth, fragrant drink that perfectly cuts through the oiliness.'
            }
        ],
        insiderTip: {
            teaser: '咬下第一口請保持距離，那是噴汁級的震撼',
            teaserEn: 'Maintain distance for the first bite—it\'s a juice sploosh!',
            full: {
                story: '雖然名為湯包，但在這裡更像是一種會噴汁的巨大肉饅頭。別看它皮厚，那種吸飽肉汁的嚼勁才是精華。',
                storyEn: 'Though called a soup dumpling, it\'s more like a giant juicy bun. The dough soaked in meat broth is the real highlight.',
                exactLocation: '台中火車站後站信義街',
                exactLocationEn: 'Xinyi St, behind Taichung Station',
                mustTry: '噴汁大湯包 + 蔥花蛋',
                mustTryEn: 'Juicy Meat Bun + Scallion Omelet',
                avoid: '早上 9 點到 10 點人潮最擁擠，建議清晨 7 點去',
                avoidEn: 'Avoid peak 9-10 AM; visit around 7 AM for a better experience.',
                bestTime: '07:30',
                bestTimeEn: '07:30 AM'
            }
        }
    },
    {
        id: 'tc-a7',
        title: '台中刑務所演武場',
        titleEn: 'Natural Way Six Arts Center',
        type: 'attraction',
        duration: '1.5小時',
        image: '⚔️',
        description: '台中唯一存留的日治時期武德殿建築。提供劍道、茶道、弓道等六藝體驗。',
        descriptionEn: 'The only surviving Japanese-era martial arts dojo in Taichung. Offers kendo, tea ceremony, and archery.',
        price: 0,
        address: '台中市西區林森路33號',
        addressEn: 'Taichung City',
        rating: 4.7,
        lat: 24.1332,
        lng: 120.6725,
        region: 'taichung',
        authorId: 'c-tw3',
        openingHours: '09:00-22:00',
        tags: ['歷史建築', '文化', '手作體驗'],
        expertStories: [
            {
                id: 'must-do',
                label: '核心體驗',
                labelEn: 'Must Do',
                summary: '感受惟和館劍道正氣',
                summaryEn: 'Feel the Kendo Spirit',
                story: '主要建築「惟和館」目前仍提供劍道修練。看著穿著傳統服飾的職人在道場切磋，能強烈感受到那種肅穆的傳承感。',
                storyEn: 'The main hall "Weihe" still hosts kendo training. Watching practitioners in traditional gear is a powerful cultural experience.'
            },
            {
                id: 'must-eat',
                label: '必訪空間',
                labelEn: 'Must Visit',
                summary: '心行館日式茶點',
                summaryEn: 'Tea Ceremony at Xinxing',
                story: '在純日式的木造建築「心行館」中坐下來。換上茶人腳尖，在榻榻米上享用一份日式茶具與精緻點心。',
                storyEn: 'Sit in the traditional wooden "Xinxing" hall. Wear traditional socks and enjoy Japanese tea and snacks on the tatami.'
            },
            {
                id: 'trap',
                label: '避坑指南',
                labelEn: 'Avoid Trap',
                summary: '小心隱藏版小黑蚊',
                summaryEn: 'Beware of Midges',
                story: '演武場周邊老樹環繞，生態極佳，但也意味著「小黑蚊」非常兇猛。夏天前往務必穿著長袖或噴好強效防蚊液。',
                storyEn: 'The lush greenery means vicious midges! Wear long sleeves or apply strong repellent before exploring the grounds.'
            },
            {
                id: 'hidden',
                label: '在地私藏',
                labelEn: 'Hidden Gem',
                summary: '百年大榕樹下的市集',
                summaryEn: 'Market under Banyan Tree',
                story: '後方的百年大榕樹是生命力象徵。週末常有小型的文創市集或工作坊在此舉行，非常適合在樹蔭下乘涼漫步。',
                storyEn: 'The 100-year-old banyan tree is iconic. Weekends often feature small indie markets or workshops in its generous shade.'
            }
        ],
        insiderTip: {
            teaser: '不只是古蹟，更是能親身體驗武士精神的文化場域',
            teaserEn: 'Not just a relic, but a field to experience the samurai spirit.',
            full: {
                story: '身為台中最完整的日治時期道場建築，走在木地板上都能感受到歷史的厚度。一旁的「心行館」是絕佳的歇腳處，茶香四溢。',
                storyEn: 'As Taichung\'s most complete colonial-era dojo, every step on the wood floors drips with history. The nearby tea house is perfect for a break.',
                exactLocation: '台中市林森路與府後街口',
                exactLocationEn: 'Corner of Linsen Rd & Fuhou St',
                mustTry: '心行館日式下午茶體驗',
                mustTryEn: 'Japanese Afternoon Tea at Xinxing Hall',
                avoid: '週末下午會有大量人潮，建議 10 點前或 5 點後造訪',
                avoidEn: 'Avoid weekend afternoons; early morning or late evening is best.',
                bestTime: '15:30 (斜光下日式建築的光影最動人)',
                bestTimeEn: '15:30 PM (Shadow play on Japanese architecture is best)'
            }
        }
    }
];
