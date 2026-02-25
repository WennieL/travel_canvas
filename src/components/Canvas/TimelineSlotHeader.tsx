import React from 'react';
import { Sun, Coffee, Moon, Clock, Sunset, BedDouble } from 'lucide-react';
import { TimeSlot } from '../../types';
import { getSlotLabel } from '../../utils';
import { CapacityIndicator } from './CapacityIndicator';

interface TimelineSlotHeaderProps {
    slot: TimeSlot | 'accommodation';
    t: any;
    capacityStatus?: 'busy' | 'overload' | null;
}

const slotConfig: Record<string, { color: string; time: string; icon?: React.ReactNode }> = {
    morning: { color: 'text-orange-500', time: '06:00 - 12:00' },
    afternoon: { color: 'text-blue-500', time: '12:00 - 18:00' },
    evening: { color: 'text-purple-500', time: '18:00 - 22:00' },
    night: { color: 'text-indigo-900', time: '22:00 - 06:00' },
    accommodation: { color: 'text-indigo-600', time: '', icon: <BedDouble size={20} className="text-indigo-600" /> }
};

const getSlotIcon = (slot: string) => {
    switch (slot) {
        case 'morning': return <Sun size={14} />;
        case 'afternoon': return <Coffee size={14} />;
        case 'evening': return <Sunset size={14} />;
        case 'night': return <Moon size={14} />;
        default: return <Clock size={14} />;
    }
};

export const TimelineSlotHeader: React.FC<TimelineSlotHeaderProps> = ({
    slot,
    t,
    capacityStatus
}) => {
    const config = slotConfig[slot];
    if (!config) return null;

    return (
        <div className="relative flex items-center h-12 py-3 pl-12 lg:pl-16">
            {/* Line segment through this label */}
            <div className="absolute left-[20px] lg:left-[24px] top-0 bottom-0 w-0.5 bg-gray-200" />

            {/* Slot label anchored to the line */}
            <div className="absolute left-0 right-0 flex items-center z-10">
                {/* Icon centered on spine */}
                <div className={`absolute left-[21px] lg:left-[25px] -translate-x-1/2 w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center border-2 border-white bg-white shadow-sm ring-4 ring-white ${config.color} ${config.color.replace('text-', 'bg-').replace('500', '50').replace('600', '50')} ${config.color.replace('text-', 'border-').replace('500', '200').replace('600', '200')}`}>
                    <span className="text-xl">{config.icon || getSlotIcon(slot)}</span>
                </div>

                {/* Text labels shifted right of the icon */}
                <div className="pl-12 lg:pl-14 flex flex-col justify-center">
                    <div className="flex items-center gap-4">
                        <h3 className={`text-base lg:text-lg font-black uppercase tracking-widest ${config.color}`}>
                            {slot === 'accommodation' ? (t.accommodation || 'Accommodation') : getSlotLabel(slot, t)}
                        </h3>
                        {config.time && (
                            <span className="text-xs lg:text-sm text-gray-400 font-bold tracking-tight bg-gray-50/50 px-2 py-0.5 rounded-full border border-gray-100">
                                {config.time}
                            </span>
                        )}
                        {capacityStatus && <CapacityIndicator status={capacityStatus} t={t} />}
                    </div>
                </div>
            </div>
        </div>
    );
};
