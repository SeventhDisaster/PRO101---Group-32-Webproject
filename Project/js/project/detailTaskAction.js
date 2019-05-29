function renderActionButtons(task, parent){

    //Confirm changes - Push out to dataset
    let confirmBtn = document.createElement("button");
    confirmBtn.classList.add("taskConfirm");
    confirmBtn.innerText = "Confirm";
    confirmBtn.addEventListener("click", e => {
        let detailContent = {
            name: document.getElementById("name").value,
            desc: document.getElementById("description").value,
            color: document.getElementById("colorType").value,
            assignee: document.getElementById("members").dataset.list.split(",").map(a=>{return parseInt(a)}), //Dangerous line do not touch
            date: document.getElementById("deadline").value,
            priority: parseInt(document.getElementById("priority").selectedIndex),
            subtask: []
        }
        console.log(task.projectIndex + " "+ task.columnIndex + " " + task.rowIndex);
        console.log(detailContent.priority);
        applyChanges(task,detailContent);
        /*for(let user of detailContent.assignee){
            pushNotification(user, "You have been assigned a task!", "board.html?project=" + task.projectIndex + "&columns="+ task.columnIndex + "&tasks="+ task.rowIndex);
        }*/


        closeDetailWindow();
    });
    parent.appendChild(confirmBtn);



    //Abort changes - Don't push out to dataset
    let cancelBtn = document.createElement("button");
    cancelBtn.classList.add("taskCancel");
    cancelBtn.innerText = "Cancel";
    cancelBtn.addEventListener("click",e => {
        closeDetailWindow();
    })
    parent.appendChild(cancelBtn);

    openDetailWindow();
}
