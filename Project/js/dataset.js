//This file contains the dataset used to store information for the project.
//Normally, this would be done using a database instead, but for prototype purposes, data is stored as Javascript objects.

//Data
function column(name, tasks){
    this.name = name;
    this.tasks = tasks;
}

function task(name,desc,due,color,assignee,priority,subtasks){
    this.name = name;
    this.desc = desc;
    this.due = due;
    this.color = color;
    this.assignee = assignee;
    this.priority = priority;
    this.subtasks = subtasks;
}



let projects = [
    {
        name: "PROJECT 1",
        description: "THIS IS THE FIRST PROJECT",
        team: [001,002,003,004,005],
        columns: [
            {
                name: "To-do",
                tasks: [
                    {
                        name: "Make the board page",
                        desc: "Description Sample",
                        due: "7/6/2019",
                        color: "#c3c3c3",
                        assignee: [001,002],
                        priority: 1,
                        subtasks: [
                            {
                                status: 0,
                                name: "Sample incomplete subtask 1"
                            },
                            {
                                status: 1,
                                name: "Sample complete subtask"
                            }

                        ]
                    },
                    {
                        name: "Create some fancy CSS",
                        desc: "Like how long lines get cut short! AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                        due: "4/6/2019",
                        color: "#c3c3c3",
                        assignee: [004,003],
                        priority: 2,
                        subtasks: []
                    },
                    {
                        name: "Implement detail window",
                        desc: "A lot more complex than expected",
                        due: "4/6/2019",
                        color: "#c3c3c3",
                        assignee: [004,003],
                        priority: 2,
                        subtasks: []
                    },
                    {
                        name: "Cry",
                        desc: "Life is suffering :')",
                        due: "4/6/2019",
                        color: "#c3c3c3",
                        assignee: [004,003],
                        priority: 2,
                        subtasks: []
                    },
                    {
                        name: "Figure things out",
                        desc: "Do things with that.",
                        due: "4/6/2019",
                        color: "#c3c3c3",
                        assignee: [004,003],
                        priority: 2,
                        subtasks: []
                    }
                ]
            },
            {
                name: "In Progress",
                tasks:[
                    {
                        name: "Sample Task 3",
                        desc: "Description Sample",
                        due: "2/6/2019",
                        color: "#c3c3c3",
                        assignee: [005],
                        priority: 3,
                        subtasks: [
                            {
                                status: 0,
                                name: "Sample incomplete subtask 1"
                            },
                            {
                                status: 1,
                                name: "Sample complete subtask"
                            }

                        ]
                    }
                ]
            },
            {
                name: "Completed",
                tasks: [
                    {
                        name: "Sample Task 4",
                        desc: "Description Sample",
                        due: "2/6/2019",
                        color: "#c3c3c3",
                        assignee: [000], // Assigned 000 = No assignment. 
                        priority: 3,
                        subtasks: [
                            {
                                status: 0,
                                name: "Sample incomplete subtask 1"
                            },
                            {
                                status: 1,
                                name: "Sample complete subtask"
                            }

                        ]
                    }
                ]
            },
            {
                name: "Etc",
                id: 4,
                tasks: [
        
                ]
            }
        ]
    }
]

function getImage (id) {
    if (users[id-1].imagePath) {
        return users[id-1].imagePath;
    }

    return "../img/DefaultProfile.png"
}

//Sample Userlist
let users = [
    {
        id: 001,
        name: "Krister Emanuelsen",
        imagePath: "../img/Profile_pictures/Krister.jpg"
    },
    {
        id: 002,
        name: "Andreas Østby",
        imagePath: "../img/Profile_pictures/Andreas.jpg"
    },
    {
        id: 003,
        name: "Helene Margel",
        imagePath: "../img/Profile_pictures/Helene.jpg"
    },
    {
        id: 004,
        name: "Simen Nordli Elserud",
        imagePath: "../img/Profile_pictures/Simen.jpg"
    },
    {
        id: 005,
        name: "Zemen Tedros",
        imagePath: "../img/Profile_pictures/Zemen.jpg"
    },
]
