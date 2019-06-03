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
    // "Alert Window" reused for team adding
    } else if (type === "addMember"){
        fade.style.backgroundColor = "#59b8be";

        const title = newElem("h2");
        title.innerText = "Click to add users to the team for this project";
        setClasses(title,["searchTitle","fullWidth"]);
        window.appendChild(title);

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
                    if(project.team.includes(u.id)){
                        listinCont.style.opacity = ".3";
                    }

                    const uImg = newElem("img");
                    uImg.setAttribute("src", getImage(u.id));
                    setClasses(uImg,["memberIcon"])
                    listinCont.appendChild(uImg);

                    const uName = newElem("p");
                    uName.innerText = u.name;
                    listinCont.appendChild(uName);

                    listinCont.appendChild(uName);
                    
                    listinCont.addEventListener("click", e => {
                        if(project.team.includes(u.id)){
                            alert("This user is already part of the team!");
                        } else {
                            project.team.push(u.id);
                            listinCont.style.opacity = ".3"
                            renderProjectInfo(project);
                        }
                    })
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