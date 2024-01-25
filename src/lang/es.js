/* 
TAMAÑO DE IMAGENES
service.image.card - max-width: 553px | proporcion: 16:9
service.image.description - max-width: 967px | proporcion: 16:9
*/

export default {
  general: {
    wallpapers: {
      home: '/images/wallpapers/hero.png',                 // Max Height: 1200px
      professional: '/images/wallpapers/professional.jpg', // Aspect Ratio: 16:9 - Max Width: 1920px
      main: '/images/wallpapers/main.jpg',                 // Aspect Ratio:  2:3 - Max Width: 1920px
    }
  },

  header: {
    navbar: [
      {
        text: 'Inicio',
        href: '#inicio'
      },
      {
        text: 'Conocimientos',
        href: '#conocimientos',
      },
      {
        text: 'Trabajo',
        href: '#trabajo',
      },
      {
        text: 'Portafolio',
        href: '#portafolio',
      },
      {
        text: 'Trabajemos Juntos',
        href: '#contacto',
        border: true,
      },
    ],
  },

  home: {
    id: 'inicio',
    title: {
      line1: 'Yo soy',
      line2: 'Luis',
      line3: 'Valladares',
    },
    subtitle: 'Desarrollador Web',
    about_me: 'Como Desarrollador Web me especializo en el area denominada como "Frontend", es decir, en todo lo relacionado con el desarrollo de una interfaz web y su interactividad con los usuarios. Cuento con mas de 5 años de experiencia y puedo resaltar mi trabajo como Freelancer, mediante el cual, he tenido la oportunidad de trabajar de manera remota y colaborativa con personas y equipos de trabajo de diferentes partes del mundo. Mi objetivo actual es seguir mejorando mis habilidades profesionales, por lo que me encuentro en la actualización continua de mis conocimientos y en la búsqueda de nuevos retos profesionales.',
    curriculum: {
      text: 'Descargar Currículum',
      link: 'https://drive.google.com/file/d/1E6vjqJgxoJl3Y-NZ9BIkfEoY7s0yirfn/view'
    }
  },

  professional: {
    id: 'conocimientos',
    title: 'Conocimientos',
    subtitle: 'Mi nivel de expertiz en desarrollo web',
    knowledge: [
      {
        title: 'HTML',
        level: 95,
        description: 'HTML nativo y gestores de plantillas como Pug, Nunjucks y JSX. Ademas de desarrollo optimizado para motores de búsqueda (SEO).'
      },
      {
        title: 'CSS',
        level: 95,
        description: 'CSS nativo, librerias como Bootstrap y TailwindCSS, y preprocesadores como Sass y PostCSS.'
      },
      {
        title: 'Javascript',
        level: 90,
        description: 'Javascript nativo, preprocesadores como TypeScript, librerias como JQuery y frameworks como React. Ademas de automatización de tareas con herramientas como Gulp, Webpack y Vite.js.'
      },
      {
        title: 'React',
        level: 90,
        description: 'React y sus librerias mas comunmente utilizadas como "React Router Dom" y "React Redux".'
      },
    ],
    subtitle_2: 'Experiencia Relacionada',
    experience: [
      {
        title: 'Diseño',
        description: 'Conocimientos basicos tanto en UI como UX, con experiencia en manejo de herramientas relacionadas como Figma, Sketch, Adobe XD, Photoshop e Illustrator.',
      },
      {
        title: 'Backend',
        description: 'Experiencia en entornos como Node.js, PHP y Ruby. Sin embargo, en la mayoria de casos mi rol se ha enfocado en el desarrollo Frontend.',
      },
      {
        title: 'Base de Datos',
        description: 'Experiencia en entornos como MySQL, PostgreSQL, MongoDB y Firebase.',
      },
      {
        title: 'Herramientas para Desarrollo',
        description: 'Manejo de herramientas para gestion de proyectos como Git, Github y Gitlab, para comunicacion y gestion de tareas como Slack, Trello y Google Workspace, y herramientas para un agil desarrollo como Visual Studio Code, Google Chrome y la Terminal',
      }
    ],
  },

  job: {
    id: 'trabajo',
    title: 'Trabajo',
    subtitle: 'Descripcion de mis servicios',
    services: [
      {
        title: 'Maquetación Web',
        description: 'Desarrollo de cualquier tipo de interfaz web partiendo desde una idea o un diseño, hasta el desarrollo de un conjunto de archivos capaces de ser reproducidos por todo tipo de navegadores web.',
        start_date: 2018,
        image: {
          url: '/images/services/maquetacion.png',
          url2x: '/images/services/maquetacion@2x.png'
        },
        tools: ['html', 'css']
      },
      {
        title: 'Interactividad local y remota',
        description: 'Desarrollo de servicios e interfaces web dinámicos e interactivos encargados de gestionar las solicitudes de los clientes de una manera rápida, eficiente y automatizada.',
        start_date: 2018,
        image: {
          url: '/images/services/interactividad.png',
          url2x: '/images/services/interactividad@2x.png'
        },
        tools: ['javascript', 'nodejs', 'mysql', 'firebase']
      },
      {
        title: 'Trabajo remoto y colaborativo',
        description: 'Manejo de múltiples herramientas que facilitan la comunicación y revision del proyecto durante el desarrollo, con respaldos en la nube y un control de versiones que garantizan un trabajo remoto y colaborativo completamente eficiente.',
        start_date: 2018,
        image: {
          url: '/images/services/remoto.png',
          url2x: '/images/services/remoto@2x.png'
        },
        tools: ['git', 'github', 'gitlab']
      },
    ]
  },
  portfolio: {
    id: 'portafolio',
    title: 'Portafolio',
    subtitle: 'Mis proyectos recientes',
    projects: [
      {
        title: 'Giacchetta Networks',
        description: 'Proyecto en el que se desarrollo la pagina web de Giacchetta Networks, empresa que brinda servicios relacionados con Marketing, Negocios y Desarrollo de Proyectos. El desarrollado comenzó de 0, incluido su diseño, y se llevo a cabo con ayuda de "Front" una plantilla de Bootstrap. Cuenta con múltiples interfaces, desde su pagina de inicio, un blog e incluso términos y condiciones de uso. Cabe mencionar, que cada interfaz es responsiva e interactiva, programada para adaptarse a cualquier tipo de pantalla, con posibilidad de incluir diferentes idiomas, carga dinámica de contenido y optimizada para tener un excelente rendimiento y velocidad de carga.',
        website: 'https://giacchetta.net',
        image: {
          card: {
            url: '/images/projects/giacchetta_networks.png',
            url2x: '',
          },
          description: {
            url: '/images/projects/giacchetta_networks_description.png',
            url2x: '',
          },
        },
        tools: ['html', 'css', 'javascript', 'bootstrap', 'nunjucks', 'gulp', 'git', 'gitlab']
      },
      {
        title: 'Moegui',
        description: 'Proyecto en el que se desarrollo la pagina web de Moegui, empresa que brinda servicios de consultoría relacionados con DevOps, SecOps y TestOps. El desarrollado comenzó a partir de una pagina de inicio y se llevo a cabo con ayuda de \'Front\' una plantilla de Bootstrap. Cuenta con multiples interfaces, como su pagina de inicio (actualizada), nuevas paginas como acerca de, contacto, blog, documentación, ayuda, políticas de privacidad, términos y condiciones, e incluso paginas creadas dinámicamente para cada uno de sus productos, blogs, servicios y oportunidades de trabajo. Cabe mencionar, que cada interfaz es responsiva e interactiva, programada para adaptarse a cualquier tipo de pantalla, con posibilidad de incluir diferentes idiomas, con múltiples animaciones, carga dinámica de contenido y optimizada para tener un excelente rendimiento y velocidad de carga.',
        website: 'https://moegui.com',
        image: {
          card: {
            url: '/images/projects/moegui.png',
            url2x: '',
          },
          description: {
            url: '/images/projects/moegui_description.png',
            url2x: '',
          },
        },
        tools: ['html', 'css', 'javascript', 'bootstrap', 'nunjucks', 'gulp', 'git', 'gitlab']
      },
      {
        title: 'Portafolio',
        description: 'Proyecto en el que se desarrollo la pagina web actual enfocada en promover mi trabajo. El desarrollado comenzó de 0, incluido su diseño. Cuenta con una interfaz responsiva e interactiva, programada para adaptarse a cualquier tipo de pantalla, con animaciones sutiles, carga dinámica de contenido y optimizada para tener un excelente rendimiento y velocidad de carga.',
        website: 'https://luisvalladaresc.github.io',
        github: 'https://github.com/LuisValladaresC/luisvalladaresc.github.io',
        image: {
          card: {
            url: '/images/projects/portafolio.png',
            url2x: '',
          },
          description: {
            url: '/images/projects/portafolio_description.png',
            url2x: '',
          },
        },
        tools: ['html', 'css', 'javascript', 'git', 'github']
      },
      {
        title: 'Sistema de Inventarios',
        description: 'Proyecto en el que se dio mantenimiento y desarrollaron nuevas características para una aplicación web enfocada gestionar inventarios de productos y realizar pedidos. Las nuevas implementaciones fueron desde cambios menores en las diferentes interfaces, revisión y reparación de errores, diseño y desarrollo de nuevas interfaces con su lógica de base de datos e interactividad con el servidor.',
        website: 'https://www.behance.net/gallery/135108777/Sistema-de-Inventarios',
        image: {
          card: {
            url: '/images/projects/sistema_inventarios.png',
            url2x: '',
          },
          description: {
            url: '/images/projects/sistema_inventarios_description.png',
            url2x: '',
          },
        },
        tools: ['php', 'html', 'css', 'javascript', 'bootstrap', 'mysql']
      },
      {
        title: 'RCavestany',
        description: 'Proyecto en el que se desarrollo una pagina web minimalista enfocada en promover la marca personal del cliente. El desarrollado comenzó a partir de un diseño inicial. Cuenta con una interfaz responsiva e interactiva, programada para adaptarse a cualquier tipo de pantalla, con animaciones sutiles, carga dinámica de contenido y optimizada para tener un excelente rendimiento y velocidad de carga.',
        website: 'http://www.rcavestany.com',
        image: {
          card: {
            url: '/images/projects/rcavestany.png',
            url2x: '',
          },
          description: {
            url: '/images/projects/rcavestany_description.png',
            url2x: ''
          },
        },
        tools: ['html', 'css', 'javascript']
      },
      {
        title: 'XabiDB',
        description: 'Proyecto en el que se desarrollo una pagina web enfocada en promover la marca personal del cliente. El desarrollado comenzó a partir de un diseño inicial. Cuenta con una interfaz responsiva e interactiva, programada para adaptarse a cualquier tipo de pantalla, con animaciones sutiles y optimizada para tener un excelente rendimiento y velocidad de carga.',
        website: 'https://luisvalladaresc.github.io/XabiDB',
        image: {
          card: {
            url: '/images/projects/xabidb.png',
            url2x: '',
          },
          description: {
            url: '/images/projects/xabidb_description.png',
            url2x: ''
          },
        },
        tools: ['html', 'css', 'javascript']
      },
    ],
  },
  contact: {
    id: 'contacto',
    title: 'Contacto',
    // about_me: 'Soy un Frontend Developer con mas de 3 años de experiencia en desarrollo y mantenimiento de paginas web para diferentes sectores, entre los que puedo resaltar mi colaboración trabajando de manera remota en la plataforma de Workana. Mi objetivo es seguir mejorando mis habilidades profesionales, por lo que me encuentro en una continua actualización de mis conocimientos y en la búsqueda de nuevas oportunidades laborales.',
    description: 'Soy un Frontend Developer con mas de 5 años de experiencia en desarrollo de paginas web. Mi objetivo es seguir mejorando mis habilidades profesionales, por lo que me encuentro en una continua actualización de mis conocimientos y en la búsqueda de nuevas oportunidades laborales.',
    email: 'ls.valladares7@gmail.com',
    phone: '',
    social_networks: {
      workana: 'https://www.workana.com/freelancer/ed6857354a8d6dccd9db81d9d9a40743',
      github: 'https://github.com/LuisValladaresC/',
      linkedin: '',
    },
    form: {
      name: {
        placeholder: 'Nombre',
        minLength: 3,
        maxLength: 50,
      },
      subject: {
        placeholder: 'Asunto',
        minLength: 3,
        maxLength: 50,
      },
      message: {
        placeholder: 'Mensaje',
        minLength: 10,
        maxLength: null,
      },
      submit: 'Enviar',
    }
  },
  footer: {
    text: `Derechos Reservados © ${new Date().getFullYear()}`
  },
  modal: {
    project: {
      description: 'Descripcion',
      url: 'URL',
      requirements: 'Requerimientos',
    },
  },
}