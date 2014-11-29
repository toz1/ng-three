'use strict';

describe('Service: particuleEngine', function () {

  // load the service's module
  beforeEach(module('test3App'));

  // instantiate service
  var particuleEngine;
  beforeEach(inject(function (_particuleEngine_) {
    particuleEngine = _particuleEngine_;
  }));

  it('should do something', function () {
    expect(!!particuleEngine).toBe(true);
  });

});
