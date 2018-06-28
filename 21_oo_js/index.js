const john = {
  name: 'New In Town',
  comedian: 'John Mulaney',
  bestBit: 'saltines',
  tellJoke: tellJoke
}
  
const maria = {
  name: 'Maria Bamford',
  comedian: 'Comedy Central Presents',
  bestBit: 'office',
  tellJoke: tellJoke
}

const mike = {
  name: 'My Girlfriend\'s Boyfriend',
  comedian: 'Mike Birbiglia',
  bestBit: 'accident',
  tellJoke: () => {return `blah blah ${this.bestBit}`}
}

function tellJoke() {
  console.log(this)
  return whoDis2.call(mike)
}

function whoDis() {
  console.log(this);
}

const whoDis2 = () => {console.log(this);}

