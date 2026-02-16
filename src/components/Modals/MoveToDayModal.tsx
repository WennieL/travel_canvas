import React, { useState } from 'react';
import { X, MoveRight, Sun, Coffee, Moon, Star } from 'lucide-react';
import { TimeSlot } from '../../types';

interface MoveToDayModalProps {
    isOpen: boolean;
    onClose: () => void;
    totalDays: number;
    currentDay: number;
    currentSlot: TimeSlot;
    onExecute: (day: number, slot: TimeSlot) => void;
    t: any;
}

const SLOT_OPTIONS: { key: TimeSlot; icon: React.ReactNode; emoji: string }[] = [
    { key: 'morning', icon: <Sun size={14} />, emoji: '☀️' },
    { key: 'afternoon', icon: <Coffee size={14} />, emoji: '🍔' },
    { key: 'evening', icon: <Moon size={14} />, emoji: '🌙' },
    { key: 'night', icon: <Star size={14} />, emoji: '🌃' },
];

export const MoveToDayModal: React.FC<MoveToDayModalProps> = ({
    isOpen,
    onClose,
    totalDays,
    currentDay,
    currentSlot,
    onExecute,
    t
}) => {
    const [selectedDay, setSelectedDay] = useState<number>(currentDay);
    const [selectedSlot, setSelectedSlot] = useState<TimeSlot>(currentSlot);

    // Reset state when modal opens
    React.useEffect(() => {
        if (isOpen) {
            setSelectedDay(currentDay);
            setSelectedSlot(currentSlot);
        }
    }, [isOpen, currentDay, currentSlot]);

    if (!isOpen) return null;

    const hasChanged = selectedDay !== currentDay || selectedSlot !== currentSlot;
    // Don't show slot picker for accommodation items
    const isAccommodation = currentSlot === 'accommodation';

    // Build dynamic button label
    const getButtonLabel = () => {
        if (!hasChanged) return t.moveToDay || 'Move';
        const dayLabel = `${t.day} ${selectedDay}`;
        const slotLabel = t[selectedSlot] || selectedSlot;
        if (selectedDay !== currentDay && selectedSlot !== currentSlot) {
            return `${t.moveTo || 'Move to'} ${dayLabel} · ${slotLabel}`;
        }
        if (selectedDay !== currentDay) {
            return `${t.moveTo || 'Move to'} ${dayLabel}`;
        }
        return `${t.moveTo || 'Move to'} ${slotLabel}`;
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-[1000] flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white rounded-2xl w-full max-w-sm shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                    <h3 className="font-bold text-gray-800 flex items-center gap-2">
                        <MoveRight size={18} className="text-blue-500" />
                        {t.moveTo || 'Move to...'}
                    </h3>
                    <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-full text-gray-400">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-4 space-y-4">
                    {/* Day Selection */}
                    <div>
                        <div className="text-xs font-medium text-gray-500 mb-2">{t.selectDay || 'Select Day'}</div>
                        <div className="grid grid-cols-3 gap-2 max-h-[30vh] overflow-y-auto">
                            {Array.from({ length: totalDays }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedDay(i + 1)}
                                    className={`p-2.5 rounded-xl border text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${selectedDay === i + 1
                                        ? 'bg-blue-50 border-blue-300 text-blue-600 shadow-sm'
                                        : 'bg-white border-gray-100 text-gray-600 hover:border-blue-200 hover:bg-blue-50/30'
                                        }`}
                                >
                                    {t.day} {i + 1}
                                    {currentDay === i + 1 && (
                                        <span className="text-[9px] bg-blue-100 text-blue-600 px-1 rounded">{t.current || 'Now'}</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Time Slot Selection (hide for accommodation items) */}
                    {!isAccommodation && (
                        <div>
                            <div className="text-xs font-medium text-gray-500 mb-2">{t.selectSlot || 'Select Time Slot'}</div>
                            <div className="grid grid-cols-2 gap-2">
                                {SLOT_OPTIONS.map(({ key, emoji }) => (
                                    <button
                                        key={key}
                                        onClick={() => setSelectedSlot(key)}
                                        className={`p-2.5 rounded-xl border text-sm font-medium flex items-center justify-center gap-2 transition-all ${selectedSlot === key
                                            ? 'bg-teal-50 border-teal-300 text-teal-700 shadow-sm'
                                            : 'bg-white border-gray-100 text-gray-600 hover:border-teal-200 hover:bg-teal-50/30'
                                            }`}
                                    >
                                        <span>{emoji}</span>
                                        {t[key] || key}
                                        {currentSlot === key && (
                                            <span className="text-[9px] bg-teal-100 text-teal-600 px-1 rounded">{t.current || 'Now'}</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Hint */}
                    <p className="text-[11px] text-gray-400 text-center">
                        💡 {t.moveHint || 'Only change what you need'}
                    </p>

                    {/* Confirm Button */}
                    <button
                        onClick={() => {
                            onExecute(selectedDay, selectedSlot);
                            onClose();
                        }}
                        disabled={!hasChanged}
                        className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${hasChanged
                            ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-md'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        {getButtonLabel()}
                    </button>
                </div>
            </div>
        </div>
    );
};
