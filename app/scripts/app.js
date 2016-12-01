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
    'ngTouch'
  ])
  .config(function($routeProvider, $locationProvider) {
    if (window.history && window.history.pushState) {
        $locationProvider.html5Mode(true);
    } else {
        // IE9
        $locationProvider.hashPrefix('!');
        //window.location = window.location.href.replace( /#.*/, "");
    }

    $routeProvider
      .when('/', {
        templateUrl: 'views/block.html',
        controller: 'BlockCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
