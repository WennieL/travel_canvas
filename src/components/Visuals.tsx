import React, { useState, useEffect } from 'react';
import {
    MousePointer2,
    Car,
    Train,
    Footprints,
    Check,
    Search,
    Clock,
    Plus,
    X,
    Calendar,
    Users
} from 'lucide-react';
import { LangType } from '../types';
import { TRANSLATIONS } from '../data/index';

export const DragDropVisual = () => (<div className="relative w-full h-48 bg-slate-50 rounded-xl border border-gray-200 overflow-hidden flex shadow-inner"> <div className="w-1/4 bg-white border-r border-gray-100 flex flex-col items-center py-4 gap-2 z-10"> <div className="w-8 h-2 bg-gray-100 rounded-full mb-2"></div> <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center text-xl">🍜</div> <div className="relative w-12 h-12"> <div className="absolute inset-0 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-xl animate-sidebar-item-vanish z-20">⛩️</div> <div className="absolute inset-0 bg-gray-50 border border-dashed border-gray-200 rounded-lg"></div> </div> <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center text-xl">🍵</div> </div> <div className="flex-1 flex flex-col p-4 relative"> <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 z-0"></div> <div className="relative z-10 pl-6 mb-3"> <div className="flex items-center gap-2 mb-1.5 opacity-80"> <div className="w-2 h-2 rounded-full bg-teal-500 ring-2 ring-white shadow-sm z-10"></div> <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">上午</span> </div> <div className="bg-white p-2 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 w-full max-w-[220px]"> <div className="w-8 h-8 bg-gray-50 rounded-md flex items-center justify-center text-lg">🦊</div> <div className="flex-1 space-y-1"> <div className="h-1.5 w-16 bg-gray-300 rounded"></div> <div className="h-1 w-8 bg-gray-100 rounded"></div> </div> </div> </div> <div className="relative z-10 pl-6 mb-3"> <div className="flex items-center gap-2 mb-1.5 opacity-80"> <div className="w-2 h-2 rounded-full bg-teal-500 ring-2 ring-white shadow-sm z-10"></div> <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">下午</span> </div> <div className="h-14 w-full max-w-[220px] rounded-xl relative"> <div className="absolute inset-0 border-2 border-dashed border-teal-200 bg-teal-50/20 rounded-xl animate-placeholder-fade"></div> <div className="absolute inset-0 bg-white p-2 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 animate-item-drop-move"> <div className="w-8 h-8 bg-gray-50 rounded-md flex items-center justify-center text-lg">⛩️</div> <div className="flex-1 space-y-1"> <div className="h-1.5 w-20 bg-gray-300 rounded"></div> <div className="h-1 w-12 bg-gray-100 rounded"></div> </div> </div> </div> </div> <div className="relative z-10 pl-6"> <div className="flex items-center gap-2 mb-1.5 opacity-80"> <div className="w-2 h-2 rounded-full bg-teal-500 ring-2 ring-white shadow-sm z-10"></div> <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">晚上</span> </div> <div className="h-14 w-full max-w-[220px] rounded-xl relative"> <div className="absolute inset-0 border-2 border-dashed border-gray-200 rounded-xl"></div> <div className="absolute inset-0 bg-white p-2 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 animate-item-reorder-appear opacity-0"> <div className="w-8 h-8 bg-gray-50 rounded-md flex items-center justify-center text-lg">⛩️</div> <div className="flex-1 space-y-1"> <div className="h-1.5 w-20 bg-gray-300 rounded"></div> <div className="h-1 w-12 bg-gray-100 rounded"></div> </div> </div> </div> </div> </div> <div className="absolute z-50 animate-drag-1 pointer-events-none" style={{ top: '65px', left: '28px', opacity: 0 }}> <div className="bg-white p-2 rounded-xl border border-teal-500 shadow-xl flex items-center gap-2 w-[180px] transform rotate-3"> <div className="w-8 h-8 bg-gray-50 rounded-md flex items-center justify-center text-lg">⛩️</div> <div className="flex-1 space-y-1"> <div className="h-1.5 w-20 bg-gray-300 rounded"></div> <div className="h-1 w-12 bg-gray-100 rounded"></div> </div> <MousePointer2 size={20} className="absolute bottom-[-10px] right-[-10px] fill-slate-800 text-white" /> </div> </div> <style>{` @keyframes sidebarItemVanish { 0%, 5% { opacity: 1; transform: scale(1); } 6% { opacity: 0; transform: scale(0.9); } 95% { opacity: 0; } 100% { opacity: 1; } } @keyframes drag1 { 0% { opacity: 0; transform: translate(0,0) scale(0.5); } 5% { opacity: 1; transform: translate(0,0) scale(1); } 30% { transform: translate(100px, 30px); } 35% { opacity: 1; transform: translate(100px, 30px) scale(1); } 36% { opacity: 0; } 100% { opacity: 0; } } @keyframes placeholderFade { 0%, 35% { opacity: 1; border-color: #99f6e4; } 36% { opacity: 0; } 100% { opacity: 0; } } @keyframes itemDropMove { 0%, 35% { opacity: 0; } 36% { opacity: 1; transform: scale(1); } 45% { opacity: 1; transform: scale(1); } 46% { opacity: 0; } 100% { opacity: 0; } } @keyframes drag2 { 0%, 45% { opacity: 0; } 46% { opacity: 1; top: 96px; left: 130px; transform: scale(1); } 70% { top: 160px; left: 130px; } 75% { opacity: 1; } 76% { opacity: 0; } 100% { opacity: 0; } } @keyframes itemReorderAppear { 0%, 75% { opacity: 0; } 76% { opacity: 1; transform: scale(1.02); } 80% { transform: scale(1); } 95% { opacity: 1; } 100% { opacity: 0; } } .animate-sidebar-item-vanish { animation: sidebarItemVanish 8s infinite; } .animate-drag-1 { animation: drag1 8s infinite ease-in-out; } .animate-placeholder-fade { animation: placeholderFade 8s infinite; } .animate-item-drop-move { animation: itemDropMove 8s infinite; } .animate-drag-2 { animation: drag2 8s infinite ease-in-out; } .animate-item-reorder-appear { animation: itemReorderAppear 8s infinite; } `}</style> </div>);

export const MapVisual = () => (<div className="relative w-full h-48 bg-slate-50 rounded-xl overflow-hidden border border-gray-200 flex"> <div className="w-1/2 h-full relative border-r border-gray-100 bg-slate-100/50 overflow-hidden"> <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div> <svg className="absolute inset-0 w-full h-full"> <path d="M 30 80 Q 60 50 100 40" fill="none" stroke="#0d9488" strokeWidth="2" strokeDasharray="4,4" className="animate-draw-path" /> </svg> <div className="absolute left-[30px] top-[80px] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"> <div className="w-3 h-3 bg-teal-600 rounded-full border-2 border-white shadow"></div> <span className="mt-1 text-[8px] font-bold text-gray-500 bg-white/90 px-1 rounded shadow-sm backdrop-blur-sm whitespace-nowrap">清水寺</span> </div> <div className="absolute left-[100px] top-[40px] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"> <div className="w-3 h-3 bg-teal-600 rounded-full border-2 border-white shadow"></div> <span className="mt-1 text-[8px] font-bold text-gray-500 bg-white/90 px-1 rounded shadow-sm backdrop-blur-sm whitespace-nowrap">伏見稻荷</span> </div> </div> <div className="w-1/2 h-full relative flex flex-col items-center justify-center p-3 bg-white"> <div className="flex items-center gap-2 w-full bg-white border border-gray-100 p-1.5 rounded-lg shadow-sm"> <div className="w-6 h-6 rounded-md bg-gray-50 border border-gray-200 flex items-center justify-center text-xs">⛩️</div> <span className="text-[10px] font-bold text-gray-700 truncate">清水寺</span> </div> <div className="h-8 w-0.5 bg-gray-200 my-1 relative flex items-center justify-center"> <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white px-2 py-0.5 rounded-full shadow-sm border border-gray-200 animate-transport-cycle-1 whitespace-nowrap z-10"> <Car size={8} className="text-teal-600" /> <span className="text-[8px] font-bold text-gray-600">15m</span> </div> <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white px-2 py-0.5 rounded-full shadow-sm border border-gray-200 animate-transport-cycle-2 whitespace-nowrap z-10 opacity-0"> <Train size={8} className="text-orange-500" /> <span className="text-[8px] font-bold text-gray-600">25m</span> </div> <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white px-2 py-0.5 rounded-full shadow-sm border border-gray-200 animate-transport-cycle-3 whitespace-nowrap z-10 opacity-0"> <Footprints size={8} className="text-blue-500" /> <span className="text-[8px] font-bold text-gray-600">45m</span> </div> </div> <div className="flex items-center gap-2 w-full bg-white border border-gray-100 p-1.5 rounded-lg shadow-sm"> <div className="w-6 h-6 rounded-md bg-gray-50 border border-gray-200 flex items-center justify-center text-xs">🦊</div> <span className="text-[10px] font-bold text-gray-700 truncate">伏見稻荷</span> </div> </div> <style>{` @keyframes drawPath { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } } .animate-draw-path { stroke-dasharray: 100; animation: drawPath 3s linear infinite; } @keyframes transportCycle1 { 0%, 25% { opacity: 1; transform: translateX(-50%) scale(1); } 33%, 100% { opacity: 0; transform: translateX(-50%) scale(0.9); } } @keyframes transportCycle2 { 0%, 33% { opacity: 0; transform: translateX(-50%) scale(0.9); } 33%, 58% { opacity: 1; transform: translateX(-50%) scale(1); } 66%, 100% { opacity: 0; transform: translateX(-50%) scale(0.9); } } @keyframes transportCycle3 { 0%, 66% { opacity: 0; transform: translateX(-50%) scale(0.9); } 66%, 91% { opacity: 1; transform: translateX(-50%) scale(1); } 100% { opacity: 0; transform: translateX(-50%) scale(0.9); } } .animate-transport-cycle-1 { animation: transportCycle1 6s infinite; } .animate-transport-cycle-2 { animation: transportCycle2 6s infinite; } .animate-transport-cycle-3 { animation: transportCycle3 6s infinite; } `}</style> </div>);

export const ChecklistVisual = ({ lang }: { lang: LangType }) => {
    const t = TRANSLATIONS[lang];
    const items = [
        { text: t.checklistItem1, price: "¥2,800" },
        { text: t.checklistItem2, price: "¥8,400" },
        { text: t.checklistItem3, price: null }
    ];

    return (
        <div className="w-full h-48 bg-white rounded-xl border border-gray-100 p-4 flex flex-col gap-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
                <div className="h-full bg-teal-500 animate-progress"></div>
            </div>
            <div className="flex justify-between items-center mb-3 mt-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t.checklistTitle}</span>
                <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">¥ 11,200</span>
            </div>
            <div className="flex flex-col gap-2.5">
                {items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full border border-gray-200 flex items-center justify-center shrink-0 animate-check-${i + 1}`}>
                            <Check size={10} className="text-white" />
                        </div>
                        <div className="flex-1 flex justify-between items-center min-w-0">
                            <span className="text-xs text-gray-600 truncate">{item.text}</span>
                            {item.price ? (
                                <span className="text-[10px] text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded">{item.price}</span>
                            ) : (
                                <span className="w-8 h-1.5 bg-gray-100 rounded"></span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <style>{`
                @keyframes checkItem {
                    0%, 20% { background-color: white; border-color: #e5e7eb; }
                    30%, 100% { background-color: #14b8a6; border-color: #14b8a6; }
                }
                @keyframes progressGrow {
                    0% { width: 0%; }
                    30% { width: 33%; }
                    60% { width: 66%; }
                    90%, 100% { width: 100%; }
                }
                .animate-progress { animation: progressGrow 4s linear infinite; }
                .animate-check-1 { animation: checkItem 4s linear infinite; animation-delay: 0.5s; }
                .animate-check-2 { animation: checkItem 4s linear infinite; animation-delay: 1.5s; }
                .animate-check-3 { animation: checkItem 4s linear infinite; animation-delay: 2.5s; }
            `}</style>
        </div>
    );
};

interface AssetsVisualProps {
    lang: LangType;
}

export const AssetsVisual: React.FC<AssetsVisualProps> = ({ lang }) => {
    const t = TRANSLATIONS[lang];
    const [activeTab, setActiveTab] = useState<'assets' | 'templates'>('assets');
    const [showCursor, setShowCursor] = useState(false);
    const [cursorTarget, setCursorTarget] = useState<'assets' | 'templates'>('templates');

    useEffect(() => {
        const cycle = async () => {
            while (true) {
                // Show assets tab
                setActiveTab('assets');
                setShowCursor(false);
                await new Promise(r => setTimeout(r, 3500));

                // Cursor appears and moves to templates tab
                setCursorTarget('templates');
                setShowCursor(true);
                await new Promise(r => setTimeout(r, 800));
                setActiveTab('templates');
                await new Promise(r => setTimeout(r, 200));
                setShowCursor(false);

                // Show templates tab
                await new Promise(r => setTimeout(r, 3500));

                // Cursor appears and moves to assets tab
                setCursorTarget('assets');
                setShowCursor(true);
                await new Promise(r => setTimeout(r, 800));
                setActiveTab('assets');
                await new Promise(r => setTimeout(r, 200));
                setShowCursor(false);
            }
        };
        cycle();
    }, []);

    const assets = [
        { icon: '⛩️', name: lang === 'zh' ? '清水寺' : 'Kiyomizu-dera', duration: '2hr', price: '¥400' },
        { icon: '🦊', name: lang === 'zh' ? '伏見稻荷大社' : 'Fushimi Inari', duration: '1.5hr', price: 'Free' },
        { icon: '🍵', name: lang === 'zh' ? '辻利抹茶' : 'Tsujiri Matcha', duration: '30m', price: '¥600' },
    ];

    const templates = [
        { name: t.templateKyoto, author: t.templateAuthorMing, days: 1 },
        { name: t.templateFoodie, author: t.templateAuthorAnan, days: 2 },
        { name: t.templateFamily, author: t.templateAuthorPro, days: 3 },
    ];

    return (
        <div className="w-full h-48 bg-white rounded-xl border border-gray-200 overflow-hidden flex shadow-inner relative">
            {/* Left Panel - Tab Content */}
            <div className="w-1/2 border-r border-gray-100 bg-white flex flex-col z-10">
                {/* Tab Headers */}
                <div className="flex border-b border-gray-100 relative">
                    <button
                        className={`flex-1 py-2 text-[10px] text-center font-medium transition-all duration-300 ${activeTab === 'assets'
                            ? 'text-teal-600 bg-teal-50 border-b-2 border-teal-600'
                            : 'text-gray-400 hover:bg-gray-50'
                            }`}
                    >
                        {t.visualsAssets}
                    </button>
                    <button
                        className={`flex-1 py-2 text-[10px] text-center font-medium transition-all duration-300 ${activeTab === 'templates'
                            ? 'text-teal-600 bg-teal-50 border-b-2 border-teal-600'
                            : 'text-gray-400 hover:bg-gray-50'
                            }`}
                    >
                        {t.visualsTemplates}
                    </button>
                </div>

                {/* Tab Content */}
                <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden relative">
                    {/* Assets Content */}
                    <div
                        className={`absolute inset-0 p-3 flex flex-col gap-2 transition-all duration-300 ${activeTab === 'assets'
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-4 pointer-events-none'
                            }`}
                    >
                        <div className="h-6 w-full bg-gray-100 rounded-md mb-1 flex items-center px-2">
                            <Search size={10} className="text-gray-400 mr-1" />
                            <div className="h-1.5 w-12 bg-gray-300 rounded"></div>
                        </div>
                        {assets.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 p-2 rounded-lg border border-gray-100 bg-white shadow-sm"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center text-sm">
                                    {item.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-[10px] font-bold text-gray-700 truncate">{item.name}</div>
                                    <div className="flex justify-between items-center mt-0.5">
                                        <span className="text-[8px] text-gray-400 flex items-center gap-0.5">
                                            <Clock size={8} /> {item.duration}
                                        </span>
                                        <span className="text-[8px] font-bold text-teal-600">{item.price}</span>
                                    </div>
                                </div>
                                <Plus size={12} className="text-teal-500" />
                            </div>
                        ))}
                    </div>

                    {/* Templates Content */}
                    <div
                        className={`absolute inset-0 p-3 flex flex-col gap-2 transition-all duration-300 ${activeTab === 'templates'
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-4 pointer-events-none'
                            }`}
                    >
                        {templates.map((tpl, i) => (
                            <div
                                key={i}
                                className="p-2 rounded-lg border border-gray-100 bg-white shadow-sm"
                            >
                                <div className="flex justify-between items-start mb-1">
                                    <div className="text-[10px] font-bold text-gray-700">{tpl.name}</div>
                                    <div className="flex items-center gap-0.5 text-[8px] text-gray-400">
                                        <Calendar size={8} />
                                        {tpl.days}D
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[8px] text-gray-400 flex items-center gap-0.5">
                                        <Users size={8} /> {tpl.author}
                                    </span>
                                    <button className="text-[8px] text-teal-600 font-medium bg-teal-50 px-2 py-0.5 rounded">
                                        {t.visualsApply}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Panel - Preview */}
            <div className="w-1/2 bg-slate-50 p-3 relative overflow-hidden flex items-center justify-center">
                {/* Template Card */}
                <div className={`absolute w-40 bg-white rounded-xl border border-teal-200 p-3 shadow-md z-20 origin-center transition-all duration-500 ${activeTab === 'templates' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}>
                    <div className="flex justify-between mb-2">
                        <div className="flex flex-col gap-1">
                            <div className="h-2 w-20 bg-gray-800 rounded"></div>
                            <div className="h-1.5 w-10 bg-gray-400 rounded"></div>
                        </div>
                        <div className="h-6 w-6 bg-teal-50 rounded-full flex items-center justify-center text-xs">📅</div>
                    </div>
                    <div className="space-y-1.5 mb-3">
                        <div className="h-1.5 w-full bg-gray-100 rounded"></div>
                        <div className="h-1.5 w-2/3 bg-gray-100 rounded"></div>
                    </div>
                    <div className="h-6 w-full bg-teal-500 rounded-lg flex items-center justify-center text-[10px] text-white font-bold shadow-sm">
                        {t.visualsOneClick}
                    </div>
                </div>

                {/* Assets Preview - Item being added */}
                <div className={`absolute inset-0 p-3 flex flex-col gap-2 pt-6 transition-all duration-500 ${activeTab === 'assets' ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <div className="text-[8px] font-bold text-gray-400 uppercase tracking-wider mb-1 text-center">{t.visualsDragHint}</div>
                    <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                        <div className="w-6 h-6 bg-orange-50 rounded flex items-center justify-center text-xs">⛩️</div>
                        <div className="flex-1">
                            <div className="h-1.5 w-16 bg-gray-600 rounded mb-1"></div>
                            <div className="h-1 w-8 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-white rounded-lg border-2 border-dashed border-teal-300">
                        <div className="w-6 h-6 bg-teal-50 rounded flex items-center justify-center">
                            <Plus size={12} className="text-teal-400" />
                        </div>
                        <div className="flex-1 text-[9px] text-teal-500 font-medium">
                            {t.visualsDragFrom}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                        <div className="w-6 h-6 bg-blue-50 rounded flex items-center justify-center text-xs">🍵</div>
                        <div className="flex-1">
                            <div className="h-1.5 w-12 bg-gray-600 rounded mb-1"></div>
                            <div className="h-1 w-10 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animated Cursor */}
            {showCursor && (
                <div
                    className="absolute z-50 pointer-events-none transition-all duration-500"
                    style={{
                        top: '12px',
                        left: cursorTarget === 'templates' ? '35%' : '15%',
                    }}
                >
                    <MousePointer2 size={16} className="fill-slate-800 text-white drop-shadow-md animate-pulse" />
                </div>
            )}
        </div>
    );
};
