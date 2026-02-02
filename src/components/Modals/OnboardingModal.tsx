import React, { useState } from 'react';
import { X, ChevronRight, ChevronLeft, Sparkles, Layout, Zap } from 'lucide-react';

interface OnboardingModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang?: string;
}

const slides = {
    zh: [
        {
            icon: '👋',
            title: '歡迎使用 TravelCanvas！',
            description: '把景點拖到時間軸，輕鬆規劃您的完美行程',
            tip: '左側選擇景點，拖到右側時間軸'
        },
        {
            icon: '🎁',
            title: '試試達人模板！',
            description: '一鍵套用在地人精選的行程，省時又省力',
            tip: '點擊「達人模板」tab 開始探索'
        },
        {
            icon: '✨',
            title: '開始規劃吧！',
            description: 'Beta 期間所有 Premium 功能免費開放',
            tip: '有問題隨時點右下角反饋按鈕'
        }
    ],
    en: [
        {
            icon: '👋',
            title: 'Welcome to TravelCanvas!',
            description: 'Drag attractions to the timeline to plan your perfect trip',
            tip: 'Select items on the left, drag to the timeline on the right'
        },
        {
            icon: '🎁',
            title: 'Try Expert Templates!',
            description: 'Apply curated itineraries from locals with one click',
            tip: 'Click the "Templates" tab to explore'
        },
        {
            icon: '✨',
            title: "Let's Get Started!",
            description: 'All Premium features are free during Beta',
            tip: 'Questions? Click the feedback button anytime'
        }
    ]
};

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose, lang = 'zh' }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const currentSlides = slides[lang as keyof typeof slides] || slides.zh;
    const slide = currentSlides[currentSlide];
    const isLast = currentSlide === currentSlides.length - 1;

    if (!isOpen) return null;

    const handleNext = () => {
        if (isLast) {
            onClose();
        } else {
            setCurrentSlide(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentSlide > 0) {
            setCurrentSlide(prev => prev - 1);
        }
    };

    const handleSkip = () => {
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleSkip} />

            {/* Modal */}
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Skip Button */}
                <button
                    onClick={handleSkip}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                >
                    <X size={20} />
                </button>

                {/* Content */}
                <div className="p-8 pt-12 text-center">
                    {/* Icon */}
                    <div className="text-6xl mb-6 animate-bounce">
                        {slide.icon}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        {slide.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        {slide.description}
                    </p>

                    {/* Tip */}
                    <div className="bg-teal-50 border border-teal-100 rounded-xl p-3 mb-8">
                        <p className="text-sm text-teal-700">
                            💡 {slide.tip}
                        </p>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mb-6">
                        {currentSlides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide
                                        ? 'bg-teal-500 w-6'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-3">
                        {currentSlide > 0 && (
                            <button
                                onClick={handlePrev}
                                className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-1"
                            >
                                <ChevronLeft size={18} />
                                {lang === 'zh' ? '上一步' : 'Back'}
                            </button>
                        )}
                        <button
                            onClick={handleNext}
                            className={`flex-1 py-3 ${isLast
                                ? 'bg-gradient-to-r from-teal-500 to-emerald-500'
                                : 'bg-gray-900'
                                } text-white rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-1`}
                        >
                            {isLast
                                ? (lang === 'zh' ? '開始使用' : 'Get Started')
                                : (lang === 'zh' ? '下一步' : 'Next')
                            }
                            {!isLast && <ChevronRight size={18} />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
