document.querySelector(".clear-tasks").addEventListener("click", onClick)
const items = document.querySelectorAll("ul.collection li.collection-item")
function onClick(e) {
    items.forEach(function(li){
        li.remove();
    })
}

const form = document.querySelector("form")
form.addEventListener("submit", addTask)
function addTask(e) {
    const input = document.getElementById('task').value
    const li = document.createElement("li")
    li.className = "collection-item"
    li.id = "new item"  
    li.setAttribute("title", "New Item")
    li.appendChild(document.createTextNode(input))
    const link = document.createElement("a")
    link.className = "delete-item secondary-content"
    link.innerHTML = '<i class="fa fa-remove"></i>'
    li.appendChild(link)
    document.querySelector("ul.collection").appendChild(li)
}
document.querySelector(".delete-item secondary-content").addEventListener("click",removeTask)
function removeTask(e) {
   console.log(e.target)
}



document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault()
    const task = document.getElementById("task").value
  
    let tasks
  
    if (localStorage.getItem("tasks") === null) {
      tasks = []
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"))
    }
  
    tasks.push(task)
  
    localStorage.setItem("tasks", JSON.stringify(tasks))
    alert("Task Saved")
  })
  
  const tasks = JSON.parse(localStorage.getItem("tasks"))
  
  tasks.forEach((task) => {
    console.log(task)
  })