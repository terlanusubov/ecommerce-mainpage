function Slider(selector, userSettings) {
    var defaults = {
        next: "fas fa-chevron-right rightIcon",
        prev: "fas fa-chevron-left leftIcon"
    }
    var settings = extend(defaults, userSettings);
    //get wrapper
    var wrapper = document.querySelector(selector);
    wrapper.classList.add("slider-wrapper");
    //get all slide items
    var slideItems = document.querySelectorAll(selector + " > div");
    //add slide item class them
    for (var slideItem of slideItems) {
        slideItem.classList.add("slide-item");
    }
    var rightIcon = document.createElement("i");
    rightIcon.className = settings.next;
    rightIcon.classList.add("right-icon");
    wrapper.append(rightIcon);

    var leftIcon = document.createElement("i");
    leftIcon.className = settings.prev;
    leftIcon.classList.add("left-icon");
    wrapper.append(leftIcon);

    rightIcon.addEventListener("click", function (e) {
        Slide("sag", e);
    })

    leftIcon.addEventListener("click", function (e) {
        Slide("sol", e);
    })

    function Slide(dir, e) {
        var parent = e.target.parentElement;
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
            }
            else {
                activeElement.classList.remove("active");
                slideItems[slideItems.length - 1].classList.add("active");
                
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

}