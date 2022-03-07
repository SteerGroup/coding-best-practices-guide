# Steer Coding Best Practices Guide

This repository contains the source code for the Steer Coding Best Practices
Guide, which is an online document intended to help Steer staff write better,
more consistent code and collaborate more effectively on coding projects.

The guide is built with [VuePress](https://v2.vuepress.vuejs.org/).

## Requirements

Please make you have version 12 or later of Node.js installed.

## Installation

Clone the repository, then install required packages (including VuePress)
by running `npm install` from the root directory.

``` bash
npm install
```

## Development

Use the following command to serve a local version of the site for development:

``` bash
npm run docs:dev
```

The development version of the site can be viewed at
[localhost:8080](http://localhost:8080), and will update automatically if the
source code is changed. Use Ctrl-C in the terminal to stop the server.

## Build

Use the following command to generate a set of static site files suitable for
uploading to a web server:

``` bash
npm run docs:build 
```

Static files will be output to docs/.vuepress/dist.
