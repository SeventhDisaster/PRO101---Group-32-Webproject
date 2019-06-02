function renderTaskName(task, parent){
    const name = newElem("input");
    name.value = task.name;
    name.classList.add("taskName");
    name.setAttribute("type","text");
    name.setAttribute("placeholder","Type here to set a Task Name");
    parent.appendChild(name);
    name.id = "name"

    if(task.color){
        name.style.backgroundColor = task.color;
    }
}

function getNameValue(){
    alert(name.value);
    return name.value;
}