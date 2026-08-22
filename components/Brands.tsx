import Marquee from "react-fast-marquee";
import { Placeholder } from "./Placeholder";

const brands = ["GUM", "Elvive", "Dove", "Rexona"];

export function Brands() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 mb-30 md:px-[70px] md:pb-24">
      <h2 className="mb-12 text-base font-medium tracking-[0.03em] text-navy">
        MARCAS QUE CONFIARON EN NOSOTROS  ↓ ↓
      </h2>
      <Marquee speed={60} pauseOnHover className="mask-l-from-80% mask-r-from-80%">
          {brands.map((brand) => (
            <div key={brand} className="mx-5">
              <Placeholder className="h-[143px] w-full min-w-[300px] rounded-[10px] border border-[#747373]" />
              <span className="sr-only">{brand}</span>
            </div>
          ))}
      </Marquee>
    </section>
  );
}
