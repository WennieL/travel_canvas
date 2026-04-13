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
    activePlanId?: string | null;
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
    activePlanId,
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
    
    // [NEW] Intelligent Add Action: Direct add if in active trip context
    const handleAddAction = () => {
        if (activePlanId) {
            onAddItemToPlan?.(item as TravelItem, activePlanId);
            setIsAddedToPlan(true);
            setTimeout(() => onClose(), 600); 
        } else {
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
                <button 
                    onClick={handleAddAction}
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
                plans={plans}
                onSelectPlan={(planId) => {
                    onAddItemToPlan?.(item as TravelItem, planId);
                    setIsPlanSelectorOpen(false);
                    setIsAddedToPlan(true);
                    setTimeout(() => onClose(), 600);
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
