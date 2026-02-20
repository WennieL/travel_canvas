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
            const isOpening = !showMoreMenu;
            if (isOpening) {
                setShowFavorites(false);
                setShowPlanManager(false);
            }
            setShowMoreMenu(isOpening);
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
        switch (itemId) {
            case 'account':
                // Account management placeholder
                break;
            case 'creator_center':
                // Creator Studio placeholder
                break;
            case 'budget':
                setShowMoreMenu(false);
                setViewMode('budget');
                setShowFavorites(false);
                setShowPlanManager(false);
                break;
            case 'checklist':
                setShowMoreMenu(false);
                setViewMode('checklist');
                setShowFavorites(false);
                setShowPlanManager(false);
                break;
            case 'lang':
                // Don't close for language toggle
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
                <div className="lg:hidden fixed bottom-16 left-0 right-0 bg-white rounded-t-[32px] rounded-b-none shadow-[0_-10px_40px_rgba(0,0,0,0.08)] z-[2050] border-t border-gray-100 overflow-hidden animate-in slide-in-from-bottom duration-300">
                    {/* Grabber */}
                    <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mt-4 mb-2" />

                    <div className="p-6 pt-2">
                        {/* Profile Header Block */}
                        <div className="flex items-center gap-4 p-4 mb-4 rounded-2xl bg-gray-50/80 border border-gray-100/50">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-xl shadow-sm border-2 border-white">
                                W
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-gray-900 truncate flex items-center gap-1.5 text-lg">
                                    Wennie L.
                                    <span className="px-1.5 py-0.5 bg-teal-100 text-teal-700 text-[10px] rounded uppercase tracking-wider font-extrabold">{t.proMember || 'PRO'}</span>
                                </h4>
                                <div className="flex items-center gap-3 mt-1">
                                    <div className="flex flex-col">
                                        <span className="text-[11px] font-bold text-gray-900 leading-none">12</span>
                                        <span className="text-[9px] text-gray-400 uppercase tracking-tighter mt-0.5">{t.plans || 'Plans'}</span>
                                    </div>
                                    <div className="w-px h-4 bg-gray-200" />
                                    <div className="flex flex-col">
                                        <span className="text-[11px] font-bold text-gray-900 leading-none">856</span>
                                        <span className="text-[9px] text-gray-400 uppercase tracking-tighter mt-0.5">{t.followers || 'Followers'}</span>
                                    </div>
                                    <div className="w-px h-4 bg-gray-200" />
                                    <div className="flex flex-col">
                                        <span className="text-[11px] font-bold text-gray-900 leading-none">42</span>
                                        <span className="text-[9px] text-gray-400 uppercase tracking-tighter mt-0.5">{t.following || 'Following'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1 mt-2 mb-4">
                            {mobileMore.map((item: NavItem) => {
                                // Don't render 'account' or 'creator_center' in the main list if we want them inside the header or specific sections
                                // Actually, let's keep them but with better styling.
                                if (item.id === 'account') return null; // We'll handle account in the header

                                const MenuIcon = item.icon;
                                const label = getLabel(item);

                                // Logic for section dividers
                                const needsTopDivider = (item.id === 'lang' || item.id === 'budget');

                                return (
                                    <React.Fragment key={item.id}>
                                        {needsTopDivider && <div className="h-px bg-gray-100 my-2 mx-2" />}
                                        <button
                                            onClick={() => handleMoreClick(item.id)}
                                            className="w-full flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-all group"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:text-teal-600 group-hover:bg-teal-50 transition-colors">
                                                <MenuIcon size={18} />
                                            </div>
                                            <span className="text-[15px] font-semibold text-gray-700 flex-1 text-left">{label}</span>
                                            {item.action === 'navigate' && <Plus size={14} className="text-gray-300" />}
                                        </button>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom Tab Bar */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-dashed border-gray-200 grid grid-cols-5 items-center pb-2 z-[2050] shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
                {/* Decorative notches for the bottom nav (Mirroring header ticket) */}
                <div className="absolute -top-1 left-4 w-2 h-2 bg-gray-50 rounded-full border border-gray-100 shadow-inner" />
                <div className="absolute -top-1 right-4 w-2 h-2 bg-gray-50 rounded-full border border-gray-100 shadow-inner" />

                {mobilePrimary.map((tab: NavItem) => {
                    const Icon = tab.icon;
                    const label = getLabel(tab);
                    const isActive = tab.id === 'more' ? showMoreMenu : activeTab === (tab.id === 'projects' ? 'my' : tab.id);

                    if (tab.id === 'more') {
                        return (
                            <button
                                key={tab.id}
                                onClick={() => handleTabClick(tab.id)}
                                className="flex flex-col items-center justify-center w-full transition-all active:scale-90"
                            >
                                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black border-2 transition-all ${isActive
                                        ? 'bg-teal-600 text-white border-teal-200 shadow-md ring-2 ring-teal-50'
                                        : 'bg-gradient-to-br from-teal-400 to-teal-600 text-white border-white shadow-sm'
                                    }`}>
                                    W
                                </div>
                                <span className={`text-[10px] mt-1 font-bold whitespace-nowrap ${isActive ? 'text-teal-600' : 'text-gray-400'}`}>{label}</span>
                            </button>
                        );
                    }

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
