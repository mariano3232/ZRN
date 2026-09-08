export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const LOCALE_COOKIE = "locale";

export function parseLocale(value: string | undefined | null): Locale {
  return value === "en" ? "en" : "es";
}

const es = {
  nav: {
    home: "Home",
    services: "Servicios",
    about: "Nosotros",
    language: "idioma",
    spanish: "Español",
    english: "English",
    mainNav: "Principal",
    mobileNav: "Principal móvil",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  meta: {
    siteName: "ZRN Comex",
    title: "ZRN Comex | Comercio exterior, logística y aduana en Argentina",
    description:
      "ZRN Comex gestiona importación, exportación, logística y trámites aduaneros en Argentina. Acompañamos tu operación de comercio exterior de principio a fin.",
    ogLocale: "es_AR",
    keywords: [
      "comercio exterior",
      "logística",
      "aduana",
      "importación",
      "exportación",
      "asesoramiento aduanero",
      "Argentina",
    ],
    services: {
      title: "Servicios de importación y exportación",
      description:
        "Asesoramiento, documentación, clasificación arancelaria y coordinación logística para importar, exportar o hacer mudanzas internacionales con ZRN Comex.",
    },
    about: {
      title: "Quiénes somos",
      description:
        "Conocé al equipo de ZRN Comex, nuestra misión y cómo ayudamos a empresas a importar y exportar con respaldo regulatorio y cobertura logística.",
    },
  },
  hero: {
    aria: "Inicio",
    title: "TUS PRODUCTOS PUEDEN CRUZAR FRONTERAS",
    body: "Gestionamos paso a paso para que tus productos puedan ingresar o salir del país de forma segura, ágil y cumpliendo con las normativas adueaneras.",
    ctaServices: "Conocé nuestros servicios",
    ctaAdvice: "Asesoramiento",
  },
  capabilities: {
    title: "Capacidades y Soluciones",
    items: [
      {
        number: "(1)",
        title: "Diagnóstico de viabilidad",
        copy: "Analizamos en detalle tú operación y transformamos las complejidades normativa en rutas claras y rentables para tu negocio.",
        img: "/capacidades/diagnostico.png",
      },
      {
        number: "(2)",
        title: "Respaldo regulatorio",
        copy: "Gestionamos los permisos necesarios para que tu marca opere con total tranquilidad dentro y fuera del pais.",
        img: "/capacidades/respaldo.png",
      },
      {
        number: "(3)",
        title: "Puesta en marcha",
        copy: "Resolvemos los tramites burocraticos que sean necesarios para dar inicio a tu operación y le damos seguimiento para que la carga llegue a tiempo.",
        img: "/capacidades/tramites.png",
      },
      {
        number: "(4)",
        title: "Cobertura logística",
        copy: "Conectamos tu carga con el mundo mediante soluciones de transporte fluidas y sin fricciones.",
        img: "/capacidades/cobertura.png",
      },
      {
        number: "(5)",
        title: "Presencia en territorio",
        copy: "Controlamos cada movimiento en puertos, depósitos y aduanas para que no pierdas el ritmo.",
        img: "/capacidades/presencia.png",
      },
      {
        number: "(6)",
        title: "Red global",
        copy: "Una red global de buques, camiones, barcos y servicios aéreos.",
        img: "/capacidades/red.png",
      },
      {
        number: "(7)",
        title: "Cotización ágil",
        copy: "Presupuestos rápidos y claros para que tomes las mejores decisiones estratégicas sin perder tiempo.",
        img: "/capacidades/cotizacion.png",
      },
      {
        number: "(8)",
        title: "Expansión comercial",
        copy: "Impulsamos tu llegada a nuevos mercados para escalar tu marca a nivel internacional.",
        img: "/capacidades/expansion.png",
      },
    ],
  },
  servicesHome: {
    title: "¿Como trabajamos?",
    items: [
      { title: "ASESORAMIENTO", bg_img: "/servicios/asesoramiento.png", span: false, id: "asesoramiento" },
      { title: "COORDINACIÓN", bg_img: "/servicios/coordinacion.png", span: false, id: "coordinacion" },
      { title: "DOCUMENTACIÓN", bg_img: "/servicios/documentacion.png", span: false, id: "documentacion" },
      { title: "GESTIÓN ANTE TERCEROS", bg_img: "/servicios/gestion.png", span: false, id: "gestion-ante-terceros" },
      { title: "APERTURA COMERCIAL", bg_img: "/servicios/apertura.png", span: true, id: "apertura-comercial" },
    ],
  },
  reviews: {
    title: "Testimonios de clientes",
    highlights: "aspectos destacados",
    items: [
      {
        quote: "Excelente servicio, efectiva solución de problemas.",
        time: "+5 años juntos",
        author: "",
        icon: "/marcas/SanAgustinIcon.png",
        list: [
          "Cordialidad y atención",
          "Disponibilidad en consultas",
          "Comunicación clara",
          "Acompañamiento",
          "Resolución de problemas",
          "Confianza y tranquilidad",
        ],
      },
      {
        quote: "Excelente",
        time: "+5 años juntos",
        author: "",
        icon: "/marcas/MoblarIcon.png",
        list: [
          "Cordialidad y atención",
          "Disponibilidad en consultas",
          "Comunicación clara",
          "Acompañamiento",
          "Resolución de problemas",
          "Confianza y tranquilidad",
        ],
      },
      {
        quote:
          "Tenemos un historial de éxitos en las operaciones qué llevamos a cabo juntos, siempre con toda la predisposición para sumarse a nuestros proyectos con profesionalismo y calidad humana. Personalmente lo considero un soporte de confianza y gran aliado.",
        time: "+5 años juntos",
        author: "Nicolás Ricordi\n",
        small: true,
        icon: "/marcas/BioGreenIcon.png",
        list: [
          "Cordialidad y atención",
          "Disponibilidad en consultas",
          "Comunicación clara",
          "Acompañamiento",
          "Resolución de problemas",
          "Confianza y tranquilidad",
        ],
      },
      {
        quote: "Dinamica y eficiente",
        time: "+2 años juntos",
        author: "",
        icon: "/marcas/pharmaIcon.png",
        list: [
          "Cordialidad y atención",
          "Comunicación clara",
          "Confianza y tranquilidad",
        ],
      },
      {
        quote:
          "La verdad que son excelentes, siempre super atentos y disponibles en todo momento cuando los necesitas. Como si fueran uno mas del equipo luchando codo a codo.",
        time: "+2 año juntos",
        author: "Tomas Bonomo",
        small: true,
        icon: "/marcas/MuffIcon.png",
        list: [
          "Cordialidad y atención",
          "Disponibilidad en consultas",
          "Comunicación clara",
          "Acompañamiento",
          "Resolución de problemas",
          "Confianza y tranquilidad",
        ],
      },
      {
        quote: "Servicio eficiente y de confianza",
        time: "+2 años juntos",
        author: "Matias Ayala",
        icon: "/marcas/DimpackIcon.png",
        list: [
          "Cordialidad y atención",
          "Disponibilidad en consultas",
          "Comunicación clara",
          "Acompañamiento",
          "Resolución de problemas",
          "Confianza y tranquilidad",
        ],
      },
    ],
  },
  brands: {
    title: "MARCAS QUE CONFIARON EN NOSOTROS ↓",
  },
  contact: {
    title: "↓ CONTACTO ↓",
    fields: {
      nombre: "Nombre",
      mail: "Mail",
      telefono: "Teléfono",
      asunto: "Asunto",
      mensaje: "Mensaje",
    },
    send: "Enviar",
    sending: "Enviando",
    sent: "Mensaje enviado.",
    configError: "Falta configurar EmailJS en .env.local.",
    sendError: "No se pudo enviar el mensaje. Intentá de nuevo.",
  },
  whatsapp: {
    message: "Hola, quería más información sobre sus servicios.",
    aria: "WhatsApp",
  },
  about: {
    introBefore: "En ZRN creemos que ",
    introBold1: "lo nacional puede llegar lejos",
    introMid: ", hacemos que ",
    introBold2: "tu mercadería cruce fronteras.",
    introAfter2: " Gestionamos y coordinamos lo necesario para llevar adelante ",
    introBold3: "tu operación",
    introAfter3: " de ",
    introBold4: "importación o exportación",
    introEnd: ", acompañándote a vos y a tu negocio de principio a fin.",
    introDesktop: {
      line1Before: "En ZRN creemos que ",
      line1Bold: "lo nacional puede",
      line2Bold1: " llegar lejos",
      line2Mid: ", hacemos que ",
      line2Bold2: "tu mercadería cruce fronteras.",
      line3: " Gestionamos y coordinamos lo necesario para llevar",
      line4Before: " adelante ",
      line4Bold1: "tu operación",
      line4Mid: " de ",
      line4Bold2: "importación o exportación",
      line4After: ", ",
      line5: "acompañándote a vos y a tu negocio de principio a fin.",
    },
    teamTitle: "Nuestro equipo",
    team: [
      { caption: "— Z. Sokac Ignacio" },
      { caption: "— Z. Sokac Ivan" },
      { caption: "— Z. Sokac Santiago" },
    ],
    historyTitle: "Nuestra historia",
    historyMobile:
      "Somos una empresa familiar con 35 años de experiencia en el rubro. A lo largo de este recorrido, desarrollamos conocimientos y experiencia en distintos ámbitos del comercio exterior. Hoy, con la creación de ZRN, buscamos consolidar todo lo aprendido y proyectarlo hacia el futuro, manteniendo el espíritu y los valores de una empresa familiar.",
    historyCol1:
      "Somos una empresa familiar con 35 años de experiencia en el rubro.",
    historyCol2:
      "A lo largo de este recorrido, desarrollamos conocimientos y experiencia en distintos ámbitos del comercio exterior.",
    historyCol3:
      "Hoy, con la creación de ZRN, buscamos consolidar todo lo aprendido y proyectarlo hacia el futuro.",
    values: [
      {
        title: "(1) MISIÓN",
        copy: "Impulsar proyectos nacionales hacia nuevos mercados mediante estrategia, claridad y acompañamiento.",
        img: "/nosotros/mision.png",
      },
      {
        title: "(2) VISIÓN",
        copy: "Ser la conexión entre la producción nacional y el mundo, impulsando su competitividad internacional.",
        img: "/nosotros/vision.png",
      },
      {
        title: "(3) VALORES",
        copy: "Claridad para avanzar. Estrategia para proyectar. Comunicación para conectar. Cercanía para acompañar.",
        img: "/nosotros/valor.png",
      },
    ],
  },
  serviciosPage: {
    howWeWork: "¿Como trabajamos?",
    transports: [
      {
        id: "import",
        label: "importacion",
        img: "/servicios/transporte-maritimo.jpg",
        imgMobile: "/servicios/mar-celu.png",
        icon: "/transporte/impo-icon.png",
        heading: "IMPORTACIÓN",
        tagline: "Ingresá productos del exterior de forma segura y ordenada.",
        body: "Te acompañamos en la gestión aduanera y documental para facilitar la salida de tu mercadería de forma ágil y previsible.",
        items: [
          "Análisis y planificación de la operación",
          "Clasificación arancelaria",
          "Gestión y control de documentación",
          "Coordinación con organismos\ny terceros",
          "Seguimiento de la operación\nhasta su liberación",
        ],
      },
      {
        id: "expo",
        label: "exportacion",
        img: "/servicios/transporte-terrestre.png",
        imgMobile: "/servicios/camion-celu.png",
        icon: "/transporte/expo-icon.png",
        heading: "EXPORTACIÓN",
        tagline: "Llevá tus productos al mundo.",
        body: "Te acompañamos en todo el proceso de importación, desde la planificación hasta la liberación de la mercadería para facilitar su ingreso cumpliendo con los requisitos aduaneros.",
        items: [
          "Análisis y planificación de la operación",
          "Clasificación arancelaria",
          "Gestión documental",
          "Coordinación con organismos\ny terceros",
          "Seguimiento de la operación\nhasta su embarque",
        ],
      },
      {
        id: "mudanzas",
        label: "mudanzas",
        img: "/servicios/mudanza.png",
        imgMobile: "/servicios/mudanza-celu.png",
        icon: "/transporte/mudanza-icon.png",
        heading: "MUDANZAS\nINTERNACIONALES",
        tagline: "Tu mudanza también necesita una gestión aduanera.",
        body: "Simplificamos la parte aduanera de tu mudanza para que puedas concentrarte en tu traslado.",
        items: [
          "Asesoramiento previo a la mudanza",
          "Análisis de la documentación",
          "Gestión aduanera",
          "Coordinación con terceros y organismos",
          "Seguimiento de la operación",
          "Ingreso o salida de efectos personales",
        ],
      },
    ],
    tariff: {
      label: "posición arancelaria.",
      why: "¿Para qué sirve?",
      intro:
        "Permite conocer de antemano los costos, tributos, requisitos y documentos necesarios para importar o exportar:",
      taxesTitle: "Tributos y costos:",
      taxes:
        "Derechos de importación, impuestos y estimación del costo total.",
      rulesTitle: "Normativa:",
      rules:
        "Requisitos, restricciones, licencias y organismos intervinientes.",
      docsTitle: "Documentación y beneficios:",
      docs: "Certificados requeridos y posibles tratamientos preferenciales.",
    },
    services: [
      {
        id: "asesoramiento",
        name: "ASESORAMIENTO",
        img: "/servicios/asesoramiento.png",
        items: [
          { text: "Evaluamos la viabilidad de cada propuesta y sus distintas posibilidades de desarrollo." },
          { text: "Analizamos rutas y costos según las necesidades de tu operación." },
          { text: "Te acompañamos a vos y a tu negocio en cada paso hacia la apertura internacional." },
        ],
      },
      {
        id: "coordinacion",
        name: "COORDINACIÓN",
        img: "/servicios/coordinacion.png",
        items: [
          { text: "Conectamos tu operación con una amplia red de transporte nacional e internacional." },
          { text: "Coordinamos la logística de tu carga de principio a fin." },
          { text: "Gestionamos las operaciones en terminales portuarias, correos y depósitos fiscales." },
        ],
      },
      {
        id: "documentacion",
        name: "DOCUMENTACIÓN",
        img: "/servicios/documentacion.png",
        items: [
          {
            text: "Analizamos las características técnicas de la mercadería para determinar su ",
            tariff: true,
          },
          {
            textBefore: "Gestionamos y controlamos la ",
            strong: "documentación requerida",
            textAfter: " en cada operación de comercio exterior.",
          },
          { text: "Oficializamos la mercadería ante Aduana para dar inicio al proceso de despacho." },
        ],
      },
      {
        id: "gestion-ante-terceros",
        name: "GESTIÓN ANTE TERCEROS",
        img: "/servicios/gestion.png",
        items: [
          { text: "Realizamos presentaciones ante organismos regulatorios como ANMAT, SENASA, RENAPER y ARCA, entre otros." },
          { text: "Gestionamos los permisos, intervenciones y certificados necesarios para el ingreso o egreso de mercaderías." },
          { text: "Hacemos seguimiento de cada trámite hasta obtener las autorizaciones correspondientes." },
        ],
      },
      {
        id: "apertura-comercial",
        name: "APERTURA COMERCIAL",
        img: "/servicios/apertura.png",
        items: [
          { text: "Le ofrecemos apertura internacional a tu proyecto ante un contexto competitivo." },
          { text: "Diseñamos estrategias de expansión para conectar tu negocio con nuevos mercados y oportunidades." },
          { text: "Acompañamos cada etapa del proceso de comercio exterior para facilitar operaciones eficientes y seguras." },
        ],
      },
    ],
  },
};

const reviewHighlights = [
  "Courtesy and attentiveness",
  "Responsive to inquiries",
  "Clear communication",
  "Ongoing support",
  "Problem-solving",
  "Trust and peace of mind",
] as const;

const en: typeof es = {
  nav: {
    home: "Home",
    services: "Services",
    about: "About us",
    language: "language",
    spanish: "Español",
    english: "English",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  meta: {
    siteName: "ZRN Comex",
    title: "ZRN Comex | Foreign trade, logistics and customs in Argentina",
    description:
      "ZRN Comex handles import, export, logistics and customs procedures in Argentina. We support your foreign trade operation from start to finish.",
    ogLocale: "en_US",
    keywords: [
      "foreign trade",
      "logistics",
      "customs",
      "import",
      "export",
      "customs advisory",
      "Argentina",
    ],
    services: {
      title: "Import and export services",
      description:
        "Consulting, documentation, tariff classification and logistics coordination for imports, exports and international moves with ZRN Comex.",
    },
    about: {
      title: "About us",
      description:
        "Meet the ZRN Comex team, our mission, and how we help companies import and export with regulatory support and logistics coverage.",
    },
  },
  hero: {
    aria: "Home",
    title: "YOUR PRODUCTS CAN CROSS BORDERS",
    body: "We handle every step so your products can enter or leave the country safely, quickly, and in full compliance with customs regulations.",
    ctaServices: "See our services",
    ctaAdvice: "Get advice",
  },
  capabilities: {
    title: "Capabilities and Solutions",
    items: [
      {
        number: "(1)",
        title: "Feasibility assessment",
        copy: "We analyze your operation in detail and turn regulatory complexity into clear, profitable paths for your business.",
        img: "/capacidades/diagnostico.png",
      },
      {
        number: "(2)",
        title: "Regulatory support",
        copy: "We manage the permits your brand needs to operate with complete peace of mind, in Argentina and abroad.",
        img: "/capacidades/respaldo.png",
      },
      {
        number: "(3)",
        title: "Operational launch",
        copy: "We handle the paperwork required to get your operation started and follow through so the cargo arrives on time.",
        img: "/capacidades/tramites.png",
      },
      {
        number: "(4)",
        title: "Logistics coverage",
        copy: "We connect your cargo to the world with smooth, reliable transport solutions.",
        img: "/capacidades/cobertura.png",
      },
      {
        number: "(5)",
        title: "On-the-ground presence",
        copy: "We track every movement in ports, warehouses and customs so you never lose momentum.",
        img: "/capacidades/presencia.png",
      },
      {
        number: "(6)",
        title: "Global network",
        copy: "A global network of ocean, road and air freight services.",
        img: "/capacidades/red.png",
      },
      {
        number: "(7)",
        title: "Fast quotes",
        copy: "Clear, fast quotes so you can make the right strategic decisions without losing time.",
        img: "/capacidades/cotizacion.png",
      },
      {
        number: "(8)",
        title: "Commercial expansion",
        copy: "We help you reach new markets and scale your brand internationally.",
        img: "/capacidades/expansion.png",
      },
    ],
  },
  servicesHome: {
    title: "How we work",
    items: [
      { title: "CONSULTING", bg_img: "/servicios/asesoramiento.png", span: false, id: "asesoramiento" },
      { title: "COORDINATION", bg_img: "/servicios/coordinacion.png", span: false, id: "coordinacion" },
      { title: "DOCUMENTATION", bg_img: "/servicios/documentacion.png", span: false, id: "documentacion" },
      { title: "THIRD-PARTY PROCEDURES", bg_img: "/servicios/gestion.png", span: false, id: "gestion-ante-terceros" },
      { title: "MARKET ENTRY", bg_img: "/servicios/apertura.png", span: true, id: "apertura-comercial" },
    ],
  },
  reviews: {
    title: "Client testimonials",
    highlights: "what stood out",
    items: [
      {
        quote: "Excellent service and effective problem-solving.",
        time: "+5 years together",
        author: "",
        icon: "/marcas/SanAgustinIcon.png",
        list: [...reviewHighlights],
      },
      {
        quote: "Excellent",
        time: "+5 years together",
        author: "Moblar",
        icon: "/marcas/MoblarIcon.png",
        list: [...reviewHighlights],
      },
      {
        quote:
          "We have a strong track record of successful operations together. They are always ready to join our projects with professionalism and a genuine personal approach. I consider them a trusted partner and a great ally.",
        time: "+5 years together",
        author: "Nicolás Ricordi\n(Biogreen)",
        small: true,
        icon: "/marcas/BioGreenIcon.png",
        list: [...reviewHighlights],
      },
      {
        quote: "Dynamic and efficient",
        time: "+2 years together",
        author: "PHARMAEXPRESS S.A.",
        icon: "/marcas/pharmaIcon.png",
        list: [
          "Courtesy and attentiveness",
          "Clear communication",
          "Trust and peace of mind",
        ],
      },
      {
        quote:
          "They are truly excellent: always attentive and available whenever you need them. It feels like they are one more member of the team, working side by side.",
        time: "+2 years together",
        author: "Tomas Bonomo\n(Muffler SRL)",
        small: true,
        icon: "/marcas/MuffIcon.png",
        list: [...reviewHighlights],
      },
      {
        quote: "Efficient and reliable service",
        time: "+2 years together",
        author: "Matias Ayala\n(DIMPACK SRL)",
        icon: "/marcas/DimpackIcon.png",
        list: [...reviewHighlights],
      },
    ],
  },
  brands: {
    title: "BRANDS THAT TRUST US ↓",
  },
  contact: {
    title: "↓ CONTACT US ↓",
    fields: {
      nombre: "Name",
      mail: "Email",
      telefono: "Phone",
      asunto: "Subject",
      mensaje: "Message",
    },
    send: "Send",
    sending: "Sending",
    sent: "Message sent.",
    configError: "EmailJS is not configured in .env.local.",
    sendError: "The message could not be sent. Please try again.",
  },
  whatsapp: {
    message: "Hi, I would like more information about your services.",
    aria: "WhatsApp",
  },
  about: {
    introBefore: "At ZRN we believe that ",
    introBold1: "national products can go far",
    introMid: ". We make sure ",
    introBold2: "your goods cross borders.",
    introAfter2: " We manage and coordinate everything needed to carry out ",
    introBold3: "your import",
    introAfter3: " or ",
    introBold4: "export operation",
    introEnd: ", supporting you and your business from start to finish.",
    introDesktop: {
      line1Before: "At ZRN we believe that ",
      line1Bold: "national products can",
      line2Bold1: " go far",
      line2Mid: ". We make sure ",
      line2Bold2: "your goods cross borders.",
      line3: " We manage and coordinate everything needed to carry",
      line4Before: " out ",
      line4Bold1: "your import",
      line4Mid: " or ",
      line4Bold2: "export operation",
      line4After: ", ",
      line5: "supporting you and your business from start to finish.",
    },
    teamTitle: "Our team",
    team: [
      { caption: "— Z. Sokac Ignacio,\nCo-founder & Commercial" },
      { caption: "— Z. Sokac Ivan,\nCo-founder & Customs Broker" },
      { caption: "— Z. Sokac Santiago,\nCo-founder & Operations" },
    ],
    historyTitle: "Our story",
    historyMobile:
      "We are a family business with 35 years of experience in the industry. Along the way we built knowledge and expertise across foreign trade. Today, with ZRN, we aim to bring everything we have learned together and take it into the future, keeping the spirit and values of a family company.",
    historyCol1: "We are a family business with 35 years of experience in the industry.",
    historyCol2:
      "Along the way we built knowledge and expertise across different areas of foreign trade.",
    historyCol3:
      "Today, with the creation of ZRN, we aim to bring everything we have learned together and take it into the future.",
    values: [
      {
        title: "(1) MISSION",
        copy: "Help national projects reach new markets through strategy, clarity and support.",
        img: "/nosotros/mision.png",
      },
      {
        title: "(2) VISION",
        copy: "Be the link between national production and the world, strengthening its international competitiveness.",
        img: "/nosotros/vision.png",
      },
      {
        title: "(3) VALUES",
        copy: "Clarity to move forward. Strategy to look ahead. Communication to connect. Closeness to stand by you.",
        img: "/nosotros/valor.png",
      },
    ],
  },
  serviciosPage: {
    howWeWork: "How we work",
    transports: [
      {
        id: "import",
        label: "import",
        img: "/servicios/transporte-maritimo.jpg",
        imgMobile: "/servicios/mar-celu.png",
        icon: "/transporte/impo-icon.png",
        heading: "IMPORT",
        tagline: "Bring products into the country safely and in an organized way.",
        body: "We support you through customs and documentation so your goods can enter the country quickly and predictably.",
        items: [
          "Operation analysis and planning",
          "Tariff classification",
          "Document management and control",
          "Coordination with agencies\nand third parties",
          "Follow-up through\ncustoms release",
        ],
      },
      {
        id: "expo",
        label: "export",
        img: "/servicios/transporte-terrestre.png",
        imgMobile: "/servicios/camion-celu.png",
        icon: "/transporte/expo-icon.png",
        heading: "EXPORT",
        tagline: "Take your products to the world.",
        body: "We support you through the full export process, from planning to shipment, so you can operate internationally with greater predictability.",
        items: [
          "Operation analysis and planning",
          "Tariff classification",
          "Document management",
          "Coordination with agencies\nand third parties",
          "Follow-up through\nshipment",
        ],
      },
      {
        id: "mudanzas",
        label: "relocations",
        img: "/servicios/mudanza.png",
        imgMobile: "/servicios/mudanza-celu.png",
        icon: "/transporte/mudanza-icon.png",
        heading: "INTERNATIONAL\nRELOCATIONS",
        tagline: "Your move also needs customs management.",
        body: "We simplify the customs side of your relocation so you can focus on the move itself.",
        items: [
          "Advice before the move",
          "Document review",
          "Customs management",
          "Coordination with third parties and agencies",
          "Operation follow-up",
          "Inbound or outbound household goods",
        ],
      },
    ],
    tariff: {
      label: "tariff classification.",
      why: "What is it for?",
      intro:
        "It lets you know in advance the costs, duties, requirements and documents needed to import or export:",
      taxesTitle: "Duties and costs:",
      taxes: "Import duties, taxes and an estimate of the total cost.",
      rulesTitle: "Regulations:",
      rules: "Requirements, restrictions, licenses and agencies involved.",
      docsTitle: "Documentation and benefits:",
      docs: "Required certificates and possible preferential treatments.",
    },
    services: [
      {
        id: "asesoramiento",
        name: "CONSULTING",
        img: "/servicios/asesoramiento.png",
        items: [
          { text: "We assess the feasibility of each proposal and the different ways it can be developed." },
          { text: "We analyze routes and costs according to the needs of your operation." },
          { text: "We support you and your business at every step of going international." },
        ],
      },
      {
        id: "coordinacion",
        name: "COORDINATION",
        img: "/servicios/coordinacion.png",
        items: [
          { text: "We connect your operation to a wide national and international transport network." },
          { text: "We coordinate your cargo logistics from start to finish." },
          { text: "We manage operations at port terminals, courier facilities and bonded warehouses." },
        ],
      },
      {
        id: "documentacion",
        name: "DOCUMENTATION",
        img: "/servicios/documentacion.png",
        items: [
          {
            text: "We analyze the technical characteristics of the goods to determine their ",
            tariff: true,
          },
          {
            textBefore: "We manage and control the ",
            strong: "required documentation",
            textAfter: " in every foreign trade operation.",
          },
          { text: "We file the goods with Customs to start the clearance process." },
        ],
      },
      {
        id: "gestion-ante-terceros",
        name: "THIRD-PARTY PROCEDURES",
        img: "/servicios/gestion.png",
        items: [
          { text: "We file submissions with regulatory agencies such as ANMAT, SENASA, RENAPER and ARCA, among others." },
          { text: "We manage the permits, interventions and certificates needed for goods to enter or leave the country." },
          { text: "We follow every procedure until the corresponding authorizations are obtained." },
        ],
      },
      {
        id: "apertura-comercial",
        name: "MARKET ENTRY",
        img: "/servicios/apertura.png",
        items: [
          { text: "We help your project reach international markets in a competitive environment." },
          { text: "We design expansion strategies to connect your business with new markets and opportunities." },
          { text: "We support every stage of the foreign trade process to keep operations efficient and secure." },
        ],
      },
    ],
  },
};

export const messages = { es, en };
export type Messages = typeof es;
