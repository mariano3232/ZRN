import { Placeholder } from "./Placeholder";

const capabilities = [
  {
    number: "(1)",
    title: "Red global",
    copy: "Una red global de buques, camiones, barcos y servicios aéreos.",
    img:"/capacidades/red.png"
  },
  {
    number: "(2)",
    title: "Diagnóstico de viabilidad",
    copy: "Transformamos la complejidad normativa en rutas claras y rentables para tu negocio",
    img:"/capacidades/diagnostico.png"
  },
  {
    number: "(3)",
    title: "Cobertura logística",
    copy: "Conectamos tu carga con el mundo mediante soluciones de transporte fluidas y sin fricciones.",
    img:"/capacidades/cobertura.png"
  },
  {
    number: "(4)",
    title: "Presencia en territorio",
    copy: "Controlamos cada movimiento en puertos, depósitos y aduanas para que no pierdas el ritmo.",
    img:"/capacidades/presencia.png"
  },
  {
    number: "(5)",
    title: "Tramites",
    copy: "Agilizamos la burocracia para garantizar despachos rápidos y liberar tu mercadería a tiempo.",
    img:"/capacidades/tramites.png"
  },
  {
    number: "(6)",
    title: "Respaldo regulatorio",
    copy: "Destrabamos permisos ante entes oficiales para que tu marca opere con total tranquilidad.",
    img:"/capacidades/respaldo.png"
  },
  {
    number: "(7)",
    title: "Expansión comercial",
    copy: "Impulsamos tu llegada a nuevos mercados para escalar tu marca a nivel internacional.",
    img:"/capacidades/expansion.png"
  },
  {
    number: "(8)",
    title: "Cotización agil",
    copy: "Presupuestos rápidos y claros para que tomes las mejores decisiones estratégicas sin perder tiempo.",
    img:"/capacidades/cotizacion.png"
  },
];

export function Capabilities() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-22 md:py-20">
      <div className="mt-10 mb-20 items-center md:relative md:right-1 flex flex-col md:items-end text-right">
        <div className="text-center">
          <p className="font-nav text-xl text-center font-medium tracking-[0.03em] text-navy">
            ↓↓↓↓↓
          </p>
          <h2 className="font-display mt-2 text-xl font-medium tracking-[0.03em] text-[#0C202B] uppercase">
            Capacidades y Soluciones
          </h2>
        </div>
      </div>

      <ul className="grid grid-cols-1 justify-items-center gap-y-24 sm:grid-cols-[repeat(2,max-content)] sm:justify-between sm:justify-items-stretch lg:grid-cols-[repeat(4,max-content)]">
        {capabilities.map((item) => (
          <li key={item.number} className="flex w-fit flex-col items-center text-center">
            <img className="mb-5 size-[82px]" src={item.img}/>
            <p className="text-sm font-bold tracking-[0.03em] text-navy/85">
              {item.number}
              <br />
              {item.title}
            </p>
            <p className="mt-3 max-w-[230px] text-xs font-medium tracking-[0.03em] text-navy">
              {item.copy}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
