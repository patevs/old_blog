---
layout: post
title: NPM and Node.js
subtitle: Introduction
---

<div style="border-bottom:1px solid black;">
<p>
Node Package Manager (<strong>NPM</strong>) is the world's largest software registry, with approximately 3 billion downloads per week. npm opens up an entire world of JavaScript talent to you and to your team. The registry contains over 600,000 packages (building blocks of code).<br> 
<br>
Open-source developers from every continent share and borrow packages through npm, accessing algorithms designed across the planet or across the street. Packages follow specific structures to enable you to track and manage versions and multiple dependencies.
</p>
<p style="text-align:center"><a href="https://nodejs.org/en/download/">Node.js Download</a></p>
</div>
<br>

# Getting Started

If you're using OS X or Windows, use one of the installers from the Node.js download page linked above. Be sure to install the version labeled LTS. Other versions have not yet been tested with npm.

<p style="text-align:center"><a href="https://docs.npmjs.com/getting-started/installing-node">Installing Node</a></p>

<br>
## Installing Local Packages

There are two ways to install npm packages: locally or globally. Choose which kind of installation to use based on how you want to use the package.

* If you want to depend on the package from your own module, using something like Node.js' require, then you want to install locally. This is npm install's default behavior.
* If you want to use a package as a command line tool, (such as grunt CLI), then install it globally.

<p style="text-align:center"><a href="https://docs.npmjs.com/getting-started/installing-npm-packages-locally">Installing Packages</a></p>
<p style="text-align:center"><a href="https://docs.npmjs.com/getting-started/packages">Packages and Modules</a></p>

<br>
## Working with package.json

The best way to manage locally installed npm packages is to create a **package.json** file.

A **package.json** file:

* Lists the packages that your project depends on.

* Allows you to specify the versions of a package that your project can use using semantic versioning rules.

* Makes your build reproducible, and therefore much easier to share with other developers.

### Requirements

A **package.json** must have:

* **"name"**
	* all lowercase
	* one word, no spaces
	* dashes and underscores allowed
* **"version"**
	* in the form of x.x.x
	* follows semver spec e.g.:
```
{
  "name": "my-awesome-package",
  "version": "1.0.0"
}
```

<br>
## Creating a package.json

There are two basic ways to create a package.json file.

1. Run a CLI questionnaire
To create a **package.json** with values that you supply, run:
```
> npm init
```
This will initiate a command line questionnaire that will conclude with the creation of a **package.json** in the directory in which you initiated the command.
2. To get a default **package.json**, run **npm init** with the **--yes** or **-y** flag:
```
> npm init --yes
```
This method will generate a default package.json using information extracted from the current directory.
<br>

<br>
## Nodejs Local Server

If Node.js is already downloaded and installed in your system, you can easily set up a simple HTTP web server on your system using Node.js.
<br>
#### Install the http-server package from npm

To do this, follow these steps outlined below:

1. Open a command prompt / command line window in the administrator mode
2. Enter the following command:
```
npm install -g http-server
```
3. Switch to the directory containing the web files
4. Start the web server with this following command:
```
http-server -o
```


That's all you need to do, The ```-o``` automatically opens the web server in your browser. You can also enter just ```http-server``` and manually browse to <a href="http://localhost:8080" target="_blank">http://localhost:8080</a> from your web browser.
<br>
<br>