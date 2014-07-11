'use strict';

describe('Directive: mainCanvas', function () {

  // load the directive's module
  beforeEach(module('test3App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<main-canvas></main-canvas>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mainCanvas directive');
  }));
});
