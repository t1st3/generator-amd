/* global describe,it */
'use strict';

var assert = require('assert');
var app = require('../app');

describe('amd generator', function () {
	it('can be imported without blowing up', function () {
		assert(app !== undefined);
	});
});
