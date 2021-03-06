function renderTaskColor(task,parent){
    const colorType = newElem("input");
        colorType.id = "colorType";
        colorType.value = task.color;
        colorType.setAttribute("type","text");
        colorType.setAttribute("placeholder","Type here to set task color");
        colorType.classList.add("taskColorSet");
        colorType.addEventListener("keyup", e => {
            colorType.style.backgroundColor = colorType.value;
        });
        colorType.style.backgroundColor = colorType.value;
        parent.appendChild(colorType);
        
    // If the pallette needs changing that can be done here
    let defaultPalette = [
        ["#747474", "#929292", "#c4c4c4", "#e7e7e7", "#fcfcfc"],
        ["#6eb5ff", "#ace7ff", "#85e3ff", "#c4faf8", "#aff8db"],
        ["#bffcc6", "#dbffd6", "#f3ffe3", "#ffffd1", "#f7e368"],
        ["#ffabab", "#ffc9de", "#ecd4ff", "#fcc2ff", "#f6a6ff"]
    ]

    const colorPickContainer = newElem("div");
    colorPickContainer.classList.add("taskColorPick")
    for(let i = 0; i < defaultPalette.length; i++){
        for(let j = 0; j < defaultPalette[i].length; j++){
            const newColor = newElem("button");
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