
   function addTask() {
    var taskInput = document.getElementById("taskInput");
    var task = taskInput.value;

    if (task) {
        var taskList = document.getElementById("taskList");

        var li = document.createElement("li");
        li.textContent = task;
       



        var deleteButton = document.createElement("button");
        deleteButton.textContent = "DELETE";
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}
