import { SurvivalGuide } from '../../types';

export const TAIPEI_SURVIVAL: SurvivalGuide = {
    regionId: 'taipei',
    topics: [
        {
            id: 'mrt-etiquette',
            icon: 'Subway',
            category: 'culture',
            title: '台北捷運：潛規則與禮儀',
            titleEn: 'MRT Nuances & Etiquette',
            teaser: '像個在地人一樣搭捷運',
            teaserEn: 'Ride like a local',
            content: '在台北搭捷運，絕對不能飲食（連水都不行）。電扶梯請「靠右站立」，左側是給趕時間的人通行的巷道。進出站時請禮讓下車乘客，先下後上是台北引以為傲的排隊文化。',
            contentEn: 'No eating or drinking (even water) is permitted on the MRT, with heavy fines. Always stand on the right side of escalators; the left is for those in a hurry. Let passengers off first—it\'s the pride of Taipei queue culture.',
            imageUrl: 'https://images.unsplash.com/photo-1579309323793-270638575080?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 'trash-logic',
            icon: 'Trash2',
            category: 'culture',
            title: '神祕消失的街道垃圾桶',
            titleEn: 'The Missing Bin Phenomenon',
            teaser: '為什麼街邊沒有垃圾桶？',
            teaserEn: 'Where did the bins go?',
            content: '台北市區為了落實垃圾分類，街道垃圾桶極少。若有垃圾，請攜帶至捷運站出口、便利商店（部分有垃圾桶），或帶回飯店丟棄。這是台北人公認最「不方便但環保」的默契。',
            contentEn: 'You\'ll struggle to find public trash bins in Taipei as part of zero-waste and recycling policies. Carry a small bag or dispose of items at MRT stations and convenience stores. It\'s an unwritten rule of the city.',
            imageUrl: 'https://images.unsplash.com/photo-1595273670150-db0d3bf39241?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 'tpass-savings',
            icon: 'Ticket',
            category: 'transport',
            title: 'TPASS：台北通勤省錢神器',
            titleEn: 'TPASS: The Daily Saver',
            teaser: '台北移動的最強方案',
            teaserEn: 'The best way to save',
            content: '如果你會在台北/新北待超過 5 天且頻繁移動，一定要考慮「TPASS 1200」。只要 1200 元即可在 30 天內無限次搭乘北北基桃的所有捷運、公車、台鐵與 UBike（前 30 分鐘免費）。',
            contentEn: 'If staying for 5+ days, consider the "TPASS 1200". For 1,200 TWD, you get 30 days of unlimited rides on all MRTs, buses, trains, and UBikes (first 30 mins free) across Greater Taipei. It\'s a huge money-saver.',
            imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800'
        }
    ]
};
