class TaskList {
  constructor() {
    this.ul = document.querySelector('#tasks')
    this.description = document.querySelector('#new-task-description')
  }

  renderTask(task) {
    this.ul.innerHTML += task.el()
  }

  createTask() {
    const value = this.description.value
    const task = new Task(value)
    this.renderTask(task)
    // this.description.value = ''
  }
}
