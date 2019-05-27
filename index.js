/* ----------------------------------------------------------------- */
/* TRABAJAMOS CON EL MENU DESPLEGABLE EN VERSION RESPONSIVE (<600PX) */
/* ----------------------------------------------------------------- */

var $menu = document.getElementById('menu');
var $btnMenu = document.getElementById('btn_menu');
// Arreglo con elementos / lineas que se animaran al ser presionadas
var $lineasBtnMenu = Array.from(document.getElementsByClassName('header-button-line'));
// Arreglo con los elementos que componene el Menu y que lo desactivaran al ser presionados
var $opcionesMenu = Array.from(document.getElementsByClassName('header-menu-link'));

$btnMenu.addEventListener('click', monstrarAlternativamenteMenu);
$opcionesMenu.map(elemento => elemento.addEventListener('click', monstrarAlternativamenteMenu));

function monstrarAlternativamenteMenu() {
    // Activamos una transicion css en las lineas que componen el contenedor $btnMenu
    $lineasBtnMenu.map(elemento => {
        elemento.classList.toggle('active');
    });
    // Activamos una transicion css para mostrar el menu desplegable
    $menu.classList.toggle('active');
    if ($menu.style.bottom) $menu.classList.toggle('inactive');
    $menu.style.bottom = 0;
    // Bloqueamos el desplazamiente en la web cuando esta activo el menu
    document.body.classList.toggle('overflow-hidden');
    
}

/* ------------------------------------------------------------- */
/* TRABAJAMOS CON EL MODAL QUE MOSTRARA LOS DATOS DE UN PROYECTO */
/* ------------------------------------------------------------- */

// Plantillas para c/u de los proyectos mediante las cuales se creara un modal personalizado
const plantillaPlatziConf = {
    titulo: 'Platzi Conf Hawaii',
    imagen: './images/modal-platzi-conf.png',
    imagen2x: './images/modal-platzi-conf@2x.png',
    descripcion: 'Platzi Conf Hawaii fue desarrolado como modelo para promover un evento social. Cuenta con una interface responsive de diseño atractivo lograda con ayuda de Bootstrap.',
    url: {
        website: 'luisvalladaresc.github.io/platzi-conf',
        github: 'https://github.com/LuisValladaresC/platzi-conf'
    },
    requerimientos: ['html', 'css', 'bootstrap']
}
const plantillaPlatziVideo = {
    titulo: 'Platzi Video',
    imagen: './images/modal-platzi-video.png',
    imagen2x: './images/modal-platzi-video@2x.png',
    descripcion: 'Platzi Video fue creado como modelo para un servicio de películas online. Cuenta con un código que realiza multiples peticiones a API\'s externas y una interface responsive de diseño simple y pulido.',
    url: {
        website: 'luisvalladaresc.github.io/platzi-video',
        github: 'https://github.com/LuisValladaresC/platzi-video'
    },
    requerimientos: ['html', 'css', 'javascript']
}
const plantillaPortafolio = {
    titulo: 'Portafolio Personal',
    imagen: './images/modal-portafolio.png',
    imagen2x: './images/modal-portafolio@2x.png',
    descripcion: 'Sitio web actual desarrollado para promover mi marca personal. Cuenta con un sistema de mensajes de correo, multiples y muy bien pulidas animaciones y una interface responsive que resalta por su diseño simple, calido y atractivo.',
    url: {
        website: 'www.luisvc.com',
    },
    requerimientos: ['html', 'css', 'javascript']
}

// Agregamos un escucha a c/u de los proyectos del portafolio, el cual, creara el modal mediante las plantillas
const $platziConf = document.getElementById("platzi_conf");
const $platziVideo = document.getElementById("platzi_video");
const $portafolioPersonal = document.getElementById("portafolio_personal");

$platziConf.addEventListener('click', () => crearPlantillaHtmlModal(plantillaPlatziConf));
$platziVideo.addEventListener('click', () => crearPlantillaHtmlModal(plantillaPlatziVideo));
$portafolioPersonal.addEventListener('click', () => crearPlantillaHtmlModal(plantillaPortafolio));

// Esta funcion crea un elemento HTML con los datos del proyecto y lo añade al modal 
function crearPlantillaHtmlModal(plantilla) {
    let $modalContainer = document.createElement('div');
    $modalContainer.setAttribute('id', 'modal_container');

    $modalContainer.innerHTML = 
    `<div class="modal-container-header">
        <h3 class="modal-encabezado-titulo">${plantilla.titulo}</h3>
        <button class="modal-encabezado-button" id="btn_cerrar_modal">×</button>
    </div>
    <div class="modal-container-body">
        <figure class="modal-body-imagen">
            <img src="${plantilla.imagen2x}" srcset="${plantilla.imagen}, ${plantilla.imagen2x} 2x" alt="${plantilla.titulo}">
        </figure>
        <div class="modal-body-contenido">
            <h4 class="modal-contenido-titulo">Descripcion</h4>
            <p class="modal-contenido-parrafo">${plantilla.descripcion}</p>
            <h4 class="modal-contenido-titulo">URL / Github</h4>
            <div class="modal-contenido-enlaces">
                <a class="modal-enlaces-url" href="https://${plantilla.url.website}" target="_blank">${plantilla.url.website}</a>
                ${plantilla.url.github ? `<a class="modal-enlaces-github" href="${plantilla.url.github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
            </div>
            <h4 class="modal-contenido-titulo">Requerimientos</h4>
            <div class="modal-contenido-requerimientos">
                ${String(plantilla.requerimientos.map(lenguaje => `<span class="${lenguaje}">${lenguaje}</span>`)).replace(/,/g, ' ')}
            </div>
        </div>
    </div>`

    $modal.appendChild($modalContainer);
    $modalContainer.addEventListener('click', event => event.stopPropagation());
    document.getElementById("btn_cerrar_modal").addEventListener('click', () => cerrarModal(event));
    
    abrirModal();
}

// Agregamos un escucha al modal que llamara una funcion que lo cerrara
const $modal = document.getElementById('modal');
$modal.addEventListener('click', () => cerrarModal(event));

function abrirModal() {
    // Agrega la clase active y de manera asicrona sin demora la clase inactive para activar una transicion
    $modal.classList.add('active');
    setTimeout(() => $modal.classList.remove('inactive'), 0);
    // Bloqueamos el desplazamiente en la web
    document.body.classList.add('overflow-hidden');
}

function cerrarModal(event) {
    // Evita que un elemento padre reaccione al evento con el mismo click
    event.stopPropagation()
    // Agrega la clase inactive que define una animacion al elemento, a la cual, agregamos un escucha
    $modal.classList.add('inactive');
    $modal.addEventListener('animationend', cerrarModal)

    // funcion del evento que remueve la clase active, el #modal_container y su escucha al finalizar la animacion
    function cerrarModal() {
        $modal.classList.remove('active');
        $modal.removeEventListener('animationend', cerrarModal)
        $modal.children[0].remove()
        // Desbloqueamos el desplazamiente en la web
        document.body.classList.remove('overflow-hidden');
    }
}

/* -------------------------------------------------------------------------------------- */
/* ESPIAMOS EL SCROLL PARA ACTIVAR LA ANIMACION DE RELLENO EN LA SECCION DE CONOCIMIENTOS */
/* -------------------------------------------------------------------------------------- */

// Arreglos de elementos a los que definiremos una animacion
const $barrasNivel = Array.from(document.getElementsByClassName('barra-relleno'))
const $porcentajesNivel = Array.from(document.getElementsByClassName('tema-porcentaje'))
// Las animaciones se haran 1 despues de otra mediante este retardo
var retardoAnimacion = 0;

document.addEventListener('scroll', activarAnimacionSeccionConocimietos);

function activarAnimacionSeccionConocimietos() {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    // Verifica si el Scroll esta dentro de la posicion donde se encuentran las barras de nivel de la Seccion
    if ($barrasNivel[0].offsetTop - window.innerHeight <= scrollPosition &&
        scrollPosition <= $barrasNivel[4].offsetTop) {
        let desactivarEvento = true;
        // Itera por cada indice dentro del arreglo de nodos que contiene las barras de nivel
        for (i in $barrasNivel) {
            // Verifica si la barra ya fue animada
            if (!$barrasNivel[i].style.animation) {
                desactivarEvento = false;
                // Verifica si la barra / elemento se encuentra dentro del espacio que abarca el Scroll
                if ($barrasNivel[i].offsetTop - window.innerHeight <= scrollPosition &&
                    scrollPosition <= $barrasNivel[i].offsetTop) {
                    // Define una animacion a la barra de nivel y a su elemento hermano el porcentaje
                    $barrasNivel[i].style.animation = `relleno-animado 1s forwards ${retardoAnimacion}s`;
                    $porcentajesNivel[i].style.animation = `porcentaje-animado .5s forwards ${1 + retardoAnimacion}s`;
                    // Suma y resta continuamenete el retardo para que las animacion sucedan con el mismo espacio de tiempo
                    retardoAnimacion += .4;
                    setTimeout(() => retardoAnimacion -= .5, 500)
                }
            }
        }
        // Si todos los elementos dentro del arreglo de barras fueron animados esto dara 'true' y desactivara el scrollSpy
        if (desactivarEvento) document.removeEventListener('scroll', activarAnimacionSeccionConocimietos);
    }
}

/* ---------------------------------------------------------------------------------------- */
/* TRABAJAMOS CON EL BODY Y OBTENEMOS SU VH REAL DEBIDO A PROBLEMAS CON NAVEGADORES MOVILES */
/* ---------------------------------------------------------------------------------------- */

// Verifica si el navegador es movil y activa ciertos eventos que modificaran el VH del body
if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 || typeof window.orientation !== "undefined") {
    calcularViewportHeight();
    window.addEventListener('onorientationchange', calcularViewportHeight, true);
    window.addEventListener('resize', calcularViewportHeight, true);
}

// Funcion de evento que calcula el alto real del VH y lo asigna al body
function calcularViewportHeight() {
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    document.body.style.height = viewportHeight + "px";
}