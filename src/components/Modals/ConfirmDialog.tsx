import React, { useEffect } from 'react';
import { X, AlertTriangle, Info, CheckCircle2, AlertCircle } from 'lucide-react';
import { ConfirmType } from '../../contexts/ConfirmContext';

interface ConfirmDialogProps {
    isOpen: boolean;
    title?: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    type?: ConfirmType;
    onConfirm: () => void;
    onCancel: () => void;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
    isOpen,
    title,
    message,
    confirmText,
    cancelText,
    type = 'info',
    onConfirm,
    onCancel
}) => {
    // Handle Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) onCancel();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onCancel]);

    if (!isOpen) return null;

    const getIcon = () => {
        switch (type) {
            case 'warning': return <AlertTriangle className="text-amber-500" size={24} />;
            case 'error': return <AlertCircle className="text-red-500" size={24} />;
            case 'success': return <CheckCircle2 className="text-emerald-500" size={24} />;
            default: return <Info className="text-blue-500" size={24} />;
        }
    };

    const getButtonStyles = () => {
        switch (type) {
            case 'warning': return 'bg-amber-600 hover:bg-amber-700 shadow-amber-200';
            case 'error': return 'bg-red-600 hover:bg-red-700 shadow-red-200';
            case 'success': return 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200';
            default: return 'bg-teal-600 hover:bg-teal-700 shadow-teal-200';
        }
    };

    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
            {/* Backdrop with Blur */}
            <div
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-fade-in"
                onClick={onCancel}
            />

            {/* Modal Content */}
            <div className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 w-full max-w-sm overflow-hidden animate-zoom-in">
                {/* Header Decoration */}
                <div className={`h-1.5 w-full ${type === 'warning' ? 'bg-amber-500' :
                        type === 'error' ? 'bg-red-500' :
                            type === 'success' ? 'bg-emerald-500' : 'bg-teal-500'
                    }`} />

                <div className="p-6">
                    <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${type === 'warning' ? 'bg-amber-50' :
                                type === 'error' ? 'bg-red-50' :
                                    type === 'success' ? 'bg-emerald-50' : 'bg-blue-50'
                            }`}>
                            {getIcon()}
                        </div>

                        <div className="flex-1">
                            {title && <h3 className="text-lg font-bold text-slate-800 mb-1">{title}</h3>}
                            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">
                                {message}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 flex gap-3">
                        <button
                            onClick={onCancel}
                            className="flex-1 px-4 py-2.5 text-sm font-bold text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
                        >
                            {cancelText || '取消'}
                        </button>
                        <button
                            onClick={onConfirm}
                            className={`flex-1 px-4 py-2.5 text-sm font-bold text-white rounded-xl shadow-lg transition-all active:scale-95 ${getButtonStyles()}`}
                        >
                            {confirmText || '確定'}
                        </button>
                    </div>
                </div>

                {/* Close X (Optional) */}
                <button
                    onClick={onCancel}
                    className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <X size={18} />
                </button>
            </div>

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes zoom-in {
                    from { opacity: 0; transform: scale(0.95) translateY(10px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                .animate-fade-in { animation: fade-in 0.2s ease-out forwards; }
                .animate-zoom-in { animation: zoom-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>
        </div>
    );
};
