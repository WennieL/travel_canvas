import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Wand2, X } from 'lucide-react';
import { TimeSlot } from '../types';

interface SmartTimeInputProps {
    slot: TimeSlot;
    index: number;
    value: string;
    onChange: (val: string) => void;
    suggestedTime: string | null;
    className?: string;
}

const HOURS = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
const MINUTES = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

const SmartTimeInput: React.FC<SmartTimeInputProps> = ({ slot, index, value, onChange, suggestedTime, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const popupRef = useRef<HTMLDivElement>(null);
    const hourRef = useRef<HTMLUListElement>(null);
    const minuteRef = useRef<HTMLUListElement>(null);

    const [draftHour, setDraftHour] = useState('12');
    const [draftMinute, setDraftMinute] = useState('00');

    // Default to 12:00 if no value
    const [currentHour, currentMinute] = value ? value.split(':') : ['12', '00'];

    useEffect(() => {
        if (isOpen) {
            setDraftHour(currentHour);
            setDraftMinute(currentMinute);
        }
    }, [isOpen, currentHour, currentMinute]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                containerRef.current && !containerRef.current.contains(e.target as Node) &&
                popupRef.current && !popupRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        const updateCoords = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                
                // Default position: centered below the button
                let leftPos = rect.left + (rect.width / 2);
                let topPos = rect.bottom + 8;
                
                // Approximate dimensions of the popup
                const popupWidth = 220;
                const popupHeight = 280;
                const halfWidth = popupWidth / 2;
                const padding = 12;
                
                // Prevent overflowing the left edge (common on mobile)
                if (leftPos - halfWidth < padding) {
                    leftPos = halfWidth + padding;
                }
                
                // Prevent overflowing the right edge
                if (leftPos + halfWidth > window.innerWidth - padding) {
                    leftPos = window.innerWidth - halfWidth - padding;
                }
                
                // Prevent overflowing the bottom edge (flip to top if needed)
                if (topPos + popupHeight > window.innerHeight) {
                    topPos = Math.max(padding, rect.top - popupHeight - 8);
                }

                setCoords({
                    top: topPos,
                    left: leftPos
                });
            }
        };

        if (isOpen) {
            updateCoords();
            document.addEventListener('mousedown', handleClickOutside);
            window.addEventListener('scroll', updateCoords, true);
            window.addEventListener('resize', updateCoords);
            
            // Scroll to selected on open - short delay to allow DOM render
            setTimeout(() => {
                const hEl = hourRef.current?.querySelector('[data-selected="true"]');
                const mEl = minuteRef.current?.querySelector('[data-selected="true"]');
                if (hEl) hEl.scrollIntoView({ block: 'center', behavior: 'smooth' });
                if (mEl) mEl.scrollIntoView({ block: 'center', behavior: 'smooth' });
            }, 50);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', updateCoords, true);
            window.removeEventListener('resize', updateCoords);
        };
    }, [isOpen]);

    const handleSetSuggested = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (suggestedTime) {
            onChange(suggestedTime);
            setIsOpen(false);
        }
    };

    const handleSave = (e: React.MouseEvent) => {
        e.stopPropagation();
        onChange(`${draftHour}:${draftMinute}`);
        setIsOpen(false);
    };

    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        onChange('');
        setIsOpen(false);
    };

    return (
        <>
        <div
            ref={containerRef}
            onClick={() => setIsOpen(!isOpen)}
            className={`relative inline-flex items-center justify-center group/time cursor-pointer ${className || ''}`}
        >
            {/* Visual Label */}
            <div className={`
                pointer-events-none z-10 font-mono transition-all duration-200
                ${isOpen ? 'scale-110 text-teal-600 font-bold' : ''}
                ${!value ? 'opacity-40' : 'text-slate-800 font-bold'}
                text-sm tracking-wide whitespace-nowrap
            `}>
                {value || "--:--"}
            </div>

            {/* Magic Suggestion Button */}
            {!value && suggestedTime && (
                <button
                    onClick={handleSetSuggested}
                    className="absolute -bottom-8 right-0 text-[10px] text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100 shadow-sm flex items-center gap-1 opacity-0 group-hover/time:opacity-100 transition-all z-30 font-bold"
                >
                    <Wand2 size={12} />
                    {suggestedTime}
                </button>
            )}
        </div>

        {/* Custom Time Picker Popover Rendered via Portal */}
        {isOpen && ReactDOM.createPortal(
            <div 
                ref={popupRef}
                className="fixed bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-teal-100 p-3 flex flex-col gap-3 z-[9999] animate-in fade-in zoom-in-95 duration-200 min-w-[200px]"
                style={{ top: coords.top, left: coords.left, transform: 'translateX(-50%)' }}
                onClick={e => e.stopPropagation()}
                onWheel={e => e.stopPropagation()}
            >
                <div className="flex gap-2 justify-center h-52">
                    {/* Hours List (24h) */}
                    <ul 
                        ref={hourRef} 
                        className="w-20 overflow-y-auto rounded-xl bg-slate-50 border border-slate-100 py-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-400"
                    >
                        {HOURS.map(h => (
                            <li 
                               key={h}
                               data-selected={h === draftHour}
                               className={`text-center py-2.5 mx-1 my-0.5 rounded-lg cursor-pointer text-[15px] font-semibold transition-all
                                   ${h === draftHour 
                                       ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20' 
                                       : 'text-slate-600 hover:bg-teal-100 hover:text-teal-800'
                                   }
                               `}
                               onClick={(e) => { e.stopPropagation(); setDraftHour(h); }}
                            >
                               {h}
                            </li>
                        ))}
                    </ul>
                    
                    <div className="text-slate-300 font-black py-2 flex items-center justify-center text-xl animate-pulse">:</div>

                    {/* Minutes List */}
                    <ul 
                        ref={minuteRef} 
                        className="w-20 overflow-y-auto rounded-xl bg-slate-50 border border-slate-100 py-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-400"
                    >
                        {MINUTES.map(m => (
                            <li 
                               key={m}
                               data-selected={m === draftMinute}
                               className={`text-center py-2.5 mx-1 my-0.5 rounded-lg cursor-pointer text-[15px] font-semibold transition-all
                                   ${m === draftMinute 
                                       ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20' 
                                       : 'text-slate-600 hover:bg-teal-100 hover:text-teal-800'
                                   }
                               `}
                               onClick={(e) => { e.stopPropagation(); setDraftMinute(m); }}
                            >
                               {m}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Actions Panel */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-3 px-1 mt-1">
                    <button 
                        onClick={handleClear}
                        className="text-xs font-bold text-rose-500 hover:bg-rose-50 px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 group"
                    >
                        <X size={14} strokeWidth={3} className="group-hover:rotate-90 transition-transform" /> {value ? 'Delete' : 'Cancel'}
                    </button>
                    <button 
                        onClick={handleSave}
                        className="text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 px-6 py-2 rounded-lg transition-colors shadow-md shadow-teal-600/20 active:scale-95"
                    >
                        Save
                    </button>
                </div>
            </div>,
            document.body
        )}
        </>
    );
};

export default SmartTimeInput;
