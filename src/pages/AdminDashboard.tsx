import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
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
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'https://gwm-cwgy.onrender.com';
      const response = await fetch(`${API_URL}/api/bookings`);
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

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'https://gwm-cwgy.onrender.com';
      const response = await fetch(`${API_URL}/api/bookings/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (response.ok) {
        setBookings(bookings.map(b => b._id === id ? { ...b, status: newStatus } : b));
      } else {
        alert('Failed to update status');
      }
    } catch (error) {
      console.error('Failed to update status:', error);
      alert('Error updating status');
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

  // Analytics Calculations
  const statusCounts = bookings.reduce((acc, curr) => {
    acc[curr.status] = (acc[curr.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const statusData = Object.keys(statusCounts).map(key => ({
    name: key,
    value: statusCounts[key]
  }));

  const serviceCounts = bookings.reduce((acc, curr) => {
    acc[curr.service] = (acc[curr.service] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const serviceData = Object.keys(serviceCounts).map(key => ({
    name: key,
    value: serviceCounts[key]
  }));

  const COLORS = ['#3b82f6', '#22c55e', '#f97316', '#ef4444', '#8b5cf6'];

  const handleLogout = () => {
    navigate('/admin');
  };

  return (
    <div className="flex flex-col w-full pt-32 pb-24 bg-gradient-to-br from-slate-50 via-indigo-50/40 to-blue-50/40 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        >
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500 mb-2">Admin Dashboard</h3>
              <p className="text-slate-500 text-sm">Manage incoming quote requests</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-xl text-sm font-bold">
                {bookings.length} Total Bookings
              </div>
              <button 
                onClick={handleLogout}
                className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-2 rounded-xl text-sm font-bold transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          {bookings.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-white/80 p-6 rounded-3xl border border-white/50 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Booking Status</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={statusData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {statusData.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                      />
                      <Legend verticalAlign="bottom" height={36}/>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white/80 p-6 rounded-3xl border border-white/50 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Service Demand</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={serviceData} layout="vertical" margin={{ top: 0, right: 20, left: 40, bottom: 0 }}>
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} width={90} />
                      <Tooltip 
                        cursor={{ fill: 'transparent' }}
                        contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                      />
                      <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20}>
                        {serviceData.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

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
                  bookings.map((b, index) => (
                    <motion.tr 
                      key={b._id} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (index * 0.05) }}
                      className="group hover:bg-white/60 transition-colors"
                    >
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
                        <select
                          value={b.status}
                          onChange={(e) => updateStatus(b._id, e.target.value)}
                          className={`px-3 py-1 pr-8 rounded-full text-[10px] font-black uppercase tracking-widest outline-none cursor-pointer border-none ${
                            b.status === 'Completed' ? 'bg-green-100 text-green-600' :
                            b.status === 'Cancelled' ? 'bg-red-100 text-red-600' :
                            b.status === 'In Progress' ? 'bg-orange-100 text-orange-600' :
                            'bg-blue-100 text-blue-600'
                          }`}
                        >
                          <option value="Upcoming">Upcoming</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
