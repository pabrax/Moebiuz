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

