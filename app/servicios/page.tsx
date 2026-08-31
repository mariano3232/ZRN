'use client'

import { useEffect, useRef, useState } from 'react'

const transports = [
  { 
    id: 'aereo',
    label: 'aéreo',
    img: '/servicios/transporte-aereo.jpg',
    icon:"/transporte/aereo.png",
    heading: 'TRANSPORTE\nAÉREO',
    intro: "Para cargas urgentes o de alto valor que requieren entregas rápidas.",
    plus: { strong: 'Rapidez', rest: ', alta frecuencia de vuelos y mayor seguridad.' },
    minus: { strong: 'Mayor costo', rest: ', menor capacidad de carga, restricciones sobre ciertos productos.' },
  },
  { 
    id: 'maritimo',
    label: 'marítimo',
    img: '/servicios/transporte-maritimo.jpg',
    icon:"/transporte/maritimo.png",
    heading: 'TRANSPORTE\nMARÍTIMO',
    intro: "Para grandes volúmenes de carga y operaciones donde el costo logístico es prioritario.",
    plus: { strong: 'Capacidad', rest: ', menor costo por volumen, ideal para cargas pesadas y de alto volumen.' },
    minus: { strong: 'Mayor tiempo de tránsito', rest: ', dependencia de itinerarios portuarios.' },
  },
  {
    id: 'terrestre',
    label: 'terrestre',
    img: '/servicios/transporte-terrestre.png',
    icon:"/transporte/terrestre.png",
    heading: 'TRANSPORTE\nTERRESTRE',
    intro: 'Para operaciones regionales y cargas que requieren flexibilidad y conexión directa entre origen y destino.',
    plus: { strong: 'Flexibilidad', rest: ', servicio puerta a puerta y conectividad regional.' },
    minus: { strong: 'Tiempos', rest: ' variables según rutas y fronteras, menor capacidad y mayores costos en largas distancias.' },
  },
] as const

const services = [
  {
    id: "asesoramiento",
    name: "ASESORAMIENTO",
    img: "/servicios/asesoramiento.png",
    items: [
      <>Evaluamos la viabilidad de cada propuesta y sus distintas posibilidades de desarrollo.</>,
      <>Analizamos rutas y costos según las necesidades de tu operación.</>,
      <>Te acompañamos a vos y a tu negocio en cada paso hacia la apertura internacional.</>,
    ],
  },
  {
    id: "coordinacion",
    name: "COORDINACIÓN",
    img: "/servicios/coordinacion.png",
    items: [
      <>Conectamos tu operación con una amplia red de transporte nacional e internacional.</>,
      "Coordinamos la logística de tu carga de principio a fin.",
      <>Gestionamos las operaciones en terminales portuarias, correos y depósitos fiscales.</>,
    ],
  },
  {
    id: "documentacion",
    name: "DOCUMENTACIÓN",
    img: "/servicios/documentacion.png",
    items: [
      <>Analizamos las características técnicas de la mercadería para determinar su <strong>posición arancelaria.</strong></>,
      <>Gestionamos y controlamos la <strong>documentación requerida</strong> en cada operación de comercio exterior.</>,
      <>Oficializamos la mercadería ante Aduana para dar inicio al proceso de despacho.</>,
    ],
  },
  {
    id: "gestion-ante-terceros",
    name: "GESTIÓN ANTE TERCEROS",
    img: "/servicios/gestion.png",
    items: [
      <>Realizamos presentaciones ante organismos regulatorios como ANMAT, SENASA, RENAPER y ARCA, entre otros.</>,
      <>Gestionamos los permisos, intervenciones y certificados necesarios para el ingreso o egreso de mercaderías.</>,
      <>Hacemos seguimiento de cada trámite hasta obtener las autorizaciones correspondientes.</>,
    ],
  },
  {
    id: "apertura-comercial",
    name: "APERTURA COMERCIAL",
    img: "/servicios/apertura.png",
    items: [
      <>Le ofrecemos apertura internacional a tu proyecto ante un contexto competitivo.</>,
      <>Diseñamos estrategias de expansión para conectar tu negocio con nuevos mercados y oportunidades.</>,
      <>Acompañamos cada etapa del proceso de comercio exterior para facilitar operaciones eficientes y seguras.</>,
    ],
  },
]

function ServiceRow({
  service,
  index,
}: {
  service: (typeof services)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)")
    let observer: IntersectionObserver | null = null
    const setup = () => {
      observer?.disconnect()
      observer = null
      if (mq.matches) {
        setInView(false)
        return
      }
      observer = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        { threshold: 0.4, rootMargin: "-15% 0px -15% 0px" },
      )
      observer.observe(el)
    }
    setup()
    mq.addEventListener("change", setup)
    return () => {
      mq.removeEventListener("change", setup)
      observer?.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      id={service.id}
      className="group flex scroll-mt-28 flex-col border border-gray-400 lg:h-[317px] lg:scroll-mt-40 lg:flex-row lg:justify-between"
    >
      <div className="relative flex min-h-[120px] flex-col justify-center overflow-hidden lg:w-[50%] bg-[#494444] px-4 py-8 sm:min-h-[160px] lg:px-0 lg:py-0">
        <div
          className={`absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 ${
            inView ? "opacity-100" : "opacity-50"
          }`}
          style={{ backgroundImage: `url('${service.img}')` }}
        />
        <div className="relative z-10 flex h-full w-full items-end justify-start text-base font-extrabold tracking-[0.03em]">
          <p
            className={`rounded-tr-1 px-5 py-2 transition-colors duration-500 ease-out group-hover:bg-navy group-hover:text-white ${
              inView ? "bg-navy text-white" : "bg-[#A7CBF6] text-navy"
            }`}
          >
            {service.name}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 px-5 py-6 font-medium text-navy sm:gap-5 sm:px-8 sm:py-8 lg:w-1/2 lg:gap-0 lg:px-10 lg:py-15">
        {service.items.map((item, i) => (
          <p className="w-full text-[15px] leading-snug sm:text-[18px] sm:leading-normal" key={i}>
            (✔) {item}
          </p>
        ))}
      </div>
    </div>
  )
}

export default function page() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    const timeout = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
    return () => window.clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % transports.length)
    }, 5000)
    return () => window.clearInterval(interval)
  }, [active])

  return (
    <div className='tracking-[3%] mb-12 sm:mb-16 md:mb-20'>
      <section className="relative h-[480px] overflow-hidden sm:h-[560px] md:h-[700px]">
        {transports.map((transport, i) => (
          <div
            key={transport.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out md:bg-fixed ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${transport.img}')` }}
          />
        ))}
        <div className="relative z-10 mx-auto h-full w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[78px]">
          <div className="relative h-full">
          {transports.map((transport, i) => (
            'heading' in transport ? (
              <div
                key={transport.id}
                className={`absolute top-24 left-0 max-w-[250px] text-white transition-opacity duration-1000 ease-in-out sm:top-28 sm:max-w-[320px] md:top-[143px] md:max-w-[364px] ${
                  i === active ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              >
                <div className="flex items-start gap-1.5 sm:gap-2 relative right-[6px]">
                  <span className="font-nav mt-0.5 text-lg font-medium tracking-[0.03em] sm:mt-1 sm:text-[22px] md:text-[26px]">
                    ↓
                  </span>
                  <h1 className="font-display text-[22px] leading-[1.2] font-semibold tracking-[0.03em] uppercase whitespace-pre-line sm:text-[28px] md:text-[34.5px]">
                    {transport.heading}
                  </h1>
                </div>
                <p className="mt-6 text-[13px] leading-snug font-semibold tracking-[0.03em] sm:mt-8 sm:text-[15px] sm:leading-normal md:mt-10 md:text-base">
                  {transport.intro}
                </p>
                <p className="mt-4 text-[13px] leading-snug font-medium tracking-[0.03em] sm:text-[15px] sm:leading-normal md:mt-5 md:text-base">
                  (+) <span className="font-semibold">{transport.plus.strong}</span>
                  {transport.plus.rest}
                  <br />
                  (-) <span className="font-semibold">{transport.minus.strong}</span>
                  {transport.minus.rest}
                </p>
              </div>
            ) : null
          ))}
          <div className="absolute inset-x-0 bottom-8 flex justify-center md:inset-auto md:top-[143px] md:right-0">
            <div className="flex flex-row gap-2 md:flex-col md:gap-4">
              {transports.map((transport, i) => (
                <button
                  key={transport.id}
                  type="button"
                  aria-label={transport.label}
                  aria-pressed={i === active}
                  onClick={() => setActive(i)}
                  className={`size-16 cursor-pointer rounded-xs p-3 sm:size-24 sm:p-4 md:size-30 md:p-5 ${
                    i === active ? 'bg-[#A7CBF6]' : 'bg-[#B0C3DA]/80'
                  }`}
                >
                  <img src={transport.icon} alt="" className="size-full object-contain" />
                </button>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>
      <div className="mt-16 mb-15 flex justify-center px-4 sm:mt-24 sm:mb-16 md:mt-50 md:mb-30">
        <div className="flex flex-col items-center justify-center gap-5">
          {/* <span className="font-nav text-xl font-medium text-navy">↓</span> */}
          <h2 className="font-display text-center my-4 text-xl font-semibold tracking-[0.03em] text-navy uppercase">
            {/* Nuestros servicios */}
            ¿Como trabajamos?
          </h2>
          <span className="font-nav text-xl font-medium text-navy">↓ ↓</span>
          {/* <span className="font-nav text-xl font-medium text-navy">↓</span> */}
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-4 sm:px-6 md:px-10 lg:px-20">
        {services.map((service, i) => (
          <ServiceRow key={service.id} service={service} index={i} />
        ))}
      </div>
    </div>
  )
}
