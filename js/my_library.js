function myAddClass(selector, className) {
    selector.classList.add(className);
}
function myRemoveClass(selector, className) {
    selector.classList.remove(className);
}
function myToggleClass(selector, className) {
    if (selector.classList.contains(className)) {
        myRemoveClass(selector, className);
    } else {
        myAddClass(selector, className);
    }
}
function myDropDown(clickedElement, dropElementCallback, callback) {
    var dropDownElement = dropElementCallback(clickedElement);
    if (dropDownElement != null) {
        callback(dropDownElement)
    }
}
function myGetElements(selector) {
    return document.querySelectorAll(selector);
}
function myForEach(selector, callback) {
    var elements = myGetElements(selector);
    for (var element of elements) {
        callback(element);
    }
}
function myEvent(selector,event,callback){
    if(typeof selector == "string"){
        return document.querySelector(selector).addEventListener(event,callback);
    }
    else{
        selector.addEventListener(event,callback);
    }
}
function myHasClass(selector,className){
    if(selector.classList.contains(className)){
        return true;
    }
    else{
        return false;
    }
}

function myRemoveClassFromAll(selector,className){
    myForEach(selector,function(e){
      myRemoveClass(e,className);
    })
}

