//This file contains the JS in-depth details on all the tasks.


let detailWindow = document.getElementById("taskDetailContainer");

function renderDetailWindow(task){

    // Clear detailWindow before re-render
    detailWindow.innerHTML = ""; 
    
    renderTaskName(task,detailWindow); //detailTaskName.js
    let descColorContainer = document.createElement("div");
        descColorContainer.classList.add("descriptionAndColor");
        detailWindow.appendChild(descColorContainer);
    renderTaskDesc(task,descColorContainer); //detailTaskDesc.js
    renderTaskColor(task,descColorContainer); //detailTaskColor.js
    renderTaskMembers(task, detailWindow); //detailTaskMember.js
    renderTaskDeadline(task,detailWindow); //detailTaskDate.js
    renderTaskPriority(task,detailWindow); //detailTaskPriority.js
    renderTaskSubtasklist(task,detailWindow); //detailTaskSubtask.js
    renderActionButtons(task, detailWindow); //detailTaskAction.js
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