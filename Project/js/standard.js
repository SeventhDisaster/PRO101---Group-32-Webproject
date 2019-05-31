// Short createElement
function newElem(tag){
    return document.createElement(tag);
}

// Short getElementById
function getElemById(id){
    return document.getElementById(id);
}

// Set several classes to one element
function setClasses(element, classArray){
    for(let x of classArray){
        element.classList.add(x);
    }
}