window.addEventListener("load", s =>{
    renderBoard();
})

//This file contains the rendering of the project columns and tasks



let url = new URL(location.href);
let pURL = parseInt(url.searchParams.get("project"));
let projectIndex = pURL;
let project = projects[projectIndex];

if(pURL === undefined){
    alert("No project found");
} else {
    let tabTitle = document.getElementById("tabTitle");
    tabTitle.innerText = project.name;

    let boardContainer = document.getElementById("boardContainer");
    function renderBoard(){
        for(let column of project.columns){
            renderColumn(column.name, column)
        }
        let newColumnBtn = document.createElement("button");
        newColumnBtn.classList.add("addColumnBtn");
        newColumnBtn.innerText = "+";
        newColumnBtn.addEventListener("click", e => {
            let addedColumn = new column(prompt("Column Name"), []); // DO LATER
            project.columns.push(addedColumn);
            refreshBoard();
        })
        boardContainer.append(newColumnBtn);

        
        console.log("Loaded Project from ULR-Param: Project: " + pURL);
        if(typeof(pURL) == "number"){
            let cURL = parseInt(url.searchParams.get("columns"));
            if(cURL === undefined){console.log("No URL-Param for Task-Selection. No task loaded")}
            if(typeof(cURL) == "number" && cURL > -1){
                let tURL = parseInt(url.searchParams.get("tasks"));
                console.log("Loaded Task from URL-Parm:\n Project: " + pURL + "\nColumns: " + cURL + "\nTasks: " + tURL);
            
                console.log("Loaded Task:" + projects[pURL].columns[cURL].tasks[tURL]);
                renderDetailWindow(projects[pURL].columns[cURL].tasks[tURL]);
            }
        }

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
            let addedTask = new task();
            column.tasks.push(addedTask);
            renderRow(addedTask,columnBody,true);
        })
        newColumn.appendChild(taskAddBtn);
        
        let columnBody = document.createElement("div");
        columnBody.classList.add("colBody");
        newColumn.appendChild(columnBody);

        for(let i = 0; i < column.tasks.length; i++){
            column.tasks[i].projectIndex = projectIndex;
            column.tasks[i].columnIndex = project.columns.indexOf(column);
            column.tasks[i].rowIndex = i;
            renderRow(column.tasks[i], columnBody);
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
            newTask.style.backgroundColor = "#f3f3f3";
        }
        /* Other Task Variables will be added here */

        newTask.addEventListener("click",function(){
            closeDetailWindow();
            function wait(){
                renderDetailWindow(task);
            };
            setTimeout(wait,100);
        })

        if(added){
            renderDetailWindow(task);
        }

        column.appendChild(newTask);
    }

    //Call on this function to refresh the entire board
    function refreshBoard(){
        boardContainer.innerHTML = "";
        renderBoard();
    }
}