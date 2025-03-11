document.querySelectorAll('.carrossel-container').forEach(container => {
    const carrossel = container.querySelector('.carrossel');
    const bantes = container.querySelector('.antes');
    const bdepois = container.querySelector('.depois');

    const itemWidth = container.querySelector('.item').offsetWidth + 10;

    bdepois.addEventListener('click', () => {
        carrossel.scrollBy({ left: itemWidth, behavior: 'smooth' });
    });

    bantes.addEventListener('click', () => {
        carrossel.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    });
});