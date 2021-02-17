This was a coding exercise as part of an interview process.



## Instructions

Here are the instructions that I received:

### URL Shortener Exercise

The goal of this exercise is to create a URL shortener web application in the same vein as bitly, TinyURL, or the now defunct Google URL Shortener.
It is intentionally open-ended and you are welcome to implement your solution using the language and tech stack of your choice (if you know React and/or Elixir well, then please use them for your submission).
The core functionality of the application should be expressed through your own original code. 

Although this project is small in scope, it is a great opportunity for you to show off your fullstack skills in: attention to detail, testing, CI/CD, design and development. Show us what you got!

#### Application Requirements

* When navigating to the root path (e.g. http://localhost:8080/) of the app in a browser a user should be presented with a form that allows them to paste in a (presumably long) URL (e.g. https://www.google.com/search?q=url+shortener&oq=google+u&aqs=chrome.0.69i59j69i60l3j0j69i57.1069j0j7&sourceid=chrome&ie=UTF-8).
* When a user submits the form they should be presented with a simplified URL of the form http://localhost:8080/{slug} (e.g. http://localhost:8080/h40Xg2). The format and method of generation of the slug is up to your discretion.
* When a user navigates to a shortened URL that they have been provided by the app (e.g. http://localhost:8080/h40Xg2) they should be redirected to the original URL that yielded that short URL (e.g https://www.google.com/search?q=url+shortener&oq=google+u&aqs=chrome.0.69i59j69i60l3j0j69i57.1069j0j7&sourceid=chrome&ie=UTF-8).
* Only allow valid URLs (e.g., start with http(s)://{domain}/ )

#### Deliverables

* Implement your solution, including test cases for your application code.
* We will execute your code using either:
  * the make targets specified in Makefile (download this file). 
    * Edit the contents of Makefile to provide an interface for running and testing your application
    * Include any other notes for our engineering team that you would like regarding your approach, assumptions you have made, how to run your code, how to use your application, etc in a file named notes.txt.

  * Or you could use other tools (like Docker/Docker-Compose, npm, or Yarn) to make it easy for the Evaluator to quickly and easily setup your submission, run the tests, and run the application. 
    * Please put your instructions in notes.txt how to setup, run, and test your application if you are not using the Makefile

#### Evaluation
To ensure consistency in the evaluation, our Engineering team uses a rubric to score your submission, which will be evaluated along the following five criteria by the Reviewer:
* **Completeness** - Does your submission meet the Application Requirements and Deliverables specified above?
* **Testing** - evaluate your use of test coverage to allow for iterative development
* **Ease of setup** - how easy was it for the Reviewer to setup and run your app?
  * hint: Try to emulate what it would be like to run a fresh install of your app following your own instructions in  notes.txt.  If you are not sure how to do that, then simply have someone that you know try the setup --following your instructions-- on their machine to see if the install, tests, and application all run smoothly 
* **Front end design** - demonstrate your familiarity with html, css, and front-end javascript frameworks. Consider the User Experience for this application.
* **Technical design** - Separation of concerns, adherence to certain 12 factor App principles, knowledge of backend frameworks, security concerns, etc. -- Note on the Database- We would like you to use a persistent datastore. 
  * Please be ready to speak to your technical choices during the face-to-face (video) interview, as well as how your design might need to change if the requirements change.
  * Curious about the “performance requirements” for this exercise? Your application should be able to handle at least 5 requests per second. During the on-site interview, you can talk about how you might change your design if the system had to scale beyond that
