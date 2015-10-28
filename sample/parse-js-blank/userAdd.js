Parse.initialize("38bLIsdAdP98vzw2NGZvtOMpkz552xXnzgbKt0N8", "798JbLBs536hHWg5HaQjna6aitRMx10WUwSZZcWc");

// var TestObject = Parse.Object.extend("TestObject");
// var testObject = new TestObject();
//   testObject.save({foo: "bar"}, {
//   success: function(object) {
//     $(".success").show();
//   },
//   error: function(model, error) {
//     $(".error").show();
//   }
// });


$(document).ready(function (userName, userPass, userEmail) {

  var user = new Parse.User();
  user.set("username", userName);
  user.set("password", userPass);
  user.set("email", userEmail);

  // other fields can be set just like with Parse.Object
  user.set("phone", "650-555-0000");

  user.signUp(null, {
    success: function(user) {
      // Hooray! Let them use the app now.
    },
    error: function(user, error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
  });

});
