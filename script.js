const addTask = document.getElementById("addTask");
const enterTask = document.getElementById("enterTask");
const editTask = document.getElementById("edit");
const deleteTask = document.getElementById("delete");
const clearAll = document.getElementById("clearAll");
const editTaskInput = document.getElementById("editInput");

const toDoList = document.querySelector(".list");
const contextMenu = document.querySelector(".contextMenu");

const taskArray = [];
const checkArray = [];

let taskIndex = 0;
let selectedTask = "";
let selectedTaskForEdit = "";

addTask.addEventListener("click",()=>{
    if(enterTask.value.trim() != ""){
        const taskDiv = document.createElement('div');
        taskDiv.className = `${taskIndex}`;

        const task = document.createElement('p');
        task.textContent = enterTask.value;

        const checkbox = document.createElement('div');
        checkbox.className = "taskPending";

        checkbox.addEventListener("click",(event)=>{
            if(event.currentTarget.className === "taskCompleted"){
                event.currentTarget.innerHTML = ``;
                event.currentTarget.className = "taskPending";
            }else{
                event.currentTarget.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height="2.1em" width="2.1em"><path fill="#26d317ff" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"/></svg>`;
                event.currentTarget.className = "taskCompleted";
            }
        })

        task.addEventListener("contextmenu",(event)=>{
            event.preventDefault();
            contextMenu.style.display = "block";
            contextMenu.style.left = `${event.clientX}px`;
            contextMenu.style.top = `${event.clientY}px`;
            selectedTask = event.currentTarget.parentElement.className;
            selectedTaskForEdit = event.currentTarget;
        })

        document.addEventListener("click",()=>{
            contextMenu.style.display = "none";
        })

        deleteTask.addEventListener("click",()=>{
            taskArray.forEach(divs => {
                if(divs.className === selectedTask){
                    const indexOfDiv = taskArray.indexOf(divs,0);
                    divs.remove();
                    taskArray.splice(indexOfDiv,1);
                    checkArray.splice(indexOfDiv,1);
                }
            });
        })

        clearAll.addEventListener("click",()=>{
            taskArray.forEach(divs => {
                divs.remove();
                taskArray.shift();
                checkArray.shift();
            });
        })

        editTask.addEventListener("click",(event)=>{
            editTaskInput.style.display = "block";
            editTaskInput.style.left = `${event.clientX}px`;
            editTaskInput.style.top = `${event.clientY}px`;
        })

        editTaskInput.addEventListener("keydown",(event)=>{
            if(event.key === "Enter"){
                if(editTaskInput.value.trim() != ''){
                    selectedTaskForEdit.textContent = editTaskInput.value;
                    editTaskInput.style.display = "none";
                }else{
                    alert("Enter something");
                }
            }
        })

        taskDiv.appendChild(task);
        taskDiv.appendChild(checkbox);

        taskArray.push(taskDiv);
        checkArray.push(checkbox);

        taskIndex += 1;

        toDoList.appendChild(taskDiv);
    }else{
        alert("ENTER A TASK");
    }
})

enterTask.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        if(enterTask.value.trim() != ""){
        const taskDiv = document.createElement('div');
        taskDiv.className = `${taskIndex}`;

        const task = document.createElement('p');
        task.textContent = enterTask.value;

        const checkbox = document.createElement('div');
        checkbox.className = "taskPending";

        checkbox.addEventListener("click",(event)=>{
            if(event.currentTarget.className === "taskCompleted"){
                event.currentTarget.innerHTML = ``;
                event.currentTarget.className = "taskPending"
            }else{
                event.currentTarget.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height="2.1em" width="2.1em"><path fill="#6acd18" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"/></svg>`;
                event.currentTarget.className = "taskCompleted";
            }
        })

        task.addEventListener("contextmenu",(event)=>{
            event.preventDefault();
            contextMenu.style.display = "block";
            contextMenu.style.left = `${event.clientX}px`;
            contextMenu.style.top = `${event.clientY}px`;
            selectedTask = event.currentTarget.parentElement.className;
            selectedTaskForEdit = event.currentTarget;
        })

        document.addEventListener("click",()=>{
            contextMenu.style.display = "none";
        })

        deleteTask.addEventListener("click",()=>{
            taskArray.forEach(div => {
                if(div.className === selectedTask){
                    const indexOfDiv = taskArray.indexOf(div,0);
                    div.remove();
                    taskArray.splice(indexOfDiv,1);
                    checkArray.splice(indexOfDiv,1);
                }
            });
        })

        editTask.addEventListener("click",(event)=>{
            editTaskInput.style.display = "block";
            editTaskInput.style.left = `${event.clientX}px`;
            editTaskInput.style.top = `${event.clientY}px`;
        })

        editTaskInput.addEventListener("keydown",(event)=>{
            if(event.key === "Enter"){
                if(editTaskInput.value.trim() != ''){
                    selectedTaskForEdit.textContent = editTaskInput.value;
                    editTaskInput.style.display = "none";
                }else{
                    alert("Enter something");
                }
            }
        })

        clearAll.addEventListener("click",()=>{
            taskArray.forEach(div => {
                div.remove();
                taskArray.shift();
                checkArray.shift();
            });
        })

        taskDiv.appendChild(task);
        taskDiv.appendChild(checkbox);

        taskArray.push(taskDiv);
        checkArray.push(checkbox);

        taskIndex += 1;

        toDoList.appendChild(taskDiv);
    }
    }
    
})