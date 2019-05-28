window.addEventListener("load", setup);

let notifications = [{
	msg: "Added to project!",
	date: "7. May",
	href: "board.html?project=0"
}, {
	msg: "New message from Andreas!",
	date: "3. May",
	href: "board.html?project=0"
}];

let fullnameList;


function setup() {
    let firstname = "Andreas";
    let lastname = "Østby";
    let fullname = firstname + " " + lastname;
    fullnameList = document.getElementsByClassName("fullnameInput");


    fillDomList(fullnameList, fullname);

    renderNotifications(notifications);
    renderTasks(getProjectsThisWeek());

}

function renderNotifications (arr) {

	for (var i = notifications.length - 1; i >= 0; i--) {
		newNotification(notifications[i].msg, notifications[i].date, notifications[i].href);
	}

}

function newNotification(msg, date, href) {
	
	let notificationContainer = document.getElementById("notificationContainer");;
    let template = '<td onclick="window.location.href = \'' + href + '\' " title="Goto"><span class="message">' + msg + '</span><span class="dateBox"><span>' + date + '</span></span></td>';
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
            	let hoursUntil = timeBetweenDate(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()), stringToDate(a.tasks[x].due));
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

function monthToString (day, month, year) {

	switch (month){
		case 1:
			month = "January"
		break;
		case 2:
			month = "February"
		break;
		case 3:
			month = "Mars"
		break;
		case 4:
			month = "April"
		break;
		case 5:
			month = "May"
		break;
		case 6:
			month = "June"
		break;
		case 7:
			month = "July"
		break;
		case 8:
			month = "August"
		break;
		case 9:
			month = "September"
		break;
		case 10:
			month = "October"
		break;
		case 11:
			month = "November"
		break;
		case 12:
			month = "December"
		break;
	}


	let str = "";
	str += day + ". " + month;

	if (year) {
		str += " " + year
	}

	return str;

}

function renderTasks(arr) {

    let taskContainer = document.getElementById("taskContainer");

    for (var i = 0; i < arr.length; i++) {

    	let currentDate = new Date();

    	let link = 'board.html?project=' + arr[i].project + '&columns=' + arr[i].columns + '&task=' + arr[i].task;

        let time;
        if (stringToDate(arr[i].taskInfo.due).getDate() === currentDate.getDate()) {
            time = "Today";
           
            newNotification("Deadline approaching!", monthToString(currentDate.getDate(), currentDate.getMonth()+1), link);
        
        } else if (stringToDate(arr[i].taskInfo.due).getDate() === currentDate.getDate()+1) {
            time = "Tomorrow"
        } else {
            time = Math.ceil(timeBetweenDate(stringToDate(arr[i].taskInfo.due)) / 24) + "d";
        }

        let template = '<td onclick="window.location.href = \'' + link + '\'"><span class="message">' + arr[i].taskInfo.name + '!</span><span class="dateBox"><span>' + time + '</span></span></td>'

        let dom = document.createElement("tr");
        dom.innerHTML = template;

        taskContainer.appendChild(dom);

    }

}

function stringToDate(str) {

    let date = ["", "", ""];
    let indx = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === "/") {
            indx++;
            continue;
        }
        date[indx] += str[i]
    }

    return new Date(date[2], date[1] - 1, date[0]);
}

function timeBetweenDate(from, to) {

    if (!to) {
        to = from;
        from = new Date();
    }

    let difference = to.getTime() - from.getTime();

    let hours = Math.floor(difference / 1000 / 60 / 60);

    return hours;

}

function fillDomList(arr, str) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].innerText = str;
    }
}