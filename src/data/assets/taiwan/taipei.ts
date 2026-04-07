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
        lat: 25.0441,
        lng: 121.5248,
        region: 'taipei',
        authorId: 'c-tw1',
        openingHours: '05:30-12:30 (週一休)',
        tags: ['🌟米其林', '老字號', '早餐'],
        themeColor: '#b86818',
        teaser: '台北早晨的靈魂，米其林級的厚燒餅。',
        teaserEn: 'Soul of Taipei mornings, Michelin-grade thick biscuits.',
        coverImage: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=800',
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
        coverImage: 'https://images.unsplash.com/photo-1620311210080-87425883a48e?auto=format&fit=crop&q=80&w=800',
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
        coverImage: 'https://images.unsplash.com/photo-1644722849845-66858e384898?auto=format&fit=crop&q=80&w=800',
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
        coverImage: 'https://images.unsplash.com/photo-1563245372-f21724e3a404?auto=format&fit=crop&q=80&w=800',
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
        coverImage: 'https://images.unsplash.com/photo-1582266255745-9e509426a5a3?auto=format&fit=crop&q=80&w=800',
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
        coverImage: 'https://images.unsplash.com/photo-1584285437876-068340d867c2?auto=format&fit=crop&q=80&w=800',
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
        coverImage: 'https://images.unsplash.com/photo-1562601579-599dec564e06?auto=format&fit=crop&q=80&w=800',
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
        coverImage: 'https://images.unsplash.com/photo-1570535316410-b9bbd6642d93?auto=format&fit=crop&q=80&w=800',
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
        coverImage: 'https://images.unsplash.com/photo-1528669830501-44754e9bc3cc?auto=format&fit=crop&q=80&w=800',
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
        coverImage: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=800',
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
                storyEn: 'Arrive before 10 AM opening at the Xinyi original store. Being in the first batch keeps you from 90-minute waits later.'
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
        coverImage: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=800',
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
        coverImage: 'https://images.unsplash.com/photo-1590424600650-6ed6679b3cb0?auto=format&fit=crop&q=80&w=800',
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
        coverImage: 'https://images.unsplash.com/photo-1470252649358-96f3c802bca8?auto=format&fit=crop&q=80&w=800',
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
        coverImage: 'https://images.unsplash.com/photo-1538356111083-74819827bb68?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '巨型阻尼球',
                labelEn: 'The Damper',
                summary: '看大樓如何呼吸',
                summaryEn: 'How towers breathe',
                story: '一定要去看那個金色的巨大圓球。它是世界上少數開放參觀的風阻尼器。在颱風或地震時，它就是讓 101 穩如泰山的守護神。',
                storyEn: 'Don\'t miss the massive golden sphere. It\'s one of the few open-to-public wind dampers, keeping the tower steady during typhoons or quakes.'
            },
            {
                id: 'hidden',
                label: '91樓戶外',
                labelEn: '91F Outdoor',
                summary: '感受高空強風',
                summaryEn: 'Feel the high wind',
                story: '如果天氣好，戶外平台會開放。站在 91 樓感受高空的風速，那種臨場感跟隔著玻璃看的感覺完全不同。你會發現 101 真的很高。',
                storyEn: 'When weather permits, the outdoor deck opens. Feeling the wind at 390m is completely different from looking through glass.'
            },
            {
                id: 'trap',
                label: '天氣陷阱',
                labelEn: 'Weather Trap',
                summary: '起霧就不要上去了',
                summaryEn: 'Skip if foggy',
                story: '上樓前先看螢幕的能見度百分比。如果台北起大霧，你上去看到的只會是一片白色牆壁。這時建議改去百貨區逛街，景色留給晴天。',
                storyEn: 'Check visibility before buying tickets. If it\'s foggy, you\'ll see nothing but a white wall. Save the view for a clear day instead.'
            },
            {
                id: 'must-eat',
                label: '雲端咖啡',
                labelEn: 'Sky Coffee',
                summary: '最高空的純度',
                summaryEn: 'Highest purity',
                story: '這裡有幾間高空咖啡廳，雖然價格稍高，但配上那個俯瞰整個城市的視野，那杯拿鐵喝起來就是特別有質感。',
                storyEn: 'The sky-high cafes might be pricey, but pairing a latte with a full city view makes the experience worth every penny.'
            }
        ],
        insiderTip: {
            teaser: '16:30 入場，同時卡位夕陽與百萬夜景。',
            teaserEn: 'Arrive at 4:30 PM to catch sunset and city lights.',
            full: {
                story: '四點半到五點入場最完美。看著天色從金黃轉為深藍，光線的變化會讓您的照片更有感。',
                storyEn: 'Early arrival lets you see the sky change from gold to deep blue, adding depth to your photos.',
                bestTime: '16:30'
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
        coverImage: 'https://images.unsplash.com/photo-1570535316410-b9bbd6642d93?auto=format&fit=crop&q=80&w=800',
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
    }
];
