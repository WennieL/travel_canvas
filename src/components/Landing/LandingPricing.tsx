import React, { useState } from 'react';
import { LangType } from '../../types';

interface LandingPricingProps {
    lang: LangType;
    onStart: (templateId?: string) => void;
    t: any;
}

const LandingPricing: React.FC<LandingPricingProps> = ({ lang, onStart, t }) => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <>
            {/* ===== PRICING SECTION (Optimized) ===== */}
            <section id="pricing" className="w-full py-20 px-6 bg-gradient-to-b from-slate-50 to-white z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider mb-4">
                            {t.pricingHeaderTag}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
                            {t.pricingTitle}
                        </h2>
                        <p className="text-slate-500 text-lg max-w-xl mx-auto">
                            {t.pricingSubtitle}
                        </p>
                    </div>

                    {/* Billing Toggle */}
                    <div className="flex justify-center mb-10">
                        <div className="relative inline-flex items-center bg-slate-100 rounded-full p-1">
                            <button
                                onClick={() => setIsYearly(false)}
                                className={`px-6 py-2 text-sm font-bold rounded-full transition-all ${!isYearly ? 'bg-slate-800 text-white' : 'text-slate-600 hover:text-slate-800'}`}
                            >
                                {t.monthly}
                            </button>
                            <button
                                onClick={() => setIsYearly(true)}
                                className={`px-6 py-2 text-sm font-bold rounded-full transition-all ${isYearly ? 'bg-slate-800 text-white' : 'text-slate-600 hover:text-slate-800'}`}
                            >
                                {t.yearly}
                            </button>
                            <span className="absolute -top-3 -right-2 bg-gradient-to-r from-orange-400 to-red-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                                {t.pricingProSave}
                            </span>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

                        {/* FREE Plan */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-slate-800">
                                    {t.pricingFree}
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    {t.pricingFreeSub}
                                </p>
                            </div>

                            <div className="mb-6">
                                <span className="text-4xl font-extrabold text-slate-800">$0</span>
                                <span className="text-slate-400">/mo</span>
                                <p className="text-slate-400 text-xs mt-1">&nbsp;</p>
                            </div>

                            <button
                                onClick={() => onStart()}
                                className="w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all mb-2"
                            >
                                {t.pricingCTAFree}
                            </button>
                            <p className="text-center text-slate-400 text-xs mb-6">
                                {t.pricingFreeNotice}
                            </p>

                            <ul className="space-y-3 flex-1">
                                <li className="flex items-center gap-2 text-slate-600 text-sm">
                                    <span className="text-teal-500">✓</span>
                                    {t.pricingFeature1Free}
                                </li>
                                <li className="flex items-center gap-2 text-slate-600 text-sm">
                                    <span className="text-teal-500">✓</span>
                                    {t.pricingFeature2Free}
                                </li>
                                <li className="flex items-center gap-2 text-slate-600 text-sm">
                                    <span className="text-teal-500">✓</span>
                                    {t.pricingFeature3Free}
                                </li>
                                <li className="flex items-center gap-2 text-slate-600 text-sm">
                                    <span className="text-teal-500">✓</span>
                                    {t.pricingFeature4Free}
                                </li>
                            </ul>
                        </div>

                        {/* PRO Plan */}
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white flex flex-col relative overflow-hidden">
                            {/* Popular Badge */}
                            <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">
                                {lang === 'zh' ? '最受歡迎' : 'POPULAR'}
                            </div>

                            <div className="mb-4">
                                <h3 className="text-xl font-bold">
                                    {t.pricingPro}
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    {t.pricingProSub}
                                </p>
                            </div>

                            <div className="mb-2">
                                <span className="text-4xl font-extrabold">{isYearly ? '$3.33' : '$4.99'}</span>
                                <span className="text-slate-400">/mo</span>
                            </div>
                            {isYearly && (
                                <p className="text-teal-400 text-xs mb-4">
                                    {t.pricingProYearlySave}
                                </p>
                            )}
                            {!isYearly && <div className="h-4 mb-4"></div>}

                            <button
                                onClick={() => onStart()}
                                className="w-full py-3 bg-gradient-to-r from-[#4ECDC4] to-[#44A5A0] text-white font-bold rounded-xl hover:opacity-90 transition-all mb-2"
                            >
                                {t.pricingProTrial}
                            </button>
                            <p className="text-center text-slate-500 text-xs mb-6">
                                {t.pricingProCancel}
                            </p>

                            <ul className="space-y-3 flex-1">
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-teal-400">✓</span>
                                    <strong>{t.unlimited}</strong>&nbsp;{t.itineraries}
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-teal-400">✓</span>
                                    <strong>{t.unlimited}</strong>&nbsp;{t.spots}
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-teal-400">✓</span>
                                    {t.pricingFeature2Pro}
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-teal-400">✓</span>
                                    {t.pricingFeature3Pro}
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-teal-400">✓</span>
                                    {t.pricingFeature5Pro}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Trust Footer */}
                    <div className="text-center mt-10 text-slate-400 text-sm">
                        {t.pricingTrustFooter}
                    </div>
                </div>
            </section>

            {/* ===== SOCIAL PROOF SECTION ===== */}
            <section className="w-full py-16 px-6 bg-white z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                        {lang === 'zh' ? '🌍 全球旅人的選擇' : '🌍 Trusted by Travelers Worldwide'}
                    </h2>

                    <div className="flex justify-center items-center gap-2 mb-8">
                        <div className="flex -space-x-3">
                            {['🧑‍💻', '👩‍🎨', '🧔', '👩‍🦰', '🧑‍🍳'].map((emoji, i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-white flex items-center justify-center text-lg shadow-sm">
                                    {emoji}
                                </div>
                            ))}
                        </div>
                        <span className="text-slate-500 text-sm ml-2">
                            {lang === 'zh' ? '+更多旅人' : '+more travelers'}
                        </span>
                    </div>

                    <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-8 border border-teal-100">
                        <p className="text-lg md:text-xl text-slate-700 font-medium mb-4">
                            {t.nextGenPlanner}
                        </p>
                        <p className="text-slate-500 text-sm mb-4">
                            {t.betaNotice}
                        </p>
                        <button
                            onClick={() => onStart()}
                            className="px-6 py-2 bg-teal-500 text-white font-bold rounded-full hover:bg-teal-600 transition-all text-sm"
                        >
                            {t.tryBetaFree}
                        </button>
                    </div>
                </div>
            </section>

            {/* ===== FAQ SECTION ===== */}
            <section className="w-full py-16 px-6 bg-slate-50 z-10">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12">
                        {t.faqTitle}
                    </h2>

                    <div className="space-y-4">
                        <details className="bg-white rounded-xl p-5 shadow-sm group">
                            <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-800">
                                {t.faqQ1}
                                <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                                {t.faqA1}
                            </p>
                        </details>

                        <details className="bg-white rounded-xl p-5 shadow-sm group">
                            <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-800">
                                {t.faqQ2}
                                <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                                {t.faqA2}
                            </p>
                        </details>

                        <details className="bg-white rounded-xl p-5 shadow-sm group">
                            <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-800">
                                {t.faqQ3}
                                <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                                {t.faqA3}
                            </p>
                        </details>

                        <details className="bg-white rounded-xl p-5 shadow-sm group">
                            <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-800">
                                {t.faqQ4}
                                <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                                {t.faqA4}
                            </p>
                        </details>

                        <details className="bg-white rounded-xl p-5 shadow-sm group">
                            <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-800">
                                {t.faqQ5}
                                <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                                {t.faqA5}
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA SECTION ===== */}
            <section className="w-full py-16 px-6 bg-gradient-to-r from-[#4ECDC4] to-[#44A5A0] z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {t.readyToJourney}
                    </h2>
                    <p className="text-white/80 mb-8">
                        {t.startFreeNoCard}
                    </p>
                    <button
                        onClick={() => onStart()}
                        className="px-8 py-4 bg-white text-[#4ECDC4] font-bold text-lg rounded-full hover:bg-white/90 transition-all shadow-lg"
                    >
                        {t.startPlanningFreeArrow}
                    </button>
                </div>
            </section>
        </>
    );
};

export default LandingPricing;
