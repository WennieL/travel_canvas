import React from 'react';
import { Heart, MessageCircle, Layers, Share2, Check, Sparkles, Star } from 'lucide-react';
import { TRANSLATIONS } from '../../data/translations';

interface EngagementSocialBlockProps {
    author: {
        id: string;
        name: string;
        nameEn?: string;
        avatar?: string;
        role?: string;
        roleEn?: string;
        description?: string;
        descriptionEn?: string;
    } | null;
    primaryActionLabel: string;
    onPrimaryAction: () => void;
    likes?: number;
    applied?: number;
    isApplied?: boolean;
    variant?: 'template' | 'spot';
    onCreatorClick?: (id: string) => void;
    onCommentClick?: () => void;
    commentCount?: number;
    isFavorited?: boolean;
    onFavoriteClick?: () => void;
    lang?: string;
}

export const EngagementSocialBlock: React.FC<EngagementSocialBlockProps> = ({
    author,
    primaryActionLabel,
    onPrimaryAction,
    likes = 92400,
    applied = 128,
    isApplied = false,
    variant = 'template',
    onCreatorClick,
    onCommentClick,
    commentCount = 0,
    isFavorited = false,
    onFavoriteClick,
    lang = 'zh'
}) => {
    const t = TRANSLATIONS[lang as 'zh' | 'en'] || TRANSLATIONS.zh;

    // Derived values
    const displayName = lang === 'zh' ? (author?.name) : (author?.nameEn || author?.name);
    const displayBio = lang === 'zh' ? author?.description : (author?.descriptionEn || author?.description);
    const displayBy = (author?.id ? (author.nameEn || author.name) : (lang === 'zh' ? '旅遊達人' : 'Travel Expert')).toUpperCase();

    return (
        <div className="mt-8">
            {/* BLOCK 1: Creator Spotlight (Soft Dark Glass) */}
            <div className="-mx-6 px-16 py-12 bg-[#3D443B] relative overflow-hidden group">
                {/* Subtle decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/20 rounded-full -mr-16 -mt-16 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />

                {/* Creator Content */}
                <div className="relative z-10 space-y-6 mb-12">
                    {/* Top Row: Identity */}
                    <div className="flex items-center gap-5">
                        <div className="relative cursor-pointer" onClick={() => author && onCreatorClick?.(author.id)}>
                            <img
                                src={author?.avatar || `https://i.pravatar.cc/100?u=${author?.id}`}
                                className="w-[72px] h-[72px] rounded-full object-cover border-2 border-white/20 shadow-xl"
                                alt="creator"
                            />
                            <div className="absolute -bottom-0.5 -right-0.5 w-7 h-7 bg-amber-400 rounded-full border-4 border-[#3D443B] flex items-center justify-center">
                                <Check size={12} className="text-black font-black" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h4
                                className="text-[24px] font-black text-white leading-none cursor-pointer hover:text-emerald-400 transition-colors"
                                onClick={() => author && onCreatorClick?.(author.id)}
                            >
                                {displayName || (lang === 'zh' ? '旅遊達人' : 'Travel Expert')}
                            </h4>
                            <div className="text-[11px] font-black text-white/40 uppercase tracking-[0.25em] mt-2 font-sans">
                                BY {displayBy}
                            </div>
                        </div>
                    </div>

                    {/* Bottom: Bio */}
                    <p className="text-[15.5px] leading-[1.8] text-white/90 font-medium px-0.5 max-w-[98%]">
                        {displayBio || (lang === 'zh' ? '分享在地最地道的旅行視角。' : 'Sharing the most authentic local travel perspectives.')}
                    </p>
                </div>

                {/* Primary Action Button */}
                <div className="px-1">
                    <button
                        onClick={onPrimaryAction}
                        className="w-full bg-[#00A699] hover:bg-[#008F83] text-white h-[60px] rounded-full font-black text-[17px] flex items-center justify-center gap-3.5 shadow-[0_12px_35px_rgba(0,166,153,0.35)] active:scale-[0.98] transition-all relative z-10"
                    >
                        {isApplied ? (
                            <>
                                <div className="flex items-center gap-2 text-emerald-200">
                                    <Check size={20} className="animate-in zoom-in duration-300" />
                                    <span>{lang === 'zh' ? '已加入計畫！' : 'ADDED TO PLAN!'}</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <Sparkles size={20} />
                                {primaryActionLabel}
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* BLOCK 2: Social Proof (Light Plane) */}
            <div className="pt-10 pb-12 space-y-10 px-2 bg-[#F7FBF0] border-t border-[#E8EDE4]">
                {/* Statistics Bar */}
                <div className="flex items-center justify-center">
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <img
                                    key={i}
                                    src={`https://i.pravatar.cc/100?u=${i + 10}`}
                                    className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
                                    alt="user"
                                />
                            ))}
                            <div className="w-8 h-8 rounded-full bg-[#E8EDE4] border-2 border-white flex items-center justify-center text-[10px] font-black text-[#8E9285]">
                                +9
                            </div>
                        </div>
                        <div className="text-[14px] font-bold text-[#181D17]/50 tracking-tight">
                            {likes} {lang === 'zh' ? '收藏' : 'likes'} <span className="mx-2 opacity-20">•</span> {applied} {lang === 'zh' ? '人都在用' : 'applied'}
                        </div>
                    </div>
                </div>

                {/* Interaction Pill Bar */}
                <div className="flex items-center justify-center">
                    <div className="bg-white h-16 px-10 rounded-full flex items-center gap-12 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-[#E8EDE4] active:scale-95 transition-transform">
                        <button 
                            onClick={onFavoriteClick}
                            className={`transition-all active:scale-125 ${isFavorited ? 'text-red-500' : 'text-[#181D17]/30 hover:text-red-500'}`}
                        >
                            <Heart 
                                size={22} 
                                fill={isFavorited ? "currentColor" : "none"} 
                                strokeWidth={isFavorited ? 2.5 : 2}
                            />
                        </button>
                        <button 
                            onClick={onCommentClick}
                            className={`${commentCount > 0 ? 'text-[#00A699]' : 'text-[#181D17]/30'} hover:text-emerald-700 transition-all flex items-center gap-1.5`}
                        >
                            <MessageCircle size={22} fill={commentCount > 0 ? "rgba(0, 166, 153, 0.1)" : "none"} />
                            {commentCount > 0 && <span className="text-[14px] font-black">{commentCount}</span>}
                        </button>
                        <button className="text-[#00A699] hover:text-emerald-600 transition-all flex items-center gap-2.5">
                            <Layers size={22} />
                            <span className="text-[16px] font-black">{applied}</span>
                        </button>
                        <button className="text-[#181D17]/30 hover:text-[#181D17] transition-all">
                            <Share2 size={22} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
