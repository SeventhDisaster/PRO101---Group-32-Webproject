function renderTaskPriority(task,parent){
    const priority = newElem("select");
    priority.classList.add("prioritySetter");

        const priorityNorm = newElem("option");
        priorityNorm.innerText = "Normal";
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
    parent.appendChild(priority);
    priority.id = "priority"
}