let page = document.getElementById("pageContainer");

function renderAlert(type, column, row){
    let container = document.createElement("div");
    container.classList.add("alertContainer");
    page.appendChild(container);
    
    let fade = document.createElement("div");
    fade.classList.add("alertFade");
    container.appendChild(fade);

    let window = document.createElement("div");
    window.classList.add("alertWindow");
    container.appendChild(window);

    let warning = document.createElement("h1");
    warning.innerText = "Are you sure you want to delete this " + type + "?";
    warning.classList.add("alertText");
    window.appendChild(warning);
    
    let hr = document.createElement("hr");
    window.appendChild(hr);

    let no = document.createElement("button");
    no.innerText = "No";
    no.classList.add("alertNo");
    no.classList.add("alertButton");
    window.appendChild(no);
    no.addEventListener("click", e =>{
        removeAlert()
    })

    let yes = document.createElement("button");
    yes.innerText = "Yes";
    yes.classList.add("alertYes");
    yes.classList.add("alertButton");
    window.appendChild(yes);
    yes.addEventListener("click", e =>{
        if(type === "task"){
            project.columns[column].tasks.splice(row,1);
        }
        if(type === "column"){

        }
        removeAlert();
        closeDetailWindow();
        refreshBoard();
    })
    

    function removeAlert(){
        page.removeChild(container);
    }
}