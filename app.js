const form = document.querySelector("#task-form")
const taskList = document.querySelector(".collection")
const clearBtn = document.querySelector(".clear-tasks")
const taskInput = document.querySelector("#task")

  // DOM Load event
  document.addEventListener("DOMContentLoaded", getTasks)
  // Add task event
  form.addEventListener("submit", addTask)
  // Remove task event
  taskList.addEventListener("click", removeTask)
  // Clear task event
  clearBtn.addEventListener("click", clearTasks)

  function createTask(task) {
    const li = document.createElement("li")
    li.className = "collection-item"
    li.id = "new item"  
    li.setAttribute("title", "New Item")
    li.appendChild(document.createTextNode(task))
    const link = document.createElement("a")
    link.className = "delete-item secondary-content"
    link.innerHTML = '<i class="fa fa-remove"></i>'
    li.appendChild(link)
    items.appendChild(li)
}
// Get Tasks from LS
function getTasks() {
  let tasks
  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }

  tasks.forEach(function (task) {
    createTask(task)
  })
}

// Add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task")
  } else {
    createTask(taskInput.value)

    // Store in LS
    storeTaskInLocalStorage(taskInput.value)

    // Clear input
    taskInput.value = ""
  }

  e.preventDefault()
}

// Store Task
function storeTaskInLocalStorage(task) {
  let tasks
  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }

  tasks.push(task)

  localStorage.setItem("tasks", JSON.stringify(tasks))
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove()

      // Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
  }
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks
  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1)
    }
  })

  localStorage.setItem("tasks", JSON.stringify(tasks))
}

// Clear Tasks
function clearTasks() {
  // taskList.innerHTML = '';

  // Faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }

  // Clear from LS
  clearTasksFromLocalStorage()
}

// Clear Tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear()
}