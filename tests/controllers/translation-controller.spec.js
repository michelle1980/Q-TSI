describe('Translation controller', function () {

  var $scope, $translate;

  beforeEach(module('qtsi.controllers'));

  beforeEach(function () {

    $translate = {
      use: function () {
      }
    };

    module(function ($provide) {
      $provide.value('$scope', $scope);
      $provide.value('$translate', $translate);
    });

    inject(function ($rootScope, $controller, $translate) {
      $scope = $rootScope.$new();
      $translate = $translate;

      ctrl = $controller('TranslationCtrl', {
        $scope: $scope,
        $translate: $translate
      });
    });
  });


  it('Defines helper methods on the $scope', function () {
    expect(ctrl).toBeDefined();
    expect($scope.setLanguage).toBeDefined();
  });

  describe('$scope.setLanguage', function () {
    it('should call $translate.use with parameter key ', function () {
      spyOn($translate, 'use');
      $scope.setLanguage('key');
      expect($translate.use).toHaveBeenCalled();
    });
  });

});

