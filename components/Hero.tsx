import { Placeholder } from "./Placeholder";

export function Hero() {
  return (
    // <section aria-label="Inicio" className="relative h-[660px] w-full">
    //   <img src="/hero.png" alt="" />
    // </section>
    <section className="relative h-[660px] bg-cover bg-center bg-fixed bg-[url('/hero.png')]" >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* <h1 className="text-white text-4xl">Parallax</h1> */}
      </div>
    </section>
  );
}
