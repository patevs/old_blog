---
layout: post
title: PHP
subtitle: The Good Parts
---

<div style="border-bottom:1px solid black">
<p>
I call this process <i>casting the joint</i> because it involves taking a basic cursory look at the PHP enviroment to get a better handle on the basics of a PHP code file. Initially, we will look at small segments of a PHP code file (like variables and types of data), and then we will discuss how to control the outcome of a request with the use of decision making code, also known as flow control. Finally, we will explore some concepts that explain the overall environment of a PHP application: where items are placed in memory (server versus client) and how to retrieve information from those areas. 
</p>
<p style="text-align:center"> More information: <a href="http://simplyadvanced.net/blog/cheat-sheet-for-windows-command-prompt/">here</a></p>
</div>
<br>

# Casting the Joint

## Whitespace, Comments, and Basic Syntax
As far as PHP is concerned, whitespace is ignored when code is sent to the interpreter. This means that all comments and black lines are effectivey stripped out of the code file as it is running.

Some PHP comment examples:

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