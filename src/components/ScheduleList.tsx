import React, { useState } from 'react';
import { Plan, ScheduleItem } from '../types';
import { Calendar, TrendingUp } from 'lucide-react';
import { BudgetWidget } from './BudgetWidget';

// We need to import the internal BudgetOverview logic from BudgetWidget.
// Since BudgetWidget renders the button AND the modal, we need to use the exported BudgetOverview
// or wrap BudgetWidget in a way that forces it open?
// Actually, BudgetWidget logic handles the state of the modal.
// We want to embed the CONTENT of the budget widget into the tab.
// So we should use the exported BudgetOverview if available, or BudgetWidget if we want the button.
// But we want the FULL VIEW embedded.
// So let's use the BudgetOverview we just exported.
import { BudgetWidget as BudgetWidgetComponent } from './BudgetWidget';
// Wait, I need to check how to import the named export BudgetOverview.
import { BudgetOverview } from './BudgetWidget';

interface ScheduleListProps {
    activePlan: Plan;
    t: any;
    budgetProps: any; // Pass all budget props
    showToastMessage: (message: string, type: 'success' | 'error') => void;
}

const ScheduleList: React.FC<ScheduleListProps> = ({ activePlan, t, budgetProps, showToastMessage }) => {
    const [activeTab, setActiveTab] = useState<'schedule' | 'budget'>('schedule');

    // Budget Logic (Duplicate state management here? Or pass from BudgetWidget?)
    // BudgetOverview requires a lot of props that are local state in BudgetWidget (tempLimit, etc.)
    // We should probably instantiate BudgetWidget here? But BudgetWidget renders a button.
    // We want the ModalContent EMBEDDED.
    // The ModalContent (BudgetOverview) needs state like tempLimit, showModal etc.
    // If we use BudgetOverview, we need to manage that state here as well.
    // This duplicates logic from BudgetWidget.
    // Ideally, BudgetWidget should expose a "EmbedView" component that manages its own state but renders flat.
    // We didn't do that yet. We just exported the View.
    // Let's quickly create a wrapper here that manages the state for BudgetOverview.
    // Copying strict state logic from BudgetWidget...

    const { spent, limit, currency, exchangeRate, onSetLimit, onSetSettings } = budgetProps;

    // State for BudgetOverview
    const [showModal, setShowModal] = useState(true); // Always true for embed
    const initialRate = exchangeRate || 0.21;
    const [tempLimit, setTempLimit] = useState(Math.round(limit * initialRate).toString());
    const [tempCurrency, setTempCurrency] = useState(currency || 'TWD');
    const [tempRate, setTempRate] = useState(exchangeRate?.toString() || '0.21');

    // Sync props to state
    React.useEffect(() => {
        if (currency) setTempCurrency(currency);
        if (exchangeRate) setTempRate(exchangeRate.toString());
        const currentRate = parseFloat(tempRate) || 0.21;
        setTempLimit(Math.round(limit * currentRate).toString());
    }, [limit, currency, exchangeRate]);

    const percentage = limit > 0 ? Math.min((spent / limit) * 100, 100) : 0;
    const remaining = limit - spent;
    const isOverBudget = spent > limit && limit > 0;

    // Breakdown logic (need calculation props?)
    // budgetProps needs 'breakdown'
    const breakdown = budgetProps.breakdown || [];

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

    const [isSuccess, setIsSuccess] = useState(false);

    const handleSave = () => {
        const rate = parseFloat(tempRate) || 1;
        const limitInCurrency = parseInt(tempLimit) || 0;
        const newLimitJPY = Math.round(limitInCurrency / rate);
        onSetLimit(newLimitJPY);
        if (onSetSettings) {
            onSetSettings(tempCurrency, rate);
        }

        setIsSuccess(true);
        // showToastMessage(t.budgetUpdated, 'success'); // Disabled in favor of button feedback

        // Reset success state after 2 seconds
        setTimeout(() => {
            setIsSuccess(false);
        }, 2000);
    };

    const calculatedJPY = Math.round((parseInt(tempLimit) || 0) / (parseFloat(tempRate) || 1));


    return (
        <div className="h-full bg-white rounded-2xl p-4 lg:p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto flex flex-col">

            {/* Header / Tabs */}
            <div className="mb-6">
                <div className="flex bg-gray-100/50 p-1 rounded-xl w-full max-w-md mx-auto">
                    <button
                        onClick={() => setActiveTab('schedule')}
                        className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${activeTab === 'schedule' ? 'bg-white shadow-sm text-teal-600' : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        <Calendar size={16} />
                        {t.checklist || 'Checklist'}
                    </button>
                    <button
                        onClick={() => setActiveTab('budget')}
                        className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${activeTab === 'budget' ? 'bg-white shadow-sm text-teal-600' : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        <TrendingUp size={16} />
                        {t.budget || 'Budget'}
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
                {activeTab === 'schedule' ? (
                    <div className="space-y-4 pb-24 lg:pb-0">
                        {/* Header for Checklist */}
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span className="w-1 h-8 bg-teal-500 rounded-full block"></span>
                            {t.checklist}
                        </h2>
                        {Object.keys(activePlan.schedule).map(day => (
                            <div key={day} className="border-b border-gray-100 pb-4 last:border-0">
                                <h3 className="font-bold text-teal-600 mb-3">{day}</h3>
                                <div className="space-y-2 pl-4">
                                    {['morning', 'afternoon', 'evening', 'night'].map(slot => (
                                        (activePlan.schedule[day] as any)[slot]?.map((item: ScheduleItem) => (
                                            <div key={item.instanceId} className="flex items-center gap-3">
                                                <input type="checkbox" className="w-4 h-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500" />
                                                <span className="text-gray-700">{item.title}</span>
                                            </div>
                                        ))
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="h-full">
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
                )}
            </div>
        </div>
    );
};

export default ScheduleList;
