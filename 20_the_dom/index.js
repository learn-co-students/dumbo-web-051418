document.addEventListener('click', routePage)

function routePage() {
  const path = window.location.pathname
  const container = document.querySelector('#container')
  container.innerHTML = ''
  console.log('routepage')
  if (path.includes('80s')) {
    console.log('80s')
    container.innerHTML = '<h1>This Is My 80s Music Fanpage</h1><h3>Here are some of my favorite bands</h3>'
  } else {
    console.log('90s')
    container.innerHTML = '<h1>This Is My 90s Music Fanpage</h1><h3>Here are some of my favorite bands</h3>'
  }
}