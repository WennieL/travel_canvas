import React from 'react';
import { X, Lock, MapPin, Star, ShieldCheck } from 'lucide-react';
import { ScheduleItem } from '../../types';
import { getFallbackImage } from '../../utils';

interface UnlockModalProps {
    isOpen: boolean;
    onClose: () => void;
    item?: ScheduleItem | null;
    onUnlock: () => void;
    t: any;
    mode?: 'single' | 'batch';
    count?: number;
}

export const UnlockModal: React.FC<UnlockModalProps> = ({ isOpen, onClose, item, onUnlock, t, mode = 'single', count = 1 }) => {
    if (!isOpen) return null;

    // Pricing Logic
    const singlePrice = 0.99;
    const totalPrice = (singlePrice * count).toFixed(2);

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-scale-in">
                {/* Header Image Area - Generic for Batch */}
                <div className="relative h-44 bg-gray-900">
                    {mode === 'single' && item?.marketingImage ? (
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.marketingImage})` }}
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-800 flex items-center justify-center">
                            <div className="text-center">
                                <span className="text-4xl mb-2 block">💎</span>
                            </div>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-8 h-8 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                    >
                        <X size={16} />
                    </button>

                    <div className="absolute bottom-6 left-6 right-6 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="bg-amber-400 text-amber-950 text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                                <Lock size={10} />
                                {mode === 'batch' ? `${count} PREMIUM SPOTS LOCKED` : "PREMIUM SECRET"}
                            </span>
                        </div>
                        <h2 className="text-2xl font-bold text-white leading-tight">
                            {mode === 'batch' ? "Unlock Your Full Itinerary" : (item?.marketingTitle || "Unknown Secret Spot")}
                        </h2>
                    </div>
                </div>

                {/* Body */}
                <div className="p-6">
                    {mode === 'single' ? (
                        <>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                {item?.description || "Unlock this hidden gem to see the exact location and exclusive insider tips."}
                            </p>
                            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 mb-6 text-center">
                                <div className="text-xs text-amber-700 font-medium mb-1">🎁 Beta 限定優惠</div>
                                <div className="text-xl font-bold text-amber-900">免費解鎖</div>
                                <div className="text-xs text-amber-600 mt-1">感謝您參與測試！</div>
                            </div>
                            <button
                                onClick={onUnlock}
                                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-amber-500/20 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                            >
                                🎁 Beta 免費解鎖
                            </button>
                        </>
                    ) : (
                        // Batch / Comparison Mode
                        <div className="grid grid-cols-2 gap-3">
                            {/* Option A: Anchor */}
                            <div className="border border-gray-200 rounded-xl p-3 flex flex-col justify-between hover:border-gray-300 transition-colors bg-gray-50/50">
                                <div>
                                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Single Trip</div>
                                    <div className="text-2xl font-bold text-gray-900">${totalPrice}</div>
                                    <div className="text-[10px] text-gray-500 mt-1">
                                        Unlock {count} spots for this trip only.
                                    </div>
                                </div>
                                <button
                                    onClick={onUnlock}
                                    className="mt-4 w-full py-2 bg-white border border-gray-300 text-gray-700 font-bold text-xs rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Pay ${totalPrice}
                                </button>
                            </div>

                            {/* Option B: Target */}
                            <div className="border-2 border-teal-500 rounded-xl p-3 flex flex-col justify-between relative overflow-hidden bg-teal-50/20 shadow-sm">
                                <div className="absolute top-0 right-0 bg-teal-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">
                                    RECOMMENDED
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-1">Travel Pro</div>
                                    <div className="text-2xl font-bold text-gray-900">Free</div>
                                    <div className="text-[10px] text-gray-500 mt-1">
                                        14-day trial, then $4.99/mo. Cancel anytime.
                                    </div>
                                    <ul className="mt-2 space-y-1">
                                        <li className="text-[10px] flex items-center gap-1 text-teal-700"><ShieldCheck size={8} /> Unlock Everything</li>
                                        <li className="text-[10px] flex items-center gap-1 text-teal-700"><ShieldCheck size={8} /> Offline Maps</li>
                                    </ul>
                                </div>
                                <button
                                    onClick={onUnlock}
                                    className="mt-4 w-full py-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold text-xs rounded-lg hover:shadow-md transition-all animate-pulse-slow"
                                >
                                    Start Free Trial
                                </button>
                            </div>
                        </div>
                    )}

                    <p className="text-center text-[10px] text-amber-600 mt-4">
                        ✨ Beta 期間所有 Premium 內容免費開放
                    </p>
                </div>
            </div>
        </div>
    );
};
