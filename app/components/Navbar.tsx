"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full">
        <div className="mx-auto w-full">
          <div className="flex items-center justify-between p-4 bg-gradient-to-b from-black to-black/0">
            {/* Izquierda: título */}
            <div className="flex items-center gap-2 p-2">
              <span className="text-white/90 font-medium tracking-tight text-lg">
                Pluto AI
              </span>
            </div>

            {/* Derecha: botones de sesión */}
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="text-white/90 text-sm bg-neutral-800 hover:bg-neutral-700 rounded-full px-3 py-1.5 border border-white/10 transition-colors"
              >
                Inicia sesión
              </Link>
              <Link
                href="/register"
                className="text-black text-sm bg-white hover:bg-neutral-200 rounded-full px-3 py-1.5 font-semibold transition-colors"
              >
                Suscríbete gratis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
