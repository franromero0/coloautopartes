// Detecta cuando la página esta totalmente cargada y pone display none en el loader de width y heighto 100%.
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('load', function() {
        document.querySelector('.loader-container').style.display = 'none';
    });
});
// Boton flotante aparece a los 100px de scroll.
window.addEventListener('scroll', function() {
    var botonFlotante = document.getElementById('boton-flotante');
    if (window.scrollY > 100) { 
        botonFlotante.style.display = 'block'; 
        } else {
        botonFlotante.style.display = 'none'; 
        }
    });
    // Toggle de background color para el header cuando scrolleo.
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
// Funcion para cuando el usuario toque el menú no pueda scrollear.
document.addEventListener('DOMContentLoaded', function() {
    const menuCheckbox = document.querySelector('.menu-hamburguesa');
    const header = document.getElementById('header');
    

    menuCheckbox.addEventListener('change', function() {
        if (menuCheckbox.checked) {
            header.style.backgroundImage = "linear-gradient(to top, #9a8884, #9a8884, #9a8884, #9a8884, #9a8884, #94827e, #8e7c77, #887671, #7b6963, #6f5b56)";
            document.body.classList.add('hidden'); // Agrega la clase hidden
        } else {
            header.addEventListener('transitionend', function(event) {
                if (event.propertyName === 'background-image') {
                    document.body.classList.remove('hidden'); // Quita hidden
                }
            });
            header.style.backgroundImage = "linear-gradient(to top, #9a8884, #9a8884, #9a8884, #9a8884, #9a8884, #94827e, #8e7c77, #887671, #7b6963, #6f5b56)";// Restaura el fondo original
        }
    });

    // event listener para cada opción del menú para ver cuando presiona una opcion de las sections.
    const menuItems = document.querySelectorAll('.ul-links');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            menuCheckbox.checked = false; 
            header.style.backgroundImage = "linear-gradient(to top, #9a8884, #9a8884, #9a8884, #9a8884, #9a8884, #94827e, #8e7c77, #887671, #7b6963, #6f5b56)";// Restaura el fondo original
            document.body.classList.remove('hidden'); 
        });
    });

    // funcion para ver si toca de nuevo el boton de menú y quitar la clase hidden
    menuCheckbox.addEventListener('change', function() {
        if (!menuCheckbox.checked) {
            document.body.classList.remove('hidden'); 
            header.style.backgroundImage = originalBackground; // Restaura el fondo original
        }
    });
});

// Slider Home
let sliderInner = document.querySelector(".slider--inner");
let slides = sliderInner.querySelectorAll(".slide");
let index = 0;
let startX = 0;
let isDragging = false;

// Event listener (touchstart)
sliderInner.addEventListener('touchstart', (event) => {
    isDragging = true;
    startX = event.touches[0].clientX;
});

// Event listener (touchmove)
sliderInner.addEventListener('touchmove', (event) => {
    if (isDragging) {
        let currentX = event.touches[0].clientX;
        let distance = currentX - startX;
        sliderInner.style.transform = `translateX(calc(${index * -100}% + ${distance}px))`;
    }
});

// Event listener (touchend)
sliderInner.addEventListener('touchend', () => {
    if (isDragging) {
        let currentX = event.changedTouches[0].clientX;
        let distance = currentX - startX;
        if (Math.abs(distance) > 100) {
            if (distance > 0) {
                index--;
                if (index < 0) index = slides.length - 1;
            } else {
                index++;
                if (index >= slides.length) index = 0;
            }
            updateSlider();
        }
        sliderInner.style.transform = `translateX(${index * -100}%)`;
    }
    isDragging = false;
});

// Event listener (mousedown)
sliderInner.addEventListener('mousedown', (event) => {
    isDragging = true;
    startX = event.clientX;
});

// Event listener (mousemove)
sliderInner.addEventListener('mousemove', (event) => {
    if (isDragging) {
        let currentX = event.clientX;
        let distance = currentX - startX;
        sliderInner.style.transform = `translateX(calc(${index * -100}% + ${distance}px))`;
    }
});

// Event listener para el fin del arrastre
sliderInner.addEventListener('mouseup', () => {
    if (isDragging) {
        let currentX = event.clientX;
        let distance = currentX - startX;
        if (Math.abs(distance) > 100) {
            if (distance > 0) {
                index--;
                if (index < 0) index = slides.length - 1;
            } else {
                index++;
                if (index >= slides.length) index = 0;
            }
            updateSlider();
        }
        sliderInner.style.transform = `translateX(${index * -100}%)`;
    }
    isDragging = false;
});

// Función para actualizar la posición del slider
function updateSlider() {
    sliderInner.style.transform = `translateX(${index * -100}%)`;
}

// Event listener para el botón de desplazamiento hacia la izquierda
document.querySelectorAll('.slide-left').forEach(btn => {
    btn.addEventListener('click', () => {
        if (index > 0) {
            index--;
            updateSlider();
        }
    });
});

// Event listener para el botón de desplazamiento hacia la derecha
document.querySelectorAll('.slide-right').forEach(btn => {
    btn.addEventListener('click', () => {
        if (index < slides.length - 1) {
            index++;
            updateSlider();
        }
    });
});

// Cambia de sección 
setInterval(function () {
    if (!isDragging) {
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        sliderInner.style.transform = `translateX(${index * -100}%)`;
    }
}, 1300000);



















  