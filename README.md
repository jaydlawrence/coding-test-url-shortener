This was a coding exercise as part of an interview process.

## Demo

This is a quick demo of what this project looks like and how it works.

![Demo recording](https://github.com/jaydlawrence/coding-test-url-shortener/blob/master/media/demo.gif?raw=true)

A better view of the happy path view.

![Happy Path Screenshot](https://github.com/jaydlawrence/coding-test-url-shortener/blob/master/media/happy-path.png?raw=true)

And example bad URL validation.

![Invalid URL Screenshot](https://github.com/jaydlawrence/coding-test-url-shortener/blob/master/media/invalid-url.png?raw=true)

## Running this project

### External Requirements

This project requires the following to be run:
```
docker
docker-compose
```

In addition, on Windows, to run Unix based docker containers, the Windows Subsystem for Linux 2 is required.

https://docs.microsoft.com/en-gb/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package

On a related note, when installing Docker on Windows, make sure to add the option for WSL2 components.

![Docker Windows Installation Options](https://github.com/jaydlawrence/coding-test-url-shortener/blob/master/media/docker-windows-options.png?raw=true)

### Using Makefile (Unix-based environments)

Once these have been installed, the project can be run by doing the following:

Build and setup the docker containers. This will need to be done each time a change is made to the code.
```
make setup
```

Run the server
```
make server
```
Optionally run it in the background in daemon mode
```
make server-daemon
```
To Stop the daemon version, run:
```
make stop
```

To run tests:
```
make test
```

Once the server is up and running, to access the website go to:

[http://localhost:8080/](http://localhost:8080/)

### Using Docker Compose Directly (Windows Compatible)

Build and setup the docker containers. This will need to be done each time a change is made to the code.

```
docker-compose build
docker-compose run server sh -c "npm run db:migrate"
```

Run the server
```
docker-compose up
```
Optionally run it in the background in daemon mode
```
docker-compose up -d
```
To Stop the daemon version, run:
```
docker-compose stop
```

Once the server is up and running, to access the website go to:

[http://localhost:8080/](http://localhost:8080/)

## Coding Task Instructions

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

## Time taken

This is how long it took me to do the different parts


* App initial version complete functionality - 5 hours
* Dockerize - 1 hour
* Tests - 3 hours
* Makefile - 2 hours
* Making it fancy™ - 1 hour


## Development

Developing inside of the docker containers can be a bit of a pain.

For development, use the `docker-compose.local-dev.yml` file with docker compose to just bring up the DB and then you can run the `server` and `client` locally for faster development.

In a terminal

```
docker-compose -f docker-compose.local-dev.yml up
```

In a different terminal for frontend dev

```
cd client
npm install
npm start
```
The local version of the frontend runs on port 3000
eg. http://localhost:3000

In a different terminal for backend dev

```
cd server
npm install
## run migrations the first time to set up the DB structure
npm db:migrate
npm start
```

**NOTE:** Node 14 is recommended for running this project.

The "Easy" way to switch to Node 14 is to have [nvm](https://github.com/nvm-sh/nvm) installed and run the command `nvm use` in a new terminal in the `client` or `server` directories before running any `node` or `npm` commands in that terminal.