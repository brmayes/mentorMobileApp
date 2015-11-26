angular
  .module('example')
  .controller('FormController', function($scope) {

    // FORM FOR REGISTERING USER
    $scope.regFormParse = function(regForm) {

      var user = new Parse.User();
        user.set("username", $scope.userName);
        user.set("password", $scope.userPass);
        user.set("email", $scope.userEmail);
        user.set("role", $scope.userRole);

        if ($scope.userRole == null ) {
          alert("Please select a role.")
        }

        else {
          user.signUp(null, {
            success: function(user) {
              // Hooray! Let them use the app now.
              alert("Please check your inbox for a verification email.");
              supersonic.ui.View("example#getting-started");
            },
            error: function(user, error) {
              // Show the error message somewhere and let the user try again.
              alert("Error: " + error.code + " " + error.message);
            }
          });
        }

    }

    // FORM FOR LOG IN USER
    $scope.logFormParse = function(logForm) {

      var currentUser = Parse.User.current();
      var username = $scope.userName;
      var password = $scope.userPass;
      var email = $scope.userEmail;


        Parse.User.logIn(username, password, {
          success: function(user) {
            // Do stuff after successful login.
            alert("Success!");
            supersonic.ui.modal.hide();
          },
          error: function(user, error) {
            // The login failed. Check error to see why.
            alert("Error: " + error.code + " " + error.message);
          }
        });

      }

    //LOG OUT BUTTON FUNCTION
    $scope.logOut = function(logOutButton){
      alert("log out function opened");
      Parse.User.logOut();
      var currentUser = Parse.User.current();  // this will now be null
      alert("log out function run");

      var modalView = new supersonic.ui.View("example#getting-started");
      var options = {
        animate: true
      }

      supersonic.ui.modal.show(modalView, options);

    };


  });
