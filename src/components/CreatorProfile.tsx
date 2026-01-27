import React from 'react';
import { X, ExternalLink, UserPlus, UserCheck, MapPin } from 'lucide-react';
import { Creator, Template } from '../types';

interface CreatorProfileProps {
    creator: Creator;
    templates: Template[];
    isOpen: boolean;
    onClose: () => void;
    isSubscribed: boolean;
    onToggleSubscribe: () => void;
    onExploreTemplate: (template: Template) => void;
}

export const CreatorProfile: React.FC<CreatorProfileProps> = ({
    creator,
    templates,
    isOpen,
    onClose,
    isSubscribed,
    onToggleSubscribe,
    onExploreTemplate
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
                        <h2 className="text-2xl font-bold text-gray-800">{creator.name}</h2>
                        {/* Dynamic Tier Badge */}
                        {highestTier && (
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${highestTier === 'official' ? 'bg-amber-100 text-amber-700 border border-amber-300' :
                                    highestTier === 'creator' ? 'bg-teal-100 text-teal-700 border border-teal-300' :
                                        'bg-gray-100 text-gray-600 border border-gray-300'
                                }`}>
                                {highestTier === 'official' && '🏆 官方精選'}
                                {highestTier === 'creator' && '⭐ 認證達人'}
                                {highestTier === 'community' && '👤 社群貢獻者'}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            <span className="font-bold text-gray-800">{creator.followers.toLocaleString()}</span> Followers
                        </span>
                        <span>•</span>
                        <span>{templates.length} Plans</span>
                        {totalCopied > 0 && (
                            <>
                                <span>•</span>
                                <span className="text-teal-600">🔗 {totalCopied.toLocaleString()} 累計套用</span>
                            </>
                        )}
                    </div>

                    <p className="mt-3 text-center text-gray-600 leading-relaxed text-sm px-4">
                        {creator.description}
                    </p>

                    <div className="flex gap-2 mt-4 flex-wrap justify-center">
                        {creator.tags.map(tag => (
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
                            {isSubscribed ? 'Subscribed' : 'Subscribe'}
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
                        Created Plans
                    </h3>

                    <div className="grid grid-cols-1 gap-4">
                        {templates.map(template => (
                            <div
                                key={template.id}
                                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all cursor-pointer"
                                onClick={() => {
                                    onExploreTemplate(template);
                                    // onClose(); // Optional: close profile when selecting? Maybe keep open.
                                }}
                            >
                                <div className="h-32 bg-gray-200 relative overflow-hidden">
                                    {/* Mock Image Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-80`} />
                                    <div className="absolute top-2 right-2 bg-black/40 text-white px-2 py-1 rounded text-xs font-medium backdrop-blur-sm">
                                        {template.duration} Days
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-gray-800 group-hover:text-teal-600 transition-colors">
                                        {template.name}
                                    </h4>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        {template.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                                        <div className="flex items-center gap-1 text-yellow-500">
                                            ⭐ <span className="text-gray-600">{template.rating}</span>
                                        </div>
                                        <span>View Details</span>
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
