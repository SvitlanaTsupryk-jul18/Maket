//about slider
var slwrapper = document.querySelector(".about__slider");
var slider = slwrapper.querySelector(".slider");
var prev = slwrapper.querySelector(".prev");
var next = slwrapper.querySelector(".next");
var slide = slider.querySelector(".slider__inner").offsetWidth;



// prev.addEventListener("click", function() {
//     sdvig -= slide;
//     if (sdvig < -slide * 4) {
//         sdvig = 0;
//     }
//     slider.style.left = sdvig + "px";
// });

// next.addEventListener("click", function() {
//     sdvig += slide;
//     if (sdvig > slide * 4) {
//         sdvig = 0;
//     }
//     slider.style.right = sdvig + "px";
// });
var sdvig = 0;
slwrapper.addEventListener("click", function(event) {

    if (event.target == prev) {
        sdvig -= slide;
        console.log(event.target.className);
        if (sdvig < -slide * 4) {
            sdvig = 0;
        }

    } else if (event.target == next) {
        console.log(event.target.className);
        sdvig += slide;
        if (sdvig > slide * 4) {
            sdvig = 0;
        }

    }

    slider.style.transform = 'translate(' + sdvig + 'px)';
    console.log(sdvig);
});