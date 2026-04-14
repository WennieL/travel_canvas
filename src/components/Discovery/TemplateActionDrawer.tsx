import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Share2, Heart, Plus, Info, MessageSquare } from 'lucide-react';
import { Template, LangType } from '../../types';

interface TemplateActionDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    template: Template;
    lang: LangType;
    isFavorited: boolean;
    onToggleFavorite: () => void;
    onApply: () => void;
    onShare: () => void;
    onCreatorClick?: () => void;
}

export const TemplateActionDrawer: React.FC<TemplateActionDrawerProps> = ({
    isOpen,
    onClose,
    template,
    lang,
    isFavorited,
    onToggleFavorite,
    onApply,
    onShare,
    onCreatorClick
}) => {
    const t = {
        title: lang === 'zh' ? '更多選項' : 'More Options',
        apply: lang === 'zh' ? '套用此行程模板' : 'Apply this Template',
        applySub: lang === 'zh' ? '將此行程加入您的計畫' : 'Add this itinerary to your plan',
        favorite: lang === 'zh' ? (isFavorited ? '從收藏中移除' : '加入收藏') : (isFavorited ? 'Remove from Favorites' : 'Add to Favorites'),
        share: lang === 'zh' ? '分享行程' : 'Share Itinerary',
        creator: lang === 'zh' ? '查看達人資訊' : 'View Creator Info',
        cancel: lang === 'zh' ? '取消' : 'Cancel'
    };

    const menuItems = [
        {
            id: 'apply',
            icon: <Plus className="text-bg-primary" />,
            label: t.apply,
            sublabel: t.applySub,
            onClick: () => { onApply(); onClose(); },
            highlight: true
        },
        {
            id: 'favorite',
            icon: <Heart className={isFavorited ? "fill-red-500 text-red-500" : "text-gray-500"} />,
            label: t.favorite,
            onClick: () => { onToggleFavorite(); onClose(); }
        },
        {
            id: 'share',
            icon: <Share2 className="text-gray-500" />,
            label: t.share,
            onClick: () => { onShare(); onClose(); }
        },
        {
            id: 'creator',
            icon: <Info className="text-gray-500" />,
            label: t.creator,
            onClick: () => { onCreatorClick?.(); onClose(); }
        }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-[5000] backdrop-blur-[2px]"
                    />
                    
                    {/* Drawer */}
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed bottom-0 inset-x-0 bg-white rounded-t-[32px] z-[5001] overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
                    >
                        {/* Handle */}
                        <div className="flex justify-center pt-3 pb-1">
                            <div className="w-12 h-1.5 bg-gray-200 rounded-full" />
                        </div>

                        {/* Title Header */}
                        <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100 mb-2">
                            <h3 className="text-lg font-black text-gray-900">{t.title}</h3>
                            <button 
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-600 active:scale-95 transition-all"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="px-4 space-y-1">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={item.onClick}
                                    className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all active:scale-[0.98] ${
                                        item.highlight ? 'bg-bg-primary/5 hover:bg-bg-primary/10' : 'hover:bg-gray-50'
                                    }`}
                                >
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                                        item.highlight ? 'bg-white shadow-sm' : 'bg-gray-100'
                                    }`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col items-start min-w-0">
                                        <span className={`text-[15px] font-bold ${item.highlight ? 'text-bg-primary' : 'text-gray-800'}`}>
                                            {item.label}
                                        </span>
                                        {item.sublabel && (
                                            <span className="text-[12px] text-gray-400 font-medium truncate w-full">
                                                {item.sublabel}
                                            </span>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>

                        
                        {/* Safe Area Spacer for iOS/Mobile */}
                        <div className="h-32 bg-white shrink-0" />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
