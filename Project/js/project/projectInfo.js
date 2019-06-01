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
}