import React, { useEffect } from 'react';

interface ToastProps {
    message: string;
    onClose: () => void;
    duration?: number;
    type?: 'success' | 'warning' | 'error' | 'info';
}

export const Toast: React.FC<ToastProps> = ({ message, onClose, duration = 3000, type = 'success' }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const getBgColor = () => {
        switch (type) {
            case 'warning': return 'bg-amber-500 text-white shadow-amber-200';
            case 'error': return 'bg-red-500 text-white shadow-red-200';
            case 'info': return 'bg-blue-500 text-white shadow-blue-200';
            default: return 'bg-gray-900 text-white'; // success
        }
    };

    return (
        <div className="fixed bottom-6 inset-x-0 flex justify-center z-[100] pointer-events-none">
            <div className={`${getBgColor()} px-6 py-3 rounded-full shadow-lg flex items-center gap-2 animate-fade-in-up pointer-events-auto transition-colors`}>
                <span className="text-sm font-medium">{message}</span>
            </div>
        </div>
    );
};
