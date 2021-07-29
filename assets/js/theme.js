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
    if (typeof(video[0]) != 'undefined' && video[0] != null) {
        video[0].style.display = "none";
    }
    if (typeof(play[0]) != 'undefined' && video[0] != null) {
        play[0].style.display = "none";
    }

    if (menu[0].style.display === "block") {
        button[0].style.backgroundImage = "url(assets/img/Vectortablet.png)";
        menu[0].style.display = "none";
        //logo[0].style.marginLeft = "69px";
        main[0].style.display = "block";
        footer[0].style.display = "block";
        if (typeof(video[0]) != 'undefined' && video[0] != null) {
            video[0].style.display = "block";
        }
        if (typeof(play[0]) != 'undefined' && video[0] != null) {
            play[0].style.display = "block";
        }

    } else {
        //logo[0].style.marginLeft = "145px";
        menu[0].style.display = "block";

    }
}

const showMoreButton = document.querySelectorAll(".js-show-more");
const gridBlocks = document.querySelectorAll(".block");

function showMore() {
    if (gridBlocks[20].style.display == "block") {
        for (let i = 20; i < gridBlocks.length; i++) {
            gridBlocks[i].style.display = "none";
        }
    } else {
        for (let i = 20; i < gridBlocks.length; i++) {
            gridBlocks[i].style.display = "block";
        }
    }

}

function checkMenu() {
    if (window.innerWidth > 800) {
        menu[0].style.display = "none";
        main[0].style.display = "block";
        footer[0].style.display = "block";
        if (typeof(video[0]) != 'undefined' && video[0] != null) {
            video[0].style.display = "block";
        }
        if (typeof(play[0]) != 'undefined' && video[0] != null) {
            play[0].style.display = "block";
        }
        button[0].style.backgroundImage = "url(assets/img/Vectortablet.png)";
        button[0].style.display = "none";
    }
    if (window.innerWidth <= 800) {
        button[0].style.display = "block";
    }
}
window.onresize = checkMenu;

document.getElementById('select-place').addEventListener('change', function() {
    var style = this.value == 1 ? 'block' : 'none';
    if (this.value == 1) {
        document.getElementsByClassName('one')[0].style.display = style;
        document.getElementsByClassName('two')[0].style.display = style;
        document.getElementsByClassName('three')[0].style.display = style;
        document.getElementById('select-type').addEventListener('change', function() {
            var styleOne = this.value == 4 ? 'block' : 'none';
            var styleTwo = this.value == 5 ? 'block' : 'none';
            if (this.value == 4) {
                document.getElementsByClassName('one')[0].style.display = styleOne;
                document.getElementsByClassName('two')[0].style.display = styleOne;
                document.getElementsByClassName('three')[0].style.display = styleTwo;
            }
            if (this.value == 5) {
                document.getElementsByClassName('one')[0].style.display = styleOne;
                document.getElementsByClassName('two')[0].style.display = styleOne;
                document.getElementsByClassName('three')[0].style.display = styleTwo;
            }
        });
    } else {
        document.getElementsByClassName('one')[0].style.display = "none";
        document.getElementsByClassName('two')[0].style.display = "none";
        document.getElementsByClassName('three')[0].style.display = "none";
    }
});