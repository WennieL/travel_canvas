import React from 'react';
import { X } from 'lucide-react';
import SidebarContent from './SidebarContent';
import { LangType, TravelItem, Template, Plan, Region, ItemType, DaySchedule, TimeSlot } from '../types';

interface MobileLibraryProps {
    onClose: () => void;

    // View State (Required by SidebarContent)
    activeTab: 'assets' | 'templates' | 'budget' | 'checklist' | 'projects';
    setActiveTab: (tab: 'assets' | 'templates' | 'budget' | 'checklist' | 'projects') => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    activeCategory: 'all' | ItemType;
    setActiveCategory: (category: 'all' | ItemType) => void;
    activeRegion: Region;
    setActiveRegion: (region: Region) => void;
    setShowCustomItemModal: (show: boolean) => void;
    handleDragStart: (e: React.DragEvent, item: TravelItem, source: 'sidebar' | 'canvas') => void;
    handleTapToAdd: (item: TravelItem) => void;
    applyTemplate: (template: any) => void;
    t: any;
    lang: LangType;
    customAssets: TravelItem[];
    subscribedCreators: string[];
    onCreatorClick: (id: string) => void;
    onPreviewTemplate: (template: Template) => void;

    // Tools props
    activePlan: Plan;
    plans: Plan[];
    onSelectPlan: (id: string) => void;
    handleCreatePlan: (data?: any) => void;
    handleDeletePlan: (id: string, e: React.MouseEvent) => void;
    budgetLimit: number;
    setBudgetLimit: (limit: number) => void;
    calculateTotalBudget: () => number;
    calculateCategoryBreakdown: () => any;
    onUpdateChecklist: (checklist: any[]) => void;
    showToastMessage: (message: string, type: any) => void;
    currency?: string;
    exchangeRate?: number;
    onSetSettings?: (currency: string, rate: number) => void;

    // Phase 20/21 additions
    addToSlotTarget?: TimeSlot | null;
    currentDay?: number;
    onExitDiscovery?: () => void;
    onExploreCreatorMap?: (authorId: string, authorName: string) => void;
    setShowMobileLibrary?: (show: boolean) => void;
    onModeChange?: (mode: 'list' | 'map') => void;
    sidebarMode?: 'list' | 'map';
    setSidebarMode?: (mode: 'list' | 'map') => void;
}

export const MobileLibrary: React.FC<MobileLibraryProps> = (props) => {
    // Phase 22: Local state to track minimization
    const [isMinimized, setIsMinimized] = React.useState(false);

    // Sync minimized state with sidebar mode
    const handleModeChange = (mode: 'list' | 'map') => {
        setIsMinimized(mode === 'map');
        if (props.onModeChange) props.onModeChange(mode);
    };

    return (
        <div className={`fixed inset-0 z-[1000] lg:hidden ${isMinimized ? 'pointer-events-none' : ''}`}>
            {/* Backdrop - Only show if not minimized to allow interacting with map */}
            <div
                className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isMinimized ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                onClick={props.onClose}
            />

            {/* Drawer */}
            <div
                className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl flex flex-col transition-all duration-500 ease-in-out ${isMinimized ? 'h-[12vh]' : 'h-[85vh]'} animate-in slide-in-from-bottom duration-300 pointer-events-auto`}
            >
                {/* Drag Handle / Header - Clickable to close or TOGGLE */}
                <div
                    className="flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50/50 transition-colors"
                    onClick={() => {
                        if (isMinimized) {
                            setIsMinimized(false);
                        } else {
                            props.onClose();
                        }
                    }}
                >
                    <div className="w-8 h-8" /> {/* Spacer */}
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            props.onClose();
                        }}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Content - Reuse SidebarContent */}
                <div className={`flex-1 flex flex-col min-h-0 overflow-hidden relative transition-opacity duration-300 ${isMinimized ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <SidebarContent
                        {...props}
                        highlight={false} // No wiggle needed inside drawer
                        isSlim={true}
                        onModeChange={handleModeChange}
                        sidebarMode={props.sidebarMode}
                        setSidebarMode={props.setSidebarMode}
                    />
                </div>
            </div>
        </div>
    );
};
