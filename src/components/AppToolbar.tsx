import { Calendar, Map as MapIcon, ListTodo, ZoomIn, ZoomOut, DollarSign } from 'lucide-react';
import { ViewMode, LangType } from '../types';

interface AppToolbarProps {
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    showContextMap: boolean;
    setShowContextMap: (show: boolean) => void;
    t: any;
    lang: LangType;
}

const AppToolbar: React.FC<AppToolbarProps> = ({
    viewMode, setViewMode,
    showContextMap, setShowContextMap,
    t,
    lang
}) => {
    return (
        <div className="flex items-center gap-3">
            {/* Split View Map Toggle (Desktop Only, Canvas View Only) */}
            {viewMode === 'canvas' && (
                <>
                    <div className="hidden lg:block h-8 w-[1px] bg-gray-200 mx-1" />
                    <button
                        onClick={() => setShowContextMap(!showContextMap)}
                        className={`hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all font-bold text-xs ${showContextMap
                            ? 'bg-teal-50 border-teal-200 text-teal-600 shadow-sm'
                            : 'bg-white border-gray-200 text-gray-400 hover:border-teal-200 hover:text-teal-600'
                            }`}
                        title={t.showMap || "Show Map"}
                    >
                        <MapIcon size={16} />
                        <span>{lang === 'zh' ? '地圖模式' : 'Split View'}</span>
                    </button>
                </>
            )}

            {/* View Switcher - Hidden on Desktop (redundant with sidebar tabs) */}
            <div className="flex lg:hidden bg-gray-100/80 p-0.5 rounded-lg gap-0.5">
                {[
                    { mode: 'canvas', icon: <Calendar size={18} />, label: t.schedule },
                    // Map mode removed in favor of Split View Toggle
                    { mode: 'checklist', icon: <ListTodo size={18} />, label: t.preparation },
                    { mode: 'budget', icon: <DollarSign size={18} />, label: t.budget || 'Budget' }
                ].map((item) => (
                    <button
                        key={item.mode}
                        onClick={() => setViewMode(item.mode as ViewMode)}
                        className={`p-1.5 rounded-md transition-all ${viewMode === item.mode ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-200/50'}`}
                        title={item.label}
                    >
                        {item.icon}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default AppToolbar;
