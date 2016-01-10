describe('Observation controller', function () {

  var $scope, $ionicPlatform, ObservationService, $stateParams, LessonService, $ionicModal, $state, $ionicPopup, $translate, $filter, FormatDataService, $timeout, PositionsService;
  $stateParams = {id: 'value', idO: 'value', boardposition: 'value', teacherDeskLocation: 'value'};

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

    $ionicPopup = {
      confirm: function () {
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
    ;
    LessonService = {};
    ObservationService = {};
    FormatDataService = {};
    PositionsService = {};
    $filter = function () {
    };

    PositionsService.setNumeration = function (boardposition) {
      return {
        positions_1: 'positions_1',
        positions_2: 'positions_2',
        positions_3: 'positions_3',
        positions_4: 'positions_4'
      }
    };

    module(function ($provide) {
      $provide.value('$scope', $scope);
      $provide.value('$ionicPlatform', $ionicPlatform);
      $provide.value('ObservationService', ObservationService);
      $provide.value('$stateParams', $stateParams);
      $provide.value('LessonService', LessonService);
      $provide.value('$ionicModal', $ionicModal);
      $provide.value('$state', $state);
      $provide.value('$ionicPopup', $ionicPopup);
      $provide.value('$translate', $translate);
      $provide.value('$filter', $filter);
      $provide.value('FormatDataService', FormatDataService);
      $provide.value('$timeout', $timeout);
      $provide.value('PositionsService', PositionsService);
    });

    inject(function ($rootScope, $controller, $ionicPopup) {

      $scope = $rootScope.$new();


      ctrl = $controller('ObservationCtrl', {
        $scope: $scope,
        $ionicPopup: $ionicPopup
      });

    });
  });

  it('Defines helper methods on the $scope', function () {
    expect(ctrl).toBeDefined();

    expect($scope.openModal).toBeDefined();
    expect($scope.closeModal).toBeDefined();
    expect($scope.saveComment).toBeDefined();
    expect($scope.addData).toBeDefined();
    expect($scope.saveObservation).toBeDefined();
  });


  it('Defines $scope variables', function () {
    expect($scope.data).toEqual([]);
    expect($scope.observation).toEqual({});
    expect($scope.id).toEqual('value');
    expect($scope.idO).toEqual('value');
    expect($scope.boardposition).toEqual('value');
    expect($scope.teacherDeskLocation).toEqual('value');
  });

  it('Defines $scope.positions_ variables', function () {
    spyOn(PositionsService, 'setNumeration').and.callThrough();
    expect($scope.positions_1).toEqual('positions_1');
    expect($scope.positions_2).toEqual('positions_2');
    expect($scope.positions_3).toEqual('positions_3');
    expect($scope.positions_4).toEqual('positions_4');
  });

  describe('$scope.openModal', function () {
    beforeEach(function () {
      $scope.modal = {
        show: function () {
        }
      };
    });
    it('calls modal show', function () {
      spyOn($scope.modal, 'show');
      $scope.openModal();

      expect($scope.modal.show).toHaveBeenCalled();
    });
  });

  describe('$scope.closeModal', function () {
    beforeEach(function () {
      $scope.modal = {
        hide: function () {
        }
      };
    });
    it('calls modal hide', function () {
      spyOn($scope.modal, 'hide');
      $scope.closeModal();

      expect($scope.modal.hide).toHaveBeenCalled();
    });
  });

  describe('$scope.saveObservation', function () {

    beforeEach(function () {

      LessonService.getOneLesson = function () {
        return {}
      };
      LessonService.updateLesson = function () {
        return {}
      };
    });

    it('$scope.saveObservation', inject(function ($q) {
      var deferred = $q.defer();
      deferred.resolve('somevalue');

      spyOn(LessonService, 'getOneLesson').and.callThrough();
      spyOn(LessonService, 'updateLesson').and.callThrough();

      var popup = spyOn($ionicPopup, 'confirm').and.callThrough().and.returnValue(deferred.promise);
      $scope.saveObservation();

      expect(LessonService.getOneLesson).toHaveBeenCalled();
      expect(LessonService.updateLesson).toHaveBeenCalled();
      expect(popup).toHaveBeenCalled();
    }));
  });
});

