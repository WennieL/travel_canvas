import React, { useState } from 'react';
import { X } from 'lucide-react';

interface DateModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialStartDate: string;
    initialEndDate: string;
    onConfirm: (startDate: string, endDate: string) => void;
    t: Record<string, string>;
}

export const DateModal: React.FC<DateModalProps> = ({
    isOpen,
    onClose,
    initialStartDate,
    initialEndDate,
    onConfirm,
    t
}) => {
    const [tempStartDate, setTempStartDate] = useState(initialStartDate);
    const [tempEndDate, setTempEndDate] = useState(initialEndDate);

    if (!isOpen) return null;

    const isValid = tempStartDate && tempEndDate && tempStartDate <= tempEndDate;

    const handleConfirm = () => {
        if (isValid) {
            onConfirm(tempStartDate, tempEndDate);
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl w-full max-w-sm p-5">
                <h3 className="font-bold mb-4">{t.dateSettings}</h3>
                <div className="space-y-4 mb-4">
                    <div>
                        <label className="block text-xs text-gray-400 mb-1">{t.startDate}</label>
                        <input
                            type="date"
                            className="w-full border rounded-lg p-2"
                            value={tempStartDate}
                            max={tempEndDate}
                            onChange={e => setTempStartDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-gray-400 mb-1">{t.endDate}</label>
                        <input
                            type="date"
                            className="w-full border rounded-lg p-2"
                            value={tempEndDate}
                            min={tempStartDate}
                            onChange={e => setTempEndDate(e.target.value)}
                        />
                    </div>
                    {tempStartDate > tempEndDate && (
                        <p className="text-xs text-red-500 font-bold">{t.dateValidationError}</p>
                    )}
                </div>
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        {t.cancel}
                    </button>
                    <button
                        onClick={handleConfirm}
                        disabled={!isValid}
                        className={`px-3 py-1.5 text-sm rounded-lg text-white transition-all ${!isValid ? 'bg-gray-300 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700'}`}
                    >
                        {t.confirm}
                    </button>
                </div>
            </div>
        </div>
    );
};
