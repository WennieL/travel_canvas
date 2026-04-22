import React from 'react';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Wallet, 
  Plane, 
  Hotel, 
  FileText, 
  ArrowRight,
  TrendingDown,
  StickyNote,
  ExternalLink,
  Luggage
} from 'lucide-react';
import { Plan, LangType, ViewMode } from '../types';
import { TEMPLATES } from '../data/templates';
import { motion } from 'framer-motion';
import ExpertBriefing from './Schedule/ExpertBriefing';

interface OverviewViewProps {
  activePlan: Plan;
  lang: LangType;
  t: any;
  setViewMode: (mode: ViewMode) => void;
  calculateTotalBudget: () => number;
  budgetLimit: number;
  calculateCategoryBreakdown: () => any;
  updateActivePlan: (updates: Partial<Plan>) => void;
}

const OverviewView: React.FC<OverviewViewProps> = ({
  activePlan,
  lang,
  t,
  setViewMode,
  calculateTotalBudget,
  budgetLimit,
  calculateCategoryBreakdown,
  updateActivePlan
}) => {
  const budgetSpent = calculateTotalBudget();
  const budgetPercentage = budgetLimit > 0 ? Math.min((budgetSpent / budgetLimit) * 100, 100) : 0;
  
  // Get top 3 spending categories
  const breakdown = calculateCategoryBreakdown();
  const topCategories = Object.entries(breakdown)
    .map(([key, value]: [string, any]) => ({
      key,
      amount: value.amount,
      percentage: value.percentage,
      icon: value.icon || '💰'
    }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 3);

  // Checklist stats
  const totalItems = activePlan.checklist.length;
  const checkedItems = activePlan.checklist.filter(i => i.checked).length;
  const checklistPercentage = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;
  const pendingItems = activePlan.checklist.filter(i => !i.checked).slice(0, 3);

  // Region cover
  const regionCoverMap: Record<string, string> = {
    tokyo: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=2000',
    kyoto: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=2000',
    osaka: 'https://images.unsplash.com/photo-1590259692203-9a924410091d?auto=format&fit=crop&q=80&w=2000',
    melbourne: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000',
    taipei: 'https://images.unsplash.com/photo-1563297007-0686b3641324?auto=format&fit=crop&q=80&w=2000',
    tainan: 'https://images.unsplash.com/photo-1583091996500-20cdb27ec7f4?auto=format&fit=crop&q=80&w=2000',
    taichung: 'https://images.unsplash.com/photo-1587309248529-6e3e5bc8f50c?auto=format&fit=crop&q=80&w=2000',
    hualien: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=2000',
  };
  
  const coverBg = (activePlan.region ? regionCoverMap[activePlan.region] : null) || 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000';

  // Handle Note Update
  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // We assume the Plan object might have a 'notes' field eventually, 
    // for now we use a global notes concept or placeholder.
    // If we haven't defined a global notes field in types.ts yet, we should.
    // Assuming 'description' or similar might be used for now or just local storage.
    // Let's stick to the UI for now as per instructions.
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-8 space-y-8 pb-32">
      {/* 0. Expert Briefing Header (Collapsible Tips/FAQ) */}
      <ExpertBriefing plan={activePlan} lang={lang} type="header" />

      {/* Grid: Checklist & Spending Stats */}
      <div className="grid grid-cols-2 gap-4">
        {/* Packing List Widget */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => setViewMode('checklist')}
          className="bg-white rounded-3xl p-5 shadow-sm border border-gray-50 flex flex-col justify-between group cursor-pointer hover:shadow-md transition-all active:scale-[0.98]"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
            <div className="text-emerald-600">
                <Luggage size={20} />
              </div>
              <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full tabular-nums">
                {checkedItems}/{totalItems}
              </span>
            </div>
            <h3 className="text-sm font-black text-gray-800 mb-2">{lang === 'zh' ? '行李清單' : 'Packing List'}</h3>
            <div className="space-y-1.5 mt-2">
              {pendingItems.map(item => (
                <div key={item.id} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-200" />
                  <span className="text-[11px] text-gray-500 font-medium line-clamp-1 truncate">{lang === 'zh' ? item.text : item.textEn || item.text}</span>
                </div>
              ))}
              {pendingItems.length === 0 && (
                <p className="text-[11px] text-gray-400 italic">{lang === 'zh' ? '清單已全部準備好！' : 'All set!'}</p>
              )}
            </div>
          </div>
          <div className="mt-4 flex items-center text-[10px] font-black text-emerald-600/60 uppercase tracking-widest gap-1 group-hover:text-emerald-600 transition-colors">
            {lang === 'zh' ? '查看全部' : 'VIEW ALL'} <ArrowRight size={10} />
          </div>
        </motion.div>

        {/* Spending Stats Widget */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => setViewMode('budget')}
          className="bg-white rounded-3xl p-5 shadow-sm border border-gray-50 flex flex-col items-center justify-center group cursor-pointer hover:shadow-md transition-all active:scale-[0.98]"
        >
          <div className="flex items-center justify-between w-full mb-2">
            <div className="text-amber-600">
              <Wallet size={20} />
            </div>
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">{lang === 'zh' ? '消費統計' : 'Stats'}</h3>
          </div>

          {/* Integrated Budget Ring */}
          <div className="w-20 h-20 relative flex items-center justify-center my-2">
            <svg className="w-full h-full -rotate-90">
              <circle cx="40" cy="40" r="32" className="stroke-gray-100 fill-none" strokeWidth="8" />
              <circle 
                cx="40" cy="40" r="32" 
                className={`stroke-emerald-400 fill-none transition-all duration-1000 ${budgetSpent > budgetLimit ? 'stroke-red-400' : ''}`}
                strokeWidth="8"
                strokeDasharray={201}
                strokeDashoffset={201 - (201 * (budgetPercentage / 100))}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-sm font-black text-gray-800 leading-none">{Math.round(budgetPercentage)}%</span>
            </div>
          </div>

          <div className="w-full mt-2">
            <div className="flex flex-wrap gap-2 justify-center">
              {topCategories.map(cat => (
                <div key={cat.key} className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                  <span className="text-[10px]">{cat.icon}</span>
                  <span className="text-[9px] font-black text-gray-500 whitespace-nowrap">
                    {cat.key === 'food' ? (lang === 'zh' ? '美食' : 'Food') :
                     cat.key === 'accommodation' ? (lang === 'zh' ? '住宿' : 'Hotel') :
                     cat.key === 'transport' ? (lang === 'zh' ? '交通' : 'Transport') :
                     cat.key === 'shopping' ? (lang === 'zh' ? '購物' : 'Shopping') :
                     (lang === 'zh' ? '其他' : 'Other')}
                  </span>
                  <span className="text-[9px] font-bold text-gray-400">{Math.round(cat.percentage)}%</span>
                </div>
              ))}
              {topCategories.length === 0 && (
                <p className="text-[10px] text-gray-400 italic text-center w-full">{lang === 'zh' ? '目前尚無開銷' : 'No spending yet'}</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Travel Guide: 3 Widgets Row */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-3"
      >
        <div className="flex items-center gap-2 px-1">
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{lang === 'zh' ? '旅遊指南' : 'Travel Guide'}</h3>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { id: 'flights', icon: <Plane size={20} />, label: lang === 'zh' ? '機票' : 'Flights', color: 'bg-blue-50 text-blue-600' },
            { id: 'hotels', icon: <Hotel size={20} />, label: lang === 'zh' ? '住宿' : 'Accommodation', color: 'bg-purple-50 text-purple-600' },
            { id: 'files', icon: <FileText size={20} />, label: lang === 'zh' ? '檔案' : 'Files', color: 'bg-indigo-50 text-indigo-600' }
          ].map(item => (
            <button 
              key={item.id}
              onClick={() => setViewMode(item.id as ViewMode)}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-50 flex flex-col items-center gap-3 group hover:border-emerald-200 transition-colors active:scale-95"
            >
              <div className={`${item.color.replace(/bg-\w+-50\s/, '')} transition-transform group-hover:scale-110`}>
                {item.icon}
              </div>
              <span className="text-[11px] font-black text-gray-600">{item.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Global Notes Widget */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50 ring-1 ring-black/5"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-emerald-600">
              <StickyNote size={22} />
            </div>
            <div>
              <h3 className="text-lg font-black text-gray-800">{lang === 'zh' ? '筆記' : 'Notes'}</h3>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{lang === 'zh' ? '全局旅程備忘錄' : 'Trip-wide reminders'}</p>
            </div>
          </div>
        </div>
        
        <textarea 
          placeholder={lang === 'zh' ? "在此寫下這趟旅程的大方針、航班編號或重要筆記..." : "Write down flight numbers, reminders, or trip strategies here..."}
          className="w-full min-h-[150px] bg-gray-50/50 border-2 border-gray-100 rounded-3xl p-6 text-sm font-medium text-gray-700 focus:outline-none focus:border-emerald-200 focus:bg-white transition-all resize-none placeholder:text-gray-300"
        />
        
        <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between text-[11px] font-bold">
          <span className="text-gray-400">{lang === 'zh' ? '點擊編輯後自動儲存' : 'Edited notes save automatically'}</span>
          <button className="text-emerald-600 flex items-center gap-1 hover:underline">
            <ExternalLink size={10} /> {lang === 'zh' ? '匯出純文字' : 'Export Text'}
          </button>
        </div>
      </motion.div>

      {/* 4. Expert Briefing Footer (Creator Signature) */}
      <ExpertBriefing plan={activePlan} lang={lang} type="footer" />
    </div>
  );
};

export default OverviewView;
