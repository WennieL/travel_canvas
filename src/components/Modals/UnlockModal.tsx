import React from 'react';
import { X, Lock, MapPin, Star, ShieldCheck } from 'lucide-react';
import { ScheduleItem } from '../../types';
import { getFallbackImage } from '../../utils';

interface UnlockModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: ScheduleItem | null;
    onUnlock: () => void;
    t: any;
}

export const UnlockModal: React.FC<UnlockModalProps> = ({ isOpen, onClose, item, onUnlock, t }) => {
    if (!isOpen || !item) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-scale-in">
                {/* Header Image Area */}
                <div className="relative h-48 bg-gray-200">
                    {item.marketingImage ? (
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.marketingImage})` }}
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-purple-100 flex items-center justify-center text-6xl">
                            {item.image || getFallbackImage(item.type)}
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-8 h-8 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                    >
                        <X size={16} />
                    </button>

                    <div className="absolute bottom-4 left-6 right-6">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="bg-amber-400 text-amber-950 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                                <Lock size={10} />
                                PREMIUM SECRET
                            </span>
                        </div>
                        <h2 className="text-2xl font-bold text-white leading-tight">
                            {item.marketingTitle || "Unknown Secret Spot"}
                        </h2>
                    </div>
                </div>

                {/* Body */}
                <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {item.description || "Unlock this hidden gem to see the exact location and exclusive insider tips."}
                    </p>

                    <div className="space-y-4 mb-8">
                        {/* What you get list */}
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Unlocking reveals:</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm text-gray-700">
                                <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                                    <MapPin size={16} />
                                </div>
                                <span>
                                    <strong>Exact Location</strong> & Google Maps Link
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-700">
                                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                                    <Star size={16} />
                                </div>
                                <span>
                                    <strong>Insider Tips:</strong> {item.insiderTip?.text ? "Access the secret advice." : "Best times to visit & menu picks."}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Pricing */}
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 mb-6 flex items-center justify-between">
                        <div>
                            <div className="text-xs text-gray-500">One-time unlock</div>
                            <div className="text-xl font-bold text-gray-900">$0.99 <span className="text-sm font-normal text-gray-400">/ item</span></div>
                        </div>
                        {/* Upsell Teaser */}
                        <div className="text-right">
                            <div className="text-[10px] text-amber-600 font-bold">OR GET PRO</div>
                            <div className="text-xs text-gray-400 line-through">$4.99/mo</div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={onUnlock}
                        className="w-full py-3.5 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-teal-500/20 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                    >
                        <Lock size={18} />
                        Unlock Now
                    </button>

                    <p className="text-center text-[10px] text-gray-400 mt-3 flex items-center justify-center gap-1">
                        <ShieldCheck size={10} />
                        Secure payment processing
                    </p>
                </div>
            </div>
        </div>
    );
};
