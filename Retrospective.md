# Retrospective

- name: Emily Davenport
- email: emilydavenport410@u.boisestate.edu

## Experience

This project was a good way to get back in the habit of web development. I hadn't worked with the Pug templating engine before (although I have used templating engines in the past) so it took me a minute to figure out how to write the template and add attributes to elements. Overall, it is pretty simple to understand and I didn't have many problems writing the template. The server side code was pretty simple as well. I've worked with express as well as sqlite (although it has been a while) so I understood how the backend code worked. I did need to look up how to make the database save and load from a file, as well as how to do prepared statements (I hadn't used them since I was working with PHP in high school). After I got the server code up and running, I spent a while trying to get the styles right. For the buttons, I tried to make them look like the ones in Bootstrap because they are pleasant to look at in my opinion. After that, I wrote some styles to make sure everything was properly layed out / aligned, which I did using CSS grid. 

## Known issues or Bugs

After making a POST request, subsequent reloads of the page will resubmit the POST request, which can cause duplicate additions / deletions. A client-side workaround for this is to simply click on the URL bar and press enter instead of hitting the reload button. I could implement a fix for this where the server sends a redirect response after a form submission to make the client perform a GET request (see [PRG](https://en.wikipedia.org/wiki/Post/Redirect/Get)), but I didn't feel like doing that for a tiny project like this.   

## Sources used

* [SQLite Tutorial](https://www.sqlitetutorial.net/sqlite-nodejs/connect/)
* [Bootstrap Buttons](https://getbootstrap.com/docs/4.0/components/buttons/)

