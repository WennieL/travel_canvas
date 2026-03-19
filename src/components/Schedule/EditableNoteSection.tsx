import React from 'react';
import { StickyNote as NoteIcon } from 'lucide-react';
import { ScheduleItem } from '../../types';

interface EditableNoteSectionProps {
    item: ScheduleItem;
    t: any;
    editingNoteId: string | null;
    setEditingNoteId: (id: string | null) => void;
    onNoteChange: (v: string) => void;
}

export const EditableNoteSection: React.FC<EditableNoteSectionProps> = ({
    item, t, editingNoteId, setEditingNoteId, onNoteChange
}) => {
    const isEditing = editingNoteId === item.instanceId;

    if (!item.notes && !isEditing) return null;

    return (
        <div
            className={`mt-1 flex items-start gap-1 pb-1 pt-0.5 rounded transition-all group/note relative ${isEditing ? 'bg-amber-50/50 ring-1 ring-amber-200 px-1.5' : 'hover:bg-gray-50/80 cursor-pointer'}`}
            onClick={(e) => {
                e.stopPropagation();
                setEditingNoteId(item.instanceId);
            }}
        >
            <span className={`text-[10px] font-bold shrink-0 mt-0.5 ${isEditing ? 'text-amber-600' : 'text-amber-500/80'}`}>
                {t.noteLabel}:
            </span>
            {isEditing ? (
                <input
                    type="text"
                    placeholder={t.addNote}
                    value={item.notes || ''}
                    autoFocus
                    onBlur={() => setEditingNoteId(null)}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => onNoteChange(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') setEditingNoteId(null);
                    }}
                    className="flex-1 text-[11px] bg-transparent border-none focus:ring-0 outline-none p-0 text-gray-700 placeholder-gray-300 animate-in fade-in duration-200 font-medium"
                />
            ) : (
                <span className="flex-1 text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
                    {item.notes || t.clickToAddNote}
                </span>
            )}

            {/* Mobile Edit Indicator */}
            {!isEditing && (
                <div className="md:hidden absolute right-1 top-1/2 -translate-y-1/2 opacity-30">
                    <NoteIcon size={8} />
                </div>
            )}
        </div>
    );
};
