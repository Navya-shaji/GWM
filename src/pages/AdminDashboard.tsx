import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';

interface Booking {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  level: string;
  requirements?: string;
  status: string;
  createdAt: string;
}

const AdminDashboard: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/bookings');
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      }
    } catch (error) {
      console.error('Failed to fetch bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-4">
          <Spinner />
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Loading Bookings</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-3xl font-black text-brand mb-2">Admin Dashboard</h3>
              <p className="text-slate-500 text-sm">Manage incoming quote requests</p>
            </div>
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-xl text-sm font-bold">
              {bookings.length} Total Bookings
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">
                  <th className="pb-4 pr-4">Client</th>
                  <th className="pb-4 pr-4">Contact</th>
                  <th className="pb-4 pr-4">Service</th>
                  <th className="pb-4 pr-4">Date</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-10 text-center text-slate-400 text-sm">No bookings found.</td>
                  </tr>
                ) : (
                  bookings.map(b => (
                    <tr key={b._id} className="group hover:bg-slate-50 transition-colors">
                      <td className="py-6 pr-4">
                        <p className="font-bold text-brand">{b.fullName}</p>
                        <p className="text-xs text-slate-400">{b.company || 'N/A'}</p>
                      </td>
                      <td className="py-6 pr-4">
                        <p className="text-sm font-medium text-slate-700">{b.email}</p>
                        <p className="text-xs text-slate-400">{b.phone}</p>
                      </td>
                      <td className="py-6 pr-4">
                        <p className="text-sm font-medium text-slate-700">{b.service}</p>
                        <p className="text-xs text-slate-400">{b.level}</p>
                      </td>
                      <td className="py-6 pr-4 text-sm text-slate-500">
                        {new Date(b.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-6">
                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-100 text-blue-600">
                          {b.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
