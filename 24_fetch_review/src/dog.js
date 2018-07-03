class Dog {
  constructor(dog) {
    this.name = dog.name
    this.breed = dog.breed
    this.gender = dog.gender
    this.id = dog.id
  }

  tableData() {
    return `<td>${this.name}</td><td>${this.breed}</td><td>${this.gender}</td><td><button data-id='${this.id}'>Edit</button></td>`
  }

  el() {
    return `<tr id='row-${this.id}'>${this.tableData()}
    </tr>`
  }
}