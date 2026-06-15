import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const enderecoMapa =
    "https://www.google.com/maps?q=Av.%20Yolanda%20Pontes%20Vidal%20Queiroz%201200%20Maracanau%20CE&output=embed";

  return (
    <footer
      id="contato"
      className="relative mt-auto overflow-hidden border-t border-[#d7b48a]/35 bg-[#32170f] text-[#fff8f0]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(194,117,47,0.18),transparent_28%),radial-gradient(circle_at_86%_40%,rgba(215,180,138,0.1),transparent_30%)]" />

      <div className="relative mx-auto max-w-[1240px] px-6 py-10 md:px-10 md:py-12 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-9 md:grid-cols-[1fr_auto_0.9fr_1.35fr] md:gap-10 lg:gap-12">
          {/* MARCA */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="inline-flex flex-col items-center leading-none md:items-start"
              aria-label="Ir para o início"
            >
              <span className="font-['Poiret_One'] text-[3rem] font-normal tracking-[-0.055em] text-[#d7b48a]">
                depilmoni
              </span>
              <span className="mt-1 w-full text-center font-['Cormorant_Garamond'] text-[0.86rem] font-semibold text-[#d7b48a] md:text-left">
                Conforto e Bem-estar
              </span>
            </a>

            <p className="mx-auto mt-5 max-w-[270px] text-[0.98rem] leading-relaxed text-[#fff8f0]/82 md:mx-0">
              Produtos e formação para profissionais que valorizam qualidade,
              conforto e resultados reais.
            </p>

            <div className="mt-7 flex items-center justify-center gap-4 md:justify-start">
              <a
                href="https://www.instagram.com/depilmonioficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d7b48a]/35 bg-[#fff8f0]/8 text-[#d7b48a] transition-colors hover:bg-[#C2752F] hover:text-white"
                aria-label="Instagram Depilmoni"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#contato"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d7b48a]/35 bg-[#fff8f0]/8 text-[#d7b48a] transition-colors hover:bg-[#C2752F] hover:text-white"
                aria-label="Facebook Depilmoni"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://wa.me/5585992103191"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d7b48a]/35 bg-[#fff8f0]/8 text-[#d7b48a] transition-colors hover:bg-[#C2752F] hover:text-white"
                aria-label="WhatsApp Depilmoni"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          <div className="hidden h-[150px] w-px bg-[#d7b48a]/55 md:block" />

          {/* CONTATOS */}
          <div className="text-center md:text-left">
            <h3 className="mb-5 font-['DM_Sans'] text-[1rem] font-bold text-white">
              Contato
            </h3>

            <div className="space-y-5 text-[0.98rem] font-medium text-[#fff8f0]/90">
              <div className="flex items-center justify-center gap-4 md:justify-start">
                <FaPhoneAlt className="shrink-0 text-[#d7b48a]" size={17} />
                <span>(85) 99230-3191</span>
              </div>

              <div className="flex items-center justify-center gap-4 md:justify-start">
                <FaInstagram className="shrink-0 text-[#d7b48a]" size={19} />
                <a
                  href="https://www.instagram.com/depilmonioficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#d7b48a]"
                >
                  @depilmonioficial
                </a>
              </div>

              <div className="flex items-start justify-center gap-4 leading-relaxed md:justify-start">
                <FaMapMarkerAlt
                  className="mt-1 shrink-0 text-[#d7b48a]"
                  size={18}
                />
                <span>
                  Rua 15, 350 - Jereissati I <br />
                  Maracanaú / CE
                </span>
              </div>
            </div>
          </div>

          {/* MAPA */}
          <div className="text-center md:text-left">
            <h3 className="mb-3 font-['DM_Sans'] text-[1rem] font-bold text-white">
              Onde estamos
            </h3>

            <div className="h-44 w-full overflow-hidden rounded-[1.45rem] border border-[#d7b48a]/45 bg-[#fff8f0] shadow-[0_18px_42px_rgba(0,0,0,0.25)] md:h-36 lg:h-40">
              <iframe
                title="Mapa Depilmoni"
                src={enderecoMapa}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <p className="mt-9 text-center text-[0.86rem] font-medium text-[#fff8f0]/72">
          © 2026 Depilmoni. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
