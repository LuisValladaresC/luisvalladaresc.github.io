import DATA from "../lang/es";
import { projectModalTemplate } from "./templates";

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

// Agrega un evento a cada tarjeta de proyecto en la seccion, el cual, proporcion informacion extendida de cada proyecto
const projectsCards = document.querySelectorAll("#portafolio .portafolio-proyecto");
const projectsData = DATA.portfolio.projects;
projectsCards.forEach(projectCard => {
    projectsData.forEach((project, index) => {
        if (project.title == projectCard.dataset.id) {
            return projectCard.addEventListener("click", () => abrir_modal(projectsData[index]))
        }
    })
})

const modalElement = document.getElementById('modal');
const modalContentElement = document.querySelector('#modal #modal_container');

// Agrega un evento para cerrar el modal dando clic afuera de su contenido
modalElement.addEventListener('click', () => cerrar_modal());
modalContentElement.addEventListener('click', e => e.stopPropagation());

function render_modal(data) {
    // Renderiza el contenido del modal segun la informacion del proyecto actual
    const template = projectModalTemplate(data);
    modalContentElement.innerHTML = template;
}

function abrir_modal(data){
    // Agrega la informacion del proyecto al contenido del modal
    render_modal(data)

    // Agrega la clase active y de manera asicrona remueve la clase inactive para activar su transicion
    modalElement.classList.add('active');
    setTimeout(() => modalElement.classList.remove('inactive'), 0);

    // Bloquea el desplazamiente en la web
    document.body.classList.add('overflow-hidden');

    // Agrega un evento con la funcion cerrar_modal al boton cerrar del modal
    document.getElementById("btn_cerrar_modal").addEventListener('click', cerrar_modal);
}

function cerrar_modal() {
    // Agrega la clase inactive que define una animacion al elemento, a la cual, agregamos un escucha
    modalElement.classList.add('inactive');
    modalElement.addEventListener('animationend', concluir_cierre)

    // funcion del evento que remueve la clase active, el #modal_container y su escucha al finalizar la animacion
    function concluir_cierre() {
        modalElement.classList.remove('active');
        modalElement.removeEventListener('animationend', concluir_cierre)
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