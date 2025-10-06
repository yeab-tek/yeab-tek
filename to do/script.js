 const inputBox = document.getElementById('input-box');
    const addButton = document.getElementById('addButton'); 
    const taskList = document.getElementById('taskList');
    
function addTask() {
    const inputBox = document.getElementById("input-box");
    const taskList = document.getElementById("taskList");
    const taskText = inputBox.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");

        // Create checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        li.appendChild(checkbox);

        // Add task text
        li.appendChild(document.createTextNode(" " + taskText + " "));

        // Create delete button
        const deleteBtn = document.createElement("span");
        deleteBtn.textContent = "delete";
        deleteBtn.style.cursor = "pointer";
        // deleteBtn.style.color = "red";
        deleteBtn.onclick = function() {
            li.remove();
        };
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
        inputBox.value = "";
    }
}
