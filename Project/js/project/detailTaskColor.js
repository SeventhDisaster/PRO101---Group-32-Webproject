function renderTaskColor(task,parent){
    let colorType = document.createElement("input");
        colorType.id = "colorType";
        colorType.value = task.color;
        colorType.setAttribute("type","text");
        colorType.setAttribute("placeholder","#Hex Color");
        colorType.classList.add("taskColorSet");
        colorType.addEventListener("keyup", e => {
            colorType.style.backgroundColor = colorType.value;
        });
        colorType.style.backgroundColor = colorType.value;
        parent.appendChild(colorType);
        

    let defaultPalette = [
        ["#747474", "#929292", "#c4c4c4", "#e7e7e7", "#fcfcfc"],
        ["#4076e0", "#4097e0", "#40bfe0", "#40d7e0", "#74ff8b"],
        ["#ff6699", "#ff8c73", "#ffab54", "#ffd12e", "#eeee77"],
        ["#fdff49", "#fff84d", "#ffef4d", "#ffe651", "#ffde57"]
    ]

    let colorPickContainer = document.createElement("div");
    colorPickContainer.classList.add("taskColorPick")
    for(let i = 0; i < defaultPalette.length; i++){
        for(let j = 0; j < defaultPalette[i].length; j++){
            let newColor = document.createElement("button");
            newColor.classList.add("taskColorBox");
            newColor.style.backgroundColor = defaultPalette[i][j];
            newColor.addEventListener("click", e => {
                colorType.value = defaultPalette[i][j];
                colorType.style.backgroundColor = colorType.value;
            });
            newColor.style.gridRow = [i+1];
            newColor.style.gridColumn = [j+1];
            colorPickContainer.appendChild(newColor);
        }
    }

    parent.appendChild(colorPickContainer);
}