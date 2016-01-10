describe('Agenda controller', function () {

  var $scope, $ionicModal, $ionicPlatform, LessonService, $cordovaFile, $cordovaEmailComposer, $cordovaDevice, ObservationService, $translate, $filter, $ionicPopup, $cordovaNetwork, SettingsService;

  beforeEach(module('qtsi.controllers'));

  beforeEach(function () {

    $scope = {
      $on: function () {
      }
    };
    $ionicPlatform = {
      ready: function () {
      }
    };
    $ionicModal = {
      fromTemplateUrl: function () {
        return {
          then: function () {
          }
        }
      }
    };

    $ionicPopup = {
      confirm: function () {
      }
    };

    $cordovaNetwork = {
      isOffline: function () {
      }
    };

    $cordovaDevice = {
      getPlatform: function () {
      }
    }

    LessonService = {};
    SettingsService = {};
    ObservationService = {};
    $filter = function () {
    };


    module(function ($provide) {
      $provide.value('$scope', $scope);
      $provide.value('$ionicPlatform', $ionicPlatform);
      $provide.value('$ionicModal', $ionicModal);
      $provide.value('LessonService', LessonService);
      $provide.value('SettingsService', SettingsService);
      $provide.value('ObservationService', ObservationService);
      $provide.value('$cordovaFile', $cordovaFile);
      $provide.value('$cordovaNetwork', $cordovaNetwork);
      $provide.value('$cordovaEmailComposer', $cordovaEmailComposer);
      $provide.value('$cordovaDevice', $cordovaDevice);
      $provide.value('$ionicPopup', $ionicPopup);
      $provide.value('$translate', $translate);
      $provide.value('$filter', $filter);
    });

    inject(function ($rootScope, $controller, $ionicPopup, $cordovaNetwork, $cordovaDevice) {
      $scope = $rootScope.$new();
      $cordovaNetwork = $cordovaNetwork;
      $cordovaDevice = $cordovaDevice;

      ctrl = $controller('AgendaCtrl', {
        $scope: $scope,
        $ionicPopup: $ionicPopup,
        $cordovaNetwork: $cordovaNetwork,
        $cordovaDevice: $cordovaDevice
      });

    });

  });


  it('Defines helper methods on the $scope', function () {
    expect(ctrl).toBeDefined();

    expect($scope.showAddLessonModal).toBeDefined();
    expect($scope.showEditLessonModal).toBeDefined();
    expect($scope.saveLesson).toBeDefined();
    expect($scope.deleteLesson).toBeDefined();
    expect($scope.closeModal).toBeDefined();
    expect($scope.urlForLogFile).toBeDefined();
    expect($scope.addDataObservation).toBeDefined();
    expect($scope.sendEmail).toBeDefined();
  });

  it('Defines $scope variables', function () {

    expect($scope.lesson).toEqual({});
    expect($scope.observerName).toEqual({});
    expect($scope.date).toEqual({});
    expect($scope.location).toEqual({});
    expect($scope.observation).toEqual({});
  });

  describe('$scope.showAddLessonModal', function () {

    beforeEach(function () {
      $scope.modal = {
        show: function () {
        }
      };
    });

    it('calls modal show', function () {


      spyOn($scope.modal, 'show');
      $scope.showAddLessonModal();

      expect($scope.isAdd).toBe(true);
      expect($scope.modal.show).toHaveBeenCalled();

    })
  });

  describe('$scope.showEditLessonModal', function () {

    beforeEach(function () {
      $scope.modal = {
        show: function () {
        }
      };
    });

    it('calls modal show', function () {

      spyOn($scope.modal, 'show');
      $scope.showEditLessonModal();

      expect($scope.isAdd).toBe(false);
      expect($scope.modal.show).toHaveBeenCalled();
    })
  });

  describe('$scope.saveLesson', function () {

    beforeEach(function () {
      $scope.modal = {
        hide: function () {
        }
      };
      LessonService.addLesson = function () {
      };
      LessonService.updateLesson = function () {
      };
    })


    it('calls modal hide', function ($controller) {
      var agendaCtrl = $controller('AgendaCtrl');

      spyOn($scope.modal, 'hide');

      $scope.saveLesson();

      expect($scope.modal.hide).toHaveBeenCalled();
    });


    it('calls LessonService.addLesson if $scope.isAdd is true', function ($controller) {
      var agendaCtrl = $controller('AgendaCtrl');

      spyOn(LessonService, 'addLesson');

      $scope.isAdd = false;
      $scope.saveLesson();

      expect(LessonService.addLesson).not.toHaveBeenCalled();

      $scope.isAdd = true;
      $scope.saveLesson();

      expect(LessonService.addLesson).toHaveBeenCalled();
    });


    it('calls LessonService.updateLesson if $scope.isAdd is true', function ($controller) {
      var agendaCtrl = $controller('AgendaCtrl');

      spyOn(LessonService, 'updateLesson');

      $scope.isAdd = true;
      $scope.saveLesson();

      expect(LessonService.updateLesson).not.toHaveBeenCalled();

      $scope.isAdd = false;
      $scope.saveLesson();

      expect(LessonService.updateLesson).toHaveBeenCalled();
    })
  });

  describe('$scope.deleteLesson', function () {

    beforeEach(function () {
      LessonService.deleteLesson = function () {
      };
      ObservationService.getOneObservation = function () {
      };
      ObservationService.deleteObservation = function () {
      };
    });


    it('should call $scope.deleteLesson function if PopUp confirmed', inject(function ($q) {
      var deferred = $q.defer();
      deferred.resolve('somevalue');

      var popup = spyOn($ionicPopup, 'confirm').and.callThrough().and.returnValue(deferred.promise);
      spyOn(LessonService, 'deleteLesson');

      $scope.deleteLesson();
      expect(popup).toHaveBeenCalled();
    }))
  });

  describe('$scope.closeModal', function () {

    beforeEach(function () {
      $scope.modal = {
        hide: function () {
        }
      };
    });

    it('calls modal hide', function ($controller) {
      var agendaCtrl = $controller('AgendaCtrl');

      spyOn($scope.modal, 'hide');
      $scope.closeModal();

      expect($scope.modal.hide).toHaveBeenCalled();
    })
  });

  describe('$scope.sendEmail', function () {

    beforeEach(function () {
      LessonService.deleteLesson = function () {
      };
      ObservationService.getOneObservation = function () {
      };
      ObservationService.deleteObservation = function () {
      };
      $scope.openMailComposer = function () {
      }
    });
  });
});

