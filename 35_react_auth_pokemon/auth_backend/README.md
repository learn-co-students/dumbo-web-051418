## Steps

#### 1. Make API Call

#### 2. Make User In Backend

#### 3. User Call Authenticates

```js
const login = (username, password) => {
  return fetch(`${API_ROOT}/auth/`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ username, password });
  }).then(res => res.json());
}
```

```ruby
user = User.find_by(username: params[:username])
if user && user.authenticate(params[:password])
  render json: { id: user.id, username: user.username }
else
  render json: { error: "User is invalid" }, status: 401
end
```

#### 4. Where is Auth State?

#### 5. Passing the flow around using History
```js
<Route
  path="/login"
  render={routerProps => {
    return (
      <Login history={routerProps.history} handleSuccess={this.handleLogin} />
    );
  }}
/>
```


```js
this.props.handleSuccess(res)
this.props.history.push('/')
```

#### 6. Do all of this with Logout

#### 7. Set token on Login
```js
localStorage.setItem('token', user.id)
```

#### 8. Use token to login
Via `componentDidMount` and `auth#show`

```js
const token = localStorage.getItem('token');
const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: token
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers
  }).then(res => res.json());
};
```

```js
componentDidMount() {
  const token = localStorage.getItem('token');
  if (token) {
    api.auth.getCurrentUser().then(user => {
      this.setState({ auth: { currentUser: user } })
    })
  }
}
```

#### 9. JWT Authentication Flow
1. User requests access with username and password
2. The app validates the credentials
3. The app gives a signed token to the client
4. The client stores the token and presents it with every request

#### 10. `jwt` gem, secret, and algos

```ruby
class ApplicationController < ActionController::API
  private

  def issue_token payload
    JWT.encode(payload, secret, algorithm)
  end

  def authorize_user!
    if !current_user.present?
      render json: {error: 'No user id present'}
    end
  end

  def current_user
    @current_user ||= User.find_by(id: token_user_id)
  end

  def token_user_id
    decoded_token.first['user_id']
  end

  def decoded_token
    if token
      begin
        JWT.decode(token,secret, true, {algorithm: algorithm})
      rescue JWT::DecodeError
        return [{}]
      end
    else
      [{}]
    end
  end

  def token
    request.headers['Authorization']
  end

  def secret
    "secret"
  end

  def algorithm
    "HS256"
  end
end
```

#### 11. Authorization


React JWT Auth
==============

## Objectives

### Morning (Rails)

- Roadmap of React/Rails JWT auth
  - The Big Picture
  - https://bit.ly/2KLIv25
- Tokens and signing
- How to create tokens in Ruby
  - ruby-jwt
  - using dotenv-rails to hide your encryption key
- How to use tokens to secure a Rails API
  - Authentication
    - has_secure_password && password_digest
    - validation
    - Headers
      - Authorization: Token token=123123123
  - Authorization

### Afternoon (React)

- Using JWT with JavaScript
  - `fetch` to get JWT token.
  - `fetch` + JWT token to test our auth'ed endpoints.
- Incorporating Auth in React
  - Explore existing codebase.
  - Add registration functionality.
  - Add login functionality.
    - Save our JWT token somewhere. Hmm... where?
    - Show that we are logged in somewhere.
  - Add auth'ed snacks fetching.
  - Add auth'ed my-snacks fetching.
  - Add `Redirect`s to protect our routes (react-router returns!).
  - Add logout functionality.

## Lecture Notes (Rails)

[Postman](https://www.getpostman.com/) - Tool we'll be using to test our routes and auth.
- Our Routes:

  ```
  GET: http://localhost:3000/users
  GET: http://localhost:3000/users/:id
  POST: http://localhost:3000/users
  POST: http://localhost:3000/sessions
  GET: http://localhost:3000/snacks
  GET: http://localhost:3000/users/:id/snacks
  ```

Rails Build Plan
- New user
  - Just Return token
- Snacks
  - Authorize
- My snacks
  - Authenticate
- New user accepts a Username and password
  - Validate
- Login checks username and password
  - Validate

### Endgame Code

```ruby
# Gems
gem "jwt", "~> 2.1"
gem "dotenv-rails", "~> 2.4"
gem 'rack-cors'

# Two of the more useful status codes we'll be using for auth:
status: :unprocessable_entity
status: :unauthorized

# before_action macros also end up being helpful:
before_action :requires_login, only: [:index, :show, :users_snacks]
before_action :is_admin, only: [:index]

# Our eventual ApplicationController:
class ApplicationController < ActionController::API

  def secret_key
    ENV['SECRET_KEY']
  end

  def authorization_token
    request.headers["Authorization"]
  end

  def decoded_token
    begin
      JWT.decode authorization_token(), secret_key(), true, { algorithm: 'HS256' }
    rescue JWT::VerificationError, JWT::DecodeError
      nil
    end
  end

  def valid_token?
    !!decoded_token
  end

  def requires_login
    if !valid_token?
      render json: {
        message: 'You wrong!'
      }, status: :unauthorized
    end
  end

  # Poor example of authorization:
  def is_admin
    decoded_token[0]["id"] < 10
  end

  # def authenticate(data)
  #   begin
  #     decoded_token()
  #     render json: data
  #   rescue JWT::DecodeError
  #     puts "I got here"
  #
  #     render json: {
  #       message: 'You wrong!'
  #     }, status: :unauthorized
  #   end
  # end

  def payload(name, id)
    { name: name, id: id }
  end

  def get_token(payload)
    JWT.encode payload, secret_key(), 'HS256'
  end

end
```

## Lecture Notes (React)

### Playing around with our API with `fetch` and JWT.

```javascript
let API = 'http://localhost:3000';
let headers = {};
let body = "";
let method = "";
let init = { method: method, headers: headers, body: body };
method = 'POST'
headers = { "Content-Type": "application/json" };
body = JSON.stringify({ username: 'mike', password: "123" });

// Let's register!
let jwt = fetch(`${API}/users`, init).then(res => {
    return res.json();
}).then(json => {
    console.log(json);
    return json.token;
});

// JWT looks something like this:
// "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.O8pZYhjMQyhMz7cWLFlnPeVxY5p16Jaz7kv_y3cxrAc"

// Let's login!
let result = fetch(`${API}/sessions`, init).then(res => {
    return res.json();
}).then(json => {
    console.log(json);
    return json;
});

jwt = result.token;
let user_id = result.user_id;

// Let's get our snacks!
// /users/:user_id/snacks
method = 'GET';
headers["Authorization"] = jwt;

// However, this blows up!
// Why?
fetch(`${API}/users/${user_id}/snacks`, init).then(res => {
    return res.json();
}).then(json => {
    console.log(json);
    return json;
});

// No body allowed in GET requests for fetch.
// Let's remove the body key from our init object.
delete init.body

// rerun the above fetch
fetch(`${API}/users/${user_id}/snacks`, init).then(res => {
    return res.json();
}).then(json => {
    console.log(json);
    return json;
});
// Success!!
```

### Onto React!

```sh
# This won't work!
# Rails and React are both on port 3000.
# => Yes will let React automatically use a different port.
yarn start

# however, you can also manually pick it like this:
PORT=4000 yarn start
# About ports and reserved ports:
# https://en.wikipedia.org/wiki/Port_(computer_networking)
# https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers

# alternatively, you can run Rails on a different port like so:
rails s -p 5000
```

For all other notes on React + Auth, check out the source code. I've added a lot of comments in `App.js`, `UserForm.js`, and `Snacks.js`.

### CORS

Once we try our first `fetch` in React, you'll get an error about CORS.
- [CORS == Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- Take some time to at least read through the MDN docs linked above or for a quicker overview, the [Wikipedia article on CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

While you don't need to know about CORS in detail, you should know what to do when you run into it. For Rails, you'll want to:
- add the `rack-cors` gem
- uncomment the code in `config/initializers/cors.rb`
- at minimum, edit the `origins` in that file
- and then restart Rails.

```ruby
# gem 'rack-cors'
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # * == wildcard
    # That would allow all clients access to our API.
    # Or you can do something like this to allow only specific clients.
    origins 'localhost:4000'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

### React

**Local Storage**

- [localStorage.getItem](https://stackoverflow.com/questions/46445615/localstorage-getitemkey-sometimes-returns-null-in-a-react-app)
- [localStorage.setItem](https://stackoverflow.com/questions/38423108/using-localstorage-with-react)

**React Router**

- [NavLink](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md)
- [Route](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md#render-func)
- [Redirect](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Redirect.md)
- [Programmatically navigate using react router](https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router)

## Resources / Extra Reading

**About JWT:**

- [5 Easy Steps to Understanding JSON Web Tokens (JWT)](https://medium.com/vandium-software/5-easy-steps-to-understanding-json-web-tokens-jwt-1164c0adfcec)
- [JSON Web Token - why is the payload public?](https://softwareengineering.stackexchange.com/questions/280257/json-web-token-why-is-the-payload-public)
- [Is it secure to decode the jwt token on client side ?](https://github.com/auth0/jwt-decode/issues/4#issuecomment-72366352)
- [jwt-decode](https://github.com/auth0/jwt-decode) - A library to decode a JWT in JavaScript.

**Rails**

- [has_secure_password](http://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html)
- [Rails Status Code Symbols](http://guides.rubyonrails.org/layouts_and_rendering.html#the-status-option)
  - [with Status Message](http://billpatrianakos.me/blog/2013/10/13/list-of-rails-status-code-symbols/)

**Local Storage, Cookies, etc.**

- [StackOverflow: Should JWT be stored in localStorage or cookie?](https://stackoverflow.com/questions/34817617/should-jwt-be-stored-in-localstorage-or-cookie)
- [Auth0: Where to Store Tokens](https://auth0.com/docs/security/store-tokens#where-to-store-your-jwts)
- [Where to Store your JWTs – Cookies vs HTML5 Web Storage](https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage)
- [JSON Web Token Authentication in React and react-router](https://hptechblogs.com/using-json-web-token-react/)
