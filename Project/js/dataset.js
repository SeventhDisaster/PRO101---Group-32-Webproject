//This file contains the dataset used to store information for the project.
//Normally, this would be done using a database instead, but for prototype purposes, data is stored as Javascript objects.

//Data
const instructionTask = "Click on tasks to open the task editor." +
"\nUse the task editor to change task details and/or complete and delete them." +
"\nYou can assign members by clicking on the little + icon in the editor, and you can unassign them by clicking on their icons in the assigned members list" +
"\nYou can click-and-drag Tasks and Columns on the board to organize your project however you want" +
"\n\nGet your projects moving with NexTask!";

function Project(name = "", description = "", team = [], columns = [new Column("To Do:",[new Task("Create your project",instructionTask)]), new Column("In Progress",[]), new Column("Complete:",[])]){
    this.name = name;
    this.description = description;
    this.team = team;
    this.columns = columns;
}

function Column(name = "", tasks = []){
    this.name = name;
    this.tasks = tasks;
}

function Task(name = "", desc = "", due = null, color = null, assignee = [] , priority = 0, isComplete = false, subtasks = []){
    this.name = name;
    this.desc = desc;
    this.due = due;
    this.color = color;
    this.assignee = assignee;
    this.priority = priority;
    this.isComplete = isComplete;
    this.subtasks = subtasks;
}

function Subtask(status = false, name = ""){
    this.isComplete = status;
    this.name = name;
}

let projects = [
    {
        name: "NexTask Initiation Project",
        description: "This is a test project on NexTask.\n\nAn agile project management service that takes basis on the 'Kanban' whiteboard task management workflow.\n\nThe service allows for easy creation and management of tasks upon several additional quality of work options.\n\nThis project serves as our PRO101 exam prototype.\nMade by: Krister, Andreas, Simen, Helene & Zemen",
        team: [1,2,3,4,5],
        columns: [
            {
                name: "To-do",
                tasks: [
                    {
                        name: "Make the board page",
                        desc: "Description Sample",
                        due: "2019-05-31",
                        color: null,
                        assignee: [1,2],
                        priority: 1,
                        isComplete: false,
                        subtasks: [
                            {
                                isComplete: false,
                                name: "This subtask should be INCOMPLETE"
                            },
                            {
                                isComplete: true,
                                name: "This one IS completed!"
                            }

                        ]
                    },
                    {
                        name: "Create some fancy CSS",
                        desc: "Like how long lines get cut short! AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                        due: "2019-06-01",
                        color: null,
                        assignee: [4,3],
                        priority: 2,
                        isComplete: false,
                        subtasks: []
                    },
                    {
                        name: "Implement detail window",
                        desc: "A lot more complex than expected",
                        due: "2019-07-06",
                        color: null,
                        assignee: [4,3],
                        priority: 2,
                        isComplete: true,
                        subtasks: []
                    },
                    {
                        name: "Cry",
                        desc: "Life is suffering :')",
                        due: "2019-07-06",
                        color: null,
                        assignee: [4,3],
                        priority: 2,
                        isComplete: true,
                        subtasks: []
                    },
                    {
                        name: "Figure things out",
                        desc: "Do things with that.",
                        due: "2019-07-06",
                        color: null,
                        assignee: [4,3],
                        priority: 2,
                        isComplete: false,
                        subtasks: []
                    }
                ]
            },
            {
                name: "In Progress",
                tasks:[
                    {
                        name: "Fix Drag-&-Drop bugs",
                        desc: "This one involves dragging to an unspecified index.",
                        due: "2019-06-06",
                        color: null,
                        assignee: [1],
                        priority: 2,
                        isComplete: false,
                        subtasks: [
                            {
                                isComplete: false,
                                name: "'I am tired...' ~ Krister 30.5.2019"
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
                        due: "2019-06-06",
                        color: null,
                        assignee: [], //Empty Array - No Assignment
                        priority: 2,
                        isComplete: true,
                        subtasks: [
                            {
                                isComplete: false,
                                name: "This subtask should be INCOMPLETE"
                            },
                            {
                                isComplete: true,
                                name: "This one IS completed!"
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

//Sample Userlist
let users = [
    {
        id: 1,
        name: "Krister Emanuelsen",
        password: "KaffeIsLoveKaffeIsLife",
        imagePath: "../img/Profile_pictures/Krister.jpg",
        notifications: [],
        achievements: []
    },
    {
        id: 2,
        name: "Andreas Østby",
        password: "correct horse battery staple",
        imagePath: "../img/Profile_pictures/Andreas.jpg",
        notifications: [],
        achievements: []
    },
    {
        id: 3,
        name: "Helene Margel",
        password: "123456789",
        imagePath: "../img/Profile_pictures/Helene.jpg",
        notifications: [],
        achievements: []
    },
    {
        id: 4,
        name: "Simen Nordli Elserud",
        password: "password432",
        imagePath: "../img/Profile_pictures/Simen.jpg",
        notifications: [],
        achievements: []
    },
    {
        id: 5,
        name: "Zemen Tedros",
        password: "password123",
        imagePath: "../img/Profile_pictures/Zemen.jpg",
        notifications: [],
        achievements: []
    },
]
