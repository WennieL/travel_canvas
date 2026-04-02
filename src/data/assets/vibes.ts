import { TravelItem } from '../../types';

export const VIBE_ASSETS: TravelItem[] = [
    {
        id: 'vibe_hotel_chill',
        title: '在飯店耍廢',
        titleEn: 'Chill in the Hotel',
        type: 'vibe',
        duration: '2小時',
        price: 0,
        image: '🛌',
        description: '什麼都不做也是一種旅行。睡到自然醒，享受沒有行程的完美早晨。',
        descriptionEn: 'Doing nothing is also traveling. Sleep till you naturally wake up.',
        region: 'all',
        tags: ['耍廢', '免費']
    },
    {
        id: 'vibe_cafe',
        title: '找間順眼的街角咖啡廳',
        titleEn: 'Random Cafe Hopping',
        type: 'vibe',
        duration: '1.5小時',
        price: 300,
        image: '☕',
        description: '不查評價，看哪間順眼就進去，讓命運決定今天的拿鐵。',
        descriptionEn: 'No reviews needed. Let fate decide your latte today.',
        region: 'all',
        tags: ['耍廢', '隨興']
    },
    {
        id: 'vibe_park',
        title: '去附近的公園慵懶放空',
        titleEn: 'Laze in the Park',
        type: 'vibe',
        duration: '1小時',
        price: 0,
        image: '🌳',
        description: '買杯外帶咖啡，坐在長椅上看當地人遛狗，假裝自己住在這裡。',
        descriptionEn: 'Grab a coffee to go, sit on a bench, and pretend you live here.',
        region: 'all',
        tags: ['耍廢', '免費']
    },
    {
        id: 'vibe_lost',
        title: '不看地圖的漫無目的散步',
        titleEn: 'Wandering Around',
        type: 'vibe',
        duration: '2小時',
        price: 0,
        image: '🚶‍♂️',
        description: '迷路也是旅行的一環。鑽進不知名的巷弄，看看會遇見什麼驚喜。',
        descriptionEn: 'Getting lost is part of the journey. Let the city guide you.',
        region: 'all',
        tags: ['隨興']
    },
    {
        id: 'vibe_drink',
        title: '找間氣氛對的店微醺',
        titleEn: 'Midnight Drunk',
        type: 'vibe',
        duration: '2小時',
        price: 1500,
        image: '🍻',
        description: '沒有預約，看到順眼的店就進去喝兩杯，為今天劃下完美句點。',
        descriptionEn: 'No reservations. Just find a vibe and grab a drink to celebrate.',
        region: 'all',
        tags: ['微醺', '隨興']
    }
];
