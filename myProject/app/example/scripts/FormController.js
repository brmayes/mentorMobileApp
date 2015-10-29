angular
  .module('example')
  .controller('FormController', function($scope) {
    var userName;
    var userPass;
    var userEmail;
    var userRole;

    $scope.regFormParse = function(regForm) {

      var user = new Parse.User();
        user.set("username", $scope.userName);
        user.set("password", $scope.userPass);
        user.set("email", $scope.userEmail);
        user.set("role", $scope.userRole);

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

$scope.logFormParse = function(logForm) {

  var currentUser = Parse.User.current();
  var username = $scope.userName;
  var password = $scope.userPass;
  var email = $scope.userEmail;



      Parse.User.logIn(username, password, {
        success: function(user) {
          // Do stuff after successful login.
          alert("logged in!");
        },
        error: function(user, error) {
          // The login failed. Check error to see why.
          alert("Error: " + error.code + " " + error.message);
          //alert("login failed!");
        }
      });

    }




//     $scope.loginFormParse = function(logForm) {
//       function logIn() {
//         Parse.User.logIn("userEmail", "userPass", {
//           success: function(user) {
//             // Do stuff after successful login.
//             alert("logged in!");
//           },
//           error: function(user, error) {
//             // The login failed. Check error to see why.
//             alert("Error: " + error.code + " " + error.message);
//             //alert("login failed!");
//
//           }
//         });
//
//     }
//
// }

  });
