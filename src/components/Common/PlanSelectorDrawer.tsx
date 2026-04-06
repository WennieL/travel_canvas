import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Map, ChevronRight } from 'lucide-react';
import { TRANSLATIONS } from '../../data/translations';

interface Plan {
    id: string;
    name: string;
    date?: string;
    spotsCount?: number;
}

interface PlanSelectorDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    plans: Plan[];
    onSelectPlan: (planId: string) => void;
    onCreatePlan: () => void;
    lang?: string;
}

export const PlanSelectorDrawer: React.FC<PlanSelectorDrawerProps> = ({
    isOpen,
    onClose,
    plans,
    onSelectPlan,
    onCreatePlan,
    lang = 'zh'
}) => {
    const t = TRANSLATIONS[lang as 'zh' | 'en'] || TRANSLATIONS.zh;

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
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed bottom-0 inset-x-0 bg-white rounded-t-[32px] z-[1001] shadow-2xl max-h-[80vh] flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="px-6 py-5 border-b border-[#E8EDE4] flex items-center justify-between shrink-0">
                            <h3 className="text-[18px] font-black text-[#181D17]">
                                {lang === 'zh' ? '要加入哪個計畫？' : 'Add to which plan?'}
                            </h3>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 rounded-full bg-[#F7FBF0] flex items-center justify-center text-[#8E9285] hover:text-[#181D17] transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
                            {plans.length > 0 ? (
                                <div className="space-y-3">
                                    {plans.map(plan => (
                                        <button
                                            key={plan.id}
                                            onClick={() => onSelectPlan(plan.id)}
                                            className="w-full flex items-center gap-4 p-4 rounded-2xl border border-[#E8EDE4] hover:border-emerald-400 hover:bg-emerald-50/30 active:scale-[0.98] transition-all group"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                                <Map size={24} />
                                            </div>
                                            <div className="flex-1 text-left min-w-0">
                                                <div className="text-[16px] font-bold text-[#181D17] truncate">{plan.name}</div>
                                                <div className="text-[12px] text-[#8E9285] font-medium">
                                                    {plan.spotsCount || 0} {lang === 'zh' ? '個景點' : 'spots'}
                                                </div>
                                            </div>
                                            <ChevronRight size={18} className="text-[#E8EDE4] group-hover:text-emerald-400 transition-colors" />
                                        </button>
                                    ))}
                                    
                                    <button
                                        onClick={onCreatePlan}
                                        className="w-full flex items-center gap-4 p-4 rounded-2xl border-2 border-dashed border-[#E8EDE4] text-[#8E9285] hover:border-emerald-400 hover:text-emerald-500 transition-all active:scale-[0.98]"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                                            <Plus size={24} />
                                        </div>
                                        <span className="font-bold">{lang === 'zh' ? '建立新計畫' : 'Create new plan'}</span>
                                    </button>
                                </div>
                            ) : (
                                <div className="py-12 flex flex-col items-center text-center">
                                    <div className="w-20 h-20 rounded-full bg-[#F7FBF0] flex items-center justify-center text-[#8E9285] mb-6">
                                        <Map size={40} className="opacity-20" />
                                    </div>
                                    <h4 className="text-[16px] font-black text-[#181D17] mb-2">
                                        {lang === 'zh' ? '目前尚無計畫喔' : 'No plans yet'}
                                    </h4>
                                    <p className="text-[14px] text-[#8E9285] font-medium mb-8 max-w-[200px]">
                                        {lang === 'zh' ? '先建立一個計畫，再來收藏喜歡的景點吧！' : 'Create a plan first to save your favorite spots!'}
                                    </p>
                                    <button
                                        onClick={onCreatePlan}
                                        className="bg-emerald-600 text-white px-8 py-3.5 rounded-2xl font-black text-[15px] shadow-lg shadow-emerald-600/20 active:scale-95 transition-all flex items-center gap-2"
                                    >
                                        <Plus size={18} />
                                        {lang === 'zh' ? '建立新計畫' : 'Create new plan'}
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Safe Area Spacer for iOS/Mobile */}
                        <div className="h-8 bg-white shrink-0" />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
