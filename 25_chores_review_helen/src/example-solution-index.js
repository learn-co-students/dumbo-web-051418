document.addEventListener("DOMContentLoaded", () => {
  const choreList = document.getElementById('chore-list')
  const choreForm = document.getElementById('new-chore-form')
  choreForm.addEventListener('submit', postChore)
  choreList.addEventListener('click', deleteChore)

  fetch('http://localhost:3000/chores')
    .then(res => res.json())
    .then(json => {
      json.forEach(chore => {
        let choreDiv = document.createElement('div')
        choreDiv.innerHTML = `
          <button class='delete-button' data-id=${chore.id}>x</button>
          <h3> ${chore.title} </h3>
          <p> Duration: ${chore.duration} </p>
        `
        let chorePriorityInput = document.createElement('input')
        chorePriorityInput.setAttribute('data-id', chore.id)
        chorePriorityInput.value = chore.priority
        chorePriorityInput.addEventListener('blur', editChore)
        choreDiv.append(chorePriorityInput)
        choreDiv.className = 'chore-card'
        choreList.appendChild(choreDiv)
      })
    })

  function postChore (event) {
    event.preventDefault()
    const titleInput = document.getElementById('title').value
    const priorityInput = document.getElementById('priority').value
    const durationInput = document.getElementById('duration').value
    fetch('http://localhost:3000/chores', {
      method:"POST",
      headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        title: titleInput,
        priority: priorityInput,
        duration: durationInput
      })
    })
    .then(res => res.json())
    .then(json => {
      let choreDiv = document.createElement('div')
      choreDiv.innerHTML = `
        <button class='delete-button' data-id=${json.id}>x</button>
        <h3> ${json.title} </h3>
        <p> ${json.duration} </p>
      `
      let chorePriorityInput = document.createElement('input')
      chorePriorityInput.setAttribute('data-id', json.id)
      chorePriorityInput.value = json.priority
      chorePriorityInput.addEventListener('blur', editChore)
      choreDiv.append(chorePriorityInput)
      choreDiv.className = 'chore-card'
      choreList.append(choreDiv)
    })
  }

  function editChore(event) {
    let choreID = event.target.getAttribute('data-id')
    fetch(`http://localhost:3000/chores/${choreID}`, {
      method:"PATCH",
      headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        priority: event.target.value
      })
    })
  }

  function deleteChore(event){
    if (event.target.className == "delete-button"){
      event.target.parentElement.remove()
      let choreID = event.target.getAttribute('data-id')
      fetch(`http://localhost:3000/chores/${choreID}`, {
        method:"DELETE"})
    }
  }
})
