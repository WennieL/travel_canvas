import { TravelItem } from '../types';

// Melbourne 咖啡 & 巷弄景點
export const MELBOURNE_ASSETS: TravelItem[] = [
    // ===== COFFEE SPOTS =====
    {
        id: 'mel-1',
        title: 'Patricia Coffee Brewers',
        titleEn: 'Patricia Coffee Brewers',
        type: 'food',
        duration: '30min',
        image: '☕',
        description: '墨爾本最具代表性的站立式咖啡店，沒有座位是它的特色',
        descriptionEn: 'Iconic standing-room-only coffee bar, a true Melbourne ritual',
        price: 5,
        address: 'Little Bourke St, Melbourne CBD',
        rating: 4.8,
        region: 'melbourne',
        tags: ['咖啡', '在地體驗', '必訪'],
        tier: 'premium',
        marketingTitle: '站著喝咖啡的儀式感',
        marketingTitleEn: 'The Standing Coffee Ritual',
        insiderTip: {
            teaser: '站著喝咖啡的儀式感咖啡店',
            teaserEn: 'The iconic standing coffee ritual spot',
            full: {
                story: '這裡沒有座位，站著喝咖啡是墨爾本在地人的儀式感。但如果你 8:30 以前到，吧台最左邊有個小角落可以靠著放包包。',
                storyEn: 'No seats here - standing while drinking is the local ritual. But arrive before 8:30am and there\'s a small corner on the left side of the bar where you can rest your bag.',
                exactLocation: '從 Little Bourke St 進入，不是 Little Collins 那邊的入口',
                mustTry: 'Batch Brew ($4.50) - 不要點 Latte，這裡的精品豆用手沖才對味',
                avoid: '週末人超多，平日早上最佳。沒有 WiFi，也沒有座位，純粹體驗咖啡',
                bestTime: '08:00-09:00'
            }
        }
    },
    {
        id: 'mel-2',
        title: 'Brother Baba Budan',
        titleEn: 'Brother Baba Budan',
        type: 'food',
        duration: '30min',
        image: '☕',
        description: '天花板掛滿椅子的網紅咖啡店，Seven Seeds 姐妹店',
        descriptionEn: 'Chairs hanging from ceiling, sister cafe of Seven Seeds',
        price: 6,
        address: 'Little Bourke St, Melbourne CBD',
        rating: 4.7,
        region: 'melbourne',
        tags: ['咖啡', '網紅店', '特色裝潢'],
        tier: 'premium',
        marketingTitle: '天花板的秘密',
        marketingTitleEn: 'Secrets from the Ceiling',
        insiderTip: {
            teaser: '天花板掛滿椅子的網紅咖啡店',
            teaserEn: 'The famous cafe with chairs on the ceiling',
            full: {
                story: '這是 Seven Seeds 的姐妹店，天花板掛滿椅子是它的標誌。比起拍照打卡，在地人更在意的是他們的 Single Origin Filter。',
                storyEn: 'Sister cafe of Seven Seeds. Locals care more about their Single Origin Filter than the Instagram-famous ceiling.',
                exactLocation: '往巷子裡走，不是路邊那家',
                mustTry: '問 barista "What\'s the guest roaster today?" 他們每週換不同烘豆師',
                avoid: '座位超少，外帶比較實際',
                bestTime: '09:30-10:30'
            }
        }
    },
    // ===== LANEWAYS & ART =====
    {
        id: 'mel-3',
        title: 'Hosier Lane 塗鴉巷',
        titleEn: 'Hosier Lane Street Art',
        type: 'attraction',
        duration: '45min',
        image: '🎨',
        description: '墨爾本最著名的街頭藝術巷弄，塗鴉每天都在變化',
        descriptionEn: 'Melbourne\'s most famous street art laneway, art changes daily',
        price: 0,
        address: 'Hosier Lane, Melbourne CBD',
        rating: 4.6,
        region: 'melbourne',
        tags: ['街頭藝術', '拍照', '免費'],
        tier: 'premium',
        marketingTitle: '會呼吸的藝術廊',
        marketingTitleEn: 'The Living Art Gallery',
        insiderTip: {
            teaser: '墨爾本最著名的塗鴉巷',
            teaserEn: 'Melbourne\'s most famous graffiti lane',
            full: {
                story: '觀光客都從 Flinders Lane 入口進去，人擠人很難拍照。從 Flinders St 那端進去人少很多，而且光線更好。',
                storyEn: 'Tourists enter from Flinders Lane and it\'s crowded. Enter from Flinders St instead - fewer people and better lighting.',
                exactLocation: '從 Flinders St 入口，往上走',
                mustTry: '早上 10 點前光線最柔和，下午 4 點後有金色陽光灑進巷子',
                avoid: '避開中午 12-2 點，旅行團最多',
                bestTime: '10:00-11:00 或 16:00-17:00'
            }
        }
    },
    {
        id: 'mel-4',
        title: 'Degraves Street',
        titleEn: 'Degraves Street',
        type: 'food',
        duration: '1hr',
        image: '🥐',
        description: '歐式風情的美食街道，充滿咖啡香與活力',
        descriptionEn: 'European-style laneway filled with cafes and energy',
        price: 20,
        address: 'Degraves St, Melbourne CBD',
        rating: 4.5,
        region: 'melbourne',
        tags: ['美食', '咖啡', '巷弄'],
        tier: 'premium',
        marketingTitle: '巴黎小巷的錯覺',
        marketingTitleEn: 'A Parisian Illusion',
        insiderTip: {
            teaser: '歐式風情的美食街道',
            teaserEn: 'European-style food street',
            full: {
                story: '遊客都去排隊的網紅店，但在地人都去 Degraves Espresso Bar — 1999 年開的老店，咖啡比隔壁便宜又好喝。',
                storyEn: 'Tourists queue at trendy spots, but locals go to Degraves Espresso Bar - open since 1999, cheaper and better coffee.',
                exactLocation: '從 Flinders St Station 對面進入',
                mustTry: 'Degraves Espresso 的 Toastie（烤起司三明治）只要 $8，完勝網紅店',
                avoid: '不要去店門口有排隊的那幾家，通常是觀光客陷阱',
                bestTime: '12:00-13:00'
            }
        }
    },
    // ===== HIDDEN BARS =====
    {
        id: 'mel-5',
        title: 'Eau de Vie',
        titleEn: 'Eau de Vie Speakeasy',
        type: 'food',
        duration: '1.5hr',
        image: '🥃',
        description: '書架後的 1920 年代禁酒時期風格隱藏酒吧',
        descriptionEn: '1920s speakeasy hidden behind a bookshelf',
        price: 25,
        address: 'Malthouse Lane, Melbourne CBD',
        rating: 4.9,
        region: 'melbourne',
        tags: ['隱藏酒吧', '調酒', '氣氛'],
        tier: 'premium',
        isLocked: true,
        marketingTitle: '書架後的秘密',
        marketingTitleEn: 'Secret Behind the Bookshelf',
        insiderTip: {
            teaser: '書架後的 1920 年代禁酒時期酒吧',
            teaserEn: 'A 1920s speakeasy hidden behind a bookshelf',
            full: {
                story: '這間隱藏酒吧入口是一扇沒有標示的門，進去後會看到一個假書架 — 推開它就是酒吧。但真正的秘密是：書架後面還有另一個房間，叫 Whisky Room，只有熟客才知道。',
                storyEn: 'Enter through an unmarked door, find a fake bookshelf - push it to enter. But the real secret: there\'s another room behind called the Whisky Room, known only to regulars.',
                exactLocation: 'Malthouse Lane，找有門鈴的無標示黑門，按鈴等人開門',
                mustTry: '問 bartender "本週的 hidden menu"，他們有不在菜單上的實驗調酒',
                avoid: '週五晚上 8 點後要排隊，平日 7 點到最佳',
                bestTime: '19:00-20:00'
            }
        }
    },
    {
        id: 'mel-6',
        title: 'Berlin Bar',
        titleEn: 'Berlin Bar',
        type: 'food',
        duration: '1.5hr',
        image: '🍺',
        description: '東西柏林主題酒吧，需要按門鈴才能進入',
        descriptionEn: 'East vs West Berlin themed bar, ring the doorbell to enter',
        price: 20,
        address: 'Corrs Lane, Melbourne CBD',
        rating: 4.7,
        region: 'melbourne',
        tags: ['隱藏酒吧', '主題酒吧', '體驗'],
        tier: 'premium',
        isLocked: true,
        marketingTitle: '柏林圍牆的另一邊',
        marketingTitleEn: 'The Other Side of the Wall',
        insiderTip: {
            teaser: '東西柏林主題酒吧',
            teaserEn: 'East vs West Berlin themed bar',
            full: {
                story: '找到發光的熊標誌就對了。按門鈴後會有人來開門，進去後你會被帶到「東柏林」或「西柏林」— 兩邊氛圍完全不同。',
                storyEn: 'Look for the glowing bear sign. Ring the doorbell and someone will escort you to either "East Berlin" or "West Berlin" - completely different vibes.',
                exactLocation: 'Corrs Lane，找發光的熊招牌',
                mustTry: '跟工作人員說你想體驗「另一邊」，他們會帶你穿過牆壁的秘密門',
                avoid: '別太早到，9 點以後氣氛最好',
                bestTime: '21:00-23:00'
            }
        }
    },
    {
        id: 'mel-7',
        title: 'Jungle Boy',
        titleEn: 'Jungle Boy Tiki Bar',
        type: 'food',
        duration: '1.5hr',
        image: '🌴',
        description: '躲在三明治店冷藏庫後的熱帶 Tiki 酒吧',
        descriptionEn: 'Tropical tiki bar hidden behind a sandwich shop\'s coolroom door',
        price: 22,
        address: 'Chapel St, Windsor',
        rating: 4.8,
        region: 'melbourne',
        tags: ['隱藏酒吧', 'Tiki', '調酒'],
        tier: 'premium',
        isLocked: true,
        marketingTitle: '冷藏庫後的熱帶天堂',
        marketingTitleEn: 'Tropical Paradise Behind the Coolroom',
        insiderTip: {
            teaser: '三明治店冷藏庫後的熱帶 Tiki 酒吧',
            teaserEn: 'Tiki bar hidden behind a sandwich shop cooler',
            full: {
                story: '這家店的入口是一間紐約風格的三明治店。走到最後面你會看到一個巨大的冷藏庫門 — 拉開它，裡面是完全另一個世界：熱帶植物、Tiki 調酒、和好聽的音樂。',
                storyEn: 'The entrance is through a NY-style sandwich shop. Walk to the back and pull open the massive coolroom door - inside is a tropical paradise with tiki cocktails and great music.',
                exactLocation: 'Chapel St Windsor，找 Bowery to Williamsburg 三明治店',
                mustTry: 'Zombie 調酒，但一人限點兩杯（太烈了）',
                avoid: '週末超級滿，建議週四晚上去',
                bestTime: '20:00-22:00'
            }
        }
    },
    {
        id: 'mel-8',
        title: 'New Gold Mountain',
        titleEn: 'New Gold Mountain',
        type: 'food',
        duration: '1.5hr',
        image: '🏮',
        description: '唐人街的秘密樓上酒吧，需要找到隱藏入口',
        descriptionEn: 'Secret upstairs bar in Chinatown, find the hidden entrance',
        price: 25,
        address: 'Little Bourke St, Chinatown',
        rating: 4.8,
        region: 'melbourne',
        tags: ['隱藏酒吧', '唐人街', '氛圍'],
        tier: 'premium',
        isLocked: true,
        marketingTitle: '新金山的秘密',
        marketingTitleEn: 'Secrets of the New Gold Mountain',
        insiderTip: {
            teaser: '唐人街的秘密樓上酒吧',
            teaserEn: 'Secret upstairs bar in Chinatown',
            full: {
                story: '在唐人街找一輛停著的腳踏車和門口的「21」號牌。推開金色的門往上走，你會進入一個兩層樓的 lounge，氛圍從 1850 淘金熱時代穿越而來。',
                storyEn: 'In Chinatown, look for a parked bicycle and the number "21" above a gold door. Push through and walk up to a two-level lounge with vibes from the 1850s gold rush era.',
                exactLocation: 'Little Bourke St，找腳踏車和金色門上的「21」',
                mustTry: '二樓的沙發區比較私密，適合約會',
                avoid: '一樓有時候會辦活動，建議直接上二樓',
                bestTime: '20:00-22:00'
            }
        }
    }
];

export default MELBOURNE_ASSETS;
