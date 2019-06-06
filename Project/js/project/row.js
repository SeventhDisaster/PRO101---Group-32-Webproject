let filterApplied = false; //By default, no filter is applied
let filterOn = [];

function renderRow(task, column, added, columnIndex, rowIndex){
    const newTask = newElem("div");
    newTask.classList.add("colTask");
    column.appendChild(newTask);

    //Drag and drop on rows
    dragDropRow(newTask, columnIndex, rowIndex);

    const head = newElem("h4");
    head.classList.add("colTaskHead");
    head.innerText = task.name;
    if(task.name === ""){
        head.innerText = "Unnamed Task";
        head.style.color = "#9b9b9b";
    }
    newTask.appendChild(head);

    
    const desc = newElem("p");
    desc.classList.add("colTaskDesc");
    desc.innerText = task.desc;
    if(task.desc === ""){
        desc.innerText = "- No Description -";
        desc.style.color = "#9b9b9b";
    }
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
        const complete = newElem("div");
        complete.innerText = "✓";
        setClasses(complete,["statusMark","completeMark","fullHeight"]);
        newTask.appendChild(complete);
    }

    if(!added){
        let currentDate = new Date();
        if(!task.isComplete && (stringToDate(task.due) <= currentDate) && task.due){
            const warning = newElem("div");
            warning.innerText = "!";
            setClasses(warning,["statusMark","warningMark","fullHeight"]);
            newTask.appendChild(warning);
        }
    }
        
    if(task.priority > 0 && !task.isComplete){
        const priority = newElem("div");
        if(task.priority === 1){
            priority.classList.add("highPri");
        }
        if (task.priority === 2){
            priority.classList.add("criticalPri");
        }
        newTask.appendChild(priority);
    }

    if(task.due){
        const due = newElem("div");
        due.innerText = "      " + task.due;
        due.classList.add("deadLine");
        newTask.appendChild(due);
    }

    if(task.assignee.length > 0){
        const assigneeContainer = newElem("div");
        assigneeContainer.classList.add("assigneeContainer");
        for(let member of task.assignee){
            if(member > 0){
                const memberImg = newElem("img");
                memberImg.classList.add("assigneeMember");
                memberImg.setAttribute("src",getImage(member));
                assigneeContainer.appendChild(memberImg);
            }
        }
        newTask.appendChild(assigneeContainer);
    }

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

    //Filtering
    if(filterApplied){
        newTask.style.display = "none"; //Default all to none
        for(let m of filterOn){
            if(task.assignee.includes(m)){
                newTask.style.display = "block";
            }
        }
    }
}