---
layout: post
title: Windows Command Line Cheat Sheet
subtitle: Developing Command Line Skills
---

<div style="border-bottom:1px solid black">
The Windows <i>Command Line Interface</i> (CLI) is an essential and powerful tool for any developer. The command
line gives a user or client a means of interacting with a computer program through the issuing of 
commands to the program in the form of successive lines of text (commands).

The following is my command prompt reference in case I forget any of it. This can also be used as a how-to guide if you are new to the Windows command line. You can open the your program and start testing out the features. Just make sure you don’t accidentally delete anything important!

<p style="text-align:center"> More information <a href="https://www.codecademy.com/articles/command-line-commands">here</a></p>
</div>

<br>

## To Open the Windows Command Prompt you may do any of the following:
1. Click Start -> Programs -> Accessories -> Command Prompt
2. Click Start (or hit the Windows key), type “cmd” in search, then hit [ENTER]
3. Windows Key + R (#r, not the pound symbol) brings up Run. Then type “cmd” then [ENTER]
4. SHIFT + right-click in any folder or desktop, then select “open command window here”

# Basic Commands
`ls -a` or `dir /A` : lists contents of working direcotry, including hidden files and directories

`pwd` : Outputs the name of the current directory

`mkdir` : Creates a new directory in the working directory

`touch` : Creates a new file inside the working directory

`cp` : copies files

`mv` : moves and renames files

`rm` : removes files

`rm -r` : removes directories

<br>

# Useful Commands
`sort` : sorts lines of text alphabetically

`uniq` : filters duplicate, adjacent lines of test

`grep` : searches for a text pattern and outputs it

`sed` : searches for a text pattern, modifies it, and outputs it

<br>

# Redirection Commands
`>` : redirects stdout of a command to a file

`>>` : redirects stdout of a command to a file, appending the new content

`<` : redirects stdin to a command

`|` : redirects stdout of a command to another command

<br>