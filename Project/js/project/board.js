//This file contains the rendering of the project columns and tasks

let boardContainer = document.getElementById("boardContainer");

let project = projects[0];

function renderBoard(){
    for(let column of project.columns){
        renderColumn(column.name, column)
    }
}

function renderColumn(title, column){
    let newColumn = document.createElement("div");
    newColumn.classList.add("taskColumn");

    let columnHead = document.createElement("div");
    columnHead.classList.add("colHead");
    newColumn.appendChild(columnHead)

    let columnTitle = document.createElement("h3");
    columnTitle.innerText = title;
    columnHead.appendChild(columnTitle);

    
    let taskAddBtn = document.createElement("button");
    taskAddBtn.classList.add("addTaskBtn");
    taskAddBtn.innerText = "+";
    taskAddBtn.addEventListener("click",function(){
        alert("Hello " + column.columnId);
    })
    newColumn.appendChild(taskAddBtn);
    
    let columnBody = document.createElement("div");
    columnBody.classList.add("colBody");
    newColumn.appendChild(columnBody);

    for(let task of column.tasks){
        renderRow(task, columnBody)
    }

    boardContainer.appendChild(newColumn);
}

function renderRow(task, column){
    let newTask = document.createElement("div");
    newTask.classList.add("colTask");
    column.appendChild(newTask);

    let taskHeader = document.createElement("h4");
    taskHeader.classList.add("colTaskHead");
    taskHeader.innerText = task.name;
    newTask.appendChild(taskHeader);
    
    let taskDescription = document.createElement("p");
    taskDescription.classList.add("colTaskDesc");
    taskDescription.innerText = task.desc;
    newTask.appendChild(taskDescription);

    
    /* Other Task Variables will be added here */

    newTask.addEventListener("click",function(){
        let taskDetailWindow = document.getElementById("taskDetailContainer");
        let taskSelect = column.indexOf(task);
        renderDetailWindow(taskDetailWindow, taskSelect);
    })

    column.appendChild(newTask);
}

//Render Board on page Load
renderBoard();

//Call on this function to refresh the entire board
function refreshBoard(){
    boardContainer.innerHTML = "";
    renderBoard();
}