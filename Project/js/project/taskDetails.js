//This file contains the JS in-depth details on all the tasks.
let detailWindow = document.getElementById("taskDetailContainer");

//Render Detailwindow based on dataset(clicked on);
function renderDetailWindow(task){
    closeDetailWindow();

    detailWindow.innerHTML = ""; // Clear detailWindow before re-render
    
    let name = document.createElement("input");
    name.value = task.name;
    name.classList.add("taskName");
    name.setAttribute("type","text");
    name.setAttribute("placeholder","Type here to set a Task Name");
    detailWindow.appendChild(name);
    
    let descColorContainer = document.createElement("div");
    descColorContainer.classList.add("descriptionAndColor");
    detailWindow.appendChild(descColorContainer);
    
    let description = document.createElement("textarea");
        description.classList.add("taskDescription");
        description.setAttribute("type","text");
        description.setAttribute("placeholder", "Type the task description here");
        description.value = task.desc;
        descColorContainer.appendChild(description);
        
        let colorType = document.createElement("input");
        colorType.value = task.color;
        colorType.setAttribute("type","text");
        colorType.setAttribute("placeholder","#Hex Color");
        colorType.classList.add("taskColorSet");
        descColorContainer.appendChild(colorType);
        
        let colorPick = document.createElement("div");
        colorPick.classList.add("taskColorPick")
        descColorContainer.appendChild(colorPick);
        
    let assignee = document.createElement("div");
    assignee.classList.add("assignedMembers")
    detailWindow.appendChild(assignee);
    //TODO
        
    let deadline = document.createElement("input");
    deadline.value = task.due;
    deadline.classList.add("taskDeadline");
    deadline.setAttribute("placeholder","Task Deadline");
    detailWindow.appendChild(deadline);

    let priority = document.createElement("select");
    priority.classList.add("prioritySetter");
        let priorityNorm = document.createElement("option");
        priorityNorm.innerText = "Normal";
        priority.appendChild(priorityNorm);
        let priorityHigh = document.createElement("option");
        priorityHigh.innerText = "High";
        priority.appendChild(priorityHigh);
        let priorityCrit = document.createElement("option");
        priorityCrit.innerText = "Critical";
        priority.appendChild(priorityCrit);
    switch(task.priority){
        case 0: priority.selectedIndex = "0";
        case 1: priority.selectedIndex = "1";
        case 2: priority.selectedIndex = "2";
        default: priority.selectedIndex = "0";
    }
    detailWindow.appendChild(priority);

    let subTaskList = document.createElement("div");
    subTaskList.classList.add("subtaskList");

    subTaskList.innerHTML = ""; //Clear the existing set of subtasks to set up the correct ones.
    for(subtask of task.subtasks){
        renderSubtasks(subtask, subTaskList);
    }
    

    let confirmBtn = document.createElement("button");
    confirmBtn.classList.add("taskConfirm");
    confirmBtn.innerText = "Confirm";
    confirmBtn.addEventListener("click", e => {
        let detailContent = {
            name: name.value,
            desc: description.value,
            color: colorType.value,
            assignee: [],
            priority: parseInt(priority.selectedIndex),
            subtask: []
        }
        applyChanges(task,detailContent);
        closeDetailWindow();
    });
    detailWindow.appendChild(confirmBtn);

    let cancelBtn = document.createElement("button");
    cancelBtn.classList.add("taskCancel");
    cancelBtn.innerText = "Cancel";
    cancelBtn.addEventListener("click",e => {
        closeDetailWindow();
    })
    detailWindow.appendChild(cancelBtn);

    openDetailWindow();
}

//Render SUBTASKS in detail window
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

function openDetailWindow(){
    detailWindow.style.right = "-5vw";
}

function closeDetailWindow(){
    detailWindow.style.right = "-100vw";
}

function applyChanges(task,content){
    task.name = content.name;
    task.desc = content.desc;
    task.color = content.color;
    task.assignee = content.assignee;
    task.priority = content.priority;
    task.subtasks = content.subtask;
    refreshBoard();
}
