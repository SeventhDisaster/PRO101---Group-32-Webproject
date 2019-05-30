function dragDropColumn(newColumn, columnHead, columnIndex){
        columnHead.setAttribute("draggable","true");
        columnHead.addEventListener("dragstart", e => {
            e.dataTransfer.setData("column", columnIndex);
        });

        newColumn.addEventListener("dragover", e => {
            e.dataTransfer.dropEffect = "move";
            newColumn.classList.add("incomingColumn");
            e.preventDefault();
        });

        newColumn.addEventListener("dragenter", e => {
            newColumn.classList.add("incomingColumn");
        });

        newColumn.addEventListener("dragleave", e => {
            newColumn.classList.remove("incomingColumn");
        });

        newColumn.addEventListener("drop", e =>{
            newColumn.classList.remove("incomingColumn");
            let targetData = columnIndex;
            let columnData = parseInt(e.dataTransfer.getData("column"));
            if(targetData !== columnData){
                project.columns.splice(targetData,0,project.columns[columnData]);
            }
            console.log("Item from " + columnData + " placed on " + targetData);

            if(targetData < columnData){
                columnData++;
                if(columnData > project.columns.length - 1){
                    columnData = project.columns.length - 1;
                }
                console.log("Removed from " + columnData);
                project.columns.splice(columnData,1);
            } else if (targetData > columnData){
                columnData;
                if(columnData < 0){
                    columnData = 0
                };
                console.log("Removed from " + columnData);
                project.columns.splice(columnData,1);
            }
            refreshBoard();
        })
    }