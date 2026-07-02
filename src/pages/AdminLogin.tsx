import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-xl w-full max-w-md"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-brand mb-2">Admin Portal</h2>
          <p className="text-slate-500 text-sm">Sign in to manage bookings</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-primary transition-all text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-primary transition-all text-sm pr-12"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          <button 
            type="submit"
            className="w-full py-4 bg-brand text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary transition-all shadow-xl"
          >
            Sign In
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
