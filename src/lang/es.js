export default {
  general: {
    wallpapers: {
      home: '/images/wallpapers/hero.png',                 // Max Height: 1200px
      professional: '/images/wallpapers/professional.jpg', // Aspect Ratio: 16:9 - Max Width: 1920px
      main: '/images/wallpapers/main.jpg',                 // Aspect Ratio:  2:3 - Max Width: 1920px
      contact: '/images/wallpapers/contact.jpg',           // Aspect Ratio: 16:9 - Max Width: 1920px
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
    about_me: 'Como Desarrollador Web me especializo en el Frontend, con más de 4 años de experiencia en el area, trabajando principalmente de manera remota. Puedo resaltar mi perfil como freelancer que me ha permitido trabajar con personas y equipos de diferentes partes del mundo, mejorando tanto mis habilidades técnicas como de comunicación. Aunque mi enfoque principal es el desarrollo frontend también tengo experiencia complementaria en diseño, backend y bases de datos. Ademas, me mantengo en constante actualización de mis conocimientos y en la búsqueda de nuevos retos profesionales que me permitan seguir creciendo.',
    curriculum: {
      text: 'Descargar Currículum',
      link: 'https://drive.google.com/file/d/1E6vjqJgxoJl3Y-NZ9BIkfEoY7s0yirfn/view'
    }
  },

  professional: {
    id: 'conocimientos',
    title: 'Conocimientos',
    subtitle: 'Habilidades Principales',
    knowledge: [
      {
        title: 'HTML',
        level: 100,
        description: 'Desarrollo con HTML nativo y uso gestores de plantillas como Pug, Nunjucks y JSX. Ademas, tengo experiencia con desarrollo optimizado para motores de búsqueda (SEO) y optimizacion web.'
      },
      {
        title: 'CSS',
        level: 100,
        description: 'Desarrollo con CSS nativo, librerias como Bootstrap y TailwindCSS, preprocesadores como Sass, Stylus y PostCSS, y metodologias como BEM. Ademas, tengo experiencia avanzada en el uso de Flexbox y CSS Grid para crear interfaces responsivas y escalables.'
      },
      {
        title: 'Javascript',
        level: 100,
        description: 'Desarrollo con Javascript nativo y TypeScript, librerias como JQuery y frameworks como React. Manejo de herramientas de testing como Jest y para automatización de tareas como Gulp, Webpack y Vite.js. Ademas, tengo experiencia avanzada en asincronía y consumo de API REST.'
      },
      {
        title: 'React',
        level: 100,
        description: 'Experiencia avanzada en React, incluyendo el manejo de sus librerías más utilizadas como React Router Dom y React Redux. Ademas, utilizo herramientas como Vite.js para configuraciones rápidas y escalables, y TypeScript para asegurar la estabilidad y tipado del código.'
      },
    ],
    subtitle_2: 'Habilidades Complementarias',
    experience: [
      {
        title: 'Diseño',
        description: 'Conocimientos en principios basicos de diseño UI/UX, permitiéndome colaborar en la creación de interfaces intuitivas y agradables. Ademas, tengo experiencia con el manejo de herramientas como Figma, Sketch, Adobe XD, Photoshop e Illustrator.',
      },
      {
        title: 'Backend',
        description: 'Experiencia en entornos backend como Node.js, PHP y Ruby.',
      },
      {
        title: 'Base de Datos',
        description: 'Experiencia en el manejo de bases de datos SQL como MySQL y PostgreSQL, y NoSQL como MongoDB y Firebase.',
      },
      {
        title: 'Herramientas de Desarrollo',
        description: 'Uso de herramientas de control de versiones y gestión de proyectos como Git, Github y Gitlab. Herramientas para comunicacion y gestion de tareas como Slack, Trello y Google Workspace, ademas de entornos de desarrollo como Visual Studio Code, Google Chrome, y la Terminal.',
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
        description: 'Desarrollo de páginas web, desde la conceptualización hasta la creación de interfaces visuales, asegurando que el resultado final sea estético, funcional y accesible en todos los dispositivos. Incluyendo la optimización para que la aplicacion web cargue rápido y esté bien posicionada en motores de búsqueda (SEO).',
        image: {
          // Aspect Ratio: 16:9 - Max Width: 751px
          url: '/images/services/maquetacion.jpg',
          url2x: '/images/services/maquetacion@2x.jpg'
        },
      },
      {
        title: 'Interactividad web',
        description: 'Creación de experiencias web dinámicas, donde los usuarios pueden interactuar de manera fluida y rápida con el contenido. Esto abarca el desarrollo de funcionalidades que respondan a las necesidades del cliente y sus usuarios, asegurando que las interacciones sean seguras y efectivas.',
        image: {
          url: '/images/services/interactividad.jpg',
          url2x: '/images/services/interactividad@2x.jpg'
        },
      },
      {
        title: 'Trabajo remoto y colaborativo',
        description: 'Gestión integral de proyectos de manera remota, asegurando una colaboración fluida con clientes y equipos mediante herramientas que permiten un seguimiento constante del proyecto, control de versiones y almacenamiento en la nube. Garantizando que el trabajo colaborativo sea eficiente, transparente y organizado.',
        image: {
          url: '/images/services/remoto.jpg',
          url2x: '/images/services/remoto@2x.jpg'
        },
      },
    ]
  },

  portfolio: {
    id: 'portafolio',
    title: 'Portafolio',
    subtitle: 'Mis proyectos destacados',
    projects: [
      {
        title: 'Portafolio',
        description: 'Mi página web personal tiene como objetivo promover mi marca y mostrar mi perfil profesional junto a una selección de proyectos destacados. Desarrollada desde cero, cuenta con un diseño adaptable a cualquier tamaño de pantalla y con una interfaz optimizada para ofrecer un rendimiento eficiente y una experiencia agradable mediante sutiles animaciones. El proyecto evolucionó desde una base inicial en HTML, CSS y JavaScript vanilla, luego incorporó HandlebarsJS para la gestión de plantillas, y finalmente fue migrado a una estructura de componentes con React y Tailwind para la gestion de estilos CSS. Mi papel ha abarcado tanto el desarrollo Frontend como el diseño, siendo responsable de todas las fases del proyecto.',
        website: 'https://luisvalladaresc.github.io',
        github: 'https://github.com/LuisValladaresC/luisvalladaresc.github.io',
        image: {
          // Aspect Ratio: 16:9 - Max Width: 751px
          desktop: {
            url1x: '/images/projects/portfolio-desktop.jpg',
            url2x: '/images/projects/portfolio-desktop@2x.jpg'
          },
          // Aspect Ratio: 9:16 - Max Width: 173px 
          mobile: {
            url1x: '/images/projects/portfolio-mobile.jpg',
            url2x: '/images/projects/portfolio-mobile@2x.jpg'
          },
          background_color: '#333b50',
        },
        tools: ['html', 'css', 'javascript', 'react', 'handlebars', 'tailwindcss', 'vite', 'git', 'github']
      },
      {
        title: 'CCoins',
        description: 'CCoins es un mercado P2P de criptomonedas que permite a los usuarios comprar, vender e intercambiar criptomonedas. La aplicación web, diseñada para ser completamente responsiva, cuenta con múltiples interfaces y carga dinámica de contenido. Desarrollada en Ruby on Rails, utiliza JavaScript para la interactividad del lado del cliente, Stimulus para la gestión de plantillas, junto con Vue y TailwindCSS para la maquetación web. Mi participación fue desde una etapa media hasta avanzada, actuando como Frontend Developer en un equipo de aproximadamente 8 personas, además de colaborar en diseño y backend.',
        website: 'https://ccoins.io',
        image: {
          desktop: {
            url1x: '/images/projects/ccoins-desktop.jpg',
            url2x: '/images/projects/ccoins-desktop@2x.jpg'
          },
          mobile: {
            url1x: '/images/projects/ccoins-mobile.jpg',
            url2x: '/images/projects/ccoins-mobile@2x.jpg'
          },
          background_color: '#499789',
        },
        tools: ['html', 'css', 'javascript', 'vue', 'tailwindcss', 'ruby', 'rails', 'postgresql', 'git', 'github']
      },
      {
        title: 'Giacchetta Networks',
        description: 'Giacchetta Networks es una empresa que ofrece servicios en marketing, negocios y desarrollo de proyectos. Su página web está diseñada para proporcionar información sobre sus servicios, conectar con nuevos clientes y servir como un blog. Con un diseño completamente responsivo, la web incluye múltiples interfaces, soporte para varios idiomas, y carga dinámica de contenido optimizada para un rendimiento excepcional. Desarrollada con HTML, CSS, JavaScript y Bootstrap, utilizando como framework la plantilla de Bootstrap "Front", a la cual se incorporo Nunjucks como gestor de plantillas y una base de datos local para manejar sus idiomas. Comencé a trabajar desde cero, actuando como Frontend Developer y colaborando en el área de diseño.',
        website: 'https://luisvalladaresc.github.io/giacchetta-networks',
        image: {
          desktop: {
            url1x: '/images/projects/giacchetta-networks-desktop.jpg',
            url2x: '/images/projects/giacchetta-networks-desktop@2x.jpg'
          },
          mobile: {
            url1x: '/images/projects/giacchetta-networks-mobile.jpg',
            url2x: '/images/projects/giacchetta-networks-mobile@2x.jpg'
          },
          background_color: '#f6f7fa',
        },
        tools: ['html', 'css', 'javascript', 'bootstrap', 'nunjucks', 'gulp', 'git', 'gitlab']
      },
      {
        title: 'Moegui',
        description: 'Moegui es una empresa que brinda servicios de consultoría en DevOps, SecOps y TestOps. Su página web está diseñada para ofrecer información sobre sus servicios, productos y conectar con nuevos clientes, además de servir como un blog. Con más de 12 interfaces y un diseño completamente responsivo, la web incluye soporte para múltiples idiomas, carga dinámica de contenido y está optimizada para un rendimiento excepcional. Desarrollada con HTML, CSS, JavaScript y Bootstrap, utilizando como framework la plantilla de Bootstrap "Front", a la cual se incorporo Nunjucks como gestor de plantillas y una base de datos local para manejar sus idiomas. Comencé a trabajar en una etapa muy inicial del proyecto, actuando como Frontend Developer y colaborando en diseño.',
        website: 'https://luisvalladaresc.github.io/moegui',
        image: {
          desktop: {
            url1x: '/images/projects/moegui-desktop.jpg',
            url2x: '/images/projects/moegui-desktop@2x.jpg'
          },
          mobile: {
            url1x: '/images/projects/moegui-mobile.jpg',
            url2x: '/images/projects/moegui-mobile@2x.jpg'
          },
          background_color: '#21325b',
        },
        tools: ['html', 'css', 'javascript', 'bootstrap', 'nunjucks', 'gulp', 'git', 'gitlab']
      },
      {
        title: 'Sistema de Inventarios',
        description: 'Aplicación web diseñada para gestionar un inventario de productos, permitiendo la administración de compras, proveedores, productos, almacenes, zonas, categorías y reportes personalizados. Desarrollada en PHP y Laravel, utiliza Blade como gestor de plantillas, junto con HTML, CSS y JavaScript para la maquetación e interactividad del lado del cliente, y MySQL como base de datos. Comencé a trabajar en una etapa media de su desarrollo, asumiendo el rol de FullStack, siendo la única persona involucrada hasta completar el MVP. Durante este proceso, implementé mejoras en las interfaces, revisé y reparé errores en el backend, frontend y base de datos, además de diseñar y desarrollar nuevas interfaces con su lógica correspondiente.',
        website: 'https://www.behance.net/gallery/135108777/Sistema-de-Inventarios',
        image: {
          desktop: [
            {
              url1x: '/images/projects/sistema-inventarios-1.jpg',
              url2x: '/images/projects/sistema-inventarios-1@2x.jpg'
            }, {
              url1x: '/images/projects/sistema-inventarios-2.jpg',
              url2x: '/images/projects/sistema-inventarios-2@2x.jpg'
            },
          ],
          mobile: null,
          background_color: '#367fa9',
        },
        tools: ['html', 'css', 'javascript', 'php', 'laravel', 'mysql', 'git', 'github']
      },
      {
        title: 'RCavestany',
        description: 'Página web diseñada para promover la marca personal del cliente, ofreciendo información sobre su perfil profesional, redes sociales y métodos de contacto. Con un diseño minimalista y responsivo, la interfaz se adapta a cualquier tamaño de pantalla, incorpora animaciones sutiles y permite carga dinámica de contenido, optimizada para un rendimiento excepcional. Desarrollada con HTML, CSS y JavaScript, mi participación comenzó a partir de un diseño inicial, siendo el único programador en su desarrollo.',
        website: 'http://www.rcavestany.com',
        image: {
          desktop: {
            url1x: '/images/projects/rcavestany-desktop.jpg',
            url2x: '/images/projects/rcavestany-desktop@2x.jpg'
          },
          mobile: {
            url1x: '/images/projects/rcavestany-mobile.jpg',
            url2x: '/images/projects/rcavestany-mobile@2x.jpg'
          },
          background_color: '#f4f4f4',
        },
        tools: ['html', 'css', 'javascript', 'git', 'github']
      },
    ],
    modal: {
      description: 'Descripcion',
      url: 'URL',
      experience: 'Herramientas principales',
    },
  },

  contact: {
    id: 'contacto',
    title: 'Contacto',
    description: '¿Estás buscando colaboración o necesitas apoyo en el desarrollo de una página web? Ya sea que trabaje en equipo o de manera independiente, estaré encantado de aportar mi experiencia y habilidades para llevar tu proyecto al siguiente nivel.',
    contact_networks: {
      email: 'luis.valladares.dev@gmail.com',
      github: 'https://github.com/luisvalladaresc',
      linkedin: 'https://www.linkedin.com/in/luisvalladaresc',
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
    text: `© ${new Date().getFullYear()} Sitio Web creado por Luis Valladares`
  },
}