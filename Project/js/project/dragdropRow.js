let draggingRow = false;

function dragDropRow(task, columnIndex, rowIndex){
    task.setAttribute("draggable","true");

    task.addEventListener("dragstart", e => {
        e.dataTransfer.setData("column", columnIndex);
        e.dataTransfer.setData("row", rowIndex);
        e.dataTransfer.setData("isRow", true);
        draggingRow = true;
    });

    task.addEventListener("dragover", e => {
        if(!draggingColumn){
            e.dataTransfer.dropEffect = "move";
            task.style.borderTop = "solid 30px #8dbdd8"
            e.preventDefault();
        }
    });

    task.addEventListener("dragleave", e => {
        task.style.borderTop = "solid 0px #8dbdd8"
    });

    task.addEventListener("dragend", e =>{
        draggingRow = false;
    })

    task.addEventListener("drop", e =>{
        task.style.borderTop = "solid 0px #8dbdd8"
        if(!draggingColumn){
            let targetColumn = columnIndex;
            let targetRow = rowIndex;
            let columnData = parseInt(e.dataTransfer.getData("column"));
            let rowData = parseInt(e.dataTransfer.getData("row"));
            
            console.log(project.columns[columnData].tasks[rowData]);
            console.log("Above Task Moved From Column: " + columnData + " to Column: " + targetColumn);
            console.log("Above Task Moved From Row: " + rowData + " to Row: " + targetRow);
            
            if(targetColumn !== columnData){
                let thisColumn = project.columns[targetColumn];
                let dataColumn = project.columns[columnData];
                thisColumn.tasks.splice(targetRow,0,dataColumn.tasks[rowData]);
                dataColumn.tasks.splice(rowData,1);
            } else if(targetRow !== rowData){
                let taskList = project.columns[targetColumn].tasks;
                taskList.splice(targetRow,0,taskList[rowData]);
                if(targetRow < rowData){
                    rowData++;
                    taskList.splice(rowData,1);
                } else if (targetRow > rowData){
                    if(rowData !== 0){
                        rowData--;
                    }
                    taskList.splice(rowData,1);
                }
            }
            refreshBoard();
        }   
    })
}

function dragDropNewRow(body, targetColumn){  
    
    body.addEventListener("dragover", e => {
        if(!draggingColumn){
            e.dataTransfer.dropEffect = "move";
            body.style.borderTop = "solid 30px #8dbdd8";
        }
        e.preventDefault();
    })
    
    body.addEventListener("dragleave", e =>{
        if(!draggingColumn){
            body.style.borderTop = "solid 0px #8dbdd8"
        }
    })
    
    body.addEventListener("drop", e => {
        body.style.borderTop = "solid 0px #8dbdd8"
        if(!draggingColumn){
            let columnData = parseInt(e.dataTransfer.getData("column"));
            let rowData = parseInt(e.dataTransfer.getData("row"));
    
            console.log("Moved Task From ColRow: " + columnData + "," + rowData + " - To Column: " + targetColumn);
    
            project.columns[targetColumn].tasks.push(project.columns[columnData].tasks[rowData]);
    
            console.log(project.columns[columnData].tasks[rowData]);
            project.columns[columnData].tasks.splice(rowData,1);
    
            refreshBoard();
        }
    })
}