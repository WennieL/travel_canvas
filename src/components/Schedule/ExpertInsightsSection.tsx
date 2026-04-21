import React from 'react';
import { ScheduleItem } from '../../types';

interface ExpertInsightsSectionProps {
    item: ScheduleItem;
    lang: string;
}

export const ExpertInsightsSection: React.FC<ExpertInsightsSectionProps> = ({ item, lang }) => {
    const isEn = lang === 'en';
    const expertNote = isEn ? item.expertNoteEn || item.expertNote : item.expertNote;
    const proTip = isEn ? item.proTipEn || item.proTip : item.proTip;

    if (!expertNote && !proTip) return null;

    return (
        <div className="mt-3 space-y-2 animate-in fade-in slide-in-from-top-1 duration-300 select-text">
            {expertNote && (
                <div className="relative overflow-hidden bg-indigo-50/50 border border-indigo-100/50 rounded-xl p-3">
                    <div className="flex gap-2 text-indigo-900">
                        <span className="text-lg flex-shrink-0" role="img" aria-label="microphone">🎙️</span>
                        <div className="flex-1">
                            <h4 className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 mb-0.5">
                                {isEn ? "Expert says" : "達人說"}
                            </h4>
                            <p className="text-[11px] leading-relaxed text-indigo-800 font-medium">
                                「 {expertNote} 」
                            </p>
                        </div>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -right-2 -bottom-2 opacity-10 pointer-events-none">
                        <span className="text-4xl text-indigo-900">"</span>
                    </div>
                </div>
            )}

            {proTip && (
                <div className="relative overflow-hidden bg-amber-50/50 border-l-4 border-amber-300 rounded-lg p-3 shadow-sm">
                    <div className="flex gap-2">
                        <span className="text-lg flex-shrink-0" role="img" aria-label="lightbulb">💡</span>
                        <div className="flex-1">
                            <h4 className="text-[10px] font-bold uppercase tracking-wider text-amber-600 mb-0.5">
                                {isEn ? "Pro Tips / Human Nav" : "人肉導航祕技"}
                            </h4>
                            <p className="text-[11px] leading-relaxed text-amber-900/80 font-bold">
                                {proTip}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
