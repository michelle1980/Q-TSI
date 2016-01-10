/**
 * @project Q-TSI
 * @author Michelle Schwarz
 * @module qtsi
 * @version 0.1
 * Directives of the application
 */

angular.module('qtsi.directives', [])

/**
 * @name directive: hideTabs
 * @description
 * Directive to hide Tabs-Menu on view
 */
.directive('hideTabs', function ($rootScope) {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {

            scope.$on('$ionicView.beforeEnter', function () {
                scope.$watch(attributes.hideTabs, function (value) {
                    $rootScope.hideTabs = value;
                });
            });

            scope.$on('$ionicView.beforeLeave', function () {
                $rootScope.hideTabs = false;
            });
        }
    };
})