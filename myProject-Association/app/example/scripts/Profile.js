angular
  .module('example')
  .controller('Profile', function($scope) {

    //bringing user's name, major and class in
    var user = Parse.User.current().escape("username");
    document.getElementById("userProfileName").innerHTML = user;
    var profilePictureURL = Parse.User.current().escape("profilePicture");
    var profilePicture = "<img class='userProfilePicture' src='" + profilePictureURL + "'>";
    document.getElementById("profilePicture").innerHTML = profilePicture;




    //switcher operation
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

    //showing edit profile view and saving information
    $scope.editProfile = function(editProfile) {
      supersonic.logger.log("edit profile");
      //alert("edit pushed")
      var view = new supersonic.ui.View("example#edit-profile");
      supersonic.ui.layers.push(view);
    }

  });
