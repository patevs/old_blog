---
layout: post
title: AngularJS Basics
subtitle: Databinding and Scopes
---

<div style="border-bottom:1px solid black;">
<p>
<strong>AngularJS</strong> is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. AngularJS's data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology.
</p>
<p>
Creating web content with AngularJS requires the install of a few libraries to get going.
To run our tests, we will need the <a href="http://karma-runner.github.io/2.0/intro/installation.html">Karma library</a>  and <a href="https://nodejs.org/en/download/">nodejs</a>.
It’s also a good idea to have <a href="https://git.org/en/download/">git</a> installed, although this is not a strict requirement.
</p>
<p style="text-align:center"><a href="https://angularjs.org/">AngularJS</a></p>
</div>
<br>

## Databinding in AngularJS

Due to the nature of JavaScript itself and how it passes by value vs. reference, its considered a bestpractice in Angular to bind references in the views by an attribute on an object, rather than the raw object itself.

If we were to apply best practices to a clock example:

```html
<!doctype html>
<html ng-app>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular.js"></script>
</head>
<body>
<div ng-controller="MyController">
<h1>Hello { clock.now }!</h1>
</div>
<script type="text/javascript" src="js/app.js"></script>
</body>
</html>
```

In this case, rather than updating the $scope.clock every second, we can update the clock.now property. With this optimization, we can then change our back end to reflect the change with:

```javascript
// In app.js
function MyController($scope) {
$scope.clock = {
now: new Date()
};
var updateClock = function() {
$scope.clock.now = new Date()
};
setInterval(function() {
$scope.$apply(updateClock);
}, 1000);
updateClock();
```


## Scopes in AngularJS

The scopes of the application refer to the application model. Scopes are the execution context for expressions. The $scope object is where we define the business functionality of the application, the methods in our controllers, and properties in the views.

Scopes serve as the glue between the controller and the view. Just before our app renders the view to the user, the view template links to the scope, and the app sets up the DOM to notify Angular for property changes. This feature makes it easy to account for promises, such as an XHR call, to be fulfilled. 

**Scopes are the source of truth** for the application state. Because of this live binding, we can rely on the $scope to update immediately when the view modifies it, and we can rely on the view to update when the $scope changes.

$scopes in AngularJS are arranged in a hierarchical structure that mimics the DOM and thus are nestable: We can reference properties on parent $scopes.

> If you are familiar with JavaScript, then this hierarchical concept shouldn’t be foreign.
When we create a new execution context in JavaScript, we create a new function that
effectively creates a new “local” context. The Angular concept of $scopes is similar in
that as we create a new scope for child DOM elements, we are creating a new execution
context for the DOM to live in.

Scopes provide the ability to watch for model changes. They give the developer the ability to propagate model changes throughout the application by using the apply mechanism available on the scope. 
We define and execute expressions in the context of a scope; it is also from here that we can propagate events to other controllers and parts of the application. 
It is ideal to contain the application logic in a controller and the working data on the scope of the controller.

### What Can Scopes Do?

Scopes have the following basic functions:

* They provide observers to watch for model changes
* They provide the ability to propagate model changes through the application as well as outside
the system to other components
* They can be nested such that they can isolate functionality and model properties
* They provide an execution environment in which expressions are evaluated
The majority of the work we’ll do in developing our Angular app is building out the functionality
of a scope.

> Scopes are objects that contain functionality and data to use when rendering the view.
It is the single source of truth for all views. You can think of scopes as view models.

We can set a variable name on the $rootScope and reference it in a view, like
so:
```javascript
angular.module('myApp', [])
.run(function($rootScope) {
$rootScope.name = "World";
});
```

And our view can now reference this name property to show to the user:

```html
<div ng-app="myApp">
<h1>Hello { name }</h1>
</div>
Instead of placing variables on the $rootScope, we can explicitly create a child $scope object using
a controller. We can attach a controller object to a DOM element using the ng-controller directive 
on a DOM element, like so:
<div ng-app="myApp">
<div ng-controller="MyController">
<h1>Hello { name } </h1>
</div>
</div>
```

Now, instead of attaching the name variable on the $rootScope, we can create a controller that will
manage our variable:

```javascript
angular.module("myApp", [])
.controller('MyController',
function($scope) {
$scope.name = "Ari";
});
```

The ng-controller directive creates a new $scope object for the DOM element and nests it in the
containing $rootScope.