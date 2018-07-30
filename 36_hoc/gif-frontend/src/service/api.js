const headers = () => {
  return {
    'Content-Type': 'application/json',
    'Accepts': 'application/json',
    'Authorization': localStorage.getItem('token')
  }
}


const login = (username, password) => {
  return fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(r => r.json())
}

const getCurrentUser = () => {
  return fetch('http://localhost:3001/current_user', {
    headers: headers(),
  }).then(r => r.json())
}


export default {
  login,
  getCurrentUser
}
