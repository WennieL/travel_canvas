import React from 'react';
import { X } from 'lucide-react';
import SidebarContent from './SidebarContent';
import { LangType, TravelItem, Template, Plan, Region, ItemType, DaySchedule } from '../types';

interface MobileLibraryProps {
    onClose: () => void;

    // Props required by SidebarContent
    activeTab: 'assets' | 'templates';
    setActiveTab: (tab: 'assets' | 'templates') => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    activeCategory: 'all' | ItemType;
    setActiveCategory: (category: 'all' | ItemType) => void;
    activeRegion: Region;
    setActiveRegion: (region: Region) => void;
    setShowCustomItemModal: (show: boolean) => void;
    handleDragStart: (e: React.DragEvent, item: TravelItem, source: 'sidebar' | 'canvas') => void;
    handleTapToAdd: (item: TravelItem) => void;
    applyTemplate: (template: { name: string; duration: number; schedule: DaySchedule; region: Region }) => void;
    t: any;
    lang: LangType;
    customAssets: TravelItem[];
    subscribedCreators: string[];
    onCreatorClick: (id: string) => void;
    onPreviewTemplate: (template: Template) => void;
}

export const MobileLibrary: React.FC<MobileLibraryProps> = (props) => {
    return (
        <div className="fixed inset-0 z-[1000] lg:hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={props.onClose}
            />

            {/* Drawer */}
            <div className="absolute bottom-0 left-0 right-0 h-[85vh] bg-white rounded-t-2xl shadow-2xl flex flex-col animate-in slide-in-from-bottom duration-300">
                {/* Drag Handle / Header */}
                <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-100">
                    <div className="w-8 h-8" /> {/* Spacer */}
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
                    <button
                        onClick={props.onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Content - Reuse SidebarContent */}
                <div className="flex-1 overflow-hidden relative">
                    <SidebarContent
                        {...props}
                        highlight={false} // No wiggle needed inside drawer
                    />
                </div>
            </div>
        </div>
    );
};
