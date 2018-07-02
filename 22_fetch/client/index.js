// Prototype
const performer = {
  needsAttention: true,
  bomb: function() {return `Boooooooooo!`},
  tellJoke: function(name) {return `Hey ${name}. blah blah ${this.bestBit}`}
}

function comedianFactory(name, recentSpecial, bestBit) {
  const obj = Object.create(performer)
  obj.name = name
  obj.recentSpecial = recentSpecial
  obj.bestBit = bestBit
  return obj
}

const mike = comedianFactory('Mike Birbiglia', 'Thank God For Jokes', 'accident')
const john = comedianFactory('John Mulaney', 'Kid Gorgeous', 'saltines')
