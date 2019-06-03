//////////////////////////////////////////////////////////////////////////////
//      This file contains quick functions for
//      document element creation and handling
//
//   -   newElem("div") --> Creates a new div tag
//   -   getElemByid("id") --> Gives the node of input id
//   -   setClasses(node, ["a","b"]) --> Gives node the classes a and b
//
////////////////////////////////////////////////////////////////////////////


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

function removeClasses(element, classArray){
    for(let x of classArray){
        element.classList.remove(x);
    }
}