function toggleMenu() {
  const menuIcon = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('.navMenu');

  // Alternar la clase 'show-menu' para mostrar u ocultar los elementos del menú
  navMenu.classList.toggle('show-menu');

  // Reducir el tamaño del icono del menú a la mitad al mostrar los elementos del menú
  if (navMenu.classList.contains('show-menu')) {
    menuIcon.style.transform = 'scale(0.8)';
    menuIcon.style.position = 'fixed'; // Asegura que el icono se quede fijo
    menuIcon.style.top = '0px'; // Ajusta la posición del icono en la página
    menuIcon.style.right = '0px'; // Ajusta la posición del icono en la página

    // Agregar un event listener para cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', closeMenu);
  } else {
    menuIcon.style.transform = 'scale(1)';
    menuIcon.style.position = 'initial'; // Restablece la posición original del icono
    menuIcon.style.top = 'initial'; // Restablece la posición original del icono
    menuIcon.style.left = 'initial'; // Restablece la posición original del icono

    // Remover el event listener al cerrar el menú
    document.removeEventListener('click', closeMenu);
  }

  function closeMenu(event) {
    if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
      // Cerrar el menú si se hace clic fuera del icono del menú y de los elementos del menú
      navMenu.classList.remove('show-menu');

      // Restablecer las propiedades del icono del menú cuando se cierra el menú
      menuIcon.style.transform = 'scale(1)';
      menuIcon.style.position = 'initial';
      menuIcon.style.top = 'initial';
      menuIcon.style.left = 'initial';

      // Remover el event listener al cerrar el menú
      document.removeEventListener('click', closeMenu);
    }
  }
}

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) { // Cambia 100 por la posición en la que quieres aplicar el efecto
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Color de fondo oscuro
    navbar.style.transition = 'background-color 0.3s ease'; // Transición suave
  } else {
    navbar.style.backgroundColor = 'transparent'; // Vuelve a ser transparente
  }
});