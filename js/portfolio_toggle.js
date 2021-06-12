// Portfolio item toggles
const portfolioWebsiteToggle = document.querySelector('.portfolio__website--toggle');
const portfolioUxToggle = document.querySelector('.portfolio__ux--toggle');
const portfolio3dToggle = document.querySelector('.portfolio__3d--toggle');

portfolioWebsiteToggle.addEventListener('click', () => {
     document.body.classList.toggle('portfolio__website--off');
 });

 portfolioUxToggle.addEventListener('click', () => {
    document.body.classList.toggle('portfolio__ux--off');
});

portfolio3dToggle.addEventListener('click', () => {
    document.body.classList.toggle('portfolio__3d--off');
});