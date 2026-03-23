import React from 'react';
import { TravelItem, ScheduleItem, Region, LangType } from '../../types';
import { SAMPLE_CREATORS, SAMPLE_ASSETS } from '../../data';
import { AssetItemCard } from './AssetItemCard';
import { SpotDetailsPanel } from './SpotDetailsPanel';

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
    onExploreCreatorMap?: (authorId: string, authorName: string) => void;
    subscribedCreators: string[];
    onToggleSubscribe: (creatorId: string) => void;
    onAddItem: (item: TravelItem) => void;
    onUpdateItem?: (slot: string, index: number, updates: Partial<ScheduleItem>) => void;
    showToastMessage?: (msg: string, type: 'success' | 'error') => void;
    customAssets: TravelItem[];
    selectionSource?: 'map' | 'sidebar' | 'canvas' | null;
    sidebarMode?: 'list' | 'map';
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
    filteredAssets,
    onExploreCreatorMap,
    subscribedCreators,
    onToggleSubscribe,
    onAddItem,
    onUpdateItem,
    showToastMessage,
    customAssets = [],
    selectionSource,
    sidebarMode
}) => {
    // [PHASE 24] Hero Spot Logic: Auto-select the first spot once when entering 'map' mode
    const hasAutoSelected = React.useRef(false);

    // [PHASE 40] Persistence Logic: Keep track of the last non-null selection 
    // to prevent jumping to empty state when global selection/modal is cleared.
    const [activeItem, setActiveItem] = React.useState<TravelItem | ScheduleItem | null>(selectedItem);

    React.useEffect(() => {
        if (selectedItem) {
            setActiveItem(selectedItem);
        }
    }, [selectedItem]);

    React.useEffect(() => {
        if (sidebarMode === 'map' && !isMobile && !selectedItem && filteredAssets.length > 0 && !hasAutoSelected.current) {
            onSelectItem?.(filteredAssets[0]);
            hasAutoSelected.current = true;
        }
        // Reset the ref when leaving map mode
        if (sidebarMode !== 'map') {
            hasAutoSelected.current = false;
        }
    }, [sidebarMode, selectedItem, filteredAssets, onSelectItem, isMobile]);

    // Creator Header Card logic
    const authors = (selectedItem as any)?.allAuthors || (selectedItem?.authorId ? [selectedItem.authorId] : []);
    const isSpotGroup = authors.length > 1;

    // FIND REGIONAL AUTHOR
    // Priority: 
    // 1. Specific selection (selectedItem)
    // 2. Specific exploration (discoveryCreatorId)
    // 3. First author found in current region from SAMPLE_ASSETS
    // 4. Fallback to null (for empty state)
    const primaryCreator = React.useMemo(() => {
        // [PHASE 22.4] If a spot is selected, the primary creator for THE HEADER 
        // should be the one whose tips we are currently showing or the main recommender.
        if (selectedItem?.authorId) {
            return SAMPLE_CREATORS.find(c => c.id === selectedItem.authorId);
        }

        // 2. Focused creator (via Explore or Map Click)
        if (discoveryCreatorId && discoveryCreatorId !== 'all') {
            const focusedAuth = SAMPLE_CREATORS.find(c => c.id === discoveryCreatorId);

            // [REFINEMENT] Safety Check: Ensure this author actually has content in the active region
            // If they don't, this focus is likely stale from a previous region interaction.
            // 2b. If we have a discoveryCreatorId, verify it has content in this region
            if (activeRegion !== 'all') {
                const hasRegionalContent = SAMPLE_ASSETS.some((a: any) =>
                    a.authorId === discoveryCreatorId && a.region === activeRegion
                );
                if (hasRegionalContent) return focusedAuth;
            } else {
                return focusedAuth;
            }
        }

        // 3. Fallback: First author who has content in this active region
        if (activeRegion !== 'all') {
            const regionalAuthorId = SAMPLE_ASSETS.find((a: any) =>
                a.region === activeRegion && a.authorId
            )?.authorId;
            if (regionalAuthorId) return SAMPLE_CREATORS.find(c => c.id === regionalAuthorId);
        }

        // If "Global" (all), use c-mel as the featured expert, otherwise null
        return activeRegion === 'all' ? SAMPLE_CREATORS.find(c => c.id === 'c-mel') : null;
    }, [discoveryCreatorId, activeRegion, selectedItem?.authorId]);

    // [PHASE 40] Rendering Logic: Use activeItem instead of selectedItem for detail panels
    if (activeItem) {
        return (
            <SpotDetailsPanel
                key={`sidekick-spot-${activeItem.id || (activeItem as any).instanceId}`}
                item={activeItem as any}
                onClose={() => {
                    setActiveItem(null);
                    // Also clear global selected if it matched
                    if (selectedItem?.id === activeItem.id) {
                        if (onExitDiscovery) onExitDiscovery();
                    }
                }}
                lang={lang}
                subscribedCreators={subscribedCreators}
                onToggleSubscribe={onToggleSubscribe}
                onAddItem={onAddItem}
                onUpdateItem={onUpdateItem}
                showToastMessage={showToastMessage as any}
                preferredAuthorId={discoveryCreatorId}
                sidebarMode={sidebarMode}
            />
        );
    }

    // [PHASE 25] Suppress "Creator Profile" mid-layer in Hero/Map mode
    if (sidebarMode === 'map') {
        return (
            <div className="flex flex-col h-full bg-white relative overflow-hidden">
                {/* Header Context for Map Discovery */}
                <div className="p-6 border-b border-gray-100 bg-gradient-to-br from-teal-50/30 to-white">
                    <h3 className="font-black text-gray-800 text-xl mb-1">
                        {t.mapGuidedMode}
                    </h3>
                    <p className="text-xs font-bold text-teal-600 uppercase tracking-widest">
                        {activeRegion === 'all' ? t.globalPicks : `${activeRegion} Area`}
                    </p>
                </div>

                {/* Guide to interacting with map */}
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mb-6 animate-pulse text-teal-500/20">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A2 2 0 013 15.488V5.512a2 2 0 011.553-1.944L9 2l6 3 5.447-2.724A2 2 0 0121 4.224v9.976a2 2 0 01-1.553 1.944L15 19l-6 1z" />
                        </svg>
                    </div>
                    <h4 className="font-black text-gray-900 mb-2">
                        {t.readyToExplore}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed italic max-w-[200px]">
                        {t.discoveryGuideDesc}
                    </p>
                </div>

                <button
                    onClick={() => {
                        if (onExitDiscovery) onExitDiscovery();
                        handleModeChange('list');
                    }}
                    className="m-6 py-3 border border-gray-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-teal-600 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                >
                    {t.exitDiscoveryMode}
                </button>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col bg-white overflow-y-auto no-scrollbar">
            {/* Header / Creator Profile */}
            {/* Dynamic Switching Between Spot Focus and Creator Focus */}
            <div className={`px-5 py-6 bg-gradient-to-br border-b transition-all duration-500 ${isSpotGroup ? 'from-amber-50 to-orange-50 border-amber-100' : 'from-teal-50 to-indigo-50 border-teal-100'}`}>
                {isSpotGroup ? (
                    // MULTI-AUTHOR SPOT VIEW
                    <div className="animate-in fade-in zoom-in-95 duration-500">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-lg overflow-hidden border-2 border-amber-200">
                                <div className="w-full h-full flex flex-wrap">
                                    {authors.slice(0, 4).map((authId: string, idx: number) => (
                                        <div key={authId} className="w-1/2 h-1/2 border-[0.5px] border-amber-50 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?u=${authId}`} className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-black text-gray-800 text-lg">
                                    {lang === 'zh' ? (selectedItem as any)?.title : ((selectedItem as any)?.titleEn || (selectedItem as any)?.title)}
                                </h3>
                                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-black rounded-lg uppercase w-fit">
                                    <span className="animate-pulse">✨</span>
                                    {authors.length}{t.expertsRecommended}
                                </div>
                            </div>
                        </div>

                        {/* Author Carousel for switching context */}
                        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                            {authors.map((authId: string) => {
                                const auth = SAMPLE_CREATORS.find(c => c.id === authId);
                                return (
                                    <button
                                        key={authId}
                                        onClick={() => onExploreCreatorMap?.(authId, (lang === 'en' && auth?.nameEn ? auth.nameEn : (auth?.name || 'Expert')))}
                                        className="flex-shrink-0 flex items-center gap-2 bg-white/60 hover:bg-white p-1.5 pr-3 rounded-full border border-amber-100 shadow-sm transition-all hover:scale-105 group"
                                    >
                                        <div className="w-6 h-6 rounded-full overflow-hidden ring-2 ring-amber-200">
                                            <img src={`https://i.pravatar.cc/100?u=${authId}`} className="w-full h-full object-cover" />
                                        </div>
                                        <span className="text-[10px] font-bold text-gray-700 group-hover:text-amber-600 transition-colors uppercase">
                                            {(lang === 'en' && auth?.nameEn ? auth.nameEn : (auth?.name || 'Expert')).split(' ')[0]}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ) : primaryCreator ? (
                    // SINGLE CREATOR VIEW
                    <>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-lg p-1">
                                <div className="w-full h-full rounded-xl bg-teal-100 flex items-center justify-center text-2xl overflow-hidden">
                                    {primaryCreator?.avatar ? (
                                        <img src={primaryCreator.avatar} className="w-full h-full object-cover" alt="avatar" />
                                    ) : (
                                        '🕵️‍♀️'
                                    )}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-black text-gray-800 text-lg">
                                    {lang === 'en' && primaryCreator?.nameEn ? primaryCreator.nameEn : (primaryCreator?.name || 'Travel Expert')}
                                </h3>
                                <p className="text-xs text-teal-600 font-bold uppercase tracking-wider">
                                    {(primaryCreator as any)?.role || t.travelExpert}
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed italic mb-4">
                            "{lang === 'zh'
                                ? (primaryCreator?.description || t.creatorDefaultDesc)
                                : (primaryCreator?.descriptionEn || primaryCreator?.description || t.creatorDefaultDesc)}"
                        </p>
                    </>
                 ) : (
                    // EMPTY STATE: BE THE FIRST
                    <div className="animate-in fade-in zoom-in-95 duration-500">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-lg p-1 border border-dashed border-teal-200">
                                <div className="w-full h-full rounded-xl bg-teal-50 flex items-center justify-center text-3xl">
                                    ✨
                                </div>
                            </div>
                            <div>
                                <h3 className="font-black text-gray-800 text-lg">
                                    {t.nobodyHereYet}
                                </h3>
                                <p className="text-xs text-teal-600 font-bold uppercase tracking-wider">
                                    {t.exploreCity}
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed italic mb-4">
                            {lang === 'zh'
                                ? '這區域還沒有達人推薦...你要當第一個分享私房景點的人嗎？'
                                : "No experts have recommended this area yet... want to be the first to share your hidden gems?"}
                        </p>
                        <button className="w-fit px-4 py-2 bg-gradient-to-r from-teal-500 to-indigo-500 text-white text-xs font-black rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 uppercase">
                            {t.becomeExpert}
                        </button>
                    </div>
                )}
            </div>

            {/* [PHASE 24] Curated List - Suppressed in Map mode to focus on Hero Spot / Map interactions */}
            {sidebarMode !== 'map' && (
                <div className="p-4">
                    <div className="flex items-center justify-between mb-4 px-1">
                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">
                            {selectedItem ? t.viewDetailsLabel : t.expertTemplates}
                        </h4>
                        <div className="px-2 py-0.5 bg-teal-100 text-teal-700 text-[10px] font-bold rounded-lg capitalize">
                            {activeRegion !== 'all' ? activeRegion : t.allRegion}
                        </div>
                    </div>

                    <div className={`${isSpotGroup ? 'flex flex-col gap-4' : 'grid grid-cols-2 gap-2'}`}>
                        {/* Show aggregated tips if it's a spot group, otherwise show creator's list */}
                        {isSpotGroup ? (
                            // [NEW] AGGREGATED TIPS VIEW
                            authors.map((authId: string) => {
                                const author = SAMPLE_CREATORS.find(c => c.id === authId);
                                // Find the specific asset for this author at this spot
                                const asset = (SAMPLE_ASSETS as TravelItem[]).find(a =>
                                    a.authorId === authId &&
                                    (((a as any).title === (selectedItem as any).title) || ((a as any).titleEn === (selectedItem as any).titleEn))
                                );

                                if (!asset) return null;

                                return (
                                    <div key={authId} className="bg-white rounded-2xl p-4 border border-amber-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-amber-200">
                                                <img src={`https://i.pravatar.cc/100?u=${authId}`} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-black text-gray-800 lowercase tracking-tighter">
                                                    @{((lang === 'en' && author?.nameEn ? author.nameEn : (author?.name || 'Expert'))).replace(/\s/g, '').toLowerCase()}
                                                </span>
                                                <span className="text-[10px] text-amber-600 font-bold uppercase tracking-widest">{t.insiderTipLabel}</span>
                                            </div>
                                        </div>

                                        <div className="bg-amber-50/50 rounded-xl p-3 mb-3 border border-amber-50">
                                            <p className="text-sm font-bold text-gray-800 mb-1">
                                                {lang === 'zh' ? (asset as any).insiderTip?.teaser : ((asset as any).insiderTip?.teaserEn || (asset as any).insiderTip?.teaser)}
                                            </p>
                                            <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 italic">
                                                {lang === 'zh' ? (asset as any).insiderTip?.full?.story : ((asset as any).insiderTip?.full?.storyEn || (asset as any).insiderTip?.full?.story)}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between gap-3 mt-4 pt-4 border-t border-amber-50">
                                            <button
                                                onClick={() => onSelectItem?.(asset)}
                                                className="text-[11px] font-black text-amber-600 uppercase hover:text-amber-700 underline underline-offset-4"
                                            >
                                                {t.viewDetailsLabel}
                                            </button>
                                            <button
                                                onClick={() => onExploreCreatorMap?.(authId, author?.name || 'Expert')}
                                                className="px-3 py-1.5 bg-gray-900 text-white text-[10px] font-black rounded-lg uppercase hover:bg-black transition-all"
                                            >
                                                {t.viewExpertPicks}
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            // STANDARD CREATOR ASSETS VIEW
                            (discoveryCreatorId === 'all'
                                ? (SAMPLE_ASSETS
                                    .filter(item => item.authorId && (activeRegion === 'all' || item.region === activeRegion))
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
                                ))
                        )}
                    </div>

                    <button
                        onClick={() => {
                            if (onExitDiscovery) onExitDiscovery();
                            handleModeChange('list');
                        }}
                        className="w-full mt-6 py-3 border border-gray-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-teal-600 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                    >
                        {t.exitDiscoveryMode}
                    </button>
                </div>
            )}
        </div>
    );
};
