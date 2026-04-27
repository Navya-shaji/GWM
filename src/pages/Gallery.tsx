import React from 'react';

const galleryItems = [
  { 
    title: 'Executive Boardroom', 
    description: 'High-traffic area restoration.', 
    image: '/images/before-after.png',
    tag: 'Corporate'
  },
  { 
    title: 'Medical Laboratory', 
    description: 'Specialized sanitization.', 
    image: '/images/medical.png',
    tag: 'Healthcare'
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="bg-white py-16 border-b border-slate-50">
        <div className="container mx-auto px-4">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-medium text-brand font-display tracking-tighter leading-tight">
            Visible <span className="italic font-light">Excellence.</span>
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item, i) => (
              <div key={i} className="group space-y-6">
                <div className="overflow-hidden rounded-sm border border-slate-100 shadow-lg relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-700" 
                  />
                  {i === 0 && (
                    <div className="absolute top-4 left-4 right-4 flex justify-between pointer-events-none">
                      <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white font-black uppercase text-[8px] tracking-widest rounded-full">Before</span>
                      <span className="px-3 py-1 bg-primary text-white font-black uppercase text-[8px] tracking-widest rounded-full shadow-xl">After</span>
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-[9px] font-black text-primary uppercase tracking-[0.3em] mb-2">{item.tag}</div>
                  <h2 className="text-xl font-medium text-brand font-display">{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
