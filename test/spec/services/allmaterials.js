'use strict';

describe('Service: allMaterials', function () {

  // load the service's module
  beforeEach(module('ergApp'));

  // instantiate service
  var allMaterials;
  beforeEach(inject(function (_allMaterials_) {
    allMaterials = _allMaterials_;
  }));

  it('should do something', function () {
    expect(!!allMaterials).toBe(true);
  });

});
