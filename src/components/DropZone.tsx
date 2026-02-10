import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Trash2, Clock, StickyNote as NoteIcon, GripVertical, Coffee, Moon, Sun, BedDouble, Plus, Car, Bus, Train, PersonStanding as Walk, ChevronsUpDown, Star, Tag, MoveRight, Sparkles, MoveLeft, MapPin, MoreVertical, Lock, Banknote } from 'lucide-react';
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
import SmartTimeInput from './SmartTimeInput';
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
    onItemClick: (item: ScheduleItem) => void; // New prop
    onAddItem?: () => void;
    t: any;
    previousItem?: ScheduleItem | null;
    lang: string;
    onDragStart: (e: React.DragEvent, item: TravelItem, source: 'sidebar' | 'canvas', slot?: TimeSlot, index?: number) => void;
    planRegion?: Region; // Scheme B: For visual cues
    isCompact?: boolean; // Scheme B: Split view compact mode
    startIndex?: number; // For global sequential numbering (1-n)
    onQuickFill?: (slot: TimeSlot) => void;
}

const DropZone: React.FC<DropZoneProps> = ({
    slot, items, label, onDrop, onRemoveItem, onUpdateItem, onMoveItem, onUnlockItem, onItemClick, onAddItem, onQuickFill, t, previousItem, lang, onDragStart, planRegion, isCompact = false, startIndex = 0
}) => {
    const { confirm } = useConfirm();
    // const isCompact = false; // Removed hardcoded
    const isDraggingGlobal = false; // Simplified
    const onDragOver = (e: React.DragEvent) => { e.preventDefault(); };
    // Removed unused sampleAssets and hardcoded lang
    // Removed shadowed onAddItem
    // Passed from parent
    const onDelete = (s: TimeSlot, i: number) => onRemoveItem(i);
    const onTimeChange = (s: TimeSlot, i: number, v: string) => onUpdateItem(i, { startTime: v });
    const onNoteChange = (s: TimeSlot, i: number, v: string) => onUpdateItem(i, { notes: v });
    const onTransportChange = (s: TimeSlot, i: number, m: TransportMode) => onUpdateItem(i, { arrivalTransport: m });
    const [editingNoteId, setEditingNoteId] = React.useState<string | null>(null);
    const [editingPriceId, setEditingPriceId] = React.useState<string | null>(null);
    const [openMenuId, setOpenMenuId] = React.useState<string | null>(null);
    const [menuPosition, setMenuPosition] = useState<{ top: number, left: number } | null>(null);
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

    // Derived UI Variables
    const isAccommodation = slot === 'accommodation';
    const title = label;
    const icon = isAccommodation ? <BedDouble size={16} /> :
        slot === 'morning' ? <Sun size={16} /> :
            slot === 'afternoon' ? <Coffee size={16} /> :
                slot === 'evening' ? <Sun size={16} /> : // Sunset/Evening logic could be refined
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

    return (
        <div className={`relative transition-all duration-300 overflow-hidden ${isAccommodation ? 'mt-4' : 'lg:pl-8'}`}>
            {!isAccommodation && !isCompact && (<> <div className="hidden lg:block absolute left-3 top-8 bottom-0 w-0.5 bg-gray-100"></div> <div className="hidden lg:block absolute left-[5px] top-8 w-4 h-4 rounded-full border-4 border-white bg-teal-100 shadow-sm z-10"></div> </>)}
            <div className="mb-2 flex items-center justify-between transition-all opacity-100">
                <div className="flex items-center gap-2">
                    <h3 className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${currentStyle.color}`}> {icon} {title} </h3>
                    {!isAccommodation && <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{currentStyle.time}</span>}
                </div>
            </div>
            <div onDragOver={onDragOver} onDrop={(e) => onDrop(e)} className={`transition-all duration-300 rounded-xl ${isCompact ? 'min-h-[40px] border-2 border-dashed p-3 flex flex-col space-y-2' : 'min-h-[80px] border-2 border-dashed px-0 md:p-3 flex flex-col space-y-2'} ${items.length === 0 && !isCompact ? (isAccommodation ? 'border-indigo-200 bg-indigo-50/20' : 'border-teal-200 bg-teal-50/20') : 'border-transparent'} ${isDraggingGlobal && items.length === 0 ? 'border-teal-400 bg-teal-50 scale-[1.02] shadow-sm' : ''}`}>
                {items.length === 0 && !isCompact && (
                    <div className={`w-full h-full flex flex-col items-center justify-center text-sm transition-colors py-4 px-2 gap-2 ${isDraggingGlobal ? 'text-teal-600 font-bold' : 'text-gray-300'}`}>
                        {isDraggingGlobal ? t.dropToAdd : (isAccommodation ? t.dragAccommodation : (t.emptySlot || "Start your adventure!"))}
                        {!isDraggingGlobal && !isAccommodation && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    console.log("Quick Fill Clicked", slot, !!onQuickFill);
                                    if (onQuickFill) onQuickFill(slot);
                                }}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-teal-50 text-teal-600 rounded-full text-xs font-bold hover:bg-teal-100 transition-colors animate-in fade-in zoom-in duration-300"
                            >
                                <Sparkles size={12} />
                                {t.quickFill || "Quick Fill"}
                            </button>
                        )}
                    </div>
                )}
                {previousItem && items.length > 0 && !isCompact && (() => { const suggestion = getTransportSuggestion(previousItem, items[0]); return (<div className="relative w-full flex items-center lg:pl-4 py-2" onClick={(e) => handleCrossSlotTransportClick(e, items[0].arrivalTransport)} title={t.transport}> <div className="hidden lg:block h-3 w-0.5 bg-gray-200"></div> <div className="flex items-center gap-1.5 bg-teal-50 hover:bg-teal-100 border border-teal-200 hover:border-teal-300 rounded-full px-3 py-1 cursor-pointer transition-all group/transport"> <span className="text-teal-500 group-hover/transport:text-teal-600"> {getTransportIcon(suggestion.mode)} </span> <span className="text-[10px] text-teal-700 font-medium"> {suggestion.label} </span> <ChevronsUpDown size={10} className="text-teal-300 group-hover/transport:text-teal-400" /> </div> <div className="lg:hidden absolute left-1/2 -translate-x-1/2 h-6 w-0.5 bg-gray-200"></div> </div>); })()}
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
                    const isLocked = item.isLocked;

                    const displayTitleRaw = isLocked
                        ? (lang === 'en' && item.marketingTitleEn ? item.marketingTitleEn : item.marketingTitle)
                        : (lang === 'en' && item.titleEn ? item.titleEn : item.title);

                    const displayTitle = displayTitleRaw || (isLocked ? "🔒 Secret Location" : item.title);

                    return (
                        <React.Fragment key={item.instanceId}>
                            {prevItemInSlot && (() => { const suggestion = getTransportSuggestion(prevItemInSlot, item); return (<div className="relative w-full flex items-center lg:pl-4 py-2" onClick={(e) => handleCrossSlotTransportClick(e, items[0].arrivalTransport)} title={t.transport}> <div className="hidden lg:block h-3 w-0.5 bg-gray-200"></div> <div className="flex items-center gap-1.5 bg-teal-50 hover:bg-teal-100 border border-teal-200 hover:border-teal-300 rounded-full px-3 py-1 cursor-pointer transition-all group/transport"> <span className="text-teal-500 group-hover/transport:text-teal-600"> {getTransportIcon(suggestion.mode)} </span> <span className="text-[10px] text-teal-700 font-medium"> {suggestion.label} </span> <ChevronsUpDown size={10} className="text-teal-300 group-hover/transport:text-teal-400" /> </div> <div className="lg:hidden absolute left-1/2 -translate-x-1/2 h-6 w-0.5 bg-gray-200"></div> </div>); })()}
                            <div
                                draggable
                                onDragStart={(e) => onDragStart(e, item, 'canvas', slot, idx)}
                                onClick={() => onItemClick(item)}
                                id={`item-${item.instanceId}`} // For scroll targeting
                                style={{}}
                                className={`group relative border rounded-lg shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing w-full min-w-0 flex items-center transition-all hover:-translate-y-0.5 animate-land overflow-hidden
                                        ${isCompact ? 'p-3 gap-3 items-center' : 'p-4 items-center gap-2.5 md:gap-3'}
                                        ${hasConflict ? 'border-red-300 ring-1 ring-red-100' :
                                        (item.region && planRegion && item.region !== 'all' && planRegion !== 'all' && item.region !== planRegion) ? 'bg-amber-50 border-amber-200' :
                                            isLocked ? 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200 hover:border-amber-300' :
                                                'bg-white border-gray-100 hover:border-teal-300'}
                                        ${openMenuId === item.instanceId ? 'z-50' : ''}
                                    `}
                            >

                                {/* Scheme B: Synchronized Badge (Only in Compact Mode or if requested) */}
                                {isCompact && (
                                    <div className={`hidden lg:flex flex-shrink-0 w-5 h-5 rounded-full items-center justify-center text-white text-[10px] font-bold shadow-sm ${currentStyle.color.replace('text-', 'bg-').replace('900', '600')}`}>
                                        {startIndex + idx + 1}
                                    </div>
                                )}

                                {/* Desktop Hover Actions - Visible >= 1024px */}
                                <div className="hidden lg:flex absolute top-2 right-2 gap-1 transition-all z-20 opacity-0 group-hover:opacity-100">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setEditingPriceId(item.instanceId);
                                        }}
                                        className="bg-white text-gray-400 hover:text-teal-500 p-1 rounded-full shadow border border-gray-100"
                                        title={t.setBudget || "Set Budget"}
                                    >
                                        <Banknote size={12} />
                                    </button>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setEditingNoteId(item.instanceId);
                                        }}
                                        className="bg-white text-gray-400 hover:text-amber-500 p-1 rounded-full shadow border border-gray-100"
                                        title={t.addNote || "Add Note"}
                                    >
                                        <NoteIcon size={12} />
                                    </button>
                                    <button onClick={(e) => { e.stopPropagation(); onMoveItem(idx); }} className="bg-white text-gray-400 hover:text-blue-500 p-1 rounded-full shadow border border-gray-100" title={t.moveToDay || "Move to Day"}> <MoveRight size={12} /> </button>
                                    <button onClick={(e) => { e.stopPropagation(); onDelete(slot, idx); }} className="bg-white text-gray-400 hover:text-red-500 p-1 rounded-full shadow border border-gray-100"> <Trash2 size={12} /> </button>
                                </div>
                                <div className="hidden md:block text-gray-300 cursor-grab flex-shrink-0 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity"> <GripVertical size={16} /> </div>

                                <div className={`relative flex-shrink-0 bg-gray-50 flex items-center justify-center rounded-md overflow-hidden w-10 h-10 text-2xl`}>
                                    {isLocked && (
                                        <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                                            <Lock size={12} className="text-gray-400" />
                                        </div>
                                    )}
                                    {item.image || getFallbackImage(item.type)}
                                </div>
                                <div className="flex-1 min-w-0 mr-2">
                                    <div className="flex items-center justify-between mb-1 min-w-0">
                                        <div className="flex items-center gap-2 overflow-hidden mr-2 min-w-0 flex-1">
                                            <h4 className={`font-bold text-sm truncate ${isLocked ? 'text-gray-600 italic' : 'text-gray-700'}`}>{displayTitle}</h4>

                                            {/* Rating - Moved next to Title */}
                                            {item.rating && (
                                                <div className="flex items-center gap-0.5 text-[10px] text-yellow-600 font-bold bg-yellow-50 px-1 rounded flex-shrink-0">
                                                    <Star size={8} fill="currentColor" /> {item.rating}
                                                </div>
                                            )}
                                            {/* Scheme B: Visual Tag for Cross-Region */}
                                            {item.region && planRegion && item.region !== 'all' && planRegion !== 'all' && item.region !== planRegion && (
                                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 font-bold tracking-wider uppercase border border-gray-200 flex-shrink-0">
                                                    {t[item.region] || item.region}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Metadata Row: Time, Duration, Price, Rating */}
                                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                                        {/* Time Input - Moved Here */}
                                        <SmartTimeInput
                                            slot={slot}
                                            index={idx}
                                            value={item.startTime || ''}
                                            onChange={(val) => onTimeChange(slot, idx, val)}
                                            suggestedTime={getSuggestedTime(idx)}
                                        />

                                        {/* Duration Badge */}
                                        <div className="flex items-center gap-1 text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200">
                                            <Clock size={10} />
                                            {item.duration || t.flexible}
                                        </div>

                                        {/* Price Badge - Only valid price or locked */}
                                        {/* Price Badge - Only valid price or locked or edit mode */}
                                        {(isLocked || (item.price !== undefined && item.price > 0) || editingPriceId === item.instanceId) && (
                                            isLocked ? (
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); onUnlockItem?.(item); }}
                                                    className="text-[10px] font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm flex items-center gap-1"
                                                >
                                                    <Lock size={8} /> Unlock
                                                </button>
                                            ) : (
                                                editingPriceId === item.instanceId ? (
                                                    <div className="flex items-center gap-1 bg-white border border-teal-300 rounded px-1 py-0.5 shadow-sm">
                                                        <span className="text-[10px] text-gray-400">¥</span>
                                                        <input
                                                            type="number"
                                                            autoFocus
                                                            className="w-12 text-[10px] font-medium text-gray-700 p-0 border-none focus:ring-0 bg-transparent"
                                                            placeholder="0"
                                                            value={item.price || ''}
                                                            onChange={(e) => {
                                                                const val = parseInt(e.target.value);
                                                                onUpdateItem(idx, { price: isNaN(val) ? 0 : val });
                                                            }}
                                                            onBlur={() => setEditingPriceId(null)}
                                                            onKeyDown={(e) => {
                                                                if (e.key === 'Enter') setEditingPriceId(null);
                                                            }}
                                                            onClick={(e) => e.stopPropagation()}
                                                        />
                                                    </div>
                                                ) : (
                                                    <span
                                                        onClick={(e) => { e.stopPropagation(); setEditingPriceId(item.instanceId); }}
                                                        title={t.setBudget}
                                                        className="text-[10px] font-medium text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded whitespace-nowrap border border-gray-200 cursor-pointer hover:border-teal-300 hover:text-teal-600 transition-colors"
                                                    >
                                                        ¥{item.price?.toLocaleString()}
                                                    </span>
                                                )
                                            )
                                        )}

                                        {/* Tags - Hidden on Mobile */}

                                    </div>

                                    {(item.notes || editingNoteId === item.instanceId) && (
                                        <input
                                            type="text"
                                            placeholder={t.addNote}
                                            value={item.notes || ''}
                                            autoFocus={editingNoteId === item.instanceId}
                                            onBlur={() => setEditingNoteId(null)}
                                            onClick={(e) => e.stopPropagation()}
                                            onChange={(e) => onNoteChange(slot, idx, e.target.value)}
                                            className="w-full text-[11px] bg-transparent border-none focus:ring-0 p-0 text-gray-500 placeholder-gray-300 focus:placeholder-gray-400 animate-in fade-in slide-in-from-top-1 duration-200"
                                        />
                                    )}



                                    {/* Inline Cross-Region Warning */}
                                    {item.region && planRegion && item.region !== 'all' && planRegion !== 'all' && item.region !== planRegion && (
                                        <div className="mt-2 text-[10px] text-amber-700 bg-amber-100/50 px-2 py-1 rounded flex items-center gap-1.5 border border-amber-200/50">
                                            <span className="flex-shrink-0 text-amber-500">⚠️</span>
                                            <span>
                                                {t.crossRegionWarningShort
                                                    ? t.crossRegionWarningShort.replace('{region}', t[item.region] || item.region).replace('{planRegion}', t[planRegion] || planRegion)
                                                    : `This is a ${t[item.region] || item.region} item in a ${t[planRegion] || planRegion} plan.`}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                {/* Fixed Right Column - Only Menu */}
                                <div className="flex flex-col items-end gap-1 flex-shrink-0 pl-1">
                                    <div className="flex items-center gap-1 relative">

                                        {/* Mobile Action Menu (Three Dots) - Integrated in Flex Layout with Portal */}
                                        <div className="lg:hidden touch-device-visible relative">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // Pass the button element to position the portal
                                                    const rect = e.currentTarget.getBoundingClientRect();
                                                    setMenuPosition({ top: rect.bottom + window.scrollY, left: rect.right - 150 + window.scrollX }); // Align right
                                                    setOpenMenuId(openMenuId === item.instanceId ? null : item.instanceId);
                                                }}
                                                className="p-1.5 text-gray-400 hover:text-teal-600 rounded-full active:bg-gray-100"
                                            >
                                                <MoreVertical size={18} />
                                            </button>

                                            {openMenuId === item.instanceId && ReactDOM.createPortal(
                                                <>
                                                    {/* Backdrop to close menu */}
                                                    <div className="fixed inset-0 z-[9998]" onClick={(e) => { e.stopPropagation(); setOpenMenuId(null); }}></div>

                                                    {/* Dropdown Menu - Positioned via Portal */}
                                                    <div
                                                        style={{ top: menuPosition?.top, left: menuPosition?.left }}
                                                        className="absolute w-[150px] bg-white border border-gray-100 shadow-xl rounded-xl p-1.5 flex flex-col gap-1 z-[9999] animate-in fade-in zoom-in-95 duration-200"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setEditingPriceId(item.instanceId);
                                                                setOpenMenuId(null);
                                                            }}
                                                            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-600 rounded-lg w-full text-left"
                                                        >
                                                            <Banknote size={14} />
                                                            {t.setBudget || "Set Budget"}
                                                        </button>
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setEditingNoteId(item.instanceId);
                                                                setOpenMenuId(null);
                                                            }}
                                                            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-amber-50 hover:text-amber-600 rounded-lg w-full text-left"
                                                        >
                                                            <NoteIcon size={14} />
                                                            {t.addNote || "Add Note"}
                                                        </button>
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                onMoveItem(idx);
                                                                setOpenMenuId(null);
                                                            }}
                                                            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg w-full text-left"
                                                        >
                                                            <MoveRight size={14} />
                                                            {t.moveToDay || "Move to Day"}
                                                        </button>
                                                        <button
                                                            onClick={async (e) => {
                                                                e.stopPropagation();
                                                                const confirmed = await confirm({
                                                                    title: lang === 'zh' ? '刪除項目' : 'Delete Item',
                                                                    message: lang === 'zh' ? '確定要刪除此項目嗎？' : 'Are you sure you want to delete this item?',
                                                                    type: 'warning',
                                                                    confirmText: lang === 'zh' ? '刪除' : 'Delete',
                                                                    cancelText: lang === 'zh' ? '取消' : 'Cancel'
                                                                });
                                                                if (confirmed) {
                                                                    onDelete(slot, idx);
                                                                }
                                                                setOpenMenuId(null);
                                                            }}
                                                            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg w-full text-left"
                                                        >
                                                            <Trash2 size={14} />
                                                            {t.delete || "Delete"}
                                                        </button>
                                                    </div>
                                                </>,
                                                document.body
                                            )}
                                        </div>
                                    </div>
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
                        onAddItem?.();
                    }}
                    className={`w-full py-2 border rounded-lg transition-all flex items-center justify-center gap-2 text-sm mt-2 group 
                        ${items.length === 0 ? 'animate-pulse bg-gray-50 border-dashed border-gray-300' : 'border-dashed border-gray-300 text-gray-400 hover:text-teal-600 hover:border-teal-400 hover:bg-teal-50'}
                    `}
                >
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
        </div >
    );
};

export default DropZone;
