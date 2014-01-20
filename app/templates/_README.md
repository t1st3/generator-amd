<%= moduleName %>
==============

About
--------------

URL: [https://github.com/<%= githubAccount %>/<%= moduleName %>](https://github.com/<%= githubAccount %>/<%= moduleName %>)

Author: [<%= githubAccount %>](https://github.com/<%= githubAccount %>)



Build from source
--------------

In order to build your generated AMD module from its source, you will also need Grunt. To install Grunt globally on the command line (and run the above build task), run:

```
npm install -g grunt-cli
```

Once you have generated your AMD module skeleton, you can build the minified files, the documentation and the example with Grunt:

```
grunt build
```

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)


Credits
--------------

<%= moduleName %> was initiated with [generator-amd](https://github.com/T1st3/generator-amd), a [Yeoman](http://yeoman.io) generator that builds an AMD module boilerplate.

This project uses the following as development dependencies:

* [JSHint](http://jshint.com)
* [JSCS](https://npmjs.org/package/jscs)
* [UglifyJS](http://marijn.haverbeke.nl/uglifyjs)
* [JSDoc](http://usejsdoc.org)



License
--------------

[License](https://github.com/<%= githubAccount %>/<%= moduleName %>/blob/master/LICENSE)