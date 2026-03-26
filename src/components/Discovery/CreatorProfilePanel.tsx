import React from 'react';
import { Creator, Template, LangType, TravelItem } from '../../types';
import { SAMPLE_ASSETS, TEMPLATES } from '../../data';
import { Users, FileText, MapPin, Star, ChevronRight, Share2, Plus } from 'lucide-react';

interface CreatorProfilePanelProps {
    creator: Creator;
    lang: LangType;
    onFollow: (id: string) => void;
    isFollowed: boolean;
    onTemplateClick: (tpl: Template) => void;
    onSpotClick: (item: TravelItem) => void;
}

export const CreatorProfilePanel: React.FC<CreatorProfilePanelProps> = ({
    creator,
    lang,
    onFollow,
    isFollowed,
    onTemplateClick,
    onSpotClick
}) => {
    // Filter templates and spots for this creator
    const creatorTemplates = TEMPLATES.filter(t => t.authorId === creator.id && !t.isHidden);
    const creatorSpots = SAMPLE_ASSETS.filter(a => a.authorId === creator.id).slice(0, 4);

    return (
        <div className="flex flex-col h-full bg-[#F7FBF0] overflow-y-auto no-scrollbar pb-32">
            {/* 1. Profile Header / Bio Section */}
            <div className="bg-white px-6 pt-10 pb-8 rounded-b-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border-b border-[#E8EDE4]">
                <div className="flex flex-col items-center text-center">
                    <div className="relative mb-5">
                        <div className="w-28 h-28 rounded-full border-[6px] border-[#F1F3EE] p-1.5 bg-white shadow-xl">
                            <img 
                                src={creator.avatar} 
                                className="w-full h-full rounded-full object-cover" 
                                alt={creator.name} 
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-9 h-9 bg-bg-primary rounded-full border-4 border-white flex items-center justify-center text-white">
                            <Plus size={18} strokeWidth={3} />
                        </div>
                    </div>

                    <h1 className="text-[28px] font-black text-[#181D17] leading-tight mb-1">
                        {lang === 'zh' ? creator.name : (creator.nameEn || creator.name)}
                    </h1>
                    
                    <p className="text-[11px] font-black text-bg-primary uppercase tracking-[0.2em] mb-4">
                        {lang === 'zh' ? (creator.role || '資深旅行家') : (creator.roleEn || creator.role || 'Senior Traveler')}
                    </p>

                    <div className="flex items-center gap-6 mb-6">
                        <div className="flex flex-col items-center">
                            <span className="text-lg font-black text-[#181D17]">{(creator.followers / 1000).toFixed(1)}k</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{lang === 'zh' ? '追蹤者' : 'FOLLOWERS'}</span>
                        </div>
                        <div className="w-px h-8 bg-gray-100" />
                        <div className="flex flex-col items-center">
                            <span className="text-lg font-black text-[#181D17]">{creatorTemplates.length}</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{lang === 'zh' ? '行程' : 'PLANS'}</span>
                        </div>
                        <div className="w-px h-8 bg-gray-100" />
                        <div className="flex flex-col items-center">
                            <span className="text-lg font-black text-[#181D17]">4.9</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{lang === 'zh' ? '評分' : 'RATING'}</span>
                        </div>
                    </div>

                    <p className="text-[15px] text-[#4A5548] leading-relaxed max-w-[320px] mb-8">
                        {lang === 'zh' ? creator.description : (creator.descriptionEn || creator.description)}
                    </p>

                    <div className="flex items-center gap-3 w-full max-w-[320px]">
                        <button 
                            onClick={() => onFollow(creator.id)}
                            className={`flex-1 h-12 rounded-xl font-bold transition-all ${
                                isFollowed 
                                    ? 'bg-[#F1F3EE] text-[#4A5548]' 
                                    : 'bg-bg-primary text-white shadow-lg active:scale-95'
                            }`}
                        >
                            {isFollowed ? (lang === 'zh' ? '正在追蹤' : 'FOLLOWING') : (lang === 'zh' ? '加入追蹤' : 'FOLLOW')}
                        </button>
                        <button className="w-12 h-12 rounded-xl border-2 border-[#E8EDE4] flex items-center justify-center text-[#181D17] active:scale-95 transition-transform">
                            <Share2 size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. Content Sections */}
            <div className="px-6 pt-10 space-y-12">
                {/* Itineraries Section */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-bg-primary shadow-sm">
                                <FileText size={16} />
                            </div>
                            <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">{lang === 'zh' ? '精選行程' : 'DESIGNED PLANS'}</h2>
                        </div>
                        <button className="text-[11px] font-black text-bg-primary tracking-widest uppercase">{lang === 'zh' ? '查看全部' : 'SEE ALL'}</button>
                    </div>

                    <div className="space-y-4">
                        {creatorTemplates.map(tpl => (
                            <button 
                                key={tpl.id}
                                onClick={() => onTemplateClick(tpl)}
                                className="w-full bg-white p-4 rounded-2xl border border-[#E8EDE4] flex items-center gap-4 text-left hover:border-bg-primary transition-colors active:scale-[0.98]"
                            >
                                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                                    <img src={tpl.coverImage} className="w-full h-full object-cover" alt={tpl.name} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-[#181D17] truncate">{lang === 'zh' ? tpl.name : (tpl.nameEn || tpl.name)}</h3>
                                    <p className="text-xs text-gray-400 mt-1">{tpl.duration} {lang === 'zh' ? '天行程' : 'Days'} · {tpl.region}</p>
                                </div>
                                <ChevronRight size={18} className="text-gray-300" />
                            </button>
                        ))}
                    </div>
                </section>

                {/* Favorite Spots Grid */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-bg-primary shadow-sm">
                                <MapPin size={16} />
                            </div>
                            <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">{lang === 'zh' ? '口袋名單' : 'FAVORITE SPOTS'}</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {creatorSpots.map(spot => (
                            <button 
                                key={spot.id}
                                onClick={() => onSpotClick(spot as TravelItem)}
                                className="group text-left"
                            >
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-2 relative">
                                    <img src={spot.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={spot.title} />
                                    <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-white/90 backdrop-blur rounded-lg text-[10px] font-black flex items-center gap-0.5">
                                        <Star size={10} fill="#FBC02D" className="text-[#FBC02D]" />
                                        <span>{spot.rating}</span>
                                    </div>
                                </div>
                                <h3 className="font-bold text-sm text-[#181D17] truncate">{lang === 'zh' ? spot.title : (spot.titleEn || spot.title)}</h3>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{spot.type}</p>
                            </button>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};
