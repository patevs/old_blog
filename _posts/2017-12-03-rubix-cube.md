---
layout: post
title: Guide to Solving the 3x3
subtitle: Rubik's Cube
---

<div style="border-bottom:1px solid black">
<p>
The Rubik's Cube is a 3-D combination puzzle invented in 1974 by Ernő Rubik. Originally called the Magic Cube, the puzzle was licensed by Rubik to be sold by Ideal Toy Corp. in 1980, and won the German Game of the Year special award for Best Puzzle that year. As of January 2009, 350 million cubes had been sold worldwide making it the world's top-selling puzzle game.
</p>
<p style="text-align:center"> More information: <a href="http://simplyadvanced.net/blog/cheat-sheet-for-windows-command-prompt/">here</a></p>
</div>
<br>

# How to Solve the 3x3 Rubik's Cube
<br>
## Stage One : Solve One Face
Let's begin with the white face. First we have to make a white cross paying attention to the colour of the side center pieces. The next step we have to arrange all the white corner pieces to finish the first face. This step is still intuitive, you can do it without learning a single algorithm, it may just take some practice. 

| | __Stage One Goal__ |
| :---: | :---: |
| ![Hint 1](https://ruwix.com/pics/solution/01.png) | ![Stage One](https://ruwix.com/pics/solution/03.png) | 

For more help with stage one see animated algorithms: [here](
https://ruwix.com/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step-1-first-layer-edges/).

____
<br>
## Stage Two : Solve Two Layers
Until this point the procedure was pretty straight forward but from now on we have to use algorithms. We can forget the completed white face so let's turn the cube upside down to focus on the unsolved side.

| *Reference Left* | *Reference Right* | __Stage Two Goal__ |
| :---: | :---: | :---: |
| ![Reference One](https://ruwix.com/pics/solution/09.png) | ![Reference Two](https://ruwix.com/pics/solution/08.png) | ![Stage Two](https://ruwix.com/pics/solution/07.png) |

In this step we are completing the first two layers. There are two symmetric algorithms we have to use in this step. They're called the Right and Left algorithms. These algorithms insert the Up-Front edge piece from the top layer in the middle layer not messing up the solved white face. See the images below:

| Reference | Algorithm |
| :---: | :---: |
| Left | <img src="/img/rubik_stage_2_ref_left.png" style="border:1px solid black" /> |
| Right | <img src="/img/rubik_stage_2_ref_right.png" style="border:1px solid black" /> |

For more help with stage two see animated algorithms: [here](https://ruwix.com/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step3-second-layer-f2l/).

___
<br>
## Stage Three : Solve The Cube

| *Cross* | *Edges* | *Corners* | __Solved__ |
| :---: | :---: | :---: | :---: |
| ![Cross](https://ruwix.com/pics/solution/12.png) | ![Sides](https://ruwix.com/pics/solution/13.png) | ![Corners](https://ruwix.com/pics/solution/16.png) | ![Solved](https://ruwix.com/pics/solution/17.png) |

### Cross:
* Sart solving the last layer making a yellow cross on the top of the cube. At this point we don't have to pay attention to the colours of the sides.
* We can get three possible patterns on the top: <br>
<br>
<img src="https://ruwix.com/pics/solution/11.png" style="display:block; margin:auto" />
<br>
* Use this algorithm to go from one state (pattern) to the next: <br>
<br>
<img src="/img/rubik_stage_3_cross.png" style="border:1px solid black; display:block; margin:auto" />

### Edges:
* After making the yellow cross on the top of the cube you have to put the yellow edge pieces on their final places to match the colours of the side center pieces. 
* Switch the front and left edge pieces with the following algorithm: <br>
<br>
<img src="/img/rubik_stage_3_edges.png" style="border:1px solid black; display:block; margin:auto" />

### Corners:
* Only the last layer corners are left unsolved. First we have to get them to the right spot, so don't worry about the orientation in this step.
* Find a piece which is already in the right place, move it to the right-front-top corner then apply the following algorithm to switch (cycle) the three wrong pieces:

| Reference | Algorithm |
| :---: | :---: |
| ![corners](https://ruwix.com/pics/solution/15.png) | <img src="/img/rubik_stage_3_corners.png" style="border:1px solid black" /> |

### Solve: 
* With all pieces in their right places you just have to orient the corner pieces to finish the puzzle. This proved to be the most complicated step so read the instructions bellow carefully.
1. Hold the cube in your hand with an unsolved corner in the front-right-top corner, then do the algorithm below twice or four times until that specific piece is oriented correctly: <br>
<img src="/img/rubik_stage_3_final.png" style="border:1px solid black; display:block; margin:auto" /><br>
2. Turn the top layer only to move another unsolved yellow piece to the front-right-top corner of the cube and do the same __R' D' R D__ algorithm again until this specific piece is ok. Be careful not to move the two bottom layers between the algorithms and never rotate the whole cube.
3. Repeat this until your Cube is __solved__.
<br>

___
<br>
<form action="https://formspree.io/ppevans11@gmail.com"
      method="POST">
    <input type="text" name="name">
    <input type="email" name="_replyto">
    <input type="submit" value="Send">
</form>
