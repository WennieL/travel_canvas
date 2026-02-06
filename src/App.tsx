import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    SidebarClose,
    ListTodo,
    Calendar,
    Map as MapIcon,
    Plus,
    FolderOpen,
    Globe,
    Share2,
    Upload
} from 'lucide-react';
import * as htmlToImage from 'html-to-image';

import {
    TRANSLATIONS,
    TEMPLATES,
    SAMPLE_CREATORS,
} from './data/index';
import {
    LangType,
    ItemType,
    TransportMode,
    TimeSlot,
    ScheduleItem,
    FullSchedule,
    Plan,
    ViewMode,
    TravelItem,
    Region,
    Template,
    DaySchedule
} from './types';
import {
    getSlotLabel,
    getFallbackImage
} from './utils';

import LandingPage from './components/LandingPage';
import MapView from './components/MapView';
import SidebarContent from './components/SidebarContent';
import DropZone from './components/DropZone';
import ChecklistView from './components/ChecklistView';
import ScheduleList from './components/ScheduleList';
import { Toast } from './components/Toast';
import { usePlans, useBudget, useUIState } from './hooks';

// New Modular Components
import AppHeader from './components/AppHeader';
import DayTabs from './components/DayTabs';
import AppToolbar from './components/AppToolbar';
import AppModals from './components/AppModals';

export function App() {
    const [lang, setLang] = useState<LangType>('zh');
    const [isInitialized, setIsInitialized] = useState(false);

    // UI State Management Hook
    const ui = useUIState();
    const {
        showLanding, setShowLanding,
        viewMode, setViewMode,
        isFullscreen, setIsFullscreen,
        isSidebarOpen, setIsSidebarOpen,
        sidebarWidth, setSidebarWidth,
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
        showMobilePreview, setShowMobilePreview,
        showMoveModal, setShowMoveModal,
        activeTab, setActiveTab,
        activeCategory, setActiveCategory,
        searchQuery, setSearchQuery,
        exportTab, setExportTab,
        selectedCreatorId, setSelectedCreatorId,
        previewTemplate, setPreviewTemplate,
        unlockTarget, setUnlockTarget,
        batchUnlockCount, setBatchUnlockCount,
        moveTarget, setMoveTarget
    } = ui;

    const t = TRANSLATIONS[lang];

    // Business Logic Hooks
    const {
        plans, activePlanId, activePlan, currentDay,
        setPlans, setActivePlanId, setCurrentDay,
        updateActivePlan, updateChecklist, handleCreatePlan,
        handleDeletePlan, handleAddDay, handleDeleteDay, getDisplayDate, getShortDate
    } = usePlans(isInitialized, t, lang);

    const { budgetLimit, setBudgetLimit, calculateTotalBudget, calculateCategoryBreakdown } = useBudget(activePlan, t);

    // Refs
    const scheduleRef = useRef<HTMLDivElement>(null);
    const nameInputRef = useRef<HTMLInputElement>(null);
    const dayTabsContainerRef = useRef<HTMLDivElement>(null);
    const mobileDayTabsRef = useRef<HTMLDivElement>(null);
    const draggedItemRef = useRef<{ item: TravelItem, source: 'sidebar' | 'canvas', sourceSlot?: TimeSlot, index?: number } | null>(null);

    // Toast State
    const [toast, setToast] = useState<{ show: boolean, message: string }>({ show: false, message: '' });
    const showToastMessage = useCallback((message: string) => {
        setToast({ show: true, message });
    }, []);

    // Initialization & Persistence
    useEffect(() => {
        const savedLang = localStorage.getItem('app_lang');
        if (savedLang) setLang(savedLang as LangType);
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('app_lang', lang);
            localStorage.setItem('sidebarWidth', sidebarWidth.toString());
        }
    }, [lang, sidebarWidth, isInitialized]);

    // Derived State
    const activeRegion = activePlan?.region || 'all';
    const activeCreator = SAMPLE_CREATORS.find(c => c.id === selectedCreatorId);
    const creatorTemplates = activeCreator ? TEMPLATES.filter(tpl => tpl.authorId === activeCreator.id) : [];
    const [subscribedCreators, setSubscribedCreators] = useState<string[]>([]);
    const [customAssets, setCustomAssets] = useState<TravelItem[]>([]);

    const toggleLang = () => setLang(prev => prev === 'en' ? 'zh' : 'en');

    // Handlers
    const startEditingName = () => {
        setEditingName(activePlan?.name || '');
        setIsEditingName(true);
        setTimeout(() => { if (nameInputRef.current) nameInputRef.current.focus(); }, 50);
    };

    const saveName = () => {
        if (editingName.trim()) {
            updateActivePlan({ name: editingName.trim() });
        }
        setIsEditingName(false);
    };

    const handleNameKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') saveName();
        if (e.key === 'Escape') setIsEditingName(false);
    };

    const openDatePicker = () => setShowDateModal(true);

    const applyTemplate = (template: Template, skipConfirm: boolean = false) => {
        const templateName = (lang === 'en' && template.nameEn) ? template.nameEn : template.name;
        if (!skipConfirm) {
            const confirmMessage = lang === 'zh'
                ? `⚠️ 確定要套用「${templateName}」嗎？\n\n目前的行程將被取代。`
                : `⚠️ Apply "${templateName}"?\n\nCurrent itinerary will be replaced.`;
            if (!window.confirm(confirmMessage)) return;
        }

        const copy = (items: ScheduleItem[]) => (items || []).map(i => ({
            ...i,
            instanceId: Math.random().toString(36).substr(2, 9),
            arrivalTransport: (i.arrivalTransport || 'car') as TransportMode
        }));

        const newSchedule: Record<string, DaySchedule> = {};
        const isMultiDay = !('morning' in template.schedule);

        if (isMultiDay) {
            const fullSched = template.schedule as FullSchedule;
            Object.keys(fullSched).forEach(dayKey => {
                newSchedule[dayKey] = {
                    morning: copy(fullSched[dayKey].morning),
                    afternoon: copy(fullSched[dayKey].afternoon),
                    evening: copy(fullSched[dayKey].evening),
                    night: copy(fullSched[dayKey].night),
                    accommodation: copy(fullSched[dayKey].accommodation)
                };
            });
        } else {
            const daySched = template.schedule as DaySchedule;
            for (let day = 1; day <= template.duration; day++) {
                newSchedule[`Day ${day}`] = {
                    morning: copy(daySched.morning),
                    afternoon: copy(daySched.afternoon),
                    evening: copy(daySched.evening),
                    night: copy(daySched.night),
                    accommodation: copy(daySched.accommodation)
                };
            }
        }

        updateActivePlan({
            name: templateName,
            totalDays: template.duration,
            schedule: newSchedule,
            region: template.region
        });
        setCurrentDay(1);
        setShowMobileLibrary(false);
        showToastMessage(lang === 'zh' ? `✅ 已套用「${templateName}」！` : `✅ "${templateName}" applied!`);
    };

    const handleCreateCustomItem = (data: any) => {
        const currentDayKey = `Day ${currentDay}`;
        const newSchedule = { ...activePlan.schedule };

        const newItem: ScheduleItem = {
            id: `custom-${Date.now()}`,
            title: data.name,
            type: data.type,
            price: parseInt(data.price) || 0,
            image: data.type === 'food' ? '🍜' : '📌',
            instanceId: Math.random().toString(36).substr(2, 9),
            startTime: data.time || '',
            arrivalTransport: 'car',
            notes: data.notes || ''
        };

        let targetSlot: TimeSlot = 'morning';
        if (data.time) {
            const hour = parseInt(data.time.split(':')[0], 10);
            targetSlot = hour >= 6 && hour < 12 ? 'morning' : hour >= 12 && hour < 18 ? 'afternoon' : hour >= 18 && hour < 22 ? 'evening' : 'night';
        }

        newSchedule[currentDayKey][targetSlot].push(newItem);
        updateActivePlan({ schedule: newSchedule });
        setCustomAssets(prev => [...prev, { ...newItem, id: `asset-${Date.now()}`, region: 'all' } as TravelItem]);
        showToastMessage("🎉 " + (t.itemCreated || "Created!"));
        setShowCustomItemModal(false);
    };

    const handleDragStart = (e: React.DragEvent, item: TravelItem, source: 'sidebar' | 'canvas', slot?: TimeSlot, index?: number) => {
        draggedItemRef.current = { item, source, sourceSlot: slot, index };
        e.dataTransfer.effectAllowed = 'copyMove';
    };

    const handleDrop = (e: React.DragEvent, targetSlot: TimeSlot) => {
        e.preventDefault();
        const dragged = draggedItemRef.current;
        if (!dragged) return;

        const currentDayKey = `Day ${currentDay}`;
        const newSchedule = { ...activePlan.schedule };

        if (dragged.source === 'sidebar') {
            const newItem: ScheduleItem = {
                ...dragged.item,
                instanceId: Math.random().toString(36).substr(2, 9),
                startTime: '',
                arrivalTransport: 'car'
            };
            newSchedule[currentDayKey][targetSlot].push(newItem);
        } else if (dragged.source === 'canvas' && dragged.sourceSlot && dragged.index !== undefined) {
            const item = newSchedule[currentDayKey][dragged.sourceSlot].splice(dragged.index, 1)[0];
            newSchedule[currentDayKey][targetSlot].push(item);
        }

        // Auto-sort target slot
        newSchedule[currentDayKey][targetSlot].sort((a, b) => {
            const timeA = a.startTime || 'ZZZZ';
            const timeB = b.startTime || 'ZZZZ';
            return timeA.localeCompare(timeB);
        });

        updateActivePlan({ schedule: newSchedule });
        draggedItemRef.current = null;
    };

    const handleSortSlot = (items: ScheduleItem[]) => {
        return items.sort((a, b) => {
            const timeA = a.startTime || 'ZZZZ';
            const timeB = b.startTime || 'ZZZZ';
            return timeA.localeCompare(timeB);
        });
    };

    const handleRemoveItem = (slot: TimeSlot, index: number) => {
        const currentDayKey = `Day ${currentDay}`;
        const newSchedule = { ...activePlan.schedule };
        newSchedule[currentDayKey][slot].splice(index, 1);
        updateActivePlan({ schedule: newSchedule });
    };

    const handleUpdateItem = (slot: TimeSlot, index: number, updates: Partial<ScheduleItem>) => {
        const currentDayKey = `Day ${currentDay}`;
        const newSchedule = { ...activePlan.schedule };

        // Apply updates first
        const updatedItem = { ...newSchedule[currentDayKey][slot][index], ...updates };
        newSchedule[currentDayKey][slot][index] = updatedItem;

        // Logic for Time-Based Slot Migration
        if (updates.startTime !== undefined) {
            let newSlot: TimeSlot = slot;
            const timeStr = updates.startTime;
            if (timeStr) {
                const hour = parseInt(timeStr.split(':')[0], 10);
                if (!isNaN(hour)) {
                    newSlot = hour >= 6 && hour < 12 ? 'morning'
                        : hour >= 12 && hour < 18 ? 'afternoon'
                            : hour >= 18 && hour < 22 ? 'evening'
                                : 'night';
                }
            }

            // If slot changed, move the item
            if (newSlot !== slot) {
                // Remove from old slot
                newSchedule[currentDayKey][slot].splice(index, 1);
                // Add to new slot
                newSchedule[currentDayKey][newSlot].push(updatedItem);

                // Sort the new slot
                newSchedule[currentDayKey][newSlot].sort((a, b) => {
                    const timeA = a.startTime || 'ZZZZ';
                    const timeB = b.startTime || 'ZZZZ';
                    return timeA.localeCompare(timeB);
                });
            } else {
                // Even if slot didn't change, re-sort current slot (e.g. 09:00 -> 11:00)
                newSchedule[currentDayKey][slot].sort((a, b) => {
                    const timeA = a.startTime || 'ZZZZ';
                    const timeB = b.startTime || 'ZZZZ';
                    return timeA.localeCompare(timeB);
                });
            }
        } else {
            // No time change, but still might need sort/save
            newSchedule[currentDayKey][slot].sort((a, b) => {
                const timeA = a.startTime || 'ZZZZ';
                const timeB = b.startTime || 'ZZZZ';
                return timeA.localeCompare(timeB);
            });
        }

        updateActivePlan({ schedule: newSchedule });
    };

    const handleTapToAdd = (item: TravelItem) => {
        const currentDayKey = `Day ${currentDay}`;
        const newSchedule = { ...activePlan.schedule };
        let targetSlot: TimeSlot = item.type === 'hotel' ? 'accommodation' : 'morning';

        newSchedule[currentDayKey][targetSlot].push({
            ...item,
            instanceId: Math.random().toString(36).substr(2, 9),
            startTime: '',
            arrivalTransport: 'car'
        });

        // Auto-sort target slot
        newSchedule[currentDayKey][targetSlot].sort((a, b) => {
            const timeA = a.startTime || 'ZZZZ';
            const timeB = b.startTime || 'ZZZZ';
            return timeA.localeCompare(timeB);
        });

        updateActivePlan({ schedule: newSchedule });
        showToastMessage("✅ Added!");
    };

    const handleUnlockConfirm = () => {
        const newSchedule = { ...activePlan.schedule };
        Object.values(newSchedule).forEach(day => {
            Object.values(day).forEach(slotItems => {
                slotItems.forEach((item: ScheduleItem) => {
                    if (unlockTarget && item.instanceId === unlockTarget.instanceId) item.isLocked = false;
                    else if (batchUnlockCount > 0 && item.isLocked) item.isLocked = false;
                });
            });
        });
        updateActivePlan({ schedule: newSchedule });
        setUnlockTarget(null);
        setBatchUnlockCount(0);
        showToastMessage("🎉 Unlocked!");
    };

    const handleGateCheck = (action: () => void) => {
        let lockedCount = 0;
        let firstLockedItem: ScheduleItem | null = null;
        Object.values(activePlan.schedule).forEach(day => {
            Object.values(day).forEach(slotItems => {
                slotItems.forEach((item: ScheduleItem) => {
                    if (item.isLocked) {
                        lockedCount++;
                        if (!firstLockedItem) firstLockedItem = item;
                    }
                });
            });
        });

        if (lockedCount > 0 && firstLockedItem) {
            setBatchUnlockCount(lockedCount);
            setUnlockTarget(firstLockedItem);
        } else {
            action();
        }
    }


    const executeMoveItem = (targetDay: number) => {
        if (!ui.moveTarget) return;
        const sourceDayKey = `Day ${currentDay}`;
        const targetDayKey = `Day ${targetDay}`;
        const newSchedule = { ...activePlan.schedule };

        if (!newSchedule[targetDayKey]) newSchedule[targetDayKey] = { morning: [], afternoon: [], evening: [], night: [], accommodation: [] };
        const [item] = newSchedule[sourceDayKey][ui.moveTarget.slot].splice(ui.moveTarget.index, 1);
        newSchedule[targetDayKey][ui.moveTarget.slot].push(item);

        // Auto-sort target slot
        newSchedule[targetDayKey][ui.moveTarget.slot].sort((a, b) => {
            const timeA = a.startTime || 'ZZZZ';
            const timeB = b.startTime || 'ZZZZ';
            return timeA.localeCompare(timeB);
        });

        updateActivePlan({ schedule: newSchedule });
        setShowMoveModal(false);
        showToastMessage(`${t.movedTo || 'Moved to'} Day ${targetDay}`);
    };

    const generateExportText = () => {
        let text = `✈️ ${activePlan.name}\n`;
        text += `💰 Budget: JP¥${calculateTotalBudget().toLocaleString()}\n\n`;
        // ... (truncated for brevity, real implementation would loop through days)
        return text;
    };

    if (showLanding) return <LandingPage onStart={(templateId?: string) => {
        setShowLanding(false);
        if (templateId) {
            const template = TEMPLATES.find(t => t.id === templateId);
            if (template) setTimeout(() => applyTemplate(template, true), 100);
        }
    }} lang={lang} toggleLang={toggleLang} />;

    if (!activePlan) return <div className="h-screen w-screen flex items-center justify-center text-gray-500">Loading...</div>;

    const currentDaySchedule = activePlan.schedule[`Day ${currentDay}`] || { morning: [], afternoon: [], evening: [], night: [], accommodation: [] };

    return (
        <div className="flex flex-col md:flex-row h-[100dvh] bg-white text-slate-800 font-sans overflow-x-hidden">
            {/* Desktop Sidebar */}
            {!isFullscreen && (
                <div
                    className={`hidden lg:flex flex-col border-r border-gray-100 bg-white relative z-20 transition-all duration-300 ${isSidebarOpen ? 'opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}
                    style={{ width: isSidebarOpen ? sidebarWidth : 0 }}
                >
                    <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                        <button onClick={() => setShowLanding(true)} className="text-lg font-bold flex items-center gap-2 text-teal-600 hover:opacity-80 transition-opacity">
                            <MapIcon className="w-5 h-5" /> {t.appTitle}
                        </button>
                        <button onClick={() => setShowPlanManager(true)} className="p-1.5 hover:bg-gray-100 rounded-md text-gray-400">
                            <FolderOpen size={18} />
                        </button>
                    </div>
                    <SidebarContent
                        activeTab={activeTab} setActiveTab={setActiveTab}
                        searchQuery={searchQuery} setSearchQuery={setSearchQuery}
                        activeCategory={activeCategory} setActiveCategory={setActiveCategory}
                        activeRegion={activeRegion} setActiveRegion={(r) => updateActivePlan({ region: r })}
                        setShowCustomItemModal={setShowCustomItemModal}
                        handleDragStart={handleDragStart} handleTapToAdd={handleTapToAdd}
                        applyTemplate={applyTemplate} t={t} lang={lang}
                        customAssets={customAssets} subscribedCreators={subscribedCreators}
                        onCreatorClick={setSelectedCreatorId} onPreviewTemplate={setPreviewTemplate}
                        highlight={ui.sidebarHighlight}
                    />
                    <button onClick={() => setIsSidebarOpen(false)} className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 my-6 h-12 bg-white border border-gray-200 rounded-r-lg shadow-sm flex items-center justify-center text-gray-400 hover:text-teal-600 z-30">
                        <SidebarClose size={12} />
                    </button>
                </div>
            )}

            {/* Main Area */}
            <div className="flex-1 flex flex-col min-w-0 bg-white relative">
                <AppHeader
                    lang={lang} t={t} toggleLang={toggleLang} activePlan={activePlan}
                    isEditingName={isEditingName} editingName={editingName} setEditingName={setEditingName}
                    startEditingName={startEditingName} saveName={saveName} handleNameKeyDown={handleNameKeyDown}
                    nameInputRef={nameInputRef} openDatePicker={openDatePicker}
                    showCitySelector={showCitySelector} setShowCitySelector={setShowCitySelector}
                    activeRegion={activeRegion} setActiveRegion={(r) => updateActivePlan({ region: r })}
                    updateActivePlan={updateActivePlan} setShowLanding={setShowLanding} setShowPlanManager={setShowPlanManager}
                    setShowSubmitModal={setShowSubmitModal} setShowShareModal={setShowShareModal} handleGateCheck={handleGateCheck}
                    isSidebarOpen={isSidebarOpen} budgetLimit={budgetLimit} setBudgetLimit={setBudgetLimit}
                    calculateTotalBudget={calculateTotalBudget} calculateCategoryBreakdown={calculateCategoryBreakdown}
                    toolbar={<AppToolbar
                        viewMode={viewMode} setViewMode={setViewMode}
                        t={t}
                    />}
                />

                <DayTabs
                    activePlan={activePlan} currentDay={currentDay} setCurrentDay={setCurrentDay}
                    handleAddDay={handleAddDay} handleDeleteDay={handleDeleteDay}
                    getShortDate={getShortDate} t={t}
                    dayTabsContainerRef={dayTabsContainerRef} mobileDayTabsRef={mobileDayTabsRef}
                />

                {/* Canvas Area */}
                <div className="flex-1 overflow-y-auto bg-gray-50/30 p-4 lg:p-8 custom-scrollbar">
                    {/* View Switcher Content */}
                    {viewMode === 'map' ? (
                        <div className="h-full pb-20 lg:pb-0">
                            <MapView
                                schedule={activePlan.schedule[`Day ${currentDay}`] || { morning: [], afternoon: [], evening: [], night: [], accommodation: [] }}
                                t={t}
                                onItemClick={ui.setSelectedItem}
                            />
                        </div>
                    ) : viewMode === 'checklist' ? (
                        <div className="h-full pb-20 lg:pb-0">
                            <ScheduleList
                                activePlan={activePlan}
                                t={t}
                                budgetProps={{
                                    spent: calculateTotalBudget(),
                                    limit: budgetLimit,
                                    breakdown: calculateCategoryBreakdown(),
                                    currency: activePlan.targetCurrency,
                                    exchangeRate: activePlan.exchangeRate,
                                    onSetLimit: setBudgetLimit,
                                    onSetSettings: (currency: string, rate: number) => updateActivePlan({ targetCurrency: currency, exchangeRate: rate })
                                }}
                            />
                        </div>
                    ) : (
                        <div className="max-w-xl mx-auto space-y-6">
                            {['morning', 'afternoon', 'evening', 'night'].map((slot: any) => (
                                <DropZone
                                    key={slot} slot={slot} label={getSlotLabel(slot, t)}
                                    items={currentDaySchedule[slot]}
                                    onDrop={(e) => handleDrop(e, slot)}
                                    onRemoveItem={(idx: number) => handleRemoveItem(slot, idx)}
                                    onUpdateItem={(idx: number, upd: Partial<ScheduleItem>) => handleUpdateItem(slot, idx, upd)}
                                    onMoveItem={(idx) => { setShowMoveModal(true); ui.setMoveTarget({ slot, index: idx }); }}
                                    onUnlockItem={(item) => { setUnlockTarget(item); }}
                                    onItemClick={ui.setSelectedItem}
                                    onDragStart={handleDragStart}
                                    onAddItem={() => {
                                        if (window.innerWidth < 1024) {
                                            ui.setShowMobileLibrary(true);
                                        } else {
                                            ui.setSidebarHighlight(true);
                                            setTimeout(() => ui.setSidebarHighlight(false), 2000);
                                        }
                                    }}
                                    t={t}
                                    lang={lang}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100 flex items-center justify-around px-6 pb-2 z-[500]">
                    <button onClick={() => setViewMode('canvas')} className={`flex flex-col items-center transition-colors ${viewMode === 'canvas' ? 'text-teal-600' : 'text-gray-400'}`}>
                        <Calendar size={20} /> <span className="text-[10px] mt-1 font-bold">{t.plan || 'Plan'}</span>
                    </button>
                    <button onClick={() => setViewMode('map')} className={`flex flex-col items-center transition-colors ${viewMode === 'map' ? 'text-teal-600' : 'text-gray-400'}`}>
                        <MapIcon size={20} /> <span className="text-[10px] mt-1 font-bold">{t.map || 'Map'}</span>
                    </button>

                    <button onClick={() => setViewMode('checklist')} className={`flex flex-col items-center transition-colors ${viewMode === 'checklist' ? 'text-teal-600' : 'text-gray-400'}`}>
                        <ListTodo size={20} /> <span className="text-[10px] mt-1 font-bold">{t.preparation || 'Preparation'}</span>
                    </button>
                    <button onClick={() => setShowPlanManager(true)} className="flex flex-col items-center text-gray-400">
                        <FolderOpen size={20} /> <span className="text-[10px] mt-1 font-bold">{t.myPlans || 'Plans'}</span>
                    </button>
                </div>
            </div>

            <AppModals
                {...ui}
                lang={lang} t={t} showToastMessage={showToastMessage}
                plans={plans} activePlanId={activePlanId} setActivePlanId={setActivePlanId}
                handleCreatePlan={handleCreatePlan} handleDeletePlan={handleDeletePlan}
                handleCreateCustomItem={handleCreateCustomItem}
                activePlan={activePlan} currentDay={currentDay} generateExportText={generateExportText}
                setPlans={setPlans} setActivePlanIdDirect={setActivePlanId}
                setCustomAssets={setCustomAssets} setBudgetLimit={setBudgetLimit}
                setSubscribedCreators={setSubscribedCreators}
                customAssets={customAssets} budgetLimit={budgetLimit}
                subscribedCreators={subscribedCreators}
                onOpenMobilePreview={() => setShowMobilePreview(true)}
                confirmUnlock={handleUnlockConfirm}
                onDateConfirm={(start, end) => {
                    const diff = Math.ceil(Math.abs(new Date(end).getTime() - new Date(start).getTime()) / (1000 * 60 * 60 * 24)) + 1;
                    updateActivePlan({ startDate: start, endDate: end, totalDays: diff });
                    setShowDateModal(false);
                }}
                activeCreator={activeCreator} creatorTemplates={creatorTemplates}
                isSubscribed={subscribedCreators.includes(selectedCreatorId || '')}
                toggleSubscription={(id) => setSubscribedCreators(prev => prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id])}
                applyTemplate={applyTemplate}
                executeMoveItem={executeMoveItem}
                tempStartDate={activePlan.startDate}
                tempEndDate={activePlan.endDate}
                selectedItem={ui.selectedItem}
                setSelectedItem={ui.setSelectedItem}

                // Pass View State & Handlers for Mobile Library
                activeTab={activeTab} setActiveTab={setActiveTab}
                searchQuery={searchQuery} setSearchQuery={setSearchQuery}
                activeCategory={activeCategory} setActiveCategory={setActiveCategory}
                activeRegion={activeRegion} setActiveRegion={(r) => updateActivePlan({ region: r })}
                handleDragStart={handleDragStart} handleTapToAdd={handleTapToAdd}
                showMobileLibrary={showMobileLibrary} setShowMobileLibrary={setShowMobileLibrary}
            />

            {toast.show && <Toast message={toast.message} onClose={() => setToast({ show: false, message: '' })} />}
        </div >
    );
}

export default App;
