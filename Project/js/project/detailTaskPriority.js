function renderTaskPriority(task,parent){
    const priority = newElem("select");
    priority.classList.add("prioritySetter");

        const priorityNorm = newElem("option");
        priorityNorm.innerText = "Normal";
        priorityNorm.style.color = "#434343";
        priority.appendChild(priorityNorm);

        const priorityHigh = newElem("option");
        priorityHigh.innerText = "High";
        priorityHigh.style.color = "orange";
        priority.appendChild(priorityHigh);

        const priorityCrit = newElem("option");
        priorityCrit.innerText = "Critical";
        priorityCrit.style.color = "red";
        priority.appendChild(priorityCrit);

    priority.selectedIndex = task.priority;
    switch(task.priority){ 
        case 0:
            priority.style.color = "#434343";
            break;
        case 1:
            priority.style.color = "orange";
            break;
        case 2:
            priority.style.color = "red";
            break;
        default:
            priority.style.color = "#434343";
            break;
    }
    parent.appendChild(priority);
    priority.id = "priority"
}