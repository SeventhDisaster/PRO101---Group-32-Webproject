/*
            <div class="taskColumn">
                <div class="colHead">
                    <h3>To-Do</h3>
                </div>
                <div class="colBody">
                    <div class="colTask">
                        <h4 class="colTaskHead">Sample Task</h4>
                        <p class="colTaskDesc"> This is a sample description that is longer</p>
                    </div>
                </div>
            </div>
*/
let boardContainer = document.getElementById("boardContainer");

let project = projects[0];

function renderBoard(){
    for(let column of project.columns){
        renderColumn(column.columnName, column)
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
    taskHeader.innerText = task.taskName;
    newTask.appendChild(taskHeader);
    
    let taskDescription = document.createElement("p");
    taskDescription.classList.add("colTaskDesc");
    taskDescription.innerText = task.taskDesc;
    newTask.appendChild(taskDescription);

    
    /* Other Task Variables will be added here */


    column.appendChild(newTask);
}

//Render Board on page Load
renderBoard();

//Call on this function to refresh the entire board
function refreshBoard(){
    boardContainer.innerHTML = "";
    renderBoard();
}