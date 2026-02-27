import { useRef } from 'react';
import { TimeSlot, ScheduleItem, Plan, LangType, TravelItem } from '../types';
import { ALL_SUGGESTIONS } from '../data';

export function useItinerary(
    activePlan: Plan,
    currentDay: number,
    t: any,
    lang: LangType,
    updateActivePlan: (updates: Partial<Plan>) => void,
    showToastMessage: (message: string, type?: 'success' | 'warning' | 'error' | 'info', duration?: number) => void,
    ui: any, // Passing the UI hook state
    addToSlotTarget: TimeSlot | null,
    setAddToSlotTarget: (slot: TimeSlot | null) => void
) {
    const draggedItemRef = useRef<{ item: TravelItem, source: 'sidebar' | 'canvas', sourceSlot?: TimeSlot, index?: number } | null>(null);

    const handleDragStart = (e: React.DragEvent, item: TravelItem, source: 'sidebar' | 'canvas', slot?: TimeSlot, index?: number) => {
        draggedItemRef.current = { item, source, sourceSlot: slot, index };
        e.dataTransfer.effectAllowed = 'copyMove';
    };

    const handleDrop = (e: React.DragEvent, targetSlot: TimeSlot) => {
        e.preventDefault();
        const dragged = draggedItemRef.current;
        if (!dragged) return;

        const currentDayKey = `Day ${currentDay}`;
        const newSchedule = { ...activePlan.schedule };
        newSchedule[currentDayKey] = { ...newSchedule[currentDayKey] }; // Clone day
        newSchedule[currentDayKey][targetSlot] = [...(newSchedule[currentDayKey][targetSlot] || [])]; // Clone target slot array

        if (dragged.source === 'sidebar') {
            const newItem: ScheduleItem = {
                ...dragged.item,
                instanceId: Math.random().toString(36).substr(2, 9),
                startTime: '',
                arrivalTransport: 'car'
            };
            newSchedule[currentDayKey][targetSlot].push(newItem);

            // Show added toast for sidebar items
            const itemName = (lang === 'en' && dragged.item.titleEn) ? dragged.item.titleEn : dragged.item.title;
            const slotLabel = t[targetSlot] || targetSlot;
            const addedMsg = (t.itemAddedTo || (lang === 'en' ? `✅ "${itemName}" added to ${slotLabel}` : `✅ 「${itemName}」已加入${slotLabel}`))
                .replace('{name}', itemName)
                .replace('{slot}', slotLabel);
            showToastMessage(addedMsg, 'success', 2500);

        } else if (dragged.source === 'canvas' && dragged.sourceSlot && dragged.index !== undefined) {
            if (dragged.sourceSlot !== targetSlot) {
                newSchedule[currentDayKey][dragged.sourceSlot] = [...newSchedule[currentDayKey][dragged.sourceSlot]];
            }
            const item = newSchedule[currentDayKey][dragged.sourceSlot].splice(dragged.index, 1)[0];

            // Reset time if moving to a different slot type
            if (dragged.sourceSlot !== targetSlot) {
                item.startTime = '';
                // Show reminder to set new time
                showToastMessage(t.rememberSetTime || "Remember to set a new time!", 'info', 3000);
            }

            newSchedule[currentDayKey][targetSlot].push(item);
        }

        // Region-Aware Warning
        if (dragged.source === 'sidebar' && dragged.item.region && activePlan.region &&
            dragged.item.region !== 'all' && activePlan.region !== 'all' &&
            dragged.item.region !== activePlan.region) {
            const regionName = t[dragged.item.region] || dragged.item.region.toUpperCase();
            const planRegionName = t[activePlan.region] || activePlan.region.toUpperCase();

            showToastMessage(
                t.crossRegionWarning
                    ? t.crossRegionWarning.replace('{region}', regionName).replace('{planRegion}', planRegionName)
                    : `⚠️ Note: You added a ${regionName} item to your ${planRegionName} plan.`,
                'warning',
                3000
            );
        }

        // Auto-sort
        newSchedule[currentDayKey][targetSlot].sort((a, b) => {
            const timeA = a.startTime || 'ZZZZ';
            const timeB = b.startTime || 'ZZZZ';
            return timeA.localeCompare(timeB);
        });

        updateActivePlan({ schedule: newSchedule });
        draggedItemRef.current = null;
    };

    const handleRemoveItem = (slot: TimeSlot, index: number) => {
        const currentDayKey = `Day ${currentDay}`;
        const newSchedule = { ...activePlan.schedule };
        newSchedule[currentDayKey] = { ...newSchedule[currentDayKey] };
        newSchedule[currentDayKey][slot] = [...newSchedule[currentDayKey][slot]];
        newSchedule[currentDayKey][slot].splice(index, 1);
        updateActivePlan({ schedule: newSchedule });
    };

    const handleUpdateItem = (slot: TimeSlot, index: number, updates: Partial<ScheduleItem>) => {
        const currentDayKey = `Day ${currentDay}`;
        const newSchedule = { ...activePlan.schedule };

        const updatedItem = { ...newSchedule[currentDayKey][slot][index], ...updates };
        newSchedule[currentDayKey][slot][index] = updatedItem;

        if (updates.startTime !== undefined) {
            let newSlot: TimeSlot = slot;
            const timeStr = updates.startTime;
            if (timeStr) {
                const hour = parseInt(timeStr.split(':')[0], 10);
                if (!isNaN(hour)) {
                    newSlot = hour >= 6 && hour < 12 ? 'morning'
                        : hour >= 12 && hour < 18 ? 'afternoon'
                            : hour >= 18 && hour < 22 ? 'evening'
                                : 'night';
                }
            }

            if (newSlot !== slot) {
                newSchedule[currentDayKey][slot].splice(index, 1);
                newSchedule[currentDayKey][newSlot] = [...(newSchedule[currentDayKey][newSlot] || [])];
                newSchedule[currentDayKey][newSlot].push(updatedItem);
                newSchedule[currentDayKey][newSlot].sort((a, b) => (a.startTime || 'ZZZZ').localeCompare(b.startTime || 'ZZZZ'));
            } else {
                newSchedule[currentDayKey][slot].sort((a, b) => (a.startTime || 'ZZZZ').localeCompare(b.startTime || 'ZZZZ'));
            }
        } else {
            newSchedule[currentDayKey][slot].sort((a, b) => (a.startTime || 'ZZZZ').localeCompare(b.startTime || 'ZZZZ'));
        }

        updateActivePlan({ schedule: newSchedule });
    };

    const handleUpdateScheduleItemByInstanceId = (instanceId: string, updates: Partial<ScheduleItem>) => {
        const currentDayKey = `Day ${currentDay}`;
        const newSchedule = { ...activePlan.schedule };
        newSchedule[currentDayKey] = { ...newSchedule[currentDayKey] };

        // Search through all slots to find the item
        let foundSlot: TimeSlot | null = null;
        let foundIndex: number = -1;

        const slots: TimeSlot[] = ['morning', 'afternoon', 'evening', 'night', 'accommodation'];
        for (const slot of slots) {
            const idx = newSchedule[currentDayKey][slot]?.findIndex(item => item.instanceId === instanceId);
            if (idx !== undefined && idx !== -1) {
                foundSlot = slot;
                foundIndex = idx;
                break;
            }
        }

        if (foundSlot && foundIndex !== -1) {
            handleUpdateItem(foundSlot, foundIndex, updates);
        }
    };

    const handleTapToAdd = (item: TravelItem) => {
        const currentDayKey = `Day ${currentDay}`;
        const newSchedule = { ...activePlan.schedule };
        newSchedule[currentDayKey] = { ...newSchedule[currentDayKey] };

        let targetSlot: TimeSlot = addToSlotTarget || (item.type === 'hotel' ? 'accommodation' : 'morning');
        newSchedule[currentDayKey][targetSlot] = [...(newSchedule[currentDayKey][targetSlot] || [])];

        newSchedule[currentDayKey][targetSlot].push({
            ...item,
            instanceId: Math.random().toString(36).substr(2, 9),
            startTime: '',
            arrivalTransport: 'car'
        });

        newSchedule[currentDayKey][targetSlot].sort((a, b) => (a.startTime || 'ZZZZ').localeCompare(b.startTime || 'ZZZZ'));

        updateActivePlan({ schedule: newSchedule });
        ui.setShowMobileLibrary(false);
        setAddToSlotTarget(null);

        const itemName = (lang === 'en' && item.titleEn) ? item.titleEn : item.title;
        const slotLabel = t[targetSlot] || targetSlot;

        if (item.region && activePlan.region && item.region !== 'all' && activePlan.region !== 'all' && item.region !== activePlan.region) {
            const regionName = t[item.region] || item.region.toUpperCase();
            const planRegionName = t[activePlan.region] || activePlan.region.toUpperCase();
            showToastMessage(
                t.crossRegionWarning
                    ? t.crossRegionWarning.replace('{region}', regionName).replace('{planRegion}', planRegionName)
                    : `⚠️ Note: You added a ${regionName} item to your ${planRegionName} plan.`,
                'warning',
                3000
            );
        } else {
            const addedMsg = (t.itemAddedTo || (lang === 'en' ? `✅ \"${itemName}\" added to ${slotLabel}` : `✅ 「${itemName}」已加入${slotLabel}`))
                .replace('{name}', itemName)
                .replace('{slot}', slotLabel);
            showToastMessage(addedMsg, 'success', 2500);
        }
    };

    const handleQuickFill = (slot: TimeSlot) => {
        const region = activePlan.region || Object.keys(ALL_SUGGESTIONS)[0] || 'tokyo';
        const regionData = ALL_SUGGESTIONS[region] || ALL_SUGGESTIONS[Object.keys(ALL_SUGGESTIONS)[0]];
        const regionSuggestions = regionData?.[slot] || [];
        if (regionSuggestions.length === 0) {
            showToastMessage(
                lang === 'zh' ? '此時段暫無建議項目' : 'No suggestions for this slot yet',
                'info', 2500
            );
            return;
        }

        const itemData = regionSuggestions[Math.floor(Math.random() * regionSuggestions.length)];
        if (itemData) {
            const newItem: ScheduleItem = {
                ...itemData,
                instanceId: Date.now().toString(),
                arrivalTransport: 'car',
                startTime: slot === 'morning' ? '09:00' :
                    slot === 'afternoon' ? '13:00' :
                        slot === 'evening' ? '18:00' :
                            slot === 'night' ? '22:00' : '15:00' // Accommodation default 15:00 check-in
            };

            const currentDayKey = `Day ${currentDay}`;
            const newSchedule = { ...activePlan.schedule };
            if (!newSchedule[currentDayKey]) {
                newSchedule[currentDayKey] = { morning: [], afternoon: [], evening: [], night: [], accommodation: [] };
            }
            newSchedule[currentDayKey] = { ...newSchedule[currentDayKey] };
            newSchedule[currentDayKey][slot] = [...(newSchedule[currentDayKey][slot] || [])];
            newSchedule[currentDayKey][slot].push(newItem);
            newSchedule[currentDayKey][slot].sort((a, b) => (a.startTime || 'ZZZZ').localeCompare(b.startTime || 'ZZZZ'));

            updateActivePlan({ schedule: newSchedule });
            showToastMessage(t.quickFillAdded || "Suggestion added!", 'success');
        }
    };

    return {
        handleDragStart,
        handleDrop,
        handleRemoveItem,
        handleUpdateItem,
        handleUpdateScheduleItemByInstanceId,
        handleTapToAdd,
        handleQuickFill,
        draggedItemRef
    };
}
