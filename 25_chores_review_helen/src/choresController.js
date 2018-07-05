class ChoresController {

  render(chore){
    const choreList = document.querySelector('#chore-list')
    const currentChore = new Chore(chore)
    choreList.innerHTML += currentChore.el()
    const input = document.querySelector(`input[data-id='${currentChore.id}']`)
    console.log(input)
    input.addEventListener('blur', console.log)
  }
}
