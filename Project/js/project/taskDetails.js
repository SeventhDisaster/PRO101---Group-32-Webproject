//This file contains the JS in-depth details on all the tasks.
let detailWindow = document.getElementById("taskDetailContainer");

function renderDetailWindow(task){
    let name = document.getElementById("taskName");
    name.value = task.name;

    let description = document.getElementById("taskDescription");
    description.value = task.desc;

    let assignee = document.getElementById("assignedMembers");

    let deadline = document.getElementById("taskDeadline");
    deadline.value = task.due;

    let priority = document.getElementById("prioritySetter");
    switch(task.priority){
        case 0: priority.selectedIndex = "0";
        case 1: priority.selectedIndex = "1";
        case 2: priority.selectedIndex = "2";
        default: priority.selectedIndex = "0";
    }

    //Render subtasks
    let subTaskList = document.getElementById("subtaskList");
    for(subtask of task.subtasks){
        renderSubtasks(subtask, subTaskList);
    }

    let confirmBtn = document.getElementById("taskConfirm");
    confirmBtn.addEventListener("click",function(){
        applyChanges(name,description,assignee,deadline,priority);
        closeDetailWindow();
    });

    let cancelBtn = document.getElementById("taskCancel");
    cancelBtn.addEventListener("click",function(){
        closeDetailWindow();
    })

    openDetailWindow();
}

//THIS FUNCTION RENDERS THE SUBTASKS IN THE DETAIL WINDOW
function renderSubtasks(subtask, list){
    list.innerHTML = "";
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

    list.appendChild(newSubtaskCheck);
    list.appendChild(newSubtaskText);

}

function openDetailWindow(){
    detailWindow.style.right = "-5vw";
}

function closeDetailWindow(){
    detailWindow.style.right = "-100vw";
}