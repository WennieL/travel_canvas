import React, { useState } from 'react';
import { X, Calendar, MapPin, ArrowRight, PlaneTakeoff, Info } from 'lucide-react';
import { Region, LangType, Template } from '../../types';
import CityPicker from '../Discovery/CityPicker';
import { TEMPLATES } from '../../data/templates';


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
}

export const CreateTripModal: React.FC<CreateTripModalProps> = ({
    isOpen, onClose, onComplete, onSelectTemplate, lang, t
}) => {
    const [step, setStep] = useState<1 | 2 | 3>(1); // 1 = Details, 2 = City Picker, 3 = Template Picker
    const [tripName, setTripName] = useState('');
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
    const [totalDays, setTotalDays] = useState(4);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

    if (!isOpen) return null;

    const handleCitySelect = (region: Region) => {
        setSelectedRegion(region);
        setStep(3);
    };

    const handleCreateBlank = () => {
        if (!selectedRegion) return;
        const end = new Date(startDate);
        end.setDate(end.getDate() + totalDays - 1);
        
        onComplete({
            origin: 'TPE',
            destination: selectedRegion,
            startDate,
            endDate: end.toISOString().split('T')[0],
            totalDays,
            name: tripName || undefined
        });
    };

    const handleSelectTemplate = (template: Template) => {
        if (!selectedRegion || !onSelectTemplate) return;
        const end = new Date(startDate);
        end.setDate(end.getDate() + totalDays - 1);
        
        onSelectTemplate(template, {
            origin: 'TPE',
            destination: selectedRegion,
            startDate,
            endDate: end.toISOString().split('T')[0],
            totalDays,
            name: tripName || undefined
        });
    };

    const displayRegionName = selectedRegion ? (lang === 'zh' ? (selectedRegion === 'tokyo' ? '東京' : selectedRegion === 'taipei' ? '台北' : selectedRegion === 'kyoto' ? '京都' : selectedRegion === 'tainan' ? '台南' : selectedRegion === 'taichung' ? '台中' : selectedRegion === 'hualien' ? '花蓮' : '墨爾本') : selectedRegion.charAt(0).toUpperCase() + selectedRegion.slice(1)) : '';

    return (
        <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300" onClick={onClose} />

            <div className={`relative bg-white rounded-[2.5rem] shadow-2xl w-full overflow-hidden animate-in zoom-in-95 duration-300 border border-white/20 transition-all ${step === 2 ? 'max-w-4xl max-h-[90vh] flex flex-col' : 'max-w-xl'}`}>
                
                {step === 1 && (
                    <>
                        {/* Header Section */}
                        <div className="bg-teal-600 p-8 text-white relative">
                            <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-all">
                                <X size={20} />
                            </button>

                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                                    <PlaneTakeoff size={18} className="text-white" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">
                                    {lang === 'zh' ? '新旅程' : 'New Journey'}
                                </span>
                            </div>

                            <h2 className="text-3xl font-black leading-tight">
                                {lang === 'zh' ? '為旅程命名並選擇日期' : 'Name your trip & pick dates'}
                            </h2>
                        </div>

                        {/* Content Area */}
                        <div className="p-8 md:p-10 bg-white space-y-8">
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">{lang === 'zh' ? '旅行名稱' : 'Trip Name'}</label>
                                <input
                                    type="text"
                                    value={tripName}
                                    onChange={(e) => setTripName(e.target.value)}
                                    placeholder={lang === 'zh' ? "例如：東京五天四夜週末充電" : "e.g. Tokyo Weekend Getaway"}
                                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-5 font-bold text-gray-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all placeholder:font-normal placeholder:text-gray-300"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">{lang === 'zh' ? '出發日期' : 'Departure Date'}</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400 pointer-events-none">
                                            <Calendar size={18} />
                                        </div>
                                        <input
                                            type="date"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 pl-12 pr-4 font-bold text-gray-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all shadow-inner"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">{lang === 'zh' ? '天數' : 'Duration'}</label>
                                    <div className="flex items-center gap-4 bg-gray-100 p-2 rounded-2xl">
                                        <button
                                            onClick={() => setTotalDays(Math.max(1, totalDays - 1))}
                                            className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center font-black text-gray-600 hover:bg-gray-50 active:scale-90 transition-all"
                                        >-</button>
                                        <div className="flex-1 text-center font-black text-xl text-gray-800">{totalDays} <span className="text-[10px] text-gray-400 uppercase">{lang === 'zh' ? '天' : 'Days'}</span></div>
                                        <button
                                            onClick={() => setTotalDays(totalDays + 1)}
                                            className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center font-black text-gray-600 hover:bg-gray-50 active:scale-90 transition-all"
                                        >+</button>
                                    </div>
                                </div>
                            </div>

                            {/* Select Destination Button */}
                            <button
                                onClick={() => setStep(2)}
                                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-[1.25rem] font-black text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-teal-200 active:scale-95 group mt-4"
                            >
                                <MapPin size={20} />
                                {lang === 'zh' ? '下一步：選擇目的地' : 'Next: Select Destination'}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </>
                )}

                {step === 2 && (
                    <div className="flex flex-col h-[80vh]">
                        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white z-10">
                            <div className="flex items-center gap-3">
                                <button onClick={() => setStep(1)} className="p-2 hover:bg-gray-50 rounded-full transition-all">
                                    <ArrowRight className="rotate-180 text-gray-500" size={20} />
                                </button>
                                <div>
                                    <h3 className="font-bold text-gray-800">{lang === 'zh' ? '選擇目的地' : 'Select Destination'}</h3>
                                    <p className="text-xs text-gray-500 font-medium">{tripName || (lang === 'zh' ? '新旅程' : 'New Trip')} • {startDate} • {totalDays} {lang === 'zh' ? '天' : 'Days'}</p>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-gray-50 rounded-full transition-all">
                                <X className="text-gray-400" size={20} />
                            </button>
                        </div>

                        {/* Embed CityPicker as the Destination Selector */}
                        <div className="flex-1 overflow-y-auto relative bg-white">
                            <div className="absolute inset-0">
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
                        </div>
                        
                        <div className="p-4 bg-teal-50/50 border-t border-teal-100 flex items-center justify-center gap-2 text-teal-700 text-sm font-bold">
                            <Info size={16} />
                            {lang === 'zh' ? '點擊城市進入下一步' : 'Click a city to continue'}
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="flex flex-col h-[80vh] bg-gray-50">
                        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white z-10 shrink-0">
                            <div className="flex items-center gap-3">
                                <button onClick={() => setStep(2)} className="p-2 hover:bg-gray-50 rounded-full transition-all">
                                    <ArrowRight className="rotate-180 text-gray-500" size={20} />
                                </button>
                                <div>
                                    <h3 className="font-bold text-gray-800">{lang === 'zh' ? '選擇行程起點' : 'Choose Starting Point'}</h3>
                                    <p className="text-xs text-gray-500 font-medium">
                                        {tripName || (lang === 'zh' ? '新旅程' : 'New Trip')} • {displayRegionName}
                                    </p>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-gray-50 rounded-full transition-all">
                                <X className="text-gray-400" size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto w-full max-w-2xl mx-auto py-8 px-4 space-y-12">
                            {/* FAST TRACK: Start From Scratch */}
                            <button
                                onClick={handleCreateBlank}
                                className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-3xl p-8 flex flex-col items-center justify-center gap-3 transition-all shadow-xl shadow-teal-200/50 active:scale-95 group text-center"
                            >
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm mb-2 group-hover:scale-110 transition-transform">
                                    <Calendar size={32} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-black">
                                    {lang === 'zh' ? '從空白畫布開始排列' : 'Start from Scratch'}
                                </h3>
                                <p className="text-teal-100 font-medium text-sm">
                                    {lang === 'zh' ? '適合資深玩家，自己安排每一個景點' : 'For DIY planners. Build everything yourself.'}
                                </p>
                            </button>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="bg-gray-50 px-4 text-gray-400 font-black uppercase tracking-widest">
                                        {lang === 'zh' ? '或者' : 'Or'}
                                    </span>
                                </div>
                            </div>

                            {/* INSPIRATION TRACK: Templates */}
                            <div>
                                <h4 className="font-black text-gray-800 text-lg mb-4 text-center">
                                    {lang === 'zh' ? `套用 ${displayRegionName} 達人行程範本` : `Start with a ${displayRegionName} template`}
                                </h4>
                                
                                {TEMPLATES.filter(t => t.region === selectedRegion).length > 0 ? (
                                    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-6 px-2 snap-x snap-mandatory">
                                        {TEMPLATES.filter(t => t.region === selectedRegion).map(template => (
                                            <button
                                                key={template.id}
                                                onClick={() => handleSelectTemplate(template)}
                                                className="text-left group flex-shrink-0 w-64 snap-center focus:outline-none"
                                            >
                                                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-3 shadow-lg ring-2 ring-transparent group-hover:ring-teal-400 transition-all">
                                                    <img
                                                        src={template.coverImage}
                                                        alt={lang === 'zh' ? template.name : template.nameEn}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                                    <div className="absolute bottom-3 left-3 right-3">
                                                        <div className="flex items-center gap-2 text-[10px] text-white/80 font-bold mb-1 uppercase tracking-wider">
                                                            <MapPin size={10} /> {template.region}
                                                        </div>
                                                        <h4 className="text-sm font-bold text-white line-clamp-1">
                                                            {lang === 'zh' ? template.name : template.nameEn}
                                                        </h4>
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8 text-gray-400 font-medium bg-gray-100 rounded-2xl mx-4">
                                        {lang === 'zh' ? '此城市尚無達人範本，請從空白開始 🚀' : 'No templates available for this city yet. Please start from scratch 🚀'}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
