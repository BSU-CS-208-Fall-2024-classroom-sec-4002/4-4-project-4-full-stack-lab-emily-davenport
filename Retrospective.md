# Retrospective

- name: Jane Doe
- email: janedoe@u.boisestate.edu

## Experience

TODO

## Known issues or Bugs

After making a POST request, subsequent reloads of the page will resubmit the POST request, which can cause duplicate additions / deletions. A client-side workaround for this is to simply click on the URL bar and press enter instead of hitting the reload button. I could implement a fix for this where the server sends a redirect response after a form submission to make the client perform a GET request (see [PRG](https://en.wikipedia.org/wiki/Post/Redirect/Get)), but I didn't feel like doing that for a tiny project like this.   

## Sources used

TODO
