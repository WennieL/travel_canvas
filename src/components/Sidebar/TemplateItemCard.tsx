import React from 'react';
import { Star } from 'lucide-react';
import { Template, LangType } from '../../types';

interface TemplateItemCardProps {
    template: Template;
    creator?: any;
    lang: LangType;
    subscribedCreators: string[];
    t: any;
    onPreview: () => void;
    onCreatorClick: (id: string) => void;
    onApply: (tpl: any) => void;
}

export const TemplateItemCard: React.FC<TemplateItemCardProps> = ({
    template, creator, lang, subscribedCreators, t, onPreview, onCreatorClick, onApply
}) => {
    const tName = (lang === 'en' && template.nameEn) ? template.nameEn : template.name;
    const tAuthor = (lang === 'en')
        ? (creator?.nameEn || template.authorEn || creator?.name || template.author)
        : (creator?.name || template.author);
    const tTags = (lang === 'en' && template.tagsEn) ? template.tagsEn : template.tags;

    return (
        <div
            className="p-3 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow bg-white relative group cursor-pointer hover:border-teal-200"
            onClick={onPreview}
        >
            <div className="flex justify-between items-start mb-1 gap-2">
                <h3 className="font-bold text-gray-800 text-sm flex-1 leading-tight">
                    {tName}
                </h3>
                <div className="flex flex-col items-end gap-1">
                    {template.price ? (
                        <div className="flex items-center gap-1">
                            {template.originalPrice && (
                                <span className="bg-yellow-400 text-yellow-900 text-[9px] px-1.5 py-0.5 rounded font-bold whitespace-nowrap transform -rotate-2">
                                    {Math.round((1 - template.price / template.originalPrice) * 100)}% OFF
                                </span>
                            )}
                        </div>
                    ) : (
                        <span className="bg-gray-100 text-gray-500 text-[10px] px-1.5 py-0.5 rounded font-bold whitespace-nowrap border border-gray-200">
                            FREE
                        </span>
                    )}

                    {template.tier && (
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium whitespace-nowrap shrink-0 ${template.tier === 'official' ? 'text-amber-700 bg-amber-50' :
                            template.tier === 'creator' ? 'text-teal-700 bg-teal-50' : 'text-gray-500 bg-gray-50'
                            }`}>
                            {template.tier === 'official' && '🏆 Official'}
                            {template.tier === 'creator' && '⭐ Creator'}
                            {template.tier === 'community' && '👤 Community'}
                        </span>
                    )}

                    {template.price && template.originalPrice && template.price < template.originalPrice && (
                        <span className="text-[9px] bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded font-bold whitespace-nowrap border border-rose-200 animate-pulse">
                            🔥 Early Bird
                        </span>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-2">
                {template.copiedCount && template.copiedCount > 0 && (
                    <span className="flex items-center gap-0.5">
                        🔗 <span className="font-medium">{template.copiedCount.toLocaleString()}</span> {lang === 'en' ? 'applied' : '已套用'}
                    </span>
                )}
                <span className="flex items-center gap-0.5 text-yellow-600">
                    <Star size={10} fill="currentColor" />
                    <span className="font-medium">{template.rating || '4.5'}</span>
                </span>
            </div>

            <div
                onClick={(e) => {
                    e.stopPropagation();
                    onCreatorClick(template.authorId);
                }}
                className="flex items-center gap-2 text-xs text-gray-500 mb-2 p-1 -ml-1 rounded hover:bg-gray-50 cursor-pointer transition-colors w-max max-w-full"
                title="View Creator Profile"
            >
                <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] overflow-hidden shrink-0 border border-gray-100">
                    {creator?.avatar || '👤'}
                </div>
                <span className="truncate font-medium text-gray-600 group-hover:text-teal-600 transition-colors">
                    {tAuthor}
                </span>
                {subscribedCreators.includes(template.authorId) && (
                    <span className="ml-1 text-[10px] text-teal-600 bg-teal-50 px-1 py-0.5 rounded-full flex items-center">
                        ✓
                    </span>
                )}
            </div>

            <div className="flex flex-wrap gap-1 mb-3">
                {tTags && tTags.map(tag => (
                    <span key={tag} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        {tag}
                    </span>
                ))}
                <span className="text-[10px] text-gray-400 px-1 py-0.5 ml-auto">
                    {template.duration} {t.day}
                </span>
            </div>

            {template.isLocked && !template.purchased ? (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onApply(template);
                    }}
                    className="w-full py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs rounded hover:from-amber-600 hover:to-orange-600 transition-colors font-bold flex items-center justify-center gap-1"
                >
                    🎁 Beta 免費解鎖
                </button>
            ) : (
                <button onClick={(e) => {
                    e.stopPropagation();
                    onApply(template);
                }} className="w-full py-1.5 bg-gray-50 text-teal-600 text-xs rounded hover:bg-teal-50 transition-colors font-medium">
                    {t.apply || 'Apply'}
                </button>
            )}
        </div>
    );
};
