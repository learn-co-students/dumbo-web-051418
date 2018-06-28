// Object Literals
const john = {
  name: 'John Mulaney',
  recentSpecial: 'Kid Gorgeous',
  bestBit: 'saltines',
  tellJoke: tellJoke
}

const maria = {
  name: 'Maria Bamford',
  recentSpecial: '20%',
  bestBit: 'Venette',
  tellJoke: tellJoke
}

const mike = {
  name: 'Mike Birbiglia',
  recentSpecial: 'Thank God For Jokes',
  bestBit: 'accident',
  tellJoke: tellJoke
}


// Factory Pattern
const comedyFactory = (function() {
  let all = []

  function createComedian(name, recentSpecial, bestBit) {
    const obj = {name, recentSpecial, bestBit, tellJoke}
    all.push(obj)
    return obj
  }

  function getAll() {
    // Object.assign([], all)
    return [...all]
  }
  return {getAll, createComedian}
})()


function tellJoke() {
  return `blah blah ${this.bestBit}`
}


// Classes
const Comedian = (function() {
  // private class variable
  let all = []

  return class {
    constructor(name, recentSpecial, bestBit) {
      // instance variables
      this.name = name
      this.recentSpecial = recentSpecial
      this.bestBit = bestBit
      all.push(this)
    }

    // instance method
    tellJoke() {
      return `blah blah ${this.bestBit}`
    }

    // class method
    static getAll() {
      return [...all]
    }
  }
})()





