import React from 'react';
import { X, MoveRight } from 'lucide-react';
import { Plan } from '../../types';

interface MoveToDayModalProps {
    isOpen: boolean;
    onClose: () => void;
    totalDays: number;
    currentDay: number;
    onExecute: (day: number) => void;
    t: any;
}

export const MoveToDayModal: React.FC<MoveToDayModalProps> = ({
    isOpen,
    onClose,
    totalDays,
    currentDay,
    onExecute,
    t
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-[1000] flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white rounded-2xl w-full max-w-sm shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
                <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                    <h3 className="font-bold text-gray-800 flex items-center gap-2">
                        <MoveRight size={18} className="text-blue-500" />
                        {t.moveToDay || "Move to Day"}
                    </h3>
                    <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-full text-gray-400">
                        <X size={20} />
                    </button>
                </div>
                <div className="p-4 grid grid-cols-2 gap-2 max-h-[60vh] overflow-y-auto">
                    {Array.from({ length: totalDays }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => onExecute(i + 1)}
                            className={`p-3 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition-all ${currentDay === i + 1
                                ? 'bg-blue-50 border-blue-200 text-blue-600'
                                : 'bg-white border-gray-100 text-gray-600 hover:border-blue-300 hover:shadow-sm'
                                }`}
                        >
                            {t.day} {i + 1}
                            {currentDay === i + 1 && <span className="text-[10px] bg-blue-100 text-blue-600 px-1.5 rounded">{t.current || "Current"}</span>}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
