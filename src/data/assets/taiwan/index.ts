import { TAIPEI_ASSETS } from './taipei';
import { TAINAN_ASSETS } from './tainan';
import { HUALIEN_ASSETS } from './hualien';
import { TAICHUNG_ASSETS } from './taichung';
import { TravelItem } from '../../types';

export const TAIWAN_ASSETS: TravelItem[] = [
    ...TAIPEI_ASSETS,
    ...TAINAN_ASSETS,
    ...HUALIEN_ASSETS,
    ...TAICHUNG_ASSETS,
];

export { TAIPEI_ASSETS, TAINAN_ASSETS, HUALIEN_ASSETS, TAICHUNG_ASSETS };
