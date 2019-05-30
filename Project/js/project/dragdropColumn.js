function allowColumnDrop(e){
    e.preventDefault();
}

function dragColumn(e){
    e.preventDefault();
    e.dataTransfer.setData("Soup","Hello");
}

function dropColumn(e){
    e.preventDefault();
    let columnData = e.dataTransfer.getData("Soup");
    alert(columnData);
}



