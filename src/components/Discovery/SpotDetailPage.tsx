import React, { useMemo, useState } from 'react';
import { SpotDetailsPanel } from '../Sidebar/SpotDetailsPanel';
import { TravelItem, LangType } from '../../types';
import { SAMPLE_ASSETS } from '../../data';
import { ImmersivePage } from '../Common/ImmersivePage';
import { Plus } from 'lucide-react';
import { PlanSelectorDrawer } from '../Common/PlanSelectorDrawer';

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
    onAddItemToPlan?: (item: TravelItem, planId: string) => void;
    onCreateNewPlan?: () => void;
    savedSpots?: TravelItem[];
    handleToggleFavoriteSpot?: (item: TravelItem) => void;
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
    onAddItemToPlan,
    onCreateNewPlan,
    savedSpots = [],
    handleToggleFavoriteSpot
}) => {
    const [isPlanSelectorOpen, setIsPlanSelectorOpen] = useState(false);
    const [isAddedToPlan, setIsAddedToPlan] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Find the item in our data
    const item = useMemo(() => {
        const asset = SAMPLE_ASSETS.find(a => a.id === spotId);
        if (asset) return asset as TravelItem;
        return fallbackItem || null;
    }, [spotId, fallbackItem]);

    if (!item) return null;

    const title = lang === 'zh' ? item.title : ((item as any).titleEn || item.title);

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
                <button 
                    onClick={() => setIsPlanSelectorOpen(true)}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-tc-primary hover:bg-tc-primary/5 transition-colors"
                >
                    <Plus size={24} />
                </button>
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
                    setTimeout(() => setIsAddedToPlan(false), 3000);
                }}
                onCreateNewPlan={onCreateNewPlan}
                // These are for the EngagementSocialBlock inside
                isExternalPlanSelectorOpen={isPlanSelectorOpen}
                onOpenPlanSelector={() => setIsPlanSelectorOpen(true)}
                disableInternalScroll={true}
                isScrolled={isScrolled}
                savedSpots={savedSpots}
                handleToggleFavoriteSpot={handleToggleFavoriteSpot}
            />

            <PlanSelectorDrawer
                isOpen={isPlanSelectorOpen}
                onClose={() => setIsPlanSelectorOpen(false)}
                plans={plans}
                onSelectPlan={(planId) => {
                    onAddItemToPlan?.(item as TravelItem, planId);
                    setIsPlanSelectorOpen(false);
                    setIsAddedToPlan(true);
                    setTimeout(() => setIsAddedToPlan(false), 3000);
                }}
                onCreatePlan={() => {
                    setIsPlanSelectorOpen(false);
                    onCreateNewPlan?.();
                }}
                lang={lang}
            />
        </ImmersivePage>
    );
};
