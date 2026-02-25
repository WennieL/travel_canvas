import { useState, useEffect } from 'react';
import { Plan, DaySchedule, ChecklistItem, TimeSlot, ScheduleItem, TransportMode, LangType, Region, FullSchedule, TravelItem } from '../types';
import { TOKYO_DEMO_PLAN, REGION_DEFAULT_CHECKLISTS, SAMPLE_ASSETS, ALL_SUGGESTIONS } from '../data';

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
    handleCreatePlan: (data: {
        origin: string;
        destination: Region;
        startDate: string;
        endDate: string;
        totalDays: number;
    }) => void;
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
                    // Hydrate plans with latest asset data if missing
                    const hydratedPlans = hydratePlans(parsedPlans);
                    setPlans(hydratedPlans);
                }
            }
            if (savedActiveId) {
                setActivePlanId(savedActiveId);
            }
        } catch (e) {
            console.error("Failed to load plans from storage", e);
        }
    }, []);

    // Helper to enrich stale items with latest data from master lists
    const hydratePlans = (plansToHydrate: Plan[]): Plan[] => {
        // Master assets for hydration

        // Flat array of all possible master assets to match against
        const masterAssets: TravelItem[] = [
            ...SAMPLE_ASSETS,
            ...Object.values(ALL_SUGGESTIONS as any).flatMap((region: any) =>
                Object.values(region).flat() as TravelItem[]
            )
        ];

        return plansToHydrate.map(plan => {
            const newSchedule = { ...plan.schedule };

            Object.keys(newSchedule).forEach(day => {
                const dayData = newSchedule[day];
                ['morning', 'afternoon', 'evening', 'night', 'accommodation'].forEach(slot => {
                    const items = (dayData as any)[slot] as ScheduleItem[];
                    if (items && Array.isArray(items)) {
                        (dayData as any)[slot] = items.map(item => {
                            // If item already has full data (insiderTip), skip hydration
                            if (item.insiderTip && item.lat && item.lng) return item;

                            // Look for matching master asset by ID
                            const master = masterAssets.find(m => m.id === item.id);
                            if (master) {
                                // Hydrate missing fields but keep instance specifics (startTime, transport, etc.)
                                return {
                                    ...item,
                                    titleEn: item.titleEn || master.titleEn,
                                    description: item.description || master.description,
                                    descriptionEn: item.descriptionEn || master.descriptionEn,
                                    lat: item.lat || master.lat,
                                    lng: item.lng || master.lng,
                                    insiderTip: item.insiderTip || master.insiderTip,
                                    tags: (item as any).tags || master.tags,
                                    address: item.address || master.address,
                                    rating: item.rating || master.rating
                                };
                            }
                            return item;
                        });
                    }
                });
            });

            return { ...plan, schedule: newSchedule };
        });
    };

    // Save to localStorage
    useEffect(() => {
        if (isInitialized) {
            try {
                localStorage.setItem('travel_plans', JSON.stringify(plans));
                localStorage.setItem('active_plan_id', activePlanId);
            } catch (e) {
                console.warn('Failed to save plans to localStorage:', e);
            }
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
    const handleCreatePlan = (data: {
        origin: string;
        destination: Region;
        startDate: string;
        endDate: string;
        totalDays: number;
    }) => {
        const { origin, destination, startDate, endDate, totalDays } = data;
        const defaultChecklist = REGION_DEFAULT_CHECKLISTS[destination]?.[lang] || REGION_DEFAULT_CHECKLISTS['all']?.[lang] || [];

        // Generate schedule skeleton based on totalDays
        const schedule: FullSchedule = {};
        for (let i = 1; i <= totalDays; i++) {
            schedule[`Day ${i}`] = { morning: [], afternoon: [], evening: [], night: [], accommodation: [] };
        }

        const newPlan: Plan = {
            id: `plan_${Date.now()}`,
            name: `${destination.toUpperCase()} Trip`,
            origin,
            destination: destination.toUpperCase(),
            startDate,
            endDate,
            totalDays,
            schedule,
            targetCurrency: destination === 'melbourne' ? 'AUD' : 'TWD',
            exchangeRate: destination === 'melbourne' ? 21.0 : 0.22,
            checklist: defaultChecklist,
            region: destination,
            createdAt: Date.now()
        };
        setPlans([...plans, newPlan]);
        setActivePlanId(newPlan.id);
        setCurrentDay(1);
    };

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
            const dayOfWeekMap: Record<number, string> = {
                0: t.sun,
                1: t.mon,
                2: t.tue,
                3: t.wed,
                4: t.thu,
                5: t.fri,
                6: t.sat
            };
            const dayOfWeek = dayOfWeekMap[start.getDay()];
            return (t.monthDay || '{month}/{date}').replace('{month}', month.toString()).replace('{date}', date.toString()) + ` ${dayOfWeek}`;
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
