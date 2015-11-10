angular
  .module('example')
  .controller('EditProfile', function($scope) {

    var currentUserName = Parse.User.current();
    var currentUserId = Parse.User.current().id;


    //creating user information for the first time
    var UserInformation = Parse.Object.extend("UserInformation");

    //creating a new instance
    var userInformation = new UserInformation();

    $scope.profileSave = function(editUserProfile) {

      supersonic.logger.log("save");
      alert("the function is running");

      userInformation.set("personal", "This is a little about me...");
      userInformation.set("facebook", $scope.facebook);
      userInformation.set("userName", currentUserName);
      userInformation.save(null, {
        success: function(userInformation) {
          // Find all data by the current user
          var query = new Parse.Query(UserInformation);
          query.equalTo("userName", currentUserName);
          query.find({
            success: function(usersData) {
              // userPosts contains all of the posts by the current user.

            }
          });
        }
      });

      var view = new supersonic.ui.View("example#temp-profile-display");
      supersonic.ui.layers.push(view);

    }

    $scope.profileUpdate = function(updateUserProfile) {
      var queryObject = new Parse.Query(UserInformation);

      queryObject.equalTo("userName", currentUserName);

      queryObject.find({
        success: function(usersData) {
          // userPosts contains all of the posts by the current user.
          if (usersData.length != 0) {
            supersonic.logger.log("user is in system");
          }
          else {
            supersonic.logger.log("user is not in system");
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

    //
    // var currentUserName = Parse.User.current().escape("username");
    // document.getElementById("userProfileName").innerHTML = currentUserName;
    //
    // var currentUserFacebook = Parse.User.current().escape("facebook");
    // document.getElementById("userFacebook").innerHTML = currentUserFacebook;

  });
