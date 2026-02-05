import React from 'react';
import { Calendar, Map as MapIcon, ListTodo, ZoomIn, ZoomOut } from 'lucide-react';
import { ViewMode } from '../types';

interface AppToolbarProps {
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    canvasZoom: number;
    handleZoomIn: () => void;
    handleZoomOut: () => void;
    handleZoomReset: () => void;
    t: any;
}

const AppToolbar: React.FC<AppToolbarProps> = ({
    viewMode, setViewMode,
    canvasZoom, handleZoomIn, handleZoomOut, handleZoomReset,
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

            <div className="h-6 w-[1px] bg-gray-200 mx-1"></div>

            {/* Zoom Controls */}
            <div className="hidden lg:flex items-center bg-gray-100/80 p-0.5 rounded-lg gap-0.5">
                <button
                    onClick={handleZoomOut}
                    disabled={canvasZoom <= 50}
                    className="p-1.5 rounded-md hover:bg-white hover:text-teal-600 text-gray-400 disabled:opacity-40 transition-all"
                    title="縮小"
                >
                    <ZoomOut size={18} />
                </button>
                <button
                    onClick={handleZoomReset}
                    className="px-2 py-1 min-w-[55px] text-center text-[10px] font-bold text-gray-500 hover:bg-white rounded-md transition-all"
                    title="重設為 100%"
                >
                    {canvasZoom}%
                </button>
                <button
                    onClick={handleZoomIn}
                    disabled={canvasZoom >= 150}
                    className="p-1.5 rounded-md hover:bg-white hover:text-teal-600 text-gray-400 disabled:opacity-40 transition-all"
                    title="放大"
                >
                    <ZoomIn size={18} />
                </button>
            </div>
        </div>
    );
};

export default AppToolbar;
