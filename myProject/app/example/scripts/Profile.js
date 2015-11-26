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
    var linkedIn;
    var facebook;
    var twitter;
    var instagram;
    var snapChat;

    // document.getElementById("fullName").innerHTML = user;
    document.getElementById("profilePicture").innerHTML = profilePicture;
    //


    // var userQuery = new Parse.Query(Parse.User);
    // userQuery.equalTo(currentUserId);  // find user's id
    // userQuery.find({
    //   success: function(userInformation) {
    //     // Do stuff
    //     alert("information received");
    //     var user = Parse.User.current();
    //     firstName = user.get("userFirstName");
    //     lastName = user.get("userLastName");
    //       // fullName = firstName + " " + lastName;
    //     bio = user.get("userBio");
    //     teamNum = user.get("userTeamNum");
    //     classStatus = user.get("userClassStatus");
    //     primaryMajor = user.get("userMajor");
    //     doubleMajor = user.get("userDoubleMajor");
    //     primaryMinor = user.get("userMinor");
    //     doubleMinor = user.get("userDoubleMinor");
    //     academicInterests = user.get("userAcademicInterests");
    //     campusInvolement = user.get("userCampusInvolvement");
    //     phoneNum = user.get("userPhoneNum");
    //     personalEmail = user.get("userPersonalEmail");
    //     linkedIn = user.get("userLinkedIn");
    //     facebook = user.get("userFacebook");
    //     twitter = user.get("userTwitter");
    //     instagram = user.get("userInstagram");
    //     snapChat = user.get("userSnapChat");
    //
    //
    //     // document.getElementById("fullName").innerHTML = fullName;
    //     document.getElementById("bio").innerHTML = bio;
    //     document.getElementById("teamNum").innerHTML = teamNum;
    //     document.getElementById("classStatus").innerHTML = classStatus;
    //     document.getElementById("primaryMajor").innerHTML = primaryMajor;
    //     document.getElementById("doubleMajor").innerHTML = doubleMajor;
    //     document.getElementById("primaryMinor").innerHTML = primaryMinor;
    //     document.getElementById("doubleMinor").innerHTML = doubleMinor;
    //     document.getElementById("academicInterests").innerHTML = academicInterests;
    //     document.getElementById("campusInvolement").innerHTML = campusInvolement;
    //     document.getElementById("phoneNum").innerHTML = phoneNum;
    //     document.getElementById("personalEmail").innerHTML = personalEmail;
    //     document.getElementById("linkedIn").innerHTML = linkedIn;
    //     document.getElementById("facebook").innerHTML = facebook;
    //     document.getElementById("twitter").innerHTML = twitter;
    //     document.getElementById("instagram").innerHTML = instagram;
    //     document.getElementById("snapChat").innerHTML = snapChat;
    //
    //   },
    //   error: function(error) {
    //     supersonic.logger.info("error occurred when retrieving data");
    //   }
    // });



    //switcher operation
    $scope.state = "PERSONAL";

    $scope.profilePersonal = function() {
      $scope.state = "PERSONAL";
      supersonic.logger.info("personal");
    }
    $scope.profileAcademics = function() {
      $scope.state = "ACADEMICS";
      supersonic.logger.info("academics");
    }
    $scope.profileContact = function() {
      $scope.state = "CONTACT";
      supersonic.logger.info("contact");
    }
    $scope.profileConnect = function() {
      $scope.state = "CONNECT";
      supersonic.logger.info("connect");
    }

    //showing edit profile view and saving information
    $scope.editProfile = function(editProfile) {
      supersonic.logger.log("edit profile");
      //alert("edit pushed")
      var view = new supersonic.ui.View("example#edit-profile");
      supersonic.ui.layers.push(view);
    }



  });
