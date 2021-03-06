//This file contains the JS in-depth details on all the tasks.


let detailWindow = getElemById("taskDetailContainer");

function renderDetailWindow(task, column, row){
    
    // Clear detailWindow before re-render
    detailWindow.innerHTML = ""; 
    
    const container = newElem("div");
    container.classList.add("taskActions");
    detailWindow.appendChild(container);
    renderTaskExtraAction(task, container, column, row);
    
    const detailContainer = newElem("div");
    detailContainer.classList.add("detailContainer");
    detailWindow.appendChild(detailContainer);

    renderTaskName(task,detailContainer); //detailTaskName.js
    const descColorContainer = newElem("div");
        descColorContainer.classList.add("descriptionAndColor");
        detailContainer.appendChild(descColorContainer);
    renderTaskDesc(task,descColorContainer); //detailTaskDesc.js
    renderTaskColor(task,descColorContainer); //detailTaskColor.js

    renderTaskMembers(task, detailContainer); //detailTaskMember.js
    renderTaskDeadline(task,detailContainer); //detailTaskDate.js
    renderTaskPriority(task,detailContainer); //detailTaskPriority.js

    const subTaskContainer = newElem("div");
    setClasses(subTaskContainer,["subTaskListContainer","fullWidth","fullHeight"]);
    renderTaskSubtasklist(task,subTaskContainer); //detailTaskSubtask.js
    detailContainer.appendChild(subTaskContainer);

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
    task.isComplete = content.isComplete;
    task.subtasks = content.subtask;
    refreshBoard();
}