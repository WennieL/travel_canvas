import React, { useState } from 'react';
import { Search, Plus, FolderOpen, Trash2, Check, Calendar, MapPin } from 'lucide-react';
import { Plan } from '../../types';

interface PlanListViewProps {
    plans: Plan[];
    activePlanId: string;
    onSelectPlan: (id: string) => void;
    onCreatePlan: () => void;
    onDeletePlan: (id: string, e: React.MouseEvent) => void;
    t: any;
    lang: string;
}

export const PlanListView: React.FC<PlanListViewProps> = ({
    plans,
    activePlanId,
    onSelectPlan,
    onCreatePlan,
    onDeletePlan,
    t,
    lang
}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPlans = plans.filter(p => {
        const safeName = p.name || '';
        const safeSearch = searchQuery || '';
        return safeName.toLowerCase().includes(safeSearch.toLowerCase());
    }).sort((a, b) => b.createdAt - a.createdAt);

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header / Search */}
            <div className="px-4 py-4 space-y-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest flex items-center gap-2">
                        <FolderOpen size={16} className="text-teal-600" />
                        {t.myPlans || 'My Plans'}
                    </h3>
                </div>

                <div className="relative">
                    <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder={t.searchPlaceholder || 'Search plans...'}
                        className="w-full pl-9 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-1 focus:ring-teal-500 transition-all h-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <button
                    onClick={onCreatePlan}
                    className="w-full py-2.5 bg-teal-600 text-white rounded-xl text-sm font-bold hover:bg-teal-700 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                    <Plus size={16} />
                    {t.planCreated || 'Create New Plan'}
                </button>
            </div>

            {/* Plan List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                {filteredPlans.map(plan => {
                    const isActive = activePlanId === plan.id;
                    return (
                        <div
                            key={plan.id}
                            onClick={() => onSelectPlan(plan.id)}
                            className={`
                                relative p-4 rounded-2xl border transition-all cursor-pointer group
                                ${isActive
                                    ? 'border-teal-500 bg-teal-50/50 shadow-sm'
                                    : 'border-gray-100 hover:border-teal-200 hover:bg-gray-50'
                                }
                            `}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex-1 min-w-0">
                                    <h4 className={`font-bold text-sm truncate ${isActive ? 'text-teal-700' : 'text-gray-800'}`}>
                                        {plan.name}
                                    </h4>
                                    <div className="flex items-center gap-3 mt-1">
                                        <div className="flex items-center gap-1 text-[10px] text-gray-400 font-medium">
                                            <Calendar size={10} />
                                            <span>{plan.startDate.split('-').slice(1).join('/')}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-[10px] text-gray-400 font-medium">
                                            <MapPin size={10} />
                                            <span className="uppercase">{plan.region || 'ALL'}</span>
                                        </div>
                                    </div>
                                </div>

                                {isActive ? (
                                    <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center shadow-sm">
                                        <Check size={12} className="text-white" />
                                    </div>
                                ) : (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onDeletePlan(plan.id, e);
                                        }}
                                        className="p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                )}
                            </div>

                            {/* Days Badge */}
                            <div className="inline-flex items-center px-2 py-0.5 bg-white border border-gray-100 rounded-md text-[9px] font-black text-gray-400 uppercase tracking-tighter shadow-sm">
                                {plan.totalDays} {t.day || 'Days'}
                            </div>
                        </div>
                    );
                })}

                {filteredPlans.length === 0 && (
                    <div className="py-12 text-center space-y-2">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto text-gray-300">
                            <FolderOpen size={24} />
                        </div>
                        <p className="text-xs text-gray-400 font-medium italic">
                            {t.noSpotsOnMap || 'No plans found'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
