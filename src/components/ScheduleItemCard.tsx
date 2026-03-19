import React, { useState } from 'react';
import { GripVertical } from 'lucide-react';
import { TimeSlot, ScheduleItem, TravelItem, Region } from '../types';
import SmartTimeInput from './SmartTimeInput.tsx';
import { useConfirm, useIsMobile } from '../hooks';

// Modular Sub-components
import { ScheduleItemCardHeader } from './Schedule/ScheduleItemCardHeader';
import { EditableMetadataBadges } from './Schedule/EditableMetadataBadges';
import { EditableNoteSection } from './Schedule/EditableNoteSection';
import { ScheduleActionMenu } from './Schedule/ScheduleActionMenu';

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
    const [editingDurationId, setEditingDurationId] = useState<string | null>(null);
    const [customDurationHr, setCustomDurationHr] = useState('');
    const [customDurationMin, setCustomDurationMin] = useState('');
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);
    const [menuPosition, setMenuPosition] = useState<{ top: number, left: number, openUpwards: boolean } | null>(null);

    const isMobile = useIsMobile();
    const isAccommodation = slot === 'accommodation';

    const onTimeChange = (v: string) => onUpdateItem(index, { startTime: v });
    const onNoteChange = (v: string) => onUpdateItem(index, { notes: v });

    const slotStylesColors: Record<string, string> = {
        morning: 'bg-orange-600',
        afternoon: 'bg-blue-600',
        evening: 'bg-purple-600',
        night: 'bg-indigo-600',
        accommodation: 'bg-indigo-600'
    };
    const badgeColor = slotStylesColors[slot] || 'bg-gray-600';

    return (
        <div className="relative">
            {/* Timeline Elements (Static part of orchestrator) */}
            {showTimeline && !isAccommodation && (
                <>
                    <div className="absolute left-[-40px] lg:left-[-60px] top-1/2 -translate-y-1/2 w-[40px] lg:w-[60px] h-0.5 bg-gray-200 z-0" />
                    <div className="absolute left-[-60px] lg:left-[-85px] top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-[52px] lg:w-[60px]">
                        <SmartTimeInput
                            slot={slot} index={index} value={item.startTime || ''}
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
                className={`group relative border rounded-lg shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing w-full min-w-0 flex items-center transition-all hover:-translate-y-0.5 overflow-hidden touch-none select-none
                        ${isCompact ? 'p-3 gap-3 items-center' : 'p-4 items-center gap-2.5 md:gap-3'}
                        ${hasConflict ? 'border-red-300 ring-1 ring-red-100' :
                        (item.region && planRegion && item.region !== 'all' && planRegion !== 'all' && item.region !== planRegion) ? 'bg-amber-50 border-amber-200' :
                            item.isLocked ? 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200 hover:border-amber-300' :
                                'bg-white border-gray-100 hover:border-teal-300'}
                        ${openMenuId === item.instanceId ? 'z-50' : ''}
                    `}
            >
                {/* 1. Badge / Index Indicator */}
                {isCompact && (
                    <div className={`hidden lg:flex flex-shrink-0 w-5 h-5 rounded-full items-center justify-center text-white text-[10px] font-bold shadow-sm ${badgeColor}`}>
                        {startIndex + index + 1}
                    </div>
                )}

                {/* 2. Drag Handle */}
                <div className="hidden md:block text-gray-300 cursor-grab flex-shrink-0 mt-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                    <GripVertical size={18} />
                </div>

                {/* 3. Main Content Wrapper */}
                <div className="flex-1 min-w-0">
                    {/* Header (Title, Image, Region Badge) */}
                    <ScheduleItemCardHeader
                        item={item} lang={lang} t={t} planRegion={planRegion}
                    />

                    {/* Metadata Badges (Duration, Price) */}
                    <EditableMetadataBadges
                        item={item} index={index} lang={lang} t={t} planRegion={planRegion}
                        onUpdateItem={onUpdateItem} onUnlockItem={onUnlockItem}
                        editingDurationId={editingDurationId} setEditingDurationId={setEditingDurationId}
                        editingPriceId={editingPriceId} setEditingPriceId={setEditingPriceId}
                        customDurationHr={customDurationHr} setCustomDurationHr={setCustomDurationHr}
                        customDurationMin={customDurationMin} setCustomDurationMin={setCustomDurationMin}
                    />

                    {/* Note Section */}
                    <EditableNoteSection
                        item={item} t={t} editingNoteId={editingNoteId}
                        setEditingNoteId={setEditingNoteId} onNoteChange={onNoteChange}
                    />

                    {/* Cross-Region Warning Inline */}
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

                {/* 4. Action Menu (Desktop Hover & Mobile Three-Dots) */}
                <ScheduleActionMenu
                    item={item} index={index} t={t} lang={lang}
                    onRemoveItem={onRemoveItem} onMoveItem={onMoveItem}
                    setEditingPriceId={setEditingPriceId} setEditingNoteId={setEditingNoteId}
                    setEditingDurationId={setEditingDurationId} setOpenMenuId={setOpenMenuId}
                    openMenuId={openMenuId} menuPosition={menuPosition}
                    setMenuPosition={setMenuPosition} confirm={confirm}
                />

                {/* 5. Conflict Warning */}
                {hasConflict && (
                    <div className="absolute bottom-1 right-1">
                         <span className="text-[10px] text-red-500 bg-red-50 px-1.5 py-0.5 rounded font-bold animate-pulse">
                            ⚠️ {t.timeConflict}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScheduleItemCard;
