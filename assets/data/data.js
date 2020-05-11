const DATA = {
    conocimientos: [
        {
            titulo: "HTML & CSS",
            nivel: "95"
        },
        {
            titulo: "Bootstrap",
            nivel: "85"
        },
        {
            titulo: "Javascript",
            nivel: "90"
        },
        {
            titulo: "PHP",
            nivel: "90"
        },
        {
            titulo: "Laravel",
            nivel: "85"
        },
        {
            titulo: "MySQL",
            nivel: "80"
        },
        {
            titulo: "Git & GitHub",
            nivel: "85"
        },
    ],
    servicios: [
        {
            titulo: "Maquetación Web",
            descripcion: "Desarrollo de cualquier tipo de interfaz web partiendo desde una idea o diseño predefinido hasta el desarrollo de un conjunto de archivos capaces de ser reproducidos por un navegador web.",
            fecha_inicio: 2018,
            imagen: {
                url: './assets/img/public/servicios/maquetacion.png',
                url2x: './assets/img/public/servicios/maquetacion@2x.png'
            },
            herramientas: ["html", "css", "bootstrap"]
        },
        {
            titulo: "Interactividad local y remota",
            descripcion: "Desarrollo de servicios e interfaces web dinámicos e interactivos encargados de gestionar las solicitudes de los clientes de una manera rápida, eficiente y automatizada.",
            fecha_inicio: 2018,
            imagen: {
                url: './assets/img/public/servicios/interactividad.png',
                url2x: './assets/img/public/servicios/interactividad@2x.png'
            },
            herramientas: ["javascript", "php", "laravel", "mysql",]
        },
        {
            titulo: "Trabajo remoto y respaldos",
            descripcion: "Manejo de múltiples herramientas que facilitan la comunicación durante el desarrollo y respaldos en la nube que garantizan un trabajo remoto completamente eficiente.",
            fecha_inicio: 2018,
            imagen: {
                url: './assets/img/public/servicios/remoto.png',
                url2x: './assets/img/public/servicios/remoto@2x.png'
            },
            herramientas: ["git", "github"]
        },
    ],
    proyectos: [
        /* FORMATOS DE IMAGEN = portada (cuadrada) | portada.responsive (panoramica 10:6) | descripcion = (mockup 7:5) */
        {
            titulo: "Portafolio Personal",
            resumen: "Pagina web actual creada para promover mi marca personal.",
            descripcion: "Pagina web actual creada para promover mi marca personal. Cuenta con un diseño simple, elegante, y muy bien pulido desarrollado desde 0 utilizando HTML5, CSS3 y JavaScript nativo. Su interfaz es completamente responsiva, pues fue programada para adaptarse de manera fluida en cualquier tipo de pantalla, además es totalmente interactiva, con carga dinámica de contenido, múltiples animaciones y optimizada para un máximo rendimiento y velocidad de carga, lo que en conjunto garantiza de una experiencia cálida y memorable.", 
            url: {
                website: 'https://luisvalladaresc.github.io/portafolio',
                github: ''
            },
            imagen: {
                portada: {
                    url: "./assets/img/public/proyectos/portafolio-personal.png", // (1005px*1005px)
                    url2x: "./assets/img/public/proyectos/portafolio-personal@2x.png",
                    responsive: "./assets/img/public/proyectos/portafolio-personal-stretch.png", // (1200px*720px)
                    responsive2x: "./assets/img/public/proyectos/portafolio-personal-stretch@2x.png"
                },
                descripcion: {
                    url: "./assets/img/public/proyectos/portafolio-personal-full.png",
                    url2x: "./assets/img/public/proyectos/portafolio-personal-full@2x.png"
                },
            },
            herramientas: ["html", "css", "javascript"]
        },
        {
            titulo: "Rafa Cavestany",
            resumen: "Página web de diseño minimalista creada para promover una marca personal.",
            descripcion: "Página web de diseño minimalista creada para promover una marca personal. Este proyecto fue desarrollado completamente a partir de un diseño proporcionado, utilizando HTML5, CSS3 y JavaScript nativo. Cuenta con una interfaz responsiva que fue programada para adaptarse de manera fluida en cualquier tipo de pantalla, totalmente interactiva, con múltiples animaciones, carga dinámica de contenido y optimizada para un máximo rendimiento y velocidad de carga.",
            url: {
                website: 'https://luisvalladaresc.github.io/Rafa-Cavestany/',
                github: ''
            },
            imagen: {
                portada: {
                    url: "./assets/img/public/proyectos/rafa-ravestany.png", // (1000px*1000px)
                    url2x: "./assets/img/public/proyectos/rafa-ravestany@2x.png",
                    responsive: "./assets/img/public/proyectos/rafa-ravestany-stretch.png", // (1800px*1080px)
                    responsive2x: "./assets/img/public/proyectos/rafa-ravestany-stretch@2x.png"
                },
                descripcion: {
                    url: "./assets/img/public/proyectos/rafa-ravestany-full.jpg",
                    url2x: "./assets/img/public/proyectos/rafa-ravestany-full@2x.jpg"
                },
            },
            herramientas: ["html", "css", "javascript"]
        },
        {
            titulo: "Kutenda",
            resumen: "Interfaz web creada como fachada de una plataforma de préstamos en linea.",
            descripcion: "Interfaz web creada como fachada de una plataforma de préstamos en línea. Este proyecto fue maquetado completamente a partir de un diseño proporcionado, utilizando HTML5, CSS3 y Bootstrap. Su interfaz es totalmente responsiva programada para adaptarse de manera fluida en casi cualquier tipo de pantalla, además esta optimizada para un máximo rendimiento y velocidad de carga.",
            url: {
                website: 'https://luisvalladaresc.github.io/kutenda/',
                github: ''
            },
            imagen: {
                portada: {
                    url: "./assets/img/public/proyectos/kutenda.png", // (1920px*1920px)
                    url2x: "./assets/img/public/proyectos/kutenda@2x.png",
                    responsive: "./assets/img/public/proyectos/kutenda-stretch.png", // (1920px*1170px)
                    responsive2x: "./assets/img/public/proyectos/kutenda-stretch@2x.png"
                },
                descripcion: {
                    url: "./assets/img/public/proyectos/kutenda-full.png",
                    url2x: "./assets/img/public/proyectos/kutenda-full@2x.png"
                },
            },
            herramientas: ["html", "css", "bootstrap"]
        },
        {
            titulo: "Platzi Video",
            resumen: "Pagina web creada como modelo para un servicio de películas en línea.",
            descripcion: "Pagina web creada como modelo para un servicio de películas en línea. Este proyecto fue desarrollado desde 0 utilizando HTML5, CSS3 y JavaScript nativo, cuenta con una interfaz de diseño simple y muy bien pulido, totalmente interactiva, con carga dinámica de contenido y una adaptación fluida en cualquier tipo de pantalla.",
            url: {
                website: 'https://luisvalladaresc.github.io/platzi-video',
                github: 'https://github.com/LuisValladaresC/platzi-video'
            },
            imagen: {
                portada: {
                    url: "./assets/img/public/proyectos/platzi-video.png", // (1000px*1000px)
                    url2x: "./assets/img/public/proyectos/platzi-video@2x.png",
                    responsive: "./assets/img/public/proyectos/platzi-video-stretch.png", // (1600px*960px)
                    responsive2x: "./assets/img/public/proyectos/platzi-video-stretch@2x.png"
                },
                descripcion: {
                    url: "./assets/img/public/proyectos/platzi-video-full.png",
                    url2x: "./assets/img/public/proyectos/platzi-video-full@2x.png"
                },
            },
            herramientas: ["html", "css", "javascript"]
        },
        {
            titulo: "Platzi Conf Hawaii",
            resumen: "Pagina web creada como modelo para promover un evento social.",
            descripcion: "Pagina web creada como modelo para promover un evento social. Este proyecto fue desarrollado desde 0 utilizando HTML5, CSS3 y Bootstrap, el cual cuenta con una interfaz responsiva y totalmente interactiva.",
            url: {
                website: 'https://luisvalladaresc.github.io/platzi-conf',
                github: 'https://github.com/LuisValladaresC/platzi-conf'
            },
            imagen: {
                portada: {
                    url: "./assets/img/public/proyectos/platzi-conf.png", // (1100px*1100px)
                    url2x: "./assets/img/public/proyectos/platzi-conf@2x.png",
                    responsive: "./assets/img/public/proyectos/platzi-conf-stretch.png", // (1200px*720px)
                    responsive2x: "./assets/img/public/proyectos/platzi-conf-stretch@2x.png"
                },
                descripcion: {
                    url: "./assets/img/public/proyectos/platzi-conf-full.png",
                    url2x: "./assets/img/public/proyectos/platzi-conf-full@2x.png"
                },
            },
            herramientas: ["html", "css", "bootstrap"]
        },
        {
            titulo: "Portafolio Demo",
            resumen: "Pagina web creada como modelo para un sitio web personal.",
            descripcion: "Pagina web creada como modelo para un sitio web personal. Este proyecto fue desarrollado desde 0 utilizando HTML5 y CSS3. Cuenta con una interfaz responsiva programada para una adaptación fluida en casi cualquier tipo de pantalla.",
            url: {
                website: 'https://luisvalladaresc.github.io/portafolio-ejemplo/',
                github: 'https://github.com/LuisValladaresC/portafolio-ejemplo'
            },
            imagen: {
                portada: {
                    url: "./assets/img/public/proyectos/leonidas-esteban.png", // (1024px*1024px)
                    url2x: "./assets/img/public/proyectos/leonidas-esteban@2x.png",
                    responsive: "./assets/img/public/proyectos/leonidas-esteban-stretch.png", // (1020px*612px)
                    responsive2x: "./assets/img/public/proyectos/leonidas-esteban-stretch@2x.png"
                },
                descripcion: {
                    url: "./assets/img/public/proyectos/leonidas-esteban-full.png",
                    url2x: "./assets/img/public/proyectos/leonidas-esteban-full@2x.png"
                },
            },
            herramientas: ["html", "css"]
        }
    ],
    contacto: {
        acerca_de_mi: "Soy un desarrollador de páginas web con mucha experiencia y un alto nivel de estudios en la rama. Justo ahora me encuentro explorando nuevas oportunidades laborales. Así que si lo desea puede escribirme ahora mismo a alguna de mis redes sociales para que juntos pongamos en marcha tu proyecto.",
        correo: "ls.valladares7@gmail.com",
        redes_sociales: {
            github: 'https://github.com/LuisValladaresC/',
            linkedin: '',
            instagram: '',
            twitter: ''
        }
    }
}