function renderTaskExtraAction(task, container, column, row){

    //Complete Checkbox
    let compContainer = newElem("div");
    compContainer.classList.add("completeContainer");
    container.appendChild(compContainer);

    let checkbox = newElem("input");
    checkbox.id = "complete";
    checkbox.setAttribute("type","checkBox");
    checkbox.setAttribute("name","complete")
    compContainer.appendChild(checkbox);
    
    let customCheckbox = newElem("span");
    customCheckbox.classList.add("taskComplete")
    customCheckbox.innerText = "✓";
    compContainer.appendChild(customCheckbox);
    
    let label = newElem("label");
    label.innerText = "Complete";
    label.classList.add("taskCompleteLabel")
    label.setAttribute("for","complete");
    compContainer.appendChild(label);

    console.log(task.isComplete);
    if(task.isComplete){
         checkbox.checked = true;
    }

    //Delete Button
    let delContainer = newElem("div");
    delContainer.classList.add("taskDeleteContainer");
    container.appendChild(delContainer);

    delContainer.addEventListener("click", e => {
        renderAlert("task", column, row);
    })

    let delX = newElem("div");
    delX.innerText = "X";
    delX.classList.add("taskDeleteX");
    delContainer.appendChild(delX);

    let delDelete = newElem("h4");
    delDelete.innerText = "Delete Task";
    delDelete.classList.add("taskDelDelete");
    delContainer.appendChild(delDelete);
}