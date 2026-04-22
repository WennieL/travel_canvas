import React, { useState } from 'react';
import { Quote, Sparkles, Sun, Lightbulb, User, ChevronDown, ChevronUp } from 'lucide-react';
import { Plan, LangType } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';

interface ExpertBriefingProps {
  plan: Plan;
  lang: LangType;
  type?: 'header' | 'footer';
}

const ExpertBriefing: React.FC<ExpertBriefingProps> = ({ plan, lang, type = 'header' }) => {
    const [isNoteExpanded, setIsNoteExpanded] = useState(false);
    const [openItemId, setOpenItemId] = useState<string | null>(null);
    
    // Fallback Icon Logic
    const getIcon = (name?: string) => {
        switch (name) {
            case 'Star': return <Sparkles size={16} />;
            case 'Sun': return <Sun size={16} />;
            case 'Lightbulb': return <Lightbulb size={16} />;
            default: return <Sparkles size={16} />;
        }
    };

    const hasHeaderContent = plan.preparationGuide?.length || plan.faq?.length;
    const hasFooterContent = plan.authorNote;

    if (type === 'header' && !hasHeaderContent) return null;
    if (type === 'footer' && !hasFooterContent) return null;

    if (type === 'footer') {
        const authorNoteText = plan.authorNote ? (lang === 'zh' ? plan.authorNote.zh : (plan.authorNote.en || plan.authorNote.zh)) : '';
        return (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-12 pt-12 border-t border-emerald-50"
            >
                <div className="flex items-center gap-3 mb-6 px-2">
                    <User size={16} className="text-gray-300" />
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">
                        {lang === 'zh' ? '關於此行程作者' : 'ABOUT THE CREATOR'}
                    </span>
                </div>

                <div className="bg-[#F9FBF8] rounded-[2.5rem] p-8 border border-[#E9F0E6] relative overflow-hidden">
                    <div className="flex items-center gap-4 mb-6">
                        <img 
                            src={plan.authorAvatar || `https://i.pravatar.cc/100?u=${plan.templateId}`} 
                            alt="Author" 
                            className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover" 
                        />
                        <div>
                            <h3 className="text-[18px] font-black text-gray-800 leading-tight mb-0.5">
                                {plan.authorName || (lang === 'zh' ? '旅遊達人' : 'Travel Expert')}
                            </h3>
                            <span className="text-[9px] font-black text-emerald-600 bg-white/80 border border-emerald-100 px-2 py-0.5 rounded-full uppercase tracking-[0.15em]">
                                {lang === 'zh' ? '行程原創作者' : 'ORIGINAL CREATOR'}
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <p className={`text-[14.5px] leading-[1.8] text-gray-500 font-medium italic transition-all duration-500 overflow-hidden ${!isNoteExpanded ? 'max-h-[100px]' : 'max-h-[2000px]'}`}>
                            <Quote size={20} className="text-emerald-200 fill-emerald-50 inline-block mr-2 -mt-1" />
                            {authorNoteText}
                        </p>
                        
                        {authorNoteText.length > 200 && (
                            <button 
                                onClick={() => setIsNoteExpanded(!isNoteExpanded)}
                                className="mt-4 text-[11px] font-black text-emerald-400 flex items-center gap-1.5 hover:underline"
                            >
                                {isNoteExpanded ? (
                                    <><ChevronUp size={14} /> {lang === 'zh' ? '收起故事' : 'Show Less'}</>
                                ) : (
                                    <><ChevronDown size={14} /> {lang === 'zh' ? '閱讀完整作者故事' : 'Read Full Bio'}</>
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </motion.div>
        );
    }

    // HEADER MODE
    return (
        <div className="space-y-6 mb-8">
            {/* 2. Collapsible Expert Knowledge Base */}
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-2 space-y-1">
                    {/* A. Preparation Guide - Collapsible Item */}
                    {plan.preparationGuide && plan.preparationGuide.length > 0 && (
                        <div className="border-b border-gray-50 last:border-0">
                            <button 
                                onClick={() => setOpenItemId(openItemId === 'prep' ? null : 'prep')}
                                className="w-full flex items-center justify-between p-4 hover:bg-emerald-50/30 transition-colors rounded-2xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                        <Sparkles size={16} />
                                    </div>
                                    <span className="text-[15px] font-black text-gray-700">
                                        {lang === 'zh' ? '達人行前預習指南' : 'Expert Prep Guide'}
                                    </span>
                                </div>
                                {openItemId === 'prep' ? <ChevronUp size={18} className="text-gray-300" /> : <ChevronDown size={18} className="text-gray-300" />}
                            </button>
                            
                            <AnimatePresence>
                                {openItemId === 'prep' && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5 pt-2 grid grid-cols-1 gap-3">
                                            {plan.preparationGuide.map((guide, idx) => (
                                                <div key={idx} className="bg-[#F9FBF8] rounded-2xl p-4 flex gap-4 border border-emerald-50/50">
                                                    <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
                                                        {getIcon(guide.icon)}
                                                    </div>
                                                    <div>
                                                        <h5 className="text-[10px] font-black text-emerald-700/50 uppercase tracking-widest mb-0.5">
                                                            {lang === 'zh' ? guide.title : (guide.titleEn || guide.title)}
                                                        </h5>
                                                        <p className="text-[13.5px] font-bold text-gray-700 leading-snug">
                                                            {lang === 'zh' ? guide.text : (guide.textEn || guide.text)}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )}

                    {/* B. Know Before You Go (FAQ) - Collapsible Item */}
                    {plan.faq && plan.faq.length > 0 && (
                        <div className="border-b border-gray-50 last:border-0">
                            <button 
                                onClick={() => setOpenItemId(openItemId === 'faq' ? null : 'faq')}
                                className="w-full flex items-center justify-between p-4 hover:bg-amber-50/30 transition-colors rounded-2xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                                        <Lightbulb size={16} />
                                    </div>
                                    <span className="text-[15px] font-black text-gray-700">
                                        {lang === 'zh' ? '行前不可不知的事' : 'Know Before You Go'}
                                    </span>
                                </div>
                                {openItemId === 'faq' ? <ChevronUp size={18} className="text-gray-300" /> : <ChevronDown size={18} className="text-gray-300" />}
                            </button>
                            
                            <AnimatePresence>
                                {openItemId === 'faq' && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5 pt-2 space-y-4">
                                            {plan.faq.map((item, i) => (
                                                <div key={i} className="border-l-2 border-amber-100 pl-4 py-1">
                                                    <h5 className="text-[13px] font-black text-gray-800 mb-1">
                                                        {lang === 'zh' ? item.title : (item.titleEn || item.title)}
                                                    </h5>
                                                    <p className="text-[13px] leading-relaxed text-gray-500 font-medium">
                                                        {lang === 'zh' ? item.text : (item.textEn || item.text)}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </div>

            <div className="text-[9px] font-black text-gray-300 uppercase tracking-[0.4em] text-center pt-2">
                {lang === 'zh' ? '進入行前儀表板' : 'TRIP DASHBOARD'}
            </div>
        </div>
    );
};

export default ExpertBriefing;
