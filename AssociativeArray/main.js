const todoLists = [
    {id: 1, title: '', filter: 'all'},
    {id: 2, title: '', filter: 'all'},
    {id: 3, title: '', filter: 'all'}
]
const tasks = {

    [todoLists[0].id]: [
        {id: 1, title: 'a', isDone: false},
        {id: 2, title: 's', isDone: false},
        {id: 3, title: 'd', isDone: false}
    ],


    [todoLists[1].id]: [
        {id: 1, title: 'f', isDone: false},
        {id: 2, title: 'g', isDone: false},
        {id: 3, title: 'h', isDone: false}
    ],

    [todoLists[2].id]: [
        {id: 1, title: 'j', isDone: false},
        {id: 1, title: 'k', isDone: false},
        {id: 1, title: ';', isDone: false}
    ]
}


console.log(tasks[todoLists[1].id][1])


/*https://learn.javascript.ru/destructuring-assignment#destrukturizatsiya-massiva*/
