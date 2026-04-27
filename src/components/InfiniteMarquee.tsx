import React from 'react';

interface InfiniteMarqueeProps {
  items: string[];
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ items }) => {
  return (
    <div className="relative flex overflow-x-hidden bg-white border-y border-slate-50 py-12">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {items.map((item, index) => (
          <span key={index} className="text-4xl md:text-6xl font-display font-medium text-brand/20 mx-12 uppercase tracking-tighter hover:text-primary transition-colors cursor-default">
            {item}
          </span>
        ))}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center py-12">
        {items.map((item, index) => (
          <span key={index} className="text-4xl md:text-6xl font-display font-medium text-brand/20 mx-12 uppercase tracking-tighter hover:text-primary transition-colors cursor-default">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
