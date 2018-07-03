class Adapter {

  getDogs() {
    const baseURL = `http://localhost:3000/dogs`
    return fetch(baseURL)
      .then(r => r.json())
  }

  getDog(id) {
    const baseURL = `http://localhost:3000/dogs/${id}`
    return fetch(baseURL)
      .then(r => r.json())
  }

  updateDog(data) {
    const baseURL = `http://localhost:3000/dogs/${data.id}`
    delete data.id
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    return fetch(baseURL, options)
      .then(r => r.json())

  }

}