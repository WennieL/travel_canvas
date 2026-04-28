import { TravelItem } from '../../../types';

export const TAIPEI_ASSETS: TravelItem[] = [
    // --- FLAGSHIP: TAIPEI SLOW LIVING OLD STREET SPOTS ---
    {
        id: 'tw-t-f1',
        title: '阜杭豆漿',
        titleEn: 'Fuhang Soy Milk',
        type: 'food',
        duration: '1小時',
        image: '🥟',
        description: '台北人排隊的早餐，不是網紅打卡的早餐。阜杭的厚燒餅夾蛋，外皮烤到起泡，豆漿是真的黃豆磨的，喝得到豆香。米其林必比登連續多年推薦，但在地人根本不需要這個頭銜——他們早就在排隊了。',
        descriptionEn: 'The most authentic Taipei breakfast. Fuhang\'s thick clay oven rolls are crispy, and the soy milk is freshly ground. While Michelin-recommended, locals have been lining up long before any awards.',
        price: 150,
        address: '台北市忠孝東路一段108號2樓',
        rating: 4.8,
        michelinRating: 'bib-gourmand',
        michelinYears: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
        lat: 25.0441,
        lng: 121.5248,
        isVegetarianFriendly: true,
        dietaryOptions: ['vegetarian'],
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '05:30-12:30 (週一休)',
        tags: ['🌟米其林', '老字號', '早餐'],
        themeColor: '#b86818',
        teaser: '台北早晨的靈魂，米其林級的厚燒餅。',
        teaserEn: 'Soul of Taipei mornings, Michelin-grade thick biscuits.',
        coverImage: 'https://images.unsplash.com/photo-1555465083-a845797ef750?q=80&w=928&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃推薦',
                labelEn: 'Must Eat',
                summary: '厚燒餅夾油條配鹹豆漿',
                summaryEn: 'Thick Biscuit & Savory Soy Milk',
                story: '厚燒餅有著揉進老麵的獨特香氣，這是在其他豆漿店找不到的味道。鹹豆漿像是一碗豐富的小湯，加點辣油更有層次。',
                storyEn: 'The thick biscuit has a unique aroma from old dough. The savory soy milk is like a rich soup; adding chili oil makes it even better.'
            },
            {
                id: 'must-do',
                label: '職人風景',
                labelEn: 'Artisan View',
                summary: '觀察大爐貼燒餅畫面',
                summaryEn: 'Watching the Clay Oven Craft',
                story: '在點餐區前，你會經過玻璃窗。看著職人們將燒餅一個個貼進傳統碳火大爐，那是這份早餐美味的源頭。',
                storyEn: 'Before ordering, look through the window. Watching artisans stick dough into the traditional clay oven is the source of its flavor.'
            },
            {
                id: 'trap',
                label: '排隊誤區',
                labelEn: 'Waiting Trap',
                summary: '不要被樓下人龍嚇跑',
                summaryEn: 'Don\'t Be Scared by the Line',
                story: '排隊通常延伸到捷運站。雖然人多，但店員手腳極快，通常 30 分鐘內就能排到，絕對值得等待。',
                storyEn: 'The line often reaches the MRT station. It looks long, but moves fast; you\'ll usually reach the counter within 30 minutes.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '飯糰與豆花也很厲害',
                summaryEn: 'Sticky Rice & Tofu Pudding',
                story: '熟客除了點厚餅，也會點一個甜豆花或飯糰。飯糰米粒 Q 彈且油條酥脆，是除了厚燒餅以外最有份量的選擇。',
                storyEn: 'Locals also order tofu pudding or sticky rice. The sticky rice is perfectly chewy with crispy youtiao, very filling.'
            }
        ],
        insiderTip: {
            teaser: '七點到不算早。六點半就有人排了，週末更誇張。',
            teaserEn: '7 AM is late! People line up at 6:30 AM, even earlier on weekends.',
            full: {
                story: '帶現金，不收感應支付。等待時間看著阿姨把燒餅一個一個貼進大爐，那個畫面值得排隊。',
                storyEn: 'Cash only. Watching the staff stick biscuits into the oven is a classic scene worth the wait.',
                exactLocation: '華山市場 2 樓',
                exactLocationEn: 'Huashan Market 2F',
                mustTry: '厚燒餅夾蛋加一碗鹹豆漿',
                mustTryEn: 'Thick clay oven roll with egg and savory soy milk',
                avoid: '假日 09:00 後去，排隊時間會翻倍',
                avoidEn: 'Avoid visiting after 9 AM on weekends; the wait time doubles.',
                bestTime: '06:30',
                bestTimeEn: '06:30 AM'
            }
        }
    },
    {
        id: 'tw-t-a1',
        title: '迪化街 (霞海城隍廟)',
        titleEn: 'Dihua St & Xiahai Temple',
        type: 'attraction',
        duration: '2小時',
        image: '🏮',
        description: '百年老街與全台目前最靈驗的月老廟，迪化街是漫遊老台北繁華縮影的最佳去處。從中藥房的乾貨香，到新式選物店的設計感，這裡每一棟建築都訴說著大稻埕的貿易傳奇。',
        descriptionEn: 'Century-old street and the most effective Cupid temple in Taiwan. From traditional herb scents to modern boutiques, every building tells a story of Dadaocheng\'s trade legend.',
        price: 0,
        address: '台北市大同區迪化街',
        rating: 4.9,
        lat: 25.0560,
        lng: 121.5098,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '24H (各店鋪不同)',
        tags: ['老街', '文青', '信仰'],
        themeColor: '#d64d4d',
        teaser: '百年老街與月老聖地，全台北最有層次的巷弄。',
        teaserEn: 'Old street & Cupid shrine, the most layered alley in Taipei.',
        coverImage: '        https://images.unsplash.com/photo-1728183261493-3c3a11f8403e?q=80&w=774&auto=format&fit=croq=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '文化體驗',
                labelEn: 'Culture',
                summary: '求個紅線與脫魯流程',
                summaryEn: 'Red String Ritual',
                story: '霞海城隍廟是台北最靈的月老，相傳牽過的紅線成功率很高。外國人來拜，會有廟方義工用英文幫你解說。按照廟方指引拜月老、拿紅線，並喝一杯平安茶。即便不求姻緣，感受那份虔誠的能量也非常獨特。',
                storyEn: 'Follow the guide to pray for love and drink the peace tea. Even if not seeking romance, the atmosphere is powerful.'
            },
            {
                id: 'must-eat',
                label: '在地滋味',
                labelEn: 'Local Taste',
                summary: '民樂旗魚米粉與炸物',
                summaryEn: 'Minle Swordfish Rice Noodle',
                story: '這是在地人的早餐首選。清甜的魚湯配上現炸的紅燒肉或蚵仔酥，是老台北人的能量來源。',
                storyEn: 'The local choice for breakfast. Fresh fish soup with crispy fried pork or oysters is how Taipei locals start their day.'
            },
            {
                id: 'trap',
                label: '效率提醒',
                labelEn: 'Pro Tip',
                summary: '避開大拜拜的人擠人',
                summaryEn: 'Avoid the Massive Crowds',
                story: '如果是週末或節日，迪化街會擠得水洩不通。推薦選擇平日上午，能更安靜地欣賞老宅的立面美學。',
                storyEn: 'Weekends are extremely crowded. Visit on weekday mornings to truly appreciate the old-house architecture and details.'
            },
            {
                id: 'hidden',
                label: '巷弄秘境',
                labelEn: 'Hidden Spot',
                summary: '民樂街後的秘密茶室',
                summaryEn: 'Secret Tea House in Back Alleys',
                story: '不要只走主幹道，民樂街後的巷弄隱藏著許多不掛招牌的設計工作室與精緻茶味，值得大膽走入。',
                storyEn: 'Don\'t just stick to the main road. The back alleys of Minle St hide many unbranded design studios and tea gems.'
            }
        ],
        insiderTip: {
            teaser: '求完紅線，去城隍廟對面喝杯百年草茶。',
            teaserEn: 'After praying, grab a 100-year-old herb tea across the street.',
            full: {
                story: '這裡的苦茶與青草茶是台北老派優雅的解渴首選。鑽進民樂街巷弄，那裡有更多低調的工作室。',
                storyEn: 'The bitter tea and grass tea are icons of old Taipei elegance. Explore Minle St alleys for low-key studios.',
                exactLocation: '城隍廟周邊',
                exactLocationEn: 'Around Xiahai Temple',
                mustTry: '城隍廟對面的千年草茶',
                mustTryEn: 'Century-old herbal tea',
                avoid: '週末午後造訪，排隊求姻緣會很久',
                avoidEn: 'Visiting on weekend afternoons; the line for praying will be very long.',
                bestTime: '10:00-11:30'
            }
        }
    },
    {
        id: 'tw-t-a2',
        title: '大稻埕碼頭 (夕陽單車)',
        titleEn: 'Dadaocheng Wharf',
        type: 'attraction',
        duration: '1.5小時',
        image: '⛵',
        description: '淡水河邊的舊碼頭，現在是散步和拍照的地方。早上光線好，對岸是蘆洲，偶爾會有老人在河邊釣魚、打太極。台北少有的安靜。',
        descriptionEn: 'An old pier by the Tamsui River, now a place for walks and photos. The morning light is beautiful, with Luzhou across the river. You might see locals fishing or practicing Tai Chi. A rare quiet spot in Taipei.',
        price: 0,
        address: '台北市大同區大稻埕碼頭',
        rating: 4.8,
        lat: 25.0565,
        lng: 121.5085,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '24H',
        tags: ['夕陽', '浪漫', '生活'],
        themeColor: '#3a7aaa',
        teaser: '台北最美河岸夕陽，吹著海風迎接夜晚。',
        teaserEn: 'Taipei\'s most beautiful river sunset, ocean breeze included.',
        coverImage: 'https://plus.unsplash.com/premium_photo-1683842178259-61789b7e0e56?q=80&w=774&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '慢活行程',
                labelEn: 'Slow Life',
                summary: '租台單車騎向社子島',
                summaryEn: 'Cycle to Shezi Island',
                story: '碼頭有 YouBike，沿著河岸往北騎，可以看見完全不同的淡水河視角。傍晚時分，河面波光粼粼，非常紓壓。',
                storyEn: 'Rent a YouBike and ride north along the river for a different perspective of Taipei\'s waterways.'
            },
            {
                id: 'must-eat',
                label: '微醺時刻',
                labelEn: 'Drinks',
                summary: '貨櫃市集的柳橙汁或調酒',
                summaryEn: 'Container Market Juices or Cocktails',
                story: '如果不喝酒，買杯現榨柳橙汁坐在河堤邊也很有儀式感。伴隨著夕陽餘暉，這是最不費力的享受。',
                storyEn: 'Grab a fresh juice or cocktail from the container market. Sitting on the pier with the sunset is effortless joy.'
            },
            {
                id: 'trap',
                label: '氣候警報',
                labelEn: 'Weather Warning',
                summary: '夏日正午毫無遮蔽',
                summaryEn: 'Cruel Noonday Sun',
                story: '碼頭完全沒有遮蔽物。絕對、絕對不要在中午造訪，你會被太陽曬到失去所有遊興。',
                storyEn: 'There is zero shade. NEVER visit at noon in summer; the sun will drain all the joy from your trip.'
            },
            {
                id: 'hidden',
                label: '攝影私藏',
                labelEn: 'Photo Spot',
                summary: '藍調時刻的船影攝影',
                summaryEn: 'Boat Silhouettes at Blue Hour',
                story: '台北最美的夕陽所在地，河岸市集與單車步道的完美結合。看著橘紅色的太陽慢慢落入淡水河，伴隨著微風，這是台北最浪漫的時刻。夕陽落下後的 15 分鐘「藍調時刻」，碼頭泊船的剪影配合遠處橋樑燈光，是構圖最美的瞬間。',
                storyEn: 'The 15 mins of "Blue Hour" after sunset provides the best silhouettes of boats and city lights.'
            }
        ],
        insiderTip: {
            teaser: '17:30 抵達碼頭，剛好銜接藍調時刻。',
            teaserEn: 'Arrive at 5:30 PM to catch the magical blue hour.',
            full: {
                story: '走到碼頭盡頭往南看，能看到遠方的觀音山。這個角度在 Google 上找不到，但是台北河岸最好的構圖之一。',
                storyEn: 'Walk to the end of the pier and look south to see Guanyin Mountain in the distance. This angle isn\'t on Google Maps but is one of the best compositions on the Taipei riverside.',
                exactLocation: '碼頭貨櫃區',
                exactLocationEn: 'Container Market Area',
                mustTry: '貨櫃市集的泰式串燒',
                mustTryEn: 'Thai skewers from the market',
                avoid: '週末傍晚單車道會非常擁擠',
                avoidEn: 'Bike paths can be extremely crowded on weekend evenings.',
                bestTime: '17:30-18:30'
            }
        }
    },
    {
        id: 'tw-t-f2',
        title: '永樂市場 經典乾麵',
        titleEn: 'Yongle Market Noodles',
        type: 'food',
        duration: '45分',
        image: '🍜',
        description: '在大稻埕在地人的日常午餐清單中，永樂市場二樓的無名麵攤絕對榜上有名。一碗細乾麵配上一碗綜合魚丸湯，就是最踏實、最具人情味的美味。',
        descriptionEn: 'A local favorite in Dadaocheng. This nameless stall in Yongle Market 2F serves simple yet soul-warming dry noodles and fishball soup.',
        price: 80,
        address: '台北市迪化街一段21號 (市場2樓)',
        rating: 4.6,
        lat: 25.0548,
        lng: 121.5092,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '08:00-15:00',
        tags: ['老饕', '平價', '隱藏'],
        themeColor: '#8a5a3a',
        teaser: '市場裡的隱藏美味，在地人吃了三十年的乾麵。',
        teaserEn: 'Hidden market gem, dry noodles locals have loved for 30 years.',
        coverImage: 'https://images.unsplash.com/photo-1600490036275-35f5f1656861?q=80&w=774&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-eat',
                label: '靈魂秘方',
                labelEn: 'Secret Sauce',
                summary: '乾麵一定要加靈魂辣油',
                summaryEn: 'Add the House Chili Oil',
                story: '這家無名麵攤的麵條極 Q。最厲害的是放在桌角那罐自家炒製的辣油，加一小勺香氣瞬間升級。',
                storyEn: 'The noodles are perfectly chewy. The secret is the homemade chili oil on the table; one spoon changes everything.'
            },
            {
                id: 'must-do',
                label: '市場奇航',
                labelEn: 'Market Adventure',
                summary: '穿梭在旗袍與布料間',
                summaryEn: 'Dining Amidst Silks',
                story: '永樂市場一樓是布料市場，二樓藏著幾攤老麵攤，米其林必比登推薦。魯肉飯加燙青菜，一碗 $50。坐在舊市場的木椅上吃，旁邊是來買布料的老裁縫師。在滿是旗袍與高級布料的 2 樓鑽巷子找麵攤，這種結合華麗與簡樸的視覺衝突是台北特有的風景。',
                storyEn: 'The first floor of Yongle Market is filled with fabric stalls, while the second floor hides several old noodle shops, some recommended by Michelin Bib Gourmand. Order the braised pork rice with boiled vegetables for about $50. Sitting on the old wooden chairs in the market, surrounded by tailors buying fabric, creates a unique visual contrast of luxury and simplicity that is quintessentially Taipei.'
            },
            {
                id: 'trap',
                label: '排隊地雷',
                labelEn: 'Timing Trap',
                summary: '避開中午 12 點人潮',
                summaryEn: 'Avoid the 12 PM Lunch Rush',
                story: '市場雖然大，但麵攤位置有限。12 點是周邊工作者用餐高峰，推薦 11:00 或 13:30 造訪最舒適。',
                storyEn: 'Seats are limited. 12 PM is the peak time for local workers; visit at 11:00 or 1:30 PM for a better experience.'
            },
            {
                id: 'hidden',
                label: '完美結尾',
                labelEn: 'Sweet End',
                summary: '門口的古早味紅豆餅',
                summaryEn: 'Traditional Red Bean Cakes',
                story: '吃完乾麵，下樓到市場門口買個老派紅豆餅，那是大稻埕傳承幾十年的甜點儀式。',
                storyEn: 'After noodles, grab a traditional red bean cake at the market entrance for a classic local dessert ritual.'
            }
        ],
        insiderTip: {
            teaser: '麵一定要加辣油，下午 3 點準時收攤。',
            teaserEn: 'Add chili oil! Shops close strictly at 3 PM.',
            full: {
                story: '十一點半前到，否則就要等位。只收現金，不要問有沒有菜單 - 指著旁邊客人的碗說「一樣的」就對了。在滿是布料、旗袍的 2 樓鑽巷子。找人最多的那一攤，點餐後阿姨會大聲吆喝，非常有市場節奏。',
                storyEn: 'Arrive before 11:30 AM to avoid waiting. They only accept cash. Don\'t ask for a menu—just point to a neighbor\'s bowl and say "the same." Navigate the fabric-filled 2F, find the busiest stall, and enjoy the energetic market vibe as the auntie shouts orders.',
                exactLocation: '永樂市場 2F',
                exactLocationEn: 'Yongle Market 2F',
                mustTry: '乾細麵 + 綜合魚丸湯',
                mustTryEn: 'Dry noodles + Fishball soup',
                avoid: '不要太晚去，很多食材下午一點就賣完',
                avoidEn: 'Don\'t go too late; many ingredients sell out by 1 PM.',
                bestTime: '11:00'
            }
        }
    },
    {
        id: 'tw-t-a3',
        title: '艋舺龍山寺',
        titleEn: 'Longshan Temple',
        type: 'attraction',
        duration: '1小時',
        image: '🐲',
        description: '萬華區最重要的文化信仰中心。作為國定古蹟，這裡的石雕、剪黏與藻井手藝是全台清代建築的巔峰之作。就算不信教，光是欣賞這座建築藝術宮殿就足以震撼。',
        descriptionEn: 'The cultural heart of Wanhua District. A national monument showcasing the peak of Qing Dynasty architectural craftsmanship.',
        price: 0,
        address: '台北市廣州街211號',
        rating: 4.9,
        lat: 25.0368,
        lng: 121.4999,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '06:00-22:00',
        tags: ['寺廟', '古蹟', '文化'],
        themeColor: '#c24a2d',
        teaser: '萬華的靈魂所在，全台最精緻的寺廟建築。',
        teaserEn: 'The soul of Wanhua, the most intricate temple architecture in Taiwan.',
        coverImage: 'https://plus.unsplash.com/premium_photo-1693238111767-c6b47ba92f40?q=80&w=774&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '古蹟導覽',
                labelEn: 'History',
                summary: '抬頭看看極致奢華藻井',
                summaryEn: 'Look Up at the Ceiling',
                story: '台北最具代表性的廟宇，建於1738年。平日下午是本地老人來拜拜的時間，香火鼎盛，鐘鼓聲和誦經聲交錯。廟埕廣場外圍有不少街友在此休息，是台北最真實的切面之一。不要只是拜拜，三川殿與大殿的藻井手藝是全台第一，每一尊木雕都有故事，值得靜心觀察。',
                storyEn: 'Don\'t just pray; the intricate wood carvings on the ceilings are masterpieces of world-class artistry.'
            },
            {
                id: 'must-eat',
                label: '老字號',
                labelEn: 'Heritage Food',
                summary: '兩喜號百年魷魚羹',
                summaryEn: 'Liang Xi Hao Squid Soup',
                story: '就在龍山寺旁。雖然現在裝潢現代，但那一碗清甜的魷魚羹味道，是萬華傳承百年的驕傲。',
                storyEn: 'Located right next to the temple. Their century-old squid soup is the culinary pride of Wanhua.'
            },
            {
                id: 'trap',
                label: '隱私規範',
                labelEn: 'Taboo',
                summary: '避免對著神像近距拍照',
                summaryEn: 'No Close-ups of Deities',
                story: '雖然開放攝影，但請保持尊重，不要對著神像正面近距離開閃光燈拍照，這是不成文的禮儀。',
                storyEn: 'Photography is allowed, but do not take close-ups of deity statues or use flash out of respect.'
            },
            {
                id: 'hidden',
                label: '仙氣時刻',
                labelEn: 'Magic Hour',
                summary: '傍晚煙火繚繞的斜射光',
                summaryEn: 'Incense Smoke & Golden Hour',
                story: '傍晚時分點燃的香火與斜射光，下午四點到五點，夕照斜射進廟內，伴隨著昇華 的香煙，是龍山寺最神聖、最美攝影瞬間。',
                storyEn: 'Between 4 and 5 PM, rays of sunlight filter through incense smoke, creating a truly sacred atmosphere.'
            }
        ],
        insiderTip: {
            teaser: '抬頭看看迴龍柱與藻井，細節驚人。',
            teaserEn: 'Look up! The carved pillars and ceilings are breathtaking.',
            full: {
                story: '外國遊客可以拿免費的導覽簡介。進廟要從中門左側進、右側出，這是禮儀。看到信眾如何持香、如何擲筊，不用完全懂，靜靜觀察就是最好的文化體驗。擲筊連續三次聖筊，據說是神明答應你的請求了。',
                storyEn: 'Free multilingual guides are available. The late afternoon sunlight and incense smoke are perfect for photos.',
                exactLocation: '龍山寺內部',
                exactLocationEn: 'Inside Longshan Temple',
                mustTry: '欣賞三川殿全台唯一的「銅龍柱」',
                mustTryEn: 'The unique bronze pillars',
                avoid: '不要在正中午造訪，地面反光很熱',
                avoidEn: 'Avoid noonday visits; the ground reflection can be very hot.',
                bestTime: '16:00'
            }
        }
    },
    {
        id: 'tw-t-a4',
        title: '剝皮寮歷史街區',
        titleEn: 'Bopiliao Historical Block',
        type: 'attraction',
        duration: '1小時',
        image: '🧱',
        description: '穿越百年時空，剝皮寮保留了從清代至日治時期完整的紅磚街廓。這裡曾經是萬華最繁華的木材集散地，如今則是結合藝術、教育與懷舊攝影的文化聖地。',
        descriptionEn: 'Step back a century. This block preserves red brick alleys from Qing to Japanese eras. Once a timber hub, now a cultural landmark.',
        price: 0,
        address: '台北市廣州街101號',
        rating: 4.7,
        lat: 25.0365,
        lng: 121.5015,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '09:00-21:00 (室內展區至18:00)',
        tags: ['歷史', '老建築', '網美'],
        themeColor: '#7d3a22',
        teaser: '萬華最美的紅磚牆，每一扇窗都是歷史。',
        teaserEn: 'Wanhua\'s most beautiful brick walls; every window has a story.',
        coverImage: 'https://plus.unsplash.com/premium_photo-1744871981045-948eb6604759?q=80&w=870&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '攝影必訪',
                labelEn: 'Visuals',
                summary: '紅磚圓拱長廊下漫步',
                summaryEn: 'Walk the Red Brick Arches',
                story: '這裡是電影《艋舺》取景地。長長的拱廊在光影灑落時效果極佳，是穿著復古服裝拍攝寫真的首選。',
                storyEn: 'A prime location for the movie "Monga." The long arches offer great lighting for vintage photography.'
            },
            {
                id: 'must-eat',
                label: '在地美食',
                labelEn: 'Local Food',
                summary: '對面傳承三代的周記肉粥',
                summaryEn: 'Zhouji Meat Porridge Across',
                story: '就在對面。一碗 20 元的肉粥配上口感酥嫩的紅燒肉，是萬華最經典、最便宜的美食組合。',
                storyEn: 'Right across the street. A $20 bowl of porridge with crispy red pork is the ultimate classic Wanhua snack.'
            },
            {
                id: 'trap',
                label: '行程規劃',
                labelEn: 'Timing',
                summary: '週一室內展區公休',
                summaryEn: 'Indoor Exhibits Closed Monday',
                story: '雖然室外長廊 24 小時開放，但室內的歷史特展週一公休。想看深度歷史的話請避開週一。',
                storyEn: 'Outdoor alleys stay open, but indoor historical exhibits are closed on Mondays.'
            },
            {
                id: 'hidden',
                label: '歷史細節',
                labelEn: 'Details',
                summary: '藏在後棟的神祕古井',
                summaryEn: 'The Mysterious Ancient Well',
                story: '在後棟建築群中，保留了一座清代的古井，它見證了當年剝皮寮居民飲水的日常縮影。',
                storyEn: 'A preserved Qing Dynasty well hides in the back buildings, a quiet witness to local history.'
            }
        ],
        insiderTip: {
            teaser: '這裡非常適合穿著旗袍拍照。',
            teaserEn: 'Perfect for Qipao or vintage-style photography.',
            full: {
                story: '剝皮寮現在變成教育中心與藝術展場。不定期有在地藝術家的特展。後段的教育牆介紹了萬華的「剝皮」歷史，值得一看。',
                storyEn: 'Now an arts center. Check out local artist exhibits and the wall explaining Wanhua\'s "skinning" history.',
                exactLocation: '萬華廣州街',
                exactLocationEn: 'Guangzhou St, Wanhua',
                mustTry: '拍下紅磚外牆與古式路燈',
                mustTryEn: 'Photo with brick walls and lamps',
                avoid: '週一室內展館公休',
                avoidEn: 'Monday visits (indoor areas are closed).',
                bestTime: '15:00'
            }
        }
    },
    {
        id: 'tw-t-f3',
        title: '慈聖宮大樹下熱炒',
        titleEn: 'Cisheng Temple Stir-fry',
        type: 'food',
        duration: '1.5小時',
        image: '🥘',
        description: '感受台北最純粹的「台式煙火氣」。在慈聖宮廟前的大樹下，幾張圓桌、幾盤熱炒配上一瓶冰啤酒，這就是台北老一輩人最浪漫、最經典的精緻下午茶。',
        descriptionEn: 'The purest Taiwanese soul food. Under the century-old trees of Cisheng Temple, stir-fry and cold beer are the ultimate local afternoon tea.',
        price: 500,
        address: '大稻埕慈聖宮周邊',
        rating: 4.8,
        lat: 25.0595,
        lng: 121.5122,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '10:00-18:00 (部分店家)',
        tags: ['煙火氣', '熱炒', '台味'],
        themeColor: '#c28a2d',
        teaser: '慈聖宮廟前大樹下的熱炒，台北最道地的吃法。',
        teaserEn: 'Dining under a temple tree: Taipei\'s most authentic experience.',
        coverImage: 'https://plus.unsplash.com/premium_photo-1693239306186-20f9703f2e09?q=80&w=870&auto=format&fit=crop&q=80&w=800',

        expertStories: [
            {
                id: 'must-eat',
                label: '招牌組合',
                labelEn: 'Signature',
                summary: '許家鹹肉粥與紅燒肉',
                summaryEn: 'Salty Porridge & Fried Pork',
                story: '這家是經典中的經典。現沖的鹹肉粥與現炸的紅燒肉（一定要點肥瘦各半），是老台北人的能量來源。',
                storyEn: 'The icon of icons. Salty porridge with freshly fried pork is the energy source of old Taipei.'
            },
            {
                id: 'must-do',
                label: '氛圍體驗',
                labelEn: 'Atmosphere',
                summary: '廟前大樹下的下午酒',
                summaryEn: 'Afternoon Drinks Under Trres',
                story: '感受在廟前、大樹下與在地長輩一起用餐的氣氛。這不僅是吃飯，更是一種與老台北時空對話的儀式。',
                storyEn: 'Join the elders under the tree. It\'s not just dinner; it\'s a dialogue with Taipei\'s living history.'
            },
            {
                id: 'trap',
                label: '供應時間',
                labelEn: 'Availability',
                summary: '下午四點後很多菜會完售',
                summaryEn: 'Dishes Sell Out by 4 PM',
                story: '這裡的店家大多跟著日光作息。雖然表定到 18:00，但熱門菜色如炸蝦捲常在下午 16:00 前就會售罄。',
                storyEn: 'Shops follow the sun. Popular items like shrimp rolls often sell out by 4 PM; arrive early!'
            },
            {
                id: 'hidden',
                label: '在地熟客知',
                labelEn: 'Pro Tip',
                summary: '排骨湯可以「無限續湯」',
                summaryEn: 'Unlimited Soup Refills',
                story: '點一碗原汁排骨湯，老闆阿姨通常會很熱情地問你要不要續湯。那醇厚的排骨清甜感，續兩三次都沒問題。',
                storyEn: 'Order the pork rib soup; the staff will likely offer free refills of that sweet, rich broth.'
            }
        ],
        insiderTip: {
            teaser: '推薦炸蝦捲與酥嫩排骨酥，這不是晚餐，是台式靈魂下午茶。',
            teaserEn: 'Try the shrimp rolls! Note: its an afternoon thing, not dinner.',
            full: {
                story: '這裡的店家通常下午 4-5 點就收攤。這不是晚餐，這是屬於老台北人的「精緻下午茶」。排骨湯也是一絕，可以續湯。',
                storyEn: 'Shops close by 4-5 PM. This is the "Grand Afternoon Tea" of old Taipei. Don\'t miss the soup!',
                exactLocation: '慈聖宮廟前',
                exactLocationEn: 'In front of Cisheng Temple',
                mustTry: '排骨湯 + 蝦捲 + 一瓶台啤',
                mustTryEn: 'Pork soup + Shrimp rolls + Beer',
                avoid: '太晚造訪，你只能看著收攤的攤位發呆',
                avoidEn: 'Visiting late; you\'ll only see closing stalls.',
                bestTime: '14:00'
            }
        }
    },
    {
        id: 'tw-t-f4',
        title: '華西街 (米其林旗艦)',
        titleEn: 'Huaxi St (Michelin Flagship)',
        type: 'food',
        duration: '2小時',
        image: '🍢',
        description: '著名的蛇肉店與多間米其林必比登推薦路邊攤聚集地。整齊的牌樓頂棚下，隱藏著強烈的「江湖感」與「黑色暴力美學」，是台北最有故事也最有個性的老牌夜市。',
        descriptionEn: 'A market with strong grit and Michelin recognition. Home to "Black Gold" braised pork rice and multiple Bib Gourmand winners.',
        price: 300,
        address: '台北市華西街',
        rating: 4.5,
        lat: 25.0375,
        lng: 121.4985,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '16:00-24:00',
        tags: ['🌟米其林', '萬華', '老夜市'],
        themeColor: '#7d2222',
        teaser: '米其林光環下的江湖夜市，必嚐傳說級魯肉飯。',
        teaserEn: 'Michelin-starred street food in a gritty, historic market.',
        coverImage: 'https://images.unsplash.com/photo-1625628796472-99e9d285e00e?q=80&w=870&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃推薦',
                labelEn: 'Must Eat',
                summary: '小王煮瓜的「黑金魯肉飯」',
                summaryEn: 'Black Gold Braised Pork Rice',
                story: '這不是普通魯肉飯。色澤黑潤發亮，卻肥而不膩，配上清甜的瓜仔肉羹，是兩屆米其林必比登得主。',
                storyEn: 'Rich, dark, but surprisingly light. This Michelin Bib Gourmand winner is the market\'s crowning jewel.'
            },
            {
                id: 'must-do',
                label: '視覺體驗',
                labelEn: 'Visuals',
                summary: '欣賞老字號蛇肉店招牌',
                summaryEn: 'The Iconic Snake Shop Signs',
                story: '雖然大部分蛇肉表演已取消，但那誇張的亮黃色招牌與神祕感，依然保留了大時代的氛圍。',
                storyEn: 'While live shows are gone, the neon yellow signs and mysterious vibe preserve a bygone era.'
            },
            {
                id: 'trap',
                label: '路線警報',
                labelEn: 'Navigation',
                summary: '兩端出口才是美食戰區',
                summaryEn: 'Stalls are at the Entrances',
                story: '華西街很長，米其林攤位大多集中在廣州街與桂林路兩側的出口區。中間部分多是大排檔或按摩店。',
                storyEn: 'The famous stalls are at either end of the long market. Don\'t get distracted in the middle!'
            },
            {
                id: 'hidden',
                label: '熟食推薦',
                labelEn: 'Expert Pick',
                summary: '源芳刈包的綿密肥肉',
                summaryEn: 'Yuan Fang Steamed Buns',
                story: '也是米其林推薦，刈包的五花肉燉煮到入口即化，酸菜與酸糖粉的比例掌握的堪稱藝術。',
                storyEn: 'Another Michelin pick. Their steamed buns feature pork belly that truly melts in your mouth.'
            }
        ],
        insiderTip: {
            teaser: '試試米其林推薦的「黑金魯肉飯」，這裡環境極好且有冷氣。',
            teaserEn: 'Try the Michelin pork rice in this air-conditioned market.',
            full: {
                story: '夜市不要急，慢慢走，看到想吃的就停。台灣人吃夜市的方式是邊走邊吃，不是找位子坐下來。手上同時拿三樣東西很正常，這是技能，不是失禮。華西街現在環境整修得很乾淨，是極少數有室內頂棚且夏季有強冷氣的夜市。對於怕熱的旅人來說是極大的福音。',
                storyEn: 'This market is roofed and air-conditioned, making it a rare comfortable choice for summer nights.',
                exactLocation: '華西街北段',
                exactLocationEn: 'North End of Huaxi St',
                mustTry: '黑金魯肉飯 + 瓜仔肉清湯',
                mustTryEn: 'Black Gold rice + Melon soup',
                avoid: '不要太晚造訪，熱門店家 21:30 就會關門',
                avoidEn: 'Visiting too late; popular shops close by 9:30 PM.',
                bestTime: '20:30'
            }
        }
    },
    {
        id: 'tw-t-a5',
        title: '象山親山步道',
        titleEn: 'Elephant Mountain Trail',
        type: 'nature',
        duration: '2小時',
        image: '⛰️',
        description: '台北最受歡迎的登山步道，也是拍攝台北 101 的最佳視角。階梯雖多但難度適中。清晨五點半的象山只有跑者與追日的人，看著城市從黑色輪廓轉為金色，是台北最神聖的時刻。',
        descriptionEn: 'The most popular trail for Taipei 101 views. Challenging but rewarding. At 5:30 AM, you share the sunrise only with joggers and the waking city.',
        price: 0,
        address: '台北市信義區信義路五段150巷',
        rating: 4.9,
        lat: 25.0272,
        lng: 121.5707,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '24H',
        tags: ['日出', '健身', '夜景'],
        themeColor: '#4a7c59',
        teaser: '台北 101 的最佳伸展台，流汗後的日出獎勵。',
        teaserEn: 'The best stage for Taipei 101, a sunrise reward for your sweat.',
        coverImage: 'https://images.unsplash.com/photo-1583938484095-270e82655645?q=80&w=1335&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '避開人潮',
                labelEn: 'Crowd Hack',
                summary: '六巨石不是終點',
                summaryEn: 'Six Rocks is not the end',
                story: '大多數遊客在六巨石（Six Giant Rocks）就停下排隊拍照了。如果你繼續往上爬 10 分鐘，會到達一個更寬敞的平台，那裡的視野更高，而且幾乎沒人跟你搶鏡頭。',
                storyEn: 'Most tourists stop and queue at the Six Giant Rocks. If you climb 10 more minutes, you\'ll reach a wider platform with a higher view and fewer people.'
            },
            {
                id: 'hidden',
                label: '攝影機位',
                labelEn: 'Photo Spot',
                summary: '相機架在樹根旁',
                summaryEn: 'Tripod by the roots',
                story: '想拍出那種「人在樹叢中看 101」的氛圍嗎？在第二個觀景台，把相機放低，利用旁邊的老樹根當前景。',
                storyEn: 'To get that "looking through nature at 101" vibe, go to the second deck and use the old tree roots as your foreground.'
            },
            {
                id: 'trap',
                label: '黃金時刻',
                labelEn: 'Golden Hour',
                summary: '提前 45 分鐘抵達',
                summaryEn: 'Arrive 45m early',
                story: '象山的夕陽非常短暫。建議在預測日落時間前 45 分鐘就抵達山上，因為最好的粉紅色晚霞通常出現在日落前的那一刻。',
                storyEn: 'Elephant Mountain sunsets are brief. Arrive 45 mins before the scheduled sunset to catch the best pink sky.'
            },
            {
                id: 'must-eat',
                label: '補給建議',
                labelEn: 'Supplies',
                summary: '帶上一瓶水',
                summaryEn: 'Bring water',
                story: '這聽起來很簡單，但象山的階梯比你想像中更耗體力。在捷運站出口就買好水，山上沒有自動販賣機。',
                storyEn: 'It sounds simple, but the steps are more draining than you think. Buy water at the MRT exit; there are no vending machines on the trail.'
            }
        ],
        insiderTip: {
            teaser: '從捷運站直接上山，避開遊客正門。',
            teaserEn: 'Go straight from MRT to skip the main tourist entrance.',
            full: {
                story: '清晨五點半到，101 從黑色輪廓變成橘色再變金色的過程是無價的。帶瓶水，樓梯很多。',
                storyEn: 'Arrive at 5:30 AM. Watching 101 turn from black to orange to gold is priceless. Bring water!',
                exactLocation: '象山步道高處',
                bestTime: '05:30'
            }
        }
    },
    {
        id: 'tw-t-f5',
        title: '鼎泰豐 (信義店)',
        titleEn: 'Din Tai Fung (Xinyi)',
        type: 'food',
        duration: '1小時',
        image: '🥟',
        description: '米其林一星推薦，也是全世界最知名的小籠包。永康街本店早上開門人相對少，是一天裡最好入座的時間。皮薄透明、湯汁鮮濃，每一顆都是職人精神的展現。',
        descriptionEn: 'Michelin-starred and world-famous for Xiao Long Bao. The Xinyi original store is best visited right at opening.',
        price: 600,
        address: '台北市大安區信義路二段194號',
        rating: 4.8,
        lat: 25.0334,
        lng: 121.5301,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '10:00-21:00 (週末提前開門)',
        tags: ['🌟米其林一星', '經典', '小籠包'],
        themeColor: '#d64d4d',
        teaser: '米其林級的工藝，全世界最好的小籠包。',
        teaserEn: 'Michelin-grade craft, the best soup dumplings in the world.',
        coverImage: 'https://images.unsplash.com/photo-1678026582164-24a5460c447a?q=80&w=774&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '十八摺秘密',
                labelEn: '18-Fold Rule',
                summary: '每一顆都是數學',
                summaryEn: 'Math in every bite',
                story: '每一顆小籠包都精準維持 18 摺，這是口感最均勻的黃金比例。如果你仔細觀察主廚隔著玻璃施魔法，你會發現那種近乎偏執的工藝。',
                storyEn: 'Every dumpling has exactly 18 folds for the perfect texture. Watch the chefs through the glass to see this bordering-on-obsessive craft.'
            },
            {
                id: 'hidden',
                label: '醬料黃金比',
                labelEn: 'The Sauce',
                summary: '3 醋 1 醬油',
                summaryEn: '3 Vinegar, 1 Soy',
                story: '最在地的吃法是：一份醬油配三份米醋。把薑絲浸泡在裡面，然後輕輕夾起小籠包，沾一點醬，破開一小口讓湯汁流進湯匙，這才是品味的正確開場。',
                storyEn: 'The local way: 3 parts vinegar to 1 part soy sauce. Soak the ginger, dip the dumpling, and let the soup bleed onto your spoon first.'
            },
            {
                id: 'trap',
                label: '排隊攻略',
                labelEn: 'Wait Hack',
                summary: '10 點整是唯一解',
                summaryEn: '10 AM sharp',
                story: '信義店（或本店）最好在早上 10 點開門前就抵達。這時第一批入座的機率最高。只要晚 20 分鐘，你可能就要等 90 分鐘起跳。',
                storyEn: 'Arrive before 10 AM opening at the Xinyi original store. Being in the first batch keeps you from 90-minute waits later.',
                url: 'https://www.dintaifung.com.tw/branch_wait_time.php',
                urlLabel: '查詢即時候位進度'
            },
            {
                id: 'must-eat',
                label: '隱藏主角',
                labelEn: 'Hidden Star',
                summary: '不要忘記小菜',
                summaryEn: 'Order the Cucumber',
                story: '雖然主角是小籠包，但熟客一定會點「小菜」（涼拌小黃瓜）。那種爽脆感是平衡熱騰騰包子的最佳解藥。',
                storyEn: 'While the dumplings are the star, seasoned regulars always order the "Appetizer" (Spiced Cucumber) to balance the steam.'
            }
        ],
        insiderTip: {
            teaser: '薑絲配醋是靈魂，讓服務員示範吃法。',
            teaserEn: 'Ginger and vinegar are key; let the staff show you how.',
            full: {
                story: '早上開門就去，排隊時間最短。不要假裝你很懂，讓服務生帶領你品味那十八摺的精準。',
                storyEn: 'Go right at opening. Let the staff guide you through the 18-fold perfection of each dumpling.',
                mustTry: '小籠包 + 蛋花湯',
                bestTime: '10:00'
            }
        }
    },
    {
        id: 'tw-t-f6',
        title: '信義區巷弄便當',
        titleEn: 'Xinyi Lane Bento',
        type: 'food',
        duration: '45分',
        image: '🍱',
        description: '離開豪華百貨，走進信義區的小巷。這裡的台式自助餐是上班族的靈魂加油站。四菜一主餐，不到 120 元，這是台北最真實、最有活力的生存日常。',
        descriptionEn: 'Step away from malls into the back alleys. This is the authentic fuel for Xinyi office workers—affordable and soulful.',
        price: 120,
        address: '台北市信義區巷弄',
        rating: 4.6,
        lat: 25.0350,
        lng: 121.5640,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['在地人', '平價', '日常'],
        themeColor: '#8a5a3a',
        teaser: '不是景點，是台灣真實的日常切面。',
        teaserEn: 'Not a tourist spot, but a real slice of Taiwan life.',
        coverImage: 'https://images.unsplash.com/photo-1709111642708-8c1893dd2c66?q=80&w=1170&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '點餐節奏',
                labelEn: 'Ordering Flow',
                summary: '比手畫腳也是藝術',
                summaryEn: 'The art of pointing',
                story: '自助餐的靈魂在於「快」。不要猶豫太久，看著阿姨的手勢，精準指點你想要的菜色。通常這排長龍是因為大家都知道這裡的菜最鮮。',
                storyEn: 'Bento shops are all about speed. Don\'t hesitate; follow the "Auntie\'s" lead and point precisely. The long line is a sign of freshness.'
            },
            {
                id: 'hidden',
                label: '靈魂滷汁',
                labelEn: 'The Gravy',
                summary: '淋在白飯上的精華',
                summaryEn: 'Essence on the rice',
                story: '如果可以，請阿姨在你的白飯上「淋一點滷汁」。那是滷肉的精華，能讓一份平凡的便當瞬間升級。',
                storyEn: 'If you can, ask the lady for a bit of "Lu-Zhi" (meat gravy) on your rice. It turns a standard bento into a masterpiece.'
            },
            {
                id: 'must-eat',
                label: '職人群像',
                labelEn: 'Office Life',
                summary: '信義區的Ｂ面',
                summaryEn: 'Xinyi\'s B-Side',
                story: '在這裡，你會看到穿著 10 萬西裝的經理和快遞員坐在同一個圓桌吃飯。這是台北信義區最真實、最平等的一個角落。',
                storyEn: 'Here, managers in expensive suits and delivery guys sit at the same round table. It\'s Xinyi\'s most authentic and egalitarian corner.'
            },
            {
                id: 'trap',
                label: '外帶體驗',
                labelEn: 'Takeout Hack',
                summary: '去公園吃吧',
                summaryEn: 'Eat at the park',
                story: '如果店內太擠，裝在紙盒裡外帶去附近的公園椅子坐著吃。吹著風，看著城市轉動，這是非常有溫度的日常。',
                storyEn: 'If it\'s too crowded, take your paper bento box to a nearby park bench. Watching the city move while you eat is a soulful ritual.'
            }
        ],
        insiderTip: {
            teaser: '看著菜色比手勢，阿姨會精準幫你夾。',
            teaserEn: 'Just point at the dishes; the aunties will handle it.',
            full: {
                story: '中午 12 點旁邊全是穿西裝的上班族。觀察大家選菜的節奏，這是台灣人的日常選擇題。',
                storyEn: 'At 12 PM, you\'ll be surrounded by office workers. Witness the rhythm of daily local choices.',
                mustTry: '滷肉 + 炒青菜'
            }
        }
    },
    {
        id: 'tw-t-a6',
        title: '大安森林公園 (健康步道)',
        titleEn: 'Daan Forest Park',
        type: 'nature',
        duration: '1小時',
        image: '🌳',
        description: '台北的中央公園。這裡的鵝卵石健康步道是台灣長輩的修煉場。脫掉鞋子走上三分鐘，感受腳底傳來的痛與暢快，那是台北人最獨特的保健儀式。',
        descriptionEn: 'Taipei\'s Central Park. The pebble "health paths" are a ritual for locals. Walk barefoot and feel the "painful" joy.',
        price: 0,
        address: '台北市大安區信義路三段100號',
        rating: 4.7,
        lat: 25.0315,
        lng: 121.5350,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '24H',
        tags: ['公園', '慢活', '免門票'],
        themeColor: '#4a7c59',
        teaser: '城市的綠洲，觀察台北日常的最佳座位。',
        teaserEn: 'A city oasis, the best seat to watch daily life flow.',
        coverImage: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?q=80&w=1160&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '腳底修煉',
                labelEn: 'Pebble Path',
                summary: '脫鞋感受台式痛感',
                summaryEn: 'Feel the local pain',
                story: '公園裡的鵝卵石步道是台灣人的「腳底按摩」。雖然走起來很痛，但這是在地長輩維持健康的秘密。勇敢脫下鞋子挑戰三分鐘，體驗那種痛並快樂著的感覺。',
                storyEn: 'The pebble paths are a local "foot massage" ritual. It hurts, but it\'s the health secret of our elders. Take off your shoes and challenge yourself for 3 mins.'
            },
            {
                id: 'must-eat',
                label: '公園早餐',
                labelEn: 'Park Breakfast',
                summary: '配飯糰看鴿子',
                summaryEn: 'Rice balls \u0026 pigeons',
                story: '在公園入口處常有賣飯糰的小攤。買一份古早味飯糰，坐在露天音樂台的長椅上吃。這比在任何餐廳吃早餐都更像一個台北人。',
                storyEn: 'Find a rice ball stall at the entrance. Eat it on a bench by the amphitheater; it\'s more "Taipei" than any brunch cafe.'
            },
            {
                id: 'trap',
                label: '防蚊叮嚀',
                labelEn: 'Mosquito Alert',
                summary: '小黑蚊出沒注意',
                summaryEn: 'Watch for midges',
                story: '大安森林公園的「小黑蚊」非常厲害，尤其是在樹蔭下。建議穿長褲或噴好防蚊液，否則你的腳踝會成為牠們的盛宴。',
                storyEn: 'The "black midges" here are ferocious, especially in the shade. Wear long pants or use repellent, or your ankles will be their feast.'
            },
            {
                id: 'hidden',
                label: '賞鳥熱點',
                labelEn: 'Bird Spot',
                summary: '黑冠麻鷺的家',
                summaryEn: 'Home of the Heron',
                story: '這裡有非常多不怕人的「大笨鳥」（黑冠麻鷺）。它們常站在草地上一動也不動假裝自己是雕像。如果你很有耐心，可以觀察它們捕食蚯蚓的神技。',
                storyEn: 'Look for the "Big Stupid Bird" (Malayan Night Heron). They stand as still as statues. If you have patience, watch their masterclass in worm hunting.'
            }
        ],
        insiderTip: {
            teaser: '脫鞋走鵝卵石步道，體驗台式的痛感保健。',
            teaserEn: 'Try the pebble path barefoot for a local health ritual.',
            full: {
                story: '坐下來看著旁邊練太極、唱卡拉 OK 的大叔。這裡比任何景點都顯得真實而坦然。',
                storyEn: 'Sit and watch locals practice Tai Chi or sing karaoke; it\'s more authentic than any landmark.',
                bestTime: '12:00'
            }
        }
    },
    {
        id: 'tw-t-a7',
        title: '四四南村',
        titleEn: '44 South Village',
        type: 'attraction',
        duration: '1小時',
        image: '🏘️',
        description: '台北最後一個眷村遺址。老舊的低矮平房與後方雄偉的台北 101 形成強烈對比。這裡現在是文創中心，也是見證台北「舊與新」交匯最美的角度。',
        descriptionEn: 'Taipei\'s last military dependents\' village. Low cabins contrast with 101, showcasing the collision of old and new.',
        price: 0,
        address: '台北市信義區松勤街50號',
        rating: 4.6,
        lat: 25.0312,
        lng: 121.5615,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '24H (室內展區至18:00)',
        tags: ['眷村', '文青', '攝影'],
        themeColor: '#7d3a22',
        teaser: '眷村轉角遇見 101，感受歷史與現代的對話。',
        teaserEn: '101 meets historical cabins; a dialogue across time.',
        coverImage: 'https://images.unsplash.com/photo-1531934985319-1fc5317d8ce1?q=80&w=774&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '新舊交界',
                labelEn: 'Contrast Shot',
                summary: '捕捉 101 的最佳角度',
                summaryEn: 'Best angle for 101',
                story: '站在眷村的小坡上，背景是現代化的 101 大樓。這種歷史建築與摩天大樓的強烈對比，是四四南村最標誌性的視覺語言。',
                storyEn: 'Standing on the village slopes with 101 behind creates a stunning contrast. It\'s the most iconic visual language of this spot.'
            },
            {
                id: 'must-eat',
                label: '貝果靈魂',
                labelEn: 'Bagel Soul',
                summary: '好丘的在地口味',
                summaryEn: 'Good Cho\'s flavors',
                story: '「好丘」不僅是間咖啡店，它把台灣在地食材填進了貝果裡。試試看剝皮辣椒或芋頭口味，那是你想像不到的驚喜組合。',
                storyEn: 'Good Cho\'s infuses local ingredients into their bagels. Try the peeled chili or taro flavors for an unexpected surprise.'
            },
            {
                id: 'trap',
                label: '防曬叮嚀',
                labelEn: 'Sun Protection',
                summary: '午後無遮蔽',
                summaryEn: 'No shade in PM',
                story: '四四南村的草皮區非常美，但完全沒有遮蔽物。下午兩、三點來拍照時，務必戴上帽子或墨鏡，否則台北的烈日會讓你很快就想投降。',
                storyEn: 'The lawn is beautiful but has zero shade. Bring a hat or shades in the mid-afternoon, or the Taipei sun will defeat you quickly.'
            },
            {
                id: 'hidden',
                label: '時光膠囊',
                labelEn: 'Time Capsule',
                summary: '室內展覽的溫度',
                summaryEn: 'Interior warmth',
                story: '除了外表的草地，記得走進室內的展示區。那裡保留了當年眷村家庭的客廳佈置，你能感受到那個年代特有的溫暖與堅韌。',
                storyEn: 'Beyond the grass, visit the indoor exhibits. The preserved living rooms capture the warmth and resilience of the village era.'
            }
        ],
        insiderTip: {
            teaser: '「好丘」的貝果值得一試，配著 101 吃下午茶。',
            teaserEn: 'Good Cho\'s bagels are great to pair with the 101 view.',
            full: {
                story: '坐在磚牆邊，背景是摩天大樓。這個畫面只有在台北的四四南村才拍得到。',
                storyEn: 'Sit by the brick walls with skyscrapers behind; it\'s a unique Taipei photo op.',
                bestTime: '13:30'
            }
        }
    },
    {
        id: 'tw-t-a8',
        title: '台北 101 觀景台',
        titleEn: 'Taipei 101 Observatory',
        type: 'attraction',
        duration: '1.5小時',
        image: '🏢',
        description: '曾經的世界最高樓。搭乘超高速電梯 37 秒直達雲端，觀賞重達 660 噸的世界最大阻尼球。89 樓全景視角，讓您將整個台北盆地盡收眼底。',
        descriptionEn: 'The former world\'s tallest building. 37-second elevators to the 89F panoramic views and a massive damper sphere.',
        price: 600,
        address: '台北市信義路五段7號',
        rating: 4.8,
        lat: 25.0337,
        lng: 121.5648,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '10:00-21:00',
        tags: ['地標', '必訪', '夜景'],
        themeColor: '#3a7aaa',
        teaser: '登上雲端俯瞰台北，見證工程奇蹟。',
        teaserEn: 'Climb above the clouds and witness an engineering marvel.',
        coverImage: 'https://plus.unsplash.com/premium_photo-1661964181196-0fa3fac9647a?q=80&w=1332&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '垂直旅行',
                labelEn: 'Vertical Trip',
                summary: '秒速 1014 公尺的脈動',
                summaryEn: '1,014m per minute',
                story: '這是全球最快的電梯之一。我的建議：進入電梯後別只顧著錄影，閉上眼感受那輕微的耳鳴與壓力的變化。當門打開，那一瞬間的台北全景會因為你的「盲測」而變得更加震撼。',
                storyEn: 'One of the world\'s fastest elevators. My advice: Close your eyes and feel the G-force and ear pressure change. When the doors open, the Taipei panorama will hit you much harder after the sensory deprivation.',
                url: 'https://stage.taipei-101.com.tw/ticket',
                urlLabel: '立即預約官方門票'
            },
            {
                id: 'must-eat',
                label: '鼎泰豐小籠包',
                labelEn: 'Din Tai Fung',
                summary: '18 摺的工業奇蹟',
                summaryEn: '18-fold miracle',
                story: '就在 101 B1。大家都知道要排隊，但我的內行撇步是：先去取號碼牌，然後上去逛 101 或去 4 樓買精品，等到號碼快到時再回來。別在那裡傻站著浪費你寶貴的旅遊時間。',
                storyEn: 'Located at B1. Everyone knows the queue is long. Insider tip: Get your number first, then go browse the mall or head to the 4F luxury floor. Don\'t waste your travel time standing in a hungry huddle.'
            },
            {
                id: 'hidden',
                label: '巷弄攝影位',
                labelEn: 'Secret Photo Alley',
                summary: '市景與摩天的對比',
                summaryEn: 'Urban Contrast',
                story: '別只在門口自拍，那樣很像觀光客。導航到「松仁路 253 巷」。在那條平凡的巷弄中間，你會看到 101 巨大地聳立在傳統公寓之間。那是「老台北與新世界」交錯的最強構圖。',
                storyEn: 'Don\'t take selfies at the base; it looks generic. Navigate to "Lane 253, Songren Rd." Looking through that humble alley, 101 towers over old apartments—the ultimate "Old vs. New" Taipei shot.'
            },
            {
                id: 'trap',
                label: '觀景台雲霧',
                labelEn: 'Mist Trap',
                summary: '白茫茫的 600 元',
                summaryEn: 'The White-out',
                story: '如果今天是陰雨天，千萬別上去觀景台。你會花 600 元台幣買票，然後上去看滿屋子的白霧。我的雷區標準：如果在平地看不到 101 的塔尖，那就果斷放棄觀景台，改去樓下的超市採買更有意義。',
                storyEn: 'If it\'s rainy or foggy, stay floor-side. You\'ll pay $20 USD just to see white mist. My rule: If you can\'t see the spire from the ground, skip the observatory and spend that money on the gourmet supermarket at B1.'
            }
        ],
        insiderTip: {
            teaser: '16:30 入場看夕陽，結束後散步去「竹村居酒屋」拍巷弄照。',
            teaserEn: 'Arrive at 4:30 PM for sunset, then walk to Takemura Alley for the iconic photo.',
            full: {
                story: '四點半直達觀景台看落日。結束後步行約 10 分鐘到松仁路 253 巷，在居酒屋紅燈籠下與 101 合照，那才是最有台北味的畫面。',
                storyEn: 'Observatory at 4:30 PM for the sun. Then a 10-min walk to Lane 253, Songren Rd for the perfect Taipei composition.',
                bestTime: '16:30 (Observatory) / 19:30 (Alley)'
            }
        }
    },
    {
        id: 'tw-t-a9',
        title: '饒河街觀光夜市',
        titleEn: 'Raohe Night Market',
        type: 'attraction',
        duration: '1.5小時',
        image: '🌙',
        description: '台北最具生活感的夜市。著名的胡椒餅、藥燉排骨與米其林必比登推薦名攤雲集。大牌樓下煙火繚繞，這是台北夜晚最熱騰騰、也最放鬆的時刻。',
        descriptionEn: 'A market with life and soul. Home to Michelin-recommended pepper buns and herbal ribs. A steaming end to your night.',
        price: 0,
        address: '台北市松山區饒河街',
        rating: 4.8,
        lat: 25.0505,
        lng: 121.5775,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '17:00-24:00',
        tags: ['夜市', '必比登', '美食'],
        themeColor: '#7d2222',
        teaser: '燈火通明的台北深夜，米其林級的在地美味。',
        teaserEn: 'A lit Taipei night with Michelin-level local flavors.',
        coverImage: 'https://images.unsplash.com/photo-1593359946320-bb3b05e13259?q=80&w=1170&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '胡椒餅儀式',
                labelEn: 'Bun Ritual',
                summary: '剛出爐的脆皮感',
                summaryEn: 'Fresh baked crust',
                story: '饒河街入口的胡椒餅是必跳的圓舞曲。看著老闆把餅貼在爐壁上，那種熱騰騰、咬開後噴汁的香甜，就是台北夜晚的味道。',
                storyEn: 'The pepper buns at the entrance are a must. Watching them stick to the oven walls and then biting into the juicy meat is the taste of Taipei night.'
            },
            {
                id: 'must-eat',
                label: '藥燉補給',
                labelEn: 'Herbal Ribs',
                summary: '米其林的平價美味',
                summaryEn: 'Pocket Michelin',
                story: '陳董藥燉排骨是米其林必比登的常客。湯頭清甜不苦，排骨肉質鮮嫩。即便在夏天，坐在路邊喝一碗熱湯也是一種享受。',
                storyEn: 'Chen Dong\'s herbal ribs is a Bib Gourmand regular. The soup is sweet, not bitter. Even in summer, it\'s a quintessential Taipei snack.'
            },
            {
                id: 'trap',
                label: '人流陷阱',
                labelEn: 'Crowd Flow',
                summary: '靠右走的隱形成規',
                summaryEn: 'Walk to the right',
                story: '饒河街是一個長條狀的夜市。人潮通常是非常擁擠且「靠右行駛」的。不要突然停在路中間拍照，會被後方的人潮「推進」，請找空檔靠邊。',
                storyEn: 'Raohe is a long, narrow market. There\'s an unwritten "walk right" rule. Don\'t stop in the middle for photos; move to the side first.'
            },
            {
                id: 'hidden',
                label: '彩虹橋散策',
                labelEn: 'Rainbow Bridge',
                summary: '吃飽後的河岸漫步',
                summaryEn: 'Riverside stroll',
                story: '吃完夜市，記得從旁邊的小巷穿出去，就會看到彩虹橋。這裡的夜晚非常安靜，跟火熱的夜市形成對比，是台北最浪漫的收尾。',
                storyEn: 'After the market, duck through a side alley to the Rainbow Bridge. The contrast between the quiet river and the rowdy market is lovely.'
            }
        ],
        insiderTip: {
            teaser: '胡椒餅人再多也要排，甘蔗汁是絕配。',
            teaserEn: 'The pepper bun line is worth it; pair it with sugarcane juice.',
            full: {
                story: '門口的胡椒餅是靈魂。排隊時買杯甘蔗汁，看著老闆壓榨甘蔗，那個節奏就是饒河街的節味。',
                storyEn: 'Pepper buns are the soul here. Watch the sugarcane pressing ritual while you wait in line.',
                mustTry: '福州世祖胡椒餅 + 陳董藥燉排骨',
                bestTime: '21:00'
            }
        }
    },
    {
        id: 'tw-t-h1',
        title: '大稻埕旗艦設計旅店',
        titleEn: 'Dadaocheng Design Hotel',
        type: 'hotel',
        duration: '住宿',
        image: '🏨',
        description: '融合了大稻埕傳統紅磚與現代設計語彙，這層老宅改建的旅店正對著碼頭。清晨被河岸晨光喚醒，是老派台北最浪漫的住宿體驗。',
        descriptionEn: 'Blending traditional red bricks with modern design, this heritage building faces the wharf. Waking up to the riverside morning light is the most romantic old-school Taipei stay.',
        price: 3200,
        address: '台北市大同區民樂街',
        rating: 4.9,
        lat: 25.0562,
        lng: 121.5102,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['設計旅店', '老宅改連', '碼頭景觀'],
        themeColor: '#7d3a22',
        teaser: '在百年老宅中，與大稻埕的夕陽同眠。',
        teaserEn: 'Sleep with the Dadaocheng sunset in a century-old heritage house.',
        coverImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
        insiderTip: {
            teaser: '頂樓露台是看夕陽的私人秘境。',
            teaserEn: 'The rooftop terrace is a private sunset viewing spot.',
            full: {
                story: '雖然是老建築改建，但隔音與舒適度都是頂級。頂樓露台不對外開放，只有房客能在那裡安靜喝杯茶，俯瞰大稻埕。',
                storyEn: 'Despite being a heritage house, the soundproofing and comfort are top-tier. The rooftop terrace is exclusive to guests, perfect for a quiet tea session.',
                mustTry: '頂樓露台的夕陽時光',
                bestTime: '17:30'
            }
        }
    },
    {
        id: 'tw-t-n1',
        title: '中山陸橋 (千禧曼波)',
        titleEn: 'Millennium Mambo Overpass',
        type: 'attraction',
        duration: '30分',
        image: '🎞️',
        description: '這不是一座普通的陸橋，這是台北最迷幻的電影場景。侯孝賢導演《千禧曼波》中舒淇走過的那條藍色隧道。隨著腳步在長廊移動，那種永恆的、寂寞的都市感完全包裹著你。',
        descriptionEn: 'Not just an overpass, but a cinematic masterpiece. The blue tunnel from Hou Hsiao-hsien\'s "Millennium Mambo." A walk through neon loneliness.',
        price: 0,
        address: '基隆中山陸橋 (基隆火車站旁)',
        rating: 4.9,
        lat: 25.1312,
        lng: 121.7388,
        region: 'taipei',
        authorId: 'c-tw-night',
        tags: ['電影場景', '廢墟美學', '攝影控'],
        themeColor: '#1e3a8a',
        teaser: '走進侯孝賢的長鏡頭，台北最寂寞的藍色隧道。',
        teaserEn: 'Step into a cinematic long take; the loneliest blue tunnel.',
        coverImage: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=800',
        marketingTitle: '侯孝賢長鏡頭下的藍色虛幻隧道',
        marketingTitleEn: 'Cinematic Blue Illusion Tunnel',
        expertStories: [
            {
                id: 'must-do',
                label: '攝影建議',
                labelEn: 'Photo Tip',
                summary: '使用廣角鏡頭與慢快門',
                summaryEn: 'Wide Angle & Slow Shutter',
                story: '夜晚的日光燈會在走廊形成非常有層次的藍色與綠色影調。建議在沒人的深夜造訪，能拍出電影中的疏離感。',
                storyEn: 'The night fluorescence creates layered blue and green tones. Visit late at night when empty to capture that iconic cinematic isolation.'
            },
            {
                id: 'must-eat',
                label: '下橋美食',
                labelEn: 'After Walk',
                summary: '廟口營養三明治',
                summaryEn: 'Nutritious Sandwich',
                story: '拍完照走出陸橋，步行 10 分鐘內可達基隆廟口。深夜的一份營養三明治，是給這段迷幻行程最實在的收尾。',
                storyEn: 'A 10-minute walk takes you to Keelung Miaokou. A midnight sandwich is the most grounded end to this psychedelic walk.'
            },
            {
                id: 'trap',
                label: '避雷提醒',
                labelEn: 'The Trap',
                summary: '避開暴雨侵襲的日子',
                summaryEn: 'Avoid Heavy Rain',
                story: '雖然微雨有美感，但大兩時地板非常濕滑且陸橋會漏水。過強的倒影會稀釋電影感，建議在陰天或小雨時造訪最佳。',
                storyEn: 'Rain adds vibe, but heavy downpours make it slippery and leaky. Strong reflections dilute the cinematic feel; overcast is best.'
            },
            {
                id: 'hidden',
                label: '隱藏視角',
                labelEn: 'Hidden View',
                summary: '復古窗格的框架構圖',
                summaryEn: 'Retro Window Framing',
                story: '陸橋兩側保留了一些舊式的鐵窗格，透過窗格向外拍攝基隆街景，能拍出像是 90 年代港片的復古壓抑感。',
                storyEn: 'The old iron window frames on the sides are perfect for framing Keelung street scenes, creating a 90s HK noir aesthetic.'
            }
        ],
        insiderTip: {
            teaser: '陸橋即將拆除，這是捕捉老台北最後影子的機會。',
            teaserEn: 'This original bridge is a fading icon; catch its traces before it\'s gone.',
            full: {
                story: '雖然基隆稍遠，但對於電影控來說是絕對的聖地。建議深夜造訪，那種寂靜感是台北市區找不到的。',
                storyEn: 'A pilgrimage for cinephiles. The midnight silence here is unmatched by any spot in central Taipei.',
                bestTime: '23:00',
                mustTry: '在長廊盡頭拍下深邃的地景感'
            }
        }
    },
    {
        id: 'tw-t-n2',
        title: '林東芳牛肉麵',
        titleEn: 'Lin Dong Fang Beef Noodle',
        type: 'food',
        duration: '1小時',
        image: '🍜',
        description: '台北深夜的靈魂救贖。無論你是剛加班結束，還是從吧台微醺走出來，那一碗藥膳湯頭的牛肉麵永遠在那裡等你。特別是那特製的辣牛油，是讓整碗麵升天的關鍵。',
        descriptionEn: 'The ultimate midnight comfort. Whether after work or a bar night, this herbal beef soup is your soul\'s rescue.',
        price: 280,
        address: '台北市安東街4-3號',
        rating: 4.7,
        lat: 25.0468,
        lng: 121.5422,
        region: 'taipei',
        authorId: 'c-tw-night',
        tags: ['老字號', '深夜食堂', '米其林推薦'],
        themeColor: '#7d5a2d',
        teaser: '台北深夜最溫塊的救贖，別忘了那瓢靈魂辣牛油。',
        teaserEn: 'Midnight healing in a bowl. Don\'t forget the soul-stirring spicy beef butter.',
        coverImage: 'https://images.unsplash.com/photo-1657457320630-3f3e25814b06?q=80&w=1740&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-eat',
                label: '老饕吃法',
                labelEn: 'Pro Way',
                summary: '先喝原味，再加辣牛油',
                summaryEn: 'Original First, Then Spicy Butter',
                story: '先喝一口清甜的藥膳原汁。喝到一半，加入一小碟辣牛油，整碗湯會瞬間轉變為濃郁、辛香的新次元。',
                storyEn: 'Savor the original herbal broth first. Halfway through, melt in the spicy beef butter to elevate it to a rich, spicy new dimension.'
            },
            {
                id: 'must-do',
                label: '視覺享受',
                labelEn: 'The View',
                summary: '坐在麵盤台前的熱氣',
                summaryEn: 'Noodle Counter Seating',
                story: '如果可能，坐在可以看到大鍋熬湯的吧台位。看著職人俐落的舀湯動作與騰騰蒸氣，那一刻牛肉麵不只是食物，而是一場表演。',
                storyEn: 'If possible, sit at the counter facing the large soup pots. Watching the master ladle the broth amid steam is a performance in itself.'
            },
            {
                id: 'trap',
                label: '點餐雷區',
                labelEn: 'Order Tip',
                summary: '不要單點大碗份量',
                summaryEn: 'Avoid Large Portion',
                story: '這裡的小碗份量已經很大。大碗因為溫降快，後半段湯頭的藥膳香氣會因冷卻而略微渾濁，小碗分次吃才是老饕做法。',
                storyEn: 'Small is large enough. Large bowls cool too fast, losing the herbal clarity halfway through. Small stays hot and aromatic.'
            },
            {
                id: 'hidden',
                label: '隱藏紅利',
                labelEn: 'Free Refill',
                summary: '原汁湯頭免費續湯一次',
                summaryEn: 'One Free Soup Refill',
                story: '很多人不知道這裡可以免費續湯一次。建議在喝剩三分之一時要求加湯，讓熱氣騰騰的藥膳精華再次喚醒味蕾。',
                storyEn: 'Few know you can get one free soup refill. Ask when 1/3 is left to revive the heat and the herbal intensity.'
            }
        ],
        insiderTip: {
            teaser: '雖然 10 點後不排隊，但建議 2 點後造訪最有意境。',
            teaserEn: 'Lines vanish after 10 PM, but 2 AM offers the best atmosphere.',
            full: {
                story: '牛肉麵一碗不便宜，但那個牛肉厚度與湯頭深度絕對值得。花乾麵也是另一個隱藏王牌。',
                storyEn: 'It\'s not cheap, but the tender beef and deep broth are worth every penny. The dry noodles are also a hidden gem.',
                bestTime: '01:30',
                mustTry: '半筋半肉麵 + 靈魂辣牛油'
            }
        }
    },
    {
        id: 'tw-t-n3',
        title: '菱玖洋服 Le Kief',
        titleEn: 'Le Kief Speakeasy',
        type: 'food',
        duration: '2小時',
        image: '🍸',
        description: '表面是一家優雅的訂製西裝店，但推開試衣間的鏡子，你會進入一個充滿 20 年代爵士氛圍的秘密酒吧。這裡是台北 Speakeasy Bar 的巔峰之作，調酒與環境都極具戲劇感。',
        descriptionEn: 'A bespoke tailor shop on the outside, a 1920s jazz bar behind the mirrors. The pinnacle of Taipei\'s speakeasy scene.',
        price: 800,
        address: '台北市光復南路308巷36號',
        rating: 4.9,
        lat: 25.0388,
        lng: 121.5582,
        region: 'taipei',
        authorId: 'c-tw-night',
        tags: ['隱藏酒吧', '西裝店', '極致調酒'],
        themeColor: '#1a1a1a',
        teaser: '推開西裝店的神祕大門，進入大亨小傳的深夜聚會。',
        teaserEn: 'Step behind the tailor shop into a Great Gatsby-esque midnight gathering.',
        coverImage: 'https://images.unsplash.com/photo-1542666910-07c167428567?q=80&w=1714&auto=format&fit=crop&q=80&w=800',
        marketingTitle: '西裝店後的祕密解憂爵士酒吧',
        marketingTitleEn: 'The Secret Jazz Speakeasy behind a Tailor Shop',
        expertStories: [
            {
                id: 'hidden',
                label: '開門密語',
                labelEn: 'The Entry',
                summary: '拿起舊電話撥打暗號',
                summaryEn: 'Dial the Secret Number',
                story: '在西裝店內的復古電話機撥打特定的數字（通常是 09），那扇隱藏的鏡門才會為你開啟。',
                storyEn: 'Pick up the vintage phone inside the shop and dial the secret code (usually 09) to unlock the hidden mirror door.'
            },
            {
                id: 'must-do',
                label: '品飲交流',
                labelEn: 'Expert Talk',
                summary: '與調酒師交流台灣風味',
                summaryEn: 'Talk Taiwan Flavors',
                story: '這裡的調酒師非常擅長將台灣在地食材（如炭焙烏龍、刺蔥）融入調酒。主動詢問當季的實驗系列，能喝到菜單外的驚喜。',
                storyEn: 'The bartenders excel at using local Taiwan ingredients like Oolong tea or prickly ash. Ask for seasonal experiments off the menu.'
            },
            {
                id: 'must-eat',
                label: '深夜配餐',
                labelEn: 'Midnight Snack',
                summary: '極致香脆的松露薯條',
                summaryEn: 'Truffle Fries Perfection',
                story: '別只顧著喝酒。這裡的松露薯條雖然是基本款，但火候精準，香氣撲鼻，是台北深夜酒吧裡公認的高水準配餐。',
                storyEn: 'Don\'t just drink. Their truffle fries are legendary—perfectly crispy and aromatic, a staple of Taipei\'s late-night bar scene.'
            },
            {
                id: 'trap',
                label: '造訪時機',
                labelEn: 'Best Timing',
                summary: '避開晚間九點前的尖峰',
                summaryEn: 'Avoid the 9 PM Peak',
                story: '九點前多是用餐後的商務活動，環境較為噪雜。推薦在午夜 00:00 後造訪，燈光與爵士音樂的氛圍最完美。',
                storyEn: 'Before 9 PM it\'s often crowded with business post-dinner crowds. Visit after midnight for the best lighting and jazz vibe.'
            }
        ],
        insiderTip: {
            teaser: '強烈建議提前一週訂位，週末現場幾乎不可能有位。',
            teaserEn: 'Book a week ahead; weekend walk-ins are nearly impossible.',
            full: {
                story: '這裡的調酒風味非常精準且帶有層次。如果你是第一次來，點一杯經典的 Old Fashioned 就能感受到他們的基石實力。',
                storyEn: 'The cocktails are precise and layered. Try their Old Fashioned to appreciate their foundational excellence.',
                bestTime: '22:00',
                mustTry: '創意特調系列'
            }
        }
    },
    {
        id: 'tw-t-n4',
        title: '誠品生活南西 (深夜書店)',
        titleEn: 'Eslite Spectrum Nanxi',
        type: 'attraction',
        duration: '1.5小時',
        image: '📚',
        description: '在台北，睡不著的人會去誠品。南西店所在的中山區，深夜散發著一種獨特的文化氣息。在柔軟的黃光與書卷香中，你可以與這座城市最安靜的一刻共處。',
        descriptionEn: 'In Taipei, the restless head to Eslite. The Nanxi store offers a unique cultural breath under soft lights and the scent of paper.',
        price: 0,
        address: '台北市南京西路14號',
        rating: 4.8,
        lat: 25.0522,
        lng: 121.5212,
        region: 'taipei',
        authorId: 'c-tw-night',
        tags: ['書店文化', '24小時', '文青聖地'],
        themeColor: '#3a5a40',
        teaser: '城市不睡，我們在字裡行間與靈魂對視。',
        teaserEn: 'The city sleeps not; we meet our souls between the lines.',
        coverImage: 'https://images.unsplash.com/photo-1589200348508-adf9bb6e0828?q=80&w=1740&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '深夜氛圍',
                labelEn: 'Midnight Vibe',
                summary: '坐在階梯上閱讀的自由',
                summaryEn: 'Freedom to Read on Stairs',
                story: '凌晨一點的誠品，沒有白天的吵雜與商業感。你可以看到正在創作的藝術家、尋找靈感的作家，這就是台北最動人的文化切面。',
                storyEn: 'At 1 AM, the commercial noise fades. You\'ll see artists and writers seeking inspiration—the most moving face of Taipei culture.'
            },
            {
                id: 'must-eat',
                label: '深夜微醺',
                labelEn: 'Midnight Sip',
                summary: '書區旁的深夜咖啡廳',
                summaryEn: 'Late Night Café',
                story: '書店部分樓層供應熱紅酒與手沖咖啡。在文字的圍繞下小酌，這種從腦袋延伸到胃部的暖意，是台北深夜最優雅的享受。',
                storyEn: 'Select floors serve mulled wine and hand-brew coffee. Drinking amid books is Taipei\'s most elegant midnight treat.'
            },
            {
                id: 'trap',
                label: '造訪提醒',
                labelEn: 'Visit Tip',
                summary: '避開週末深夜的人潮',
                summaryEn: 'Avoid Weekend Nights',
                story: '誠品南西週末深夜人潮依然眾多，平日凌晨才是真正能享受空間寂靜感的時刻。如果是假日，建議於凌晨三點後前往。',
                storyEn: 'Weekends remain busy. For true silence, visit on weekday midnights or after 3 AM on holidays.'
            },
            {
                id: 'hidden',
                label: '極密座位',
                labelEn: 'Secret Seat',
                summary: '雜誌區末端的單人沙發',
                summaryEn: 'Hidden Single Sofas',
                story: '雜誌區最後一排有幾張不起眼的單人沙發。那是老讀者才知道的隱藏位置，視野極佳且相對隱密，是思考人生最好的基地。',
                storyEn: 'The hidden single sofas at the end of the magazine section are a local secret—best lighting and relative privacy for reflection.'
            }
        ],
        insiderTip: {
            teaser: '五樓的書店區域是這棟建築的靈魂。',
            teaserEn: 'The 5F bookstore is the soul of this architecture.',
            full: {
                story: '雖然百貨區域會關門，但書店通常會有較晚的運作時間或特定樓層開放。這是思考人生或單純發呆最好的避風港。',
                storyEn: 'While the mall sections close, the bookstore keeps the flame alive. The best sanctuary for late-night reflection.',
                bestTime: '00:30',
                mustTry: '在雜誌區發掘最新設計思潮'
            }
        }
    },
    {
        id: 'tw-t-n5',
        title: '復興南路永和豆漿大王',
        titleEn: 'Fuxing S. Rd Soy Milk',
        type: 'food',
        duration: '45分',
        image: '🥟',
        description: '這是台北深夜與清晨的交界處。這裡沒有排隊的外國觀光客，只有剛狂歡完的年輕人、計程車司機與正要早起的大叔。這裡的燒餅與蛋餅，吃的是一種活著的節奏。',
        descriptionEn: 'The junction of night and dawn. No tourist lines here—just party-goers, taxi drivers, and early birds sharing a rhythm.',
        price: 100,
        address: '台北市大安區復興南路二段102號',
        rating: 4.5,
        lat: 25.0288,
        lng: 121.5432,
        region: 'taipei',
        authorId: 'c-tw-night',
        tags: ['在地人', '日出早餐', '老牌豆漿'],
        themeColor: '#b45309',
        teaser: '清晨四點的豆漿，是瘋狂夜晚與正常世界的緩衝區。',
        teaserEn: '4 AM soy milk: your buffer between a wild night and the normal world.',
        coverImage: 'https://images.unsplash.com/photo-1555465083-a845797ef750?q=80&w=928&auto=format&fit=crop&q=80&w=800',
        marketingTitle: '台北計程車司機的深夜救贖聖地',
        marketingTitleEn: 'Morning Sanctuary for Midnight Cabbies',
        expertStories: [
            {
                id: 'must-eat',
                label: '生存標配',
                labelEn: 'Survival Combo',
                summary: '冰豆漿配起司蛋餅',
                summaryEn: 'Cold Soy Milk & Cheese Omelet',
                story: '在寒冷的清晨或是宿醉後，一份熱騰騰的起司蛋餅與冰涼的豆漿，能讓你瞬間找回對生活的掌控感。',
                storyEn: 'In the chilly dawn or after a long night, a hot cheese danbing and cold soy milk help you regain control of life.'
            },
            {
                id: 'must-do',
                label: '眾生百態',
                labelEn: 'The Vibe',
                summary: '觀察台北清晨交接點',
                summaryEn: 'Dawn Intersection Life',
                story: '這裡是觀察台北社會張力最好的地點。一邊是剛從酒吧出來的華服年輕人，一邊是準備上工的勞動者，兩組人馬共用同一張油亮桌面的情景非常有意思。',
                storyEn: 'Watch the crossover: party kids in finery sharing tables with sunrise workers. A fascinating intersection of social classes in a greasy-spoon setting.'
            },
            {
                id: 'trap',
                label: '避雷提醒',
                labelEn: 'The Trap',
                summary: '避開皮厚的小籠包',
                summaryEn: 'Avoid the XiaoLongBao',
                story: '雖然名字叫大王，但小籠包並非這裡的強項，皮較厚硬。推薦專攻蛋餅、燒餅與飯糰類，那才是維持這裡聲譽的基石。',
                storyEn: 'Don\'t go for the soup dumplings (Xiaolongbao); the skin is too thick. Stick to Danbing, Shao-bing, and rice rolls—the true masters here.'
            },
            {
                id: 'hidden',
                label: '客製加分',
                labelEn: 'Custom Hack',
                summary: '鹹豆漿的究極加強版',
                summaryEn: 'Supreme Savory Soy Milk',
                story: '點鹹豆漿時，要求阿姨多加一點辣油和乾蘿蔔碎。這多出來的一層辛香與爽脆，能讓這份古早味早餐瞬間顯得更具現代爆發力。',
                storyEn: 'Ask the auntie for extra chili oil and dried radish in your savory soy milk for an extra layer of crunch and kick.'
            }
        ],
        insiderTip: {
            teaser: '看到計程車在路邊停一排，你就知道這家最好吃。',
            teaserEn: 'A row of taxis outside is the ultimate mark of quality.',
            full: {
                story: '這裡的點餐速度快到像是一場表演。不要猶豫，想吃什麼直接開口，阿姨們的記憶力好到會讓你驚訝。',
                storyEn: 'Ordering here is high-speed performance. Don\'t hesitate; the "Aunties" have incredible memories for orders.',
                bestTime: '04:00',
                mustTry: '鹹豆漿加蛋 + 剛炸好的油條'
            }
        }
    },
    {
        id: 'tw-t-n6',
        title: '寧夏夜市 (深夜美食版)',
        titleEn: 'Ningxia Night Market (Midnight)',
        type: 'food',
        duration: '1.5小時',
        image: '🏮',
        description: '台北老味道最密集的夜市。這裡沒有過多的遊戲攤位，卻有最硬核的美食。從米其林推薦的芋丸到傳承三代的蚵仔煎，這裡是真正的「台北胃囊」。',
        descriptionEn: 'The densest collection of old Taipei flavors. No games, just hardcore food. The "Stomach of Taipei."',
        price: 400,
        address: '台北市大同區寧夏路',
        rating: 4.8,
        michelinRating: 'bib-gourmand',
        michelinYears: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
        lat: 25.0568,
        lng: 121.5152,
        region: 'taipei',
        authorId: 'c-tw-night',
        tags: ['頂級夜市', '在地老饕', '米其林推薦'],
        themeColor: '#dc2626',
        teaser: '台北夜市的米其林殿堂，老饕不說的口袋名單。',
        teaserEn: 'The Michelin hall of night markets; a foodie\'s best-kept secret.',
        coverImage: 'https://images.unsplash.com/photo-1698563874316-c53d7493c04c?q=80&w=1740&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-eat',
                label: '必拍名店',
                labelEn: 'Must Eat',
                summary: '劉芋仔的蛋黃芋餅',
                summaryEn: 'Liu\'s Taro Balls',
                story: '雖然永遠在排隊，但那種現包現炸、外酥內綿的口感，是值得你花 20 分鐘等待的究極甜點。',
                storyEn: 'Always a line, but these freshly fried, crispy-yet-soft taro balls are worth every of the 20 minutes you wait.'
            },
            {
                id: 'must-do',
                label: '鑊氣體驗',
                labelEn: 'The Vibe',
                summary: '體驗熱炒攤的社會節奏',
                summaryEn: 'Stir-fry Stall Rhythm',
                story: '找一間熱炒攤，體驗台北歐巴桑的俐落服務。大火熱油與此起彼落的點餐聲，這就是夜市生命力的核心。',
                storyEn: 'Find a stir-fry stall and witness the legendary speed of Taipei aunties. The smell of high-heat cooking and rowdy orders is the market\'s heartbeat.'
            },
            {
                id: 'trap',
                label: '避雷路徑',
                labelEn: 'Path Trap',
                summary: '避開門口大排長龍的攤位',
                summaryEn: 'Skip the Entrance Lines',
                story: '入口幾攤往往排隊最長但未必最好。建議直接殺往夜市中段，那裡常有隱藏名店且等待時間縮短。',
                storyEn: 'Entrance stalls are tourists magnets. High-density gems are in the middle section—shorter waits, better food.'
            },
            {
                id: 'hidden',
                label: '收攤殘影',
                labelEn: 'Midnight Scene',
                summary: '收攤時段的攝影美學',
                summaryEn: 'Closing Time Aesthetics',
                story: '夜市尾端的攤位收攤較晚。凌晨時分看著攤商收合器具與水車沖洗馬路，那種喧囂後的純淨，能拍出極具故事感的紀實照。',
                storyEn: 'Visit the tail end of the market after midnight. Watching vendors clean up while street sprayers wash the night away makes for stunning documentary photography.'
            }
        ],
        insiderTip: {
            teaser: '22:30 後造訪，人潮稍退，這時才是吃美食的黃金時間。',
            teaserEn: 'Visit after 10:30 PM; fewer crowds, better dining flow.',
            full: {
                story: '寧夏夜市雖然不長，但每一攤幾乎都沒有雷。推薦點一份「豬肝榮」的豬肝湯，那種脆口度會翻轉你對豬肝的認知。',
                storyEn: 'Short street, but zero misses. Try the pork liver soup at "Pig Liver Rong"—it\'ll redefine how you feel about the dish.',
                bestTime: '22:30',
                mustTry: '圓環邊蚵仔煎 + 豬肝湯'
            }
        }
    },
    {
        id: 'tw-t-f7',
        title: '真芳碳烤吐司',
        titleEn: 'Zhen Fang Toast',
        type: 'food',
        duration: '45分鐘',
        image: '🥪',
        description: '台北最具代表性的「台式早餐店」進化版。堅持炭火現烤，肉蛋吐司與古早味粉漿蛋餅是經典。這裡不只是填飽肚子，更是體驗台北早晨節奏的最佳起點。',
        descriptionEn: 'The evolution of a classic Taipei breakfast joint. Charcoal-grilled sandwiches and traditional batter pancakes.',
        price: 150,
        address: '台北市信義區忠孝東路四段559巷16號',
        rating: 4.7,
        lat: 25.0425,
        lng: 121.5645,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['早餐', '炭烤吐司', '在地'],
        themeColor: '#eab308',
        teaser: '台北早晨的香氣，從炭火吐司開始。',
        teaserEn: 'The aroma of Taipei morning begins with charcoal toast.',
        coverImage: 'https://plus.unsplash.com/premium_photo-1740247383851-8380f7d385de?q=80&w=1742&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-eat',
                label: '肉蛋吐司',
                labelEn: 'Meat & Egg',
                summary: '炭火出的焦香靈魂',
                summaryEn: 'Charcoal-fired soul',
                story: '這是真芳的鎮店之寶。手打肉排不是隨便說說，那種扎實感配上微焦的炭火吐司，才是真正的老台北厚實早餐。別被它簡單的外表騙了，那種美乃滋的黃金比例是別處學不來的。',
                storyEn: 'The flagship. Hand-made pork patties meet perfectly charred toast. It looks simple, but that secret mayo-to-charcoal ratio is a Taipei morning legend.'
            },
            {
                id: 'hidden',
                label: '粉漿蛋餅',
                labelEn: 'Batter Pancake',
                summary: '老派的正宗Q彈',
                summaryEn: 'Old-school chew',
                story: '如果你習慣了超市那種薄脆蛋餅，真芳會顛覆你。這裡堅持古早味粉漿，口感極其Q彈且帶有飽足感。記得，一定要沾他們的甜辣醬，那才是老派靈魂。',
                storyEn: 'Forget crispy thin wraps; this is the chewy, thick batter of old Taipei. Pair it with the sweet chili sauce for the authentic nostalgia trip.'
            },
            {
                id: 'must-do',
                label: '真芳紅茶牛奶',
                labelEn: 'Black Tea Milk',
                summary: '南部混血的絕佳比例',
                summaryEn: 'The Southern Blend',
                story: '比起咖啡，我更推薦這杯。選用南部老牌紅茶茶葉，茶氣十足，加入小農鮮乳後依然能喝到茶香。這是極少數我願意在早餐店買第二次的奶茶。',
                storyEn: 'Superior to their coffee. It uses a strong southern legacy tea that doesn\'t get drowned out by the farm milk. A rare 5-star breakfast milk tea.'
            },
            {
                id: 'trap',
                label: '售罄陷阱',
                labelEn: 'Sold Out Trap',
                summary: '睡過頭就別來了',
                summaryEn: 'The early bird rule',
                story: '真芳不是那種可以讓你睡到十點再晃過來的店。尤其是週末，十點後熱門款通常已售罄。如果你想吃得優雅，九點前是最後底線，否則你只能在路邊看著賣完的牌子發愁。',
                storyEn: 'Zhen Fang won\'t wait for late risers. Popular items often sell out by 10 AM. Arrive by 9 AM or risk staring at a "Sold Out" sign while hungry.'
            }
        ]
    },
    {
        id: 'tw-t-f8',
        title: '永康牛肉麵',
        titleEn: 'Yong Kang Beef Noodle',
        type: 'food',
        duration: '1小時',
        image: '🍜',
        description: '創立於1963年，台北最具傳奇色彩的牛肉麵店之一。濃郁的紅燒湯頭與大塊軟嫩的牛肉，讓這間小店成為無數旅人下機後的首選名單。',
        descriptionEn: 'Legendary beef noodles since 1963. Rich broth and melt-in-your-mouth beef—a Taipei institution.',
        price: 300,
        address: '台北市大安區金山南路二段31巷17號',
        rating: 4.6,
        michelinRating: 'bib-gourmand',
        michelinYears: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
        lat: 25.0321,
        lng: 121.5284,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['經典', '牛肉麵', '必訪'],
        themeColor: '#92400e',
        teaser: '台北靈魂的滋味，一碗濃縮半世紀的精華。',
        teaserEn: 'The taste of Taipei\'s soul, concentrated in a half-century-old recipe.',
        coverImage: 'https://images.unsplash.com/photo-1651330395670-1680a92028bc?q=80&w=1740&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-eat',
                label: '紅燒半筋半肉',
                labelEn: 'Spicy Tendon',
                summary: '膠質與纖維的博弈',
                summaryEn: 'Texture Masterclass',
                story: '別點純肉，半筋半肉才是這間店的「靈魂」。这里的筋燉得接近果凍，肉卻依然保有大口吃肉的爽快感。湯頭後勁帶著豆瓣的辛香，那是半世紀的功力。',
                storyEn: 'Skip the plain meat; half-tendon is the soul here. The tendon is jelly-soft while the beef stays bold. The spicy bean-paste finish is legendary.'
            },
            {
                id: 'hidden',
                label: '粉蒸排骨',
                labelEn: 'Steamed Ribs',
                summary: '隱藏在麵碗後的殺手',
                summaryEn: 'The Hidden Killer',
                story: '說真的，很多人只吃麵。但我心中的「永康三寶」肯定有這籠粉蒸排骨。地瓜墊底吸飽排骨油脂，甜糯與肉香交織，這幾乎是每個在地熟客必點的小點。',
                storyEn: 'Many only eat the noodles, but the steamed ribs on sweet potato are the true local treasure. Sweet, savory, and rich—an absolute must-order.'
            },
            {
                id: 'must-do',
                label: '酸菜靈魂',
                labelEn: 'Pickled Greens',
                summary: '這不是裝飾品',
                summaryEn: 'Not a Garnish',
                story: '桌上的酸菜是整碗麵的「變頻器」。聽我的，先喝三口原湯，再加入一整勺酸菜。你會發現原本濃郁的肉香瞬間被提鮮，層次感直接翻倍。',
                storyEn: 'The pickled greens are the "equalizer." Sip the original broth first, then add a huge scoop. It elevates the richness into a multi-layered feast.'
            },
            {
                id: 'trap',
                label: '排隊熱度',
                labelEn: 'Queue Trap',
                summary: '觀光客的午餐馬拉松',
                summaryEn: 'The Tourist Marathon',
                story: '週末正中午來這裡简直是自討苦吃。排隊 45 分鐘是基本。如果你不想曬太陽，建議下午 16:30 這種尷尬時間來，或是平日提早抵達，用餐體驗會好很多。',
                storyEn: 'Noon on weekends is a nightmare—expect 45+ min waits. Come at 4:30 PM or early on weekdays to save your sanity and your meal.'
            }
        ]
    },
    {
        id: 'tw-t-a10',
        title: '國立故宮博物院',
        titleEn: 'National Palace Museum',
        type: 'attraction',
        duration: '3-4小時',
        image: '🏛️',
        description: '世界四大博物館之一，收藏近 70 萬件中華藝術瑰寶。從翠玉白菜到肉形石，這裡濃縮了數千年的文化精粹，是來到台北絶對不容錯過的文化殿堂。',
        descriptionEn: 'One of the world\'s top museums, housing nearly 700,000 Chinese masterpieces including the Jadeite Cabbage.',
        price: 350,
        address: '台北市士林區至善路二段221號',
        rating: 4.8,
        lat: 25.1023,
        lng: 121.5485,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['文化', '藝術', '歷史'],
        themeColor: '#7c2d12',
        teaser: '跨越千年的文化巡禮，近距離觀察歷史的重量。',
        teaserEn: 'A millennial cultural journey, witnessing the weight of history up close.',
        coverImage: 'https://plus.unsplash.com/premium_photo-1661962818476-adac14ed5d46?q=80&w=1632&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '故宮三寶',
                labelEn: 'The Big Three',
                summary: '與 70 萬件寶藏的博弈',
                summaryEn: 'Outsmarting 700k treasures',
                story: '翠玉白菜與肉形石是絕對的頂流。我的觀點：別跟在大團客後面慢慢擠。一開門就直衝三樓，在人潮湧入前獨佔那顆白菜。如果你看到人超過三排，請果斷轉向隔壁的毛公鼎，它的歷史價值其實更高。',
                storyEn: 'The Jadeite Cabbage is the superstar. Insider tip: Head to 3F the moment doors open. If the queue is 3 rows deep, pivots to the Mao Gong Ding nearby—it’s historically more significant anyway.'
            },
            {
                id: 'hidden',
                label: '至善園散策',
                labelEn: 'Zhishan Garden',
                summary: '躲避人群的宋代時空',
                summaryEn: 'Escape the crowd',
                story: '很多人看完展覽就累得想上車，大錯特錯。憑票根免費進去的至善園，才是消化文化衝擊的最佳地點。在小橋流水間餵餵黑天鵝，你會發現台北的喧囂在這裡瞬間消失。',
                storyEn: 'Most leave after the museum—their loss. Use your ticket for free entry to Zhishan Garden. Feed the black swans among Song-style pavilions to truly decompress after the cultural overload.'
            },
            {
                id: 'must-do',
                label: '朕知道了',
                labelEn: 'Imperial Gifts',
                summary: '被低估的文創靈魂',
                summaryEn: 'Witty Imperial Gifts',
                story: '這裡的禮品店是我見過全世界最有幽默感的博物館商店。別只買明信片，去看那些「朕知道了」的創意周邊。那是把深厚史籍轉化成現代廢萌美學的極致，買回去當伴手禮絕對不會被打槍。',
                storyEn: 'This shop has the best sense of humor. Skip generic postcards; get the "Imperial Edict" (I know) stationery. It’s the perfect blend of high history and modern wit—an elite souvenir.'
            },
            {
                id: 'trap',
                label: '審美疲勞',
                labelEn: 'Fatigue Trap',
                summary: '貪心的懲罰',
                summaryEn: 'Greed is exhaustion',
                story: '故宮每三個月換一次展，你不可能一天看完。我的核心建議：挑選兩個你最有感覺的展區（例如玉器或書畫）深度看，剩下的隨緣。試圖「看完所有樓層」只會讓你後半天都在腳痛與腦袋空白中度過。',
                storyEn: 'With 700k items, seeing it all in one day is impossible. Pick two galleries (e.g., Jade or Calligraphy) for a deep dive. "Seeing it all" only leads to sore feet and a blank mind.'
            }
        ],
        insiderTip: {
            teaser: '09:00 前入場直接衝三樓，可以第一時間獨佔翠玉白菜。',
            teaserEn: 'Arrive at 9 AM and head straight to 3F to see the Cabbage alone.',
            full: {
                story: '故宮很大，一天逛不完。如果時間有限，請依照「3F 陶瓷陶瓷 -> 2F 書畫 -> 1F 珍玩」的順序。',
                storyEn: 'The museum is vast. If limited on time, follow: 3F (Jade/Ceramics) -> 2F -> 1F.',
                bestTime: '09:00'
            }
        }
    },
    {
        id: 'tw-t-a11',
        title: '中正紀念堂',
        titleEn: 'CKS Memorial Hall',
        type: 'attraction',
        duration: '1.5小時',
        image: '🏛️',
        description: '台北最宏偉的地標之一。藍瓦白牆的建築風格象徵著自由與平等。除了參觀莊嚴的大廳，這裡的自由廣場也是大型文化活動與台北市民生活的交會點。',
        descriptionEn: 'A majestic landmark with blue tiles and white walls. The square is a hub for culture and public life.',
        price: 0,
        address: '台北市中正區中山南路21號',
        rating: 4.7,
        lat: 25.0359,
        lng: 121.5197,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['地標', '儀隊', '建築'],
        themeColor: '#1e40af',
        teaser: '正午時分的儀隊交接，感受莊嚴肅穆的守護儀式。',
        teaserEn: 'The midday guard changing ceremony—a display of solemnity and precision.',
        coverImage: 'https://plus.unsplash.com/premium_photo-1693236731045-5148457c0491?q=80&w=774&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '儀隊交接',
                labelEn: 'Guard Change',
                summary: '整點的鋼鐵意志',
                summaryEn: 'Clockwork Steel',
                story: '這絕對是台北最具儀式感的時刻。儀隊在大理石地板上的踏步聲非常震撼。專業建議：提早 10 分鐘站在側邊，你能更近距離看到他們眼神中的堅定。如果你已經看過一次，那就別再執著，去樓下看展更有趣。',
                storyEn: 'The most rhythmic moment in Taipei. The stomps on marble are spine-tingling. Pro tip: Stand near the side 10 mins early for a close-up of their stoic focus. Seen it once? Head downstairs for the history museum.'
            },
            {
                id: 'hidden',
                label: '拱門對比照',
                labelEn: 'The Archways',
                summary: '大器晚成的攝影視角',
                summaryEn: 'The Framing Epic',
                story: '別只拍白牆藍瓦的正面。走到兩側長長的迴廊，用那巨大的拱門作為框架。當你把相機壓低，拱門的透視線會讓中正紀念堂看起來像一座莊嚴的宮殿遺址，氣勢瞬間提升三倍。',
                storyEn: 'Skip the generic front shot. Use the massive corridor arches to frame the main hall. Get low with your camera—the perspective makes it look like a grand, timeless palace ruin.'
            },
            {
                id: 'must-do',
                label: '階梯密碼',
                labelEn: 'The Steps',
                summary: '每一步都是歷史',
                summaryEn: 'Ancient Numerology',
                story: '爬階梯時別忘了數數。89 階象徵著 89 年的人生。這不是體力考驗，而是一場緩慢的朝聖。如果體力不好的人，旁邊其實有隱藏的電梯，別在那裡死撐，把體力留給接下來的自由廣場漫步。',
                storyEn: 'Count the steps—89 in total, representing a lifetime. It\'s a slow pilgrimage on marble. Not feeling it? There\'s a "secret" elevator inside. Save your legs for the stroll across Freedom Square.'
            },
            {
                id: 'trap',
                label: '高溫廣場',
                labelEn: 'Heat Trap',
                summary: '白色大理石的火爐',
                summaryEn: 'The White Oven',
                story: '自由廣場的白色石板會反射 200% 的紫外線。如果你在夏天正午來，這裡就是一個露天烤箱。除非你想在 10 分鐘內曬傷，否則強烈建議下午 16:30 後再來，那時的夕陽餘暉灑在藍瓦上，才是最美的時刻。',
                storyEn: 'Those white stones reflect 200% of UV rays—it’s an outdoor oven at noon. Unless you want a 10-minute sunburn, visit after 4:30 PM. The golden hour glow on the blue tiles is the real prize.'
            }
        ]
    },

    {
        id: 'tw-t-a13',
        title: '士林夜市',
        titleEn: 'Shilin Night Market',
        type: 'attraction',
        duration: '2小時',
        image: '🏮',
        description: '台北規模最大、最國際化的夜市。從地下美食街到巷弄弄裡的隱藏小攤，這裡彙集了台灣所有的經典小吃。即便人潮洶湧，也是每位初抵台北旅人必備的朝聖儀式。',
        descriptionEn: 'The largest and most famous night market in Taipei. An essential pilgrimage for every first-time visitor.',
        price: 0,
        address: '台北市士林區基河路101號',
        rating: 4.5,
        lat: 25.0879,
        lng: 121.5241,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['夜市', '規模最大', '必訪'],
        themeColor: '#c2410c',
        teaser: '燈火輝煌的美食迷宮，挑戰味蕾的極限。',
        teaserEn: 'A neon-lit food labyrinth challenging your taste buds.',
        coverImage: 'https://images.unsplash.com/photo-1513599974100-e724eabafef5?q=80&w=1740&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-eat',
                label: '生炒花枝',
                labelEn: 'Stir-fried Squid',
                summary: '大火淬煉的鑊氣',
                summaryEn: 'The Wok Breath',
                story: '士林的靈魂不在大馬路，在廟口。這碗花枝羹的湯頭酸甜適中，花枝厚度和彈性都是台北巔峰。我的評價：別管那些網紅大雞排了，這碗花枝羹才是你該排隊的地方。',
                storyEn: 'The soul of Shilin isn\'t on the main road; it\'s at the temple area. Thick, snappy squid in a tangy broth. My verdict: Skip the viral big chicken; this is what actually deserves the queue.'
            },
            {
                id: 'hidden',
                label: '廟口涼麵',
                labelEn: 'Temple Noodles',
                summary: '深夜的麻醬救贖',
                summaryEn: 'Midnight Sesame',
                story: '隱藏在慈諴宮旁的涼麵店。它的麻醬濃到化不開，蒜味重得驚人。這是在地人逛完夜市後的「收尾儀式」。如果在路邊看到很多人坐在小板凳上吃麵，別懷疑，坐下來就對了。',
                storyEn: 'Tucked away by Cixian Temple. The sesame sauce is impossibly rich, and the garlic kick is fierce. This is the local "closer" after a night of grazing. If you see locals on low stools, join them.'
            },
            {
                id: 'must-do',
                label: '撈金魚與童玩',
                labelEn: 'Vintage Games',
                summary: '最後的昭和遺風',
                summaryEn: 'Retro Playground',
                story: '士林是少數保留大量傳統遊戲攤的地方。雖然現在有環保爭議，但看著老師傅修補魚網，那種台式復古氛圍非常強。建議去玩一下射飛鏢或彈珠台，那種獎品換來的廉價飲料，是台灣小孩童年的共同味道。',
                storyEn: 'One of the last places with serious vintage game stalls. Try the balloon darts or pinball. The cheap drinks won as prizes are the literal taste of a Taiwanese childhood.'
            },
            {
                id: 'trap',
                label: '水果攤陷阱',
                labelEn: 'Fruit Stall Trap',
                summary: '天價現切的眼淚',
                summaryEn: 'Pricey Sliced Fruit',
                story: '這是最重要的雷區！絕對、絕對不要在夜市路邊買「現切水果盤」。那是專門給觀光客的天價坑，一份可能要好幾百台幣。如果你想吃水果，去便利商店買，或是找有標價的果汁攤比較保險。',
                storyEn: 'CRITICAL WARNING: Never buy pre-sliced fruit from unidentified street stalls. They charge astronomical prices for tourists. Get your fruit from a 7-11 or a juice stand with clear pricing instead.'
            }
        ],
        insiderTip: {
            teaser: '假日建議 18:00 前抵達，否則人潮會讓您寸步難行。',
            teaserEn: 'Arrive before 6 PM on weekends, or you\'ll be swept away by the human tide.',
            full: {
                story: '除了吃的，後段有很多衣服與小物市集。如果想買伴手禮，這裡的競爭激烈，價格通常也很漂亮。',
                storyEn: 'Beyond food, the back alleys host vast markets for clothes and gadgets—great for cheap souvenirs.',
                bestTime: '17:30'
            }
        }
    },
    // --- FLAGSHIP: TAIPEI FAMILY & TECH FAVORITES ---
    {
        id: 'tw-t-fam-dino',
        title: '台博館土銀展示館 (恐龍博物館)',
        titleEn: 'National Taiwan Museum (Land Bank / Dinosaur Hall)',
        type: 'attraction',
        duration: '1.5小時',
        image: '🦖',
        description: '位於台北車站對面，這座古老的銀行建築內隱藏著巨大的恐龍化師。走在巨大的樑柱下，孩子能近距離觀察雷龍與暴龍，還能進入神祕的老金庫探險。',
        descriptionEn: 'Magnificent dinosaurs inside a historic bank building. Explore the heavy vaults and walk under massive dinosaur skeletons—a perfect, affordable start near Taipei Main Station.',
        price: 30,
        address: '台北市中正區襄陽路25號',
        rating: 4.8,
        lat: 25.0428,
        lng: 121.5145,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '09:30 - 17:00 (週一休館)',
        tags: ['親子', '歷史', '恐龍'],
        themeColor: '#D2B48C',
        coverImage: 'https://images.unsplash.com/photo-1560148271-00b5e5850812?q=80&w=1752&auto=format&fit=crop&q=80&w=800',
        teaser: '在老銀行裡與恐龍共舞，這是台北送給孩子的第一份奇蹟。',
        teaserEn: 'Dance with dinosaurs in an old bank—Taipei\'s first gift of wonder for kids.',
        expertStories: [
            {
                id: 'must-do',
                label: '金庫探險',
                labelEn: 'Vault Tour',
                summary: '帶著存摺（導覽手冊）走進金庫',
                summaryEn: 'Enter the vault with your "passbook"',
                story: '在這裡，孩子不只是看恐龍，還能進入古老的土銀金庫。記得領取入館存摺，在原本存放金條的地方蓋章印字，對大孩子來說是一場有趣的金融歷史探險。',
                storyEn: 'Kids can enter the old Land Bank vaults. Grab an entry "passbook" and stamp it where gold bars used to be kept—a fun historical dive for older kids.'
            },
            {
                id: 'must-do',
                label: '與巨獸平視',
                labelEn: 'Eye-to-Eye',
                summary: '走上二樓走廊看雷龍脊椎',
                summaryEn: 'Upper gallery for the Brontosaurus',
                story: '不要只停留在恐龍腳下。走上二樓的環型迴廊，這能讓你與數層樓高的恐龍骨骼「平視」，那種視覺衝擊力是地面上感受不到的。',
                storyEn: 'Don\'t just stay on the floor. Head to the 2F gallery to stand eye-to-eye with the massive skeletons for the best perspective.'
            }
        ]
    },
    {
        id: 'tw-t-fam-mangrove',
        title: '紅樹林生態步道',
        titleEn: 'Mangrove Ecology Trail',
        type: 'nature',
        duration: '1小時',
        image: '🦀',
        description: '淡水河口最珍貴的生態教室。木棧道平坦友善，適合推車，能近距離觀察水筆仔、招潮蟹與彈塗魚，是帶孩子體驗潮間帶的最佳起點。',
        descriptionEn: 'The most precious ecology classroom at the Tamsui River mouth. Flat, stroller-friendly boardwalks to see crabs and mudskippers up close.',
        price: 0,
        address: '新北市淡水區中正東路二段68號',
        rating: 4.6,
        lat: 25.1558,
        lng: 121.4608,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '24H (建議日間前往)',
        tags: ['生態', '戶外', '親子'],
        themeColor: '#2F4F4F',
        coverImage: 'https://images.unsplash.com/photo-1614116824474-4fcf1b87321f?q=80&w=1740&auto=format&fit=crop&q=80&w=800',

        teaser: '捷運站出來就是森林，帶孩子尋找泥土裡的招潮蟹魔法。',
        teaserEn: 'A forest right outside the MRT, where kids can find the magic of fiddler crabs.',
        expertStories: [
            {
                id: 'must-do',
                label: '生物偵探',
                labelEn: 'Bio-Detective',
                summary: '低頭尋找招潮蟹與彈塗魚',
                summaryEn: 'Look for crabs and mudskippers',
                story: '木棧道兩側的泥灘就是最精彩的舞台。教孩子觀察招潮蟹的大螯，或是尋找正在泥地跳躍的彈塗魚，這比課本上的生物課有趣一百倍。',
                storyEn: 'The mudflats along the boardwalk are a stage. Show kids the massive claws of the fiddler crabs or spot the jumping mudskippers.'
            }
        ]
    },
    {
        id: 'tw-t-fam-bali',
        title: '八里左岸單車與渡輪',
        titleEn: 'Bali Left Bank Cycling & Ferry',
        type: 'experiential',
        duration: '2-3小時',
        image: '🚲',
        description: '從淡水搭乘渡輪橫跨河口，抵達八里後租輛親子單車。沿著河岸平緩前行，吹著海風，享受台北最悠閒的午後時光。',
        descriptionEn: 'Cross the river by ferry and rent a family bike. A breezy, flat ride along the Bali waterfront, perfect for a relaxing Taipei afternoon.',
        price: 200,
        address: '新北市八里區觀海大道',
        rating: 4.7,
        lat: 25.1633,
        lng: 121.4425,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '10:00 - 18:00',
        tags: ['單車', '風景', '體能'],
        themeColor: '#00BFFF',
        coverImage: 'https://images.unsplash.com/photo-1532000322649-66258c184310?q=80&w=1742&auto=format&fit=crop&q=80&w=800',
        teaser: '搭小船、踩踏板，把台北的夕陽裝進孩子的口袋。',
        teaserEn: 'Hop on a boat, pedal away, and capture Taipei\'s sunset for your kids.',
        expertStories: [
            {
                id: 'must-do',
                label: '海上儀式',
                labelEn: 'Sea Ritual',
                summary: '站在渡輪甲板吹海風',
                summaryEn: 'Feel the breeze on the ferry deck',
                story: '從淡水到八里的 10 分鐘渡輪對小孩來說是極大的冒險。讓他們站在甲板上觀察波浪，這種短暂的海上航行是行程中最好的轉場。',
                storyEn: 'The 10-minute ferry from Tamsui is a huge adventure for kids. Let them stand on the deck and watch the waves—it\'s the best transition.'
            },
            {
                id: 'must-do',
                label: '動力懶人包',
                labelEn: 'E-Bike Hack',
                summary: '必租電動親子協力車',
                summaryEn: 'Rent an electric family bike',
                story: '這是不崩潰的秘密：八里河岸雖然平坦，但體力留給小孩尖叫比較划算。果斷租用「四輪電動車」，家長輕鬆導航，小孩坐後座大喊歡呼。',
                storyEn: 'Insider secret: Rent a 4-wheel electric bike. Save your energy while the kids enjoy the "joyride" from the back seat.'
            }
        ]
    },
    {
        id: 'tw-t-fam-syntrend',
        title: '三創生活園區 (Syntrend)',
        titleEn: 'Syntrend Creative Park',
        type: 'experiential',
        duration: '2小時',
        image: '🤖',
        description: '台北科技與動漫的殿堂。從最新空拍機到鋼彈模型，以及專屬的親子科技玩樂層，這裡是讓大孩子與家長共同入迷的未來空間。',
        descriptionEn: 'The hub of tech and anime. From drones to Gundam models and dedicated kid-tech zones, it\'s a futuristic space that fascinates all ages.',
        price: 0,
        address: '台北市中正區市民大道三段2號',
        rating: 4.5,
        lat: 25.0452,
        lng: 121.5303,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '11:00 - 21:30',
        tags: ['科技', '動漫', '室內'],
        themeColor: '#708090',
        coverImage: 'https://lh3.googleusercontent.com/p/AF1QipPbzzSHtMT9tqg2n__mCu565Dvht4FErCNTsmUo?auto=format&fit=crop&q=80&w=800',
        teaser: '台北黑科技總部，這裡是逃離雨天與烈日的終極武庫。',
        teaserEn: 'Taipei\'s tech HQ—the ultimate indoor armor against rain and sun.',
        expertStories: [
            {
                id: 'hidden',
                label: '【動線攻略】',
                labelEn: 'Logistics Hack',
                summary: 'B2 捷徑與隱藏 D 電梯',
                summaryEn: 'B2 Shortcut & D-Elevator',
                story: '八德路大門 Wiwi 公仔旁有直達 B2 美食街的捷徑，不用在館內擠電梯；若要上樓，市民大道入口旁的 D 電梯通常更人少快速。',
                storyEn: 'Next to the Wiwi statue at the Bade Rd entrance is a direct shortcut to the B2 food court. For upper floors, the "D Elevator" near the Civil Blvd entrance is usually faster and less crowded.'
            },
            {
                id: 'must-do',
                label: '【親子手作】',
                labelEn: 'Kids Activity',
                summary: '7F 寶可夢卡牌教學與多美小汽車',
                summaryEn: 'Pokemon Card Tutorials & Tomica',
                story: '7F 創 Q Space 定期舉辦官方寶可夢卡牌教學，參加還有機會拿限量禮。旁邊的多美小汽車專區則是 10 歲以下小孩的終極樂園。',
                storyEn: '7F Chuang Q Space holds official Pokemon TCG tutorials (check FB for times). The Tomica area next door is a paradise for kids under 10.'
            },
            {
                id: 'hidden',
                label: '【隱藏休息】',
                labelEn: 'Hidden Rest',
                summary: '11F 共享咖啡與 4F 安靜角落',
                summaryEn: '11F Shared Coffee & 4F Quiet Spot',
                story: '逛累了？11F 共享咖啡吧與 4F 哈亞極品咖啡是全館最安靜的地方，適合家長充電。',
                storyEn: 'Exhausted? 11F Shared Coffee Bar and 4F Kaya Coffee are the quietest spots in the building, perfect for parents to recharge.'
            },
            {
                id: 'hidden',
                label: '【貼心設施】',
                labelEn: 'Facility Tip',
                summary: '2F-9F 飲水機與 ChargeSPOT',
                summaryEn: 'Water Dispensers & Power Rental',
                story: '2F 洗手間外飲水機有供應冷水。全館多處（1F/3F/5F/6F）皆有 ChargeSPOT 租借行動電源，不用擔心手機沒電。',
                storyEn: 'Water dispensers are near restrooms from 2F-9F (2F offers cold water). ChargeSPOT rentals are available on 1F, 3F, 5F, and 6F.'
            }
        ]
    },
    {
        id: 'tw-t-fam-ntrm',
        title: '國家鐵道博物館籌備處',
        titleEn: 'National Taiwan Railway Museum',
        type: 'attraction',
        duration: '1.5小時',
        image: '🚂',
        description: '這座擁有百年歷史的台北機廠，記錄了台灣鐵道的輝煌歲月。孩子能在古老的維修廠房中看到復古火車頭，甚至在特定的公共展覽中體驗鐵道文化。',
        descriptionEn: 'The historic Taipei Railway Workshop. A place where kids can see vintage locomotives in century-old industrial workshops—pure magic for train enthusiasts.',
        price: 0,
        address: '台北市信義區市民大道五段50號',
        rating: 4.6,
        lat: 25.0478,
        lng: 121.5628,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '09:30 - 17:00 (16:30 停止售票，周一休館)',
        tags: ['鐵道', '親子', '歷史'],
        themeColor: '#8B4513',
        coverImage: 'https://lh3.googleusercontent.com/p/AF1QipNragxK2porpxm1SK2YUYzbvDImGuiz2VvbT0Sh?auto=format&fit=crop&q=80&w=800',
        teaser: '走進火車的醫院，見證台灣鋼鐵與鐵道的百年記憶。',
        teaserEn: 'Enter the "hospital for trains" and witness a century of Taiwan\'s iron and steel history.',
        expertStories: [
            {
                id: 'must-do',
                label: '【官網攻略】',
                labelEn: 'Official Hack',
                summary: '捷運北門站 2 號出口直達',
                summaryEn: 'MRT Beimen Exit 2 Direct',
                story: '這裡是國立臺灣博物館鐵道部園區。每週一、除夕、初一休館。除了火車，園區內的「蒸汽夢工廠」互動設施是小孩體感遊戲的首選。',
                storyEn: 'Part of the National Taiwan Museum. Closed on Mondays. Beyond trains, the "Steam Factory" interactive zone is a must for physical play.'
            },
            {
                id: 'must-eat',
                label: '【博物館餐】',
                labelEn: 'Museum Lunch',
                summary: '園區內的復古食堂',
                summaryEn: 'On-site Vintage Canteen',
                story: '園區內設有復古風格的食堂，提供簡單的定食與飲品。在百年古蹟中用餐，對鐵道迷來說是極致的浪漫。',
                storyEn: 'The on-site canteen offers vintage-style sets and drinks. Dining within a century-old historical site is pure magic for rail fans.'
            }
        ]
    },
    {
        id: 'tw-t-fam-ximending',
        title: '西門町潮流商圈',
        titleEn: 'Ximending Youth District',
        type: 'shopping',
        duration: '2小時',
        image: '🌈',
        description: '台北潮流文化的發源地。五彩斑斕的招牌、街頭藝人表演，以及各式各樣充滿創意的小店，這裡是感受台北「酷靈魂」的最佳場合。',
        descriptionEn: 'The birthplace of Taipei youth culture. Colorful signs, street performers, and creative boutiques—this is where you find the city\'s "cool soul."',
        price: 0,
        address: '台北市萬華區成都路',
        rating: 4.3,
        lat: 25.0422,
        lng: 121.5085,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '24H (熱鬧時段 16:00-22:00)',
        tags: ['潮流', '美食', '夜生活'],
        themeColor: '#FF69B4',
        coverImage: 'https://www.travel.taipei/image/490753/?r=1728873877663?auto=format&fit=crop&q=80&w=800',
        teaser: '台北的秋葉原與東宿，這裡有最熱鬧的街頭與最好拍的彩虹標誌。',
        teaserEn: 'The Akihabara of Taipei, featuring vibrant streets and the iconic rainbow landmark.',
        expertStories: [
            {
                id: 'must-do',
                label: '彩虹地標',
                labelEn: 'Rainbow Spot',
                summary: '西門站 6 號出口彩虹步道',
                summaryEn: 'Rainbow crossing at Exit 6',
                story: '位於 6 號出口前的彩虹地景是必須打卡的標誌。帶孩子在這裡留下合影，這代表你們已經真正「解鎖」了台北的都會活力。',
                storyEn: 'The massive rainbow crossing at Exit 6 is an essential photo op—the perfect symbolic "unlock" of Taipei\'s urban energy.'
            },
            {
                id: 'must-do',
                label: '萬年商業大樓',
                labelEn: 'Vintage Hub',
                summary: '4 樓隱藏的模型模型基地',
                summaryEn: 'Hidden model shops on 4F',
                story: '如果孩子是模型迷，一定要去「萬年大樓」4 樓。那裡充滿了幾十年歷史的模型老店，跟三創的現代感不同，這裡有一種老台北的浪漫。',
                storyEn: 'For serious collectors, the 4th floor of Wannien Building offers historic model shops with a romantic, vintage Taipei vibe.'
            },
            {
                id: 'artisan',
                label: '西門紅樓',
                labelEn: 'The Red House',
                summary: '百年紅磚八角樓',
                summaryEn: 'Century-old Octagonal Building',
                story: '這座建於 1908 年的紅磚建築是西門町的靈魂。內部現在是精緻的文創市集，週末戶外廣場更有熱鬧的創意市集。即便只是在門口拍一張紅磚牆的照片，也非常有紀念價值。',
                storyEn: 'Built in 1908, this iconic red brick building is the soul of Ximen. Inside is a creative market, and the outdoor square hosts a vibrant weekend market perfect for unique souvenirs.'
            },
            {
                id: 'hidden',
                label: '【街頭美學】',
                labelEn: 'Street Art',
                summary: '美國街與塗鴉巷',
                summaryEn: 'Graffiti Lane & American St',
                story: '隱身在武昌街二段 120 巷，這裡有全台北最具張力的街頭塗鴉。許多國際藝術家都在此留下作品，是拍攝潮流風格照片（個性大片）的最佳去處。',
                storyEn: 'Hidden in Lane 120, Wuchang St, this area features world-class graffiti and vintage American-style shops—a paradise for street photography.'
            }
        ],
        insiderTip: {
            teaser: '歷史彩蛋：這裡曾是台北城的「西門」所在地。',
            teaserEn: 'History Egg: This was once the site of the city\'s "West Gate."',
            full: {
                story: '西門町之所以叫西門，是因為清朝台北城的「寶成門」曾矗立在此（約衡陽路口）。雖然城門已拆除，但這份「城門口」的熱鬧延續至今。💡 深度撇步：如果想看老西門的信仰中心，可以鑽進成都路旁的「台北天后宮」，那是鬧區中極其安靜的避風港。',
                storyEn: 'Ximending is named after the original "West Gate" of old Taipei City. Though the gate is gone, the vibrant energy remains. 💡 Pro Tip: Visit the Taipei Tianhou Temple on Chengdu Rd for a serene escape hidden within the shopping district.',
                bestTime: '17:00-21:00'
            }
        }
    },
    {
        id: 'tw-t-f-mala-pot',
        title: '馬辣頂級麻辣鴛鴦火鍋',
        titleEn: 'Mala Hot Pot (Top Tier)',
        type: 'food',
        duration: '2小時',
        image: '🥘',
        description: '台北最受歡迎的吃到飽火鍋。除了豐富的頂級肉品，最吸引孩子的是無限量供應的哈根達斯冰淇淋與新鮮水果牆。',
        descriptionEn: 'Taipei\'s favorite all-you-can-eat hot pot. Beyond premium meats, the endless Häagen-Dazs and wall of fresh fruit are major kid-pleasers.',
        price: 800,
        address: '台北市萬華區漢口街二段30號',
        rating: 4.6,
        lat: 25.0445,
        lng: 121.5065,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '11:30 - 02:00',
        tags: ['吃到飽', '麻辣鍋', '慶祝'],
        themeColor: '#800000',
        coverImage: 'https://plus.unsplash.com/premium_photo-1661410881226-c42c7f6c6690?q=80&w=1632&auto=format&fit=crop&q=80&w=800',
        teaser: '台北旗艦行程的慶祝晚宴，用和牛與冰淇淋填滿全家人的胃。',
        teaserEn: 'The celebratory gala dinner of the flagship tour—fill up on Wagyu and endless ice cream.',
        expertStories: [
            {
                id: 'must-do',
                label: '冰淇淋挑戰',
                labelEn: 'Ice Cream Quest',
                summary: '16 種口味哈根達斯',
                summaryEn: '16 flavors of Häagen-Dazs',
                story: '這不僅是火車。這裡是孩子們的甜點天堂。教他們如何在火鍋結束後，精確挑選自己最愛的口味，這就是旅行中最幸福的時刻。',
                storyEn: 'It\'s a dessert paradise. Watching kids pick their favorite flavors after a hot pot meal is the definition of travel joy.'
            }
        ]
    },
    {
        id: 'tw-t-f-agei',
        title: '淡水正宗阿給',
        titleEn: 'Authentic Tamsui Agei',
        type: 'food',
        duration: '45分鐘',
        image: '🥙',
        description: '淡水最具代表性的傳統小吃。油豆腐塞入冬粉後以魚漿封口，淋上特製甜辣醬，這是一口就能體驗到的淡水百年風味。',
        descriptionEn: 'The iconic Tamsui snack: tofu pockets stuffed with glass noodles, sealed with fish paste, and drizzled in sweet-spicy sauce.',
        price: 50,
        address: '新北市淡水區真理街6-1號',
        rating: 4.5,
        lat: 25.1748,
        lng: 121.4385,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '05:00 - 14:00 (售完為止)',
        tags: ['老字號', '必吃', '平價'],
        themeColor: '#FF7F50',
        coverImage: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEMf75y8vqo7FGgVlKfgsvWgN2TCtY-pDH-Ec_yAjJdY1JdLcnWFXLWn_s1I4TDegs9jSKI0x0y2zA_7WpkjryUknrjt3592KCVaim8cJdSxR6USYOeH7ynTL7Z317f0dyABctenlRd0-Jb?auto=format&fit=crop&q=80&w=800',
        teaser: '淡水人的私藏早餐，每一口都是飽滿的冬粉與魚漿香氣。',
        teaserEn: 'The locals\' secret breakfast—each bite is packed with glass noodles and savory fish paste.',
        expertStories: [
            {
                id: 'must-do',
                label: '解剖學吃法',
                labelEn: 'Anatomy Eat',
                summary: '教孩子如何切開豆腐',
                summaryEn: 'Show kids how to cut the tofu',
                story: '這對孩子來說非常有參與感：先用筷子輕輕劃開油豆腐，讓飽吸湯汁的冬粉滑出來。這不是在吃飯，這是在進行一場美味的探索。',
                storyEn: 'It\'s an interactive meal: show kids how to slice the tofu so the juice-soaked noodles slide out—a tasty exploration.'
            }
        ]
    },
    {
        id: 'tw-t-f-railway-bento',
        title: '台鐵排骨便當',
        titleEn: 'TR Classic Railway Bento',
        type: 'food',
        duration: '30分鐘',
        image: '🍱',
        description: '台灣鐵道的文化縮影。一塊厚實的滷排骨、一顆滷蛋與酸菜，這份在火車上流傳數十年的美味，是無數台灣人的共同記憶。',
        descriptionEn: 'The cultural icon of Taiwan railways. Tourist-friendly with English labels at the counter. A thick braised pork chop, braised egg, and pickles—the flavor that defined decades of train travel.',
        price: 80,
        address: '台北市中正區北平西路3號 (台北車站)',
        rating: 4.7,
        lat: 25.0478,
        lng: 121.5170,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '08:00 - 20:00',
        tags: ['經典', '台味', '必吃'],
        themeColor: '#000080',
        coverImage: 'https://images.unsplash.com/photo-1709111642691-ebc144470744?q=80&w=1740&?auto=format&fit=crop&q=80&w=800',
        teaser: '這不只是一份便當，這是台灣一整個世代的鄉愁與移動記憶。',
        teaserEn: 'More than a bento—this is a generation\'s nostalgia and collective travel memory.',
        expertStories: [
            {
                id: 'must-do',
                label: '儀式感',
                labelEn: 'The Ritual',
                summary: '在台北車站大廳席地而坐',
                summaryEn: 'Sitting on the Main Station floor',
                story: '如果不急著走，買完便當後跟著當地人在台北車站黑白格大廳坐下吃。這種席地而坐的豪邁感，對小孩來說是非常獨特的城市體驗。',
                storyEn: 'Join the locals in the massive black-and-white hall of Taipei Main Station. Sitting on the floor for a meal is a unique, relaxed urban experience for kids.'
            }
        ]
    },
    {
        id: 'tw-t-fam-brunch-beimen',
        title: 'Coppii Lumii living coffee 冉苒生活 (北門店)',
        titleEn: 'Coppii Lumii Living Coffee (Beimen)',
        type: 'food',
        duration: '1.5小時',
        image: '🥗',
        description: '北門周邊評分最高的早午餐。環境寬敞明亮，極具北歐風格。不僅咖啡專業，豐富的早午餐大拼盤更是網友熱推，是前往鐵道部參觀前的最佳能量補給站。',
        descriptionEn: 'Top-rated brunch near Beimen. A spacious, Nordic-style cafe with professional coffee and legendary breakfast platters. The perfect pre-museum fuel.',
        price: 400,
        address: '台北市中正區延平北路一段72號',
        rating: 4.7,
        lat: 25.0492,
        lng: 121.5122,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '09:00 - 17:00',
        tags: ['早午餐', '名店', '親子'],
        themeColor: '#DEB887',
        coverImage: 'https://plus.unsplash.com/premium_photo-1733317254623-94ea60b1eb3b?q=80&w=1160&?auto=format&fit=crop&q=80&w=800',
        teaser: '台北北門旁的陽光早午餐，大拼盤是不變的經典。',
        teaserEn: 'Sun-drenched brunch near Beimen—legendary platters are always a win.',
        expertStories: [
            {
                id: 'must-eat',
                label: '【必點拼盤】',
                labelEn: 'Must Eat',
                summary: '冉苒大太陽大拼盤',
                summaryEn: 'Signature Platter',
                story: '拼盤內含豐富的時蔬、法式吐司與德式香腸。份量很大，建議親子可以共食一份再加點飲品，性價比極高。',
                storyEn: 'The signature platter features fresh veggies, French toast, and sausages. It\'s huge—perfect for sharing with your kids.'
            }
        ]
    },
    {
        id: 'tw-t-fam-zoo',
        title: '台北市立動物園',
        titleEn: 'Taipei Zoo',
        type: 'attraction',
        duration: '4-5小時',
        image: '🐼',
        description: '亞洲最大的動物園之一。除了超高人氣的大熊貓、國王企鵝，最吸引人的還有廣大的熱帶雨林區與非洲動物區。結合教育與休閒，是親子旅遊的必訪之地。',
        descriptionEn: 'One of Asia\'s largest zoos. Meet giant pandas, king penguins, and explore the massive African and Tropical zones—an essential stop for families.',
        price: 60,
        address: '台北市文山區新光路二段30號',
        rating: 4.8,
        lat: 24.9983,
        lng: 121.5811,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '09:00 - 17:00 (農曆除夕休館)',
        tags: ['動物園', '教育', '旗艦'],
        themeColor: '#228B22',
        coverImage: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGGZLspPlrOp_tB1XdOEg74pNsU1Scsw547K4vCV47pPJwrcQUyRePyvl4GR-nN07elqQfETt7aka33GZU49NRtZNYJQa4Y8p77ZWTTB5P855pxCHC0Ng-1U9obpJPahUpMqBrPpw?auto=format&fit=crop&q=80&w=800',
        teaser: '在森林與草地間尋找野生奇蹟，這是台北最經典的親子記憶。',
        teaserEn: 'Discover wild wonders between the forests and slopes—Taipei\'s most classic family memory.',
        expertStories: [
            {
                id: 'must-do',
                label: '【生存密技】',
                labelEn: 'Pro Tip',
                summary: '上山搭車，下山走路',
                summaryEn: 'Bus up, Walk down',
                story: '絕對不要傻傻地從門口往上走！先搭接駁車（5 元）到最上面的企鵝館，然後一路往下坡逛回來，這能省下小孩 1 小時的體力。',
                storyEn: 'Never walk uphill from the entrance! Take the shuttle bus ($5) to the top (Penguins) and walk down—save your kids\' energy for more fun.'
            }
        ]
    },
    {
        id: 'tw-t-fam-mao',
        title: '貓空纜車',
        titleEn: 'Maokong Gondola',
        type: 'attraction',
        duration: '1.5小時',
        image: '🚠',
        description: '跨越台北盆地的雲端旅程。搭乘全透明的「之眼」水晶車廂，俯瞰茶園山景與台北 101，感受山谷間的微風與靜謐。',
        descriptionEn: 'A high-flying journey over Taipei. Ride the crystal cabins for a 360-degree view of tea plantations and Taipei 101—a serene escape above the city.',
        price: 120,
        address: '台北市文山區萬芳路',
        rating: 4.7,
        lat: 24.9681,
        lng: 121.5884,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '09:00 - 21:00 (每月第一個週一營運)',
        tags: ['纜車', '夜景', '風景'],
        themeColor: '#556B2F',
        coverImage: 'https://images.unsplash.com/photo-1635328380844-adb3f8e12309?q=80&w=774&?auto=format&fit=crop&q=80&w=800',
        teaser: '搭乘水晶車廂穿梭雲端，讓台北 101 當你的背景。',
        teaserEn: 'Soar through the clouds in a crystal cabin with Taipei 101 as your backdrop.',
        expertStories: [
            {
                id: 'must-do',
                label: '【水晶挑戰】',
                labelEn: 'Crystal Ride',
                summary: '必排「貓纜之眼」',
                summaryEn: 'Queue for "Eyes of Maokong"',
                story: '水晶車廂地板是全透明的！雖然排隊時間稍長，但懸浮在茶園上空的視覺體驗絕對讓孩子大聲尖叫與瘋迷。',
                storyEn: 'The floor is completely transparent! The wait is a bit longer, but floating over the tea gardens is a visual thrill kids love.'
            }
        ]
    },
    {
        id: 'tw-t-a-milkfall',
        title: '小隱潭瀑布 (牛奶瀑布)',
        titleEn: 'Xiaoyintan Waterfall (Milk Fall)',
        type: 'nature',
        duration: '0.5小時',
        image: '🥛',
        description: '陽明山的隱藏版牛奶泉。這處小巧的瀑布因水質富含硫磺而呈乳白色，隱身在馬路旁的石牆後，不需要長途跋涉就能拍出森林系秘境大片。',
        descriptionEn: 'The hidden "Milk Fall" of Yangmingshan. This small waterfall has milky-white water due to sulfur minerals. Tucked behind a roadside wall, it\'s a quick, high-value photo op.',
        price: 0,
        address: '台北市北投區湖山路二段',
        rating: 4.5,
        lat: 25.1567,
        lng: 121.5432,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['攝影', '自然', '秘境'],
        themeColor: '#cbd5e1',
        coverImage: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEQPe8qy3X3v_fl4psIyVwqbTRQCZ2MnJ9NGdy-hE8c1zF9L8L-YO248dNLgeoVZWAmto35AoFmb6HABfpE7bh6-7V4sxU_JmBvGdQncLrIvdg5gmeLMlUF8rB96fhqU6lU_rdy?auto=format&fit=crop&q=80&w=800',
        teaser: '馬路旁的森林奇蹟，遇見那一池溫柔的乳白翠綠。',
        teaserEn: 'A forest miracle right by the road; witness the pool of gentle milk-white and emerald green.',
        expertStories: [
            {
                id: 'must-do',
                label: '【快速拍照】',
                labelEn: 'Quick Shot',
                summary: '2分鐘抵達的秘境',
                summaryEn: 'Secret spot in 2 mins',
                story: '很多人以為要爬很久，其實它就在陽明山花鐘下方不遠處。走進門口那座石牆，瀑布就在眼前。非常適合在緊湊的行程中，「順路」摘下這個高價值的機位。',
                storyEn: 'Most think it requires a hike. It\'s actually right below the Flower Clock. Walk behind the stone wall and the fall is right there. A high-value "on the way" spot for busy itineraries.'
            }
        ]
    },
    {
        id: 'tw-t-a22',
        title: '淡水重建街戀愛巷',
        titleEn: 'Tamsui Love Lane',
        type: 'attraction',
        duration: '0.5小時',
        image: '💕',
        description: '淡水第一條老街，隱藏在繁華街道背後的幽靜弄巷。因文人王昶雄送心儀對象回家的浪漫軼事而得名，是尋找老淡水建築與文青攝影的最佳秘境。',
        descriptionEn: 'The first old street in Tamsui, a quiet alley hidden behind the bustle. Named after a local romance, it\'s a secret spot for historic architecture and literary photography.',
        price: 0,
        address: '新北市淡水區重建街',
        rating: 4.5,
        lat: 25.1712,
        lng: 121.4402,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['攝影', '歷史', '浪漫'],
        themeColor: '#f43f5e',
        coverImage: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAH868D-ujhfvCvouSWquOn9vL2RFLs4jgInvPtffGzIrJDsdqHPYfz8MpGrvcynPgapwahbFjWUGiN2eC8rZIZuk9rVYvQTcbxavufA_AcH6NiNG5HqeUZcui1J0lwihD4Zukj4pw?auto=format&fit=crop&q=80&w=800',
        teaser: '走進淡水時光的縫隙，在戀愛巷的階梯上與歷史對望。',
        teaserEn: 'Step into the cracks of Tamsui\'s history; meet the past on the steps of Love Lane.',
        expertStories: [
            {
                id: 'must-do',
                label: '【文青攝影】',
                labelEn: 'Indie Photography',
                summary: '香草街屋與紅磚階梯',
                summaryEn: 'Herb House & Red Brick',
                story: '在這裡拍照，重點在「高視角」。站在重建街的高處往下拍，可以同時拍到老舊的紅磚屋頂與遠處的淡水河。這種層次感是淡水老街主幹道拍不出來的。',
                storyEn: 'Shoot from a high angle. Standing at the top of the street looking down lets you capture the old red-brick rooftops against the distant Tamsui River—a depth missing from the main street.'
            }
        ]
    },
    {
        id: 'tw-t-a23',
        title: '金瓜石黃金博物館',
        titleEn: 'Gold Museum',
        type: 'attraction',
        duration: '2小時',
        image: '💰',
        description: '曾是亞洲最大的金屬礦區，如今轉型為體驗礦業文化的博物館。除了觸摸巨大的純金磚，還能體驗淘金與走進真正的礦坑隧道，感受採礦年代的壯闊。',
        descriptionEn: 'Once Asia\'s major gold mining area, now a museum for mining culture. Touch a massive gold bar, try gold panning, and walk into real mine tunnels.',
        price: 100,
        address: '新北市瑞芳區金光路8號',
        rating: 4.6,
        lat: 25.1067,
        lng: 121.8585,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['歷史', '體驗', '建築'],
        themeColor: '#ca8a04',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800',
        teaser: '親手淘出屬於你的那抹金色，在山城中追尋採礦人的夢想。',
        teaserEn: 'Pan for your own fleck of gold; follow the dreams of the miners in the mountain town.',
        expertStories: [
            {
                id: 'must-do',
                label: '【淘金體驗】',
                labelEn: 'Gold Panning',
                summary: '把金沙帶回家',
                summaryEn: 'Bring home actual gold',
                story: '淘金體驗一天只有四場，強烈建議提早預約。店員會教你如何在大盆中篩選沙礫，最後你會拿到一個裝著真金沙的小瓶子。這是全台灣最具紀念價值的 DIY 體驗。',
                storyEn: 'Only 4 sessions a day—book ahead! You\'ll learn to sift through silt and keep the gold flakes in a small vial. It\'s the most valuable DIY souvenir in Taiwan.'
            }
        ]
    },
    {
        id: 'tw-t-a42',
        title: '報時山步道 & 陰陽海',
        titleEn: 'Baoshi Mountain & Yinyang Sea',
        type: 'nature',
        duration: '1.5小時',
        image: '🏞️',
        description: '全台灣 CP 值最高的景觀步道。只需步行 10 分鐘，即可站在制高點俯瞰壯闊的 360 度海景、陰陽海奇觀，以及充滿末日廢墟美學的「六坑斜坡索道」遺構。',
        descriptionEn: 'The best value hiking trail in Taiwan. A 10-minute walk leads to a 360-degree panoramic view of the Yinyang Sea and the hauntingly beautiful ruins of the Six-Pit Inclined Plane Railway.',
        price: 0,
        address: '新北市瑞芳區報時山 (勸濟堂停車場旁)',
        rating: 4.9,
        lat: 25.1132,
        lng: 121.8604,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['步道', '海景', '攝影', '廢墟'],
        themeColor: '#0ea5e9',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800',
        teaser: '站在世界的邊緣，俯視大自然最神奇的藍黃調色盤與礦業遺跡。',
        teaserEn: 'Stand at the edge of the world and witness nature\'s magical palette and mining relics.',
        expertStories: [
            {
                id: 'must-do',
                label: '【攝影機位】',
                labelEn: 'Photo Spot',
                summary: '朝日亭 360 度海景',
                summaryEn: '360° Coastal View',
                story: '步道盡頭的「朝日亭」是拍攝水湳洞選煉廠遺構與陰陽海的最佳位置。建議帶上廣角鏡頭，將山城、廢墟與大海一次收錄，畫面極具電影感。',
                storyEn: 'The Zhaori Pavilion at the end of the trail is perfect for capturing the Shuinandong Smelter ruins and Yinyang Sea. Bring a wide-angle lens for a truly cinematic shot.'
            },
            {
                id: 'artisan',
                label: '【時光隧道】',
                labelEn: 'Time Tunnel',
                summary: '六坑斜坡索道廢墟',
                summaryEn: 'Six-Pit Railway Ruins',
                story: '就在停車場旁，斑駁的紅磚「天車間」遺址與直衝大海的 45 度斜坡，構成了獨特的末日感。💡 達人提醒：坐在紅磚牆上拍照時，後方雖是山坡但仍有兩層樓高，務必注意安全。',
                storyEn: 'Right next to the parking lot, the crumbling red-brick "Tianche Hall" and the 45-degree slope heading straight for the sea create a "doomsday" vibe. 💡 Pro Tip: Be careful on the brick walls; it\'s about a 2-story drop.'
            },
            {
                id: 'hidden',
                label: '【內行路線】',
                labelEn: 'Insider Route',
                summary: '祈堂老街彩虹階梯',
                summaryEn: 'Rainbow Stairs',
                story: '從報時山走下來後，建議順道前往旁邊的「祈堂老街」。這裡的彩虹階梯是新興的文青拍點，且比起九份老街更有一份難得的靜謐與生活感。',
                storyEn: 'After the trail, head down to Qitang Old Street. The Rainbow Stairs are a hidden gem for photos, offering a quiet, local vibe that Jiufen lacks.'
            }
        ]
    },
    {
        id: 'tw-t-f10',
        title: '基隆廟口夜市',
        titleEn: 'Keelung Miaokou Night Market',
        type: 'food',
        duration: '1.5小時',
        image: '🍜',
        description: '以奠濟宮為中心，被譽為「全台最美味夜市」。每一家攤位都有數十年的歷史，最具代表性的營養三明治、泡泡冰、鐤邊趖是吃貨絕對不能錯過的海港美味。',
        descriptionEn: 'Centered around Dianji Temple, famously called Taiwan\'s most delicious night market. Iconic sea-port flavors like Nutritious Sandwiches and Bubble Ice have decades of history.',
        price: 0,
        address: '基隆市仁愛區仁三路',
        rating: 4.8,
        lat: 25.1283,
        lng: 121.7442,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['美食', '夜市', '海港'],
        themeColor: '#ea580c',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800',
        teaser: '燈火輝煌的三排路燈下，藏著每一位老饕心中的台北美食清單。',
        teaserEn: 'Under the glowing triple rows of lanterns lie the culinary dreams of every gourmet.',
        expertStories: [
            {
                id: 'must-eat',
                label: '【招牌首選】',
                labelEn: 'The Legend',
                summary: '58 號攤位的營養三明治',
                summaryEn: 'Stall 58 Sandwich',
                story: '這裡的強項是「炸三明治」。外皮金黃酥脆，裡面的火腿與美乃滋達到完美平衡。這是在地人即便排隊一小時也要買到的傳奇。',
                storyEn: 'The legendary fried sandwich. Crispy golden crust with a perfect balance of mayo and ham. Locals wait an hour for this.'
            },
            {
                id: 'must-eat',
                label: '【一口滿足】',
                labelEn: 'Bite-Sized',
                summary: '43-1 號一口吃香腸',
                summaryEn: 'Stall 43-1 Mini Sausages',
                story: '這家攤位永遠排滿人。炭火現烤的小香腸，配上生大蒜，是基隆最經典的街頭小吃。一粒只要 7 元，建議一次買 10 粒才過癮。',
                storyEn: 'Always a line. Charcoal-grilled mini sausages with raw garlic—a classic Keelung street snack. Only $7 each; get 10 to satisfy your soul.'
            },
            {
                id: 'hidden',
                label: '【米食天花板】',
                labelEn: 'Rice King',
                summary: '21 號攤位魯肉飯',
                summaryEn: 'Stall 21 Braised Pork Rice',
                story: '如果您不想吃炸物，這家的魯肉飯切工細膩，肥而不膩，入口即化。搭配一碗肉羹湯，是當地老饕的標準配備。',
                storyEn: 'For rice lovers, this stall serves delicate braised pork that melts in your mouth. Pair it with meat thick soup for the authentic local experience.'
            },
            {
                id: 'must-do',
                label: '【老饕流程】',
                labelEn: 'Expert Flow',
                summary: '先領號碼牌，再買泡泡冰',
                summaryEn: 'Ticket first, Ice second',
                story: '先去 58 號領號碼牌（一定要先領！），接著去旁邊買一杯「沈記泡泡冰」，邊吃冰邊等號碼，這是最正宗的基隆吃法。',
                storyEn: 'Grab your sandwich queue ticket at Stall 58 FIRST, then get a "Shen\'s Bubble Ice" nearby. Eating ice while waiting is the local ritual.'
            }
        ],
        insiderTip: {
            teaser: '先去三明治領號碼牌是關鍵。',
            teaserEn: 'Grabbing the sandwich ticket first is the golden rule.',
            full: {
                story: '這裡的強項是「炸三明治」。外皮金黃酥脆，裡面的火腿與美乃滋達到完美平衡。專業建議：先去拿號碼牌，接著去旁邊買一杯泡泡冰，邊等邊吃才是正宗基隆吃法。',
                storyEn: 'Fried sandwich is the star. Get your ticket first, then bubble ice. This is the way.',
                exactLocation: '仁三路廟口區',
                mustTry: '58號營養三明治 + 沈記泡泡冰',
                bestTime: '17:00'
            }
        }
    },
    {
        id: 'tw-t-a14',
        title: '野柳地質公園',
        titleEn: 'Yehliu Geopark',
        type: 'nature',
        duration: '2小時',
        image: '🗿',
        description: '大自然在北海岸雕刻出的奇蹟。這裡的蕈狀岩、薑石與舉世聞名的「女王頭」，見證了數萬年的地質變遷。走在海岸邊，你彷彿漫步在異世界。',
        descriptionEn: 'Nature\'s sculpture gallery on the North Coast. From mushroom rocks to the world-famous "Queen\'s Head," it feels like another planet.',
        price: 120,
        address: '新北市萬里區港東路167-1號',
        rating: 4.7,
        lat: 25.2064,
        lng: 121.6953,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['地質奇觀', '自然', '攝影'],
        themeColor: '#d69e2e',
        isPhotographySpot: true,
        photographyTips: {
            zh: '想拍出女王頭的優雅感？請站在木棧道的右側 45 度角，利用廣角鏡頭能同時拍到後方的海面。',
            en: 'For the Queen\'s Head, stand at a 45-degree angle on the right side of the boardwalk to catch the ocean background.'
        },
        teaser: '穿越數萬年的風與浪，親眼見證女王的優雅。',
        teaserEn: 'Wind and waves of millennia; witness the Queen\'s elegance in person.',
        expertStories: [
            {
                id: 'must-do',
                label: '【女王視角】',
                labelEn: 'Queen\'s View',
                summary: '必排的女王頭合照',
                summaryEn: 'The Queen\'s Head Shot',
                story: '雖然要排隊，但這絕對是北台灣最經典的打卡點。建議選擇清晨入園，那時的光線柔和，岩石的層次感更豐富。',
                storyEn: 'The most iconic shot in Northern Taiwan. Arrive early for soft light and rich rock textures.'
            },
            {
                id: 'trap',
                label: '【氣候警告】',
                labelEn: 'Weather Alert',
                summary: '遮蔽物極少，注意防曬',
                summaryEn: 'Zero shade, wear sunblock',
                story: '園區完全暴露在海風與陽光下。夏天一定要帶傘與防曬，否則兩小時的漫步會變成一場體力考驗。',
                storyEn: 'The park is totally exposed. Bring an umbrella and sunblock, or your walk will become a survival test.'
            }
        ],
        insiderTip: {
            teaser: '清晨九點前入園，避開大量團客。',
            teaserEn: 'Arrive before 9 AM to beat the tour buses.',
            full: {
                story: '除了女王頭，一定要去看「俏皮公主」，她被認為是女王的接班人。後方的第三區步道人煙稀少，是欣賞開闊海景的私藏地。',
                storyEn: 'See the "Cute Princess" too! Also, Trail 3 in the back is a quiet spot for wide ocean views.',
                mustTry: '跟女王頭借位合照',
                bestTime: '08:30'
            }
        }
    },
    {
        id: 'tw-t-a15',
        title: '十分瀑布 & 十分老街',
        titleEn: 'Shifen Waterfall & Old St.',
        type: 'attraction',
        duration: '2.5小時',
        image: '🏮',
        description: '台灣版的「尼加拉瀑布」，水勢磅礴且空氣清新。接著搭火車到老街，體驗「火車門前過」的奇景，並在鐵軌上放天燈祈福，是充滿台式浪漫的體驗。',
        descriptionEn: 'Taiwan\'s "Niagara Falls" and the home of sky lanterns. Experience the unique sight of trains passing right through the street.',
        price: 0,
        address: '新北市平溪區十分街',
        rating: 4.8,
        lat: 25.0428,
        lng: 121.7766,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['天燈', '瀑布', '鐵道'],
        themeColor: '#e53e3e',
        isPhotographySpot: true,
        photographyTips: {
            zh: '拍攝火車進站老街時，建議在鐵軌兩側尋找高處平台，能拍到天燈與火車交織的經典畫面。',
            en: 'Find a high spot near the tracks to capture both the passing train and floating lanterns.'
        },
        teaser: '在鐵軌上許下心願，看著天燈載著夢想飛向天空。',
        teaserEn: 'Write your wishes on a lantern and watch dreams fly into the sky.',
        expertStories: [
            {
                id: 'must-do',
                label: '【祈福儀式】',
                labelEn: 'Ritual',
                summary: '在鐵軌上親手寫天燈',
                summaryEn: 'Writing Sky Lanterns',
                story: '四面顏色的天燈各有代表（紅求財、粉求愛等）。在店家指導下寫下心願，他們還會專業地幫你拍照錄影，那是很溫暖的回憶。',
                storyEn: 'Each color represents a wish. Shops will guide you and take professional photos of your lantern launch.'
            },
            {
                id: 'hidden',
                label: '【瀑布秘境】',
                labelEn: 'Hidden Falls',
                summary: '觀瀑平台的彩虹時刻',
                summaryEn: 'Rainbow Hour at the Falls',
                story: '如果天氣晴朗，下午兩點到三點之間，十分瀑布的龍潭上方常會出現彩虹，這也是它被稱為「彩虹淵」的原因。',
                storyEn: 'On sunny days between 2-3 PM, a rainbow often appears over the falls. A truly magical moment.'
            }
        ],
        insiderTip: {
            teaser: '瀑布離老街有段距離，建議搭 Uber 或接駁車。',
            teaserEn: 'The falls are a bit far from the station; take an Uber or shuttle.',
            full: {
                story: '瀑布園區步道規劃很好，但需要走一段路。老街上有許多美味的雞翅包飯。記得查好火車時刻表，拍下火車經過老街的一瞬間。',
                storyEn: 'Trails are well-marked but require walking. Try the stuffed chicken wings! Check train times for the perfect shot.',
                mustTry: '雞翅包飯 + 十分瀑布彩虹',
                bestTime: '14:00'
            }
        }
    },
    {
        id: 'tw-t-a16',
        title: '九份老街 (終極山城體驗)',
        titleEn: 'Jiufen Old Street (Ultimate Experience)',
        type: 'attraction',
        duration: '4小時',
        image: '🏮',
        description: '依山而建的神祕山城，結合了金礦歷史的滄桑與《神隱少女》般的夢幻。這是一個需要從黃昏待到入夜的地方，感受從喧囂到靜謐的魔幻轉變。',
        descriptionEn: 'The mysterious mountain town that blends gold mining history with a "Spirited Away" fantasy. Best experienced from sunset to nightfall as the crowds fade and lanterns glow.',
        price: 0,
        address: '新北市瑞芳區基山街',
        rating: 4.9,
        lat: 25.1099,
        lng: 121.8452,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['攝影聖地', '老街美食', '茶文化'],
        themeColor: '#b83280',
        teaser: '從黃昏攝影到深夜品茶，捕捉九份最靈魂的四個小時。',
        teaserEn: 'From sunset photos to late-night tea; capture the soul of Jiufen in 4 hours.',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '【避人潮攻略】',
                labelEn: 'Beat the Crowds',
                summary: '中午抵達是黃金關鍵',
                summaryEn: 'Noon is the Golden Hour',
                story: '大多數遊客在下午 3 點後湧入。11:30 抵達老街，你可以在不用排隊的情況下買到阿蘭草仔粿。趁著人潮還在台北市區吃午餐時，我們先把九份最精華的路段逛完。',
                storyEn: 'Tour groups flood in after 3 PM. Arriving at 11:30 AM lets you snag the famous herbal cakes without the wait and explore the best alleys while others are still having lunch in Taipei.'
            },
            {
                id: 'must-eat',
                label: '【景觀午餐】',
                labelEn: 'Lunch with a View',
                summary: '阿柑姨最深處的海景位',
                summaryEn: 'Hidden Sea View Seats',
                story: '來到老街頂端的「阿柑姨芋圓」，買完後請直接穿過廚房往裡面走。那裡藏著一整排正對深澳灣的海景座位，一碗芋圓配上壯闊海景，是山城最奢侈的午餐前菜。',
                storyEn: 'At the top of the stairs, head to A-Gan-Yi Taro Balls. Pro Tip: Walk past the kitchen to find the row of seats facing the harbor. It\'s the best free-view lunch spot in town.'
            },
            {
                id: 'hidden',
                label: '【光影採集】',
                labelEn: 'Daylight Photos',
                summary: '層次分明的山城建築',
                summaryEn: 'Architectural Layers',
                story: '白天的九份能清晰看見層次分明的黑屋頂與山海交界。比起夜晚的紅燈籠，中午的強光更適合拍攝九份獨特的「豎崎路」階梯，能拍出更具張力的線條感。',
                storyEn: 'Daylight reveals the unique black rooftops and the crisp mountain-sea horizon. It\'s better for capturing the architectural depth of Shuqi Road\'s famous stairs than the flat light of nighttime.'
            }
        ],
        insiderTip: {
            teaser: '回程物流：推薦 965 快速公車，末班車約 21:00。',
            teaserEn: 'Return Logistics: Bus 965 recommended; last bus approx 9 PM.',
            full: {
                story: '最順路徑：從老街入口進入，一路往上吃到阿柑姨，接著從「豎崎路」階梯往下走到底，右轉即可抵達公車站牌，剛好接上往金瓜石的行程。💡 零決策提示：隨時查看 Bus+ App，確認 965 與 788 的抵達時間。',
                storyEn: 'Best Route: Enter from the main gate, eat your way up to A-Gan-Yi, then head down the famous stairs (Shuqi Rd) to the bottom. Turn right to find the bus stop for Jinguashi. 💡 Pro Tip: Use the Bus+ App to track 965 and 788 in real-time.',
                bestTime: '11:30'
            }
        }
    },
    {
        id: 'tw-t-a17',
        title: '北投溫泉 & 溫泉博物館',
        titleEn: 'Beitou Hot Spring area',
        type: 'attraction',
        duration: '2.5小時',
        image: '♨️',
        description: '台北市區內的療癒天堂。這裡有充滿日式風情的溫泉博物館、宛如仙境的地熱谷，以及可以享受大眾池或私人湯屋的各種選擇。濃濃的硫磺香是這裡的標記。',
        descriptionEn: 'A healing paradise in the city. Features Japanese-style bathhouses, the misty Thermal Valley, and various hot spring resorts.',
        price: 0,
        address: '台北市北投區中山路2號',
        rating: 4.8,
        lat: 25.1365,
        lng: 121.5065,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['溫泉', '歷史', '療癒'],
        themeColor: '#4c51bf',
        teaser: '在蒸汽瀰漫的巷弄間，找回生活的溫度。',
        teaserEn: 'Find the warmth of life amidst the steamy alleys.',
        expertStories: [
            {
                id: 'must-do',
                label: '【仙境漫步】',
                labelEn: 'Misty Walk',
                summary: '地熱谷的蒸汽煙霧',
                summaryEn: 'Thermal Valley Mist',
                story: '地熱谷的水溫極高，終年煙霧繚繞。特別是冬天，那種置身於仙境的視覺衝擊，配上特殊的綠礬泉香氣，非常特別。',
                storyEn: 'Thermal Valley is misty year-round. In winter, the visual impact of the steam is like stepping into a dream.'
            },
            {
                id: 'artisan',
                label: '【建築美學】',
                labelEn: 'Architecture',
                summary: '北投圖書館與博物館',
                summaryEn: 'Beitou Library & Museum',
                story: '北投圖書館是全台最美綠建築，全木構造與公園融為一體。旁邊的溫泉博物館則是日治時期的豪華浴場，彩繪玻璃非常動人。',
                storyEn: 'Beitou Library is Taiwan\'s most beautiful green building. The nearby museum is a stunning Japanese-era bathhouse.'
            }
        ],
        insiderTip: {
            teaser: '捷運新北投站出站即達，這裡非常適合慢步。',
            teaserEn: 'Right outside Xinbeitou MRT; perfect for a slow stroll.',
            full: {
                story: '如果想泡湯又不想花大錢，可以試試「露天溫泉」。只要幾十元銅板價就能體驗在地老北投的泡湯氛圍。記得自備泳衣。',
                storyEn: 'Try the Public Open-Air Bath for a few dollars to experience local culture. Remember your swimsuit!',
                mustTry: '地熱谷 + 溫泉拉麵',
                bestTime: '10:00'
            }
        }
    },
    {
        id: 'tw-t-a18',
        title: '基隆和平島公園',
        titleEn: 'Heping Island Park (Keelung)',
        type: 'nature',
        duration: '2小時',
        image: '🏊',
        description: '這不是一般的公園，這是與大海共生的奇觀。這裡有天然的海水泳池，你可以與魚共游。海蝕平台上的岩石被風化成各種奇異形狀，是台灣離海最近的設計傑作。',
        descriptionEn: 'A natural seaside wonder. Features natural salt-water pools where you can swim with fish and unique rock formations.',
        price: 120,
        address: '基隆市中正區平一路360號',
        rating: 4.7,
        lat: 25.1614,
        lng: 121.7645,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['海景', '天然泳池', '地質'],
        themeColor: '#3182ce',
        isPhotographySpot: true,
        photographyTips: {
            zh: '在「等嶼亭」上可以拍到天然海水泳池與後方基隆嶼的絕美合照，下午三點後光線最佳。',
            en: 'From the "Island Waiting Pavilion," capture the salt-water pools with Keelung Islet in the back. Best light after 3 PM.'
        },
        teaser: '跳進大海的天然浴缸，感受太平洋的律動。',
        teaserEn: 'Jump into nature\'s ocean bathtub and feel the Pacific rhythm.',
        expertStories: [
            {
                id: 'must-do',
                label: '【天然暢泳】',
                labelEn: 'Ocean Swim',
                summary: '與熱帶魚共游的泳池',
                summaryEn: 'Swim with the Fish',
                story: '這裡的泳池是直接引入海水，甚至能看見彩色的小魚在你腳邊游動。在安全的前提下，這是台北周邊最接近大自然的玩水地點。',
                storyEn: 'The pools are natural seawater. You can see tropical fish swimming at your feet—safely and beautifully.'
            }
        ],
        insiderTip: {
            teaser: '園區內的「等嶼亭」是看海景的最高點。',
            teaserEn: 'The "Island Waiting Pavilion" is the highest viewpoint.',
            full: {
                story: '和平島經過重新設計，現在非常有質感。夏天建議一定要帶泳具，冬天則推薦走步道欣賞奇岩異石。',
                storyEn: 'Recently redesigned with great aesthetics. Bring swimwear in summer; in winter, walk the rock trails.',
                mustTry: '海水泳池 + 海藻冰淇淋',
                bestTime: '15:30'
            }
        }
    },
    {
        id: 'tw-t-a19',
        title: '正濱漁港彩色屋',
        titleEn: 'Zhengbin Port Color Houses',
        type: 'attraction',
        duration: '1小時',
        image: '🏘️',
        description: '基隆的「威尼斯」。一整排色彩繽紛的房屋倒映在平靜的港灣中，這原本是平凡的漁港，經過色彩計畫後，變成了北台灣最受歡迎的網美與攝影聖地。',
        descriptionEn: 'The "Venice of Keelung." A row of vibrantly colored houses reflecting in the calm harbor waters—a true photography paradise.',
        price: 0,
        address: '基隆市中正區正濱路',
        rating: 4.6,
        lat: 25.1534,
        lng: 121.7695,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['彩色建築', '攝影', '海港'],
        themeColor: '#dd6b20',
        isPhotographySpot: true,
        photographyTips: {
            zh: '站在正濱路上的木棧道平台，能平視整排彩色屋。若能等微風靜止，港面的倒影會像鏡子一樣完美。',
            en: 'Stand on the wooden platform on Zhengbin Rd for a level view. Wait for zero wind for a mirror-like reflection.'
        },
        teaser: '用色彩點亮憂鬱的港灣，遇見北台灣最繽紛的驚喜。',
        teaserEn: 'Brighten the harbor with colors; meet Northern Taiwan\'s most vibrant surprise.',
        expertStories: [
            {
                id: 'must-do',
                label: '【港邊慢活】',
                labelEn: 'Harbor Life',
                summary: '坐在岸邊喝杯咖啡',
                summaryEn: 'Coffee by the Harbor',
                story: '不要只是拍完照就走。彩色屋中有幾間非常具備個性的咖啡廳（如：圖們咖啡），坐在二樓窗邊看著小船進出，是基隆特有的浪漫。',
                storyEn: 'Don\'t just snap and leave. Sit in a harbor-side cafe like Tumen Coffee and watch the boats go by.'
            },
            {
                id: 'hidden',
                label: '【廢墟美學】',
                labelEn: 'Ruin Aesthetic',
                summary: '阿根納造船廠遺構',
                summaryEn: 'Agenna Shipyard Ruins',
                story: '就在彩色屋步行 3 分鐘處。巨大的鋼筋水泥支架與外露的結構，展現出強烈的工業廢墟感。這裡曾是《美國隊長》克里斯伊凡拍攝廣告的取景地。💡 達人提示：從彩色屋望向造船廠，能拍出「過去與現在」的對比感。',
                storyEn: 'Just a 3-min walk from the colored houses. The massive skeletal remains of the shipyard offer a stark industrial contrast. It was even a filming location for a Chris Evans commercial. 💡 Pro Tip: Capture the contrast between the decay of the shipyard and the vibrancy of the harbor.'
            }
        ],
        insiderTip: {
            teaser: '就在和平島公園附近，可以安排在同一個下午。',
            teaserEn: 'Near Heping Island; perfect for a combined afternoon trip.',
            full: {
                story: '這是一個非常純粹的拍照點。建議銜接後方的阿根納造船廠遺址，那種廢墟感與彩色屋的視覺對比非常強烈。',
                storyEn: 'Purely for photos. Pair it with the nearby Agenna Shipyard Ruins for a contrast between color and decay.',
                mustTry: '港邊咖啡 + 阿根納造船廠遺址',
                bestTime: '16:00'
            }
        }
    },
    {
        id: 'tw-t-a20',
        title: '陽明山二子坪步道',
        titleEn: 'Erziping Trail (Yangmingshan)',
        type: 'nature',
        duration: '2小時',
        image: '🌳',
        description: '全台灣最溫柔的無障礙步道。這裡海拔約 800 公尺，氣候涼爽，步道全程平坦無階梯。終點是一個宛如世外桃源的生態池，是陽明山最平易近人的秘境。',
        descriptionEn: 'The gentlest accessible trail in Taiwan. Flat, cool, and leading to a hidden eco-pond paradise at 800m elevation.',
        price: 0,
        address: '新北市三芝區 (陽明山國家公園)',
        rating: 4.8,
        lat: 25.1834,
        lng: 121.5245,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['無障礙', '避暑', '森林'],
        themeColor: '#38a169',
        teaser: '在最溫柔的步道上，聽見森林的心跳。',
        teaserEn: 'On the gentlest trail, hear the heartbeat of the forest.',
        expertStories: [
            {
                id: 'must-do',
                label: '【森呼吸】',
                labelEn: 'Forest Breath',
                summary: '無障礙的林間漫步',
                summaryEn: 'Accessible Forest Walk',
                story: '這是陽明山少數完全沒有樓梯的步道，推車或輪椅都能輕鬆通過。兩旁是茂密的闊葉林，即便夏天也非常涼爽。',
                storyEn: 'One of the few step-free trails in the park. Cool and shady even in the height of summer.'
            },
            {
                id: 'hidden',
                label: '【霧中仙境】',
                labelEn: 'Misty Pond',
                summary: '二子坪生態池',
                summaryEn: 'Erziping Eco-Pond',
                story: '步道終點是三座小池塘。午後山區常起霧，雲霧繚繞中的生態池非常有靈氣，是攝影師最愛的自然場景。',
                storyEn: 'The trail ends at three ponds. Afternoon mist often turns this area into a spiritual, ethereal landscape.'
            }
        ],
        insiderTip: {
            teaser: '這裡是陽明山躲避酷暑的最佳去處。',
            teaserEn: 'The best escape from Taipei\'s summer heat.',
            full: {
                story: '假日停車位極難求。強烈建議從捷運劍潭站搭乘「108 遊園公車」上山。在二子坪站下車，就是這趟森林之旅的起點。',
                storyEn: 'Weekend parking is impossible. Take the 108 Shuttle Bus from MRT Jiantan Station instead.',
                mustTry: '在生態池邊野餐 (記得帶走垃圾)',
                bestTime: '10:00'
            }
        }
    },
    {
        id: 'tw-t-a-101-alley',
        title: '松仁路 253 巷 (達人機位)',
        titleEn: 'Songren Rd Lane 253 (Photo Spot)',
        type: 'attraction',
        duration: '30分',
        image: '📸',
        description: '這不是一個景點，這是一個被攝影師視為「黃金機位」的普通巷弄。在這裡，你可以拍到台北 101 被兩旁老舊公寓框住的獨特視覺，體現台北新舊交織的震撼感。',
        descriptionEn: 'A normal alley hailed as a "Golden Spot" by photographers. Capture Taipei 101 framed by old apartments for a striking contrast.',
        price: 0,
        address: '台北市信義區松仁路253巷',
        rating: 4.7,
        lat: 25.0294,
        lng: 121.5685,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['攝影', '101視角', '新舊交織'],
        themeColor: '#718096',
        isPhotographySpot: true,
        photographyTips: {
            zh: '使用手機的 2x 或 3x 長焦鏡頭，站在巷口往 101 方向拍。長焦能產生「空間壓縮感」，讓 101 看起來就像緊貼在老房子後方一樣巨大。',
            en: 'Use 2x or 3x zoom from the alley entrance. The zoom compresses space, making 101 look massive right behind the old houses.'
        },
        teaser: '在老巷弄的盡頭，遇見直破天際的摩天奇蹟。',
        teaserEn: 'At the end of an old alley, meet the sky-piercing miracle.',
        expertStories: [
            {
                id: 'must-do',
                label: '【黃金機位】',
                labelEn: 'Golden Shot',
                summary: '台北最經典的城市構圖',
                summaryEn: 'Taipei\'s Iconic Composition',
                story: '這裡在 Instagram 上極度出名。建議傍晚來，當老房子的窗戶點亮，101 的藍調燈光亮起，那種視覺對比是台北最美的縮影。',
                storyEn: 'Extremely famous on IG. Visit at dusk when apartment lights match the 101\'s blue hour glow.'
            },
            {
                id: 'trap',
                label: '【禮儀提醒】',
                labelEn: 'Etiquette',
                summary: '保持安靜，不要阻礙交通',
                summaryEn: 'Be quiet, don\'t block traffic',
                story: '這是一個真實居住的社區。請在拍攝時保持安靜，且注意往來車輛，千萬不要為了拍照擋住巷道。',
                storyEn: 'This is a real residential neighborhood. Be quiet and mindful of cars; never block the road for a photo.'
            }
        ],
        insiderTip: {
            teaser: '這是台北最具「賽博龐克」感的角落。',
            teaserEn: 'Taipei\'s most "Cyberpunk" feeling corner.',
            full: {
                story: '推薦在「象山」行程前後順道造訪，步行約 10 分鐘即可到達。這是一個不用流汗就能拍出大片的神祕地點。',
                storyEn: 'Visit before or after your Elephant Mountain hike; it\'s just a 10-minute walk away.',
                mustTry: '利用手機的人像模式拍攝',
                bestTime: '17:30'
            }
        }
    },
    {
        id: 'tw-t-f-zhenfang',
        title: '真芳碳烤吐司 (大稻埕店)',
        titleEn: 'Zhenfang Toasted Sandwich',
        type: 'food',
        duration: '45分',
        image: '🍞',
        description: '被譽為台北必吃的「早餐界傳說」。真芳堅持使用炭火烘烤土司，每一口都能吃到淡淡的炭香。內餡的肉排手打入味，配上特製的花生醬，是老台北人與年輕一代都愛不釋手的經典。',
        descriptionEn: 'The "Legend of Taipei Breakfast." Zhenfang insists on charcoal-toasting every sandwich, delivering a subtle smoky aroma. Hand-pounded pork patties and signature peanut sauce create a timeless flavor.',
        price: 120,
        address: '台北市大同區民生西路198-5號',
        rating: 4.7,
        lat: 25.0569,
        lng: 121.5142,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '06:30-13:30',
        tags: ['必吃', '炭烤', '排隊美食'],
        themeColor: '#b86818',
        teaser: '台北早餐傳說，那一抹炭香是早晨最美的溫柔。',
        teaserEn: 'A Taipei breakfast legend; that touch of charcoal is morning\'s finest grace.',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-eat',
                label: '經典必點',
                labelEn: 'Signature',
                summary: '真芳三明治 + 紅茶牛奶',
                summaryEn: 'Signature Sandwich & Black Tea Milk',
                story: '真芳三明治有著豐富的層次，肉排、蛋與馬鈴薯泥完美契合。搭配那一瓶古早味包裝的紅茶牛奶，就是最有溫度的台式早餐組合。',
                storyEn: 'The signature sandwich layers pork, egg, and potato salad perfectly. Pair it with their classic black tea milk for the ultimate Taiwanese morning vibe.'
            }
        ]
    },
    {
        id: 'tw-t-a-kuobook',
        title: '郭怡美書店 (Kuo\'s Bookstore)',
        titleEn: 'Kuo\'s Bookstore',
        type: 'attraction',
        duration: '1小時',
        image: '📚',
        description: '大稻埕最具代表性的獨立書店。位於歷史悠久的郭怡美商行原址，這棟建築本身就是一座活生生的博物館。穿梭在挑高的書架與紅磚牆間，你能感受到百年前大稻埕的繁華與文氣。',
        descriptionEn: 'The most iconic independent bookstore in Dadaocheng. Located in the historic Kuo-I-Mei Trading Co., the building itself is a living museum of early 20th-century Taipei commerce.',
        price: 0,
        address: '台北市大同區迪化街一段129號',
        rating: 4.9,
        lat: 25.0578,
        lng: 121.5105,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '10:00-19:00',
        tags: ['古蹟', '書店', '攝影'],
        themeColor: '#7d3a22',
        teaser: '迪化街最美的天井書店，走進書香與歷史的深處。',
        teaserEn: 'The most beautiful courtyard bookstore on Dihua Street.',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '攝影視角',
                labelEn: 'Photo Spot',
                summary: '二樓天井的俯視美學',
                summaryEn: 'Overlooking the Courtyard',
                story: '書店最美的地方在於其保存完整的天井結構。爬上二樓，從圍欄處往下拍，可以捕捉到陽光灑進書海與古建築間的絕美層次。',
                storyEn: 'The bookstore\'s soul lies in its preserved courtyard. Head to the 2F railing to capture the sunlight filtering through books and historic architecture.'
            }
        ]
    },
    {
        id: 'tw-t-a-yongkang',
        title: '永康街 (文青散策)',
        titleEn: 'Yongkang Street',
        type: 'attraction',
        duration: '2小時',
        image: '☕',
        description: '台北最具文藝氣息的街區。這裡不僅是鼎泰豐與芒果冰的發源地，更隱藏著無數精品咖啡、老派茶館與特色選物店。它是台北人慢活生活的縮影。',
        descriptionEn: 'Taipei\'s most artistic neighborhood. Beyond Din Tai Fung and mango ice, it\'s home to boutique cafes, old-school teahouses, and curated boutiques.',
        price: 0,
        address: '台北市大安區永康街',
        rating: 4.8,
        lat: 25.0315,
        lng: 121.5302,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['文青', '散策', '美食'],
        themeColor: '#4a7c59',
        teaser: '巷弄裡的慢活台北，遇見最溫潤的城市光影。',
        teaserEn: 'Slow-living Taipei in the alleys; meet the city\'s gentlest light.',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '巷弄驚喜',
                labelEn: 'Alley Gems',
                summary: '不要只走主幹道',
                summaryEn: 'Explore the Side Streets',
                story: '永康街的靈魂藏在青田街的方向。那些老宅改建的茶室與綠意盎然的小徑，才是台北文青真正的聚集地。',
                storyEn: 'The soul of Yongkang hides in the direction of Qingtian St. Those converted teahouses and green paths are where the true Taipei vibe lives.'
            }
        ]
    },
    {
        id: 'tw-t-f-fengsheng',
        title: '東門豐盛食堂',
        titleEn: 'Fengsheng Canteen',
        type: 'food',
        duration: '1.5小時',
        image: '🥘',
        description: '東門市場旁深耕多年的經典台菜。堅持使用在地食材，將傳統辦桌菜精緻化。其白斬雞、菜脯蛋等家常味，卻有著讓人驚艷的深度，是品味「台味靈魂」的最佳場所。',
        descriptionEn: 'A legendary Taiwanese restaurant near Dongmen Market. It elevates traditional home-style cooking to a fine art, using local ingredients to deliver profound depth in classic dishes like poached chicken.',
        price: 500,
        address: '台北市大安區麗水街1-3號',
        rating: 4.7,
        lat: 25.0322,
        lng: 121.5305,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '11:30-14:00, 17:00-21:00',
        tags: ['台菜', '老字號', '必吃'],
        themeColor: '#7d2222',
        teaser: '東門巷弄裡的台味傳奇，品味最有溫度的家常。',
        teaserEn: 'A Taiwanese culinary legend in the Dongmen alleys.',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-eat',
                label: '必點推薦',
                labelEn: 'Must Eat',
                summary: '招牌白斬雞與農家小炒',
                summaryEn: 'Poached Chicken & Farmhouse Stir-fry',
                story: '豐盛食堂的白斬雞肉質 Q 彈，沾上辣椒醬油簡直絕配。這裡沒有華麗的裝潢，只有最踏實的美味。',
                storyEn: 'Their poached chicken is incredibly tender and pairs perfectly with chili soy sauce. No frills, just honest, deep flavor.'
            }
        ]
    },
    {
        id: 'tw-t-f-silks',
        title: '故宮晶華 (Silks Palace)',
        titleEn: 'Silks Palace at National Palace Museum',
        type: 'food',
        duration: '1.5小時',
        image: '🥟',
        description: '位於故宮博物院旁的頂級粵式料理。建築由大師設計，內部裝潢融合了故宮文物的意象。其著名的「國寶宴」將翠玉白菜、肉形石等文物化為精緻點心，是視覺與味覺的雙重盛宴。',
        descriptionEn: 'Premium Cantonese dining right at the National Palace Museum. The architecture mirrors historic artifacts, and its famous "National Treasure Feast" recreates iconic museum pieces as edible art.',
        price: 800,
        address: '台北市士林區至善路二段221號',
        rating: 4.6,
        lat: 25.1015,
        lng: 121.5485,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '11:00-14:30, 17:30-21:00',
        tags: ['粵菜', '精緻', '文化'],
        themeColor: '#7d3a22',
        teaser: '故宮旁的國寶級饗宴，品味文物的美味靈魂。',
        teaserEn: 'A national treasure feast; taste the edible soul of historic artifacts.',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-eat',
                label: '國寶必點',
                labelEn: 'Treasures',
                summary: '翠玉白菜與肉形石點心',
                summaryEn: 'Jadeite Cabbage & Meat-Shaped Stone',
                story: '如果你不想吃正式大餐，二樓也有精緻的港式點心。必點那份縮小版的「翠玉白菜」，手工極其細膩，絕對是朋友圈最亮眼的亮點。',
                storyEn: 'If you skip the full feast, try the dim sum on 2F. The miniature "Jadeite Cabbage" is a masterpiece of culinary art—perfect for your social feed.'
            },
            {
                id: 'hidden',
                label: '隱藏菜單',
                labelEn: 'Hidden Menu',
                summary: '多寶閣甜點組',
                summaryEn: 'Curio Box Dessert Set',
                story: '這組甜點仿照乾隆皇帝的「多寶閣」設計，一次可以吃到七種縮小版的經典中式甜點。除了好拍，每一款的味道層次都很分明，是下午茶的最佳選擇。',
                storyEn: 'Modeled after Emperor Qianlong\'s "Curio Box," this set features seven miniature Chinese desserts. It\'s both visually stunning and a delight for the palate.'
            }
        ],
        insiderTip: {
            teaser: '窗邊位可以遠眺故宮外觀，記得提早訂位。',
            teaserEn: 'Window seats offer views of the museum; book early.',
            full: {
                story: '在這裡用餐，感覺就像是把故宮的文物吃進肚子裡。餐廳的窗戶格柵與內裝都非常有設計感，是台北少數能將「文化」轉化為「美味」的旗艦餐廳。',
                storyEn: 'Dining here feels like consuming culture itself. The interior design and window lattices create a unique atmosphere where history meets gastronomy.',
                bestTime: '12:00'
            }
        }
    },
    {
        id: 'tw-t-a-grandhotel',
        title: '圓山大飯店 (Grand Hotel Taipei)',
        titleEn: 'Grand Hotel Taipei',
        type: 'attraction',
        duration: '1.5小時',
        image: '🏰',
        description: '台北最具傳奇色彩的地標，紅柱金瓦的宮殿式建築巍峨壯麗。它曾是接待各國元首的國賓館，內部隱藏著神秘的「密道」，是見證台灣近代外交史的重要場所。',
        descriptionEn: 'Taipei\'s most legendary landmark. A majestic palace-style building that has hosted world leaders. Explore its secret tunnels and witness the grandeur of Taiwanese diplomatic history.',
        price: 0,
        address: '台北市中山區中山北路四段1號',
        rating: 4.7,
        lat: 25.0802,
        lng: 121.5262,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['地標', '歷史', '宮殿'],
        themeColor: '#b91c1c',
        teaser: '紅柱金瓦的皇宮傳奇，探索隱藏的時光密道。',
        teaserEn: 'A palace legend of red columns and golden tiles; explore hidden history.',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '密道探險',
                labelEn: 'Secret Tunnel',
                summary: '西密道導覽 (10:00 / 14:30 / 15:30)',
                summaryEn: 'West Tunnel Tour (10:00 / 14:30 / 15:30)',
                story: '圓山最精彩的是西密道導覽。費用為成人 NT$250，包含專業導覽與紀念品。這條密道擁有世界最長的室內溜滑梯（僅供觀賞拍照），是見證冷戰時期元首避難歷史的最佳現場。',
                storyEn: 'The highlight is the West Tunnel tour. Price: NT$250. It features the world\'s longest indoor slide (viewing only), a relic of Cold War history.'
            },
            {
                id: 'must-do',
                label: '預約撇步',
                labelEn: 'Booking Info',
                summary: '必看：線上預約 (需提早 14-30 天)',
                summaryEn: 'MUST: Online Booking (14-30 Days Early)',
                story: '密道導覽極熱門，強烈建議提前 14-30 天透過 inline 系統預約。現場報名幾乎都是客滿。預約成功後，請於導覽前 15 分鐘至飯店 B1 導覽櫃檯報到。',
                storyEn: 'Tours sell out fast. Book 14-30 days ahead via inline. Walk-ins are rarely available. Check in at B1 desk 15 mins early.'
            },
            {
                id: 'must-eat',
                label: '圓山紅豆鬆糕',
                labelEn: 'Red Bean Cake',
                summary: '蔣夫人的私人味蕾',
                summaryEn: 'Madam Chiang\'s Palate',
                story: '這是當年宋美齡女士最愛的甜點，口感綿密且不甜膩。去圓苑餐廳點一份熱騰騰的鬆糕，配上一壺烏龍茶，才是真正的宮廷享受。',
                storyEn: 'Madam Chiang’s favorite. Order fresh cake at Yuan Yuan restaurant with Oolong tea for the authentic royal experience.'
            },
            {
                id: 'hidden',
                label: '貨布鑰匙牆',
                labelEn: 'Huo Bu Keys',
                summary: '銅幣上的開運守護',
                summaryEn: 'The Coin Wall',
                story: '在大廳一角有一面由「貨布」鑰匙組成的牆，這在開幕當初是客房鑰匙。貨布造型像大鐘，象徵財源滾滾。現在這面牆是攝影聖地，找找看有沒有你的生日房號。',
                storyEn: 'Look for the "Huo Bu" key wall—original room keys shaped like ancient coins. Find your "birthday" room number for a lucky shot.'
            },
            {
                id: 'hidden',
                label: '攝影撇步',
                labelEn: 'Photo Hack',
                summary: '大廳紅柱與後山全景',
                summaryEn: 'Red Columns & Panorama',
                story: '站在大廳正中央，利用超廣角鏡頭往上拍藻井；或沿著飯店後山小徑走，可以拍到圓山飯店氣勢磅礡的宮殿全景。',
                storyEn: 'Shoot the lobby ceiling with a wide lens, or follow the back trails for a panoramic view of the palace.'
            },
            {
                id: 'trap',
                label: '服裝禮儀',
                labelEn: 'Dress Code',
                summary: '服裝與自信的博弈',
                summaryEn: 'Dress code confidence',
                story: '圓山大廳非常莊重。穿著整齊會讓你更有自信地穿梭在那些紅色圓柱之間，並拍出更有質感的照片。',
                storyEn: 'The lobby is formal. Dress sharp to match the grand red pillars; your photos and confidence will thank you.'
            }
        ],
        insiderTip: {
            teaser: '導覽費用含紀念品。飯店提供往返捷運站的免費接駁車。',
            teaserEn: 'Fee includes souvenir. Free shuttle available to/from MRT stations.',
            full: {
                story: '建議預約下午 14:30 場次。飯店接駁車約每 20-30 分鐘一班，分別往返捷運圓山站與劍潭站。',
                storyEn: 'Book the 2:30 PM slot. Shuttle runs every 20-30 mins to MRT Yuanshan/Jiantan.',
                bestTime: '14:30'
            }
        }
    },
    {
        id: 'tw-t-a-cks',
        title: '中正紀念堂',
        titleEn: 'Chiang Kai-shek Memorial Hall',
        type: 'attraction',
        duration: '1.5小時',
        image: '🏛️',
        description: '台北最具宏偉氣勢的歷史地標。白牆藍瓦的八角形建築象徵著自由與平等。除了參觀壯觀的大廳與蔣公銅像，每整點一次的儀隊交接儀式更是國內外遊客必看的亮點。',
        descriptionEn: 'Taipei\'s most grand historical landmark. The white walls and blue-tiled octagonal roof symbolize freedom and equality. The hourly guard change ceremony is an essential spectacle for all visitors.',
        price: 0,
        address: '台北市中正區中山南路21號',
        rating: 4.8,
        lat: 25.0346,
        lng: 121.5218,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '09:00-18:00',
        tags: ['地標', '歷史', '必訪'],
        themeColor: '#1e40af',
        teaser: '白牆藍瓦的莊嚴美學，見證台北的歷史轉角。',
        teaserEn: 'The majestic blue and white aesthetics of Taipei\'s history.',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '儀隊交接',
                labelEn: 'Guard Change',
                summary: '每整點一次的莊嚴儀式',
                summaryEn: 'Hourly Guard Change',
                story: '如果你是在整點抵達，請直接前往四樓大廳。儀隊的步伐聲在挑高的空間中迴盪，那種莊嚴感會讓你屏氣凝神。',
                storyEn: 'If you arrive on the hour, head straight to the 4F hall. The echoing footsteps of the guards in the high-ceilinged space are truly mesmerizing.'
            },
            {
                id: 'hidden',
                label: '長廊美學',
                labelEn: 'Colonnade Hack',
                summary: '利用迴廊拍出深度感',
                summaryEn: 'Framed Corridor Shots',
                story: '不要只拍主建築！兩側延伸的白色迴廊是極佳的構圖工具。利用迴廊的透視感作為前景，能拍出極具大氣感的 101 或主建築照片。',
                storyEn: 'Don\'t just shoot the main hall. The long white colonnades on either side offer incredible perspective. Use them as a frame to capture grand shots of the building or even 101 in the distance.'
            },
            {
                id: 'must-do',
                label: '餵魚秘境',
                labelEn: 'Fish Feeding',
                summary: '雲漢池與光華池',
                summaryEn: 'Yunhan & Guanghua Ponds',
                story: '逛累了？主建築兩側的「雲漢池」與「光華池」是台北人的城市綠洲。這裡有巨大的錦鯉和不怕人的夜鷺，在旁邊買份魚飼料，這是最接地氣的台北日常。',
                storyEn: 'Exhausted? The Yunhan and Guanghua ponds are local oases. Buy some fish food and watch the massive koi and herons; it\'s a quintessential Taipei childhood memory.'
            },
            {
                id: 'hidden',
                label: '倒影美學',
                labelEn: 'Reflection',
                summary: '自由廣場的完美對稱',
                summaryEn: 'Symmetry at Freedom Plaza',
                story: '如果剛下過雨，記得走到自由廣場牌樓下。利用地面的積水拍出大門與主建築的對比倒影，這是攝影愛好者最愛的「天空之鏡」。',
                storyEn: 'After rain, head to the Freedom Plaza archway. Use puddles to capture perfectly symmetrical reflections of the gates and hall—a local "Mirror of the Sky".'
            }
        ],
        insiderTip: {
            teaser: '避開團客，從側面的「大忠門」或「大孝門」進入更輕鬆。',
            teaserEn: 'Enter through the side gates to avoid major tour groups.',
            full: {
                story: '如果你想看更在地的生活，建議清晨 6-7 點來，你會看到在迴廊下跳土風舞、練太極的台北阿公阿嬤，那是這座紀念堂最生動的靈魂。',
                storyEn: 'For the most authentic vibe, visit at 6-7 AM. You\'ll see seniors practicing Tai Chi or folk dancing under the corridors—it\'s the true soul of the memorial.',
                bestTime: '17:00'
            }
        }
    },
    {
        id: 'tw-t-a-npm',
        title: '國立故宮博物院',
        titleEn: 'National Palace Museum',
        type: 'attraction',
        duration: '3小時',
        image: '🏛️',
        description: '收藏中華文化精華的世界級博物館。擁有超過 69 萬件跨越五千年的珍貴文物，其中「翠玉白菜」與「肉形石」是必看的明星展品。這是一場穿越時空的藝術文化之旅。',
        descriptionEn: 'A world-class museum housing the essence of Chinese culture. With over 690,000 artifacts spanning 5,000 years, the "Jadeite Cabbage" and "Meat-Shaped Stone" are absolute must-sees.',
        price: 350,
        address: '台北市士林區至善路二段221號',
        rating: 4.8,
        lat: 25.1022,
        lng: 121.5485,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '09:00-17:00',
        tags: ['博物館', '歷史', '世界級'],
        themeColor: '#4c3a2b',
        teaser: '五千年中華文明縮影，親眼見證國寶奇蹟。',
        teaserEn: '5,000 years of civilization; witness the miracles of national treasures.',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '國寶動線',
                labelEn: 'Artifact Path',
                summary: '直奔三樓看白菜與肉形石',
                summaryEn: 'Straight to 3F for the Icons',
                story: '如果你的時間有限，進館後請直接搭電梯到三樓。那裡有最著名的翠玉白菜與肉形石，早點到可以避開大批團客，享受安靜的觀賞時光。',
                storyEn: 'If short on time, head straight to 3F for the Jadeite Cabbage and Meat-Shaped Stone. Arriving early helps you dodge tour groups and enjoy the art in peace.'
            },
            {
                id: 'must-do',
                label: '深度體驗',
                labelEn: 'Audio Guide',
                summary: '必租語音導覽',
                summaryEn: 'Rent the Audio Guide',
                story: '故宮的文物背後都有極深的故事。強烈建議花點小錢租借導覽機，否則你只是在看石頭與瓶子，有了導覽，這些文物才會在你面前「活」過來。',
                storyEn: 'Every artifact has a deep history. Rent the audio guide; without it, you\'re just looking at stones. With it, the history comes alive.'
            }
        ]
    },
    {
        id: 'tw-t-f-shilin',
        title: '士林夜市 (旗艦美食版)',
        titleEn: 'Shilin Night Market (Flagship)',
        type: 'food',
        duration: '2.5小時',
        image: '🏮',
        description: '台北最大且最具知名度的夜市。從地下的美食街到地上縱橫交錯的巷弄，這裡匯集了台灣小吃的精華。大雞排、生炒花枝、藥燉排骨，每一口都是台灣夜生活的熱鬧縮影。',
        descriptionEn: 'The largest and most famous night market in Taipei. From underground food courts to vibrant alleys, it\'s the pinnacle of Taiwanese street food culture.',
        price: 300,
        address: '台北市士林區基河路101號',
        rating: 4.5,
        lat: 25.0878,
        lng: 121.5245,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '16:00-00:00',
        tags: ['地標', '必吃', '夜生活'],
        themeColor: '#e11d48',
        teaser: '台北夜市的代名詞，體驗永不落幕的小吃盛宴。',
        teaserEn: 'The quintessential Taipei night market; an endless feast of street food.',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃三寶',
                labelEn: 'Must Eats',
                summary: '大雞排、生炒花枝、藥燉排骨',
                summaryEn: 'Chicken Cutlet & Squid Soup',
                story: '雖然攤位很多，但「豪大大雞排」與地下街的「生炒花枝」依然是首訪者的經典。建議幾個人分食，才能留點肚子給後面的藥燉排骨。',
                storyEn: 'The massive chicken cutlet and underground stir-fried squid are classics. Share with friends to save room for the herbal ribs later.'
            },
            {
                id: 'hidden',
                label: '攝影位置',
                labelEn: 'Photo Spot',
                summary: '慈諴宮前的燈籠海',
                summaryEn: 'Lanterns at Cixian Temple',
                story: '士林夜市不只有食物！走到夜市中心的「慈諴宮」，廟前的紅燈籠海配上傳統建築，是捕捉台北庶民信仰與夜生活交織的最佳背景。',
                storyEn: 'Beyond food, find Cixian Temple at the market\'s heart. The sea of red lanterns against the traditional temple is the best backdrop for Taipei nightlife.'
            },
            {
                id: 'trap',
                label: '水果誤區',
                labelEn: 'Fruit Trap',
                summary: '避開標價不明的切裝水果',
                summaryEn: 'Avoid Unpriced Cut Fruits',
                story: '這是在士林夜市最重要的達人建議：絕對不要去買標價不明、以兩計價的現切水果攤。這會讓你的荷包意外失血。想吃水果，去便利商店或有明確標價的攤位。',
                storyEn: 'The golden rule: Never buy cut fruit from stalls with unclear pricing or those weighing by taels. It\'s a common tourist trap. Stick to clear prices.'
            }
        ]
    },
    {
        id: 'tw-t-f-raohe',
        title: '饒河街觀光夜市',
        titleEn: 'Raohe Night Market',
        type: 'food',
        duration: '2小時',
        image: '🥟',
        description: '台北最古老的夜市之一，以壯觀的牌樓與「胡椒餅」聞名。一條筆直的街道極好逛，兩側充滿了各式創意與傳統美食，是許多台北人心目中的夜市 No.1。',
        descriptionEn: 'One of Taipei\'s oldest night markets, famous for its grand archway and legendary pepper buns. A single straight street makes it easy to explore.',
        price: 250,
        address: '台北市松山區饒河街',
        rating: 4.7,
        lat: 25.0505,
        lng: 121.5775,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '17:00-00:00',
        tags: ['老字號', '必吃', '攝影'],
        themeColor: '#7c2d12',
        teaser: '穿越紅磚牌樓，品味那一顆爆汁的胡椒餅。',
        teaserEn: 'Enter the grand archway for the city\'s best juicy pepper buns.',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-eat',
                label: '排隊之王',
                labelEn: 'The Icon',
                summary: '福州世祖胡椒餅',
                summaryEn: 'Fuzhou Ancestor Pepper Bun',
                story: '就在饒河街入口（靠近慈祐宮那側），人潮最洶湧的地方。炭火現烤、肉香濃郁且蔥香十足，雖然要排隊，但第一口咬下的震撼感絕對值得。',
                storyEn: 'Right at the temple entrance. Charcoal-fired, meaty, and aromatic. The first bite is worth the wait.'
            },
            {
                id: 'must-eat',
                label: '米其林推薦',
                labelEn: 'Michelin Tip',
                summary: '陳董藥燉排骨',
                summaryEn: 'Chen Dong Herbal Ribs',
                story: '米其林必比登連續多年推薦。湯頭清甜不油膩，排骨燉到輕輕一撥就骨肉分離。尤其在冬天的夜晚，喝上一碗真的會從肚子暖到心裡。',
                storyEn: 'Michelin Bib Gourmand choice. The herbal broth is sweet and clean; ribs are fall-off-the-bone tender. A heart-warming classic.'
            },
            {
                id: 'hidden',
                label: '百年老字號',
                labelEn: 'Centennial Shop',
                summary: '東發號油飯與麵線',
                summaryEn: 'Dong Fa Hao Oil Rice',
                story: '這間店隱藏在市場中段的小巷內。不同於一般的勾芡麵線，這裡的麵線清甜爽口。配上一碗古早味油飯，是在地人才懂的吃法。',
                storyEn: 'Hidden in a mid-section alley. Unlike thick starchy noodles, their broth is clear and refreshing. Pair with oil rice for a local feast.'
            },
            {
                id: 'hidden',
                label: '攝影撇步',
                labelEn: 'Photo Hack',
                summary: '松山慈祐宮與牌樓',
                summaryEn: 'Ciyou Temple & Archway',
                story: '夜市入口旁的「松山慈祐宮」在夜晚燈火通明，氣勢非凡。站在夜市牌樓下，利用廟宇作為背景，可以拍出極具「賽博龐克」感的台灣夜色。',
                storyEn: 'The illuminated Ciyou Temple next to the entrance is magnificent. Use it as a backdrop from under the night market archway for a "Cyberpunk Taiwan" shot.'
            }
        ],
        insiderTip: {
            teaser: '從慈祐宮這頭進場，吃完剛好去彩虹橋吹風散步。',
            teaserEn: 'Enter from the temple side; finish at Rainbow Bridge.',
            full: {
                story: '饒河街只有一條路，來回走一圈剛好。吃飽後，記得從夜市中段的巷子穿出去，就是著名的「彩虹橋」。在那裡可以吹著河風、看著麥帥橋的夜景，是消化美食的最佳行程。',
                storyEn: 'It\'s a single straight street. After eating, slip through a mid-market alley to reach "Rainbow Bridge" for a riverside breeze and city night views.',
                bestTime: '19:30',
                mustTry: '胡椒餅 + 藥燉排骨'
            }
        }
    },
    {
        id: 'tw-t-f-chendong',
        title: '陳董藥燉排骨',
        titleEn: 'Chen Dong Herbal Ribs',
        type: 'food',
        duration: '45分鐘',
        image: '🥣',
        description: '饒河街最具代表性的米其林必比登美食。湯頭清甜、中藥味溫潤不苦，排骨燉得極其軟嫩。配上一碗魯肉飯，是台北人最完美的宵夜組合。',
        descriptionEn: 'The iconic Michelin Bib Gourmand choice in Raohe. The herbal broth is sweet and mild; ribs are fall-off-the-bone tender. Perfect with a bowl of braised pork rice.',
        price: 150,
        address: '台北市松山區饒河街160號',
        rating: 4.6,
        michelinRating: 'bib-gourmand',
        michelinYears: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
        lat: 25.0508,
        lng: 121.5768,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '16:30-00:30',
        tags: ['必比登', '排隊美食', '溫補'],
        themeColor: '#7c2d12',
        teaser: '米其林必比登連年推薦，暖到心底的藥燉湯頭。',
        teaserEn: 'Consecutive Michelin Bib Gourmand winner; a heart-warming herbal classic.',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800',
        expertNote: '一定要蘸他們家特製的豆瓣醬，排骨的味道會提升到另一個層次！',
        expertNoteEn: 'You must dip the ribs in their special spicy bean sauce; it elevates the flavor to another level!',
        proTip: '如果是冬天晚上來，建議外帶到旁邊的彩虹橋坐著吃，避開排隊人潮且風景更佳。',
        proTipEn: 'On winter nights, consider takeout and eating by Rainbow Bridge to skip the lines and enjoy the view.'
    },
    {
        id: 'tw-t-f-fuzhou-bun',
        title: '福州世祖胡椒餅',
        titleEn: 'Fuzhou Ancestor Pepper Bun',
        type: 'food',
        duration: '20分鐘',
        image: '🥟',
        description: '饒河夜市入口處的排隊之王。堅持炭火現烤，外皮焦香酥脆，內餡是厚實的豬肉與大量蔥花，咬下去滿是肉汁與辛香。',
        descriptionEn: 'The king of Raohe Night Market entrance. Charcoal-fired buns with a crispy crust and juicy, peppery pork filling.',
        price: 60,
        address: '台北市松山區饒河街249號',
        rating: 4.5,
        michelinRating: 'bib-gourmand',
        michelinYears: [2018, 2019, 2020, 2021],
        lat: 25.0503,
        lng: 121.5776,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '15:30-00:00',
        tags: ['必比登', '街頭小吃', '炭烤'],
        themeColor: '#b45309',
        teaser: '入口即見的炭火香氣，台北胡椒餅的黃金標準。',
        teaserEn: 'The gold standard of Taipei pepper buns; follow the charcoal aroma at the entrance.',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'tw-t-f-aguo-lamb',
        title: '阿國羊肉',
        titleEn: 'A-Guo Lamb Soup',
        type: 'food',
        duration: '40分鐘',
        image: '🍜',
        description: '以清燉羊肉湯聞名，沒有羊羶味，只有羊肉的鮮甜。米其林必比登推薦，湯頭透徹、肉質細嫩，是老饕的隱藏清單。',
        descriptionEn: 'Famous for clear lamb soup with no gaminess. Michelin Bib Gourmand choice; clean broth and tender meat for true foodies.',
        price: 200,
        address: '台北市松山區饒河街',
        rating: 4.4,
        michelinRating: 'bib-gourmand',
        michelinYears: [2020, 2021, 2022, 2023, 2024],
        lat: 25.0506,
        lng: 121.5760,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '17:00-00:00',
        tags: ['必比登', '清燉', '老饕推薦'],
        themeColor: '#4d7c0f',
        teaser: '一碗清甜羊肉湯，台北夜市裡的純粹鮮美。',
        teaserEn: 'A bowl of pure, sweet lamb soup in the heart of the night market.',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'tw-t-a-beitou',
        title: '北投溫泉博物館',
        titleEn: 'Beitou Hot Spring Museum',
        type: 'attraction',
        duration: '1.5小時',
        image: '♨️',
        description: '這座英國鄉村別墅風格的紅磚建築，曾是東亞最大的公共浴場。現在它訴說著北投溫泉的興衰，保留了優雅的大浴池與榻榻米大廳，是感受日治時期溫泉文化的最佳去處。',
        descriptionEn: 'A British country house-style red brick building that was once East Asia\'s largest public bathhouse. Now a museum documenting Beitou\'s spa history.',
        price: 0,
        address: '台北市北投區中山路2號',
        rating: 4.7,
        lat: 25.1365,
        lng: 121.5062,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '09:00-17:00 (週一休)',
        tags: ['歷史', '溫泉', '古蹟'],
        themeColor: '#b91c1c',
        teaser: '走進紅磚大浴場，回望北投溫泉的百年時光。',
        teaserEn: 'Enter the grand red-brick bathhouse; witness a century of Beitou history.',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '羅馬浴場',
                labelEn: 'Roman Bath',
                summary: '大浴池的彩色玻璃與拱柱',
                summaryEn: 'Stained Glass & Arches',
                story: '博物館最美的地方在於底樓的大浴池。雖然現在不能泡，但陽光穿過彩色玻璃灑在拱柱間的畫面，非常有異國情調。',
                storyEn: 'The highlight is the 1F grand bath. Though you can\'t soak now, the sunlight through stained glass onto the arches is pure magic.'
            }
        ]
    },
    {
        id: 'tw-t-f-beitou-mkt',
        title: '北投市場在地美食',
        titleEn: 'Beitou Market Local Food',
        type: 'food',
        duration: '1.5小時',
        image: '🍚',
        description: '這不是觀光客的拉麵店，而是北投人真正的廚房。市場二樓隱藏著被 CNN 譽為台灣最好吃的滷肉飯之一，以及清涼解膩的百年茶攤。在這裡用餐，能感受到最樸實的北投人情味。',
        descriptionEn: 'The true kitchen of Beitou locals. Hidden on the 2F is one of Taiwan\'s best braised pork rice bowls and century-old herbal tea stalls.',
        price: 150,
        address: '台北市北投區新市街30號',
        rating: 4.7,
        lat: 25.1322,
        lng: 121.5015,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '06:00-14:00 (週一休)',
        tags: ['在地人推薦', '平民美食', '老字號'],
        themeColor: '#92400e',
        teaser: '走進北投人的廚房，品嚐 CNN 推薦的靈魂滷肉飯。',
        teaserEn: 'Enter Beitou\'s kitchen; taste the soulful braised pork rice.',
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃雙寶',
                labelEn: 'Must Eats',
                summary: '矮仔財滷肉飯 + 蔡元益紅茶',
                summaryEn: 'Braised Pork Rice & Herbal Tea',
                story: '矮仔財的滷肉色澤深沉、入口即化，配上一杯蔡元益的古早味紅茶，是北投最完美的午餐組合。記得避開中午 12 點的高峰，否則排隊會讓你懷疑人生。',
                storyEn: 'Deep-colored, melt-in-your-mouth pork rice paired with traditional black tea. Avoid the 12 PM rush at all costs.'
            }
        ]
    },
    {
        id: 'tw-t-a-tamsui',
        title: '淡水老街與夕陽 (含重建街)',
        titleEn: 'Tamsui Old St & Sunset',
        type: 'attraction',
        duration: '3小時',
        image: '⛵',
        description: '淡水河口的經典散步路線。除了熱鬧的碼頭，我們特別帶你深入「重建街」與「戀愛巷」，感受老淡水的山城韻味。這裡是全台北看日落最美的地方。',
        descriptionEn: 'The classic Tamsui walk. Beyond the pier, we take you to Reconstruction St and Love Alley for a hill-town vibe. Best sunset in Taipei.',
        price: 0,
        address: '新北市淡水區中正路',
        rating: 4.6,
        lat: 25.1705,
        lng: 121.4415,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['散策', '夕陽', '浪漫'],
        themeColor: '#0369a1',
        teaser: '漫步重建街戀愛巷，捕捉淡水最溫柔的日落光影。',
        teaserEn: 'Walk through Love Alley; capture Tamsui\'s gentlest sunset.',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '老街秘境',
                labelEn: 'Hidden St',
                summary: '重建街與戀愛巷',
                summaryEn: 'Reconstruction St & Love Alley',
                story: '避開中正路的人潮，往山坡上的「重建街」走。這裡保留了清代以來的石階路，轉角處的「戀愛巷」是文青攝影師的最愛，也是最能拍出「淡水小九份」感覺的地方。',
                storyEn: 'Skip the crowds on Zhongzheng Rd. Head up to Reconstruction St. Its stone steps and "Love Alley" offer a "Mini Jiufen" vibe perfect for photography.'
            },
            {
                id: 'must-do',
                label: '渡輪視角',
                labelEn: 'Ferry View',
                summary: '搭船前往漁人碼頭',
                summaryEn: 'Boat to Fisherman\'s Wharf',
                story: '不要只是走路。買張船票（約 NT$60）搭到漁人碼頭，在船上回頭看淡水小鎮，那種視野是走路絕對體驗不到的浪漫。',
                storyEn: 'Don\'t just walk. Hop on a ferry (~$60) to Fisherman\'s Wharf. The view of the town from the water is a unique, romantic perspective.'
            }
        ]
    },
    {
        id: 'tw-t-f-xianghe',
        title: '祥和蔬食 (鎮江店)',
        titleEn: 'Xiang He Vegetarian',
        type: 'food',
        duration: '1.5小時',
        image: '🥬',
        description: '全台首家榮獲米其林必比登推薦的川式素食餐廳。顛覆傳統素食印象，將川菜的「麻、辣、鮮、香」發揮到極致。即使是不吃素的朋友，也會被這裡的塔香脆腸與酸菜魚（素）深深吸引。',
        descriptionEn: 'The first vegetarian Szechuan restaurant in Taiwan to receive a Michelin Bib Gourmand. It redefines vegetarian food with bold "numbing, spicy, fresh, and aromatic" flavors.',
        price: 600,
        address: '台北市中正區鎮江街1巷1號',
        rating: 4.7,
        michelinRating: 'bib-gourmand',
        michelinYears: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
        isVegetarianFriendly: true,
        dietaryOptions: ['vegetarian', 'vegan'],
        lat: 25.0445,
        lng: 121.5230,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '11:00-14:00, 17:00-21:00',
        tags: ['必比登', '川式素食', '家庭聚餐'],
        themeColor: '#16a34a',
        teaser: '顛覆想像的川式蔬食，米其林必比登連續八年推薦。',
        teaserEn: 'Revolutionary Szechuan vegetarian food; 8-year Michelin Bib Gourmand winner.',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800',
        expertNote: '他們的「松露炒飯」與「塔香脆腸」是每桌必點的夢幻逸品，建議提前兩週預訂。',
        expertNoteEn: 'The "Truffle Fried Rice" and "Basil Crispy Intestine" (vegan) are legendary. Book at least 2 weeks in advance.'
    },
    {
        id: 'tw-t-f-yupinyuan',
        title: '御品元冰火湯圓 (饒河店)',
        titleEn: 'Yu Pin Yuan Iced and Hot Tangyuan',
        type: 'food',
        duration: '30分鐘',
        image: '🍧',
        description: '榮獲米其林入選推薦的創意甜點。熱騰騰的現包手工湯圓放在綿密的清冰上，淋上特製的桂花蜜，這就是著名的「冰火五重天」。湯圓皮 Q 軟、內餡濃郁，是饒河夜市最受歡迎的結尾。',
        descriptionEn: 'A Michelin Selected creative dessert. Hot handmade dumplings served on shaved ice with osmanthus honey. A perfect ending to your night market trip.',
        price: 90,
        address: '台北市松山區饒河街192號',
        rating: 4.6,
        michelinRating: 'selected',
        michelinYears: [2019, 2020, 2021, 2022, 2023, 2024],
        isVegetarianFriendly: true,
        dietaryOptions: ['vegetarian'],
        lat: 25.0507,
        lng: 121.5764,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '17:00-00:00',
        tags: ['米其林入選', '創意甜點', '素食友善'],
        themeColor: '#fef3c7',
        teaser: '冰與火的極致交融，淋上桂花蜜的優雅甜點。',
        teaserEn: 'The ultimate fusion of hot and cold; elegant osmanthus honey dessert.',
        coverImage: 'https://images.unsplash.com/photo-1563245372-f21724e3a404?auto=format&fit=crop&q=80&w=800',
        expertNote: '一定要趁熱吃湯圓！吃完剩下的冰可以到櫃檯「免費續加」桂花蜜和檸檬汁，變成清爽的飲品。',
        expertNoteEn: 'Eat the dumplings while they\'re hot! You can get free refills of honey and lemon juice for the leftover ice.'
    },
    {
        id: 'tw-t-a-jjy',
        title: '軍艦岩 (Jun-Jian-Yan)',
        titleEn: 'Battleship Rock',
        type: 'nature',
        duration: '1.5小時',
        image: '🧗',
        description: '這是一塊巨大的白色石英砂岩，外型酷似一艘破浪而出的軍艦。它是台北北投最受歡迎的親山步道，只需 15-20 分鐘即可攻頂。山頂視野極其遼闊，可以俯瞰整個台北盆地與威嚴的關渡平原。',
        descriptionEn: 'A massive white sandstone rock formation resembling a battleship. It\'s a popular 20-minute hike in Beitou, offering 360-degree views of the Taipei Basin and Guandu Plain.',
        price: 0,
        address: '台北市北投區立農街二段155號 (陽明交通大學內)',
        rating: 4.8,
        lat: 25.1205,
        lng: 121.5175,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['攝影', '步道', '奇岩'],
        themeColor: '#cbd5e1',
        coverImage: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '【攻頂儀式】',
                labelEn: 'Summit Ritual',
                summary: '站在「艦頭」拍大片',
                summaryEn: 'Stand at the Prow',
                story: '站在最高處的白色岩層上，能拍出宛如置身荒野的感覺。💡 攝影提示：利用廣角鏡頭，由下往上拍，可以拍出軍艦岩與後方台北 101 同框的視覺壓縮感。',
                storyEn: 'Stand on the white rock summit for a "wilderness" vibe. 💡 Photo Tip: Use a wide-angle lens from a low angle to frame the rock with Taipei 101 in the background.'
            },
            {
                id: 'trap',
                label: '【防滑提醒】',
                labelEn: 'Slip Warning',
                summary: '砂岩易滑，穿防滑鞋',
                summaryEn: 'Slippery Sandstone',
                story: '山頂的石英砂岩非常平滑且帶有細砂。即便天氣晴朗也容易打滑，強烈建議穿著抓地力強的運動鞋，避免在岩層邊緣奔跑。',
                storyEn: 'The sandstone is smooth and covered in fine sand. Even on sunny days, it can be slippery. Wear shoes with good grip and stay away from the edges.'
            }
        ]
    },
    {
        id: 'tw-t-a-yhd',
        title: '銀河洞越嶺步道 (Yin-He-Dong)',
        titleEn: 'Silver Stream Cave',
        type: 'nature',
        duration: '2小時',
        image: '🏞️',
        description: '一個嵌入在峭壁中的百年古廟，瀑布從窗櫺前輕灑落下，宛如武俠小說中的仙境。這裡是新店最神祕的戶外景點，結合了自然之美與濃厚的宗教神祕感。',
        descriptionEn: 'A historic cliffside temple with a waterfall cascading past its windows. A mystical oasis in Xindian that feels like a scene from a martial arts epic.',
        price: 0,
        address: '新北市新店區銀河路',
        rating: 4.7,
        lat: 24.9583,
        lng: 121.5833,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['攝影', '廟宇', '瀑布'],
        themeColor: '#34d399',
        coverImage: 'https://images.unsplash.com/photo-1669516255001-39f49df961ff?q=80&w=928&auto=format&fit=crop&q=80&w=800',

        expertStories: [
            {
                id: 'must-do',
                label: '【經典機位】',
                labelEn: 'Iconic Shot',
                summary: '從窗櫺外拍向呂洞賓廟',
                summaryEn: 'Through the Windows',
                story: '這是最出名的打卡角度。站在廟宇突出的平台上，瀑布就在你身後飛濺。💡 攝影提示：下午的光線最柔和，能拍出瀑布水霧瀰漫的仙氣。',
                storyEn: 'The most famous shot. Stand on the protruding platform with the waterfall splashing behind you. 💡 Afternoon light is best for capturing the "ethereal" mist.'
            },
            {
                id: 'trap',
                label: '【體力評估】',
                labelEn: 'Stamina Check',
                summary: '一段不長但陡的樓梯',
                summaryEn: 'Short but Steep Stairs',
                story: '雖然步道全程只要 15-20 分鐘，但幾乎全是不斷上升的石階。夏天爬會非常悶熱，建議攜帶足夠的水並預備一件擦汗的毛巾。',
                storyEn: 'It\'s only a 15-20 min walk, but it\'s all steep stone steps. It can get very humid in summer; bring plenty of water and a towel.'
            }
        ]
    },
    {
        id: 'tw-t-a-teapot',
        title: '無耳茶壺山 (Teapot Mt.)',
        titleEn: 'Teapot Mountain',
        type: 'nature',
        duration: '3小時',
        image: '⛰️',
        description: '因山頂形狀酷似沒有把手的茶壺而得名。這裡是瑞芳最具挑戰性的景觀步道之一，山頂擁有 360 度的山海全景，能將金瓜石、九份與陰陽海一次收進眼底。',
        descriptionEn: 'Named for its unique teapot shape. One of Ruifang\'s most challenging scenic trails, offering a 360-degree panorama of Jiufen, Jinguashi, and the Yinyang Sea.',
        price: 0,
        address: '新北市瑞芳區金瓜石',
        rating: 4.9,
        lat: 25.1114,
        lng: 121.8655,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['冒險', '登山', '全景'],
        themeColor: '#a855f7',
        coverImage: 'https://images.unsplash.com/photo-1659232394721-3a51c050b08b?q=80&w=870&auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '【終極巔峰】',
                labelEn: 'Summit Peak',
                summary: '攀爬進入「茶壺」內部',
                summaryEn: 'Into the Teapot',
                story: '步道的終點是一堆巨石。體力好的人可以透過繩索攀爬進入洞內。💡 達人提示：洞內空間狹小且岩石粗糙，請務必戴上手套，並在有同伴陪同的情況下進行。',
                storyEn: 'The trail ends at a cluster of giant boulders. You can use ropes to climb into the "teapot." 💡 Wear gloves and never climb alone; the space is tight and rocky.'
            },
            {
                id: 'trap',
                label: '【氣候守則】',
                labelEn: 'Weather Rule',
                summary: '強風與午後雷雨',
                summaryEn: 'High Winds & Storms',
                story: '山頂完全沒有遮蔽物。如果風勢太大或看到遠方有烏雲，請立刻撤離，不要勉強登頂，因為稜線上的雷擊風險極高。',
                storyEn: 'The summit is totally exposed. If winds are strong or dark clouds appear, descend immediately. Lightning risks on the ridge are high.'
            }
        ]
    },
    {
        id: 'tw-t-a-bitou',
        title: '鼻頭角步道 (Bitoujiao)',
        titleEn: 'Bitoujiao Trail',
        type: 'nature',
        duration: '2小時',
        image: '🐉',
        description: '被譽為「台版萬里長城」。這條步道沿著鼻頭角的山脊蜿蜒而上，左手邊是翠綠的山巒，右手邊是深邃的太平洋。步道的終點能拍到層層疊疊的山脊線與大海交織出的視覺奇蹟。',
        descriptionEn: 'The "Great Wall of Taiwan." This ridge-line trail offers emerald mountains on one side and the deep Pacific on the other. An architectural and natural masterpiece.',
        price: 0,
        address: '新北市瑞芳區鼻頭路',
        rating: 4.8,
        lat: 25.1278,
        lng: 121.9166,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['攝影', '海岸', '經典'],
        themeColor: '#3b82f6',
        coverImage: 'https://images.unsplash.com/photo-1668570835670-9e5e627c526c?q=80&w=1074&auto=format&fit=crop&q=80 & w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '【龍脈攝影】',
                labelEn: 'Dragon Photo',
                summary: '拍攝蜿蜒的山脊步道',
                summaryEn: 'The Winding Ridge',
                story: '站在步道的高點回頭望去，步道就像一條巨龍盤踞在山脊上。💡 攝影提示：使用手機的「全景模式」或「廣角」，能捕捉到步道、山海與燈塔共存的震撼畫面。',
                storyEn: 'From the high point, the trail looks like a dragon on the ridge. 💡 Use Panorama or Wide-angle to capture the trail, sea, and lighthouse in one shot.'
            }
        ]
    },
    {
        id: 'tw-t-a-houtong',
        title: '猴硐貓村',
        titleEn: 'Houtong Cat Village',
        type: 'attraction',
        address: '新北市瑞芳區',
        addressEn: 'Ruifang, New Taipei',
        category: '文化體驗',
        tags: ['貓奴必去', '礦業遺產', '療癒'],
        themeColor: '#fbbf24',
        coverImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '【尋貓大作戰】',
                labelEn: 'Cat Hunt',
                summary: '與可愛貓咪的午後邂逅',
                summaryEn: 'Lazy Afternoon with Cats',
                story: '這裡曾是重要的採礦據點，現在則是貓咪的天堂。💡 達人提示：請不要隨意餵食人類食物。建議與孩子一起挑戰「尋貓大作戰」，看看誰能拍到最慵懶的貓咪！',
                storyEn: 'A former mining hub turned cat sanctuary. 💡 Please do not feed them human food. Great for a "Cat Search" challenge with kids!'
            }
        ]
    },
    {
        id: 'tw-t-a-sjl',
        title: '三貂嶺生態步道',
        titleEn: 'Sanjiaoling Waterfall Trail',
        type: 'attraction',
        address: '新北市瑞芳區',
        addressEn: 'Ruifang, New Taipei',
        category: '戶外冒險',
        tags: ['瀑布群', '彩繪村', '秘境'],
        themeColor: '#10b981',
        coverImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '【瀑布洗禮】',
                labelEn: 'Waterfall Baptism',
                summary: '一次收集三座壯麗瀑布',
                summaryEn: 'Triple Waterfall Trek',
                story: '這是全台唯一沒有公路可抵達的車站。步道沿線包含合谷、摩天、枇杷洞三座瀑布。💡 提醒：部分路段較為原始，雨天後路面濕滑，請務必穿著防滑登山鞋。',
                storyEn: 'The only station in Taiwan with no road access. Collect three stunning waterfalls. 💡 Wear high-grip shoes as the trail can be very slippery after rain.'
            }
        ]
    },
    {
        id: 'tw-t-a-wyv',
        title: '忘憂谷步道',
        titleEn: 'Wangyougu Trail',
        type: 'attraction',
        address: '基隆市中正區',
        addressEn: 'Keelung',
        category: '戶外冒險',
        tags: ['海景', 'V型谷', '夕陽'],
        themeColor: '#0ea5e9',
        coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'hidden',
                label: '【山海波浪】',
                labelEn: 'Ocean Waves',
                summary: '步入藍色與綠色的交界',
                summaryEn: 'Blue Meets Green',
                story: '名字由來是因為這裡的美景能讓人忘記憂慮。翠綠的V型山谷直通蔚藍大海。💡 攝影提示：站在白色階梯處向下拍，可以捕捉到步道向海洋無限延伸的絕佳視角。',
                storyEn: 'Name means "Forget Worries Valley." Green V-shaped valley meets the deep blue sea. 💡 Shoot from the white stairs looking down for an infinite trail-to-sea perspective.'
            }
        ]
    }
];

