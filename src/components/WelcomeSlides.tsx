import React, { useState } from 'react';
import { Compass, GripVertical, Sparkles, ChevronRight, X } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import type { Translation } from '../data/translations';

interface WelcomeSlidesProps {
    onComplete: () => void;
    lang?: 'zh' | 'en';
}

/* ─── Slide 1 Animation: Browse & Apply Template ─── */
const DiscoverAnimation = ({ t, lang }: { t: any, lang?: 'zh' | 'en' }) => (
    <div className="relative w-64 h-28 mx-auto mb-4">
        <style>{`
            @keyframes card-glow { 0%,60% { box-shadow: 0 0 0 rgba(20,184,166,0); transform: scale(1); } 65% { box-shadow: 0 0 12px rgba(20,184,166,0.4); transform: scale(1.05); } 100% { box-shadow: 0 0 0 rgba(20,184,166,0); transform: scale(1); } }
            @keyframes cursor-move { 0% { left: 20%; top: 10%; opacity: 0; } 20% { opacity: 1; } 50% { left: 52%; top: 40%; } 55%,65% { left: 52%; top: 40%; transform: scale(0.85); } 70% { transform: scale(1); } 100% { left: 52%; top: 40%; opacity: 0; } }
            @keyframes apply-pop { 0%,70% { opacity: 0; transform: scale(0.5) translateX(-50%); } 75% { opacity: 1; transform: scale(1.1) translateX(-50%); } 80%,90% { opacity: 1; transform: scale(1) translateX(-50%); } 100% { opacity: 0; transform: scale(0.8) translateX(-50%); } }
        `}</style>
        {/* Template Cards */}
        <div className="flex gap-3 justify-center">
            <div className="w-20 h-16 rounded-lg bg-white/70 border border-gray-200 flex flex-col items-center justify-center shadow-sm">
                <span className="text-lg">🗼</span>
                <span className="text-[8px] text-gray-500 font-medium mt-0.5">{t.welcomeTokyo4Days}</span>
            </div>
            <div className="w-20 h-16 rounded-lg bg-white/70 border border-teal-200 flex flex-col items-center justify-center shadow-sm"
                style={{ animation: 'card-glow 4s ease-in-out infinite' }}>
                <span className="text-lg">⛩️</span>
                <span className="text-[8px] text-gray-500 font-medium mt-0.5">{t.welcomeKyoto3Days}</span>
            </div>
            <div className="w-20 h-16 rounded-lg bg-white/70 border border-gray-200 flex flex-col items-center justify-center shadow-sm">
                <span className="text-lg">🏯</span>
                <span className="text-[8px] text-gray-500 font-medium mt-0.5">{t.welcomeOsaka2Days}</span>
            </div>
        </div>
        {/* Cursor */}
        <div className="absolute w-5 h-5" style={{ animation: 'cursor-move 4s ease-in-out infinite' }}>
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 drop-shadow-md">
                <path d="M5 3l14 8-6 2-3 6-5-16z" fill="#1f2937" stroke="white" strokeWidth="1.5" />
            </svg>
        </div>
        {/* Apply button popup */}
        <div className="absolute bottom-0 left-1/2 bg-gradient-to-r from-teal-400 to-emerald-500 text-white text-[9px] font-bold px-4 py-1.5 rounded-full shadow-lg"
            style={{ animation: 'apply-pop 4s ease-in-out infinite' }}>
            {t.welcomeOneClickApply}
        </div>
    </div>
);

/* ─── Slide 2 Animation: Map Guided Discovery ─── */
const MapGuideAnimation = ({ t, lang }: { t: any, lang?: 'zh' | 'en' }) => (
    <div className="relative w-64 h-28 mx-auto mb-4 bg-emerald-50/50 rounded-xl overflow-hidden border border-emerald-100/50">
        <style>{`
            @keyframes pin-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
            @keyframes peak-slide-up { 0%, 40% { opacity: 0; transform: translateY(20px); } 50%, 90% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(20px); } }
            @keyframes map-cursor-move { 0% { left: 80%; top: 80%; opacity: 0; } 10%, 30% { opacity: 1; left: 50%; top: 45%; transform: scale(1); } 35% { transform: scale(0.85); } 40%, 100% { opacity: 0; } }
        `}</style>
        {/* Mock Map Background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#14b8a6 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
        
        {/* Map Pins */}
        <div className="absolute top-[30%] left-[30%] text-emerald-400 opacity-60 text-xs">📍</div>
        <div className="absolute top-[60%] left-[70%] text-emerald-400 opacity-60 text-xs">📍</div>

        {/* Active Pin */}
        <div className="absolute top-[40%] left-[48%] flex flex-col items-center" style={{ animation: 'pin-bounce 2s infinite ease-in-out' }}>
            <div className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-emerald-500 z-10 text-xs">
                ☕
            </div>
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-0.5 opacity-50" />
        </div>

        {/* Peak Card appearing at bottom */}
        <div className="absolute bottom-2 left-3 right-3 h-10 bg-white rounded-lg shadow-lg border border-gray-100 flex items-center px-2 gap-2"
            style={{ animation: 'peak-slide-up 5s infinite ease-in-out' }}>
            <div className="w-6 h-6 bg-slate-100 rounded-md shrink-0 flex items-center justify-center text-[10px]">☕</div>
            <div className="flex-1">
                <div className="h-2 w-16 bg-gray-200 rounded-full mb-1" />
                <div className="h-1.5 w-10 bg-gray-100 rounded-full" />
            </div>
        </div>

        {/* Cursor */}
        <div className="absolute w-5 h-5 z-20" style={{ animation: 'map-cursor-move 5s infinite ease-in-out' }}>
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 drop-shadow-md">
                <path d="M5 3l14 8-6 2-3 6-5-16z" fill="#1f2937" stroke="white" strokeWidth="1.5" />
            </svg>
        </div>
    </div>
);

/* ─── Slide 3 Animation: Add from Peak Card ─── */
const AddFromPeakCardAnimation = ({ t, lang }: { t: any, lang?: 'zh' | 'en' }) => (
    <div className="relative w-64 h-28 mx-auto mb-4 bg-slate-50/50 rounded-xl overflow-hidden border border-slate-100">
        <style>{`
            @keyframes btn-press-anim { 0%, 50% { transform: scale(1); background-color: #14b8a6; } 55% { transform: scale(0.95); background-color: #0d9488; } 60%, 100% { transform: scale(1); background-color: #14b8a6; } }
            @keyframes toast-pop { 0%, 60% { opacity: 0; transform: translateY(10px) translateX(-50%); } 65%, 90% { opacity: 1; transform: translateY(0) translateX(-50%); } 100% { opacity: 0; transform: translateY(-10px) translateX(-50%); } }
            @keyframes add-cursor-move { 0%, 20% { left: 80%; top: 80%; opacity: 0; } 30%, 50% { opacity: 1; left: 75%; top: 58%; transform: scale(1); } 55% { transform: scale(0.85); } 60%, 100% { opacity: 0; } }
        `}</style>
        
        {/* Mock Peak Card Centered */}
        <div className="absolute top-[20%] left-4 right-4 bg-white rounded-xl shadow-md border border-gray-100 p-2">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm">🍜</div>
                <div>
                    <div className="h-2.5 w-20 bg-gray-800 rounded-full mb-1" />
                    <div className="h-1.5 w-12 bg-gray-300 rounded-full" />
                </div>
            </div>
            <div className="flex gap-2">
                <div className="flex-1 h-6 border border-gray-200 rounded-lg" />
                {/* The Add Button */}
                <div className="flex-[1.5] h-6 rounded-lg text-white text-[8px] font-bold flex items-center justify-center"
                    style={{ animation: 'btn-press-anim 4s infinite ease-in-out' }}>
                    + {lang === 'zh' ? '加入' : 'Add'}
                </div>
            </div>
        </div>

        {/* Success Toast */}
        <div className="absolute top-2 left-1/2 bg-gray-800 text-white text-[9px] px-3 py-1 rounded-full shadow-lg whitespace-nowrap"
            style={{ animation: 'toast-pop 4s infinite ease-in-out' }}>
            ✅ {lang === 'zh' ? '已加入行程！' : 'Added to plan!'}
        </div>

        {/* Cursor */}
        <div className="absolute w-5 h-5 z-20" style={{ animation: 'add-cursor-move 4s infinite ease-in-out' }}>
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 drop-shadow-md">
                <path d="M5 3l14 8-6 2-3 6-5-16z" fill="#1f2937" stroke="white" strokeWidth="1.5" />
            </svg>
        </div>
    </div>
);

const ANIMATION_COMPONENTS = [DiscoverAnimation, MapGuideAnimation, AddFromPeakCardAnimation];

const SLIDE_CONFIGS = [
    {
        emoji: '🧭',
        icon: Compass,
        color: 'from-teal-400 to-emerald-500',
        bg: 'bg-gradient-to-br from-teal-50 to-emerald-50',
        keys: {
            title: 'welcomeStep1Title',
            subtitle: 'welcomeStep1Subtitle',
            description: 'welcomeStep1Desc',
            tip: 'welcomeStep1Tip'
        }
    },
    {
        emoji: '🎨',
        icon: GripVertical,
        color: 'from-violet-400 to-purple-500',
        bg: 'bg-gradient-to-br from-violet-50 to-purple-50',
        keys: {
            title: 'welcomeStep2Title',
            subtitle: 'welcomeStep2Subtitle',
            description: 'welcomeStep2Desc',
            tip: 'welcomeStep2Tip'
        }
    },
    {
        emoji: '✨',
        icon: Sparkles,
        color: 'from-amber-400 to-orange-500',
        bg: 'bg-gradient-to-br from-amber-50 to-orange-50',
        keys: {
            title: 'welcomeStep3Title',
            subtitle: 'welcomeStep3Subtitle',
            description: 'welcomeStep3Desc',
            tip: 'welcomeStep3Tip'
        }
    },
];

const WelcomeSlides: React.FC<WelcomeSlidesProps> = ({ onComplete, lang = 'zh' }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    const t = TRANSLATIONS[lang] || TRANSLATIONS.zh;
    const slideConfig = SLIDE_CONFIGS[currentSlide];
    const isLast = currentSlide === SLIDE_CONFIGS.length - 1;
    const AnimComponent = ANIMATION_COMPONENTS[currentSlide];

    const handleNext = () => {
        if (isLast) {
            handleClose();
        } else {
            setCurrentSlide(prev => prev + 1);
        }
    };

    const handleClose = () => {
        setIsExiting(true);
        setTimeout(() => {
            localStorage.setItem('tc_onboarding_done', 'true');
            onComplete();
        }, 300);
    };

    return (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            {/* Card */}
            <div className={`relative w-[90vw] max-w-md mx-auto rounded-3xl shadow-2xl overflow-hidden ${slideConfig.bg} border border-white/60`}>
                {/* Skip button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-white/60 hover:bg-white/90 transition-colors text-gray-500 hover:text-gray-700"
                    aria-label="Skip"
                >
                    <X size={16} />
                </button>

                {/* Content */}
                <div className="px-8 pt-8 pb-4 text-center">
                    {/* Micro Animation */}
                    <AnimComponent t={t} lang={lang} />

                    {/* Text */}
                    <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">
                        {(t as unknown as Translation)[slideConfig.keys.title as keyof Translation]}
                    </h2>
                    <p className="text-sm font-medium text-gray-500 mb-3">
                        {(t as unknown as Translation)[slideConfig.keys.subtitle as keyof Translation]}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4 max-w-xs mx-auto">
                        {(t as unknown as Translation)[slideConfig.keys.description as keyof Translation]}
                    </p>

                    {/* Tip badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-gray-200/60 text-xs font-medium text-gray-600 shadow-sm">
                        <slideConfig.icon size={12} className="text-gray-400" />
                        {(t as unknown as Translation)[slideConfig.keys.tip as keyof Translation]}
                    </div>
                </div>

                {/* Bottom section */}
                <div className="px-8 pb-7 pt-2">
                    {/* Dots */}
                    <div className="flex justify-center gap-2 mb-4">
                        {SLIDE_CONFIGS.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide
                                        ? `w-6 bg-gradient-to-r ${slideConfig.color}`
                                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={handleNext}
                        className={`w-full py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r ${slideConfig.color} shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-sm`}
                    >
                        {isLast ? t.welcomeStart : t.welcomeNext}
                        {!isLast && <ChevronRight size={16} />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeSlides;
