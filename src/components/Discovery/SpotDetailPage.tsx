import React, { useMemo } from 'react';
import { SpotDetailsPanel } from '../Sidebar/SpotDetailsPanel';
import { TravelItem, LangType } from '../../types';
import { SAMPLE_ASSETS } from '../../data';
import { ImmersivePage } from '../Common/ImmersivePage';

interface SpotDetailPageProps {
    spotId: string;
    lang: LangType;
    onClose: () => void;
    onAddItem: (item: TravelItem) => void;
    subscribedCreators: string[];
    onToggleSubscribe: (creatorId: string) => void;
    onCreatorClick?: (creatorId: string) => void;
}

export const SpotDetailPage: React.FC<SpotDetailPageProps> = ({
    spotId,
    lang,
    onClose,
    onAddItem,
    subscribedCreators,
    onToggleSubscribe,
    onCreatorClick
}) => {
    // Find the item in our data
    const item = useMemo(() => {
        const asset = SAMPLE_ASSETS.find(a => a.id === spotId);
        if (asset) return asset as TravelItem;
        return null;
    }, [spotId]);

    if (!item) return null;

    const title = lang === 'zh' ? item.title : ((item as any).titleEn || item.title);

    return (
        <ImmersivePage
            isOpen={!!spotId}
            onClose={onClose}
            title={title}
            historyId={`spot-${spotId}`}
        >
            <SpotDetailsPanel
                item={item}
                lang={lang}
                onClose={onClose}
                onAddItem={onAddItem}
                subscribedCreators={subscribedCreators}
                onToggleSubscribe={onToggleSubscribe}
                hideHeader={true} // Use the ImmersivePage header instead
                onCreatorClick={onCreatorClick}
            />
        </ImmersivePage>
    );
};
