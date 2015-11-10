angular
  .module('example')
  .controller('Profile', function($scope) {
    supersonic.logger.log("Profile.js loaded");

    //bringing user's name, major and class in

    var currentUserName = Parse.User.current().escape("username");
    document.getElementById("userProfileName").innerHTML = currentUserName;

    var currentUserMajor = "Replace with major";
    //Parse.User.current().escape("major");
    document.getElementById("userProfileMajor").innerHTML = currentUserMajor;

    var currentUserClass = "Replace with class status"
      //Parse.User.current().escape("class");
    document.getElementById("userProfileClass").innerHTML = currentUserClass;


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
