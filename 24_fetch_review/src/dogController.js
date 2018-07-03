class DogController {

  renderDog(dog) {
    const newDog = new Dog(dog)
    const tbody = document.querySelector('#table-body')
    tbody.innerHTML += newDog.el()
  }

  renderFormDog(dog) {
    const newDog = new Dog(dog)
    // dynamic way
    // const inputs = document.querySelectorAll('form input')
    // document.querySelectorAll('form input[type=text]').forEach(i => {
    //   i.value = newDog[i.name]
    // })

    const nameInput = document.querySelector('#name')
    const genderInput = document.querySelector('#gender')
    const breedInput = document.querySelector('#breed')
    const idInput = document.querySelector('#id')
    nameInput.value = newDog.name
    genderInput.value = newDog.gender
    breedInput.value = newDog.breed
    idInput.value = newDog.id
  }

  readFormInputs() {
    const name = document.querySelector('#name').value
    const gender = document.querySelector('#gender').value
    const breed = document.querySelector('#breed').value
    const id = document.querySelector('#id').value
    return {name, gender, breed, id}
  }

  renderupdatedDog(dog) {
    const newDog = new Dog(dog)
    const tr = document.querySelector(`#row-${newDog.id}`)
    const el = newDog.el()
    tr.innerHTML = el
  }
}


