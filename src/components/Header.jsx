import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="bg-[#431f13] text-[#f7f7f0d8] py-5 px-6 md:px-12 shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          {/* LOGO (inalterada) */}
          <div className="flex items-left -ml-4 md:-ml-6">
            <img
              src="/imagens/logodepilmoni.png"
              alt="DepilMoni Logo"
              className="max-w-[180px] md:max-w-[230px] w-full h-auto object-contain"
            />
          </div>

          {/* CONTAINER DO MENU DE OPÇÕES */}
          <div className="hidden md:flex items-center ml-6 lg:ml-10 xl:ml-14">
            <nav className="flex items-center space-x-10 fontCormorant italic text-[1.25rem] md:text-[1.30rem] tracking-wide">
              <a href="#home" className="hover:text-[#b38055] transition-colors">
                Home
              </a>
              <a
                href="#sobre"
                className="hover:text-[#b38055] transition-colors"
              >
                Sobre a Depilmoni
              </a>
              <a
                href="#servicos"
                className="hover:text-[#b38055] transition-colors"
              >
                Nossos produtos
              </a>
              <a
                href="#cursos"
                className="hover:text-[#b38055] transition-colors"
              >
                Cursos
              </a>
              <a
                href="#contato"
                className="hover:text-[#b38055] transition-colors"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* BOTÃO MENU MOBILE (reposicionado à direita) */}
          <button
            className="md:hidden text-[#f7f7f0] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MENU MOBILE ABERTO */}
        {menuOpen && (
          <nav className="md:hidden bg-[#431f13] text-[#f7f7f0] flex flex-col items-center space-y-5 py-8 text-lg font-semibold shadow-md animate-fadeIn">
            <a
              href="#home"
              className="hover:text-[#b38055] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#sobre"
              className="hover:text-[#b38055] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Sobre a Depilmoni
            </a>
            <a
              href="#servicos"
              className="hover:text-[#b38055] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Nossos produtos
            </a>
            <a
              href="#cursos"
              className="hover:text-[#b38055] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Cursos
            </a>
            <a
              href="#contato"
              className="hover:text-[#b38055] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contato
            </a>
          </nav>
        )}
      </header>

      {/* COMPENSAÇÃO PARA O HEADER FIXO */}
<div className="h-[100px] md:h-[115px]"></div>

    </>
  );
}
