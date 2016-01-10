describe('Settings controller', function () {

  var $scope, SettingsService, $ionicPlatform, $cordovaToast, $translate, $filter;

  beforeEach(module('qtsi.controllers'));

  beforeEach(function () {

    $ionicPlatform = {
      ready: function () {
      }
    };

    $cordovaToast = {
      showShortBottom: function () {
      }
    }
    $filter = function () {
    };

    $translate = function () {
    };

    SettingsService = {};


    module(function ($provide) {
      $provide.value('$scope', $scope);
      $provide.value('$ionicPlatform', $ionicPlatform);
      $provide.value('SettingsService', SettingsService);
      $provide.value('$cordovaToast', $cordovaToast);
      $provide.value('$translate', $translate);
      $provide.value('$filter', $filter);
    });

    inject(function ($rootScope, $controller, $cordovaToast) {
      $scope = $rootScope.$new();
      $cordovaToast = $cordovaToast;

      ctrl = $controller('SettingsCtrl', {
        $scope: $scope,
        $cordovaToast: $cordovaToast
      });
    });

  });

  it('Defines helper methods on the $scope', function () {
    expect(ctrl).toBeDefined();
    expect($scope.saveSettings).toBeDefined();
  });

  it('Defines $scope variables', function () {
    expect($scope.data).toEqual([]);
  });

  describe('$scope.saveSettings', function () {

    beforeEach(function () {
      data = {
        observerName : ''
      }

      SettingsService.addSettings = function () {
        return {}
      };

      SettingsService.updateSettings = function () {
        return {}
      };
    });

    it('calls SettingsService.updateSettings if observerName and/or language already exist', function () {
      settings = {};
      $scope.settings = settings;
      $scope.settings.observerName = 'Michelle';
      $scope.settings.language = 'de_DE';

      spyOn(SettingsService, 'updateSettings');
      spyOn(SettingsService, 'addSettings');

      $scope.saveSettings(data);

      expect(SettingsService.updateSettings).toHaveBeenCalled();
      expect(SettingsService.addSettings).not.toHaveBeenCalled();
    });

    it('calls SettingsService.addSettings if observerName and/or language do not exist', function () {
      settings = {};
      $scope.settings = settings;
      $scope.settings.observerName = '';
      $scope.settings.language = '';

      spyOn(SettingsService, 'updateSettings');
      spyOn(SettingsService, 'addSettings');

      $scope.saveSettings(data);

      expect(SettingsService.updateSettings).not.toHaveBeenCalled();
      expect(SettingsService.addSettings).toHaveBeenCalled();
    });

  });

});


