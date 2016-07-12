---
layout: post
title: jQuery Basics
subtitle: Testing JavaScript and jQuery
---

<div style="border-bottom:1px solid black">
<i>jQuery</i> is a lightweight, <i>"write less, do more"</i>, JavaScript library designed to simplify the client-side scripting of HTML. The purpose of jQuery is to make it much easier to use JavaScript on your website. 

<br>
The library takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.

<br>
jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.

<p style="text-align:center"> More information on<a href="http://patevs.github.io/2016-07-03-javascript-basics/"> JavaScript</a></p>

 <p style="text-align:center"> More information on<a href="https://oscarotero.com/jquery/"> jQuery</a></p>
</div>

<br>

## The Document Object Model (DOM)
When a web page is loaded, the browser creates a <strong>D</strong>ocument <strong>O</strong>bject <strong>M</strong>odel of the page.
The DOM allows javascript and jquery to access, modifiy, remove, and add HTML elements
to the document or webpage.

<strong>The HTML DOM is constructed as a tree of Objects:</strong>

<img src="http://www.w3schools.com/js/pic_htmltree.gif" style="border:1px solid black; display:block; margin:auto; padding:10px" />

<br>

## Using jQuery
In order to start using jQuery you must first reference it with the HTML ```<script>``` tag within the ```<head>``` of your HTML the document. This is done as follows:

```html
<head>
  <!-- jQuery snippet: -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
  <!-- jQuery UI snippet: -->
  <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
</head>
```
<br>

## jQuery Syntax
The jQuery syntax is tailor-made for <strong>selecting</strong> HTML elements and performing some <strong>action</strong> on the element(s).

Basic syntax is: <strong>$(<i>selector</i>).<i>action</i>()</strong>

Examples:

```javascript
$(this).hide()        // hides the current element.

$(".test").hide()    // hides all elements with class="test"

$("#test").hide()    // hides the element with id="test"
```
<br>

## The Document Ready Event
It is good practice to wait for the document to be fully loaded and ready before working with it. This is to prevent any jQuery code from running before the document is finished loading (is ready).

```javascript
// standard syntax
$(document).ready(function(){

   // jQuery methods go here...

});
// minimal syntax
$(function(){

   // jQuery methods go here...

});
```
<br>

## Selectors
jQuery selectors are used to "find" (or select) HTML elements based on their name, id, classes, types, attributes, values of attributes and much more.

All selectors in jQuery start with the dollar sign and parentheses: <strong>$()</strong>

<strong> </strong>

```javascript
// element selector
$("p")			// selects all <p> elements on the page

// id selector
$("#test")		// selects the element with the id 'test'

// class selector
$("#test")		// selects all elements with the class 'test'
```

<strong> More Selectors: </strong>

```javascript
$("*")			// Selects all elements
$(this)	                // Selects the current HTML element
$("p.intro")	        // Selects all <p> elements with class="intro"
$("p:first")	        // Selects the first <p> element
$("ul li:first")	        // Selects the first <li> element of the first <ul>
$("ul li:first-child")	// Selects the first <li> element of every <ul>
$("[href]")	        // Selects all elements with an href attribute
$("a[target='_blank']")	// Selects all <a> elements with target attribute value equal to "_blank"
$("a[target!='_blank']")// Selects all <a> elements with target attribute value NOT equal to "_blank"
```
<br>

## jQuery Events
All the different visitor's actions that a web page can respond to 
are called events. An event represents the precise moment when something 
happens.

<strong>Here are some common DOM events:</strong>
<img src="/img/DOM-events.png" style="border:px solid black">





