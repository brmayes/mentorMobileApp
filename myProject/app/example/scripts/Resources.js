angular
  .module('example')
  .controller('Resources', function($scope, supersonic) {
    //$scope.navbarTitle = "Settings";

    $(function() {
        var file;

        // Set an event listener on the Choose File field.
        $('#fileselect').bind("change", function(e) {
          var files = e.target.files || e.dataTransfer.files;
          // Our file var now holds the selected file
          file = files[0];
        });

        // This function is called when the user clicks on Upload to Parse. It will create the REST API request to upload this image to Parse.
        $('#uploadbutton').click(function() {
          var serverUrl = 'https://api.parse.com/1/files/' + file.name;

          $.ajax({
            type: "POST",
            beforeSend: function(request) {
              request.setRequestHeader("X-Parse-Application-Id", 'MK8MnXgy7qDuaFDkLLMGiel34LefFFFgXSLmPFS9');
              request.setRequestHeader("X-Parse-REST-API-Key", 'cH3CM14sPZVXSPrkE0ZV1SVJL4BhjRCYu0QYup0n');
              request.setRequestHeader("Content-Type", file.type);
            },
            url: serverUrl,
            data: file,
            processData: false,
            contentType: false,
            success: function(data) {
              alert("File available at: ", data.url);
              supersonic.logger.info(data.url);
            },
            error: function(data) {
              var obj = jQuery.parseJSON(data);
              prompt(obj.error);
            }
          });
        });


      });

  });
