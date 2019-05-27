window.addEventListener("load", setup);


function setup (){
	let firstname = "Andreas";
	let lastname = "Østby";
	let fullname = firstname + " " + lastname;
	let fullnameList = document.getElementsByClassName("fullnameInput");
	console.log(fullnameList);


	fillDomList(fullnameList, fullname);

	renderTasks(getProjectsThisWeek());

}

function getProjectsThisWeek () {

	let arr = [];

	for (var i = 0; i < projects.length; i++) {
		for (var j = 0; j < projects[i].columns.length; j++) {
			var a = projects[i].columns[j];
			for (var x = 0; x < a.tasks.length; x++) {
				if(timeBetweenDate(stringToDate(a.tasks[x].due))/24 < 7) {
					arr.push(a.tasks[x]);
				}
			}	
		}
	}

	console.log(arr);

	// Not ideal, but quick fix. Efficiency is not a priority when dealing with small arrays and good time.
	
	let temp = [];
	for (var i = 0; i < arr.length; i++) {
		temp.push(arr[i].due);
	}

	let sorted = temp.sort();
	let temp2 = [];
	
	for (var j = 0; j < sorted.length; j++) {
		for (var i = 0; i < arr.length; i++) {

			if (arr[i].due === sorted[j]) {
				temp2.push(arr[i]);
				arr.splice(i, 1);
				console.log(arr);
				i--;
				break;
			}

		}
	}

	return temp2;

}	

function renderTasks (arr) {
	
	let taskContainer = document.getElementById("taskContainer");
	
	for (var i = 0; i < arr.length; i++) {
		console.log(timeBetweenDate(stringToDate(arr[i].due)));

		let time;
		if (stringToDate(arr[i].due).getDate() === new Date().getDate()) {
			time = "Today";
		} else if (timeBetweenDate(stringToDate(arr[i].due)) < 24) {
			time = "Tomorrow"
		} else {
			time = Math.ceil(timeBetweenDate(stringToDate(arr[i].due))/24) + "d";
		}
	
		let template = '<td><span class="message">' + arr[i].name + '!</span><span class="dateBox"><span>' + time + '</span></span></td>'

		let dom = document.createElement("tr");
		dom.innerHTML = template;

		console.log(taskContainer);
		taskContainer.appendChild(dom);

	}

}

function stringToDate (str) {

	let date = ["", "", ""];
	let indx = 0;

	for (var i = 0; i < str.length; i++) {
		if (str[i] === "/") {
			indx++;
			continue;
		} 
		date[indx] += str[i]
	}

	return new Date(date[2], date[1]-1, date[0]);
}

function timeBetweenDate (from, to) {

	if (!to) {
		to = from;
		from = new Date();
	}

	let difference = to.getTime() - from.getTime();

	let hours = Math.floor(difference/1000/60/60);

	return hours;

}

function fillDomList(arr, str) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].innerText = str;
    }
}