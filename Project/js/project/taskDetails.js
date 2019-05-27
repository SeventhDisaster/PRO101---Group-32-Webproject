//This file contains the JS in-depth details on all the tasks.
function renderDetailWindow(window, task){
    let name = document.getElementById("taskName");
    name.value = task.name;

    let description = document.getElementById("taskDescription");
    description.value = task.desc;
}