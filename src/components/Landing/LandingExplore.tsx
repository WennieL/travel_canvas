import React from 'react';
import { LangType } from '../../types';

interface LandingExploreProps {
    lang: LangType;
    onStart: (templateId?: string) => void;
    t: any;
}

const LandingExplore: React.FC<LandingExploreProps> = ({ lang, onStart, t }) => {
    const isZh = lang === 'zh';

    const templates = [
        {
            id: 'circuit-tp-classic-6d',
            title: isZh ? '台北全攻略：首訪旗艦版' : 'Classic Essential Taipei',
            tag: 'Classic',
            author: 'TravelCanvas Official',
            days: 6,
            image: 'https://plus.unsplash.com/premium_photo-1661951189203-12decb9d7f8e?q=80&w=1740&?auto=format&fit=crop',
            themeColor: 'emerald',
            emoji: '🏙️'
        },
        {
            id: 'circuit-tp-family',
            title: isZh ? '台北親子旗艦：無痛育兒與都會探索' : 'Taipei Family Flagship',
            tag: 'Family',
            author: 'TravelCanvas Official',
            days: 6,
            image: 'https://plus.unsplash.com/premium_photo-1682094139633-b06316cee50f?q=80&w=1740&?auto=format&fit=crop',
            themeColor: 'rose',
            emoji: '👨‍👩‍👧‍👦'
        },
        {
            id: 'tw-t-outdoor-flagship',
            title: isZh ? '台北山海極限：戶外專屬版' : 'Taipei Outdoor Adventure',
            tag: 'Outdoor',
            author: 'TravelCanvas Outdoor',
            days: 6,
            image: 'https://images.unsplash.com/photo-1663475424372-4abf28c404a1?q=80&w=1740&auto=format&fit=crop',
            themeColor: 'blue',
            emoji: '🏔️'
        }
    ];

    return (
        <section className="w-full bg-slate-50 py-24 px-6 z-10 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
                        {isZh ? '編輯精選' : 'Featured Editor\'s Picks'}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
                        {isZh ? '探索頂級台北體驗' : 'Explore Premium Taipei Experiences'}
                    </h2>
                    <p className="text-slate-500 text-lg max-w-xl mx-auto">
                        {isZh ? '由在地專家精心設計的「零決策」旗艦行程，只需一鍵即可套用。' : 'Zero-Decision flagship itineraries curated by local experts. Apply with one click.'}
                    </p>
                </div>

                {/* Templates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {templates.map((tpl) => (
                        <div
                            key={tpl.id}
                            onClick={() => onStart(tpl.id)}
                            className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col"
                        >
                            <div className="h-56 bg-cover bg-center relative" style={{ backgroundImage: `url(${tpl.image})` }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>

                                <div className={`absolute top-4 right-4 bg-${tpl.themeColor}-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg uppercase`}>
                                    FLAGSHIP
                                </div>

                                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                                    <span className="text-xs bg-white/90 backdrop-blur-sm text-slate-800 font-bold px-3 py-1 rounded-full shadow-sm">
                                        {tpl.tag}
                                    </span>
                                    <span className="text-xs text-white font-bold bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                                        {tpl.days} {isZh ? '天' : 'Days'}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="text-3xl mb-3">{tpl.emoji}</div>
                                    <h4 className={`font-black text-slate-800 text-xl group-hover:text-${tpl.themeColor}-600 transition-colors mb-3 leading-snug`}>
                                        {tpl.title}
                                    </h4>
                                </div>
                                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100">
                                    <div className={`w-6 h-6 rounded-full bg-${tpl.themeColor}-100 flex items-center justify-center text-[10px]`}>✨</div>
                                    <p className="text-xs font-medium text-slate-500">{tpl.author}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LandingExplore;
