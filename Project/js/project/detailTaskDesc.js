function renderTaskDesc(task, parent){
    let description = document.createElement("textarea");
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