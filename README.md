# Steer Coding Best Practices Guide

[![Netlify build status](https://api.netlify.com/api/v1/badges/9605a650-694a-4212-87fe-61b5d0e73e1d/deploy-status)](https://app.netlify.com/sites/coding-best-practices/deploys)

This repository contains the source code for the [Steer Coding Best Practices
Guide](https://coding-best-practices.steer-digital.com/), which is an online
document intended to help Steer staff write better, more consistent code and
collaborate more effectively on coding projects.

The guide is built with [VuePress](https://v2.vuepress.vuejs.org/).

## Requirements

- [Node.js v18.16.0+](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (included with Node.js)

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

## Contact

Please contact [Andrew Desautels](mailto:andrew.desautels@steergroup.com) for
further information about the guide or if you have suggestions for improvement.
