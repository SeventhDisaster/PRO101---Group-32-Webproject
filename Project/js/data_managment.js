if (!getStorage("userCount")) {
    setStorage("userCount", 0);
}

var userCount = getStorage("userCount");


var user = getStorage("activeUser");

function confirmLogin () {

    if (!user) {
        location.href = "login.html";
    }

}

function createUser(name, password) {

    setStorage("userCount", ++userCount);

    let USER = {
        id: users.length + userCount,
        name: name,
        password: password,
        notifications: [],
        achievements: [],
        imagePath: null
    }

    setStorage(name + password, USER);

    users.push(USER);

    return USER;

}


// Debugger function
function clearStorage() {
    localStorage.clear();
}

// Sets userinfo to activeUser
function login(USER) {
    setStorage("activeUser", USER);
    location.href = "frontpage.html"
}

function logout() {
    localStorage.removeItem("activeUser");
}


function getUser(name, password) {

    // Not secure, but its what we have ¯\_(ツ)_/¯

    // Checking if user matches in the active database
    for (var i = users.length - 1; i >= 0; i--) {
        if (users[i].name === name && users[i].password === password) {

            return users[i];
        }
    }

    // Checking if user exists in local database
    return getStorage(name + password)

}

// Saves data to local computer
function setStorage(key, value) {

    if (typeof value !== "string") {
        value = JSON.stringify(value);
    }

    localStorage.setItem(key, value);

}

// Retrieves data saved from local computer
function getStorage(key) {

    let item = localStorage.getItem(key);

    // Checking if the item starts with a bracket or number
    if (/^(\{|\}|\[|\]|[0-9])/.test(item)) {
        return JSON.parse(item);
    }

    return item;

}

function getImage(id) {
    if (users[id - 1].imagePath) {
        return users[id - 1].imagePath;
    }

    return "../img/DefaultProfile.png"
}