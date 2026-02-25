import { useState, useEffect } from 'react';
import { Plan, ScheduleItem } from '../types';

// Type for formatted category breakdown item
export interface CategoryBreakdownItem {
    type: string;
    label: string;
    amount: number;
    color: string;
}

export interface UseBudgetReturn {
    budgetLimit: number;
    setBudgetLimit: React.Dispatch<React.SetStateAction<number>>;
    calculateTotalBudget: () => number;
    calculateCategoryBreakdown: () => CategoryBreakdownItem[];
    budgetSettings: { currency: string; exchangeRate: number };
    updateBudgetSettings: (currency: string, exchangeRate: number) => void;
}

export function useBudget(activePlan: Plan, t: Record<string, string>): UseBudgetReturn {
    // Budget limit state with localStorage persistence
    const [budgetLimit, setBudgetLimit] = useState<number>(() => {
        try {
            const saved = localStorage.getItem('budget_limit');
            return saved ? parseInt(saved) : 100000;
        } catch {
            return 100000;
        }
    });

    // Budget settings (currency, exchange rate)
    const [budgetSettings, setBudgetSettings] = useState(() => {
        try {
            const saved = localStorage.getItem('budget_settings');
            return saved ? JSON.parse(saved) : { currency: 'TWD', exchangeRate: 0.21 };
        } catch {
            return { currency: 'TWD', exchangeRate: 0.21 };
        }
    });

    // Persist budget limit
    useEffect(() => {
        try {
            localStorage.setItem('budget_limit', String(budgetLimit));
        } catch (e) {
            console.warn('Failed to save budget limit:', e);
        }
    }, [budgetLimit]);

    // Persist budget settings
    useEffect(() => {
        try {
            localStorage.setItem('budget_settings', JSON.stringify(budgetSettings));
        } catch (e) {
            console.warn('Failed to save budget settings:', e);
        }
    }, [budgetSettings]);

    const updateBudgetSettings = (currency: string, exchangeRate: number) => {
        setBudgetSettings({ currency, exchangeRate });
    };

    // Calculate total budget from all schedule items
    const calculateTotalBudget = (): number => {
        let total = 0;
        if (!activePlan || !activePlan.schedule) return total;

        Object.values(activePlan.schedule).forEach(day => {
            Object.values(day).forEach(slotItems => {
                (slotItems as ScheduleItem[]).forEach((item: ScheduleItem) => {
                    total += Number(item.price) || 0;
                });
            });
        });
        return total;
    };

    // Calculate breakdown by category - returns formatted array
    const calculateCategoryBreakdown = (): CategoryBreakdownItem[] => {
        const breakdown: { [key: string]: number } = {
            attraction: 0,
            food: 0,
            hotel: 0,
            transport: 0,
            other: 0
        };

        if (!activePlan || !activePlan.schedule) return [];

        Object.values(activePlan.schedule).forEach(day => {
            Object.values(day).forEach(slotItems => {
                (slotItems as ScheduleItem[]).forEach((item: ScheduleItem) => {
                    const type = item.type || 'other';
                    const key = ['attraction', 'food', 'hotel', 'transport'].includes(type) ? type : 'other';
                    breakdown[key] += Number(item.price) || 0;
                });
            });
        });

        return [
            { type: 'attraction', label: t.categoryAttraction || '景點', amount: breakdown.attraction, color: '#14b8a6' },
            { type: 'food', label: t.categoryFood || '餐飲', amount: breakdown.food, color: '#f97316' },
            { type: 'hotel', label: t.categoryHotel || '住宿', amount: breakdown.hotel, color: '#8b5cf6' },
            { type: 'transport', label: t.categoryTransport || '交通', amount: breakdown.transport, color: '#3b82f6' },
            { type: 'other', label: t.categoryOther || '其他', amount: breakdown.other, color: '#6b7280' }
        ].filter(b => b.amount > 0);
    };

    return {
        budgetLimit,
        setBudgetLimit,
        calculateTotalBudget,
        calculateCategoryBreakdown,
        budgetSettings,
        updateBudgetSettings
    };
}
