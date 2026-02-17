import React from 'react';
import { X, UserPlus, UserCheck, Globe, Star, MapPin, ExternalLink, Calendar, Compass } from 'lucide-react';
import { Creator, Template, LangType } from '../../types';
import { TEMPLATES } from '../../data';

interface CreatorProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    creator: Creator | null;
    isSubscribed: boolean;
    onToggleSubscribe: (creatorId: string) => void;
    onPreviewTemplate: (template: Template) => void;
    lang?: LangType;
    t: any;
}

export const CreatorProfileModal: React.FC<CreatorProfileModalProps> = ({
    isOpen,
    onClose,
    creator,
    isSubscribed,
    onToggleSubscribe,
    onPreviewTemplate,
    lang = 'zh',
    t
}) => {
    if (!isOpen || !creator) return null;

    const creatorTemplates = TEMPLATES.filter(tpl => tpl.authorId === creator.id);

    return (
        <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-all z-20"
                >
                    <X size={20} />
                </button>

                {/* Hero Header Section */}
                <div className="relative h-48 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-indigo-600 to-purple-700" />
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                    {/* Floating Stats */}
                    <div className="absolute bottom-6 left-8 flex items-center gap-6 z-10">
                        <div className="w-24 h-24 rounded-full border-4 border-white bg-white shadow-2xl overflow-hidden flex items-center justify-center text-5xl">
                            {creator.avatar || '👤'}
                        </div>
                        <div className="pb-2">
                            <h2 className="text-3xl font-black text-white drop-shadow-md mb-1">
                                {lang === 'zh' ? creator.name : creator.nameEn || creator.name}
                            </h2>
                            <div className="flex items-center gap-3">
                                <span className="text-white/80 text-xs font-black uppercase tracking-widest">{creator.followers.toLocaleString()} Followers</span>
                                <div className="w-1 h-1 rounded-full bg-white/40" />
                                <span className="text-white/80 text-xs font-black uppercase tracking-widest">{creatorTemplates.length} Templates</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-8 pt-10 no-scrollbar">

                    {/* Bio & Actions */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
                        <div className="flex-1">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">{t.aboutCreator || 'About Creator'}</h3>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                {lang === 'zh' ? creator.description : creator.descriptionEn || creator.description}
                            </p>

                            {/* Creator Tags */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {(lang === 'zh' ? (creator.tags || []) : (creator.tagsEn || creator.tags || [])).map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-500 rounded-full text-[10px] font-black uppercase tracking-wider border border-gray-100">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 min-w-[200px]">
                            <button
                                onClick={() => onToggleSubscribe(creator.id)}
                                className={`w-full py-3 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95
                                    ${isSubscribed
                                        ? 'bg-gray-100 text-gray-500 hover:bg-gray-200 shadow-none'
                                        : 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:shadow-teal-200/50'
                                    }`}
                            >
                                {isSubscribed ? <UserCheck size={18} /> : <UserPlus size={18} />}
                                {isSubscribed ? (t.subscribed || 'Following') : (t.subscribe || 'Follow Creator')}
                            </button>

                            {creator.blogUrl && (
                                <a
                                    href={creator.blogUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 bg-white border-2 border-gray-100 text-gray-600 rounded-2xl font-black text-sm hover:border-teal-200 hover:text-teal-600 transition-all flex items-center justify-center gap-2"
                                >
                                    <Globe size={18} />
                                    Portfolio
                                    <ExternalLink size={14} className="opacity-40" />
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-10">
                        <div className="flex items-center gap-2 mb-6">
                            <Compass size={18} className="text-teal-600" />
                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{t.expertsTemplates || 'Creator Templates'}</h3>
                        </div>

                        {/* Template Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {creatorTemplates.map(tpl => (
                                <button
                                    key={tpl.id}
                                    onClick={() => onPreviewTemplate(tpl)}
                                    className="text-left group flex flex-col"
                                >
                                    <div className="relative aspect-video rounded-3xl overflow-hidden mb-3 bg-gray-100 border-2 border-white shadow-md group-hover:shadow-xl group-hover:translate-y-[-2px] transition-all">
                                        {tpl.coverImage ? (
                                            <img src={tpl.coverImage} alt={tpl.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-teal-50 text-teal-200">
                                                <Calendar size={32} />
                                            </div>
                                        )}
                                        <div className="absolute top-3 left-3">
                                            <div className="bg-white/90 backdrop-blur-md px-2 py-1 rounded-full border border-white/50 flex items-center gap-1 shadow-sm">
                                                <Star size={10} className="text-amber-500 fill-amber-500" />
                                                <span className="text-[9px] font-black text-gray-800">{tpl.rating || '4.5'}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="font-black text-gray-900 line-clamp-1 group-hover:text-teal-600 transition-colors">
                                        {lang === 'zh' ? tpl.name : tpl.nameEn || tpl.name}
                                    </h4>
                                    <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                                        <span>{tpl.duration} {lang === 'zh' ? '天' : 'Days'}</span>
                                        <div className="w-1 h-1 rounded-full bg-gray-300" />
                                        <span>{tpl.region.toUpperCase()}</span>
                                    </div>
                                </button>
                            ))}
                            {creatorTemplates.length === 0 && (
                                <div className="col-span-2 py-12 text-center bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-100">
                                    <p className="text-gray-400 font-bold italic">No templates shared yet.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
