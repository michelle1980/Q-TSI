describe('Settings Service', function () {

  var settingsService, Loki, settings, rootScope;

  beforeEach(function () {
    //load the module
    module('qtsi.services');

    settings = {
      insert: function() { },
      update: function() { },
      data: "myDummyData"
    };

    Loki = function() {
      this.loadDatabase = function(_, f) { f(); };
      this.getCollection = function() { return settings; };
      this.addCollection = function() { return settings; };
    };

    module(function ($provide) {
      $provide.value('Loki', Loki);
    });

    //inject the factory for testing
    inject(function (_SettingsService_, _$rootScope_) {
      settingsService = _SettingsService_;
      rootScope = _$rootScope_;
    });
  });


  //check to see if it has the expected functions
  it('should have an initDB, getAllSettings, addSettings, updateSettings functions', function () {
    expect(angular.isFunction(settingsService.initDB)).toBe(true);
    expect(angular.isFunction(settingsService.getAllSettings)).toBe(true);
    expect(angular.isFunction(settingsService.addSettings)).toBe(true);
    expect(angular.isFunction(settingsService.updateSettings)).toBe(true);
  });


  describe('getAllSettings', function() {

    it('returns a promise', function() {
      settingsService.initDB();
      expect(settingsService.getAllSettings().then).toBeDefined()
    });

    it('resolves to settings.data', function(done) {
      settingsService.initDB();
      settingsService.getAllSettings().then(function(results) {
        expect(results).toBe(settings.data);
        done();
      });
      rootScope.$apply();
    })
  });
});
