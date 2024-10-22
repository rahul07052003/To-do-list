document.getElementById('add-task-button').addEventListener('click', function() {
    console.log('Button clicked!'); // Check if the button click is detected
    const taskInput = document.getElementById('new-task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; // Clear the input field
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');

    // Create list item
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerText = taskText;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-task';
    deleteButton.innerHTML = '&times;';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    // Toggle task completion
    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    // Append delete button to list item
    taskItem.appendChild(deleteButton);

    // Append list item to task list
    taskList.appendChild(taskItem);
}
