import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import { LangType } from '../../types';

interface LandingCommunityProps {
    lang: LangType;
    t: any;
    onStart: (templateId?: string) => void;
}

const LandingCommunity: React.FC<LandingCommunityProps> = ({ lang, t, onStart }) => {
    return (
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
                        onClick={() => onStart()}
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
    );
};

export default LandingCommunity;
