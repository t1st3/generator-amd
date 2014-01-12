
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
	/** 
	 * My AMD module: <%= objectName %>
	 * @module <%= objectName %>
	 * @namespace <%= objectName %>
	 * @version <%= moduleVersion %>
	 */
	
	/**
	 * @constructor
	 * @since 0.1.0
	 */
	var <%= objectName %> = function () {
		this.params = [];
		
		/**
		 * my method
		 * @method myMethod
		 * @memberof <%= objectName %>
		 * @param {string|Object|number} param
		 * @since 0.1.0
		 */
		this.myMethod = function (param) {
			console.log('Method: myMethod | ' + param);
			return param;
		};
		return this;
	};
	
	/**
	 * my prototype
	 * @method myPrototype
	 * @memberof <%= objectName %>
	 * @param {string} name
	 * @param {string} value
	 * @since 0.1.0
	 */
	<%= objectName %>.prototype.myPrototype = function (name, value) {
		console.log('Method: myPrototype');
		return name + ' | ' ;
	}

	return <%= objectName %>;
});