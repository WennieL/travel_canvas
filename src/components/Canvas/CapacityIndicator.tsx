import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

interface CapacityIndicatorProps {
    status: 'busy' | 'overload' | null;
    t: any;
}

export const CapacityIndicator: React.FC<CapacityIndicatorProps> = ({ status, t }) => {
    if (!status) return null;

    if (status === 'busy') {
        return (
            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-yellow-50 text-yellow-600 text-[10px] font-bold border border-yellow-100 uppercase animate-pulse">
                <Clock size={10} /> {t.statusBusy || 'Busy'}
            </span>
        );
    }

    if (status === 'overload') {
        return (
            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-bold border border-red-100 uppercase">
                <AlertTriangle size={10} /> {t.statusOverload || 'Overload'}
            </span>
        );
    }

    return null;
};
