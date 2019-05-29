function renderTaskPriority(task,parent){
    let priority = document.createElement("select");
    priority.classList.add("prioritySetter");
        let priorityNorm = document.createElement("option");
        priorityNorm.innerText = "Normal";
        priority.appendChild(priorityNorm);
        let priorityHigh = document.createElement("option");
        priorityHigh.innerText = "High";
        priority.appendChild(priorityHigh);
        let priorityCrit = document.createElement("option");
        priorityCrit.innerText = "Critical";
        priority.appendChild(priorityCrit);
    switch(task.priority){
        case 0: priority.selectedIndex = "0";
        case 1: priority.selectedIndex = "1";
        case 2: priority.selectedIndex = "2";
        default: priority.selectedIndex = "0";
    }
    parent.appendChild(priority);
    priority.id = "priority"
    priority.dataset.selectedIndex = priority.selectedIndex;
}