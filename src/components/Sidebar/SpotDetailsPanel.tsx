import React, { useState, useEffect, useRef } from 'react';
import { TravelItem, ScheduleItem, LangType } from '../../types';
import { SAMPLE_CREATORS } from '../../data';
import { Share2, Heart, Plus, MapPin, Star, Check, Clock, DollarSign, Utensils, Navigation, Info, ChevronLeft, Lightbulb, Sparkles } from 'lucide-react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { EngagementSocialBlock } from '../Common/EngagementSocialBlock';
import { PlanSelectorDrawer } from '../Common/PlanSelectorDrawer';

// Fix leaflet icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface SpotDetailsPanelProps {
    item: TravelItem | ScheduleItem;
    allRecommendations?: TravelItem[];
    subscribedCreators: string[];
    onToggleSubscribe: (creatorId: string) => void;
    onAddItem: (item: TravelItem) => void;
    onUpdateItem?: (slot: string, index: number, updates: Partial<ScheduleItem>) => void;
    showToastMessage?: (msg: string, type: 'success' | 'error') => void;
    onClose: () => void;
    lang: LangType;
    preferredAuthorId?: string | null;
    sidebarMode?: 'list' | 'map';
    hideHeader?: boolean;
    onCreatorClick?: (creatorId: string) => void;
    plans?: any[];
    onAddItemToPlan?: (item: TravelItem, planId: string) => void;
    onCreateNewPlan?: () => void;
    isExternalPlanSelectorOpen?: boolean;
    onOpenPlanSelector?: () => void;
    disableInternalScroll?: boolean;
    isScrolled?: boolean;
}

export const SpotDetailsPanel: React.FC<SpotDetailsPanelProps> = ({
    item,
    subscribedCreators,
    onToggleSubscribe,
    onAddItem,
    onUpdateItem,
    showToastMessage,
    onClose,
    lang,
    preferredAuthorId,
    sidebarMode,
    hideHeader = false,
    onCreatorClick,
    plans = [],
    onAddItemToPlan,
    onCreateNewPlan,
    isExternalPlanSelectorOpen,
    onOpenPlanSelector,
    disableInternalScroll = false,
    isScrolled: externalIsScrolled
}) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [isPlanSelectorOpen, setIsPlanSelectorOpen] = useState(false);
    const [isAddedToPlan, setIsAddedToPlan] = useState(false);
    const [internalIsScrolled, setInternalIsScrolled] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const isScrolled = externalIsScrolled !== undefined ? externalIsScrolled : internalIsScrolled;
    const creator = SAMPLE_CREATORS.find(c => c.id === (item as any).authorId) || SAMPLE_CREATORS[1];
    const title = lang === 'zh' ? item.title : ((item as any).titleEn || item.title);
    const imgUrl = (item as any).coverImage || item.image;
    const position: [number, number] = item.lat && item.lng ? [item.lat, item.lng] : [-37.8136, 144.9631];

    useEffect(() => {
        if (isExternalPlanSelectorOpen !== undefined) {
            setIsPlanSelectorOpen(isExternalPlanSelectorOpen);
        }
    }, [isExternalPlanSelectorOpen]);

    const handleOpenPlanSelector = () => {
        if (onOpenPlanSelector) {
            onOpenPlanSelector();
        } else {
            setIsPlanSelectorOpen(true);
        }
    };

    useEffect(() => {
        if (disableInternalScroll) return;
        const handleScroll = () => {
            if (scrollRef.current) {
                setInternalIsScrolled(scrollRef.current.scrollTop > 100);
            }
        };
        const el = scrollRef.current;
        if (el) {
            el.addEventListener('scroll', handleScroll, { passive: true });
            return () => el.removeEventListener('scroll', handleScroll);
        }
    }, [item, disableInternalScroll]);

    return (
        <div className={`flex flex-col ${disableInternalScroll ? 'min-h-full h-auto' : 'h-full'} bg-[#F7FBF0] relative font-sans overflow-x-hidden ${disableInternalScroll ? '' : 'overflow-hidden'}`}>
            <div 
                ref={scrollRef}
                className={`flex-1 no-scrollbar ${disableInternalScroll ? '' : 'overflow-y-auto'}`}
            >
                {/* 1. Hero Section (EMERALD CANOPY STYLE) */}
                <div className="relative w-full h-[38vh] md:h-[42vh] shrink-0 bg-gray-100 overflow-hidden">
                    {!hideHeader && (
                        <button 
                            onClick={onClose}
                            className="absolute top-6 left-6 w-10 h-10 bg-black/30 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white z-50 hover:bg-black/40 transition-all"
                        >
                            <ChevronLeft size={24} />
                        </button>
                    )}
                    <img 
                        src={imgUrl} 
                        className="w-full h-full object-cover" 
                        alt={title} 
                    />
                    
                    <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-8 pb-7">
                        <button 
                            onClick={() => onCreatorClick?.(creator.id)}
                            className="flex items-center gap-3 mb-2 px-1 group active:opacity-70 transition-all w-fit"
                        >
                            <img 
                                src={creator.avatar} 
                                className="w-8 h-8 rounded-full object-cover border-2 border-white/40 shadow-xl" 
                                alt="creator" 
                            />
                            <span className="text-[13px] text-white/90 font-bold tracking-[0.1em] drop-shadow-md">
                                BY {(lang === 'zh' ? creator.name : (creator.nameEn || creator.name))?.toUpperCase()}
                            </span>
                        </button>

                        <h1 className="text-[26px] md:text-[32px] font-heading font-black text-white leading-tight tracking-[0.02em] max-w-[95%] mb-2 drop-shadow-md">
                            {title}
                        </h1>

                        <div className="flex items-center gap-4 text-white/60 text-[11px] font-bold tracking-[0.15em] uppercase">
                            <div className="flex items-center gap-1.5 text-amber-400">
                                <Star size={12} fill="currentColor" />
                                <span>{item.rating || 4.8}</span>
                            </div>
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            <span>{item.region || 'Melbourne'}</span>
                        </div>
                    </div>
                </div>

                {/* 2. Sticky Tab Bar */}
                <div className="sticky top-0 z-[100] bg-white border-b border-[#E8EDE4] shadow-sm">
                    <div className="flex overflow-x-auto no-scrollbar px-6 gap-10 py-5">
                        {[
                            { id: 'overview', label: lang === 'zh' ? '總覽' : 'Overview' },
                            { id: 'tips', label: lang === 'zh' ? '達人撇步' : 'Insider Tips' }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`text-[13px] font-black whitespace-nowrap relative transition-colors ${activeTab === tab.id ? 'text-tc-primary' : 'text-[#8E9285]'}`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <div className="absolute -bottom-[21px] left-0 right-0 h-1 bg-tc-primary rounded-t-full" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 3. Dynamic Content Area */}
                <div className="px-6 pt-10 pb-32 relative z-20">
                    {activeTab === 'overview' ? (
                        <div className="space-y-12">
                            {/* 3a. Stats Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { label: lang === 'zh' ? '預計花費' : 'COST', value: lang === 'zh' ? `約 $${item.price || 30}` : `EST. $${item.price || 30}`, icon: <div>$</div> },
                                    { label: lang === 'zh' ? '建議時長' : 'DURATION', value: item.duration || '2.5 hr', icon: <Clock size={18} /> },
                                    { label: lang === 'zh' ? '所在地區' : 'LOCATION', value: (item.region || 'MELBOURNE').toUpperCase(), icon: <MapPin size={18} /> },
                                    { label: lang === 'zh' ? '分類類型' : 'CATEGORY', value: (item.type || 'FOOD').toUpperCase(), icon: <Sparkles size={18} /> },
                                ].map((card, i) => (
                                    <div key={i} className="bg-white p-5 rounded-[24px] border border-[#E8EDE4]/60 flex items-center gap-4 shadow-sm">
                                        <div className="w-10 h-10 rounded-full bg-tc-primary/5 flex items-center justify-center text-tc-primary shrink-0">{card.icon}</div>
                                        <div className="min-w-0">
                                            <div className="text-[9px] font-black text-[#8E9285] uppercase tracking-wider truncate">{card.label}</div>
                                            <div className="text-[15px] font-black text-[#181D17] truncate">{card.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* 3b. Insider Insight */}
                            <div>
                                <h4 className="text-[20px] font-heading font-black text-[#181D17] mb-6">{lang === 'zh' ? '達人私藏' : "Insider Insight"}</h4>
                                <div className="bg-tc-primary/5 rounded-[32px] p-8 border border-tc-primary/10 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-6 text-tc-primary/10">
                                        <Lightbulb size={64} className="group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-tc-primary shadow-sm"><Lightbulb size={20} /></div>
                                            <span className="text-[12px] font-black text-tc-primary uppercase tracking-[0.2em]">{lang === 'zh' ? '專家推薦' : 'EXPERT TIP'}</span>
                                        </div>
                                        <p className="text-[16px] leading-[1.8] text-[#4A5548] font-bold italic">
                                            "{lang === 'zh' ? item.description : (item.descriptionEn || item.description)}"
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 3c. Map Preview */}
                            <div>
                                <h4 className="text-[20px] font-heading font-black text-[#181D17] mb-6">{lang === 'zh' ? '地理位置' : 'Location Info'}</h4>
                                <div className="h-56 w-full rounded-[28px] overflow-hidden border border-[#E8EDE4] relative shadow-inner">
                                    <MapContainer 
                                        center={position} 
                                        zoom={14} 
                                        style={{ height: '100%', width: '100%', zIndex: 1 }}
                                        zoomControl={false}
                                        dragging={false}
                                        scrollWheelZoom={false}
                                    >
                                        <TileLayer
                                            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                                            attribution='&copy; OpenStreetMap contributors'
                                        />
                                        <Marker position={position} />
                                    </MapContainer>
                                    <div className="absolute inset-0 bg-transparent flex items-center justify-center z-[10]">
                                        <button 
                                            onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.title)}`, '_blank')}
                                            className="bg-white/80 backdrop-blur-md px-6 py-2.5 rounded-full text-[13px] font-black text-[#181D17] shadow-lg border border-white hover:bg-white active:scale-95 transition-all"
                                        >
                                            {lang === 'zh' ? '在 Google Maps 中查看' : 'OPEN IN GOOGLE MAPS'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                             {/* Reviews/Tips Tab Content */}
                             <div className="bg-amber-50 rounded-[40px] p-8 border border-amber-100">
                                <p className="text-[15.5px] leading-[1.8] text-amber-900/80 font-medium italic">
                                    {lang === 'zh' 
                                        ? "這裡的氛圍非常地道，建議下午晚些時候來，光線照射進來非常美。"
                                        : "The atmosphere here is very authentic, recommend coming late afternoon when the light hits perfectly."}
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="mt-12">
                        <EngagementSocialBlock
                            author={creator || null}
                            primaryActionLabel={isAddedToPlan ? (lang === 'zh' ? '已加入！' : 'ADDED!') : (lang === 'zh' ? '加入計畫' : 'ADD TO PLAN')}
                            onPrimaryAction={handleOpenPlanSelector}
                            onCreatorClick={onCreatorClick}
                            lang={lang}
                            variant="spot"
                            isApplied={isAddedToPlan}
                        />
                    </div>
                </div>
            </div>

            {/* Plan Selector Drawer */}
            {onOpenPlanSelector === undefined && (
                <PlanSelectorDrawer
                    isOpen={isPlanSelectorOpen}
                    onClose={() => setIsPlanSelectorOpen(false)}
                    plans={plans}
                    onSelectPlan={(planId) => {
                        onAddItemToPlan?.(item as TravelItem, planId);
                        setIsPlanSelectorOpen(false);
                        setIsAddedToPlan(true);
                        setTimeout(() => setIsAddedToPlan(false), 3000);
                    }}
                    onCreatePlan={() => {
                        setIsPlanSelectorOpen(false);
                        onCreateNewPlan?.();
                    }}
                    lang={lang}
                />
            )}
        </div>
    );
};
