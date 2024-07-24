document.addEventListener('DOMContentLoaded', function() {

    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    //Add Task function
    function addTask() {
        var taskText = taskInput.value.trim()
        const liElement = document.createElement("li");

        if(taskText === "") {
            alert("Please Enter a task");
        }else{
            liElement.textContent = taskText;

            //Remove button
            var removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.className = "remove-btn";

            removeButton.onclick = function() {
                taskList.removeChild(liElement);
            }
            liElement.appendChild(removeButton);
            taskList.appendChild(liElement);

            taskInput.value = '';
        }
    }
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if(event.key === 'Enter') {
            addTask();
        }
    })
    document.addEventListener('DOMContentLoaded', addTask);
});