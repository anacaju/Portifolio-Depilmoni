import React from "react";
import Slider from "react-slick";
import { ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  const images = [
    "/imagens/banana.png",
    "/imagens/banner2.png",
    "/imagens/banner3.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="bg-[#fff5eb] min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 md:mt-0">
        {/* Texto */}
        <div
          className="
            max-w-xl text-left flex-1
            ml-6              /* Mobile pequeno */
            sm:ml-10          /* Celulares grandes */
            md:ml-[5rem]      /* Tablet em pé (ex: iPad vertical) */
            lg:ml-[8rem]      /* Tablet deitado / notebook pequeno */
            xl:ml-[11rem]     /* Desktop grande */
          "
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#431f13] leading-snug border-b-2 border-[#b38055] pb-2">
            O próximo passo para sua{" "}
            <span className="text-[#b38055] font-semibold">carreira</span> na
            estética começa aqui
          </h1>

          <p className="text-[#080808] mt-4 text-lg">
            Descubra a leveza, conforto e praticidade da{" "}
            <b>Depilmoni</b> — pensada nos mínimos detalhes para transformar sua
            experiência.
          </p>

          <button className="mt-8 bg-[#b38055] text-white font-semibold py-3 px-6 rounded-full shadow-md flex items-center gap-2 hover:bg-[#9a9a98] transition">
            Garanta sua vaga aqui
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Carrossel */}
        <div className="mt-10 md:mt-0 flex justify-center md:justify-end w-full md:w-1/2 h-[500px] md:h-[600px] lg:h-[500px] overflow-hidden">
          <Slider {...settings} className="w-full h-full">
            {images.map((img, index) => (
              <div key={index} className="h-full">
                <img
                  src={img}
                  alt={`Produto destaque ${index + 1}`}
                  className="w-full h-full object-cover object-center rounded-2xl shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
