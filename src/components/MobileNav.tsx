import React, { useState } from 'react';
import { Compass, Heart, Calendar, User, MoreHorizontal, DollarSign, ListTodo, Settings, Globe, Plus } from 'lucide-react';
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

type MobileTab = 'explore' | 'favorites' | 'plan' | 'my' | 'more';

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

    // Determine active tab
    const getActiveTab = (): MobileTab => {
        if (showFavorites) return 'favorites';
        if (showPlanManager) return 'my';
        if (viewMode === 'discovery') return 'explore';
        if (viewMode === 'canvas' || viewMode === 'map') return 'plan';
        return 'explore';
    };

    const activeTab = getActiveTab();

    const handleTabClick = (tab: MobileTab) => {
        setShowMoreMenu(false);

        switch (tab) {
            case 'explore':
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
                // If no active plan, the view will show empty state with create button
                break;
            case 'my':
                setShowFavorites(false);
                setShowPlanManager(true);
                break;
            case 'more':
                setShowMoreMenu(!showMoreMenu);
                break;
        }
    };

    const tabs: { id: MobileTab; icon: any; label: string }[] = [
        { id: 'explore', icon: Compass, label: lang === 'zh' ? '探索' : 'Explore' },
        { id: 'favorites', icon: Heart, label: lang === 'zh' ? '收藏' : 'Favorites' },
        { id: 'plan', icon: Calendar, label: lang === 'zh' ? '行程' : 'Plan' },
        { id: 'my', icon: User, label: lang === 'zh' ? '我的' : 'My' },
        { id: 'more', icon: MoreHorizontal, label: lang === 'zh' ? '更多' : 'More' },
    ];

    const moreMenuItems = [
        ...(hasActivePlan ? [
            {
                icon: DollarSign,
                label: lang === 'zh' ? '預算追蹤' : 'Budget',
                onClick: () => { onShowBudget(); setShowMoreMenu(false); }
            },
            {
                icon: ListTodo,
                label: lang === 'zh' ? '打包清單' : 'Checklist',
                onClick: () => { setViewMode('checklist'); setShowMoreMenu(false); setShowFavorites(false); setShowPlanManager(false); }
            },
            { divider: true },
        ] : []),
        {
            icon: Globe,
            label: lang === 'zh' ? '切換語言' : 'Language',
            onClick: () => { onSetLang(); setShowMoreMenu(false); }
        },
        {
            icon: Settings,
            label: lang === 'zh' ? '設定' : 'Settings',
            onClick: () => { setShowMoreMenu(false); }
        },
    ];

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
                        {moreMenuItems.map((item, index) => {
                            if ('divider' in item && item.divider) {
                                return <div key={index} className="h-px bg-gray-100 my-1.5" />;
                            }
                            if (!('icon' in item) || !item.icon) return null;
                            const MenuIcon = item.icon as React.ComponentType<{ size: number; className: string }>;
                            return (
                                <button
                                    key={index}
                                    onClick={item.onClick}
                                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                                >
                                    <MenuIcon size={18} className="text-gray-500" />
                                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Bottom Tab Bar */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100 grid grid-cols-5 items-center pb-2 z-[2050] shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
                {tabs.map(tab => {
                    const Icon = tab.icon;
                    const isActive = tab.id === 'more' ? showMoreMenu : activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => handleTabClick(tab.id)}
                            className={`flex flex-col items-center justify-center w-full transition-colors ${isActive ? 'text-teal-600' : 'text-gray-400'
                                }`}
                        >
                            <Icon size={20} fill={tab.id === 'favorites' && isActive ? 'currentColor' : 'none'} />
                            <span className="text-[10px] mt-1 font-bold whitespace-nowrap">{tab.label}</span>
                        </button>
                    );
                })}
            </div>
        </>
    );
};

export default MobileNav;
