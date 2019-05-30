function renderRow(task, column, added, columnIndex, rowIndex){
    let newTask = document.createElement("div");
    newTask.classList.add("colTask");
    column.appendChild(newTask);

    //Drag and drop on rows
    dragDropRow(newTask, columnIndex, rowIndex);

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

    //Append to column
    column.appendChild(newTask);
}