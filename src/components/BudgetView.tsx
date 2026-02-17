import React, { useState, useEffect } from 'react';
import { BudgetOverview } from './BudgetWidget';

interface BudgetViewProps {
    spent: number;
    limit: number;
    breakdown: any[];
    currency: string;
    exchangeRate: number;
    onSetLimit: (limit: number) => void;
    onSetSettings: (currency: string, rate: number) => void;
    t: any;
    hideTitle?: boolean;
}

const BudgetView: React.FC<BudgetViewProps> = ({
    spent,
    limit,
    breakdown = [],
    currency,
    exchangeRate,
    onSetLimit,
    onSetSettings,
    t,
    hideTitle = false
}) => {
    const [showModal, setShowModal] = useState(true);
    const initialRate = exchangeRate || 0.21;
    const [tempLimit, setTempLimit] = useState(Math.round(limit * initialRate).toString());
    const [tempCurrency, setTempCurrency] = useState(currency || 'TWD');
    const [tempRate, setTempRate] = useState(exchangeRate?.toString() || '0.21');
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (currency) setTempCurrency(currency);
        if (exchangeRate) setTempRate(exchangeRate.toString());
        const currentRate = parseFloat(tempRate) || 0.21;
        setTempLimit(Math.round(limit * currentRate).toString());
    }, [limit, currency, exchangeRate]);

    const percentage = limit > 0 ? Math.min((spent / limit) * 100, 100) : 0;
    const remaining = limit - spent;
    const isOverBudget = spent > limit && limit > 0;

    const generatePieGradient = () => {
        if (breakdown.length === 0) return 'conic-gradient(#e5e7eb 0deg 360deg)';
        const total = breakdown.reduce((sum: number, cat: any) => sum + cat.amount, 0);
        if (total === 0) return 'conic-gradient(#e5e7eb 0deg 360deg)';
        let currentAngle = 0;
        const segments: string[] = [];
        breakdown.forEach((cat: any) => {
            const angle = (cat.amount / total) * 360;
            segments.push(`${cat.color} ${currentAngle}deg ${currentAngle + angle}deg`);
            currentAngle += angle;
        });
        return `conic-gradient(${segments.join(', ')})`;
    };

    const handleSave = () => {
        const rate = parseFloat(tempRate) || 1;
        const limitInCurrency = parseInt(tempLimit) || 0;
        const newLimitJPY = Math.round(limitInCurrency / rate);
        onSetLimit(newLimitJPY);
        if (onSetSettings) onSetSettings(tempCurrency, rate);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 2000);
    };

    const calculatedJPY = Math.round((parseInt(tempLimit) || 0) / (parseFloat(tempRate) || 1));

    return (
        <div className="max-w-3xl mx-auto w-full h-full">
            {!hideTitle && (
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <span className="w-1 h-8 bg-teal-500 rounded-full block"></span>
                        {t.budget || 'Budget'}
                    </h2>
                </div>
            )}
            <BudgetOverview
                showModal={showModal}
                setShowModal={setShowModal}
                spent={spent}
                limit={limit}
                remaining={remaining}
                isOverBudget={isOverBudget}
                percentage={percentage}
                breakdown={breakdown}
                tempLimit={tempLimit}
                setTempLimit={setTempLimit}
                tempCurrency={tempCurrency}
                setTempCurrency={setTempCurrency}
                tempRate={tempRate}
                setTempRate={setTempRate}
                currency={currency}
                exchangeRate={exchangeRate}
                handleSave={handleSave}
                t={t}
                generatePieGradient={generatePieGradient}
                calculatedJPY={calculatedJPY}
                embed={true}
                isSuccess={isSuccess}
            />
        </div>
    );
};

export default BudgetView;
