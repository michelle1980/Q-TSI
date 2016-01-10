/**
 * @name qtsi
 *
 * @description
 * The main module which holds everything together.
 */
angular.module('qtsi', ['ionic', 'qtsi.controllers', 'qtsi.services', 'qtsi.directives', 'pascalprecht.translate', 'lokijs', 'ngCordova'])


.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });


})

/**
 * Routing/States of the application
 */
.config(function ($stateProvider, $urlRouterProvider, $translateProvider) {

    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html',
        controller: 'TranslationCtrl'
    })
    // Each tab has its own nav history stack
    .state('tab.agenda', {
            url: '/agenda',
            views: {
                'tab-agenda': {
                    templateUrl: 'templates/tab-agenda.html',
                    controller: 'AgendaCtrl'
                }
            }
        })
        .state('tab.about', {
            url: '/about',
            views: {
                'tab-about': {
                    templateUrl: 'templates/tab-about.html'
                }
            }
        })
    .state('tab.settings', {
            url: '/settings',
            views: {
                'tab-settings': {
                    templateUrl: 'templates/tab-settings.html',
                    controller: 'SettingsCtrl'
                }
            }
        })
        .state('boardposition', {
            url: '/boardposition/:id',
            templateUrl: 'templates/boardposition.html',
            controller: 'BoardPositionCtrl'
        })
        .state('observation', {
            url: '/observation/:boardposition/:teacherDeskLocation/:id',

            templateUrl: 'templates/observation.html',
            controller: 'ObservationCtrl'
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/agenda');


    $translateProvider.useStaticFilesLoader({
        prefix: 'languages/locale-', // path to translations files
        suffix: '.json' // suffix, currently- extension of the translations
    });

    $translateProvider.preferredLanguage('en_US'); // is applied on first load
});