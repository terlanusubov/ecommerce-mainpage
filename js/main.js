document.addEventListener("DOMContentLoaded", function () {
    myForEach(".nav-wrapper nav > ul > .dropdownable a", function (button) {
        myEvent(button, "click", function (e) {
            var parent = e.target.parentElement.parentElement.parentElement;
            e.preventDefault();
            var isMobile = false;
            if (window.innerWidth <= 768) {
                isMobile = true;
            }
            var currentButton = this;
            myDropDown(currentButton, (element) => isMobile ? element.nextElementSibling.nextElementSibling : element.nextElementSibling, function (element) {
                myToggleClass(element, "active");
                myToggleClass(currentButton.querySelector(".menu-line"), "active")
            })
        })
    })
    myEvent(document.querySelector(".hamburger-menu"), "click", function () {
        myToggleClass(document.querySelector(".mobile"), "active")
    })

})   