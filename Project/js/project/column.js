function renderColumn(column, columnIndex){
    let newColumn = document.createElement("div");
    newColumn.classList.add("taskColumn");

    
    let columnHead = document.createElement("div");
    columnHead.classList.add("colHead");
    newColumn.appendChild(columnHead)
    
    //Drag & Drop For Columns
    dragDropColumn(newColumn,columnHead,columnIndex);

    let columnTitle = document.createElement("input");
    columnTitle.classList.add("columnTitle");
    columnTitle.value = column.name;
    columnTitle.addEventListener("keyup", e => {
        column.name = columnTitle.value;
    });
    columnHead.appendChild(columnTitle);

    //Renders the button for adding new tasks
    let taskAddBtn = document.createElement("button");
    taskAddBtn.classList.add("addTaskBtn");
    taskAddBtn.innerText = "+";
    taskAddBtn.addEventListener("click",function(){
        refreshBoard();
        let addedTask = new Task();
        column.tasks.push(addedTask);
        renderRow(addedTask,columnBody,true, columnIndex, column.tasks.length[-1]);
        // Three last params are passed because of drag-drop
    })
    newColumn.appendChild(taskAddBtn);
    
    let columnBody = document.createElement("div");
    columnBody.classList.add("colBody");
    newColumn.appendChild(columnBody);
    
    //Render all of the tasks in the column
    for(let i = 0; i < column.tasks.length; i++){
        column.tasks[i].projectIndex = projectIndex;
        column.tasks[i].columnIndex = project.columns.indexOf(column);
        column.tasks[i].rowIndex = i;
        renderRow(column.tasks[i], columnBody, false, columnIndex, i);
    }

    boardContainer.appendChild(newColumn);
}