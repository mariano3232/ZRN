import Link from "next/link";

export function Hero() {
  return (
    <section
      aria-label="Inicio"
      className="relative h-[660px] bg-cover bg-center bg-[url('/hero-mobile.png')] md:bg-fixed md:bg-[url('/hero.png')]"
    >
      <div className="relative z-10 mx-auto h-full w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[78px]">
        <div className="relative h-full">
          <div className="mx-auto pt-45 mx-auto left-0 max-w-[280px] text-white sm:top-28 sm:max-w-[400px] md:absolute md:p-0 md:top-[143px] md:max-w-[560px]">
            <div className="flex items-start gap-1.5 sm:gap-2">
              <h1 className="font-display text-[22px] leading-[1.2] font-semibold tracking-[0.03em] uppercase sm:text-[28px] md:text-[34.5px]">
                {"Nos encargamos de \n que tu mercadería \n cruce fronteras"}
              </h1>
            </div>
            <p className="mt-6 text-[13px] leading-snug font-medium tracking-[0.03em] sm:mt-8 sm:text-[15px] sm:leading-normal md:mt-10 md:text-base">
              Gestionamos cada paso para que tu mercadería <br /> ingrese o egrese del país de forma segura, <br /> ágil y en cumplimiento con la normativa.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <Link
                href="/servicios"
                className="font-display inline-flex items-center justify-center bg-[#A7CBF6] px-5 py-3 text-center text-sm font-medium tracking-[0.03em] text-navy transition-colors duration-500 ease-out hover:bg-[#8eb8ef] sm:text-base"
              >
                Conocé nuestros servicios
              </Link>
              <Link
                href="#contacto"
                className="font-display inline-flex items-center justify-center bg-btn px-5 py-3 text-center text-sm font-medium tracking-[0.03em] text-white transition-colors duration-500 ease-out hover:bg-[#163656] sm:text-base"
              >
                Contactanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
