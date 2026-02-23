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
            {/* Desktop Only Split View Map Toggle */}
            {viewMode === 'canvas' && (
                <div className="hidden lg:flex items-center gap-3">
                    <div className="h-8 w-[1px] bg-gray-200 mx-1" />
                    <button
                        onClick={() => setShowContextMap(!showContextMap)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all font-bold text-xs ${showContextMap
                            ? 'bg-teal-50 border-teal-200 text-teal-600 shadow-sm'
                            : 'bg-white border-gray-200 text-gray-400 hover:border-teal-200 hover:text-teal-600'
                            }`}
                        title={t.showMap || "Show Map"}
                    >
                        <MapIcon size={16} />
                        <span>{lang === 'zh' ? '地圖模式' : 'Split View'}</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default AppToolbar;
