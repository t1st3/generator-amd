'use strict';
require.config({
	baseUrl: '',
	paths: {
		jquery: 'jquery.min',
		<%= objectSlug %>: '<%= moduleSlug %>.min'
	},
	shim: {
		jquery: {
			exports: '$'
		},
		<%= objectSlug %>: {
			exports: '<%= objectName %>'
		}
	},
	scriptType: 'text/javascript'
});

require([
	'jquery',
	'<%= objectSlug %>'
], function ($, <%= objectName %>) {
	var a = new  <%= objectName %>();
	a.myMethod('foo');
	a.myPrototype('foo', 'bar');
});
