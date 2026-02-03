import React from 'react';
import { X, ExternalLink, UserPlus, UserCheck, MapPin, Lock } from 'lucide-react';
import { Creator, Template } from '../types';

interface CreatorProfileProps {
    creator: Creator;
    templates: Template[];
    isOpen: boolean;
    onClose: () => void;
    isSubscribed: boolean;
    onToggleSubscribe: () => void;
    onExploreTemplate: (template: Template) => void;
    lang?: 'zh' | 'en';
}

export const CreatorProfile: React.FC<CreatorProfileProps> = ({
    creator,
    templates,
    isOpen,
    onClose,
    isSubscribed,
    onToggleSubscribe,
    onExploreTemplate,
    lang = 'zh'
}) => {
    if (!isOpen) return null;

    // Calculate highest tier from creator's templates
    const getHighestTier = () => {
        const tiers = templates.map(t => t.tier).filter(Boolean);
        if (tiers.includes('official')) return 'official';
        if (tiers.includes('creator')) return 'creator';
        if (tiers.includes('community')) return 'community';
        return null;
    };
    const highestTier = getHighestTier();

    // Calculate total copied count
    const totalCopied = templates.reduce((sum, t) => sum + (t.copiedCount || 0), 0);

    return (
        <div className="fixed inset-0 z-[60] flex justify-end pointer-events-none">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-auto transition-opacity"
                onClick={onClose}
            />

            {/* Slide-out Panel */}
            <div className="bg-white w-full max-w-md h-full shadow-2xl overflow-y-auto pointer-events-auto relative animate-slide-in-right flex flex-col">

                {/* Header Image/Banner Area */}
                <div className="h-32 bg-gradient-to-r from-teal-500 to-emerald-500 relative shrink-0">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-black/20 text-white rounded-full hover:bg-black/40 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Profile Info */}
                <div className="px-6 -mt-12 flex flex-col items-center border-b border-gray-100 pb-6">
                    <div className="w-24 h-24 rounded-full border-4 border-white bg-white shadow-md text-6xl flex items-center justify-center overflow-hidden">
                        {creator.avatar}
                    </div>

                    <div className="flex items-center gap-2 mt-3">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {lang === 'en' && creator.nameEn ? creator.nameEn : creator.name}
                        </h2>
                        {/* Dynamic Tier Badge */}
                        {highestTier && (
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${highestTier === 'official' ? 'bg-amber-100 text-amber-700 border border-amber-300' :
                                highestTier === 'creator' ? 'bg-teal-100 text-teal-700 border border-teal-300' :
                                    'bg-gray-100 text-gray-600 border border-gray-300'
                                }`}>
                                {highestTier === 'official' && (lang === 'zh' ? '🏆 官方精選' : '🏆 Official Pick')}
                                {highestTier === 'creator' && (lang === 'zh' ? '⭐ 認證達人' : '⭐ Verified Creator')}
                                {highestTier === 'community' && (lang === 'zh' ? '👤 社群貢獲者' : '👤 Community')}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            <span className="font-bold text-gray-800">{creator.followers.toLocaleString()}</span> {lang === 'zh' ? '粉絲' : 'Followers'}
                        </span>
                        <span>•</span>
                        <span>{templates.length} {lang === 'zh' ? '個行程' : 'Plans'}</span>
                        {totalCopied > 0 && (
                            <>
                                <span>•</span>
                                <span className="text-teal-600">🔗 {totalCopied.toLocaleString()} {lang === 'zh' ? '累計套用' : 'uses'}</span>
                            </>
                        )}
                    </div>

                    <p className="mt-3 text-center text-gray-600 leading-relaxed text-sm px-4">
                        {lang === 'en' && creator.descriptionEn ? creator.descriptionEn : creator.description}
                    </p>

                    <div className="flex gap-2 mt-4 flex-wrap justify-center">
                        {(lang === 'en' && creator.tagsEn ? creator.tagsEn : creator.tags).map(tag => (
                            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3 mt-6 w-full px-4">
                        <button
                            onClick={onToggleSubscribe}
                            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold transition-all ${isSubscribed
                                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                : 'bg-teal-600 text-white hover:bg-teal-700 shadow-md hover:shadow-lg'
                                }`}
                        >
                            {isSubscribed ? <UserCheck size={18} /> : <UserPlus size={18} />}
                            {isSubscribed
                                ? (lang === 'zh' ? '已追蹤' : 'Subscribed')
                                : (lang === 'zh' ? '追蹤' : 'Subscribe')}
                        </button>

                        {creator.blogUrl && (
                            <a
                                href={creator.blogUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 border border-gray-200 rounded-lg text-gray-500 hover:text-teal-600 hover:border-teal-200 transition-all flex items-center justify-center"
                                title="Visit Blog"
                            >
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Templates Grid */}
                <div className="flex-1 p-6 bg-gray-50">
                    <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <MapPin size={18} className="text-teal-600" />
                        {lang === 'zh' ? '創作的行程' : 'Created Plans'}
                    </h3>

                    <div className="grid grid-cols-1 gap-4">
                        {templates.map(template => (
                            <div
                                key={template.id}
                                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all cursor-pointer relative"
                                onClick={() => {
                                    if (template.isLocked && !template.purchased) {
                                        // Mock Purchase Interaction
                                        if (confirm(`Unlock this premium plan for $${template.price}? (Mock Payment)`)) {
                                            template.purchased = true; // Local mutation for demo
                                            template.isLocked = false;
                                            onExploreTemplate({ ...template, isLocked: false, purchased: true }); // Force update for viewer
                                        }
                                    } else {
                                        onExploreTemplate(template);
                                    }
                                }}
                            >
                                <div className="h-32 bg-gray-200 relative overflow-hidden">
                                    {/* Mock Image Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-80 ${template.isLocked && !template.purchased ? 'grayscale' : ''}`} />

                                    {/* Lock Overlay */}
                                    {template.isLocked && !template.purchased && (
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
                                            <div className="bg-white/20 p-3 rounded-full backdrop-blur-md border border-white/30 text-white">
                                                <Lock size={24} />
                                            </div>
                                        </div>
                                    )}

                                    <div className="absolute top-2 right-2 bg-black/40 text-white px-2 py-1 rounded text-xs font-medium backdrop-blur-sm">
                                        {template.duration} {lang === 'zh' ? '天' : 'Days'}
                                    </div>

                                    {/* Early Bird Badge */}
                                    {template.price && template.originalPrice && template.price < template.originalPrice && (
                                        <div className="absolute top-2 left-2 bg-rose-500 text-white px-2 py-1 rounded-full text-[10px] font-bold shadow-sm animate-pulse flex items-center gap-1">
                                            🔥 Early Bird
                                        </div>
                                    )}

                                    {/* Price Tag for Premium */}
                                    {template.price && (
                                        <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
                                            <div className="bg-teal-500 text-white px-2 py-0.5 rounded-full text-xs font-bold shadow-sm">
                                                ${template.price}
                                            </div>
                                            {template.originalPrice && (
                                                <>
                                                    <div className="text-[10px] text-white/80 line-through decoration-white/80 font-medium bg-black/20 px-1 rounded">
                                                        ${template.originalPrice}
                                                    </div>
                                                    {/* Discount Badge */}
                                                    {template.price < template.originalPrice && (
                                                        <div className="bg-yellow-400 text-yellow-900 text-[10px] px-1.5 py-0.5 rounded font-black shadow-sm transform -rotate-2">
                                                            {Math.round((1 - template.price / template.originalPrice) * 100)}% OFF
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-gray-800 group-hover:text-teal-600 transition-colors flex items-center gap-1.5">
                                        {template.isLocked && !template.purchased && <Lock size={14} className="text-gray-400" />}
                                        {lang === 'en' && template.nameEn ? template.nameEn : template.name}
                                    </h4>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        {(lang === 'en' && template.tagsEn ? template.tagsEn : template.tags).slice(0, 3).map(tag => (
                                            <span key={tag} className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                                        <div className="flex items-center gap-1 text-yellow-500">
                                            ⭐ <span className="text-gray-600">{template.rating}</span>
                                        </div>
                                        {template.isLocked && !template.purchased ? (
                                            <span className="text-teal-600 font-bold">{lang === 'zh' ? '點擊解鎖' : 'Tap to Unlock'}</span>
                                        ) : (
                                            <span>{lang === 'zh' ? '查看詳情' : 'View Details'}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
