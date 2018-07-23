const indexUrl = `http://pokeapi.co/api/v2/pokemon/`

const makePokemonRequest = () => {
  return fetch(indexUrl).then(resp => resp.json()).then(pokemonArray => {
    const promises = pokemonArray.results.map(pData => {
      return makeOnePokemonrequest(pData.url)
    })

    return Promise.all(promises)
  })
}

const makeOnePokemonrequest = (url) => {
  return fetch(url).then(resp => resp.json())
}

export {
  makePokemonRequest,
  makeOnePokemonrequest
}
