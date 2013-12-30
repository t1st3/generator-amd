require.config({
	baseUrl: '',
	paths: {
		jquery: 'jquery.min',
		: '.min'
	},
	shim: {
		jquery: {
			exports: '$'
		},
		: {
			exports: ''
		}
	},
	scriptType: "text/javascript"
});

require([
	'jquery',
	''
], function($, ){
	var a = new  ();
});