

    const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById
("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

if(taskText !==""){

const listItem = document.createElement ("li");
listItem.innerHTML = `
<span>${taskText}</span>
<button onclick="deleteTask(this)">Delete</
button>
`  
taskList.appendChild(listItem);

taskInput.value = "" ;
}    

}

function deleteTask(button){
    const listItem = button.parentElement;
    taskList.removeChild(listItem);

}
