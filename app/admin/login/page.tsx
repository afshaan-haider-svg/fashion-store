"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    const { data } = await supabase.auth.getSession();

    if (data.session) {
      router.push("/admin/products");
      return;
    }

    setCheckingSession(false);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      router.push("/admin/products");
    }

    setLoading(false);
  };

  if (checkingSession) {
    return (
      <main className="min-h-screen bg-[#FAF7F2] flex items-center justify-center text-3xl font-bold text-[#1E1E1E]">
        Checking session...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white p-10 rounded-[2rem] shadow-2xl border border-[#C8A96B]/20">
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-[#C8A96B] text-sm font-bold">
            Secure Access
          </p>

          <h1 className="text-5xl font-extrabold text-[#1E1E1E] mt-4">
            Admin Login
          </h1>

          <p className="mt-5 text-[#5f5a52] leading-7">
            Login securely to manage products, upload collections and control
            The Libas Studio dashboard.
          </p>
        </div>

        <div className="space-y-6 mt-10">
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-[#C8A96B]/20 bg-[#FAF7F2] p-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C8A96B] text-[#1E1E1E]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-[#C8A96B]/20 bg-[#FAF7F2] p-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C8A96B] text-[#1E1E1E]"
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-[#1E1E1E] text-white py-5 rounded-2xl hover:bg-[#C8A96B] hover:text-[#1E1E1E] transition duration-300 text-lg font-bold shadow-xl"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </div>
    </main>
  );
}