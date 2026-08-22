const services = [
  { title: "ASESORAMIENTO", bg_img:"/servicios/asesoramiento.png",  span: false },
  { title: "COORDINACIÓN", bg_img:"/servicios/coordinacion.png",  span: false },
  { title: "DOCUMENTACIÓN", bg_img:"/servicios/documentacion.png",  span: false },
  { title: "GESTIÓN ANTE TERCEROS", bg_img:"/servicios/gestion.png",  span: false },
  { title: "APERTURA COMERCIAL", bg_img:"/servicios/apertura.png",  span: true },
];

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-[1440px] px-6 py-12 md:px-[74px] md:py-16">
      <div className="mb-10 flex items-center justify-center gap-4">
        <span className="font-nav text-xl font-medium text-navy">↓</span>
        <h2 className="font-display text-center my-4 text-xl font-semibold tracking-[0.03em] text-navy uppercase">
          Nuestros servicios
        </h2>
        <span className="font-nav text-xl font-medium text-navy">↓</span>
      </div>

      <ul className="grid grid-cols-1 gap-[5px] md:grid-cols-2">
        {services.map((service) => (
          <li
            key={service.title}
            className={`group relative h-[241px] cursor-pointer overflow-hidden bg-service ${
              service.span ? "md:col-span-2" : ""
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
              style={{ backgroundImage: `url('${service.bg_img}')` }}
            />
            <p className="relative z-10 flex h-full w-full items-center justify-center text-base font-extrabold tracking-[0.03em] text-navy transition-colors duration-500 ease-out group-hover:text-white">
              {service.title}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
