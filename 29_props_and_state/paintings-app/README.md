# What should be state and what should be props?
- Information about the user's interaction with the app should be state.


# Where does state live?

- The minimal parent component for all components that _must_ know about the state.


# Notes on state
- You must change state using `this.setState`
- State changes are asynchronous


# other ways to write code around State

## Setting initial state in the constructor

```js
  constructor() {
    super()

    this.state = {
      selectedPainting: null
    }
  }
```

# If you don't use arrow functions in your components, don't forget to bind `this`

```js
constructor() {

  this.choosePainting.bind(this)
}
```
