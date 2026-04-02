import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Trash2, Clock, StickyNote as NoteIcon, GripVertical, Coffee, Moon, Sun, BedDouble, Plus, Car, Bus, Train, PersonStanding as Walk, ChevronsUpDown, Star, Tag, MoveRight, MoveLeft, MapPin, MoreVertical, Lock, Banknote, Sunset, AlertTriangle } from 'lucide-react';
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
import { useConfirm, useIsMobile } from '../hooks';

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
    showTimeline?: boolean;
    isDayEmpty?: boolean;
}

const DropZone: React.FC<DropZoneProps> = ({
    slot, items, label, onDrop, onRemoveItem, onUpdateItem, onMoveItem, onUnlockItem, onItemClick, onAddItem, t, previousItem, lang, onDragStart, planRegion, isCompact = false, startIndex = 0, showTimeline = false, isDayEmpty = false
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
    const isMobile = useIsMobile();

    return (
        <div className={`relative transition-all duration-300 overflow-hidden ${isAccommodation ? 'mt-4' : showTimeline ? 'pl-16 lg:pl-24' : 'lg:pl-8'}`}>
            {/* Timeline line segment (only in timeline mode, non-accommodation) */}
            {showTimeline && !isAccommodation && !isDayEmpty && (
                <div className="absolute left-[24px] lg:left-[36px] top-0 bottom-0 w-0.5 bg-gray-200 z-0" />
            )}
            {/* Old desktop-only timeline (non-timeline mode) */}
            {!showTimeline && !isAccommodation && !isCompact && (<> <div className="hidden lg:block absolute left-3 top-8 bottom-0 w-0.5 bg-gray-100"></div> <div className="hidden lg:block absolute left-[5px] top-8 w-4 h-4 rounded-full border-4 border-white bg-teal-100 shadow-sm z-10"></div> </>)}
            {/* Slot header — only when NOT in timeline mode (timeline labels rendered by CanvasView) */}
            {!showTimeline && slot !== 'unsorted' && (
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

            <div onDragOver={onDragOver} onDrop={(e) => onDrop(e)} className={`transition-all duration-300 rounded-xl ${isCompact ? 'min-h-[40px] border-2 border-dashed p-3 flex flex-col space-y-2' : showTimeline ? 'min-h-[12px] flex flex-col space-y-2' : slot === 'unsorted' ? '' : 'min-h-[12px] px-0 md:p-3 flex flex-col space-y-2'} ${isDraggingGlobal && items.length === 0 ? 'border-2 border-teal-400 bg-teal-50 scale-[1.02] shadow-sm' : ''}`}>
                {items.length === 0 && (
                    <div className={`w-full h-full flex flex-col items-center justify-center text-sm transition-colors transition-all py-1 px-2 gap-2 opacity-0 ${isDraggingGlobal ? 'text-teal-600 font-bold opacity-100 min-h-[40px] border-2 border-dashed border-teal-200' : 'text-gray-300'}`}>
                        {isDraggingGlobal ? t.dropToAdd : null}
                    </div>
                )}

                {slot === 'unsorted' ? (
                    <div 
                        className="grid grid-flow-col grid-rows-2 auto-cols-[minmax(160px,1fr)] gap-3 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:grid-flow-row md:grid-rows-none md:grid-cols-2 md:auto-cols-auto md:overflow-x-visible md:snap-none md:pb-0" 
                        onDragOver={onDragOver} 
                        onDrop={(e) => onDrop(e)}
                    >
                        {items.map((item, idx) => (
                            <div
                                key={item.instanceId}
                                draggable={!isMobile}
                                onDragStart={(e) => onDragStart ? onDragStart(e, item, 'canvas', slot, idx) : null}
                                onClick={() => onItemClick ? onItemClick(item) : null}
                                className="group relative flex flex-col bg-white rounded-[24px] shadow-sm hover:shadow-xl cursor-grab active:cursor-grabbing overflow-hidden transition-all hover:-translate-y-1 touch-none select-none border border-gray-100 h-full min-h-[160px] snap-start"
                            >
                                {/* Top Image Section (Uber style) - Resized to h-28 */}
                                <div className="relative h-28 overflow-hidden">
                                    {(item.image && (item.image.startsWith('http') || item.image.startsWith('/') || item.image.startsWith('data:'))) ? (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <img
                                            src={`https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80`}
                                            alt={item.title}
                                            className="w-full h-full object-cover opacity-90"
                                        />
                                    )}

                                    {/* Uber-style RED PILL TAG (Top-Left) - Wider spacing & Pill shape */}
                                    {planRegion && item.region && item.region !== 'all' && item.region !== planRegion && (
                                        <div className="absolute top-2 left-2 z-20">
                                            <div className="bg-[#E21221] text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-md uppercase tracking-widest leading-none flex items-center justify-center">
                                                {lang === 'zh' ? '跨地區' : 'Cross-Region'}
                                            </div>
                                        </div>
                                    )}

                                    {/* Delete Button (Minimal Circle) */}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); onDelete(idx); }}
                                        className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-center text-gray-400 hover:text-red-500 transition-all border border-gray-100"
                                    >
                                        <span className="text-[12px]">✕</span>
                                    </button>
                                </div>

                                {/* Bottom Info Section (Uber Eats Inspired) - Compact */}
                                <div className="px-3 py-2.5 flex flex-col items-start text-left">
                                    <h4 className="font-bold text-gray-900 text-[14px] leading-tight mb-0.5 line-clamp-1 w-full">
                                        {lang === 'zh' ? item.title : (item.titleEn || item.title)}
                                    </h4>

                                    {/* Minimalist Action - Directly below Title */}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); onMoveItem(idx); }}
                                        className="text-teal-600 font-bold text-[12px] flex items-center gap-1 hover:text-teal-700 transition-colors py-0 group/btn"
                                    >
                                        <span className="text-teal-500 text-sm group-hover/btn:translate-x-0.5 transition-transform">↗</span>
                                        {lang === 'zh' ? '排入行程' : 'Schedule'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
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
                    </>
                )}

                {/* Quick Add Button for Anchor Blocks (Only Accommodation when empty) */}
                {isAccommodation && items.length === 0 && onAddItem && (
                    <button
                        onClick={onAddItem}
                        className={`w-full py-3 mt-1 rounded-xl border border-dashed text-sm font-bold flex items-center justify-center gap-2 transition-colors duration-200
                            ${isAccommodation
                                ? 'border-indigo-200 text-indigo-500 bg-white/50 hover:bg-indigo-50 shadow-sm hover:border-indigo-400'
                                : 'border-gray-200 text-gray-500 bg-gray-50/50 hover:bg-white hover:border-gray-300 hover:shadow-sm'
                            }`}
                    >
                        <Plus size={16} strokeWidth={2.5} />
                        {isAccommodation
                            ? (lang === 'zh' ? '新增住宿' : 'Add Accommodation')
                            : (lang === 'zh' ? '新增行程項目' : 'Add Item')
                        }
                    </button>
                )}
            </div>
        </div >
    );
};

export default DropZone;
