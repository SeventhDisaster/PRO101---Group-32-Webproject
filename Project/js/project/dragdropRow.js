function dragDropRow(task, columnIndex, rowIndex){
    task.setAttribute("draggable","true");

    task.addEventListener("dragstart", e => {
        e.dataTransfer.setData("column", columnIndex);
        e.dataTransfer.setData("row", rowIndex);
        e.dataTransfer.setData("isRow", true);
    });

    task.addEventListener("dragover", e => {
        e.dataTransfer.dropEffect = "move";
        task.classList.add("incomingRow");
        e.preventDefault();
    });

    task.addEventListener("dragenter", e => {
        task.classList.add("incomingRow");
    });

    task.addEventListener("dragleave", e => {
        task.classList.remove("incomingRow");
    });

    task.addEventListener("drop", e =>{
        task.classList.remove("incomingRow");
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
    })
}