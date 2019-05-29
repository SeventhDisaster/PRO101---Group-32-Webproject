function renderTaskMembers(task, parent){

    let assignee = document.createElement("div");
    assignee.classList.add("assignedMembers")
    assignee.id = "members";

        let currentList = task.assignee;

        let assignTitle = document.createElement("h4");
        assignTitle.classList.add("assignTitle");
        assignTitle.innerText = "Assigned Members: ";
        assignee.appendChild(assignTitle);

        let assignMemberBtn = document.createElement("button");
        assignMemberBtn.innerText = "+";
        assignMemberBtn.classList.add("assignMemberBtn");
        assignee.appendChild(assignMemberBtn);

        // Opening the group memberlist
        assignButtonActive = false;
        let btnListContainer = document.createElement("div");
        btnListContainer.style.height = (project.team.length * 40) + "px";
        btnListContainer.style.bottom = (project.team.length * 100) + "%";
        assignMemberBtn.addEventListener("click", e => {
            if(assignButtonActive){
                btnListContainer.classList.remove("addAssignListShown");
                assignee.removeChild(btnListContainer);
                assignButtonActive = false;
            } else {
                btnListContainer.classList.add("addAssignListShown");
                assignee.appendChild(btnListContainer);
                assignButtonActive = true;
            }
        });

        for(let member of project.team){
            let addMember = document.createElement("img");
            addMember.setAttribute("src",getImage(member));
            addMember.dataset.id = member;
            addMember.addEventListener
            addMember.classList.add("memberIcon");

            //Assign Member to Task
            addMember.addEventListener("click", e => {
                if(!currentList.includes(member)){
                    currentList.push(member);
                    pushNotification(member, "You have been assigned a task!", "board.html?project=" + task.projectIndex + "&columns="+ task.columnIndex + "&tasks="+ task.rowIndex);
                    renderMemberList(task);
                } else {
                    alert("User already assigned to this task");
                }
            });
            btnListContainer.appendChild(addMember);
        }
        
        let assignedMemberList = document.createElement("div");
        assignedMemberList.classList.add("assignedMemberList");
        assignee.appendChild(assignedMemberList);

        function renderMemberList(){
            //Render assigned members on task
            if(currentList[0] === 0){
                currentList = [];
            }

            assignedMemberList.innerHTML = "";
            for(let member of project.team){
                for(let assignation of task.assignee){
                    if(member == assignation){
                        let setMember = document.createElement("img");
                        setMember.classList.add("memberIcon")
                        setMember.setAttribute("src",getImage(member));
                        setMember.dataset.id = member;
                        assignee.dataset.list = currentList;

                        // Unassigning member from task
                        setMember.addEventListener("click", e => {
                            console.log(currentList);
                            currentList.splice(currentList.indexOf(member),1);
                            renderMemberList(task);
                            assignee.dataset.list = currentList;
                        });

                        assignedMemberList.appendChild(setMember);
                    }
                }
            }
            if(task.assignee.length == 0){
                let noMember = document.createElement("p");
                noMember.classList.add("noMemberIcon")
                noMember.innerText = "No members assigned";
                assignedMemberList.appendChild(noMember);
                assignee.dataset.list = [0];
            } 
        }
                
        renderMemberList(task);



    parent.appendChild(assignee);
    
}