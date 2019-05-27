let projects = [
    {
        name: "PROJECT 1",
        description: "THIS IS THE FIRST PROJECT",
        team: [001,002,003,004,005],
        columns: [
            {
                name: "To-do",
                id: 1,
                tasks: [
                    {
                        name: "Sample Task 1",
                        desc: "Description Sample",
                        due: "7/6/2019",
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
                        name: "Sample Task 2",
                        desc: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa",
                        due: "4/6/2019",
                        assignee: [004,003],
                        priority: 2,
                        subtasks: [
                            {
                                status: 0,
                                name: ""
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
                name: "In Progress",
                id: 2,
                tasks:[
                    {
                        name: "Sample Task 3",
                        desc: "Description Sample",
                        due: "2/6/2019",
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
                id: 3,
                tasks: [
                    {
                        name: "Sample Task 4",
                        desc: "Description Sample",
                        due: "2/6/2019",
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
            },
            {
                name: "Etc2",
                id: 5,
                tasks: [
        
                ]
            },
            {
                name: "Etc3",
                id: 6,
                tasks: [
        
                ]
            },
            {
                name: "Etc4",
                id: 7,
                tasks: [
        
                ]
            },
        ]
    }
]

let users = [
    {
        id: 001,
        name: "Krister Emanuelsen",
        imagePath: "ADDPATH"
    },
    {
        id: 002,
        name: "Andreas Østby",
        imagePath: "ADDPATH"
    },
    {
        id: 003,
        name: "Helene Margel",
        imagePath: "ADDPATH"
    },
    {
        id: 004,
        name: "Simen Nordli Elserud",
        imagePath: "ADDPATH"
    },
    {
        id: 005,
        name: "Zemen Tedros",
        imagePath: "ADDPATH"
    },
]
