import React from 'react';
import { TimeSlot, ScheduleItem, DaySchedule, Plan, LangType, TravelItem } from '../types';
import DropZone from './DropZone';
import MapView from './MapView';
import { getSlotLabel } from '../utils';
import { Sun, Coffee, Moon, Clock, BedDouble, Sunset } from 'lucide-react';

// Slot visual configuration
const slotConfig: Record<string, { color: string; time: string }> = {
    morning: { color: 'text-orange-500', time: '06:00 - 12:00' },
    afternoon: { color: 'text-blue-500', time: '12:00 - 18:00' },
    evening: { color: 'text-purple-500', time: '18:00 - 22:00' },
    night: { color: 'text-indigo-900', time: '22:00 - 06:00' },
};

const getSlotIcon = (slot: string) => {
    switch (slot) {
        case 'morning': return <Sun size={14} />;
        case 'afternoon': return <Coffee size={14} />;
        case 'evening': return <Sunset size={14} />;
        case 'night': return <Moon size={14} />;
        default: return <Clock size={14} />;
    }
};

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
    const isTimeline = !showContextMap;

    return (
        <div className={`flex h-full ${showContextMap ? 'gap-4 overflow-hidden' : ''}`}>
            {/* Schedule List Area */}
            <div className={`flex-1 transition-all duration-300 w-full max-w-full mx-auto ${showContextMap ? 'overflow-y-auto pr-2' : ''}`}>
                <div className={`relative pb-24 lg:pb-12 lg:max-w-3xl mx-auto w-full max-w-full overflow-x-hidden ${isTimeline ? 'pr-2' : 'px-4 md:px-6 lg:px-0'}`}>
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

                            const config = slotConfig[slot];

                            return (
                                <React.Fragment key={slot}>
                                    {/* Timeline Slot Label */}
                                    {isTimeline && (
                                        <div className="relative flex items-center h-12 py-3 pl-12 lg:pl-16">
                                            {/* Line segment through this label */}
                                            <div className="absolute left-[20px] lg:left-[24px] top-0 bottom-0 w-0.5 bg-gray-200" />

                                            {/* Slot label anchored to the line */}
                                            <div className="absolute left-0 right-0 flex items-center z-10">
                                                {/* Icon centered on spine */}
                                                <div className={`absolute left-[21px] lg:left-[25px] -translate-x-1/2 w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center border-2 border-white bg-white shadow-sm ring-4 ring-white ${config.color.replace('text-', 'bg-').replace('500', '50')} ${config.color.replace('text-', 'border-').replace('500', '200')}`}>
                                                    <span className="text-xl">{getSlotIcon(slot)}</span>
                                                </div>

                                                {/* Text labels shifted right of the icon */}
                                                <div className="pl-12 lg:pl-14 flex flex-col justify-center">
                                                    <div className="flex items-center gap-4">
                                                        <h3 className={`text-base lg:text-lg font-black uppercase tracking-widest ${config.color}`}>
                                                            {getSlotLabel(slot, t)}
                                                        </h3>
                                                        <span className="text-xs lg:text-sm text-gray-400 font-bold tracking-tight bg-gray-50/50 px-2 py-0.5 rounded-full border border-gray-100">
                                                            {config.time}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                            if (window.innerWidth < 1024) {
                                                setAddToSlotTarget(slot);
                                                setShowMobileLibrary(true);
                                            } else {
                                                if (!isSidebarOpen) setSidebarHighlight(true);
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

                    {/* Accommodation Slot */}
                    {isTimeline && (
                        <div className="relative flex items-center h-12 py-3 pl-12 lg:pl-16 mt-10">
                            {/* Slot label (no line segment here, as requested) */}
                            <div className="absolute left-0 right-0 flex items-center z-10">
                                {/* Icon positioned to match spine alignment */}
                                <div className="absolute left-[21px] lg:left-[25px] -translate-x-1/2 w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center border-2 border-white bg-white shadow-sm ring-4 ring-white border-indigo-200 bg-indigo-50">
                                    <BedDouble className="w-5 h-5 text-indigo-600" />
                                </div>

                                {/* Text label shifted right to match activity slots */}
                                <div className="pl-12 lg:pl-14 flex flex-col justify-center">
                                    <h3 className="text-base lg:text-lg font-black uppercase tracking-widest text-indigo-600">
                                        {t.accommodation || 'Accommodation'}
                                    </h3>
                                </div>
                            </div>
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
                        showTimeline={isTimeline}
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
