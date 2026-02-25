import React from 'react';
import { Search, Plus } from 'lucide-react';
import { TravelItem, ItemType, LangType } from '../../types';
import { CategoryCarousel } from './CategoryCarousel';
import { TagCarousel } from './TagCarousel';
import { AssetItemCard } from './AssetItemCard';

interface AssetLibraryProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    activeCategory: 'all' | ItemType;
    setActiveCategory: (cat: 'all' | ItemType) => void;
    activeTag: string | null;
    setActiveTag: (tag: string | null) => void;
    filteredAssets: TravelItem[];
    t: any;
    lang: LangType;
    isSlim: boolean;
    setShowCustomItemModal: (show: boolean) => void;
    isMobile: boolean;
    setMobilePreviewItem: (item: TravelItem) => void;
    handleDragStart: (e: React.DragEvent, item: TravelItem, source: 'sidebar' | 'canvas') => void;
    setTooltipPos: (pos: { x: number; y: number }) => void;
    setHoveredItem: (item: TravelItem | null) => void;
}

export const AssetLibrary: React.FC<AssetLibraryProps> = ({
    searchQuery, setSearchQuery,
    activeCategory, setActiveCategory,
    activeTag, setActiveTag,
    filteredAssets,
    t, lang,
    isSlim, setShowCustomItemModal,
    isMobile, setMobilePreviewItem,
    handleDragStart,
    setTooltipPos, setHoveredItem
}) => {
    return (
        <>
            {/* Layer 2: Sticky Toolbar (Search + Categories + Tags) */}
            <div className={`sticky top-0 z-[50] bg-white px-4 space-y-4 shadow-sm border-b border-gray-100 ${isSlim ? 'py-2' : 'py-4'}`}>
                <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder={t.searchPlaceholder}
                            className="w-full pl-9 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-1 focus:ring-teal-500 transition-all h-9"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    {isSlim && (
                        <button
                            onClick={() => setShowCustomItemModal(true)}
                            className="h-9 px-3 bg-white border border-dashed border-teal-200 text-teal-600 rounded-lg flex items-center justify-center hover:bg-teal-50"
                            title={t.createCustom || 'Create Custom'}
                        >
                            <Plus size={16} />
                        </button>
                    )}
                </div>
                {!isSlim && (
                    <button
                        onClick={() => setShowCustomItemModal(true)}
                        className="w-full py-2 border border-dashed border-teal-200 text-teal-600 rounded-lg text-sm font-medium hover:bg-teal-50 transition-all flex items-center justify-center gap-1"
                    >
                        <Plus size={14} /> {t.createCustom || (lang === 'zh' ? '建立自訂景點' : 'Create Custom')}
                    </button>
                )}

                <CategoryCarousel
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    lang={lang}
                    t={t}
                />

                <TagCarousel
                    activeTag={activeTag}
                    setActiveTag={setActiveTag}
                    lang={lang}
                />
            </div>

            {/* Layer 3: Main Grid Area */}
            <div className="p-4 pt-2 pb-12">
                <div className="grid grid-cols-2 gap-2">
                    {filteredAssets.map((item) => (
                        <AssetItemCard
                            key={item.id}
                            item={item}
                            lang={lang}
                            t={t}
                            isMobile={isMobile}
                            onDragStart={(e) => handleDragStart(e, item, 'sidebar')}
                            onClick={() => {
                                if (isMobile) setMobilePreviewItem(item);
                            }}
                            onMouseEnter={(e) => {
                                if (!isMobile) {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top - 8 });
                                    setHoveredItem(item);
                                }
                            }}
                            onMouseLeave={() => setHoveredItem(null)}
                        />
                    ))}
                    {filteredAssets.length === 0 && (
                        <div className="col-span-2 text-center text-gray-400 text-sm py-8">
                            {t.noResults || (lang === 'zh' ? '找不到結果' : 'No results found')}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
