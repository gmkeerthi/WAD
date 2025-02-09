document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slides img');
    setInterval(() => {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
    }, 3000);

    const buttons = document.querySelectorAll('.menu-filters button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            const items = document.querySelectorAll('.menu-list li');
            items.forEach(item => {
                item.style.display = category === 'all' || item.getAttribute('data-category') === category ? 'list-item' : 'none';
            });
        });
    });
});
