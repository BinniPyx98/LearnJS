

const students=[
    {Name:"Bob", Age:20,isMarried:false,scores:110},
    {Name:"Ana", Age:23,isMarried:false,scores:120},
    {Name:"Alex", Age:20,isMarried:true,scores:130},
    {Name:"Gin", Age:50,isMarried:false,scores:130}
]
console.log(students.map(student=>student.Name))

function map(arr,callback){
    const newArr=[]
    for(let i=0;i<arr.length;i++){
newArr[i]=callback(arr[i])

    }

    return newArr;
}

function filter(arr,callback){
    const newArr=[]
    for (let i=0;i<arr.length;i++){
        callback(arr[i])&&newArr[i].push(arr[i])
    }
}

function find(arr,callback){

    for (let i=0;i<arr.length;i++){
        if(callback(arr[i])) return arr[i]
    }
}

/*https://learn.javascript.ru/destructuring-assignment#destrukturizatsiya-massiva*/
