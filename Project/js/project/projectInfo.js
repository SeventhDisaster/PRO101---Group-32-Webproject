// This JS file contains info displayed on the sidebar (Project Information)

function renderProjectInfo(project){
    let name = document.getElementById("projectName");
    name.value = project.name;
    name.addEventListener("keyup", e => {
        project.name = name.value;
        tabTitle.innerText = project.name;
    })

    let tabTitle = document.getElementById("tabTitle");
    tabTitle.innerText = project.name;



    let desc = document.getElementById("projectDescription");
    desc.value = project.description;
}