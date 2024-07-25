document.addEventListener('DOMContentLoaded', function() {

    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    //Retrieving task list
    function loadTasks() {
        const storedTask = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTa.forEach(taskText => addTask(taskText, false));

    }

    //Add Task function
    function addTask(taskText, save = true) {
        var taskText = taskInput.value.trim()
        const liElement = document.createElement("li");

        if(taskText === "") {
            alert("Please Enter a task");
        }else{
            liElement.textContent = taskText;

            //Remove button
            var removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add('remove-btn');

            removeButton.onclick = function() {
                taskList.removeChild(liElement);

        //Remove from the local Storage
        if (save) {
            const storedTask = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTask = storedTask.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTask));
        }

        };
            liElement.appendChild(removeButton);
            taskList.appendChild(liElement);

            if (save) {
                // Save the task to Local Storage
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }

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
    loadTasks();
});