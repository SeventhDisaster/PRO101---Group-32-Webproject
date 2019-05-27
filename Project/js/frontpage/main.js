window.addEventListener("load", setup);


function setup (){
	let firstname = "Andreas";
	let lastname = "Østby";
	let fullname = firstname + " " + lastname;
	let fullnameList = document.getElementsByClassName("fullnameInput");
	console.log(fullnameList);


	fillInput(fullnameList, fullname);

}

function fillInput(arr, str) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].innerText = str;
    }
}