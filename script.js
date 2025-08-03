const addTask = document.getElementById("addTask");
const enterTask = document.getElementById("enterTask");
const toDoList = document.querySelector(".list")

const taskArray = [];
let taskIndex = 0;

addTask.addEventListener("click",()=>{
    if(enterTask.value.trim() != ""){
        const task = document.createElement('li');
        task.className = `task${taskIndex}`;

        task.style.width = "60%";
        task.style.height = "2em";
        task.style.margin = "1em 0 0 0.75em";
        task.style.fontSize = "1.75em";
        task.textContent = enterTask.value;

        taskArray.push(task);
        taskIndex += 1;

        toDoList.appendChild(task);
    }else{
        alert("ENTER A TASK");
    }
})

console.log(taskArray)
