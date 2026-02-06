import React from 'react';
import { Calendar, Map as MapIcon, ListTodo, ZoomIn, ZoomOut } from 'lucide-react';
import { ViewMode } from '../types';

interface AppToolbarProps {
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    t: any;
}

const AppToolbar: React.FC<AppToolbarProps> = ({
    viewMode, setViewMode,
    t
}) => {
    return (
        <div className="flex items-center gap-2">
            {/* View Switcher */}
            <div className="flex bg-gray-100/80 p-0.5 rounded-lg gap-0.5">
                {[
                    { mode: 'canvas', icon: <Calendar size={18} />, label: t.schedule },
                    { mode: 'map', icon: <MapIcon size={18} />, label: t.map },
                    { mode: 'checklist', icon: <ListTodo size={18} />, label: t.checklist }
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
