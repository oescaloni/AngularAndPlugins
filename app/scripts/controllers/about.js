'use strict';

/**
 * @ngdoc function
 * @name angularAndPluginsAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularAndPluginsAppApp
 */
angular.module('angularAndPluginsAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
