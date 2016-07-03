---
layout: post
title: Javascript Language Basics
subtitle: Developing Javascript Language Skills
---

<i>Javascript</i> is a high-level, untyped, and interpreted, object-oriented 
programming language commonly used to create interactive websites.
Alongside HTML and CSS, it's one of the three core technologies of
<a href="https://en.wikipedia.org/wiki/World_Wide_Web">World Wide Web</a> 
content production; the majority of websites employ it and it is supported
 by all modern Web browsers without plug-ins.
<br>
<br>

## Variables 
We store data values in variables. We can bring back the values of these variables by typing the variable name.

```javascript
var myVar = "Hello World!"; 	// creates a variable 'myVar' with value "Hello World!"
console.log(myVar); 		// prints the value of myVar to the console
```

Code after double slashes <strong>//</strong> or between <strong>/*</strong> and 
<strong>*/</strong> is treated as a <strong>comment</strong>.

```javascript
// this is a single line comment
var num = 5; // this code is executed
/*
  this is a multi-line comment
  var num = 10; // this code is not executed
*/
```
<br>

## Data Types
There are five types of primitive data types in JavaScript. They are as follows:

| Data Type | Description |
| :------ |:--- |
| String | represents a sequence of characters e.g. "hello" | 
| Number | represents numeric values e.g. 100 | 
| Boolean | represents boolean value either false or true | 
| Undefined | represents undefined value | 
| Null | represents null i.e. no value at all |

<br>

## Manipulating Numbers & Strings 
There are many ways to manipulate numbers and strings in Javascript including:
  
  - comparisons (e.g. `>`, `<=`) 
  - modulo (e.g. `%`) 
  - string length (e.g. `"Emily".length;`) 
  - substrings (e.g. `"hi".substring(0, 1);`) 

<br>

## Functions
We can use functions to perform the same piece of logic repeatedly, without having 
to type the same code again. A function can be defined as follows:

```javascript
// Defining the function 'nameString' which accepts a single parameter
var nameString = function ( name ) {
	return ("Hi, I am" + " " + name);
};
// Here we call the 'nameString' function
console.log(nameString("Patrick"));
```

<br>

