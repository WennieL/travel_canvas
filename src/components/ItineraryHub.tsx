import React from 'react';
import { Plus, Trash2, MapPin, Calendar, Clock, ChevronRight } from 'lucide-react';
import { Plan, LangType } from '../types';

interface ItineraryHubProps {
    plans: Plan[];
    activePlanId: string;
    onSelectPlan: (id: string) => void;
    onCreatePlan: () => void;
    onDeletePlan: (id: string, e: React.MouseEvent) => void;
    lang: LangType;
    t: any;
}

const ItineraryHub: React.FC<ItineraryHubProps> = ({
    plans,
    activePlanId,
    onSelectPlan,
    onCreatePlan,
    onDeletePlan,
    lang,
    t
}) => {
    return (
        <div className="flex-1 bg-gray-50/50 min-h-full p-4 md:p-8 animate-in fade-in duration-300">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-black text-gray-800">{t.myPlans || 'My Trips'}</h2>
                        <p className="text-sm font-bold text-gray-400 mt-1">
                            {plans.length} {lang === 'zh' ? '個行程' : 'trips'}
                        </p>
                    </div>
                    <button
                        onClick={onCreatePlan}
                        className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg hover:shadow-teal-600/20 active:scale-95"
                    >
                        <Plus size={18} />
                        <span className="hidden sm:inline">{t.planCreated || 'Create Trip'}</span>
                    </button>
                </div>

                {plans.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm border-dashed">
                        <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                            <MapPin size={32} className="text-teal-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{lang === 'zh' ? '還沒有任何行程' : 'No trips yet'}</h3>
                        <p className="text-gray-400 text-sm mb-6 text-center max-w-xs">
                            {lang === 'zh' ? '點擊下方按鈕開始規劃你的下一趟旅程吧！' : 'Click the button below to start planning your next adventure!'}
                        </p>
                        <button
                            onClick={onCreatePlan}
                            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-md active:scale-95"
                        >
                            <Plus size={18} />
                            {t.planCreated || 'Create Trip'}
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {/* New Trip Card */}
                        <button
                            onClick={onCreatePlan}
                            className="flex flex-col items-center justify-center p-6 h-48 bg-white border-2 border-dashed border-gray-200 rounded-2xl hover:border-teal-400 hover:bg-teal-50/50 transition-all group active:scale-95"
                        >
                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-teal-100 group-hover:scale-110 transition-all">
                                <Plus size={24} className="text-gray-400 group-hover:text-teal-600" />
                            </div>
                            <span className="font-bold text-gray-500 group-hover:text-teal-700">{t.planCreated || 'Create Trip'}</span>
                        </button>

                        {/* Existing Trips */}
                        {plans.map(plan => {
                            const isActive = plan.id === activePlanId;
                            
                            // Mocking cover image based on region for visual appeal
                            const defaultBg = "bg-gradient-to-br from-gray-100 to-gray-200";
                            const regionGradients: Record<string, string> = {
                                tokyo: "from-blue-400 to-indigo-600",
                                kyoto: "from-amber-500 to-orange-600",
                                osaka: "from-rose-400 to-red-500",
                                melbourne: "from-emerald-400 to-teal-600"
                            };
                            const bgClass = plan.region && regionGradients[plan.region as string] ? `bg-gradient-to-br ${regionGradients[plan.region as string]}` : defaultBg;

                            return (
                                <div
                                    key={plan.id}
                                    onClick={() => onSelectPlan(plan.id)}
                                    className={`relative group bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                                        isActive ? 'ring-2 ring-teal-500 shadow-lg' : 'border border-gray-100 shadow-sm hover:shadow-xl'
                                    }`}
                                >
                                    {isActive && (
                                        <div className="absolute top-3 left-3 bg-teal-500 text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md z-10 shadow-sm">
                                            {t.current || 'Current'}
                                        </div>
                                    )}
                                    
                                    <button
                                        onClick={(e) => onDeletePlan(plan.id, e)}
                                        className="absolute top-3 right-3 p-2 bg-black/20 hover:bg-red-500 text-white rounded-full z-10 opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm"
                                        title={t.removePlan || 'Delete'}
                                    >
                                        <Trash2 size={14} />
                                    </button>

                                    {/* Cover Image Placeholder */}
                                    <div className={`h-24 w-full ${bgClass} relative object-cover`}>
                                        <div className="absolute inset-0 bg-black/10" />
                                    </div>

                                    <div className="p-4">
                                        <div className="flex items-start justify-between">
                                            <h3 className="font-black text-gray-800 text-lg leading-tight mb-2 line-clamp-1">{plan.name}</h3>
                                        </div>
                                        
                                        <div className="flex flex-col gap-1.5 mt-2">
                                            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
                                                <Calendar size={14} className="text-gray-400" />
                                                <span>{plan.startDate}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
                                                <Clock size={14} className="text-gray-400" />
                                                <span>{plan.totalDays} {t.daysUnit || 'Days'}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 mt-1">
                                                <MapPin size={14} className="text-gray-400" />
                                                <span className="uppercase tracking-wider">{plan.region}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom indicator */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
                                        {isActive && <div className="h-full bg-teal-500 w-full" />}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ItineraryHub;
