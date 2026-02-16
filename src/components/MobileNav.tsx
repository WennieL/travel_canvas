import React from 'react';
import { Calendar, Map as MapIcon, ListTodo, FolderOpen, Compass } from 'lucide-react';
import { LangType, ViewMode } from '../types';

interface MobileNavProps {
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    showPlanManager: boolean;
    setShowPlanManager: (show: boolean) => void;
    lang: string;
    t: any;
}

export const MobileNav: React.FC<MobileNavProps> = ({
    viewMode, setViewMode, showPlanManager, setShowPlanManager, lang, t
}) => {
    if (viewMode === 'map') return null;

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100 grid grid-cols-5 items-center pb-2 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
            <button
                onClick={() => { setViewMode('discovery'); setShowPlanManager(false); }}
                className={`flex flex-col items-center justify-center w-full transition-colors ${viewMode === 'discovery' && !showPlanManager ? 'text-teal-600' : 'text-gray-400'}`}
            >
                <Compass size={20} />
                <span className="text-[10px] mt-1 font-bold whitespace-nowrap">{t.explore || (lang === 'zh' ? '發現' : 'Explore')}</span>
            </button>
            <button
                onClick={() => { setViewMode('canvas'); setShowPlanManager(false); }}
                className={`flex flex-col items-center justify-center w-full transition-colors ${viewMode === 'canvas' && !showPlanManager ? 'text-teal-600' : 'text-gray-400'}`}
            >
                <Calendar size={20} />
                <span className="text-[10px] mt-1 font-bold whitespace-nowrap">{t.plan || 'Plan'}</span>
            </button>
            <button
                onClick={() => { setViewMode('map'); setShowPlanManager(false); }}
                className={`flex flex-col items-center justify-center w-full transition-colors ${viewMode === 'map' && !showPlanManager ? 'text-teal-600' : 'text-gray-400'}`}
            >
                <MapIcon size={20} />
                <span className="text-[10px] mt-1 font-bold whitespace-nowrap">{t.map || 'Map'}</span>
            </button>

            <button
                onClick={() => { setViewMode('checklist'); setShowPlanManager(false); }}
                className={`flex flex-col items-center justify-center w-full transition-colors ${viewMode === 'checklist' && !showPlanManager ? 'text-teal-600' : 'text-gray-400'}`}
            >
                <ListTodo size={20} />
                <span className="text-[10px] mt-1 font-bold whitespace-nowrap">{t.preparation || 'Tools'}</span>
            </button>
            <button
                onClick={() => setShowPlanManager(true)}
                className={`flex flex-col items-center justify-center w-full transition-colors ${showPlanManager ? 'text-teal-600' : 'text-gray-400'}`}
            >
                <FolderOpen size={20} />
                <span className="text-[10px] mt-1 font-bold whitespace-nowrap">{t.myPlans || 'Plans'}</span>
            </button>
        </div>
    );
};

export default MobileNav;
