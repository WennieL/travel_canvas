import { useCallback } from 'react';
import {
    Plan, Template, ScheduleItem, DaySchedule,
    FullSchedule, TransportMode, Region,
    TimeSlot, TravelItem
} from '../types';
import { REGION_DEFAULT_CHECKLISTS } from '../data/index';

interface AppActionsDeps {
    plans: Plan[];
    setPlans: (plans: Plan[]) => void;
    activePlan: Plan;
    updateActivePlan: (data: Partial<Plan>) => void;
    activePlanId: string;
    setActivePlanId: (id: string) => void;
    currentDay: number;
    setCurrentDay: (day: number) => void;
    lang: 'zh' | 'en';
    t: any;
    confirm: (options: any) => Promise<boolean>;
    showToastMessage: (msg: string, type?: any) => void;
    setIsCreatingNewPlan: (val: boolean) => void;
    isCreatingNewPlan: boolean;
    // UI Helpers from useUIState
    ui: any;
    setCustomAssets: React.Dispatch<React.SetStateAction<TravelItem[]>>;
    _handleDeleteDay: (day: number, e?: any) => void;
    _handleDeletePlan: (id: string, e?: any) => void;
}

export const useAppActions = (deps: AppActionsDeps) => {
    const {
        plans, setPlans, activePlan, updateActivePlan, activePlanId, setActivePlanId,
        currentDay, setCurrentDay, lang, t, confirm, showToastMessage,
        isCreatingNewPlan, setIsCreatingNewPlan, ui, setCustomAssets,
        _handleDeleteDay, _handleDeletePlan
    } = deps;

    const applyTemplate = useCallback(async (template: Template, skipConfirm: boolean = false) => {
        const templateName = (lang === 'en' && template.nameEn) ? template.nameEn : template.name;
        if (!skipConfirm) {
            const confirmed = await confirm({
                title: t.applyTemplateConfirmTitle || 'Apply Template',
                message: (t.applyTemplateConfirmMessage || '⚠️ Apply "{name}"?\n\nCurrent itinerary will be replaced.').replace('{name}', templateName),
                type: 'warning',
                confirmText: t.confirm || (lang === 'zh' ? '套用' : 'Apply'),
                cancelText: t.cancel || (lang === 'zh' ? '取消' : 'Cancel')
            });
            if (!confirmed) return;
        }

        const copy = (items: ScheduleItem[]) => (items || []).map(i => ({
            ...i,
            instanceId: Math.random().toString(36).substr(2, 9),
            arrivalTransport: (i.arrivalTransport || 'car') as TransportMode
        }));

        const newSchedule: Record<string, DaySchedule> = {};
        const isMultiDay = !('morning' in template.schedule);

        if (isMultiDay) {
            const fullSched = template.schedule as FullSchedule;
            Object.keys(fullSched).forEach(dayKey => {
                newSchedule[dayKey] = {
                    morning: copy(fullSched[dayKey].morning),
                    afternoon: copy(fullSched[dayKey].afternoon),
                    evening: copy(fullSched[dayKey].evening),
                    night: copy(fullSched[dayKey].night),
                    accommodation: copy(fullSched[dayKey].accommodation)
                };
            });
        } else {
            const daySched = template.schedule as DaySchedule;
            for (let day = 1; day <= template.duration; day++) {
                newSchedule[`Day ${day}`] = {
                    morning: copy(daySched.morning),
                    afternoon: copy(daySched.afternoon),
                    evening: copy(daySched.evening),
                    night: copy(daySched.night),
                    accommodation: copy(daySched.accommodation)
                };
            }
        }

        const region = template.region || 'tokyo';
        const localizedDefaults = REGION_DEFAULT_CHECKLISTS[region]?.[lang] || REGION_DEFAULT_CHECKLISTS['all']?.[lang] || [];

        if (isCreatingNewPlan) {
            const id = `plan-${Date.now()}`;
            const newPlan: Plan = {
                id,
                name: templateName,
                startDate: new Date().toISOString().split('T')[0],
                endDate: new Date(Date.now() + 86400000 * (template.duration - 1)).toISOString().split('T')[0],
                totalDays: template.duration,
                schedule: newSchedule,
                region: region,
                checklist: localizedDefaults,
                createdAt: Date.now(),
                targetCurrency: region === 'melbourne' ? 'AUD' : 'TWD',
                exchangeRate: region === 'melbourne' ? 21.0 : 0.22
            };
            setPlans([...plans, newPlan]);
            setActivePlanId(id);
            setIsCreatingNewPlan(false);
        } else {
            updateActivePlan({
                name: templateName,
                totalDays: template.duration,
                schedule: newSchedule,
                region: region,
                checklist: localizedDefaults
            });
        }
        setCurrentDay(1);
        ui.setShowMobileLibrary(false);
        ui.setShowPlanManager(false);
        ui.setViewMode('canvas');
        showToastMessage((t.appliedTemplate || '✅ "{name}" applied!').replace('{name}', templateName));
    }, [lang, confirm, isCreatingNewPlan, plans, setPlans, setActivePlanId, setIsCreatingNewPlan, updateActivePlan, setCurrentDay, ui, showToastMessage]);

    const handleCreateCustomItem = useCallback((data: any) => {
        const currentDayKey = `Day ${currentDay}`;
        const newSchedule = { ...activePlan.schedule };

        const newItem: ScheduleItem = {
            id: `custom-${Date.now()}`,
            title: data.name,
            type: data.type,
            price: parseInt(data.price) || 0,
            image: data.type === 'food' ? '🍜' : data.type === 'hotel' ? '🏨' : data.type === 'transport' ? '✈️' : '📌',
            instanceId: Math.random().toString(36).substr(2, 9),
            startTime: data.time || '',
            arrivalTransport: 'car',
            notes: data.notes || '',
            isCustom: true,
            region: (data.region || activePlan.region || 'all') as any
        };

        // If user clicked a '+' button, we have a specific target slot
        let targetSlot: TimeSlot = ui.addToSlotTarget?.slot || 'morning';

        // But if they entered a specific time, that takes precedence for slotting
        if (data.time) {
            const hour = parseInt(data.time.split(':')[0], 10);
            targetSlot = hour >= 5 && hour < 11 ? 'morning' :
                hour >= 11 && hour < 17 ? 'afternoon' :
                    hour >= 17 && hour < 21 ? 'evening' : 'night';
        }

        if (!newSchedule[currentDayKey]) {
            newSchedule[currentDayKey] = { morning: [], afternoon: [], evening: [], night: [], accommodation: [] };
        }
        newSchedule[currentDayKey][targetSlot].push(newItem);

        // Sort slot if time exists
        if (data.time) {
            newSchedule[currentDayKey][targetSlot].sort((a: ScheduleItem, b: ScheduleItem) =>
                (a.startTime || 'ZZZZ').localeCompare(b.startTime || 'ZZZZ')
            );
        }

        updateActivePlan({ schedule: newSchedule });
        setCustomAssets(prev => [...prev, { ...newItem, id: `asset-${Date.now()}` } as TravelItem]);
        showToastMessage("🎉 " + (t.itemCreated || "Created!"));
        ui.setShowCustomItemModal(false);
        ui.setAddToSlotTarget(null); // Clear the target after successful creation
    }, [currentDay, activePlan, updateActivePlan, setCustomAssets, showToastMessage, t, ui]);

    const onDeleteDay = useCallback(async (dayToDelete: number, e?: React.MouseEvent) => {
        e?.stopPropagation();
        const confirmed = await confirm({
            title: t.deleteDayConfirmTitle || 'Delete Day',
            message: (t.deleteDayConfirmMessage || 'Are you sure you want to delete Day {day}?\nThis action cannot be undone.').replace('{day}', dayToDelete.toString()),
            type: 'warning',
            confirmText: t.delete || (lang === 'zh' ? '刪除' : 'Delete'),
            cancelText: t.cancel || (lang === 'zh' ? '取消' : 'Cancel')
        });
        if (confirmed) {
            _handleDeleteDay(dayToDelete, e);
        }
    }, [lang, confirm, _handleDeleteDay]);

    const onDeletePlan = useCallback(async (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        const planToDelete = plans.find(p => p.id === id);
        const planName = planToDelete?.name || '';
        const confirmed = await confirm({
            title: t.deleteTripConfirmTitle || 'Delete Trip',
            message: (t.deleteTripConfirmMessage || 'Are you sure you want to delete "{name}"?').replace('{name}', planName),
            type: 'error',
            confirmText: t.delete || (lang === 'zh' ? '刪除' : 'Delete'),
            cancelText: t.cancel || (lang === 'zh' ? '取消' : 'Cancel')
        });
        if (confirmed) {
            _handleDeletePlan(id, e);
        }
    }, [lang, confirm, plans, _handleDeletePlan]);

    const handleUnlockConfirm = useCallback((unlockTarget: ScheduleItem | null, batchUnlockCount: number, setUnlockTarget: (item: any) => void, setBatchUnlockCount: (count: number) => void) => {
        const newSchedule = { ...activePlan.schedule };
        Object.values(newSchedule).forEach(day => {
            Object.values(day).forEach(slotItems => {
                slotItems.forEach((item: ScheduleItem) => {
                    if (unlockTarget && item.instanceId === unlockTarget.instanceId) item.isLocked = false;
                    else if (batchUnlockCount > 0 && item.isLocked) item.isLocked = false;
                });
            });
        });
        updateActivePlan({ schedule: newSchedule });
        setUnlockTarget(null);
        setBatchUnlockCount(0);
        showToastMessage("🎉 " + (t.unlocked || "Unlocked!"));
    }, [activePlan, updateActivePlan, showToastMessage]);

    const executeMoveItem = useCallback((targetDay: number) => {
        if (!ui.moveTarget) return;
        const sourceDayKey = `Day ${currentDay}`;
        const targetDayKey = `Day ${targetDay}`;
        const newSchedule = { ...activePlan.schedule };

        if (!newSchedule[targetDayKey]) {
            newSchedule[targetDayKey] = { morning: [], afternoon: [], evening: [], night: [], accommodation: [] };
        }

        const sourceDayRef = newSchedule[sourceDayKey] as DaySchedule;
        const targetDayRef = newSchedule[targetDayKey] as DaySchedule;
        const slot = ui.moveTarget.slot as TimeSlot;

        const [item] = sourceDayRef[slot].splice(ui.moveTarget.index, 1);
        targetDayRef[slot].push(item);

        targetDayRef[slot].sort((a: ScheduleItem, b: ScheduleItem) => {
            const timeA = a.startTime || 'ZZZZ';
            const timeB = b.startTime || 'ZZZZ';
            return timeA.localeCompare(timeB);
        });

        updateActivePlan({ schedule: newSchedule });
        ui.setShowMoveModal(false);
        showToastMessage(`${t.movedTo || 'Moved to'} Day ${targetDay}`);
    }, [ui, currentDay, activePlan, updateActivePlan, showToastMessage, t]);

    return {
        applyTemplate,
        handleCreateCustomItem,
        onDeleteDay,
        onDeletePlan,
        handleUnlockConfirm,
        executeMoveItem
    };
};
