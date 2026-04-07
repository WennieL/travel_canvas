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
    }
];
