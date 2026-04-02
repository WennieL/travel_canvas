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

    const getIcon = () => {
        switch (type) {
            case 'warning': return '⚠️';
            case 'error': return '❌';
            case 'info': return 'ℹ️';
            default: return '✅';
        }
    };

    const getBgColor = () => {
        switch (type) {
            case 'warning': return 'bg-amber-500/80 border-amber-400/50 text-white';
            case 'error': return 'bg-red-500/80 border-red-400/50 text-white';
            case 'info': return 'bg-blue-500/80 border-blue-400/50 text-white';
            default: return 'bg-teal-500/80 border-teal-400/50 text-white';
        }
    };

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center px-6">
            {/* Background Blur Overlay */}
            <div 
                className="absolute inset-0 bg-black/20 backdrop-blur-[2px] animate-fade-in cursor-pointer" 
                onClick={onClose} 
            />
            
            <div className={`
                relative
                ${getBgColor()} 
                backdrop-blur-xl 
                px-8 py-5 
                rounded-[32px] 
                shadow-[0_20px_50px_rgba(0,0,0,0.3)] 
                border-2 
                flex flex-col items-center gap-3 
                animate-pop-in 
                max-w-xs text-center
            `}>
                <span className="text-3xl filter drop-shadow-md">{getIcon()}</span>
                <span className="text-sm font-bold tracking-tight leading-snug">{message}</span>
            </div>
        </div>
    );
};
