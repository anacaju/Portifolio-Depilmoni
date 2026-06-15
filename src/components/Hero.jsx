import React, { useState, useEffect } from "react";
import { ArrowRight, Award, GraduationCap, Sparkle, UsersRound } from "lucide-react";

export default function Hero() {
  const [activeImage, setActiveImage] = useState(null);

  const heroImage = "/imagens/certificacao.JPG";
  const heroImages = [heroImage];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide(0);
  const prevSlide = () => setCurrentSlide(0);

  const heroMediaStyle = {
    "--hero-media-max-width": "690px",
    "--hero-media-aspect": "1 / 1",
    "--hero-media-lift": "18px",
    "--hero-media-column": "1.2fr",
    "--hero-content-column": "0.8fr",
    "--hero-content-max-width": "406px",
  };

  const productCards = [
    {
      title: "Catálogo Depilmoni",
      description: "Linha completa de produtos para epilação profissional.",
      image: "/imagens/catalogo-produtos/catalogo-depilmoni.jpg",
      alt: "Catálogo de produtos Depilmoni",
    },
    {
      title: "Tônico Pré & Pós 500ml",
      description: "Formato profissional para preparo e conforto da pele.",
      image: "/imagens/catalogo-produtos/tonico-500ml.jpg",
      alt: "Tônico Pré e Pós Depilmoni 500ml",
    },
    {
      title: "Tônico Pré & Pós 60ml",
      description: "Versão prática para atendimento, revenda e uso pontual.",
      image: "/imagens/catalogo-produtos/tonico-60ml.jpg",
      alt: "Tônico Pré e Pós Depilmoni 60ml",
    },
    {
      title: "Cera Profissional 780g",
      description: "Alta performance para protocolos profissionais.",
      image: "/imagens/catalogo-produtos/cera-780g-catalogo.jpg",
      alt: "Cera profissional Depilmoni 780g",
    },
    {
      title: "Cera Profissional 350g",
      description: "Ideal para atendimentos pontuais e rotina de cabine.",
      image: "/imagens/catalogo-produtos/cera-350g-catalogo.jpg",
      alt: "Cera profissional Depilmoni 350g",
    },
    {
      title: "Dolomita Esfoliante",
      description: "Esfoliação, toque macio e limpeza profunda.",
      image: "/imagens/catalogo-produtos/dolomita-esfoliante.jpg",
      alt: "Dolomita Esfoliante Depilmoni",
    },
  ];

  /* ESC para fechar lightbox */
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden bg-[#fff8f0] pt-14 pb-16 md:pt-18 md:pb-20 lg:min-h-[720px] lg:flex lg:items-center"
      >
        <div className="pointer-events-none absolute -left-16 bottom-4 hidden h-36 w-36 rounded-full border border-[#d7b48a]/25 lg:block" />
        <div className="pointer-events-none absolute -right-20 bottom-10 hidden h-44 w-44 rounded-full border border-[#d7b48a]/20 lg:block" />

        <div className="max-w-[1320px] mx-auto w-full px-6 md:px-10 lg:px-12">
          <div
            className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[var(--hero-media-column)_var(--hero-content-column)] lg:gap-16 xl:gap-20"
            style={heroMediaStyle}
          >
            {/* IMAGEM HERO */}
            <div className="w-full">
              <div className="hidden absolute top-1/2 -translate-y-1/2 -right-7 w-[94%] h-[94%] bg-[#f1e1d2] rounded-[2.5rem]" />

              <div
                className="relative mx-auto w-full rounded-[2.15rem] border border-[#d7b48a]/80 bg-[#fffaf4] p-2 shadow-[0_22px_62px_rgba(67,31,19,0.11)] animate-slide-fade-left lg:translate-y-[var(--hero-media-lift)]"
                style={{
                  maxWidth: "var(--hero-media-max-width)",
                }}
              >
                <div className="relative w-full overflow-hidden rounded-[1.95rem] group">
                  <img
                    key={currentSlide}
                    src={heroImages[currentSlide]}
                    alt="Turma certificada do curso presencial Depilmoni"
                    className="
                      w-full object-cover object-center
                      transition-transform duration-700 ease-out
                      group-hover:scale-[1.035]
                    "
                    style={{ aspectRatio: "var(--hero-media-aspect)" }}
                  />

                  {/* SETA ESQUERDA */}
                  <button
                    onClick={prevSlide}
                    className="!hidden absolute left-4 top-1/2 -translate-y-1/2
                               bg-white/80 backdrop-blur-md text-[#431f13]
                               w-11 h-11 rounded-full flex items-center justify-center
                               shadow-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition"
                    aria-label="Imagem anterior"
                    type="button"
                  >
                    ‹
                  </button>

                  {/* SETA DIREITA */}
                  <button
                    onClick={nextSlide}
                    className="!hidden absolute right-4 top-1/2 -translate-y-1/2
                               bg-white/80 backdrop-blur-md text-[#431f13]
                               w-11 h-11 rounded-full flex items-center justify-center
                               shadow-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition"
                    aria-label="Próxima imagem"
                    type="button"
                  >
                    ›
                  </button>

                  {/* INDICADORES */}
                  <div className="hidden absolute bottom-5 left-1/2 -translate-x-1/2 gap-2">
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

                <div className="absolute -bottom-4 right-5 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-[#d7b48a]/80 bg-[#fff7ea] text-center font-['Cormorant_Garamond'] text-[#8a5934] shadow-[0_12px_26px_rgba(67,31,19,0.12)] sm:h-28 sm:w-28">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em]">
                    Curso
                  </span>
                  <GraduationCap size={26} strokeWidth={1.6} className="my-1" />
                  <span className="text-[0.64rem] font-semibold uppercase tracking-[0.18em]">
                    Presencial
                  </span>
                </div>
              </div>
            </div>

            {/* TEXTO HERO */}
            <div
              className="w-full max-w-[640px] lg:pt-4 xl:min-h-[590px]"
              style={{ maxWidth: "var(--hero-content-max-width)" }}
            >
              <h1 className="text-[2.75rem] sm:text-[3.35rem] md:text-[4rem] lg:text-[3.35rem] xl:text-[4.05rem] leading-[0.94] font-medium text-[#2b170f]">
                O próximo passo para sua{" "}
                <span className="italic text-[#C2752F]">carreira</span> na estética
                começa aqui
              </h1>

              <div className="mt-5 flex max-w-[520px] items-center gap-4 text-[#C2752F] lg:mt-4">
                <span className="h-px flex-1 bg-[#d7b48a]" />
                <Sparkle size={18} fill="currentColor" strokeWidth={1.6} />
                <span className="h-px flex-1 bg-[#d7b48a]" />
              </div>

              <p className="mt-5 max-w-[560px] text-[16px] leading-relaxed text-[#3a2a23] md:text-[17px] lg:mt-4">
                Aprenda com a <strong>Depilmoni</strong> e transforme sua
                atuação profissional com leveza, conforto e prática.
              </p>

              <a
                href="https://wa.me/5585986602206"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-14 items-center justify-center gap-4 rounded-[1.25rem] border border-[#C2752F] bg-[#C2752F] px-8 py-3.5 text-[1rem] font-semibold text-white shadow-[0_16px_34px_rgba(194,117,47,0.28)] transition-colors hover:bg-white hover:text-[#C2752F] lg:mt-5"
              >
                Garanta sua vaga
                <ArrowRight size={24} strokeWidth={1.7} />
              </a>

              <div className="mt-7 grid max-w-[520px] grid-cols-1 overflow-hidden rounded-[1.35rem] border border-[#ead9c7] bg-[#fffaf4]/85 shadow-[0_18px_45px_rgba(67,31,19,0.08)] sm:h-[78px] sm:grid-cols-2 lg:mt-5">
                <div className="flex min-h-[78px] items-center gap-3 px-5 py-3 sm:h-full sm:min-h-0 sm:py-0">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C2752F] text-white shadow-[0_10px_20px_rgba(194,117,47,0.24)]">
                    <UsersRound size={21} strokeWidth={1.7} />
                  </span>
                  <span className="leading-tight">
                    <strong className="block font-['Cormorant_Garamond'] text-[1.55rem] font-semibold text-[#2b170f]">
                      +500
                    </strong>
                    <span className="text-[0.82rem] text-[#3a2a23]">
                      alunas formadas
                    </span>
                  </span>
                </div>

                <div className="flex min-h-[78px] items-center gap-3 border-t border-[#ead9c7] px-5 py-3 sm:h-full sm:min-h-0 sm:border-l sm:border-t-0 sm:py-0">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C2752F] text-white shadow-[0_10px_20px_rgba(194,117,47,0.24)]">
                    <Award size={21} strokeWidth={1.7} />
                  </span>
                  <span className="leading-tight">
                    <strong className="block font-['Cormorant_Garamond'] text-[1.35rem] font-semibold text-[#2b170f]">
                      Certificado
                    </strong>
                    <span className="text-[0.82rem] text-[#3a2a23]">
                      incluso
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISOR */}
      <div className="bg-[#fff5eb] py-10 md:py-12">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex items-center justify-center gap-5 md:gap-8">
            <span className="flex-[3] h-[2px] bg-[#431f13]/40"></span>

            <span className="text-[#431f13] text-[2.15rem] md:text-[2.8rem] font-['Cormorant_Garamond'] italic font-medium whitespace-nowrap">
              Sobre nós
            </span>

            <span className="flex-[3] h-[2px] bg-[#431f13]/40"></span>
          </div>
        </div>
      </div>

      {/* SOBRE A DEPILMONI */}
      <section id="sobre" className="bg-[#fff5eb] py-12 md:py-18">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* COLAGEM DE IMAGENS */}
            <div className="grid grid-cols-[1.45fr_1fr] grid-rows-2 gap-4 md:gap-6">
              {/* imagem grande */}
              <div className="row-span-2 h-[360px] sm:h-[460px] lg:h-[620px] overflow-hidden rounded-[1.8rem_1.8rem_1.8rem_4rem] md:rounded-[2.5rem_2.5rem_2.5rem_5.5rem]">
                <img
                  src="/imagens/cera-depilmoni.PNG"
                  alt="Cera Depilmoni"
                  onClick={() => setActiveImage("/imagens/cera-depilmoni.PNG")}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-500 hover:scale-[1.06]"
                />
              </div>

              {/* imagem topo direita */}
              <div className="h-[172px] sm:h-[220px] lg:h-[298px] overflow-hidden rounded-[1.8rem_1.8rem_4rem_1.8rem] md:rounded-[2.5rem_2.5rem_5.5rem_2.5rem]">
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
              <div className="h-[172px] sm:h-[220px] lg:h-[298px] overflow-hidden rounded-[4rem_1.8rem_1.8rem_1.8rem] md:rounded-[5.5rem_2.5rem_2.5rem_2.5rem]">
                <img
                  src="/imagens/tonico-depilmoni.PNG"
                  alt="Tônico Depilmoni"
                  onClick={() => setActiveImage("/imagens/tonico-depilmoni.PNG")}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-500 hover:scale-[1.06]"
                />
              </div>
            </div>

            {/* TEXTO SOBRE */}
            <div className="max-w-[610px] text-[#3a2a23] lg:pl-2">
              <h2 className="mb-8 max-w-[520px] font-['Cormorant_Garamond'] text-[2.45rem] font-semibold italic leading-[1.12] text-[#431f13] md:text-[3rem] lg:text-[3.15rem]">
                Cuidado, conforto e <br className="hidden sm:block" />
                bem-estar em cada detalhe
              </h2>

              <p className="max-w-[590px] text-[16.5px] font-semibold leading-[1.9] text-[#3a2a23]/90 md:text-[17px]">
                A <strong>Depilmoni</strong> é uma marca brasileira dedicada ao
                cuidado com a pele, ao conforto e ao bem-estar, criada
                especialmente para atender as necessidades de profissionais da
                estética e da epilação.
              </p>

              <p className="mt-8 max-w-[590px] text-[16.5px] font-semibold leading-[1.9] text-[#3a2a23]/90 md:text-[17px]">
                Unindo conhecimento técnico, sensibilidade e inovação, a
                Depilmoni desenvolve soluções que transformam a depilação em uma
                experiência mais segura, eficaz e humanizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISOR – NOSSOS PRODUTOS */}
      <div className="bg-[#fff5eb] py-10 md:py-12">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex items-center justify-center gap-5 md:gap-8">
            <span className="flex-[3] h-[2px] bg-[#431f13]/40"></span>

            <span className="text-[#431f13] text-[2rem] md:text-[2.8rem] font-['Cormorant_Garamond'] italic font-medium whitespace-nowrap">
              Nossos produtos
            </span>

            <span className="flex-[3] h-[2px] bg-[#431f13]/40"></span>
          </div>
        </div>
      </div>

      {/* PRODUTOS */}
      <section id="produtos" className="bg-[#fff5eb] py-12 md:py-18">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-12">
          {/* GRID DE PRODUTOS */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {productCards.map((product) => (
              <article
                key={product.title}
                className="group overflow-hidden rounded-[1.15rem] border border-[#ead9c7] bg-[#fffaf4] shadow-[0_14px_34px_rgba(67,31,19,0.1)] transition-transform duration-300 hover:-translate-y-1"
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  className="aspect-[16/9] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.035]"
                />
                <div className="px-5 pb-5 pt-4 text-[#3a2a23]">
                  <h3 className="mb-2 font-['Cormorant_Garamond'] text-[1.35rem] italic leading-tight text-[#431f13] md:text-[1.45rem]">
                    {product.title}
                  </h3>
                  <p className="max-w-[260px] text-[14px] leading-relaxed md:text-[14.5px]">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="hidden">
            {/* CARD 1 */}
            <div className="group relative overflow-hidden rounded-[1.8rem] md:rounded-[2.2rem] shadow-xl cursor-pointer">
              <img
                src="/imagens/tonico-novo.png"
                alt="Tônico Pré e Pós Epilação"
                className="w-full aspect-[4/3] sm:aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-[#431f13]/70 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500 flex items-center justify-center px-6 text-center">
                <div className="text-white">
                  <h3 className="text-[1.55rem] md:text-[1.75rem] font-['Cormorant_Garamond'] italic mb-3">
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
            <div className="group relative overflow-hidden rounded-[1.8rem] md:rounded-[2.2rem] shadow-xl cursor-pointer">
              <img
                src="/imagens/cera-780g.png"
                alt="Cera Depilatória Profissional 780g"
                className="w-full aspect-[4/3] sm:aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-[#431f13]/70 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500 flex items-center justify-center px-6 text-center">
                <div className="text-white">
                  <h3 className="text-[1.55rem] md:text-[1.75rem] font-['Cormorant_Garamond'] italic mb-3">
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
            <div className="group relative overflow-hidden rounded-[1.8rem] md:rounded-[2.2rem] shadow-xl cursor-pointer sm:col-span-2 lg:col-span-1">
              <img
                src="/imagens/cera-350g.png"
                alt="Cera Depilatória Profissional 350g"
                className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-[#431f13]/70 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500 flex items-center justify-center px-6 text-center">
                <div className="text-white">
                  <h3 className="text-[1.55rem] md:text-[1.75rem] font-['Cormorant_Garamond'] italic mb-3">
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
      <section id="cursos" className="bg-[#fff5eb] py-14 md:py-20">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-12">
          {/* TÍTULO COM LINHAS */}
          <div className="flex items-center justify-center gap-5 md:gap-8 mb-10 md:mb-12">
            <span className="flex-[3] h-[2px] bg-[#431f13]/40"></span>

            <h2 className="text-[#431f13] text-[2.2rem] md:text-[2.8rem] font-['Cormorant_Garamond'] italic font-medium whitespace-nowrap">
              Cursos
            </h2>

            <span className="flex-[3] h-[2px] bg-[#431f13]/40"></span>
          </div>

          {/* CONTEÚDO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* IMAGEM DO CURSO */}
            <div className="relative overflow-hidden rounded-[1.8rem] md:rounded-[2.5rem] shadow-2xl">
              <img
                src="/imagens/treinamento-direcionado.png"
                alt="Treinamento Direcionado Depilmoni"
                className="w-full aspect-[4/3] lg:aspect-[6/5] object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>

            {/* TEXTO DO CURSO */}
            <div className="text-[#3a2a23] max-w-[580px]">
              <h3 className="text-[2rem] md:text-[2.45rem] leading-tight font-['Cormorant_Garamond'] italic text-[#431f13] mb-5">
                Treinamento Direcionado Depilmoni
              </h3>

              <p className="text-[16px] md:text-[17px] leading-relaxed mb-5">
                Curso exclusivo para epiladoras que desejam sair do básico,
                elevar o padrão de atendimento e se destacar no mercado da
                estética.
              </p>

              <ul className="space-y-3 text-[16px] md:text-[17px] mb-7 list-disc list-inside">
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
                className="inline-flex min-h-12 items-center gap-3 rounded-2xl border border-[#C2752F] bg-[#C2752F] px-8 py-3.5 font-semibold text-white shadow-[0_12px_30px_rgba(194,117,47,0.28)] transition-colors hover:bg-white hover:text-[#C2752F]"
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
