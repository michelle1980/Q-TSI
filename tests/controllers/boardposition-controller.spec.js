
describe('Board Position controller', function () {

  var $scope, $stateParams, $ionicPlatform, LessonService, PositionsService;
  $stateParams = {value: 'value'};

  beforeEach(module('qtsi.controllers'));

  beforeEach(function () {

    $ionicPlatform = {
      ready: function () {
      }
    };

    LessonService = {};
    PositionsService = {};


    module(function ($provide) {
      $provide.value('$scope', $scope);
      $provide.value('$ionicPlatform', $ionicPlatform);
      $provide.value('$stateParams', $stateParams);
      $provide.value('LessonService', LessonService);
      $provide.value('PositionsService', PositionsService);
    });

    inject(function ($rootScope, $controller) {
      $scope = $rootScope.$new();

      ctrl = $controller('BoardPositionCtrl', {
        $scope: $scope,
        $stateParams: $stateParams
      });

    });

  });

  it('Defines helper methods on the $scope', function () {
    expect(ctrl).toBeDefined();

    expect($scope.setBoardPosition).toBeDefined();
    expect($scope.setTeacherDeskLocation).toBeDefined();
    expect($scope.save).toBeDefined();
  });

  describe('$scope.setBoardPosition', function () {

    beforeEach(function () {

      PositionsService.setNumeration = function (boardposition) {
        return { positions_1: 'positions_1',
          positions_2: 'positions_2',
          positions_3: 'positions_3',
          positions_4: 'positions_4'}
      };

    });

    it("should have a scope variable defined", function() {
      expect($scope).toBeDefined();
    });

    it('should call the positions service to retrieve the positions', function () {
      spyOn(PositionsService, 'setNumeration').and.callThrough();
      $scope.setBoardPosition('top');
      expect($scope.boardposition).toEqual('top');
      expect(PositionsService.setNumeration).toHaveBeenCalled();
      expect($scope.positions_1).toEqual('positions_1');
      expect($scope.positions_2).toEqual('positions_2');
      expect($scope.positions_3).toEqual('positions_3');
      expect($scope.positions_4).toEqual('positions_4');
    })
  });

  describe('$scope.setTeacherDeskLocation', function () {

    it("should have a scope variable defined", function() {
      expect($scope).toBeDefined();
    });

    it('should define $scope.teacherDeskLocation', function () {

      $scope.setTeacherDeskLocation('5');
      expect($scope.teacherDeskLocation).toEqual('5');
    })
  });

  describe('$scope.save', function () {

    beforeEach(function () {

      LessonService.getOneLesson = function () { return { } };

      LessonService.updateLesson = function () { };

    });

    it("should have a scope variable defined", function() {
      expect($scope).toBeDefined();
    });

    it('should call the lessons service to retrieve one Lesson', function () {
      spyOn(LessonService, 'getOneLesson').and.callThrough();
      spyOn(LessonService, 'updateLesson').and.callThrough();
      $scope.save();

      expect(LessonService.getOneLesson).toHaveBeenCalled();
      expect(LessonService.updateLesson).toHaveBeenCalled();
    })
  });


});


