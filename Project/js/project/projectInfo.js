// This JS file contains info displayed on the sidebar (Project Information)
let sideContainer = getElemById("sidebarContainer"); //The container
let side = getElemById("sideBarContent");
const tabTitle = getElemById("tabTitle");



function renderProjectInfo(project){
    side.innerHTML = "";

    //Set Style according to user theme
    const theme = styles[user.theme];
    sideContainer.style.backgroundImage = "linear-gradient(to bottom, " + theme.main +", "+ theme.sub + ")";
    sideContainer.style.boxShadow = "0px 0px 15px" + theme.main;
    if(user.theme === 7){
        setClasses(side,["lightChildtext"]);
    } else {
        removeClasses(side,["lightChildtext"]);
    }

    //Logo at the top of the sidebar
    const logo = newElem("img");
    logo.setAttribute("src","../img/logoSampleWhite.svg");
    logo.id = "logo";
    setClasses(logo,["clickable"]);
    logo.addEventListener("click", e => {
        redirectTo("dashboard.html");
    });
    side.appendChild(logo);

    const hr1 = newElem("hr");
    setClasses(hr1,["hr1"]);
    side.appendChild(hr1);

    //Project name (and tab title)
    const name = newElem("input");
    name.setAttribute("type","text");
    name.setAttribute("placeholder","Project Name");
    setClasses(name,["projectName"]);
    name.value = project.name;
    name.addEventListener("keyup", e => {
        project.name = name.value;
        tabTitle.innerText = project.name;
        if(project.name == ""){
            tabTitle.innerHTML = "Unnamed Project";
        }
        saveProjectChanges();
    })
    side.appendChild(name);
    tabTitle.innerText = project.name;

    // Project status on top of sidebar
    const status = newElem("select");
    setClasses(status,["projectStatus"]);

    const op1 = newElem("option");
    op1.innerText = "On Track"
    op1.style.color = "green";
    const op2 = newElem("option");

    op2.innerText = "At Risk"
    op2.style.color = "orange";
    const op3 = newElem("option");

    op3.innerText = "Behind Schedule"
    op3.style.color = "red";
    status.appendChild(op1);
    status.appendChild(op2);
    status.appendChild(op3);
    side.appendChild(status);
    status.selectedIndex = project.status;
    switch(project.status){
        case 0:
            status.style.color = "green";
            break;
        case 1:
            status.style.color = "orange";
            break;
        case 2:
            status.style.color = "red";
            break;
        default:
            status.style.color = "#434343";
            break;
    }

    status.addEventListener("change", e =>{
        project.status = status.selectedIndex;
        renderProjectInfo(project);
        saveProjectChanges();
    })
    side.appendChild(status);


    // Description section of the sidebar
    const descCont = newElem("div");
    setClasses(descCont,["descContainer","fullHeight"]);
    descCont.addEventListener("keyup", e=>{
        saveProjectChanges();
    })
    side.appendChild(descCont);

    const desc = newElem("textarea");
    desc.setAttribute("type","text");
    desc.setAttribute("spellcheck","false");
    desc.setAttribute("placeholder","Project Description");
    setClasses(desc,["projectDescription"]);
    desc.value = project.description;
    desc.addEventListener("keyup", e => {
        project.description = desc.value;
    })
    descCont.appendChild(desc);


    // Team section of the sidebar
    const teamCont = newElem("div");
    setClasses(teamCont,["teamList"]);
    side.appendChild(teamCont);

    const teamTitle = newElem("h4");
    setClasses(teamTitle,["fullWidth","fullHeight","teamHeader"]);
    teamTitle.innerText = "Team:";
    teamCont.appendChild(teamTitle);

    const addBtn = newElem("button");
    setClasses(addBtn,["addTeamBtn", "noDefaultBorder", "clickable", "quickTransition"]);
    addBtn.innerText = "+ Add Team +"
    addBtn.addEventListener("click", e =>{
        renderAlert("addMember", null, null); // alert.js
    })
    teamCont.appendChild(addBtn);

    teamCont.appendChild(newElem("hr"));

    const list = newElem("div");
    setClasses(list,["memberListContainer","fullHeight","fullWidth","flexDown"]);
    list.innerHTML = "";
    
    let owner = true; //The first user of the array is always the creator
    for(const member of project.team){
        const image = getImage(member)
        const userName = users[member - 1].name;
        
        const field = newElem("div");
        setClasses(field,["fullWidth","memberField"])
        list.appendChild(field);
        
        const icon = newElem("img");
        icon.setAttribute("src",image);
        setClasses(icon,["memberIcon","fullHeight","fullWidth"])
        field.appendChild(icon);
        
        const name = newElem("h5");
        name.innerText = userName;
        setClasses(name,["memberName"]);
        if(member === user.id){
            setClasses(name,["thisUser"]); //Show which user you are on the list
            field.style.backgroundImage = "linear-gradient(to right, rgba(255,255,255,.4),rgba(0,0,0,0)";
        }
        if(owner){
            setClasses(name,["leadUser"]); //Display which user is project leader
            icon.style.borderLeft = "solid 5px #ffff9e";
        }
        field.appendChild(name);
        owner = false;
    }
    teamCont.appendChild(list);


    //Theme Selector
    const styleHead = newElem("h3");
    setClasses(styleHead,["styleName"]);
    styleHead.innerText = "Theme: ";
    side.appendChild(styleHead);
    switch(user.theme){
        case 0: setClasses(styleHead,["styleSunset"]); break;
        case 1: setClasses(styleHead,["styleForest"]); break;
        case 2: setClasses(styleHead,["styleOcean"]); break;
        case 3: setClasses(styleHead,["styleTundra"]); break;
        case 4: setClasses(styleHead,["styleSky"]); break;
        case 5: setClasses(styleHead,["styleCherry"]); break;
        case 6: setClasses(styleHead,["styleDesert"]); break;
        case 7: setClasses(styleHead,["styleNight"]); break;
        default: setClasses(styleHead,["styleSky"]); break;
    }

    const hr2 = newElem("hr");
    setClasses(hr2,["hr2"]);
    side.appendChild(hr2);

    const styleCont = newElem("div");
    setClasses(styleCont,["styleContainer"]);
    side.appendChild(styleCont);

    for(let i = 0; i < styles.length; i++){
        const styleBtn = newElem("button");
        if(i < 4){
            styleBtn.style.gridColumn = (i+1);
            styleBtn.style.gridRow = "1";
        } else {
            styleBtn.style.gridColumn = (i+1) - 4;
            styleBtn.style.gridRow = "2";
        }
        styleBtn.style.backgroundImage = "linear-gradient(to right,"+ styles[i].main +","+ styles[i].sub +")"
        setClasses(styleBtn,["clickable","noDefaultBorder","style","quickTransition"]);
        if(user.theme === i){
            setClasses(styleBtn,["styleSelected"]);
        }
        styleCont.appendChild(styleBtn);

        styleBtn.addEventListener("click", e =>{
            user.theme = i;
            saveUserChanges();
            saveProjectChanges();
            renderProjectInfo(project);
            refreshBoard();
        })
    }

    saveProjectChanges();
}