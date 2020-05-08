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
        let $proyectos = Array.from($contenedor.getElementsByClassName('portafolio-proyecto'))
        $proyectos.map(($proyecto, indice) => {
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

/* ---------------------------------------------------------------------------------------- */
/* ESPIAMOS EL SCROLL PARA ACTIVAR LA ANIMACION DE RELLENO EN CADA UNO DE LOS CONOCIMIENTOS */
/* ---------------------------------------------------------------------------------------- */

// Contenedores de cada una de las barras de niveles y textos de porcentaje a animar
const $conocimientos_niveles = Array.from(document.querySelectorAll('#profesional .profesional-conocimiento-nivel'));
// Valor que sera utilizado como retardo entre cada una de las animaciones de los niveles
var retardo_para_animaciones = 0;

// Evento que se activara al hacer scroll en la pagina web
document.addEventListener('scroll', mostrar_niveles_de_conocimiento);

function mostrar_niveles_de_conocimiento() {
    var desactivarEvento = true;
    // Posicion superior e inferior del scroll en pixeles (eje Y)
    var scroll_position_top = document.documentElement.scrollTop || document.body.scrollTop;
    var scroll_position_bottom = scroll_position_top + window.innerHeight;

    $conocimientos_niveles.map($nivel => {
        // Verifica si el nivel actual todavia no ha sido animado
        if (!$nivel.classList.contains('active')){
            desactivarEvento = false;
            // Posicion superior e inferior del nivel actual en pixeles (eje Y)
            var nivel_position_top = $nivel.getBoundingClientRect().top + scrollY;
            var nivel_position_bottom = $nivel.getBoundingClientRect().bottom + scrollY;
            // Verifica si el nivel actual se encuentra dentro del espacio que abarca el Scroll
            if (nivel_position_top > scroll_position_top && nivel_position_top < scroll_position_bottom ||
                nivel_position_bottom > scroll_position_top && nivel_position_bottom < scroll_position_bottom) {
                // Añade una clase "active" elemento actual, la cual definira una animacion en su barra de relleno y texto de porcentaje
                $nivel.classList.add('active');
                // Utiliza un temporizador para añadir la clase "mostrar" para correr la animacion definida previamente
                setTimeout(() => {
                    $nivel.classList.add('mostrar');
                }, retardo_para_animaciones);
                // Suma y resta continuamenete el retardo para que las animacion sucedan con el mismo espacio de tiempo
                retardo_para_animaciones += 500;
                setTimeout(() => retardo_para_animaciones -= 500, 500)
            }
        }
    });

    // Si todos los elementos dentro del arreglo de barras fueron animados se desactivara el evento
    if (desactivarEvento) document.removeEventListener('scroll', mostrar_niveles_de_conocimiento);
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

/* ------------------------------------------------------------------------------------ */
/* FUNCIONALIDAD QUE NOS PERMITIRA MOSTRAR ALTERNATIVAMENTE EL MENU RESPONSIVE (<600PX) */
/* ------------------------------------------------------------------------------------ */

// Menu responsive, Enlaces que componen el menu, boton de menu y lineas que componen el boton de menu
const $menu = document.getElementById('menu');
const $menu_links = Array.from(document.getElementsByClassName('header-menu-link'));
const $menu_buttom = document.getElementById('btn_menu');
const $menu_lines = Array.from(document.getElementsByClassName('header-button-line'));

// Evento que se activa al dar click sobre el boton de menu o alguno de los enlaces del menu
$menu_buttom.addEventListener('click', monstrar_alternativamente_menu);
$menu_links.map($link => $link.addEventListener('click', monstrar_alternativamente_menu));

function monstrar_alternativamente_menu() {
    // Activamos una transicion css en las lineas que componen el contenedor $menu_buttom
    $menu_lines.map($line => {
        $line.classList.toggle('active');
    });
    // Activamos una transicion css para mostrar el $menu
    $menu.classList.toggle('active');
    if ($menu.style.bottom) $menu.classList.toggle('inactive');
    $menu.style.bottom = 0;
    // Bloqueamos el desplazamiente en la web cuando esta activo el menu
    document.body.classList.toggle('overflow-hidden');
}

/* ------------------------------------------------------------------------------------------- */
/* ESPIAMOS EL SCROLL PARA RESALTAR EL ENLACE A LA SECCION ACTUAL DEL MENU RESPONSIVE (<600PX) */
/* ------------------------------------------------------------------------------------------- */

// Secciones y variable global que contendra el nodo correspondiente a la seccion actual
const $secciones = Array.from(document.querySelectorAll("#inicio, #profesional, #trabajo, #portafolio, #contacto"));
var $seccion_actual = $secciones[0];

// Evento que se activara al hacer scroll en la pagina web
document.addEventListener('scroll',encontrar_seccion_actual);

// Redefine el valor de la variable $seccion_actual y aplica la clase "active" al $menu_link correspondiente
function encontrar_seccion_actual(){
    // Posicion superior y centra del scroll en el eje Y (en pixeles)
    var scroll_position_top = document.documentElement.scrollTop || document.body.scrollTop;
    var scroll_position_center = scroll_position_top + (window.innerHeight / 2);

    $secciones.map(($seccion, indice) => {
        // Posicion superior e inferior de la seccion en su eje Y
        var posicion_inicio_seccion = $seccion.getBoundingClientRect().top + scrollY;
        var posicion_final_seccion = $seccion.getBoundingClientRect().bottom + scrollY;
        // Si la posicion central del scroll se encuentra sobre la seccion actual
        if (scroll_position_center > posicion_inicio_seccion && scroll_position_center <= posicion_final_seccion){
            // Si la seccion es diferente a la ya definida como actual
            if ($seccion_actual != $seccion) {
                // Esta clase resalta el menu link correspondiente a la seccion actual
                $menu_links[indice].classList.add("active");
                // Elimina la clase "active" del menu link correspondiente a la seccion actual anterior
                $menu_links.map($link => {
                    if ($link.classList.contains($seccion_actual.id)) {
                        $link.classList.remove("active")
                    }
                })
                $seccion_actual = $seccion;
            }
        }
    });
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