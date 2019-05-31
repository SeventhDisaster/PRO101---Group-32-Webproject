function renderRow(task, column, added, columnIndex, rowIndex){
    let newTask = newElem("div");
    newTask.classList.add("colTask");
    column.appendChild(newTask);

    //Drag and drop on rows
    dragDropRow(newTask, columnIndex, rowIndex);

    let head = newElem("h4");
    head.classList.add("colTaskHead");
    head.innerText = task.name;
    newTask.appendChild(head);

    
    let desc = newElem("p");
    desc.classList.add("colTaskDesc");
    desc.innerText = task.desc;
    newTask.appendChild(desc);

    let color = task.color;
    if(color){
        newTask.style.backgroundColor = color;
    } else if(rowIndex % 2 === 0) {
        newTask.style.backgroundColor = "#e9e9e9"
    } else {
        newTask.style.backgroundColor = "#f3f3f3";
    }

    if(task.isComplete){
        let complete = newElem("div");
        complete.innerText = "✓";
        complete.classList.add("completeMark");
        newTask.appendChild(complete);
    }

    if(task.priority > 0 && !task.isComplete){
        let priority = newElem("div");
        if(task.priority === 1){
            priority.classList.add("highPri");
        }
        if (task.priority === 2){
            priority.classList.add("criticalPri");
        }
        newTask.appendChild(priority);
    }

    if(task.due){
        let due = newElem("div");
        due.innerText = "      " + task.due;
        due.classList.add("deadLine");
        newTask.appendChild(due);
    }

    if(task.assignee.length > 0){
        let assigneeContainer = newElem("div");
        assigneeContainer.classList.add("assigneeContainer");
        for(let member of task.assignee){
            if(member > 0){
                let memberImg = newElem("img");
                memberImg.classList.add("assigneeMember");
                memberImg.setAttribute("src",getImage(member));
                assigneeContainer.appendChild(memberImg);
            }
        }
        newTask.appendChild(assigneeContainer);
    }


    /* Other Task Variables will be added here */

    newTask.addEventListener("click",function(){
        closeDetailWindow();
        function wait(){
            renderDetailWindow(task, columnIndex, rowIndex);
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