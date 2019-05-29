function renderTaskDeadline(task, parent){
    let deadline = document.createElement("input");
    deadline.value = task.due;
    deadline.classList.add("taskDeadline");
    deadline.setAttribute("type","date");
    deadline.setAttribute("placeholder","Task Deadline");
    deadline.setAttribute("required","required");
    parent.appendChild(deadline);
    deadline.id = "deadline";
}

function getDeadlineContent(){
    return deadline.value;
}