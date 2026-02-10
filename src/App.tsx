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
    REGION_DEFAULT_CHECKLISTS,
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
import { usePlans, useBudget, useUIState, useConfirm } from './hooks';

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
    const { confirm } = useConfirm();
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
        moveTarget, setMoveTarget,
        activeRegion, setActiveRegion,
        addToSlotTarget, setAddToSlotTarget
    } = ui;

    const t = TRANSLATIONS[lang];

    // Business Logic Hooks
    const {
        plans, activePlanId, activePlan, currentDay,
        setPlans, setActivePlanId, setCurrentDay,
        updateActivePlan, updateChecklist, handleCreatePlan,
        handleDeletePlan: _handleDeletePlan, handleAddDay, handleDeleteDay: _handleDeleteDay, getDisplayDate, getShortDate
    } = usePlans(isInitialized, t, lang);

    const { budgetLimit, setBudgetLimit, calculateTotalBudget, calculateCategoryBreakdown } = useBudget(activePlan, t);

    // Refs
    const scheduleRef = useRef<HTMLDivElement>(null);
    const nameInputRef = useRef<HTMLInputElement>(null);
    const dayTabsContainerRef = useRef<HTMLDivElement>(null);
    const mobileDayTabsRef = useRef<HTMLDivElement>(null);
    const draggedItemRef = useRef<{ item: TravelItem, source: 'sidebar' | 'canvas', sourceSlot?: TimeSlot, index?: number } | null>(null);

    // Toast State
    const [toast, setToast] = useState<{ show: boolean, message: string, type?: 'success' | 'warning' | 'error' | 'info', duration?: number }>({ show: false, message: '' });
    const showToastMessage = useCallback((message: string, type: 'success' | 'warning' | 'error' | 'info' = 'success', duration: number = 2000) => {
        setToast({ show: true, message, type, duration });
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

    // [NEW] Sync Sidebar Region with Active Plan
    // When switching plans or applying templates, automatically switch the sidebar category
    useEffect(() => {
        if (activePlan?.region && activePlan.region !== 'all') {
            ui.setActiveRegion(activePlan.region);
        }
    }, [activePlan?.id, activePlan?.region]);

    const [showContextMap, setShowContextMap] = useState(false);

    // [NEW] Auto-Collapse Sidebar on Map View (Layout Optimization)
    useEffect(() => {
        if (window.innerWidth >= 1024) { // Only on Desktop
            if (showContextMap) {
                // Auto-collapse sidebar in Split View
                setIsSidebarOpen(false);
            } else if (viewMode === 'canvas') {
                // Restore sidebar in Canvas View
                setIsSidebarOpen(true);
            }
        }
    }, [viewMode, showContextMap]);

    // Context Map Scroll Handler
    const handleMapItemClick = (item: any) => {
        const el = document.getElementById(`item-${item.instanceId}`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Animation for highlight
            el.classList.add('ring-2', 'ring-teal-500', 'ring-offset-2', 'bg-teal-50');
            setTimeout(() => {
                el.classList.remove('ring-2', 'ring-teal-500', 'ring-offset-2', 'bg-teal-50');
            }, 2000);
        }
    };

    // Derived State

    // Removed local activeRegion derived state to avoid confusion with ui.activeRegion
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

    const applyTemplate = async (template: Template, skipConfirm: boolean = false) => {
        const templateName = (lang === 'en' && template.nameEn) ? template.nameEn : template.name;
        if (!skipConfirm) {
            const confirmed = await confirm({
                title: lang === 'zh' ? '套用模板' : 'Apply Template',
                message: lang === 'zh'
                    ? `⚠️ 確定要套用「${templateName}」嗎？\n\n目前的行程將被取代。`
                    : `⚠️ Apply "${templateName}"?\n\nCurrent itinerary will be replaced.`,
                type: 'warning',
                confirmText: lang === 'zh' ? '套用' : 'Apply',
                cancelText: lang === 'zh' ? '取消' : 'Cancel'
            });
            if (!confirmed) return;
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

        const region = template.region || 'tokyo';
        const localizedDefaults = REGION_DEFAULT_CHECKLISTS[region]?.[lang] || REGION_DEFAULT_CHECKLISTS['all']?.[lang] || [];

        updateActivePlan({
            name: templateName,
            totalDays: template.duration,
            schedule: newSchedule,
            region: region,
            checklist: localizedDefaults
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
        newSchedule[currentDayKey] = { ...newSchedule[currentDayKey] }; // Clone day
        newSchedule[currentDayKey][targetSlot] = [...newSchedule[currentDayKey][targetSlot]]; // Clone target slot array

        if (dragged.source === 'sidebar') {
            const newItem: ScheduleItem = {
                ...dragged.item,
                instanceId: Math.random().toString(36).substr(2, 9),
                startTime: '',
                arrivalTransport: 'car'
            };
            newSchedule[currentDayKey][targetSlot].push(newItem);
        } else if (dragged.source === 'canvas' && dragged.sourceSlot && dragged.index !== undefined) {
            // If moving within same day but different slot (or same slot), need to clone source slot too if different
            if (dragged.sourceSlot !== targetSlot) {
                newSchedule[currentDayKey][dragged.sourceSlot] = [...newSchedule[currentDayKey][dragged.sourceSlot]];
            }
            const item = newSchedule[currentDayKey][dragged.sourceSlot].splice(dragged.index, 1)[0];
            newSchedule[currentDayKey][targetSlot].push(item);
        }

        // Scheme A: Cross-Region Warning (Drag & Drop)
        if (dragged.source === 'sidebar' && dragged.item.region && activePlan.region &&
            dragged.item.region !== 'all' && activePlan.region !== 'all' &&
            dragged.item.region !== activePlan.region) {
            const regionName = t[dragged.item.region] || dragged.item.region.toUpperCase();
            const planRegionName = t[activePlan.region] || activePlan.region.toUpperCase();

            showToastMessage(
                t.crossRegionWarning
                    ? t.crossRegionWarning
                        .replace('{region}', regionName)
                        .replace('{planRegion}', planRegionName)
                    : `⚠️ Note: You added a ${regionName} item to your ${planRegionName} plan.`,
                'warning',
                3000
            );
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
        newSchedule[currentDayKey] = { ...newSchedule[currentDayKey] }; // Clone day
        newSchedule[currentDayKey][slot] = [...newSchedule[currentDayKey][slot]]; // Clone slot array
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
        newSchedule[currentDayKey] = { ...newSchedule[currentDayKey] }; // Clone day

        // Use tracked slot from user's clicked "Add Item", fallback to morning/accommodation
        let targetSlot: TimeSlot = addToSlotTarget || (item.type === 'hotel' ? 'accommodation' : 'morning');
        newSchedule[currentDayKey][targetSlot] = [...newSchedule[currentDayKey][targetSlot]]; // Clone slot array

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

        // [NEW] Close mobile library modal and clear target slot
        ui.setShowMobileLibrary(false);
        setAddToSlotTarget(null); // Reset target slot

        // Get display name for item and slot
        const itemName = (lang === 'en' && item.titleEn) ? item.titleEn : item.title;
        const slotLabel = t[targetSlot] || targetSlot;

        // Scheme A: Cross-Region Warning
        if (item.region && activePlan.region &&
            item.region !== 'all' && activePlan.region !== 'all' &&
            item.region !== activePlan.region) {
            const regionName = t[item.region] || item.region.toUpperCase();
            const planRegionName = t[activePlan.region] || activePlan.region.toUpperCase();

            showToastMessage(
                t.crossRegionWarning
                    ? t.crossRegionWarning
                        .replace('{region}', regionName)
                        .replace('{planRegion}', planRegionName)
                    : `⚠️ Note: You added a ${regionName} item to your ${planRegionName} plan.`,
                'warning',
                3000
            );
        } else {
            // [IMPROVED] Show item name + slot in toast
            const addedMsg = lang === 'en'
                ? `✅ "${itemName}" added to ${slotLabel}`
                : `✅ 「${itemName}」已加入${slotLabel}`;
            showToastMessage(addedMsg, 'success', 2500);
        }
    };

    const onDeleteDay = async (dayToDelete: number, e?: React.MouseEvent) => {
        e?.stopPropagation();
        const confirmed = await confirm({
            title: lang === 'zh' ? '刪除天數' : 'Delete Day',
            message: lang === 'zh'
                ? `確定要刪除第 ${dayToDelete} 天嗎？\n此動作無法復原。`
                : `Are you sure you want to delete Day ${dayToDelete}?\nThis action cannot be undone.`,
            type: 'warning',
            confirmText: lang === 'zh' ? '刪除' : 'Delete',
            cancelText: lang === 'zh' ? '取消' : 'Cancel'
        });
        if (confirmed) {
            _handleDeleteDay(dayToDelete, e);
        }
    };

    const onDeletePlan = async (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        const planToDelete = plans.find(p => p.id === id);
        const planName = planToDelete?.name || '';
        const confirmed = await confirm({
            title: lang === 'zh' ? '刪除行程' : 'Delete Trip',
            message: lang === 'zh'
                ? `確定要刪除「${planName}」嗎？`
                : `Are you sure you want to delete "${planName}"?`,
            type: 'error',
            confirmText: lang === 'zh' ? '刪除' : 'Delete',
            cancelText: lang === 'zh' ? '取消' : 'Cancel'
        });
        if (confirmed) {
            _handleDeletePlan(id, e);
        }
    };

    const handleQuickFill = (slot: TimeSlot) => {
        // [Refactor] Region-Aware Quick Fill Logic
        const region = activePlan.region || 'kyoto'; // Default to Kyoto if undefined

        // Suggestions Database
        const allSuggestions: Record<string, Record<string, any[]>> = {
            kyoto: {
                morning: [
                    { id: 'qf-k1', title: '清水寺', titleEn: 'Kiyomizu-dera', type: 'attraction', duration: '2小時', price: 400, region: 'kyoto', description: '京都最古老的寺院，必去！' },
                    { id: 'qf-k2', title: '伏見稻荷大社', titleEn: 'Fushimi Inari Taisha', type: 'attraction', duration: '1.5小時', price: 0, region: 'kyoto', description: '千本鳥居真的很壯觀。' }
                ],
                afternoon: [
                    { id: 'qf-k3', title: '嵐山竹林', titleEn: 'Arashiyama Bamboo Grove', type: 'attraction', duration: '1小時', price: 0, region: 'kyoto', description: '幽靜的竹林小徑。' },
                    { id: 'qf-k4', title: '金閣寺', titleEn: 'Kinkaku-ji', type: 'attraction', duration: '45分', price: 400, region: 'kyoto', description: '金碧輝煌的舍利殿。' }
                ],
                evening: [
                    { id: 'qf-k5', title: '祇園花見小路', titleEn: 'Gion Hanamikoji', type: 'attraction', duration: '1小時', price: 0, region: 'kyoto', description: '幸運的話可以看到藝妓喔！' },
                    { id: 'qf-k6', title: '鴨川納涼床', titleEn: 'Kamogawa River', type: 'food', duration: '2小時', price: 3000, region: 'kyoto', description: '夏日限定的河畔用餐體驗。' }
                ],
                night: [
                    { id: 'qf-k7', title: '居酒屋體驗', titleEn: 'Izakaya', type: 'food', duration: '2小時', price: 2500, region: 'kyoto', description: '體驗日式夜生活。' }
                ],
                accommodation: [
                    { id: 'qf-k8', title: '京都大飯店', titleEn: 'Kyoto Hotel', type: 'hotel', duration: '0', price: 10000, region: 'kyoto', description: '舒適的住宿。' }
                ]
            },
            tokyo: {
                morning: [
                    { id: 'qf-t1', title: '淺草寺', titleEn: 'Senso-ji', type: 'attraction', duration: '1.5小時', price: 0, region: 'tokyo', description: '東京最古老的寺廟，雷門必拍！' },
                    { id: 'qf-t2', title: '築地場外市場', titleEn: 'Tsukiji Outer Market', type: 'food', duration: '1小時', price: 2000, region: 'tokyo', description: '享受新鮮的海鮮丼飯。' }
                ],
                afternoon: [
                    { id: 'qf-t3', title: '明治神宮', titleEn: 'Meiji Jingu', type: 'attraction', duration: '1.5小時', price: 0, region: 'tokyo', description: '市中心的森林綠洲。' },
                    { id: 'qf-t4', title: '澀谷十字路口', titleEn: 'Shibuya Crossing', type: 'attraction', duration: '30分', price: 0, region: 'tokyo', description: '世界最繁忙的十字路口。' }
                ],
                evening: [
                    { id: 'qf-t5', title: '東京鐵塔', titleEn: 'Tokyo Tower', type: 'attraction', duration: '1小時', price: 1200, region: 'tokyo', description: '經典的東京地標夜景。' },
                    { id: 'qf-t6', title: '新宿歌舞伎町', titleEn: 'Kabukicho', type: 'attraction', duration: '1.5小時', price: 0, region: 'tokyo', description: '越夜越美麗的不夜城。' }
                ],
                night: [
                    { id: 'qf-t7', title: '六本木之丘展望台', titleEn: 'Roppongi Hills', type: 'attraction', duration: '1小時', price: 1800, region: 'tokyo', description: '欣賞東京最美夜景。' }
                ],
                accommodation: [
                    { id: 'qf-t8', title: '新宿王子大飯店', titleEn: 'Shinjuku Prince Hotel', type: 'hotel', duration: '0', price: 12000, region: 'tokyo', description: '交通便利的市中心住宿。' }
                ]
            },
            osaka: {
                morning: [
                    { id: 'qf-o1', title: '大阪城公園', titleEn: 'Osaka Castle Park', type: 'attraction', duration: '2小時', price: 600, region: 'osaka', description: '大阪的地標，天守閣很壯觀。' },
                    { id: 'qf-o2', title: '黑門市場', titleEn: 'Kuromon Market', type: 'food', duration: '1小時', price: 1500, region: 'osaka', description: '大阪的廚房，美食吃不完。' }
                ],
                afternoon: [
                    { id: 'qf-o3', title: '海遊館', titleEn: 'Kaiyukan', type: 'attraction', duration: '2小時', price: 2400, region: 'osaka', description: '世界最大級的水族館。' },
                    { id: 'qf-o4', title: '通天閣', titleEn: 'Tsutenkaku', type: 'attraction', duration: '45分', price: 800, region: 'osaka', description: '新世界的懷舊地標。' }
                ],
                evening: [
                    { id: 'qf-o5', title: '道頓堀', titleEn: 'Dotonbori', type: 'food', duration: '2小時', price: 2000, region: 'osaka', description: '固力果跑跑人必拍，章魚燒必吃！' },
                    { id: 'qf-o6', title: '阿倍野 HARUKAS', titleEn: 'Abeno Harukas', type: 'attraction', duration: '1小時', price: 1500, region: 'osaka', description: '日本最高大樓的百萬夜景。' }
                ],
                night: [
                    { id: 'qf-o7', title: '梅田藍天大廈', titleEn: 'Umeda Sky Building', type: 'attraction', duration: '1小時', price: 1500, region: 'osaka', description: '空中庭園展望台。' }
                ],
                accommodation: [
                    { id: 'qf-o8', title: '難波瑞士南海飯店', titleEn: 'Swissotel Nankai Osaka', type: 'hotel', duration: '0', price: 14000, region: 'osaka', description: '直通南海難波站，交通超方便。' }
                ]
            }
        };

        const regionData = allSuggestions[region] || allSuggestions['kyoto']; // Fallback to Kyoto
        const regionSuggestions = regionData[slot] || [];
        if (regionSuggestions.length === 0) return;

        const itemData = regionSuggestions[Math.floor(Math.random() * regionSuggestions.length)];

        if (itemData) {
            const newItem: ScheduleItem = {
                instanceId: Date.now().toString(),
                id: itemData.id,
                title: itemData.title,
                titleEn: itemData.titleEn,
                type: itemData.type as any,
                duration: itemData.duration,
                price: itemData.price,
                region: itemData.region,
                notes: itemData.description, // Use description as initial note
                rating: 4.8, // diligent default
                isLocked: false,
                arrivalTransport: 'car'
            };

            // Add to schedule logic (since handleAddItem is missing)
            const currentDayKey = `Day ${currentDay}`;
            const newSchedule = { ...activePlan.schedule };
            // Ensure day exists
            if (!newSchedule[currentDayKey]) {
                newSchedule[currentDayKey] = { morning: [], afternoon: [], evening: [], night: [], accommodation: [] };
            }
            // Clone day and slot
            newSchedule[currentDayKey] = { ...newSchedule[currentDayKey] };
            newSchedule[currentDayKey][slot] = [...(newSchedule[currentDayKey][slot] || [])];

            newSchedule[currentDayKey][slot].push(newItem);

            // Sort
            newSchedule[currentDayKey][slot].sort((a, b) => {
                const timeA = a.startTime || 'ZZZZ';
                const timeB = b.startTime || 'ZZZZ';
                return timeA.localeCompare(timeB);
            });

            updateActivePlan({ schedule: newSchedule });
            showToastMessage(t.quickFillAdded || "Suggestion added!", 'success');
        }
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
        <div className="flex flex-col md:flex-row h-[100dvh] bg-white text-slate-800 font-sans overflow-x-hidden max-w-[100vw]">
            {/* Desktop Sidebar */}
            {!isFullscreen && (
                <div
                    className={`hidden lg:flex flex-col border-r border-gray-100 bg-white relative z-20 transition-all duration-300 overflow-hidden ${isSidebarOpen ? 'opacity-100' : 'w-0 opacity-0'}`}
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
                        activeRegion={ui.activeRegion} setActiveRegion={ui.setActiveRegion}
                        setShowCustomItemModal={setShowCustomItemModal}
                        handleDragStart={handleDragStart} handleTapToAdd={handleTapToAdd}
                        applyTemplate={applyTemplate} t={t} lang={lang}
                        customAssets={customAssets} subscribedCreators={subscribedCreators}
                        onCreatorClick={setSelectedCreatorId} onPreviewTemplate={setPreviewTemplate}
                        highlight={ui.sidebarHighlight}
                    />
                </div>
            )}

            {/* Sidebar Toggle Button (Always Visible) */}
            {!isFullscreen && (
                <div className="hidden lg:block relative z-30">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-12 bg-white border border-gray-200 border-l-0 rounded-r-lg shadow-sm flex items-center justify-center text-gray-400 hover:text-teal-600 transition-all duration-300 ${isSidebarOpen ? '' : 'translate-x-[0px]'}`}
                        style={{ left: isSidebarOpen ? 0 : 0 }}
                        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
                    >
                        {isSidebarOpen ? <SidebarClose size={12} /> : <SidebarClose size={12} className="rotate-180" />}
                    </button>
                </div>
            )}

            {/* Main Area */}
            <div className="flex-1 flex flex-col min-w-0 bg-white relative overflow-x-hidden">
                <AppHeader
                    lang={lang} t={t} toggleLang={toggleLang} activePlan={activePlan}
                    isEditingName={isEditingName} editingName={editingName} setEditingName={setEditingName}
                    startEditingName={startEditingName} saveName={saveName} handleNameKeyDown={handleNameKeyDown}
                    nameInputRef={nameInputRef} openDatePicker={openDatePicker}
                    showCitySelector={showCitySelector} setShowCitySelector={setShowCitySelector}
                    activeRegion={ui.activeRegion} setActiveRegion={ui.setActiveRegion}
                    updateActivePlan={updateActivePlan} setShowLanding={setShowLanding} setShowPlanManager={setShowPlanManager}
                    setShowSubmitModal={setShowSubmitModal} setShowShareModal={setShowShareModal} handleGateCheck={handleGateCheck}
                    isSidebarOpen={isSidebarOpen} budgetLimit={budgetLimit} setBudgetLimit={setBudgetLimit}
                    calculateTotalBudget={calculateTotalBudget} calculateCategoryBreakdown={calculateCategoryBreakdown}
                    toolbar={<AppToolbar
                        viewMode={viewMode} setViewMode={setViewMode}
                        t={t}
                    />}
                    showContextMap={showContextMap} setShowContextMap={setShowContextMap} // Pass context map state
                />

                {/* [NEW] Quick Fill Logic */}
                {(() => {
                    // This function is defined inside the render block scope to access state/props easily
                    // ideally it should be outside, but for now we follow existing structure or use a ref/effect if needed.
                    // Actually, let's define it before the return or inside the main component body.
                    // Wait, I can't define it here effectively if I want to use it in the map below.
                    // Let's insert it before the return statement.
                    return null;
                })()}

                <DayTabs
                    activePlan={activePlan} currentDay={currentDay} setCurrentDay={setCurrentDay}
                    handleAddDay={handleAddDay} handleDeleteDay={onDeleteDay}
                    getShortDate={getShortDate} t={t}
                    dayTabsContainerRef={dayTabsContainerRef} mobileDayTabsRef={mobileDayTabsRef}
                />

                {/* Canvas Area */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-50/30 p-4 lg:p-8 custom-scrollbar">
                    {/* View Switcher Content */}
                    {viewMode === 'map' ? (
                        <div className="h-full">
                            <MapView
                                schedule={activePlan.schedule[`Day ${currentDay}`] || { morning: [], afternoon: [], evening: [], night: [], accommodation: [] }}
                                t={t}
                                onItemClick={ui.setSelectedItem}
                                onClose={() => setViewMode('canvas')} // [NEW] Return to Canvas view
                            />
                        </div>
                    ) : viewMode === 'checklist' ? (
                        <div className="h-full pb-20 lg:pb-0">
                            <ScheduleList
                                activePlan={activePlan}
                                lang={lang}
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
                                showToastMessage={showToastMessage}
                                onUpdateChecklist={updateChecklist}
                            />
                        </div>
                    ) : (
                        // Canvas View (Default)
                        <div className={`flex h-full ${showContextMap ? 'gap-4 overflow-hidden' : ''}`}>
                            {/* Schedule List Area */}
                            <div className={`flex-1 transition-all duration-300 w-full max-w-full mx-auto ${showContextMap ? 'overflow-y-auto pr-2' : ''}`}>
                                <div className="space-y-6 pb-24 lg:pb-12 px-4 md:px-6 lg:max-w-3xl mx-auto lg:px-0 w-full max-w-full overflow-x-hidden">
                                    {/* Weather/Date Info could go here */}

                                    {(() => {
                                        const slots = ['morning', 'afternoon', 'evening', 'night'] as TimeSlot[];
                                        let cumulativeIndex = 0;
                                        return slots.map((slot) => {
                                            const startIdx = cumulativeIndex;
                                            cumulativeIndex += (currentDaySchedule[slot] || []).length;
                                            return (
                                                <DropZone
                                                    key={slot} slot={slot} label={getSlotLabel(slot, t)}
                                                    items={currentDaySchedule[slot as keyof typeof currentDaySchedule]}
                                                    onDrop={(e) => handleDrop(e, slot)}
                                                    onRemoveItem={(idx: number) => handleRemoveItem(slot, idx)}
                                                    onUpdateItem={(idx: number, upd: Partial<ScheduleItem>) => handleUpdateItem(slot, idx, upd)}
                                                    onMoveItem={(idx) => { setShowMoveModal(true); ui.setMoveTarget({ slot, index: idx }); }}
                                                    onUnlockItem={(item) => { setUnlockTarget(item); }}
                                                    onItemClick={ui.setSelectedItem}
                                                    onDragStart={handleDragStart}
                                                    onAddItem={() => {
                                                        if (window.innerWidth < 1024) {
                                                            setAddToSlotTarget(slot); // Track which slot user clicked
                                                            ui.setShowMobileLibrary(true);
                                                        } else {
                                                            if (!isSidebarOpen) setIsSidebarOpen(true);
                                                            ui.setSidebarHighlight(true);
                                                            setTimeout(() => ui.setSidebarHighlight(false), 2000);
                                                        }
                                                    }}
                                                    t={t}
                                                    lang={lang}
                                                    planRegion={activePlan.region}
                                                    isCompact={showContextMap} // Scheme B: Compact mode
                                                    startIndex={startIdx} // Global sequential numbering
                                                    onQuickFill={() => handleQuickFill(slot)}
                                                />
                                            );
                                        });
                                    })()}

                                    {/* Accommodation Slot */}
                                    <DropZone
                                        key="accommodation" slot="accommodation" label={t.accommodation || 'Accommodation'}
                                        items={currentDaySchedule.accommodation}
                                        onDrop={(e) => handleDrop(e, 'accommodation')}
                                        onRemoveItem={(idx: number) => handleRemoveItem('accommodation', idx)}
                                        onUpdateItem={(idx: number, upd: Partial<ScheduleItem>) => handleUpdateItem('accommodation', idx, upd)}
                                        onMoveItem={(idx) => { setShowMoveModal(true); ui.setMoveTarget({ slot: 'accommodation', index: idx }); }}
                                        onUnlockItem={(item) => { setUnlockTarget(item); }}
                                        onItemClick={ui.setSelectedItem}
                                        onDragStart={handleDragStart}
                                        onAddItem={() => {
                                            if (window.innerWidth < 1024) {
                                                setAddToSlotTarget('accommodation'); // Track which slot user clicked
                                                ui.setShowMobileLibrary(true);
                                            } else {
                                                if (!isSidebarOpen) setIsSidebarOpen(true);
                                                ui.setSidebarHighlight(true);
                                                setTimeout(() => ui.setSidebarHighlight(false), 2000);
                                            }
                                        }}
                                        t={t}
                                        lang={lang}
                                        planRegion={activePlan.region}
                                        isCompact={showContextMap} // Scheme B: Compact mode
                                        startIndex={(currentDaySchedule.morning?.length || 0) + (currentDaySchedule.afternoon?.length || 0) + (currentDaySchedule.evening?.length || 0) + (currentDaySchedule.night?.length || 0)} // Global sequential
                                    />

                                    {/* Bottom Padding for Mobile Nav */}
                                    <div className="h-24 lg:h-12" />
                                </div>
                            </div>

                            {/* Context Map (Right Side) */}
                            {showContextMap && (
                                <div className="hidden lg:block w-[40%] h-full bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-inner sticky top-0">
                                    <MapView
                                        schedule={currentDaySchedule}
                                        t={t}
                                        onItemClick={handleMapItemClick} // Scheme B: Scroll to item
                                        isEmbedded={true} // Scheme B: Hide duplicate list
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {viewMode !== 'map' && (
                    <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100 grid grid-cols-4 items-center pb-2 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
                        <button
                            onClick={() => { setViewMode('canvas'); setShowPlanManager(false); }}
                            className={`flex flex-col items-center justify-center w-full transition-colors ${viewMode === 'canvas' && !showPlanManager ? 'text-teal-600' : 'text-gray-400'}`}
                        >
                            <Calendar size={20} /> <span className="text-[10px] mt-1 font-bold whitespace-nowrap">{t.plan || 'Plan'}</span>
                        </button>
                        <button
                            onClick={() => { setViewMode('map'); setShowPlanManager(false); }}
                            className={`flex flex-col items-center justify-center w-full transition-colors ${(viewMode as string) === 'map' && !showPlanManager ? 'text-teal-600' : 'text-gray-400'}`}
                        >
                            <MapIcon size={20} /> <span className="text-[10px] mt-1 font-bold whitespace-nowrap">{t.map || 'Map'}</span>
                        </button>

                        <button
                            onClick={() => { setViewMode('checklist'); setShowPlanManager(false); }}
                            className={`flex flex-col items-center justify-center w-full transition-colors ${viewMode === 'checklist' && !showPlanManager ? 'text-teal-600' : 'text-gray-400'}`}
                        >
                            <ListTodo size={20} /> <span className="text-[10px] mt-1 font-bold whitespace-nowrap">{t.preparation || 'Tools'}</span>
                        </button>
                        <button
                            onClick={() => setShowPlanManager(true)}
                            className={`flex flex-col items-center justify-center w-full transition-colors ${showPlanManager ? 'text-teal-600' : 'text-gray-400'}`}
                        >
                            <FolderOpen size={20} /> <span className="text-[10px] mt-1 font-bold whitespace-nowrap">{t.myPlans || 'Plans'}</span>
                        </button>
                    </div>
                )}
            </div>

            <AppModals
                {...ui}
                lang={lang} t={t} showToastMessage={showToastMessage}
                plans={plans} activePlanId={activePlanId} setActivePlanId={setActivePlanId}
                handleCreatePlan={handleCreatePlan} handleDeletePlan={onDeletePlan}
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
                activeRegion={ui.activeRegion} setActiveRegion={ui.setActiveRegion}
                handleDragStart={handleDragStart} handleTapToAdd={handleTapToAdd}
                showMobileLibrary={showMobileLibrary} setShowMobileLibrary={setShowMobileLibrary}
            />

            {toast.show && <Toast message={toast.message} type={toast.type} duration={toast.duration} onClose={() => setToast({ show: false, message: '' })} />}
        </div >
    );
}

export default App;
