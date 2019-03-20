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
    // New Arrival filter and click
    myForEach(".arrival-name-item", function (name) {
        myEvent(name, "click", function () {
            myRemoveClassFromAll(".arrival-name-item", "active");
            myAddClass(this, "active");
        })
    })

    myForEach(".arrival-name-mobile", function (element) {
        myEvent(element, "click", function () {
            myToggleClass(element, "active");
            myToggleClass(element.nextElementSibling, "active")
        })
    })

    //Product Filter

    if (window.innerWidth > 768) {
        var active_arrival_name = document.querySelector(".arrival-name-item.active").getAttribute("data-product");
        myForEach(".arrival-product-item", function (product) {
            if (product.getAttribute("data-id") != active_arrival_name) {
                product.style.display = "none";
            }
        })

        myForEach(".arrival-name-item", function (arrival_name) {
            myEvent(arrival_name, "click", function () {
                //display none all products
                myForEach(".arrival-product-item", function (product) {
                    product.style.display = "none";
                })

                //display block specific product
                var data_product = this.getAttribute("data-product");
                var arrival_product = document.querySelector("[data-id='" + data_product + "']");
                arrival_product.style.display = "block";

            })
        })
    }
})   