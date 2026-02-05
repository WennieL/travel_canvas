import React from 'react';
import { LangType } from '../../types';
import { DragDropVisual, MapVisual, ChecklistVisual, AssetsVisual } from '../Visuals';
import ChaosToOrder from '../HeroAnimation';

interface LandingFeaturesProps {
    lang: LangType;
    t: any;
}

const LandingFeatures: React.FC<LandingFeaturesProps> = ({ lang, t }) => {
    return (
        <>
            {/* ===== VALUE PROPOSITION TRANSITION - "The Spark" ===== */}
            <section className="w-full bg-white py-16 md:py-24 px-6 z-10 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mb-6 leading-snug">
                        {lang === 'zh'
                            ? '拖進來。混搭它。變成你的。'
                            : 'Drag it. Remix it. Make it yours.'}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 font-medium mb-4">
                        {lang === 'zh'
                            ? '每段旅程，都始於別人冒險中的一個火花。'
                            : 'Every trip begins with a spark from someone else\'s adventure.'}
                    </p>
                    <p className="text-base md:text-lg text-slate-500">
                        {lang === 'zh'
                            ? '然後為下一位旅人點燃火花。'
                            : 'Then light the spark for the next traveler.'}
                    </p>
                </div>
            </section>

            {/* ===== CORE FEATURES SECTION - Unified Background ===== */}
            <section id="features" className="w-full bg-stone-100 py-16 md:py-24 px-6 z-10">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Section Header */}
                    <div className="text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-wider mb-4">
                            {lang === 'zh' ? '核心功能' : 'Core Features'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
                            {lang === 'zh' ? '為什麼選擇 TravelCanvas？' : 'Why TravelCanvas?'}
                        </h2>
                        <p className="text-slate-500 text-lg max-w-xl mx-auto">
                            {lang === 'zh' ? '告別繁瑣的行程規劃，專注於旅行的樂趣' : 'Stop stressing over spreadsheets. Focus on the journey.'}
                        </p>
                    </div>

                    {/* CORE FEATURE 1: Chaos → Order */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            {/* Visual - Left (constrained height) */}
                            <div className="flex-1 w-full flex items-center justify-center h-56 md:h-64 overflow-hidden">
                                <div className="transform scale-[0.65] md:scale-75 origin-center">
                                    <ChaosToOrder lang={lang} />
                                </div>
                            </div>
                            {/* Text - Right */}
                            <div className="flex-1 text-center md:text-left">
                                <span className="text-[#FF6B6B] font-bold text-sm uppercase tracking-wider mb-4 block">
                                    {lang === 'zh' ? '化繁為簡' : 'Bye Bye Chaos'}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6 leading-tight">
                                    {lang === 'zh' ? '告別混亂的 20 個分頁' : 'Say Goodbye to 20 Open Tabs'}
                                </h2>
                                <p className="text-lg text-slate-500 leading-relaxed mb-6">
                                    {lang === 'zh'
                                        ? '把散落在各處的資訊，全部收集到一個地方。從混亂到有序，只需要一個 TravelCanvas。'
                                        : 'Collect all your scattered information in one place. From chaos to order, all you need is TravelCanvas.'}
                                </p>
                                <div className="text-[#4ECDC4] font-bold text-lg">
                                    {lang === 'zh' ? '✨ 一個地方，搞定一切' : '✨ One place. All sorted.'}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CORE FEATURE 2: Drag & Drop */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
                            {/* Visual - Right (constrained height) */}
                            <div className="flex-1 w-full flex items-center justify-center h-56 md:h-64 overflow-hidden">
                                <div className="w-full max-w-md">
                                    <DragDropVisual />
                                </div>
                            </div>
                            {/* Text - Left */}
                            <div className="flex-1 text-center md:text-left">
                                <span className="text-[#FF6B6B] font-bold text-sm uppercase tracking-wider mb-4 block">
                                    {lang === 'zh' ? '直覺操作' : 'Intuitive'}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6 leading-tight">
                                    {t.feature1Title}
                                </h2>
                                <p className="text-lg text-slate-500 leading-relaxed mb-6">
                                    {t.feature1Desc}
                                </p>
                                <div className="text-[#4ECDC4] font-bold text-lg">
                                    {lang === 'zh' ? '🖱️ 像畫布一樣自由規劃' : '🖱️ Plan freely, like a canvas'}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CORE FEATURE 3: Templates & Inspiration */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            {/* Visual - Left (constrained height) */}
                            <div className="flex-1 w-full flex items-center justify-center h-56 md:h-64 overflow-hidden">
                                <div className="w-full max-w-md">
                                    <AssetsVisual lang={lang} />
                                </div>
                            </div>
                            {/* Text - Right */}
                            <div className="flex-1 text-center md:text-left">
                                <span className="text-[#FF6B6B] font-bold text-sm uppercase tracking-wider mb-4 block">
                                    {lang === 'zh' ? '快速起步' : 'Quick Start'}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6 leading-tight">
                                    {t.feature3Title}
                                </h2>
                                <p className="text-lg text-slate-500 leading-relaxed mb-6">
                                    {t.feature3Desc}
                                </p>
                                <div className="text-[#4ECDC4] font-bold text-lg">
                                    {lang === 'zh' ? '💡 他們的經驗，你的起點' : '💡 Their experience, your head start'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECONDARY FEATURES: Map & Checklist ===== */}
            <section className="w-full py-16 px-6 z-10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12">
                        {lang === 'zh' ? '還有更多實用功能' : 'And More Useful Features'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Map Feature */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <div className="mb-4">
                                <MapVisual />
                            </div>
                            <h3 className="font-bold text-slate-800 text-lg mb-2">{t.feature2Title}</h3>
                            <p className="text-slate-500 text-sm">{t.feature2Desc}</p>
                        </div>
                        {/* Checklist Feature */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <div className="mb-4">
                                <ChecklistVisual lang={lang} />
                            </div>
                            <h3 className="font-bold text-slate-800 text-lg mb-2">{t.feature4Title}</h3>
                            <p className="text-slate-500 text-sm">{t.feature4Desc}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LandingFeatures;
