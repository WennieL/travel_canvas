import React, { useState } from 'react';
import { X, UploadCloud, Upload } from 'lucide-react';
import { Plan } from '../../types';

interface SubmitModalProps {
    isOpen: boolean;
    onClose: () => void;
    plan: Plan;
    onSubmit: (description: string, tags: string[]) => void;
    t: Record<string, string>;
}

// Keys for translation lookup
const TAG_KEYS = [
    'tag_beginner', 'tag_food', 'tag_shopping', 'tag_family', 'tag_photo',
    'tag_culture', 'tag_budget', 'tag_luxury', 'tag_nature', 'tag_city'
];

export const SubmitModal: React.FC<SubmitModalProps> = ({
    isOpen,
    onClose,
    plan,
    onSubmit,
    t
}) => {
    const [name, setName] = useState(plan.name); // Initialize with plan name
    const [description, setDescription] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleClose = () => {
        setDescription('');
        setSelectedTags([]);
        onClose();
    };

    const handleSubmit = () => {
        // We might want to save the new name too, but for now just pass description/tags
        onSubmit(description, selectedTags);
        handleClose();
    };

    const toggleTag = (tagKey: string) => {
        if (selectedTags.includes(tagKey)) {
            setSelectedTags(selectedTags.filter(t => t !== tagKey));
        } else if (selectedTags.length < 4) {
            setSelectedTags([...selectedTags, tagKey]);
        }
    };

    const isValid = name.trim() && description.trim() && selectedTags.length >= 2;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-[1000] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
            <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="p-6 pb-4 border-b border-gray-100 bg-gradient-to-r from-teal-50 to-emerald-50">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-teal-100">
                                <UploadCloud size={20} />
                            </div>
                            <div>
                                <h2 className="text-xl font-black text-gray-900 leading-tight">{t.publishTrip || '發布您的行程'}</h2>
                                <p className="text-[11px] text-teal-600 font-bold uppercase tracking-widest">{t.shareToCommunity || 'Share to Community'}</p>
                            </div>
                        </div>
                        <button onClick={handleClose} className="p-2 hover:bg-white/50 rounded-full text-gray-400 transition-colors">
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Content - Scrollable */}
                <div className="p-6 space-y-6 overflow-y-auto">
                    {/* Tier Explanation */}
                    <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 text-sm text-blue-800 space-y-2">
                        <div className="flex items-center gap-2 font-bold text-blue-900">
                            <span className="bg-blue-200 text-blue-700 w-5 h-5 flex items-center justify-center rounded-full text-xs">1</span>
                            {t.communityTier || '即時發布 (Community)'}
                        </div>
                        <p className="text-xs text-blue-600/80 pl-7 leading-relaxed">
                            {t.communityTierDesc || '發布後立即獲得分享連結，朋友即可查看您的行程。'}
                        </p>

                        <div className="flex items-center gap-2 font-bold text-blue-900 mt-3">
                            <span className="bg-yellow-200 text-yellow-700 w-5 h-5 flex items-center justify-center rounded-full text-xs">2</span>
                            {t.verifiedTier || '精選推薦 (Verified)'}
                        </div>
                        <p className="text-xs text-blue-600/80 pl-7 leading-relaxed">
                            {t.verifiedTierDesc || '我們的編輯會定期審核，優質行程將登上首頁並獲得金勾勾認證！'}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between items-center mb-1.5">
                                <label className="block text-sm font-bold text-gray-700">{t.tripName || '行程名稱'}</label>
                                <span className="text-[10px] text-gray-400 font-medium">{name.length}/50</span>
                            </div>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                maxLength={50}
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-teal-500 focus:bg-white transition-all outline-none font-bold text-gray-800"
                                placeholder={t.tripNamePlaceholder || "e.g. 5 Days in Tokyo"}
                            />
                        </div>

                        {/* Description Input */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-xs text-gray-500">{t.tripDescription || '行程簡介'} <span className="text-red-500">*</span></label>
                                <span className="text-[10px] text-gray-400 font-medium">{description.length}/300</span>
                            </div>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                maxLength={300}
                                className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-teal-500 resize-none"
                                rows={3}
                                placeholder={t.tripDescPlaceholder || "e.g. My carefully planned trip..."}
                            />
                        </div>

                        {/* Tags Selection */}
                        <div>
                            <label className="text-xs text-gray-500 block mb-2">{t.selectTags || '選擇標籤 (2-4 個)'}</label>
                            <div className="flex flex-wrap gap-2">
                                {TAG_KEYS.map(tagKey => (
                                    <button
                                        key={tagKey}
                                        onClick={() => toggleTag(tagKey)}
                                        className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${selectedTags.includes(tagKey)
                                            ? 'bg-teal-600 border-teal-600 text-white'
                                            : 'border-gray-200 text-gray-500 hover:border-teal-300'
                                            }`}
                                    >
                                        {/* Display translated tag */}
                                        {t[tagKey] || tagKey}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-4 border-t border-gray-100 bg-gray-50">
                    <div className="flex gap-3">
                        <button
                            onClick={onClose}
                            className="flex-1 py-3 bg-white hover:bg-gray-100 text-gray-600 border border-gray-200 rounded-xl font-bold text-sm transition-colors"
                        >
                            {t.cancel || '取消'}
                        </button>
                        <button
                            onClick={handleSubmit}
                            disabled={!isValid}
                            className="flex-[2] py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl font-bold text-sm shadow-lg shadow-teal-100 transition-all flex items-center justify-center gap-2"
                        >
                            <Upload size={16} />
                            {t.publishNow || '立即發布'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
