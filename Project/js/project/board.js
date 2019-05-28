//This file contains the rendering of the project columns and tasks

let boardContainer = document.getElementById("boardContainer");
let project = projects[0];


function renderBoard(){
    for(let column of project.columns){
        renderColumn(column.name, column)
    }
    let newColumnBtn = document.createElement("button");
    newColumnBtn.classList.add("addColumnBtn");
    newColumnBtn.innerText = "+";
    newColumnBtn.addEventListener("click", e => {
        let addedColumn = new column(prompt("Column Name"), []);
        project.columns.push(addedColumn);
        refreshBoard();
    })
    boardContainer.append(newColumnBtn);
}

// Render each COLUMN
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
        let addedTask = new task("","","","",[],"",[]);
        column.tasks.push(addedTask);
        renderRow(addedTask,columnBody,true);
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

//Render each ROW (For every column)
function renderRow(task, column, added){
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

    let color = task.color;
    if(color){
        newTask.style.backgroundColor = color;
    } else {
        newTasl.style.backgroundColor = "red";
    }
    /* Other Task Variables will be added here */

    newTask.addEventListener("click",function(){
        renderDetailWindow(task);
    })

    if(added){
        renderDetailWindow(task);
    }

    column.appendChild(newTask);
}

//Render Board on page Load
renderBoard();

//Call on this function to refresh the entire board
function refreshBoard(){
    boardContainer.innerHTML = "";
    renderBoard();
}