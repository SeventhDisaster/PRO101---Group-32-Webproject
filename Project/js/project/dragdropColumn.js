let draggingColumn = false;

function dragDropColumn(newColumn, columnHead, columnIndex){
        columnHead.setAttribute("draggable","true");
        columnHead.addEventListener("dragstart", e => {
            e.dataTransfer.setData("column", columnIndex);
            draggingColumn = true;
        });

        columnHead.addEventListener("dragover", e => {
            e.dataTransfer.dropEffect = "move";
            if(e.dataTransfer.getData("isRow") === "true"){
                newColumn.style.backgroundColor = "red";
            } else {
                newColumn.style.borderLeft = "solid 10px #8dbdd8"
                newColumn.style.borderRight = "solid 10px #8dbdd8"
                newColumn.style.backgroundColor = "#e0f7f8";
            }
            e.preventDefault();
        });

        columnHead.addEventListener("dragleave", e => {
            newColumn.style.borderLeft = "solid 0px #8dbdd8"
            newColumn.style.borderRight = "solid 0px #8dbdd8"
            newColumn.style.backgroundColor = "";
            console.log("Leave");
        });

        columnHead.addEventListener("drop", e =>{
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
            newColumn.style.borderLeft = "solid 0px #8dbdd8";
            newColumn.style.borderRight = "solid 0px #8dbdd8";
            newColumn.style.backgroundColor = "";
            refreshBoard();

            draggingColumn = false;
        })
        
    }