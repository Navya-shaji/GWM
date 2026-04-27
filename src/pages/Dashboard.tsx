import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const user = {
    name: 'Alex Thompson',
    company: 'Skyline Real Estate',
    plan: 'Premium Office Care',
    joined: 'Jan 2024'
  };

  const bookings = [
    { id: 'BK-7821', date: 'May 12, 2026', time: '09:00 AM', status: 'Upcoming', service: 'Deep Clean' },
    { id: 'BK-7504', date: 'Apr 28, 2026', time: '06:00 PM', status: 'Completed', service: 'Standard Office' },
    { id: 'BK-7219', date: 'Apr 14, 2026', time: '09:00 AM', status: 'Completed', service: 'Standard Office' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-4">
          <Spinner />
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Authenticating Portal</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-80 space-y-6">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-2xl font-black text-primary mb-6">
                {user.name[0]}
              </div>
              <h2 className="text-xl font-black text-brand">{user.name}</h2>
              <p className="text-slate-500 text-sm mb-8">{user.company}</p>
              
              <nav className="space-y-1">
                {['Dashboard', 'Bookings', 'Billing', 'Settings'].map(item => (
                  <button key={item} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${item === 'Dashboard' ? 'bg-brand text-white' : 'text-slate-500 hover:bg-slate-50 hover:text-brand'}`}>
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            <div className="bg-gradient-brand p-8 rounded-[2rem] text-white">
              <h3 className="font-bold mb-2">Priority Support</h3>
              <p className="text-slate-400 text-xs mb-6">Available 24/7 for our premium clients.</p>
              <button className="w-full py-3 rounded-xl bg-primary text-white font-black text-sm">Contact Us</button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Total Bookings', value: '24' },
                { label: 'Next Cleaning', value: 'May 12' },
                { label: 'Status', value: 'Active', color: 'text-emerald-500' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{stat.label}</p>
                  <p className={`text-3xl font-black ${stat.color || 'text-brand'}`}>{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-black text-brand">Recent Activity</h3>
                <button className="text-primary font-black text-xs uppercase tracking-widest">View All</button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">
                      <th className="pb-4">Service ID</th>
                      <th className="pb-4">Date</th>
                      <th className="pb-4">Status</th>
                      <th className="pb-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {bookings.map(b => (
                      <tr key={b.id} className="group">
                        <td className="py-6 font-bold text-brand">{b.id}</td>
                        <td className="py-6">
                          <p className="text-sm font-bold text-slate-700">{b.date}</p>
                          <p className="text-xs text-slate-400">{b.time}</p>
                        </td>
                        <td className="py-6">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${b.status === 'Upcoming' ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'}`}>
                            {b.status}
                          </span>
                        </td>
                        <td className="py-6 text-slate-300 group-hover:text-brand cursor-pointer">•••</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
