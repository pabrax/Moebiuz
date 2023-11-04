document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('#carousel1');
    M.Carousel.init(elementosCarousel, {
        duration: 100,
        dist: -95,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('#carousel2');
    M.Carousel.init(elementosCarousel, {
        duration: 100,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false
    });
});

// Cuando se hace clic en un botón para desplazar hacia arriba
ddocument.getElementById('boton-somos').addEventListener('click', function () {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
   var collapsibleElem = document.querySelector('.collapsible');
   var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });



