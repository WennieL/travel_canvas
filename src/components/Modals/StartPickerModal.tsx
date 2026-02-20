import React from 'react';
import { X, Sparkles, Layout, ArrowRight, MapPin, Smile } from 'lucide-react';
import { TEMPLATES } from '../../data/templates';
import { Region } from '../../types';

interface StartPickerModalProps {
    isOpen: boolean;
    onClose: () => void;
    onChooseBlank: () => void;
    onChooseTemplate: () => void;
    lang?: string;
    t: any;
    pendingData?: {
        destination: Region;
        totalDays: number;
    } | null;
}

export const StartPickerModal: React.FC<StartPickerModalProps> = ({
    isOpen, onClose, onChooseBlank, onChooseTemplate, lang = 'zh', t, pendingData
}) => {
    if (!isOpen) return null;

    const regionName = pendingData?.destination?.toUpperCase() || 'TOKYO';
    const cityTemplates = TEMPLATES.filter(tpl => tpl.region === pendingData?.destination);
    const hasTemplates = cityTemplates.length > 0;

    return (
        <div className="fixed inset-0 z-[1300] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-500" onClick={onClose} />

            {/* Modal */}
            <div className="relative bg-[#fafafa] rounded-[3rem] shadow-2xl w-full max-w-3xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/20">
                {/* Header Gradient Decor */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-teal-500/10 to-transparent pointer-events-none" />

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 p-3 text-gray-400 hover:text-gray-900 hover:bg-white rounded-full transition-all z-20 shadow-sm"
                >
                    <X size={24} />
                </button>

                <div className="p-10 md:p-14 relative z-10">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 text-teal-600 text-[10px] font-black uppercase tracking-widest mb-6 border border-teal-100 shadow-sm">
                            <MapPin size={12} /> {regionName} · {pendingData?.totalDays || 4} DAYS
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
                            {hasTemplates
                                ? (lang === 'zh' ? `準備好開始您的 ${regionName} 旅程了嗎？` : `Ready for your ${regionName} trip?`)
                                : (lang === 'zh' ? `想如何開啟 ${regionName} 的第一步？` : `How to start your ${regionName} journey?`)
                            }
                        </h2>
                        <p className="text-gray-500 font-bold max-w-md mx-auto">
                            {hasTemplates
                                ? (lang === 'zh' ? '選擇一個起始方式，或參考達人們的精選路線' : 'Choose a way to begin, or reference our expert routes')
                                : (lang === 'zh' ? '這裡目前還沒有達人行程，您可以成為第一位分享者！' : 'No templets yet for this city. Be the first to share your magic!')
                            }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Option: Blank */}
                        <button
                            onClick={onChooseBlank}
                            className="group relative bg-white border-2 border-transparent hover:border-teal-500 rounded-[2.5rem] p-8 text-left transition-all hover:shadow-[0_20px_50px_rgba(20,184,166,0.12)] hover:-translate-y-1 active:scale-[0.98]"
                        >
                            <div className="w-16 h-16 bg-gray-50 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors shadow-inner">
                                <Layout size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-gray-800 mb-3 transition-colors group-hover:text-teal-600">
                                {lang === 'zh' ? '從空白開始' : 'Blank Canvas'}
                            </h3>
                            <p className="text-gray-500 text-sm font-bold leading-relaxed mb-8 opacity-80">
                                {lang === 'zh' ? '充滿創意地親手打造您專屬的每一天' : 'Fill your canvas with unique moments from scratch'}
                            </p>
                            <div className="flex items-center gap-2 text-teal-600 font-black text-sm uppercase tracking-widest">
                                {lang === 'zh' ? '開始規劃' : 'Start Fresh'} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </div>
                        </button>

                        {/* Option: Template (Hybrid B+C Logic) */}
                        <button
                            onClick={onChooseTemplate}
                            className="group relative bg-white border-2 border-transparent hover:border-emerald-500 rounded-[2.5rem] p-8 text-left transition-all hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)] hover:-translate-y-1 active:scale-[0.98]"
                        >
                            {hasTemplates && (
                                <div className="absolute -top-4 -right-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg z-20">
                                    {cityTemplates.length} EXERTS READY
                                </div>
                            )}
                            <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner ${hasTemplates ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                                {hasTemplates ? <Sparkles size={32} /> : <Smile size={32} />}
                            </div>
                            <h3 className={`text-2xl font-black mb-3 transition-colors ${hasTemplates ? 'text-gray-800 group-hover:text-emerald-600' : 'text-gray-800 group-hover:text-amber-600'}`}>
                                {hasTemplates
                                    ? (lang === 'zh' ? '套用達人模板' : 'Expert Templates')
                                    : (lang === 'zh' ? '探索熱門行程' : 'Explore Popular')
                                }
                            </h3>
                            <p className="text-gray-500 text-sm font-bold leading-relaxed mb-8 opacity-80">
                                {hasTemplates
                                    ? (lang === 'zh' ? `參考在 ${regionName} 的真實精選路線` : `Mirror verified routes in ${regionName}`)
                                    : (lang === 'zh' ? '看看其他旅遊愛好者最愛的經典行程' : 'Discover what other travelers love most')}
                            </p>
                            <div className={`flex items-center gap-2 font-black text-sm uppercase tracking-widest ${hasTemplates ? 'text-emerald-600' : 'text-amber-600'}`}>
                                {hasTemplates
                                    ? (lang === 'zh' ? '瀏覽模板' : 'Browse Templates')
                                    : (lang === 'zh' ? '看看推薦' : 'See Recommendations')
                                } <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </div>
                        </button>
                    </div>

                    <div className="mt-12 text-center pointer-events-none">
                        <p className="text-[10px] text-gray-300 font-black uppercase tracking-[0.3em]">
                            TravelCanvas · Smart Assistant ⚡️
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartPickerModal;
