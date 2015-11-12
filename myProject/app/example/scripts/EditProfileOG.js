angular
  .module('example')
  .controller('EditProfileOG', function($scope) {

    var currentUserName = Parse.User.current();
    var currentUserId = Parse.User.current().id;
    var currentUserEmail = Parse.User.current().getEmail();
    var currentUserRole = Parse.User.current().get("role");

    //creating user information for the first time
    var UserInformation = Parse.Object.extend("UserInformation");

    //creating a new instance
    var userInformation = new UserInformation();

    $scope.profileUpdate = function(updateUserProfile) {
      var queryObject = new Parse.Query(UserInformation);

      //why can i access the user id and not use it for the query?

      queryObject.equalTo("objectId", currentUserId);
      queryObject.find({
        success: function(usersData) {
          // userPosts contains all of the posts by the current user.
          if (usersData.length != 0) {
            supersonic.logger.log("user is in system");
            supersonic.logger.log(usersData);


            //UPDATE THE INFORMATION
            supersonic.logger.log("updating old information");

            //autofill basic information
            userInformation.set("userName", currentUserName);
            userInformation.set("userEmail", currentUserEmail);
            userInformation.set("userRole", currentUserRole);

            //bio
            userInformation.set("userBio", $scope.bio);

            //academics
            userInformation.set("userClassStatus", $scope.classStatus);
            userInformation.set("userMajor", $scope.userMajor);
            userInformation.set("userDoubleMajor", $scope.userDoubleMajor);
            userInformation.set("userMinor", $scope.userMinor);
            userInformation.set("userDoubleMinor", $scope.userDoubleMinor);
            userInformation.set("userAcademicInterests", $scope.academicInterests);
            userInformation.set("userCampusInvolvement", $scope.campusInvolvement);

            //contact
            userInformation.set("userPhoneNum", $scope.phoneNum);
            userInformation.set("userPersonalEmail", $scope.personalEmail);
            userInformation.set("userLinkedIn", $scope.linkedIn);

            //social
            userInformation.set("userFacebook", $scope.facebook);
            userInformation.set("userTwitter", $scope.twitter);
            userInformation.set("userInstagram", $scope.instagram);
            userInformation.set("userSnapChat", $scope.snapchat);

            userInformation.save(null, {
              success: function(userInformation) {
                userInformation.save();
                alert("User information updated!");

              }
            });

          }
          else {

            supersonic.logger.log("user is not in system");

            //STORE NEW INFORMATION
            supersonic.logger.log("storing new information");

              //autofill basic information
              userInformation.set("userName", currentUserName);
              userInformation.set("userEmail", currentUserEmail);
              userInformation.set("userRole", currentUserRole);

              //bio
              userInformation.set("userBio", $scope.bio);

              //academics
              userInformation.set("userClassStatus", $scope.classStatus);
              userInformation.set("userMajor", $scope.userMajor);
              userInformation.set("userAcademicInterests", $scope.academicInterests);
              userInformation.set("userCampusInvolvement", $scope.campusInvolvement);

              //contact
              userInformation.set("userPhoneNum", $scope.phoneNum);
              userInformation.set("userPersonalEmail", $scope.personalEmail);
              userInformation.set("userLinkedIn", $scope.linkedIn);

              //social
              userInformation.set("userFacebook", $scope.facebook);
              userInformation.set("userTwitter", $scope.twitter);
              userInformation.set("userInstagram", $scope.instagram);
              userInformation.set("userSnapChat", $scope.snapchat);

            userInformation.save(null, {
              success: function(userInformation) {
                // Find all data by the current user
                var query = new Parse.Query(UserInformation);
                query.equalTo("userName", currentUserName);
                query.find({
                  success: function(usersData) {
                    // userPosts contains all of the posts by the current user.
                    alert("User data has been saved!");
                  },
                  error: function(usersData) {
                    alert("Error! User data was not saved. " + error.message);
                  }
                });
              }
            });

          }
        }
      });






      // var userObjectId = Parse.User.current().escape("objectId");
      //
      // var query = new Parse.Query(UserInformation);
      // var objectId = userInformation.id;
      // var updatedAt = UserInformation.updatedAt;
      // var createdAt = UserInformation.createdAt;
      //
      // supersonic.logger.log("update");
      //
      // alert("the update is running" + userObjectId);
      // supersonic.logger.log("got object id");
      //
      //
      // query.get(objectId, {
      //   success: function(userInformation) {
      //     var facebook = userInformation.get("facebook");
      //     // The object was retrieved successfully.
      //     alert("your facebook name is " + facebook);
      //   },
      //   error: function(object, error) {
      //     // The object was not retrieved successfully.
      //     // error is a Parse.Error with an error code and message.
      //   }
      // });

      // var view = new supersonic.ui.View("example#temp-profile-display");
      // supersonic.ui.layers.push(view);

    }

    // $scope.displayUserData = function(displayUserInformation) {
    //   var userBio = Parse.User.current().get("userBio");
    //   alert(userBio);
    // }

    //
    // var currentUserName = Parse.User.current().escape("username");
    // document.getElementById("userProfileName").innerHTML = currentUserName;
    //
    // var currentUserFacebook = Parse.User.current().escape("facebook");
    // document.getElementById("userFacebook").innerHTML = currentUserFacebook;

    // We’re going in circles so maybe we should just stop. You’re going to keep saying I don’t do this and that, and I’m going to keep saying that you did this or that.

  });
