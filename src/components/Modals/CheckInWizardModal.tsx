import React, { useState } from 'react';
import { X, ArrowRight, Plane, MapPin, Calendar, Check, ArrowLeft } from 'lucide-react';
import { Region, LangType } from '../../types';
import { REGION_FILTERS } from '../../data';

interface CheckInWizardModalProps {
    isOpen: boolean;
    onClose: () => void;
    onComplete: (data: {
        origin: string;
        destination: Region;
        startDate: string;
        endDate: string;
        totalDays: number;
    }) => void;
    lang: LangType;
    t: any;
}

const ORIGIN_CHIPS = ['Taipei', 'Taichung', 'Kaohsiung', 'Hong Kong', 'Tokyo', 'Home'];

export const CheckInWizardModal: React.FC<CheckInWizardModalProps> = ({
    isOpen, onClose, onComplete, lang, t
}) => {
    const [step, setStep] = useState(1);
    const [destination, setDestination] = useState<Region>('tokyo');
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
    const [totalDays, setTotalDays] = useState(4);

    if (!isOpen) return null;

    const handleNext = () => {
        if (step < 2) setStep(step + 1);
        else {
            const end = new Date(startDate);
            end.setDate(end.getDate() + totalDays - 1);
            onComplete({
                origin: 'TPE', // Default or derived
                destination,
                startDate,
                endDate: end.toISOString().split('T')[0],
                totalDays
            });
        }
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300" onClick={onClose} />

            <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/20">
                {/* Header Section */}
                <div className="bg-teal-600 p-8 text-white relative">
                    <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-all">
                        <X size={20} />
                    </button>

                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                            <Plane size={18} className="text-white" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Smart Check-in</span>
                    </div>

                    <h2 className="text-3xl font-black leading-tight">
                        {step === 1 ? (lang === 'zh' ? '您想去哪裡？' : 'Where to?') :
                            (lang === 'zh' ? '何時出發？' : 'When exactly?')}
                    </h2>

                    {/* Progress Bar */}
                    <div className="flex gap-2 mt-6">
                        {[1, 2].map(s => (
                            <div key={s} className={`h-1.5 rounded-full transition-all duration-500 ${s <= step ? 'w-16 bg-white' : 'w-4 bg-white/30'}`} />
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-8 md:p-10 bg-white">
                    {step === 1 && (
                        <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
                            <p className="text-gray-500 font-bold text-sm mb-4">{lang === 'zh' ? '選擇目的地，我們將為您準備專屬素材' : 'Select a destination, and we\'ll prepare your workspace'}</p>
                            <div className="grid grid-cols-2 gap-3">
                                {REGION_FILTERS.filter(c => c.id !== 'all').map((city: any) => (
                                    <button
                                        key={city.id}
                                        onClick={() => setDestination(city.id as Region)}
                                        className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all group ${destination === city.id
                                            ? 'border-teal-500 bg-teal-50 shadow-md ring-4 ring-teal-50'
                                            : 'border-gray-100 bg-gray-50 hover:bg-white hover:border-teal-200'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-xl">{city.icon}</span>
                                            <div className="text-left">
                                                <div className={`font-black text-sm uppercase ${destination === city.id ? 'text-teal-700' : 'text-gray-700'}`}>{city.id}</div>
                                                <div className="text-[10px] text-gray-400 font-bold">{city.label}</div>
                                            </div>
                                        </div>
                                        {destination === city.id && <Check size={16} className="text-teal-600" />}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">{lang === 'zh' ? '出發日期' : 'Departure Date'}</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400 pointer-events-none">
                                            <Calendar size={18} />
                                        </div>
                                        <input
                                            type="date"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 pl-12 pr-4 font-bold text-gray-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all shadow-inner"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">{lang === 'zh' ? '天數' : 'Duration'}</label>
                                    <div className="flex items-center gap-4 bg-gray-100 p-2 rounded-2xl">
                                        <button
                                            onClick={() => setTotalDays(Math.max(1, totalDays - 1))}
                                            className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center font-black text-gray-600 hover:bg-gray-50 active:scale-90 transition-all"
                                        >-</button>
                                        <div className="flex-1 text-center font-black text-xl text-gray-800">{totalDays} <span className="text-[10px] text-gray-400 uppercase">{lang === 'zh' ? '天' : 'Days'}</span></div>
                                        <button
                                            onClick={() => setTotalDays(totalDays + 1)}
                                            className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center font-black text-gray-600 hover:bg-gray-50 active:scale-90 transition-all"
                                        >+</button>
                                    </div>
                                </div>
                            </div>

                            {/* Summary Card */}
                            <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl p-6 text-white shadow-xl shadow-teal-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-widest opacity-70">Travel Summary</span>
                                        <div className="text-xl font-black">{destination.toUpperCase()}</div>
                                        <div className="text-xs font-bold opacity-90 mt-1">{startDate} ({totalDays} Days)</div>
                                    </div>
                                    <div className="ml-auto w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                                        <MapPin size={24} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between mt-10">
                        {step > 1 ? (
                            <button
                                onClick={handleBack}
                                className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <ArrowLeft size={16} /> {lang === 'zh' ? '上一步' : 'Back'}
                            </button>
                        ) : (
                            <div />
                        )}

                        <button
                            onClick={handleNext}
                            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-[1.25rem] font-black text-sm flex items-center gap-2 transition-all shadow-lg shadow-teal-200 active:scale-95 group"
                        >
                            {step === 2 ? (lang === 'zh' ? '完成並登機' : 'Complete & Board') : (lang === 'zh' ? '繼續下一步' : 'Next Step')}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
