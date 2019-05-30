function renderRow(task, column, added, columnIndex, rowIndex){
    let newTask = document.createElement("div");
    newTask.classList.add("colTask");
    column.appendChild(newTask);

    newTask.setAttribute("draggable","true");
    newTask.addEventListener("dragstart", e => {
        e.dataTransfer.setData("column", columnIndex);
        e.dataTransfer.setData("row", rowIndex)
    });

    newTask.addEventListener("dragover", e => {
        e.dataTransfer.dropEffect = "move";
        newTask.classList.add("incomingRow");
        e.preventDefault();
    });

    newTask.addEventListener("dragenter", e => {
        newTask.classList.add("incomingRow");
    });

    newTask.addEventListener("dragleave", e => {
        newTask.classList.remove("incomingRow");
    });

    newTask.addEventListener("drop", e =>{
        newTask.classList.remove("incomingRow");
        let targetColumn = columnIndex;
        let targetRow = rowIndex;
        let columnData = parseInt(e.dataTransfer.getData("column"));
        let rowData = parseInt(e.dataTransfer.getData("row"));

        
        if(targetData !== columnData){
            project.columns.splice(targetData,0,project.columns[columnData]);
        }
        console.log("Item from " + columnData + " placed on " + targetData);

        if(targetData < columnData){
            columnData++;
            if(columnData > project.columns.length - 1){
                columnData = project.columns.length - 1;
            }
            console.log("Removed from " + columnData);
            project.columns.splice(columnData,1);
        } else if (targetData > columnData){
            columnData;
            if(columnData < 0){
                columnData = 0
            };
            console.log("Removed from " + columnData);
            project.columns.splice(columnData,1);
        }
        refreshBoard();
    })

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

    // Renders detail window of newly created tasks upon creation
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