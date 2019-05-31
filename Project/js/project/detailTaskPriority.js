function renderTaskPriority(task,parent){
    let priority = newElem("select");
    priority.classList.add("prioritySetter");

        let priorityNorm = newElem("option");
        priorityNorm.innerText = "Normal";
        priority.appendChild(priorityNorm);

        let priorityHigh = newElem("option");
        priorityHigh.innerText = "High";
        priorityHigh.style.color = "orange";
        priority.appendChild(priorityHigh);

        let priorityCrit = newElem("option");
        priorityCrit.innerText = "Critical";
        priorityCrit.style.color = "red";
        priority.appendChild(priorityCrit);

    priority.selectedIndex = task.priority;
    parent.appendChild(priority);
    priority.id = "priority"
}