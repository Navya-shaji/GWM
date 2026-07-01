import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10">
        {/* Simple Circle Logo like reference */}
        <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200">
          <div className="absolute inset-0 flex flex-col">
            <div className="h-full w-full bg-gradient-to-br from-primary to-brand"></div>
          </div>
          <div className="w-7 h-7 rounded-full bg-white relative z-10 flex items-center justify-center shadow-md">
            <span className="text-[9px] font-black text-brand tracking-tighter">GWM</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col -space-y-1">
        <span className="text-xl font-black tracking-tight text-brand">GWM</span>
        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400">Cleaning Services</span>
      </div>
    </div>
  );
};

export default Logo;
