import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { X, MapPin, Clock, Star, Tag, MousePointerClick, Navigation, Edit2, Save, Undo2, Share2, MoreHorizontal, Check, Plus, Heart, Users } from 'lucide-react';
import { ScheduleItem, TravelItem, ViewMode } from '../../types';
import { SAMPLE_CREATORS } from '../../data';
import { ALL_REGIONAL_ASSETS } from '../../data/assets';
import L from 'leaflet';

// Fix leaflet icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface ItemDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: ScheduleItem | TravelItem | null;
    t: any;
    lang?: 'zh' | 'en';
    onUpdateScheduleItem?: (instanceId: string, updates: Partial<ScheduleItem>) => void;
    onUpdateCustomAsset?: (id: string, updates: Partial<TravelItem>) => void;
    setViewMode?: (mode: ViewMode) => void;
}

const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ isOpen, onClose, item, t, lang = 'zh', onUpdateScheduleItem, onUpdateCustomAsset, setViewMode }) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [editedTitle, setEditedTitle] = React.useState('');
    const [editedAddress, setEditedAddress] = React.useState('');
    const [editedDescription, setEditedDescription] = React.useState('');
    const [editedPrice, setEditedPrice] = React.useState<number>(0);
    const [syncToLibrary, setSyncToLibrary] = React.useState(false);
    
    // viewedRecId tracks which recommendation is currently being looked at in the modal
    const [viewedRecId, setViewedRecId] = React.useState<string | null>(null);

    // Reset edit state when modal opens/closes or item changes
    React.useEffect(() => {
        if (isOpen && item) {
            setEditedTitle(item.title);
            setEditedAddress(item.address || '');
            setEditedDescription(item.description || '');
            setEditedPrice(item.price || 0);
            setIsEditing(false);
            
            // Default to the item's selected recommendation or its primary author
            const initialRecId = (item as ScheduleItem).selectedRecommendationId || item.authorId || null;
            setViewedRecId(initialRecId);
        }
    }, [isOpen, item]);

    if (!isOpen || !item) return null;

    const isCustom = (item as ScheduleItem).isCustom;

    const handleSave = () => {
        if (!onUpdateScheduleItem || !(item as ScheduleItem).instanceId) return;

        const updates = {
            title: editedTitle,
            address: editedAddress,
            description: editedDescription,
            price: editedPrice
        };

        onUpdateScheduleItem((item as ScheduleItem).instanceId, updates);

        if (syncToLibrary && onUpdateCustomAsset && item.id) {
            onUpdateCustomAsset(item.id, updates);
        }

        setIsEditing(false);
        onClose();
    };

    const hasCoordinates = item.lat && item.lng;
    const position: [number, number] = hasCoordinates ? [item.lat!, item.lng!] : [35.6762, 139.6503]; // Default Tokyo

    const handleNavigate = () => {
        const query = hasCoordinates ? `${item.lat},${item.lng}` : (editedAddress || item.title);
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
    };

    // IG-style Data derivation
    // Get the recommendation currently being viewed
    const recommendations = (item as TravelItem).recommendations || [];
    const viewedRec = viewedRecId ? recommendations.find(r => r.id === viewedRecId) : null;
    
    // If we're looking at a specific recommendation, override default values
    const authorId = viewedRecId || item.authorId;
    const author = authorId ? SAMPLE_CREATORS.find(c => c.id === authorId) : null;
    
    // Unified Official Naming
    const getOfficialName = (l: string) => l === 'zh' ? 'Travel Canvas 官方指南' : 'Travel Canvas Official Guide';

    const displayAuthorName = viewedRec?.author || (author ? (lang === 'en' && author.nameEn ? author.nameEn : author.name) : getOfficialName(lang));
    
    const displayName = lang === 'en' && (item as any).titleEn ? (item as any).titleEn : item.title;
    const displayAddress = lang === 'en' && (item as any).addressEn ? (item as any).addressEn : (item.address || '');
    
    // Description can be recommendation-specific or general
    const rawDescription = viewedRec?.description || item.description || '';
    const rawDescriptionEn = viewedRec?.descriptionEn || (item as any).descriptionEn || '';
    const displayDescription = lang === 'en' && rawDescriptionEn ? rawDescriptionEn : rawDescription;
    
    const displayDuration = viewedRec?.duration || item.duration;
    const displayDurationFormatted = lang === 'en' && displayDuration ? displayDuration.replace('小時', 'h').replace('分鐘', 'm').replace(/分$/, 'm') : displayDuration;
    
    const displayImage = viewedRec?.coverImage || item.coverImage || (item as any).image;
    const displayPrice = viewedRec?.pricing !== undefined ? viewedRec.pricing : (item.price || 0);

    const isScheduleItem = !!(item as ScheduleItem).instanceId;
    const currentAppliedRecId = (item as ScheduleItem).selectedRecommendationId || item.authorId;
    const canRemix = isScheduleItem && viewedRecId && viewedRecId !== currentAppliedRecId;

    const handleApplyTip = () => {
        if (!onUpdateScheduleItem || !(item as ScheduleItem).instanceId || !viewedRec) return;
        
        onUpdateScheduleItem((item as ScheduleItem).instanceId, {
            selectedRecommendationId: viewedRec.id,
            activeRecommendation: viewedRec,
            // Also update core fields for immediate UI feedback if needed
            price: viewedRec.pricing,
            duration: viewedRec.duration,
            insiderTip: viewedRec.insiderTip
        });
        
        if (setViewMode) setViewMode('canvas');
        onClose();
    };

    return (
        <div
            className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center p-0 md:p-4 backdrop-blur-md animate-in fade-in duration-300 cursor-pointer"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-t-3xl md:rounded-[2.5rem] w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col h-[92vh] md:h-auto md:max-h-[90vh] animate-in slide-in-from-bottom-8 duration-500 cursor-default"
                onClick={(e) => e.stopPropagation()}
            >

                {/* 1. FLOATING TOOLBAR (IG-STYLE) */}
                <div className="absolute top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between">
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 shadow-sm border border-slate-100 hover:bg-white transition-all active:scale-90"
                    >
                        <X size={20} strokeWidth={3} />
                    </button>

                    <div className="flex items-center gap-2">
                        {isCustom && (
                            isEditing ? (
                                <button
                                    onClick={handleSave}
                                    className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-full transition-all flex items-center gap-2 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-teal-500/20"
                                >
                                    <Save size={14} strokeWidth={3} /> {t.save}
                                </button>
                            ) : (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="p-2 hover:bg-slate-50 rounded-full text-slate-400 transition-colors flex items-center gap-1 text-[10px] font-black underline uppercase tracking-widest"
                                >
                                    <Edit2 size={16} /> {t.edit}
                                </button>
                            )
                        )}
                        <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-white shadow-sm border border-slate-100 active:scale-90">
                            <Share2 size={18} />
                        </button>
                    </div>
                </div>

                {/* 2. SCROLLABLE CONTENT */}
                <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth pb-32">

                    {/* A. HERO VISUAL (PHASE A: EDITORIAL) */}
                    <div className="relative w-full aspect-video md:aspect-[16/10] overflow-hidden group">
                        {displayImage && displayImage.startsWith('http') ? (
                            <img
                                src={displayImage}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                alt={displayName}
                                onError={(e) => { (e.target as any).src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200' }}
                            />
                        ) : (
                            <div className="w-full h-full bg-instagram-gradient flex items-center justify-center">
                                <span className="text-8xl opacity-50 grayscale">{item.image || '📍'}</span>
                            </div>
                        )}

                        {/* Gold Quote Overlay (Editorial A) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-8 pb-12">
                            {(item.marketingTitle || (item as any).marketingTitleEn) && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                                    <h4 className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-2">
                                        {lang === 'zh' ? '達人視角' : 'THE PERSPECTIVE'}
                                    </h4>
                                    <p className="text-lg md:text-xl font-black text-white leading-tight italic drop-shadow-md">
                                        {lang === 'zh' ? (item as any).marketingTitle : ((item as any).marketingTitleEn || (item as any).marketingTitle || displayName)}
                                    </p>
                                </div>
                            )}
                        </div>

                        {isCustom && !isEditing && (
                            <div className="absolute top-6 left-6 bg-teal-500/90 backdrop-blur-md text-[9px] text-white px-3 py-1 rounded-full font-black tracking-widest shadow-xl border border-white/20 uppercase">
                                Personal Spot
                            </div>
                        )}
                    </div>

                    {/* B. SOCIAL HEADER (CREATOR PILL) */}
                    <div className="px-8 -mt-8 relative z-10">
                        <div className="glass-card p-3 px-5 rounded-[2.5rem] shadow-2xl flex items-center justify-between border-white/50 bg-white/90">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-instagram-gradient rounded-full animate-rainbow-slow opacity-75 blur-[2px]" />
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white bg-slate-100 shadow-inner">
                                        <img
                                            src={author?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.author || 'Canvas')}&background=000000&color=ffffff`}
                                            className="w-full h-full object-cover"
                                            alt="avatar"
                                            onError={(e) => { (e.target as any).src = `https://ui-avatars.com/api/?name=TC&background=black&color=white` }}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">
                                        {lang === 'zh' ? '推薦達人' : 'Recommended By'}
                                    </span>
                                    <span className="text-sm font-black text-slate-900 leading-tight">
                                        {displayAuthorName}
                                    </span>
                                </div>
                            </div>
                            <button className="px-4 py-1.5 rounded-full bg-teal-500 text-white text-[9px] font-black uppercase tracking-widest shadow-lg shadow-teal-500/20 active:scale-95 transition-all">
                                {lang === 'zh' ? '關注' : 'Follow'}
                            </button>
                        </div>
                    </div>

                    {/* C. SPOT INFO PANEL */}
                    <div className="px-8 pt-10 pb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-teal-50 text-teal-600 text-[10px] font-black rounded-xl border border-teal-100 uppercase tracking-widest">
                                {item.type || 'Attraction'}
                            </span>
                            <div className="flex items-center gap-1.5 text-amber-500 font-black text-xs">
                                <Star size={14} fill="currentColor" />
                                <span>{item.rating || '4.8'}</span>
                            </div>
                        </div>

                        {isEditing ? (
                            <input
                                className="text-3xl font-black tracking-tight text-slate-900 mb-4 w-full bg-slate-50 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                                value={editedTitle}
                                onChange={e => setEditedTitle(e.target.value)}
                            />
                        ) : (
                            <h2 className="text-4xl font-black tracking-tighter text-slate-900 mb-2 leading-tight">
                                {displayName}
                            </h2>
                        )}

                        <div className="flex items-center gap-2 text-slate-400 text-sm font-bold opacity-80">
                            <MapPin size={16} className="text-teal-500" />
                            {isEditing ? (
                                <input
                                    className="bg-slate-50 p-1 rounded w-full focus:outline-none"
                                    value={editedAddress}
                                    onChange={e => setEditedAddress(e.target.value)}
                                />
                            ) : (
                                <span>{displayAddress}</span>
                            )}
                        </div>
                    </div>

                    {/* D. FAST STATS GRID */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 px-8 mb-10">
                        <div className="glass-card p-4 rounded-3xl border-slate-100 shadow-sm flex flex-col items-center">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Cost</span>
                            <span className="text-lg font-black text-slate-900">¥{displayPrice.toLocaleString()}</span>
                        </div>
                        <div className="glass-card p-4 rounded-3xl border-slate-100 shadow-sm flex flex-col items-center">
                            <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{lang === 'zh' ? '推薦達人' : 'RECOMMENDED BY'}</h4>
                            <div className="text-sm font-black text-slate-900 tracking-tight">{displayAuthorName}</div>
                        </div>
                        <div className="hidden md:flex glass-card p-4 rounded-3xl border-slate-100 shadow-sm flex flex-col items-center">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{lang === 'zh' ? '建議時長' : 'Duration'}</span>
                            <span className="text-lg font-black text-slate-900">{displayDurationFormatted || '1h'}</span>
                        </div>
                    </div>

                    {/* E. DESCRIPTION (A: EDITORIAL TYPOGRAPHY) */}
                    <div className="px-8 mb-12">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-[2px] bg-slate-200" />
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{lang === 'zh' ? '編輯視野' : 'The Perspective'}</h3>
                        </div>

                        {isEditing ? (
                            <textarea
                                className="w-full h-40 bg-slate-50 p-4 rounded-2xl text-slate-600 leading-relaxed font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
                                value={editedDescription}
                                onChange={e => setEditedDescription(e.target.value)}
                            />
                        ) : (
                            <div className="relative">
                                <span className="absolute -top-10 -left-4 text-[80px] text-slate-100 font-serif leading-none select-none z-0">“</span>
                                <p className="text-lg text-slate-700 leading-relaxed font-medium italic relative z-10 pl-2 border-l-4 border-slate-100 py-1">
                                    {displayDescription || 'No description available for this spot yet.'}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* F. INSIDER TIPS (PHASE B: DIALOGUE STYLE) */}
                    {(item.insiderTip || item.tips) && (
                        <div className="px-5 mb-8">
                            <div className="relative">
                                {/* Bubble Tail Overlay (Matching Clean Style) */}
                                <div className="absolute -top-3 left-12 w-6 h-6 bg-white rotate-45 rounded-sm z-0 border-l border-t border-slate-100/50 shadow-sm" />

                                <div className="p-8 pt-10 rounded-[3rem] relative overflow-hidden bg-white text-slate-900 z-10 border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.12)]">
                                    {/* Subtle Premium Background Accents */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-40 group-hover:opacity-60 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -ml-32 -mb-32 opacity-30" />

                                    <div className="relative z-10 flex flex-col gap-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-slate-950 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-slate-200">
                                                    <Star size={20} strokeWidth={2.5} />
                                                </div>
                                                <h3 className="text-xl font-black text-slate-900 tracking-tight">{lang === 'zh' ? '在地秘訣' : 'Insider Tips'}</h3>
                                            </div>
                                            <div className="px-3 py-1 bg-slate-50 rounded-full border border-slate-100 flex items-center gap-1.5 backdrop-blur-md">
                                                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                                                <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">{lang === 'zh' ? '達人認證' : 'Verified Tip'}</span>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            {(viewedRec?.insiderTip?.teaser || viewedRec?.insiderTip?.teaserEn || item.insiderTip?.teaser || item.insiderTip?.teaserEn) && (
                                                <h4 className="text-2xl font-black text-slate-900 leading-snug tracking-tighter">
                                                    {lang === 'zh'
                                                        ? (viewedRec?.insiderTip?.teaser || item.insiderTip?.teaser)
                                                        : (viewedRec?.insiderTip?.teaserEn || item.insiderTip?.teaserEn || viewedRec?.insiderTip?.teaser || item.insiderTip?.teaser)}
                                                </h4>
                                            )}

                                            <div className="space-y-4">
                                                <div className="relative">
                                                    <span className="text-6xl text-slate-100 absolute -top-8 -left-4 font-serif select-none z-0">“</span>
                                                    <p className="text-sm text-slate-600 leading-relaxed font-bold italic relative z-10 pl-6 mb-6">
                                                        {lang === 'zh'
                                                            ? (viewedRec?.insiderTip?.full?.story || item.insiderTip?.full?.story)
                                                            : (viewedRec?.insiderTip?.full?.storyEn || item.insiderTip?.full?.storyEn || viewedRec?.insiderTip?.full?.story || item.insiderTip?.full?.story)}
                                                    </p>

                                                    <div className="flex justify-end pr-4 mb-4">
                                                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-300 italic">
                                                            <div className="h-[1px] w-8 bg-slate-100" />
                                                            {displayAuthorName}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Meta-Info Tiles (Airbnb Style Cleanup) */}
                                        {(viewedRec?.insiderTip?.full || item.insiderTip?.full) && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-6 border-t border-slate-50">
                                                {(viewedRec?.insiderTip?.full?.exactLocation || item.insiderTip?.full?.exactLocation) && (
                                                    <div className="flex items-center gap-3 p-4 bg-slate-50/80 rounded-2xl border border-slate-100/50 hover:bg-slate-50 transition-colors">
                                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-pink-500 shrink-0 shadow-sm border border-slate-100">
                                                            <MapPin size={18} />
                                                        </div>
                                                        <div>
                                                            <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{lang === 'zh' ? '精確位置' : 'Exact Location'}</div>
                                                            <div className="text-xs font-black text-slate-800 leading-snug">
                                                                {lang === 'zh' 
                                                                    ? (viewedRec?.insiderTip?.full?.exactLocation || item.insiderTip?.full?.exactLocation) 
                                                                    : (viewedRec?.insiderTip?.full?.exactLocationEn || item.insiderTip?.full?.exactLocationEn || viewedRec?.insiderTip?.full?.exactLocation || item.insiderTip?.full?.exactLocation)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {(viewedRec?.insiderTip?.full?.mustTry || item.insiderTip?.full?.mustTry) && (
                                                    <div className="flex items-center gap-3 p-4 bg-slate-50/80 rounded-2xl border border-slate-100/50 hover:bg-slate-50 transition-colors">
                                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-teal-600 shrink-0 shadow-sm border border-slate-100">
                                                            <Navigation size={18} />
                                                        </div>
                                                        <div>
                                                            <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{lang === 'zh' ? '必推項目' : 'Must Try'}</div>
                                                            <div className="text-xs font-black text-slate-800 leading-snug">
                                                                {lang === 'zh' 
                                                                    ? (viewedRec?.insiderTip?.full?.mustTry || item.insiderTip?.full?.mustTry) 
                                                                    : (viewedRec?.insiderTip?.full?.mustTryEn || item.insiderTip?.full?.mustTryEn || viewedRec?.insiderTip?.full?.mustTry || item.insiderTip?.full?.mustTry)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {(viewedRec?.insiderTip?.full?.bestTime || item.insiderTip?.full?.bestTime) && (
                                                    <div className="flex items-center gap-3 p-4 bg-slate-50/80 rounded-2xl border border-slate-100/50 hover:bg-slate-50 transition-colors">
                                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-amber-500 shrink-0 shadow-sm border border-slate-100">
                                                            <Clock size={18} />
                                                        </div>
                                                        <div>
                                                            <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{lang === 'zh' ? '最佳時段' : 'Best Time'}</div>
                                                            <div className="text-xs font-black text-slate-800 leading-snug">
                                                                {lang === 'zh' 
                                                                    ? (viewedRec?.insiderTip?.full?.bestTime || item.insiderTip?.full?.bestTime) 
                                                                    : (viewedRec?.insiderTip?.full?.bestTimeEn || item.insiderTip?.full?.bestTimeEn || viewedRec?.insiderTip?.full?.bestTime || item.insiderTip?.full?.bestTime)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {(viewedRec?.insiderTip?.full?.avoid || item.insiderTip?.full?.avoid) && (
                                                    <div className="flex items-center gap-3 p-4 bg-slate-50/80 rounded-2xl border border-slate-100/50 hover:bg-slate-50 transition-colors">
                                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-red-500 shrink-0 shadow-sm border border-slate-100">
                                                            <X size={18} />
                                                        </div>
                                                        <div>
                                                            <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{lang === 'zh' ? '避雷提醒' : 'Avoid'}</div>
                                                            <div className="text-xs font-black text-slate-800 leading-snug">
                                                                {lang === 'zh' 
                                                                    ? (viewedRec?.insiderTip?.full?.avoid || item.insiderTip?.full?.avoid) 
                                                                    : (viewedRec?.insiderTip?.full?.avoidEn || item.insiderTip?.full?.avoidEn || viewedRec?.insiderTip?.full?.avoid || item.insiderTip?.full?.avoid)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* G. MAP PREVIEW */}
                    <div className="px-8 mb-8">
                        <div className="h-64 w-full rounded-[2.5rem] overflow-hidden border-8 border-slate-50 relative group">
                            {hasCoordinates ? (
                                <MapContainer
                                    center={position}
                                    zoom={15}
                                    style={{ height: '100%', width: '100%' }}
                                    scrollWheelZoom={false}
                                >
                                    <TileLayer
                                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                                    />
                                    <Marker position={position} />
                                </MapContainer>
                            ) : (
                                <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center text-slate-300">
                                    <MapPin size={40} className="mb-2 opacity-20" />
                                    <span className="text-sm font-bold tracking-widest uppercase">Coordinates Missing</span>
                                </div>
                            )}
                            <button
                                onClick={handleNavigate}
                                className="absolute bottom-6 right-6 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] transition-transform active:scale-95 z-[500]"
                            >
                                <Navigation size={16} strokeWidth={3} />
                                {lang === 'zh' ? '在 Google Map 查看' : 'Google Maps'}
                            </button>
                        </div>
                    </div>

                    {/* H. MORE PERSPECTIVES (SOCIAL PROOF) */}
                    {(() => {
                        const recommendations = (item as TravelItem).recommendations || [];
                        const otherRecommendations = recommendations.filter(r => r.id !== item.authorId);

                        if (otherRecommendations.length === 0) return null;

                        return (
                            <div className="px-8 mb-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                                        <Users size={20} />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 tracking-tight">
                                        {lang === 'zh' ? '還有誰也推薦這裡？' : 'More Perspectives'}
                                    </h3>
                                </div>

                                <div className="space-y-3">
                                    {recommendations.map((rec, idx) => {
                                        const isActive = rec.id === viewedRecId;
                                        const isApplied = rec.id === currentAppliedRecId;
                                        
                                        return (rec.insiderTip?.teaser || rec.insiderTip?.teaserEn) ? (
                                            <div 
                                                key={idx} 
                                                onClick={() => setViewedRecId(rec.id)}
                                                className={`flex gap-4 p-5 rounded-3xl transition-all cursor-pointer group relative ${
                                                    isActive 
                                                        ? 'bg-white border-teal-200 shadow-xl shadow-teal-500/10 border-2' 
                                                        : 'bg-slate-50 border-slate-100 border hover:bg-white hover:shadow-xl hover:shadow-slate-200/50'
                                                }`}
                                            >
                                                <div className="relative shrink-0">
                                                    <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-md group-hover:scale-110 transition-transform">
                                                        <img
                                                            src={rec.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${rec.id}`}
                                                            alt={rec.author}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    {isApplied && (
                                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-teal-500 border-2 border-white rounded-full flex items-center justify-center text-white scale-90">
                                                            <Check size={10} strokeWidth={4} />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex flex-col justify-center pr-12">
                                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 group-hover:text-teal-600">
                                                        {lang === 'en' && rec.authorNameEn ? rec.authorNameEn : rec.author}
                                                    </div>
                                                    <div className="text-sm font-bold text-slate-800 line-clamp-2 leading-snug">
                                                        {lang === 'zh' ? rec.insiderTip?.teaser : (rec.insiderTip?.teaserEn || rec.insiderTip?.teaser)}
                                                    </div>
                                                </div>
                                                
                                                {isActive && (
                                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-teal-500 animate-in fade-in slide-in-from-right-2">
                                                        <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
                                                            <Edit2 size={14} strokeWidth={3} />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : null;
                                    })}
                                </div>
                            </div>
                        );
                    })()}
                </div>

                {/* 3. STICKY ACTION BAR */}
                <div className="absolute bottom-8 left-8 right-8 flex gap-3 z-50 md:sticky md:bottom-0 md:left-0 md:bg-white/80 md:backdrop-blur-xl md:p-6 md:border-t md:border-slate-100">
                    {canRemix ? (
                        <button
                            onClick={handleApplyTip}
                            className="flex-[2] h-16 bg-teal-500 text-white rounded-[2.2rem] text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-teal-500/40 active:scale-95 transition-all shadow-xl shadow-teal-500/10"
                        >
                            <Undo2 size={20} strokeWidth={3} />
                            {lang === 'zh' ? '採用此建議 (Remix)' : 'Apply this Tip'}
                        </button>
                    ) : (
                        <button
                            onClick={onClose}
                            className="flex-1 h-16 bg-slate-900 text-white rounded-[2.2rem] text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-slate-900/40 active:scale-95 transition-all shadow-xl"
                        >
                            <Check size={20} strokeWidth={3} />
                            {lang === 'zh' ? '看完囉' : 'Done Viewing'}
                        </button>
                    )}
                    <button className="w-16 h-16 flex items-center justify-center text-slate-400 rounded-[2.2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:text-pink-500 hover:border-pink-100 transition-all active:scale-90 group">
                        <Heart size={22} className="group-hover:fill-pink-500 transition-colors" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailModal;
