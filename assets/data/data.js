const DATA = {
    conocimientos: [
        {
            titulo: "HTML",
            nivel: "90"
        },
        {
            titulo: "CSS",
            nivel: "85"
        },
        {
            titulo: "Javascript",
            nivel: "80"
        },
        {
            titulo: "Bootstrap",
            nivel: "80"
        },
        {
            titulo: "Git & GitHub",
            nivel: "85"
        },
    ],
    servicios: [
        {
            titulo: "Maquetación de website",
            descripcion: "Transformamos el diseño de un producto web en un conjunto de archivos capaces de ser reproducidos por los navegadores web.",
            fecha_inicio: 2018,
            imagen: {
                url: './assets/img/public/trabajo-maquetacion.png',
                url2x: './assets/img/public/trabajo-maquetacion@2x.png'
            },
            herramientas: ["html", "css", "bootstrap"]
        },
        {
            titulo: "Interactividad local y remota",
            descripcion: "Dotamos su pagina web con una interfaz dinamica e interactiva ayudandole a brindar una experiencia completa y memorable.",
            fecha_inicio: 2018,
            imagen: {
                url: './assets/img/public/trabajo-interactividad.png',
                url2x: './assets/img/public/trabajo-interactividad@2x.png'
            },
            herramientas: ["javascript"]
        },
        {
            titulo: "Trabajo remoto y respaldos",
            descripcion: "El desarrollo de su sitio web se realiza de manera remota con respaldos en la nube que garantizan la seguridad del proyecto.",
            fecha_inicio: 2018,
            imagen: {
                url: './assets/img/public/trabajo-remoto.png',
                url2x: './assets/img/public/trabajo-remoto@2x.png'
            },
            herramientas: ["git", "github"]
        },
    ],
    proyectos: [
        {
            titulo: "Platzi Conf Hawaii",
            resumen: "Sitio web desarrolado como modelo para promover un evento social.",
            descripcion: "Platzi Conf Hawaii fue desarrolado como modelo para promover un evento social. Cuenta con una interface responsive de diseño atractivo lograda con ayuda de Bootstrap.",
            url: {
                website: 'https://luisvalladaresc.github.io/platzi-conf',
                github: 'https://github.com/LuisValladaresC/platzi-conf'
            },
            imagen: {
                portada: {
                    url: "./assets/img/public/portafolio-platzi-conf.png",
                    url2x: "./assets/img/public/portafolio-platzi-conf@2x.png",
                    responsive: "./assets/img/public/portafolio-platzi-conf-stretch.png",
                },
                descripcion: {
                    url: "./assets/img/public/modal-platzi-conf.png",
                    url2x: "./assets/img/public/modal-platzi-conf@2x.png"
                },
            },
            herramientas: ["html", "css", "bootstrap"]
        },
        {
            titulo: "Platzi Video",
            resumen: "Sitio web desarrolado como modelo de un servicio de peliculas online.",
            descripcion: "Platzi Video fue creado como modelo para un servicio de películas online. Cuenta con un código que realiza multiples peticiones a API's externas y una interface responsive de diseño simple y pulido.",
            url: {
                website: 'https://luisvalladaresc.github.io/platzi-video',
                github: 'https://github.com/LuisValladaresC/platzi-video'
            },
            imagen: {
                portada: {
                    url: "./assets/img/public/portafolio-platzi-video.png",
                    url2x: "./assets/img/public/portafolio-platzi-video@2x.png",
                    responsive: "./assets/img/public/portafolio-platzi-video-stretch.png"
                },
                descripcion: {
                    url: "./assets/img/public/modal-platzi-video.png",
                    url2x: "./assets/img/public/modal-platzi-video@2x.png"
                },
            },
            herramientas: ["html", "css", "javascript"]
        },
        {
            titulo: "Portafolio Personal",
            resumen: "Sitio web actual desarrollado para promover mi marca personal.",
            descripcion: "Sitio web actual desarrollado para promover mi marca personal. Cuenta con un sistema de mensajes de correo, multiples y muy bien pulidas animaciones y una interface responsive que resalta por su diseño simple, calido y atractivo.",
            url: {
                website: 'https://luisvalladaresc.github.io/portafolio',
                github: ''
            },
            imagen: {
                portada: {
                    url: "./assets/img/public/portafolio-personal.png",
                    url2x: "./assets/img/public/portafolio-personal@2x.png",
                    responsive: "./assets/img/public/portafolio-personal-stretch.png"
                },
                descripcion: {
                    url: "./assets/img/public/modal-portafolio.png",
                    url2x: "./assets/img/public/modal-portafolio@2x.png"
                },
            },
            herramientas: ["html", "css", "javascript"]
        }
    ],
    contacto: {
        acerca_de_mi: "Soy desarrollor de paginas web con un alto nivel de estudios en la rama. Mi trabajo es el fruto de detalle y pasión y justo ahora me encuentro explorando nuevas oportunidades para continuar creciendo profesionalmente.",
        correo: "ls.valladares7@gmail.com",
        redes_sociales: {
            github: 'https://github.com/LuisValladaresC/',
            linkedin: 'https://www.linkedin.com/in/valladaresc7/',
            instagram: '',
            twitter: ''
        }
    }
}