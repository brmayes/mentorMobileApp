angular
  .module('example')
  .controller('EditProfile', function($scope) {

    var user = Parse.User.current();
    var currentUserName = user.escape("username");
    var currentUserId = user.id;
    var currentUserEmail = user.getEmail();
    var currentUserRole = user.get("role");
    var profilePictureURL = user.escape("profilePicture");
    var profilePicture = "<img class='userProfilePicture' src='" + profilePictureURL + "'>";

    $scope.profileUpdate = function(updateUserProfile) {
      user.set("firstName", $scope.firstName);
      user.set("lastName", $scope.lastName);

      //bio
      user.set("userBio", $scope.bio);
      user.set("hometown", $scope.userHometown);

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

      //social
      user.set("userFacebook", $scope.facebook);
      user.set("userTwitter", $scope.twitter);
      user.set("userInstagram", $scope.instagram);

      user.save(null, {
        success: function(user) {
          user.save();
          alert("User information updated!");

          user.fetch({
            success: function(user) {
              var view = new supersonic.ui.View("example#profile");
              supersonic.ui.layers.push(view);
            },
            error: function(user, error) {
              alert("not pushed");
            }

          });


        },
        error: function (user, error) {
          alert("WOAH. Something went wrong! Try again?")
        }
      });

    }
  });
