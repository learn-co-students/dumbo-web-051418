class ChoresController {

  render(chore){
    const choreList = document.querySelector('#chore-list')
    const currentChore = new Chore(chore)
    choreList.appendChild(currentChore.el())

    return currentChore
  }
}
