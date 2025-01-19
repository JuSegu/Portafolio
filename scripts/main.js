// Seleccionar elementos del DOM
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

// Función para cerrar el menú
const closeMenu = () => {
    navMenu.classList.remove('show');
};

// Función para alternar el menú
const toggleMenu = (e) => {
    e.stopPropagation(); // Evitar que el clic se propague al documento
    navMenu.classList.toggle('show');
};

// Manejadores de eventos
if (menuIcon && navMenu) {
    // Evento para el ícono del menú
    menuIcon.addEventListener('click', toggleMenu);

    // Cerrar menú cuando se hace clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Cerrar menú cuando se hace clic fuera
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('show') && !navMenu.contains(e.target)) {
            closeMenu();
        }
    });
} else {
    console.warn('Menu elements not found in the DOM');
}

// Cerrar menú al redimensionar la ventana
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});