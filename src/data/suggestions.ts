export const ALL_SUGGESTIONS: Record<string, Record<string, any[]>> = {
    kyoto: {
        morning: [
            { id: 'qf-k1', title: '清水寺', titleEn: 'Kiyomizu-dera', type: 'attraction', duration: '2小時', price: 400, region: 'kyoto', description: '京都最古老的寺院，必去！' },
            { id: 'qf-k2', title: '伏見稻荷大社', titleEn: 'Fushimi Inari Taisha', type: 'attraction', duration: '1.5小時', price: 0, region: 'kyoto', description: '千本鳥居真的很壯觀。' }
        ],
        afternoon: [
            { id: 'qf-k3', title: '嵐山竹林', titleEn: 'Arashiyama Bamboo Grove', type: 'attraction', duration: '1小時', price: 0, region: 'kyoto', description: '幽靜的竹林小徑。' },
            { id: 'qf-k4', title: '金閣寺', titleEn: 'Kinkaku-ji', type: 'attraction', duration: '45分', price: 400, region: 'kyoto', description: '金碧輝煌的舍利殿。' }
        ],
        evening: [
            { id: 'qf-k5', title: '祇園花見小路', titleEn: 'Gion Hanamikoji', type: 'attraction', duration: '1小時', price: 0, region: 'kyoto', description: '幸運的話可以看到藝妓喔！' },
            { id: 'qf-k6', title: '鴨川納涼床', titleEn: 'Kamogawa River', type: 'food', duration: '2小時', price: 3000, region: 'kyoto', description: '夏日限定的河畔用餐體驗。' }
        ],
        night: [
            { id: 'qf-k7', title: '居酒屋體驗', titleEn: 'Izakaya', type: 'food', duration: '2小時', price: 2500, region: 'kyoto', description: '體驗日式夜生活。' }
        ],
        accommodation: [
            { id: 'qf-k8', title: '京都大飯店', titleEn: 'Kyoto Hotel', type: 'hotel', duration: '0', price: 10000, region: 'kyoto', description: '舒適的住宿。' }
        ]
    },
    tokyo: {
        morning: [
            { id: 'qf-t1', title: '淺草寺', titleEn: 'Senso-ji', type: 'attraction', duration: '1.5小時', price: 0, region: 'tokyo', description: '東京最古老的寺廟，雷門必拍！' },
            { id: 'qf-t2', title: '築地場外市場', titleEn: 'Tsukiji Outer Market', type: 'food', duration: '1小時', price: 2000, region: 'tokyo', description: '享受新鮮的海鮮丼飯。' }
        ],
        afternoon: [
            { id: 'qf-t3', title: '明治神宮', titleEn: 'Meiji Jingu', type: 'attraction', duration: '1.5小時', price: 0, region: 'tokyo', description: '市中心的森林綠洲。' },
            { id: 'qf-t4', title: '澀谷十字路口', titleEn: 'Shibuya Crossing', type: 'attraction', duration: '30分', price: 0, region: 'tokyo', description: '世界最繁忙的十字路口。' }
        ],
        evening: [
            { id: 'qf-t5', title: '東京鐵塔', titleEn: 'Tokyo Tower', type: 'attraction', duration: '1小時', price: 1200, region: 'tokyo', description: '經典的東京地標夜景。' },
            { id: 'qf-t6', title: '新宿歌舞伎町', titleEn: 'Kabukicho', type: 'attraction', duration: '1.5小時', price: 0, region: 'tokyo', description: '越夜越美麗的不夜城。' }
        ],
        night: [
            { id: 'qf-t7', title: '六本木之丘展望台', titleEn: 'Roppongi Hills', type: 'attraction', duration: '1小時', price: 1800, region: 'tokyo', description: '欣賞東京最美夜景。' }
        ],
        accommodation: [
            { id: 'qf-t8', title: '新宿王子大飯店', titleEn: 'Shinjuku Prince Hotel', type: 'hotel', duration: '0', price: 12000, region: 'tokyo', description: '交通便利的市中心住宿。' }
        ]
    },
    osaka: {
        morning: [
            { id: 'qf-o1', title: '大阪城公園', titleEn: 'Osaka Castle Park', type: 'attraction', duration: '2小時', price: 600, region: 'osaka', description: '大阪的地標，天守閣很壯觀。' },
            { id: 'qf-o2', title: '黑門市場', titleEn: 'Kuromon Market', type: 'food', duration: '1小時', price: 1500, region: 'osaka', description: '大阪的廚房，美食吃不完。' }
        ],
        afternoon: [
            { id: 'qf-o3', title: '海遊館', titleEn: 'Kaiyukan', type: 'attraction', duration: '2小時', price: 2400, region: 'osaka', description: '世界最大級的水族館。' },
            { id: 'qf-o4', title: '通天閣', titleEn: 'Tsutenkaku', type: 'attraction', duration: '45分', price: 800, region: 'osaka', description: '新世界的懷舊地標。' }
        ],
        evening: [
            { id: 'qf-o5', title: '道頓堀', titleEn: 'Dotonbori', type: 'food', duration: '2小時', price: 2000, region: 'osaka', description: '固力果跑跑人必拍，章魚燒必吃！' },
            { id: 'qf-o6', title: '阿倍野 HARUKAS', titleEn: 'Abeno Harukas', type: 'attraction', duration: '1小時', price: 1500, region: 'osaka', description: '日本最高大樓的百萬夜景。' }
        ],
        night: [
            { id: 'qf-o7', title: '梅田藍天大廈', titleEn: 'Umeda Sky Building', type: 'attraction', duration: '1小時', price: 1500, region: 'osaka', description: '空中庭園展望台。' }
        ],
        accommodation: [
            { id: 'qf-o8', title: '難波瑞士南海飯店', titleEn: 'Swissotel Nankai Osaka', type: 'hotel', duration: '0', price: 14000, region: 'osaka', description: '直通南海難波站，交通超方便。' }
        ]
    }
};
