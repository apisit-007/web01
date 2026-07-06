const task = document.getElementById("task");
const button = document.querySelector("button");
const taskList = document.getElementById("taskList");

let count = 1;

button.addEventListener("click", function () {

    if (task.value.trim() === "") {
        alert("กรุณาใส่ชื่อภารกิจ");
        return;
    }

    const li = document.createElement("li");
    li.textContent = count + ". " + task.value;

    taskList.appendChild(li);

    count++;
    task.value = "";
});