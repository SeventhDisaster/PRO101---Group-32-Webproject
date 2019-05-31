window.addEventListener("load", setup);

let fullnameList;

function setup() {

	//confirmLogin();

    let fullname = user.name;
    fullnameList = document.getElementsByClassName("fullnameInput");


    fillDomList(fullnameList, fullname);


    renderNotifications(notifications);
    renderTasks(getProjectsThisWeek());

}

function renderNotifications () {

	for (var i = 0; i < user.notifications.length; i++) {
		newNotification(user.notifications[i]);
	}

}

function newNotification(obj) {
	
	let notificationContainer = document.getElementById("notificationContainer");;
    let template = '<td onclick="window.location.href = \'' + obj.href + '\' " title="Goto"><span class="message">' + obj.msg + '</span><span class="dateBox"><span>' + obj.date + '</span></span></td>';
    let dom = document.createElement("tr");
    
    dom.innerHTML = template;
    notificationContainer.insertBefore(dom, notificationContainer.childNodes[0]);

}

function getProjectsThisWeek() {

    let arr = [];

    for (var i = 0; i < projects.length; i++) {
        for (var j = 0; j < projects[i].columns.length; j++) {
            var a = projects[i].columns[j];
            for (var x = 0; x < a.tasks.length; x++) {

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
	
	// Not ideal, but quick fix. Efficiency is not a priority when dealing with small arrays and good time.
    
    // let temp = [];
    // for (var i = 0; i < arr.length; i++) {
    //     temp.push(timeBetweenDate(stringToDate(arr[i].taskInfo.due)));
    // }



    // temp = temp.sort(function(a, b) { return a - b });
    // let temp2 = [];

    // for (var j = 0; j < temp.length; j++) {
    //     for (var i = 0; i < arr.length; i++) {

    //         if (timeBetweenDate(stringToDate(arr[i].taskInfo.due)) === temp[j]) {
    //             temp2.push(arr[i]);
    //             arr.splice(i, 1);
    //             break;
    //         }

    //     }
    // }


    let sorted = arr.sort(function (a, b){return timeBetweenDate(stringToDate(a.taskInfo.due))-timeBetweenDate(stringToDate(b.taskInfo.due))})

    return sorted;

}

function renderTasks(arr) {

    let taskContainer = document.getElementById("taskContainer");

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