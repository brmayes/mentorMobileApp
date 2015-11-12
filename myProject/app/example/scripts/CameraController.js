angular
  .module('example')
  .controller('CameraController', function($scope) {

    $scope.takePicture = function(){

      //supersonic.alert("hello");
      supersonic.logger.info("getCamera called from btn");

      var options = {
        quality: 50,
        allowEdit: false,
        targetWidth: 300,
        targetHeight: 300,
        encodingType: "png",
        //destinationType: "dataURL",
        saveToPhotoAlbum: true
      };
      supersonic.media.camera.takePicture(options).then( function(result){
        supersonic.ui.dialog.alert(result);
        //$scope.imageTaken = "data:image/jpeg;base64," + result;
        //$scope.imageResult = result;
        //$scope.getElementsById('imageTaken').src = result;
      });
    }

    $scope.getFromPhotoLibrary = function(){

      //supersonic.alert("hello");
      supersonic.logger.info("get from photo lib called from btn");

      var options = {
        quality: 50,
        allowEdit: false,
        targetWidth: 300,
        targetHeight: 300,
        encodingType: "png"
      };
      supersonic.media.camera.getFromPhotoLibrary(options).then( function(result){
        // Do something with the image URI
        alert(result);
      });

    }



  });
