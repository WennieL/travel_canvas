import React, { useState } from 'react';
import { Plan, ChecklistItem } from '../types';
import { Calendar, TrendingUp, Plus, Trash2, RotateCcw, Edit2 } from 'lucide-react';
import { REGION_DEFAULT_CHECKLISTS } from '../data';
import { BudgetOverview } from './BudgetWidget';

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
    const [newItemText, setNewItemText] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editingText, setEditingText] = useState('');

    // Ensure checklist exists (if empty and newly opened, populate with defaults)
    React.useEffect(() => {
        // If the checklist is literally empty or undefined, populate it based on the current plan's region
        if (!activePlan.checklist || activePlan.checklist.length === 0) {
            const region = activePlan.region || 'tokyo';
            const defaults = REGION_DEFAULT_CHECKLISTS[region]?.[lang] || REGION_DEFAULT_CHECKLISTS['all']?.[lang] || [];
            onUpdateChecklist(defaults);
        }
    }, [activePlan.id, lang]); // Run when switching plans or language. If switch plan and it has no checklist, add defaults.

    const toggleItem = (id: string) => {
        const newChecklist = activePlan.checklist.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        onUpdateChecklist(newChecklist);
    };

    const addItem = () => {
        if (!newItemText.trim()) return;
        const newItem: ChecklistItem = {
            id: `c_${Date.now()}`,
            text: newItemText.trim(),
            checked: false
        };
        onUpdateChecklist([...(activePlan.checklist || []), newItem]);
        setNewItemText('');
    };

    const deleteItem = (id: string) => {
        const newChecklist = activePlan.checklist.filter(item => item.id !== id);
        onUpdateChecklist(newChecklist);
    };

    const startEditing = (item: ChecklistItem) => {
        setEditingId(item.id);
        setEditingText(item.text);
    };

    const saveEdit = () => {
        if (!editingId) return;
        const newChecklist = activePlan.checklist.map(item =>
            item.id === editingId ? { ...item, text: editingText.trim() || item.text } : item
        );
        onUpdateChecklist(newChecklist);
        setEditingId(null);
    };

    const resetDefaults = () => {
        const region = activePlan.region || 'tokyo';
        const defaults = REGION_DEFAULT_CHECKLISTS[region]?.[lang] || REGION_DEFAULT_CHECKLISTS['all']?.[lang] || [];
        onUpdateChecklist(defaults);
        showToastMessage(t.savedSuccess || '已重設為預設清單', 'info');
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') addItem();
    };

    const handleEditKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') saveEdit();
        if (e.key === 'Escape') setEditingId(null);
    };

    // Budget Logic (Copied from previous implementation to maintain functionality)
    const { spent, limit, currency, exchangeRate, onSetLimit, onSetSettings } = budgetProps;
    const [showModal, setShowModal] = useState(true);
    const initialRate = exchangeRate || 0.21;
    const [tempLimit, setTempLimit] = useState(Math.round(limit * initialRate).toString());
    const [tempCurrency, setTempCurrency] = useState(currency || 'TWD');
    const [tempRate, setTempRate] = useState(exchangeRate?.toString() || '0.21');

    React.useEffect(() => {
        if (currency) setTempCurrency(currency);
        if (exchangeRate) setTempRate(exchangeRate.toString());
        const currentRate = parseFloat(tempRate) || 0.21;
        setTempLimit(Math.round(limit * currentRate).toString());
    }, [limit, currency, exchangeRate]);

    const percentage = limit > 0 ? Math.min((spent / limit) * 100, 100) : 0;
    const remaining = limit - spent;
    const isOverBudget = spent > limit && limit > 0;
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
        if (onSetSettings) onSetSettings(tempCurrency, rate);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 2000);
    };

    const calculatedJPY = Math.round((parseInt(tempLimit) || 0) / (parseFloat(tempRate) || 1));

    return (
        <div className="h-full bg-white rounded-2xl p-4 lg:p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto flex flex-col">
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
                    <div className="space-y-6 pb-24 lg:pb-0">
                        <div className="flex items-center justify-between gap-4">
                            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                <span className="w-1 h-8 bg-teal-500 rounded-full block"></span>
                                {t.checklist}
                            </h2>
                            <button
                                onClick={resetDefaults}
                                className="text-[10px] font-bold text-gray-400 hover:text-teal-600 flex items-center gap-1 transition-colors uppercase tracking-wider"
                            >
                                <RotateCcw size={12} /> {t.reset || 'Reset'}
                            </button>
                        </div>

                        {/* Add Item Input */}
                        <div className="relative group">
                            <input
                                type="text"
                                value={newItemText}
                                onChange={(e) => setNewItemText(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder={t.addItem || "新增準備事項..."}
                                className="w-full pl-4 pr-12 py-3 bg-gray-50 border-2 border-transparent focus:border-teal-400 focus:bg-white rounded-xl text-sm transition-all focus:outline-none placeholder:text-gray-400"
                            />
                            <button
                                onClick={addItem}
                                disabled={!newItemText.trim()}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-teal-500 text-white rounded-lg disabled:opacity-30 disabled:scale-95 transition-all shadow-sm"
                            >
                                <Plus size={18} />
                            </button>
                        </div>

                        {/* Checklist Items */}
                        <div className="space-y-2">
                            {activePlan.checklist?.length > 0 ? (
                                activePlan.checklist.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`group flex items-center gap-3 p-3 rounded-xl border transition-all ${item.checked ? 'bg-gray-50/50 border-gray-100 opacity-60' : 'bg-white border-gray-100 hover:border-teal-100 hover:shadow-sm'}`}
                                    >
                                        <button
                                            onClick={() => toggleItem(item.id)}
                                            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all flex-shrink-0 ${item.checked ? 'bg-teal-500 border-teal-500 text-white' : 'border-gray-200 group-hover:border-teal-300'}`}
                                        >
                                            {item.checked && <div className="w-2.5 h-1.5 border-l-2 border-b-2 border-white -rotate-45 mb-0.5" />}
                                        </button>

                                        {editingId === item.id ? (
                                            <input
                                                autoFocus
                                                type="text"
                                                value={editingText}
                                                onChange={(e) => setEditingText(e.target.value)}
                                                onBlur={saveEdit}
                                                onKeyDown={handleEditKeyDown}
                                                className="flex-1 bg-white border-b-2 border-teal-400 outline-none text-sm py-0.5 text-gray-700 font-medium"
                                            />
                                        ) : (
                                            <span
                                                className={`flex-1 text-sm transition-all cursor-text ${item.checked ? 'text-gray-400 line-through' : 'text-gray-700 font-medium'}`}
                                                onClick={() => startEditing(item)}
                                            >
                                                {item.text}
                                            </span>
                                        )}

                                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); startEditing(item); }}
                                                className={`p-1.5 rounded-lg transition-all ${editingId === item.id ? 'text-teal-500 bg-teal-50' : 'text-gray-300 hover:text-teal-500 hover:bg-teal-50'}`}
                                            >
                                                <Edit2 size={12} />
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); deleteItem(item.id); }}
                                                className="p-1.5 text-gray-300 hover:text-red-400 hover:bg-red-50 rounded-lg transition-all"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="py-12 text-center">
                                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Calendar size={24} className="text-gray-300" />
                                    </div>
                                    <p className="text-gray-400 text-sm">{t.noItems || '還沒有準備事項，點擊上方新增吧！'}</p>
                                </div>
                            )}
                        </div>
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
