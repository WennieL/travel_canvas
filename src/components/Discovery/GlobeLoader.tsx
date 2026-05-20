import React from 'react';

interface GlobeLoaderProps {
    text?: string;
}

export const GlobeLoader: React.FC<GlobeLoaderProps> = ({ text }) => {
    return (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[999] flex flex-col items-center justify-center pointer-events-auto select-none">
            <style>{`
                @keyframes earth-spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(-360deg); }
                }
                @keyframes cat-kick-1 {
                    0% { transform: rotate(0deg) translate(0px, 0px); }
                    50% { transform: rotate(-15deg) translate(-6px, -10px); }
                    100% { transform: rotate(0deg) translate(0px, 0px); }
                }
                @keyframes cat-kick-2 {
                    0% { transform: rotate(-15deg) translate(-6px, -10px); }
                    50% { transform: rotate(0deg) translate(0px, 0px); }
                    100% { transform: rotate(-15deg) translate(-6px, -10px); }
                }
                @keyframes tail-wiggle {
                    0%, 100% { transform: rotate(0deg); }
                    50% { transform: rotate(20deg); }
                }
                @keyframes cat-breathing {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(2px); }
                }
            `}</style>
            
            {/* Playful Cat Kicking Earth Animation */}
            <div className="relative w-56 h-56 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                    <defs>
                        {/* Earth Radial Gradient */}
                        <radialGradient id="earthGrad" cx="40%" cy="40%" r="60%">
                            <stop offset="0%" stopColor="#67e8f9" />
                            <stop offset="70%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#1d4ed8" />
                        </radialGradient>
                        {/* Earth Continent Clip */}
                        <clipPath id="earthClip">
                            <circle cx="100" cy="70" r="30" />
                        </clipPath>
                    </defs>

                    {/* EARTH GLOBE (Centered at 100, 70) */}
                    <g style={{ transformOrigin: '100px 70px', animation: 'earth-spin 3s linear infinite' }}>
                        {/* Water Base */}
                        <circle cx="100" cy="70" r="30" fill="url(#earthGrad)" />
                        
                        {/* Continent Shapes (clipped to circle) */}
                        <g clipPath="url(#earthClip)">
                            <path d="M85 50 Q90 45 95 52 T110 48 T120 60 T105 75 T90 65 Z" fill="#34d399" opacity="0.85" />
                            <path d="M100 80 Q110 85 115 78 T125 88 T110 95 Z" fill="#34d399" opacity="0.85" />
                            <path d="M75 70 Q80 78 85 72 T92 82 T78 85 Z" fill="#34d399" opacity="0.85" />
                        </g>
                        
                        {/* Outline Glow / Depth */}
                        <circle cx="100" cy="70" r="30" fill="none" stroke="#2563eb" strokeWidth="1" opacity="0.2" />
                    </g>

                    {/* THE CAT (Lying on back, head left, tail right) */}
                    <g style={{ animation: 'cat-breathing 3s ease-in-out infinite' }}>
                        {/* Tail */}
                        <path 
                            d="M135 140 Q150 145 155 130 T145 115" 
                            fill="none" 
                            stroke="#fb923c" 
                            strokeWidth="8" 
                            strokeLinecap="round"
                            style={{ transformOrigin: '135px 140px', animation: 'tail-wiggle 2s ease-in-out infinite' }}
                        />

                        {/* Hind Leg 2 (Back leg, kicks with delay) */}
                        <g style={{ transformOrigin: '125px 138px', animation: 'cat-kick-2 0.8s ease-in-out infinite' }}>
                            <path d="M125 138 Q120 120 108 106" fill="none" stroke="#ffedd5" strokeWidth="9" strokeLinecap="round" />
                            <circle cx="108" cy="106" r="6" fill="#f87171" />
                            <circle cx="104" cy="103" r="3" fill="#f87171" />
                            <circle cx="108" cy="100" r="3" fill="#f87171" />
                            <circle cx="112" cy="103" r="3" fill="#f87171" />
                        </g>

                        {/* Hind Leg 1 (Front leg, kicks) */}
                        <g style={{ transformOrigin: '128px 140px', animation: 'cat-kick-1 0.8s ease-in-out infinite' }}>
                            <path d="M128 140 Q122 118 104 103" fill="none" stroke="#fb923c" strokeWidth="9" strokeLinecap="round" />
                            <circle cx="104" cy="103" r="6" fill="#fca5a5" />
                            <circle cx="100" cy="100" r="3" fill="#fca5a5" />
                            <circle cx="104" cy="97" r="3" fill="#fca5a5" />
                            <circle cx="108" cy="100" r="3" fill="#fca5a5" />
                        </g>

                        {/* Chubby Orange Body */}
                        <rect x="75" y="128" width="60" height="24" rx="12" fill="#fb923c" />
                        
                        {/* Soft Belly Patch */}
                        <rect x="85" y="132" width="40" height="14" rx="7" fill="#ffedd5" />

                        {/* Head */}
                        <circle cx="70" cy="135" r="16" fill="#fb923c" />

                        {/* Ears */}
                        <polygon points="56,125 58,112 68,122" fill="#ea580c" />
                        <polygon points="58,123 60,115 66,121" fill="#fca5a5" />
                        
                        <polygon points="68,121 76,112 78,125" fill="#ea580c" />
                        <polygon points="70,122 74,115 76,123" fill="#fca5a5" />

                        {/* Closed Smiling Eyes */}
                        <path d="M60 134 Q63 131 65 134" fill="none" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M69 134 Q72 131 74 134" fill="none" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
                        
                        {/* Pink Nose */}
                        <polygon points="66,137 68,137 67,139" fill="#fca5a5" />
                        
                        {/* Whisker Lines */}
                        <line x1="56" y1="137" x2="48" y2="136" stroke="#ffedd5" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="56" y1="140" x2="48" y2="141" stroke="#ffedd5" strokeWidth="1.5" strokeLinecap="round" />
                        
                        <line x1="82" y1="137" x2="90" y2="136" stroke="#ffedd5" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="82" y1="140" x2="90" y2="141" stroke="#ffedd5" strokeWidth="1.5" strokeLinecap="round" />

                        {/* Folded Front Paws */}
                        <rect x="78" y="133" width="10" height="8" rx="4" fill="#ffedd5" stroke="#ea580c" strokeWidth="1.5" />
                        <rect x="86" y="134" width="10" height="8" rx="4" fill="#ffedd5" stroke="#ea580c" strokeWidth="1.5" />
                    </g>
                </svg>
            </div>

            {/* Status text */}
            <div className="mt-4 text-center max-w-[280px]">
                <p className="text-[13px] font-black text-tc-text-main tracking-widest uppercase mb-1">
                    {text || "Preparing Journey..."}
                </p>
                <div className="flex justify-center gap-1 mt-3">
                    <span className="w-1.5 h-1.5 bg-tc-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-tc-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-tc-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
            </div>
        </div>
    );
};
