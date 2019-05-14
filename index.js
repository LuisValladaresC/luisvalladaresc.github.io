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