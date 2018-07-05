document.addEventListener('DOMContentLoaded', function(){
  const adapter = new Adapter();
  const controller = new ChoresController();
  const form = document.querySelector('#new-chore-form')
  const choreList = document.querySelector('#chore-list')

  adapter.getChores()
  .then(chores => chores.forEach((chore) => {
    controller.render(chore)
    // setTimeout(() => {
    //   const input = document.querySelector(`input[data-id="${chore.id}"]`)
    //   console.log(input);
    //   input.addEventListener('blur', console.log)
    // }, 2000)
  }))

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const title = event.target.title.value
    const priority = event.target.priority.value
    const duration = event.target.duration.value
    const chore = {title: title, priority: priority, duration: duration}
    adapter.createChore(chore)
    .then(chore => new Chore(chore))
    .then(choreObject => controller.render(choreObject))
  })

  choreList.addEventListener('click', (event) => {
    if(event.target.classList.contains("delete-button")){
      adapter.deleteChore(event.target.dataset.id)
      .then(choreList.removeChild(event.target.parentElement))
    }
  })

})
