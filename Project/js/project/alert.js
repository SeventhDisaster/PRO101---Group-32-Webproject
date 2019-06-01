const page = getElemById("pageContainer");

function renderAlert(type, column, row){
    const container = newElem("div");
    container.classList.add("alertContainer");
    page.appendChild(container);
    
    const fade = newElem("div");
    fade.classList.add("alertFade");
    container.appendChild(fade);

    const window = newElem("div");
    window.classList.add("alertWindow");
    container.appendChild(window);

    const warning = newElem("h1");
    warning.innerText = "Are you sure you want to deconste this " + type + "?";
    warning.classList.add("alertText");
    window.appendChild(warning);
    
    const hr = newElem("hr");
    window.appendChild(hr);

    const no = newElem("button");
    no.innerText = "No";
    setClasses(no,["alertNo","alertButton"]);
    window.appendChild(no);
    no.addEventListener("click", e =>{
        removeAlert()
    })

    const yes = newElem("button");
    yes.innerText = "Yes";
    setClasses(yes,["alertYes","alertButton"]);
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
    

    function removeAlert(){
        page.removeChild(container);
    }
}