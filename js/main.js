window.addEventListener('scroll', function() {
    var botonFlotante = document.getElementById('boton-flotante');
    if (window.scrollY > 100) { // Cambia 100 al valor de scroll deseado
      botonFlotante.style.display = 'block'; // Muestra el botón
    } else {
      botonFlotante.style.display = 'none'; // Oculta el botón
    }
  });
  