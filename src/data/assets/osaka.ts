import { TravelItem } from '../../types';

export const OSAKA_ASSETS: TravelItem[] = [
    {
        id: 'oa1',
        title: '通天閣',
        titleEn: 'Tsutenkaku Tower',
        type: 'attraction',
        duration: '1.5小時',
        image: '🗼',
        description: '大阪地標，可俯瞰新世界區。',
        price: 900,
        address: '大阪市浪速區惠美須東1-18-6',
        rating: 4.6,
        lat: 34.6524,
        lng: 135.5063,
        openingHours: '10:00-20:00',
        tags: ['地標'],
        region: 'osaka',
        insiderTip: {
            teaser: '幸運神 Billiken 的正確摸法',
            full: {
                story: '塔頂有「幸運神 Billiken」像，記得摸他的腳底板，據說會帶來好運。附近的「新世界」區域是大阪最復古的區域，串炸一條街必逛。推薦「だるま」串炸店，創業超過 90 年。',
                exactLocation: '展望台 5F 的 Billiken 神像旁',
                mustTry: '在新世界吃「元祖串カツ だるま」',
                avoid: '週末下午人最多，避開 14:00-17:00',
                bestTime: '17:00 後看夜景'
            }
        }
    },
    {
        id: 'oa2',
        title: '大阪城',
        titleEn: 'Osaka Castle',
        type: 'attraction',
        duration: '2小時',
        image: '🏯',
        description: '豐臣秀吉建造的名城，歷史博物館。',
        price: 600,
        address: '大阪市中央區大阪城1-1',
        rating: 4.7,
        lat: 34.6873,
        lng: 135.5262,
        openingHours: '09:00-17:00',
        tags: ['歷史'],
        region: 'osaka',
        insiderTip: {
            teaser: '免費進城拍攝的秘密時段',
            full: {
                story: '天守閣 17:00 關門，但外圍的「西之丸庭園」一直開放到日落。傍晚時分配合夕陽，是拍攝大阪城最美的時刻。春天櫻花季時，這裡有超過 600 棵櫻花樹。',
                exactLocation: '西之丸庭園的銀杏林旁',
                mustTry: '登上天守閣頂樓 8F，可 360 度俯瞰大阪',
                avoid: '不要買天守閣前的「忍者冰淇淋」，太貴又普通',
                bestTime: '日落前 1 小時'
            }
        }
    },
    {
        id: 'oa3',
        title: '道頓堀',
        titleEn: 'Dotonbori',
        type: 'attraction',
        duration: '3小時',
        image: '🦀',
        description: '大阪最熱鬧的美食街，固力果看板必拍！',
        price: 0,
        address: '大阪市中央區道頓堀1-9',
        rating: 4.8,
        lat: 34.6687,
        lng: 135.5012,
        openingHours: '24H',
        tags: ['必去', '美食'],
        region: 'osaka',
        insiderTip: {
            teaser: '避開觀光客陷阱的美食地圖',
            full: {
                story: '正對運河的店都是觀光客陷阱，貴又普通。往「法善寺橫丁」方向走，「たこ家道頓堀くくる」才是真正好吃的章魚燒。「明石燒」比章魚燒更好吃，要配高湯吃。',
                exactLocation: '法善寺橫丁入口處的「くくる」章魚燒',
                mustTry: '明石燒 + 大阪燒 + 串炸的組合',
                avoid: '不要吃「金龍拉麵」，只是便宜不是最好吃',
                bestTime: '19:00-22:00 霓虹燈最美'
            }
        }
    },
    {
        id: 'oa4',
        title: '環球影城 USJ',
        titleEn: 'Universal Studios Japan',
        type: 'attraction',
        duration: '整天',
        image: '🎢',
        description: '哈利波特、超級任天堂世界！',
        price: 8600,
        address: '大阪市此花區櫻島2-1-33',
        rating: 4.9,
        lat: 34.6654,
        lng: 135.4323,
        openingHours: '09:00-21:00',
        tags: ['樂園'],
        region: 'osaka',
        insiderTip: {
            teaser: '快速通關的聰明購買策略',
            full: {
                story: '快速通關分「4項」和「7項」，只有超級任天堂世界值得買。其他設施用「Single Rider」排隊，通常只要 10-15 分鐘。開園前 30 分鐘到門口，一開門先衝「超級任天堂世界」拿整理券。',
                exactLocation: 'Super Nintendo World 入口左邊的整理券機',
                mustTry: '奇諾比奧咖啡廳的「蘑菇濃湯」',
                avoid: '不要一開門就去哈利波特，先衝任天堂',
                bestTime: '平日開園前 30 分鐘到達'
            }
        }
    },
    {
        id: 'p2',
        title: 'Dotonbori Jazz Boat (Secret)',
        titleEn: 'Dotonbori Jazz Boat',
        marketingTitle: '道頓堀爵士觀光船 (隱藏版)',
        type: 'attraction',
        duration: '45分',
        image: '🎷',
        description: '不要去排大排長龍的觀光船。這艘船有現場爵士樂演奏。',
        address: '道頓堀川某個碼頭 (解鎖查看)',
        rating: 4.9,
        lat: 34.6687,
        lng: 135.5012,
        tags: ['浪漫', '音樂', '夜景'],
        region: 'osaka',
        tier: 'premium',
        isLocked: true,
        authorId: 'c-osaka',
        author: 'Osaka Fun Guide',
        coverImage: 'https://images.unsplash.com/photo-1590559891276-075c676f84d9?auto=format&fit=crop&q=80&w=800',
        insiderTip: {
            teaser: '只有 2 班的隱藏版觀光船',
            full: {
                story: '每天只有兩班（19:00, 20:30），船長是退役薩克斯風手。記得提前在官網預約，現場買不到票。可以自帶啤酒上船！',
                exactLocation: '解鎖後查看登船碼頭位置',
                mustTry: '帶一罐 Asahi 啤酒上船',
                avoid: '解鎖後查看',
                bestTime: '20:30 配合夜景最美'
            }
        }
    },
    {
        id: 'of1',
        title: '金龍拉麵',
        titleEn: 'Kinryu Ramen',
        type: 'food',
        duration: '30分',
        image: '🍜',
        description: '道頓堀24小時營業的人氣拉麵店。',
        price: 700,
        address: '道頓堀1-7-26',
        rating: 4.3,
        lat: 34.6682,
        lng: 135.5034,
        openingHours: '24H',
        tags: ['拉麵'],
        region: 'osaka',
        insiderTip: {
            teaser: '便宜但不是最好吃的選擇',
            full: {
                story: '金龍是觀光客常去的店，便宜（¥700）但味道普通。如果想吃真正好吃的拉麵，推薦走遠一點去「神座」（かむくら），湯頭有白菜甜味，是大阪人的最愛。',
                exactLocation: '道頓堀主街上，認明金龍招牌',
                mustTry: '如果要吃，加顆「溫泉蛋」¥100',
                avoid: '不要期待太高，吃個體驗就好',
                bestTime: '凌晨 2-4 點宵夜時段'
            }
        }
    },
    {
        id: 'of2',
        title: '章魚燒 くくる',
        titleEn: 'Takoyaki Kukuru',
        type: 'food',
        duration: '30分',
        image: '🐙',
        description: '大阪最有名的章魚燒本家。',
        price: 600,
        address: '道頓堀1-10-5',
        rating: 4.5,
        lat: 34.6685,
        lng: 135.5018,
        openingHours: '11:00-22:00',
        tags: ['小吃'],
        region: 'osaka',
        insiderTip: {
            teaser: '「明石燒」才是在地人的最愛',
            full: {
                story: '除了章魚燒，一定要試「明石燒」（明石焼き）！這是章魚燒的原型，外皮更軟嫩，要沾高湯吃。店內最人氣的是「大たこ入りたこ焼き」，章魚大到快爆出來。',
                exactLocation: '道頓堀本店，認明巨大章魚招牌',
                mustTry: '明石燒 (6顆 ¥580) + たこ焼き (8顆 ¥680)',
                avoid: '不要外帶，現吃熱騰騰的最好吃',
                bestTime: '11:00 或 17:00 人較少'
            }
        }
    },
    {
        id: 'of3',
        title: '千房大阪燒',
        titleEn: 'Chibo Okonomiyaki',
        type: 'food',
        duration: '1小時',
        image: '🥞',
        description: '大阪燒老字號，桌上自己煎。',
        price: 1500,
        address: '道頓堀1-5-5',
        rating: 4.4,
        lat: 34.6680,
        lng: 135.5020,
        openingHours: '11:00-23:00',
        tags: ['大阪燒'],
        region: 'osaka',
        insiderTip: {
            teaser: '自己煎才是道地大阪流',
            full: {
                story: '點「海鮮デラックス」（海鮮豪華版），會給你一大碗生麵糊和配料，自己在鐵板上煎。不會煎沒關係，按桌上的服務鈴，店員會來幫你。最後撒上大量的柴魚片和美乃滋，看柴魚片跳舞超療癒！',
                exactLocation: '道頓堀本店 2F，可以看到運河',
                mustTry: '海鮮デラックス + モダン焼き',
                avoid: '不要點太多，一份就很飽',
                bestTime: '11:30-13:00 有划算的套餐'
            }
        }
    },
    {
        id: 'oh1',
        title: '大阪洲際酒店',
        titleEn: 'InterContinental Osaka',
        type: 'hotel',
        duration: '過夜',
        image: '🏨',
        description: '梅田最高樓，無敵夜景。',
        price: 35000,
        address: '大阪市北區大深町3-60',
        rating: 4.8,
        lat: 34.7061,
        lng: 135.4947,
        tags: ['五星'],
        region: 'osaka',
        insiderTip: {
            teaser: '指定高樓層看大阪夜景',
            full: {
                story: '訂房時備註「高層部屋希望」，可以俯瞰整個梅田和遠處的大阪城。20F 的大廳有免費茶水和餅乾，黃昏時來這裡放空超棒。',
                exactLocation: 'Grand Front 大樓內',
                mustTry: '20F Lobby Lounge 的下午茶',
                avoid: '不要訂低樓層，景觀差很多',
                bestTime: '提前 2 週訂房'
            }
        }
    },
    {
        id: 'oh2',
        title: '心齋橋WBF飯店',
        titleEn: 'Hotel WBF Shinsaibashi',
        type: 'hotel',
        duration: '過夜',
        image: '🛏️',
        description: 'CP值超高，逛街超方便。',
        price: 12000,
        address: '大阪市中央區東心齋橋1-2-1',
        rating: 4.3,
        lat: 34.6750,
        lng: 135.5000,
        tags: ['平價'],
        region: 'osaka',
        insiderTip: {
            teaser: '有溫泉大浴場的平價商旅',
            full: {
                story: '頂樓有免費溫泉大浴場，在大阪這種價位很少見！早餐的大阪燒和章魚燒是現做的，超讚。房間雖小但五臟俱全。',
                exactLocation: '心齋橋商店街旁',
                mustTry: '早餐的現做章魚燒',
                avoid: '不要訂最便宜的房型，太小幾乎沒法打開行李箱',
                bestTime: '泡湯避開 21:00-22:00'
            }
        }
    }
];
