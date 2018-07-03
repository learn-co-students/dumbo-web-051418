document.addEventListener('DOMContentLoaded', () => {
  const dogController = new DogController()
  const adapter = new Adapter()
  const tbody = document.querySelector('#table-body')
  const form = document.querySelector('form')

  // load all dogs onto the table
  adapter.getDogs()
    .then(data => {
      data.forEach((dog) => {
        dogController.renderDog(dog)
      })
    })

  // delegate edit button event listeners onto table
  tbody.addEventListener('click', (e) => {
    // only execute code if the event target was an edit button
    if (e.target.type === 'submit') {
      adapter.getDog(e.target.dataset.id)
        .then((dog) => {
          dogController.renderFormDog(dog)
        })
    }
  })

  // add event listener for form
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = dogController.readFormInputs()
    adapter.updateDog(data)
      .then(dog => {
        // use return value of patch request to update the dog table row
        dogController.renderupdatedDog(dog)
      })
    form.reset()
  })
})







