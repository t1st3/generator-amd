
/*
 * <%= moduleName %>
 * Description of the module
 * @link https://github.com/<%= githubAccount %>/<%= moduleName %>
 * @author <%= githubAccount %>
 * @version 0.1.0
 * @license https://github.com/<%= githubAccount %>/<%= moduleName %>/blob/master/LICENSE
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
	 * @version 0.1.0
	 * @author <%= githubAccount %>
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
		 * @returns {String} returns params
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
	 * @returns {String} returns name | value
	 */
	<%= objectName %>.prototype.myPrototype = function (name, value) {
		console.log('Method: myPrototype');
		return name + ' | ' + value;
	};

	return <%= objectName %>;
});
