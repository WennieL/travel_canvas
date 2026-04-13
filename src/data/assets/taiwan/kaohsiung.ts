import { TravelItem } from '../../../types';

export const KAOHSIUNG_ASSETS: TravelItem[] = [
    {
        id: 'kh-a1',
        title: '駁二藝術特區',
        titleEn: 'Pier-2 Art Center',
        type: 'attraction',
        duration: '3小時',
        image: '🎨',
        coverImage: 'https://images.unsplash.com/photo-1647685101882-6bd1835e3263?auto=format&fit=crop&q=80&w=800',
        description: '原本是廢棄倉庫，現在是高雄最有活力的文創基地與藝術殿堂。',
        descriptionEn: 'Formerly abandoned warehouses, now Kaohsiung\'s most vibrant creative hub and art center.',
        price: 0,
        address: '高雄市鹽埕區大勇路1號',
        rating: 4.8,
        lat: 22.6190,
        lng: 120.2815,
        region: 'kaohsiung',
        authorId: 'c-tw1',
        openingHours: '10:00-18:00',
        tags: ['文青', '藝術', '免門票'],
        themeColor: '#3498DB',
        expertStories: [
            {
                id: 'must-do',
                label: '必逛推薦',
                labelEn: 'Must Visit',
                summary: '大義區的紅磚巷弄',
                summaryEn: 'Red Brick Alleys of Dayi',
                story: '大多數人擠在大勇區拍照，但大義區的紅磚倉庫與綠意造景才是有質感的精華。那裡的夕陽光影非常迷人。',
                storyEn: 'While most people crowd Dayong, Dayi\'s red brick warehouses and greenery are the true refined spots. The sunset shadows there are stunning.'
            },
            {
                id: 'artisan',
                label: '職人風景',
                labelEn: 'Artisan View',
                summary: '觀察舊倉庫的鋼鐵結構',
                summaryEn: 'Industrial Steel Structures',
                story: '駁二保留了大量的舊港口鋼鐵結構。仔細看那些鏽蝕的痕跡，那是高雄作為鋼鐵之都、工業港口的歷史寫照。',
                storyEn: 'Pier-2 preserves many old harbor steel structures. Look at the rust - it\'s the historical portrayal of Kaohsiung as a steel and industrial port.'
            },
            {
                id: 'trap',
                label: '排隊誤區',
                labelEn: 'Waiting Trap',
                summary: '熱門餐廳建議平日預約',
                summaryEn: 'Book Popular Eats on Weekdays',
                story: '駁二內部的熱門餐廳假日往往一位難求。建議下午三點這種離峰時段去，或是乾脆回鹽埕老街區吃。',
                storyEn: 'Popular spots inside are packed on weekends. Try 3 PM during off-peak, or head back to the old Yancheng street for eats.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '大港橋的旋轉時刻',
                summaryEn: 'Great Harbor Bridge Spin',
                story: '每天下午三點，大港橋會進行水平旋轉秀。不只是橋本身美，從對岸拍過來的弧線更是極具動感。',
                storyEn: 'The bridge spins horizontally daily at 3 PM. It\'s not just the bridge; the dynamic curves captured from the opposite shore are amazing.'
            }
        ],
        insiderTip: {
            teaser: '不要只逛大勇路，大義區更有質感',
            teaserEn: 'Dayi area has even more character than Dayong',
            full: {
                story: '駁二分為大勇、蓬萊、大義三個區。大多數觀光客聚集在大勇區，但如果你喜歡精緻的手作小店與藝廊，大義區（靠近輕軌大義站）才是精華所在。那邊的紅磚牆配上黃昏的陽光，拍照最美。',
                storyEn: 'Pier-2 has three areas: Dayong, Penglai, and Dayi. While tourists flock to Dayong, Dayi (near the LRT station) holds the best boutiques and galleries. Its red brick walls are stunning in the late afternoon sun.',
                exactLocation: '高雄輕軌 C12 駁二大義站對面',
                exactLocationEn: 'Opposite LRT C12 Pier-2 Dayi Station',
                mustTry: '在大義區找一間手作工坊體驗',
                mustTryEn: 'Try a DIY workshop in the Dayi area',
                avoid: '週末人潮眾多，建議平日造訪',
                avoidEn: 'Very crowded on weekends; weekdays are better',
                bestTime: '16:00',
                bestTimeEn: '16:00'
            }
        }
    },
    {
        id: 'kh-a2',
        title: '旗津彩虹教堂',
        titleEn: 'Cijin Rainbow Church',
        type: 'attraction',
        duration: '1.5小時',
        image: '🌈',
        coverImage: 'https://images.unsplash.com/photo-1528148332152-6a68364b66df?auto=format&fit=crop&q=80&w=800',
        description: '旗津海岸線上的絕美藝術裝置，是高雄著名的婚紗拍攝與網美打卡地。',
        descriptionEn: 'Stunning art installation on the Cijin coastline, famous for wedding photos and social media.',
        price: 0,
        address: '高雄市旗津區旗津三路990號',
        rating: 4.5,
        lat: 22.5925,
        lng: 120.2741,
        region: 'kaohsiung',
        authorId: 'c-tw1',
        openingHours: '24H',
        tags: ['攝影', '網美', '沿海'],
        themeColor: '#E74C3C',
        expertStories: [
            {
                id: 'must-do',
                label: '必拍推薦',
                labelEn: 'Must Photo',
                summary: '幾何線條與海平面的交會',
                summaryEn: 'Geometry Meets Horizon',
                story: '彩虹教堂的魅力在於其俐落的線條。要在兩根柱子的中心點拍攝，讓後方的海平面正好落在黃金比例處，畫面最震撼。',
                storyEn: 'The charm lies in its clean lines. Shoot from the center of the pillars, letting the horizon fall on the golden ratio for the most striking shot.'
            },
            {
                id: 'artisan',
                label: '光影風景',
                labelEn: 'Light & Shadow',
                summary: '觀察色塊的陰影落點',
                summaryEn: 'Watch the Color Shadows',
                story: '彩虹般的色彩在海邊強烈日照下會投射出鮮豔的陰影。觀察光影在地面上的變化，能拍出更具層次感的作品。',
                storyEn: 'Intense seaside sun casts vivid shadows of the rainbow colors. Watching the play of light on the ground adds depth to your photography.'
            },
            {
                id: 'trap',
                label: '排隊誤區',
                labelEn: 'Waiting Trap',
                summary: '假日排隊可能超過 30 分鐘',
                summaryEn: '30+ Min Queue on Weekends',
                story: '這裡是網美聖地，假日人潮眾多且排隊動線單一。如果不想浪費時間，建議在早上 10 點前或傍晚 5 點後造訪。',
                storyEn: 'A social media hotspot with slow-moving weekend queues. To save time, visit before 10 AM or after 5 PM.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '旁邊的向東拍海景同樣震撼',
                summaryEn: 'Eastward Sea Views Nearby',
                story: '大家都盯著教堂拍，但其實旁邊延伸出去的海堤視角更自然。往東邊拍過去，大理石般的浪花同樣非常迷人。',
                storyEn: 'Everyone focuses on the church, but the nearby sea wall offers a more natural view. The marble-like waves to the east are equally amazing.'
            }
        ],
        insiderTip: {
            teaser: '記得早點去，不然排隊拍照要很久',
            teaserEn: 'Go early to avoid long photo queues',
            full: {
                story: '雖然是人工景點，但在海天一色的背景下，彩虹教堂的幾何結構確實非常有張力。建議下午 4 點左右去，那時的光影最柔和，拍完還可以直接去旁邊看旗津著名的夕陽。',
                storyEn: 'Despite being a man-made spot, its geometric structure against the sea is striking. Go around 4 PM for soft lighting, then catch the famous Cijin sunset right next door.',
                exactLocation: '旗津海岸公園內',
                exactLocationEn: 'Inside Cijin Coastal Park',
                mustTry: '搭配後方的海平面拍出延伸感',
                mustTryEn: 'Use the ocean horizon for depth in photos',
                avoid: '中午太陽極大，完全沒有遮蔽物',
                avoidEn: 'The noon sun is intense with no shade nearby',
                bestTime: '16:00-17:30',
                bestTimeEn: '16:00-17:30'
            }
        }
    },
    {
        id: 'kh-f1',
        title: '老江紅茶牛奶',
        titleEn: 'Lao Jiang Milk Tea',
        type: 'food',
        duration: '30分',
        image: '🥛',
        coverImage: 'https://images.unsplash.com/photo-1544787210-2213d44ad53e?auto=format&fit=crop&q=80&w=800',
        description: '創立於1953年的高雄茶飲傳奇，以獨特的炭燒茶香與現烤火腿蛋吐司聞名。',
        descriptionEn: 'A Kaohsiung legend since 1953, famous for charcoal-smoked tea and toasted ham & egg sandwiches.',
        price: 80,
        address: '高雄市新興區中正四路51號',
        rating: 4.6,
        lat: 22.6312,
        lng: 120.3015,
        region: 'kaohsiung',
        authorId: 'c-tw1',
        openingHours: '24H',
        tags: ['早餐', '宵夜', '老店'],
        themeColor: '#E67E22',
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃推薦',
                labelEn: 'Must Eat',
                summary: '火腿蛋吐司 + 紅茶牛奶',
                summaryEn: 'Ham & Egg Toast + Milk Tea',
                story: '老江的標配就是這個。現烤吐司抹上奶油，夾入半熟蛋與火腿，再配上一口帶著焦香味的紅茶牛奶，完美。',
                storyEn: 'Lao Jiang\'s signature set. Toasted buttered bread with a soft egg and ham, paired with smoky milk tea. Perfection.'
            },
            {
                id: 'artisan',
                label: '職人精神',
                labelEn: 'Artisanship',
                summary: '堅持不加冰塊的濃度',
                summaryEn: 'Chilled Without Dilution',
                story: '老江的紅茶牛奶是冰鎮後直接賣，絕對不加冰塊沖淡濃度。這份對比例的堅持，是維持一甲子風味的秘訣。',
                storyEn: 'Lao Jiang\'s milk tea is sold chilled with no ice added, ensuring No dilution. This persistence in ratio is the 60-year secret of its flavor.'
            },
            {
                id: 'trap',
                label: '口味提醒',
                labelEn: 'Sugar Reminder',
                summary: '紅茶甜度固定無法調整',
                summaryEn: 'Fixed Sugar - No Adjustment',
                story: '老江的紅茶預設是傳統甜度。如果你平常喝無糖，這可能會讓你覺得偏甜。建議配著鹹味吐司一起吃。',
                storyEn: 'The tea uses traditional sugar levels. If you prefer sugar-free, it might taste sweet. Pair it with savory toast.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '老派手工台中檸檬餅',
                summaryEn: 'Retro Handmade Lemon Cakes',
                story: '櫃檯旁邊常賣的小蛋糕、檸檬餅也是很多高雄人的童年回憶。買一個當點心，體驗最老派的高雄味。',
                storyEn: 'The tiny cakes and lemon biscuits by the counter are childhood memories for many locals. Grab one for a vintage Kaohsiung snack.'
            }
        ],
        insiderTip: {
            teaser: '紅茶牛奶要微冰，吐司要半熟蛋',
            teaserEn: 'Get milk tea with light ice and a soft egg in your toast',
            full: {
                story: '老江最有名的就是那個帶著焦香味的紅茶。在地人的標配是「火腿蛋吐司 + 紅茶牛奶」。一定要提醒老闆蛋要「半熟」，當蛋黃流在現烤微焦的吐司上時，那才是高雄人的道地靈魂早餐。',
                storyEn: 'Lao Jiang\'s signature is its smoky black tea. The local standard is "Ham & Egg Toast + Milk Tea." Always ask for a soft/runny egg - that yolk on crispy toast is the true soul of Kaohsiung breakfast.',
                exactLocation: '南台路與中正路交叉口',
                exactLocationEn: 'Corner of Nantai Rd and Zhongzheng Rd',
                mustTry: '火腿蛋吐司（半熟蛋）',
                mustTryEn: 'Ham & Egg Toast (Soft Egg)',
                avoid: '紅茶牛奶不能調整甜度（對現代人來說偏甜）',
                avoidEn: 'Sugar levels are fixed (quite sweet for modern tastes)',
                bestTime: '23:00（當宵夜最過癮）',
                bestTimeEn: '23:00 (Perfect for midnight snack)'
            }
        }
    },
    {
        id: 'kh-f2',
        title: '岡山舊市羊肉',
        titleEn: 'Gangshan Old Store Mutton',
        type: 'food',
        duration: '1小時',
        image: '🥘',
        coverImage: 'https://images.unsplash.com/photo-1547928576-a4a33237eceb?auto=format&fit=crop&q=80&w=800',
        description: '高雄港都的溫暖補給，傳承三代的現宰溫體羊肉料理。',
        descriptionEn: 'Kaohsiung\'s warm supply. Three generations of fresh local mutton cuisine.',
        price: 450,
        address: '高雄市岡山區河華路111號',
        rating: 4.7,
        lat: 22.7930,
        lng: 120.2950,
        region: 'kaohsiung',
        authorId: 'c-tw1',
        openingHours: '11:00-20:30',
        tags: ['岡山特色', '溫體羊', '老店'],
        themeColor: '#BA4A00',
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃推薦',
                labelEn: 'Must Eat',
                summary: '溫體羊肉爐 + 特製豆瓣醬',
                summaryEn: 'Mutton Pot + House Bean Paste',
                story: '岡山羊肉之所以出名，在於其肉質緊實且毫無腥羶味。一定要沾上那特製的甜辣豆瓣醬，才是正宗吃法。',
                storyEn: 'Gangshan mutton is famous for its firm texture and lack of gaminess. Dipping it into the sweet & spicy bean paste is the only way to go.'
            },
            {
                id: 'artisan',
                label: '職人精神',
                labelEn: 'Artisanship',
                summary: '傳承三代的屠宰切肉刀工',
                summaryEn: '3 Gen Meat Cutting Skill',
                story: '觀察師傅處理羊肉的手勢。如何處理筋膜、如何切出最嫩的部位，這都是傳承三代的職人祕方。',
                storyEn: 'Observe the master’s handling of the meat—removing membranes and slicing the most tender cuts are secrets passed down through three generations.'
            },
            {
                id: 'trap',
                label: '停車預警',
                labelEn: 'Parking Warning',
                summary: '店門口路段易塞車',
                summaryEn: 'Traffic Jams Near Entrance',
                story: '舊市羊肉位於河華路核心，用餐時段路邊停車極難。建議停在附近的公立停車場再步行過街。',
                storyEn: 'Located on Hehua Rd hotspot, street parking is near impossible during meals. Use nearby public lots and walk over.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '內行必點「涼拌羊肚」',
                summaryEn: 'Pro Pick: Cold Mutton Tripe',
                story: '除了熱騰騰的火鍋，涼拌羊肚的脆口與酸辣度是最好的開胃菜，很多在地老饕一坐下來先點的就是這份。',
                storyEn: 'Beyond the hot pot, the crunch and tang of cold mutton tripe is the perfect appetizer. Local foodies make this their first order.'
            }
        ],
        insiderTip: {
            teaser: '羊肉爐是靈魂，炒羊肉是技術',
            teaserEn: 'The hot pot is the soul, the stir-fry is the skill',
            full: {
                story: '岡山三寶之一就是羊肉。這間老店堅持用溫體羊，沒有羊羶味。內行人一定會點「当歸羊肉爐」配上「沙茶炒羊肉」。醬料一定要沾特製豆瓣醬，那才是最正宗的高雄吃法。',
                storyEn: 'Gangshan\'s famous mutton. This shop uses fresh meat only, with no gamey smell. Pros order "Angelica Mutton Hot Pot" and "Shaté Stir-fry." The house-made bean paste is a must for the authentic Kaohsiung experience.',
                exactLocation: '岡山河華路上',
                exactLocationEn: 'On Hehua Rd, Gangshan',
                mustTry: '當歸羊肉爐 + 豆瓣醬',
                mustTryEn: 'Angelica Mutton Hot Pot + Bean Paste',
                avoid: '假日用餐時段，現場候位通常要一小時',
                avoidEn: 'Peak weekend hours; usually a 1-hour wait',
                bestTime: '17:00 (避開六點人潮)',
                bestTimeEn: '17:00 (Avoid the 6 PM rush)'
            }
        }
    },
    {
        id: 'kh-f3',
        title: '和諧蔬食',
        titleEn: 'Veg Harmony Cafe',
        type: 'food',
        duration: '1小時',
        image: '🥗',
        coverImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
        description: '高雄質感蔬食料理，將在地食材轉化為充滿現代感的蔬食體驗。',
        descriptionEn: 'High-quality vegetarian cuisine in Kaohsiung, transforming local ingredients into modern plant-based experiences.',
        price: 300,
        address: '高雄市新興區',
        rating: 4.8,
        lat: 22.6280,
        lng: 120.2980,
        region: 'kaohsiung',
        authorId: 'c-tw1',
        openingHours: '11:30-20:00',
        tags: ['素食友善', '文青蔬食'],
        themeColor: '#27AE60',
        expertStories: [
            {
                id: 'must-eat',
                label: '必吃推薦',
                labelEn: 'Must Eat',
                summary: '創意時蔬塔塔 + 雜糧包',
                summaryEn: 'Veggie Tartare + Multigrain',
                story: '這裡的蔬食不僅是「不吃肉」，更是對植物風味的重新定義。推薦當季的創意塔塔，口感清新且充滿土地氣息。',
                storyEn: 'Not just "meat-free," but a redefinition of plant flavors. Try the seasonal tartare - fresh and full of earthy notes.'
            },
            {
                id: 'artisan',
                label: '職人美學',
                labelEn: 'Artisan View',
                summary: '如畫般的精緻擺盤',
                summaryEn: 'Cuisine Like Paintings',
                story: '主廚將每道菜都當作藝術品。看著那些色彩豐富的有機蔬菜在盤中跳躍，視覺享受完全不輸給味覺。',
                storyEn: 'The chef treats every dish as art. Seeing the colorful organic veggies dancing on the plate is a visual feast matching the taste.'
            },
            {
                id: 'trap',
                label: '訂位提醒',
                labelEn: 'Booking Reminder',
                summary: '晚餐時段人潮較多',
                summaryEn: 'Crowded Dinner Hours',
                story: '店內空間營造的是一種寧靜感，因此座位間距較大。如果不先訂位，很容易因為人滿而必須候位一小時以上。',
                storyEn: 'The space prioritizes tranquility with wide spacing. Without a reservation, expect a 1+ hour wait during dinner.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '特製冷萃茶伴食',
                summaryEn: 'Special Cold Brew Tea Pairing',
                story: '別只點咖啡。這裡的冷萃茶選用高山茶葉，低溫慢萃出的清乾能完美中和蔬食的細微甜度，是絕佳伴餐。',
                storyEn: 'Don’t just get coffee. The high-mountain cold brew tea offers a clean crispness that perfectly balances the veggie sweetness.'
            }
        ],
        insiderTip: {
            teaser: '讓肉食主義者也會驚艷的蔬食',
            teaserEn: 'Vegetarian food that wows even meat-lovers',
            full: {
                story: '誰說高雄只有海鮮？這間蔬食餐廳用精細的料理手法，讓蔬菜呈現出口感層次。店內氣氛寧靜，非常適合在繁忙的港都行程中休息片刻。',
                storyEn: 'Who says Kaohsiung is only seafood? This place uses refined techniques to create layers of texture from vegetables. The quiet atmosphere is perfect for a mid-trip break.',
                exactLocation: '新興區巷弄內',
                exactLocationEn: 'In the alleys of Xinxing District',
                mustTry: '當季創意蔬食主餐',
                mustTryEn: 'Seasonal creative vegetarian main dish',
                avoid: '店內座位不多，建議提早預約',
                avoidEn: 'Limited seating; book ahead',
                bestTime: '13:00',
                bestTimeEn: '13:00'
            }
        }
    },
    {
        id: 'kh-exp1',
        title: '駁二木工手作體驗',
        titleEn: 'Pier-2 Woodworking Class',
        type: 'experiential',
        duration: '2小時',
        image: '🪵',
        coverImage: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800',
        description: '在鹽埕老港區的鐵道旁，親手打造屬於自己的木藝生活小物。',
        descriptionEn: 'Near the historic port railway, hand-craft your own wooden lifestyle items.',
        price: 800,
        address: '高雄市鹽埕區駁二大義區',
        rating: 4.9,
        lat: 22.6185,
        lng: 120.2820,
        region: 'kaohsiung',
        authorId: 'c-tw1',
        openingHours: '11:00-18:00',
        tags: ['手作', '文創體驗', '高雄限定'],
        themeColor: '#7E5109',
        expertStories: [
            {
                id: 'must-do',
                label: '體驗核心',
                labelEn: 'Core Experience',
                summary: '親手刨出屬於你的木紋',
                summaryEn: 'Plane Your Own Wood Grain',
                story: '在師傅指導下，掌握刨刀的力道。隨著木屑捲出，台灣檜木那種淡雅的清香會瞬間充滿整個空間。',
                storyEn: 'Under the master’s guidance, master the plane. As wood shavings curl out, the elegant scent of Taiwan Cypress fills the space.'
            },
            {
                id: 'artisan',
                label: '職人風景',
                labelEn: 'Artisan View',
                summary: '觀摩老式木工機具的律動',
                summaryEn: 'Witness Old Wood Machines',
                story: '工坊內保留了許多半自動的老式木工機器。看著軸心轉動與切削的過程，能感受到工業與手工交界的美感。',
                storyEn: 'The workshop keeps semi-auto vintage machines. Watching the rotation and cutting reveals the beauty at the junction of industry and craft.'
            },
            {
                id: 'trap',
                label: '服裝建議',
                labelEn: 'Dress Code',
                summary: '避免穿著過於寬鬆的衣物',
                summaryEn: 'Avoid Loose Clothing',
                story: '操作木工機具需要高度專注。請務必穿著輕便合身、且不要穿涼鞋或露趾拖鞋，以確保操作安全。',
                storyEn: 'Woodworking requires focus. Wear light, fitted clothes; no sandals or open-toe shoes for safety around machines.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '收集剩餘的檜木屑回家',
                summaryEn: 'Take Home Cypress Shavings',
                story: '體驗完後，有些剩餘的純天然檜木屑可以裝入小袋中。帶回家放在衣櫥或車內，就是最天然的高雄香。',
                storyEn: 'After the class, pack some natural cypress shavings into small pouches. Place them in your closet or car for a natural Kaohsiung scent.'
            }
        ],
        insiderTip: {
            teaser: '聞著木頭香，聽進港的汽笛聲',
            teaserEn: 'Smell the wood, hear the ship whistles',
            full: {
                story: '大義區的倉庫轉型為精緻手作空間。在這裡你可以學會從選木、切割到打磨。推薦製作「檜木杯墊」，檜木的香氣會讓你的高雄記憶一直延續。',
                storyEn: 'Dayi warehouses turned into craft spaces. Learn everything from selecting wood to sanding. Recommended: Cypris coasters - the scent will keep your Kaohsiung memories alive.',
                exactLocation: '駁二大義區 C8 倉庫',
                exactLocationEn: 'Pier-2 Dayi Area, Warehouse C8',
                mustTry: '台灣檜木手作小物',
                mustTryEn: 'Taiwanese Cypress hand-made crafts',
                avoid: '手作課程耗時較長，請預留兩小時',
                avoidEn: 'Workshops take time; allow at least 2 hours',
                bestTime: '14:00',
                bestTimeEn: '14:00'
            }
        }
    },
    {
        id: 'kh-h1',
        title: '高雄洲際酒店',
        titleEn: 'InterContinental Kaohsiung',
        type: 'hotel',
        duration: '0',
        image: '🏨',
        coverImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
        description: '位於亞洲新灣區核心，結合先進奢華硬體與港都人文底蘊的全新旗艦飯店。',
        descriptionEn: 'Located in the Asia New Bay Area, a flagship hotel blending modern luxury with harbor heritage.',
        price: 6000,
        address: '高雄市前鎮區新光路33號',
        rating: 4.9,
        lat: 22.6105,
        lng: 120.3031,
        region: 'kaohsiung',
        authorId: 'c-tw1',
        tags: ['奢華', '海景', '新開幕'],
        themeColor: '#1B2631',
        expertStories: [
            {
                id: 'must-do',
                label: '入住推薦',
                labelEn: 'Stay Perk',
                summary: '在洲際客房享受「數位導覽」',
                summaryEn: 'Digital Tour in Your Room',
                story: '每間房都配備了最新的智能服務。躺在床上用 iPad 點一杯特色雞尾酒，是港都奢華旅行的最佳寫造。',
                storyEn: 'Every room features smart services. Ordering a craft cocktail via iPad while lying on the bed is the peak of harbor luxury.'
            },
            {
                id: 'artisan',
                label: '設計風景',
                labelEn: 'Design View',
                summary: '大廳頂部動態光影裝置',
                summaryEn: 'Dynamic Canopy Light Art',
                story: '飯店大廳的半圓頂模擬了深海的波紋。隨著時間變化，光影會呈現不同的流動感，如同置身蔚藍海底。',
                storyEn: 'The lobby dome mimics deep-sea ripples. Dynamic light flows change with time, making you feel submerged in a brilliant blue ocean.'
            },
            {
                id: 'trap',
                label: '交通提醒',
                labelEn: 'Traffic Note',
                summary: '三多商圈週末易車潮多',
                summaryEn: 'Sanduo Dist. Weekend Congestion',
                story: '飯店靠近熱門百貨區。如果您預計週末開車抵達，請考慮三多路段的車潮，建議使用飯店的禮賓車預約服務。',
                storyEn: 'Near popular malls. If driving on weekends, expect heavy traffic on Sanduo Rd. Consider using the hotel’s concierge car service.'
            },
            {
                id: 'hidden',
                label: '在地隱藏版',
                labelEn: 'Local Hidden Gem',
                summary: '預約「秘密行政廊道」午茶',
                summaryEn: 'Secret Executive Tea Booking',
                story: '除了公開餐廳，行政樓層的午茶時段能欣賞到最完整的亞灣景色。那種安靜與尊榮感是在地老饕的首選。',
                storyEn: 'Beyond public diners, executive lounge tea offers complete bay views. That quiet exclusivity is the top choice for local elite.'
            }
        ],
        insiderTip: {
            teaser: '飯店內的酒吧「BL.T 33」氣氛極佳',
            teaserEn: 'The BL.T 33 bar has amazing vibes',
            full: {
                story: '飯店空間設計非常現代化，融入了高雄港的元素。如果你不打算住宿，強烈推薦去一樓的 BL.T 33 酒吧喝一杯，或是去「WA-RA」日式餐廳體驗結合光影秀的沉浸式餐飲。',
                storyEn: 'The modern design incorporates harbor elements. Even if not staying, visit BL.T 33 bar or WA-RA Japanese restaurant for their immersive light show dining experience.',
                exactLocation: '亞洲新灣區靠近高雄展覽館',
                exactLocationEn: 'Near Kaohsiung Exhibition Center',
                mustTry: 'WA-RA 餐廳的沉浸式光影晚餐',
                mustTryEn: 'The immersive light-show dinner at WA-RA',
                avoid: '假日大廳人潮較多，建議提前預約餐廳',
                avoidEn: 'Lobby gets busy on weekends; book restaurants ahead',
                bestTime: '20:00',
                bestTimeEn: '20:00'
            }
        }
    }
];
