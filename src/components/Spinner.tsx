import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-slate-100"></div>
        <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin"></div>
      </div>
    </div>
  );
};

export default Spinner;
