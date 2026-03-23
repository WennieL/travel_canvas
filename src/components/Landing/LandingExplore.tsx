import React from 'react';
import { LangType } from '../../types';

interface LandingExploreProps {
    lang: LangType;
    onStart: (templateId?: string) => void;
    t: any;
}

const LandingExplore: React.FC<LandingExploreProps> = ({ lang, onStart, t }) => {
    return (
        <section className="w-full bg-white py-24 px-6 z-10 relative">
            {/* Decorative background element for separation */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-wider mb-4">
                        {t.featuredPlans}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
                        {t.exploreDestinations}
                    </h2>
                    <p className="text-slate-500 text-lg max-w-xl mx-auto">
                        {t.curatedByExperts}
                    </p>
                </div>

                {/* 🇯🇵 Japan Section */}
                <div className="mb-16">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b border-slate-100 pb-2">
                        <span className="text-2xl">🇯🇵</span>
                        {t.exploreJapan}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Tokyo Classic */}
                        <div
                            onClick={() => onStart('t1')}
                            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-rose-200 transition-all duration-300 cursor-pointer"
                        >
                            <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/covers/tokyo.png)' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                    <span className="text-xs bg-white/90 backdrop-blur-sm text-slate-800 font-bold px-2 py-0.5 rounded-full shadow-sm">{t.tokyoLabel}</span>
                                    <span className="text-xs text-white font-medium">4 {t.daysUnit}</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-slate-800 text-lg group-hover:text-rose-600 transition-colors mb-2">
                                    {t.tokyoClassic}
                                </h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px]">🏢</div>
                                    <p className="text-sm text-slate-500">TravelCanvas {t.editors}</p>
                                </div>
                            </div>
                        </div>

                        {/* Tokyo Foodie */}
                        <div
                            onClick={() => onStart('t2')}
                            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-rose-200 transition-all duration-300 cursor-pointer"
                        >
                            <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/covers/tokyo.png)' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                    <span className="text-xs bg-white/90 backdrop-blur-sm text-slate-800 font-bold px-2 py-0.5 rounded-full shadow-sm">{t.tokyoLabel}</span>
                                    <span className="text-xs text-white font-medium">1 {t.day}</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-slate-800 text-lg group-hover:text-rose-600 transition-colors mb-2">
                                    {t.tokyoFoodie}
                                </h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-orange-100/50 flex items-center justify-center text-[10px]">🍜</div>
                                    <p className="text-sm text-slate-500">{t.foodieAnan}</p>
                                </div>
                            </div>
                        </div>

                        {/* Kyoto */}
                        <div
                            onClick={() => onStart('t5')}
                            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-rose-200 transition-all duration-300 cursor-pointer"
                        >
                            <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/covers/kyoto.png)' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                    <span className="text-xs bg-white/90 backdrop-blur-sm text-slate-800 font-bold px-2 py-0.5 rounded-full shadow-sm">{t.kyotoLabel}</span>
                                    <span className="text-xs text-white font-medium">3 {t.daysUnit}</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-slate-800 text-lg group-hover:text-rose-600 transition-colors mb-2">
                                    {t.kyotoAncient}
                                </h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-green-100/50 flex items-center justify-center text-[10px]">⛩️</div>
                                    <p className="text-sm text-slate-500">{t.kyotoSlowLife}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 🇦🇺 Australia Section */}
                <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b border-slate-100 pb-2">
                        <span className="text-2xl">🇦🇺</span>
                        {t.exploreAustralia}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Melbourne Coffee */}
                        <div
                            onClick={() => onStart('mel-coffee')}
                            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-teal-200 transition-all duration-300 cursor-pointer"
                        >
                            <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/covers/melbourne.png)' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                    <span className="text-xs bg-white/90 backdrop-blur-sm text-slate-800 font-bold px-2 py-0.5 rounded-full shadow-sm">{t.melbourneLabel}</span>
                                    <span className="text-xs text-white font-medium">1 {t.day}</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-slate-800 text-lg group-hover:text-teal-600 transition-colors mb-2">
                                    {t.melbourneCoffee}
                                </h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-amber-100/50 flex items-center justify-center text-[10px]">☕</div>
                                    <p className="text-sm text-slate-500">{t.melbourneLocal}</p>
                                </div>
                            </div>
                        </div>

                        {/* Melbourne Bars */}
                        <div
                            onClick={() => onStart('mel-bars')}
                            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-teal-200 transition-all duration-300 cursor-pointer"
                        >
                            <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/covers/melbourne.png)' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                    <span className="text-xs bg-white/90 backdrop-blur-sm text-slate-800 font-bold px-2 py-0.5 rounded-full shadow-sm">{t.melbourneLabel}</span>
                                    <span className="text-xs text-white font-medium">1 {t.day}</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-slate-800 text-lg group-hover:text-teal-600 transition-colors mb-2">
                                    {t.melbourneBars}
                                </h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-purple-100/50 flex items-center justify-center text-[10px]">🍸</div>
                                    <p className="text-sm text-slate-500">{t.melbourneLocal}</p>
                                </div>
                            </div>
                        </div>

                        {/* Coming Soon */}
                        <div className="bg-slate-50 rounded-2xl overflow-hidden border border-dashed border-slate-300 flex flex-col items-center justify-center h-[264px] hover:bg-slate-100 transition-colors">
                            <span className="text-4xl mb-3 opacity-50">🌏</span>
                            <p className="text-slate-400 font-medium">{t.moreCitiesComing}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingExplore;
