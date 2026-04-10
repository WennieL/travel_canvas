import { TravelItem } from '../../types';

export const CHIAYI_ASSETS: TravelItem[] = [
    {
        id: 'cy-a1',
        title: '阿里山日出雲海',
        titleEn: 'Alishan Sunrise & Cloud Sea',
        type: 'attraction',
        duration: '4小時',
        image: '🌅',
        description: '台灣最富盛名的五大奇景之一，清晨旭日從玉山山脈後升起的瞬間，照亮整片翻騰雲海。',
        descriptionEn: 'One of Taiwan\'s most famous sights. Watch the morning sun rise behind the Yushan Range, illuminating the churning sea of clouds.',
        price: 200,
        address: '嘉義縣阿里山國家風景區',
        rating: 4.9,
        lat: 23.5100,
        lng: 120.8100,
        region: 'chiayi',
        authorId: 'c-tw1',
        openingHours: '24H',
        tags: ['日出', '雲海', '森林奇景'],
        themeColor: '#27AE60',
        expertStories: [
            {
                id: 'must-do',
                label: '必看推薦',
                labelEn: 'Must See',
                summary: '小笠原山的 360 度環景',
                summaryEn: '360° View at Ogasawara',
                story: '大多數人停在祝山，但再走十分鐘到小笠原山，你會看到完全沒有遮蔽的玉山主峰與雲海，那種震撼是無與倫比的。',
                storyEn: 'Most people stop at Zhushan. Walk 10 mins more to Ogasawara for an unobstructed view of Yushan Peak and the sea of clouds. The impact is incomparable.'
            },
            {
                id: 'artisan',
                label: '職人風景',
                labelEn: 'Artisan View',
                summary: '觀測雲海流動的氣象學',
                summaryEn: 'Watching Cloud Flow',
                story: '清晨的風向決定了雲海的形狀。看著雲朵像瀑布一樣翻過山頭，那是大自然最精彩的動態演演。',
                storyEn: 'Morning wind directions shape the clouds. Watching them pour over peaks like waterfalls is nature\'s finest dynamic performance.'
            },
            {
                id: 'trap',
                label: '保暖誤區',
                labelEn: 'Cold Trap',
                summary: '夏天也要穿羽絨外套',
                summaryEn: 'Down Jacket - Even in Summer',
                story: '阿里山海拔兩千公尺，日出時刻氣溫極低。即使是夏天，清晨也只有 10 度左右。沒帶保暖衣物絕對會凍僵。',
                storyEn: 'At 2000m, Alishan is freezing at dawn. Even in summer, temps drop to 10°C. Without warm gear, you will freeze.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '日出後的森林寂靜感',
                summaryEn: 'Post-Sunrise Forest Silence',
                story: '日出結束後人潮會散去。這時留在觀景台或在森林步道走走，那種只剩下鳥鳴的寂靜，才是阿里山最美的時刻。',
                storyEn: 'Crowds leave after sunrise. Staying at the lookout or walking forest paths then - with only birdsong - is Alishan\'s truly beautiful moment.'
            }
        ],
        insiderTip: {
            teaser: '不要只去祝山，小笠原山視野更好',
            teaserEn: 'Don\'t stop at Zhushan; Ogasawara has better views',
            full: {
                story: '大多數人下了小火車就停在祝山觀日平台，但如果你再往前走 10 分鐘到小笠原山展望台，那裡有 360 度的環景視野，更少遮蔽、人也稍微少一點。記得看好日出時間表。',
                storyEn: 'Most people stop at the Zhushan platform after the train. But walk 10 mins more to Ogasawara Lookout for a 360-degree view with fewer obstructions and crowds. Check the sunrise schedule carefully.',
                exactLocation: '祝山車站步行10分鐘至小笠原山展望台',
                exactLocationEn: '10-min walk from Zhushan Station to Ogasawara Lookout',
                mustTry: '在展望台等第一道晨光灑下的瞬間',
                mustTryEn: 'Wait for the very first ray of morning light at the lookout',
                avoid: '不要太晚拿火車票，建議前一天預約',
                avoidEn: 'Don\'t wait too late for tickets; book a day ahead',
                bestTime: '05:00 - 07:00 (依季節變動)',
                bestTimeEn: '05:00 - 07:00 (Varies by season)'
            }
        }
    },
    {
        id: 'cy-a2',
        title: '林鐵本線火車',
        titleEn: 'Alishan Forest Railway',
        type: 'attraction',
        duration: '3小時',
        image: '🚂',
        description: '世界僅存的三個登山鐵道之一，沿線跨越熱帶、暖帶、溫帶三種林相變化。',
        descriptionEn: 'One of the world\'s three remaining mountain railways, traversing tropical, temperate, and alpine forests.',
        price: 450,
        address: '嘉義市至阿里山站',
        rating: 4.8,
        lat: 23.4800,
        lng: 120.4500,
        region: 'chiayi',
        authorId: 'c-tw1',
        openingHours: '依林鐵官網公告',
        tags: ['歷史', '鐵道', '森林'],
        themeColor: '#C0392B',
        expertStories: [
            {
                id: 'must-do',
                label: '必搭推薦',
                labelEn: 'Must Ride',
                summary: '螺旋狀登山路段',
                summaryEn: 'The Spiral Climb Sections',
                story: '阿里山林鐵最出名的是「螺旋形旋轉」爬升。看著火車迴旋在山腰，海拔迅速升高，這在世界鐵道史上是極其罕見的奇景。',
                storyEn: 'Alishan\'s spiral climb is famous. Watching the train loop around slopes as elevation spikes is a rare sight in global railway history.'
            },
            {
                id: 'artisan',
                label: '職人精神',
                labelEn: 'Artisanship',
                summary: '維護百年窄軌的鐵道師',
                summaryEn: 'Centenary Narrow-Gauge Care',
                story: '林鐵是窄軌系統。每天清晨都有巡軌員檢查路況。看著那些老式機關車頭運轉，是代代鐵道員堅持的工藝傳承。',
                storyEn: 'A narrow-gauge system. Track walkers check daily at dawn. Watching vintage locomotives run is a legacy preserved by generations of railway workers.'
            },
            {
                id: 'trap',
                label: '訂票誤區',
                labelEn: 'Ticket Trap',
                summary: '一定要前 15 天線上搶票',
                summaryEn: 'Must Book Online 15 Days Prior',
                story: '林鐵名額極少。如果您想坐本線火車，務必在開放第一時間線上預訂。現場買票幾乎不可能買到。',
                storyEn: 'Seats are minimal. To ride the main line, book online the second it opens. Buying on-site is nearly impossible.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '獨立山站的「螺旋」體感',
                summaryEn: 'Independent Hill Spiral Feel',
                story: '火車會在獨立山繞行三圈。你可以從窗戶看到不同高度的村落，這種空間交錯感非常有趣。',
                storyEn: 'The train loops Independent Hill three times. Seeing the same village from different heights offers a fascinating spatial shift.'
            }
        ],
        insiderTip: {
            teaser: '選擇慢行的森林火車，感受海拔的律動',
            teaserEn: 'Choose the slow forest train to feel the elevation',
            full: {
                story: '雖然開車比較快，但坐火車才能看見那些藏在深山裡的小站。車輪與鐵軌的碰撞聲，配上窗外的林木倒影，是來到阿里山最浪漫的儀式。',
                storyEn: 'Driving is faster, but the train reveals hidden mountain stations. The rhythmic clacking of rails and forest reflections outside the window are the most romantic part of the Alishan ritual.',
                exactLocation: '從嘉義火車站出發',
                exactLocationEn: 'Departs from Chiayi Station',
                mustTry: '買一張硬式車票留作紀念',
                mustTryEn: 'Get a hard-cover ticket as a souvenir',
                avoid: '週末票極難搶，務必上線守候',
                avoidEn: 'Weekend tickets sell out instantly; stay alert online',
                bestTime: '平日早班車',
                bestTimeEn: 'Weekday morning trains'
            }
        }
    },
    {
        id: 'cy-f1',
        title: '阿宏師火雞肉飯',
        titleEn: 'Ah Hong Shi Turkey Rice',
        type: 'food',
        duration: '45分',
        image: '🍚',
        description: '嘉義人心中的靈魂，肉質鮮嫩、雞油香氣濃郁的經典代表。',
        descriptionEn: 'The soul of Chiayi. A classic representative with tender meat and aromatic chicken oil.',
        price: 60,
        address: '嘉義市東區光華路108號',
        rating: 4.7,
        lat: 23.4760,
        lng: 120.4520,
        region: 'chiayi',
        authorId: 'c-tw1',
        openingHours: '10:00-20:00',
        tags: ['嘉義靈魂', '必吃', '平民美食'],
        themeColor: '#D35400',
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃推薦',
                labelEn: 'Must Eat',
                summary: '火雞肉片飯 + 半熟蛋',
                summaryEn: 'Sliced Turkey Rice + Soft Egg',
                story: '一定要點「肉片」而不是碎肉。帶皮的火雞肉更有韌性。把半熟蛋黃攪拌進雞油醬汁裡，那是極致的享受。',
                storyEn: 'Order sliced meat over shredded. Sliced turkey with skin has better texture. Mix that runny yolk into the chicken-oil sauce for peak bliss.'
            },
            {
                id: 'artisan',
                label: '在地風景',
                labelEn: 'Local View',
                summary: '觀察火雞肉的切片厚度',
                summaryEn: 'Watch the Sliced Thickness',
                story: '每一家火雞肉飯都有自己的切肉風格。觀察老闆利落地把大片火雞肉切成剛剛好的厚度，那是嘉義街頭最美的動態。',
                storyEn: 'Every shop has its own cutting style. Watching the owner deftly slice large turkey pieces to perfect thickness is Chiayi\'s best street view.'
            },
            {
                id: 'trap',
                label: '排隊誤區',
                labelEn: 'Waiting Trap',
                summary: '中午 12 點前就會賣完',
                summaryEn: 'Sold Out Before Noon',
                story: '有些名店的「火雞肉片飯」是限量的，往往十一點半就賣完。建議十點半就把這餐當早午餐吃。',
                storyEn: 'Famous shops\' sliced turkey rice is limited and often gone by 11:30 AM. Arrive at 10:30 AM for an early lunch.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '點一份在地特色的涼菜',
                summaryEn: 'Order Local Cold Sides',
                story: '嘉義火雞肉飯的標配還有各式「涼菜」（如涼麵、涼筍）。醬汁通常帶點甜，配上肉飯非常解膩。',
                storyEn: 'Standard sides are "cold dishes" (cool noodles or bamboo). The sweetish sauce pairs perfectly with the savory rice.'
            }
        ],
        insiderTip: {
            teaser: '火雞肉片飯才是老饕的最終歸宿',
            teaserEn: 'The sliced turkey rice is the true foodie choice',
            full: {
                story: '不要只點碎肉版的肉飯，一定要點「火雞肉片飯」。大塊帶皮的腿肉更有口感，配上一顆半熟荷包蛋，讓蛋黃與雞油醬汁交融，那才是幸福感爆發的時刻。',
                storyEn: 'Don\'t just settle for shredded meat; order the "Sliced Turkey Rice." Large chunks of skin-on thigh meat provide better texture. Pair it with a runny egg - that yolk mixed with chicken oil is pure bliss.',
                exactLocation: '光華路與忠孝路口',
                exactLocationEn: 'Corner of Guanghua and Zhongxiao Rd',
                mustTry: '火雞肉片飯 + 半熟蛋',
                mustTryEn: 'Sliced Turkey Rice + Soft Egg',
                avoid: '用餐尖峰時段排隊很長，建議 11:00 抵達',
                avoidEn: 'Long queues at peak times; try to arrive by 11:00',
                bestTime: '11:00',
                bestTimeEn: '11:00'
            }
        }
    },
    {
        id: 'cy-f2',
        title: '霜空咖啡',
        titleEn: 'Shimokone Coffee',
        type: 'food',
        duration: '1.5小時',
        image: '🍰',
        description: '隱身嘉義巷弄的日式復古空間，提供精緻的甜點與舒適的蔬食輕食選擇。',
        descriptionEn: 'Japanese-style retro space hidden in Chiayi alleys, offering refined desserts and comfortable vegetarian light meals.',
        price: 300,
        address: '嘉義市西區',
        rating: 4.8,
        lat: 23.4780,
        lng: 120.4480,
        region: 'chiayi',
        authorId: 'c-tw1',
        openingHours: '12:00-18:00',
        tags: ['蔬食友善', '文青咖啡', '美學空間'],
        themeColor: '#7D6608',
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃推薦',
                labelEn: 'Must Eat',
                summary: '層次豐富的霜空點心盤',
                summaryEn: 'The Detailed Dessert Platter',
                story: '這是店內的視覺與味覺擔當。每一口甜點都像是一幅畫，結合了時令水果與細緻的鮮奶油，配上手沖咖啡是絕配。',
                storyEn: 'The visual and taste centerpiece. Each bite of dessert is like a painting, blending seasonal fruits and delicate cream - a perfect match for pour-over coffee.'
            },
            {
                id: 'artisan',
                label: '美學風景',
                labelEn: 'Artisan View',
                summary: '日式診所改建的留白美',
                summaryEn: 'Minimalism in an Old Clinic',
                story: '空間保留了許多老診所的木造結構與通透感。陽光灑進長廊的瞬間，那種靜謐的時光流逝感是這裡最有價值的風景。',
                storyEn: 'The space keeps the wooden structure and transparency of an old clinic. When sunlight hits the hallway, the silent flow of time is the most valuable view.'
            },
            {
                id: 'trap',
                label: '入店需知',
                labelEn: 'Store Rules',
                summary: '環境安靜不適合大聲交談',
                summaryEn: 'Silence Required for Vibe',
                story: '霜空非常安靜，店家也致力於維持這種氛圍。如果您是多位好友聚會想熱烈聊天，這裡可能不是最佳選擇。',
                storyEn: 'Shimokone is very quiet, and the staff works hard to keep it that way. If you’re a large group looking to chat loudly, this isn’t the best spot.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '窗邊座位的光影魔法',
                summaryEn: 'Window Seat Shadow Magic',
                story: '如果有機會，一定要坐在靠窗的位子。看著嘉義巷弄裡的日常在窗外流動，是文青圈內公開的療癒視角。',
                storyEn: 'If possible, grab a window seat. Watching the daily Chiayi alley life flow outside is a known healing view in the indie circle.'
            }
        ],
        insiderTip: {
            teaser: '嘉義最美的留白空間',
            teaserEn: 'The most beautiful minimal space in Chiayi',
            full: {
                story: '這裡原本是老診所改建，充滿了時間留下的味道。除了著名的甜點盤，他們的輕食也有許多素食者可食的選擇，食材都是嘉義在地的恩惠。',
                storyEn: 'Converted from an old clinic, this space is full of history. Beyond their famous dessert platters, the light meals offer many vegetarian options using local Chiayi ingredients.',
                exactLocation: '長榮街巷弄內',
                exactLocationEn: 'In the alleys of Changrong St',
                mustTry: '霜空點心盤',
                mustTryEn: 'Shimokone Dessert Platter',
                avoid: '不能訂位，且店內需要保持安靜',
                avoidEn: 'No reservations; silence is required inside',
                bestTime: '13:00',
                bestTimeEn: '13:00'
            }
        }
    },
    {
        id: 'cy-exp1',
        title: '石棹茶園揉茶體驗',
        titleEn: 'Shizhuo Tea Making DIY',
        type: 'experiential',
        duration: '2小時',
        image: '🍵',
        description: '在海拔1300公尺的茶園中，親手體驗揉捻茶青，感受高山茶的生命力。',
        descriptionEn: 'At 1300m elevation, experience hand-kneading tea leaves and feel the vitality of high-mountain tea.',
        price: 600,
        address: '嘉義縣阿里山鄉石棹地區',
        rating: 4.9,
        lat: 23.4700,
        lng: 120.6900,
        region: 'chiayi',
        authorId: 'c-tw1',
        openingHours: '需預約',
        tags: ['手作', '茶文化', '高山風景'],
        themeColor: '#1E8449',
        expertStories: [
            {
                id: 'must-do',
                label: '體驗推薦',
                labelEn: 'Must Do',
                summary: '雙手感受茶青的溫度與溼度',
                summaryEn: 'Feel the Leaf Temp & Moisture',
                story: '揉茶不僅是體力活，更是感官與植物的連結。親手揉捻出茶汁的瞬間，那一抹清甜的高山氣息是非常震撼的。',
                storyEn: 'Kneading tea is not just physical; it\'s a sensory link with nature. The moment the juices release, the sweet alpine scent is overwhelming.'
            },
            {
                id: 'artisan',
                label: '職人風景',
                labelEn: 'Artisan View',
                summary: '觀看老師傅控制發酵的精準',
                summaryEn: 'Mastering Fermentation Precision',
                story: '揉完茶後的發酵時間掌握，全憑老師傅的經驗與嗅覺。看著他們如何判斷茶葉轉色的瞬間，那是多年功力的累積。',
                storyEn: 'Controlling fermentation time after kneading relies purely on the master’s smell and experience. Witnessing their judgment of leaf color shifts is seeing decades of skill.'
            },
            {
                id: 'trap',
                label: '預約誤區',
                labelEn: 'Booking Trap',
                summary: '海拔較高需注意氣候變化',
                summaryEn: 'Note High elevation Weather',
                story: '石棹氣候多變，午後常起大霧。即使預約了課程，也建議稍微提早一點上山，以免山路大霧影響行程興致。',
                storyEn: 'Shizhuo weather is fickle; fog hits often in the afternoon. Even with a booking, arrive early to avoid dense mountain fog ruining the trip.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '體驗後一定要喝杯「石棹烏龍」',
                summaryEn: 'Must Drink Shizhuo Oolong',
                story: '揉完茶後，跟茶農坐下來喝杯道地的烏龍。聽他們講述這片土地的故事，這才是最完整的深度體驗。',
                storyEn: 'After the DIY, sit with the farmers for authentic Oolong. Hearing them talk about the land makes for a complete deep-dive.'
            }
        ],
        insiderTip: {
            teaser: '把自己揉進這片山霧中',
            teaserEn: 'Knead yourself into the mountain mist',
            full: {
                story: '石棹以烏龍茶聞名。在茶農帶領下，你會學會如何掌握力道去揉捻茶葉。當茶香從指尖散發出來時，你會對手中的這杯茶有全新的認識。',
                storyEn: 'Shizhuo is famous for Oolong. Under the tea farmer\'s guidance, learn the gentle pressure needed for kneading. When the aroma releases from your fingers, you\'ll see your cup of tea in a new light.',
                exactLocation: '石棹特定茶廠',
                exactLocationEn: 'Specific tea factories in Shizhuo',
                mustTry: '親手製作的茶葉帶回家',
                mustTryEn: 'Taking home your hand-made tea leaves',
                avoid: '採茶季人手較忙，務必提早兩週預約',
                avoidEn: 'Farmers are busy during harvest; book 2 weeks ahead',
                bestTime: '10:00 (早晨山霧散去時)',
                bestTimeEn: '10:00 (When morning mist clears)'
            }
        }
    },
    {
        id: 'cy-h1',
        title: '阿里山賓館',
        titleEn: 'Alishan House',
        type: 'hotel',
        duration: '0',
        image: '🏨',
        description: '全台海拔最高的五星級飯店，百年歷史底蘊，在房內就能看日落。',
        descriptionEn: 'The highest 5-star hotel in Taiwan with 100 years of history. Watch sunset from your room.',
        price: 7000,
        address: '嘉義縣阿里山國家森林遊樂區',
        rating: 4.7,
        lat: 23.5110,
        lng: 120.8080,
        region: 'chiayi',
        authorId: 'c-tw1',
        tags: ['歷史', '風景', '頂級'],
        themeColor: '#6E2C00',
        expertStories: [
            {
                id: 'must-do',
                label: '入住推薦',
                labelEn: 'Stay Perk',
                summary: '在歷史館露台看晚霞',
                summaryEn: 'Sunset on History Terrace',
                story: '歷史館的六樓露台擁有全遊樂區最棒的晚霞視角。看著火燒雲在中央山脈後方翻動，是無與倫比的感官饗宴。',
                storyEn: 'The 6F terrace of the history wing has the recreation area’s best sunset view. Watching the burning clouds churn behind the central range is an unmatched feast.'
            },
            {
                id: 'artisan',
                label: '歷史風景',
                labelEn: 'Historic View',
                summary: '沈浸在百年紅檜的香氣中',
                summaryEn: 'Immersion in Centenary Cypress',
                story: '歷史館是一座古老的木造建築。走在長廊上，每一口呼吸都是淡淡的木頭香氣，那是支撐這座建築百年的靈魂。',
                storyEn: 'The history wing is an old wooden structure. Every breath in its corridors is a faint scent of cypress - the soul that has supported the building for a century.'
            },
            {
                id: 'trap',
                label: '入園提示',
                labelEn: 'Entry Note',
                summary: '需先支付進入森林遊樂區門票',
                summaryEn: 'Park Entry Fee Required First',
                story: '即使已經預訂飯店，進入阿里山國家森林遊樂區還是需要購買門票與支付停車費。請務必在入園口先處理好。',
                storyEn: 'Even with a hotel booking, you still need to buy park entry and parking tickets at the forest area gate. Please handle this first.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '夜間觀星導覽不容錯過',
                summaryEn: 'Don\'t Miss Night Stargazing',
                story: '飯店常有配合的專業觀星導覽。由於海拔高且無光害，你能在這裡清晰看見銀河系與各種星座，非常夢幻。',
                storyEn: 'The hotel often has professional stargazing tours. At this height without light pollution, the Milky Way and constellations are incredibly clear and dreamy.'
            }
        ],
        insiderTip: {
            teaser: '一定要去歷史館的頂樓觀星',
            teaserEn: 'Visit the historical wing\'s rooftop for stargazing',
            full: {
                story: '飯店分為現代館與歷史館。歷史館保留了大量檜木，非常有味道。而頂樓的露台是看星星的最棒地點，銀河就在你頭頂上。',
                storyEn: 'Divided into Modern and Historical wings. The latter features cypress wood and rich heritage. The rooftop terrace is unbeatable for stargazing; the Milky Way is right above you.',
                exactLocation: '阿里山國家森林遊樂區內',
                exactLocationEn: 'Inside Alishan National Forest Recreation Area',
                mustTry: '歷史館頂樓日落與星空',
                mustTryEn: 'Sunset and stars from the historical wing rooftop',
                avoid: '價格較高，但位置無可取代',
                avoidEn: 'Premium price, but the location is irreplaceable',
                bestTime: '20:00 觀星',
                bestTimeEn: '20:00 for stars'
            }
        }
    }
];
