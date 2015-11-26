angular
  .module('example')
  .controller('Profile', function($scope) {

    var user = Parse.User.current();
    var userName = user.escape("username");
    var userId = user.id;
    var currentUserEmail = user.getEmail();
    var profilePictureURL = user.escape("profilePicture");
    var profilePicture = "<img class='userProfilePicture' src='" + profilePictureURL + "'>";

    var firstName;
    var lastName;
    var fullName;
    var bio;
    var teamNum;
    var classStatus;
    var primaryMajor;
    var doubleMajor;
    var primaryMinor;
    var doubleMinor;
    var academicInterests;
    var campusInvolement;
    var phoneNum;
    var personalEmail;
    var facebook;
    var twitter;
    var instagram;
    var roleTeam;

    document.getElementById("profilePicture").innerHTML = profilePicture;


    var userQuery = new Parse.Query(Parse.User);
    userQuery.equalTo(userId);  // find user's id
    userQuery.find({
      success: function(userInformation) {
        // Do stuff
        var user = Parse.User.current();
        firstName = user.get("firstName");
        lastName = user.get("lastName");
          fullName = firstName + " " + lastName;
        role = user.get("role");
        teamNum = user.get("userTeamNum");
          roleTeam = role + " - Team " + teamNum;
        classStatus = user.get("userClassStatus");
        bio = user.get("userBio");
        hometown = user.get("hometown");
        primaryMajor = user.get("userMajor");
        doubleMajor = user.get("userDoubleMajor");
        primaryMinor = user.get("userMinor");
        doubleMinor = user.get("userDoubleMinor");
        academicInterests = user.get("userAcademicInterests");
        campusInvolement = user.get("userCampusInvolvement");
        phoneNum = user.get("userPhoneNum");
        personalEmail = user.get("userPersonalEmail");
        facebook = user.get("userFacebook");
        twitter = user.get("userTwitter");
        instagram = user.get("userInstagram");

        if (doubleMajor !== undefined) {
          document.getElementById("doubleMajor").innerHTML = doubleMajor;
        } else { }
        if (primaryMinor !== undefined) {
          document.getElementById("primaryMinor").innerHTML = primaryMinor;
        } else { }
        if (doubleMinor !== undefined) {
          document.getElementById("doubleMinor").innerHTML = doubleMinor;
        } else { }

        document.getElementById("fullName").innerHTML = fullName;
        document.getElementById("bio").innerHTML = bio;
        // document.getElementById("hometown").innerHTML = hometown;
        document.getElementById("roleTeam").innerHTML = roleTeam;
        document.getElementById("classStatus").innerHTML = classStatus;
        document.getElementById("primaryMajor").innerHTML = primaryMajor;
        document.getElementById("academicInterests").innerHTML = academicInterests;
        document.getElementById("campusInvolement").innerHTML = campusInvolement;
        document.getElementById("phoneNum").innerHTML = phoneNum;
        document.getElementById("personalEmail").innerHTML = personalEmail;
        document.getElementById("facebook").innerHTML = facebook;
        document.getElementById("twitter").innerHTML = twitter;
        document.getElementById("instagram").innerHTML = instagram;

      },
      error: function(error) {
        supersonic.logger.info("error occurred when retrieving data");
      }
    });



    //switcher operation
    $scope.state = "ACADEMICS";

    // $scope.profilePersonal = function() {
    //   $scope.state = "PERSONAL";
    //   supersonic.logger.info("personal");
    // }
    $scope.profileAcademics = function() {
      $scope.state = "ACADEMICS";
      supersonic.logger.info("academics");
    }
    // $scope.profileContact = function() {
    //   $scope.state = "CONTACT";
    //   supersonic.logger.info("contact");
    // }
    $scope.profileConnect = function() {
      $scope.state = "CONNECT";
      supersonic.logger.info("connect");
    }

    //showing edit profile view and saving information
    $scope.editProfile = function(editProfile) {
      supersonic.logger.log("edit profile");
      var view = new supersonic.ui.View("example#edit-profile");
      supersonic.ui.layers.push(view);
    }



  });
