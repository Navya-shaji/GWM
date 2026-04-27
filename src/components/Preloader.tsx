import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 800);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-opacity duration-700 ${progress === 100 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative flex flex-col items-center">
        {/* Sweeping Person Animation */}
        <div className="w-40 h-40 mb-8 relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Person Body (Minimalist) */}
            <circle cx="50" cy="30" r="8" className="fill-brand" />
            <path d="M50 40 L50 70 M50 45 L35 55 M50 45 L65 55" className="stroke-brand stroke-[4] fill-none" strokeLinecap="round" />
            
            {/* Broom Stick */}
            <path 
              d="M65 55 L75 80" 
              className="stroke-[#8B4513] stroke-[2] fill-none" 
              style={{ animation: 'sweep 2s ease-in-out infinite', transformOrigin: '65px 55px' }}
            />
            
            {/* Broom Head */}
            <g style={{ animation: 'sweep 2s ease-in-out infinite', transformOrigin: '65px 55px' }}>
              <path d="M70 80 L80 80 L85 90 L65 90 Z" className="fill-[#F28C28]" />
              <line x1="75" y1="80" x2="75" y2="90" className="stroke-white/20 stroke-[1]" />
            </g>

            {/* Floor Line */}
            <line x1="20" y1="90" x2="80" y2="90" className="stroke-slate-100 stroke-[1]" />
            
            {/* Dust particles */}
            <circle cx="45" cy="88" r="1" className="fill-slate-300" style={{ animation: 'dust 2s ease-in-out infinite' }} />
            <circle cx="55" cy="86" r="1.5" className="fill-slate-300" style={{ animation: 'dust 2s ease-in-out infinite 0.3s' }} />
          </svg>
          
          <style>{`
            @keyframes sweep {
              0%, 100% { transform: rotate(-10deg); }
              50% { transform: rotate(20deg); }
            }
            @keyframes dust {
              0% { opacity: 0; transform: translateX(0); }
              50% { opacity: 1; transform: translateX(-15px); }
              100% { opacity: 0; transform: translateX(-30px); }
            }
          `}</style>
        </div>

        <div className="space-y-4 text-center">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand">GWM Cleaning</div>
          <div className="w-48 h-[1px] bg-slate-100 relative overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400">
            {progress < 100 ? `Polishing environment... ${progress}%` : 'Standard Achieved'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
