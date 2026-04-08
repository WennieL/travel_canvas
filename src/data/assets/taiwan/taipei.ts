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
                id: 'hidden',
                label: '巷弄中的101',
                labelEn: 'Alley View',
                summary: '竹村居酒屋巷弄',
                summaryEn: 'Takemura Alley',
                story: '離開 101 後，散步到松仁路 253 巷。站在竹村居酒屋門口，你會發現 101 剛好嵌在錯綜複雜的電線與窄巷中間，這是目前台北最紅的攝影點。',
                storyEn: 'After 101, walk to Lane 253, Songren Rd. Stand by Takemura Izakaya and you\'ll see 101 perfectly framed by chaotic power lines and narrow alleys.'
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
        coverImage: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=800',
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
        coverImage: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
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
        coverImage: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800',
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
        coverImage: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=800',
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
        lat: 25.0568,
        lng: 121.5152,
        region: 'taipei',
        authorId: 'c-tw-night',
        tags: ['頂級夜市', '在地老饕', '米其林推薦'],
        themeColor: '#dc2626',
        teaser: '台北夜市的米其林殿堂，老饕不說的口袋名單。',
        teaserEn: 'The Michelin hall of night markets; a foodie\'s best-kept secret.',
        coverImage: 'https://images.unsplash.com/photo-1570535316410-b9bbd6642d93?auto=format&fit=crop&q=80&w=800',
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
        coverImage: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-eat',
                label: '肉蛋吐司',
                labelEn: 'Meat & Egg',
                summary: '炭火的溫度',
                summaryEn: 'Charcoal warmth',
                story: '真芳的招牌。手打肉排與香嫩煎蛋鋪在炭火烤過的吐司，那種微微的炭香味與美乃滋的平衡感，是台北人百吃不厭的經典。',
                storyEn: 'The flagship. Hand-made pork patties and tender eggs on charcoal-toasted bread—a timeless Taipei morning staple.'
            },
            {
                id: 'hidden',
                label: '古早味粉漿蛋餅',
                labelEn: 'Batter Pancake',
                summary: '消失中的傳統口感',
                summaryEn: 'Disappearing legacy',
                story: '比起一般的薄皮蛋餅，粉漿蛋餅更厚實Q彈。搭配甜辣醬，那是老台北人記憶中的味道。',
                storyEn: 'Thicker and chewier than normal pancakes. Paired with sweet chili sauce, it\'s a nostalgia trip for locals.'
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
        lat: 25.0321,
        lng: 121.5284,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['經典', '牛肉麵', '必訪'],
        themeColor: '#92400e',
        teaser: '台北靈魂的滋味，一碗濃縮半世紀的精華。',
        teaserEn: 'The taste of Taipei\'s soul, concentrated in a half-century-old recipe.',
        coverImage: 'https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-eat',
                label: '紅燒半筋半肉',
                labelEn: 'Spicy Tendon',
                summary: '口感的極致層次',
                summaryEn: 'Texture masterclass',
                story: '建議點半筋半肉。筋煮得像果凍般滑嫩，肉卻依然保有纖維感。湯頭帶著微微的辛辣與豆瓣香，非常有層次。',
                storyEn: 'Go for the mixed bowl. Jelly-like tendon meets textured meat in a broth rich with spicy bean paste.'
            },
            {
                id: 'hidden',
                label: '粉蒸排骨',
                labelEn: 'Steamed Ribs',
                summary: '隱藏的靈魂配角',
                summaryEn: 'Hidden soulmate',
                story: '很多人只點麵，但這裡的粉蒸系列（排骨或大腸）才是老饕心中真正的精華。地瓜墊底吸滿了油脂香，絕對要點。',
                storyEn: 'Many skip order just the noodles, but the steamed ribs on a bed of sweet potato are the true insider choice.'
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
        coverImage: 'https://images.unsplash.com/photo-1596434406196-857c0c6e0892?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '故宮三寶',
                labelEn: 'The Big Three',
                summary: '觀察工匠的極致巧思',
                summaryEn: 'Artisan genius',
                story: '翠玉白菜、肉形石與毛公鼎是必看清單。尤其是白菜上的螽斯與蝗蟲，細膩到令人屏息。建議早上 09:00 前入場避開人潮。',
                storyEn: 'Jadeite Cabbage, Meat-shaped Stone, and Mao Gong Ding. Arrive before 9 AM to see them without the heavy crowds.'
            },
            {
                id: 'hidden',
                label: '至善園散策',
                labelEn: 'Zhishan Garden',
                summary: '博物館旁的宋代園林',
                summaryEn: 'Song Dynasty Garden',
                story: '參觀完本館，憑票根可以免費進入至善園。這裡仿宋代設計，有小橋流水與黑天鵝，是消化文化衝擊的最佳靜謐空間。',
                storyEn: 'Use your ticket for free entry to Zhishan Garden. A Song-style retreat with black swans—perfect for post-museum reflection.'
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
        coverImage: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '儀隊交接',
                labelEn: 'Guard Change',
                summary: '每整點的精確律動',
                summaryEn: 'Every hour on the hour',
                story: '每小時整點在四樓大廳會有儀隊交接。動作整齊到連腳步聲都是同步的。建議提前 10 分鐘卡位，那種震撼力現場看完全不同。',
                storyEn: 'The hourly ceremony on the 4th floor is a masterclass in precision. Arrive 10 mins early for a good vantage point.'
            },
            {
                id: 'hidden',
                label: '拱門對比照',
                labelEn: 'The Archways',
                summary: '框架建築之美',
                summaryEn: 'Framing architecture',
                story: '走到廣場兩旁的迴廊大拱門，用拱門當作框架拍攝主建築，可以拍出極具大氣與空間感的對稱構圖。',
                storyEn: 'Use the massive corridor arches to frame the main hall for stunning, symmetrical compositions.'
            }
        ]
    },
    {
        id: 'tw-t-a12',
        title: '圓山大飯店',
        titleEn: 'The Grand Hotel',
        type: 'attraction',
        duration: '1.5小時',
        image: '🕌',
        description: '台北最傳奇的宮殿式飯店。宏偉的十四層中國宮殿建築，曾用來招待多國元首。紅柱金瓦下的雕樑畫棟，隱藏著跨越半世紀的政治煙雲與神祕避難地道。',
        descriptionEn: 'The legendary palace-style hotel, once a venue for world leaders. A masterpiece of traditional architecture.',
        price: 0,
        address: '台北市中山區中山北路四段1號',
        rating: 4.7,
        lat: 25.0792,
        lng: 121.5265,
        region: 'taipei',
        authorId: 'c-tw1',
        tags: ['建築', '歷史', '地標'],
        themeColor: '#b91c1c',
        teaser: '走進紅柱宮殿，探尋這座城市的祕密地道。',
        teaserEn: 'Enter the red-pillared palace and discover the city\'s secret tunnels.',
        coverImage: 'https://images.unsplash.com/photo-1596434406196-857c0c6e0892?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-do',
                label: '紅柱大廳',
                labelEn: 'The Lobby',
                summary: '走進宮廷的視覺衝擊',
                summaryEn: 'Royal visual impact',
                story: '走進挑高大廳，數目眾多的紅大柱與天花板的梅花藻井會讓你瞬間以為回到古代皇宮。一定要去大樓梯拍照，那是最經典的角度。',
                storyEn: 'The massive red pillars and ornate ceiling make you feel like royalty. Snap a photo on the grand staircase—it\'s iconic.'
            },
            {
                id: 'hidden',
                label: '祕密逃生滑梯',
                labelEn: 'Secret Tunnels',
                summary: '時代背景下的避難奇觀',
                summaryEn: 'Historical escape',
                story: '圓山隱藏著東、西兩條神祕地道。東側地道有長達 67 公尺的滑梯（現已收費預約參觀）。那是為了當年萬一發生戰爭，元首能快速撤離的特殊設計。',
                storyEn: 'The hotel hides two secret tunnels. The west one features a 67m long escape slide—a remnant of the Cold War era (Reservation required).'
            }
        ],
        insiderTip: {
            teaser: '除了主樓，後山的小徑可以拍到圓山飯店氣勢磅礡的全景。',
            teaserEn: 'Skip the crowd; follow the back trails for a panoramic view of the palace.',
            full: {
                story: '若不進入餐飲，大廳也是免票參觀的。建議參加「地道導覽行程」，那是台北最獨特的歷史解密。',
                storyEn: 'Entry to the lobby is free. For the best experience, book a "Secret Tunnel Tour" in advance.',
                bestTime: '15:00'
            }
        }
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
        coverImage: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=800',
        expertStories: [
            {
                id: 'must-eat',
                label: '豪大大雞排',
                labelEn: 'Hot-Star Chicken',
                summary: '比臉還大的震撼感',
                summaryEn: 'Larger-than-face fried chicken',
                story: '士林的圖騰。現炸出來、撒上胡椒鹽的香氣，雖然熱量很高，但那種大口吃肉的爽感是來台北必拍的打卡儀式。',
                storyEn: 'A Shilin icon. Crispy, salty, and huge. Biting into one under the neon lights is a classic Taipei experience.'
            },
            {
                id: 'hidden',
                label: '海友十全排骨',
                labelEn: 'Herbal Ribs',
                summary: '巷弄裡的米其林指南',
                summaryEn: 'Michelin in the alley',
                story: '很多人只去主幹道。但巷子裡的「海友」是連續幾年獲得米其林推薦的名店。在涼冷的夜晚來一碗黑澄澄的補湯，非常過癮。',
                storyEn: 'Skip the main street traps. "Hai Yu" in the side alley is a multi-year Michelin mention with soul-warming herbal soup.'
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
    }
];
