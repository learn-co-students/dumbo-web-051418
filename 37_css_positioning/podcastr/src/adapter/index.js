import {BASE_URL, HEADERS} from "./constants"

export function makeQuery(term, media){
  const options = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({ term, media })
  }
  return fetch(BASE_URL + '/queries', options).then(r => r.json())
}

export function getPodcastInfo(url){
  const options = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({ url })
  }
  return fetch(BASE_URL + '/podcasts', options).then(r => r.json())
}
