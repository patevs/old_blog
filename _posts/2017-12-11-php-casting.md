---
layout: post
title: PHP Basics
subtitle: Casting the Joint
---

<div style="border-bottom:1px solid black">
<p>
I call this process <i>casting the joint</i> because it involves taking a basic cursory look at the PHP enviroment to get a better handle on the basics of a PHP code file. Initially, we will look at small segments of a PHP code file (like variables and types of data), and then we will discuss how to control the outcome of a request with the use of decision making code, also known as flow control. Finally, we will explore some concepts that explain the overall environment of a PHP application: where items are placed in memory (server versus client) and how to retrieve information from those areas. 
</p>
</div>
<br>

# Casting the Joint

## Whitespace, Comments, and Basic Syntax
As far as PHP is concerned, whitespace is ignored when code is sent to the interpreter. This means that all comments and black lines are effectivey stripped out of the code file as it is running.

```php
<?php
#this is a PHP comment

/*
 * This is a multi-line
 * PHP comment block.
 */

 echo "Hello friend" ; // an inline code comment 

?>
```


## Variables: Data Types, Loose Typing, and Scope
Variables can hold different kinds of data, but they are always established the same way. Use the following rules when defining a PHP variable:

* `$`
   Variable names must begin with a dollar sign ($).
* _Case-sensitive_
   The name of a variable is case-sensitive, so `$firstname` is a completely different variable than `$FirstName`.
* _Letter or underscore_
   After the dollar sign the next character must be a letter or an underscore; after this, the remainder of the variable name can be any combination of letters, numbers, and underscores.
* `$this`
   The variable named `$this` is reserved for use in Object Oriented PHP, so it can't be used elsewhere.

A _data type_ is simply that: a type of data. These types come with various restrictions on the structure, interpretation, or operations that may be performed on the data. In PHP, there are eight basic (_primitive_) variable types catagorised into segments: _scalar_, _compound_, and _special_.


