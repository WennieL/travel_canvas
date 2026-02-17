import React from 'react';
import { Home, FolderOpen, Plus, Package, Map as MapIcon } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';
import { LangType } from '../types';

interface DesktopSidebarProps {
    activePlan: any;
    activeView: string;
    onNavigate: (view: string) => void;
    onNewPlan: () => void;
    onShowPlanManager: () => void;
    lang: LangType;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
    activePlan,
    activeView,
    onNavigate,
    onNewPlan,
    onShowPlanManager,
    lang
}) => {
    const { items, getLabel } = useNavigation({
        hasActivePlan: !!activePlan,
        platform: 'desktop',
        lang
    });

    const getIcon = (iconName: string) => {
        const iconMap: { [key: string]: any } = {
            '🔍': Home,
            '📂': FolderOpen,
            '➕': Plus,
            '🎨': Package,
            '🗺️': MapIcon,
        };
        return iconMap[iconName] || Home;
    };

    const handleNavClick = (item: any) => {
        if (item.action === 'modal') {
            if (item.id === 'new') onNewPlan();
        } else if (item.action === 'navigate') {
            if (item.id === 'projects') {
                onShowPlanManager();
            } else {
                onNavigate(item.id);
            }
        }
    };

    return (
        <div className="hidden lg:flex flex-col w-16 bg-white border-r border-gray-200 items-center py-4 gap-2 z-30">
            {/* Logo */}
            <div className="mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    TC
                </div>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 flex flex-col gap-1 w-full px-2">
                {items.map((item) => {
                    const Icon = getIcon(item.icon);
                    const isActive = activeView === item.id;
                    const label = getLabel(item);

                    return (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item)}
                            className={`
                group relative w-full h-12 rounded-lg flex flex-col items-center justify-center
                transition-all duration-200
                ${isActive
                                    ? 'bg-teal-50 text-teal-600'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                                }
              `}
                            title={label}
                        >
                            <Icon size={20} className={isActive ? 'text-teal-600' : ''} />
                            <span className={`text-[9px] mt-0.5 font-medium ${isActive ? 'text-teal-600' : 'text-gray-400'}`}>
                                {label.slice(0, 2)}
                            </span>

                            {/* Tooltip on hover */}
                            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity z-50">
                                {label}
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Divider for editing tools */}
            {activePlan && items.some(i => i.showWhen === 'editing') && (
                <div className="w-8 h-px bg-gray-200 my-2" />
            )}
        </div>
    );
};

export default DesktopSidebar;
