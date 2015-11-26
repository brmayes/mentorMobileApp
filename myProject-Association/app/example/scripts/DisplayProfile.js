angular
  .module('example')
  .controller('DisplayProfile', function($scope) {

    var user = Parse.User.current();
    var currentUserId = Parse.User.current().id;
    var currentUserEmail = Parse.User.current().getEmail();
    var currentUserRole = Parse.User.current().get("role");

    var userBio = user.get("userBio");
    document.getElementById("userBiography").innerHTML = userBio;

  });
