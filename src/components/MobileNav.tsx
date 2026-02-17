import React, { useState } from 'react';
import { Compass, Heart, Calendar, User, MoreHorizontal, DollarSign, ListTodo, Settings, Globe, Plus } from 'lucide-react';
import { useNavigation, NavItem } from '../hooks/useNavigation';
import { LangType, ViewMode } from '../types';

interface MobileNavProps {
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    showPlanManager: boolean;
    setShowPlanManager: (show: boolean) => void;
    showFavorites: boolean;
    setShowFavorites: (show: boolean) => void;
    hasActivePlan: boolean;
    onNewPlan: () => void;
    onShowBudget: () => void;
    onSetLang: () => void;
    lang: LangType;
    t: any;
}

type MobileTab = 'discovery' | 'favorites' | 'plan' | 'my' | 'more';

export const MobileNav: React.FC<MobileNavProps> = ({
    viewMode,
    setViewMode,
    showPlanManager,
    setShowPlanManager,
    showFavorites,
    setShowFavorites,
    hasActivePlan,
    onNewPlan,
    onShowBudget,
    onSetLang,
    lang,
    t
}) => {
    const [showMoreMenu, setShowMoreMenu] = useState(false);

    const { mobilePrimary, mobileMore, getLabel } = useNavigation({
        hasActivePlan,
        platform: 'mobile',
        lang
    });

    // Determine active tab
    const getActiveTab = (): MobileTab => {
        if (showFavorites) return 'favorites';
        if (showPlanManager) return 'my';
        if (viewMode === 'discovery') return 'discovery';
        if (viewMode === 'canvas' || viewMode === 'map') return 'plan';
        return 'discovery';
    };

    const activeTab = getActiveTab();

    const handleTabClick = (itemId: string) => {
        if (itemId === 'more') {
            setShowMoreMenu(!showMoreMenu);
            return;
        }

        setShowMoreMenu(false);

        switch (itemId) {
            case 'discovery':
                setShowFavorites(false);
                setShowPlanManager(false);
                setViewMode('discovery');
                break;
            case 'favorites':
                setShowPlanManager(false);
                setShowFavorites(true);
                break;
            case 'plan':
                setShowFavorites(false);
                setShowPlanManager(false);
                if (hasActivePlan) {
                    setViewMode('canvas');
                }
                break;
            case 'projects':
                setShowFavorites(false);
                setShowPlanManager(true);
                break;
        }
    };

    const handleMoreClick = (itemId: string) => {
        setShowMoreMenu(false);
        switch (itemId) {
            case 'budget':
                setViewMode('budget');
                setShowFavorites(false);
                setShowPlanManager(false);
                break;
            case 'checklist':
                setViewMode('checklist');
                setShowFavorites(false);
                setShowPlanManager(false);
                break;
            case 'lang':
                onSetLang();
                break;
            case 'settings':
                // Settings action placeholder
                break;
        }
    };

    return (
        <>
            {/* More Menu Overlay */}
            {showMoreMenu && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/20 z-[2040]"
                    onClick={() => setShowMoreMenu(false)}
                />
            )}

            {/* More Menu Bottom Sheet */}
            {showMoreMenu && (
                <div className="lg:hidden fixed bottom-16 left-4 right-4 bg-white rounded-2xl shadow-2xl z-[2050] border border-gray-100 overflow-hidden">
                    <div className="p-3 space-y-0.5">
                        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-3" />
                        {mobileMore.map((item: NavItem) => {
                            const MenuIcon = item.icon;
                            const label = getLabel(item);

                            // Add a visual divider before Language if Budget exists
                            const needsDivider = item.id === 'lang' && mobileMore.some((m: NavItem) => m.id === 'budget');

                            return (
                                <React.Fragment key={item.id}>
                                    {needsDivider && <div className="h-px bg-gray-100 my-1.5" />}
                                    <button
                                        onClick={() => handleMoreClick(item.id)}
                                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                                    >
                                        <MenuIcon size={18} className="text-gray-500" />
                                        <span className="text-sm font-medium text-gray-700">{label}</span>
                                    </button>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Bottom Tab Bar */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100 grid grid-cols-5 items-center pb-2 z-[2050] shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
                {mobilePrimary.map((tab: NavItem) => {
                    const Icon = tab.icon;
                    const label = getLabel(tab);
                    const isActive = tab.id === 'more' ? showMoreMenu : activeTab === (tab.id === 'projects' ? 'my' : tab.id);

                    return (
                        <button
                            key={tab.id}
                            onClick={() => handleTabClick(tab.id)}
                            className={`flex flex-col items-center justify-center w-full transition-colors ${isActive ? 'text-teal-600' : 'text-gray-400'
                                }`}
                        >
                            <Icon size={20} fill={tab.id === 'favorites' && isActive ? 'currentColor' : 'none'} />
                            <span className="text-[10px] mt-1 font-bold whitespace-nowrap">{label}</span>
                        </button>
                    );
                })}
            </div>
        </>
    );
};

export default MobileNav;
