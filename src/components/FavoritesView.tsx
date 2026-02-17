import React, { useState } from 'react';
import { Heart, User, Package, Plus, Compass } from 'lucide-react';
import { LangType, TravelItem, Template } from '../types';

interface FavoritesViewProps {
    lang: LangType;
    t: any;
    customAssets: TravelItem[];
    subscribedCreators: string[];
    savedTemplates?: Template[];
    onCreatorClick: (id: string) => void;
    onSetShowCustomItemModal: (show: boolean) => void;
    onNavigateToExplore: () => void;
}

type FavSubTab = 'templates' | 'creators' | 'myAssets';

const FavoritesView: React.FC<FavoritesViewProps> = ({
    lang, t, customAssets, subscribedCreators, savedTemplates = [],
    onCreatorClick, onSetShowCustomItemModal, onNavigateToExplore
}) => {
    const [subTab, setSubTab] = useState<FavSubTab>('templates');

    const subTabs: { id: FavSubTab; label: string; count: number }[] = [
        { id: 'templates', label: lang === 'zh' ? '收藏模板' : 'Templates', count: savedTemplates.length },
        { id: 'creators', label: lang === 'zh' ? '關注創作者' : 'Creators', count: subscribedCreators.length },
        { id: 'myAssets', label: lang === 'zh' ? '我的素材' : 'My Assets', count: customAssets.length },
    ];

    const EmptyState = ({ icon: Icon, title, subtitle, actionLabel, onAction }: {
        icon: any; title: string; subtitle: string; actionLabel?: string; onAction?: () => void;
    }) => (
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Icon size={28} className="text-gray-300" />
            </div>
            <h3 className="text-base font-bold text-gray-600 mb-1">{title}</h3>
            <p className="text-sm text-gray-400 mb-5 max-w-[240px]">{subtitle}</p>
            {actionLabel && onAction && (
                <button
                    onClick={onAction}
                    className="px-5 py-2.5 bg-teal-500 text-white rounded-full text-sm font-bold hover:bg-teal-600 transition-colors"
                >
                    {actionLabel}
                </button>
            )}
        </div>
    );

    return (
        <div className="h-full flex flex-col bg-white">
            {/* Header */}
            <div className="px-4 pt-4 pb-2">
                <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <Heart size={20} className="text-red-400" />
                    {lang === 'zh' ? '我的收藏' : 'My Favorites'}
                </h1>
            </div>

            {/* Sub-tabs */}
            <div className="flex px-4 gap-1 border-b border-gray-100">
                {subTabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setSubTab(tab.id)}
                        className={`flex-1 py-2.5 text-xs font-bold rounded-t-lg transition-colors relative ${subTab === tab.id
                            ? 'text-teal-600'
                            : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        {tab.label}
                        {tab.count > 0 && (
                            <span className="ml-1 text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full">
                                {tab.count}
                            </span>
                        )}
                        {subTab === tab.id && (
                            <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-teal-500 rounded-full" />
                        )}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
                {subTab === 'templates' && (
                    savedTemplates.length === 0 ? (
                        <EmptyState
                            icon={Heart}
                            title={lang === 'zh' ? '還沒有收藏模板' : 'No saved templates'}
                            subtitle={lang === 'zh' ? '在探索頁面按 ❤️ 收藏喜歡的旅行模板' : 'Tap ❤️ on templates you like in Explore'}
                            actionLabel={lang === 'zh' ? '去探索' : 'Explore'}
                            onAction={onNavigateToExplore}
                        />
                    ) : (
                        <div className="grid grid-cols-2 gap-3">
                            {savedTemplates.map(tpl => (
                                <div key={tpl.id} className="border border-gray-100 rounded-xl p-3 hover:shadow-md transition-shadow">
                                    <div className="text-sm font-bold text-gray-700 mb-1">{tpl.name}</div>
                                    <div className="text-xs text-gray-400">{tpl.authorId}</div>
                                </div>
                            ))}
                        </div>
                    )
                )}

                {subTab === 'creators' && (
                    subscribedCreators.length === 0 ? (
                        <EmptyState
                            icon={User}
                            title={lang === 'zh' ? '還沒有關注創作者' : 'No followed creators'}
                            subtitle={lang === 'zh' ? '關注旅遊達人，獲得最新行程靈感' : 'Follow travel experts for inspiration'}
                            actionLabel={lang === 'zh' ? '去探索' : 'Explore'}
                            onAction={onNavigateToExplore}
                        />
                    ) : (
                        <div className="space-y-3">
                            {subscribedCreators.map(creatorId => (
                                <button
                                    key={creatorId}
                                    onClick={() => onCreatorClick(creatorId)}
                                    className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
                                        {creatorId.slice(0, 1).toUpperCase()}
                                    </div>
                                    <div className="text-left">
                                        <div className="text-sm font-bold text-gray-700">{creatorId}</div>
                                        <div className="text-xs text-gray-400">{lang === 'zh' ? '旅遊創作者' : 'Travel Creator'}</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )
                )}

                {subTab === 'myAssets' && (
                    <>
                        {customAssets.length === 0 ? (
                            <EmptyState
                                icon={Package}
                                title={lang === 'zh' ? '還沒有自訂素材' : 'No custom assets'}
                                subtitle={lang === 'zh' ? '建立自己的景點、餐廳、住宿，隨時加入行程' : 'Create your own places to add to trips'}
                                actionLabel={lang === 'zh' ? '＋ 新增素材' : '+ New Asset'}
                                onAction={() => onSetShowCustomItemModal(true)}
                            />
                        ) : (
                            <div className="space-y-2">
                                {customAssets.map(asset => (
                                    <div key={asset.id} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100">
                                        <div className="text-2xl">{asset.image || '📍'}</div>
                                        <div className="flex-1">
                                            <div className="text-sm font-bold text-gray-700">{asset.title}</div>
                                            <div className="text-xs text-gray-400">{asset.type}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Always show add button when there are items */}
                        {customAssets.length > 0 && (
                            <button
                                onClick={() => onSetShowCustomItemModal(true)}
                                className="w-full mt-4 py-3 border-2 border-dashed border-gray-200 text-gray-400 rounded-xl text-sm font-bold hover:border-teal-400 hover:text-teal-500 transition-colors flex items-center justify-center gap-2"
                            >
                                <Plus size={16} />
                                {lang === 'zh' ? '新增自訂素材' : 'Add Custom Asset'}
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default FavoritesView;
