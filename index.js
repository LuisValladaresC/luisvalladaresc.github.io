/* ----------------------------------------------------------------- */
/* TRABAJAMOS CON EL MENU DESPLEGABLE EN VERSION RESPONSIVE (<600PX) */
/* ----------------------------------------------------------------- */

// Boton Menu || Arreglo con elementos / lineas(3) que componen el Boton Menu
var $btnMenu = document.getElementById('btn_menu');
var $lineasBtnMenu = Array.from(document.getElementsByClassName('header-button-line'));
// Contenedor de Menu || Arreglo con elementos / linkMenu(5) que componene el Menu
var $menu = document.getElementById('menu');
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