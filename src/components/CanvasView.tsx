import React from 'react';
import { TimeSlot, ScheduleItem, DaySchedule, Plan, LangType, TravelItem, ItemType } from '../types';
import DropZone from './DropZone';
import MapView from './MapView';
import { Sun, Coffee, Moon, Clock, BedDouble, Sunset, AlertTriangle, Plus } from 'lucide-react';
import { getSlotLabel, parseDuration } from '../utils';
import { TimelineSlotHeader } from './Canvas/TimelineSlotHeader';
import { useIsMobile } from '../hooks/useIsMobile';
import { useApp } from '../contexts/AppContext';

// Slot visual configuration
// Redundant slot visual configuration removed

interface CanvasViewProps {
    showContextMap: boolean;
    currentDaySchedule: DaySchedule;
    activePlan: Plan;
    isSidebarOpen: boolean;
    handleDrop: (e: React.DragEvent, slot: TimeSlot) => void;
    handleRemoveItem: (slot: TimeSlot, index: number) => void;
    handleUpdateItem: (slot: TimeSlot, index: number, updates: Partial<ScheduleItem>) => void;
    handleDragStart: (e: React.DragEvent, item: TravelItem, source: 'sidebar' | 'canvas', slot?: TimeSlot, index?: number) => void;
    handleMapItemClick: (item: any) => void;
    setAddToSlotTarget: (slot: TimeSlot) => void;
    setShowMoveModal: (show: boolean) => void;
    setMoveTarget: (target: { slot: TimeSlot, index: number }) => void;
    setShowMobileLibrary: (show: boolean) => void;
    setSidebarHighlight: (show: boolean) => void;
    setUnlockTarget: (item: ScheduleItem | null) => void;
    setSelectedItem: (item: ScheduleItem | null) => void;
    setIsSidebarOpen: (open: boolean) => void;
    setActiveTab: (tab: 'assets' | 'templates') => void;
    discoveryCreatorId?: string | null;
    currentDay?: number;
    addToSlotTarget?: TimeSlot | null;
    onExitDiscovery?: () => void;
    onAddItem?: (item: TravelItem) => void;
    onRepeatAccommodation?: () => void;
    setSidebarMode?: (mode: 'list' | 'map') => void;
    onSelectItem?: (item: TravelItem | ScheduleItem | null, source: 'map' | 'sidebar' | 'canvas' | null) => void;
    setActiveCategory?: (category: 'all' | ItemType) => void;
}

const CanvasView: React.FC<CanvasViewProps> = ({
    showContextMap,
    currentDaySchedule,
    activePlan,
    isSidebarOpen,
    handleDrop,
    handleRemoveItem,
    handleUpdateItem,
    handleDragStart,
    handleMapItemClick,
    setAddToSlotTarget,
    setShowMoveModal,
    setMoveTarget,
    setShowMobileLibrary,
    setSidebarHighlight,
    setUnlockTarget,
    setSelectedItem,
    setIsSidebarOpen,
    setActiveTab,
    discoveryCreatorId,
    currentDay,
    addToSlotTarget,
    onExitDiscovery,
    onAddItem,
    onRepeatAccommodation,
    setSidebarMode,
    onSelectItem,
    setActiveCategory,
}) => {
    const { lang, t } = useApp();
    const isTimeline = !showContextMap;
    const isMobile = useIsMobile();

    // Define slots and calculation logic at the top to avoid scope issues
    const slots = ['morning', 'afternoon', 'evening', 'night'] as TimeSlot[];
    const isDayEmpty = slots.every(s => (currentDaySchedule[s] || []).length === 0)
        && (currentDaySchedule.accommodation || []).length === 0;

    // [NEW] Logic for Hotel Continuity
    const prevDayKey = `Day ${(currentDay || 1) - 1}`;
    const prevHotel = (currentDay || 1) > 1 ? activePlan.schedule[prevDayKey]?.accommodation?.[0] : null;

    return (
        <div className={`flex h-full ${showContextMap ? 'gap-4 overflow-hidden' : ''}`}>
            {/* Schedule List Area */}
            <div className={`flex-1 transition-all duration-300 w-full max-w-full mx-auto ${showContextMap ? 'overflow-y-auto pr-2' : ''}`}>
                <div className={`schedule-content relative pb-16 lg:pb-12 lg:max-w-4xl mx-auto w-full overflow-x-hidden ${isTimeline ? 'pr-2' : 'px-4 md:px-6 lg:px-0'}`}>

                    {/* Day Anchor: Accommodation (Top-Level Sticky Feel) */}
                    <div className="mb-8 relative z-20">
                        {/* Custom Anchor Card styling around the DropZone */}
                        <div className="bg-indigo-50/50 rounded-2xl p-1 md:p-2 border border-indigo-100/50">
                            <div className="px-4 py-2 flex items-center justify-between">
                                <span className="text-xs font-bold text-indigo-800 tracking-wider uppercase flex items-center gap-1.5 opacity-80">
                                    <span className="text-sm">🏠</span>
                                    {t.accommodation || 'Accommodation'}
                                </span>
                            </div>
                            
                            <div className="-mt-2">
                                <DropZone
                                    key="accommodation" slot="accommodation" label={t.accommodation || 'Accommodation'}
                                    items={currentDaySchedule.accommodation}
                                    onDrop={(e) => handleDrop(e, 'accommodation')}
                                    onRemoveItem={(idx: number) => handleRemoveItem('accommodation', idx)}
                                    onUpdateItem={(idx: number, upd: Partial<ScheduleItem>) => handleUpdateItem('accommodation', idx, upd)}
                                    onMoveItem={(idx) => { setShowMoveModal(true); setMoveTarget({ slot: 'accommodation', index: idx }); }}
                                    onUnlockItem={(item) => { setUnlockTarget(item); }}
                                    onItemClick={(item) => onSelectItem?.(item, 'canvas')}
                                    onDragStart={handleDragStart}
                                    onAddItem={() => {
                                        setActiveTab('assets');
                                        setActiveCategory?.('hotel');
                                        setSidebarMode?.('list');
                                        if (isMobile) {
                                            setAddToSlotTarget('accommodation');
                                            setShowMobileLibrary(true);
                                        } else {
                                            setAddToSlotTarget('accommodation');
                                            if (!isSidebarOpen) setIsSidebarOpen(true);
                                            setSidebarHighlight(true);
                                            setTimeout(() => setSidebarHighlight(false), 2000);
                                        }
                                    }}
                                    planRegion={activePlan.region}
                                    isCompact={showContextMap}
                                    showTimeline={isTimeline}
                                    startIndex={0}
                                    isDayEmpty={isDayEmpty}
                                />
                                
                                {/* Continuation Button */}
                                {(currentDaySchedule.accommodation || []).length === 0 && prevHotel && (
                                    <div className="px-4 pb-4">
                                        <button
                                            onClick={onRepeatAccommodation}
                                            className="w-full py-2 bg-indigo-50/50 hover:bg-indigo-100/50 border border-indigo-200/50 rounded-xl text-[11px] font-bold text-indigo-700 flex items-center justify-center gap-2 transition-all group/repeat"
                                        >
                                            <span className="text-sm opacity-70 group-hover/repeat:scale-110 transition-transform">🛏️</span>
                                            {lang === 'zh' ? `續住：${prevHotel.title}` : `Continue stay at ${prevHotel.titleEn || prevHotel.title}`}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Timeline start dot to visually separate timeline from anchor */}
                    {isTimeline && !isDayEmpty && (
                         <div className="relative h-10 flex justify-start items-center pl-[21px] lg:pl-[33px]">
                             <div className="w-1.5 h-1.5 rounded-full bg-teal-400 z-10 shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
                             <span className="ml-4 text-[11px] font-bold text-teal-600/70 tracking-widest uppercase bg-teal-50/50 px-2.5 py-0.5 rounded-full border border-teal-100/50">
                                {lang === 'zh' ? '旅程從這裡開始' : 'Journey starts here'}
                             </span>
                         </div>
                    )}

                    {(() => {
                        let cumulativeIndex = 0;
                        return slots.map((slot, slotIdx) => {
                            const startIdx = cumulativeIndex;
                            const slotItems = currentDaySchedule[slot] || [];
                            cumulativeIndex += slotItems.length;

                            // Cross-slot transport: get previous slot's last item
                            const prevSlot = slotIdx > 0 ? slots[slotIdx - 1] : null;
                            const prevSlotItems = prevSlot ? (currentDaySchedule[prevSlot] || []) : [];
                            const previousSlotLastItem = prevSlotItems.length > 0
                                ? prevSlotItems[prevSlotItems.length - 1]
                                : null;

                            // Capacity Logic
                            const totalMins = slotItems.reduce((acc, item) => acc + parseDuration(item.duration), 0);
                            const threshold = slot === 'evening' ? 240 : 360;
                            const capacityStatus = totalMins > threshold ? 'overload' : totalMins > threshold * 0.8 ? 'busy' : null;

                            return (
                                <React.Fragment key={slot}>
                                    {/* Timeline Slot Header (Hidden for Flowing Design) */}
                                    {/* {isTimeline && (
                                        <TimelineSlotHeader
                                            slot={slot}
                                            t={t}
                                            capacityStatus={capacityStatus}
                                        />
                                    )} */}

                                    <DropZone
                                        key={slot} slot={slot} label={getSlotLabel(slot, t)}
                                        items={slotItems}
                                        onDrop={(e) => handleDrop(e, slot)}
                                        onRemoveItem={(idx: number) => handleRemoveItem(slot, idx)}
                                        onUpdateItem={(idx: number, upd: Partial<ScheduleItem>) => handleUpdateItem(slot, idx, upd)}
                                        onMoveItem={(idx) => { setShowMoveModal(true); setMoveTarget({ slot, index: idx }); }}
                                        onUnlockItem={(item) => { setUnlockTarget(item); }}
                                        onItemClick={(item) => onSelectItem?.(item, 'canvas')}
                                        onDragStart={handleDragStart}
                                        onAddItem={() => {
                                            setActiveTab('assets');
                                            setSidebarMode?.('list');
                                            if (isMobile) {
                                                setAddToSlotTarget(slot);
                                                setShowMobileLibrary(true);
                                            } else {
                                                setAddToSlotTarget(slot);
                                                if (!isSidebarOpen) setIsSidebarOpen(true);
                                                setSidebarHighlight(true);
                                                setTimeout(() => setSidebarHighlight(false), 2000);
                                            }
                                        }}
                                        planRegion={activePlan.region}
                                        isCompact={showContextMap}
                                        startIndex={startIdx}
                                        previousItem={previousSlotLastItem}
                                        showTimeline={isTimeline}
                                        isDayEmpty={isDayEmpty}
                                    />
                                </React.Fragment>
                            );
                        });
                    })()}

                    {/* EMPTY STATE GUIDE — Centered vertically, with FABs hidden when visible */}
                    {(() => {
                        if (!isDayEmpty || !isTimeline) return null;

                        return (
                            <div className="flex flex-col items-center justify-center px-10 text-center animate-in fade-in slide-in-from-bottom-10 duration-1000 relative">
                                <h3 className="text-2xl font-bold text-slate-800 tracking-tight leading-tight max-w-[300px]">
                                    {lang === 'zh' ? `開始為第 ${currentDay} 天加入景點吧` : `Start gathering for Day ${currentDay}`}
                                </h3>
                                <p className="text-sm text-slate-400 mt-6 max-w-[280px] leading-relaxed font-medium">
                                    {lang === 'zh' ? '點擊下方按鈕展開靈感庫，開始打造你的第一個行程' : 'Tap the button below to explore inspirations'}
                                </p>

                                <button
                                    onClick={() => {
                                        if (isMobile) {
                                            setShowMobileLibrary(true);
                                        } else {
                                            setIsSidebarOpen(true);
                                            setActiveTab('assets');
                                        }
                                    }}
                                    className="mt-12 px-10 py-4 rounded-full bg-teal-600 text-white font-bold shadow-[0_15px_35px_rgba(13,148,136,0.25)] hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 group"
                                >
                                    <Plus size={20} strokeWidth={3} className="group-hover:rotate-90 transition-transform duration-300" />
                                    {lang === 'zh' ? '查看推薦景點' : 'Explore Ideas'}
                                </button>
                            </div>
                        );
                    })()}

                    {/* Unsorted Collection (待排區) */}
                    {((currentDaySchedule.unsorted?.length || 0) > 0 || !isDayEmpty) && (
                        <div className="mt-12 mb-8 relative">
                            {/* Visual Separator */}
                            <div className="absolute inset-x-0 top-0 flex items-center justify-center">
                                <div className="w-full border-t-2 border-dashed border-gray-200/60" />
                                <div className="absolute bg-[#FDFDFD] px-4 text-xs font-bold text-gray-400 tracking-widest uppercase rounded-full shadow-sm border border-gray-100 flex items-center gap-1.5 whitespace-nowrap">
                                    <span className="text-sm">🔖</span>
                                    {lang === 'zh' ? '口袋清單' : 'Pocket List'}
                                </div>
                            </div>
                            <div className="pt-10">
                                <DropZone
                                    key="unsorted" slot="unsorted" label={lang === 'zh' ? '口袋清單' : 'Pocket List'}
                                    items={currentDaySchedule.unsorted || []}
                                    onDrop={(e) => handleDrop(e, 'unsorted')}
                                    onRemoveItem={(idx: number) => handleRemoveItem('unsorted', idx)}
                                    onUpdateItem={(idx: number, upd: Partial<ScheduleItem>) => handleUpdateItem('unsorted', idx, upd)}
                                    onMoveItem={(idx) => { setShowMoveModal(true); setMoveTarget({ slot: 'unsorted', index: idx }); }}
                                    onUnlockItem={(item) => { setUnlockTarget(item); }}
                                    onItemClick={(item) => onSelectItem?.(item, 'canvas')}
                                    onDragStart={handleDragStart}
                                    onAddItem={() => {
                                        setActiveTab('assets');
                                        setSidebarMode?.('list');
                                        if (isMobile) {
                                            setAddToSlotTarget('unsorted');
                                            setShowMobileLibrary(true);
                                        } else {
                                            setAddToSlotTarget('unsorted');
                                            if (!isSidebarOpen) setIsSidebarOpen(true);
                                            setSidebarHighlight(true);
                                            setTimeout(() => setSidebarHighlight(false), 2000);
                                        }
                                    }}
                                    planRegion={activePlan.region}
                                    isCompact={showContextMap}
                                    showTimeline={false}
                                    startIndex={(currentDaySchedule.morning?.length || 0) + (currentDaySchedule.afternoon?.length || 0) + (currentDaySchedule.evening?.length || 0) + (currentDaySchedule.night?.length || 0)}
                                    isDayEmpty={isDayEmpty}
                                />

                                {/* Continuation Button */}
                                {(currentDaySchedule.accommodation || []).length === 0 && prevHotel && (
                                    <div className="px-4 pb-4">
                                        <button
                                            onClick={onRepeatAccommodation}
                                            className="w-full py-2 bg-indigo-50/50 hover:bg-indigo-100/50 border border-indigo-200/50 rounded-xl text-[11px] font-bold text-indigo-700 flex items-center justify-center gap-2 transition-all group/repeat"
                                        >
                                            <span className="text-sm opacity-70 group-hover/repeat:scale-110 transition-transform">🛏️</span>
                                            {lang === 'zh' ? `續住：${prevHotel.title}` : `Continue stay at ${prevHotel.titleEn || prevHotel.title}`}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}



                    {/* Bottom Padding for Mobile Nav & Floating FABs */}
                    <div className="h-40 lg:h-20" />
                </div>
            </div>

            {/* Context Map (Right Side) */}
            {showContextMap && (
                <div className="hidden lg:block w-[40%] h-full bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-inner sticky top-0">
                    <MapView
                        schedule={currentDaySchedule}
                        lang={lang}
                        t={t}
                        onItemClick={(item) => onSelectItem ? onSelectItem(item, 'map') : handleMapItemClick(item)}
                        isEmbedded={true}
                        discoveryCreatorId={discoveryCreatorId}
                        currentDay={currentDay}
                        addToSlotTarget={addToSlotTarget}
                        onExitDiscovery={onExitDiscovery}
                        activeRegion={activePlan.region}
                        onAddItem={onAddItem}
                    />
                </div>
            )}
        </div>
    );
};

export default CanvasView;
