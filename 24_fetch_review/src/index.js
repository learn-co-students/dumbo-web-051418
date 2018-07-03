document.addEventListener('DOMContentLoaded', () => {
  const dogController = new DogController()
  const adapter = new Adapter()
  const tbody = document.querySelector('#table-body')

  adapter.getDogs()
    .then(data => {
      tbody.innerHTML = ''
      data.forEach((dog) => {
        dogController.renderDog(dog)
      })
    })


  tbody.addEventListener('click', (e) => {
    if (e.target.type === 'submit') {
      adapter.getDog(e.target.dataset.id)
        .then((dog) => {
          dogController.renderFormDog(dog)
        })
    }
  })

  const form = document.querySelector('form')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = dogController.readFormInputs()
    adapter.updateDog(data)
      .then(() => {
        adapter.getDogs()
          .then(data => {
            tbody.innerHTML = ''
            data.forEach((dog) => {
              dogController.renderDog(dog)
            })
          })
      })
    form.reset()

    // re-rendering all the dogs after the patch is not the best practice
    // after getting patch request result, update just that element on the dom
    // may require setting additional attributes or selectors on the tr with that dog
  })
})







