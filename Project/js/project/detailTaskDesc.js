function renderTaskDesc(task, parent){
    const description = newElem("textarea");
        description.classList.add("taskDescription");
        description.setAttribute("type","text");
        description.setAttribute("placeholder", "Type the task description here");
        description.value = task.desc;
        parent.appendChild(description);
        description.id = "description";
}

function getDescriptionValue(){
    return description.value;
}