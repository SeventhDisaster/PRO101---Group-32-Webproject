function renderTaskExtraAction(task, container){

    let checkbox = document.createElement("input");
    checkbox.id = "complete";
    checkbox.setAttribute("type","checkBox");

    let customCheckbox = document.createElement("span");
    customCheckbox.classList.add("taskComplete")
    container.appendChild(customCheckbox);
    
    let label = document.createElement("label");
    label.innerText = "Mark task as Complete";
    label.classList.add("taskCompleteLabel")
    label.setAttribute("for","complete");
    container.appendChild(label);
}