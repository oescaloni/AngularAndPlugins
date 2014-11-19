'use strict';

/**
 * @ngdoc function
 * @name angularAndPluginsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAndPluginsAppApp
 */
angular.module('angularAndPluginsAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
