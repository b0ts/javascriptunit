# javascriptunit
---
## Overview
Javascriptunit is a very simple unit test example using Node and Mocha.
it consists of two files utilities.js (a javascript class under test) and utiltest.js (a basic unit test using the Mocha test runner for methods in utilities.js)
I created this simple example to show how easy it is to add unit level testing to javascript code.

## Setup and running the tests
1.  If not already installed on your machine, install Node on your machine.  Node is required to run javascript from the command-line outside of a browser.
2.  Install Mocha globally on the test machine.  For versioning reasons Mocha is usually installed locally.  This simple example uses Mocha and Node globally to reduce needing to have a package.json and having to do the typical dependency installation via something like $yarn (feel free to add your own package.json and install locally instead of globally)
3.  Clone this repo.
4.  Run the test from the command line via $ mocha utiltest.js

## Continuous integration
1.  Integrate the simple example into your code.
2.  Add Node and Mocha to your package.json, so the CI engine can use them.
3.  Expand utiltest.js to add additional test.js files to cover your classes and methods.
3.  Test from the command line.
4.  Check into version control for example Github.
5.  Integrate it into a Continuous Integration engines such as Jenkins or CircleCI to checkout the code and issue the same command line that you used to test locally either every time new code is checked into the repo or as part of a nightly CRON type Jenkins or CircleCI job flow.
