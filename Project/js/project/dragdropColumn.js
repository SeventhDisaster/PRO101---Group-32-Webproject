let draggingColumn = false;

function dragDropColumn(newColumn, columnHead, columnIndex){
    const theme = styles[user.theme];
    
    columnHead.setAttribute("draggable","true");

    columnHead.addEventListener("dragstart", e => {
        e.dataTransfer.setData("column", columnIndex);
        newColumn.style.opacity = ".3";
        draggingColumn = true;
    });

    columnHead.addEventListener("dragover", e => {
        if(!draggingRow){
            e.dataTransfer.dropEffect = "move";
            if(e.dataTransfer.getData("isRow") === "true"){
                newColumn.style.backgroundColor = "red";
            } else {
                newColumn.style.borderLeft = "solid 10px" + theme.sub;
                newColumn.style.borderRight = "solid 10px" + theme.sub;
                newColumn.style.backgroundColor = theme.light;
            }
        }
        e.preventDefault();
    });

    columnHead.addEventListener("dragleave", e => {
        newColumn.style.borderLeft = "solid 0px" + theme.sub;
        newColumn.style.borderRight = "solid 0px" + theme.sub;
        newColumn.style.backgroundColor = "";
        console.log("Leave");
    });

    columnHead.addEventListener("dragend", e =>{
        draggingColumn = false;
        newColumn.style.opacity = "1";
    })

    columnHead.addEventListener("drop", e =>{
        if(!draggingRow){
            let targetData = columnIndex;
            let columnData = parseInt(e.dataTransfer.getData("column"));
            if(targetData !== columnData){
            }
            console.log("Item from " + columnData + " placed on " + targetData);
                
            if(targetData < columnData){
                project.columns.splice(targetData,0,project.columns[columnData]);
                columnData++;
                 if(columnData > project.columns.length - 1){
                    columnData = project.columns.length - 1;
                }
                console.log("Removed from " + columnData);
                project.columns.splice(columnData,1);
            } else if (targetData > columnData){
                project.columns.splice(targetData + 1,0,project.columns[columnData]);
                columnData;
                if(columnData < 0){
                    columnData = 0
                };
                console.log("Removed from " + columnData);
                project.columns.splice(columnData,1);
            }
            newColumn.style.borderLeft = "solid 0px" + theme.sub;;
            newColumn.style.borderRight = "solid 0px" + theme.sub;;
            newColumn.style.backgroundColor = "";
            refreshBoard();
        }
        draggingColumn = false;
    })
    
}
