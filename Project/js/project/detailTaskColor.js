function renderTaskColor(task,parent){
    let colorType = document.createElement("input");
        colorType.value = task.color;
        colorType.setAttribute("type","text");
        colorType.setAttribute("placeholder","#Hex Color");
        colorType.classList.add("taskColorSet");
        parent.appendChild(colorType);
        colorType.id = "colorType";
        
    let colorPick = document.createElement("div");
    colorPick.classList.add("taskColorPick")
    parent.appendChild(colorPick);
}