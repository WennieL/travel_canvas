import React, { useState } from 'react';
import { X, Check, Plus, FolderOpen, Trash2 } from 'lucide-react';
import { Plan } from '../../types';

interface PlanManagerModalProps {
    isOpen: boolean;
    onClose: () => void;
    plans: Plan[];
    activePlanId: string;
    onSelectPlan: (id: string) => void;
    onCreatePlan: () => void;
    onDeletePlan: (id: string, e: React.MouseEvent) => void;
    t: Record<string, string>;
}

export const PlanManagerModal: React.FC<PlanManagerModalProps> = ({
    isOpen,
    onClose,
    plans,
    activePlanId,
    onSelectPlan,
    onCreatePlan,
    onDeletePlan,
    t
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-[1000] flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white rounded-xl w-full max-w-lg shadow-2xl p-5 flex flex-col max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-800 flex items-center gap-2">
                        <FolderOpen size={18} className="text-teal-600" />
                        {t.myPlans}
                    </h3>
                    <button onClick={onClose}>
                        <X size={20} className="text-gray-400" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-2">
                    {plans.map(p => (
                        <div
                            key={p.id}
                            onClick={() => {
                                onSelectPlan(p.id);
                                onClose();
                            }}
                            className={`p-3 rounded-lg border flex justify-between items-center cursor-pointer group ${activePlanId === p.id
                                ? 'border-teal-500 bg-teal-50'
                                : 'border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            <div>
                                <div className="font-bold text-sm text-gray-700">{p.name}</div>
                                <div className="text-xs text-gray-400">
                                    {p.startDate} • {p.totalDays} {t.day}
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {plans.length > 1 && (
                                    <button
                                        onClick={(e) => onDeletePlan(p.id, e)}
                                        className="p-1 rounded hover:bg-red-50 text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                )}
                                {activePlanId === p.id && <Check size={16} className="text-teal-600" />}
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={() => {
                            onCreatePlan();
                            onClose();
                        }}
                        className="w-full py-2 border border-dashed border-gray-300 text-gray-500 rounded-lg text-sm hover:border-teal-500 hover:text-teal-600 flex items-center justify-center gap-2 mt-2"
                    >
                        <Plus size={16} />
                        {t.planCreated}
                    </button>
                </div>
            </div>
        </div>
    );
};
