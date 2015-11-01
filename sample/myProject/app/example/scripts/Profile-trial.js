angular
  .module('example')
  .controller('Profile', function($scope, supersonic, angular) {

    // $scope.username = 'World';
    //
    // $scope.sayHello = function() {
    //   $scope.greeting = 'Hello ' + $scope.username + '!';
    // };

    $scope.state = "PERSONAL";

    $scope.profilePersonal = function() {
      $scope.state = "PERSONAL";
    }
    $scope.profileAcademics = function() {
      $scope.state = "ACADEMICS";
    }
    $scope.profileContact = function() {
      $scope.state = "CONTACT";
    }
    $scope.profileConnect = function() {
      $scope.state = "CONNECT";
    }

    // });

  })(window.angular);
//
// (function(angular) {
//   'use strict';
// angular.module('scopeExample', [])
//   .controller('GreetController', ['$scope', '$rootScope', function($scope, $rootScope) {
//     $scope.name = 'World';
//     $rootScope.department = 'Angular';
//   }])
//   .controller('ListController', ['$scope', function($scope) {
//     $scope.names = ['Igor', 'Misko', 'Vojta'];
//   }]);
// })(window.angular);
