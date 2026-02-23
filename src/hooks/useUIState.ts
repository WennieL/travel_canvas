import { useState, useCallback } from 'react';
import { ViewMode, ItemType, Region, Template, ScheduleItem, TimeSlot } from '../types';

export const useUIState = () => {
    // Basic UI Toggles
    const [showLanding, setShowLanding] = useState(true);
    const [viewMode, setViewMode] = useState<ViewMode>('canvas');
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSidebarPinned, setIsSidebarPinned] = useState(true);
    const [sidebarHighlight, setSidebarHighlight] = useState(false);

    // Name Editing
    const [isEditingName, setIsEditingName] = useState(false);
    const [editingName, setEditingName] = useState('');

    // Modal States
    const [showPlanManager, setShowPlanManager] = useState(false);
    const [showDateModal, setShowDateModal] = useState(false);
    const [showExportModal, setShowExportModal] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const [showCustomItemModal, setShowCustomItemModal] = useState(false);
    const [showSubmitModal, setShowSubmitModal] = useState(false);
    const [showCitySelector, setShowCitySelector] = useState(false);
    const [showMobileLibrary, setShowMobileLibrary] = useState(false);
    const [mobileLibraryExpanded, setMobileLibraryExpanded] = useState(false);
    const [showMobilePreview, setShowMobilePreview] = useState(false);
    const [showMoveModal, setShowMoveModal] = useState(false);
    const [showStartPicker, setShowStartPicker] = useState(false);
    const [showCheckIn, setShowCheckIn] = useState(false);
    const [selectedCreatorId, setSelectedCreatorId] = useState<string | null>(null);
    const [moveTarget, setMoveTarget] = useState<{ slot: TimeSlot, index: number } | null>(null);
    const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);
    const [unlockTarget, setUnlockTarget] = useState<ScheduleItem | null>(null);
    const [selectedItem, setSelectedItem] = useState<ScheduleItem | null>(null);
    const [batchUnlockCount, setBatchUnlockCount] = useState(0);
    const [addToSlotTarget, setAddToSlotTarget] = useState<TimeSlot | null>(null); // Track which slot user clicked "Add Item"
    const [showStoryPreview, setShowStoryPreview] = useState(false);
    const [discoveryCreatorId, setDiscoveryCreatorId] = useState<string | null>(null);

    // Sidebar States
    const [activeTab, setActiveTab] = useState<'assets' | 'templates' | 'budget' | 'checklist' | 'projects'>('assets');
    const [activeCategory, setActiveCategory] = useState<'all' | ItemType>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sidebarWidth, setSidebarWidth] = useState(() => {
        try {
            const saved = localStorage.getItem('sidebarWidth');
            return saved ? parseInt(saved) : 320;
        } catch { return 320; }
    });


    // Region State (Sidebar Filter)
    const [activeRegion, setActiveRegion] = useState<Region>('all');

    // Desktop Navigation State (for Canva-style nav)
    const [activeView, setActiveView] = useState<string>('assets');

    return {
        // States
        showLanding, setShowLanding,
        viewMode, setViewMode,
        isFullscreen, setIsFullscreen,
        isSidebarOpen, setIsSidebarOpen,
        isSidebarPinned, setIsSidebarPinned,
        sidebarHighlight, setSidebarHighlight,
        isEditingName, setIsEditingName,
        editingName, setEditingName,
        showPlanManager, setShowPlanManager,
        showDateModal, setShowDateModal,
        showExportModal, setShowExportModal,
        showShareModal, setShowShareModal,
        showCustomItemModal, setShowCustomItemModal,
        showSubmitModal, setShowSubmitModal,
        showCitySelector, setShowCitySelector,
        showMobileLibrary, setShowMobileLibrary,
        mobileLibraryExpanded, setMobileLibraryExpanded,
        showMobilePreview, setShowMobilePreview,
        showMoveModal, setShowMoveModal,
        showStartPicker, setShowStartPicker,
        showCheckIn, setShowCheckIn,
        activeTab, setActiveTab,
        activeCategory, setActiveCategory,
        searchQuery, setSearchQuery,
        sidebarWidth, setSidebarWidth,
        selectedCreatorId, setSelectedCreatorId,
        previewTemplate, setPreviewTemplate,
        unlockTarget, setUnlockTarget,
        selectedItem, setSelectedItem,
        batchUnlockCount, setBatchUnlockCount,
        activeRegion, setActiveRegion,
        moveTarget, setMoveTarget,
        addToSlotTarget, setAddToSlotTarget,
        showStoryPreview, setShowStoryPreview,
        activeView, setActiveView,
        discoveryCreatorId, setDiscoveryCreatorId,
    };
};
