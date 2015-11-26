angular
  .module('example')
  .controller('EditProfile', function($scope) {
    supersonic.logger.log("editProfile loaded");

    var currentUserName = Parse.User.current();

    // //bringing user's name, major and class in
    // var currentUserName = Parse.User.current().escape("username");
    // document.getElementById("userProfileName").innerHTML = currentUserName;
    //
    // var currentUserMajor = "Replace with major";
    // //Parse.User.current().escape("major");
    // document.getElementById("userProfileMajor").innerHTML = currentUserMajor;
    //
    // var currentUserClass = "Replace with class status"
    //   //Parse.User.current().escape("class");
    // document.getElementById("userProfileClass").innerHTML = currentUserClass;

    //creating a new subclass then registering sub class
    var UserData = Parse.Object.extend("UserData");
    Parse.Object.registerSubclass('UserData', UserData);

    //creating a new instance
    var userData = new UserData();

    $scope.profileSave = function(editUserProfile) {
      supersonic.logger.log("save");

      alert("the function is running");

      userData.set("facebook", $scope.facebook);
      //userData.set("facebook", "user facbook");

      userData.save(null, {
        success: function(userData) {
          // Execute any logic that should take place after the object is saved.
          alert('New object created with objectID: ' + userData.id);
        },
        error: function(userData, error) {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and message.
          alert('Failed to creat new object with error: ' + error.message);
        }
      });

      var view = new supersonic.ui.View("example#profile");
      supersonic.ui.layers.push(view);
    }





  });
