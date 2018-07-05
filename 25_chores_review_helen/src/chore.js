class Chore {
  constructor(chore){
    this.id = chore.id,
    this.title = chore.title,
    this.duration = chore.duration,
    this.priority = chore.priority
  }

  el(){
    const adapter = new Adapter()
    const div = document.createElement('div')
    div.innerHTML = `<button class="delete-button test" data-id=${this.id}>X</button>
      <h2>${this.title}</h2>
      <p>${this.duration}</p>`
    div.className = "chore-card"

    const input = document.createElement('input')
    input.value = this.priority
    input.setAttribute("data-id", this.id)
    input.addEventListener('blur', (event) => {
      adapter.updateChore(this.id, event.target.value)
    })

    div.appendChild(input)

    return div

    // `
    // <div class="chore-card">
    //   <button class="delete-button test" data-id=${this.id}>X</button>
    //   <h2>${this.title}</h2>
    //   <p>${this.duration}</p>
    //   <input type="text" data-id=${this.id} value="${this.priority}"/>
    // </div>
    // `
  }
}
