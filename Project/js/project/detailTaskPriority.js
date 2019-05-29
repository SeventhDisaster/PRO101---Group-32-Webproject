function renderTaskPriority(task,parent){
    let priority = document.createElement("select");
    priority.classList.add("prioritySetter");

        let priorityNorm = document.createElement("option");
        priorityNorm.innerText = "Normal";
        priority.appendChild(priorityNorm);

        let priorityHigh = document.createElement("option");
        priorityHigh.innerText = "High";
        priorityHigh.style.color = "orange";
        priority.appendChild(priorityHigh);

        let priorityCrit = document.createElement("option");
        priorityCrit.innerText = "Critical";
        priorityCrit.style.color = "red";
        priority.appendChild(priorityCrit);

    priority.selectedIndex = task.priority;
    parent.appendChild(priority);
    priority.id = "priority"
}