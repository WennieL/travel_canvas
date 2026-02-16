import React from 'react';
import { X, Sparkles, Layout, ArrowRight } from 'lucide-react';

interface StartPickerModalProps {
    isOpen: boolean;
    onClose: () => void;
    onChooseBlank: () => void;
    onChooseTemplate: () => void;
    lang?: string;
    t: any;
}

export const StartPickerModal: React.FC<StartPickerModalProps> = ({
    isOpen, onClose, onChooseBlank, onChooseTemplate, lang = 'zh', t
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose} />

            {/* Modal */}
            <div className="relative bg-gray-50 rounded-[2rem] shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded-full transition-all z-10"
                >
                    <X size={20} />
                </button>

                <div className="p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 leading-tight">
                            {t.title || (lang === 'zh' ? '如何開始您的旅程？' : 'How would you like to start?')}
                        </h2>
                        <p className="text-gray-500 font-medium">
                            {t.subtitle || (lang === 'zh' ? '選擇一個起始方式，讓規劃變得更輕鬆' : 'Choose a way to begin your perfect journey')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Option: Blank */}
                        <button
                            onClick={onChooseBlank}
                            className="group relative bg-white border-2 border-transparent hover:border-teal-500 rounded-3xl p-6 text-left transition-all hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                                <Layout size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2 transition-colors group-hover:text-teal-600">
                                {t.blankTitle || (lang === 'zh' ? '從空白開始' : 'Blank Canvas')}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                {t.blankDesc || (lang === 'zh' ? '充滿創意地親手打造您專屬的每一天' : 'Build your unique itinerary from scratch')}
                            </p>
                            <div className="flex items-center gap-2 text-teal-600 font-bold text-sm">
                                {t.startBtn || (lang === 'zh' ? '開始規劃' : 'Start Fresh')} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>

                        {/* Option: Template */}
                        <button
                            onClick={onChooseTemplate}
                            className="group relative bg-white border-2 border-transparent hover:border-emerald-500 rounded-3xl p-6 text-left transition-all hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                                Recommended
                            </div>
                            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                                <Sparkles size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2 transition-colors group-hover:text-emerald-600">
                                {t.templateTitle || (lang === 'zh' ? '套用達人模板' : 'Expert Templates')}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                {t.templateDesc || (lang === 'zh' ? '由在地人精選的行程，一鍵完整同步' : 'Curated plans by locals, sync with one click')}
                            </p>
                            <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                                {t.browseBtn || (lang === 'zh' ? '瀏覽模板' : 'Browse Templates')} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>
                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-xs text-gray-400 font-medium italic">
                            {t.allProTemplatesFree || (lang === 'zh' ? 'Beta 期間，所有專業達人模板免費探索 ⚡️' : 'All pro templates are free for exploration during Beta ⚡️')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartPickerModal;
