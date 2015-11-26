$(document).ready(function() {

  Parse.initialize("38bLIsdAdP98vzw2NGZvtOMpkz552xXnzgbKt0N8", "798JbLBs536hHWg5HaQjna6aitRMx10WUwSZZcWc");

	$("#newUserForm").on("submit", function(e) {
		e.preventDefault();

		console.log("Recieving data");

    var userName = document.getElementById("userName").value;
    var userPass = document.getElementById("userPass").value;
    var userEmail = document.getElementById("userEmail").value;
    var userRole = document.getElementById("userRole").value;

    var user = new Parse.User();
    user.set("username", userName);
    user.set("password", userPass);
    user.set("email", userEmail);
    user.set("role", userRole);

    user.signUp(null, {
      success: function(user) {
        alert("Done! Go to your inbox for verification.")
        console.log("Done")
        // Hooray! Let them use the app now.
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
        console.log("error")
      }
    });

	});

});
