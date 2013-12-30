require.config({
	baseUrl: '',
	paths: {
		jquery: 'jquery.min',
		<%= _.slugify(objectName) %>: '<%= _.slugify(moduleName) %>.min'
	},
	shim: {
		jquery: {
			exports: '$'
		},
		<%= _.slugify(objectName) %>: {
			exports: '<%= objectName %>'
		}
	},
	scriptType: "text/javascript"
});

require([
	'jquery',
	'<%= _.slugify(objectName) %>'
], function($, <%= objectName %>){
	var a = new  <%= objectName %>();
});