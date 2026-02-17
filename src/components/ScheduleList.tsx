import React, { useState } from 'react';
import { Plan, ChecklistItem } from '../types';
import { Calendar, TrendingUp } from 'lucide-react';
import ChecklistView from './ChecklistView';
import BudgetView from './BudgetView';

interface ScheduleListProps {
    activePlan: Plan;
    t: any;
    budgetProps: any;
    showToastMessage: (message: string, type: 'success' | 'warning' | 'error' | 'info') => void;
    onUpdateChecklist: (newChecklist: ChecklistItem[]) => void;
    lang: string;
}

const ScheduleList: React.FC<ScheduleListProps> = ({ activePlan, t, budgetProps, showToastMessage, onUpdateChecklist, lang }) => {
    const [activeTab, setActiveTab] = useState<'schedule' | 'budget'>('schedule');

    return (
        <div className="schedule-content h-full bg-white rounded-2xl p-4 lg:p-8 shadow-sm border border-gray-100 max-w-3xl mx-auto flex flex-col">
            {/* Header / Tabs */}
            <div className="mb-6">
                <div className="flex bg-gray-100/50 p-1 rounded-xl w-full max-w-md mx-auto">
                    <button
                        onClick={() => setActiveTab('schedule')}
                        className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${activeTab === 'schedule' ? 'bg-white shadow-sm text-teal-600' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        <Calendar size={16} />
                        {t.checklist || 'Checklist'}
                    </button>
                    <button
                        onClick={() => setActiveTab('budget')}
                        className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${activeTab === 'budget' ? 'bg-white shadow-sm text-teal-600' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        <TrendingUp size={16} />
                        {t.budget || 'Budget'}
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
                {activeTab === 'schedule' ? (
                    <div className="pb-24 lg:pb-0">
                        <ChecklistView
                            activePlan={activePlan}
                            t={t}
                            onUpdateChecklist={onUpdateChecklist}
                            lang={lang}
                            showToastMessage={showToastMessage}
                            hideTitle={true}
                        />
                    </div>
                ) : (
                    <div className="h-full">
                        <BudgetView
                            spent={budgetProps.spent}
                            limit={budgetProps.limit}
                            breakdown={budgetProps.breakdown}
                            currency={budgetProps.currency}
                            exchangeRate={budgetProps.exchangeRate}
                            onSetLimit={budgetProps.onSetLimit}
                            onSetSettings={budgetProps.onSetSettings}
                            t={t}
                            hideTitle={true}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScheduleList;
