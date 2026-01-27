import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, MapPin, Clock, Wallet, Search, MousePointer2 } from 'lucide-react';
import { LangType } from '../types';
import { TRANSLATIONS } from '../data/index';

type Phase = 'search' | 'opening' | 'chaos' | 'closeAll' | 'solution';

interface TabsToAppProps {
    lang: LangType;
}

const TabsToApp: React.FC<TabsToAppProps> = ({ lang }) => {
    const t = TRANSLATIONS[lang];
    const [phase, setPhase] = useState<Phase>('search');
    const [typedText, setTypedText] = useState('');
    const [visibleTabs, setVisibleTabs] = useState<number>(0);
    const [showResults, setShowResults] = useState(false);

    const searchText = t.searchTokyoTrip;
    const tabs = [
        { name: 'Google Maps', color: 'bg-green-100', icon: '🗺️' },
        { name: 'Booking.com', color: 'bg-blue-100', icon: '🏨' },
        { name: 'TripAdvisor', color: 'bg-emerald-100', icon: '⭐' },
        { name: 'Sheets', color: 'bg-green-50', icon: '📊' },
        { name: 'Notes', color: 'bg-yellow-100', icon: '📝' },
        { name: '+3', color: 'bg-gray-100', icon: '...' },
    ];

    useEffect(() => {
        const runCycle = async () => {
            while (true) {
                // Phase 1: Search - typing animation
                setPhase('search');
                setTypedText('');
                setShowResults(false);
                setVisibleTabs(0);

                // Type out the search query
                for (let i = 1; i <= searchText.length; i++) {
                    await new Promise(r => setTimeout(r, 100));
                    setTypedText(searchText.slice(0, i));
                }
                await new Promise(r => setTimeout(r, 400));
                setShowResults(true);
                await new Promise(r => setTimeout(r, 800));

                // Phase 2: Opening tabs one by one
                setPhase('opening');
                for (let i = 1; i <= tabs.length; i++) {
                    await new Promise(r => setTimeout(r, 350));
                    setVisibleTabs(i);
                }
                await new Promise(r => setTimeout(r, 500));

                // Phase 3: Chaos
                setPhase('chaos');
                await new Promise(r => setTimeout(r, 2500));

                // Phase 4: Close all tabs
                setPhase('closeAll');
                await new Promise(r => setTimeout(r, 1200));

                // Phase 5: Solution
                setPhase('solution');
                await new Promise(r => setTimeout(r, 4000));
            }
        };
        runCycle();
    }, []);

    return (
        <div className="relative w-80 h-80 md:w-96 md:h-96 flex flex-col items-center justify-start overflow-hidden">
            {/* Browser Window Frame */}
            <div className="w-full h-full bg-gray-100 rounded-xl border border-gray-200 shadow-lg overflow-hidden flex flex-col">
                {/* Title Bar */}
                <div className="h-6 bg-gray-200 flex items-center px-2 gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>

                {/* Tab Bar */}
                <div className="h-8 bg-gray-100 flex items-end px-1 overflow-hidden shrink-0 border-b border-gray-200">
                    <AnimatePresence mode="popLayout">
                        {/* Google Tab - always visible except in solution */}
                        {phase !== 'solution' && (
                            <motion.div
                                initial={{ width: 80, opacity: 1 }}
                                animate={phase === 'closeAll' ? { width: 0, opacity: 0, x: -50 } : { width: 80, opacity: 1 }}
                                exit={{ width: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="h-7 bg-white rounded-t-lg border-t border-l border-r border-gray-200 flex items-center px-2 gap-1 overflow-hidden shrink-0"
                            >
                                <span className="text-xs">🔍</span>
                                <span className="text-[10px] text-gray-600 truncate font-medium">Google</span>
                            </motion.div>
                        )}

                        {/* Dynamic tabs */}
                        {(phase === 'opening' || phase === 'chaos') && tabs.slice(0, visibleTabs).map((tab, idx) => (
                            <motion.div
                                key={tab.name}
                                initial={{ width: 0, opacity: 0 }}
                                animate={{
                                    width: phase === 'chaos' ? Math.max(35, 70 - visibleTabs * 5) : 65,
                                    opacity: 1,
                                }}
                                exit={{ width: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className={`h-7 ${tab.color} rounded-t-lg border-t border-l border-r border-gray-200 flex items-center px-1.5 gap-0.5 overflow-hidden shrink-0`}
                            >
                                <span className="text-[10px]">{tab.icon}</span>
                                <span className="text-[8px] text-gray-600 truncate font-medium">{tab.name}</span>
                            </motion.div>
                        ))}

                        {/* Closing animation tabs */}
                        {phase === 'closeAll' && tabs.map((tab, idx) => (
                            <motion.div
                                key={`closing-${tab.name}`}
                                initial={{ width: 50, opacity: 1 }}
                                animate={{ width: 0, opacity: 0, x: 20 }}
                                transition={{ duration: 0.2, delay: idx * 0.05 }}
                                className={`h-7 ${tab.color} rounded-t-lg border-t border-l border-r border-gray-200 flex items-center px-1 overflow-hidden shrink-0`}
                            >
                                <X size={10} className="text-gray-500" />
                            </motion.div>
                        ))}

                        {/* TravelCanvas Tab */}
                        {phase === 'solution' && (
                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: 130, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="h-7 bg-teal-50 rounded-t-lg border-t border-l border-r border-teal-200 flex items-center px-2 gap-1.5 shrink-0"
                            >
                                <span className="text-xs">✈️</span>
                                <span className="text-[10px] text-teal-700 font-bold">TravelCanvas</span>
                                <Check size={10} className="text-teal-600 ml-auto" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Content Area */}
                <div className="flex-1 bg-white relative overflow-hidden">
                    {/* Phase 1: Search Interface */}
                    <AnimatePresence>
                        {phase === 'search' && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex flex-col items-center justify-start p-4 bg-white"
                            >
                                {/* Google-style logo */}
                                <div className="text-xl font-bold mb-4 mt-4">
                                    <span className="text-blue-500">G</span>
                                    <span className="text-red-500">o</span>
                                    <span className="text-yellow-500">o</span>
                                    <span className="text-blue-500">g</span>
                                    <span className="text-green-500">l</span>
                                    <span className="text-red-500">e</span>
                                </div>

                                {/* Search box */}
                                <div className="w-full max-w-[220px] bg-white border border-gray-200 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                                    <Search size={14} className="text-gray-400" />
                                    <span className="text-sm text-gray-700 flex-1">{typedText}</span>
                                    <motion.div
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ repeat: Infinity, duration: 0.8 }}
                                        className="w-0.5 h-4 bg-gray-400"
                                    />
                                </div>

                                {/* Search results */}
                                <AnimatePresence>
                                    {showResults && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="w-full max-w-[220px] mt-4 space-y-2"
                                        >
                                            {['東京5日遊攻略 - Maps', '東京住宿推薦 - Booking', '必去景點TOP10'].map((result, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.15 }}
                                                    className="text-[10px] text-blue-600 hover:underline cursor-pointer bg-gray-50 p-2 rounded border border-gray-100"
                                                >
                                                    {result}
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Phase 2-3: Opening tabs / Chaos */}
                    <AnimatePresence>
                        {(phase === 'opening' || phase === 'chaos') && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="absolute inset-0 p-2"
                            >
                                <div className="relative w-full h-full">
                                    {/* Overlapping content windows */}
                                    <motion.div
                                        animate={{
                                            rotate: phase === 'chaos' ? [-2, 2, -2] : 0,
                                            x: phase === 'chaos' ? [0, 3, 0] : 0
                                        }}
                                        transition={{ repeat: Infinity, duration: 0.4 }}
                                        className="absolute top-1 left-1 w-28 h-20 bg-white border border-gray-200 rounded shadow-md p-2 z-10"
                                    >
                                        <div className="text-[8px] text-green-600 font-bold mb-1">🗺️ Google Maps</div>
                                        <div className="h-12 bg-green-50 rounded flex items-center justify-center">
                                            <div className="w-6 h-6 bg-green-200 rounded-full"></div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        animate={{
                                            rotate: phase === 'chaos' ? [1, -1, 1] : 0,
                                            y: phase === 'chaos' ? [0, 2, 0] : 0
                                        }}
                                        transition={{ repeat: Infinity, duration: 0.5 }}
                                        className="absolute top-4 right-1 w-24 h-16 bg-white border border-gray-200 rounded shadow-md p-1.5 z-20"
                                    >
                                        <div className="text-[8px] text-blue-600 font-bold mb-1">🏨 Booking</div>
                                        <div className="space-y-1">
                                            <div className="h-1.5 w-full bg-blue-100 rounded"></div>
                                            <div className="h-1.5 w-3/4 bg-blue-50 rounded"></div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        animate={{
                                            rotate: phase === 'chaos' ? [-1.5, 1.5, -1.5] : 0
                                        }}
                                        transition={{ repeat: Infinity, duration: 0.35 }}
                                        className="absolute bottom-6 left-3 w-32 h-14 bg-white border border-gray-200 rounded shadow-md p-1.5 z-30"
                                    >
                                        <div className="text-[8px] text-yellow-600 font-bold mb-1">📊 Sheets</div>
                                        <div className="grid grid-cols-4 gap-0.5">
                                            {[...Array(8)].map((_, i) => (
                                                <div key={i} className="h-1.5 bg-gray-100 rounded-sm"></div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        animate={{
                                            rotate: phase === 'chaos' ? [2, -2, 2] : 0
                                        }}
                                        transition={{ repeat: Infinity, duration: 0.45 }}
                                        className="absolute bottom-2 right-2 w-20 h-12 bg-yellow-50 border border-yellow-200 rounded shadow-md p-1.5 z-40"
                                    >
                                        <div className="text-[8px] text-yellow-700 font-bold">📝 Notes</div>
                                        <div className="h-1 w-12 bg-yellow-200 rounded mt-1"></div>
                                    </motion.div>

                                    {/* Confused cursor in chaos phase */}
                                    {phase === 'chaos' && (
                                        <motion.div
                                            animate={{
                                                x: [50, 150, 80, 120, 60],
                                                y: [30, 80, 120, 50, 90]
                                            }}
                                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                            className="absolute z-50"
                                        >
                                            <MousePointer2 size={16} className="text-gray-600 fill-white drop-shadow-md" />
                                        </motion.div>
                                    )}

                                    {/* Frustration indicator */}
                                    {phase === 'chaos' && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
                                        >
                                            <motion.div
                                                animate={{ rotate: [0, 10, -10, 0] }}
                                                transition={{ repeat: Infinity, duration: 0.5 }}
                                                className="text-2xl"
                                            >
                                                😵‍💫
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Phase 4: Close All - brief transition */}
                    <AnimatePresence>
                        {phase === 'closeAll' && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="absolute inset-0 bg-gray-100 flex items-center justify-center"
                            >
                                <motion.div
                                    animate={{ scale: [1, 0.5, 0] }}
                                    transition={{ duration: 0.8 }}
                                    className="text-3xl"
                                >
                                    ✕
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Phase 5: Solution */}
                    <AnimatePresence>
                        {phase === 'solution' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.3 }}
                                className="absolute inset-0 p-3 flex flex-col bg-white"
                            >
                                {/* Header */}
                                <motion.div
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex items-center justify-between mb-2"
                                >
                                    <div className="text-[10px] font-bold text-gray-700">📅 {t.heroAnimationDay}</div>
                                    <div className="flex items-center gap-1 text-[8px] text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">
                                        <Wallet size={8} />
                                        <span>¥ 3,200</span>
                                    </div>
                                </motion.div>

                                {/* Timeline */}
                                <div className="flex-1 space-y-1.5 overflow-hidden">
                                    {[
                                        { icon: '⛩️', name: t.asakusa, time: '09:00', bg: 'bg-orange-50' },
                                        { icon: '🍜', name: t.ichiran, time: '12:00', bg: 'bg-red-50' },
                                        { icon: '🗼', name: t.tokyoTower, time: '14:00', bg: 'bg-pink-50' },
                                        { icon: '🛍️', name: t.shibuya, time: '16:00', bg: 'bg-purple-50' },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ x: -30, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.5 + i * 0.15 }}
                                            className="flex items-center gap-2 bg-white border border-gray-100 rounded-lg p-1.5 shadow-sm"
                                        >
                                            <div className={`w-6 h-6 ${item.bg} rounded flex items-center justify-center text-sm`}>{item.icon}</div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-[9px] font-bold text-gray-700 truncate">{item.name}</div>
                                                <div className="text-[7px] text-gray-400 flex items-center gap-0.5">
                                                    <Clock size={7} /> {item.time}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Bottom stats */}
                                <motion.div
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1.1 }}
                                    className="flex items-center justify-between mt-2 pt-1.5 border-t border-gray-100"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-0.5 text-[8px] text-gray-500">
                                            <MapPin size={8} className="text-teal-500" />
                                            <span>4 {t.heroAnimationSpots}</span>
                                        </div>
                                        <div className="flex items-center gap-0.5 text-[8px] text-gray-500">
                                            <Clock size={8} className="text-blue-500" />
                                            <span>8 {t.heroAnimationHours}</span>
                                        </div>
                                    </div>
                                    <div className="text-[8px] text-green-600 font-medium flex items-center gap-0.5">
                                        <Check size={8} />
                                        {t.heroAnimationPerfect}
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Tagline */}
            <AnimatePresence>
                {phase === 'solution' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.3 }}
                        className="mt-3 text-sm font-medium text-gray-500"
                    >
                        {t.heroAnimationTagline}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TabsToApp;
