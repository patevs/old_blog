---
layout: post
title: Windows Command Line
subtitle: Developing Command Line Skills
---

<div style="border-bottom:1px solid black">
The Windows _C_ommand _L_ine _I_nterface (CLI) is an essential and powerful tool for any developer. The command
line gives a user or client a means of interacting with a computer program through the issuing of 
commands to the program in the form of successive lines of text (commands).<br>

<br>
The following is my command prompt reference/ cheat sheet in case I forget any of it. This can also be used as a how-to guide if you are new to the Windows command line. You can open the your program and start testing out the features. Just make sure you don’t accidentally delete anything important!

<p style="text-align:center"> More information <a href="https://www.codecademy.com/articles/command-line-commands">here</a></p>
</div>

<br>

#### To Open the Windows Command Prompt do any of the following:
* Click Start -> Programs -> Accessories -> Command Prompt
* Click Start (or hit the Windows key), type “cmd” in search, then hit [ENTER]
* Windows Key + R (#r, not the pound symbol) brings up Run. Then type “cmd” then [ENTER]
* SHIFT + right-click in any folder or desktop, then select “open command window here”
<br>
<br>

# Basic Commands
`ls -a` or `dir /A` : lists contents of working direcotry, including hidden files and directories

`pwd` : Outputs the name of the current directory

`mkdir` : Creates a new directory in the working directory

`touch` : Creates a new file inside the working directory

`cp` : copies files

`mv` : moves and renames files

`rm` : removes files

`rm -r` : removes directories

`x /?` = provides syntax info and complete list of all parameters for x (a command, like “cd”)
`cd` = change directory
`cd ..` = move to the parent directory
`cd\` = move to the root of current drive
`cd x` = move to the current\x directory
`cd z:` = change to the z root directory (as opposed to c:)
`copy x y` = copy file x to directory y (Ex: D:\games\galaga.exe C:\programs[\awesome.exe]), [] = optional
`copy file con` = display file contents in console
copy con file.txt = create text file in the console window, end with ctrl+z (^z or F6)
date = change the date
del = delete/erase
del x = deletes all files/folders fitting x
del . = deletes all files within current directory
del *.* = deletes all files within current directory
dir = display contents of current directory (Ex: dir [c:][\programs]), [] = optional
dir *.txt = list all .txt files in current directory
dir *.? = list all files with extensions one character in length in current directory
dir /w /p *.* = display all contents one screen at a time
dir | more = display all contents one line at a time
dir /? = provides syntax info and complete list of all dir parameters
echo = send command line input to display (by default)
echo sometext » somefile.txt = append line(s) of text to any file
echo sometext > somefile.txt = overwrites file with sometext
erase = delete/erase
exit = exit the command prompt
filename.txt = opens filename.txt in current directory in Notepad (or default .txt program)
format z: = format z drive [Ex: use to format a disc or flash drive]
mkdir x = make directory x in current directory
move x y = more or rename x to y
q = escapes sequential display of contents (i.e. the more parameter)
rd x = remove/delete directory x if it’s empty
ren x y = rename file x to y
time = change the time
type file = display the contents of the file ‘file’ (displays file contents in console)
type file |more = display the contents one line at a time

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