'use strict';

/**
 * @ngdoc function
 * @name angularAndPluginsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAndPluginsAppApp
 */
angular.module('angularAndPluginsAppApp')
    .controller('MainCtrl', function ($scope, md5) {
        $scope.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];

        //texto y texto hasheado con angular-md5
        $scope.texto = 'texto';
        $scope.message = 'Your email Hash is: ' + md5.createHash($scope.texto || '');
    })
;