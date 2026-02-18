import { Home, FolderOpen, Plus, Package, Map as MapIcon, PanelsTopLeft, Settings, Globe, MoreHorizontal, User } from 'lucide-react';
import { useNavigation, NavItem } from '../hooks/useNavigation';
import { LangType } from '../types';
import { TRANSLATIONS } from '../data/translations';
import React, { useState, useRef, useEffect } from 'react';

interface DesktopSidebarProps {
    activePlan: any;
    activeView: string;
    onNavigate: (view: string) => void;
    onNewPlan: () => void;
    onShowPlanManager: () => void;
    onSetLang: () => void;
    lang: LangType;
    isSidebarOpen: boolean;
    setIsSidebarOpen: (open: boolean) => void;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
    activePlan,
    activeView,
    onNavigate,
    onNewPlan,
    onShowPlanManager,
    onSetLang,
    lang,
    isSidebarOpen,
    setIsSidebarOpen
}) => {
    const { items, desktopMore, getLabel } = useNavigation({
        hasActivePlan: !!activePlan,
        platform: 'desktop',
        lang
    });

    const [showMore, setShowMore] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);
    const t = TRANSLATIONS[lang];

    const handleNavClick = (item: any) => {
        if (item.action === 'modal') {
            if (item.id === 'new') onNewPlan();
        } else if (item.action === 'navigate') {
            if (item.id === 'projects') {
                onShowPlanManager();
            } else if (item.id === 'assets') {
                setIsSidebarOpen(!isSidebarOpen);
            } else {
                onNavigate(item.id);
            }
        }
    };

    const handleMoreClick = (item: NavItem) => {
        if (item.id === 'lang') {
            onSetLang();
            // Keep open for language toggle
        } else if (item.action === 'navigate') {
            setShowMore(false);
            if (item.id === 'account') {
                // Future account modal logic
            } else {
                onNavigate(item.id);
            }
        } else {
            // For other menu items, default to closing or specific logic
            setShowMore(false);
        }
    };

    // Close popover when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
                setShowMore(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="hidden lg:flex flex-col w-20 bg-white border-r border-gray-200 items-center py-4 gap-2 z-[2000]">
            {/* Logo area */}
            <div className="w-full px-2 mb-4 flex flex-col items-center gap-4">
                <div
                    onClick={() => onNavigate('discovery')}
                    className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm hover:scale-105 transition-transform cursor-pointer"
                >
                    TC
                </div>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 flex flex-col gap-1 w-full px-1.5">
                {items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeView === item.id;
                    const label = getLabel(item);

                    return (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item)}
                            className={`
                                group relative w-full h-14 rounded-lg flex flex-col items-center justify-center
                                transition-all duration-200
                                ${isActive
                                    ? 'bg-teal-50 text-teal-600'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                                }
                            `}
                        >
                            <Icon size={22} className={isActive ? 'text-teal-600' : ''} />
                            <span className={`text-[10px] mt-1 font-medium leading-tight text-center px-1 break-words w-full ${isActive ? 'text-teal-600' : 'text-gray-400'}`}>
                                {label}
                            </span>

                            {/* Tooltip on hover */}
                            <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-[11px] rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity z-[60]">
                                {label}
                                <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Bottom Avatar / More Menu */}
            <div className="relative w-full px-1.5 mt-auto" ref={popoverRef}>
                <button
                    onClick={() => setShowMore(!showMore)}
                    className={`
                        w-full h-14 rounded-lg flex flex-col items-center justify-center transition-all duration-200
                        ${showMore ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50'}
                    `}
                >
                    <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-xs shadow-sm mb-1">
                        W
                    </div>
                </button>

                {/* Popover Card */}
                {showMore && (
                    <div className="absolute bottom-0 left-full ml-4 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[100] animate-in fade-in slide-in-from-left-2 duration-200">
                        {/* Profile Header (Stats) */}
                        <div className="p-4 bg-gray-50/50 border-b border-gray-100">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                                    W
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-gray-900 truncate">Wennie L.</h4>
                                    <span className="text-[10px] bg-teal-100 text-teal-700 font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">
                                        {t.proMember || 'PRO'}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between px-2">
                                <div className="text-center">
                                    <div className="text-sm font-bold text-gray-900">12</div>
                                    <div className="text-[10px] text-gray-400 uppercase">{t.plans || 'Plans'}</div>
                                </div>
                                <div className="w-px h-6 bg-gray-200" />
                                <div className="text-center">
                                    <div className="text-sm font-bold text-gray-900">856</div>
                                    <div className="text-[10px] text-gray-400 uppercase font-medium">{t.followers || 'Followers'}</div>
                                </div>
                                <div className="w-px h-6 bg-gray-200" />
                                <div className="text-center">
                                    <div className="text-sm font-bold text-gray-900">42</div>
                                    <div className="text-[10px] text-gray-400 uppercase">{t.following || 'Following'}</div>
                                </div>
                            </div>
                        </div>

                        {/* Popover Items */}
                        <div className="p-2">
                            {desktopMore.map((item) => {
                                const Icon = item.icon;
                                const label = getLabel(item);
                                if (item.id === 'account') return null; // Already in header

                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => handleMoreClick(item)}
                                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 text-gray-700 transition-colors group"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:text-teal-600 group-hover:bg-teal-50 transition-colors">
                                            <Icon size={18} />
                                        </div>
                                        <span className="text-sm font-semibold">{label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DesktopSidebar;
