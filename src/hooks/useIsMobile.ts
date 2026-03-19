import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 1024; // px — matches Tailwind 'lg' breakpoint

/**
 * Returns true if the window is narrower than the mobile breakpoint.
 * Reactively updates on resize and orientation change so components
 * correctly reflect the current layout even after the user rotates
 * their device or resizes the browser window.
 */
export const useIsMobile = (): boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(() =>
        typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
    );

    useEffect(() => {
        const handler = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        window.addEventListener('resize', handler);
        // Also respond to device rotation on mobile browsers
        window.addEventListener('orientationchange', handler);
        return () => {
            window.removeEventListener('resize', handler);
            window.removeEventListener('orientationchange', handler);
        };
    }, []);

    return isMobile;
};
