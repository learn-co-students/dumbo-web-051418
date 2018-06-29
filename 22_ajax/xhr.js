function reqListener () {
  console.log(this)
}

var oReq = new XMLHttpRequest()
oReq.addEventListener("load", reqListener)
oReq.open("POST", "http://localhost:3000/brews")
oReq.setRequestHeader('Content-Type', 'application/json')


const data = JSON.stringify({
  brew: {
    blend_name: 'asdfasd',
    origin: 'asdfas',
    notes: 'asdf',
    strength: 5
  }
})

oReq.send(data)