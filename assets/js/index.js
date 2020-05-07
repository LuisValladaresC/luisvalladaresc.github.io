/* ---------------------------------------------------------------------------------- */
/* CARGAMOS EL CONTENIDO DE LAS SECCIONES PROFESIONAL, TRABAJO, PORTAFOLIO Y CONTACTO */
/* ---------------------------------------------------------------------------------- */

const $contenedor_conocimientos = document.querySelector("#profesional .profesional-conocimientos");
const $contenedor_servicios = document.querySelector("#trabajo .trabajo-servicios");
const $contenedor_proyectos = document.querySelector("#portafolio .portafolio-proyectos");
const $contenedor_modal = document.querySelector('#modal #modal_container');
const $contenedor_contacto = document.querySelector("#contacto .contacto-contenido-informacion");

(function cargar_datos(){
    // Obtiene la informacion para las secciones del HTML desde una DB provisional (archivo JSON)
    conocimientos = DATA.conocimientos;
    servicios = DATA.servicios;
    proyectos = DATA.proyectos;
    contacto = DATA.contacto;

    // Añada la informacion obtenida al HTML
    agregar_datos_a_HTML(conocimientos, $contenedor_conocimientos)
    agregar_datos_a_HTML(servicios, $contenedor_servicios);
    agregar_datos_a_HTML(proyectos, $contenedor_proyectos);
    agregar_datos_a_HTML(contacto, $contenedor_contacto);
})();


function agregar_datos_a_HTML(data, $contenedor) {
    // Crea un plantilla HTML y la inserta en su contenedor
    let plantilla_HTML = crear_plantilla_HTML(data, $contenedor);
    $contenedor.innerHTML = plantilla_HTML;

    // Agrega un evento a cada uno de los proyectos del $contenedor_proyectos
    if ($contenedor == $contenedor_proyectos) {
        Array.from($contenedor.getElementsByClassName('portafolio-proyecto')).map(($proyecto, indice) => {
            $proyecto.addEventListener("click", () => abrir_modal(data[indice]))
        });
    }
}

function crear_plantilla_HTML(data, $contenedor) {
    // String con formato HTML que sera devuelto
    var plantilla_HTML = "";

    // Selecciona la plantilla correspondiente para la informacion segun su contenedor
    switch ($contenedor) {
        // Plantilla para c/u de los conocimientos
        case $contenedor_conocimientos:
            data.map(conocimiento => {
                plantilla_HTML += `
                <p class="profesional-conocimiento-nombre">${conocimiento.titulo}</p>
                <div class="profesional-conocimiento-nivel">
                    <div class="profesional-nivel-barra n${conocimiento.nivel}">
                        <div class="profesional-barra-relleno"></div>
                    </div>
                    <p class="profesional-nivel-porcentaje">${conocimiento.nivel}%</p>
                </div>`
            });
            return plantilla_HTML;
            
        // Plantilla para c/u de los servicios (tipo A y B aplicados de manera intercalada)
        case $contenedor_servicios:
            data.map((servicio, indice) => {
                if (indice % 2 == 0) {
                    plantilla_HTML += `
                    <div class="trabajo-servicio">
                        <figure class="trabajo-contenedor-imagen">
                            <img class="trabajo-imagen" 
                                src="${servicio.imagen.url2x || servicio.imagen.url}" 
                                srcset="${servicio.imagen.url2x ? servicio.imagen.url + ', ' + servicio.imagen.url2x + ' 2x' : ''}"
                                alt="Pagina Web">
                            <div class="trabajo-imagen-capa">
                                <p class="trabajo-etiqueta">${servicio.fecha_inicio} - ${new Date().getFullYear()}</p>
                                ${servicio.herramientas.includes('html') ? '<i class="trabajo-icono fab fa-html5"></i>' : ''}
                                ${servicio.herramientas.includes('css') ? '<i class="trabajo-icono fab fa-css3-alt"></i>' : ''}
                                ${servicio.herramientas.includes('javascript') ? '<i class="trabajo-icono fab fa-js-square"></i>' : ''}
                                ${servicio.herramientas.includes('bootstrap') ? '<i class="trabajo-icono fab fa-bootstrap"></i>' : ''}
                                ${servicio.herramientas.includes('git') ? '<i class="trabajo-icono fab fa-git-square"></i>' : ''}
                                ${servicio.herramientas.includes('github') ? '<i class="trabajo-icono fab fa-github"></i>' : ''}
                            </div>
                        </figure>
                        <div class="trabajo-descripcion">
                            <h3 class="trabajo-descripcion-titulo">${servicio.titulo}</h3>
                            <p class="trabajo-descripcion-parrafo">${servicio.descripcion}</p>
                        </div>
                    </div>`
                }else{
                    plantilla_HTML += `
                    <div class="trabajo-servicio">
                        <div class="trabajo-descripcion impar">
                            <h3 class="trabajo-descripcion-titulo">${servicio.titulo}</h3>
                            <p class="trabajo-descripcion-parrafo">${servicio.descripcion}</p>
                        </div>
                        <figure class="trabajo-contenedor-imagen impar">
                            <div class="trabajo-imagen-capa">
                                <p class="trabajo-etiqueta impar">${servicio.fecha_inicio} - ${new Date().getFullYear()}</p>
                                ${servicio.herramientas.includes('html') ? '<i class="trabajo-icono fab fa-html5"></i>' : ''}
                                ${servicio.herramientas.includes('css') ? '<i class="trabajo-icono fab fa-css3-alt"></i>' : ''}
                                ${servicio.herramientas.includes('javascript') ? '<i class="trabajo-icono fab fa-js-square"></i>' : ''}
                                ${servicio.herramientas.includes('bootstrap') ? '<i class="trabajo-icono fab fa-bootstrap"></i>' : ''}
                                ${servicio.herramientas.includes('git') ? '<i class="trabajo-icono fab fa-git-square"></i>' : ''}
                                ${servicio.herramientas.includes('github') ? '<i class="trabajo-icono fab fa-github"></i>' : ''}
                            </div>
                            <img class="trabajo-imagen" 
                                src="${servicio.imagen.url2x || servicio.imagen.url}" 
                                srcset="${servicio.imagen.url2x ? servicio.imagen.url + ', ' + servicio.imagen.url2x + ' 2x' : ''}"
                                alt="Pagina Web">
                        </figure>
                    </div>`
                }
            })
            return plantilla_HTML;

        // Plantilla para c/u de los proyectos
        case $contenedor_proyectos:
            data.map(proyecto => {
                plantilla_HTML += `
                <figure class="portafolio-proyecto">
                    <picture class="portafolio-imagen">
                        <source srcset="${proyecto.imagen.portada.responsive}" media="(max-width: 600px)">
                        <img class="portafolio-imagen" 
                            src="${proyecto.imagen.portada.url2x || proyecto.imagen.portada.url}" 
                            srcset="${proyecto.imagen.portada.url2x ? proyecto.imagen.portada.url + ', ' + proyecto.imagen.portada.url2x + ' 2x' : ''}"
                            alt="Pagina Web">
                    </picture>
                    <div class="portafolio-descripcion">
                        <h4 class="portafolio-descripcion-titulo">${proyecto.titulo}</h4>
                        <p class="portafolio-descripcion-parrafo">${proyecto.resumen}</p>
                        <i class="portafolio-icono fas fa-search-plus"></i>
                    </div>
                </figure>`
            });
            return plantilla_HTML;

        // Plantilla para el contenido del modal
        case $contenedor_modal:
            var proyecto = data;
            plantilla_HTML += `
            <div class="modal-container-header">
                <h3 class="modal-encabezado-titulo">${proyecto.titulo}</h3>
                <button class="modal-encabezado-button" id="btn_cerrar_modal">×</button>
            </div>
            <div class="modal-container-body">
                <figure class="modal-body-imagen">
                    <img src="${proyecto.imagen.descripcion.url2x || proyecto.imagen.descripcion.url}" 
                        srcset="${proyecto.imagen.descripcion.url2x ? proyecto.imagen.descripcion.url + ', ' + proyecto.imagen.descripcion.url2x + ' 2x' : ''}"
                        alt="Pagina Web">
                </figure>
                <div class="modal-body-contenido">
                    <h4 class="modal-contenido-titulo">Descripcion</h4>
                    <p class="modal-contenido-parrafo">${proyecto.descripcion}</p>
                    <h4 class="modal-contenido-titulo">URL ${proyecto.url.github ? '/ Github' : ''}</h4>
                    <div class="modal-contenido-enlaces">
                        <a class="modal-enlaces-url" href="${proyecto.url.website}" target="_blank">${proyecto.url.website}</a>
                        ${proyecto.url.github ? 
                            `<a class="modal-enlaces-github" href="${proyecto.url.github}" target="_blank"><i class="fab fa-github"></i></a>` 
                        : ''}
                    </div>
                    <h4 class="modal-contenido-titulo">Requerimientos</h4>
                    <div class="modal-contenido-requerimientos">
                        ${String(proyecto.herramientas.map(herramienta => 
                            `<span class="${herramienta}">${herramienta}</span>`
                        )).replace(/,/g, ' ')}
                    </div>
                </div>
            </div>`
            return plantilla_HTML;

        // Plantilla para el contenido de la seccion contacto
        case $contenedor_contacto:
            var contacto = data;
            plantilla_HTML += `
            <h2 class="contacto-informacion-titulo">Contacto</h2>
            <p class="contacto-informacion-descripcion">${contacto.acerca_de_mi}</p>
            <a class="contacto-informacion-correo" href="mailto:${contacto.correo}">${contacto.correo}</a>
            <div class="contacto-informacion-redes-sociales">
                ${contacto.redes_sociales.github ? 
                    `<a href="${contacto.redes_sociales.github}" class="contacto-icono" target="_blank"><i class="fab fa-github"></i></a>`
                : ''}
                ${contacto.redes_sociales.instagram ? 
                    `<a href="${contacto.redes_sociales.instagram}" class="contacto-icono" target="_blank"><i class="fab fa-instagram"></i></a>`
                : ''}
                ${contacto.redes_sociales.twitter ? 
                    `<a href="${contacto.redes_sociales.twitter}" class="contacto-icono" target="_blank"><i class="fab fa-twitter"></i></a>`
                : ''}
                ${contacto.redes_sociales.linkedin ? 
                    `<a href="${contacto.redes_sociales.linkedin}" class="contacto-icono" target="_blank"><i class="fab fa-linkedin-in"></i></a>`
                : ''}
            </div>`
            return plantilla_HTML;
    }
}

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

const $modal = document.getElementById('modal');

function abrir_modal(data){
    // Agrega la informacion del proyecto al contenido del modal
    agregar_datos_a_HTML(data, $contenedor_modal)

    // Agrega la clase active y de manera asicrona remueve la clase inactive para activar su transicion
    $modal.classList.add('active');
    setTimeout(() => $modal.classList.remove('inactive'), 0);

    // Bloquea el desplazamiente en la web
    document.body.classList.add('overflow-hidden');

    // Agrega un evento con la funcion cerrar_modal al boton cerrar del modal
    document.getElementById("btn_cerrar_modal").addEventListener('click', () => cerrar_modal(event));
}

// Agrega un evento para cerrar el modal dando clic afuera de su contenido
$modal.addEventListener('click', () => cerrar_modal());
$contenedor_modal.addEventListener('click', e => e.stopPropagation());

function cerrar_modal() {
    // Agrega la clase inactive que define una animacion al elemento, a la cual, agregamos un escucha
    $modal.classList.add('inactive');
    $modal.addEventListener('animationend', concluir_cierre)

    // funcion del evento que remueve la clase active, el #modal_container y su escucha al finalizar la animacion
    function concluir_cierre() {
        $modal.classList.remove('active');
        $modal.removeEventListener('animationend', concluir_cierre)
        // Desbloqueamos el desplazamiente en la web
        document.body.classList.remove('overflow-hidden');
    }
}

/* -------------------------------------------------------------------------------------- */
/* ESPIAMOS EL SCROLL PARA ACTIVAR LA ANIMACION DE RELLENO EN LA SECCION DE CONOCIMIENTOS */
/* -------------------------------------------------------------------------------------- */

// Arreglos de elementos a los que definiremos una animacion
const $barrasNivel = Array.from(document.getElementsByClassName('profesional-barra-relleno'))
const $porcentajesNivel = Array.from(document.getElementsByClassName('profesional-nivel-porcentaje'))
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