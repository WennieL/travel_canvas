import React, { useState, useEffect, useRef } from 'react';
import {
    Map as MapIcon,
    Calendar,
    Download,
    Home,
    FolderOpen,
    Check,
    Plus,
    X,
    RefreshCw,
    Wallet,
    Globe,
    Share2,
    Clock,
    Link as LinkIcon,
    Copy,
    SidebarClose,
    MapPin,
    Tag,
    ListTodo,
    Grid,
    MessageSquare,
    Send,
    LogOut,
    Menu,
    FileText,
    Image as ImageIcon,
    Wand2,
    HardDrive,
    Upload,
    Maximize,
    Minimize,
    ZoomIn,
    ZoomOut,
    MoveRight
} from 'lucide-react';
import * as htmlToImage from 'html-to-image';

import {
    TRANSLATIONS,
    DEFAULT_CHECKLIST,
    TOKYO_DEMO_PLAN,
    SAMPLE_CREATORS,
    TEMPLATES,
    SAMPLE_ASSETS
} from './data/index';
import {
    LangType,
    ItemType,
    TransportMode,
    TimeSlot,
    ScheduleItem,
    ChecklistItem,
    DaySchedule,
    FullSchedule,
    Plan,
    ViewMode,
    TravelItem,
    Region,
    Creator,
    Template
} from './types';
import {
    createEmptySchedule,
    getSlotLabel,
    getItemIcon,
    getFallbackImage,
    parseDuration,
    addMinutes
} from './utils';

import LandingPage from './components/LandingPage';
import SidebarContent from './components/SidebarContent';
import DropZone from './components/DropZone';
import MapView from './components/MapView';
import ChecklistView from './components/ChecklistView';
import WeatherWidget from './components/WeatherWidget';
import { Toast } from './components/Toast';
import { BudgetWidget } from './components/BudgetWidget';
import { CreatorProfile } from './components/CreatorProfile';
import { MobilePreview } from './components/MobilePreview';
import ItemDetailModal from './components/ItemDetailModal';

import {
    ExportModal,
    ShareHubModal,
    DateModal,
    PlanManagerModal,
    CustomItemModal,
    SubmitModal
} from './components/Modals';
import { usePlans, useBudget } from './hooks';

export default function App() {
    const [lang, setLang] = useState<LangType>('zh');
    // Custom Assets State (Persisted)
    const [customAssets, setCustomAssets] = useState<TravelItem[]>(() => {
        try {
            const saved = localStorage.getItem('customAssets');
            return saved ? JSON.parse(saved) : [];
        } catch { return []; }
    });
    // Toast State
    const [toast, setToast] = useState<{ message: string; show: boolean }>({ message: '', show: false });

    useEffect(() => {
        localStorage.setItem('customAssets', JSON.stringify(customAssets));
    }, [customAssets]);

    // Creator System State
    const [selectedCreatorId, setSelectedCreatorId] = useState<string | null>(null);
    const [subscribedCreators, setSubscribedCreators] = useState<string[]>(() => {
        try {
            const saved = localStorage.getItem('subscribedCreators');
            return saved ? JSON.parse(saved) : [];
        } catch { return []; }
    });

    useEffect(() => {
        localStorage.setItem('subscribedCreators', JSON.stringify(subscribedCreators));
    }, [subscribedCreators]);

    const handleCreatorClick = (creatorId: string) => {
        setSelectedCreatorId(creatorId);
    };

    const toggleSubscription = (creatorId: string) => {
        setSubscribedCreators(prev => {
            if (prev.includes(creatorId)) {
                showToastMessage(t.unsubscribed || "Unsubscribed");
                return prev.filter(id => id !== creatorId);
            } else {
                showToastMessage(t.subscribed || "Subscribed");
                return [...prev, creatorId];
            }
        });
    };

    const activeCreator = SAMPLE_CREATORS.find(c => c.id === selectedCreatorId);
    const creatorTemplates = activeCreator ? TEMPLATES.filter(tpl => tpl.authorId === activeCreator.id) : [];

    const showToastMessage = (msg: string) => {
        setToast({ message: msg, show: true });
    };

    const t = TRANSLATIONS[lang];
    const toggleLang = () => setLang(prev => prev === 'zh' ? 'en' : 'zh');

    const [showLanding, setShowLanding] = useState(true);
    const [showSubmitModal, setShowSubmitModal] = useState(false);
    const [submitDescription, setSubmitDescription] = useState('');
    const [submitTags, setSubmitTags] = useState<string[]>([]);
    const [activeTab, setActiveTab] = useState<'assets' | 'templates'>('assets');
    const [activeCategory, setActiveCategory] = useState<'all' | ItemType>('all');
    const [activeRegion, setActiveRegion] = useState<Region>('all');
    const [isInitialized, setIsInitialized] = useState(false);
    const draggedItemRef = useRef<{ item: TravelItem, source: 'sidebar' | 'canvas', sourceSlot?: TimeSlot, index?: number } | null>(null);

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDraggingGlobal, setIsDraggingGlobal] = useState(false);

    // UI/UX Enhancement States
    const [sidebarWidth, setSidebarWidth] = useState(() => {
        try {
            const saved = localStorage.getItem('sidebarWidth');
            return saved ? parseInt(saved) : 320;
        } catch { return 320; }
    });
    const [isResizingSidebar, setIsResizingSidebar] = useState(false);
    const [canvasZoom, setCanvasZoom] = useState(() => {
        try {
            const saved = localStorage.getItem('canvasZoom');
            return saved ? parseInt(saved) : 100;
        } catch { return 100; }
    });
    const [isFullscreen, setIsFullscreen] = useState(false);
    const sidebarResizeRef = useRef<HTMLDivElement>(null);

    // Persist UI preferences
    useEffect(() => {
        localStorage.setItem('sidebarWidth', sidebarWidth.toString());
    }, [sidebarWidth]);
    useEffect(() => {
        localStorage.setItem('canvasZoom', canvasZoom.toString());
    }, [canvasZoom]);

    // Sidebar resize handlers
    const handleSidebarResizeStart = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsResizingSidebar(true);
        const startX = e.clientX;
        const startWidth = sidebarWidth;

        const handleMouseMove = (moveEvent: MouseEvent) => {
            const newWidth = Math.min(480, Math.max(280, startWidth + (moveEvent.clientX - startX)));
            setSidebarWidth(newWidth);
        };

        const handleMouseUp = () => {
            setIsResizingSidebar(false);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    // Canvas zoom handlers
    const handleZoomIn = () => setCanvasZoom(prev => Math.min(150, prev + 10));
    const handleZoomOut = () => setCanvasZoom(prev => Math.max(50, prev - 10));
    const handleZoomReset = () => setCanvasZoom(100);

    // Ctrl+Wheel zoom
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (e.ctrlKey) {
                e.preventDefault();
                if (e.deltaY < 0) handleZoomIn();
                else handleZoomOut();
            }
        };
        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    const [viewMode, setViewMode] = useState<ViewMode>('canvas');
    // Use custom hook for plans management
    const {
        plans, activePlanId, activePlan, currentDay,
        setPlans, setActivePlanId, setCurrentDay,
        updateActivePlan, updateChecklist, handleCreatePlan: hookCreatePlan,
        handleDeletePlan: hookDeletePlan, handleAddDay: hookAddDay,
        handleDeleteDay: hookDeleteDay, getDisplayDate, getShortDate
    } = usePlans(isInitialized, t, lang);

    // DATA INTEGRITY REPAIR: Ensure items are in correct slots based on time
    useEffect(() => {
        if (!activePlan || !activePlan.schedule) return;
        const currentDayKey = `Day ${currentDay}`;
        const daySchedule = activePlan.schedule[currentDayKey];
        if (!daySchedule) return;

        let hasChange = false;
        const newDaySchedule = JSON.parse(JSON.stringify(daySchedule)); // Deep clone for safety
        const slots: TimeSlot[] = ['morning', 'afternoon', 'evening', 'night'];

        slots.forEach(slot => {
            const items = newDaySchedule[slot];
            for (let i = items.length - 1; i >= 0; i--) {
                const item = items[i];
                if (!item.startTime) continue;

                const hour = parseInt(item.startTime.split(':')[0], 10);
                let correctSlot: TimeSlot = slot;
                if (hour >= 6 && hour < 12) correctSlot = 'morning';
                else if (hour >= 12 && hour < 18) correctSlot = 'afternoon';
                else if (hour >= 18 && hour < 22) correctSlot = 'evening';
                else correctSlot = 'night';

                if (correctSlot !== slot) {
                    hasChange = true;
                    // Move to correct slot
                    items.splice(i, 1);
                    newDaySchedule[correctSlot].push(item);
                    newDaySchedule[correctSlot].sort((a: ScheduleItem, b: ScheduleItem) => (a.startTime || '').localeCompare(b.startTime || ''));
                }
            }
        });

        if (hasChange) {
            console.log("Auto-Repair: Correcting slot alignment");
            const newSchedule = { ...activePlan.schedule, [currentDayKey]: newDaySchedule };
            updateActivePlan({ schedule: newSchedule });
        }
    }, [activePlan?.id, currentDay]); // Run on plan/day change


    // Use custom hook for budget calculations
    const { budgetLimit, setBudgetLimit, calculateTotalBudget, calculateCategoryBreakdown } = useBudget(activePlan, t);

    // Inline editing states (for trip name)
    const [isEditingName, setIsEditingName] = useState(false);
    const nameInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const savedLang = localStorage.getItem('app_lang');
        if (savedLang) setLang(savedLang as LangType);
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('app_lang', lang);
        }
    }, [lang, isInitialized]);

    // Inline name editing handlers
    const startEditingName = () => {
        setEditingName(activePlan.name);
        setIsEditingName(true);
        setTimeout(() => nameInputRef.current?.focus(), 50);
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

    // Date picker handlers
    const openDatePicker = () => {
        setTempStartDate(activePlan.startDate);
        setTempEndDate(activePlan.endDate);
        setShowDateModal(true);
    };

    const [tempStartDate, setTempStartDate] = useState<string>(activePlan.startDate);
    const [tempEndDate, setTempEndDate] = useState<string>(activePlan.endDate);
    const [showDateModal, setShowDateModal] = useState(false);
    const [showPlanManager, setShowPlanManager] = useState(false);
    const [editingPlanId, setEditingPlanId] = useState<string | null>(null);
    const [editingName, setEditingName] = useState('');

    const [showCustomItemModal, setShowCustomItemModal] = useState(false);

    const [showMobileLibrary, setShowMobileLibrary] = useState(false);
    const [mobileLibraryExpanded, setMobileLibraryExpanded] = useState(true);
    const [showShareModal, setShowShareModal] = useState(false);
    const [showMobilePreview, setShowMobilePreview] = useState(false);
    const [detailItem, setDetailItem] = useState<ScheduleItem | null>(null);

    useEffect(() => { setCurrentDay(1); setTempStartDate(activePlan.startDate); setTempEndDate(activePlan.endDate); }, [activePlanId]);

    const [searchQuery, setSearchQuery] = useState('');
    const [showExportModal, setShowExportModal] = useState(false);
    const [exportTab, setExportTab] = useState<'text' | 'image' | 'share' | 'backup'>('text');
    const scheduleRef = useRef<HTMLDivElement>(null);
    const dayTabsContainerRef = useRef<HTMLDivElement>(null);
    const mobileDayTabsRef = useRef<HTMLDivElement>(null);

    // Auto-scroll logic for both desktop and mobile day tabs
    useEffect(() => {
        if (dayTabsContainerRef.current) {
            dayTabsContainerRef.current.querySelector(`[data-day="${currentDay}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
        if (mobileDayTabsRef.current) {
            // Simple scroll logic for mobile items since they are direct children
            const items = mobileDayTabsRef.current.children;
            if (items[currentDay - 1]) {
                items[currentDay - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }, [currentDay]);

    const openDateModal = () => { setTempStartDate(activePlan.startDate); setTempEndDate(activePlan.endDate); setShowDateModal(true); };
    const handleCreatePlan = hookCreatePlan;

    const handleDeletePlan = hookDeletePlan;
    const handleAddDay = hookAddDay;
    const handleDeleteDay = hookDeleteDay;

    const handleCreateCustomItem = (data: { name: string; type: ItemType; price: string; time: string; notes: string; origin?: string; destination?: string }) => {
        // Generate title from origin/destination for transport if name is empty
        let finalTitle = data.name;
        if (data.type === 'transport' && !data.name && data.origin && data.destination) {
            finalTitle = `${data.origin} → ${data.destination}`;
        }
        if (!finalTitle.trim()) { alert('請輸入名稱'); return; }

        const currentDayKey = `Day ${currentDay}`;
        const newSchedule = { ...activePlan.schedule };
        if (!newSchedule[currentDayKey]) newSchedule[currentDayKey] = { morning: [], afternoon: [], evening: [], night: [], accommodation: [] };

        // Create new item
        const newItem: ScheduleItem = {
            id: `custom-${Date.now()}`, title: finalTitle, type: data.type,
            price: parseInt(data.price) || 0,
            image: data.type === 'food' ? '🍜' : data.type === 'hotel' ? '🏨' : data.type === 'transport' ? '✈️' : data.type === 'attraction' ? '🎯' : '📌',
            instanceId: Math.random().toString(36).substr(2, 9),
            startTime: data.time || '', arrivalTransport: 'car', notes: data.notes || '',
            origin: data.origin, destination: data.destination
        };

        // Determine target slot
        let targetSlot: TimeSlot = 'morning';
        if (data.time) {
            const hour = parseInt(data.time.split(':')[0], 10);
            targetSlot = hour >= 6 && hour < 12 ? 'morning' : hour >= 12 && hour < 18 ? 'afternoon' : hour >= 18 && hour < 22 ? 'evening' : 'night';
        } else if (data.type === 'hotel') targetSlot = 'accommodation';
        else if (data.type === 'food') targetSlot = 'afternoon';

        newSchedule[currentDayKey][targetSlot].push(newItem);
        if (data.time) newSchedule[currentDayKey][targetSlot].sort((a, b) => (a.startTime || '').localeCompare(b.startTime || ''));
        updateActivePlan({ schedule: newSchedule });

        // Save to Custom Library
        setCustomAssets(prev => [...prev, { ...newItem, id: `asset-${Date.now()}`, region: 'all' } as TravelItem]);
        showToastMessage(t.itemCreated || "🎉 已建立！");
        setShowCustomItemModal(false);
        if (showMobileLibrary) setShowMobileLibrary(false);
    };

    const [showMoveModal, setShowMoveModal] = useState(false);
    const [moveTarget, setMoveTarget] = useState<{ slot: TimeSlot, index: number } | null>(null);


    const [addToSlotTarget, setAddToSlotTarget] = useState<{ day: number, slot: TimeSlot } | null>(null);

    // Handle time change for schedule items - WITH AUTO SCHEDULE
    // Handle time change for schedule items - SMART SORTING (No Ripple)
    // Handle time change for schedule items - SMART SORTING (No Ripple)
    const handleTimeChange = (slot: TimeSlot, index: number, val: string) => {
        // CORRECTION: Must use Deep Clone to ensure React detects changes in nested arrays!
        const newSchedule = { ...activePlan.schedule };
        const currentDayKey = `Day ${currentDay}`;

        if (!newSchedule[currentDayKey]) return;

        // Clone the day object and the specific arrays we will modify
        newSchedule[currentDayKey] = { ...newSchedule[currentDayKey] };
        const daySchedule = newSchedule[currentDayKey];

        // Ensure all arrays are initialized
        (['morning', 'afternoon', 'evening', 'night', 'accommodation'] as TimeSlot[]).forEach(s => {
            if (!daySchedule[s]) daySchedule[s] = [];
        });

        // Current item reference
        const sourceArray = [...daySchedule[slot]];
        const item = { ...sourceArray[index] };

        if (item) {
            item.startTime = val;

            // 1. Determine new slot based on time
            let newSlot: TimeSlot = slot;
            if (val) {
                const hour = parseInt(val.split(':')[0], 10);
                if (hour >= 6 && hour < 12) newSlot = 'morning';
                else if (hour >= 12 && hour < 18) newSlot = 'afternoon';
                else if (hour >= 18 && hour < 22) newSlot = 'evening';
                else newSlot = 'night';
            }

            // 2. Logic to move or update
            if (newSlot !== slot && slot !== 'accommodation' && newSlot !== 'accommodation') {
                // Move item
                sourceArray.splice(index, 1);
                daySchedule[slot] = sourceArray;

                daySchedule[newSlot] = [...daySchedule[newSlot], item];
                daySchedule[newSlot].sort((a, b) => (a.startTime || '').localeCompare(b.startTime || ''));
            } else {
                // Update in place
                sourceArray[index] = item;
                sourceArray.sort((a, b) => (a.startTime || '').localeCompare(b.startTime || ''));
                daySchedule[slot] = sourceArray;
            }

            updateActivePlan({ schedule: newSchedule });
        }
    };

    const handleNoteChange = (slot: TimeSlot, index: number, val: string) => { const newSchedule = { ...activePlan.schedule }; if (newSchedule[`Day ${currentDay}`]?.[slot][index]) { newSchedule[`Day ${currentDay}`][slot][index].notes = val; updateActivePlan({ schedule: newSchedule }); } };
    const handleTransportChange = (slot: TimeSlot, index: number, mode: TransportMode) => { const newSchedule = { ...activePlan.schedule }; if (newSchedule[`Day ${currentDay}`]?.[slot][index]) { newSchedule[`Day ${currentDay}`][slot][index].arrivalTransport = mode; updateActivePlan({ schedule: newSchedule }); } };

    // Move Item Logic
    const handleSubmitPlan = (planData: any) => {
        // Here we would send to API
        console.log("Publishing plan:", planData);
        setShowSubmitModal(false);
        setToast({ show: true, message: "🎉 行程發布成功！連結已生成" });

        // Instant Gratification: Open Share Hub immediately
        setTimeout(() => setShowShareModal(true), 500);
    };
    const handleMoveItem = (slot: TimeSlot, index: number) => {
        setMoveTarget({ slot, index });
        setShowMoveModal(true);
    };

    const executeMoveItem = (targetDay: number) => {
        if (!moveTarget) return;
        const sourceDayKey = `Day ${currentDay}`;
        const targetDayKey = `Day ${targetDay}`;
        const newSchedule = { ...activePlan.schedule };

        // Ensure target day exists
        if (!newSchedule[targetDayKey]) newSchedule[targetDayKey] = { morning: [], afternoon: [], evening: [], night: [], accommodation: [] };

        // Remove from source
        const [item] = newSchedule[sourceDayKey][moveTarget.slot].splice(moveTarget.index, 1);

        // Add to target (default to same slot or morning if accommodation mismatch, but simplify to same slot mapping)
        // If moving accommodation, keep as accommodation. If moving time slot to time slot, keep same name if possible?
        // Actually, let's keep it simple: push to same slot name.
        const targetSlot = moveTarget.slot;

        // Push and sort
        newSchedule[targetDayKey][targetSlot].push(item);
        if (item.startTime) {
            newSchedule[targetDayKey][targetSlot].sort((a, b) => (a.startTime || '').localeCompare(b.startTime || ''));
        }

        updateActivePlan({ schedule: newSchedule });
        setShowMoveModal(false);
        setMoveTarget(null);
        showToastMessage(`${t.movedTo || 'Moved to'} ${t.day} ${targetDay}`);
    };
    const handleDateConfirm = () => { const diff = Math.ceil(Math.abs(new Date(tempEndDate).getTime() - new Date(tempStartDate).getTime()) / (1000 * 60 * 60 * 24)) + 1; const newSchedule = { ...activePlan.schedule }; for (let i = 1; i <= diff; i++) if (!newSchedule[`Day ${i}`]) newSchedule[`Day ${i}`] = { morning: [], afternoon: [], evening: [], night: [], accommodation: [] }; updateActivePlan({ startDate: tempStartDate, endDate: tempEndDate, totalDays: diff, schedule: newSchedule }); if (currentDay > diff) setCurrentDay(1); setShowDateModal(false); };
    const handleDragStart = (e: React.DragEvent, item: TravelItem, source: 'sidebar' | 'canvas', slot?: TimeSlot, index?: number) => { draggedItemRef.current = { item, source, sourceSlot: slot, index }; e.dataTransfer.effectAllowed = 'copyMove'; e.dataTransfer.setData('text/plain', item.id); setIsDraggingGlobal(true); };
    const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); e.dataTransfer.dropEffect = draggedItemRef.current?.source === 'sidebar' ? 'copy' : 'move'; };
    const handleDrop = (e: React.DragEvent, targetSlot: TimeSlot) => { e.preventDefault(); setIsDraggingGlobal(false); const draggedItem = draggedItemRef.current; if (!draggedItem) return; const currentDayKey = `Day ${currentDay}`; const newSchedule = { ...activePlan.schedule }; if (!newSchedule[currentDayKey]) newSchedule[currentDayKey] = { morning: [], afternoon: [], evening: [], night: [], accommodation: [] }; const newItem = { ...draggedItem.item, instanceId: Math.random().toString(36).substr(2, 9), startTime: '', arrivalTransport: 'car' as TransportMode }; if (draggedItem.source === 'sidebar') { newSchedule[currentDayKey][targetSlot].push(newItem); } else if (draggedItem.source === 'canvas' && draggedItem.sourceSlot !== undefined && draggedItem.index !== undefined) { const item = newSchedule[currentDayKey][draggedItem.sourceSlot][draggedItem.index]; newSchedule[currentDayKey][draggedItem.sourceSlot].splice(draggedItem.index, 1); newSchedule[currentDayKey][targetSlot].push(item); } updateActivePlan({ schedule: newSchedule }); draggedItemRef.current = null; };
    const handleDelete = (slot: TimeSlot, index: number) => { const newSchedule = { ...activePlan.schedule }; newSchedule[`Day ${currentDay}`][slot].splice(index, 1); updateActivePlan({ schedule: newSchedule }); };

    // Quick Fill Logic (Static Data)
    const handleQuickFill = (slot: TimeSlot) => {
        const templates: Record<TimeSlot, ScheduleItem[]> = {
            morning: [
                { id: 'tpl_m_1', instanceId: 't1', title: 'Good Morning Coffee', type: 'food', duration: '1hr', price: 800, arrivalTransport: 'walk', notes: 'Start the day!' },
                { id: 'tpl_m_2', instanceId: 't2', title: 'City Park Walk', type: 'attraction', duration: '1.5hr', price: 0, arrivalTransport: 'walk', notes: 'Fresh air' }
            ],
            afternoon: [
                { id: 'tpl_a_1', instanceId: 't3', title: 'Famous Museum', type: 'attraction', duration: '2hr', price: 2000, arrivalTransport: 'public', notes: 'Must see' },
                { id: 'tpl_a_2', instanceId: 't4', title: 'Local Lunch', type: 'food', duration: '1hr', price: 1500, arrivalTransport: 'walk', notes: 'Yummy' }
            ],
            evening: [
                { id: 'tpl_e_1', instanceId: 't5', title: 'Shopping District', type: 'attraction', duration: '2hr', price: 5000, arrivalTransport: 'public', notes: 'Souvenirs' },
                { id: 'tpl_e_2', instanceId: 't6', title: 'Sunset View', type: 'attraction', duration: '1hr', price: 0, arrivalTransport: 'walk', notes: 'Great photos' }
            ],
            night: [
                { id: 'tpl_n_1', instanceId: 't7', title: 'Dinner & Drinks', type: 'food', duration: '2hr', price: 4000, arrivalTransport: 'car', notes: 'Relax' },
            ],
            accommodation: []
        };

        const itemsToAdd = templates[slot] || [];
        if (itemsToAdd.length === 0) return;

        const newSchedule = { ...activePlan.schedule };
        const dayKey = `Day ${currentDay}`;
        if (!newSchedule[dayKey]) newSchedule[dayKey] = { morning: [], afternoon: [], evening: [], night: [], accommodation: [] };

        itemsToAdd.forEach(tpl => {
            newSchedule[dayKey][slot].push({
                ...tpl,
                instanceId: Math.random().toString(36).substr(2, 9),
                startTime: '' // Auto Schedule will pick this up if implemented fully, or user sets it
            });
        });

        // Trigger auto-schedule if enabled by simulating a time change on the first added item? 
        // Or just let user set time. For now just add items.
        // If we want Auto Schedule to kick in, we might need to set an initial time for the first item?
        // Let's keep it simple as requested: "Add items".

        updateActivePlan({ schedule: newSchedule });
        showToastMessage(t.quickFillAdded || "Suggestions added!");
    };

    const [sidebarHighlight, setSidebarHighlight] = useState(false);

    const handleAddItemClick = (slot: TimeSlot) => {
        setAddToSlotTarget({ day: currentDay, slot });
        if (window.innerWidth < 768) {
            setShowMobileLibrary(true);
        } else {
            if (isSidebarOpen) {
                // If already open, flash to draw attention
                setSidebarHighlight(true);
                setTimeout(() => setSidebarHighlight(false), 600);
            } else {
                setIsSidebarOpen(true);
            }
        }
    };

    const handleTapToAdd = (item: TravelItem) => {
        const newSchedule = { ...activePlan.schedule };

        let targetDay = currentDay;
        let targetSlot: TimeSlot = 'morning';

        // 1. If user explicitly clicked "+ Add Item" on a specific slot, use that
        if (addToSlotTarget) {
            targetDay = addToSlotTarget.day;
            targetSlot = addToSlotTarget.slot;
        } else {
            // 2. Smart default logic if no specific target
            if (item.type === 'hotel') targetSlot = 'accommodation';
            else if (item.type === 'food') targetSlot = 'afternoon';
        }

        const dayKey = `Day ${targetDay}`;
        if (!newSchedule[dayKey]) newSchedule[dayKey] = { morning: [], afternoon: [], evening: [], night: [], accommodation: [] };

        newSchedule[dayKey][targetSlot].push({
            ...item,
            instanceId: Math.random().toString(36).substr(2, 9),
            startTime: '',
            arrivalTransport: 'car'
        });

        updateActivePlan({ schedule: newSchedule });

        // UX Feedback
        setAddToSlotTarget(null); // Reset target
        setShowMobileLibrary(false); // Close mobile library
    };
    const applyTemplate = (tpl: DaySchedule) => { if (confirm(t.confirm + "?")) { const newSchedule = { ...activePlan.schedule }; const copy = (items: ScheduleItem[]) => items.map(i => ({ ...i, instanceId: Math.random().toString(36).substr(2, 9), arrivalTransport: 'car' as TransportMode })); newSchedule[`Day ${currentDay}`] = { morning: copy(tpl.morning), afternoon: copy(tpl.afternoon), evening: copy(tpl.evening), night: copy(tpl.night), accommodation: copy(tpl.accommodation) }; updateActivePlan({ schedule: newSchedule }); setShowMobileLibrary(false); } };
    const generateExportText = () => { let text = `✈️ ${activePlan.name} (${activePlan.startDate} ~ ${activePlan.endDate})\n`; text += `💰 ${t.budget}: JP¥${calculateTotalBudget().toLocaleString()}\n\n`; for (let i = 1; i <= activePlan.totalDays; i++) { const dayKey = `Day ${i}`; const dayData = activePlan.schedule[dayKey]; const currentDateStr = getDisplayDate(i); text += `📅 ${t.day} ${i} - ${currentDateStr}\n`; if (!dayData) { text += `  (No schedule)\n\n`; continue; } const hasActivities = [...dayData.morning, ...dayData.afternoon, ...dayData.evening, ...dayData.night].length > 0; const hasAccommodation = dayData.accommodation && dayData.accommodation.length > 0; if (!hasActivities && !hasAccommodation) { text += `  (Free Time)\n`; } else { (['morning', 'afternoon', 'evening', 'night'] as TimeSlot[]).forEach(slot => { if (dayData[slot] && dayData[slot].length > 0) { text += `  ${getSlotLabel(slot, t).split(' ')[0]}:\n`; dayData[slot].forEach(item => { const timeStr = item.startTime ? `[${item.startTime}] ` : ''; const priceStr = item.price ? ` (¥${item.price})` : ''; const noteStr = item.notes ? `\n      ${t.addNote}: ${item.notes}` : ''; text += `    - ${timeStr}${item.image || getFallbackImage(item.type)} ${item.title}${priceStr}${noteStr}\n`; }); } }); if (hasAccommodation) { text += `  🏨 ${t.accommodation}:\n`; dayData.accommodation.forEach(item => { const timeStr = item.startTime ? `[${t.checkIn}: ${item.startTime}] ` : ''; const priceStr = item.price ? ` (¥${item.price})` : ''; const noteStr = item.notes ? `\n      ${t.addNote}: ${item.notes}` : ''; text += `    - ${timeStr}${item.image || getFallbackImage(item.type)} ${item.title}${priceStr}${noteStr}\n`; }); } } text += `\n`; } return text; };

    if (showLanding) return <LandingPage onStart={() => setShowLanding(false)} lang={lang} toggleLang={toggleLang} />;

    if (!activePlan) {
        return <div className="h-screen w-screen flex items-center justify-center text-gray-500">Loading plan...</div>;
    }

    return (
        <div className="flex flex-col md:flex-row h-[100dvh] bg-white text-slate-800 font-sans overflow-x-hidden">
            {!isFullscreen && <div
                className={`hidden lg:flex flex-col border-r border-gray-100 bg-white relative z-20 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-80 opacity-100' : 'w-0 opacity-0 overflow-hidden'} ${sidebarHighlight ? 'animate-shake bg-teal-50 ring-4 ring-teal-400 ring-inset z-30' : ''}`}
            >
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                    <button onClick={() => setShowLanding(true)} className="text-lg font-bold flex items-center gap-2 text-teal-600 whitespace-nowrap hover:opacity-80 transition-opacity" title={t.backToHome}><MapIcon className="w-5 h-5" /> {t.appTitle}</button>
                    <button onClick={() => setShowPlanManager(true)} className="p-1.5 hover:bg-gray-100 rounded-md text-gray-400" title={t.myPlans}><FolderOpen size={18} /></button>
                </div>
                <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} searchQuery={searchQuery} setSearchQuery={setSearchQuery} activeCategory={activeCategory} setActiveCategory={setActiveCategory} activeRegion={activeRegion} setActiveRegion={setActiveRegion} setShowCustomItemModal={setShowCustomItemModal} handleDragStart={handleDragStart} handleTapToAdd={handleTapToAdd} applyTemplate={applyTemplate} t={t} lang={lang} customAssets={customAssets} subscribedCreators={subscribedCreators} onCreatorClick={handleCreatorClick} />
                {/* Collapse Button - Centered on right edge (Canva style) */}
                <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-12 bg-white border border-gray-200 rounded-r-lg shadow-sm flex items-center justify-center text-gray-400 hover:text-teal-600 hover:border-teal-300 transition-all z-30"
                    title="收起側邊欄"
                >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
            </div>}
            {/* Expand Button - When sidebar is collapsed */}
            {!isFullscreen && !isSidebarOpen && (
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="hidden lg:flex fixed left-0 top-1/2 transform -translate-y-1/2 w-6 h-12 bg-white border border-gray-200 rounded-r-lg shadow-sm items-center justify-center text-gray-400 hover:text-teal-600 hover:border-teal-300 transition-all z-30"
                    title="展開側邊欄"
                >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            )}
            <div className="flex-1 flex flex-col min-w-0 bg-white relative">
                <div className="md:hidden h-14 bg-white/90 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-4 sticky top-0 z-30">
                    <h1 className="font-bold text-teal-700 flex items-center gap-2 truncate"><MapIcon className="w-4 h-4" /> {activePlan.name}</h1>
                    <div className="flex gap-1"><button onClick={() => setShowLanding(true)} className="p-2 text-gray-500"><Home size={18} /></button><button onClick={() => setShowPlanManager(true)} className="p-2 text-gray-500"><FolderOpen size={18} /></button><button onClick={() => setShowExportModal(true)} className="p-2 text-gray-500"><Download size={18} /></button></div>
                </div>

                {/* Mobile Day Selector - Sticky Horizontal Scroll */}
                <div className="md:hidden sticky top-14 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-2">
                    <div ref={mobileDayTabsRef} className="flex px-4 gap-2 overflow-x-auto scrollbar-hide items-center">
                        {Array.from({ length: activePlan.totalDays }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentDay(i + 1)}
                                className={`flex-shrink-0 pl-4 pr-2 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${currentDay === i + 1
                                    ? 'bg-teal-600 text-white shadow-sm'
                                    : 'bg-gray-50 text-gray-500 border border-gray-100'
                                    }`}
                            >
                                <span>{t.day} {i + 1}</span>
                                {activePlan.totalDays > 1 && (
                                    <div
                                        onClick={(e) => handleDeleteDay(i + 1, e)}
                                        className={`p-1 rounded-full ${currentDay === i + 1 ? 'bg-teal-500/50 hover:bg-teal-500 text-teal-50' : 'bg-gray-200/50 hover:bg-gray-200 text-gray-400'}`}
                                    >
                                        <X size={10} />
                                    </div>
                                )}
                            </button>
                        ))}
                        <button onClick={handleAddDay} className="flex-shrink-0 w-8 h-8 rounded-full border border-dashed border-gray-300 text-gray-400 flex items-center justify-center">
                            <Plus size={14} />
                        </button>
                    </div>
                </div>
                {!isFullscreen && <div className="hidden md:flex h-14 bg-white border-b border-gray-100 items-center justify-between px-6 shadow-[0_2px_10px_-5px_rgba(0,0,0,0.05)] z-10">
                    {/* Trip Name Display - Editable */}
                    <div className={`flex flex-col justify-center flex-shrink-0 ${!isSidebarOpen ? 'lg:ml-10' : ''}`}>
                        {isEditingName ? (
                            <input
                                ref={nameInputRef}
                                type="text"
                                value={editingName}
                                onChange={(e) => setEditingName(e.target.value)}
                                onBlur={saveName}
                                onKeyDown={handleNameKeyDown}
                                className="font-bold text-lg text-gray-800 max-w-[280px] leading-tight bg-gray-50 border border-teal-400 rounded px-2 py-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                        ) : (
                            <h1
                                onClick={startEditingName}
                                className="font-bold text-lg text-gray-800 truncate max-w-[280px] leading-tight cursor-pointer hover:text-teal-600 hover:underline underline-offset-2 decoration-dotted transition-colors group"
                                title="點擊編輯名稱"
                            >
                                {activePlan.name}
                                <span className="ml-1 text-gray-300 group-hover:text-teal-400 text-sm">✏️</span>
                            </h1>
                        )}
                        <span
                            onClick={openDatePicker}
                            className="text-[10px] text-gray-400 font-medium tracking-wide cursor-pointer hover:text-teal-600 hover:underline underline-offset-2 decoration-dotted transition-colors"
                            title="點擊修改日期"
                        >
                            📅 {activePlan.startDate} ~ {activePlan.endDate}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* Compact Budget Widget */}
                        {/* Compact Budget Widget */}
                        <BudgetWidget
                            spent={calculateTotalBudget()}
                            limit={budgetLimit}
                            breakdown={calculateCategoryBreakdown()}
                            onSetLimit={setBudgetLimit}
                            currency={activePlan.targetCurrency}
                            exchangeRate={activePlan.exchangeRate}
                            onSetSettings={(currency, rate) => updateActivePlan({ targetCurrency: currency, exchangeRate: rate })}
                            t={t}
                            compact={true}
                        />

                        <div className="h-6 w-[1px] bg-gray-200 mx-1"></div>

                        {/* View Switcher */}
                        <div className="flex bg-gray-100/80 p-0.5 rounded-lg gap-0.5">
                            {['canvas', 'map', 'checklist'].map((mode) => (
                                <button key={mode} onClick={() => setViewMode(mode as ViewMode)} className={`p-1.5 rounded-md transition-all ${viewMode === mode ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-200/50'}`} title={mode === 'canvas' ? t.schedule : mode === 'map' ? t.map : t.checklist}> {mode === 'canvas' ? <Calendar size={18} /> : mode === 'map' ? <MapIcon size={18} /> : <ListTodo size={18} />} </button>
                            ))}
                        </div>

                        <div className="h-6 w-[1px] bg-gray-200 mx-1"></div>



                        {/* Global Actions */}
                        <button onClick={toggleLang} className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-teal-600 hover:bg-gray-100 rounded-full transition-colors font-bold text-xs"><Globe size={18} /></button>
                        <button
                            onClick={() => setShowSubmitModal(true)}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full text-xs font-bold hover:shadow-md hover:scale-105 transition-all"
                            title="將您的行程分享給社群"
                        >
                            <Upload size={14} />
                            <span className="hidden lg:inline">提交審核</span>
                        </button>
                        <button onClick={() => setShowShareModal(true)} className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-teal-600 hover:bg-gray-100 rounded-full transition-colors" title={t.shareHub || '分享'}><Share2 size={18} /></button>

                    </div>
                </div>}

                {/* Day Tabs Bar - Dedicated Layer */}
                {
                    !isFullscreen && <div className="hidden md:flex h-12 bg-white/80 backdrop-blur-sm border-b border-gray-100 items-center px-6 gap-3">
                        <div ref={dayTabsContainerRef} className="flex-1 flex items-center gap-2 overflow-x-auto scrollbar-hide">
                            {Array.from({ length: activePlan.totalDays }).map((_, i) => (
                                <button key={i} onClick={() => setCurrentDay(i + 1)} className={`flex-shrink-0 flex items-center gap-2 px-4 py-1.5 rounded-full border transition-all min-w-[80px] justify-center group ${currentDay === i + 1 ? 'bg-teal-600 border-teal-600 text-white shadow-sm' : 'bg-white border-gray-200 text-gray-500 hover:border-teal-300 hover:text-teal-600'}`}>
                                    <span className="font-bold text-sm">{t.day} {i + 1}</span><span className={`text-[10px] opacity-80 ${currentDay === i + 1 ? 'text-teal-100' : 'text-gray-400'}`}>({getShortDate(i + 1)})</span>
                                    {activePlan.totalDays > 1 && (
                                        <div
                                            onClick={(e) => handleDeleteDay(i + 1, e)}
                                            className={`ml-1 p-0.5 rounded-full transition-all ${currentDay === i + 1 ? 'hover:bg-white/20' : 'opacity-0 group-hover:opacity-100 hover:bg-red-500 hover:text-white'}`}
                                            title={t.deleteDay || "Delete Day"}
                                        >
                                            <X size={10} />
                                        </div>
                                    )}
                                </button>
                            ))}
                            <button onClick={handleAddDay} className="w-8 h-8 rounded-full border border-dashed border-gray-300 text-gray-400 hover:border-teal-500 hover:text-teal-600 flex items-center justify-center transition-all"><Plus size={16} /></button>
                        </div>
                    </div>
                }

                <div
                    className="flex-1 overflow-y-auto p-4 md:p-8 mb-[60px] md:mb-0 overscroll-contain relative"
                    style={{
                        touchAction: 'pan-y',
                        WebkitOverflowScrolling: 'touch',
                        backgroundColor: '#f5f7fa',
                        backgroundImage: 'radial-gradient(circle, #d0d5dd 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}
                >
                    {viewMode === 'canvas' && (
                        <div
                            className="max-w-3xl mx-auto space-y-2 pb-24 md:pb-20 schedule-content origin-top bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100"
                            style={{ transform: `scale(${canvasZoom / 100})`, transformOrigin: 'top center' }}
                        >
                            <div className="flex justify-between items-center mb-6 px-2">
                                <div className="flex items-center gap-3">
                                    <span className="text-lg text-gray-600 font-medium">{getDisplayDate(currentDay)}</span>
                                    <WeatherWidget />
                                </div>
                                <button onClick={openDateModal} className="p-2 hover:bg-gray-100 rounded-full text-gray-400"><Calendar size={18} /></button>
                            </div>
                            {(['morning', 'afternoon', 'evening', 'night'] as TimeSlot[]).map((slot, index, arr) => {
                                const items = activePlan.schedule[`Day ${currentDay}`]?.[slot] || [];
                                let prevItem: ScheduleItem | undefined;
                                if (index > 0) { const prevItems = activePlan.schedule[`Day ${currentDay}`]?.[arr[index - 1]] || []; if (prevItems.length > 0) prevItem = prevItems[prevItems.length - 1]; }
                                return (<DropZone key={slot} slot={slot} items={items} title={`${getSlotLabel(slot, t)} (${slot === 'morning' ? '06:00-12:00' : slot === 'afternoon' ? '12:00-18:00' : slot === 'evening' ? '18:00-22:00' : '22:00-06:00'})`} icon={<Clock size={14} />} previousItem={prevItem} isDraggingGlobal={isDraggingGlobal} onDragOver={handleDragOver} onDrop={handleDrop} onDragStart={handleDragStart} onDelete={handleDelete} onTimeChange={handleTimeChange} onNoteChange={handleNoteChange} onTransportChange={handleTransportChange} onItemClick={setDetailItem} t={t} onAddItem={handleAddItemClick} onMoveItem={handleMoveItem} onQuickFill={handleQuickFill} lang={lang} sampleAssets={SAMPLE_ASSETS} />);
                            })}
                            <div className="mt-8 border-t border-dashed border-gray-200 pt-4"><DropZone slot="accommodation" items={activePlan.schedule[`Day ${currentDay}`]?.accommodation || []} title={getSlotLabel('accommodation', t)} icon={<Home size={14} />} isAccommodation={true} isDraggingGlobal={isDraggingGlobal} onDragOver={handleDragOver} onDrop={handleDrop} onDragStart={handleDragStart} onDelete={handleDelete} onTimeChange={handleTimeChange} onNoteChange={handleNoteChange} onTransportChange={handleTransportChange} onItemClick={setDetailItem} t={t} onAddItem={handleAddItemClick} onMoveItem={handleMoveItem} onQuickFill={handleQuickFill} lang={lang} sampleAssets={SAMPLE_ASSETS} /></div>
                        </div>
                    )}
                    {viewMode === 'map' && <MapView schedule={activePlan.schedule[`Day ${currentDay}`] || { morning: [], afternoon: [], evening: [], night: [], accommodation: [] }} t={t} onItemClick={setDetailItem} />}
                    {viewMode === 'checklist' && <ChecklistView checklist={activePlan.checklist} setChecklist={(items) => updateChecklist(items)} t={t} />}
                    {/* Floating Controls - Bottom Right */}
                    {/* Zoom Controls */}
                    <button
                        onClick={handleZoomOut}
                        disabled={canvasZoom <= 50}
                        className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        title="縮小 (Ctrl+滾輪)"
                    >
                        <ZoomOut size={18} />
                    </button>
                    <button
                        onClick={handleZoomReset}
                        className="px-2 py-1 min-w-[50px] text-center text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        title="重設為 100%"
                    >
                        {canvasZoom}%
                    </button>
                    <button
                        onClick={handleZoomIn}
                        disabled={canvasZoom >= 150}
                        className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        title="放大 (Ctrl+滾輪)"
                    >
                        <ZoomIn size={18} />
                    </button>


                </div>

                <button onClick={() => setShowMobileLibrary(true)} className="lg:hidden fixed bottom-20 right-6 w-12 h-12 bg-teal-600 text-white rounded-full shadow-lg flex items-center justify-center z-40 hover:scale-105 active:scale-95 transition-all"><Plus size={24} /></button>
                <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around p-2 z-30 pb-5">
                    <button onClick={() => setViewMode('canvas')} className={`flex flex-col items-center gap-0.5 p-2 rounded-lg ${viewMode === 'canvas' ? 'text-teal-600 bg-teal-50' : 'text-gray-400'}`}><Calendar size={20} /><span className="text-[10px]">{t.schedule}</span></button>
                    <button onClick={() => setViewMode('map')} className={`flex flex-col items-center gap-0.5 p-2 rounded-lg ${viewMode === 'map' ? 'text-teal-600 bg-teal-50' : 'text-gray-400'}`}><MapIcon size={20} /><span className="text-[10px]">{t.map}</span></button>
                    <button onClick={() => setViewMode('checklist')} className={`flex flex-col items-center gap-0.5 p-2 rounded-lg ${viewMode === 'checklist' ? 'text-teal-600 bg-teal-50' : 'text-gray-400'}`}><ListTodo size={20} /><span className="text-[10px]">{t.checklist}</span></button>
                </div>
                {
                    showMobileLibrary && (
                        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowMobileLibrary(false)} />
                            <div className={`relative bg-white w-full rounded-t-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${mobileLibraryExpanded ? 'h-[85vh]' : 'h-[45vh]'}`}>
                                {/* Header with drag indicator and controls */}
                                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                                    <button
                                        onClick={() => setMobileLibraryExpanded(!mobileLibraryExpanded)}
                                        className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        <div className={`transition-transform ${mobileLibraryExpanded ? 'rotate-180' : ''}`}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 15l-6-6-6 6" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-medium">{mobileLibraryExpanded ? '收起' : '展開'}</span>
                                    </button>
                                    <div className="w-10 h-1 bg-gray-300 rounded-full" />
                                    <button
                                        onClick={() => setShowMobileLibrary(false)}
                                        className="text-gray-400 hover:text-gray-600 p-1"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                                <div className="flex-1 flex flex-col overflow-hidden">
                                    <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} searchQuery={searchQuery} setSearchQuery={setSearchQuery} activeCategory={activeCategory} setActiveCategory={setActiveCategory} activeRegion={activeRegion} setActiveRegion={setActiveRegion} setShowCustomItemModal={setShowCustomItemModal} handleDragStart={handleDragStart} handleTapToAdd={handleTapToAdd} applyTemplate={applyTemplate} t={t} lang={lang} customAssets={customAssets} subscribedCreators={subscribedCreators} onCreatorClick={handleCreatorClick} />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <PlanManagerModal
                isOpen={showPlanManager}
                onClose={() => setShowPlanManager(false)}
                plans={plans}
                activePlanId={activePlanId}
                onSelectPlan={(id) => setActivePlanId(id)}
                onCreatePlan={handleCreatePlan}
                onDeletePlan={handleDeletePlan}
                t={t}
            />
            <CustomItemModal
                isOpen={showCustomItemModal}
                onClose={() => setShowCustomItemModal(false)}
                onCreateItem={handleCreateCustomItem}
                t={t}
            />
            {
                showExportModal && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                        <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-100">
                                <h3 className="font-bold text-lg flex items-center gap-2">
                                    <Download size={18} className="text-teal-600" />
                                    {t.export}
                                </h3>
                                <button onClick={() => setShowExportModal(false)} className="p-1 hover:bg-gray-100 rounded-full">
                                    <X size={20} className="text-gray-400" />
                                </button>
                            </div >

                            {/* Tabs */}
                            < div className="flex border-b border-gray-100" >
                                {(['text', 'image', 'share', 'backup'] as const).map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setExportTab(tab)}
                                        className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-medium border-b-2 transition-all ${exportTab === tab
                                            ? 'border-teal-600 text-teal-600 bg-teal-50/50'
                                            : 'border-transparent text-gray-400 hover:text-gray-600'
                                            }`}
                                    >
                                        {tab === 'text' && <FileText size={14} />}
                                        {tab === 'image' && <ImageIcon size={14} />}
                                        {tab === 'share' && <Share2 size={14} />}
                                        {tab === 'backup' && <HardDrive size={14} />}
                                        {t[`export${tab.charAt(0).toUpperCase() + tab.slice(1)}`] || tab}
                                    </button>
                                ))
                                }
                            </div >

                            {/* Content */}
                            < div className="p-5" >
                                {/* Text Tab */}
                                {
                                    exportTab === 'text' && (
                                        <div className="space-y-4">
                                            <textarea
                                                className="w-full h-48 border border-gray-200 rounded-lg p-3 text-xs font-mono bg-gray-50 resize-none focus:outline-none focus:border-teal-500"
                                                readOnly
                                                value={generateExportText()}
                                            />
                                            <button
                                                onClick={() => {
                                                    navigator.clipboard.writeText(generateExportText());
                                                    showToastMessage(t.copied || 'Copied!');
                                                }}
                                                className="w-full py-2.5 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <Copy size={16} />
                                                {t.copy}
                                            </button>
                                        </div>
                                    )
                                }

                                {/* Image Tab */}
                                {
                                    exportTab === 'image' && (
                                        <div className="space-y-4">
                                            <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                                                <ImageIcon size={48} className="mx-auto text-gray-300 mb-3" />
                                                <p className="text-sm text-gray-500 mb-1">{t.downloadImage || '下載行程圖片'}</p>
                                                <p className="text-xs text-gray-400">{activePlan.name} - Day {currentDay}</p>
                                            </div>
                                            <button
                                                onClick={async () => {
                                                    const node = document.querySelector('.schedule-content') as HTMLElement;
                                                    if (node) {
                                                        try {
                                                            const dataUrl = await htmlToImage.toPng(node, {
                                                                backgroundColor: '#ffffff',
                                                                pixelRatio: 2
                                                            });
                                                            const link = document.createElement('a');
                                                            link.download = `${activePlan.name}-Day${currentDay}.png`;
                                                            link.href = dataUrl;
                                                            link.click();
                                                            showToastMessage('✅ ' + (t.downloadImage || '圖片已下載!'));
                                                        } catch (error) {
                                                            console.error('Export image failed:', error);
                                                            alert('Export failed');
                                                        }
                                                    } else {
                                                        alert('Unable to find schedule content');
                                                    }
                                                }}
                                                className="w-full py-2.5 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <Download size={16} />
                                                {t.downloadImage || '下載圖片'}
                                            </button>
                                        </div>
                                    )
                                }

                                {/* Share Tab */}
                                {
                                    exportTab === 'share' && (
                                        <div className="space-y-4">
                                            <p className="text-sm text-gray-500">{t.copyLink}</p>
                                            <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-xl border border-gray-200">
                                                <LinkIcon size={16} className="text-gray-400 flex-shrink-0" />
                                                <input
                                                    type="text"
                                                    readOnly
                                                    value={`https://travelcanvas.app/share/${activePlan.id}`}
                                                    className="bg-transparent flex-1 text-sm text-gray-600 focus:outline-none truncate"
                                                />
                                            </div>
                                            <button
                                                onClick={() => {
                                                    navigator.clipboard.writeText(`https://travelcanvas.app/share/${activePlan.id}`);
                                                    showToastMessage(t.copied || 'Copied!');
                                                }}
                                                className="w-full py-2.5 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <Copy size={16} />
                                                {t.shareLink || '複製連結'}
                                            </button>
                                        </div>
                                    )
                                }

                                {/* Backup Tab */}
                                {
                                    exportTab === 'backup' && (
                                        <div className="space-y-4">
                                            {/* Download Backup Section */}
                                            <div className="p-4 bg-teal-50 rounded-xl border border-teal-100">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Download size={16} className="text-teal-600" />
                                                    <span className="font-medium text-teal-800">{t.downloadBackup || '下載備份檔'}</span>
                                                </div>
                                                <p className="text-xs text-teal-600 mb-3">{t.backupDesc || '下載 JSON 檔案，可在其他電腦或瀏覽器還原您的行程。'}</p>
                                                <button
                                                    onClick={() => {
                                                        const backupData = {
                                                            version: '1.0',
                                                            exportedAt: new Date().toISOString(),
                                                            plans: plans,
                                                            activePlanId: activePlanId,
                                                            customAssets: customAssets,
                                                            budgetLimit: budgetLimit,
                                                            subscribedCreators: subscribedCreators
                                                        };
                                                        const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
                                                        const url = URL.createObjectURL(blob);
                                                        const link = document.createElement('a');
                                                        link.href = url;
                                                        link.download = `TravelCanvas-backup-${new Date().toISOString().split('T')[0]}.json`;
                                                        link.click();
                                                        URL.revokeObjectURL(url);
                                                        showToastMessage('✅ ' + (t.downloadBackup || '備份檔已下載!'));
                                                    }}
                                                    className="w-full py-2.5 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                                                >
                                                    <Download size={16} />
                                                    {t.downloadBackup || '下載備份檔'}
                                                </button>
                                            </div>

                                            {/* Import Backup Section */}
                                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Upload size={16} className="text-gray-600" />
                                                    <span className="font-medium text-gray-800">{t.importBackup || '匯入備份'}</span>
                                                </div>
                                                <p className="text-xs text-gray-500 mb-3">{t.backupImportDesc || '選擇之前下載的 JSON 備份檔來還原資料。'}</p>
                                                <label className="w-full py-2.5 bg-white border-2 border-dashed border-gray-300 text-gray-600 rounded-lg font-medium hover:border-teal-500 hover:text-teal-600 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                                                    <Upload size={16} />
                                                    {t.importBackup || '選擇檔案'}
                                                    <input
                                                        type="file"
                                                        accept=".json"
                                                        className="hidden"
                                                        onChange={(e) => {
                                                            const file = e.target.files?.[0];
                                                            if (file) {
                                                                const reader = new FileReader();
                                                                reader.onload = (event) => {
                                                                    try {
                                                                        const data = JSON.parse(event.target?.result as string);
                                                                        if (data.plans && Array.isArray(data.plans)) {
                                                                            setPlans(data.plans);
                                                                            if (data.activePlanId) setActivePlanId(data.activePlanId);
                                                                            if (data.customAssets) setCustomAssets(data.customAssets);
                                                                            if (data.budgetLimit) setBudgetLimit(data.budgetLimit);
                                                                            if (data.subscribedCreators) setSubscribedCreators(data.subscribedCreators);
                                                                            showToastMessage('✅ ' + (t.importSuccess || '匯入成功！'));
                                                                            setShowExportModal(false);
                                                                        } else {
                                                                            alert(t.importError || '匯入失敗，請確認檔案格式正確。');
                                                                        }
                                                                    } catch (err) {
                                                                        alert(t.importError || '匯入失敗，請確認檔案格式正確。');
                                                                    }
                                                                };
                                                                reader.readAsText(file);
                                                            }
                                                            e.target.value = '';
                                                        }}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    )
                                }
                            </div >
                        </div >
                    </div >
                )
            }
            <ShareHubModal
                isOpen={showShareModal}
                onClose={() => setShowShareModal(false)}
                plan={activePlan}
                t={t}
                showToast={showToastMessage}
                onOpenMobilePreview={() => setShowMobilePreview(true)}
                onOpenExportText={() => {
                    setExportTab('text');
                    setShowExportModal(true);
                }}
            />
            <DateModal
                isOpen={showDateModal}
                onClose={() => setShowDateModal(false)}
                initialStartDate={tempStartDate}
                initialEndDate={tempEndDate}
                onConfirm={(start, end) => {
                    setTempStartDate(start);
                    setTempEndDate(end);
                    handleDateConfirm();
                }}
                t={t}
            />

            <CreatorProfile
                isOpen={!!selectedCreatorId && !!activeCreator}
                onClose={() => setSelectedCreatorId(null)}
                creator={activeCreator!}
                templates={creatorTemplates}
                isSubscribed={selectedCreatorId ? subscribedCreators.includes(selectedCreatorId) : false}
                onToggleSubscribe={() => selectedCreatorId && toggleSubscription(selectedCreatorId)}
                onExploreTemplate={(tpl) => {
                    applyTemplate(tpl.schedule);
                    setSelectedCreatorId(null);
                }}
            />

            {/* Move Item Modal */}
            {
                showMoveModal && moveTarget && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl w-full max-w-sm shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
                            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                                    <MoveRight size={18} className="text-blue-500" />
                                    {t.moveToDay || "Move to Day"}
                                </h3>
                                <button onClick={() => setShowMoveModal(false)} className="p-1 hover:bg-gray-200 rounded-full text-gray-400"><X size={20} /></button>
                            </div>
                            <div className="p-4 grid grid-cols-2 gap-2 max-h-[60vh] overflow-y-auto">
                                {Array.from({ length: activePlan.totalDays }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => executeMoveItem(i + 1)}
                                        className={`p-3 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition-all ${currentDay === i + 1
                                            ? 'bg-blue-50 border-blue-200 text-blue-600'
                                            : 'bg-white border-gray-100 text-gray-600 hover:border-blue-300 hover:shadow-sm'
                                            }`}
                                    >
                                        {t.day} {i + 1}
                                        {currentDay === i + 1 && <span className="text-[10px] bg-blue-100 text-blue-600 px-1.5 rounded">{t.current || "Current"}</span>}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Submit for Review Modal */}
            <SubmitModal
                isOpen={showSubmitModal}
                onClose={() => setShowSubmitModal(false)}
                plan={activePlan}
                onSubmit={(description, tags) => {
                    showToastMessage('🎉 已提交審核！我們會在 24 小時內回覆您');
                }}
                t={t}
            />

            {/* Mobile Preview Modal */}
            {
                showMobilePreview && (
                    <MobilePreview
                        plan={activePlan}
                        onClose={() => setShowMobilePreview(false)}
                        lang={lang}
                    />
                )
            }

            {/* Item Detail Modal - Added Step 522 */}
            <ItemDetailModal
                isOpen={!!detailItem}
                onClose={() => setDetailItem(null)}
                item={detailItem}
                t={t}
            />

            {toast.show && <Toast message={toast.message} onClose={() => setToast({ ...toast, show: false })} />}

            <style>{`
          .animate-spin-once { animation: spin 0.5s ease-in-out; }
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>
        </div >
    );
}
