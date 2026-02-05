import React from 'react';
import { LangType } from '../types';
import { TRANSLATIONS } from '../data/index';
import ProductPreview from './ProductPreview';

// Modularized Components
import LandingNav from './Landing/LandingNav';
import LandingHero from './Landing/LandingHero';
import LandingExplore from './Landing/LandingExplore';
import LandingFeatures from './Landing/LandingFeatures';
import LandingCommunity from './Landing/LandingCommunity';
import LandingPricing from './Landing/LandingPricing';
import LandingFooter from './Landing/LandingFooter';

interface LandingPageProps {
    onStart: (templateId?: string) => void;
    lang: LangType;
    toggleLang: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart, lang, toggleLang }) => {
    const t = TRANSLATIONS[lang];

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative overflow-hidden">
            <LandingNav
                lang={lang}
                toggleLang={toggleLang}
                onStart={onStart}
            />

            <LandingHero
                lang={lang}
                t={t}
                onStart={onStart}
            />

            <LandingExplore
                lang={lang}
                onStart={onStart}
            />

            {/* Background Decorations */}
            <div className="absolute top-[90vh] right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#FF6B6B]/5 to-[#4ECDC4]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#4ECDC4]/5 to-[#FFE66D]/5 rounded-full blur-3xl"></div>

            <LandingFeatures
                lang={lang}
                t={t}
            />

            <LandingCommunity
                lang={lang}
                t={t}
                onStart={onStart}
            />

            <ProductPreview
                lang={lang}
                onStart={onStart}
            />

            <LandingPricing
                lang={lang}
                onStart={onStart}
            />

            <LandingFooter
                lang={lang}
            />

            {/* Global Animations CSS */}
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
                    opacity: 0;
                }
                .animate-bounce-slow {
                    animation: bounceSlow 3s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default LandingPage;
