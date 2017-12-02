---
layout: post
title: Windows Command Line
subtitle: Developing Command Line Skills
---

<div style="border-bottom:1px solid black">
The Windows <strong>C</strong>ommand <strong>L</strong>ine <strong>I</strong>nterface (CLI) is an essential and powerful tool for any developer. The command line gives a user or client a means of interacting with a computer program through the issuing of commands to the program in the form of successive lines of text (commands).<br>
<br>
The following is my command prompt reference/cheat sheet in case I forget any of it. This can also be used as a how-to guide if you are new to the Windows command line. You can open the your program and start testing out the features. Just make sure you don’t accidentally delete anything important!

<p style="text-align:center"> More information: <a href="http://simplyadvanced.net/blog/cheat-sheet-for-windows-command-prompt/">here</a></p>

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
`x /?` : provides syntax info & complete list of all params for x (a command, like “cd”)<br>
`cd` : change directory<br>
`cd ..` : move to the parent directory<br>
`cd\` : move to the root of current drive<br>
`cd x` : move to the current\x directory<br>
`cd z:` : change to the z root directory (as opposed to c:)<br>
`copy x y` : copy file x to directory y<br> 
__Ex:__ (D:\games\galaga.exe C:\programs[\awesome.exe]), [ ] = optional<br>
`copy file con` : display file contents in console<br>
`copy con file.txt` : create text file in the console window, end with ctrl+z (^z or F6)<br>
`date` : change the date<br>
<br>
`del` : delete/erase<br>
`del x` : deletes all files/folders fitting x<br>
`del .` : deletes all files within current directory<br>
`del *.*` : deletes all files within current directory<br>
<br>
`dir` : display contents of current directory (__Ex:__ dir [c:][\programs]), [ ] = optional<br>
`dir *.txt` : list all .txt files in current directory<br>
`dir *.?` : list all files with extensions one character in length in current directory<br>
`dir /w /p *.*` : display all contents one screen at a time<br>
`dir | more` : display all contents one line at a time<br>
`dir /?` : provides syntax info and complete list of all dir parameters<br>
<br>
`echo` : send command line input to display (by default)<br>
`echo sometext » somefile.txt` : append line(s) of text to any file<br>
`echo sometext > somefile.txt` : overwrites file with sometext<br>
`erase` : delete/erase<br>
`exit` : exit the command prompt<br>
`filename.txt` : opens filename.txt in current directory in default .txt program<br>
`format z:` : format z drive __Ex:__ use to format a disc or flash drive<br>
`mkdir x` : make directory x in current directory<br>
`move x y` : more or rename x to y<br>
`q` : escapes sequential display of contents (i.e. the more parameter)<br>
`rd x` : remove/delete directory x if it’s empty<br>
`ren x y` : rename file x to y<br>
`time` : change the time<br>
`type file` : display the contents of the file ‘file’ (displays file contents in console)<br>
`type file |more` : display the contents one line at a time<br>
<br>
<br>
# Redirection Commands
`>` : redirects stdout of a command to a file<br>
`>>` : redirects stdout of a command to a file, appending the new content<br>
`<` : redirects stdin to a command<br>
`|` : redirects stdout of a command to another command<br>
<br>
<br>
# Miscellaneous
Acceptable characters: ```A-Z a-z 0-9 $ # & @ ! ( ) – { } ‘ ` _ ~```<br>
Unacceptable characters: ```| < > \ ^ + = ? / [ ] ” ; , * : %```<br>
<br>
`?` = wildcard for any single character<br>
`*` = wildcard for any/all characters/files<br>
`>` = redirects output to (overwrite) a file or device<br>
`»` = redirects output to (append to) a file or device
`<` = directs data from a file or device to a program or device
`«` = directs additional data from a file or device to a program or device
`nul` = black hole

<br>