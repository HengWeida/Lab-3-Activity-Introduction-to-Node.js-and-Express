3.1 - Introduction to Node.js and Express.js
This module is designed to introduce you to Node.js and Express.js, the foundational technologies for building backend applications. By the end of this module, you will:

Understand the basics of Node.js and its event-driven architecture.
Learn how to set up an Express.js server.
Build a simple web application using Node.js and Express.js.


Objectives
Understand what Node.js is and how it works.
Learn how to create a basic Express.js application.
Explore routing, middleware, and serving static files in Express.js.

Topics
Introduction to Node.js:
What is Node.js?
Event-driven architecture.
Installing Node.js and npm.

Setting Up an Express.js Server:
What is Express.js?
Creating a basic Express.js application.
Handling routes and requests.

Building a Simple Web Application:
Serving static files.
Handling GET and POST requests.
Middleware in Express.js.


Detailed Guide
Introduction to Node.js

What is Node.js?

Node.js is a runtime environment that allows you to run JavaScript on the server side.
It is built on Chrome's V8 JavaScript engine and uses an event-driven, non-blocking I/O model, making it lightweight and efficient.

Event-Driven Architecture

Node.js operates on a single-threaded event loop, which allows it to handle multiple connections simultaneously without blocking.
This makes it ideal for building real-time applications like chat apps, streaming services, and APIs.

Installing Node.js and npm

Download and Install Node.js:

Go to https://nodejs.org/ and download the latest LTS (Long Term Support) version.
Follow the installation instructions for your operating system.

Verify the Installation:

Open your terminal or command prompt and run:


You should see the installed versions of Node.js and npm.


Setting Up an Express.js Server

What is Express.js?

Express.js is a web application framework for Node.js.
It simplifies the process of building web applications and APIs by providing a robust set of features for routing, middleware, and more.

Creating a Basic Express.js Application

Initialize a New Node.js Project:
Create a new folder for your project:


Initialize a new Node.js project:


This will create a package.json file with default settings.

Install Express.js:
Install Express.js using npm:


Create an index.js File:
Create a new file named index.js and add the following code:


Run the Server:
Start the server by running:


Open your browser and navigate to http://localhost:3000. You should see "Hello, World!".



Building a Simple Web Application

Serving Static Files

Create a public Folder:
Create a new folder named public in your project directory.
Add an index.html file inside the public folder:
		

Serve Static Files:
Update your index.js file to serve static files from the public folder:


3. Test the Static File:
Restart the server and navigate to http://localhost:3000/index.html. You should see the content of your index.html file.
	
Handling GET and POST Requests

Add a New Route:
Add a new route to handle a GET request:


Test the route by navigating to http://localhost:3000/about.

Handle POST Requests:
Add a route to handle a POST request:


Test the route using a tool like Postman or curl:


Middleware in Express.js

Logging Middleware:
Add middleware to log incoming requests:






Error Handling Middleware:
Add middleware to handle errors:








Hands-On Activity: Build a Simple Web Application

Create a New Route:
Add a new route to display a list of items:


Add a Form to Submit Items:
Update your index.html file to include a form:


Update the Server to Handle Item Submission:
Update your index.js file to handle item submissions:


Test the Application:
Restart the server and navigate to http://localhost:3000/index.html.
Add items using the form and see them displayed in the list.









Introduction to Node.js

Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!

Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.

This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.

Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language.

In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.
