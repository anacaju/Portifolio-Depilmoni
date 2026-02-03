import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [activeImage, setActiveImage] = useState(null);

  /* ===== IMAGENS DO HERO (CARROSSEL) ===== */
  const heroImages = [
    "/imagens/Epilacao.png",
    "/imagens/palestraTaina.PNG",
    "/imagens/certificacao.JPG",
  ];

  /* ===== ESTADO DO SLIDER ===== */
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  /* ESC para fechar lightbox */
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  /* ===== AUTOPLAY DO SLIDER ===== */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000); // troca a cada 5 segundos

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="bg-[#fff5eb] pt-20 pb-16 md:min-h-[85vh] md:flex md:items-center"
      >
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-16 lg:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-14 md:gap-20">
            {/* IMAGEM HERO (CARROSSEL) */}
            <div className="w-full md:w-[52%] flex justify-center relative mb-12 md:mb-0">
              <div className="absolute top-1/2 -translate-y-1/2 -right-12 w-[96%] h-[96%] bg-[#f1e1d2] rounded-[3rem] hidden md:block" />

              <div className="relative w-full max-w-[420px] md:max-w-[560px] lg:max-w-[640px] xl:max-w-[720px] aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] animate-slide-fade-left">
                <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] shadow-2xl group">
                  <img
                    key={currentSlide}
                    src={heroImages[currentSlide]}
                    alt="Depilmoni"
                    className="
                      w-full h-full object-cover object-center
                      animate-slideFade
                      transition-transform duration-700 ease-out
                      group-hover:scale-[1.06]
                    "
                  />

                  {/* SETA ESQUERDA */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2
                               bg-white/80 backdrop-blur-md text-[#431f13]
                               w-11 h-11 rounded-full flex items-center justify-center
                               shadow-md opacity-0 group-hover:opacity-100 transition"
                    aria-label="Imagem anterior"
                    type="button"
                  >
                    ‹
                  </button>

                  {/* SETA DIREITA */}
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2
                               bg-white/80 backdrop-blur-md text-[#431f13]
                               w-11 h-11 rounded-full flex items-center justify-center
                               shadow-md opacity-0 group-hover:opacity-100 transition"
                    aria-label="Próxima imagem"
                    type="button"
                  >
                    ›
                  </button>

                  {/* INDICADORES */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Ir para imagem ${index + 1}`}
                        className={`w-2.5 h-2.5 rounded-full transition ${
                          index === currentSlide ? "bg-[#b38055]" : "bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* TEXTO HERO */}
            <div className="w-full md:w-[48%] text-center md:text-left mt-8 md:mt-0 max-w-[620px]">
              <h1 className="text-[2.2rem] md:text-[3.6rem] leading-tight font-semibold italic text-[#431f13]">
                O próximo passo para sua{" "}
                <span className="text-[#b38055]">carreira</span> na estética
                começa aqui
              </h1>

              <p className="mt-6 text-[16px] md:text-[17.5px] leading-relaxed text-[#3a2a23]">
                Descubra a leveza, conforto e praticidade da{" "}
                <strong>Depilmoni</strong>, pensada para elevar sua atuação
                profissional.
              </p>

              <a
                href="https://wa.me/5585986602206"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center justify-center gap-3 bg-[#b38055] text-white font-semibold px-9 py-4 rounded-full transition hover:bg-[#9a6b44] shadow-[0_12px_30px_rgba(179,128,85,0.35)]"
              >
                Garanta sua vaga
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISOR */}
      <div className="bg-[#fff5eb] py-14 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-20">
          <div className="flex items-center justify-center gap-8">
            <span className="flex-[3] h-[2px] bg-[#431f13]/40"></span>

            <span className="text-[#431f13] text-[2.4rem] md:text-[3rem] font-serif italic font-medium whitespace-nowrap">
              Sobre nós
            </span>

            <span className="flex-[3] h-[2px] bg-[#431f13]/40"></span>
          </div>
        </div>
      </div>

      {/* SOBRE A DEPILMONI */}
      <section id="sobre" className="bg-[#fff5eb] py-20 md:py-22">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* COLAGEM DE IMAGENS */}
            <div className="grid grid-cols-[1.6fr_1fr] grid-rows-2 gap-6">
              {/* imagem grande */}
              <div className="row-span-2 h-[680px] overflow-hidden rounded-[2.5rem_2.5rem_2.5rem_6rem]">
                <img
                  src="/imagens/cera-depilmoni.PNG"
                  alt="Cera Depilmoni"
                  onClick={() => setActiveImage("/imagens/cera-depilmoni.PNG")}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-500 hover:scale-[1.06]"
                />
              </div>

              {/* imagem topo direita */}
              <div className="h-[320px] overflow-hidden rounded-[2.5rem_2.5rem_6rem_2.5rem]">
                <img
                  src="/imagens/workshop-depilmoni.PNG"
                  alt="Workshop Depilmoni"
                  onClick={() =>
                    setActiveImage("/imagens/workshop-depilmoni.PNG")
                  }
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-500 hover:scale-[1.06]"
                />
              </div>

              {/* imagem baixo direita */}
              <div className="h-[320px] overflow-hidden rounded-[6rem_2.5rem_2.5rem_2.5rem]">
                <img
                  src="/imagens/tonico-depilmoni.PNG"
                  alt="Tônico Depilmoni"
                  onClick={() => setActiveImage("/imagens/tonico-depilmoni.PNG")}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-500 hover:scale-[1.06]"
                />
              </div>
            </div>

            {/* TEXTO SOBRE */}
            <div className="text-[#3a2a23] max-w-[600px]">
              <h2 className="text-[2rem] md:text-[2.6rem] font-serif italic text-[#431f13] mb-6">
                Cuidado, conforto e bem-estar em cada detalhe
              </h2>

              <p className="text-[16px] md:text-[17.5px] leading-relaxed mb-6">
                A <strong>Depilmoni</strong> é uma marca brasileira dedicada ao
                cuidado com a pele, ao conforto e ao bem-estar, criada
                especialmente para atender as necessidades de profissionais da
                estética e da epilação.
              </p>

              <p className="text-[16px] md:text-[17.5px] leading-relaxed">
                Unindo conhecimento técnico, sensibilidade e inovação, a
                Depilmoni desenvolve soluções que transformam a depilação em uma
                experiência mais segura, eficaz e humanizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISOR – NOSSOS PRODUTOS */}
      <div className="bg-[#fff5eb] py-14 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-20">
          <div className="flex items-center justify-center gap-8">
            <span className="flex-[3] h-[2px] bg-[#431f13]/40"></span>

            <span className="text-[#431f13] text-[2.4rem] md:text-[3rem] font-serif italic font-medium whitespace-nowrap">
              Nossos produtos
            </span>

            <span className="flex-[3] h-[2px] bg-[#431f13]/40"></span>
          </div>
        </div>
      </div>

      {/* PRODUTOS */}
      <section id="produtos" className="bg-[#fff5eb] py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-20">
          {/* GRID DE PRODUTOS */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {/* CARD 1 */}
            <div className="group relative overflow-hidden rounded-[2.5rem] shadow-xl cursor-pointer">
              <img
                src="/imagens/tonico-novo.png"
                alt="Tônico Pré e Pós Epilação"
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-[#431f13]/70 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center px-8 text-center">
                <div className="text-white">
                  <h3 className="text-[1.8rem] font-serif italic mb-4">
                    Tônico Pré & Pós
                  </h3>
                  <p className="text-[15.5px] leading-relaxed">
                    Ação calmante, refrescante e analgésica. Prepara a pele antes
                    e promove conforto imediato após a epilação.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group relative overflow-hidden rounded-[2.5rem] shadow-xl cursor-pointer">
              <img
                src="/imagens/cera-780g.png"
                alt="Cera Depilatória Profissional 780g"
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-[#431f13]/70 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center px-8 text-center">
                <div className="text-white">
                  <h3 className="text-[1.8rem] font-serif italic mb-4">
                    Cera Profissional 780g
                  </h3>
                  <p className="text-[15.5px] leading-relaxed">
                    Alta performance, excelente aderência e remoção eficaz,
                    proporcionando menos dor e mais conforto.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group relative overflow-hidden rounded-[2.5rem] shadow-xl cursor-pointer">
              <img
                src="/imagens/cera-350g.png"
                alt="Cera Depilatória Profissional 350g"
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-[#431f13]/70 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center px-8 text-center">
                <div className="text-white">
                  <h3 className="text-[1.8rem] font-serif italic mb-4">
                    Cera Profissional 350g
                  </h3>
                  <p className="text-[15.5px] leading-relaxed">
                    Ideal para atendimentos pontuais, mantendo a mesma qualidade,
                    eficiência e cuidado com a pele.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CURSOS ================= */}
      <section id="cursos" className="bg-[#fff5eb] py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-20">
          {/* TÍTULO COM LINHAS */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <span className="flex-[3] h-[2px] bg-[#431f13]/40"></span>

            <h2 className="text-[#431f13] text-[2.2rem] md:text-[3rem] font-serif italic font-medium whitespace-nowrap">
              Cursos
            </h2>

            <span className="flex-[3] h-[2px] bg-[#431f13]/40"></span>
          </div>

          {/* CONTEÚDO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* IMAGEM DO CURSO */}
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img
                src="/imagens/treinamento-direcionado.png"
                alt="Treinamento Direcionado Depilmoni"
                className="w-full h-[520px] object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>

            {/* TEXTO DO CURSO */}
            <div className="text-[#3a2a23] max-w-[600px]">
              <h3 className="text-[2rem] md:text-[2.6rem] font-serif italic text-[#431f13] mb-6">
                Treinamento Direcionado Depilmoni
              </h3>

              <p className="text-[16px] md:text-[17.5px] leading-relaxed mb-6">
                Curso exclusivo para epiladoras que desejam sair do básico,
                elevar o padrão de atendimento e se destacar no mercado da
                estética.
              </p>

              <ul className="space-y-3 text-[16px] md:text-[17px] mb-8 list-disc list-inside">
                <li>
                  Técnica exclusiva com até <strong>50% menos dor</strong>
                </li>
                <li>
                  Método profissional com{" "}
                  <strong>cera hidrossolúvel + tônico</strong>
                </li>
                <li>Protocolo completo de atendimento</li>
                <li>Prática real no seu próprio espaço</li>
                <li>Suporte pós-treinamento via WhatsApp</li>
              </ul>

              <p className="text-[16px] md:text-[17px] italic mb-8 text-[#431f13]">
                Vagas limitadas. Aprimore suas técnicas e torne-se referência em
                epilação.
              </p>

              {/* BOTÃO WHATSAPP */}
              <a
                href="https://wa.me/5585992103191"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#b38055] text-white font-semibold px-9 py-4 rounded-full transition hover:bg-[#9a6b44] shadow-[0_12px_30px_rgba(179,128,85,0.35)]"
              >
                Quero saber mais
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-6"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:opacity-70"
              aria-label="Fechar"
              type="button"
            >
              ×
            </button>

            <img
              src={activeImage}
              alt="Imagem ampliada"
              className="w-full max-h-[85vh] object-contain rounded-[2rem] shadow-2xl animate-lightbox"
            />
          </div>
        </div>
      )}
    </>
  );
}
