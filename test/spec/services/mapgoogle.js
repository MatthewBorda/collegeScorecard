'use strict';

describe('Service: mapGoogle', function () {

  // load the service's module
  beforeEach(module('collegeScorecardApp'));

  // instantiate service
  var mapGoogle;
  beforeEach(inject(function (_mapGoogle_) {
    mapGoogle = _mapGoogle_;
  }));

  it('should do something', function () {
    expect(!!mapGoogle).toBe(true);
  });

});
