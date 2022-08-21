document.querySelector(".clear-tasks").addEventListener("click", onClick)
const items = document.querySelectorAll("ul.collection li.collection-item")
function onClick(e) {
    items.forEach(function(li){
        li.remove();
    })
}
document.querySelector(".btn").addEventListener("click", addTask)
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
