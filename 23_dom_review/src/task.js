class Task {
  constructor(description) {
    this.description = description
  }

  el() {
    return `<li>${this.description}</li><button data-id='${this.description}' class='button'>Delete</button>`
  }
}

