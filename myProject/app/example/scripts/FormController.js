angular
  .module('example')
  .controller('FormController', function($scope) {

    $scope.formParse = function(form) {

      var user = new Parse.User();
        user.set("username", $scope.userName);
        user.set("password", $scope.userPass);
        user.set("email", $scope.userEmail);
        //user.set("role", $scope.userRole);

        user.signUp(null, {
          success: function(user) {
            // Hooray! Let them use the app now.
            alert("user added");
          },
          error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
          }
      });

    }

  });
