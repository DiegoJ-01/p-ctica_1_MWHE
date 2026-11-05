// ===== MENÚ EN MÓVIL =====

// 1. SELECCIONAR el botón y el menú
const botonMenu = document.querySelector('#boton-menu');
const menu = document.querySelector('#menu');

// 2. ESCUCHAR el clic en el botón
botonMenu.addEventListener('click', function () {

    // 3. CAMBIAR: poner o quitar la clase "hidden" del menú
    menu.classList.toggle('hidden');

    // Saber si ahora está abierto (si ya no tiene "hidden")
    const abierto = !menu.classList.contains('hidden');

    // Cambiar el texto del botón y avisar al lector de pantalla
    botonMenu.textContent = abierto ? 'Cerrar' : 'Menú';
    botonMenu.setAttribute('aria-expanded', abierto);
});