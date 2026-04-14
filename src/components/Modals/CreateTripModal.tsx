import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, ArrowRight, PlaneTakeoff, Info, ChevronDown, Sparkles } from 'lucide-react';
import { Region, LangType, Template } from '../../types';
import CityPicker from '../Discovery/CityPicker';
import { TEMPLATES } from '../../data/templates';
import { motion, AnimatePresence } from 'framer-motion';

interface CreateTripModalProps {
    isOpen: boolean;
    onClose: () => void;
    onComplete: (data: {
        origin: string;
        destination: Region;
        startDate: string;
        endDate: string;
        totalDays: number;
        name?: string;
    }) => void;
    onSelectTemplate?: (template: Template, data: {
        origin: string;
        destination: Region;
        startDate: string;
        endDate: string;
        totalDays: number;
        name?: string;
    }) => void;
    lang: LangType;
    t: any;
    initialData?: {
        name?: string;
        destination?: Region;
        startDate?: string;
        endDate?: string;
    };
}

export const CreateTripModal: React.FC<CreateTripModalProps> = ({
    isOpen, onClose, onComplete, onSelectTemplate, lang, t, initialData
}) => {
    const [tripName, setTripName] = useState(initialData?.name || '');
    const [startDate, setStartDate] = useState(initialData?.startDate || new Date().toISOString().split('T')[0]);
    const [endDate, setEndDate] = useState(initialData?.endDate || (() => {
        const d = new Date();
        d.setDate(d.getDate() + 3);
        return d.toISOString().split('T')[0];
    })());
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRegion, setSelectedRegion] = useState<Region | null>(initialData?.destination || null);
    const [showCityDrawer, setShowCityDrawer] = useState(false);

    // Sync state when initialData changes or modal opens
    useEffect(() => {
        if (isOpen) {
            setTripName(initialData?.name || '');
            setStartDate(initialData?.startDate || new Date().toISOString().split('T')[0]);
            
            if (initialData?.endDate) {
                setEndDate(initialData.endDate);
            } else {
                const d = new Date();
                d.setDate(d.getDate() + 3);
                setEndDate(d.toISOString().split('T')[0]);
            }
            
            setSelectedRegion(initialData?.destination || null);
            setSearchQuery('');
            setShowCityDrawer(false);
        }
    }, [isOpen, initialData]);

    // Sync totalDays calculation if needed by parent, but we'll calculate it on complete
    const calculateTotalDays = (start: string, end: string) => {
        const s = new Date(start);
        const e = new Date(end);
        const diff = e.getTime() - s.getTime();
        return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1);
    };

    if (!isOpen) return null;

    const handleCitySelect = (region: Region) => {
        setSelectedRegion(region);
        setShowCityDrawer(false);
    };

    const handleCreateBlank = () => {
        if (!selectedRegion) return;
        const totalDays = calculateTotalDays(startDate, endDate);
        
        onComplete({
            origin: 'TPE',
            destination: selectedRegion,
            startDate,
            endDate,
            totalDays,
            name: tripName || undefined
        });
    };

    const handleOpenPreview = (template: Template) => {
        if (!selectedRegion || !onSelectTemplate) return;
        const totalDays = calculateTotalDays(startDate, endDate);
        
        onSelectTemplate(template, {
            origin: 'TPE',
            destination: selectedRegion,
            startDate,
            endDate,
            totalDays,
            name: tripName || undefined
        });
    };

    const displayRegionName = selectedRegion ? (lang === 'zh' ? (selectedRegion === 'tokyo' ? '東京' : selectedRegion === 'taipei' ? '台北' : selectedRegion === 'kyoto' ? '京都' : selectedRegion === 'tainan' ? '台南' : selectedRegion === 'taichung' ? '台中' : selectedRegion === 'hualien' ? '花蓮' : '墨爾本') : selectedRegion.charAt(0).toUpperCase() + selectedRegion.slice(1)) : '';

    // Get a nice cover image based on the selected region
    const getCoverImage = () => {
        if (!selectedRegion) return 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000';
        const template = TEMPLATES.find(t => t.region === selectedRegion);
        return template?.coverImage || 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000';
    };

    const regionalTemplates = TEMPLATES.filter(t => t.region === selectedRegion);

    return (
        <div className="fixed inset-0 z-[4000] bg-white flex flex-col animate-in slide-in-from-bottom duration-500 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
                <button onClick={onClose} className="p-2 -ml-2 text-gray-400 hover:text-gray-600">
                    <X size={24} />
                </button>
                <h1 className="text-xl font-black text-gray-800 tracking-tight">
                    {lang === 'zh' ? '行程設定' : 'Trip Settings'}
                </h1>
                <div className="w-10" />
            </div>

            <div className="flex-1 overflow-y-auto pb-10">
                <div className="max-w-2xl mx-auto w-full px-6 py-4 space-y-6">
                    {/* Cover Photo Section (More Compact - 16:7) */}
                    <div className="relative aspect-[16/7] rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-gray-100">
                        <img 
                            src={getCoverImage()} 
                            alt="Cover" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                            <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-black text-gray-800 shadow-sm uppercase tracking-wider">
                                {lang === 'zh' ? '自動帶入封面' : 'Auto Cover Photo'}
                            </span>
                        </div>
                    </div>

                    {/* Form Fields - Tighter gaps */}
                    <div className="space-y-4">
                        {/* Trip Name */}
                        <div>
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                                {lang === 'zh' ? '行程名稱' : 'Trip Name'}
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={tripName}
                                    onChange={(e) => setTripName(e.target.value)}
                                    placeholder={lang === 'zh' ? "命名您的精彩旅程" : "Name your incredible trip"}
                                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-3 px-4 font-bold text-gray-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all placeholder:text-gray-300 placeholder:font-normal"
                                />
                                {tripName && (
                                    <button 
                                        onClick={() => setTripName('')}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-gray-300 hover:text-gray-500"
                                    >
                                        <X size={14} />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Trip Dates */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                                    {lang === 'zh' ? '開始日期' : 'Start Date'}
                                </label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-3 px-4 font-bold text-gray-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all appearance-none text-sm"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <ChevronDown size={14} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                                    {lang === 'zh' ? '結束日期' : 'End Date'}
                                </label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        value={endDate}
                                        min={startDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-3 px-4 font-bold text-gray-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all appearance-none text-sm"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <ChevronDown size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Destination */}
                        <div>
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                                {lang === 'zh' ? '目的地' : 'Destination'}
                            </label>
                            <button
                                onClick={() => setShowCityDrawer(true)}
                                className={`w-full border-2 rounded-2xl py-3 px-4 font-bold flex items-center justify-between transition-all ${selectedRegion ? 'bg-white border-teal-500 text-gray-800 shadow-sm' : 'bg-gray-50 border-dashed border-gray-200 text-gray-400 hover:border-teal-300'}`}
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} className={selectedRegion ? "text-teal-500" : "text-gray-300"} />
                                    <span className={selectedRegion ? "text-gray-800" : "text-gray-400"}>
                                        {selectedRegion ? displayRegionName : (lang === 'zh' ? '選擇目的地' : 'Select Destination')}
                                    </span>
                                </div>
                                <ArrowRight size={14} className={selectedRegion ? "text-teal-500" : "text-gray-300"} />
                            </button>
                        </div>
                    </div>

                    {/* Template Inspiration Carousel - Only shows when city is selected */}
                    <AnimatePresence>
                        {selectedRegion && regionalTemplates.length > 0 && (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-4 pt-4 border-t border-gray-50"
                            >
                                <div className="flex items-center gap-2 px-1">
                                    <Sparkles size={14} className="text-amber-400 fill-amber-400" />
                                    <h2 className="text-xs font-black text-gray-600 uppercase tracking-wider">
                                        {lang === 'zh' ? '不想從零開始？試試這些範本' : 'Or try a template'}
                                    </h2>
                                </div>

                                <div className="flex gap-4 overflow-x-auto pb-4 -mx-1 px-1 no-scrollbar scroll-smooth">
                                    {regionalTemplates.map(template => (
                                        <button
                                            key={template.id}
                                            onClick={() => handleOpenPreview(template)}
                                            className="text-left flex-shrink-0 w-64 group snap-start block"
                                        >
                                            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-2 shadow-sm border border-gray-100 group-hover:shadow-md transition-all">
                                                <img
                                                    src={template.coverImage}
                                                    alt={template.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                                <div className="absolute bottom-3 left-3 right-3">
                                                    <h4 className="text-sm font-black text-white line-clamp-1 leading-tight">
                                                        {lang === 'zh' ? template.name : template.nameEn}
                                                    </h4>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Action Button - Direct Establish */}
                    <div className="pt-6">
                        <button
                            onClick={handleCreateBlank}
                            disabled={!tripName || !selectedRegion}
                            className={`w-full py-4 rounded-3xl font-black text-lg transition-all shadow-xl active:scale-[0.98] ${(!tripName || !selectedRegion) ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none' : 'bg-teal-600 text-white shadow-teal-200/50 hover:bg-teal-700'}`}
                        >
                            {lang === 'zh' ? '準備啟程' : 'Ready to Start'}
                        </button>
                        <p className="text-center mt-4 text-[10px] text-gray-300 font-bold uppercase tracking-widest">
                            {lang === 'zh' ? '點擊按鈕將直接進入空白行程畫布' : 'CLICK TO ENTER BLANK CANVAS DIRECTLY'}
                        </p>
                    </div>
                </div>
            </div>

            {/* City Selection Drawer Overlay */}
            <AnimatePresence>
                {showCityDrawer && (
                    <div className="fixed inset-0 z-[1600] flex flex-col justify-end">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowCityDrawer(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div 
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative bg-white rounded-t-[2.5rem] flex flex-col h-[85vh] shadow-2xl overflow-hidden"
                        >
                            {/* Drawer Notch */}
                            <div className="w-12 h-1.5 bg-gray-100 rounded-full mx-auto my-4 shrink-0" />
                            
                            <div className="flex items-center justify-between px-8 py-2 border-b border-gray-50 shrink-0">
                                <h2 className="text-xl font-black text-gray-800">
                                    {lang === 'zh' ? '探索地點' : 'Explore Places'}
                                </h2>
                                <button onClick={() => setShowCityDrawer(false)} className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-gray-600">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-hidden relative">
                                <CityPicker
                                    searchQuery={searchQuery}
                                    setSearchQuery={setSearchQuery}
                                    onSelectCity={handleCitySelect}
                                    onPreviewTemplate={() => {}}
                                    onSelectItem={() => {}}
                                    lang={lang}
                                    t={t}
                                    isSelectionOnly={true}
                                />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
