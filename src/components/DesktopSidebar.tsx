import { Home, FolderOpen, Plus, Package, Map as MapIcon, PanelsTopLeft } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';
import { LangType } from '../types';

interface DesktopSidebarProps {
    activePlan: any;
    activeView: string;
    onNavigate: (view: string) => void;
    onNewPlan: () => void;
    onShowPlanManager: () => void;
    lang: LangType;
    isSidebarOpen: boolean;
    setIsSidebarOpen: (open: boolean) => void;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
    activePlan,
    activeView,
    onNavigate,
    onNewPlan,
    onShowPlanManager,
    lang,
    isSidebarOpen,
    setIsSidebarOpen
}) => {
    const { items, getLabel } = useNavigation({
        hasActivePlan: !!activePlan,
        platform: 'desktop',
        lang
    });

    const handleNavClick = (item: any) => {
        if (item.action === 'modal') {
            if (item.id === 'new') onNewPlan();
        } else if (item.action === 'navigate') {
            if (item.id === 'projects') {
                onShowPlanManager();
            } else if (item.id === 'assets') {
                setIsSidebarOpen(!isSidebarOpen);
            } else {
                // This covers: discovery, favorites, plan, etc.
                onNavigate(item.id);
            }
        }
    };

    return (
        <div className="hidden lg:flex flex-col w-20 bg-white border-r border-gray-200 items-center py-4 gap-2 z-50">
            {/* Logo area */}
            <div className="w-full px-2 mb-4 flex flex-col items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm hover:scale-105 transition-transform cursor-pointer">
                    TC
                </div>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 flex flex-col gap-1 w-full px-1.5">
                {items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeView === item.id;
                    const label = getLabel(item);

                    return (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item)}
                            className={`
                group relative w-full h-14 rounded-lg flex flex-col items-center justify-center
                transition-all duration-200
                ${isActive
                                    ? 'bg-teal-50 text-teal-600'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                                }
              `}
                            title={label}
                        >
                            <Icon size={22} className={isActive ? 'text-teal-600' : ''} />
                            <span className={`text-[10px] mt-1 font-medium leading-tight text-center px-1 break-words w-full ${isActive ? 'text-teal-600' : 'text-gray-400'}`}>
                                {label}
                            </span>

                            {/* Tooltip on hover */}
                            <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-[11px] rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity z-[60]">
                                {label}
                                <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
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
