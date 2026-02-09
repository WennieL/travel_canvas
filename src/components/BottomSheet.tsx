
import React, { useEffect, useState } from 'react';
import { motion, useAnimation, PanInfo } from 'framer-motion';

interface BottomSheetProps {
    isOpen: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    snapPoints?: number[]; // Percentage of screen height, e.g., [0.15, 0.5, 0.9]
    initialSnap?: number; // Index of initial snap point
    className?: string;
    header?: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
    isOpen,
    onClose,
    children,
    snapPoints = [0.15, 0.5, 0.9], // Default: Collapsed (15%), Half (50%), Full (90%)
    initialSnap = 0,
    className = "",
    header
}) => {
    const controls = useAnimation();
    const [currentSnapIndex, setCurrentSnapIndex] = useState(initialSnap);

    // Calculate snap positions in pixels (from bottom)
    const getSnapHeight = (index: number) => {
        if (typeof window === 'undefined') return 0;
        return window.innerHeight * snapPoints[index];
    };

    // Calculate Y offset (from top)
    const getYOffset = (index: number) => {
        if (typeof window === 'undefined') return 0;
        return window.innerHeight - getSnapHeight(index);
    };

    useEffect(() => {
        if (isOpen) {
            controls.start({ y: getYOffset(currentSnapIndex) });
        } else {
            controls.start({ y: window.innerHeight }); // Hide below screen
        }
    }, [isOpen, currentSnapIndex, controls]);

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50; // Minimum drag distance to trigger change
        const velocityThreshold = 200; // Minimum velocity for fling

        let newIndex = currentSnapIndex;

        // Determine direction and magnitude
        if (info.offset.y < -threshold || info.velocity.y < -velocityThreshold) {
            // Dragged Up
            newIndex = Math.min(currentSnapIndex + 1, snapPoints.length - 1);
        } else if (info.offset.y > threshold || info.velocity.y > velocityThreshold) {
            // Dragged Down
            newIndex = Math.max(currentSnapIndex - 1, 0);
        }

        setCurrentSnapIndex(newIndex);
        controls.start({ y: getYOffset(newIndex) });
    };

    // Allow clicking the handle to toggle between min and mid
    const handleHeaderClick = () => {
        const nextIndex = currentSnapIndex === 0 ? 1 : 0;
        setCurrentSnapIndex(nextIndex);
        controls.start({ y: getYOffset(nextIndex) });
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop - Only show when expanded beyond first snap point */}
            {currentSnapIndex > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    onClick={() => {
                        setCurrentSnapIndex(0); // Collapse on backdrop click
                        controls.start({ y: getYOffset(0) });
                    }}
                    className="fixed inset-0 bg-black z-[900]"
                />
            )}

            <motion.div
                drag="y"
                dragConstraints={{ top: getYOffset(snapPoints.length - 1), bottom: getYOffset(0) }}
                dragElastic={0.05}
                dragMomentum={false}
                onDragEnd={handleDragEnd}
                animate={controls}
                initial={{ y: window.innerHeight }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className={`fixed left-0 right-0 bottom-0 bg-white rounded-t-2xl shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-[1000] flex flex-col ${className}`}
                style={{ height: '100dvh' }} // Sheet itself is full height, just positioned down
            >
                {/* Handle / Header */}
                <div
                    className="flex flex-col items-center pt-3 pb-2 cursor-grab active:cursor-grabbing touch-none bg-white rounded-t-2xl border-b border-gray-100 flex-shrink-0"
                    onClick={handleHeaderClick}
                >
                    <div className="w-10 h-1.5 bg-gray-200 rounded-full mb-2" />
                    {header}
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 bg-gray-50/50">
                    {children}
                </div>
            </motion.div>
        </>
    );
};

export default BottomSheet;
