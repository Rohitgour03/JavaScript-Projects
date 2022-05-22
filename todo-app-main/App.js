// To do list array to hold all the TODOs tasks
const todoList = [{
        taskId: 0,
        task: "Complete Online Javascript course",
        isDone: false,
    },
    {
        taskId: 1,
        task: "Jog around the park 3x",
        isDone: false,
    },
    {
        taskId: 2,
        task: "10 minutes meditation",
        isDone: false,
    },
    {
        taskId: 3,
        task: "Read for 1 hour",
        isDone: false,
    },
    {
        taskId: 4,
        task: "Pick up groceries",
        isDone: false,
    },
    {
        taskId: 5,
        task: "Complete Todo app on frontend mentor",
        isDone: false,
    },
];

const form = document.getElementById("form");
let taskStatus = document.getElementById("radio-input");
let taskInput = document.querySelector("#task-input");
const tasksCtn = document.querySelector(".tasks-ctn");

// Showing all the tasks when the page has been loaded
window.onload = function() {
    if (localStorage.getItem("tasks") !== null) {
        const arr = getData();
        showTasks(arr);
    } else {
        showTasks(todoList);
    }
};

// Stopping the function from submitting
form.addEventListener("submit", (event) => {
    event.preventDefault();
});

// When user has typed the task and hit enter
document.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        const arr = [];
        arr.push(...todoList, getFormData());
        setData(arr);
        showTasks(arr);
        alert("task added to todo list");
        console.log(arr);
        taskInput.value = "";
        taskStatus.checked = false;
    }
});

// Getting the data from the form
function getFormData() {
    const taskID = todoList.length;
    return {
        taskId: taskID,
        task: taskInput.value,
        isDone: taskStatus.checked,
    };
}

// Setting all the tasks in the local storage
function setData(arr) {
    localStorage.setItem("tasks", JSON.stringify(arr));
}

// getting the data from the localStarage
function getData() {
    return JSON.parse(localStorage.getItem("tasks"));
}

// show all the tasks got from local storage
// TODO make it work for completed, active and all the tasks
function showTasks(arr) {
    const todos = arr.map((item) => {
        return `
        <div class="task-ctn" data-index="${item.taskId}">
            <div class="radio-btn-ctn">
                <label for=""><input type="radio"
                ${item.isDone ? "checked" : ""} /></label>
            </div>
            <div class="task">
                <p class="task-text">${item.task}</p>
            </div>
            <div class="delete-btn-ctn">
                <img src="./images/icon-cross.svg" alt="task delete btn" />
            </div>
        </div>
        `;
    });
    tasksCtn.innerHTML = todos.join("");
}

// function clearLocalStorage() {
//     localStorage.removeItem("tasks");
// }

// const clearTaskBtn = document.querySelectorAll(".delete-btn-ctn");
// console.log(clearTaskBtn);

// clearTaskBtn.forEach((taskBtn) => {
//     taskBtn.addEventListener("click", (event) => {
//         const task = event.currentTarget.parentElement;
//         console.log(task.dataset.index);
//         clearTask(parseInt(task.dataset.index));
//         console.log(todoList);
//     });
// });

// function clearTask(index) {
//     todoList.splice(index, 1);
//     setData();
//     showTasks();
// }