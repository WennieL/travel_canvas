import React, { useState } from 'react';
import { Compass, GripVertical, Sparkles, ChevronRight, X } from 'lucide-react';

interface WelcomeSlidesProps {
    onComplete: () => void;
    lang?: 'zh' | 'en';
}

/* ─── Slide 1 Animation: Browse & Apply Template ─── */
const DiscoverAnimation = () => (
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
                <span className="text-[8px] text-gray-500 font-medium mt-0.5">東京 4 日</span>
            </div>
            <div className="w-20 h-16 rounded-lg bg-white/70 border border-teal-200 flex flex-col items-center justify-center shadow-sm"
                style={{ animation: 'card-glow 4s ease-in-out infinite' }}>
                <span className="text-lg">⛩️</span>
                <span className="text-[8px] text-gray-500 font-medium mt-0.5">京都 3 日</span>
            </div>
            <div className="w-20 h-16 rounded-lg bg-white/70 border border-gray-200 flex flex-col items-center justify-center shadow-sm">
                <span className="text-lg">🏯</span>
                <span className="text-[8px] text-gray-500 font-medium mt-0.5">大阪 2 日</span>
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
            ✅ 一鍵套用
        </div>
    </div>
);

/* ─── Slide 2 Animation: Drag & Drop ─── */
const DragDropAnimation = () => (
    <div className="relative w-64 h-28 mx-auto mb-4">
        <style>{`
            @keyframes item-fly { 0% { left: 12px; top: 6px; opacity: 1; } 45% { left: 12px; top: 6px; opacity: 1; } 70% { left: 148px; top: 32px; opacity: 1; } 75% { left: 148px; top: 32px; opacity: 0; } 100% { left: 148px; top: 32px; opacity: 0; } }
            @keyframes slot-fill { 0%,72% { background: rgba(255,255,255,0.5); border-color: #e5e7eb; } 75% { background: rgba(139,92,246,0.1); border-color: #8b5cf6; transform: scale(1.03); } 85% { transform: scale(1); } 100% { background: rgba(139,92,246,0.1); border-color: #8b5cf6; } }
            @keyframes check-pop { 0%,74% { opacity: 0; transform: scale(0); } 76% { opacity: 1; transform: scale(1.3); } 82%,100% { opacity: 1; transform: scale(1); } }
            @keyframes dash-move { 0%,45% { width: 0; } 70% { width: 80px; } 100% { width: 0; } }
        `}</style>
        <div className="flex items-start gap-4">
            {/* Left: Asset Library mini */}
            <div className="w-20 shrink-0">
                <div className="text-[8px] text-gray-400 font-bold mb-1.5 text-center">素材庫</div>
                <div className="space-y-1.5">
                    <div className="relative">
                        <div className="w-full h-8 rounded-md bg-white/80 border border-purple-200 flex items-center gap-1 px-1.5 shadow-sm"
                            style={{ animation: 'item-fly 4.5s ease-in-out infinite', position: 'absolute', zIndex: 5 }}>
                            <span className="text-xs">🏯</span>
                            <span className="text-[7px] text-gray-700 font-medium">金閣寺</span>
                        </div>
                        <div className="w-full h-8 rounded-md bg-white/40 border border-dashed border-gray-200"></div>
                    </div>
                    <div className="w-full h-8 rounded-md bg-white/60 border border-gray-200 flex items-center gap-1 px-1.5">
                        <span className="text-xs">🍜</span>
                        <span className="text-[7px] text-gray-500 font-medium">一蘭拉麵</span>
                    </div>
                </div>
            </div>

            {/* Dashed line trail */}
            <div className="absolute top-8 left-[88px] h-0.5 border-t-2 border-dashed border-purple-300/50"
                style={{ animation: 'dash-move 4.5s ease-in-out infinite' }}></div>

            {/* Right: Timeline slots */}
            <div className="flex-1">
                <div className="text-[8px] text-gray-400 font-bold mb-1.5 text-center">行程</div>
                <div className="space-y-1.5">
                    <div className="w-full h-8 rounded-md border border-dashed flex items-center justify-center"
                        style={{ animation: 'slot-fill 4.5s ease-in-out infinite' }}>
                        <span className="text-[7px] text-gray-400" style={{ animation: 'check-pop 4.5s ease-in-out infinite' }}>
                            ✅ 已加入
                        </span>
                    </div>
                    <div className="w-full h-8 rounded-md bg-white/40 border border-dashed border-gray-200 flex items-center justify-center">
                        <span className="text-[8px] text-gray-300">下午</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

/* ─── Slide 3 Animation: Quick Fill ─── */
const QuickFillAnimation = () => (
    <div className="relative w-64 h-28 mx-auto mb-4">
        <style>{`
            @keyframes btn-press { 0%,40% { transform: scale(1); box-shadow: 0 2px 8px rgba(245,158,11,0.3); } 45% { transform: scale(0.92); box-shadow: 0 1px 4px rgba(245,158,11,0.2); } 50% { transform: scale(1.05); box-shadow: 0 4px 12px rgba(245,158,11,0.4); } 55%,100% { transform: scale(1); box-shadow: 0 2px 8px rgba(245,158,11,0.3); } }
            @keyframes slot-pop-1 { 0%,52% { opacity: 0; transform: scale(0) translateY(8px); } 58% { opacity: 1; transform: scale(1.15) translateY(-2px); } 64%,100% { opacity: 1; transform: scale(1) translateY(0); } }
            @keyframes slot-pop-2 { 0%,58% { opacity: 0; transform: scale(0) translateY(8px); } 64% { opacity: 1; transform: scale(1.15) translateY(-2px); } 70%,100% { opacity: 1; transform: scale(1) translateY(0); } }
            @keyframes slot-pop-3 { 0%,64% { opacity: 0; transform: scale(0) translateY(8px); } 70% { opacity: 1; transform: scale(1.15) translateY(-2px); } 76%,100% { opacity: 1; transform: scale(1) translateY(0); } }
            @keyframes slot-pop-4 { 0%,70% { opacity: 0; transform: scale(0) translateY(8px); } 76% { opacity: 1; transform: scale(1.15) translateY(-2px); } 82%,100% { opacity: 1; transform: scale(1) translateY(0); } }
        `}</style>
        {/* Quick Fill button */}
        <div className="flex justify-center mb-3">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[9px] font-bold px-4 py-1.5 rounded-full"
                style={{ animation: 'btn-press 5s ease-in-out infinite' }}>
                ✨ 一鍵填入
            </div>
        </div>
        {/* Slots grid */}
        <div className="grid grid-cols-4 gap-2 px-2">
            {[
                { emoji: '🏯', label: '金閣寺', anim: 'slot-pop-1' },
                { emoji: '🍜', label: '一蘭拉麵', anim: 'slot-pop-2' },
                { emoji: '🌸', label: '花見小路', anim: 'slot-pop-3' },
                { emoji: '🏨', label: '京都旅館', anim: 'slot-pop-4' },
            ].map((item, i) => (
                <div key={i} className="h-14 rounded-lg bg-white/70 border border-orange-200 flex flex-col items-center justify-center shadow-sm"
                    style={{ animation: `${item.anim} 5s ease-in-out infinite` }}>
                    <span className="text-lg">{item.emoji}</span>
                    <span className="text-[7px] text-gray-500 font-medium">{item.label}</span>
                </div>
            ))}
        </div>
    </div>
);

const ANIMATION_COMPONENTS = [DiscoverAnimation, DragDropAnimation, QuickFillAnimation];

const SLIDES_ZH = [
    {
        emoji: '🧭',
        icon: Compass,
        color: 'from-teal-400 to-emerald-500',
        bg: 'bg-gradient-to-br from-teal-50 to-emerald-50',
        title: '從達人模板開始',
        subtitle: '不知道去哪？沒關係！',
        description: '探索頁有上百個在地達人精心設計的行程模板，一鍵套用就能開始你的旅程。',
        tip: '點左側「發現」開始探索 →',
    },
    {
        emoji: '🎨',
        icon: GripVertical,
        color: 'from-violet-400 to-purple-500',
        bg: 'bg-gradient-to-br from-violet-50 to-purple-50',
        title: '拖拽你的行程',
        subtitle: '像畫布一樣自由編排',
        description: '從素材庫將景點、美食、住宿直接拖到行程時間軸上，輕鬆規劃每日行程。',
        tip: '點左側「素材資料庫」瀏覽景點 →',
    },
    {
        emoji: '✨',
        icon: Sparkles,
        color: 'from-amber-400 to-orange-500',
        bg: 'bg-gradient-to-br from-amber-50 to-orange-50',
        title: '一鍵填入',
        subtitle: '懶人規劃神器',
        description: '看到空白時段？點「一鍵填入」，系統自動幫你填滿當地最推薦的景點！',
        tip: '在行程空白處找到 ✨ 按鈕',
    },
];

const SLIDES_EN = [
    {
        emoji: '🧭',
        icon: Compass,
        color: 'from-teal-400 to-emerald-500',
        bg: 'bg-gradient-to-br from-teal-50 to-emerald-50',
        title: 'Start with Expert Templates',
        subtitle: "Don't know where to go? No worries!",
        description: 'Browse hundreds of curated travel templates by local experts. Apply one to start your trip instantly.',
        tip: 'Click "Discovery" in the sidebar →',
    },
    {
        emoji: '🎨',
        icon: GripVertical,
        color: 'from-violet-400 to-purple-500',
        bg: 'bg-gradient-to-br from-violet-50 to-purple-50',
        title: 'Drag & Drop Your Itinerary',
        subtitle: 'Plan like a canvas',
        description: 'Drag attractions, food spots, and hotels from the asset library directly onto your timeline.',
        tip: 'Click "Asset Library" in the sidebar →',
    },
    {
        emoji: '✨',
        icon: Sparkles,
        color: 'from-amber-400 to-orange-500',
        bg: 'bg-gradient-to-br from-amber-50 to-orange-50',
        title: 'Quick Fill',
        subtitle: 'Lazy planning magic',
        description: 'See an empty slot? Hit "Quick Fill" and we\'ll auto-suggest the best local spots for you!',
        tip: 'Look for the ✨ button in empty slots',
    },
];

const WelcomeSlides: React.FC<WelcomeSlidesProps> = ({ onComplete, lang = 'zh' }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    const slides = lang === 'zh' ? SLIDES_ZH : SLIDES_EN;
    const slide = slides[currentSlide];
    const isLast = currentSlide === slides.length - 1;
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
            <div className={`relative w-[90vw] max-w-md mx-auto rounded-3xl shadow-2xl overflow-hidden ${slide.bg} border border-white/60`}>
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
                    <AnimComponent />

                    {/* Text */}
                    <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">
                        {slide.title}
                    </h2>
                    <p className="text-sm font-medium text-gray-500 mb-3">
                        {slide.subtitle}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4 max-w-xs mx-auto">
                        {slide.description}
                    </p>

                    {/* Tip badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-gray-200/60 text-xs font-medium text-gray-600 shadow-sm">
                        <slide.icon size={12} className="text-gray-400" />
                        {slide.tip}
                    </div>
                </div>

                {/* Bottom section */}
                <div className="px-8 pb-7 pt-2">
                    {/* Dots */}
                    <div className="flex justify-center gap-2 mb-4">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide
                                        ? `w-6 bg-gradient-to-r ${slide.color}`
                                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={handleNext}
                        className={`w-full py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r ${slide.color} shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-sm`}
                    >
                        {isLast
                            ? (lang === 'zh' ? '開始探索！' : "Let's Go!")
                            : (lang === 'zh' ? '下一步' : 'Next')
                        }
                        {!isLast && <ChevronRight size={16} />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeSlides;
