// This JS file contains info displayed on the sidebar (Project Information)

function renderProjectInfo(project){
    const name = getElemById("projectName");
    name.value = project.name;
    name.addEventListener("keyup", e => {
        project.name = name.value;
        tabTitle.innerText = project.name;
    })

    const tabTitle = getElemById("tabTitle");
    tabTitle.innerText = project.name;

    const desc = getElemById("projectDescription");
    desc.value = project.description;
    desc.addEventListener("keyup", e => {
        project.description = desc.value;
    })

    const container = getElemById("teamList");

    const list = getElemById("memberListContainer");
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
            setClasses(name,["thisUser"]);
        }
        field.appendChild(name);
    }
}