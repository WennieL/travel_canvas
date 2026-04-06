import React, { createContext, useContext } from 'react';
import { useUIState } from '../hooks/useUIState';

// ─── Types ───────────────────────────────────────────────────────────────────

export type UIStateType = ReturnType<typeof useUIState>;

// ─── Context ─────────────────────────────────────────────────────────────────

export const UIContext = createContext<UIStateType>({} as UIStateType);

// ─── Hook ─────────────────────────────────────────────────────────────────────

/**
 * useUI — access all UI state (modals, tabs, panels, etc.) from any component.
 * Replace `ui` prop drilling with this hook.
 *
 * @example
 * const { viewMode, setViewMode, showMobileLibrary } = useUI();
 */
export const useUI = (): UIStateType => useContext(UIContext);

// ─── Provider ────────────────────────────────────────────────────────────────

interface UIProviderProps {
    value: UIStateType;
    children: React.ReactNode;
}

export const UIProvider: React.FC<UIProviderProps> = ({ value, children }) => {
    return (
        <UIContext.Provider value={value}>
            {children}
        </UIContext.Provider>
    );
};
