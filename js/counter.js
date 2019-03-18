function Counter(selector, userSettings) {
    var defaults = {
        to: 100,
        speed: 500
    }
    var settings = extend(defaults, userSettings);
    var count_item = document.querySelector(selector);

    var counter = 0;
    
    var count_interval= setInterval(() => {
        count_item.innerText = counter;
        counter++;
        if(counter > settings.to){
            clearInterval(count_interval);
        }
    }, settings.speed);



    function extend(o1, o2) {
        for (var item in o1) {
            if (o2.hasOwnProperty(item)) {
                o1[item] = o2[item];
            }
        }
        return o1;
    }

}