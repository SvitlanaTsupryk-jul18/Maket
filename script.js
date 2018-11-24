(function() {
    // invocation
    sliderAbout();
    Tabs();

    ////////// slider in about

    function sliderAbout() {
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
    }

    /////////tabs in works
    function Tabs() {
        var works = document.querySelector(".works");
        var tab = works.querySelectorAll('[data-item]');
        var cont = works.querySelector('.works__content');
        var tabLength = tab.length;
        var tabcontent = cont.querySelectorAll('.works__tabcontent');
        tab.forEach(function(item, i, arr) {
            tab[i].addEventListener("click", show);
        });

        function show() {
            tabcontent.forEach(function(item, i, arr) {
                tabcontent[i].classList.remove("show");
            });
            let c = 'data-item =' + '"' + this.dataset.item + '"';
            cont.querySelector("[" + c + "]").classList.add("show");
        };
    }

})();