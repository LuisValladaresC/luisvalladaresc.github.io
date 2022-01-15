const DATA = {
    conocimientos: [
        {
            titulo: "HTML",
            nivel: "90"
        },
        {
            titulo: "CSS",
            nivel: "90"
        },
        {
            titulo: "Javascript",
            nivel: "85"
        },
        {
            titulo: "Node.js",
            nivel: "70"
        },
        {
            titulo: "MySQL",
            nivel: "70"
        },
        {
            titulo: "Firebase",
            nivel: "75"
        },
        {
            titulo: "Git, GitHub & Gitlab",
            nivel: "85"
        },
    ],
    servicios: [
        {
            titulo: "Maquetación Web",
            descripcion: "Desarrollo de cualquier tipo de interfaz web partiendo desde una idea o un diseño, hasta el desarrollo de un conjunto de archivos capaces de ser reproducidos por todo tipo de navegadores web.",
            fecha_inicio: 2018,
            imagen: {
                url: './assets/img/public/servicios/maquetacion.png',
                url2x: './assets/img/public/servicios/maquetacion@2x.png'
            },
            herramientas: ["html", "css"]
        },
        {
            titulo: "Interactividad local y remota",
            descripcion: "Desarrollo de servicios e interfaces web dinámicos e interactivos encargados de gestionar las solicitudes de los clientes de una manera rápida, eficiente y automatizada.",
            fecha_inicio: 2018,
            imagen: {
                url: './assets/img/public/servicios/interactividad.png',
                url2x: './assets/img/public/servicios/interactividad@2x.png'
            },
            herramientas: ["javascript", "nodejs", "mysql", "firebase"]
        },
        {
            titulo: "Trabajo remoto y colaborativo",
            descripcion: "Manejo de múltiples herramientas que facilitan la comunicación y revision del proyecto durante el desarrollo, con respaldos en la nube y un control de versiones que garantizan un trabajo remoto y colaborativo completamente eficiente.",
            fecha_inicio: 2018,
            imagen: {
                url: './assets/img/public/servicios/remoto.png',
                url2x: './assets/img/public/servicios/remoto@2x.png'
            },
            herramientas: ["git", "github", "gitlab"]
        },
    ],
    proyectos: [
        /* FORMATOS DE IMAGEN = portada (ancho-maximo: 553px - 16:9) | descripcion (ancho-maximo: 967px - 16:9) */
        {
            titulo: "Giacchetta Networks",
            resumen: "",
            descripcion: "Proyecto en el que se desarrollo la pagina web de Giacchetta Networks, empresa que brinda servicios relacionados con Marketing, Negocios y Desarrollo de Proyectos. El desarrollado comenzó de 0, incluido su diseño, y se llevo a cabo con ayuda de \"Front\"' una plantilla de Bootstrap. Cuenta con múltiples interfaces, desde su pagina de inicio, un blog e incluso términos y condiciones de uso. Cabe mencionar, que cada interfaz es responsiva e interactiva, programada para adaptarse a cualquier tipo de pantalla, con posibilidad de incluir diferentes idiomas, carga dinámica de contenido y optimizada para tener un excelente rendimiento y velocidad de carga.", 
            url: {
                website: 'https://giacchetta.net',
            },
            imagen: {
                portada: {
                    url: "./assets/img/public/proyectos/giacchetta_networks.png",
                    url2x: "",
                },
                descripcion: {
                    url: "./assets/img/public/proyectos/giacchetta_networks_description.png",
                    url2x: "",
                },
            },
            herramientas: ["html", "css", "javascript", "bootstrap", "nunjucks", "gulp", "git", "gitlab"]
        },
        {
            titulo: "Moegui",
            resumen: "",
            descripcion: "Proyecto en el que se desarrollo la pagina web de Moegui, empresa que brinda servicios de consultoría relacionados con DevOps, SecOps y TestOps. El desarrollado comenzó a partir de una pagina de inicio y se llevo a cabo con ayuda de \"Front\" una plantilla de Bootstrap. Cuenta con multiples interfaces, como su pagina de inicio (actualizada), nuevas paginas como acerca de, contacto, blog, documentación, ayuda, políticas de privacidad, términos y condiciones, e incluso paginas creadas dinámicamente para cada uno de sus productos, blogs, servicios y oportunidades de trabajo. Cabe mencionar, que cada interfaz es responsiva e interactiva, programada para adaptarse a cualquier tipo de pantalla, con posibilidad de incluir diferentes idiomas, con múltiples animaciones, carga dinámica de contenido y optimizada para tener un excelente rendimiento y velocidad de carga.", 
            url: {
                website: 'https://moegui.com',
            },
            imagen: {
                portada: {
                    url: "./assets/img/public/proyectos/moegui.png",
                    url2x: "",
                },
                descripcion: {
                    url: "./assets/img/public/proyectos/moegui_description.png",
                    url2x: "",
                },
            },
            herramientas: ["html", "css", "javascript", "bootstrap", "nunjucks", "gulp", "git", "gitlab"]
        },
        {
            titulo: "Portafolio",
            resumen: "",
            descripcion: "Proyecto en el que se desarrollo la pagina web actual enfocada en promover mi trabajo. El desarrollado comenzó de 0, incluido su diseño. Cuenta con una interfaz responsiva e interactiva, programada para adaptarse a cualquier tipo de pantalla, con animaciones sutiles, carga dinámica de contenido y optimizada para tener un excelente rendimiento y velocidad de carga.", 
            url: {
                website: 'https://luisvalladaresc.github.io',
                github: 'https://github.com/LuisValladaresC/luisvalladaresc.github.io',
            },
            imagen: {
                portada: {
                    url: "./assets/img/public/proyectos/portafolio.png",
                    url2x: "",
                },
                descripcion: {
                    url: "./assets/img/public/proyectos/portafolio_description.png",
                    url2x: "",
                },
            },
            herramientas: ["html", "css", "javascript", "git", "github"]
        },
        {
            titulo: "Sistema de Inventarios",
            resumen: "",
            descripcion: "Proyecto en el que se dio mantenimiento y desarrollaron nuevas características para una aplicación web enfocada gestionar inventarios de productos y realizar pedidos. Las nuevas implementaciones fueron desde cambios menores en las diferentes interfaces, revisión y reparación de errores, diseño y desarrollo de nuevas interfaces con su lógica de base de datos e interactividad con el servidor.", 
            url: {
                website: 'https://www.behance.net/gallery/135108777/Sistema-de-Inventarios',
            },
            imagen: {
                portada: {
                    url: "./assets/img/public/proyectos/sistema_inventarios.png",
                    url2x: "",
                },
                descripcion: {
                    url: "./assets/img/public/proyectos/sistema_inventarios_description.png",
                    url2x: "",
                },
            },
            herramientas: ["php", "html", "css", "javascript", "bootstrap", "mysql"]
        },
        {
            titulo: "RCavestany",
            resumen: "",
            descripcion: "Proyecto en el que se desarrollo una pagina web minimalista enfocada en promover la marca personal del cliente. El desarrollado comenzó a partir de un diseño inicial. Cuenta con una interfaz responsiva e interactiva, programada para adaptarse a cualquier tipo de pantalla, con animaciones sutiles, carga dinámica de contenido y optimizada para tener un excelente rendimiento y velocidad de carga.",
            url: {
                website: 'http://www.rcavestany.com',
            },
            imagen: {
                portada: {
                    url: "./assets/img/public/proyectos/rcavestany.png",
                    url2x: "",
                },
                descripcion: {
                    url: "./assets/img/public/proyectos/rcavestany_description.png",
                    url2x: ""
                },
            },
            herramientas: ["html", "css", "javascript"]
        },
        {
            titulo: "XabiDB",
            resumen: "",
            descripcion: "Proyecto en el que se desarrollo una pagina web enfocada en promover la marca personal del cliente. El desarrollado comenzó a partir de un diseño inicial. Cuenta con una interfaz responsiva e interactiva, programada para adaptarse a cualquier tipo de pantalla, con animaciones sutiles y optimizada para tener un excelente rendimiento y velocidad de carga.",
            url: {
                website: 'https://luisvalladaresc.github.io/XabiDB',
            },
            imagen: {
                portada: {
                    url: "./assets/img/public/proyectos/xabidb.png",
                    url2x: "",
                },
                descripcion: {
                    url: "./assets/img/public/proyectos/xabidb_description.png",
                    url2x: ""
                },
            },
            herramientas: ["html", "css", "javascript"]
        },
    ],
    contacto: {
        acerca_de_mi: "Soy un Frontend Developer con mas de 3 años de experiencia en desarrollo y mantenimiento de paginas web para diferentes sectores, entre los que puedo resaltar mi colaboración trabajando de manera remota en la plataforma de Workana. Mi objetivo es seguir mejorando mis habilidades profesionales, por lo que me encuentro en una continua actualización de mis conocimientos y en la búsqueda de nuevas oportunidades laborales.",
        correo: "ls.valladares7@gmail.com",
        redes_sociales: {
            github: 'https://github.com/LuisValladaresC/',
            linkedin: '',
            twitter: '',
            workana: 'https://www.workana.com/freelancer/ed6857354a8d6dccd9db81d9d9a40743',
        }
    }
}