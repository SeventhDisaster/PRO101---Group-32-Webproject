window.addEventListener("load", setup);

let fullnameList;

function setup() {

	confirmLogin();

    let fullname = user.name;
    fullnameList = document.getElementsByClassName("fullnameInput");


    fillDomList(fullnameList, fullname);

    let images = document.getElementsByClassName("userImage");

    for (var i = 0; i < images.length; i++) {
        images[i].src = getImage(user.id);
    }

    renderNotifications(notifications);
    renderTasks(getProjectsThisWeek());
    
    // Theme settings for the dashboard
    const theme = styles[user.theme];

    const vid = getElemById("video");
    vid.style.filter = theme.filter;

    const blocks = getElemById("blockContainer")
    blocks.style.backgroundImage = "linear-gradient(to bottom,"+ theme.main + "," + theme.sub + ")";
    
    const navBar = getElemById("navbar")
    const proAv = getElemById("projectsAvailable")
    const navProf = getElemById("navProfile");
    navBar.style.backgroundImage = "linear-gradient(to right,"+ theme.main + "," + theme.sub + ")";
    proAv.style.backgroundImage = "linear-gradient(to bottom,"+ theme.main + "," + theme.sub + ")";
    navProf.style.backgroundImage = "linear-gradient(to bottom,"+ theme.main + "," + theme.sub + ")";

    if(user.theme !== 7){
        setClasses(blocks,["blackText"]);
        setClasses(navBar,["blackText"]);
    }

    renderProjectTab();

}

function renderProjectTab () {

    let domP = getElemById("projectsAvailable");
    domP.innerHTML = "";

    var btntemp = '<span>+ Add Project +</span>';

    var btnD = newElem("div");
    btnD.innerHTML = btntemp;
    btnD.onclick = ()=>{projects.push(new Project()); saveProjectChanges(); renderProjectTab()};

    

    domP.appendChild(btnD);

    for (var i = 0; i < projects.length; i++) {
        
        if (!projects[i].team.includes(user.id)) {
            continue;
        }

        var temp = "<span onclick='redirectTo(\"board.html?project=" + i + "\")' style='width: 100%'>&nbsp;&nbsp; - " + projects[i].name + "</span> <div onclick='projects.splice(" + i + ", 1); saveProjectChanges(); renderProjectTab();' id='removeProject'>x</div>"
        var dom = newElem("div");

        dom.style.display = "flex";
        
        dom.innerHTML = temp;
        let link = 'board.html?project=' + i;
       // dom.setAttribute("onclick", "redirectTo('" + link + "')");

        domP.appendChild(dom);
    }

}

function renderNotifications () {

	for (var i = 0; i < user.notifications.length; i++) {
		newNotification(user.notifications[i]);
	}

}

function newNotification(obj) {
	
	let notificationContainer = getElemById("notificationContainer");;
    let template = '<td onclick="window.location.href = \'' + obj.href + '\' " title="Goto"><span class="message">' + obj.msg + '</span><span class="dateBox"><span>' + obj.date + '</span></span></td>';
    let dom = document.createElement("tr");
    
    dom.innerHTML = template;
    notificationContainer.insertBefore(dom, notificationContainer.childNodes[0]);

}

function getProjectsThisWeek() {

    let arr = [];

    for (var i = 0; i < projects.length; i++) {

        if (!projects[i].team.includes(user.id)) {
            continue;
        }

        for (var j = 0; j < projects[i].columns.length; j++) {
            var a = projects[i].columns[j];
            for (var x = 0; x < a.tasks.length; x++) {

                if (!a.tasks[x].due) {
                    continue;
                }

            	let hoursUntil = timeBetweenDate(stringToDate(a.tasks[x].due));
            	// console.log(hoursUntil/24);
                if (hoursUntil / 24 <= 7 && hoursUntil / 24 >= 0) {

                    arr.push({
                        taskInfo: a.tasks[x],
                        task: x,
                        columns: j,
                        project: i
                    });
                }
            }
        }
    }

    let sorted = arr.sort(function (a, b){return timeBetweenDate(stringToDate(a.taskInfo.due))-timeBetweenDate(stringToDate(b.taskInfo.due))})

    return sorted;

}

function renderTasks(arr) {

    let taskContainer = getElemById("taskContainer");

    for (var i = 0; i < arr.length; i++) {

    	let currentDate = new Date();

    	let link = 'board.html?project=' + arr[i].project + '&columns=' + arr[i].columns + '&tasks=' + arr[i].task;

        let time = getTimeTo(currentDate, stringToDate(arr[i].taskInfo.due), (e, link)=>{
            if (e === "Today") {
                console.log(link);
                newNotification({msg: "Deadline approaching!", date: formatMonthToString(), href: link});
            }
        }, link);
        

        let template = '<td onclick="window.location.href = \'' + link + '\'"><span class="message">' + arr[i].taskInfo.name + '!</span><span class="dateBox"><span>' + time + '</span></span></td>'

        let dom = document.createElement("tr");
        dom.innerHTML = template;

        taskContainer.appendChild(dom);

    }

}

function fillDomList(arr, str) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].innerText = str;
    }
}