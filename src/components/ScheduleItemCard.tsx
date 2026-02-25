import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
    Trash2, Clock, StickyNote as NoteIcon, GripVertical,
    MoveRight, Lock, Banknote, MoreVertical, AlertTriangle
} from 'lucide-react';
import {
    TimeSlot,
    ScheduleItem,
    TravelItem,
    Region
} from '../types';
import {
    getFallbackImage,
} from '../utils';
import SmartTimeInput from './SmartTimeInput.tsx';
import { useConfirm } from '../hooks';

interface ScheduleItemCardProps {
    item: ScheduleItem;
    slot: TimeSlot;
    index: number;
    t: any;
    lang: string;
    planRegion?: Region;
    isCompact?: boolean;
    showTimeline?: boolean;
    onItemClick: (item: ScheduleItem) => void;
    onUpdateItem: (index: number, updates: Partial<ScheduleItem>) => void;
    onRemoveItem: (index: number) => void;
    onMoveItem: (index: number) => void;
    onUnlockItem: (item: ScheduleItem) => void;
    onDragStart: (e: React.DragEvent, item: TravelItem, source: 'sidebar' | 'canvas', slot?: TimeSlot, index?: number) => void;
    suggestedTime: string | null;
    hasConflict: boolean;
    startIndex?: number;
}

const ScheduleItemCard: React.FC<ScheduleItemCardProps> = ({
    item, slot, index, t, lang, planRegion, isCompact = false, showTimeline = false,
    onItemClick, onUpdateItem, onRemoveItem, onMoveItem, onUnlockItem, onDragStart,
    suggestedTime, hasConflict, startIndex = 0
}) => {
    const { confirm } = useConfirm();
    const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
    const [editingPriceId, setEditingPriceId] = useState<string | null>(null);
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);
    const [menuPosition, setMenuPosition] = useState<{ top: number, left: number, openUpwards: boolean } | null>(null);

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    const isAccommodation = slot === 'accommodation';

    const onTimeChange = (v: string) => onUpdateItem(index, { startTime: v });
    const onNoteChange = (v: string) => onUpdateItem(index, { notes: v });

    // Dynamic Title Lookup for Localization
    const isLocked = item.isLocked;
    const displayTitleRaw = isLocked
        ? (lang === 'en' && item.marketingTitleEn ? item.marketingTitleEn : item.marketingTitle)
        : (lang === 'en' && item.titleEn ? item.titleEn : item.title);

    const displayTitle = displayTitleRaw || (isLocked ? t.secretLocation : item.title);

    const slotStyles: Record<string, { color: string }> = {
        morning: { color: 'text-orange-500' },
        afternoon: { color: 'text-blue-500' },
        evening: { color: 'text-purple-500' },
        night: { color: 'text-indigo-900' },
        accommodation: { color: 'text-indigo-600' }
    };
    const currentStyle = slotStyles[slot] || { color: 'text-gray-500' };

    return (
        <div className="relative">
            {/* Timeline dot for this card */}
            {showTimeline && !isAccommodation && (
                <>
                    {/* Horizontal connector line */}
                    <div className="absolute left-[-40px] lg:left-[-60px] top-1/2 -translate-y-1/2 w-[40px] lg:w-[60px] h-0.5 bg-gray-200 z-0" />
                    {/* Timeline Time Pill for this card */}
                    <div className="absolute left-[-60px] lg:left-[-85px] top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-[52px] lg:w-[60px]">
                        <SmartTimeInput
                            slot={slot}
                            index={index}
                            value={item.startTime || ''}
                            onChange={(val: string) => onTimeChange(val)}
                            suggestedTime={suggestedTime}
                            className={`
                                !border-2 !shadow-sm !rounded-full !py-0.5 !px-1.5 !text-[10px] lg:!text-xs !font-bold transition-colors !bg-white
                                ${slot === 'morning' ? '!border-orange-200 !text-orange-600 hover:!border-orange-400' :
                                    slot === 'afternoon' ? '!border-blue-200 !text-blue-600 hover:!border-blue-400' :
                                        slot === 'evening' ? '!border-purple-200 !text-purple-600 hover:!border-purple-400' :
                                            slot === 'night' ? '!border-indigo-200 !text-indigo-900 hover:!border-indigo-400' :
                                                '!border-gray-100 !text-gray-700 hover:!border-teal-400'}
                            `}
                        />
                    </div>
                </>
            )}
            <div
                draggable={!isMobile}
                onDragStart={(e) => onDragStart(e, item, 'canvas', slot, index)}
                onClick={() => onItemClick(item)}
                id={`item-${item.instanceId}`}
                className={`group relative border rounded-lg shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing w-full min-w-0 flex items-center transition-all hover:-translate-y-0.5 animate-land overflow-hidden touch-none select-none
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
                        {startIndex + index + 1}
                    </div>
                )}

                {/* Desktop Hover Actions - Visible >= 1024px */}
                <div className="hidden lg:flex absolute top-2 right-2 gap-1.5 transition-all z-20 opacity-40 group-hover:opacity-100">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setEditingPriceId(item.instanceId);
                        }}
                        className="bg-white text-gray-400 hover:text-teal-500 p-2 rounded-full shadow-md border border-gray-100 transition-all hover:scale-110 active:scale-95"
                        title={t.setBudget}
                    >
                        <Banknote size={18} />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setEditingNoteId(item.instanceId);
                        }}
                        className="bg-white text-gray-400 hover:text-amber-500 p-2 rounded-full shadow-md border border-gray-100 transition-all hover:scale-110 active:scale-95"
                        title={t.addNote}
                    >
                        <NoteIcon size={18} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); onMoveItem(index); }}
                        className="bg-white text-gray-400 hover:text-blue-500 p-2 rounded-full shadow-md border border-gray-100 transition-all hover:scale-110 active:scale-95"
                        title={t.moveToDay}
                    >
                        <MoveRight size={18} />
                    </button>
                    <button
                        onClick={async (e) => {
                            e.stopPropagation();
                            const confirmed = await confirm({
                                title: t.deleteItemConfirmTitle,
                                message: t.deleteItemConfirmMessage,
                                type: 'warning',
                                confirmText: t.delete,
                                cancelText: t.cancel
                            });
                            if (confirmed) {
                                onRemoveItem(index);
                            }
                        }}
                        className="bg-white text-gray-400 hover:text-red-500 p-2 rounded-full shadow-md border border-gray-100 transition-all hover:scale-110 active:scale-95"
                        title={t.delete}
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
                <div className="hidden md:block text-gray-300 cursor-grab flex-shrink-0 mt-1.5 opacity-40 group-hover:opacity-100 transition-opacity"> <GripVertical size={18} /> </div>

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

                            {/* Scheme B: Visual Tag for Cross-Region */}
                            {item.region && planRegion && item.region !== 'all' && planRegion !== 'all' && item.region !== planRegion && (
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 font-bold tracking-wider uppercase border border-gray-200 flex-shrink-0">
                                    {t[item.region] || item.region}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Metadata Row: Duration, Price, Rating */}
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">

                        {/* Duration Badge */}
                        <div className="flex items-center gap-1 text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200">
                            <Clock size={10} />
                            {item.duration || t.flexible}
                        </div>

                        {/* Price Badge - Only valid price or locked or edit mode */}
                        {(isLocked || (item.price !== undefined && item.price > 0) || editingPriceId === item.instanceId) && (
                            isLocked ? (
                                <button
                                    onClick={(e) => { e.stopPropagation(); onUnlockItem?.(item); }}
                                    className="text-[10px] font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm flex items-center gap-1"
                                >
                                    <Lock size={8} /> {t.unlockLabel}
                                </button>
                            ) : (
                                editingPriceId === item.instanceId ? (
                                    <div className="flex items-center gap-1 bg-white border border-teal-300 rounded px-1 py-0.5 shadow-sm">
                                        <span className="text-[10px] text-gray-400">¥</span>
                                        <input
                                            type="number"
                                            autoFocus
                                            className="w-12 text-[10px] font-medium text-gray-700 p-0 border-none focus:ring-0 outline-none bg-transparent appearance-none"
                                            placeholder="0"
                                            value={item.price || ''}
                                            onChange={(e) => {
                                                const val = parseInt(e.target.value);
                                                onUpdateItem(index, { price: isNaN(val) ? 0 : val });
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
                    </div>

                    {(item.notes || editingNoteId === item.instanceId) && (
                        <div
                            className={`mt-1 flex items-start gap-1 pb-1 pt-0.5 rounded transition-all group/note relative ${editingNoteId === item.instanceId ? 'bg-amber-50/50 ring-1 ring-amber-200 px-1.5' : 'hover:bg-gray-50/80 cursor-pointer'}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setEditingNoteId(item.instanceId);
                            }}
                        >
                            <span className={`text-[10px] font-bold shrink-0 mt-0.5 ${editingNoteId === item.instanceId ? 'text-amber-600' : 'text-amber-500/80'}`}>
                                {t.noteLabel}:
                            </span>
                            {editingNoteId === item.instanceId ? (
                                <input
                                    type="text"
                                    placeholder={t.addNote}
                                    value={item.notes || ''}
                                    autoFocus
                                    onBlur={() => setEditingNoteId(null)}
                                    onClick={(e) => e.stopPropagation()}
                                    onChange={(e) => onNoteChange(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') setEditingNoteId(null);
                                    }}
                                    className="flex-1 text-[11px] bg-transparent border-none focus:ring-0 outline-none p-0 text-gray-700 placeholder-gray-300 animate-in fade-in duration-200 font-medium"
                                />
                            ) : (
                                <span className="flex-1 text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
                                    {item.notes || t.clickToAddNote}
                                </span>
                            )}

                            {/* Mobile Edit Indicator */}
                            {!editingNoteId && (
                                <div className="md:hidden absolute right-1 top-1/2 -translate-y-1/2 opacity-30">
                                    <NoteIcon size={8} />
                                </div>
                            )}
                        </div>
                    )}



                    {/* Inline Cross-Region Warning */}
                    {item.region && planRegion && item.region !== 'all' && planRegion !== 'all' && item.region !== planRegion && (
                        <div className="mt-2 text-[10px] text-amber-700 bg-amber-100/50 px-2 py-1 rounded flex items-center gap-1.5 border border-amber-200/50">
                            <span className="flex-shrink-0 text-amber-500">⚠️</span>
                            <span>
                                {t.crossRegionWarningShort
                                    ? t.crossRegionWarningShort.replace('{region}', t[item.region] || item.region).replace('{planRegion}', t[planRegion] || planRegion)
                                    : t.crossRegionWarningShort}
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
                                    const spaceBelow = window.innerHeight - rect.bottom;
                                    const openUpwards = spaceBelow < 250; // Threshold for menu height + nav bar

                                    setMenuPosition({
                                        top: openUpwards ? rect.top + window.scrollY : rect.bottom + window.scrollY,
                                        left: rect.right - 150 + window.scrollX,
                                        openUpwards
                                    });
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
                                        className={`absolute w-[150px] bg-white border border-gray-100 shadow-xl rounded-xl p-1.5 flex flex-col gap-1 z-[9999] animate-in fade-in zoom-in-95 duration-200 
                                            ${menuPosition?.openUpwards ? 'origin-bottom -translate-y-full mb-1' : 'origin-top mt-1'}
                                        `}
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
                                            {t.setBudget}
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
                                            {t.addNote}
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onMoveItem(index);
                                                setOpenMenuId(null);
                                            }}
                                            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg w-full text-left"
                                        >
                                            <MoveRight size={14} />
                                            {t.moveToDay}
                                        </button>
                                        <button
                                            onClick={async (e) => {
                                                e.stopPropagation();
                                                setOpenMenuId(null); // Close menu immediately
                                                const confirmed = await confirm({
                                                    title: t.deleteItemConfirmTitle,
                                                    message: t.deleteItemConfirmMessage,
                                                    type: 'warning',
                                                    confirmText: t.delete,
                                                    cancelText: t.cancel
                                                });
                                                if (confirmed) {
                                                    onRemoveItem(index);
                                                }
                                            }}
                                            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg w-full text-left"
                                        >
                                            <Trash2 size={14} />
                                            {t.delete}
                                        </button>
                                    </div>
                                </>,
                                document.body
                            )}
                        </div>
                    </div>
                    {hasConflict && (
                        <span className="text-[10px] text-red-500 bg-red-50 px-1.5 py-0.5 rounded font-bold animate-pulse">
                            ⚠️ {t.timeConflict}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ScheduleItemCard;
