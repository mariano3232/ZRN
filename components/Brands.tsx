import Marquee from "react-fast-marquee";

const brands = [
  "/marcas/BioGreen.png",
  "/marcas/Global.png",
  "/marcas/GUM.png",
  "/marcas/Moblar.png",
  "/marcas/PHARMA.png",
  "/marcas/SA.png",
  "/marcas/TW.png"
];

export function Brands() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 mb-30 md:px-[70px] md:pb-24">
      <h2 className="mb-12 text-base font-medium tracking-[0.03em] text-navy">
        MARCAS QUE CONFIARON EN NOSOTROS  ↓ ↓
      </h2>
      <Marquee speed={60} pauseOnHover>
          {brands.map((brand) => (
            <div key={brand} className="mx-5 rounded-xl overflow-hidden">
              <img src={brand} className="h-[143px] w-full min-w-[300px] rounded-xl " />
            </div>
          ))}
      </Marquee>
    </section>
  );
}
