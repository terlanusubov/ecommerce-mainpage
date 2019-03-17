function Slider(selector, userSettings) {
    var defaults = {
        next: "fas fa-chevron-right rightIcon",
        prev: "fas fa-chevron-left leftIcon",
        loop: false,
        speed: 2000,
        circle: false,
    }
    var settings = extend(defaults, userSettings);
    //get wrapper
    var wrapper = document.querySelector(selector);
    wrapper.classList.add("slider-main-wrapper");
    //get all slide items
    var slideItems = document.querySelectorAll(selector + " > div");
    //add slide item class them

    //for circle 
    var counter = 0;
    for (var slideItem of slideItems) {
        if (!slideItem.classList.contains("slider-button-wrapper"))
            slideItem.classList.add("slide-item");
        if (settings.circle) {
            slideItem.setAttribute("data-button", ++counter);
        }
    }

    if (settings.circle) {
        var circleWrapper = document.createElement("div");
        circleWrapper.classList.add("slider-button-wrapper");
        for (var i = 1; i <= slideItems.length; i++) {
            var circle = document.createElement("span");
            circle.classList.add("slider-buttons");
            if (i == 1) {
                circle.classList.add("active");
            }
            circle.setAttribute("data-slider", i);
            circleWrapper.append(circle);
        }
        wrapper.append(circleWrapper);
    }
    var rightIcon = document.createElement("i");
    rightIcon.className = settings.next;
    rightIcon.classList.add("right-icon");
    wrapper.append(rightIcon);

    var leftIcon = document.createElement("i");
    leftIcon.className = settings.prev;
    leftIcon.classList.add("left-icon");
    wrapper.append(leftIcon);

    if (settings.loop) {
        var interval = setInterval(function () {

            SlideWithDefault("sag", wrapper)
        }, settings.speed);
    }
    rightIcon.addEventListener("click", function (e) {
        // clearInterval(interval);
        if (!settings.carousel) {
            SlideWithDefault("sag", e);
        } else {
            SlideAsCarousel();
        }
    })

    leftIcon.addEventListener("click", function (e) {
        // clearInterval(interval);
        if (!settings.carousel) {
            SlideWithDefault("sol", e);
        } else {
            SlideAsCarousel();
        }
    })

    if (settings.circle) {
        var circles = wrapper.querySelectorAll(".slider-buttons");
        for (var circle of circles) {
            circle.addEventListener("click", function () {

                if (!this.classList.contains("active")) {
                    var currentActiveButton = wrapper.querySelector(".slider-buttons.active");
                    currentActiveButton.classList.remove("active");
                    var dataSlider = this.getAttribute("data-slider");
                    this.classList.add("active")
                    var nextSlider = wrapper.querySelector("[data-button='" + dataSlider + "'");
                    var activeSlider = wrapper.querySelector(".slide-item.active");
                    activeSlider.classList.remove("active");
                    nextSlider.classList.add("active");
                }
            });
        }
    }
    function SlideWithDefault(dir, e) {
        var parent = e.target ? e.target.parentElement : e;
        var activeElement = parent.querySelector(".slide-item.active");
        var nextElement;
        if (dir == "sag") {
            nextElement = activeElement.nextElementSibling;
        } else {
            nextElement = activeElement.previousElementSibling;
        }
        if (nextElement != null && nextElement.classList.contains("slide-item")) {
            activeElement.classList.remove("active");
            nextElement.classList.add("active");
        }
        else {
            if (dir == "sag") {
                activeElement.classList.remove("active");
                slideItems[0].classList.add("active");
                nextElement = slideItems[0];
            }
            else {
                activeElement.classList.remove("active");
                slideItems[slideItems.length - 1].classList.add("active");
                nextElement = slideItems[slideItems.length - 1];
            }
        }

        if (settings.circle) {
            var activeButton = parent.querySelector(".slider-buttons.active");
            var nextButton;
            var dataButton = nextElement.getAttribute("data-button");
            nextButton = parent.querySelector("[data-slider='" + dataButton + "']");
            nextButton.classList.add("active");
            activeButton.classList.remove("active");
        }
    }

}
function extend(o1, o2) {
    for (var item in o1) {
        if (o2.hasOwnProperty(item)) {
            o1[item] = o2[item];
        }
    }
    return o1;
}

