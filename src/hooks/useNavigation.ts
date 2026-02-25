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
    Languages,
    Plus,
    Map as MapIcon,
    Package
} from 'lucide-react';
import { LangType } from '../types';

export interface NavItem {
    id: string;
    icon: any; // Lucide icon component
    labelKey: string;         // [NEW] Key in translations.ts
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
        labelKey: 'discover',
        alwaysShow: true,
        isMobilePrimary: true,
        action: 'navigate',
    },
    {
        id: 'favorites',
        icon: Heart,
        labelKey: 'favoritesLabel',
        alwaysShow: true,
        isMobilePrimary: true,
        action: 'navigate',
    },
    {
        id: 'plan',
        icon: Calendar,
        labelKey: 'plan',
        alwaysShow: true,
        isMobilePrimary: true,
        action: 'navigate',
    },
    {
        id: 'new',
        icon: Plus,
        labelKey: 'newPlanLabel',
        alwaysShow: true,
        mobile: true,
        action: 'modal',
    },
    {
        id: 'projects',
        icon: User,
        labelKey: 'myPlans',
        alwaysShow: true,
        isMobilePrimary: true,
        action: 'navigate',
    },
    {
        id: 'assets',
        icon: Package,
        labelKey: 'assets',
        alwaysShow: false,
        showWhen: 'editing',
        desktop: true,
        action: 'navigate',
    },
    {
        id: 'map',
        icon: MapIcon,
        labelKey: 'map',
        alwaysShow: false,
        showWhen: 'editing',
        desktop: true,
        action: 'navigate',
    },
    {
        id: 'budget',
        icon: DollarSign,
        labelKey: 'budget',
        alwaysShow: false,
        showWhen: 'editing',
        isMobileMore: true,
        desktop: true,
        action: 'navigate',
    },
    {
        id: 'checklist',
        icon: ListTodo,
        labelKey: 'checklist',
        alwaysShow: false,
        showWhen: 'editing',
        isMobileMore: true,
        desktop: true,
        action: 'navigate',
    },
    {
        id: 'account',
        icon: User,
        labelKey: 'accountLabel',
        alwaysShow: true,
        isMobileMore: true,
        isDesktopMore: true,
        action: 'navigate',
    },
    {
        id: 'creator_center',
        icon: Plus,
        labelKey: 'creatorProfile',
        alwaysShow: true,
        isMobileMore: true,
        isDesktopMore: true,
        action: 'navigate',
    },
    {
        id: 'lang',
        icon: Languages,
        labelKey: 'languageLabel',
        alwaysShow: true,
        isMobileMore: true,
        isDesktopMore: true,
        action: 'menu',
    },
    {
        id: 'settings',
        icon: Settings,
        labelKey: 'settingsLabel',
        alwaysShow: true,
        isMobileMore: true,
        isDesktopMore: true,
        action: 'menu',
    },
    {
        id: 'more',
        icon: MoreHorizontal,
        labelKey: 'moreLabel',
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
    t?: any; // [NEW] Translation object
}

export const useNavigation = ({
    hasActivePlan,
    platform = 'desktop',
    lang = 'zh',
    t
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

    // Get label based on language or translation key
    const getLabel = (item: NavItem) => {
        if (t && t[item.labelKey]) return t[item.labelKey];
        // Fallback or specific logic if needed
        return item.labelKey;
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
