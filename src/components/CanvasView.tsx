import React from 'react';
import { TimeSlot, ScheduleItem, DaySchedule, Plan, LangType, TravelItem } from '../types';
import DropZone from './DropZone';
import MapView from './MapView';
import { getSlotLabel } from '../utils';

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
    setSelectedItem
}) => {
    return (
        <div className={`flex h-full ${showContextMap ? 'gap-4 overflow-hidden' : ''}`}>
            {/* Schedule List Area */}
            <div className={`flex-1 transition-all duration-300 w-full max-w-full mx-auto ${showContextMap ? 'overflow-y-auto pr-2' : ''}`}>
                <div className="space-y-6 pb-24 lg:pb-12 px-4 md:px-6 lg:max-w-3xl mx-auto lg:px-0 w-full max-w-full overflow-x-hidden">
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
                                    onMoveItem={(idx) => { setShowMoveModal(true); setMoveTarget({ slot, index: idx }); }}
                                    onUnlockItem={(item) => { setUnlockTarget(item); }}
                                    onItemClick={setSelectedItem}
                                    onDragStart={handleDragStart}
                                    onAddItem={() => {
                                        if (window.innerWidth < 1024) {
                                            setAddToSlotTarget(slot);
                                            setShowMobileLibrary(true);
                                        } else {
                                            if (!isSidebarOpen) setSidebarHighlight(true); // Simplified logic
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
                        onMoveItem={(idx) => { setShowMoveModal(true); setMoveTarget({ slot: 'accommodation', index: idx }); }}
                        onUnlockItem={(item) => { setUnlockTarget(item); }}
                        onItemClick={setSelectedItem}
                        onDragStart={handleDragStart}
                        onAddItem={() => {
                            if (window.innerWidth < 1024) {
                                setAddToSlotTarget('accommodation');
                                setShowMobileLibrary(true);
                            } else {
                                setSidebarHighlight(true);
                                setTimeout(() => setSidebarHighlight(false), 2000);
                            }
                        }}
                        t={t}
                        lang={lang}
                        planRegion={activePlan.region}
                        isCompact={showContextMap}
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
                        t={t}
                        onItemClick={handleMapItemClick}
                        isEmbedded={true}
                    />
                </div>
            )}
        </div>
    );
};

export default CanvasView;
