//This file contains the JS in-depth details on all the tasks.


let detailWindow = document.getElementById("taskDetailContainer");

function renderDetailWindow(task){
    
    // Clear detailWindow before re-render
    detailWindow.innerHTML = ""; 
    
    let taskActionContainer = document.createElement("div");
    taskActionContainer.classList.add("taskActions");
    detailWindow.appendChild(taskActionContainer);
    renderTaskExtraAction(task, taskActionContainer);
    
    let detailContainer = document.createElement("div");
    detailContainer.classList.add("detailContainer");
    detailWindow.appendChild(detailContainer);

    renderTaskName(task,detailContainer); //detailTaskName.js
    let descColorContainer = document.createElement("div");
        descColorContainer.classList.add("descriptionAndColor");
        detailContainer.appendChild(descColorContainer);
    renderTaskDesc(task,descColorContainer); //detailTaskDesc.js
    renderTaskColor(task,descColorContainer); //detailTaskColor.js
    renderTaskMembers(task, detailContainer); //detailTaskMember.js
    renderTaskDeadline(task,detailContainer); //detailTaskDate.js
    renderTaskPriority(task,detailContainer); //detailTaskPriority.js
    renderTaskSubtasklist(task,detailContainer); //detailTaskSubtask.js
    renderActionButtons(task, detailContainer); //detailTaskAction.js

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
    task.due = content.date;
    task.priority = content.priority;
    task.subtasks = content.subtask;
    refreshBoard();
}