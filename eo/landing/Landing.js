

document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -85,
        shift: 5,
        padding: 5,
        numVisible: 5,
        indicators: true,
        noWrap: false
    });
});

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')


punto.forEach( ( cadaPunto , i )=> {
   
    punto[i].addEventListener('click',()=>{

       
        let posicion  = i
        let operacion = posicion * -30

        
        grande.style.transform = `translateX(${ operacion }%)`

       
        punto.forEach( ( cadaPunto , i )=>{
            
            punto[i].classList.remove('activo')
        })
      
        punto[i].classList.add('activo')

    })
})



// Cuando se hace clic en un botón para desplazar hacia arriba
ddocument.getElementById('boton-somos').addEventListener('click', function() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});




