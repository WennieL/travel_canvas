import React from 'react';
import { Plus, Trash2, MapPin, Calendar, Clock, ChevronRight } from 'lucide-react';
import { Plan, LangType } from '../types';
import { getRegionName } from '../data/regions';

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
    // 1. Categorize plans: Active (Future/Ongoing) vs Past
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalized for comparison

    const activePlans = plans.filter(p => new Date(p.endDate) >= today).sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    const pastPlans = plans.filter(p => new Date(p.endDate) < today).sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

    // Region to Cover Image Map
    const regionCoverMap: Record<string, string> = {
        tokyo: '/images/covers/tokyo.png',
        kyoto: '/images/covers/kyoto.png',
        osaka: '/images/covers/osaka.png',
        melbourne: '/images/covers/melbourne.png',
        taipei: '/images/covers/taipei.png',
        tainan: '/images/covers/tainan.png',
        hualien: '/images/covers/hualien.png',
        taichung: '/images/covers/taichung.png'
    };

    const getCoverImage = (region?: string) => (region ? regionCoverMap[region] : null) || '/images/covers/fallback.png';

    return (
        <div className="flex-1 bg-[#F7FBF0] min-h-full p-6 pb-32 animate-in fade-in duration-500">
            <div className="max-w-7xl mx-auto space-y-12">
                
                {/* Section: My Plans */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-[28px] font-heading font-bold text-[#181D17] flex items-center gap-2">
                            {t.myPlans || 'My Plans'}
                            <span className="text-[22px] font-medium text-[#8E9285] font-sans">({activePlans.length})</span>
                        </h2>
                    </div>

                    {activePlans.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16 bg-white rounded-[32px] border border-[#E8EDE4] shadow-sm">
                            <MapPin size={32} className="text-tc-primary/40 mb-3" />
                            <p className="text-[#8E9285] font-bold text-sm">{lang === 'zh' ? '尚未建立行程' : 'No plans yet'}</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {activePlans.map(plan => {
                                const isActive = plan.id === activePlanId;
                                return (
                                    <div
                                        key={plan.id}
                                        onClick={() => onSelectPlan(plan.id)}
                                        className={`group relative bg-white rounded-[28px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 active:scale-[0.98] ${
                                            isActive ? 'ring-2 ring-tc-primary/20' : ''
                                        }`}
                                    >
                                        {/* Cover Image (21:9 Panoramic) */}
                                        <div className="aspect-[21/9] relative w-full overflow-hidden">
                                            <img
                                                src={getCoverImage(plan.region)}
                                                alt={plan.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            {isActive && (
                                                <div className="absolute top-4 left-4 bg-tc-primary text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg z-10">
                                                    {t.current || 'CURRENT'}
                                                </div>
                                            )}
                                            <button
                                                onClick={(e) => onDeletePlan(plan.id, e)}
                                                className="absolute bottom-4 right-4 p-2.5 bg-white/80 hover:bg-white text-tc-primary rounded-full transition-all shadow-sm z-10 sm:opacity-0 sm:group-hover:opacity-100 opacity-100"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>

                                        {/* Card Info (Compact) */}
                                        <div className="p-5">
                                            <h3 className="text-[20px] font-heading font-bold text-[#181D17] leading-tight mb-1 cursor-pointer truncate">
                                                {plan.name}
                                            </h3>
                                            
                                            <div className="text-[16px] font-heading font-bold text-tc-primary mb-3 flex items-center gap-1.5">
                                                {getRegionName(plan.region || '', lang)}
                                                <span className="text-[#8E9285]/40 font-black text-[12px]">•</span>
                                                {lang === 'zh' ? '台灣' : 'Taiwan'}
                                            </div>

                                            <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#8E9285]">
                                                <Calendar size={13} />
                                                <span>{plan.startDate} - {plan.endDate}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </section>

                {/* Section: Past Trips */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-[28px] font-heading font-bold text-[#181D17]">
                            {t.pastTrips || 'Past Trips'}
                            <span className="text-[22px] font-medium text-[#8E9285] ml-2 font-sans">({pastPlans.length})</span>
                        </h2>
                        <button className="text-[12px] font-bold text-[#44493F] uppercase tracking-wider flex items-center gap-1 hover:text-tc-primary transition-colors">
                            {t.seeAll || 'SEE ALL'} <ChevronRight size={14} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                        {pastPlans.slice(0, 6).map(plan => (
                            <div
                                key={plan.id}
                                onClick={() => onSelectPlan(plan.id)}
                                className="flex items-center gap-4 bg-white p-3 rounded-[24px] shadow-sm border border-[#E8EDE4] active:scale-[0.98] transition-all cursor-pointer group"
                            >
                                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                                    <img
                                        src={getCoverImage(plan.region)}
                                        alt={plan.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-[16px] font-heading font-bold text-[#181D17] leading-tight truncate">
                                        {plan.name}
                                    </div>
                                    <h4 className="text-[14px] font-medium text-tc-primary truncate mb-1 mt-0.5">
                                        {getRegionName(plan.region || '', lang)} • {lang === 'zh' ? '澳洲' : 'Australia'}
                                    </h4>
                                    <div className="text-[12px] font-medium text-[#8E9285] flex items-center gap-3">
                                        <span>{plan.startDate.split('-')[1]} {plan.startDate.split('-')[2]} - {plan.endDate.split('-')[2]}</span>
                                        <span className="text-gray-200">•</span>
                                        <span>{plan.totalDays} {t.daysUnit || (lang === 'zh' ? '天' : 'Days')}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 mr-1">
                                    <button 
                                        onClick={(e) => onDeletePlan(plan.id, e)}
                                        className="p-2 text-[#8E9285] hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                    <ChevronRight className="text-[#8E9285]" size={18} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Floating Action Button (FAB) */}
            <button
                onClick={onCreatePlan}
                className="fixed bottom-24 right-6 w-16 h-16 bg-tc-primary text-white rounded-full shadow-[0_8px_25px_rgba(13,99,27,0.3)] flex items-center justify-center transition-all hover:scale-110 active:scale-90 z-[2060]"
            >
                <Plus size={32} />
            </button>
        </div>
    );
};

export default ItineraryHub;
