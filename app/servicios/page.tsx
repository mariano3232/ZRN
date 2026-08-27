'use client'

import { useEffect, useState } from 'react'

const transports = [
  { id: 'aereo', label: 'aéreo', img: '/servicios/transporte-aereo.jpg' },
  { id: 'maritimo', label: 'marítimo', img: '/servicios/transporte-maritimo.jpg' },
  { id: 'terrestre', label: 'terrestre', img: '/servicios/transporte-terrestre.avif' },
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

export default function page() {
  const [heroImg, setHeroImg] = useState<string>(transports[0].img)

  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    const timeout = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <div className='tracking-[3%] mb-20'>
      <section
        className="relative h-[660px] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${heroImg}')` }}
      >
        <div className='w-full h-full flex justify-end items-center pr-23'>
          <div className='flex flex-col gap-10'>
            {transports.map((transport) => (
              <button
                key={transport.id}
                type="button"
                onClick={() => setHeroImg(transport.img)}
                className={`w-34 h-30 cursor-pointer rounded-xs ${
                  heroImg === transport.img ? 'bg-gray-400' : 'bg-gray-300'
                }`}
              >
                {transport.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      <div className='mt-50 mr-20 mb-30 flex justify-end'>
        <span className='font-display font-semibold text-[36px] text-navy/85'>NUESTROS SERVICIOS ↓↓</span>
      </div>
      <div className='flex flex-col gap-5'>
      {services.map((service,i) => (
        <div id={service.id} key={service.id} className='group flex h-[317px] scroll-mt-40 justify-between border border-gray-400 mx-20 '>
          <div className='relative flex flex-col justify-center pl-15 gap-5 overflow-hidden bg-[#B0C3DA]/80 w-[50%]'>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
              style={{ backgroundImage: `url('${service.img}')` }}
            />
            <div className='relative z-10 flex font-semibold gap-3 w-fit text-navy transition-colors duration-500 ease-out group-hover:text-white'>
              <p className='text-[32px] font-medium'>({i+1})</p>
              <p className='text-[32px] font-display'> {service.name}</p>
            </div>
          </div>
          <div className='flex flex-col justify-between font-medium text-navy py-15 px-10 w-[50%]'>
          {
            service.items.map((item,i)=>(
              <p className='w-[500px] text-[18px] w-full' key={i}>(✔) {item}</p>
            ))
          }
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
