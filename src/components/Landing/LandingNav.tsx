import React from 'react';
import { Map as MapIcon, Globe } from 'lucide-react';
import { LangType } from '../../types';

interface LandingNavProps {
    lang: LangType;
    toggleLang: () => void;
    onStart: (templateId?: string) => void;
}

const LandingNav: React.FC<LandingNavProps> = ({ lang, toggleLang, onStart }) => {
    return (
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
                        onClick={() => onStart()}
                        className="px-5 py-2 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white font-bold text-sm rounded-full hover:opacity-90 transition-all shadow-sm"
                    >
                        {lang === 'zh' ? '試用 Demo' : 'Try Demo'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default LandingNav;
