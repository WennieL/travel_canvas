import { useMemo } from 'react';
import { LangType } from '../types';

export interface NavItem {
    id: string;
    icon: string;
    label: string;
    labelEn: string;
    alwaysShow: boolean;      // Show in all states
    showWhen?: 'editing';     // Or only when editing
    desktop?: boolean;        // Desktop-only items
    mobile?: boolean;         // Mobile-only items
    action?: 'navigate' | 'modal' | 'menu';  // Action type
}

// Navigation configuration - single source of truth
const NAV_CONFIG: NavItem[] = [
    {
        id: 'explore',
        icon: '🔍',
        label: '探索',
        labelEn: 'Explore',
        alwaysShow: true,
        action: 'navigate',
    },
    {
        id: 'projects',
        icon: '📂',
        label: '我的創作',
        labelEn: 'My Projects',
        alwaysShow: true,
        action: 'navigate',
    },
    {
        id: 'new',
        icon: '➕',
        label: '新計畫',
        labelEn: 'New Plan',
        alwaysShow: true,
        action: 'modal',
    },
    {
        id: 'assets',
        icon: '🎨',
        label: '素材庫',
        labelEn: 'Assets',
        alwaysShow: false,
        showWhen: 'editing',
        action: 'navigate',
    },
    {
        id: 'map',
        icon: '🗺️',
        label: '地圖',
        labelEn: 'Map',
        alwaysShow: false,
        showWhen: 'editing',
        desktop: true,  // Desktop shows map in sidebar, mobile in "More" menu
        action: 'navigate',
    },
    {
        id: 'more',
        icon: '•••',
        label: '更多',
        labelEn: 'More',
        alwaysShow: true,
        mobile: true,  // Mobile-only
        action: 'menu',
    },
];

interface UseNavigationOptions {
    hasActivePlan: boolean;
    platform?: 'desktop' | 'mobile';
    lang?: LangType;
}

export const useNavigation = ({
    hasActivePlan,
    platform = 'desktop',
    lang = 'zh'
}: UseNavigationOptions) => {
    const visibleItems = useMemo(() => {
        return NAV_CONFIG.filter(item => {
            // Filter by platform
            if (item.desktop && platform === 'mobile') return false;
            if (item.mobile && platform === 'desktop') return false;

            // Filter by state (editing vs non-editing)
            if (item.alwaysShow) return true;
            if (item.showWhen === 'editing' && hasActivePlan) return true;

            return false;
        });
    }, [hasActivePlan, platform]);

    // Get label based on language
    const getLabel = (item: NavItem) => {
        return lang === 'en' ? item.labelEn : item.label;
    };

    return {
        items: visibleItems,
        getLabel,
        // Helper to find specific nav item
        findItem: (id: string) => NAV_CONFIG.find(item => item.id === id),
    };
};
