import React, { useState, useEffect } from 'react';
import { Map, Calendar, Plus, Clock, ChevronRight, MousePointer2 } from 'lucide-react';
import { LangType } from '../types';
import { TRANSLATIONS } from '../data/index';

interface ProductPreviewProps {
    lang?: 'zh' | 'en';
    t: any;
    onStart: () => void;
}

export const ProductPreview: React.FC<ProductPreviewProps> = ({ lang = 'zh', t, onStart }) => {
    const [activeDay, setActiveDay] = useState(1);
    const [showTooltip, setShowTooltip] = useState<string | null>(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    // Auto-rotate days
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveDay(prev => prev >= 3 ? 1 : prev + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Animated cursor effect
    useEffect(() => {
        const positions = [
            { x: 15, y: 50 },  // Sidebar
            { x: 60, y: 30 },  // Timeline
            { x: 80, y: 70 },  // Map
        ];
        let idx = 0;
        const interval = setInterval(() => {
            setCursorPos(positions[idx]);
            setShowTooltip(['sidebar', 'timeline', 'map'][idx]);
            idx = (idx + 1) % positions.length;
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const sidebarItems = [
        { icon: '⛩️', name: lang === 'zh' ? '清水寺' : 'Kiyomizu-dera' },
        { icon: '🦊', name: lang === 'zh' ? '伏見稻荷' : 'Fushimi Inari' },
        { icon: '🍜', name: lang === 'zh' ? '一蘭拉麵' : 'Ichiran Ramen' },
        { icon: '🏯', name: lang === 'zh' ? '金閣寺' : 'Kinkaku-ji' },
    ];

    const scheduleItems = [
        { time: '09:00', icon: '⛩️', name: lang === 'zh' ? '清水寺' : 'Kiyomizu-dera', duration: '2h' },
        { time: '12:00', icon: '🍜', name: lang === 'zh' ? '一蘭拉麵' : 'Ichiran Ramen', duration: '1h' },
        { time: '14:00', icon: '🦊', name: lang === 'zh' ? '伏見稻荷' : 'Fushimi Inari', duration: '2h' },
    ];

    return (
        <div className="w-full max-w-5xl mx-auto px-6 py-16 z-10">
            {/* Section Header */}
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
                    {t.sneakPeek || (lang === 'zh' ? '先偷看一眼？' : 'Take a Sneak Peek')}
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                    {lang === 'zh'
                        ? '這就是你即將體驗的行程規劃工具。拖曳、調整、一目瞭然。'
                        : 'This is the trip planner you\'re about to experience. Drag, adjust, and visualize.'}
                </p>
            </div>

            {/* Mini App Preview */}
            <div
                className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden cursor-pointer group"
                onClick={onStart}
            >
                {/* Browser-like header */}
                <div className="h-8 bg-gray-100 flex items-center px-3 gap-2 border-b border-gray-200">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="bg-white rounded-md px-4 py-1 text-xs text-gray-500 border border-gray-200">
                            travelcanvas.app
                        </div>
                    </div>
                </div>

                {/* App Content */}
                <div className="flex h-[320px] md:h-[400px] relative">
                    {/* Sidebar */}
                    <div
                        className={`w-1/4 bg-slate-50 border-r border-gray-100 p-3 transition-all duration-300 ${showTooltip === 'sidebar' ? 'ring-2 ring-teal-400 ring-inset' : ''}`}
                    >
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                            {t.assets || (lang === 'zh' ? '素材庫' : 'Assets')}
                        </div>
                        <div className="space-y-2">
                            {sidebarItems.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100 shadow-sm hover:border-teal-300 transition-all text-xs"
                                >
                                    <span className="text-base">{item.icon}</span>
                                    <span className="text-gray-700 truncate">{item.name}</span>
                                    <Plus size={12} className="ml-auto text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                        {showTooltip === 'sidebar' && (
                            <div className="absolute top-20 left-[26%] bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg z-30 whitespace-nowrap animate-fade-in">
                                {t.dragSpotsFromHere || (lang === 'zh' ? '從這裡拖曳景點' : 'Drag spots from here')}
                                <div className="absolute -left-2 top-1/2 -translate-y-1/2 border-8 border-transparent border-r-slate-800"></div>
                            </div>
                        )}
                    </div>

                    {/* Main Canvas */}
                    <div className="flex-1 flex flex-col">
                        {/* Day Tabs */}
                        <div className="h-10 bg-white border-b border-gray-100 flex items-center px-4 gap-2">
                            {[1, 2, 3].map(day => (
                                <button
                                    key={day}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${activeDay === day
                                        ? 'bg-teal-500 text-white shadow-sm'
                                        : 'text-gray-500 hover:bg-gray-100'
                                        }`}
                                >
                                    Day {day}
                                </button>
                            ))}
                            <button className="ml-auto text-xs text-gray-400 hover:text-teal-500 flex items-center gap-1">
                                <Plus size={14} />
                            </button>
                        </div>

                        {/* Timeline */}
                        <div
                            className={`flex-1 p-4 bg-white overflow-hidden transition-all duration-300 ${showTooltip === 'timeline' ? 'ring-2 ring-teal-400 ring-inset' : ''}`}
                        >
                            <div className="relative pl-6">
                                {/* Timeline line */}
                                <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gray-200"></div>

                                <div className="space-y-4">
                                    {scheduleItems.map((item, i) => (
                                        <div
                                            key={i}
                                            className="relative flex items-start gap-3 animate-fade-in"
                                            style={{ animationDelay: `${i * 0.15}s` }}
                                        >
                                            {/* Dot */}
                                            <div className="absolute -left-4 top-3 w-3 h-3 rounded-full bg-teal-500 border-2 border-white shadow-sm z-10"></div>

                                            {/* Time */}
                                            <div className="text-[10px] font-bold text-gray-400 w-10 pt-2 shrink-0">
                                                {item.time}
                                            </div>

                                            {/* Card */}
                                            <div className="flex-1 bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-lg">{item.icon}</span>
                                                    <div className="flex-1">
                                                        <div className="text-sm font-medium text-gray-800">{item.name}</div>
                                                        <div className="text-[10px] text-gray-400 flex items-center gap-1">
                                                            <Clock size={10} />
                                                            {item.duration}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Drop zone hint */}
                                    <div className="relative flex items-start gap-3 opacity-50">
                                        <div className="absolute -left-4 top-3 w-3 h-3 rounded-full border-2 border-dashed border-gray-300 z-10"></div>
                                        <div className="text-[10px] font-bold text-gray-300 w-10 pt-2 shrink-0">16:00</div>
                                        <div className="flex-1 p-3 rounded-xl border-2 border-dashed border-gray-200 text-center text-xs text-gray-400">
                                            {t.dropToAddItem || (lang === 'zh' ? '拖曳新增' : 'Drop here')}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {showTooltip === 'timeline' && (
                                <div className="absolute top-24 left-[45%] bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg z-30 whitespace-nowrap animate-fade-in">
                                    {t.autoCalculatedTimeline || (lang === 'zh' ? '時間軸自動計算' : 'Auto-calculated timeline')}
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-b-slate-800"></div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Map Panel */}
                    <div
                        className={`w-1/4 bg-slate-100 border-l border-gray-100 relative transition-all duration-300 ${showTooltip === 'map' ? 'ring-2 ring-teal-400 ring-inset' : ''}`}
                    >
                        {/* Fake map grid */}
                        <div className="absolute inset-0 opacity-20" style={{
                            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                            backgroundSize: '30px 30px'
                        }}></div>

                        {/* Map markers */}
                        <div className="absolute inset-0 p-4">
                            <div className="absolute top-[25%] left-[30%]">
                                <div className="w-4 h-4 bg-teal-500 rounded-full border-2 border-white shadow-md flex items-center justify-center text-[8px]">1</div>
                            </div>
                            <div className="absolute top-[50%] left-[60%]">
                                <div className="w-4 h-4 bg-teal-500 rounded-full border-2 border-white shadow-md flex items-center justify-center text-[8px]">2</div>
                            </div>
                            <div className="absolute top-[70%] left-[40%]">
                                <div className="w-4 h-4 bg-teal-500 rounded-full border-2 border-white shadow-md flex items-center justify-center text-[8px]">3</div>
                            </div>

                            {/* Route line */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <path
                                    d="M 45 75 Q 80 120 100 150 Q 120 180 70 220"
                                    fill="none"
                                    stroke="#0d9488"
                                    strokeWidth="2"
                                    strokeDasharray="4,4"
                                    className="animate-draw-path"
                                />
                            </svg>
                        </div>

                        {/* Map label */}
                        <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur rounded-lg p-2 shadow-sm">
                            <div className="flex items-center gap-2 text-xs">
                                <Map size={14} className="text-teal-600" />
                                <span className="text-gray-600 font-medium">{t.kyotoArea || (lang === 'zh' ? '京都區域' : 'Kyoto Area')}</span>
                            </div>
                        </div>

                        {showTooltip === 'map' && (
                            <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg z-30 whitespace-nowrap animate-fade-in">
                                {t.autoRoutePlanning || (lang === 'zh' ? '路線自動規劃' : 'Auto route planning')}
                                <div className="absolute -right-2 top-1/2 -translate-y-1/2 border-8 border-transparent border-l-slate-800"></div>
                            </div>
                        )}
                    </div>

                    {/* Animated cursor */}
                    <div
                        className="absolute pointer-events-none z-40 transition-all duration-700 ease-out"
                        style={{
                            left: `${cursorPos.x}%`,
                            top: `${cursorPos.y}%`,
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <MousePointer2 size={20} className="fill-slate-800 text-white drop-shadow-lg" />
                    </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button
                        className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transform scale-90 group-hover:scale-100 transition-all duration-300 flex items-center gap-2"
                    >
                        {t.startFullExperience || (lang === 'zh' ? '開始體驗完整版' : 'Try the Full Demo')}
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Bottom hint */}
            <p className="text-center text-gray-400 text-sm mt-6">
                {t.previewToDemo || (lang === 'zh' ? '點擊上方預覽進入 Demo 模式' : 'Click the preview above to enter Demo mode')}
            </p>

            <style>{`
                @keyframes drawPath {
                    from { stroke-dashoffset: 200; }
                    to { stroke-dashoffset: 0; }
                }
                .animate-draw-path {
                    stroke-dasharray: 200;
                    animation: drawPath 3s linear infinite;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default ProductPreview;
