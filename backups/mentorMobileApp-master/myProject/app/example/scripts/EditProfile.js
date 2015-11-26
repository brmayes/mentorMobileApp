angular
  .module('example')
  .controller('EditProfile', function($scope) {

    var user = Parse.User.current();
    var currentUserId = Parse.User.current().id;
    var currentUserEmail = Parse.User.current().getEmail();
    var currentUserRole = Parse.User.current().get("role");

    $scope.profileUpdate = function(updateUserProfile) {

      //bio
      user.set("userBio", $scope.bio);

      //academics
      user.set("userTeamNum", $scope.teamNum);
      user.set("userClassStatus", $scope.classStatus);
      user.set("userMajor", $scope.userMajor);
      user.set("userDoubleMajor", $scope.userDoubleMajor);
      user.set("userMinor", $scope.userMinor);
      user.set("userDoubleMinor", $scope.userDoubleMinor);
      user.set("userAcademicInterests", $scope.academicInterests);
      user.set("userCampusInvolvement", $scope.campusInvolvement);

      //contact
      user.set("userPhoneNum", $scope.phoneNum);
      user.set("userPersonalEmail", $scope.personalEmail);
      user.set("userLinkedIn", $scope.linkedIn);

      //social
      user.set("userFacebook", $scope.facebook);
      user.set("userTwitter", $scope.twitter);
      user.set("userInstagram", $scope.instagram);
      user.set("userSnapChat", $scope.snapchat);

      user.save(null, {
        success: function(user) {
          user.save();
          alert("User information updated!");
            // var userBio = Parse.User.current().escape("userBio");
            // document.getElementById("userBio").innerHTML = userBio;
            // var currentUserName = Parse.User.current().escape("username");
            // document.getElementById("userProfileName").innerHTML = currentUserName;
            // var currentUserName = Parse.User.current().escape("username");
            // document.getElementById("userProfileName").innerHTML = currentUserName;
            // var currentUserName = Parse.User.current().escape("username");
            // document.getElementById("userProfileName").innerHTML = currentUserName;
            // var currentUserName = Parse.User.current().escape("username");
            // document.getElementById("userProfileName").innerHTML = currentUserName;
            // var currentUserName = Parse.User.current().escape("username");
            // document.getElementById("userProfileName").innerHTML = currentUserName;
            // var currentUserName = Parse.User.current().escape("username");
            // document.getElementById("userProfileName").innerHTML = currentUserName;
            // var currentUserName = Parse.User.current().escape("username");
            // document.getElementById("userProfileName").innerHTML = currentUserName;
            // var currentUserName = Parse.User.current().escape("username");
            // document.getElementById("userProfileName").innerHTML = currentUserName;


        },
        error: function (user, error) {
          alert("WOAH. Something went wrong! Try again?")
        }
      });

    }
  });
