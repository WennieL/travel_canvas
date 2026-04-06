import React from 'react';
import { Plus, Map as MapIcon, List as ListIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ViewMode } from '../../types';

interface FloatingActionsProps {
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    isMobile: boolean;
    isDayEmpty: boolean;
    showStartPicker: boolean;
    showCheckIn: boolean;
    onOpenMobileLibrary: () => void;
    onOpenSidebar: () => void;
    lang: string;
}

/**
 * FloatingActions — the global FAB (Floating Action Button) group.
 * Renders on canvas/map views only when the day is not empty.
 * Mobile: centered Map pill + corner Add button
 * Desktop: right-side stack of Map toggle + Add button
 */
const FloatingActions: React.FC<FloatingActionsProps> = ({
    viewMode,
    setViewMode,
    isMobile,
    isDayEmpty,
    showStartPicker,
    showCheckIn,
    onOpenMobileLibrary,
    onOpenSidebar,
    lang,
}) => {
    const shouldShow =
        (viewMode === 'canvas' || viewMode === 'map') &&
        !showStartPicker &&
        !showCheckIn &&
        (!isDayEmpty || viewMode !== 'canvas');

    return (
        <AnimatePresence mode="wait">
            {shouldShow && (
                <>
                    {isMobile ? (
                        <div className="fixed bottom-28 left-0 right-0 z-[120] px-6 pointer-events-none">
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Map/List toggle pill — centered */}
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        const targetMode: ViewMode = viewMode === 'map' ? 'canvas' : 'map';
                                        setViewMode(targetMode);
                                    }}
                                    className="h-11 px-6 rounded-full bg-white text-teal-800 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center justify-center gap-2.5 pointer-events-auto active:bg-gray-50 transition-all font-bold text-[13px] tracking-wide"
                                >
                                    {viewMode === 'map' ? <ListIcon size={18} /> : <MapIcon size={18} />}
                                    <span>
                                        {viewMode === 'map'
                                            ? (lang === 'zh' ? '清單' : 'List')
                                            : (lang === 'zh' ? '地圖' : 'Map')}
                                    </span>
                                </motion.button>

                                {/* Primary Add — bottom-right corner */}
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onOpenMobileLibrary}
                                    className="absolute right-0 w-13 h-13 rounded-full bg-teal-600 text-white shadow-[0_10px_30px_rgba(13,148,136,0.4)] flex items-center justify-center pointer-events-auto active:bg-teal-700 transition-all border-2 border-white/20"
                                >
                                    <Plus size={26} strokeWidth={3} />
                                </motion.button>
                            </div>
                        </div>
                    ) : (
                        /* Desktop — right-side vertical stack */
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="fixed bottom-8 right-6 z-[120] flex flex-col items-center gap-4 pointer-events-none"
                        >
                            {/* Map / List toggle */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    const targetMode: ViewMode = viewMode === 'map' ? 'canvas' : 'map';
                                    setViewMode(targetMode);
                                }}
                                className="w-13 h-13 rounded-full bg-white text-teal-700 shadow-xl border border-gray-100 flex items-center justify-center pointer-events-auto active:bg-gray-50 transition-colors"
                            >
                                {viewMode === 'map' ? <ListIcon size={22} /> : <MapIcon size={22} />}
                            </motion.button>

                            {/* Primary Add Spot */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onOpenSidebar}
                                className="w-16 h-16 rounded-full bg-teal-600 text-white shadow-[0_12px_40px_rgba(13,148,136,0.5)] flex items-center justify-center pointer-events-auto active:bg-teal-700 transition-all border-2 border-white/30"
                            >
                                <Plus size={32} strokeWidth={2.5} />
                            </motion.button>
                        </motion.div>
                    )}
                </>
            )}
        </AnimatePresence>
    );
};

export default FloatingActions;
