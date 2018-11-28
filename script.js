(function() {
    // invocation
    sliderAbout();
    Tabs();
    var slideIndex = 0;
    showSlides();
    jsForm();
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

    ////////slider in clients

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("clients__slide");
        var dots = document.getElementsByClassName("clients__dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" js-active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " js-active";
        setTimeout(showSlides, 2500); // Change image every 2 seconds
    }

    //////// validation form 



    function jsForm() {
        let form = document.querySelector('.js-form');
        if (!form) return console.log('Форма не найдена');
        form.setAttribute('novalidate', 'true');
        let inputs = form.querySelectorAll('.form__input');
        let isValid = true;
        let errorClass = 'form__error';
        let errors = {
            default: errorClass,
            required: errorClass + '--required',
            pattern: errorClass + '--pattern'
        }

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            isValid = true;
            setToDefaultStyles();
            // validate inputs
            validateInputs();
            // try to submit
            submitForm();
        });

        function setToDefaultStyles() {
            inputs.forEach(element => {
                element.classList.remove(errors.default, errors.required, errors.pattern);
            });
        }

        function validateInputs() {
            inputs.forEach(element => {
                isValid = checkOnRequired(element) && isValid; // true or false
            });

        };

        function checkOnRequired(input) {
            if (input.hasAttribute('required')) {
                if (input.value.trim() === '') {
                    input.classList.add(errors.required);

                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        }

        function submitForm() {
            if (!isValid) return console.log('NOT VALID');
            let femail = form.querySelector(".js-email");

            if (validateEmail(femail.value)) {
                console.log("ok");
                isValid = true;
            } else {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Please enter correct email!'
                });
                //alert("Please enter correct email");
                isValid = false;
                femail.classList.add(errors.pattern);

            }

            function validateEmail(email) {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }
            // AJAX


            // Success messages
            if (isValid) {
                //sendForm();

                swal(
                    'Good job!',
                    'You log in!',
                    'success'
                )
                form.querySelector('.form__btn').disabled = true;
            } else {
                form.reset();

            }
        }
    }
    smoothScrollLinks();
    function smoothScrollLinks() {

		document.querySelectorAll('a[href^="#"]').forEach(link => {
			link.addEventListener('click', function (e) {
				e.preventDefault();
 				
 				document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth'
				});
			});
		});
	}
})();