---
layout: post
title: AngularJS
subtitle: Introduction
---

<div style="border-bottom:1px solid black;text-align: justify;">
<!-- text-justify: inter-word; -->
<p>
AngularJS is not a single piece in the overall puzzle of building the client-side of a web application. It handles all of the DOM and AJAX glue code you once wrote by hand and puts it in a well-defined structure. This makes AngularJS opinionated about how a <span style="font-weight:bold;">CRUD</span> (<span style="font-weight:bold;">C</span>reate, <span style="font-weight:bold;">R</span>ead, <span style="font-weight:bold;">U</span>pdate, <span style="font-weight:bold;">D</span>elete) application should be built.
</p>
<p>Creating web content with AngularJS in Eclipse requires the install of a few libraries to get going. To run our tests, we will need the <a href="http://karma-runner.github.io/2.0/intro/installation.html">Karma library</a> and <a href="https://nodejs.org/en/download/">nodejs</a>.
It’s also a good idea to have <a href="https://git.org/en/download/">git</a> installed, although this is not a strict requirement.</p>
<p style="text-align:center"><a href="https://angularjs.org/">AngularJS</a></p>
</div>
<br>

# AngularJS Basics

The official AngularJS introduction describes AngularJS as a:

> client-side technology, written entirely in JavaScript. It works with the long-established technologies of the web (HTML, CSS, and JavaScript) to make the development of web apps easier and faster than ever before.

It is a framework that is primarily used to build single-page web applications. AngularJS makes it easy to build interactive, modern web applications by increasing the level of abstraction between the developer and common web app development tasks.


## MVC in AngularJS

AngularJS augments HTML to give it native Model-View-Controller (MVC)
capabilities. This choice, as it turns out, makes building impressive and expressive client-side applications quick and enjoyable.

**MVC in AngularJS**

<img src="http://angularjstutorials.net/images/mvc/mvc-framework.png" style="display:block;margin-left:auto;margin-right:auto;" />

<br>
It enables you, the developer, to encapsulate a portion of your entire page as one application, rather than forcing the entire page to be an AngularJS application. 
This distinction is particularly beneficial if your workflow already includes another framework or if you want to make a portion of the page dynamic while the rest operates as a static page or is controlled by another JavaScript framework.

Additionally, the AngularJS team has made it a point to keep the library small when compressed, (the compressed, minified version weighs in under 9KB at the time of this writing).


## Modules in AngularJS

Writing efficient, production-ready controllers by encapsulating our functionality in a single core unit called a __module__.

In Angular, a module is the main way to define an AngularJS app. The module of an app is where we’ll contain all of our application code. An app can contain several modules, each one containing code that pertains to specific functionality.

Using modules gives us a lot of advantages, such as:

* Keeping our global namespace clean
* Making it easy to share code between applications
* Allowing our app to load different parts of the code in any order
* Making tests easier to write and keeping them clean so as to more easily target isolated functionality
* The Angular module API allows us to declare a module using the angular.module() API methods

When declaring a module, we need to pass two parameters to the method. The first is the name of the module we are creating. The second is the list of dependencies, otherwise known as injectables.

```javascript
angular.module('myApp', []);
```

This method is called the setter method for the Angular module; it’s how we define our module. We can always reference our module by using the same method with only one parameter. 

For instance, we can reference the myApp module like so:

```javascript
// this method fetches the app
angular.module('myApp');
```

This method is known as the getter method, whereby we can get the Angular module for later reference.

We can create our applications on top of the ```angular.module('myApp')``` variable.

When writing large applications, we’ll create several different modules to contain our logic. Creating a module for each piece of functionality gives us the advantage of isolation in which to write and test large features.

#### Module Properties

Angular modules have properties that we can use to inspect the module.

**name** (string)

 * The __name__ property on the modules gives us the name of the module as a string.

**requires** (array of strings)

 * The __requires__ property contains a list of modules (as strings) that the injector loads before the module itself is loaded.

<br>
<br>