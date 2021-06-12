// top button function
const topButton = document.getElementById("top-btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // appears when 100 pixels have been scrolled
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}