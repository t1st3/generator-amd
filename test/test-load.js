/* global describe,it */
'use strict';

const assert = require('assert');
const app = require('../app');

describe('amd generator', () => {
	it('can be imported without blowing up', () => {
		assert(app !== undefined);
	});
});
