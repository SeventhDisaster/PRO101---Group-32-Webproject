function renderTaskExtraAction(task, container){

    //Complete Checkbox
    let compContainer = document.createElement("div");
    compContainer.classList.add("completeContainer");
    container.appendChild(compContainer);

    let checkbox = document.createElement("input");
    checkbox.id = "complete";
    checkbox.checked = true;
    checkbox.setAttribute("type","checkBox");
    checkbox.setAttribute("name","complete")
    compContainer.appendChild(checkbox);

    let customCheckbox = document.createElement("span");
    customCheckbox.classList.add("taskComplete")
    customCheckbox.innerText = "✓";
    compContainer.appendChild(customCheckbox);
    
    let label = document.createElement("label");
    label.innerText = "Complete";
    label.classList.add("taskCompleteLabel")
    label.setAttribute("for","complete");
    compContainer.appendChild(label);



    //Delete Button
    let delContainer = document.createElement("div");
    delContainer.classList.add("taskDeleteContainer");
    container.appendChild(delContainer);

    let delX = document.createElement("div");
    delX.innerText = "X";
    delX.classList.add("taskDeleteX");
    delContainer.appendChild(delX);

    let delDelete = document.createElement("h4");
    delDelete.innerText = "Delete Task";
    delDelete.classList.add("taskDelDelete");
    delContainer.appendChild(delDelete);
}