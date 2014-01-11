generator-amd 
=============

[![NPM version](https://badge.fury.io/js/generator-amd.png)](http://badge.fury.io/js/generator-amd)
[![Dependencies](https://david-dm.org/t1st3/generator-amd.png)](https://david-dm.org/t1st3/generator-amd)
[![Build Status](https://travis-ci.org/T1st3/generator-amd.png?branch=master)](https://travis-ci.org/T1st3/generator-amd)


About
-----------

A generator for [Yeoman](http://yeoman.io).

It provides a basic boilerplate for a single AMD module.



Installation
-----------

You must have Nodejs and NPM installed. Then, to install Yeoman globally from npm, run:

```
$ npm install -g yo
```

To install generator-amd globally from npm, run:

```
$ npm install -g generator-amd
```

[![NPM](https://nodei.co/npm/generator-amd.png?compact=true)](https://nodei.co/npm/generator-amd/)


Note:

In order to build your generated AMD module from its source, you will also need Grunt. To install Grunt globally on the command line (and run the above build task), run:

```
$ npm install -g grunt-cli
```



Usage
-----------

Once , initiate the generator:

```
$ yo amd
```

Yeoman will ask you 4 questions:

1. your github account (e.g. gitaccount)
2. the name of the repository on Github (e.g. my-amd-module)
3. the version of the module (e.g. 0.1.0)
4. the name of the object that handles the module (e.g. myAmdModule)



Finally, once you have generated your AMD module skeleton, you can build the minified files and the example with Grunt:

```
$ grunt build
```


Credits
-----------

* [Yeoman](http://yeoman.io)



License
-----------

This generator is released under the [MIT License](https://github.com/T1st3/generator-amd/blob/master/LICENSE).
