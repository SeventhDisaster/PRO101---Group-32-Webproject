function renderTaskMembers(task, parent){

    const assignee = newElem("div");
    assignee.classList.add("assignedMembers")
    assignee.id = "members";

        const currentList = task.assignee;

        const assignTitle = newElem("h4");
        assignTitle.classList.add("assignTitle");
        assignTitle.innerText = "Assigned Members: ";
        assignee.appendChild(assignTitle);

        const assignMemberBtn = newElem("button");
        assignMemberBtn.innerText = "+";
        assignMemberBtn.classList.add("assignMemberBtn");
        assignee.appendChild(assignMemberBtn);

        // Opening the group memberlist
        assignButtonActive = false;
        const btnListContainer = newElem("div");
        btnListContainer.style.height = (project.team.length * 40) + "px";
        btnListContainer.style.bottom = (project.team.length * 80) + "%";
        assignMemberBtn.addEventListener("click", e => {
            if(assignButtonActive){
                btnListContainer.classList.remove("addAssignListShown");
                assignee.removeChild(btnListContainer);
                assignButtonActive = false;
                btnListContainer.innerHTML = "";
            } else {
                btnListContainer.classList.add("addAssignListShown");
                assignee.appendChild(btnListContainer);
                assignButtonActive = true;
                // Render team member assigning to 
                for(let member of project.team){
                    const listing = newElem("div");
                    listing.id = "memberListing" + member;
                    setClasses(listing,["addMemberListing","fullWidth","clickable","quickTransition"]);
                    btnListContainer.appendChild(listing);
                    listing.addEventListener("click", e => {
                        if(!currentList.includes(member)){
                            task.assignee.push(member);
                            listing.style.opacity = ".3";
                            pushNotification(member, "You have been assigned a task!", "board.html?project=" + task.projectIndex + "&columns="+ task.columnIndex + "&tasks="+ task.rowIndex);
                            renderMemberList(task);
                        } else {
                            alert("User already assigned to this task");
                        }
                    });
                    
                    const addMember = newElem("img");
                    addMember.setAttribute("src",getImage(member));
                    addMember.dataset.id = member;
                    addMember.addEventListener
                    addMember.classList.add("memberIcon");
                    listing.appendChild(addMember);
                    
                    const name = newElem("p");
                    name.innerText = users[member - 1].name;
                    listing.appendChild(name);
                    
                    if(currentList.includes(member)){
                        listing.style.opacity = ".3";
                    }
                    console.log("aa")
                }
            }
        });
        
            
            
            const assignedMemberList = newElem("div");
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
                        const setMember = newElem("img");
                        setMember.classList.add("memberIcon")
                        setMember.setAttribute("src",getImage(member));
                        setMember.id = "User" + member;
                        assignee.dataset.list = currentList;

                        // Unassigning member from task
                        setMember.addEventListener("click", e => {
                            console.log(currentList);
                            currentList.splice(currentList.indexOf(member),1);
                            renderMemberList(task);
                            getElemById("memberListing" + member).style.opacity = "1";
                            assignee.dataset.list = currentList;
                        });

                        assignedMemberList.appendChild(setMember);
                    }
                }
            }
            if(task.assignee.length == 0){
                const noMember = newElem("p");
                noMember.classList.add("noMemberIcon")
                noMember.innerText = "No members assigned";
                assignedMemberList.appendChild(noMember);
                assignee.dataset.list = [0];
            } 
        }
                
        renderMemberList(task);



    parent.appendChild(assignee);
    
}