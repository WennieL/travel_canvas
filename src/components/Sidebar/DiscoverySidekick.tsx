import React from 'react';
import { TravelItem, ScheduleItem, Region, LangType } from '../../types';
import { SAMPLE_CREATORS, SAMPLE_ASSETS, MELBOURNE_ASSETS } from '../../data';
import { AssetItemCard } from './AssetItemCard';

interface DiscoverySidekickProps {
    selectedItem: TravelItem | ScheduleItem | null;
    discoveryCreatorId: string | null | undefined;
    activeRegion: Region;
    lang: LangType;
    t: any;
    isMobile: boolean;
    setMobilePreviewItem: (item: TravelItem) => void;
    onSelectItem?: (item: TravelItem) => void;
    onExitDiscovery?: () => void;
    handleModeChange: (mode: 'list' | 'map') => void;
    handleDragStart: (e: React.DragEvent, item: TravelItem, source: 'sidebar' | 'canvas') => void;
    filteredAssets: TravelItem[];
}

export const DiscoverySidekick: React.FC<DiscoverySidekickProps> = ({
    selectedItem,
    discoveryCreatorId,
    activeRegion,
    lang,
    t,
    isMobile,
    setMobilePreviewItem,
    onSelectItem,
    onExitDiscovery,
    handleModeChange,
    handleDragStart,
    filteredAssets
}) => {
    // Creator Header Card logic
    const creator = selectedItem?.authorId
        ? SAMPLE_CREATORS.find(c => c.id === selectedItem.authorId)
        : (discoveryCreatorId && discoveryCreatorId !== 'all'
            ? SAMPLE_CREATORS.find(c => c.id === discoveryCreatorId)
            : SAMPLE_CREATORS.find(c => c.id === 'c-mel')); // Default fallback

    return (
        <div className="p-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Creator Header Card (Dynamic) */}
            <div className="px-5 py-6 bg-gradient-to-br from-teal-50 to-indigo-50 border-b border-teal-100 transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg p-1">
                        <div className="w-full h-full rounded-xl bg-teal-100 flex items-center justify-center text-2xl overflow-hidden">
                            {creator?.avatar ? (
                                <img src={creator.avatar} className="w-full h-full object-cover" alt="avatar" />
                            ) : (
                                '🕵️‍♀️'
                            )}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-black text-gray-800 text-lg">{creator?.name || 'Travel Expert'}</h3>
                        <p className="text-xs text-teal-600 font-bold uppercase tracking-wider">
                            {(creator as any)?.role || (lang === 'zh' ? '旅遊達人' : 'Expert')}
                        </p>
                    </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed italic mb-4">
                    "{creator?.description || (lang === 'zh' ? '這些是我私心收藏的隱藏景點，希望妳也喜歡！' : 'These are my personal hidden gems. Hope you enjoy them!')}"
                </p>
            </div>

            {/* Curated List */}
            <div className="p-4">
                <div className="flex items-center justify-between mb-4 px-1">
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">
                        {selectedItem ? (lang === 'zh' ? '景點詳情' : 'Spot Details') : (lang === 'zh' ? '達人私藏清單' : 'Expert Picks')}
                    </h4>
                    <div className="px-2 py-0.5 bg-teal-100 text-teal-700 text-[10px] font-bold rounded-lg capitalize">
                        {activeRegion !== 'all' ? activeRegion : 'Global'}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    {/* Show filtered assets or selection context (Region-Aware) */}
                    {(discoveryCreatorId === 'all'
                        ? ([...SAMPLE_ASSETS, ...MELBOURNE_ASSETS]
                            .filter(a => a.authorId && (activeRegion === 'all' || a.region === activeRegion))
                            .slice(0, 8))
                        : filteredAssets.slice(0, 6)).map((item) => (
                            <AssetItemCard
                                key={`discover-${item.id}`}
                                item={item}
                                lang={lang}
                                t={t}
                                isMobile={isMobile}
                                onDragStart={(e) => handleDragStart(e, item, 'sidebar')}
                                onClick={() => {
                                    if (isMobile) setMobilePreviewItem(item);
                                    onSelectItem?.(item);
                                }}
                                onMouseEnter={() => { }}
                                onMouseLeave={() => { }}
                            />
                        ))}
                </div>

                <button
                    onClick={() => {
                        if (onExitDiscovery) onExitDiscovery();
                        handleModeChange('list');
                    }}
                    className="w-full mt-8 py-3 bg-white border-2 border-dashed border-gray-200 text-gray-400 rounded-2xl text-xs font-bold hover:border-teal-300 hover:text-teal-600 transition-all flex items-center justify-center gap-2"
                >
                    {lang === 'zh' ? '退出地圖導覽' : 'Exit Map Discovery'}
                </button>
            </div>
        </div>
    );
};
