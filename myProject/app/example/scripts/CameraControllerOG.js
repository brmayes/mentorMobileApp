angular
  .module('example')
  .controller('CameraControllerOG', function($scope) {

    var user = Parse.User.current();
    var userId = Parse.User.current().id;
    var photosObject = Parse.Object.extend("photos");

    // $scope.takePicture = function(){
    //
    //   //bio
    //   //user.set("userProfileImg", $scope.bio);
    //
    //   //supersonic.alert("hello");
    //   supersonic.logger.info("getCamera called from btn");
    //
    //   var options = {
    //     quality: 50,
    //     allowEdit: true,
    //     targetWidth: 300,
    //     targetHeight: 300,
    //     encodingType: "png",
    //     //destinationType: "dataURL",
    //     saveToPhotoAlbum: true
    //   };
    //   supersonic.media.camera.takePicture(options).then( function(result){
    //     $scope.imageTaken = "data:image/png;base64," + result;
    //     // $scope.imageResult = result;
    //     //$scope.getElementsById('imageTaken').src = result;
    //     //alert($scope.imageTaken);
    //
    //     user.set("profilePicture", $scope.imageTaken);
    //     user.save(null, {
    //       success: function(user) {
    //         user.save();
    //         alert("User information updated!");
    //       },
    //       error: function (user, error) {
    //         alert("WOAH. Something went wrong! Try again?")
    //       }
    //     });
    //   });
    // }

    $scope.getFromPhotoLibrary = function(){

    var imgUpload;

      //supersonic.alert("hello");
      supersonic.logger.info("get from photo lib called from btn");

      var options = {
        quality: 50,
        allowEdit: true,
        targetWidth: 300,
        targetHeight: 300,
        encodingType: "png"
      };
      supersonic.media.camera.getFromPhotoLibrary(options).then(function(imgUpload){
        //do something with fileuri
        alert("got image file");
        var imgUploadURL = "data:image/png;base64," + imgUpload;
        supersonic.logger.info("imgUploadUrl = " + imgUploadURL);
        var fileName = userId + "profileImg.png";

        function encodeImageUri(imgUpload)
        {
             var c=document.createElement('canvas');
             var ctx=c.getContext("2d");
             var img=new Image();
             alert("variables created");
             img.onload = function(){
               c.width=this.width;
               c.height=this.height;
               ctx.drawImage(img, 0,0);
             };
             img.src=imageUri;
             var dataURL = c.toDataURL("image/jpeg");
             supersonic.logger.info(dataURL);
        }

        // var parseFile = new Parse.File(fileName, {base64:imgUploadURL}, "image/png");
        // supersonic.logger.info(parseFile);
        //var file = new Parse.File(imgUploadURL, fileData, "image/png");
        //var name = userId + "photo.png";
        //supersonic.logger.info("fkdlasjfskdaljfs");

          //var parseFile = new Parse.File(name, file);
          //supersonic.logger.info("put into parse file");

        // parseFile.save().then(function() {
        //   // The file has been saved to Parse.
        //   supersonic.logger.info("file saved");
        //   user.set("profilePicture", parseFile);
        //   user.save();
        //
        // }, function(error) {
        //   // The file either could not be read, or could not be saved to Parse.
        //   supersonic.logger.info(error);
        //   alert(error);
        // });

      });

    }



  });
