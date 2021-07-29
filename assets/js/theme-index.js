//Get the button:
mybutton = document.getElementById("toTheTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const menu = document.querySelectorAll(".dropdown-menu");
const main = document.querySelectorAll("div.main-container");
const button = document.querySelectorAll(".tablet-menu");
const footer = document.querySelectorAll("footer");
const video = document.querySelectorAll(".button-box");
const play = document.querySelectorAll(".video-container");
const logo = document.querySelectorAll(".logo-box");

function showDropdownMenu() {
    main[0].style.display = "none";
    footer[0].style.display = "none";
    video[0].style.display = "none";
    play[0].style.display = "none";

    if (menu[0].style.display === "block") {
        button[0].style.backgroundImage = "url(assets/img/Vectortablet.png)";
        menu[0].style.display = "none";
        logo[0].style.marginLeft = "65px";
        main[0].style.display = "block";
        footer[0].style.display = "block";
        video[0].style.display = "block";
        play[0].style.display = "block";

    } else {
        logo[0].style.marginLeft = "145px";
        menu[0].style.display = "block";

    }
}



function checkMenu() {
    if (window.innerWidth > 800) {
        menu[0].style.display = "none";
        main[0].style.display = "block";
        footer[0].style.display = "block";
        video[0].style.display = "block";
        play[0].style.display = "block";
        button[0].style.backgroundImage = "url(assets/img/Vectortablet.png)";
        button[0].style.display = "none";
    }
    if (window.innerWidth <= 800) {
        button[0].style.display = "block";
    }
}
window.onresize = checkMenu;