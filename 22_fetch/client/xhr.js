// function reqListener () {
//   console.log(JSON.parse(this.response))
// }
//
// var req = new XMLHttpRequest()
// req.addEventListener("load", reqListener)
// req.open("POST", "http://localhost:3000/brews/")
// req.setRequestHeader('Content-Type', 'application/json')
//
// brew2 = {
//   brew: {
//     blend_name: "Green Enlightenment",
//     origin: "Kigeyo Washing Station, Rwanda",
//     notes: "rounded, creamy, mango, brown sugar, olive",
//     strength: 2
//   }
// }
//
// req.send(JSON.stringify(brew2))

fetch("http://localhost:3000/brews/")

fetch("http://localhost:3000/brews/")
  .then(r => r.json())
  .then(renderBrews)

function renderBrews(data) {
  let brews = data.brews
  let div = document.querySelector('#container')
  brews.forEach((brew) => {
    div.innerHTML += brew.blend_name
  })
}
