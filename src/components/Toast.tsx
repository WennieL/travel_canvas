import React, { useEffect } from 'react';

interface ToastProps {
    message: string;
    onClose: () => void;
    duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose, duration = 3000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className="fixed bottom-6 inset-x-0 flex justify-center z-[100] pointer-events-none">
            <div className="bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 animate-fade-in-up pointer-events-auto">
                <span className="text-sm font-medium">{message}</span>
            </div>
        </div>
    );
};
