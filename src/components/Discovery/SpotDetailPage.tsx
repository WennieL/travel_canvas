import React, { useMemo, useState } from 'react';
import { SpotDetailsPanel } from '../Sidebar/SpotDetailsPanel';
import { TravelItem, LangType, ViewMode } from '../../types';
import { SAMPLE_ASSETS } from '../../data';
import { ImmersivePage } from '../Common/ImmersivePage';
import { Plus, Heart, MoreHorizontal, Share2 } from 'lucide-react';
import { PlanSelectorDrawer } from '../Common/PlanSelectorDrawer';
import { SpotActionDrawer } from './SpotActionDrawer';

interface SpotDetailPageProps {
    spotId: string;
    lang: LangType;
    onClose: () => void;
    onAddItem: (item: TravelItem) => void;
    subscribedCreators: string[];
    onToggleSubscribe: (creatorId: string) => void;
    onCreatorClick?: (creatorId: string) => void;
    fallbackItem?: TravelItem | null;
    plans?: any[];
    activePlanId?: string | null;
    onAddItemToPlan?: (item: TravelItem, planId: string) => void;
    onCreateNewPlan?: () => void;
    savedSpots?: TravelItem[];
    handleToggleFavoriteSpot?: (item: TravelItem) => void;
    showToastMessage?: (msg: string, type?: any) => void;
    viewMode?: ViewMode;
}

export const SpotDetailPage: React.FC<SpotDetailPageProps> = ({
    spotId,
    lang,
    onClose,
    onAddItem,
    subscribedCreators,
    onToggleSubscribe,
    onCreatorClick,
    fallbackItem,
    plans = [],
    activePlanId,
    onAddItemToPlan,
    onCreateNewPlan,
    savedSpots = [],
    handleToggleFavoriteSpot,
    showToastMessage,
    viewMode = 'canvas'
}) => {
    const [isPlanSelectorOpen, setIsPlanSelectorOpen] = useState(false);
    const [isAddedToPlan, setIsAddedToPlan] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showActionDrawer, setShowActionDrawer] = useState(false);

    // [NEW] Filter out past trips for the plan selector
    const unexpiredPlans = useMemo(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        return plans.filter(plan => {
            if (!plan.endDate) return true; // Keep plans without dates as they might be drafts
            const planEnd = new Date(plan.endDate);
            return planEnd >= today;
        });
    }, [plans]);

    // Find the item in our data
    const item = useMemo(() => {
        const asset = SAMPLE_ASSETS.find(a => a.id === spotId);
        if (asset) return asset as TravelItem;
        return fallbackItem || null;
    }, [spotId, fallbackItem]);

    if (!item) return null;

    const title = lang === 'zh' ? item.title : ((item as any).titleEn || item.title);

    // [REFINED] Context-Aware Add Action
    const handleAddAction = () => {
        // Only add directly if we are explicitly in "Canvas" mode (editing an itinerary)
        if (activePlanId && viewMode === 'canvas') {
            onAddItemToPlan?.(item as TravelItem, activePlanId);
            setIsAddedToPlan(true);

            // Show confirmation toast
            showToastMessage?.(
                lang === 'zh' ? `已加入目前的行程計畫` : `Added to current plan`,
                'success'
            );

            setTimeout(() => onClose(), 800);
        } else {
            // In Discovery mode or any other browser mode: Always ask which plan
            setIsPlanSelectorOpen(true);
        }
    };

    return (
        <ImmersivePage
            isOpen={!!spotId}
            onClose={onClose}
            title={title}
            hideTitle={true}
            transparentHeader={true}
            historyId={`spot-${spotId}`}
            showTitleOnScroll={true}
            isScrolled={isScrolled}
            onScroll={(scrollTop) => setIsScrolled(scrollTop > 100)}
            rightAction={
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => {
                            if (item && handleToggleFavoriteSpot) handleToggleFavoriteSpot(item);
                        }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${(!isScrolled)
                                ? 'bg-black/40 backdrop-blur-xl border border-white/20 text-white hover:bg-black/50 shadow-lg'
                                : 'text-[#181D17] hover:bg-[#F1F3EE]'
                            }`}
                    >
                        <Heart size={20} className={savedSpots.some(s => s.id === item.id) ? "fill-red-500 text-red-500" : ""} />
                    </button>
                    <button
                        onClick={handleAddAction}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${(!isScrolled)
                                ? 'bg-black/40 backdrop-blur-xl border border-white/20 text-white hover:bg-black/50 shadow-lg'
                                : 'text-[#181D17] hover:bg-[#F1F3EE]'
                            }`}
                    >
                        <Plus size={24} />
                    </button>
                    <button
                        onClick={() => setShowActionDrawer(true)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${(!isScrolled)
                                ? 'bg-black/40 backdrop-blur-xl border border-white/20 text-white hover:bg-black/50 shadow-lg'
                                : 'text-[#181D17] hover:bg-[#F1F3EE]'
                            }`}
                    >
                        <MoreHorizontal size={22} />
                    </button>
                </div>
            }
        >
            <SpotDetailsPanel
                item={item}
                lang={lang}
                onClose={onClose}
                onAddItem={onAddItem}
                subscribedCreators={subscribedCreators}
                onToggleSubscribe={onToggleSubscribe}
                hideHeader={true}
                onCreatorClick={onCreatorClick}
                plans={plans}
                onAddItemToPlan={(item, planId) => {
                    onAddItemToPlan?.(item, planId);
                    setIsAddedToPlan(true);
                    setTimeout(() => onClose(), 600);
                }}
                onCreateNewPlan={onCreateNewPlan}
                // These are for the EngagementSocialBlock inside
                isExternalPlanSelectorOpen={isPlanSelectorOpen}
                onOpenPlanSelector={handleAddAction}
                disableInternalScroll={true}
                isScrolled={isScrolled}
                savedSpots={savedSpots}
                handleToggleFavoriteSpot={handleToggleFavoriteSpot}
            />

            <PlanSelectorDrawer
                isOpen={isPlanSelectorOpen}
                onClose={() => setIsPlanSelectorOpen(false)}
                plans={unexpiredPlans}
                onSelectPlan={(planId) => {
                    onAddItemToPlan?.(item as TravelItem, planId);
                    setIsPlanSelectorOpen(false);
                    setIsAddedToPlan(true);
                    setTimeout(() => onClose(), 600);
                }}
                onCreatePlan={() => {
                    setIsPlanSelectorOpen(false);
                    onClose(); // [FIX] Close detail page to keep UI clean
                    onCreateNewPlan?.();
                }}
                lang={lang}
            />

            <SpotActionDrawer
                isOpen={showActionDrawer}
                onClose={() => setShowActionDrawer(false)}
                item={item}
                lang={lang}
                isFavorited={savedSpots.some(s => s.id === item.id)}
                onToggleFavorite={() => handleToggleFavoriteSpot?.(item)}
                onAdd={handleAddAction}
                onShare={() => {
                    showToastMessage?.(lang === 'zh' ? '正在開啟分享功能...' : 'Opening share...', 'info');
                }}
            />
        </ImmersivePage>
    );
};
