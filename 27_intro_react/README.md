# Intro to React

* What was difficult about vanilla JS in final projects?
* History & Overview (creation, licensing, multiple packages)
* Using React without `node`
* Virtual DOM (imperative v declarative)
* Rewriting React
  * `myCreateElement`
* NPM
* Webpack
* API
  * `ReactDOM.render`
  * `React.createElement`

## Exercises

Use `myCreateElement` instead of `React.createElement` to complete the first two exercises. `myCreateElement` is defined below:

```js
const myCreateElement = (type, props = {}, children) => {
  return {
    $$typeof: Symbol.for('react.element'),
    type: type,
    props: { children: children, ...props },
    ref: null
  };
};
```

### 1: Article

Use `myCreateElement` to create a function that generates React elements with the following HTML structure:

```html
<!-- how the article should look -->
<h1 class="article-heading">My article title</h1>
<p class="article-main">My article text</p>
```

```js
const Article = (/* what args does this need? */) => {
  // your code here
};
```

### 2: Navbar

Use `myCreateElement` to create a function that generates React elements with the following HTML structure:

```html
<!-- how the navbar should look -->
<div class="ui inverted orange menu">
  <a class='item'>
    <h2 class="ui header">
      <i class="paw icon"></i>
      <div class="content">
        ZooKeepr
      </div>
      <div class="sub header">
        Keep track of your animals
      </div>
    </h2>
  </a>
</div>
```

```js
const Navbar = () => {};
```

### 3: Art

Use `React.createElement` to create a function that generates React elements with the following HTML structure:

```html
<li>
  <img src=image />
  <h4>
    "title" by artist.name
  </h4>
  <p>year</p>
  <p>
    dimensions.width in. x dimensions.height in.
  </p>
</li>
```
