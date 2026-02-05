import React, { useState } from 'react';
import { Map as MapIcon, Globe, ArrowRight } from 'lucide-react';
import { LangType } from '../types';
import { TRANSLATIONS } from '../data/index';
import { DragDropVisual, MapVisual, ChecklistVisual, AssetsVisual } from './Visuals';
import ProductPreview from './ProductPreview';

import ChaosToOrder from './HeroAnimation';

interface LandingPageProps {
    onStart: () => void;
    lang: LangType;
    toggleLang: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart, lang, toggleLang }) => {
    const t = TRANSLATIONS[lang];
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative overflow-hidden">

            {/* Travoll-style Sticky Nav - White Background */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
                <div className="flex justify-between items-center px-6 py-3 max-w-6xl mx-auto w-full">
                    {/* Logo - Clickable to scroll to top */}
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="flex items-center gap-2 text-slate-800 font-bold text-xl hover:text-[#4ECDC4] transition-colors"
                    >
                        <MapIcon size={28} className="text-[#4ECDC4]" />
                        <span>TravelCanvas</span>
                    </a>

                    {/* Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="#features"
                            className="text-slate-600 font-medium text-sm hover:text-slate-800 transition-colors"
                        >
                            {lang === 'zh' ? '功能' : 'Features'}
                        </a>
                        <a
                            href="#pricing"
                            className="text-slate-600 font-medium text-sm hover:text-slate-800 transition-colors"
                        >
                            {lang === 'zh' ? '定價' : 'Pricing'}
                        </a>
                    </div>

                    {/* Right Side: Language + CTA */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleLang}
                            className="px-3 py-1.5 text-slate-600 font-medium text-sm hover:text-slate-800 transition-colors flex items-center gap-1.5"
                        >
                            <Globe size={16} />
                            {lang === 'zh' ? 'EN' : '中文'}
                        </button>
                        <button
                            onClick={onStart}
                            className="px-5 py-2 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white font-bold text-sm rounded-full hover:opacity-90 transition-all shadow-sm"
                        >
                            {lang === 'zh' ? '試用 Demo' : 'Try Demo'}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section - Image Carousel with Ken Burns Effect */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Image Carousel */}
                <div className="absolute inset-0">
                    {['/hero-bg.png', '/hero-snow.png', '/hero-coast.png'].map((src, index) => (
                        <div
                            key={src}
                            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                            style={{
                                backgroundImage: `url(${src})`,
                                animation: `kenburns 18s ease-in-out infinite`,
                                animationDelay: `${index * 6}s`,
                                opacity: 0,
                            }}
                        />
                    ))}
                </div>

                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight drop-shadow-lg animate-fade-in-up">
                        {t.heroTitle}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed animate-fade-in-up max-w-2xl mx-auto drop-shadow" style={{ animationDelay: '0.2s' }}>
                        {t.heroSubtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <button
                            onClick={onStart}
                            className="group px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#ee5a5a] text-white text-lg font-bold rounded-full shadow-lg hover:from-[#ee5a5a] hover:to-[#dd4a4a] hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                        >
                            {t.startPlanning}
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 text-lg font-bold rounded-full hover:bg-white hover:text-slate-800 hover:border-white transition-all"
                            onClick={() => alert("Thanks for your interest! Early access coming soon.")}
                        >
                            {t.joinEarlyAccess}
                        </button>
                    </div>
                    {/* Trust hint */}
                    <p className="text-white/60 text-sm mt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        {lang === 'zh' ? '無需註冊 • 無需信用卡 • 立即試用' : 'No signup required • No credit card • Try instantly'}
                    </p>
                </div>

                {/* Ken Burns & Carousel Animation Styles */}
                <style>{`
                    @keyframes kenburns {
                        0% {
                            opacity: 0;
                            transform: scale(1);
                        }
                        5% {
                            opacity: 1;
                        }
                        28% {
                            opacity: 1;
                            transform: scale(1.08);
                        }
                        33% {
                            opacity: 0;
                            transform: scale(1.1);
                        }
                        100% {
                            opacity: 0;
                            transform: scale(1);
                        }
                    }
                `}</style>
            </section>

            {/* Background Decorations for rest of page */}
            <div className="absolute top-[90vh] right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#FF6B6B]/5 to-[#4ECDC4]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#4ECDC4]/5 to-[#FFE66D]/5 rounded-full blur-3xl"></div>

            {/* ===== VALUE PROPOSITION TRANSITION - "The Spark" ===== */}
            <section className="w-full bg-stone-50 py-16 md:py-24 px-6 z-10 text-center">
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
                                    {lang === 'zh' ? '核心功能' : 'Core Feature'}
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

            {/* ===== COMMUNITY / CREATOR SECTION ===== */}
            <section className="w-full py-20 px-6 bg-[#0f172a] text-white relative overflow-hidden z-10">
                {/* Background Patterns */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">
                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-200 to-yellow-400 text-yellow-900 text-xs font-black uppercase tracking-wider mb-6 shadow-lg shadow-yellow-500/20">
                            {lang === 'zh' ? '達人社群' : 'Expert Community'}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            {t.communityTitle || "Plan like a pro. Share like an influencer."}
                        </h2>
                        <p className="text-lg text-gray-400 mb-6 leading-relaxed max-w-xl mx-auto md:mx-0">
                            {t.communitySubtitle || "Join our community. Publish your trips, get featured, and inspire thousands of travelers."}
                        </p>

                        {/* Expert Types Explanation */}
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
                            <span className="px-3 py-1.5 bg-white/10 rounded-full text-sm text-gray-300 border border-white/10">
                                🏠 {lang === 'zh' ? '當地達人 — 住在那裡的人' : 'Local Expert — lives there'}
                            </span>
                            <span className="px-3 py-1.5 bg-white/10 rounded-full text-sm text-gray-300 border border-white/10">
                                ✈️ {lang === 'zh' ? '資深旅人 — 去過 5 次以上' : 'Veteran — visited 5+ times'}
                            </span>
                            <span className="px-3 py-1.5 bg-white/10 rounded-full text-sm text-gray-300 border border-white/10">
                                ⭐ {lang === 'zh' ? '人氣規劃師 — 被引用 100+ 次' : 'Community Star — copied 100+ times'}
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-10">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">500+</span>
                                <span className="text-sm text-gray-500">{t.statCreators || "Verified Creators"}</span>
                            </div>
                            <div className="w-px h-12 bg-gray-700/50"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">10k+</span>
                                <span className="text-sm text-gray-500">{t.statTemplates || "Quality Templates"}</span>
                            </div>
                        </div>

                        <button
                            onClick={onStart}
                            className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-xl shadow-white/10 flex items-center gap-2 mx-auto md:mx-0"
                        >
                            {t.joinCommunityBtn || "Become a Creator"}
                            <ArrowRight size={18} />
                        </button>
                    </div>

                    {/* Visual Content - Creator Card Mockup */}
                    <div className="flex-1 relative">
                        {/* Abstract Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>

                        {/* Card */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400 p-0.5">
                                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-3xl">
                                        👩‍🎨
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                        Alice.Travels
                                        <span className="bg-blue-500 text-white text-[10px] p-1 rounded-full"><Globe size={10} /></span>
                                    </h3>
                                    <p className="text-teal-400 text-sm font-medium">{lang === 'zh' ? '🏠 當地達人' : '🏠 Local Expert'}</p>
                                </div>
                            </div>

                            {/* Stats Row */}
                            <div className="grid grid-cols-3 gap-2 mb-6">
                                <div className="bg-black/30 rounded-lg p-3 text-center">
                                    <div className="text-white font-bold">128</div>
                                    <div className="text-[10px] text-gray-400">Plans</div>
                                </div>
                                <div className="bg-black/30 rounded-lg p-3 text-center">
                                    <div className="text-white font-bold">4.2k</div>
                                    <div className="text-[10px] text-gray-400">Copied</div>
                                </div>
                                <div className="bg-black/30 rounded-lg p-3 text-center">
                                    <div className="text-yellow-400 font-bold">4.9</div>
                                    <div className="text-[10px] text-gray-400">Rating</div>
                                </div>
                            </div>

                            {/* Recent Plan */}
                            <div className="bg-white rounded-xl p-3 flex gap-3 items-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=150&q=80)' }}></div>
                                <div>
                                    <div className="text-xs font-bold text-teal-600 mb-1">UP TRENDING 🚀</div>
                                    <div className="text-slate-800 font-bold text-sm">Tokyo Hidden Gems</div>
                                    <div className="text-xs text-gray-400">5 Days • Budget Friendly</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Preview Section */}
            <ProductPreview lang={lang} onStart={onStart} />

            {/* ===== PRICING SECTION (Optimized) ===== */}
            <section id="pricing" className="w-full py-20 px-6 bg-gradient-to-b from-slate-50 to-white z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider mb-4">
                            {lang === 'zh' ? '定價方案' : 'Pricing'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
                            {lang === 'zh' ? '簡單透明，沒有隱藏費用' : 'Simple pricing. No surprises.'}
                        </h2>
                        <p className="text-slate-500 text-lg max-w-xl mx-auto">
                            {lang === 'zh' ? '免費版就很強大。需要更多？隨時升級。' : 'Free is powerful. Need more? Upgrade anytime.'}
                        </p>
                    </div>

                    {/* Billing Toggle */}
                    <div className="flex justify-center mb-10">
                        <div className="relative inline-flex items-center bg-slate-100 rounded-full p-1">
                            <button
                                onClick={() => setIsYearly(false)}
                                className={`px-6 py-2 text-sm font-bold rounded-full transition-all ${!isYearly ? 'bg-slate-800 text-white' : 'text-slate-600 hover:text-slate-800'}`}
                            >
                                {lang === 'zh' ? '月付' : 'Monthly'}
                            </button>
                            <button
                                onClick={() => setIsYearly(true)}
                                className={`px-6 py-2 text-sm font-bold rounded-full transition-all ${isYearly ? 'bg-slate-800 text-white' : 'text-slate-600 hover:text-slate-800'}`}
                            >
                                {lang === 'zh' ? '年付' : 'Yearly'}
                            </button>
                            <span className="absolute -top-3 -right-2 bg-gradient-to-r from-orange-400 to-red-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                                {lang === 'zh' ? '省 33%' : 'SAVE 33%'}
                            </span>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

                        {/* FREE Plan */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-slate-800">
                                    {lang === 'zh' ? '免費版' : 'Free'}
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    {lang === 'zh' ? '永久免費，足夠一般使用' : 'Free forever for casual planning'}
                                </p>
                            </div>

                            <div className="mb-6">
                                <span className="text-4xl font-extrabold text-slate-800">$0</span>
                                <span className="text-slate-400">/mo</span>
                                <p className="text-slate-400 text-xs mt-1">&nbsp;</p>
                            </div>

                            <button
                                onClick={onStart}
                                className="w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all mb-2"
                            >
                                {lang === 'zh' ? '開始使用' : 'Get Started'}
                            </button>
                            <p className="text-center text-slate-400 text-xs mb-6">
                                {lang === 'zh' ? '永久免費！' : "It's Free!"}
                            </p>

                            <ul className="space-y-3 flex-1">
                                <li className="flex items-center gap-2 text-slate-600 text-sm">
                                    <span className="text-teal-500">✓</span>
                                    {lang === 'zh' ? '1 份草稿行程' : '1 draft itinerary'}
                                </li>
                                <li className="flex items-center gap-2 text-slate-600 text-sm">
                                    <span className="text-teal-500">✓</span>
                                    {lang === 'zh' ? '每行程 20 個景點' : '20 spots per trip'}
                                </li>
                                <li className="flex items-center gap-2 text-slate-600 text-sm">
                                    <span className="text-teal-500">✓</span>
                                    {lang === 'zh' ? '5 個基本模板' : '5 starter templates'}
                                </li>
                                <li className="flex items-center gap-2 text-slate-600 text-sm">
                                    <span className="text-teal-500">✓</span>
                                    {lang === 'zh' ? 'PDF 匯出（有浮水印）' : 'PDF export (watermarked)'}
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
                                    {lang === 'zh' ? '旅行家 Pro' : 'Traveler Pro'}
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    {lang === 'zh' ? '認真規劃的旅人首選' : 'For serious trip planners'}
                                </p>
                            </div>

                            <div className="mb-2">
                                <span className="text-4xl font-extrabold">{isYearly ? '$3.33' : '$4.99'}</span>
                                <span className="text-slate-400">/mo</span>
                            </div>
                            {isYearly && (
                                <p className="text-teal-400 text-xs mb-4">
                                    {lang === 'zh' ? '年付 $39.99（省 $20）' : 'Billed $39.99/year (save $20)'}
                                </p>
                            )}
                            {!isYearly && <div className="h-4 mb-4"></div>}

                            <button
                                onClick={onStart}
                                className="w-full py-3 bg-gradient-to-r from-[#4ECDC4] to-[#44A5A0] text-white font-bold rounded-xl hover:opacity-90 transition-all mb-2"
                            >
                                {lang === 'zh' ? '免費試用 14 天' : 'Start 14-Day Trial'}
                            </button>
                            <p className="text-center text-slate-500 text-xs mb-6">
                                {lang === 'zh' ? '隨時取消 • 不需信用卡' : 'Cancel anytime • No credit card'}
                            </p>

                            <ul className="space-y-3 flex-1">
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-teal-400">✓</span>
                                    <strong>{lang === 'zh' ? '無限' : 'Unlimited'}</strong>&nbsp;{lang === 'zh' ? '草稿行程' : 'itineraries'}
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-teal-400">✓</span>
                                    <strong>{lang === 'zh' ? '無限' : 'Unlimited'}</strong>&nbsp;{lang === 'zh' ? '景點' : 'spots'}
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-teal-400">✓</span>
                                    {lang === 'zh' ? '所有達人模板' : 'All expert templates'}
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-teal-400">✓</span>
                                    {lang === 'zh' ? 'PDF 匯出（無浮水印）' : 'PDF export (no watermark)'}
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-teal-400">✓</span>
                                    {lang === 'zh' ? '更多達人專屬模板' : 'More expert templates'}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Trust Footer */}
                    <div className="text-center mt-10 text-slate-400 text-sm">
                        {lang === 'zh' ? '🔒 安全付款 • 隨時取消 • 14 天免費試用' : '🔒 Secure payment • Cancel anytime • 14-day free trial'}
                    </div>
                </div>
            </section>

            {/* ===== SOCIAL PROOF SECTION ===== */}
            <section className="w-full py-16 px-6 bg-white z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Header */}
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                        {lang === 'zh' ? '🌍 全球旅人的選擇' : '🌍 Trusted by Travelers Worldwide'}
                    </h2>

                    {/* Demo Avatars */}
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

                    {/* Beta CTA - Honest approach */}
                    <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-8 border border-teal-100">
                        <p className="text-lg md:text-xl text-slate-700 font-medium mb-4">
                            {lang === 'zh'
                                ? '🚀 我們正在打造下一代旅行規劃工具'
                                : '🚀 We\'re building the next-gen trip planner'}
                        </p>
                        <p className="text-slate-500 text-sm mb-4">
                            {lang === 'zh'
                                ? '目前為 Beta 版，免費試用所有功能。你的回饋將幫助我們變得更好！'
                                : 'Currently in Beta — try all features free. Your feedback helps us improve!'}
                        </p>
                        <button
                            onClick={onStart}
                            className="px-6 py-2 bg-teal-500 text-white font-bold rounded-full hover:bg-teal-600 transition-all text-sm"
                        >
                            {lang === 'zh' ? '免費試用 Beta 版' : 'Try Beta Free'}
                        </button>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-6 text-slate-500 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-teal-500">🔒</span>
                            {lang === 'zh' ? '安全付款' : 'Secure Payment'}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-teal-500">✅</span>
                            {lang === 'zh' ? '隨時取消' : 'Cancel Anytime'}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-teal-500">🌐</span>
                            {lang === 'zh' ? '多國語言支援' : 'Multi-language'}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-teal-500">💬</span>
                            {lang === 'zh' ? '客服支援' : 'Support Available'}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FAQ SECTION ===== */}
            <section className="w-full py-16 px-6 bg-slate-50 z-10">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12">
                        {lang === 'zh' ? '常見問題' : 'Frequently Asked Questions'}
                    </h2>

                    <div className="space-y-4">
                        {/* FAQ Item 1 */}
                        <details className="bg-white rounded-xl p-5 shadow-sm group">
                            <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-800">
                                {lang === 'zh' ? '免費試用後會自動扣款嗎？' : 'Will I be charged after the free trial?'}
                                <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                                {lang === 'zh'
                                    ? '不會！免費試用期間不需要輸入信用卡資訊。試用結束後，您可以選擇升級或繼續使用免費版。'
                                    : "No! You won't need to enter credit card info during the trial. After the trial, you can choose to upgrade or continue with the free plan."}
                            </p>
                        </details>

                        {/* FAQ Item 2 */}
                        <details className="bg-white rounded-xl p-5 shadow-sm group">
                            <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-800">
                                {lang === 'zh' ? '可以隨時取消訂閱嗎？' : 'Can I cancel my subscription anytime?'}
                                <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                                {lang === 'zh'
                                    ? '當然可以！您可以隨時在設定中取消訂閱，不會有任何隱藏費用。'
                                    : 'Absolutely! You can cancel anytime from your settings. No hidden fees, no hassle.'}
                            </p>
                        </details>

                        {/* FAQ Item 3 */}
                        <details className="bg-white rounded-xl p-5 shadow-sm group">
                            <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-800">
                                {lang === 'zh' ? '我的行程資料儲存在哪裡？' : 'Where is my trip data stored?'}
                                <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                                {lang === 'zh'
                                    ? '目前 Beta 版本的資料儲存在您的瀏覽器本地。雲端同步功能正在開發中，即將推出！'
                                    : 'Currently in Beta, your data is stored locally in your browser. Cloud sync is coming soon!'}
                            </p>
                        </details>

                        {/* FAQ Item 4 */}
                        <details className="bg-white rounded-xl p-5 shadow-sm group">
                            <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-800">
                                {lang === 'zh' ? '可以和朋友一起規劃行程嗎？' : 'Can I plan trips with friends?'}
                                <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                                {lang === 'zh'
                                    ? '協作功能正在開發中！目前您可以透過分享連結讓朋友查看行程，即時共編功能即將推出。'
                                    : 'Collaboration is in development! Currently you can share trip links for viewing. Real-time co-editing is coming soon.'}
                            </p>
                        </details>

                        {/* FAQ Item 5 */}
                        <details className="bg-white rounded-xl p-5 shadow-sm group">
                            <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-800">
                                {lang === 'zh' ? 'PDF 匯出的浮水印是什麼？' : 'What is the PDF watermark?'}
                                <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                                {lang === 'zh'
                                    ? '免費版匯出的 PDF 會包含小型 TravelCanvas Logo 浮水印。升級 Pro 即可獲得無浮水印的乾淨版本。'
                                    : 'Free PDF exports include a small TravelCanvas logo. Upgrade to Pro for clean, watermark-free exports.'}
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA SECTION ===== */}
            <section className="w-full py-16 px-6 bg-gradient-to-r from-[#4ECDC4] to-[#44A5A0] z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {lang === 'zh' ? '準備好開始你的旅程了嗎？' : 'Ready to Start Your Journey?'}
                    </h2>
                    <p className="text-white/80 mb-8">
                        {lang === 'zh' ? '免費開始，無需信用卡' : 'Start free, no credit card required'}
                    </p>
                    <button
                        onClick={onStart}
                        className="px-8 py-4 bg-white text-[#4ECDC4] font-bold text-lg rounded-full hover:bg-white/90 transition-all shadow-lg"
                    >
                        {lang === 'zh' ? '免費開始規劃 →' : 'Start Planning for Free →'}
                    </button>
                </div>
            </section>

            {/* Footer - Clean Light Theme */}
            <footer className="w-full bg-white border-t border-slate-200 text-slate-600 py-12 px-6 z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Logo & Tagline */}
                        <div className="text-center md:text-left">
                            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                                <MapIcon size={24} className="text-[#FF6B6B]" />
                                <span className="font-bold text-lg text-slate-800">TravelCanvas</span>
                            </div>
                            <p className="text-sm text-slate-500">
                                {lang === 'zh' ? '讓旅行規劃變得簡單有趣' : 'Making trip planning simple and fun'}
                            </p>
                        </div>

                        {/* Links */}
                        <div className="flex gap-8 text-sm">
                            <div className="flex flex-col gap-2 text-center md:text-left">
                                <span className="font-semibold text-slate-800 uppercase text-xs tracking-wider mb-1">
                                    {lang === 'zh' ? '產品' : 'Product'}
                                </span>
                                <a href="#" className="text-slate-500 hover:text-[#FF6B6B] transition-colors">
                                    {lang === 'zh' ? '功能特色' : 'Features'}
                                </a>
                                <a href="#" className="text-slate-500 hover:text-[#FF6B6B] transition-colors">
                                    {lang === 'zh' ? '定價方案' : 'Pricing'}
                                </a>
                            </div>
                            <div className="flex flex-col gap-2 text-center md:text-left">
                                <span className="font-semibold text-slate-800 uppercase text-xs tracking-wider mb-1">
                                    {lang === 'zh' ? '支援' : 'Support'}
                                </span>
                                <a href="#" className="text-slate-500 hover:text-[#FF6B6B] transition-colors">
                                    {lang === 'zh' ? '常見問題' : 'FAQ'}
                                </a>
                                <a href="#" className="text-slate-500 hover:text-[#FF6B6B] transition-colors">
                                    {lang === 'zh' ? '聯繫我們' : 'Contact'}
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-[#FF6B6B] hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-[#FF6B6B] hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-[#FF6B6B] hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                        <p>© 2026 TravelCanvas. {lang === 'zh' ? '保留所有權利。' : 'All rights reserved.'}</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-[#FF6B6B] transition-colors">
                                {lang === 'zh' ? '隱私政策' : 'Privacy Policy'}
                            </a>
                            <a href="#" className="hover:text-[#FF6B6B] transition-colors">
                                {lang === 'zh' ? '使用條款' : 'Terms of Service'}
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Simple CSS for custom animations */}
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes bounceSlow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                    opacity: 0; /* Initially hidden */
                }
                .animate-bounce-slow {
                    animation: bounceSlow 3s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default LandingPage;
