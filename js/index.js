const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link'); 
// should find all classes with the tag .nav__link

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});
// for each link, listen for a click, then if clicked -> remove the nav-open that was previously added


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


const topButton = document.getElementById("top-btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}