//Load Project on page load completion
window.addEventListener("load", s =>{
    renderBoard(); 
})

/* =========================================================================================================== */
/* Requirements to gain access to the NexTask board page:                                                      */
/*                                                                                                             */
/* 1: User must be logged in - If not, redirects to login page                                                 */
/* 2: User must be part of the project team - If not, Permission denied page (project404.js)                   */
/* 3: Project must be requested in the URL (../board.html?project=index") and...                               */
/*    the project must exist in the projects array (dataset.js). - If not, 404 not found page (project404.js)  */
/* =========================================================================================================== */

let url = new URL(location.href);
let pURL = parseInt(url.searchParams.get("project"));
let projectIndex = pURL;
let project = projects[projectIndex];
const boardContainer = getElemById("boardContainer");

confirmLogin(); //Make sure a user is logged in

//Make sure the current user is part of the project
let validUser = false;
if((pURL >= 0 && pURL < projects.length) && pURL !== NaN){
    if(project.team.includes(user.id)){
        validUser = true; 
    }
}

// Make sure project exists in the dataset
if(url.searchParams.get("project") === null || pURL >= projects.length || !validUser){
    render404page(boardContainer, pURL, validUser) //User not allowed to view project

} else {
    console.log("Loaded Project from ULR-Param: Project: " + pURL);
    console.log("Logged in as user: " + user.name);
    
    renderProjectInfo(project);

    function renderBoard(){
        for(let i = 0; i < project.columns.length; i++){
            renderColumn(project.columns[i], i)
        }

        const theme = styles[user.theme];
        boardContainer.style.backgroundColor= theme.light;

        const addColumn = newElem("button");
        addColumn.classList.add("addColumnBtn");
        addColumn.innerText = "+";
        addColumn.addEventListener("click", e => {
            const addedColumn = new Column();
            project.columns.push(addedColumn);
            refreshBoard();
        })
        boardContainer.append(addColumn);        
    }

    const cURL = parseInt(url.searchParams.get("columns"));
    if(cURL === undefined){console.log("No URL-Param for Task-Selection. No task loaded")}
    if(typeof(cURL) == "number" && cURL > -1){
        const tURL = parseInt(url.searchParams.get("tasks"));
        console.log("Loaded Task from URL-Parm:\n Project: " + pURL + "\nColumns: " + cURL + "\nTasks: " + tURL);
    
        console.log("Loaded Task:" + projects[pURL].columns[cURL].tasks[tURL]);
        renderDetailWindow(projects[pURL].columns[cURL].tasks[tURL]);
    }
}

//Call on this function to refresh the entire board
function refreshBoard(){
    boardContainer.innerHTML = "";
    saveProjectChanges();
    renderBoard();
}