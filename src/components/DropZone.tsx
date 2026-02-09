import React from 'react';
import { Trash2, Clock, StickyNote as NoteIcon, GripVertical, Coffee, Moon, Sun, BedDouble, Plus, Car, Bus, Train, PersonStanding as Walk, ChevronsUpDown, Star, Tag, MoveRight, Sparkles, MoveLeft, MapPin, MoreVertical, Lock } from 'lucide-react';
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
}

const DropZone: React.FC<DropZoneProps> = ({
    slot, items, label, onDrop, onRemoveItem, onUpdateItem, onMoveItem, onUnlockItem, onItemClick, onAddItem, t, previousItem, lang, onDragStart, planRegion
}) => {
    const isCompact = false;
    const isDraggingGlobal = false; // Simplified
    const onDragOver = (e: React.DragEvent) => { e.preventDefault(); };
    // Removed unused sampleAssets and hardcoded lang
    // Removed shadowed onAddItem
    const onQuickFill = (s: TimeSlot) => { console.log("Quick fill", s); };
    // Passed from parent
    const onDelete = (s: TimeSlot, i: number) => onRemoveItem(i);
    const onTimeChange = (s: TimeSlot, i: number, v: string) => onUpdateItem(i, { startTime: v });
    const onNoteChange = (s: TimeSlot, i: number, v: string) => onUpdateItem(i, { notes: v });
    const onTransportChange = (s: TimeSlot, i: number, m: TransportMode) => onUpdateItem(i, { arrivalTransport: m });
    const [openMenuId, setOpenMenuId] = React.useState<string | null>(null);
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
        <div className={`relative transition-all duration-300 ${isAccommodation ? 'mt-4' : 'pl-8'}`}>
            {!isAccommodation && !isCompact && (<> <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-100"></div> <div className="absolute left-[5px] top-8 w-4 h-4 rounded-full border-4 border-white bg-teal-100 shadow-sm z-10"></div> </>)}
            <div className={`mb-2 flex items-center justify-between transition-all ${isCompact ? 'opacity-40 hover:opacity-100' : 'opacity-100'}`}>
                <div className="flex items-center gap-2">
                    <h3 className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${currentStyle.color}`}> {icon} {title} </h3>
                    {!isAccommodation && <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{currentStyle.time}</span>}
                </div>
                {isCompact && <div className="h-[1px] flex-1 bg-gray-200 ml-3"></div>}
            </div>
            <div onDragOver={onDragOver} onDrop={(e) => onDrop(e)} className={`transition-all duration-300 rounded-xl ${isCompact ? 'h-2 hover:h-12 border-2 border-transparent hover:border-dashed hover:border-gray-300 overflow-hidden' : 'min-h-[80px] border-2 border-dashed p-3 flex flex-col space-y-2'} ${items.length === 0 && !isCompact ? (isAccommodation ? 'border-indigo-200 bg-indigo-50/20' : 'border-teal-200 bg-teal-50/20') : 'border-transparent'} ${isDraggingGlobal && items.length === 0 ? 'border-teal-400 bg-teal-50 scale-[1.02] shadow-sm' : ''}`}>
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
                    const isLocked = item.isLocked;

                    const displayTitleRaw = isLocked
                        ? (lang === 'en' && item.marketingTitleEn ? item.marketingTitleEn : item.marketingTitle)
                        : (lang === 'en' && item.titleEn ? item.titleEn : item.title);

                    const displayTitle = displayTitleRaw || (isLocked ? "🔒 Secret Location" : item.title);

                    return (
                        <React.Fragment key={item.instanceId}>
                            {prevItemInSlot && (() => { const suggestion = getTransportSuggestion(prevItemInSlot, item); return (<div className="flex items-center gap-2 pl-4 py-1.5 w-fit" onClick={(e) => handleCrossSlotTransportClick(e, items[0].arrivalTransport)} title={t.transport}> <div className="h-3 w-0.5 bg-gray-200"></div> <div className="flex items-center gap-1.5 bg-teal-50 hover:bg-teal-100 border border-teal-200 hover:border-teal-300 rounded-full px-3 py-1 cursor-pointer transition-all group/transport"> <span className="text-teal-500 group-hover/transport:text-teal-600"> {getTransportIcon(suggestion.mode)} </span> <span className="text-[10px] text-teal-700 font-medium"> {suggestion.label} </span> <ChevronsUpDown size={10} className="text-teal-300 group-hover/transport:text-teal-400" /> </div> </div>); })()}
                            <div
                                draggable
                                onDragStart={(e) => onDragStart(e, item, 'canvas', slot, idx)}
                                onClick={() => onItemClick(item)}
                                style={{ touchAction: 'pan-y' }}
                                className={`group relative border rounded-lg p-3 shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing w-full flex items-start gap-3 transition-all hover:-translate-y-0.5 animate-land 
                                    ${hasConflict ? 'border-red-300 ring-1 ring-red-100' :
                                        (item.region && planRegion && item.region !== 'all' && planRegion !== 'all' && item.region !== planRegion) ? 'bg-amber-50 border-amber-200' :
                                            isLocked ? 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200 hover:border-amber-300' :
                                                'bg-white border-gray-100 hover:border-teal-300'}
                                    ${openMenuId === item.instanceId ? 'z-50' : ''}
                                `}
                            >

                                {/* Desktop Hover Actions - Visible >= 1024px */}
                                <div className="hidden lg:flex absolute -top-2 -right-2 gap-1 transition-all z-20 opacity-0 group-hover:opacity-100">
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
                                    <button onClick={(e) => { e.stopPropagation(); onMoveItem(idx); }} className="bg-white text-gray-400 hover:text-blue-500 p-1 rounded-full shadow border border-gray-100" title={t.moveToDay || "Move to Day"}> <MoveRight size={12} /> </button>
                                    <button onClick={(e) => { e.stopPropagation(); onDelete(slot, idx); }} className="bg-white text-gray-400 hover:text-red-500 p-1 rounded-full shadow border border-gray-100"> <Trash2 size={12} /> </button>
                                </div>
                                <div className="text-gray-300 cursor-grab flex-shrink-0 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity"> <GripVertical size={16} /> </div>

                                <div className="relative flex-shrink-0 text-2xl bg-gray-50 w-10 h-10 flex items-center justify-center rounded-md overflow-hidden">
                                    {isLocked && (
                                        <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                                            <Lock size={12} className="text-gray-400" />
                                        </div>
                                    )}
                                    {item.image || getFallbackImage(item.type)}
                                </div>
                                <div className="flex-1 min-w-0 mr-2">
                                    <div className="flex items-center justify-between mb-0.5">
                                        <div className="flex items-center gap-2 overflow-hidden mr-2">
                                            <h4 className={`font-bold text-sm truncate ${isLocked ? 'text-gray-600 italic' : 'text-gray-700'}`}>{displayTitle}</h4>
                                            {/* Scheme B: Visual Tag for Cross-Region */}
                                            {item.region && planRegion && item.region !== 'all' && planRegion !== 'all' && item.region !== planRegion && (
                                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 font-bold tracking-wider uppercase border border-gray-200">
                                                    {t[item.region] || item.region}
                                                </span>
                                            )}
                                        </div>
                                        {isLocked ? (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); onUnlockItem?.(item); }}
                                                className="text-[10px] font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm flex items-center gap-1"
                                            >
                                                <Lock size={8} /> Unlock
                                            </button>
                                        ) : (
                                            <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded whitespace-nowrap"> ¥{item.price?.toLocaleString()} </span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2 mb-1.5 flex-wrap"> <div className="flex items-center gap-1 text-[10px] text-gray-400 bg-gray-50 px-1.5 rounded"> <Clock size={10} /> {item.duration || t.flexible} </div> {item.rating && (<div className="flex items-center gap-0.5 text-[10px] text-yellow-600"> <Star size={8} fill="currentColor" /> {item.rating} </div>)} {item.tags && item.tags.slice(0, 1).map(tag => (<div key={tag} className="flex items-center gap-0.5 text-[10px] text-teal-600 bg-teal-50 px-1.5 rounded"> <Tag size={8} /> {tag} </div>))} </div>
                                    <input type="text" placeholder={t.addNote} value={item.notes || ''} onClick={(e) => e.stopPropagation()} onChange={(e) => onNoteChange(slot, idx, e.target.value)} className="w-full text-[11px] bg-transparent border-none focus:ring-0 p-0 text-gray-500 placeholder-gray-300 focus:placeholder-gray-400" />

                                    {/* Insider Tip Display - Show when item has tips */}
                                    {item.insiderTip && (
                                        <div className="flex items-center gap-1 text-[10px] text-amber-600 mt-1">
                                            <Star size={10} fill="currentColor" />
                                            <span className="font-medium">有達人秘訣 — 點擊查看</span>
                                        </div>
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
                                {/* Fixed index prop here */}
                                <div className="flex flex-col items-end gap-1">
                                    <div className="flex items-center gap-1 relative">
                                        <SmartTimeInput
                                            slot={slot}
                                            index={idx}
                                            value={item.startTime || ''}
                                            onChange={(val) => onTimeChange(slot, idx, val)}
                                            suggestedTime={getSuggestedTime(idx)}
                                        />

                                        {/* Mobile Action Menu (Three Dots) - Integrated in Flex Layout */}
                                        <div className="lg:hidden touch-device-visible relative">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setOpenMenuId(openMenuId === item.instanceId ? null : item.instanceId);
                                                }}
                                                className="p-1 text-gray-400 hover:text-teal-600 rounded-full active:bg-gray-100"
                                            >
                                                <MoreVertical size={16} />
                                            </button>

                                            {openMenuId === item.instanceId && (
                                                <>
                                                    {/* Backdrop to close menu */}
                                                    <div className="fixed inset-0 z-30" onClick={(e) => { e.stopPropagation(); setOpenMenuId(null); }}></div>

                                                    {/* Dropdown Menu - Aligned to bottom right of button */}
                                                    <div className="absolute right-0 top-full mt-1 bg-white border border-gray-100 shadow-xl rounded-xl p-1.5 flex flex-col gap-1 min-w-[140px] z-40 animate-in fade-in zoom-in-95 duration-200">
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                onItemClick(item);
                                                                setOpenMenuId(null);
                                                            }}
                                                            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-600 rounded-lg w-full text-left"
                                                        >
                                                            <MapPin size={14} />
                                                            {t.viewDetails || "View Details"}
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
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                if (confirm(t.confirmDelete || "Delete?")) {
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
                                                </>
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
