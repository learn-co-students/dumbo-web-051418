class Dog {
  constructor(dog) {
    this.name = dog.name
    this.breed = dog.breed
    this.gender = dog.gender
    this.id = dog.id
  }

  el() {
    return `<tr><td>${this.name}</td><td>${this.breed}</td><td>${this.gender}</td><td><button data-id='${this.id}'>Edit</button></td>
    </tr>`
  }
}