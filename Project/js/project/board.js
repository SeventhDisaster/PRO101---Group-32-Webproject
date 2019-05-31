window.addEventListener("load", s =>{
    renderBoard();
})


let url = new URL(location.href);
let pURL = parseInt(url.searchParams.get("project"));
let projectIndex = pURL;
let project = projects[projectIndex];

projects.push(new Project("ProjectName", "Descript", [3], []));

if(pURL === undefined){
    alert("No project found");
} else {
    console.log("Loaded Project from ULR-Param: Project: " + pURL);

    let boardContainer = getElemById("boardContainer");

    renderProjectInfo(project);

    function renderBoard(){
        for(let i = 0; i < project.columns.length; i++){
            renderColumn(project.columns[i], i)
        }
        let addColumn = newElem("button");
        addColumn.classList.add("addColumnBtn");
        addColumn.innerText = "+";
        addColumn.addEventListener("click", e => {
            let addedColumn = new Column();
            project.columns.push(addedColumn);
            refreshBoard();
        })
        boardContainer.append(addColumn);

        
    }

    let cURL = parseInt(url.searchParams.get("columns"));
    if(cURL === undefined){console.log("No URL-Param for Task-Selection. No task loaded")}
    if(typeof(cURL) == "number" && cURL > -1){
        let tURL = parseInt(url.searchParams.get("tasks"));
        console.log("Loaded Task from URL-Parm:\n Project: " + pURL + "\nColumns: " + cURL + "\nTasks: " + tURL);
    
        console.log("Loaded Task:" + projects[pURL].columns[cURL].tasks[tURL]);
        renderDetailWindow(projects[pURL].columns[cURL].tasks[tURL]);
    }
    
}

//Call on this function to refresh the entire board
function refreshBoard(){
    boardContainer.innerHTML = "";
    renderBoard();
    saveProjectChanges();
}