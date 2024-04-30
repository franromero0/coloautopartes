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
window.onscroll = function() {
  if (window.scrollY === 0) {
    document.getElementById("header").classList.add("transparent");
    document.getElementById("header").classList.remove("solid");
  } else {
    document.getElementById("header").classList.add("solid");
    document.getElementById("header").classList.remove("transparent");
  }
}

let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-40px"; // Cambiado a -40px para mantener consistencia con el valor en el else
  }
  prevScrollPos = currentScrollPos;
}

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 1) { // Cambia 100 por la cantidad de scroll en px en la que deseas cambiar el fondo del encabezado
      header.style.backgroundImage = "linear-gradient(to top, #9a8884, #9a8884, #9a8884, #9a8884, #9a8884, #94827e, #8e7c77, #887671, #7b6963, #6f5b56)";
  } else {
      header.style.backgroundImage = "none"; // Vuelve a eliminar el fondo cuando el scroll es menor a la cantidad determinada
  }
});













  