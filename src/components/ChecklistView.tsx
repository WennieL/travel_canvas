import React, { useState } from 'react';
import { ListTodo, Check, X } from 'lucide-react';
import { ChecklistItem } from '../types';

interface ChecklistViewProps {
    checklist: ChecklistItem[];
    setChecklist: (items: ChecklistItem[]) => void;
    t: any;
}

const ChecklistView: React.FC<ChecklistViewProps> = ({ checklist, setChecklist, t }) => {
    const [newItemText, setNewItemText] = useState('');
    const toggleCheck = (id: string) => setChecklist(checklist.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
    const deleteItem = (id: string) => setChecklist(checklist.filter(item => item.id !== id));
    const addItem = () => { if (!newItemText.trim()) return; setChecklist([...checklist, { id: `c-${Date.now()}`, text: newItemText, checked: false }]); setNewItemText(''); };
    const progress = checklist.length > 0 ? Math.round((checklist.filter(i => i.checked).length / checklist.length) * 100) : 0;

    return (
        <div className="max-w-2xl mx-auto py-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-4"> <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2"><ListTodo size={20} className="text-teal-600" /> {t.preparation}</h2> <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-full">{progress}% {t.completed}</span> </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full mb-6 overflow-hidden"> <div className="bg-teal-500 h-full rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div> </div>
                <div className="space-y-2 mb-6"> {checklist.map(item => (<div key={item.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors group"> <button onClick={() => toggleCheck(item.id)} className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${item.checked ? 'bg-teal-500 border-teal-500 text-white' : 'border-gray-300 text-transparent hover:border-teal-400'}`}><Check size={12} strokeWidth={3} /></button> <span className={`flex-1 text-sm ${item.checked ? 'text-gray-400 line-through' : 'text-gray-700'}`}>{item.text}</span> <button onClick={() => deleteItem(item.id)} className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100"><X size={16} /></button> </div>))} </div>
                <div className="flex gap-2"> <input type="text" value={newItemText} onChange={(e) => setNewItemText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addItem()} placeholder={t.addItem} className="flex-1 bg-gray-50 border-none rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-teal-500" /> <button onClick={addItem} className="bg-teal-600 text-white px-3 py-2 rounded-lg hover:bg-teal-700 text-sm font-bold">{t.add}</button> </div>
            </div>
        </div>
    );
};

export default ChecklistView;
