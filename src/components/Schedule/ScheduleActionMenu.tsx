import React from 'react';
import ReactDOM from 'react-dom';
import { 
    Trash2, Clock, StickyNote as NoteIcon, 
    MoveRight, Lock, Banknote, MoreVertical 
} from 'lucide-react';
import { ScheduleItem } from '../../types';

interface ScheduleActionMenuProps {
    item: ScheduleItem;
    index: number;
    t: any;
    lang: string;
    onRemoveItem: (index: number) => void;
    onMoveItem: (index: number) => void;
    setEditingPriceId: (id: string | null) => void;
    setEditingNoteId: (id: string | null) => void;
    setEditingDurationId: (id: string | null) => void;
    setOpenMenuId: (id: string | null) => void;
    openMenuId: string | null;
    menuPosition: { top: number, left: number, openUpwards: boolean } | null;
    setMenuPosition: (pos: { top: number, left: number, openUpwards: boolean } | null) => void;
    confirm: (options: any) => Promise<boolean>;
}

export const ScheduleActionMenu: React.FC<ScheduleActionMenuProps> = ({
    item, index, t, lang, onRemoveItem, onMoveItem,
    setEditingPriceId, setEditingNoteId, setEditingDurationId,
    setOpenMenuId, openMenuId, menuPosition, setMenuPosition,
    confirm
}) => {
    
    const handleDelete = async (e: React.MouseEvent) => {
        e.stopPropagation();
        setOpenMenuId(null);
        const confirmed = await confirm({
            title: t.deleteItemConfirmTitle,
            message: t.deleteItemConfirmMessage,
            type: 'warning',
            confirmText: t.delete,
            cancelText: t.cancel
        });
        if (confirmed) {
            onRemoveItem(index);
        }
    };

    return (
        <div className="flex flex-col items-end gap-1 flex-shrink-0 pl-1">
            <div className="flex items-center gap-1 relative">
                
                {/* Desktop Hover Actions (Visible >= 1024px) */}
                <div className="hidden lg:flex absolute top-[-32px] right-0 gap-1.5 transition-all z-20 opacity-40 group-hover:opacity-100">
                    <button
                        onClick={(e) => { e.stopPropagation(); setEditingPriceId(item.instanceId); }}
                        className="bg-white text-gray-400 hover:text-teal-500 p-2 rounded-full shadow-md border border-gray-100 transition-all hover:scale-110 active:scale-95"
                        title={t.setBudget}
                    >
                        <Banknote size={18} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); setEditingNoteId(item.instanceId); }}
                        className="bg-white text-gray-400 hover:text-amber-500 p-2 rounded-full shadow-md border border-gray-100 transition-all hover:scale-110 active:scale-95"
                        title={t.addNote}
                    >
                        <NoteIcon size={18} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); onMoveItem(index); }}
                        className="bg-white text-gray-400 hover:text-blue-500 p-2 rounded-full shadow-md border border-gray-100 transition-all hover:scale-110 active:scale-95"
                        title={t.moveToDay}
                    >
                        <MoveRight size={18} />
                    </button>
                    <button
                        onClick={handleDelete}
                        className="bg-white text-gray-400 hover:text-red-500 p-2 rounded-full shadow-md border border-gray-100 transition-all hover:scale-110 active:scale-95"
                        title={t.delete}
                    >
                        <Trash2 size={18} />
                    </button>
                </div>

                {/* Mobile Action Menu (Three Dots) */}
                <div className="lg:hidden touch-device-visible relative">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            const rect = e.currentTarget.getBoundingClientRect();
                            const spaceBelow = window.innerHeight - rect.bottom;
                            const openUpwards = spaceBelow < 250; 

                            setMenuPosition({
                                top: openUpwards ? rect.top + window.scrollY : rect.bottom + window.scrollY,
                                left: rect.right - 150 + window.scrollX,
                                openUpwards
                            });
                            setOpenMenuId(openMenuId === item.instanceId ? null : item.instanceId);
                        }}
                        className="p-1.5 text-gray-400 hover:text-teal-600 rounded-full active:bg-gray-100"
                    >
                        <MoreVertical size={18} />
                    </button>

                    {openMenuId === item.instanceId && ReactDOM.createPortal(
                        <>
                            <div className="fixed inset-0 z-[9998]" onClick={(e) => { e.stopPropagation(); setOpenMenuId(null); }}></div>
                            <div
                                style={{ top: menuPosition?.top, left: menuPosition?.left }}
                                className={`absolute w-[150px] bg-white border border-gray-100 shadow-xl rounded-xl p-1.5 flex flex-col gap-1 z-[9999] animate-in fade-in zoom-in-95 duration-200 
                                    ${menuPosition?.openUpwards ? 'origin-bottom -translate-y-full mb-1' : 'origin-top mt-1'}
                                `}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={(e) => { e.stopPropagation(); setEditingPriceId(item.instanceId); setOpenMenuId(null); }}
                                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-600 rounded-lg w-full text-left"
                                >
                                    <Banknote size={14} />
                                    {t.setBudget}
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); setEditingDurationId(item.instanceId); setOpenMenuId(null); }}
                                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-600 rounded-lg w-full text-left"
                                >
                                    <Clock size={14} />
                                    {t.setDuration || (lang === 'zh' ? '設定停留時間' : 'Set Duration')}
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); setEditingNoteId(item.instanceId); setOpenMenuId(null); }}
                                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-amber-50 hover:text-amber-600 rounded-lg w-full text-left"
                                >
                                    <NoteIcon size={14} />
                                    {t.addNote}
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); onMoveItem(index); setOpenMenuId(null); }}
                                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg w-full text-left"
                                >
                                    <MoveRight size={14} />
                                    {t.moveToDay}
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg w-full text-left"
                                >
                                    <Trash2 size={14} />
                                    {t.delete}
                                </button>
                            </div>
                        </>,
                        document.body
                    )}
                </div>
            </div>
        </div>
    );
};
