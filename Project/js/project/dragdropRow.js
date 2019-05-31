let draggingRow = false;

function dragDropRow(task, cIndex, rIndex){
    task.setAttribute("draggable","true");

    task.addEventListener("dragstart", e => {
        e.dataTransfer.setData("column", cIndex);
        e.dataTransfer.setData("row", rIndex);
        e.dataTransfer.setData("isRow", true);
        task.style.opacity = "0.05"
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
        task.style.opacity = "1"
    })

    task.addEventListener("drop", e =>{
        task.style.borderTop = "solid 0px #8dbdd8"
        if(!draggingColumn){
            let pc = project.columns;
            let cTarget = cIndex;
            let rTarget = rIndex;
            let cData = parseInt(e.dataTransfer.getData("column"));
            let rData = parseInt(e.dataTransfer.getData("row"));
            
            console.log(pc[cData].tasks[rData]);
            console.log("Above Task Moved From Column: " + cData + " to Column: " + cTarget);
            console.log("Above Task Moved From Row: " + rData + " to Row: " + rTarget);
            
            if(cTarget !== cData){
                let thisColumn = pc[cTarget];
                let dataColumn = pc[cData];
                thisColumn.tasks.splice(rTarget,0,dataColumn.tasks[rData]);
                dataColumn.tasks.splice(rData,1);
            } else if(rTarget !== rData){
                let taskList = pc[cTarget].tasks;
                taskList.splice(rTarget,0,taskList[rData]);
                if(rTarget < rData){
                    rData++;
                    taskList.splice(rData,1);
                } else if (rTarget > rData){
                    if(rData !== 0){
                        rData--;
                    }
                    taskList.splice(rData,1);
                }
            }
            refreshBoard();
        }   
    })
}

function dragDropNewRow(body, cTarget){  
    
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
            let pc = project.columns;
            let cData = parseInt(e.dataTransfer.getData("column"));
            let rData = parseInt(e.dataTransfer.getData("row"));
            console.log("Moved Task From ColRow: " + cData + "," + rData + " - To Column: " + cTarget);
    
            pc[cTarget].tasks.push(pc[cData].tasks[rData]);
    
            console.log(pc[cData].tasks[rData]);
            pc[cData].tasks.splice(rData,1);
    
            refreshBoard();
        }
    })
}