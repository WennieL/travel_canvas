import React from 'react';
import { Trash2, Clock, StickyNote as NoteIcon, GripVertical, Coffee, Moon, Sun, BedDouble, Plus, Car, Bus, Train, PersonStanding as Walk, ChevronsUpDown, Star, Tag, MoveRight, Sparkles, MoveLeft, MapPin } from 'lucide-react';
import {
    TimeSlot,
    ScheduleItem,
    TravelItem,
    TransportMode
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
import SmartTimeInput from './SmartTimeInput';

interface DropZoneProps {
    slot: TimeSlot;
    items: ScheduleItem[];
    title: string;
    icon: React.ReactNode;
    isAccommodation?: boolean;
    previousItem?: ScheduleItem;
    isDraggingGlobal: boolean;
    onDragOver: (e: React.DragEvent) => void;
    onDrop: (e: React.DragEvent, slot: TimeSlot) => void;
    onDragStart: (e: React.DragEvent, item: TravelItem, source: 'sidebar' | 'canvas', slot?: TimeSlot, index?: number) => void;
    onDelete: (slot: TimeSlot, index: number) => void;
    onTimeChange: (slot: TimeSlot, index: number, newTime: string) => void;
    onNoteChange: (slot: TimeSlot, index: number, newNote: string) => void;
    onTransportChange: (slot: TimeSlot, index: number, mode: TransportMode) => void;
    onItemClick: (item: ScheduleItem) => void;
    t: any;
    onAddItem: (slot: TimeSlot) => void;
    onMoveItem: (slot: TimeSlot, index: number) => void;
    onQuickFill: (slot: TimeSlot) => void;
    lang: 'zh' | 'en';
    sampleAssets: TravelItem[];
}

const DropZone: React.FC<DropZoneProps> = ({
    slot, items, title, icon, isAccommodation = false, previousItem, isDraggingGlobal,
    onDragOver, onDrop, onDragStart, onDelete, onTimeChange, onNoteChange, onTransportChange, onItemClick, t, onAddItem, onMoveItem, onQuickFill, lang, sampleAssets
}) => {
    const isCompact = false; // Always expanded to show Add button
    const nextModeMap: Record<TransportMode, TransportMode> = { 'car': 'public', 'public': 'walk', 'walk': 'car' };
    const handleTransportClick = (e: React.MouseEvent, index: number, currentMode: TransportMode = 'car') => { e.stopPropagation(); const nextMode = nextModeMap[currentMode]; onTransportChange(slot, index, nextMode); };
    const handleCrossSlotTransportClick = (e: React.MouseEvent, currentMode: TransportMode = 'car') => { e.stopPropagation(); const nextMode = nextModeMap[currentMode]; onTransportChange(slot, 0, nextMode); };

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

    return (
        <div className={`relative transition-all duration-300 ${isAccommodation ? 'mt-4' : 'pl-8'}`}>
            {!isAccommodation && !isCompact && (<> <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-100"></div> <div className="absolute left-[5px] top-8 w-4 h-4 rounded-full border-4 border-white bg-teal-100 shadow-sm z-10"></div> </>)}
            <div className={`mb-2 flex items-center transition-all ${isCompact ? 'opacity-40 hover:opacity-100' : 'opacity-100'}`}> <h3 className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${isAccommodation ? 'text-indigo-600' : 'text-gray-500'}`}> {icon} {title} </h3> {isCompact && <div className="h-[1px] flex-1 bg-gray-200 ml-3"></div>} </div>
            <div onDragOver={onDragOver} onDrop={(e) => onDrop(e, slot)} className={`transition-all duration-300 rounded-xl ${isCompact ? 'h-2 hover:h-12 border-2 border-transparent hover:border-dashed hover:border-gray-300 overflow-hidden' : 'min-h-[80px] border-2 border-dashed p-3 flex flex-col space-y-2'} ${items.length === 0 && !isCompact ? (isAccommodation ? 'border-indigo-200 bg-indigo-50/20' : 'border-teal-200 bg-teal-50/20') : 'border-transparent'} ${isDraggingGlobal && items.length === 0 ? 'border-teal-400 bg-teal-50 scale-[1.02] shadow-sm' : ''}`}>
                {items.length === 0 && !isCompact && (
                    <div className={`w-full h-full flex flex-col items-center justify-center text-sm transition-colors py-4 px-2 gap-2 ${isDraggingGlobal ? 'text-teal-600 font-bold' : 'text-gray-300'}`}>
                        {isDraggingGlobal ? t.dropToAdd : (isAccommodation ? t.dragAccommodation : (t.emptySlot || "Start your adventure!"))}
                        {!isDraggingGlobal && !isAccommodation && (
                            <button
                                onClick={(e) => { e.stopPropagation(); onQuickFill(slot); }}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-teal-50 text-teal-600 rounded-full text-xs font-bold hover:bg-teal-100 transition-colors animate-in fade-in zoom-in duration-300"
                            >
                                <Sparkles size={12} />
                                {t.quickFill || "Quick Fill"}
                            </button>
                        )}
                    </div>
                )}
                {previousItem && items.length > 0 && !isCompact && (() => { const suggestion = getTransportSuggestion(previousItem, items[0]); return (<div className="flex items-center gap-2 pl-4 py-1.5 w-fit" onClick={(e) => handleCrossSlotTransportClick(e, items[0].arrivalTransport)} title={t.transport}> <div className="h-3 w-0.5 bg-gray-200"></div> <div className="flex items-center gap-1.5 bg-teal-50 hover:bg-teal-100 border border-teal-200 hover:border-teal-300 rounded-full px-3 py-1 cursor-pointer transition-all group/transport"> <span className="text-teal-500 group-hover/transport:text-teal-600"> {getTransportIcon(suggestion.mode)} </span> <span className="text-[10px] text-teal-700 font-medium"> {suggestion.label} </span> <ChevronsUpDown size={10} className="text-teal-300 group-hover/transport:text-teal-400" /> </div> </div>); })()}
                {items.map((item, idx) => {
                    const prevItemInSlot = idx > 0 ? items[idx - 1] : null;

                    // Conflict Detection
                    let hasConflict = false;
                    if (prevItemInSlot && prevItemInSlot.startTime && item.startTime) {
                        const prevEnd = addMinutes(prevItemInSlot.startTime, parseDuration(prevItemInSlot.duration));
                        // Simple string comparison for time (HH:MM) works for same day if standard 24h format
                        // But crossing midnight might be tricky. Assuming valid 24h string.
                        if (item.startTime < prevEnd) {
                            hasConflict = true;
                        }
                    }

                    // Dynamic Title Lookup for Localization
                    // Try to find the original asset to get the translated title if available
                    // Fallback to item.title which might be stale (saved in original language)
                    const originalAsset = sampleAssets.find(a => a.id === item.id);
                    const displayTitle = (lang === 'en' && originalAsset?.titleEn) ? originalAsset.titleEn :
                        (lang === 'zh' && originalAsset?.title) ? originalAsset.title :
                            (lang === 'en' && item.titleEn) ? item.titleEn : item.title;

                    return (
                        <React.Fragment key={item.instanceId}>
                            {prevItemInSlot && (() => { const suggestion = getTransportSuggestion(prevItemInSlot, item); return (<div className="flex items-center gap-2 pl-4 py-1.5 w-fit" onClick={(e) => handleTransportClick(e, idx, item.arrivalTransport)} title={t.transport}> <div className="h-3 w-0.5 bg-gray-200"></div> <div className="flex items-center gap-1.5 bg-teal-50 hover:bg-teal-100 border border-teal-200 hover:border-teal-300 rounded-full px-3 py-1 cursor-pointer transition-all group/transport"> <span className="text-teal-500 group-hover/transport:text-teal-600"> {getTransportIcon(suggestion.mode)} </span> <span className="text-[10px] text-teal-700 font-medium"> {suggestion.label} </span> <ChevronsUpDown size={10} className="text-teal-300 group-hover/transport:text-teal-400" /> </div> </div>); })()}
                            <div draggable onDragStart={(e) => onDragStart(e, item, 'canvas', slot, idx)} onClick={() => onItemClick(item)} style={{ touchAction: 'pan-y' }} className={`group relative bg-white border rounded-lg p-3 shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing w-full flex items-start gap-3 transition-all hover:-translate-y-0.5 ${hasConflict ? 'border-red-300 ring-1 ring-red-100' : 'border-gray-100 hover:border-teal-300'}`}>
                                <div className="absolute -top-2 -right-2 flex gap-1 transition-all z-20 opacity-0 group-hover:opacity-100">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onItemClick(item);
                                        }}
                                        className="bg-white text-gray-400 hover:text-green-500 p-1 rounded-full shadow border border-gray-100"
                                        title={t.viewDetails || "View Details"}
                                    >
                                        <MapPin size={12} />
                                    </button>
                                    <button onClick={(e) => { e.stopPropagation(); onMoveItem(slot, idx); }} className="bg-white text-gray-400 hover:text-blue-500 p-1 rounded-full shadow border border-gray-100" title={t.moveToDay || "Move to Day"}> <MoveRight size={12} /> </button>
                                    <button onClick={(e) => { e.stopPropagation(); onDelete(slot, idx); }} className="bg-white text-gray-400 hover:text-red-500 p-1 rounded-full shadow border border-gray-100"> <Trash2 size={12} /> </button>
                                </div>
                                <div className="text-gray-300 cursor-grab flex-shrink-0 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity"> <GripVertical size={16} /> </div>
                                <div className="flex-shrink-0 text-2xl bg-gray-50 w-10 h-10 flex items-center justify-center rounded-md"> {item.image || getFallbackImage(item.type)} </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-0.5"> <h4 className="font-bold text-gray-700 text-sm truncate pr-2">{displayTitle}</h4> <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded whitespace-nowrap"> ¥{item.price?.toLocaleString()} </span> </div>
                                    <div className="flex items-center gap-2 mb-1.5 flex-wrap"> <div className="flex items-center gap-1 text-[10px] text-gray-400 bg-gray-50 px-1.5 rounded"> <Clock size={10} /> {item.duration || t.flexible} </div> {item.rating && (<div className="flex items-center gap-0.5 text-[10px] text-yellow-600"> <Star size={8} fill="currentColor" /> {item.rating} </div>)} {item.tags && item.tags.slice(0, 1).map(tag => (<div key={tag} className="flex items-center gap-0.5 text-[10px] text-teal-600 bg-teal-50 px-1.5 rounded"> <Tag size={8} /> {tag} </div>))} </div>
                                    <input type="text" placeholder={t.addNote} value={item.notes || ''} onClick={(e) => e.stopPropagation()} onChange={(e) => onNoteChange(slot, idx, e.target.value)} className="w-full text-[11px] bg-transparent border-none focus:ring-0 p-0 text-gray-500 placeholder-gray-300 focus:placeholder-gray-400" />
                                </div>
                                {/* Fixed index prop here */}
                                <div className="flex flex-col items-end gap-1">
                                    <SmartTimeInput
                                        slot={slot}
                                        index={idx}
                                        value={item.startTime || ''}
                                        onChange={(val) => onTimeChange(slot, idx, val)}
                                        suggestedTime={getSuggestedTime(idx)}
                                    />
                                    {hasConflict && (
                                        <span className="text-[10px] text-red-500 bg-red-50 px-1.5 py-0.5 rounded font-bold animate-pulse">
                                            ⚠️ 時間衝突
                                        </span>
                                    )}
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onAddItem(slot);
                    }}
                    className={`w-full py-2 border rounded-lg transition-all flex items-center justify-center gap-2 text-sm mt-2 group 
                        ${items.length === 0 ? 'animate-pulse bg-gray-50 border-dashed border-gray-300' : 'border-dashed border-gray-300 text-gray-400 hover:text-teal-600 hover:border-teal-400 hover:bg-teal-50'}
                    `}
                >
                    {/* Mobile: Solid Add Button style (only if items > 0 or consistent?) - actually keep consistent structure but change text/icon */}
                    {/* Wait, design req: Mobile = Add Item. Desktop = Visual Cue. */}

                    <div className="lg:hidden flex items-center gap-2">
                        <Plus size={16} className={`group-hover:scale-110 transition-transform ${items.length === 0 ? 'text-teal-500' : ''}`} />
                        {items.length === 0 ? ("+ Add items...") : (t.addItem || "Add Item")}
                    </div>

                    <div className="hidden lg:flex items-center gap-2 text-gray-400 group-hover:text-teal-600">
                        <MoveLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span>{t.dragFromSidebar || "Drag items from sidebar"}</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default DropZone;
