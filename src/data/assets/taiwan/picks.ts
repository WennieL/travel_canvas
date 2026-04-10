import { TravelItem } from '../../../types';

export const TAIWAN_TOP_PICKS: Record<string, string[]> = {
    taiwan: [
        'tw-t-f1', // Taipei: Fuhang Soy Milk
        'tc-f1',   // Taichung: MINIMAL
        'tn-a1',   // Tainan: Shennong St
        'tw-t-a1', // Taipei: Dihua St
        'tn-f1',   // Tainan: Ninao Gelato
    ],
    taipei: [
        'tw-t-f1', // Fuhang Soy Milk
        'tw-t-a1', // Dihua St
        'tw-t-a3', // Longshan Temple
        'tw-t-a2', // Dadaocheng Wharf
        'tw-t-f2', // Yongle Market Noodles
    ],
    taichung: [
        'tc-f1',   // MINIMAL Ice Cream
        'tc-c2',   // As Usual Place (Retro)
        'tc-a1',   // Dianhuozhen Eco Trail
        'tc-f2',   // Li Xiao Lou (Bib Gourmand)
        'tc-h1',   // SOF Hotel
    ],
    tainan: [
        'tn-a1',   // Shennong St
        'tn-f1',   // Ninao Gelato
        'tn-f2',   // Yunong Pan-fried Buns
        'tn-h1',   // Lakeshore Hotel
    ],
    kaohsiung: [
        'kh-a1',   // Pier-2 Art Center
        'kh-a2',   // Cijin Rainbow Church
        'kh-f1',   // Lao Jiang Milk Tea
        'kh-h1',   // InterContinental Kaohsiung
    ]
};

/**
 * Resolves a list of spot IDs into full TravelItem objects.
 */
export const resolvePicks = (regionId: string, allAssets: TravelItem[]): TravelItem[] => {
    const ids = TAIWAN_TOP_PICKS[regionId] || TAIWAN_TOP_PICKS['taiwan'];
    return ids
        .map(id => allAssets.find((asset: any) => asset.id === id))
        .filter((asset): asset is TravelItem => !!asset);
};
