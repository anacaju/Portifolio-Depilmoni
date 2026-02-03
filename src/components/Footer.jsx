import React from "react";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const enderecoMapa =
    "https://www.google.com/maps?q=Av.%20Yolanda%20Pontes%20Vidal%20Queiroz%201200%20Maracanau%20CE&output=embed";

  return (
    <footer
      id="contato"
      className="bg-white border-t border-gray-200 mt-auto"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

        {/* LOGO */}
        <div className="relative flex flex-col items-center md:items-start text-center md:text-left pt-20">
          <img
            src="/imagens/logodepilmoni.png"
            alt="Logo Depilmoni"
            className="absolute -top-10 w-44 sm:w-48 md:w-78"
          />
        </div>

        {/* CONTATOS */}
        <div className="text-base md:text-lg text-gray-700 space-y-4 text-center md:text-left mt-12 md:mt-16">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <FaWhatsapp className="text-[#b38055] text-xl" />
            <span>(85) 99210-3191</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <FaInstagram className="text-[#b38055] text-xl" />
            <a
              href="https://www.instagram.com/depilmonioficial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b38055] transition-colors"
            >
              @depilmonioficial
            </a>
          </div>

          <div className="flex items-start justify-center md:justify-start gap-3 leading-relaxed">
            <FaMapMarkerAlt className="text-[#b38055] text-xl mt-1" />
            <span>
              Rua 15, 350 – Jereissati I <br />
              Maracanaú / CE
            </span>
          </div>
        </div>

        {/* MAPA */}
        <div className="w-full h-52 rounded-lg overflow-hidden border">
          <iframe
            title="Mapa Depilmoni"
            src={enderecoMapa}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </footer>
  );
}
