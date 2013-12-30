
/*
 * <%= moduleName %>
 * 
 * URL: https://github.com/<%= _.slugify(githubAccount) %>/<%= _.slugify(moduleName) %>
 * Author: <%= githubAccount %>
 * License: https://github.com/<%= _.slugify(githubAccount) %>/<%= _.slugify(moduleName) %>/blob/master/LICENSE
 * 
 */

'use strict';

/* global define */

define([

], function () {
	console.log('Module <%= objectName %> loaded');
	var <%= objectName %> = function () {
		this.params = [];
		return this;
	};

	return <%= objectName %>;
});