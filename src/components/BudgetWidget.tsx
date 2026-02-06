import React, { useState } from 'react';
import { Wallet, X, PieChart, TrendingUp } from 'lucide-react';

interface CategoryBreakdown {
    type: string;
    label: string;
    amount: number;
    color: string;
}

interface BudgetWidgetProps {
    spent: number;
    limit: number;
    breakdown: CategoryBreakdown[];
    onSetLimit: (limit: number) => void;
    currency?: string;
    exchangeRate?: number;
    onSetSettings?: (currency: string, rate: number) => void;
    t: any;
    compact?: boolean;
}

export const BudgetWidget: React.FC<BudgetWidgetProps> = ({
    spent,
    limit,
    breakdown,
    onSetLimit,
    currency,
    exchangeRate,
    onSetSettings,
    t,
    compact = false
}) => {
    const [showModal, setShowModal] = useState(false);
    // Initialize tempLimit in Home Currency (approx)
    const initialRate = exchangeRate || 0.21;
    const [tempLimit, setTempLimit] = useState(Math.round(limit * initialRate).toString());
    const [tempCurrency, setTempCurrency] = useState(currency || 'TWD');
    const [tempRate, setTempRate] = useState(exchangeRate?.toString() || '0.21');
    const [isHovered, setIsHovered] = useState(false);

    React.useEffect(() => {
        if (currency) setTempCurrency(currency);
        if (exchangeRate) {
            setTempRate(exchangeRate.toString());
            // When opening, verify tempLimit matches current props
            // But we don't want to overwrite user typing if dependency changes unexpectedly.
            // Since this is a modal, it re-mounts or we rely on showModal to reset?
            // Existing code doesn't reset on open.
        }
    }, [currency, exchangeRate]);

    // Update tempLimit when opening modal to match current limit * rate
    React.useEffect(() => {
        if (showModal) {
            const currentRate = parseFloat(tempRate) || 0.21;
            setTempLimit(Math.round(limit * currentRate).toString());
        }
    }, [showModal]);

    const percentage = limit > 0 ? Math.min((spent / limit) * 100, 100) : 0;
    const remaining = limit - spent;
    const isOverBudget = spent > limit && limit > 0;

    // ... (colors logic)
    const getProgressColor = () => {
        if (isOverBudget) return 'bg-red-500';
        if (percentage >= 90) return 'bg-red-500';
        if (percentage >= 70) return 'bg-yellow-500';
        return 'bg-teal-500';
    };

    const getRingColor = () => {
        if (isOverBudget) return '#ef4444';
        if (percentage >= 90) return '#ef4444';
        if (percentage >= 70) return '#eab308';
        return '#14b8a6';
    };

    const generatePieGradient = () => {
        if (breakdown.length === 0) return 'conic-gradient(#e5e7eb 0deg 360deg)';
        const total = breakdown.reduce((sum, cat) => sum + cat.amount, 0);
        if (total === 0) return 'conic-gradient(#e5e7eb 0deg 360deg)';
        let currentAngle = 0;
        const segments: string[] = [];
        breakdown.forEach(cat => {
            const angle = (cat.amount / total) * 360;
            segments.push(`${cat.color} ${currentAngle}deg ${currentAngle + angle}deg`);
            currentAngle += angle;
        });
        return `conic-gradient(${segments.join(', ')})`;
    };

    const handleSave = () => {
        const rate = parseFloat(tempRate) || 1;
        const limitInCurrency = parseInt(tempLimit) || 0;
        // Convert Home Currency back to JPY
        // Amount(JPY) = Amount(Home) / Rate
        const newLimitJPY = Math.round(limitInCurrency / rate);

        onSetLimit(newLimitJPY);
        if (onSetSettings) {
            onSetSettings(tempCurrency, rate);
        }
        setShowModal(false);
    };

    // ... (Compact/Regular render)

    // Helper to calculate JPY from input
    const calculatedJPY = Math.round((parseInt(tempLimit) || 0) / (parseFloat(tempRate) || 1));

    if (compact) {
        // ... (compact code same as before, no changes needed inside compact block mostly)
        // Except reusing the modal logic.
        // Copying compact render from view...
        const radius = 18;
        const circumference = 2 * Math.PI * radius;
        const strokeDashoffset = circumference - (percentage / 100) * circumference;

        return (
            <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* ... button svg ... */}
                <button
                    onClick={() => setShowModal(true)}
                    className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                    title={`${t.budgetManagement || '預算管理'} (${percentage.toFixed(0)}%)`}
                >
                    {limit > 0 && (
                        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                            <circle cx="20" cy="20" r={radius} fill="none" stroke="#f3f4f6" strokeWidth="3" />
                            <circle cx="20" cy="20" r={radius} fill="none" stroke={getRingColor()} strokeWidth="3" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" className="transition-all duration-500 ease-out" />
                        </svg>
                    )}
                    <Wallet size={18} className={isOverBudget ? 'text-red-500' : 'text-gray-600'} />
                </button>

                {isHovered && !showModal && (
                    <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-50 animate-scale-up origin-top-right">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <div className="text-xs text-gray-500">{t.totalSpent || '總花費'}</div>
                                <div className="text-xl font-bold text-gray-800">¥{spent.toLocaleString()}</div>
                                {currency && exchangeRate && (
                                    <div className="text-xs text-gray-400">≈ {currency} {(spent * exchangeRate).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                                )}
                            </div>
                            <div className="text-right">
                                <div className="text-xs text-gray-500">{t.remaining || '剩餘'}</div>
                                <div className={`font-bold ${remaining < 0 ? 'text-red-500' : 'text-teal-600'}`}>
                                    {remaining < 0 ? '-' : ''}¥{Math.abs(remaining).toLocaleString()}
                                </div>
                            </div>
                        </div>
                        {limit > 0 && (
                            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-3">
                                <div className={`h-full ${getProgressColor()}`} style={{ width: `${percentage}%` }} />
                            </div>
                        )}
                        <div className="text-xs text-center text-gray-400 mt-2 pt-2 border-t border-gray-50">
                            點擊設定預算
                        </div>
                    </div>
                )}

                {showModal && (
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
                        calculatedJPY={calculatedJPY} // Pass this
                    />
                )}
            </div>
        );
    }

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 hover:border-teal-300 hover:bg-teal-50 transition-all group"
            >
                <Wallet size={14} className="text-teal-600" />
                <span>¥{spent.toLocaleString()}</span>
                {limit > 0 && (
                    <>
                        <span className="text-gray-300">/</span>
                        <span className="text-gray-400">¥{limit.toLocaleString()}</span>
                        <div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className={`h-full ${getProgressColor()} transition-all`} style={{ width: `${percentage}%` }} />
                        </div>
                    </>
                )}
                {limit === 0 && (
                    <span className="text-gray-400 text-[10px]">{t.setBudget || '設定預算'}</span>
                )}
            </button>

            {showModal && (
                <ModalContent
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
                    calculatedJPY={calculatedJPY} // Pass this
                />
            )}
        </>
    );
};

// Extracted and Exported BudgetOverview (formerly ModalContent)
export const BudgetOverview = ({ showModal, setShowModal, spent, limit, remaining, isOverBudget, percentage, breakdown, tempLimit, setTempLimit, tempCurrency, setTempCurrency, tempRate, setTempRate, currency, exchangeRate, handleSave, t, generatePieGradient, calculatedJPY, embed = false }: any) => (
    <div className={embed ? "w-full h-full bg-white" : "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"}>
        <div className={embed ? "w-full" : "bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden"}>
            {/* Header */}
            <div className={`bg-gradient-to-r from-teal-500 to-teal-600 p-5 text-white ${embed ? 'rounded-xl mb-4 shadow-sm' : ''}`}>
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                        <TrendingUp size={20} />
                        {t.budgetManagement || '預算管理'}
                    </h3>
                    {!embed && (
                        <button onClick={() => setShowModal(false)} className="p-1 hover:bg-white/20 rounded-full">
                            <X size={20} />
                        </button>
                    )}
                </div>
                {/* Large Budget Display */}
                <div className="mt-4">
                    <div className="text-3xl font-bold">¥{spent.toLocaleString()}</div>
                    {currency && exchangeRate && (
                        <div className="text-sm text-teal-100 opacity-90">
                            ≈ {currency} {(spent * exchangeRate).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </div>
                    )}
                    {limit > 0 && (
                        <div className="text-teal-100 text-sm mt-1">
                            {isOverBudget
                                ? `${t.overBudget || '超出預算'} ¥${Math.abs(remaining).toLocaleString()}`
                                : `${t.budgetRemaining || '剩餘'} ¥${remaining.toLocaleString()}`
                            }
                        </div>
                    )}
                </div>
                {limit > 0 && (
                    <div className="mt-3">
                        <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                            <div className={`h-full ${isOverBudget ? 'bg-red-400' : 'bg-white'} transition-all`} style={{ width: `${Math.min(percentage, 100)}%` }} />
                        </div>
                        <div className="flex justify-between text-xs text-teal-100 mt-1">
                            <span>{percentage.toFixed(0)}%</span>
                            <span>¥{limit.toLocaleString()}</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className={embed ? "space-y-5 pb-20" : "p-5 space-y-5"}>
                {/* Settings Grid */}
                <div>
                    <label className="text-xs text-gray-500 block mb-2">{t.budgetLimit || '預算上限'} ({tempCurrency})</label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">{tempCurrency}</span>
                        <input
                            type="number"
                            value={tempLimit}
                            onChange={(e: any) => setTempLimit(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg py-2 pl-12 pr-3 text-lg font-medium focus:outline-none focus:border-teal-500"
                            placeholder="30000"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                            ≈ ¥{calculatedJPY.toLocaleString()}
                        </div>
                    </div>
                </div>

                {/* Currency Settings */}
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <label className="text-xs text-gray-500 block mb-2 font-medium">匯率設定 ({t.currency || 'Currency'})</label>
                    <div className="flex gap-2">
                        <select
                            value={tempCurrency}
                            onChange={(e: any) => {
                                const newCurrency = e.target.value;
                                setTempCurrency(newCurrency);
                                // Auto-set default rate
                                const rates: any = { 'TWD': 0.21, 'USD': 0.0067, 'AUD': 0.010 };
                                const newRate = rates[newCurrency];
                                if (newRate) {
                                    setTempRate(newRate.toString());
                                    // Update tempLimit to match current JPY limit with new rate
                                    // tempLimit (Target) = limit (JPY) * newRate
                                    setTempLimit(Math.round(limit * newRate).toString());
                                }
                            }}
                            className="border border-gray-200 rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-teal-500 bg-white"
                        >
                            {['TWD', 'USD', 'AUD'].map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        <div className="relative flex-1">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">1 JPY = </span>
                            <input
                                type="number"
                                step="0.0001"
                                value={tempRate}
                                onChange={(e: any) => setTempRate(e.target.value)}
                                className="w-full border border-gray-200 rounded-lg py-2 pl-14 pr-3 text-sm font-medium focus:outline-none focus:border-teal-500"
                                placeholder="0.21"
                            />
                        </div>
                    </div>
                </div>

                {/* Save Button */}
                <button
                    onClick={handleSave}
                    className="w-full py-3 bg-teal-600 text-white rounded-xl font-bold shadow-lg shadow-teal-200 hover:bg-teal-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                    {t.confirm || '儲存設定'}
                </button>

                {/* Category Breakdown */}
                {breakdown.length > 0 && breakdown.some((b: any) => b.amount > 0) && (
                    <div>
                        <label className="text-xs text-gray-500 block mb-3 flex items-center gap-1">
                            <PieChart size={12} />
                            {t.spendingBreakdown || '花費分佈'}
                        </label>
                        <div className="flex items-center gap-6">
                            <div className="w-24 h-24 rounded-full flex-shrink-0" style={{ background: generatePieGradient() }} />
                            <div className="flex-1 space-y-2">
                                {breakdown.filter((b: any) => b.amount > 0).map((cat: any) => (
                                    <div key={cat.type} className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                                            <span className="text-gray-600">{cat.label}</span>
                                        </div>
                                        <span className="font-medium text-gray-800">¥{cat.amount.toLocaleString()}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Quick Budget Presets */}
                <div>
                    <label className="text-xs text-gray-500 block mb-2">{t.quickPresets || '快速設定 (JPY)'}</label>
                    <div className="flex flex-wrap gap-2">
                        {[30000, 50000, 80000, 100000, 150000].map((preset: number) => {
                            // Display preset in Target Currency
                            const rate = parseFloat(tempRate) || 0.21;
                            const approxTarget = Math.round(preset * rate);
                            return (
                                <button
                                    key={preset}
                                    onClick={() => setTempLimit(approxTarget.toString())}
                                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${parseInt(tempLimit) === approxTarget
                                        ? 'bg-teal-600 border-teal-600 text-white'
                                        : 'border-gray-200 text-gray-500 hover:border-teal-300'
                                        }`}
                                >
                                    ¥{preset.toLocaleString()} <span className="opacity-70">({tempCurrency}{approxTarget.toLocaleString()})</span>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

