window.addEventListener("load", s =>{
    renderBoard();
})

let url = new URL(location.href);
let pURL = parseInt(url.searchParams.get("project"));
let projectIndex = pURL;
let project = projects[projectIndex];

if(pURL === undefined){
    alert("No project found");
} else {
    let tabTitle = document.getElementById("tabTitle");
    tabTitle.innerText = project.name;

    let boardContainer = document.getElementById("boardContainer");
    function renderBoard(){
        for(let i = 0; i < project.columns.length; i++){
            renderColumn(project.columns[i], i)
        }
        let newColumnBtn = document.createElement("button");
        newColumnBtn.classList.add("addColumnBtn");
        newColumnBtn.innerText = "+";
        newColumnBtn.addEventListener("click", e => {
            let addedColumn = new Column(prompt("Column Name"), []); // DO LATER
            project.columns.push(addedColumn);
            refreshBoard();
        })
        boardContainer.append(newColumnBtn);

        
        console.log("Loaded Project from ULR-Param: Project: " + pURL);
        if(typeof(pURL) == "number"){
            let cURL = parseInt(url.searchParams.get("columns"));
            if(cURL === undefined){console.log("No URL-Param for Task-Selection. No task loaded")}
            if(typeof(cURL) == "number" && cURL > -1){
                let tURL = parseInt(url.searchParams.get("tasks"));
                console.log("Loaded Task from URL-Parm:\n Project: " + pURL + "\nColumns: " + cURL + "\nTasks: " + tURL);
            
                console.log("Loaded Task:" + projects[pURL].columns[cURL].tasks[tURL]);
                renderDetailWindow(projects[pURL].columns[cURL].tasks[tURL]);
            }
        }
    }
}