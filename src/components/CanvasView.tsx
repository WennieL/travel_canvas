import React from 'react';
import { TimeSlot, ScheduleItem, DaySchedule, Plan, LangType, TravelItem } from '../types';
import DropZone from './DropZone';
import MapView from './MapView';
import { Sun, Coffee, Moon, Clock, BedDouble, Sunset, AlertTriangle } from 'lucide-react';
import { getSlotLabel, parseDuration } from '../utils';
import { TimelineSlotHeader } from './Canvas/TimelineSlotHeader';

// Slot visual configuration
// Redundant slot visual configuration removed

interface CanvasViewProps {
    showContextMap: boolean;
    currentDaySchedule: DaySchedule;
    activePlan: Plan;
    lang: LangType;
    t: any;
    isSidebarOpen: boolean;
    handleDrop: (e: React.DragEvent, slot: TimeSlot) => void;
    handleRemoveItem: (slot: TimeSlot, index: number) => void;
    handleUpdateItem: (slot: TimeSlot, index: number, updates: Partial<ScheduleItem>) => void;
    handleDragStart: (e: React.DragEvent, item: TravelItem, source: 'sidebar' | 'canvas', slot?: TimeSlot, index?: number) => void;
    handleQuickFill: (slot: TimeSlot) => void;
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
    setSidebarMode?: (mode: 'list' | 'map') => void;
}

const CanvasView: React.FC<CanvasViewProps> = ({
    showContextMap,
    currentDaySchedule,
    activePlan,
    lang,
    t,
    isSidebarOpen,
    handleDrop,
    handleRemoveItem,
    handleUpdateItem,
    handleDragStart,
    handleQuickFill,
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
    setSidebarMode,
}) => {
    const isTimeline = !showContextMap;

    return (
        <div className={`flex h-full ${showContextMap ? 'gap-4 overflow-hidden' : ''}`}>
            {/* Schedule List Area */}
            <div className={`flex-1 transition-all duration-300 w-full max-w-full mx-auto ${showContextMap ? 'overflow-y-auto pr-2' : ''}`}>
                <div className={`schedule-content relative pb-24 lg:pb-12 lg:max-w-4xl mx-auto w-full overflow-x-hidden ${isTimeline ? 'pr-2' : 'px-4 md:px-6 lg:px-0'}`}>
                    {(() => {
                        const slots = ['morning', 'afternoon', 'evening', 'night'] as TimeSlot[];
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
                                    {/* Timeline Slot Header */}
                                    {isTimeline && (
                                        <TimelineSlotHeader
                                            slot={slot}
                                            t={t}
                                            capacityStatus={capacityStatus}
                                        />
                                    )}

                                    <DropZone
                                        key={slot} slot={slot} label={getSlotLabel(slot, t)}
                                        items={slotItems}
                                        onDrop={(e) => handleDrop(e, slot)}
                                        onRemoveItem={(idx: number) => handleRemoveItem(slot, idx)}
                                        onUpdateItem={(idx: number, upd: Partial<ScheduleItem>) => handleUpdateItem(slot, idx, upd)}
                                        onMoveItem={(idx) => { setShowMoveModal(true); setMoveTarget({ slot, index: idx }); }}
                                        onUnlockItem={(item) => { setUnlockTarget(item); }}
                                        onItemClick={setSelectedItem}
                                        onDragStart={handleDragStart}
                                        onAddItem={() => {
                                            setActiveTab('assets');
                                            setSidebarMode?.('list');
                                            if (window.innerWidth < 1024) {
                                                setAddToSlotTarget(slot);
                                                setShowMobileLibrary(true);
                                            } else {
                                                if (!isSidebarOpen) setIsSidebarOpen(true);
                                                setSidebarHighlight(true);
                                                setTimeout(() => setSidebarHighlight(false), 2000);
                                            }
                                        }}
                                        t={t}
                                        lang={lang}
                                        planRegion={activePlan.region}
                                        isCompact={showContextMap}
                                        startIndex={startIdx}
                                        onQuickFill={() => handleQuickFill(slot)}
                                        previousItem={previousSlotLastItem}
                                        showTimeline={isTimeline}
                                    />
                                </React.Fragment>
                            );
                        });
                    })()}

                    {/* Accommodation Slot Header */}
                    {isTimeline && (
                        <div className="mt-10">
                            <TimelineSlotHeader
                                slot="accommodation"
                                t={t}
                            />
                        </div>
                    )}

                    <DropZone
                        key="accommodation" slot="accommodation" label={t.accommodation || 'Accommodation'}
                        items={currentDaySchedule.accommodation}
                        onDrop={(e) => handleDrop(e, 'accommodation')}
                        onRemoveItem={(idx: number) => handleRemoveItem('accommodation', idx)}
                        onUpdateItem={(idx: number, upd: Partial<ScheduleItem>) => handleUpdateItem('accommodation', idx, upd)}
                        onMoveItem={(idx) => { setShowMoveModal(true); setMoveTarget({ slot: 'accommodation', index: idx }); }}
                        onUnlockItem={(item) => { setUnlockTarget(item); }}
                        onItemClick={setSelectedItem}
                        onDragStart={handleDragStart}
                        onAddItem={() => {
                            setActiveTab('assets');
                            setSidebarMode?.('list');
                            if (window.innerWidth < 1024) {
                                setAddToSlotTarget('accommodation');
                                setShowMobileLibrary(true);
                            } else {
                                if (!isSidebarOpen) setIsSidebarOpen(true);
                                setSidebarHighlight(true);
                                setTimeout(() => setSidebarHighlight(false), 2000);
                            }
                        }}
                        t={t}
                        lang={lang}
                        planRegion={activePlan.region}
                        isCompact={showContextMap}
                        showTimeline={isTimeline}
                        onQuickFill={() => handleQuickFill('accommodation')}
                        startIndex={(currentDaySchedule.morning?.length || 0) + (currentDaySchedule.afternoon?.length || 0) + (currentDaySchedule.evening?.length || 0) + (currentDaySchedule.night?.length || 0)}
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
                        lang={lang}
                        t={t}
                        onItemClick={handleMapItemClick}
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
