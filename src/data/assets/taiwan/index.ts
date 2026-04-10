import { TAIPEI_ASSETS } from './taipei';
import { TAINAN_ASSETS } from './tainan';
import { HUALIEN_ASSETS } from './hualien';
import { TAICHUNG_ASSETS } from './taichung';
import { KAOHSIUNG_ASSETS } from './kaohsiung';
import { TAIWAN_GIFTS } from './gifts';
import { TAIWAN_TOP_PICKS, resolvePicks } from './picks';
import { TravelItem } from '../../types';

export const TAIWAN_ASSETS: TravelItem[] = [
    ...TAIPEI_ASSETS,
    ...TAINAN_ASSETS,
    ...HUALIEN_ASSETS,
    ...TAICHUNG_ASSETS,
    ...KAOHSIUNG_ASSETS,
    ...TAIWAN_GIFTS,
];

export { 
    TAIPEI_ASSETS, 
    TAINAN_ASSETS, 
    HUALIEN_ASSETS, 
    TAICHUNG_ASSETS, 
    KAOHSIUNG_ASSETS, 
    TAIWAN_GIFTS,
    TAIWAN_TOP_PICKS,
    resolvePicks
};
