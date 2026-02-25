import React from 'react';
import { ChevronsUpDown } from 'lucide-react';
import { getTransportIcon } from '../utils';
import { TransportMode } from '../types';

interface TransportSelectorProps {
    mode: TransportMode;
    label: string;
    onClick: (e: React.MouseEvent) => void;
    title: string;
}

const TransportSelector: React.FC<TransportSelectorProps> = ({
    mode, label, onClick, title
}) => {
    return (
        <div
            className="relative w-full flex items-center py-1.5"
            onClick={onClick}
            title={title}
        >
            <div className="flex items-center gap-1.5 bg-teal-50 hover:bg-teal-100 border border-teal-200 hover:border-teal-300 rounded-full px-3 py-1 cursor-pointer transition-all group/transport">
                <span className="text-teal-500 group-hover/transport:text-teal-600">
                    {getTransportIcon(mode)}
                </span>
                <span className="text-[10px] text-teal-700 font-medium">
                    {label}
                </span>
                <ChevronsUpDown size={10} className="text-teal-300 group-hover/transport:text-teal-400" />
            </div>
        </div>
    );
};

export default TransportSelector;
