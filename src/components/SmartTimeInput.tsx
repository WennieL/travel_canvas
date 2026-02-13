import React, { useState, useRef } from 'react';
import { Wand2 } from 'lucide-react';
import { addMinutes } from '../utils';
import { TimeSlot } from '../types';

interface SmartTimeInputProps {
    slot: TimeSlot;
    index: number;
    value: string;
    onChange: (val: string) => void;
    suggestedTime: string | null;
    className?: string;
}

const SmartTimeInput: React.FC<SmartTimeInputProps> = ({ slot, index, value, onChange, suggestedTime, className }) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSetSuggested = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (suggestedTime) onChange(suggestedTime);
    };

    const handleContainerClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        // Trigger the native picker if available
        if (inputRef.current) {
            try {
                // @ts-ignore - showPicker is a newer API
                if (inputRef.current.showPicker) {
                    // @ts-ignore
                    inputRef.current.showPicker();
                } else {
                    inputRef.current.focus();
                    inputRef.current.click();
                }
            } catch (err) {
                inputRef.current.focus();
                inputRef.current.click();
            }
        }
    };

    return (
        <div
            onClick={handleContainerClick}
            className={`relative flex items-center justify-center group/time w-full h-full cursor-pointer ${className || ''}`}
        >
            {/* The Invisible Native Time Input */}
            <input
                ref={inputRef}
                type="time"
                value={value || ''}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => onChange(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
            />

            {/* Visual Label */}
            <div className={`
                pointer-events-none z-10 font-mono transition-all duration-200
                ${isFocused ? 'scale-110' : ''}
                ${!value ? 'opacity-40' : ''}
            `}>
                {value || "--:--"}
            </div>

            {/* Magic Suggestion Button */}
            {!value && suggestedTime && (
                <button
                    onClick={handleSetSuggested}
                    className="absolute -bottom-7 right-0 text-[10px] text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100 shadow-sm flex items-center gap-1 opacity-0 group-hover/time:opacity-100 transition-all z-30"
                >
                    <Wand2 size={10} />
                    {suggestedTime}
                </button>
            )}
        </div>
    );
};

export default SmartTimeInput;
