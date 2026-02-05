import React from 'react';
import { Map as MapIcon } from 'lucide-react';
import { LangType } from '../../types';

interface LandingFooterProps {
    lang: LangType;
}

const LandingFooter: React.FC<LandingFooterProps> = ({ lang }) => {
    return (
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
    );
};

export default LandingFooter;
