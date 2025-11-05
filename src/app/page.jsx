"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogIn, Mail, Lock } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "authenticated") router.push("/dashboard");
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <span className="animate-pulse text-gray-600 text-lg">Carregando...</span>
      </div>
    );
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!res?.ok) {
      setError("Email ou senha incorrectos");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen w-full bg-gray-200 flex items-center justify-center p-2">

      <div className="bg-white w-full max-w-[390px] h-[844px] shadow-xl rounded-2xl overflow-hidden flex flex-col justify-between">

        {/* Header */}
        <div className="text-center pt-16 px-6">
          <h1 className="text-4xl font-extrabold text-green-600">ReArt</h1>
          <p className="mt-2 text-gray-500 text-sm">
            Moda circular. Impacto real 🌍
          </p>
        </div>

        {/* Form */}
        <div className="px-6 space-y-4 flex-1 flex flex-col justify-center">

          <form onSubmit={handleLogin} className="space-y-3">

            {/* Email */}
            <div className="flex items-center bg-gray-100 px-3 py-3 rounded-xl gap-2">
              <Mail size={20} className="text-gray-500" />
              <input
                type="email"
                placeholder="teuemail@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent w-full text-sm outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="flex items-center bg-gray-100 px-3 py-3 rounded-xl gap-2">
              <Lock size={20} className="text-gray-500" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent w-full text-sm outline-none"
                required
              />
            </div>

            {error && <p className="text-red-500 text-xs text-center">{error}</p>}

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 transition text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <LogIn size={20} />
              Entrar
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-2">
            <span className="h-px bg-gray-200 w-1/3"></span>
            <span className="text-xs text-gray-400">ou</span>
            <span className="h-px bg-gray-200 w-1/3"></span>
          </div>

          {/* Google Login */}
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg py-3 text-gray-700 font-medium hover:bg-gray-50 active:scale-95 transition"
          >
            <Image
              src="/google.svg"
              alt="Google"
              width={20}
              height={20}
              priority
            />
            Continuar com Google
          </button>

        </div>

        {/* Footer */}
        <div className="py-6 text-xs text-center text-gray-400">
          © 2025 ReArt
        </div>
      </div>
    </div>
  );
}
