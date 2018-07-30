```js
add3 = (a) => {
  return a + 3
}

add4 = (a) => {
  return a + 4
}


logFn = (wrappedFn) => {
  return a => {
    console.log(`Calling a fn on ${a}`)
    return wrappedFn(a)
  }
}

myMap = (arr, fn) => {
  arr2 = []
  for(let i=0; i < arr.length; i++) {
    arr2.push(fn(arr[i]))
  }
  return arr2
}

myFilter = (arr, fn) => {
  arr2 = []
  for(let i=0; i < arr.length; i++) {
    if(fn(arr[i])) {
      arr2.push(arr[i])
    }
  }
  return arr2
}

arr = [1,2,3,4,5]

```
