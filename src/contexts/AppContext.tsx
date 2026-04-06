import React, { createContext, useContext } from 'react';
import type { LangType } from '../types';
import type { Translation } from '../data/translations';

// ─── Types ───────────────────────────────────────────────────────────────────

type ToastType = 'success' | 'warning' | 'error' | 'info';

export interface AppContextValue {
    /** Current language ('zh' | 'en') */
    lang: LangType;
    /** Full translation object for the current language */
    t: Translation;
    /** Whether the viewport is mobile-sized */
    isMobile: boolean;
    /** Show a toast notification */
    showToastMessage: (message: string, type?: ToastType, duration?: number) => void;
}

// ─── Context ─────────────────────────────────────────────────────────────────

export const AppContext = createContext<AppContextValue>({
    lang: 'zh',
    t: {} as Translation,
    isMobile: false,
    showToastMessage: () => {},
});

// ─── Hook ─────────────────────────────────────────────────────────────────────

/**
 * useApp — access shared app-level state from any component.
 * Replace `lang`, `t`, `isMobile`, `showToastMessage` props with this hook.
 *
 * @example
 * const { lang, t, showToastMessage } = useApp();
 */
export const useApp = (): AppContextValue => useContext(AppContext);

// ─── Provider ────────────────────────────────────────────────────────────────

interface AppProviderProps extends AppContextValue {
    children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({
    lang,
    t,
    isMobile,
    showToastMessage,
    children,
}) => {
    return (
        <AppContext.Provider value={{ lang, t, isMobile, showToastMessage }}>
            {children}
        </AppContext.Provider>
    );
};
