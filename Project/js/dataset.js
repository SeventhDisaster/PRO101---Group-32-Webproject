let projects = [
    {
        projectName: "PROJECT 1",
        projectDescription: "THIS IS THE FIRST PROJECT",
        projectTeam: [001,002,003,004,005],
        columns: [
            {
                columnName: "To-do",
                columnId: 1,
                tasks: [
                    {
                        taskName: "Sample Task 1",
                        taskDesc: "Description Sample",
                        taskId: 1,
                        taskDue: "7/6/2019",
                        taskAssignee: [001,002],
                        taskPriority: 1
                    },
                    {
                        taskName: "Sample Task 2",
                        taskDesc: "Description Sample",
                        taskId: 2,
                        taskDue: "4/6/2019",
                        taskAssignee: [004,003],
                        taskPriority: 2
                    }
                ]
            },
            {
                columnName: "In Progress",
                columnId: 2,
                tasks:[
                    {
                        taskName: "Sample Task 3",
                        taskDesc: "Description Sample",
                        taskId: 3,
                        taskDue: "2/6/2019",
                        taskAssignee: [005],
                        taskPriority: 3
                    }
                ]
            },
            {
                columnName: "Completed",
                columnId: 3,
                tasks: [
                    {
                        taskName: "Sample Task 4",
                        taskDesc: "Description Sample",
                        taskId: 3,
                        taskDue: "2/6/2019",
                        taskAssignee: [000], // Assigned 000 = No assignment. 
                        taskPriority: 3
                    }
                ]
            },
            {
                columnName: "Etc",
                columnId: 4,
                tasks: [
        
                ]
            },
            {
                columnName: "Etc2",
                columnId: 5,
                tasks: [
        
                ]
            },
            {
                columnName: "Etc3",
                columnId: 6,
                tasks: [
        
                ]
            },
            {
                columnName: "Etc4",
                columnId: 7,
                tasks: [
        
                ]
            },
        ]
    }
]

let users = [
    {
        userId: 001,
        userName: "Krister Emanuelsen"
    },
    {
        userId: 002,
        userName: "Andreas Østby"
    },
    {
        userId: 003,
        userName: "Helene Margel"
    },
    {
        userId: 004,
        userName: "Simen Nordli Elserud"
    },
    {
        userId: 005,
        userName: "Zemen Tedros"
    },
]
