import React, { createContext, useState, useCallback, ReactNode } from 'react';

import { ConfirmType, ConfirmOptions } from '../types';

interface ConfirmContextType {
    confirm: (options: ConfirmOptions) => Promise<boolean>;
}

export const ConfirmContext = createContext<ConfirmContextType | undefined>(undefined);

interface ConfirmProviderProps {
    children: ReactNode;
}

export const ConfirmProvider: React.FC<ConfirmProviderProps> = ({ children }) => {
    const [config, setConfig] = useState<(ConfirmOptions & { resolve: (value: boolean) => void }) | null>(null);

    const confirm = useCallback((options: ConfirmOptions) => {
        return new Promise<boolean>((resolve) => {
            setConfig({ ...options, resolve });
        });
    }, []);

    const handleClose = useCallback((result: boolean) => {
        if (config) {
            config.resolve(result);
            setConfig(null);
        }
    }, [config]);

    return (
        <ConfirmContext.Provider value={{ confirm }}>
            {children}
            {config && (
                <ConfirmPortal
                    isOpen={true}
                    {...config}
                    onConfirm={() => handleClose(true)}
                    onCancel={() => handleClose(false)}
                />
            )}
        </ConfirmContext.Provider>
    );
};

// Internal Portal Component to avoid circular dependencies with the Actual UI component
// We will import the real ConfirmDialog here
import { ConfirmDialog } from '../components/Modals/ConfirmDialog';

const ConfirmPortal: React.FC<ConfirmOptions & { isOpen: boolean; onConfirm: () => void; onCancel: () => void }> = (props) => {
    return <ConfirmDialog {...props} />;
};
