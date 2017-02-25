---
layout: post
author: "Christy Presler"
title: "Command Line Basics"
feat_img: 2017/02/command-line-basics.png
date: 2017-02-23 12:00:00 -0400
comments: false
categories: development tools
---
    

Like a lot of people I found using the terminal intimidating when I first became a developer. It is a different way of navigating a computer and it can feel more opaque than the graphical interfaces that are now standard. As a visually minded person, I found it easy to feel lost with my available options hidden behind a command I have to remember. However the more I have learned about using the terminal, the more I realize that becoming familiar with the command line is an important part of familiarizing yourself with how an operating system functions. I don't mean on the bits and bites level, but instead on an architectural and structural level.

To me, navigating a computer via the command line has always felt a bit like trying to cross without the lights on. Moving around the objects is considerably easier if you have a map of the objects in the room inside your brain. It is part of why I feel like teaching the command line to new developers is so important. It pushes people into an uncomfortable space because it forces them interact with their computers in a completely new way. In reality, the actions they are taking are the same as those they have been using all along when working on a computer, but changing the interface forces you to take a new look.

For my students at [StartFast Code](http://startfastcode.com) I put together an intro cheat sheet of basic commands to help them get started navigating and leveraging their computers in this new way. This list is not meant to be all encompassing, but is instead meant to display a few of the options available, and to make them easy to reference for new command line users who, in my experience, often feel like they really wish someone would just turn on the stupid light.

## Common Commands

**cd {directory name}** ------------------ change directory

**cd /** ------------------ go to root directory

**cd ~** ------------------ go to user home directory

**cd ..** ------------------ go up a level

**pwd** ------------------ show current directory

**ls** ------------------ list contents of a directory

**ls -l** ------------------ list contents of a directory in list view (with details)

**mkdir {directory name}** ------------------ make a directory 

**touch {filename}** ------------------ make a file

**rm {filename}** ------------------ remove a file

**rm -r {directory name}** ------------------ remove a directory and all its contents

**mv {filename} {new filename}** ------------------ rename a file or folder

**cp {filename} {new filename}** ------------------ copy file to another file/folder

**open {filename}** ------------------ open file in default program

**open {filename} -a "{program name}"** ------------------ open file in specific application

**open .** ------------------ open current directory

**-h** or **--help** ------------------ list options available for a command

**exit** ------------------ log out of current session

### A little less common, but ones I have found useful

**ln -s /source /destination** ------------------ create a symbolic link (symlink)

**ssh {user}@{hostname}** ------------------ connect to a host as a user

### A few shortcuts

**Cmd + k** ------------------ clear terminal screen

**Tab** ------------------ autocomplete

**&uarr; &darr;** ------------------ travel through your command history

**Ctrl + c** ------------------ halt current command

