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

function dateToString(date) {

    return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
}

function timeBetweenDate(from, to) {

    if (!to) {
        to = from;
        from = new Date();
    }

    let difference = to.getTime() - from.getTime();

    let hours = Math.floor(difference / 1000 / 60 / 60);

    return hours; // Hours difference

}

function getMonthName (month) {

	switch (month){
		case 1:
			return "January"
		break;
		case 2:
			return "February"
		break;
		case 3:
			return "Mars"
		break;
		case 4:
			return "April"
		break;
		case 5:
			return "May"
		break;
		case 6:
			return "June"
		break;
		case 7:
			return "July"
		break;
		case 8:
			return "August"
		break;
		case 9:
			return "September"
		break;
		case 10:
			return "October"
		break;
		case 11:
			return "November"
		break;
		case 12:
			return "December"
		break;
	}

}

function formatMonthToString (day, month, year) {

	if (!day) {
		let currentDate = new Date();
		day = currentDate.getDate();
		month = currentDate.getMonth()+1;
	}

	month = getMonthName(month);

	let str = "";
	str += day + ". " + month;

	if (year) {
		str += " " + year
	}

	return str; // "28. May 2019"

}