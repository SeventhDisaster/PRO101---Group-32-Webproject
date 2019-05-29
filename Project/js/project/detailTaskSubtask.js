function renderTaskSubtasklist(task, parent){
    let subTaskList = document.createElement("div");
    subTaskList.classList.add("subtaskList");
    subTaskList.id = "subtasks";
    
    subTaskList.innerHTML = ""; //Clear the existing set of subtasks to set up the correct ones.
    
    subTaskList.dataset.list = task.subtasks;

    let addSubTaskBtn = document.createElement("button");
    addSubTaskBtn.innerText = "+   Add Subtask   +";
    addSubTaskBtn.classList.add("addSubTaskBtn");
    subTaskList.appendChild(addSubTaskBtn);
    addSubTaskBtn.addEventListener("click", e =>{
        let createSubTask = new makeSubtask(null,null);
        task.subtasks.push(createSubTask);
        subTaskList.innerHTML = "";
        renderTaskSubtasklist(task, parent);
    });
    
    for(subtask of task.subtasks){
        renderSubtasks(subtask, subTaskList);
    }


    parent.appendChild(subTaskList);
}

function renderSubtasks(subtask, list){
    let container = document.createElement("div");
    container.classList.add("subtaskContainer");

    let newSubtaskCheck = document.createElement("label");
    newSubtaskCheck.classList.add("subtaskCheckContainer");
    let newSubtaskText = document.createElement("input");

    let checkBox = document.createElement("input");
    checkBox.setAttribute("type","checkBox");
    if(subtask.status === 1){
        checkBox.checked = true;
    }
    newSubtaskCheck.appendChild(checkBox);
    let customCheckBox = document.createElement("span");
    customCheckBox.classList.add("subTaskCheckbox");
    newSubtaskCheck.appendChild(customCheckBox);

    let svg = document.createElement("svg");
    svg.classList.add("checkmarkIcon");
    svg.innerHTML = '<path fill-rule="evenodd"  stroke-linecap="round" stroke-linejoin="round" fill="none" d="M6.676,11.320 L11.865,14.982 L20.408,3.820 "/>'
    customCheckBox.appendChild(svg);
    
    newSubtaskText.classList.add("subtask");
    newSubtaskText.setAttribute("placeholder","Type to add subtask..");
    newSubtaskText.value = subtask.name;

    container.appendChild(newSubtaskCheck);
    container.appendChild(newSubtaskText);

    list.appendChild(container);
}