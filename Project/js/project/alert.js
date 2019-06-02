const page = getElemById("pageContainer");
const container = getElemById("alertContainer");

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

    

    function removeAlert(){
        container.style.top = "-100vh"; //Slide up
        container.style.opacity = "0"; //Disappear
    }
}