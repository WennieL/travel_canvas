import React, { useState } from 'react';
import { ChecklistItem, Plan } from '../types';
import { Plus, Trash2, RotateCcw, Edit2 } from 'lucide-react';
import { REGION_DEFAULT_CHECKLISTS } from '../data';

interface ChecklistViewProps {
    activePlan: Plan;
    t: any;
    onUpdateChecklist: (newChecklist: ChecklistItem[]) => void;
    lang: string;
    showToastMessage: (message: string, type: 'success' | 'warning' | 'error' | 'info') => void;
    hideTitle?: boolean;
}

const ChecklistView: React.FC<ChecklistViewProps> = ({
    activePlan,
    t,
    onUpdateChecklist,
    lang,
    showToastMessage,
    hideTitle = false
}) => {
    const [newItemText, setNewItemText] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editingText, setEditingText] = useState('');

    // Ensure checklist exists (if empty and newly opened, populate with defaults)
    React.useEffect(() => {
        if (!activePlan.checklist || activePlan.checklist.length === 0) {
            const region = activePlan.region || 'tokyo';
            const defaults = REGION_DEFAULT_CHECKLISTS[region]?.[lang] || REGION_DEFAULT_CHECKLISTS['all']?.[lang] || [];
            onUpdateChecklist(defaults);
        }
    }, [activePlan.id, lang]);

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

    return (
        <div className="max-w-3xl mx-auto w-full space-y-6">
            {!hideTitle && (
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <span className="w-1 h-8 bg-teal-500 rounded-full block"></span>
                        {t.checklist || 'Checklist'}
                    </h2>
                    <button
                        onClick={resetDefaults}
                        className="text-[10px] font-bold text-gray-400 hover:text-teal-600 flex items-center gap-1 transition-colors uppercase tracking-wider"
                    >
                        <RotateCcw size={12} /> {t.reset || 'Reset'}
                    </button>
                </div>
            )}

            {/* Add Item Input */}
            <div className="relative group">
                <input
                    type="text"
                    value={newItemText}
                    onChange={(e) => setNewItemText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={t.preparationPlaceholder || "新增準備事項..."}
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
                                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${item.checked ? 'bg-teal-500 border-teal-500 text-white' : 'border-gray-200 group-hover:border-teal-300'}`}
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
                            <Plus size={24} className="text-gray-300" />
                        </div>
                        <p className="text-gray-400 text-sm">{t.noPreparationItems || '還沒有準備事項，點擊上方新增吧！'}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChecklistView;

