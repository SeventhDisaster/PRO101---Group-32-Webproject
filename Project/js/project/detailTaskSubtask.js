function renderTaskSubtasklist(task, parent){
    parent.innerHTML = ""; //Clear the existing set of subtasks to set up the correct ones.
    
    const subTaskList = newElem("div");
    subTaskList.classList.add("subtaskList");
    subTaskList.id = "subtasks";
    

    const addSubTaskBtn = newElem("button");
    addSubTaskBtn.innerText = "+   Add Subtask   +";
    addSubTaskBtn.classList.add("addSubTaskBtn");
    subTaskList.appendChild(addSubTaskBtn);
    addSubTaskBtn.addEventListener("click", e =>{
        let createSubTask = new Subtask(null,null);
        task.subtasks.push(createSubTask);
        renderSubtasks(task.subtasks[task.subtasks.length-1], subTaskList, [task.subtasks.length -1], task, parent);
    });
    for(let i = 0; i < task.subtasks.length; i++){
        renderSubtasks(task.subtasks[i], subTaskList, i, task, parent);
    }


    parent.appendChild(subTaskList);
}

function renderSubtasks(subtask, list, index, task, parent){
    const container = newElem("div");
    container.classList.add("subtaskContainer");


    //Subtask checkmark
    const newSubtaskCheck = newElem("label");
    newSubtaskCheck.classList.add("subtaskCheckContainer");
    
    const checkBox = newElem("input");
    checkBox.id = "subStatus" + index; //Used to retrieve data on Apply
    checkBox.setAttribute("type","checkBox");
    checkBox.checked = subtask.isComplete;
    newSubtaskCheck.appendChild(checkBox);
    const customCheckBox = newElem("span");
    customCheckBox.innerText = "✓";
    customCheckBox.classList.add("subTaskCheckbox");
    customCheckBox.addEventListener("click", e => {
        subtask.isComplete = !subtask.isComplete;
        if(subtask.isComplete){
            newSubtaskText.style.backgroundColor = "#a0ffda";
            removeSubTaskBtn.style.backgroundColor = "#a0ffda";
        } else {
            newSubtaskText.style.backgroundColor = "";
            removeSubTaskBtn.style.backgroundColor = "";
        }
    });
    newSubtaskCheck.appendChild(customCheckBox);
    
    //Remove Subtask Button
    const removeSubTaskBtn = newElem("button");
    removeSubTaskBtn.innerText = "X";
    removeSubTaskBtn.classList.add("removeSubTaskBtn");
    removeSubTaskBtn.addEventListener("click", e => {
        task.subtasks.splice(index,1);
        renderTaskSubtasklist(task, parent);
    });
    
    
    //Subtask Name
    const newSubtaskText = newElem("input");
    newSubtaskText.id = "subText" + index; //Used to retrieve data on Apply
    newSubtaskText.classList.add("subtask");
    newSubtaskText.setAttribute("placeholder","Type to add subtask..");
    newSubtaskText.value = subtask.name;
    newSubtaskText.addEventListener("keyup", e => {
        subtask.name = newSubtaskText.value;
    });
    if(subtask.isComplete){
        newSubtaskText.style.backgroundColor = "#a0ffda";
        removeSubTaskBtn.style.backgroundColor = "#a0ffda";
    }
    container.appendChild(newSubtaskCheck);
    container.appendChild(removeSubTaskBtn);
    container.appendChild(newSubtaskText);

    list.appendChild(container);
}