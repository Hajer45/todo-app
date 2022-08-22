const items = document.querySelectorAll(".collection")
const check = document.querySelector(".delete-item secondary-content")
const clearTasks = document.querySelector(".clear-tasks")
let arrayOfTasks = [];
getLocalStorage()
//remove all tasks
clearTasks.addEventListener("click",onClick)
function onClick(e) {
  e.preventDefault();
  if (items.children.length > 0) {
      const TodoArray = Array.from(items.children);
      TodoArray.forEach((todo) => {
          todo.remove();
      });
      localStorage.clear();
  }
   
}
const form = document.querySelector("form")
form.addEventListener("submit", addTask)
// add a task 
function addTask(e) {
  e.preventDefault()
  console.log("hello")
  createTask()
  addDataToLocalStorageFrom(arrayOfTasks)
}
 function createTask() {
    let input = document.getElementById('task').value
    const li = document.createElement("li")
    li.className = "collection-item"
    li.id = "new item"  
    li.setAttribute("title", "New Item")
    li.appendChild(document.createTextNode(input))
    const link = document.createElement("a")
    link.className = "delete-item secondary-content"
    link.innerHTML = '<i class="fa fa-remove"></i>'
    li.appendChild(link)
    console.log(document.querySelector(".collection"))
    document.querySelector(".collection").appendChild(li)
    arrayOfTasks.push(input);
    input =""
}
document.querySelector(".collection").addEventListener("click",deleteTask)
// remove one specific task
function deleteTask(e){
    if (e.target.className === "fa fa-remove") {
      removeFromStorage(e.target.outerText);
        e.target.parentNode.parentNode.remove()
      
      }
}
const removeFromStorage = (todo) => {
  let todos;
  if (localStorage.getItem("tasks") !== null) {
      todos = JSON.parse(localStorage.getItem("tasks"));
      todos.splice(todos.indexOf(todo), 1);
      localStorage.setItem("tasks", JSON.stringify(todos));
  }
};
// local storage 
function getLocalStorage(){
  if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
  }
  arrayOfTasks.forEach(createTask)
}
function addDataToLocalStorageFrom(arrayOfTasks) {
    localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
  }
  
  