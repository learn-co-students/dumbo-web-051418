# Hashes and the Internet

## JSON and the Request/Response Cycle
The internet is composed of a request/response cycle. A user makes a request for
some information (ie entering "reddit.com" into the URL bar), and receives some
kind of response from the server (ie the Reddit server sends back a response).

The "response" is essentially just one long string is parsed into information to
be rendered. Sometimes that string is composed of HTML, other times it is JSON
(ie entering "reddit.com/.json").

JSON (JavaScript Object Notation) is the standard file format for data being
sent across the web. Similar to hashes, JSON objects are consisted of key-value
pairs. While Ruby cannot manipulate JSON objects on its own, JSON objects can be
programmatically converted into hashes that a developer can parse.

## Ruby Gems - "We stand on the shoulders of giants"

Some problems that can be solved programmatically you may want to manually code
out on your own, but others you may want to use existing code that someone else
has written. When it comes to processes that are as complicated as utilizing the
request/response cycle or parsing JSON, we may want to use existing code. This
is where Ruby Gems come in- Ruby Gems are code packages, repositories and files
that you can download onto your computer and/or import into your own code.

There are two steps for utilizing Ruby Gems:
1. Install the gem on your machine by running "gem install [GEM NAME]" in your
terminal. It is only necessary to install a gem one time.
2. Reference the gem in your code by writing "require [GEM NAME]" in your file

_NOTE_: When using a Gem that you are unfamiliar with, it is highly recommended
that you take a look at the documentation on rubygems.org

### rest-client
Documentation: https://rubygems.org/gems/rest-client/versions/1.8.0
The rest-client gem is useful for making HTTP requests. For example:

RestClient.get('http://example.com/resource') => returns some kind of HTTP Response Object

### json
Documentation: https://rubygems.org/gems/json
The json gem is useful for parsing HTTP Response Objects into Hashes. For example:
http_response_object = RestClient.get('http://example.com/resource')
JSON.parse(http_respsonse_object) => returns a hash based on the HTTP Response Object
