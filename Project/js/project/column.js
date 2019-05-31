function renderColumn(column, columnIndex){
    let newC = newElem("div");
    newC.classList.add("taskColumn");

    
    let head = newElem("div");
    head.classList.add("colHead");
    newC.appendChild(head)
    
    //Drag & Drop For Columns
    dragDropColumn(newC,head,columnIndex);
    let del = newElem("button");
    del.classList.add("delColumn");
    del.innerText = "X";
    del.addEventListener("click", e =>{
        renderAlert("column", columnIndex, null);
    })
    head.appendChild(del);

    let title = newElem("input");
    title.classList.add("columnTitle");
    title.value = column.name;
    title.placeholder = "Title...";
    title.addEventListener("keyup", e => {
        //Push changes to title out on every keypress
        column.name = title.value;
        if(e.keyCode === 13){
            saveProjectChanges();
        }
    });
    head.appendChild(title);

    //Renders the button for adding new tasks
    let addTask = newElem("button");
    addTask.classList.add("addTaskBtn");
    addTask.innerText = "+ Add Task +";
    addTask.addEventListener("click",function(){
        refreshBoard();
        let addedTask = new Task();
        column.tasks.push(addedTask);
        renderRow(addedTask,body,true, columnIndex, column.tasks.length[-1]);
        // Three last params are passed because of drag-drop
    })
    newC.appendChild(addTask);
    
    let body = newElem("div");
    body.classList.add("colBody");
    newC.appendChild(body);
    
    //Render all of the tasks in the column
    for(let i = 0; i < column.tasks.length; i++){
        column.tasks[i].projectIndex = projectIndex;
        column.tasks[i].columnIndex = project.columns.indexOf(column);
        column.tasks[i].rowIndex = i;
        renderRow(column.tasks[i], body, false, columnIndex, i);
    }

    //TARGET FOR ROW-DRAG-DROP
    let rowTarget = newElem("div");
    rowTarget.classList.add("rowTaker");
    body.appendChild(rowTarget);
    dragDropNewRow(rowTarget, columnIndex);
    boardContainer.appendChild(newC);
}