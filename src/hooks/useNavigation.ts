import { useMemo } from 'react';
import {
    Compass,
    Heart,
    Calendar,
    User,
    MoreHorizontal,
    DollarSign,
    ListTodo,
    Settings,
    Globe,
    Plus,
    Map as MapIcon,
    Package
} from 'lucide-react';
import { LangType } from '../types';

export interface NavItem {
    id: string;
    icon: any; // Lucide icon component
    label: string;
    labelEn: string;
    alwaysShow: boolean;      // Show in all states
    showWhen?: 'editing';     // Or only when editing
    desktop?: boolean;        // Desktop-only items
    mobile?: boolean;         // Mobile-only items
    isMobilePrimary?: boolean; // Shows in the bottom 5 tabs
    isMobileMore?: boolean;    // Shows in the "More" bottom sheet
    isDesktopMore?: boolean;   // Shows in the desktop avatar popover
    action?: 'navigate' | 'modal' | 'menu';  // Action type
}

// Navigation configuration - single source of truth
const NAV_CONFIG: NavItem[] = [
    {
        id: 'discovery',
        icon: Compass,
        label: '探索',
        labelEn: 'Explore',
        alwaysShow: true,
        isMobilePrimary: true,
        action: 'navigate',
    },
    {
        id: 'favorites',
        icon: Heart,
        label: '收藏',
        labelEn: 'Favorites',
        alwaysShow: true,
        isMobilePrimary: true,
        action: 'navigate',
    },
    {
        id: 'plan',
        icon: Calendar,
        label: '行程',
        labelEn: 'Plan',
        alwaysShow: true,
        isMobilePrimary: true,
        action: 'navigate',
    },
    {
        id: 'new',
        icon: Plus,
        label: '新計畫',
        labelEn: 'New Plan',
        alwaysShow: true,
        mobile: true, // Only as a standalone button on mobile (bottom nav if added)
        action: 'modal',
    },
    {
        id: 'projects',
        icon: User,
        label: '我的',
        labelEn: 'My Projects',
        alwaysShow: true,
        isMobilePrimary: true,
        action: 'navigate',
    },
    {
        id: 'assets',
        icon: Package,
        label: '素材庫',
        labelEn: 'Assets',
        alwaysShow: false,
        showWhen: 'editing',
        desktop: true,
        action: 'navigate',
    },
    {
        id: 'map',
        icon: MapIcon,
        label: '地圖',
        labelEn: 'Map',
        alwaysShow: false,
        showWhen: 'editing',
        desktop: true,
        action: 'navigate',
    },
    {
        id: 'budget',
        icon: DollarSign,
        label: '預算追蹤',
        labelEn: 'Budget',
        alwaysShow: false,
        showWhen: 'editing',
        isMobileMore: true,
        desktop: true,
        action: 'navigate',
    },
    {
        id: 'checklist',
        icon: ListTodo,
        label: '打包清單',
        labelEn: 'Checklist',
        alwaysShow: false,
        showWhen: 'editing',
        isMobileMore: true,
        desktop: true,
        action: 'navigate',
    },
    {
        id: 'account',
        icon: User,
        label: '個人帳戶',
        labelEn: 'My Account',
        alwaysShow: true,
        isMobileMore: true,
        isDesktopMore: true,
        action: 'navigate',
    },
    {
        id: 'creator_center',
        icon: Plus, // We can change this to something more "creative" later
        label: '創作者中心',
        labelEn: 'Creator Studio',
        alwaysShow: true,
        isMobileMore: true,
        isDesktopMore: true,
        action: 'navigate',
    },
    {
        id: 'lang',
        icon: Globe,
        label: '切換語言',
        labelEn: 'Language',
        alwaysShow: true,
        isMobileMore: true,
        isDesktopMore: true,
        action: 'menu',
    },
    {
        id: 'settings',
        icon: Settings,
        label: '設定',
        labelEn: 'Settings',
        alwaysShow: true,
        isMobileMore: true,
        isDesktopMore: true,
        action: 'menu',
    },
    {
        id: 'more',
        icon: MoreHorizontal,
        label: '更多',
        labelEn: 'More',
        alwaysShow: true,
        mobile: true,
        isMobilePrimary: true,
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
    const items = useMemo(() => {
        return NAV_CONFIG.filter(item => {
            // Filter by platform
            if (item.desktop && platform === 'mobile') return false;
            if (item.mobile && platform === 'desktop') return false;

            // [NEW] On desktop, filter out items that belong to the "More" popover
            if (platform === 'desktop' && item.isDesktopMore) return false;

            // Filter by state (editing vs non-editing)
            if (item.alwaysShow) return true;
            if (item.showWhen === 'editing' && hasActivePlan) return true;

            return false;
        });
    }, [hasActivePlan, platform]);

    const mobilePrimary = useMemo(() => {
        return items.filter(i => i.isMobilePrimary);
    }, [items]);

    const mobileMore = useMemo(() => {
        return NAV_CONFIG.filter(i => i.isMobileMore).filter(item => {
            if (item.alwaysShow) return true;
            if (item.showWhen === 'editing' && hasActivePlan) return true;
            return false;
        });
    }, [hasActivePlan]);

    const desktopMore = useMemo(() => {
        return NAV_CONFIG.filter(i => i.isDesktopMore);
    }, []);

    // Get label based on language
    const getLabel = (item: NavItem) => {
        return lang === 'en' ? item.labelEn : item.label;
    };

    return {
        items,
        mobilePrimary,
        mobileMore,
        desktopMore,
        getLabel,
        // Helper to find specific nav item
        findItem: (id: string) => NAV_CONFIG.find(item => item.id === id),
    };
};
