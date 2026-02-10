import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LangType } from '../../types';
import { useConfirm } from '../../hooks';

interface LandingHeroProps {
    lang: LangType;
    t: any;
    onStart: (templateId?: string) => void;
}

const LandingHero: React.FC<LandingHeroProps> = ({ lang, t, onStart }) => {
    const { confirm } = useConfirm();
    return (
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
                        onClick={() => onStart()}
                        className="group px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#ee5a5a] text-white text-lg font-bold rounded-full shadow-lg hover:from-[#ee5a5a] hover:to-[#dd4a4a] hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                    >
                        {t.startPlanning}
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                        className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 text-lg font-bold rounded-full hover:bg-white hover:text-slate-800 hover:border-white transition-all"
                        onClick={() => confirm({
                            title: lang === 'zh' ? '敬請期待' : 'Coming Soon',
                            message: lang === 'zh'
                                ? "感謝您的關注！搶先體驗版即將推出。"
                                : "Thanks for your interest! Early access coming soon.",
                            type: 'info',
                            confirmText: lang === 'zh' ? '知道了' : 'Got it'
                        })}
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
                    0% { opacity: 0; transform: scale(1); }
                    5% { opacity: 1; }
                    28% { opacity: 1; transform: scale(1.08); }
                    33% { opacity: 0; transform: scale(1.1); }
                    100% { opacity: 0; transform: scale(1); }
                }
            `}</style>
        </section>
    );
};

export default LandingHero;
