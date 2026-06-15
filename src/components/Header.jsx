import React, { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre" },
    { href: "#produtos", label: "Produtos" },
    { href: "#cursos", label: "Cursos" },
  ];

  return (
    <>
      <header className="bg-[#431f13] text-[#fff8f0] px-5 md:px-10 shadow-[0_8px_30px_rgba(67,31,19,0.16)] fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[1320px] mx-auto grid h-[96px] grid-cols-[auto_1fr_auto] items-center gap-6">
          <a
            href="#home"
            className="relative flex shrink-0 flex-col items-center justify-center leading-none select-none"
            aria-label="Ir para o inicio"
          >
            <span className="relative inline-flex justify-center">
              <span className="font-['Poiret_One'] text-[2.55rem] md:text-[3.15rem] font-normal tracking-[-0.055em] text-[#d7b48a]">
                depilmoni
              </span>
            </span>

            <span className="mt-1 block w-full text-center font-['Cormorant_Garamond'] text-[0.68rem] sm:text-[0.76rem] md:text-[0.84rem] font-semibold tracking-[0.02em] text-[#d7b48a] whitespace-nowrap">
              Conforto e Bem-estar
            </span>
          </a>

          <div className="hidden md:flex items-center justify-end gap-10 lg:gap-14">
            <nav className="flex items-center gap-9 lg:gap-12 text-[1.08rem] font-medium tracking-tight">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#f1d4b4] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#contato"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-[1.35rem] border border-[#C2752F] bg-[#C2752F] px-7 text-[0.95rem] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_12px_26px_rgba(194,117,47,0.28)] transition-colors hover:bg-white hover:text-[#C2752F]"
            >
              <MessageCircle size={19} strokeWidth={1.8} />
              Entrar em contato
            </a>
          </div>

          <button
            className="justify-self-end md:hidden text-[#fff8f0] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
            type="button"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden bg-[#431f13] text-[#fff8f0] flex flex-col items-center gap-5 border-t border-[#d7b48a]/30 py-6 text-base font-semibold shadow-md animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#d7b48a] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-2xl border border-[#C2752F] bg-[#C2752F] px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#C2752F]"
              onClick={() => setMenuOpen(false)}
            >
              <MessageCircle size={18} strokeWidth={1.8} />
              Entrar em contato
            </a>
          </nav>
        )}
      </header>

      <div className="h-[96px]" />
    </>
  );
}
