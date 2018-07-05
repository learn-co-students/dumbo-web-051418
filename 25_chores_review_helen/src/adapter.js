class Adapter {
  getChores(){
    const baseURL = 'http://localhost:3000/chores'
    return fetch(baseURL)
    .then(res => res.json())
  }

  createChore(chore){
    const baseURL = 'http://localhost:3000/chores'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(chore)
    }
    return fetch(baseURL, options)
    .then(res => res.json())
  }

  updateChore(id, priority){
    const baseURL = `http://localhost:3000/chores/${id}`
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({priority: priority})
    }
    return fetch(baseURL, options)
    .then(res => res.json())
  }

  deleteChore(choreID){
    const baseURL = `http://localhost:3000/chores/${choreID}`
    const options = {
      method: 'DELETE'
    }
    return fetch(baseURL, options)
  }

}
