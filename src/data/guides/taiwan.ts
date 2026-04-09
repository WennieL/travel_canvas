import { SurvivalGuide } from '../../types';

export const TAIWAN_SURVIVAL: SurvivalGuide = {
    regionId: 'taiwan',
    topics: [
        {
            id: 'airport-transit',
            icon: 'Plane',
            category: 'transport',
            title: '機場到市區：捷運與快捷',
            titleEn: 'Airport to City: Transit Guide',
            teaser: '下飛機後的第一站',
            teaserEn: 'Your first leg of the journey',
            content: '從桃園機場到台北，搭乘「機場捷運 (Airport MRT)」是最推薦的方式。紫色的是直達車 (Express)，只要 35 分鐘即可抵達台北車站；藍色的是普通車，沿途站站停。若行李較多或於深夜抵達，建議預約接送或搭乘計程車。',
            contentEn: 'From Taoyuan Airport, the "Airport MRT" is your best bet. Purple trains are Express (35 mins to Taipei Main Station); Blue trains are Commuter (stops at every station). For heavy luggage or late-night arrivals, grab a taxi or pre-booked shuttle.',
            imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 'transport-easycard',
            icon: 'CreditCard',
            category: 'transport',
            title: '悠遊卡：全台通行的靈魂',
            titleEn: 'EasyCard: The Soul of Taiwan',
            teaser: '一卡在手，全台無阻',
            teaserEn: 'One card for all of Taiwan',
            content: '悠遊卡 (EasyCard) 是台灣生活的核心。除了各大城市的捷運與公車，便利商店、甚至部分鐵路 (TRA) 都能使用。你可以在機場或任何便利商店購買並加值。請記得「進站刷卡，出站也要刷卡」的規則。',
            contentEn: 'The EasyCard is essential for MRT, buses, and convenience stores nationwide. You can buy and top it up at the airport or any 7-11/FamilyMart. Remember to "tap in and tap out" for all public transport.',
            imageUrl: 'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 'connectivity-esim',
            icon: 'Wifi',
            category: 'connectivity',
            title: '行動網路與連線',
            titleEn: 'Connectivity & eSIM',
            teaser: '在台灣隨時保持在線',
            teaserEn: 'Stay connected anywhere',
            content: '建議抵達前先購買 eSIM，下機即可連結全台覆蓋率極高的 5G 網路。若需要頻繁撥打在地電話或註冊 UBike，可在機場電信櫃檯購買實體預付卡。台灣的 Wi-Fi 覆蓋率很高，但移動中 5G 依然是首選。',
            contentEn: 'Pre-buy an eSIM for instant 5G coverage upon arrival. If you need a local number for app registrations (like UBike), get a physical pre-paid SIM at airport booths. Mobile data is generally fast and reliable across the island.',
            imageUrl: 'https://images.unsplash.com/photo-1512428559083-a401c3d82b55?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 'finance-cash',
            icon: 'Banknote',
            category: 'finance',
            title: '現金支付與硬幣邏輯',
            titleEn: 'Cash & Payments',
            teaser: '台灣的小店不收信用卡',
            teaserEn: 'Small shops prefer cash',
            content: '雖然大城市的大型商場支援各種電子支付，但台灣靈魂所在的「夜市」與「巷弄小店」幾乎只收現金（部分接受悠遊卡）。建議隨身準備 1000-3000 TWD，並多保留一些 100 元紙鈔，它是小額消費的王道。',
            contentEn: 'While big malls take cards/mobile pay, Taiwan\'s best "alley gems" and night market stalls are cash-only. Keep 1,000-3,000 TWD on hand, mostly in 100 TWD bills for easy payment at smaller vendors.',
            imageUrl: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800'
        }
    ]
};
