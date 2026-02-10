import React, { useState } from 'react';
import { Minus, Plus, Wand2 } from 'lucide-react';
import { addMinutes } from '../utils';
import { TimeSlot } from '../types';

interface SmartTimeInputProps {
    slot: TimeSlot;
    index: number;
    value: string;
    onChange: (val: string) => void;
    suggestedTime: string | null;
}

const SmartTimeInput: React.FC<SmartTimeInputProps> = ({ slot, index, value, onChange, suggestedTime }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleAdjust = (e: React.MouseEvent, minutes: number) => {
        e.stopPropagation();
        const baseTime = value || suggestedTime || "09:00";
        const newValue = addMinutes(baseTime, minutes);
        onChange(newValue);
    };

    const handleSetSuggested = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (suggestedTime) onChange(suggestedTime);
    };

    return (
        <div className="flex flex-col items-end gap-1 relative group/time min-w-[60px]">
            <div
                className={`
                  relative flex items-center justify-center 
                  bg-gray-100 border border-transparent rounded px-1.5 py-0.5 text-[11px] font-mono 
                  transition-all w-full
                  ${value ? 'text-gray-700' : 'text-gray-400 border-dashed border-gray-300 hover:border-teal-300'}
                  ${isFocused ? 'ring-1 ring-teal-500 border-teal-500 bg-white' : 'hover:bg-gray-200'}
               `}
            >
                {/* Stepper Buttons (Desktop Only or Hover) */}
                <button
                    onClick={(e) => handleAdjust(e, -15)}
                    className={`absolute left-[-18px] top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-teal-600 hover:bg-teal-50 transition-all hidden lg:group-hover/time:block`}
                    title="-15 min"
                >
                    <Minus size={10} strokeWidth={3} />
                </button>

                <div className="relative flex items-center justify-center w-full">
                    <span className={`pointer-events-none z-0 ${!value ? 'opacity-50' : ''}`}>{value || "-- : --"}</span>
                    <input
                        type="time"
                        value={value || ''}
                        onClick={(e) => e.stopPropagation()}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChange={(e) => onChange(e.target.value)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                </div>

                <button
                    onClick={(e) => handleAdjust(e, 15)}
                    className={`absolute right-[-18px] top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-teal-600 hover:bg-teal-50 transition-all hidden lg:group-hover/time:block`}
                    title="+15 min"
                >
                    <Plus size={10} strokeWidth={3} />
                </button>
            </div>

            {/* Magic Suggestion Button (Only if value is empty and suggestion exists) */}
            {!value && suggestedTime && (
                <button
                    onClick={handleSetSuggested}
                    className="absolute -bottom-6 right-0 text-[10px] text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100 shadow-sm flex items-center gap-1 opacity-0 group-hover/time:opacity-100 transition-all animate-bounce-slow"
                >
                    <Wand2 size={10} />
                    {suggestedTime}
                </button>
            )}
        </div>
    );
};

export default SmartTimeInput;
