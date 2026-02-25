import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Trash2, Clock, StickyNote as NoteIcon, GripVertical, Coffee, Moon, Sun, BedDouble, Plus, Car, Bus, Train, PersonStanding as Walk, ChevronsUpDown, Star, Tag, MoveRight, Sparkles, MoveLeft, MapPin, MoreVertical, Lock, Banknote, Sunset, AlertTriangle } from 'lucide-react';
import {
    TimeSlot,
    ScheduleItem,
    TravelItem,
    TransportMode,
    Region
} from '../types';
import {
    getTransportIcon,
    getTransportLabel,
    calculateTravelTime,
    getFallbackImage,
    parseDuration,
    addMinutes,
    getTransportSuggestion
} from '../utils';
import SmartTimeInput from './SmartTimeInput.tsx';
import ScheduleItemCard from './ScheduleItemCard.tsx';
import TransportSelector from './TransportSelector.tsx';
import { useConfirm } from '../hooks';

interface DropZoneProps {
    slot: TimeSlot;
    items: ScheduleItem[];
    label: string;
    onDrop: (e: React.DragEvent) => void;
    onRemoveItem: (index: number) => void;
    onUpdateItem: (index: number, updates: Partial<ScheduleItem>) => void;
    onMoveItem: (index: number) => void;
    onUnlockItem: (item: ScheduleItem) => void;
    onItemClick: (item: ScheduleItem) => void;
    onAddItem?: () => void;
    t: any;
    previousItem?: ScheduleItem | null;
    lang: string;
    onDragStart: (e: React.DragEvent, item: TravelItem, source: 'sidebar' | 'canvas', slot?: TimeSlot, index?: number) => void;
    planRegion?: Region;
    isCompact?: boolean;
    startIndex?: number;
    onQuickFill?: (slot: TimeSlot) => void;
    showTimeline?: boolean;
}

const DropZone: React.FC<DropZoneProps> = ({
    slot, items, label, onDrop, onRemoveItem, onUpdateItem, onMoveItem, onUnlockItem, onItemClick, onAddItem, onQuickFill, t, previousItem, lang, onDragStart, planRegion, isCompact = false, startIndex = 0, showTimeline = false
}) => {
    const { confirm } = useConfirm();
    // const isCompact = false; // Removed hardcoded
    const isDraggingGlobal = false; // Simplified
    const onDragOver = (e: React.DragEvent) => { e.preventDefault(); };
    // Removed unused sampleAssets and hardcoded lang
    // Removed shadowed onAddItem
    // Passed from parent
    const onDelete = (i: number) => onRemoveItem(i);
    const onTransportChange = (i: number, m: TransportMode) => onUpdateItem(i, { arrivalTransport: m });
    const nextModeMap: Record<TransportMode, TransportMode> = { 'car': 'public', 'public': 'walk', 'walk': 'car' };
    const handleTransportClick = (e: React.MouseEvent, index: number, currentMode: TransportMode = 'car') => { e.stopPropagation(); const nextMode = nextModeMap[currentMode]; onTransportChange(index, nextMode); };
    const handleCrossSlotTransportClick = (e: React.MouseEvent, currentMode: TransportMode = 'car') => { e.stopPropagation(); const nextMode = nextModeMap[currentMode]; onTransportChange(0, nextMode); };

    // Helper to get suggested time for an item in the list
    const getSuggestedTime = (idx: number) => {
        let baseTime = null;
        let duration = 0;
        let transport = 30; // default buffer

        if (idx === 0) {
            if (previousItem && previousItem.startTime) {
                baseTime = previousItem.startTime;
                duration = parseDuration(previousItem.duration);
                // Calculate transport if previous item has coordinates
                transport = 30; // Simply use 30 mins buffer if cross-slot
            }
        } else {
            const prev = items[idx - 1];
            if (prev.startTime) {
                baseTime = prev.startTime;
                duration = parseDuration(prev.duration);
                transport = calculateTravelTime(prev, items[idx], items[idx].arrivalTransport);
            }
        }

        if (baseTime) {
            const finishedTime = addMinutes(baseTime, duration);
            return addMinutes(finishedTime, transport);
        }
        return null;
    };

    // Derived UI Variables
    const isAccommodation = slot === 'accommodation';
    const title = label;
    const icon = isAccommodation ? <BedDouble size={16} /> :
        slot === 'morning' ? <Sun size={16} /> :
            slot === 'afternoon' ? <Coffee size={16} /> :
                slot === 'evening' ? <Sunset size={16} /> :
                    slot === 'night' ? <Moon size={16} /> : <Clock size={16} />;

    // Style Mapping
    const slotStyles: Record<string, { color: string, time: string }> = {
        morning: { color: 'text-orange-500', time: '06:00 - 12:00' },
        afternoon: { color: 'text-blue-500', time: '12:00 - 18:00' },
        evening: { color: 'text-purple-500', time: '18:00 - 22:00' },
        night: { color: 'text-indigo-900', time: '22:00 - 06:00' },
        accommodation: { color: 'text-indigo-600', time: '' }
    };
    const currentStyle = slotStyles[slot] || { color: 'text-gray-500', time: '' };

    // Capacity Logic
    const getCapacityStatus = () => {
        if (isAccommodation) return null;
        const totalMins = items.reduce((acc, item) => acc + parseDuration(item.duration), 0);
        const threshold = slot === 'evening' ? 240 : 360;
        if (totalMins > threshold) return 'overload';
        if (totalMins > threshold * 0.8) return 'busy';
        return null;
    };
    const capacityStatus = getCapacityStatus();
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

    return (
        <div className={`relative transition-all duration-300 overflow-hidden ${isAccommodation ? 'mt-4' : showTimeline ? 'pl-16 lg:pl-24' : 'lg:pl-8'}`}>
            {/* Timeline line segment (only in timeline mode, non-accommodation) */}
            {showTimeline && !isAccommodation && (
                <div className="absolute left-[24px] lg:left-[36px] top-0 bottom-0 w-0.5 bg-gray-200 z-0" />
            )}
            {/* Old desktop-only timeline (non-timeline mode) */}
            {!showTimeline && !isAccommodation && !isCompact && (<> <div className="hidden lg:block absolute left-3 top-8 bottom-0 w-0.5 bg-gray-100"></div> <div className="hidden lg:block absolute left-[5px] top-8 w-4 h-4 rounded-full border-4 border-white bg-teal-100 shadow-sm z-10"></div> </>)}
            {/* Slot header — only when NOT in timeline mode (timeline labels rendered by CanvasView) */}
            {!showTimeline && (
                <div className="mb-2 flex items-center justify-between transition-all opacity-100">
                    <div className="flex items-center gap-2">
                        <h3 className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${currentStyle.color}`}> {icon} {title} </h3>
                        {!isAccommodation && <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{currentStyle.time}</span>}
                        {capacityStatus === 'busy' && (
                            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-yellow-50 text-yellow-600 text-[10px] font-bold border border-yellow-100 uppercase animate-pulse">
                                <Clock size={10} /> {t.statusBusy}
                            </span>
                        )}
                        {capacityStatus === 'overload' && (
                            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-bold border border-red-100 uppercase">
                                <AlertTriangle size={10} /> {t.statusOverload}
                            </span>
                        )}
                    </div>
                </div>
            )}

            <div onDragOver={onDragOver} onDrop={(e) => onDrop(e)} className={`transition-all duration-300 rounded-xl ${isCompact ? 'min-h-[40px] border-2 border-dashed p-3 flex flex-col space-y-2' : showTimeline ? 'min-h-[80px] border-2 border-dashed py-3 pr-3 flex flex-col space-y-2' : 'min-h-[80px] border-2 border-dashed px-0 md:p-3 flex flex-col space-y-2'} ${items.length === 0 && !isCompact ? (isAccommodation ? 'border-indigo-200 bg-indigo-50/20' : 'border-teal-200 bg-teal-50/20') : 'border-transparent'} ${isDraggingGlobal && items.length === 0 ? 'border-teal-400 bg-teal-50 scale-[1.02] shadow-sm' : ''}`}>
                {items.length === 0 && (
                    <div className={`w-full h-full flex flex-col items-center justify-center text-sm transition-colors transition-all py-2 px-2 gap-2 ${isDraggingGlobal ? 'text-teal-600 font-bold' : 'text-gray-300'} ${isCompact ? 'min-h-[40px]' : 'py-4'}`}>
                        {isDraggingGlobal ? t.dropToAdd : (isAccommodation ? t.dragAccommodation : t.emptySlot)}
                        {!isDraggingGlobal && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    console.log("Quick Fill Clicked", slot, !!onQuickFill);
                                    if (onQuickFill) onQuickFill(slot);
                                }}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-colors animate-in fade-in zoom-in duration-300
                                    ${isAccommodation ? 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100' : 'bg-teal-50 text-teal-600 hover:bg-teal-100'}
                                    ${isCompact ? 'scale-90' : ''}
                                `}
                            >
                                <Sparkles size={12} />
                                {t.quickFill}
                            </button>
                        )}
                    </div>
                )}
                {previousItem && items.length > 0 && !isCompact && (() => {
                    const suggestion = getTransportSuggestion(previousItem, items[0], t);
                    return (
                        <TransportSelector
                            mode={suggestion.mode}
                            label={suggestion.label}
                            onClick={(e) => handleCrossSlotTransportClick(e, items[0].arrivalTransport)}
                            title={t.transport}
                        />
                    );
                })()}
                {items.map((item, idx) => {
                    const prevItemInSlot = idx > 0 ? items[idx - 1] : null;

                    // Conflict Detection
                    let hasConflict = false;
                    if (prevItemInSlot && prevItemInSlot.startTime && item.startTime) {
                        const prevEnd = addMinutes(prevItemInSlot.startTime, parseDuration(prevItemInSlot.duration));
                        if (item.startTime < prevEnd) {
                            hasConflict = true;
                        }
                    }

                    return (
                        <React.Fragment key={item.instanceId}>
                            {prevItemInSlot && (() => {
                                const suggestion = getTransportSuggestion(prevItemInSlot, item, t);
                                return (
                                    <TransportSelector
                                        mode={suggestion.mode}
                                        label={suggestion.label}
                                        onClick={(e) => handleTransportClick(e, idx, item.arrivalTransport)}
                                        title={t.transport}
                                    />
                                );
                            })()}
                            <ScheduleItemCard
                                item={item}
                                slot={slot}
                                index={idx}
                                t={t}
                                lang={lang}
                                planRegion={planRegion}
                                isCompact={isCompact}
                                showTimeline={showTimeline}
                                onItemClick={onItemClick}
                                onUpdateItem={onUpdateItem}
                                onRemoveItem={onDelete}
                                onMoveItem={onMoveItem}
                                onUnlockItem={onUnlockItem}
                                onDragStart={onDragStart}
                                suggestedTime={getSuggestedTime(idx)}
                                hasConflict={hasConflict}
                                startIndex={startIndex}
                            />
                        </React.Fragment>
                    );
                })}
                {items.length > 0 ? (
                    /* Timeline Node Style (Subtle Add for Populated Lists) */
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddItem?.();
                        }}
                        className="w-full flex flex-col items-center justify-center group mt-0 relative py-1"
                    >
                        {/* Connecting Line */}
                        <div className={`w-0.5 h-4 bg-gray-200 lg:hidden transition-colors group-hover:bg-teal-300`} />

                        {/* Node Button with Text */}
                        <div className={`
                            flex items-center justify-center gap-1
                            px-3 py-1.5 rounded-full 
                            bg-white border text-gray-400 border-gray-200 
                            shadow-sm transition-all 
                            group-hover:scale-110 group-hover:border-teal-400 group-hover:text-teal-600 group-active:scale-95
                            lg:w-auto lg:h-auto lg:px-4 lg:py-2 lg:rounded-lg lg:border-dashed lg:border-gray-300 lg:bg-transparent lg:shadow-none lg:text-sm lg:gap-2
                        `}>
                            <Plus size={12} className="lg:w-4 lg:h-4" />
                            <span className="text-[10px] font-bold lg:text-sm">{t.addLabel}</span>
                        </div>
                    </button>
                ) : (
                    /* Large Placeholder Style (Empty State) */
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddItem?.();
                        }}
                        className={`w-full py-4 border-2 border-dashed rounded-xl transition-all flex flex-col items-center justify-center gap-2 text-sm mt-2 group 
                            animate-pulse bg-gray-50 border-gray-300 text-gray-400 hover:text-teal-600 hover:border-teal-400 hover:bg-teal-50
                        `}
                    >
                        <div className="flex items-center gap-2">
                            <Plus size={20} className="group-hover:scale-110 transition-transform text-teal-500" />
                            <span className="font-bold">{t.addItemsPlaceholder}</span>
                        </div>
                        <span className="text-xs font-normal opacity-70 hidden lg:inline">{t.dragFromSidebar}</span>
                    </button>
                )}
            </div>
        </div >
    );
};

export default DropZone;
