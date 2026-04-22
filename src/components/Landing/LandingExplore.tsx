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

                {/* 🏔️ Northern Taiwan Section */}
                <div className="mb-16">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b border-slate-100 pb-2">
                        <span className="text-2xl">🏔️</span>
                        {t.exploreNorthernTaiwan}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Taipei Family Flagship */}
                        <div
                            onClick={() => onStart('circuit-tp-family')}
                            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200 transition-all duration-300 cursor-pointer lg:col-span-3"
                        >
                            <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/covers/taipei.png)' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                <div className="absolute top-4 right-4 bg-rose-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg">
                                    FLAGSHIP
                                </div>
                                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                                    <span className="text-xs bg-white/90 backdrop-blur-sm text-slate-800 font-bold px-3 py-1 rounded-full shadow-sm">{t.northernLabel}</span>
                                    <span className="text-xs text-white font-bold bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">4 {t.daysUnit}</span>
                                </div>
                            </div>
                            <div className="p-8 flex items-center justify-between">
                                <div>
                                    <h4 className="font-black text-slate-800 text-2xl group-hover:text-emerald-600 transition-colors mb-2">
                                        {t.taipeiFamilyFlagshipTitle}
                                    </h4>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-xs">✨</div>
                                        <p className="text-sm font-medium text-slate-500">TravelCanvas {t.officialPick}</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex flex-col items-end">
                                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Pace</span>
                                    <span className="text-emerald-600 font-bold">Family Friendly</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 🌆 Central & Southern Taiwan Section */}
                <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b border-slate-100 pb-2">
                        <span className="text-2xl">🌆</span>
                        {t.exploreSouthernTaiwan}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Tainan Ancient */}
                        <div
                            onClick={() => onStart('tn-curated-1')}
                            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-amber-200 transition-all duration-300 cursor-pointer"
                        >
                            <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1621848296279-7751546e9acc?auto=format&fit=crop&q=80&w=600)' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                    <span className="text-xs bg-white/90 backdrop-blur-sm text-slate-800 font-bold px-2 py-0.5 rounded-full shadow-sm">{t.southernLabel}</span>
                                    <span className="text-xs text-white font-medium">1 {t.day}</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-slate-800 text-lg group-hover:text-amber-600 transition-colors mb-2">
                                    {t.tainanAncientTitle}
                                </h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-amber-100/50 flex items-center justify-center text-[10px]">🥘</div>
                                    <p className="text-sm text-slate-500">{t.templateAuthorAnan}</p>
                                </div>
                            </div>
                        </div>

                        {/* Taichung Quirky */}
                        <div
                            onClick={() => onStart('tc-quirky-1d')}
                            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 cursor-pointer"
                        >
                            <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1510333300264-b17ad3023315?auto=format&fit=crop&q=80&w=600)' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                    <span className="text-xs bg-white/90 backdrop-blur-sm text-slate-800 font-bold px-2 py-0.5 rounded-full shadow-sm">{t.centralLabel}</span>
                                    <span className="text-xs text-white font-medium">1 {t.day}</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors mb-2">
                                    {t.taichungQuirkyTitle}
                                </h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-purple-100/50 flex items-center justify-center text-[10px]">🦖</div>
                                    <p className="text-sm text-slate-500">{t.templateAuthorMing}</p>
                                </div>
                            </div>
                        </div>

                        {/* Coming Soon */}
                        <div className="bg-slate-50 rounded-2xl overflow-hidden border border-dashed border-slate-300 flex flex-col items-center justify-center h-[264px] hover:bg-slate-100 transition-colors">
                            <span className="text-4xl mb-3 opacity-50">🌊</span>
                            <p className="text-slate-400 font-medium">{t.moreCitiesComing}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingExplore;
