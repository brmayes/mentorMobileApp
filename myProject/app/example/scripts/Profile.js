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
    var hometownLabel;
    var classStatusLabel;
    var primaryMajorLabel;
    var doubleMajorLabel;
    var primaryMinorLabel;
    var doubleMinorLabel;
    var academicInterestsLabel;
    var campusInvolvementLabel;
    var phoneNumLabel;
    var personalEmailLabel;
    var facebookURLLabel;
    var twitterURLLabel;
    var instagramURLLabel;

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
          classStatusLabel = "Class status: " + classStatus;
        bio = user.get("userBio");
        hometown = user.get("hometown");
          hometownLabel = "Hometown: " + hometown;
        primaryMajor = user.get("userMajor");
          primaryMajorLabel = "Major: " + primaryMajor;
        doubleMajor = user.get("userDoubleMajor");
          doubleMajorLabel = "Double major: " + doubleMajor;
        primaryMinor = user.get("userMinor");
          primaryMinorLabel = "Minor: " + primaryMinor;
        doubleMinor = user.get("userDoubleMinor");
          doubleMinorLabel = "Double minor: " + doubleMinor;
        academicInterests = user.get("userAcademicInterests");
          academicInterestsLabel = "Academic interests: " + academicInterests;
        campusInvolvement = user.get("userCampusInvolvement");
          campusInvolvementLabel = "Campus involvement: " + campusInvolvement;
        phoneNum = user.get("userPhoneNum");
          phoneNumLabel = "Phone number: " + phoneNum;
        personalEmail = user.get("userPersonalEmail");
          personalEmailLabel = "Personal email: " + personalEmail;
        facebook = user.get("userFacebook");
          facebookURL = "<a href='http://facebook.com/" + facebook + "'>" + facebook + "</a>";
          facebookURLLabel = "Facebook: " + facebookURL;
        twitter = user.get("userTwitter");
          twitterURL = "<a href='http://twitter.com/" + twitter + "'>" + twitter + "</a>";
          twitterURLLabel = "Twitter: " + twitterURL;
        instagram = user.get("userInstagram");
          instagramURL = "<a href='http://instagram.com/" + instagram + "'>" + instagram + "</a>";
          instagramURLLabel = "Instagram: " + instagramURL;


        if (doubleMajor !== undefined) {
          document.getElementById("doubleMajor").innerHTML = doubleMajorLabel;
        } else { }
        if (primaryMinor !== undefined) {
          document.getElementById("primaryMinor").innerHTML = primaryMinorLabel;
        } else { }
        if (doubleMinor !== undefined) {
          document.getElementById("doubleMinor").innerHTML = doubleMinorLabel;
        } else { }

        document.getElementById("fullName").innerHTML = fullName;
        document.getElementById("bio").innerHTML = bio;
        document.getElementById("hometown").innerHTML = hometownLabel;
        document.getElementById("roleTeam").innerHTML = roleTeam;
        document.getElementById("classStatus").innerHTML = classStatusLabel;
        document.getElementById("primaryMajor").innerHTML = primaryMajorLabel;
        document.getElementById("academicInterests").innerHTML = academicInterestsLabel;
        document.getElementById("campusInvolvement").innerHTML = campusInvolvementLabel;
        document.getElementById("phoneNum").innerHTML = phoneNumLabel;
        document.getElementById("personalEmail").innerHTML = personalEmailLabel;
        document.getElementById("facebook").innerHTML = facebookURLLabel;
        document.getElementById("twitter").innerHTML = twitterURLLabel;
        document.getElementById("instagram").innerHTML = instagramURLLabel;

      },
      error: function(error) {
        supersonic.logger.info("Error occurred when retrieving data");
      }
    });



    //switcher operation
    $scope.state = "ACADEMICS";
    $scope.profileAcademics = function() {
      $scope.state = "ACADEMICS";
      supersonic.logger.info("academics");
      // document.getElementById('academicTab').style.color = 'red';
    }
    $scope.profileConnect = function() {
      $scope.state = "CONNECT";
      supersonic.logger.info("connect");
      // document.getElementById('connectTab').style.color = 'red';
    }

    //showing edit profile view and saving information
    $scope.editProfile = function(editProfile) {
      supersonic.logger.log("edit profile");
      var view = new supersonic.ui.View("example#edit-profile");
      supersonic.ui.layers.push(view);
    }

    // $scope.facebookModal = function(facebookModal) {
    //   var modalView = new supersonic.ui.View(facebookURL);
    //   var options = {
    //   animate: true
    //   }
    //   supersonic.ui.modal.show(modalView, options);
    // }




  });
