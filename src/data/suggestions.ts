export const ALL_SUGGESTIONS: Record<string, Record<string, any[]>> = {
    kyoto: {
        morning: [
            {
                id: 'qf-k1',
                title: '清水寺',
                titleEn: 'Kiyomizu-dera',
                type: 'attraction',
                duration: '2小時',
                price: 400,
                region: 'kyoto',
                description: '著名的清水舞台由139根巨柱支撐，不使用一根釘子。',
                descriptionEn: 'Famous for its wooden stage that was built without a single nail.',
                lat: 34.9949,
                lng: 135.7850,
                tags: ['古蹟', '網美'],
                insiderTip: {
                    teaser: '繞過人潮的秘密路線',
                    full: {
                        story: '不要從正門進去！從「茶碗坂」上去，人潮只有正面的 1/3。音羽瀑布有三道水流：左邊是「學業」、中間是「戀愛」、右邊是「長壽」。選一道喝就好。',
                        exactLocation: '從五条坂往南走 200 公尺，轉進茶碗坂',
                        mustTry: '在音羽瀑布選「戀愛」那道水喝',
                        avoid: '不要在清水坂買紀念品，價格最貴',
                        bestTime: '06:00 開門時最空曠'
                    }
                }
            },
            {
                id: 'qf-k2',
                title: '伏見稻荷大社',
                titleEn: 'Fushimi Inari Taisha',
                type: 'attraction',
                duration: '1.5小時',
                price: 0,
                region: 'kyoto',
                description: '千本鳥居綿延4公里上山，祈求生意興隆的聖地。',
                descriptionEn: 'Famous for its thousands of vermilion torii gates.',
                lat: 34.9671,
                lng: 135.7726,
                tags: ['必去', '攝影'],
                insiderTip: {
                    teaser: '傍晚登山的魔幻體驗',
                    full: {
                        story: '大多數人早上來，但傍晚 17:00 後遊客都下山了。往山頂走，你會獨佔整條千本鳥居。日落時分，陽光穿過鳥居的縫隙，美到不真實。',
                        exactLocation: '四ツ辻展望台（山腰處）是最佳觀景點',
                        mustTry: '在四ツ辻吃「いなり寿司」（狐狸壽司）',
                        avoid: '不要穿高跟鞋，石階路很滑',
                        bestTime: '17:00-19:00 夕陽時分'
                    }
                }
            }
        ],
        afternoon: [
            {
                id: 'qf-k3',
                title: '嵐山竹林',
                titleEn: 'Arashiyama Bamboo Grove',
                type: 'attraction',
                duration: '1小時',
                price: 0,
                region: 'kyoto',
                description: '高聳竹林形成天然隧道，風吹時沙沙作響。',
                descriptionEn: 'A natural tunnel of towering bamboo stalks.',
                lat: 35.0094,
                lng: 135.6667,
                tags: ['自然', '攝影'],
                insiderTip: {
                    teaser: '空無一人的竹林拍攝秘訣',
                    full: {
                        story: '早上 7 點前抵達是拍到無人竹林的唯一方法。從京都車站搭第一班嵐電，6:30 就能到。',
                        exactLocation: '野宮神社往北走的小徑最清幽',
                        mustTry: '在渡月橋拍一張經典照',
                        avoid: '10:00 後會開始有團客',
                        bestTime: '06:00-07:00'
                    }
                }
            },
            {
                id: 'qf-k4',
                title: '金閣寺',
                titleEn: 'Kinkaku-ji',
                type: 'attraction',
                duration: '45分',
                price: 400,
                region: 'kyoto',
                description: '金碧輝煌的世界遺產，正式名稱為鹿苑寺。',
                descriptionEn: 'The golden pavilion, a stunning Zen temple covered in gold leaf.',
                lat: 35.0393,
                lng: 135.7292,
                tags: ['古蹟', '必去'],
                insiderTip: {
                    teaser: '倒影拍攝的黃金時刻',
                    full: {
                        story: '開門後前 30 分鐘是拍攝金閣寺倒影最好的時機，水面平靜如鏡。',
                        exactLocation: '鏡湖池東北角的大石頭旁',
                        mustTry: '買「金箔御守」，是金閣寺限定',
                        avoid: '11:00-15:00 團客最多，盡量避開',
                        bestTime: '09:00 開門'
                    }
                }
            }
        ],
        evening: [
            {
                id: 'qf-k5',
                title: '祇園花見小路',
                titleEn: 'Gion Hanamikoji',
                type: 'attraction',
                duration: '1小時',
                price: 0,
                region: 'kyoto',
                description: '幸運的話可以看到藝妓喔！',
                descriptionEn: 'Look for geishas in this historic district.',
                lat: 35.0024,
                lng: 135.7735,
                tags: ['文化', '散策'],
                insiderTip: {
                    teaser: '巧遇藝妓的黃昏時刻',
                    full: {
                        story: '傍晚 17:30 到 18:30 之間，正是藝妓趕往茶屋工作的時間，這時最容易在巷弄中與她們不期而遇。請務必保持禮貌，嚴禁追逐或未經同意近距離對準拍照。',
                        exactLocation: '花見小路主街兩側的小巷',
                        mustTry: '在附近的老字號茶屋品嚐抹茶',
                        avoid: '嚴禁在禁止拍照的私人小路內攝影',
                        bestTime: '17:30-18:30'
                    }
                }
            },
            {
                id: 'qf-k6',
                title: '鴨川納涼床',
                titleEn: 'Kamogawa River',
                type: 'food',
                duration: '2小時',
                price: 3000,
                region: 'kyoto',
                description: '夏日限定的河畔用餐體驗。',
                descriptionEn: 'Enjoy a unique riverside dining experience in summer.',
                lat: 35.0050,
                lng: 135.7712,
                tags: ['美食', '景觀'],
                insiderTip: {
                    teaser: '平價享受納涼床的攻略',
                    full: {
                        story: '納涼床料理通常很貴，但其實有些咖啡廳如 Starbucks 三条大橋店也有提供床位座位。您可以花幾百日圓買杯咖啡，就能享受到同樣的河畔涼風。',
                        exactLocation: 'Starbucks 三条大橋店 納涼床席',
                        mustTry: '在河邊坐著看夕陽',
                        avoid: '熱門時段（19:00-21:00）沒預約幾乎沒位子',
                        bestTime: '17:30 日落前'
                    }
                }
            }
        ],
        night: [
            {
                id: 'qf-k7',
                title: '居酒屋體驗',
                titleEn: 'Izakaya',
                type: 'food',
                duration: '2小時',
                price: 2500,
                region: 'kyoto',
                description: '體驗日式夜生活。',
                descriptionEn: 'Experience Japanese nightlife with local drinks and snacks.',
                lat: 35.0062,
                lng: 135.7695,
                tags: ['消遣', '美食'],
                insiderTip: {
                    teaser: '隱藏在先斗町的小店',
                    full: {
                        story: '比起連鎖居酒屋，先斗町裡有些二樓的小店更有氣氛。進去前可以先看門口的「Otoshi」（前菜費）標示，通常是 ¥300-¥500。',
                        exactLocation: '先斗町通中段',
                        mustTry: '京都限目的地地酒',
                        avoid: '避免進入沒有明碼標價的狹小巷內店',
                        bestTime: '21:00 以後'
                    }
                }
            }
        ],
        accommodation: [
            {
                id: 'qf-k8',
                title: '京都大飯店',
                titleEn: 'Kyoto Hotel',
                type: 'hotel',
                duration: '0',
                price: 10000,
                region: 'kyoto',
                description: '舒適的住宿。',
                descriptionEn: 'A comfortable stay in the heart of Kyoto.',
                lat: 35.0116,
                lng: 135.7681,
                tags: ['住宿'],
                insiderTip: {
                    teaser: '選對房間看鴨川夜景',
                    full: {
                        story: '預訂時指定「高層階・鴨川側」，可以俯瞰鴨川與三条大橋的燈火。飯店大廳有免費的抹茶迎賓組，非常推薦。',
                        exactLocation: '大廳迎賓區',
                        mustTry: '早起去鴨川散步，就在飯店門口',
                        avoid: '不要訂靠近馬路且低樓層的房間',
                        bestTime: '17:00 辦理入住'
                    }
                }
            }
        ]
    },
    tokyo: {
        morning: [
            {
                id: 'qf-t1',
                title: '淺草寺',
                titleEn: 'Senso-ji',
                type: 'attraction',
                duration: '1.5小時',
                price: 0,
                region: 'tokyo',
                description: '東京最古老的寺廟，雷門必拍！',
                descriptionEn: 'Tokyo\'s oldest temple, featuring the Kaminarimon gate.',
                lat: 35.7147,
                lng: 139.7967,
                tags: ['必去'],
                insiderTip: {
                    teaser: '早起鳥的秘密風景',
                    full: {
                        story: '清晨 7 點前抵達，仲見世通的鐵捲門彩繪還沒拉上去，是只有早鳥才能看見的浮世繪卷。',
                        exactLocation: '雷門後方仲見世通',
                        mustTry: '現烤人形燒',
                        avoid: '避開中午人潮最高峰',
                        bestTime: '07:00 以前'
                    }
                }
            },
            {
                id: 'qf-t2',
                title: '築地場外市場',
                titleEn: 'Tsukiji Outer Market',
                type: 'food',
                duration: '1小時',
                price: 2000,
                region: 'tokyo',
                description: '享受新鮮的海鮮丼飯。',
                descriptionEn: 'A paradise for fresh seafood breakfast.',
                lat: 35.6654,
                lng: 139.7706,
                tags: ['海鮮'],
                insiderTip: {
                    teaser: '避開排隊名店的聰明吃法',
                    full: {
                        story: '不要排大門口的名店。往市場深處走，找「鮨文」這間小店，老闆娘現切當天最新鮮的魚，價格划算。',
                        exactLocation: '場外市場 4 號街深處',
                        mustTry: '丸武玉子燒',
                        avoid: '假日人潮洶湧，建議平日前往',
                        bestTime: '06:00-07:30'
                    }
                }
            }
        ],
        afternoon: [
            {
                id: 'qf-t3',
                title: '明治神宮',
                titleEn: 'Meiji Jingu',
                type: 'attraction',
                duration: '1.5小時',
                price: 0,
                region: 'tokyo',
                description: '祭祀明治天皇的神社，擁有壯麗的森林步道。',
                descriptionEn: 'A shrine dedicated to Emperor Meiji, featuring forest paths.',
                lat: 35.6763,
                lng: 139.6993,
                tags: ['神社', '森林'],
                insiderTip: {
                    teaser: '清酒牆拍照秘訣',
                    full: {
                        story: '參道旁有一整面各地酒造捐贈的清酒桶牆，是熱門拍照點。記得走在參道兩側，中間是留給神走的。',
                        exactLocation: '南參道與北參道交會處附近',
                        mustTry: '購買「開運木鈴」',
                        avoid: '不可在參道中央大聲喧嘩',
                        bestTime: '08:00-09:00'
                    }
                }
            },
            {
                id: 'qf-t4',
                title: '澀谷十字路口',
                titleEn: 'Shibuya Crossing',
                type: 'attraction',
                duration: '30分',
                price: 0,
                region: 'tokyo',
                description: '世界最繁忙的十字路口。',
                descriptionEn: 'The world\'s busiest and most famous pedestrian crossing.',
                lat: 35.6595,
                lng: 139.7005,
                tags: ['必去'],
                insiderTip: {
                    teaser: '最佳高空拍攝位',
                    full: {
                        story: 'MAGNET 頂樓觀景台比星巴克更高更廣，而且通常比較不擁擠。',
                        exactLocation: 'MAGNET by SHIBUYA109 頂樓',
                        mustTry: '錄一段縮時攝影',
                        avoid: '不要在十字路口中央長時間逗留',
                        bestTime: '17:00-18:30'
                    }
                }
            }
        ],
        evening: [
            {
                id: 'qf-t5',
                title: '東京鐵塔',
                titleEn: 'Tokyo Tower',
                type: 'attraction',
                duration: '1小時',
                price: 1200,
                region: 'tokyo',
                description: '經典的東京地標夜景。',
                descriptionEn: 'The iconic landmark of Tokyo with a classic night view.',
                lat: 35.6586,
                lng: 139.7454,
                tags: ['地標', '夜景'],
                insiderTip: {
                    teaser: '芝公園的秘密拍照地',
                    full: {
                        story: '與其排隊登塔，不如在旁邊的「芝公園」買杯飲料坐著拍。那裡的草坪可以拍到鐵塔與周圍建築的和諧美感。',
                        exactLocation: '芝公園 4 號地',
                        mustTry: '晚上點燈後的浪漫氛圍',
                        avoid: '假日售票口排隊很長，建議預購',
                        bestTime: '18:00-20:00'
                    }
                }
            },
            {
                id: 'qf-t6',
                title: '新宿歌舞伎町',
                titleEn: 'Kabukicho',
                type: 'attraction',
                duration: '1.5小時',
                price: 0,
                region: 'tokyo',
                description: '越夜越美麗的不夜城。',
                descriptionEn: 'Tokyo\'s red-light district, known for its neon signs.',
                lat: 35.6938,
                lng: 139.7035,
                tags: ['夜生活', '攝影'],
                insiderTip: {
                    teaser: '哥吉拉頭像與霓虹一條街',
                    full: {
                        story: '找到格拉斯麗酒店附近的巨大哥吉拉頭像，整點還會吼叫。這裡的霓虹看板是攝影愛好者的天堂。',
                        exactLocation: '格拉斯麗酒店 (Hotel Gracery)',
                        mustTry: '與哥吉拉合影',
                        avoid: '避開拉客的人員（客引き），不要隨便進陌生店面',
                        bestTime: '20:00 後'
                    }
                }
            }
        ],
        night: [
            {
                id: 'qf-t7',
                title: '六本木之丘展望台',
                titleEn: 'Roppongi Hills',
                type: 'attraction',
                duration: '1小時',
                price: 1800,
                region: 'tokyo',
                description: '欣賞東京最美夜景。',
                descriptionEn: 'Sky Deck with a panoramic view of Tokyo.',
                lat: 35.6605,
                lng: 139.7291,
                tags: ['夜景', '浪漫'],
                insiderTip: {
                    teaser: 'Sky Deck 露天展望台',
                    full: {
                        story: '這裡是東京極少數可以走到室外的展望台，沒有玻璃擋住，拍出來的照片最漂亮。',
                        exactLocation: '森大樓 52F 與 屋頂',
                        mustTry: '拍攝東京鐵塔的倒影',
                        avoid: '風大時屋頂會不開放，請留意官網',
                        bestTime: '日落前 30 分鐘登頂'
                    }
                }
            }
        ],
        accommodation: [
            {
                id: 'qf-t8',
                title: '新宿王子大飯店',
                titleEn: 'Shinjuku Prince Hotel',
                type: 'hotel',
                duration: '0',
                price: 12000,
                region: 'tokyo',
                description: '交通便利的市中心住宿。',
                descriptionEn: 'Conveniently located hotel in the center of Shinjuku.',
                lat: 35.6946,
                lng: 139.7011,
                tags: ['住宿'],
                insiderTip: {
                    teaser: '新宿中心的高CP值景觀房',
                    full: {
                        story: '這間飯店直結西武新宿站，去新宿哪裡都快。指定「東側房間」可以看見整片歌舞伎町的霓虹燈火。大廳有無人行李寄放櫃，下午退房後還能繼續逛。',
                        exactLocation: 'B1 樓層有無人寄物櫃',
                        mustTry: '旁邊 2 樓的早餐吧，種類非常豐富',
                        avoid: '帶大件行李的建議走地下道，新宿路上人太多',
                        bestTime: '20:00 回飯店看夜景'
                    }
                }
            }
        ]
    },
    osaka: {
        morning: [
            {
                id: 'qf-o1',
                title: '大阪城公園',
                titleEn: 'Osaka Castle Park',
                type: 'attraction',
                duration: '2小時',
                price: 600,
                region: 'osaka',
                description: '大阪的地標，天守閣很壯觀。',
                descriptionEn: 'The landmark of Osaka, featuring the impressive castle tower.',
                lat: 34.6873,
                lng: 135.5262,
                tags: ['地標', '歷史'],
                insiderTip: {
                    teaser: '免費進城拍攝時段',
                    full: {
                        story: '傍晚時分，外圍的「西之丸庭園」配合夕陽，是拍攝大阪城最美的時刻。',
                        exactLocation: '西之丸庭園',
                        mustTry: '登上天守閣俯瞰大阪',
                        avoid: '避開正中午烈日，遮蔽物較少',
                        bestTime: '日落前 1 小時'
                    }
                }
            },
            {
                id: 'qf-o2',
                title: '黑門市場',
                titleEn: 'Kuromon Market',
                type: 'food',
                duration: '1小時',
                price: 1500,
                region: 'osaka',
                description: '大阪的廚房，美食吃不完。',
                descriptionEn: 'Known as "Osaka\'s Kitchen" with endless street food.',
                lat: 34.6655,
                lng: 135.5058,
                tags: ['美食', '市場'],
                insiderTip: {
                    teaser: '內行人的烤扇貝名店',
                    full: {
                        story: '找那種現場現烤的海鮮攤販。雖然很多店都漲價了，但找偏僻巷子裡的還是有驚喜。',
                        exactLocation: '市場中段小巷',
                        mustTry: '現烤奶油大干貝',
                        avoid: '太晚來 (15:00後) 很多店就收了',
                        bestTime: '09:00-11:00'
                    }
                }
            }
        ],
        afternoon: [
            {
                id: 'qf-o3',
                title: '海遊館',
                titleEn: 'Kaiyukan',
                type: 'attraction',
                duration: '2小時',
                price: 2400,
                region: 'osaka',
                description: '世界最大級的水族館。',
                descriptionEn: 'One of the world\'s largest aquariums.',
                lat: 34.6545,
                lng: 135.4289,
                tags: ['親子', '室內'],
                insiderTip: {
                    teaser: '鯨鯊餵食秀時間',
                    full: {
                        story: '一定要查好鯨鯊餵食秀的時間，那是整個水族館最震撼的景象。',
                        exactLocation: '太平洋主水槽前',
                        mustTry: '看水豚懶洋洋的樣子',
                        avoid: '週末下午人潮爆滿，建議平日前往',
                        bestTime: '平日 11:00 前'
                    }
                }
            },
            {
                id: 'qf-o4',
                title: '通天閣',
                titleEn: 'Tsutenkaku',
                type: 'attraction',
                duration: '45分',
                price: 800,
                region: 'osaka',
                description: '大阪地標，可俯瞰新世界區。',
                descriptionEn: 'The nostalgic landmark of Osaka in the Shinsekai district.',
                lat: 34.6524,
                lng: 135.5063,
                tags: ['地標', '復古'],
                insiderTip: {
                    teaser: '摸摸 Biliken 的腳底',
                    full: {
                        story: '據說摸摸這尊神像的腳底可以帶來好運。塔內最近新增了滑梯設施，膽子大的可以試試。',
                        exactLocation: '展望台樓層',
                        mustTry: '新世界串炸',
                        avoid: '排隊滑梯可能要很久，請衡量時間',
                        bestTime: '17:00 後'
                    }
                }
            }
        ],
        evening: [
            {
                id: 'qf-o5',
                title: '道頓堀',
                titleEn: 'Dotonbori',
                type: 'food',
                duration: '2小時',
                price: 2000,
                region: 'osaka',
                description: '固力果跑跑人必拍，章魚燒必吃！',
                descriptionEn: 'Famous for the Glico Man neon sign and street food.',
                lat: 34.6687,
                lng: 135.5012,
                tags: ['美食', '必去'],
                insiderTip: {
                    teaser: '隱藏在巷弄的法善寺',
                    full: {
                        story: '道頓堀主街太擠，可以去旁邊的「法善寺橫丁」體驗日式禪意氛圍。',
                        exactLocation: '法善寺橫丁',
                        mustTry: '章魚燒本家',
                        avoid: '拉客的人員',
                        bestTime: '19:00 後霓虹燈全開'
                    }
                }
            },
            {
                id: 'qf-o6',
                title: '阿倍野 HARUKAS',
                titleEn: 'Abeno Harukas',
                type: 'attraction',
                duration: '1小時',
                price: 1500,
                region: 'osaka',
                description: '日本最高大樓的百萬夜景。',
                descriptionEn: 'The tallest skyscraper in Japan with amazing observatory.',
                lat: 34.6458,
                lng: 135.5139,
                tags: ['夜景', '地標'],
                insiderTip: {
                    teaser: '無死角全景觀景台',
                    full: {
                        story: '58 到 60 樓是「HARUKAS 300」觀景台，中間天井區是開放空間，非常舒服。',
                        exactLocation: '阿倍野大廈 60F',
                        mustTry: '在觀景台吃點甜點',
                        avoid: '雨天能見度差，上去前先看即時影像',
                        bestTime: '魔幻時刻 (日落前後)'
                    }
                }
            }
        ],
        night: [
            {
                id: 'qf-o7',
                title: '梅田藍天大廈',
                titleEn: 'Umeda Sky Building',
                type: 'attraction',
                duration: '1小時',
                price: 1500,
                region: 'osaka',
                description: '空中庭園展望台。',
                descriptionEn: 'The Floating Garden Observatory with a unique circular roof.',
                lat: 34.7052,
                lng: 135.4905,
                tags: ['建築', '夜景'],
                insiderTip: {
                    teaser: '戶外螢光步道',
                    full: {
                        story: '屋頂的步道會發出螢光，在夜裡走起來非常夢幻，適合情侶。',
                        exactLocation: '空中庭園最高層',
                        mustTry: '搭乘超長透明手扶梯',
                        avoid: '冬天風很大，要注意保暖',
                        bestTime: '19:00 左右'
                    }
                }
            }
        ],
        accommodation: [
            {
                id: 'qf-o8',
                title: '難波瑞士南海飯店',
                titleEn: 'Swissotel Nankai Osaka',
                type: 'hotel',
                duration: '0',
                price: 14000,
                region: 'osaka',
                description: '直通南海難波站，交通超方便。',
                descriptionEn: 'Direct access to Namba Station, premium location.',
                lat: 34.6641,
                lng: 135.5019,
                tags: ['豪華', '便捷'],
                insiderTip: {
                    teaser: '直通機場快線的最強位置',
                    full: {
                        story: '飯店就在 Rapi:t 機場特急站正上方。36 樓的觀景餐廳可以看到完整的大阪南區全景。指定「高樓層」的話，房間內的備品通常是頂級品牌。',
                        exactLocation: '36 樓觀景台',
                        mustTry: '早餐的班尼迪克蛋，配上大阪市景',
                        avoid: '不建議訂沒有窗戶的內側房',
                        bestTime: '09:00 早餐時段'
                    }
                }
            }
        ]
    },
    melbourne: {
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
    }
};
