'use strict';

require('mocha');
var assert = require('assert');
var isAffirmative = require('./');

describe('is-affirmative', function() {
  it('should export a function', function() {
    assert.equal(typeof isAffirmative, 'function');
  });

  it('should return true if the value is affirmative', function() {
    assert(isAffirmative('yes'));
    assert(isAffirmative('yeah'));
    assert(isAffirmative('ok'));
    assert(isAffirmative('okay'));
    assert(isAffirmative('sure'));
  });

  it('should return false if the value is not affirmative', function() {
    assert(!isAffirmative('no'));
  });
});
