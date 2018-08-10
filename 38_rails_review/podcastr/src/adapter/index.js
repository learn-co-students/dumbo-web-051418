import {BASE_URL, HEADERS} from "./constants"

export function makeQuery(term){
  const options = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({ term })
  }
  return fetch(BASE_URL + '/queries', options).then(r => r.json())
}

export function getPodcastInfo(podcast){
  const options = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({ podcast })
  }
  return fetch(BASE_URL + '/podcasts', options).then(r => r.json())
}

export function postSignUp(username, password){
  const options = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({user: { username, password }})
  }
  return fetch(BASE_URL + '/users', options).then(r => r.json())
}

export function postSignIn(username, password){
  const options = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({user: { username, password }})
  }
  return fetch(BASE_URL + '/signin', options).then(r => r.json())
}

export function favoritePodcast(user_id, podcast_id){
  const options = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({favorite: { user_id, podcast_id }})
  }
  return fetch(BASE_URL + '/favorites', options).then(r => r.json())
}

export function unFavoritePodcast(user_id, podcast_id){
  const options = {
    method: "DELETE",
    headers: HEADERS,
    body: JSON.stringify({favorite: { user_id, podcast_id }})
  }
  return fetch(BASE_URL + '/favorites', options).then(r => r.json())
}
