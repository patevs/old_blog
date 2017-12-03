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

### To Open the Windows CLI do any of the following:
* Click Start -> Programs -> Accessories -> Command Prompt
* Click Start (or hit the Windows key), type “cmd” in search, then hit [ENTER]
* Windows Key + R brings up Run. Then type “cmd” then [ENTER]
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
`dir` : display contents of current directory <br>
__Ex:__ (dir [c:][\programs]), [ ] = optional<br>
`dir *.txt` : list all .txt files in current directory<br>
`dir *.?` : list all files with extensions one character in length in current directory<br>
`dir /w /p *.*` : display all contents one screen at a time<br>
`dir | more` : display all contents one line at a time<br>
`dir /?` : provides syntax info and complete list of all dir parameters<br>
<br>
`echo` : send command line input to display (by default)<br>
`echo sometext » somefile.txt` : append line(s) of text to any file<br>
`echo sometext > somefile.txt` : overwrites file with sometext<br>
<br>
`erase` : delete/erase<br>
`exit` : exit the command prompt<br>
`filename.txt` : opens filename.txt in current directory in default .txt program<br>
`format z:` : format z drive<br>
__Ex:__ use to format a disc or flash drive<br>
<br>
`mkdir x` : make directory x in current directory<br>
`move x y` : more or rename x to y<br>
`q` : escapes sequential display of contents (i.e. the more parameter)<br>
`rd x` : remove/delete directory x if it’s empty<br>
`ren x y` : rename file x to y<br>
`time` : change the time<br>
`file` : display the contents of the file ‘file’ (displays file contents in console)<br>
`file |more` : display the contents one line at a time<br>
<br>

# Advanced Command Prompt Commands
`ipconfig [/all]` : display network adapter information (advanced)<br>
`netstat –n` : display local address and addresses you are connected to (advanced)<br>
`netstat –nb` : above with name of foreign addresses (advanced)<br> 
This shows your private IP, if you are behind a router or proxy, then your public IP address will be different<br>
`ping google.com` : how long it takes for your computer to talk to google.com<br>
<br>

# Miscellaneous
Acceptable characters:<br> ```A-Z a-z 0-9 $ # & @ ! ( ) – { } ‘ ` _ ~```<br>
Unacceptable characters:<br> ```| < > \ ^ + = ? / [ ] ” ; , * : %```<br>
<br>
`?` : wildcard for any single character<br>
`*` : wildcard for any/all characters/files<br>
`>` : redirects output to (overwrite) a file or device<br>
`»` : redirects output to (append to) a file or device<br>
`|` : redirects stdout of a command to another command<br>
`<` : directs data from a file or device to a program or device<br>
`«` : directs additional data from a file or device to a program or device<br>
`nul` : black hole<br>
<br>

<br>
# Convert output of one process into the input of another process
Send contents of script.js to the system debug.exe file:<br>
1. `script.js | c:\programs]debug.exe`
2. `programs\debug.exe < script.js`
<br>

<br>
# Send directory listing to a printer or files
1. `dir > prn` (theoretically to a printer)
2. `dir > somefile.txt`
3. `dir *.mp3 > c:\Users\Dan\Desktop\musiclist.txt` : <br>
print all .mp3 files in current directory to musiclist.txt
<br>

<br>
# Customize the DOS command prompt
`prompt /?` : display prompt options<br>
`prompt $p$g` : display current directory followed by a greater-than symbol (Windows default)<br>
`prompt $p$g$t` : display time after the default prompt<br>
`prompt [%computername%][%username%] $g` : display computer name followed by username<br>
`prompt` : reset prompt to default<br>
<br>
`color 0a` : change prompt color to matrix green and screen color to black<br>
`color 84` : change colors to red on grey<br>

| 0 : black | 3 : cyan | 6 : yellow | 9 : bright blue |
| 1 : blue | 4 : red | 7 : white | a : bright green |
| 2 : green | 5 : magenta | 8 : grey | b : bright cyan |
| c : bright red | d : bright magenta | e bright yellow | f : bright white |

<br>
<br>
# Environmental Variables via the DOS command prompt
__System-generated upon Windows startup:__<br>
`%DATE%` : Tue 08/02/2011<br>
`%TIME%` : 14:23:33.37<br>
`%SYSTEMROOT%` : C:\Windows<br>
`%COMPUTERNAME%` : PAT-PC<br>
<br>
__System-generated upon user login:__<br>
`%USERNAME%` = Pat<br>
`%USERDOMAIN%` = Pat-PC<br>
<br>
__Local machine variables for all users:__<br>
`%PATH%` = C:\Windows\system32<br>
`%HOMEPATH%` = \Users\Pat<br>
`%HOMEDRIVE%` = C:<br>
(Hint: Use echo)<br>
<br>

<br>
# Function Keys
`F1` : Sequential, individual repeat of previously entered characters<br>
`F2` : Copies any number of characters from the previous command line<br>
`F3` : Repeats the contents of the previous command line<br>
`F4` : Deletes any number of characters from the previous command line<br>
`F5` : Return to the previous command line<br>
`F6` : Enters the characters ^z (CTRL+z), indicating “end of file”<br>
`F7` : Displays a history of command-line entries for the current session (50-line cache)<br>
`F8` : Sequentially displays previous command-line entries<br>
`F9` : Enables user to recall previous command lines by number (0 = first line)<br>
<br>

<br>

