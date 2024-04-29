window.addEventListener('scroll', function() {
    var botonFlotante = document.getElementById('boton-flotante');
    if (window.scrollY > 100) { // Cambia 100 al valor de scroll deseado
      botonFlotante.style.display = 'block'; // Muestra el botón
    } else {
      botonFlotante.style.display = 'none'; // Oculta el botón
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    var menuLinks = document.querySelectorAll('.ul-links a');
    var menuCheckbox = document.getElementById('menu_hamburguesa');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            menuCheckbox.checked = false;
        });
    });
});


  