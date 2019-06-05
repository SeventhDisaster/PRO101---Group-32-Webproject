const page = getElemById("pageContainer");
const container = getElemById("alertContainer");

function removeAlert(){
    container.style.top = "-100vh"; //Slide up
    container.style.opacity = "0"; //Disappear
}

function renderAlert(type, column, row){ 
    container.style.top = "0vh"; //Slide down
    container.style.opacity = "1"; //Appear
    container.innerHTML = ""; //Clear elements before re-render.
    

    const fade = newElem("div");
    setClasses(fade,["alertFade","fullWidth","fullHeight"]);
    container.appendChild(fade);
    fade.addEventListener("click", e =>{
        removeAlert();
    })

    const window = newElem("div");
    setClasses(window,["alertWindow"]);
    container.appendChild(window);

    if(type === "task" || type === "column"){
        fade.style.backgroundColor = "#411a1a";

        const warning = newElem("h1");
        warning.innerText = "Are you sure you want to delete this " + type + "?";
        setClasses(warning,["alertText","fullWidth"]);
        window.appendChild(warning);
        
        const hr = newElem("hr");
        window.appendChild(hr);
        
        const no = newElem("button");
        no.innerText = "No";
        setClasses(no,["alertNo","alertButton","clickable"]);
        window.appendChild(no);
        no.addEventListener("click", e =>{
            removeAlert();
        })
        
        const yes = newElem("button");
        yes.innerText = "Yes";
        setClasses(yes,["alertYes","alertButton","clickable"]);
        window.appendChild(yes);
        yes.addEventListener("click", e =>{
            if(type === "task"){
                project.columns[column].tasks.splice(row,1);
            }
            if(type === "column"){
                project.columns.splice(column,1);
            }
            removeAlert();
            closeDetailWindow();
            refreshBoard();
        })
        
        
    // ==============================================================================
    // "Alert Window" is reused for team adding
    // ============================================================================== 

    } else if (type === "addMember"){
        fade.style.backgroundColor = "#59b8be";

        const title = newElem("h2");
        title.innerText = "Click to add users to the team for this project";
        setClasses(title,["searchTitle","fullWidth"]);
        window.appendChild(title);

        if(user.id === project.team[0]){
            const leaderText = newElem("p");
            leaderText.innerText = "As project leader, you can remove members. This will unassign them from all tasks"
            setClasses(leaderText,["leaderText","fullWidth"])
            window.appendChild(leaderText);
        }

        const search = newElem("input");
        search.addEventListener("keyup", e => {
            //Search dynamically on input
            renderUserList(search.value)
        })
        search.setAttribute("placeholder","Search for users");
        setClasses(search,["searchBar","noDefaultBorder"]);
        window.appendChild(search);

        const result = newElem("div");
        setClasses(result,["searchResult","fullHeight","flexDown"])

        window.appendChild(result)

        function renderUserList(searchIn){
            result.innerHTML = ""; //Clear existing result on new input
            searchIn = searchIn.toLowerCase();

            let x = searchIn.length;
            for(let u of users){
                if(u.name.substring(0, x).toLowerCase() == searchIn){
                    const listinCont = newElem("div");
                    setClasses(listinCont,["userListing","fullWidth","clickable", "quickTransition"])
                    
                    // Removing users from the team.
                    // NOTE: Team leader (team index 0) CANNOT be removed from the project

                    if(user.id === project.team[0]){
                        if(u.id !== project.team[0] && project.team.includes(u.id)){

                            const remove = newElem("button");
                            remove.innerText = "X";
                            setClasses(remove,["removeMember","noDefaultBorder","clickable","fullWidth","fullHeight"])
                            remove.addEventListener("click", e => {

                                // Unassign the removed member from all the tasks in the project
                                for(let c = 0; c < project.columns.length; c++){
                                    for(let t = 0; t < project.columns[c].tasks.length; t++){
                                        const taskAssignee = project.columns[c].tasks[t].assignee;
                                        if(taskAssignee.includes(u.id)){
                                            taskAssignee.splice(taskAssignee.indexOf(u.id),1);
                                            console.log("Unnassigned " + u.name + " from task: " + project.columns[c].tasks[t].name);
                                        }
                                    }
                                }

                                // Remove the member from the project
                                project.team.splice(project.team.indexOf(u.id),1);
                                console.log("Removed " + u.name + " from project team.")

                                // Save and refresh everything
                                saveProjectChanges();
                                refreshBoard();
                                renderProjectInfo(project);
                                renderUserList(searchIn);

                            })
                            listinCont.appendChild(remove);
                        }
                    }
                    
                    const uImg = newElem("img");
                    uImg.setAttribute("src", getImage(u.id));
                    setClasses(uImg,["memberIcon"])
                    listinCont.appendChild(uImg);
                    
                    const uName = newElem("p");
                    uName.innerText = u.name;
                    listinCont.appendChild(uName);
                    
                    listinCont.appendChild(uName);
                    
                    if(project.team.includes(u.id)){
                        uImg.style.opacity = ".3";
                        uName.style.opacity = ".3";
                    }

                    if(!project.team.includes(u.id)){
                        listinCont.addEventListener("click", e => {
                            project.team.push(u.id);
                            renderUserList(searchIn);
                            renderProjectInfo(project);
                            saveProjectChanges(); 
                        })
                    }
                    result.appendChild(listinCont);
                    
                }
            }
        }

        const close = newElem("button");
        setClasses(close,["clickable","noDefaultBorder","closeMAlert","quickTransition"])
        close.innerText = "Close window";
        close.addEventListener("click", e =>{
            removeAlert();
        })
        window.appendChild(close);

        renderUserList("");
    }
    

}