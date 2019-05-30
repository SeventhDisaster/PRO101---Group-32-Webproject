function renderTaskSubtasklist(task, parent){
    let subTaskList = document.createElement("div");
    subTaskList.classList.add("subtaskList");
    subTaskList.id = "subtasks";
    
    subTaskList.innerHTML = ""; //Clear the existing set of subtasks to set up the correct ones.

    let addSubTaskBtn = document.createElement("button");
    addSubTaskBtn.innerText = "+   Add Subtask   +";
    addSubTaskBtn.classList.add("addSubTaskBtn");
    subTaskList.appendChild(addSubTaskBtn);
    addSubTaskBtn.addEventListener("click", e =>{
        let createSubTask = new makeSubtask(null,null);
        task.subtasks.push(createSubTask);
        renderSubtasks(task.subtasks[task.subtasks.length-1], subTaskList, [task.subtasks.length -1], task, parent);
    });
    for(let i = 0; i < task.subtasks.length; i++){
        renderSubtasks(task.subtasks[i], subTaskList, i, task, parent);
    }


    parent.appendChild(subTaskList);
}

function renderSubtasks(subtask, list, index, task, parent){
    let container = document.createElement("div");
    container.classList.add("subtaskContainer");


    //Subtask Completion Mark
    let newSubtaskCheck = document.createElement("label");
    newSubtaskCheck.classList.add("subtaskCheckContainer");
    
    let checkBox = document.createElement("input");
    checkBox.id = "subStatus" + index; //Used to retrieve data on Apply
    checkBox.setAttribute("type","checkBox");
    if(subtask.isComplete){
        checkBox.checked = true;
    }
    newSubtaskCheck.appendChild(checkBox);
    let customCheckBox = document.createElement("span");
    customCheckBox.innerText = "✓";
    customCheckBox.classList.add("subTaskCheckbox");
    newSubtaskCheck.appendChild(customCheckBox);

    //Remove Subtask Button
    let removeSubTaskBtn = document.createElement("button");
    removeSubTaskBtn.innerText = "X";
    removeSubTaskBtn.classList.add("removeSubTaskBtn");
    removeSubTaskBtn.addEventListener("click", e => {
        task.subtasks.splice(index,1);
        renderDetailWindow(task);
    });
    

    //Subtask Name
    let newSubtaskText = document.createElement("input");
    newSubtaskText.id = "subText" + index; //Used to retrieve data on Apply
    newSubtaskText.classList.add("subtask");
    newSubtaskText.setAttribute("placeholder","Type to add subtask..");
    newSubtaskText.value = subtask.name;


    container.appendChild(newSubtaskCheck);
    container.appendChild(removeSubTaskBtn);
    container.appendChild(newSubtaskText);

    list.appendChild(container);
}