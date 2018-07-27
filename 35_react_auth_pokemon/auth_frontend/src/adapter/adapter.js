const urlBase = `http://localhost:3001/api/v1`


const makePokemonRequest = () => {
  return fetch(`${urlBase}/pokemons`).then(resp => resp.json())
}

const createUser = (username, password) => {
  return fetch(`${urlBase}/users`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(res => res.json())
}

const loginUser = (username, password) => {
  return fetch(`${urlBase}/auth`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(res => res.json())
}


export {
  makePokemonRequest,
  createUser,
  loginUser
}
