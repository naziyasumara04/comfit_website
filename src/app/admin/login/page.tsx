'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Lock, Mail, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { ComfitLogo } from '@/components/layout/ComfitLogo';
import { createClient } from '@/lib/supabase/client';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@comfitfoods.com');
  const [password, setPassword] = useState('comfit2024');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const supabase = createClient();
      if (supabase) {
        const { error: authError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (authError) {
          // If Supabase auth rejected, check if demo fallback applies or show error
          if (email === 'admin@comfitfoods.com' && password === 'comfit2024') {
            localStorage.setItem('comfit_admin_auth', JSON.stringify({ email, role: 'admin', time: Date.now() }));
            router.push('/admin/dashboard');
            return;
          }
          setError(authError.message);
          setLoading(false);
          return;
        }
      }

      // Successful login
      localStorage.setItem('comfit_admin_auth', JSON.stringify({ email, role: 'admin', time: Date.now() }));
      router.push('/admin/dashboard');
    } catch {
      setError('An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemo = () => {
    setEmail('admin@comfitfoods.com');
    setPassword('comfit2024');
    localStorage.setItem('comfit_admin_auth', JSON.stringify({ email: 'admin@comfitfoods.com', role: 'admin', time: Date.now() }));
    router.push('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F4F0E8] flex flex-col justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <ComfitLogo variant="dark" />
        <span className="text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-[0.22em] font-semibold text-stone-500 block mt-3">
          SECURE MANAGEMENT PORTAL
        </span>
        <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-[#1C2C40]">
          Sign in to Admin Dashboard
        </h2>
      </div>

      <div className="mt-6 sm:mt-8 sm:mx-auto sm:w-full sm:max-w-md w-full">
        <div className="bg-white py-6 sm:py-8 px-4 sm:px-10 shadow-lg rounded-2xl border border-stone-200">
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2 text-xs text-red-700">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                Admin Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@comfitfoods.com"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#C9184A] text-xs sm:text-sm text-stone-900 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#C9184A] text-xs sm:text-sm text-stone-900 bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#C9184A] hover:bg-[#a5133c] text-white text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm transition-colors flex items-center justify-center space-x-2 disabled:opacity-70 min-h-[44px]"
            >
              <span>{loading ? 'Authenticating...' : 'Sign In to Console'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Access Box */}
          <div className="mt-6 pt-6 border-t border-stone-100">
            <div className="bg-[#FAF7F2] p-4 rounded-xl border border-stone-200 text-xs">
              <div className="flex items-center space-x-2 text-[#267B43] font-semibold mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Demo Admin Access</span>
              </div>
              <p className="text-stone-500 text-[11px] leading-relaxed mb-3">
                Pre-filled with testing credentials. Click below for instant one-click login to inspect the dashboard.
              </p>
              <button
                type="button"
                onClick={handleQuickDemo}
                className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-[11px] uppercase tracking-wider font-semibold rounded-lg transition-colors min-h-[40px]"
              >
                Instant Demo Admin Login
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-xs text-stone-500 hover:text-stone-800 transition-colors"
            >
              ← Back to COMFIT Foods Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

