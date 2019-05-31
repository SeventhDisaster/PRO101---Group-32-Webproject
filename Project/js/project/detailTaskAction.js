function renderActionButtons(task, parent){

    //Confirm changes - Push out to dataset
    let confirmBtn = document.createElement("button");
    confirmBtn.classList.add("taskConfirm");
    confirmBtn.classList.add("taskActionButton");
    confirmBtn.innerText = "Confirm";
    confirmBtn.addEventListener("click", e => {
        let assignedMemberList = [];
        for(let user of task.assignee){
            assignedMemberList.push(user);
        }
        if(assignedMemberList.length === 0){
            assignedMemberList = [0]; //For default empty
        }

        // Subtask object handling
        let subtaskList = [];
        for(let i = 0; i < task.subtasks.length; i++){
            let subtaskStatus = document.getElementById("subStatus" + i)
            let subtaskText = document.getElementById("subText" + i);
            subtaskList.push({
                isComplete: subtaskStatus.checked,
                name: subtaskText.value
            });
        }
        let detailContent = {
            name: document.getElementById("name").value,
            desc: document.getElementById("description").value,
            color: document.getElementById("colorType").value,
            assignee: assignedMemberList,
            date: document.getElementById("deadline").value,
            priority: parseInt(document.getElementById("priority").selectedIndex),
            isComplete: document.getElementById("complete").checked,
            subtask: subtaskList
        }
        console.log(detailContent.isComplete);
        console.log("Task Selected: " + task.projectIndex + " "+ task.columnIndex + " " + task.rowIndex);
        
        applyChanges(task,detailContent);

        closeDetailWindow();
    });
    parent.appendChild(confirmBtn);



    //Abort changes - Don't push out to dataset
    let cancelBtn = document.createElement("button");
    cancelBtn.classList.add("taskCancel");
    cancelBtn.classList.add("taskActionButton");
    cancelBtn.innerText = "Cancel";
    cancelBtn.addEventListener("click",e => {
        closeDetailWindow();
    })
    parent.appendChild(cancelBtn);

    openDetailWindow();
}
