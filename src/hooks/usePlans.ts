import { useState, useEffect } from 'react';
import { Plan, DaySchedule, ChecklistItem, TimeSlot, ScheduleItem, TransportMode, LangType } from '../types';
import { TOKYO_DEMO_PLAN } from '../data';

export interface UsePlansReturn {
    // State
    plans: Plan[];
    activePlanId: string;
    activePlan: Plan;
    currentDay: number;

    // Setters
    setPlans: React.Dispatch<React.SetStateAction<Plan[]>>;
    setActivePlanId: React.Dispatch<React.SetStateAction<string>>;
    setCurrentDay: React.Dispatch<React.SetStateAction<number>>;

    // Actions
    updateActivePlan: (updates: Partial<Plan>) => void;
    updateChecklist: (newChecklist: ChecklistItem[]) => void;
    handleCreatePlan: () => void;
    handleDeletePlan: (id: string, e: React.MouseEvent) => void;
    handleAddDay: () => void;
    handleDeleteDay: (dayToDelete: number, e?: React.MouseEvent) => void;
    getDisplayDate: (dayIndex: number) => string;
    getShortDate: (dayIndex: number) => string;
}

export function usePlans(isInitialized: boolean, t: Record<string, string>, lang: LangType): UsePlansReturn {
    // Plans State - Default to TOKYO_DEMO_PLAN if empty
    const [plans, setPlans] = useState<Plan[]>([TOKYO_DEMO_PLAN]);
    const [activePlanId, setActivePlanId] = useState<string>(TOKYO_DEMO_PLAN.id);
    const [currentDay, setCurrentDay] = useState(1);

    // Load from localStorage
    useEffect(() => {
        try {
            const savedPlans = localStorage.getItem('travel_plans');
            const savedActiveId = localStorage.getItem('active_plan_id');

            if (savedPlans) {
                const parsedPlans = JSON.parse(savedPlans);
                if (Array.isArray(parsedPlans) && parsedPlans.length > 0) {
                    setPlans(parsedPlans);
                }
            }
            if (savedActiveId) {
                setActivePlanId(savedActiveId);
            }
        } catch (e) {
            console.error("Failed to load plans from storage", e);
            // Fallback is already set in initial state
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('travel_plans', JSON.stringify(plans));
            localStorage.setItem('active_plan_id', activePlanId);
        }
    }, [plans, activePlanId, isInitialized]);

    // Derived state
    const activePlan = plans.find(p => p.id === activePlanId) || plans[0];

    // Update active plan
    const updateActivePlan = (updates: Partial<Plan>) => {
        setPlans(prev => prev.map(p => p.id === activePlanId ? { ...p, ...updates } : p));
    };

    // Update checklist
    const updateChecklist = (newChecklist: ChecklistItem[]) => {
        updateActivePlan({ checklist: newChecklist });
    };

    // Create new plan
    const handleCreatePlan = () => {
        const now = new Date();
        const newPlan: Plan = {
            id: `plan_${Date.now()}`,
            name: t.newPlan || 'New Trip',
            startDate: now.toISOString().split('T')[0],
            endDate: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            totalDays: 4,
            schedule: { 'Day 1': { morning: [], afternoon: [], evening: [], night: [], accommodation: [] } },
            targetCurrency: 'TWD',
            exchangeRate: 0.22,
            checklist: [],
            region: 'tokyo', // Default to Tokyo
            createdAt: Date.now()
        };
        setPlans([...plans, newPlan]);
        setActivePlanId(newPlan.id);
        setCurrentDay(1);
    };

    // Delete plan
    const handleDeletePlan = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (plans.length <= 1) return;
        const newPlans = plans.filter(p => p.id !== id);
        setPlans(newPlans);
        if (id === activePlanId) {
            setActivePlanId(newPlans[0].id);
        }
    };

    // Add day
    const handleAddDay = () => {
        const newDayKey = `Day ${activePlan.totalDays + 1}`;
        const newSchedule = {
            ...activePlan.schedule,
            [newDayKey]: { morning: [], afternoon: [], evening: [], night: [], accommodation: [] }
        };
        const oldEnd = new Date(activePlan.endDate);
        oldEnd.setDate(oldEnd.getDate() + 1);
        updateActivePlan({
            totalDays: activePlan.totalDays + 1,
            schedule: newSchedule,
            endDate: oldEnd.toISOString().split('T')[0]
        });
    };

    // Delete day
    const handleDeleteDay = (dayToDelete: number, e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (activePlan.totalDays <= 1) return;
        if (!confirm(t.deleteDay || `Delete Day ${dayToDelete}?`)) return;

        const newSchedule: Record<string, DaySchedule> = {};
        for (let i = 1; i <= activePlan.totalDays; i++) {
            if (i < dayToDelete) {
                newSchedule[`Day ${i}`] = activePlan.schedule[`Day ${i}`];
            } else if (i > dayToDelete) {
                newSchedule[`Day ${i - 1}`] = activePlan.schedule[`Day ${i}`];
            }
        }

        const oldEnd = new Date(activePlan.endDate);
        oldEnd.setDate(oldEnd.getDate() - 1);

        updateActivePlan({
            totalDays: activePlan.totalDays - 1,
            schedule: newSchedule,
            endDate: oldEnd.toISOString().split('T')[0]
        });

        if (currentDay > activePlan.totalDays - 1) {
            setCurrentDay(activePlan.totalDays - 1);
        }
    };

    // Get formatted display date
    const getDisplayDate = (dayIndex: number): string => {
        if (!activePlan.startDate) return '';
        const start = new Date(activePlan.startDate);
        start.setDate(start.getDate() + dayIndex - 1);

        if (lang === 'en') {
            const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', weekday: 'short' };
            return start.toLocaleDateString('en-US', options);
        } else {
            const month = start.getMonth() + 1;
            const date = start.getDate();
            const dayOfWeek = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'][start.getDay()];
            return `${month}月${date}日 ${dayOfWeek}`;
        }
    };

    // Get short date format
    const getShortDate = (dayIndex: number): string => {
        if (!activePlan.startDate) return '';
        const start = new Date(activePlan.startDate);
        start.setDate(start.getDate() + dayIndex - 1);
        return `${start.getMonth() + 1}/${start.getDate()}`;
    };

    return {
        plans,
        activePlanId,
        activePlan,
        currentDay,
        setPlans,
        setActivePlanId,
        setCurrentDay,
        updateActivePlan,
        updateChecklist,
        handleCreatePlan,
        handleDeletePlan,
        handleAddDay,
        handleDeleteDay,
        getDisplayDate,
        getShortDate
    };
}
