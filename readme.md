generator-amd 
=============


[![NPM version](https://img.shields.io/npm/v/generator-amd.svg)](https://www.npmjs.com/package/generator-amd)
[![Dependency Status](https://david-dm.org/t1st3/generator-amd.png?theme=shields.io)](https://david-dm.org/t1st3/generator-amd)
[![Build Status](https://travis-ci.org/t1st3/generator-amd.png?branch=master)](https://travis-ci.org/t1st3/generator-amd)


About
-----------

A generator for [Yeoman](http://yeoman.io).

It provides a basic boilerplate for a single AMD module, which features:

* dependency management with [Bower](http://bower.io)
* [JSDoc](http://usejsdoc.org) documentation created on build
* a functional example
* buildable with [Grunt](http://gruntjs.com)
* ready for [Github](https://github.com) and to be published itself on [Bower](http://bower.io)


The proposed Grunt build for the generated AMD module has the following tasks:

* Code quality check: [JSHint](http://jshint.com)
* Code style check: [JSCS](https://npmjs.org/package/jscs)
* Minification of the module: [UglifyJS](http://marijn.haverbeke.nl/uglifyjs)
* Creation of a sourcemap along the minified module
* Automatic creation of the documentation: [JSDoc](http://usejsdoc.org)
* Automatic versioning of all the project when version is modified in package.json
* Opens automagically the project in your browser and reloads the page on each change made to the project (liverelaod)


Installation
-----------

You must have Nodejs and NPM installed. 

Then, to install Yeoman globally from npm, run:

```
npm install -g yo
```

Finally, to install generator-amd globally from npm, run:

```
npm install -g generator-amd
```




Usage of the generator
-----------

Once you have installed Node, NPM and Yeoman, you can initiate the generator:

```
yo amd
```

Yeoman will ask you 3 questions:

1. your github account (e.g. gitaccount)
2. the name of the repository on Github (e.g. my-amd-module)
3. the name of the function that the module defines (e.g. myAmdModule)


Build the sources of your generated AMD module
-----------

In order to build your generated AMD module from its source, you will also need Grunt. To install Grunt globally on the command line (and run the above build task), run:

```
npm install -g grunt-cli
```

Once you have generated your AMD module skeleton, you can build the minified files, the documentation and the example with Grunt:

```
grunt build
```

You can also launch the `grunt serve` task to load the "example" folder in your browser and benefit from livereload of the page in the browser once you edit one of your source file or one of the example files:

```
grunt serve
```


Build the generator from its sources
-----------

The generator itself can be built from its sources. At the moment, the build process only includes syntax checks with [JSHint](http://jshint.com) and [JSCS](https://npmjs.org/package/jscs).

In order to build the generator from its source, you will need Grunt. To install Grunt globally on the command line (and run the above build task), run:

```
npm install -g grunt-cli
```

Just run the `grunt task` in the folder where your generator is installed:

```
grunt
```

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)



Credits
-----------

* [Yeoman](http://yeoman.io)
* [Grunt](http://gruntjs.com)

This generator bundles [Require.js](http://requirejs.org/) for the generated example's purposes.



License
-----------

This generator is released under the [MIT License](https://github.com/t1st3/generator-amd/blob/master/license).
