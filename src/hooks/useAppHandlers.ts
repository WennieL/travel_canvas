import { useState, useCallback } from 'react';
import {
    Plan, Template, TravelItem, ViewMode, Region,
    ScheduleItem, ChecklistItem
} from '../types';
import { SAMPLE_CREATORS, TEMPLATES } from '../data/index';

interface AppHandlersDeps {
    lang: 'zh' | 'en';
    setLang: (lang: 'zh' | 'en') => void;
    activePlan: Plan;
    updateActivePlan: (data: Partial<Plan>) => void;
    activePlanId: string;
    setActivePlanId: (id: string) => void;
    plans: Plan[];
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    setIsCreatingNewPlan: (val: boolean) => void;
    setPendingWizardData: (data: any) => void;
    showToastMessage: (msg: string, type?: 'success' | 'warning' | 'error' | 'info') => void;
    ui: any;
    isMobile: boolean;
    // Name editing
    nameInputRef: React.RefObject<HTMLInputElement | null>;
    isEditingName: boolean;
    setIsEditingName: (val: boolean) => void;
    editingName: string;
    setEditingName: (val: string) => void;
    // Modals/Views
    setShowPlanManager: (val: boolean) => void;
    setShowDateModal: (val: boolean) => void;
    isSidebarOpen: boolean;
    setIsSidebarOpen: (val: boolean) => void;
    // Budget
    calculateTotalBudget: () => number;
}

export const useAppHandlers = (deps: AppHandlersDeps) => {
    const {
        lang, setLang, activePlan, updateActivePlan, activePlanId, setActivePlanId,
        plans, viewMode, setViewMode, setIsCreatingNewPlan, setPendingWizardData,
        showToastMessage, ui, isMobile,
        nameInputRef, isEditingName, setIsEditingName, editingName, setEditingName,
        setShowPlanManager, setShowDateModal, isSidebarOpen, setIsSidebarOpen,
        calculateTotalBudget
    } = deps;

    // --- Local State ---
    const [showContextMap, setShowContextMap] = useState(false);
    const [selectedCreatorId, setSelectedCreatorId] = useState<string | null>(null);
    const [subscribedCreators, setSubscribedCreators] = useState<string[]>([]);
    const [customAssets, setCustomAssets] = useState<TravelItem[]>([]);
    const [showFavorites, setShowFavorites] = useState(false);

    // --- Derived ---
    const activeCreator = SAMPLE_CREATORS.find(c => c.id === selectedCreatorId) || null;
    const creatorTemplates = activeCreator ? TEMPLATES.filter(tpl => tpl.authorId === activeCreator.id) : [];

    // --- Handlers ---

    const handleMapItemClick = useCallback((item: any) => {
        const el = document.getElementById(`item-${item.instanceId}`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.classList.add('ring-2', 'ring-teal-500', 'ring-offset-2', 'bg-teal-50');
            setTimeout(() => {
                el.classList.remove('ring-2', 'ring-teal-500', 'ring-offset-2', 'bg-teal-50');
            }, 2000);
        }
    }, []);

    const handleToggleSubscribe = useCallback((creatorId: string) => {
        setSubscribedCreators(prev => {
            const isSubscribed = prev.includes(creatorId);
            const next = isSubscribed ? prev.filter(id => id !== creatorId) : [...prev, creatorId];
            showToastMessage(
                isSubscribed
                    ? (lang === 'zh' ? '已取消關注' : 'Unsubscribed')
                    : (lang === 'zh' ? '已關注達人！' : 'Subscribed to Creator!'),
                'success'
            );
            return next;
        });
    }, [lang, showToastMessage]);

    const toggleLang = useCallback(() => setLang(lang === 'en' ? 'zh' : 'en'), [lang, setLang]);

    const handleExploreCreatorMap = useCallback((authorId: string, authorName: string) => {
        ui.setDiscoveryCreatorId(authorId);
        setViewMode('map');
        ui.setSidebarMode('map');

        if (typeof window !== 'undefined' && window.innerWidth < 1024) {
            setViewMode('map');
        }
        showToastMessage(lang === 'zh' ? `正在探索 ${authorName} 的私房景點 🗺️` : `Exploring ${authorName}'s hidden spots 🗺️`);
    }, [lang, ui, setViewMode, showToastMessage]);

    const handleSidebarModeChange = useCallback((mode: 'list' | 'map') => {
        ui.setSidebarMode(mode);
        if (mode === 'map') {
            if (isMobile) {
                setViewMode('map');
                setShowContextMap(false);
                ui.setShowMobileLibrary(false);
            } else {
                setViewMode('canvas');
                setShowContextMap(true);
            }

            if (!ui.discoveryCreatorId) {
                ui.setDiscoveryCreatorId('all');
            }

            if (!isMobile) setIsSidebarOpen(true);
        } else {
            setShowContextMap(false);
            ui.setDiscoveryCreatorId(null);
        }
    }, [isMobile, ui, setViewMode, setIsSidebarOpen]);

    // Name editing handlers
    const startEditingName = useCallback(() => {
        setEditingName(activePlan?.name || '');
        setIsEditingName(true);
        setTimeout(() => { if (nameInputRef.current) nameInputRef.current.focus(); }, 50);
    }, [activePlan?.name, setEditingName, setIsEditingName, nameInputRef]);

    const saveName = useCallback(() => {
        if (editingName.trim()) {
            updateActivePlan({ name: editingName.trim() });
        }
        setIsEditingName(false);
    }, [editingName, updateActivePlan, setIsEditingName]);

    const handleNameKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Enter') saveName();
        if (e.key === 'Escape') setIsEditingName(false);
    }, [saveName, setIsEditingName]);

    const openDatePicker = useCallback(() => setShowDateModal(true), [setShowDateModal]);

    // Navigation
    const handleNavigate = useCallback((view: ViewMode) => {
        if (isMobile) setIsSidebarOpen(false);
        setShowFavorites(view === 'favorites');
        setShowPlanManager(view === 'projects');
        ui.setShowStartPicker(false);

        if (view !== 'discovery') {
            setIsCreatingNewPlan(false);
            setPendingWizardData(null);
            ui.setDiscoveryCreatorId(null);
        }

        setViewMode(view);
    }, [isMobile, setIsSidebarOpen, setShowPlanManager, ui, setIsCreatingNewPlan, setPendingWizardData, setViewMode]);

    const handleSelectPlan = useCallback((id: string) => {
        setActivePlanId(id);
        setShowPlanManager(false);
        if (viewMode === 'discovery' || viewMode === 'projects' || viewMode === 'favorites') {
            setViewMode('canvas');
        }
        if (isMobile) {
            ui.setShowMobileLibrary(false);
        } else {
            ui.setActiveTab('projects');
            ui.setIsSidebarOpen(true);
        }
    }, [setActivePlanId, setShowPlanManager, viewMode, setViewMode, isMobile, ui]);

    const generateExportText = useCallback(() => {
        let text = `✈️ ${activePlan.name}\n`;
        text += `💰 Budget: JP¥${calculateTotalBudget().toLocaleString()}\n\n`;
        return text;
    }, [activePlan.name, calculateTotalBudget]);

    return {
        // State
        showContextMap, setShowContextMap,
        selectedCreatorId, setSelectedCreatorId,
        subscribedCreators, setSubscribedCreators,
        customAssets, setCustomAssets,
        showFavorites, setShowFavorites,
        // Derived
        activeCreator, creatorTemplates,
        // Handlers
        handleMapItemClick,
        handleToggleSubscribe,
        toggleLang,
        handleExploreCreatorMap,
        handleSidebarModeChange,
        startEditingName,
        saveName,
        handleNameKeyDown,
        openDatePicker,
        handleNavigate,
        handleSelectPlan,
        generateExportText,
    };
};
