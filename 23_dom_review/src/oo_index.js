
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const taskForm = document.querySelector('#create-task-form')

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    taskList.createTask()
    taskForm.reset()
  })

  // delegates the click listener to tasks
  // let tasks = document.querySelector('#tasks')
  // tasks.addEventListener('click', (e) => {
  //   if (e.target.classList.value === ('button')) {
  //     console.log(e.target)
  //   }
  // })
});
