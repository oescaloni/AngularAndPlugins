'use strict';

/**
 * @ngdoc overview
 * @name angularAndPluginsAppApp
 * @description
 * # angularAndPluginsAppApp
 *
 * Main module of the application.
 */
angular
    .module('angularAndPluginsAppApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
      
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
        ;

        $urlRouterProvider.otherwise('/');
    }])

    .run(['$rootScope','config', function($rootScope, config) {
        $rootScope.prueba = config.prueba;
    }])
;