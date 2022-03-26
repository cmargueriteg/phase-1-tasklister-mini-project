//should be able to type a task into the input field.
//should be able to click some form of a submit button.
//expect to see the task string that I provided appear in the DOM
 // after the submit button has been activated.

const form = () => document.querySelector('#create-task-form')

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form().addEventListener("submit", handleSubmit)
});

function handleSubmit(e){
  e.preventDefault()


  const todoText = document.querySelector('#new-task-description').value

  const li = document.createElement("li")

  li.textContent = todoText

  const deleteButton = document.createElement("button")

  
  deleteButton.textContent = "x"
  deleteButton.addEventListener("click", handleDelete)
  li.append(deleteButton)

  tasks.append(li)

  form().reset()
}

function handleDelete(event){
  event.target.parentNode.remove()
}