'use client'

import { useEffect, useRef, useState } from 'react'

const transports = [
  { id: 'aereo', label: 'aéreo', img: '/servicios/transporte-aereo.jpg', icon:"/transporte/terrestre.png" },
  { id: 'maritimo', label: 'marítimo', img: '/servicios/transporte-maritimo.jpg', icon:"/transporte/maritimo.png" },
  { id: 'terrestre', label: 'terrestre', img: '/servicios/transporte-terrestre.avif', icon:"/transporte/aereo.png" },
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
      <>Analizamos las características técnicas de la   mercadería para determinar su <strong>posición arancelaria.</strong></>,
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
      <div className="relative flex min-h-[120px] flex-col justify-center overflow-hidden bg-[#B0C3DA]/80 px-4 py-8 sm:min-h-[160px] lg:h-full lg:w-1/2 lg:px-0 lg:py-0">
        <div
          className={`absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 ${
            inView ? "opacity-100" : ""
          }`}
          style={{ backgroundImage: `url('${service.img}')` }}
        />
        <div
          className={`relative z-10 m-auto flex w-fit justify-center gap-2 font-semibold text-navy transition-colors duration-500 ease-out group-hover:text-white sm:gap-3 ${
            inView ? "text-white" : ""
          }`}
        >
          <p className="text-base font-medium sm:text-xl lg:text-[24px]">({index + 1})</p>
          <p className="font-display text-base sm:text-xl lg:text-[24px]">{service.name}</p>
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
      <section className="relative h-[480px] overflow-hidden sm:h-[560px] md:h-[660px]">
        {transports.map((transport, i) => (
          <div
            key={transport.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out md:bg-fixed ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${transport.img}')` }}
          />
        ))}
        <div className="relative z-10 flex h-full w-full items-end justify-center px-4 pb-8 sm:px-8 md:items-center md:justify-start md:px-16 md:pb-0 md:pt-12 lg:px-28">
          <div className="flex flex-row gap-3 md:flex-col md:gap-10">
            {transports.map((transport, i) => (
              <button
                key={transport.id}
                type="button"
                aria-label={transport.label}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                className={`size-16 cursor-pointer rounded-xs p-3 sm:size-24 sm:p-4 md:h-30 md:w-34 md:p-5 ${
                  i === active ? 'bg-[#A7CBF6]' : 'bg-[#B0C3DA]/80'
                }`}
              >
                <img src={transport.icon} alt="" className="size-full object-contain" />
              </button>
            ))}
          </div>
        </div>
      </section>
      <div className="mt-16 mb-10 flex justify-center px-4 sm:mt-24 sm:mb-16 md:mt-50 md:mb-30">
        <span className="font-display text-center text-xl font-semibold text-navy/85 sm:text-2xl md:text-[36px]">
          ↓ NUESTROS SERVICIOS ↓
        </span>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-4 sm:px-6 md:px-10 lg:px-20">
        {services.map((service, i) => (
          <ServiceRow key={service.id} service={service} index={i} />
        ))}
      </div>
    </div>
  )
}
