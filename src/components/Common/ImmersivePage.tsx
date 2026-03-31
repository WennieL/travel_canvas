import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { Creator, LangType } from '../../types';

interface ImmersivePageProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    historyId: string; // Used for window.history state tracking
    transparentHeader?: boolean;
    hideTitle?: boolean;
    creator?: Creator;
    onFollow?: (id: string) => void;
    isFollowed?: boolean;
    lang?: LangType;
    rightAction?: React.ReactNode;
    showTitleOnScroll?: boolean;
    isScrolled?: boolean;
    onScroll?: (scrollTop: number) => void;
}

export const ImmersivePage: React.FC<ImmersivePageProps> = ({
    isOpen,
    onClose,
    title,
    children,
    historyId,
    transparentHeader,
    hideTitle,
    creator,
    onFollow,
    isFollowed,
    lang = 'zh',
    rightAction,
    showTitleOnScroll = false,
    isScrolled: externalIsScrolled,
    onScroll
}) => {
    // Keep onClose in a ref so the popstate handler always calls the latest version
    // without being included in the effect deps (which would cause pushState to fire on every render)
    const onCloseRef = useRef(onClose);
    useEffect(() => {
        onCloseRef.current = onClose;
    });

    const [internalIsScrolled, setInternalIsScrolled] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Use external isScrolled if provided
    const isScrolled = externalIsScrolled !== undefined ? externalIsScrolled : internalIsScrolled;

    // Handle Native Back Gesture & History
    useEffect(() => {
        if (!isOpen) return;

        // Push state to history so back button works — only fires when truly opening/changing
        window.history.pushState({ immersiveTarget: historyId }, '', `#${historyId}`);
        
        const handlePopstate = (event: PopStateEvent) => {
            // If going back past this entry, close this panel
            if (!event.state || event.state.immersiveTarget !== historyId) {
                onCloseRef.current();
            }
        };

        window.addEventListener('popstate', handlePopstate);
        return () => window.removeEventListener('popstate', handlePopstate);
    }, [isOpen, historyId]); // ← onClose intentionally excluded; using ref pattern instead

    // Scroll Listener for Morphing Header
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const scrollTop = e.currentTarget.scrollTop;
        if (onScroll) onScroll(scrollTop);

        if (scrollTop > 100 && !internalIsScrolled) {
            setInternalIsScrolled(true);
        } else if (scrollTop <= 100 && internalIsScrolled) {
            setInternalIsScrolled(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: '100%', scale: 0.98, opacity: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' }}
                    animate={{ x: 0, scale: 1, opacity: 1, boxShadow: '0 0 50px rgba(0,0,0,0.08)' }}
                    exit={{ x: '100%', scale: 0.98, opacity: 0 }}
                    transition={{ 
                        type: 'spring', 
                        damping: 28.5,
                        stiffness: 160,
                        mass: 0.8
                    }}
                    className="fixed inset-0 z-[3000] bg-[#F7FBF0] flex flex-col shadow-[-10px_0_30px_rgb(0,0,0,0.05)] pb-20 lg:pb-0 font-sans origin-right"
                >
                    {/* Standardized Sticky Header (NEW: Supports Morphing Mode) */}
                    <header 
                        className={`h-[68px] lg:h-[72px] transition-all duration-300 flex items-center justify-between px-6 shrink-0 z-[1100] ${
                            transparentHeader 
                                ? isScrolled 
                                    ? 'bg-white/95 backdrop-blur-md border-b border-[#E8EDE4] shadow-sm text-[#181D17]' 
                                    : 'absolute top-0 inset-x-0 bg-transparent border-none pt-10 text-white' 
                                : 'bg-white border-b border-[#E8EDE4] text-[#181D17]'
                        }`}
                    >
                        <div className="flex items-center gap-4 flex-1">
                            <button 
                                onClick={() => {
                                    onClose();
                                }}
                                className={`w-10 h-10 -ml-2 rounded-full flex items-center justify-center transition-all ${
                                    (transparentHeader && !isScrolled) 
                                        ? 'bg-black/40 backdrop-blur-xl border border-white/20 text-white hover:bg-black/50 shadow-lg' 
                                        : 'text-[#181D17] hover:bg-[#F1F3EE]'
                                }`}
                            >
                                <ChevronLeft size={24} />
                            </button>

                            {/* Scrolled Editorial Info (Fade In) */}
                            <AnimatePresence>
                                {isScrolled && creator && (
                                    <motion.div 
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        className="flex items-center gap-3 overflow-hidden"
                                    >
                                        <img 
                                            src={creator.avatar} 
                                            className="w-8 h-8 rounded-full object-cover border border-gray-100" 
                                            alt="creator" 
                                        />
                                        <div className="flex flex-col min-w-0 pr-2">
                                            <span className="text-[14px] font-bold truncate leading-tight">
                                                {lang === 'zh' ? creator.name : (creator.nameEn || creator.name)}
                                            </span>
                                            <div className="flex items-center gap-1 text-[11px] font-medium">
                                                <span className="text-gray-400">1.2K {lang === 'zh' ? '粉絲' : 'Followers'}</span>
                                                <span className="text-gray-300 mx-0.5 mt-[1px]">·</span>
                                                <button 
                                                    onClick={() => onFollow?.(creator.id)}
                                                    className={`font-black active:opacity-70 transition-all ${
                                                        isFollowed 
                                                            ? 'text-gray-400' 
                                                            : 'text-sky-500'
                                                    }`}
                                                >
                                                    {isFollowed ? (lang === 'zh' ? '已追蹤' : 'Following') : (lang === 'zh' ? '追蹤' : 'Follow')}
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Scrolled Title (Alternative to Creator) */}
                            <AnimatePresence>
                                {isScrolled && !creator && showTitleOnScroll && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        className="flex-1 px-4 text-center pointer-events-none"
                                    >
                                        <span className="font-heading font-black text-[#181D17] text-[13.5px] uppercase tracking-[0.16em] block truncate">
                                            {title}
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        
                        {!hideTitle && !isScrolled && (
                            <h2 className={`text-[15px] font-bold truncate max-w-[45%] text-center flex-1 ${transparentHeader ? 'text-white drop-shadow-md' : 'text-[#181D17]'}`}>
                                {title}
                            </h2>
                        )}

                        <div className="flex items-center justify-end w-10">
                            {rightAction || <div className="w-10" />}
                        </div>
                    </header>

                    <div 
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex-1 overflow-y-auto no-scrollbar scroll-smooth"
                    >
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
