# Rishi's Really Rad React Router Reference

### Tha Theory
- Static vs. Dynamic Routing
- What's an SPA?

Advantages of SPA

- React
- Feels Faster
- Do that once, lose internet, still works

Disadantages of SPA
- You have to load it all
- Your browser, needs to be good enough
- Performance minimums

### Manipulating the Browser's URL
We can forcibly push our Browser's URL to a different route.

```js
window.history.pushState({}, null, "/main")
```

**With this line, it actually pushes us back to our old route**.

```js
window.history.back()
```

### Components from `react-router-dom`

Here are some of the components that we will consistently use while programming
with React.

#### BrowserRouter

We'll use this in one place in our application (and one place only). Very top level, essentially listening for when the route changes, and making that info accessible.

```jsx
// index.js
<BrowserRouter>
   <App />
</BrowserRouter>
```

#### Switch

Pick one of the following routes (the first that matches), don't look at the others (similar to a big if/ else if/ else if).

#### Route

Conditionally render a certain component based on what the route looks like.

```jsx
// App.js
<Switch>
  <Route path="/404" component={catchAll} />
  <Route path="/main" component={Main} />
  <Route path="/trainers" component={TrainersContainer} />
</Switch>
```

What happens when we utilize an `:id` and want to find a specific resource.

```jsx
// App.js
<Route
  path="/trainers/:id
  render={ (routerParams) => {
    return <Trainer trainer={this.findById(routerParams.match.params.id)} />;
  } } />
```

#### Link

Changes the url we see in the browser, must have a 'to' prop. **Question**: how could
we change our `<a>` tags inside of our `Header.js` to `<Link>` components?

```jsx
// TrainersList.js
<Link to={`/trainers/${trainer.id}`} className="collection-item" key={trainer.id}>
    {trainer.name}
</Link>
```

#### Redirect

Forces a redirect to a particular route. This is how we can make sure to push people into specific routes such as our `/404`.

```jsx
// App.js
<Switch>
  <Route path="/404" component={catchAll} />
  <Redirect from="/main" to="/" />
  <Route exact path="/" component={Main} />
  <Redirect to="/404" />
</Switch>
```
