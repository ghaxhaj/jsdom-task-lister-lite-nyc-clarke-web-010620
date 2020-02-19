document.addEventListener("DOMContentLoaded", function(event) {
    const form = document.getElementById('create-task-form')
    const description = document.getElementById("new-task-description")
    const toDo = document.getElementById("tasks")

    form.addEventListener("submit", function(event){
    event.preventDefault();
    const newTask = document.createElement("li")
    const newDescription = form.newTaskDescription.value
    newTask.innerText = newDescription
    toDo.append(newTask)
    const button = document.createElement("button")
    newTask.append(button)
    button.innerText = "Delete"
    button.addEventListener("click", function(event){
      event.target.parentNode.remove()
    })

    })
})