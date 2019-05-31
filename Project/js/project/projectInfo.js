// This JS file contains info displayed on the sidebar (Project Information)

function renderProjectInfo(project){
    let name = getElemById("projectName");
    name.value = project.name;
    name.addEventListener("keyup", e => {
        project.name = name.value;
        tabTitle.innerText = project.name;
    })

    let tabTitle = getElemById("tabTitle");
    tabTitle.innerText = project.name;



    let desc = getElemById("projectDescription");
    desc.value = project.description;
}