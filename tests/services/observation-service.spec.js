describe('Observation Service', function () {

  var observationService, Loki, observations, rootScope;

  beforeEach(function () {
    //load the module
    module('qtsi.services');

    observations = {
      get: function() { },
      insert: function() { },
      update: function() { },
      remove: function() { },
      data: "myDummyData"
    };

    Loki = function() {
      this.loadDatabase = function(_, f) { f(); };
      this.getCollection = function() { return observations; };
      this.addCollection = function() { return observations; };
    };

    module(function ($provide) {
      $provide.value('Loki', Loki);
    });

    //inject the factory for testing
    inject(function (_ObservationService_, _$rootScope_) {
      observationService = _ObservationService_;
      rootScope = _$rootScope_;
    });
  });


  //check to see if it has the expected functions
  it('should have an initDB, getAllObservations, getOneObservation, addObservation and deleteObservation functions', function () {
    expect(angular.isFunction(observationService.initDB)).toBe(true);
    expect(angular.isFunction(observationService.getAllObservations)).toBe(true);
    expect(angular.isFunction(observationService.getOneObservation)).toBe(true);
    expect(angular.isFunction(observationService.addObservation)).toBe(true);
    expect(angular.isFunction(observationService.deleteObservation)).toBe(true);
  });


  describe('getAllObservations', function() {

    it('returns a promise', function() {
      observationService.initDB();
      expect(observationService.getAllObservations().then).toBeDefined()
    });

    it('resolves to observations.data', function(done) {
      observationService.initDB();
      observationService.getAllObservations().then(function(results) {
        expect(results).toBe(observations.data);
        done();
      });
      rootScope.$apply();
    })
  });
});
