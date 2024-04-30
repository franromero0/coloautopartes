document.addEventListener('DOMContentLoaded', function() {
  // Detectar cuando la página está completamente cargada
  window.addEventListener('load', function() {
      // Ocultar el loader
      document.querySelector('.loader-container').style.display = 'none';
  });
});

window.addEventListener('scroll', function() {
    var botonFlotante = document.getElementById('boton-flotante');
    if (window.scrollY > 100) { 
      botonFlotante.style.display = 'block'; 
    } else {
      botonFlotante.style.display = 'none'; 
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
    document.getElementById("header").style.top = "-40px"; 
  }
  prevScrollPos = currentScrollPos;
}
document.addEventListener('DOMContentLoaded', function() {
    const menuCheckbox = document.querySelector('.menu-hamburguesa');
    const header = document.getElementById('header');

    menuCheckbox.addEventListener('change', function() {
        if (menuCheckbox.checked) {
            header.style.backgroundImage = "linear-gradient(to top, #9a8884, #9a8884, #9a8884, #9a8884, #9a8884, #94827e, #8e7c77, #887671, #7b6963, #6f5b56)";
        } 
    });
});

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 1) { 
      header.style.backgroundImage = "linear-gradient(to top, #9a8884, #9a8884, #9a8884, #9a8884, #9a8884, #94827e, #8e7c77, #887671, #7b6963, #6f5b56)";
  } else {
      header.style.backgroundImage = "none";
  }
});













  