import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { ItemType, TransportMode } from '../../types';

interface CustomItemData {
    name: string;
    type: ItemType;
    price: string;
    time: string;
    notes: string;
    origin?: string;
    destination?: string;
}

interface CustomItemModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreateItem: (data: CustomItemData) => void;
    t: Record<string, string>;
}

export const CustomItemModal: React.FC<CustomItemModalProps> = ({
    isOpen,
    onClose,
    onCreateItem,
    t
}) => {
    const [itemType, setItemType] = useState<ItemType>('attraction');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [time, setTime] = useState('');
    const [notes, setNotes] = useState('');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const handleClose = () => {
        setName('');
        setPrice('');
        setTime('');
        setNotes('');
        setOrigin('');
        setDestination('');
        setItemType('attraction');
        onClose();
    };

    const handleCreate = () => {
        onCreateItem({
            name,
            type: itemType,
            price,
            time,
            notes,
            origin,
            destination
        });
        handleClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl w-full max-w-md p-5 shadow-2xl">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Plus size={18} className="text-teal-600" />
                    {t.createCustom}
                </h3>

                {/* Type Selector */}
                <div className="mb-4">
                    <label className="text-xs text-gray-500 mb-1 block">{t.type || '類型'}</label>
                    <div className="flex flex-wrap gap-2">
                        {(['attraction', 'food', 'hotel', 'transport', 'custom'] as ItemType[]).map(type => (
                            <button
                                key={type}
                                onClick={() => setItemType(type)}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${itemType === type
                                        ? 'bg-teal-600 border-teal-600 text-white'
                                        : 'bg-white border-gray-200 text-gray-600 hover:border-teal-300'
                                    }`}
                            >
                                {type === 'attraction' && '🎯 '}
                                {type === 'food' && '🍜 '}
                                {type === 'hotel' && '🏨 '}
                                {type === 'transport' && '✈️ '}
                                {type === 'custom' && '📌 '}
                                {t[type] || type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Transport-specific fields */}
                {itemType === 'transport' && (
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="text-xs text-blue-600 font-medium mb-2">✈️ 交通資訊</div>
                        <div className="grid grid-cols-2 gap-2">
                            <input
                                className="border rounded-lg p-2 text-sm"
                                placeholder="出發地 (如: 台北)"
                                value={origin}
                                onChange={e => setOrigin(e.target.value)}
                            />
                            <input
                                className="border rounded-lg p-2 text-sm"
                                placeholder="目的地 (如: 東京)"
                                value={destination}
                                onChange={e => setDestination(e.target.value)}
                            />
                        </div>
                    </div>
                )}

                {/* Name (optional for transport if origin/dest provided) */}
                <div className="mb-3">
                    <label className="text-xs text-gray-500 mb-1 block">
                        {t.name} {itemType === 'transport' && <span className="text-gray-400">(可選，留空則自動產生)</span>}
                    </label>
                    <input
                        className="w-full border rounded-lg p-2 text-sm"
                        placeholder={itemType === 'transport' ? '如: CI100航班' : t.name}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                {/* Time & Price Row */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                        <label className="text-xs text-gray-500 mb-1 block">🕐 時間</label>
                        <input
                            className="w-full border rounded-lg p-2 text-sm"
                            type="time"
                            value={time}
                            onChange={e => setTime(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="text-xs text-gray-500 mb-1 block">💰 {t.cost}</label>
                        <input
                            className="w-full border rounded-lg p-2 text-sm"
                            type="number"
                            placeholder="0"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>
                </div>

                {/* Notes */}
                <div className="mb-4">
                    <label className="text-xs text-gray-500 mb-1 block">📝 備註</label>
                    <textarea
                        className="w-full border rounded-lg p-2 text-sm resize-none"
                        rows={2}
                        placeholder="航班號、座位、提醒事項..."
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                    />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-2">
                    <button
                        onClick={handleClose}
                        className="px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 rounded-lg"
                    >
                        {t.cancel}
                    </button>
                    <button
                        onClick={handleCreate}
                        className="px-4 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    >
                        {t.create}
                    </button>
                </div>
            </div>
        </div>
    );
};
