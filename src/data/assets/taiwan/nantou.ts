import { TravelItem } from '../../../types';

export const NANTOU_ASSETS: TravelItem[] = [
    {
        id: 'nt-a1',
        title: '日月潭環湖車道',
        titleEn: 'Sun Moon Lake Cycling Path',
        type: 'attraction',
        duration: '2小時',
        image: '🚲',
        coverImage: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800',
        description: '被CNN評為全球最美十大車道之一，平緩的湖畔路徑，每一轉向都是一幅山水畫。',
        descriptionEn: 'Rated by CNN as one of the world\'s 10 most beautiful cycling paths. Each turn offers a new landscape painting.',
        price: 300,
        address: '南投縣魚池鄉日月潭',
        rating: 4.8,
        lat: 23.8600,
        lng: 120.9100,
        region: 'nantou',
        authorId: 'c-tw1',
        openingHours: '24H',
        tags: ['運動', '風景', '全球之最'],
        themeColor: '#3498DB',
        expertStories: [
            {
                id: 'must-do',
                label: '必騎推薦',
                labelEn: 'Must Ride',
                summary: '向山段的水上單車道',
                summaryEn: 'Water-top Cycling Path',
                story: '這是環湖最精華的一段。單車橫跨在翠綠的湖水上，整個人就像在水面上滑行一樣，是拍照最美的地方。',
                storyEn: 'The highlight of the loop. Riding across the emerald water feels like gliding on the surface. It\'s the best photo spot.'
            },
            {
                id: 'artisan',
                label: '建築美學',
                labelEn: 'Artisan View',
                summary: '觀察向山遊客中心的曲線',
                summaryEn: 'Curves of Xiangshan Center',
                story: '向山遊客中心是日本建築大師團紀彥的作品。簡約的清水模與湖水交融，建議從不同角度觀察建築與自然的對話。',
                storyEn: 'Designed by Norihiko Dan, the minimalist concrete architecture blends with the lake. Observe the dialogue between structure and nature from various angles.'
            },
            {
                id: 'trap',
                label: '租車誤區',
                labelEn: 'Rental Trap',
                summary: '週末建議 9 點前租車',
                summaryEn: 'Rent Before 9 AM on Weekends',
                story: '晚了人潮湧入，高品質的電輔車很容易被借光。而且晚上的車道人滿為患，騎起來不安全。',
                storyEn: 'High-quality electric bikes run out fast when the crowd hits. Plus, the path gets overcrowded and unsafe later in the day.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '永結同心橋的倒影',
                summaryEn: 'Reflection at Yongjie Bridge',
                story: '這裡有一處小型的水上花園，從橋上拍過去可以拍到完美的婚紗級倒影，很多專業攝影師都會守在那裡。',
                storyEn: 'A small water garden here offers perfect wedding-grade reflections captures from the bridge. Pros often wait here for the light.'
            }
        ],
        insiderTip: {
            teaser: '向山段的水上車道絕對不能錯過',
            teaserEn: 'Don\'t miss the water-top path at Xiangshan',
            full: {
                story: '如果你時間有限，建議專攻「水社」到「向山」這一段。那裡有一段橫跨湖面的單車道，兩側都是清澈的湖水。建議早上 9 點前租車出發，那時陽光剛灑下來，波光粼粼。',
                storyEn: 'If short on time, focus on the Shuishe to Xiangshan section. It features a water-crossing path with clear lake views. Start before 9 AM to catch the morning sun glinting on the ripples.',
                exactLocation: '水社碼頭周邊租車店起點',
                exactLocationEn: 'Starting from bike rentals near Shuishe Pier',
                mustTry: '在向山遊客中心喝杯紅玉紅茶休息',
                mustTryEn: 'Rest with Ruby Black Tea at Xiangshan Visitor Center',
                avoid: '假日午後人潮極多，單車會卡在橋上',
                avoidEn: 'Avoid weekend afternoons; bridges get jammed with bikes',
                bestTime: '08:30 - 10:30',
                bestTimeEn: '08:30 - 10:30'
            }
        }
    },
    {
        id: 'nt-a2',
        title: '拉魯島與遊湖',
        titleEn: 'Lalu Island & Boat Tour',
        type: 'attraction',
        duration: '1.5小時',
        image: '⛴️',
        coverImage: 'https://images.unsplash.com/photo-1719340198760-434a1763b3ac?auto=format&fit=crop&q=80&w=800',
        description: '搭乘遊艇穿梭湖心，近距離觀察邵族心中的神聖象徵「拉魯島」。',
        descriptionEn: 'Cruise the lake heart by yacht to see Lalu Island, a sacred symbol for the Thao people.',
        price: 300,
        address: '日月潭各碼頭',
        rating: 4.6,
        lat: 23.8610,
        lng: 120.9120,
        region: 'nantou',
        authorId: 'c-tw1',
        openingHours: '09:00-17:00',
        tags: ['文化', '遊船', '經典'],
        themeColor: '#16A085',
        expertStories: [
            {
                id: 'must-do',
                label: '必搭推薦',
                labelEn: 'Must Ride',
                summary: '搭乘電動遊艇逛三碼頭',
                summaryEn: 'Electric Yacht Tour',
                story: '買一張一日票就可以在水社、玄光、伊達邵之間穿梭。推薦選擇「電動遊艇」，沒有柴油味且非常安靜。',
                storyEn: 'A day pass lets you hop between Shuishe, Xuanguang, and Ita Thao. Choose "electric yachts" - no diesel smell and very quiet.'
            },
            {
                id: 'artisan',
                label: '文化風景',
                labelEn: 'Cultural View',
                summary: '遠觀拉魯島與邵族信仰',
                summaryEn: 'View Lalu Island Roots',
                story: '拉魯島是邵族的靈魂。雖然目前不開放登島，但從湖心遠觀這座小島，能感受到那份沈靜的信仰力量。',
                storyEn: 'Lalu Island is the Thao soul. Though off-limits, viewing it from the lake heart reveals its quiet, spiritual power.'
            },
            {
                id: 'trap',
                label: '時間誤區',
                labelEn: 'Timing Trap',
                summary: '注意末班船的回程時間',
                summaryEn: 'Check the Last Boat Return',
                story: '末班船多在 17:00 左右。如果你在伊達邵逛太晚，回不去對岸的水社，接駁車的費用會非常昂貴。',
                storyEn: 'Last boats are around 17:00. If you shop too late at Ita Thao, returning to Shuishe will cost a lot via private shuttle.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '在玄光碼頭吃茶葉蛋',
                summaryEn: 'Chasing the Famous Tea Egg',
                story: '玄光碼頭的「阿婆茶葉蛋」是經典中的經典。用紅茶搭配香菇滷成，香味四溢，是一定要體驗的潭邊儀式。',
                storyEn: 'Grandma\'s Tea Egg at Xuanguang is a classic. Simmered with black tea and mushrooms, it\'s a must-try lakeside ritual.'
            }
        ],
        insiderTip: {
            teaser: '買一日券可以無限次穿梭三個碼頭',
            teaserEn: 'The day pass allows unlimited rides between piers',
            full: {
                story: '日月潭有水社、玄光、伊達邵三個碼頭。建議買 300 元的一日券，可以順序逛。拉魯島目前不能登島，目的是保護當地的生態與原民文化。',
                storyEn: 'Sun Moon Lake has three piers: Shuishe, Xuanguang, and Ita Thao. Use a 300 TWD day pass to hop between them. Lalu Island is currently off-limits to visitors to protect local ecology and culture.',
                exactLocation: '任一碼頭搭船點',
                exactLocationEn: 'Any pier boarding point',
                mustTry: '在玄光碼頭吃一顆著名的阿婆茶葉蛋',
                mustTryEn: 'Eating a famous Grandma\'s Tea Egg at Xuanguang Pier',
                avoid: '末班船通常在 17:00，錯過就要叫昂貴的接駁車',
                avoidEn: 'Last boat is around 17:00; don\'t miss it',
                bestTime: '11:00',
                bestTimeEn: '11:00'
            }
        }
    },
    {
        id: 'nt-f1',
        title: '邵族特色風味餐',
        titleEn: 'Thao Indigenous Kitchen',
        type: 'food',
        duration: '1.5小時',
        image: '🍲',
        coverImage: 'https://images.unsplash.com/photo-1563245332-69214647efdc?auto=format&fit=crop&q=80&w=800',
        description: '品嚐日月潭在地邵族特色料理，奇力魚、山豬肉、竹筒飯的華麗大賞。',
        descriptionEn: 'Taste local Thao indigenous specialties like Qili fish, wild boar, and bamboo rice.',
        price: 500,
        address: '南投縣魚池鄉伊達邵街區',
        rating: 4.7,
        lat: 23.8500,
        lng: 120.9300,
        region: 'nantou',
        authorId: 'c-tw1',
        openingHours: '11:30-14:30, 17:00-20:00',
        tags: ['部落美食', '必吃', '文化'],
        themeColor: '#D35400',
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃推薦',
                labelEn: 'Must Eat',
                summary: '邵族傳統風味套餐',
                summaryEn: 'Thao Traditional Set Menu',
                story: '一定要品嚐現烤的山豬肉與手工竹筒飯。竹筒的清香滲進糯米裡，那是城市裡吃不到的原始野味。',
                storyEn: 'Must taste the grilled wild boar and handmade bamboo rice. The fresh bamboo scent infuses the rice, a wild flavor lost in cities.'
            },
            {
                id: 'artisan',
                label: '食材風景',
                labelEn: 'Ingredient View',
                summary: '新鮮採摘的山中野菜',
                summaryEn: 'Fresh Picked Mountain Greens',
                story: '邵族料理重視節令。許多野菜是農人清晨才從後山採摘下來的。建議點一份季節野菜，感受大地之母的滋味。',
                storyEn: 'Thao cuisine values seasons. Many greens are picked at dawn from the mountains. Order seasonal veggies to taste the local soil.'
            },
            {
                id: 'trap',
                label: '點餐誤區',
                labelEn: 'Ordering Trap',
                summary: '伊達邵老街部分價格較高',
                summaryEn: 'High Prices at Ita Thao St',
                story: '身為熱門觀光區，有些店家的價格會偏高。建議先看清楚菜單標價，或是選擇具有規模的餐廳。',
                storyEn: 'As a tourist hotspot, some shops have marked-up prices. Check the menu labels or choose established restaurants.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '邵族特色小米甜點',
                summaryEn: 'Local Thao Millet Dessert',
                story: '除了正餐，老街上賣的小米麻糬或小米酒霜淇淋也非常值得一試，是邵族文化的微型體驗。',
                storyEn: 'Beyond meals, the millet mochi or millet wine soft-serve are worth a try - a micro-experience of Thao culture.'
            }
        ],
        insiderTip: {
            teaser: '伊達邵老街是美食密度最高的地方',
            teaserEn: 'Ita Thao street has the highest foodie density',
            full: {
                story: '伊達邵老街雖然商業化，但真正的美食都藏在靠近碼頭的餐廳裡。邵族美食講究「小米」與「河鮮」。推薦點綜合野菜，那是清晨剛從後山採摘下來的，非常鮮嫩。',
                storyEn: 'Though Ita Thao is commercialized, the best food is in restaurants near the pier. Thao cuisine focuses on millet and river fish. Order the mixed wild greens - harvested fresh from the mountains.',
                exactLocation: '伊達邵老街內',
                exactLocationEn: 'Within Ita Thao Shopping St',
                mustTry: '日月潭奇力魚 + 邵族竹筒飯',
                mustTryEn: 'Sun Moon Lake Qili Fish + Thao Bamboo Rice',
                avoid: '有些路邊攤價格混亂，建議進具規模的餐廳',
                avoidEn: 'Street stall prices vary; established restaurants are safer',
                bestTime: '12:00',
                bestTimeEn: '12:00'
            }
        }
    },
    {
        id: 'nt-f2',
        title: '日月潭蔬食角落',
        titleEn: 'Sun Moon Lake Veg Corner',
        type: 'food',
        duration: '1小時',
        image: '🥬',
        coverImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
        description: '為素食者準備的靜謐角落，提供新鮮的手工豆製品與當地有機蔬菜料理。',
        descriptionEn: 'A tranquil corner for vegetarians, offering fresh handmade soy products and local organic vegetable dishes.',
        price: 250,
        address: '南投縣魚池鄉',
        rating: 4.6,
        lat: 23.8620,
        lng: 120.9080,
        region: 'nantou',
        authorId: 'c-tw1',
        openingHours: '11:00-19:00',
        tags: ['素食友善', '清爽', '在地食材'],
        themeColor: '#27AE60',
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃推薦',
                labelEn: 'Must Eat',
                summary: '埔里香菇素乾麵',
                summaryEn: 'Puli Mushroom Veggie Noodles',
                story: '選用埔里在地特產的大香菇，香氣濃縮在Q彈的麵條中。味道清淡卻回甘，是素食者在潭邊最溫暖的依靠。',
                storyEn: 'Using huge local Puli mushrooms, the aroma is packed into chewy noodles. Light yet sweet in aftertaste - the warmest comfort for vegetarians by the lake.'
            },
            {
                id: 'artisan',
                label: '食材風景',
                labelEn: 'Ingredient View',
                summary: '觀察在地小農的時鮮',
                summaryEn: 'Local Small Farm Freshness',
                story: '老闆娘堅持每天清晨採買在地小農的蔬菜。盤中那些翠綠的色澤與鮮脆的口感，是大自然最真誠的饋贈。',
                storyEn: 'The owner insists on buying fresh greens from small local farms every morning. The vibrant colors and crisp textures are nature\'s most sincere gift.'
            },
            {
                id: 'trap',
                label: '位置提醒',
                labelEn: 'Location Note',
                summary: '隱身斜坡靜巷內較難尋',
                summaryEn: 'Hidden in a Quiet Sloping Alley',
                story: '店家不在熱鬧的大馬路上，而是在水社碼頭旁的靜謐斜坡上。導航可能會稍微偏離，請留意掛在老牆上的小木招牌。',
                storyEn: 'Not on the main road, but on a quiet slope near Shuishe Pier. GPS might drift; look for the small wooden sign on the old wall.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '自製無添加豆干小菜',
                summaryEn: 'Additives-free Tofu Sides',
                story: '除了主食，櫃檯旁的小菜也是一絕。特別是自製的滷豆干，孔隙吸飽了秘製滷汁，是當地老饕一定會加點的美味。',
                storyEn: 'Beyond mains, the counter sides are gems. Especially the house-braised tofu - its pores are filled with secret sauce, an essential order for local foodies.'
            }
        ],
        insiderTip: {
            teaser: '素食者也能在潭邊享受大餐',
            teaserEn: 'Vegetarians can feast by the lake too',
            full: {
                story: '這間店隱身在水社碼頭附近的斜坡上。雖然空間不大，但老闆娘堅持不加化學調味，只用埔里的好水與在地香菇乾。那碗素麵的湯頭鮮美到讓你驚訝。',
                storyEn: 'Hidden on a slope near Shuishe Pier. Small space, but the owner avoids MSG, using Puli spring water and local dried mushrooms. The veggie noodle broth is surprisingly delicious.',
                exactLocation: '水社碼頭旁靜巷上坡',
                exactLocationEn: 'Quiet alley uphill near Shuishe Pier',
                mustTry: '埔里香菇素乾麵',
                mustTryEn: 'Puli Dried Mushroom Veggie Noodles',
                avoid: '座位極少，四人以上建議分開坐',
                avoidEn: 'Very few seats; groups of 4+ should split up',
                bestTime: '13:30 (避開正午)',
                bestTimeEn: '13:30 (After peak hours)'
            }
        }
    },
    {
        id: 'nt-exp1',
        title: '日月老茶廠紅茶評鑑',
        titleEn: 'Sun Moon Old Tea Factory Tasting',
        type: 'experiential',
        duration: '1.5小時',
        image: '☕',
        coverImage: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&q=80&w=800',
        description: '走入具有歷史感的製茶工廠，學習如何辨識紅玉、紅韻等頂級紅茶的香氣。',
        descriptionEn: 'Enter a historic tea factory and learn to identify the aromas of Ruby and Hong Yun black teas.',
        price: 400,
        address: '南投縣魚池鄉中明村有水巷38號',
        rating: 4.9,
        lat: 23.8820,
        lng: 120.9150,
        region: 'nantou',
        authorId: 'c-tw1',
        openingHours: '08:00-17:00',
        tags: ['茶文化', '歷史建築', '深度體驗'],
        themeColor: '#7E5109',
        expertStories: [
            {
                id: 'must-do',
                label: '體驗推薦',
                labelEn: 'Must Do',
                summary: '在百年老建築中聽茶',
                summaryEn: 'Listening to Tea in History',
                story: '這裡不僅是工廠，更是一座活的博物館。在充滿檜木香的空間裡，閉上眼聽著導覽員講述台灣紅茶的外銷輝煌史。',
                storyEn: 'Not just a factory, but a living museum. In the cypress-scented space, close your eyes and listen to the glorious history of Taiwan\'s tea exports.'
            },
            {
                id: 'artisan',
                label: '建築風景',
                labelEn: 'Artisanship',
                summary: '日光與老廠房的幾何光影',
                summaryEn: 'Geometric Sun & Shadow',
                story: '老茶廠的高窗設計是為了溫控，但也造就了極美的光影。建議觀察午後陽光斜穿過老機器的剪影。',
                storyEn: 'The high windows were for temperature control but created stunning shadow play. Observe the afternoon sun slicing through the vintage machinery.'
            },
            {
                id: 'trap',
                label: '參觀限制',
                labelEn: 'Visit Limit',
                summary: '部分製茶區禁止進入',
                summaryEn: 'Certain Zones Off-limits',
                story: '為了維持製茶環境的衛生與安全，部分動態生產區是不開放拍照與進入的。請務必遵守動線指標。',
                storyEn: 'To maintain hygiene and safety, active production zones are no-photo and off-limits. Please stick to the guided path.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '選購限定限量的紅韻紅茶',
                summaryEn: 'Limited Hong Yun Black Tea',
                story: '除了大眾熟知的紅玉，這裡的「紅韻」產量稀少且帶有獨特的柑橘香，是茶界內行人才知道要掃貨的珍品。',
                storyEn: 'Beyond the famous Ruby, the "Hong Yun" tea here is rare with a unique citrus aroma - a treasure that tea pros hoard.'
            }
        ],
        insiderTip: {
            teaser: '老建築本身就是一件藝術品',
            teaserEn: 'The old building itself is a work of art',
            full: {
                story: '這裡曾經是台灣紅茶的外銷核心。現在轉型為美學空間。你可以在這裡學會「杯測」，用標準的評鑑杯感受不同品種紅茶在口中的回甘度。',
                storyEn: 'Once the core of Taiwan\'s tea exports, now a stunning aesthetic space. Learn "cupping" - using professional evaluation cups to feel the aftertaste of different cultivars.',
                exactLocation: '中明村山坡上',
                exactLocationEn: 'On the slope of Zhongming Village',
                mustTry: '紅玉紅茶評鑑課程',
                mustTryEn: 'Ruby Black Tea evaluation course',
                avoid: '內部部分區域禁止拍照，請尊重相關規範',
                avoidEn: 'Some interior areas are no-photo; respect the rules',
                bestTime: '10:00 (光線射入老工廠時)',
                bestTimeEn: '10:00 (When light hits the old factory)'
            }
        }
    },
    {
        id: 'nt-h1',
        title: '雲品溫泉酒店',
        titleEn: 'Fleur de Chine Hotel',
        type: 'hotel',
        duration: '0',
        image: '🏨',
        coverImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
        description: '日月潭首家獲得五星認證的飯店，每間房都有專屬溫泉池，望向無敵湖景。',
        descriptionEn: 'The first 5-star certified hotel at Sun Moon Lake. Every room has a private hot spring with lake views.',
        price: 12000,
        address: '南投縣魚池鄉中正路23號',
        rating: 4.9,
        lat: 23.8750,
        lng: 120.9180,
        region: 'nantou',
        authorId: 'c-tw1',
        tags: ['奢華', '溫泉', '絕景'],
        themeColor: '#1B2631',
        expertStories: [
            {
                id: 'must-do',
                label: '入住推薦',
                labelEn: 'Stay Perk',
                summary: '頂樓雲月舫看日落',
                summaryEn: 'Sky Lounge Sunset View',
                story: '雲品的頂樓吧台擁有 270 度的無敵湖景。點一杯在地特調，看著夕陽消失在中央山脈後方，是奢華度假的極致。',
                storyEn: 'The rooftop bar offers a 270-degree lake view. Order a local special cocktail and watch the sun dip behind the Central Range - the peak of luxury travel.'
            },
            {
                id: 'artisan',
                label: '服務美學',
                labelEn: 'Artisan View',
                summary: '精緻的管家款待之道',
                summaryEn: 'Refined Butler Service',
                story: '五星級的體現在於細節。從進房時的茶席服務到開夜床的小驚喜，每一處都展現了台灣頂級飯店的職人精神。',
                storyEn: '5-star quality is in the details. From the welcome tea ceremony to turn-down surprises, every inch shows Taiwanese hospitality artisanship.'
            },
            {
                id: 'trap',
                label: '餐飲誤區',
                labelEn: 'Dining Trap',
                summary: '館外用餐選擇極少且路窄',
                summaryEn: 'Few Outside Dining Options',
                story: '飯店位於北岸，離熱鬧的商業區有段距離且山路會車不易。強烈建議在館內餐廳享用精緻套餐。',
                storyEn: 'Located on the north shore, far from busy spots with tricky mountain roads. Highly recommended to dine at the hotel’s refined restaurants.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '私密的「大浴場」晨間時光',
                summaryEn: 'Quiet Morning at Public Bath',
                story: '比起房內私人泡湯，內行人會在清晨六點去大浴場。那時的光線射入日式湯池，能享受最純粹的靜謐時光。',
                storyEn: 'Instead of private room baths, pros hit the grand public bath at 6 AM. The morning light hitting the Japanese-style pools offers pure tranquility.'
            }
        ],
        insiderTip: {
            teaser: '雲水行政廊道的下午茶非常精緻',
            teaserEn: 'The afternoon tea at Cloud Lounge is exquisite',
            full: {
                story: '雖然住宿相對昂貴，但其硬體與服務絕對是全台頂尖。如果你是來慶生的，記得提前告知，飯店會有驚喜安排。那裡的溫泉水質非常純淨，泡完皮膚會滑滑的。',
                storyEn: 'Pricey, but top-tier hardware and service. Notify them of birthdays ahead for a surprise. The spring water is very pure, leaving your skin silky smooth.',
                exactLocation: '日月潭北岸',
                exactLocationEn: 'Northern shore of Sun Moon Lake',
                mustTry: '頂樓雲月舫的日落景緻',
                mustTryEn: 'Sunset views at Sky Lounge on the top floor',
                avoid: '建議待在飯店內享受設施，不要安排太多外食',
                avoidEn: 'Enjoy hotel facilities; don\'t book too many outside meals',
                bestTime: '入住時段 15:00',
                bestTimeEn: 'Check-in at 15:00'
            }
        }
    }
];
