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
    var profilePicture;
    var profilePictureURL;

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
          classStatusLabel = "<span class='profileLabel'>Class status:</span> " + classStatus;
        bio = user.get("userBio");
        hometown = user.get("hometown");
          hometownLabel = "<span class='profileLabel'>Hometown:</span> " + hometown;
        primaryMajor = user.get("userMajor");
          primaryMajorLabel = "<span class='profileLabel'>Major:</span> " + primaryMajor;
        doubleMajor = user.get("userDoubleMajor");
          doubleMajorLabel = "<span class='profileLabel'>Double major:</span> " + doubleMajor;
        primaryMinor = user.get("userMinor");
          primaryMinorLabel = "<span class='profileLabel'>Minor:</span> " + primaryMinor;
        doubleMinor = user.get("userDoubleMinor");
          doubleMinorLabel = "<span class='profileLabel'>Double minor:</span> " + doubleMinor;
        academicInterests = user.get("userAcademicInterests");
          academicInterestsLabel = "<span class='profileLabel'>Academic interests:</span> " + academicInterests;
        campusInvolvement = user.get("userCampusInvolvement");
          campusInvolvementLabel = "<span class='profileLabel'>Campus involvement:</span> " + campusInvolvement;
        phoneNum = user.get("userPhoneNum");
          phoneNumLabel = "<span class='profileLabel'>Phone number:</span> " + phoneNum;
        personalEmail = user.get("userPersonalEmail");
          personalEmailLabel = "<span class='profileLabel'>Personal email:</span> " + personalEmail;
        facebook = user.get("userFacebook");
          facebookURL = "<a href='http://facebook.com/" + facebook + "'>" + facebook + "</a>";
          facebookURLLabel = "<span class='profileLabel'>Facebook:</span> " + facebookURL;
        twitter = user.get("userTwitter");
          twitterURL = "<a href='http://twitter.com/" + twitter + "'>" + twitter + "</a>";
          twitterURLLabel = "<span class='profileLabel'>Twitter:</span> " + twitterURL;
        instagram = user.get("userInstagram");
          instagramURL = "<a href='http://instagram.com/" + instagram + "'>" + instagram + "</a>";
          instagramURLLabel = "<span class='profileLabel'>Instagram:</span> " + instagramURL;
        profilePictureURL = user.get("profilePicture");
          profilePicture = "<img class='userProfilePicture' src='" + profilePictureURL + "'>";


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
        document.getElementById("profilePicture").innerHTML = profilePicture;


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
