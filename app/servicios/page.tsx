'use client'

import { useEffect, useRef, useState } from 'react'

const transports = [
  { 
    id: 'import',
    label: 'importacion',
    img: '/servicios/transporte-maritimo.jpg',
    imgMobile: '/servicios/mar-celu.png',
    icon:"/transporte/impo-icon.png",
    heading: 'IMPORTACIÓN',
    tagline: 'Ingresá productos del exterior de forma segura y ordenada.',
    body: 'Te acompañamos en la gestión aduanera y documental para facilitar la salida de tu mercadería de forma ágil y previsible.',
    items: [
      'Análisis y planificación de la operación',
      'Clasificación arancelaria',
      'Gestión y control de documentación',
      'Coordinación con organismos y terceros',
      'Seguimiento de la operación hasta su liberación',
    ],
    goal: 'que tu mercadería ingrese al país de manera eficiente, cumpliendo con todos los requisitos aduaneros.',
  },
  {
    id: 'expo',
    label: 'exportacion',
    img: '/servicios/transporte-terrestre.png',
    imgMobile: '/servicios/camion-celu.png',
    icon:"/transporte/expo-icon.png",
    heading: 'EXPORTACIÓN',
    tagline: 'Llevá tus productos al mundo.',
    body: 'Te acompañamos en todo el proceso de importación, desde la planificación hasta la liberación de la mercadería para facilitar su ingreso cumpliendo con los requisitos aduaneros.',
    items: [
      'Análisis y planificación de la operación',
      'Clasificación arancelaria',
      'Gestión documental',
      'Coordinación con organismos y terceros',
      'Seguimiento de la operación hasta su embarque',
    ],
    goal: 'facilitar la salida de tu mercadería y que puedas operar internacionalmente con mayor previsibilidad.',
  },
  { 
    id: 'mudanzas',
    label: 'mudanzas',
    img: '/servicios/mudanza.png',
    imgMobile: '/servicios/mudanza-celu.png',
    icon:"/transporte/mudanza-icon.png",
    heading: 'MUDANZAS\nINTERNACIONALES',
    tagline: 'Tu mudanza también necesita una gestión aduanera.',
    body: 'Simplificamos la parte aduanera de tu mudanza para que puedas concentrarte en tu traslado.',
    items: [
      'Asesoramiento previo a la mudanza',
      'Análisis de la documentación',
      'Gestión aduanera',
      'Coordinación con terceros y organismos intervinientes',
      'Seguimiento de la operación',
      'Gestión de ingreso o salida de efectos personales',
    ],
    goal: 'simplificar la parte aduanera de tu mudanza para que puedas concentrarte en tu traslado.',
  },
] as const

function PosicionArancelaria() {
  return (
    <span className="group/tip relative inline" tabIndex={0}>
      <strong className="cursor-help underline decoration-dotted underline-offset-4">
        posición arancelaria.
      </strong>
      <span
        role="tooltip"
        className="pointer-events-none invisible absolute bottom-[calc(100%+10px)] left-1/2 z-50 w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-left text-[12px] leading-snug font-medium tracking-[0.03em] text-navy opacity-0 shadow-lg transition duration-200 group-hover/tip:visible group-hover/tip:opacity-100 group-focus-within/tip:visible group-focus-within/tip:opacity-100 sm:text-[13px]"
      >
        <span className="block font-bold">¿Para qué sirve?</span>
        <span className="mt-1.5 block">
          Permite conocer de antemano los costos, tributos, requisitos y documentos necesarios para importar o exportar:
        </span>
        <span className="mt-2 block">
          <span className="font-semibold">Tributos y costos:</span> Derechos de importación, impuestos y estimación del costo total.
        </span>
        <span className="mt-1.5 block">
          <span className="font-semibold">Normativa:</span> Requisitos, restricciones, licencias y organismos intervinientes.
        </span>
        <span className="mt-1.5 block">
          <span className="font-semibold">Documentación y beneficios:</span> Certificados requeridos y posibles tratamientos preferenciales.
        </span>
        <span
          aria-hidden
          className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-300"
        />
        <span
          aria-hidden
          className="absolute top-full left-1/2 -mt-px -translate-x-1/2 border-[7px] border-transparent border-t-white"
        />
      </span>
    </span>
  )
}

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
      <>Analizamos las características técnicas de la mercadería para determinar su <PosicionArancelaria /></>,
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
      <div className="relative flex min-h-[120px] flex-col justify-end overflow-hidden lg:w-[50%] bg-[#494444] sm:min-h-[160px] lg:px-0 lg:py-0">
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
          <p className="w-full text-[13px] sm:text[15px] leading-snug sm:text-[18px] sm:leading-normal" key={i}>
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
    }, 30000)
    return () => window.clearInterval(interval)
  }, [active])

  return (
    <div className='tracking-[3%] mb-12 sm:mb-16 md:mb-20'>
      <section className="relative h-[560px] overflow-hidden sm:h-[640px] md:h-[760px]">
        {transports.map((transport, i) => (
          <div
            key={transport.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {'imgMobile' in transport ? (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center md:hidden"
                  style={{ backgroundImage: `url('${transport.imgMobile}')` }}
                />
                <div
                  className="absolute inset-0 hidden bg-cover bg-center md:block md:bg-fixed"
                  style={{ backgroundImage: `url('${transport.img}')` }}
                />
              </>
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center md:bg-fixed"
                style={{ backgroundImage: `url('${transport.img}')` }}
              />
            )}
          </div>
        ))}
        <div className="relative z-10 mx-auto h-full w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[78px]">
          <div className="relative h-full">
          {transports.map((transport, i) => (
              <div
                key={transport.id}
                className={`absolute top-24 left-0 max-h-[calc(100%-7rem)] max-w-[280px] overflow-y-auto text-white transition-opacity duration-1000 ease-in-out sm:top-28 sm:max-w-[380px] md:top-[143px] md:max-h-[calc(100%-10rem)] md:max-w-[480px] ${
                  i === active ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              >
                <div className="relative right-[6px] flex items-start gap-1.5 sm:gap-2">
                  <span className="font-nav mt-0.5 ml-1 text-lg font-medium tracking-[0.03em] sm:mt-1 sm:text-[22px] md:text-[26px]">
                    ↓
                  </span>
                  <h1 className="font-display text-[22px] leading-[1.2] font-semibold tracking-[0.03em] uppercase whitespace-pre-line sm:text-[28px] md:text-[34.5px]">
                    {transport.heading}
                  </h1>
                </div>
                <p className="mt-5 text-[13px] leading-snug font-semibold tracking-[0.03em] sm:mt-6 sm:text-[15px] sm:leading-normal md:text-base">
                  {transport.tagline}
                </p>
                <p className="mt-3 text-[13px] leading-snug font-medium tracking-[0.03em] sm:text-[15px] sm:leading-normal md:mt-4 md:text-base">
                  {transport.body}
                </p>
                <ul className="mt-3 flex flex-col gap-1 sm:mt-4 sm:gap-1.5">
                  {transport.items.map((item) => (
                    <li key={item} className="text-[13px] leading-snug font-medium tracking-[0.03em] sm:text-[15px] md:text-base">
                      - {item}
                    </li>
                  ))}
                </ul>
                {/* <p className="mt-3 text-[13px] leading-snug font-medium tracking-[0.03em] sm:mt-4 sm:text-[15px] sm:leading-normal md:text-base">
                  <span className="font-semibold">Objetivo:</span> {transport.goal}
                </p> */}
              </div>
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
                  className={`flex justify-center items-center size-16 cursor-pointer rounded-xs p-3 transition-colors duration-700 ease-in-out sm:size-24 sm:p-4 md:size-30 md:p-5 ${
                    i === active ? 'bg-[#A7CBF6]' : 'bg-[#B0C3DA]/80'
                  }`}
                >
                  <img src={transport.icon} alt="" className="size-[70.7px] object-contain" />
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
