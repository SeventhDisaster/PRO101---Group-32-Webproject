// This file is used for error page rendering.
// If no target project is input in the URL it will give project not found.

function render404page(page, projectID, validUser){
    console.log(validUser);
    const sidebar = getElemById("sidebarContainer");
    sidebar.style.display = "none";

    const title = newElem("h1");
    setClasses(title,["notFoundJoke","centerText","fullWidth"]);
    page.appendChild(title)
    if((projectID < projects.length && projectID >= 0) && !validUser){
        title.innerText = "Permission Denied!"
    } else {
        title.innerText = "Oh no, you're in trouble";
    }


    const actualTitle = newElem("h3");
    if((projectID < projects.length && projectID >= 0) && !validUser){
        actualTitle.innerText = "You are not a part of this project's team. You do not have access to it."
    } else {
        actualTitle.innerText = "Just kidding, this is a 404 - Not Found error message. Your project wasn't found.."
    }

    page.appendChild(actualTitle);
    setClasses(actualTitle,["notFoundText","centerText","fullWidth"]);

    const goBack = newElem("button");
    setClasses(goBack,["noDefaultBorder","clickable", "fullWidth", "notFoundBtn","shadow","quickTransition"]);
    goBack.innerText = "Click here to go back to the project page";
    goBack.addEventListener("click", e => {
        redirectTo("dashboard.html"); //Change to project page later
    })
    page.appendChild(goBack);
    

}