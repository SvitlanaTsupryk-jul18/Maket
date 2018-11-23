//about slider
var slwrapper = document.querySelector(".about__slider");
var slider = slwrapper.querySelector(".slider");
var prev = slwrapper.querySelector(".prev");
var next = slwrapper.querySelector(".next");
var slide = slider.querySelector(".slider__inner").offsetWidth;

var sdvig = 0;
slwrapper.addEventListener("click", function(event) {
    if (event.target == next) {
        sdvig -= slide;
        if (sdvig < -slide * 4) {
            sdvig = 0;
        }
    } else if (event.target == prev) {
        if (sdvig != 0) {
            sdvig += slide;
        }
    }
    slider.style.transform = 'translate(' + sdvig + 'px)';
    console.log(sdvig);
});