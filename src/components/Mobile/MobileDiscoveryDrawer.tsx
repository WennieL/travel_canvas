import React from 'react';
import { TravelItem, ScheduleItem, LangType } from '../../types';
import { SpotDetailsPanel } from '../Sidebar/SpotDetailsPanel';
import { X } from 'lucide-react';

interface MobileDiscoveryDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    item: (TravelItem | ScheduleItem) | null;
    allRecommendations?: TravelItem[];
    subscribedCreators: string[];
    onToggleSubscribe: (creatorId: string) => void;
    onAddItem: (item: TravelItem) => void;
    lang: LangType;
    preferredAuthorId?: string | null;
}

export const MobileDiscoveryDrawer: React.FC<MobileDiscoveryDrawerProps> = ({
    isOpen,
    onClose,
    item,
    allRecommendations = [],
    subscribedCreators,
    onToggleSubscribe,
    onAddItem,
    lang,
    preferredAuthorId
}) => {
    if (!isOpen || !item) return null;

    return (
        <div className="fixed inset-0 z-[2000] lg:hidden pointer-events-none">
            {/* Backdrop - keeps full screen blur but passes clicks to nav if not on panel */}
            <div
                className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 pointer-events-auto ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            />

            {/* Drawer Panel - Shifted UP by 16 units (64px) to sit above MobileNav */}
            <div
                className={`absolute left-0 right-0 bottom-16 bg-white rounded-t-[2.5rem] shadow-2xl transition-transform duration-500 ease-out h-[calc(85vh-64px)] overflow-hidden flex flex-col pointer-events-auto ${isOpen ? 'translate-y-0' : 'translate-y-full'
                    }`}
            >
                {/* Pull Handle */}
                <div className="w-full flex justify-center py-3">
                    <div className="w-10 h-1 bg-gray-200 rounded-full" />
                </div>

                <div className="h-full overflow-hidden relative">
                    <SpotDetailsPanel
                        item={item}
                        allRecommendations={allRecommendations}
                        subscribedCreators={subscribedCreators}
                        onToggleSubscribe={onToggleSubscribe}
                        onAddItem={onAddItem}
                        onClose={onClose}
                        lang={lang}
                        preferredAuthorId={preferredAuthorId}
                    />
                </div>
            </div>
        </div>
    );
};
