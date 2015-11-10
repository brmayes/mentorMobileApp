angular
  .module('example')
  .controller('Profile', function($scope, supersonic) {

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

  });
