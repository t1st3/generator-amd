# generator-amd 

[![Build Status](https://travis-ci.org/T1st3/generator-amd.png?branch=master)](https://travis-ci.org/T1st3/generator-amd)
[![Dependencies](https://david-dm.org/t1st3/generator-amd.png)](https://david-dm.org/t1st3/generator-amd)

A generator for [Yeoman](http://yeoman.io).

It provides a basic boilerplate for a single AMD module.

### Usage

You must have Nodejs and NPM installed. Then, to install Yeoman globally from npm, run:

```
$ npm install -g yo
```

To install generator-amd globally from npm, run:

```
$ npm install -g generator-amd
```

Then, initiate the generator:

```
$ yo amd
```

Yeoman will ask you 4 questions:

1. your github account (e.g. gitaccount)
2. the name of the repository on Github (e.g. my-amd-module)
3. the version of the module (e.g. 0.1.0)
4. the name of the object that handles the module (e.g. myAmdModule)



Finally, build the minified files and the example

```
$ grunt build
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
