//about slider
var slwrapper = document.querySelector(".about__slider");
var slider = slwrapper.querySelector(".slider");
var prev = slwrapper.querySelector(".prev");
var next = slwrapper.querySelector(".next");
var slide = slider.querySelector(".slider__inner").offsetWidth;

var sdvig = 0;

prev.addEventListener("click", function() {
    sdvig -= slide;
    if (sdvig < -slide * 4) {
        sdvig = 0;
    }
    slider.style.left = sdvig + "px";
});

next.addEventListener("click", function() {
    sdvig += slide;
    if (sdvig > slide * 4) {
        sdvig = 0;
    }
    slider.style.right = sdvig + "px";
});