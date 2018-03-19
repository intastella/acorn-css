# Acorn CSS

## About
Acorn CSS is a SASS framework for quickly building custom websites.  It aims to be the CSS shorthand you always wanted, providing easy to use SASS mixins for things people commonly use.

## Install Acorn CSS
```bash
  npm install git://github.com/intastella/acorn-css.git
```

## Install the Dev Environment

[Vagrant](http://www.vagrantup.com) is used to provide a common development environment, no matter which host OS you want to use (Windows/Mac/Linux).
Vagrant requires virtual machine software and by default uses [Virtual Box](https://www.virtualbox.org/wiki/Downloads), which is free.  Go to [Virtual Box](https://www.virtualbox.org/wiki/Downloads) to download and install it, then [download and install Vagrant](http://www.vagrantup.com/downloads.html).

Once these are installed, open the repository in your command line:

To start up the vagrant machine run:
```bash
    vagrant up
```
Then SSH into the vagrant machine
```bash
    vagrant ssh
```
Now you are inside the Vagrant machine.  Install the global tools with:
```bash
    sudo npm install gulp-cli -g
```
Install the node modules with:
```bash
    npm install
```
Then build everything with Gulp by running:
```bash
    gulp
```

  