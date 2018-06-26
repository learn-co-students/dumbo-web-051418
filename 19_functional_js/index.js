// Pure Functions

let array = [1,3,4,5,6,9]

// impure: modifies intial array
function doubler(arr) {
  for(let i = 0; i<arr.length; i++) {
    arr[i] = 2 * arr[i]
  }
  return arr
}

// pure: returns new array, same output for one input
function doubler(arr) {
  const newArr = Object.assign([], arr)
  for(let i = 0; i<newArr.length; i++) {
    newArr[i] = 2 * newArr[i]
  }
  return newArr
}


// apples and pears share a global counter =(

let count = 0

const apple = () => {
  count++
  return `you've sold ${count} apples`
}
const pears = () => {
  count++
  return `you've sold ${count} pears`
}


// apples and pears each have a counter in a closure
// the arrow function is an IIFE
// constant saves the return value of the arrow function, which is the inner function
const apple = (() => {
  let count = 0

  return () => {
    count++
    return `you've sold ${count} apples`
  }
})()

const pear = (() => {
  let count = 0

  return () => {
    count++
    return `you've sold ${count} pears`
  }
})()

// so dry! we can make all the fruits with a more general function

const makeFruit = (fruit) => {
  let count = 0

  return () => {
    count++
    return `you've sold ${count} ${fruit}s`
  }
}

const apple = makeFruit('apple')
const pear = makeFruit('pear')

// callback to change li colors on the dom
document.addEventListener('DOMContentLoaded', changeColor)

function changeColor() {
  const els = document.getElementsByTagName('li')
  // document.querySelectorAll('li')
  for(let i=0; i<els.length; i++) {
    const el = els[i]
    el.style.color = `rgb(0, ${i * 10}, ${i * 10})`
  }
}


const issues = [
  {
    "body": "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team.",
    "created_at": "2016-03-31 16:23:13 UTC",
    "comments_count": 0,
    "id": 144948778,
    "number": 7,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/basic-sinatra-forms-lab/issues/7"
  },
  {
    "body": "This pull request has been automatically created by learn.co.",
    "created_at": "2016-03-28 03:25:56 UTC",
    "comments_count": 1,
    "id": 143883618,
    "number": 3,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/angular-what-is-the-event-system-readme/issues/3"
  },
  {
    "body": "This section talks about the keywork GROUP BY but the exercise did not use that. ",
    "created_at": "2016-03-27 23:55:28 UTC",
    "comments_count": 1,
    "id": 143861795,
    "number": 11,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/sql-grouping-and-sorting-readme/issues/11"
  }
]

// replace api.github.com with api-v2.github.com
// non-destructively

function apiV(issues) {
  const newArray = []
  for (let i = 0; i < issues.length; i++) {
    // const newIssue = Object.assign({}, issues[i], {url: issues[i].url.replace('api', 'api-v2')} )
    const newIssue = {...issues[i], url: issues[i].url.replace('api', 'api-v2')}
    newArray.push(newIssue)
  }
  return newArray
}

// to test, compare the return value to the original value
console.log(apiV(issues)[1].url)
console.log(issues[1].url)
